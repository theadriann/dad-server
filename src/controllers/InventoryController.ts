import net from "net";
import { bufferReader } from "../utils/bufferReader";

import { PacketResult } from "../protos/ts/_PacketCommand";
import {
    sc2sInventorySingleUpdateReq,
    ss2cInventorySingleUpdateRes,
} from "@/protos/ts/Inventory";
import { DefineMessage_UpdateFlag } from "@/protos/ts/_Defins";
import { lobbyState } from "@/state/LobbyManager";
import { db } from "@/services/db";
import { Item } from "@/models/Item";
import { logger } from "@/utils/loggers";

export const singleInventoryUpdate = async (
    data: Buffer,
    socket: net.Socket
) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sInventorySingleUpdateReq.decode(bufferReader(data));

    let res = ss2cInventorySingleUpdateRes.create({});

    console.log(req);

    if (!lobbyUser || !lobbyUser.userId) {
        res.result = PacketResult.FAIL_GENERAL;
        return res;
    }

    const oldItem = req.oldItem;
    const newItem = req.newItem;
    const updateFlag: DefineMessage_UpdateFlag = req.singleUpdateFlag;

    // moving items
    if (updateFlag === DefineMessage_UpdateFlag.NONE_UPDATE_FLAG) {
        for (let index in oldItem) {
            const sourceReqItem = oldItem[index];
            const destReqItem = newItem[index];

            if (!destReqItem) {
                continue;
            }

            let sourceDBItem = await db.inventory.findFirst({
                where: {
                    character_id: lobbyUser.characterId!,
                    slot_id: sourceReqItem.slotId,
                    inventory_id: sourceReqItem.inventoryId,
                },
            });

            let destDBItem = await db.inventory.findFirst({
                where: {
                    character_id: lobbyUser.characterId!,
                    slot_id: destReqItem.slotId,
                    inventory_id: destReqItem.inventoryId,
                    // id: destReqItem.itemUniqueId
                },
            });

            if (!sourceDBItem) {
                continue;
            }

            if (!destDBItem) {
                sourceDBItem = await db.inventory.update({
                    where: {
                        id: sourceReqItem.itemUniqueId,
                    },
                    data: {
                        slot_id: destReqItem.slotId,
                        inventory_id: destReqItem.inventoryId,
                    },
                });

                res.oldItem.push(sourceReqItem);
                // res.newItem.push(Item.fromDB(sourceDBItem).toJSON());
                // same stuff
                res.newItem.push(destReqItem);
                continue;
            }

            let srcItem = Item.fromDB(sourceDBItem);
            let destItem = Item.fromDB(destDBItem);

            const addedItemCount = srcItem.itemCount + destItem.itemCount;

            if (addedItemCount > destItem.getMaxCount()) {
                const remaining = addedItemCount - destItem.getMaxCount();

                srcItem = Item.fromDB(
                    await db.inventory.update({
                        where: {
                            id: srcItem.id,
                        },
                        data: {
                            item_count: remaining,
                        },
                    })
                );
            } else {
                await db.inventory.delete({
                    where: {
                        id: srcItem.id,
                    },
                });
            }

            destDBItem = await db.inventory.update({
                where: {
                    id: destDBItem.id,
                },
                data: {
                    item_count: Math.min(
                        addedItemCount,
                        destItem.getMaxCount()
                    ),
                },
            });

            res.oldItem.push(sourceReqItem);
            res.newItem.push(destReqItem);
            // res.newItem.push(Item.fromDB(destDBItem).toJSON());

            // return ss2cInventorySingleUpdateRes.create({
            //     result: PacketResult.SUCCESS,
            //     oldItem: source,
            // });
        }
    } else {
        res.newItem = newItem;
        res.oldItem = oldItem;
    }

    res.result = PacketResult.SUCCESS;

    logger.info("singleInventoryUpdateRes");
    logger.info(res);

    return res;
};
