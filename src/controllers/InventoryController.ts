import net from "net";
import { bufferReader } from "../utils/bufferReader";

import { PacketResult } from "../protos/ts/_PacketCommand";
import {
    sc2sInventoryMergeReq,
    sc2sInventoryMoveReq,
    sc2sInventorySingleUpdateReq,
    sc2sInventorySplitMergeReq,
    sc2sInventorySplitMoveReq,
    sc2sInventorySplitSwapReq,
    sc2sInventorySwapReq,
    ss2cInventoryMergeRes,
    ss2cInventoryMoveRes,
    ss2cInventorySingleUpdateRes,
    ss2cInventorySplitMergeRes,
    ss2cInventorySplitMoveRes,
    ss2cInventorySplitSwapRes,
    ss2cInventorySwapRes,
} from "@/protos/ts/Inventory";
import {
    DefineItem_InventoryId,
    DefineMessage_UpdateFlag,
} from "@/protos/ts/_Defins";
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
        //

        let sourceDBItems = await Promise.all(
            oldItem.map(async (item) => {
                if (item.inventoryId === DefineItem_InventoryId.EQUIPMENT) {
                    return await db.inventory.findFirst({
                        where: {
                            id: item.itemUniqueId,
                            item_id: item.itemId,
                            character_id: lobbyUser.characterId!,
                            inventory_id: item.inventoryId,
                        },
                    });
                }

                return await db.inventory.findFirst({
                    where: {
                        slot_id: item.slotId,
                        item_id: item.itemId,
                        character_id: lobbyUser.characterId!,
                        inventory_id: item.inventoryId,
                    },
                });
            })
        );

        for (let index in oldItem) {
            const sourceReqItem = oldItem[index];
            let sourceDBItem = sourceDBItems[index];

            if (sourceReqItem && sourceDBItem) {
                sourceDBItem.item_count = Math.max(
                    0,
                    sourceDBItem.item_count - sourceReqItem.itemCount
                );

                sourceDBItem.item_contents_count = Math.max(
                    0,
                    sourceDBItem.item_contents_count -
                        sourceReqItem.itemContentsCount
                );

                sourceDBItem.item_ammo_count = Math.max(
                    0,
                    sourceDBItem.item_ammo_count - sourceReqItem.itemAmmoCount
                );

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

        let destDBItems = await Promise.all(
            newItem.map(async (item) => {
                return await db.inventory.findFirst({
                    where: {
                        slot_id: item.slotId,
                        item_id: item.itemId,
                        character_id: lobbyUser.characterId!,
                        inventory_id: item.inventoryId,
                        // id: item.itemUniqueId
                    },
                });
            })
        );

        for (let index in newItem) {
            //
            const destReqItem = newItem[index];
            let destDBItem = destDBItems[index];

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
                const newItem = await db.inventory.create({
                    data: {
                        item_id: destReqItem.itemId,
                        properties: JSON.stringify(
                            destReqItem.primaryPropertyArray || []
                        ),
                        secondary_properties: JSON.stringify(
                            destReqItem.secondaryPropertyArray || []
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

                res.newItem.push({
                    ...destReqItem,
                    itemUniqueId: newItem.id,
                });

                continue;
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

export const onInventorySplitMoveReq = async (
    data: Buffer,
    socket: net.Socket
) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sInventorySplitMoveReq.decode(bufferReader(data));

    if (!lobbyUser || !lobbyUser.userId) {
        return ss2cInventorySplitMoveRes.create({});
    }

    if (!req.srcInfo) {
        return ss2cInventorySplitMoveRes.create({});
    }

    const srcDbItem = await db.inventory.findFirst({
        where: {
            id: Number(req.srcInfo.uniqueId),
        },
    });

    await db.inventory.update({
        where: {
            id: Number(req.srcInfo.uniqueId),
        },
        data: {
            item_count: {
                decrement: req.count,
            },
        },
    });

    if (!srcDbItem) {
        logger.warn("onInventorySplitMoveReq: why no full response?");
        return ss2cInventorySplitMoveRes.create({});
    }

    const newItem = await db.inventory.create({
        data: {
            item_id: srcDbItem.item_id,
            properties: srcDbItem.properties,
            secondary_properties: srcDbItem.secondary_properties,
            character_id: lobbyUser.characterId!,
            slot_id: req.dstSlotId,
            inventory_id: req.dstInventoryId,
            item_count: req.count,
            item_contents_count: srcDbItem.item_contents_count,
            item_ammo_count: srcDbItem.item_ammo_count,
        },
    });

    return ss2cInventorySplitMoveRes.create({
        newInventoryId: newItem.inventory_id,
        newSlotId: newItem.slot_id,
        newUniqueId: newItem.id,
    });
};

export const onInventorySwapReq = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sInventorySwapReq.decode(bufferReader(data));

    if (!lobbyUser || !lobbyUser.userId) {
        return ss2cInventorySwapRes.create({});
    }

    if (!req.srcInfo) {
        return ss2cInventorySwapRes.create({});
    }

    await db.inventory.update({
        where: {
            id: Number(req.srcInfo.uniqueId),
        },
        data: {
            inventory_id: req.dstInfo?.inventoryId,
            slot_id: req.dstInfo?.slotId,
        },
    });

    for (let swapInfoEntry of req.swapInfos) {
        await db.inventory.update({
            where: {
                id: Number(swapInfoEntry.dstInfo?.uniqueId),
            },
            data: {
                inventory_id: swapInfoEntry.newInventoryId,
                slot_id: swapInfoEntry.newSlotId,
            },
        });
    }

    return ss2cInventorySwapRes.create({});
};

export const onInventorySplitSwapReq = async (
    data: Buffer,
    socket: net.Socket
) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sInventorySplitSwapReq.decode(bufferReader(data));

    if (!lobbyUser || !lobbyUser.userId) {
        return ss2cInventorySplitSwapRes.create({});
    }

    if (!req.srcInfo) {
        return ss2cInventorySplitSwapRes.create({});
    }

    const srcDbItem = await db.inventory.findFirst({
        where: {
            id: Number(req.srcInfo.uniqueId),
        },
    });

    await db.inventory.update({
        where: {
            id: Number(req.srcInfo.uniqueId),
        },
        data: {
            item_count: {
                decrement: req.count,
            },
        },
    });

    if (req.dstInfo) {
        try {
            await db.inventory.update({
                where: {
                    id: Number(req.dstInfo?.uniqueId),
                },
                data: {
                    inventory_id: req.newInventoryId,
                    slot_id: req.newSlotId,
                },
            });
        } catch (e) {
            logger.error("Failed to move dst in split swap");
            logger.error(e);
        }
    }

    if (srcDbItem && req.dstInfo) {
        const newItem = await db.inventory.create({
            data: {
                item_id: srcDbItem.item_id,
                properties: srcDbItem.properties,
                secondary_properties: srcDbItem.secondary_properties,
                character_id: lobbyUser.characterId!,
                slot_id: req.dstInfo?.slotId,
                inventory_id: req.dstInfo?.inventoryId,
                item_count: req.count,
                item_contents_count: srcDbItem.item_contents_count,
                item_ammo_count: srcDbItem.item_ammo_count,
            },
        });

        return ss2cInventorySplitSwapRes.create({
            newInventoryId: newItem.inventory_id,
            newSlotId: newItem.slot_id,
            newUniqueId: newItem.id,
        });
    }

    logger.warn("onInventorySplitSwapReq: why no full response?");

    return ss2cInventorySplitSwapRes.create({});
};

export const onInventoryMergeReq = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sInventoryMergeReq.decode(bufferReader(data));

    if (!lobbyUser || !lobbyUser.userId) {
        return ss2cInventoryMergeRes.create({});
    }

    if (!req.srcInfo) {
        return ss2cInventoryMergeRes.create({});
    }

    const srcDbItem = await db.inventory.findUnique({
        where: {
            id: Number(req.srcInfo.uniqueId),
        },
    });

    if (req.dstInfo && srcDbItem) {
        await db.inventory.update({
            where: {
                id: Number(req.dstInfo.uniqueId),
            },
            data: {
                item_count: {
                    increment: srcDbItem.item_count,
                },
                item_contents_count: {
                    increment: srcDbItem.item_contents_count,
                },
                item_ammo_count: {
                    increment: srcDbItem.item_ammo_count,
                },
            },
        });
    }

    await db.inventory.delete({
        where: {
            id: Number(req.srcInfo.uniqueId),
        },
    });

    return ss2cInventoryMergeRes.create({});
};

export const onInventorySplitMergeReq = async (
    data: Buffer,
    socket: net.Socket
) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sInventorySplitMergeReq.decode(bufferReader(data));

    if (!lobbyUser || !lobbyUser.userId) {
        return ss2cInventorySplitMergeRes.create({});
    }

    if (!req.srcInfo) {
        return ss2cInventorySplitMergeRes.create({});
    }

    await db.inventory.update({
        where: {
            id: Number(req.srcInfo.uniqueId),
        },
        data: {
            item_count: {
                decrement: req.count,
            },
        },
    });

    if (req.dstInfo) {
        await db.inventory.update({
            where: {
                id: Number(req.dstInfo.uniqueId),
            },
            data: {
                item_count: {
                    increment: req.count,
                },
            },
        });
    }

    return ss2cInventorySplitMergeRes.create({});
};
