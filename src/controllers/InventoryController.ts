import net from "net";
import { bufferReader } from "../utils/bufferReader";

import { PacketResult } from "../protos/ts/_PacketCommand";
import {
    sc2sInventoryMoveReq,
    sc2sInventorySingleUpdateReq,
    ss2cInventoryMoveRes,
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

            let sourceDBItem = await db.inventory.findFirst({
                where: {
                    character_id: lobbyUser.characterId!,
                    slot_id: sourceReqItem.slotId,
                    inventory_id: sourceReqItem.inventoryId,
                },
            });

            if (sourceReqItem && sourceDBItem) {
                sourceDBItem.item_count -= sourceReqItem.itemCount;
                sourceDBItem.item_contents_count -=
                    sourceReqItem.itemContentsCount;
                sourceDBItem.item_ammo_count -= sourceReqItem.itemAmmoCount;

                if (sourceDBItem.item_count <= 0) {
                    await db.inventory.delete({
                        where: {
                            id: sourceDBItem.id,
                        },
                    });
                } else {
                    await db.inventory.update({
                        where: {
                            id: sourceDBItem.id,
                        },
                        data: {
                            item_count: sourceDBItem.item_count,
                            item_contents_count:
                                sourceDBItem.item_contents_count,
                            item_ammo_count: sourceDBItem.item_ammo_count,
                        },
                    });
                }
            }

            res.oldItem.push(sourceReqItem);
        }

        for (let index in newItem) {
            //
            const destReqItem = newItem[index];

            let destDBItem = await db.inventory.findFirst({
                where: {
                    character_id: lobbyUser.characterId!,
                    slot_id: destReqItem.slotId,
                    inventory_id: destReqItem.inventoryId,
                    // id: destReqItem.itemUniqueId
                },
            });

            if (destReqItem && destDBItem) {
                destDBItem.item_count += destReqItem.itemCount;
                destDBItem.item_contents_count += destReqItem.itemContentsCount;
                destDBItem.item_ammo_count += destReqItem.itemAmmoCount;

                await db.inventory.update({
                    where: {
                        id: destDBItem.id,
                    },
                    data: {
                        item_count: destDBItem.item_count,
                        item_contents_count: destDBItem.item_contents_count,
                        item_ammo_count: destDBItem.item_ammo_count,
                    },
                });
            } else if (destReqItem) {
                await db.inventory.create({
                    data: {
                        item_id: destReqItem.itemId,
                        properties: JSON.stringify(
                            destReqItem.primaryPropertyArray || []
                        ),
                        character_id: lobbyUser.characterId!,
                        slot_id: destReqItem.slotId,
                        inventory_id: destReqItem.inventoryId,
                        item_count: destReqItem.itemCount,
                        item_contents_count: destReqItem.itemContentsCount,
                        item_ammo_count: destReqItem.itemAmmoCount,
                        id: undefined,
                    },
                });
            }

            res.newItem.push(destReqItem);
        }
    } else {
        res.newItem = newItem;
        res.oldItem = oldItem;
    }

    res.result = PacketResult.SUCCESS;

    return res;
};

export const onInventoryMoveReq = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sInventoryMoveReq.decode(bufferReader(data));

    if (!lobbyUser || !lobbyUser.userId) {
        return ss2cInventoryMoveRes.create({});
    }

    if (!req.srcInfo) {
        return ss2cInventoryMoveRes.create({});
    }

    // TODO: check if item is user's

    await db.inventory.update({
        where: {
            id: Number(req.srcInfo.uniqueId),
        },
        data: {
            inventory_id: req.dstInventoryId,
            slot_id: req.dstSlotId,
        },
    });

    return ss2cInventoryMoveRes.create({});
};
