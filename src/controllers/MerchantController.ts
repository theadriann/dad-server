import net from "net";
import { lobbyState } from "@/state/LobbyManager";
import {
    sc2sMerchantStockBuyItemListReq,
    sc2sMerchantStockBuyReq,
    sc2sMerchantStockSellBackItemListReq,
    smerchantStockBuyItemInfo,
    smerchantStockSellBackItemInfo,
    ss2cMerchantListRes,
    ss2cMerchantStockBuyItemListRes,
    ss2cMerchantStockBuyRes,
    ss2cMerchantStockSellBackItemListRes,
} from "@/protos/ts/Merchant";
import { allMerchants, getMerchantBuyStockList } from "@/lib/merchants";
import { bufferReader } from "@/utils/bufferReader";
import {
    DefineEquipment_SlotId,
    DefineItem_InventoryId,
    DefineMessage_LoopFlag,
} from "@/protos/ts/_Defins";
import { PacketResult } from "@/protos/ts/_PacketCommand";
import { Items } from "@/models/game/enums/Items";
import { Item } from "@/models/Item";
import { merchantIdFromClient } from "@/models/game/enums/Merchant";
import { db } from "@/services/db";
import { SItem } from "@/protos/ts/_Item";
import { Inventory } from "@prisma/client";

export const getMerchantList = async (data: Buffer, socket: net.Socket) => {
    // const lobbyUser = lobbyState.getBySocket(socket);
    // const req = sc2sMerchantListReq.decode(bufferReader(data));

    return ss2cMerchantListRes.create({
        merchantList: allMerchants.map((merchant) => merchant.toMerchantInfo()),
    });
};

export const getMerchantBuyList = async (data: Buffer, socket: net.Socket) => {
    // const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sMerchantStockBuyItemListReq.decode(bufferReader(data));
    const merchantId = req.merchantId;

    return [
        ss2cMerchantStockBuyItemListRes.create({
            result: PacketResult.SUCCESS,
            loopMessageFlag: DefineMessage_LoopFlag.BEGIN,
        }),
        ss2cMerchantStockBuyItemListRes.create({
            result: PacketResult.SUCCESS,
            loopMessageFlag: DefineMessage_LoopFlag.PROGRESS,
            stockList: [
                ...getMerchantBuyStockList(
                    merchantIdFromClient(merchantId) as any
                ).map((stockItem: any) => {
                    return smerchantStockBuyItemInfo.create({
                        stockBuyId: stockItem.stockBuyId,
                        stockUniqueId: stockItem.stockUniqueId,
                        itemInfo: stockItem.itemInfo.toSItem(),
                    });
                }),
            ],
        }),
        ss2cMerchantStockBuyItemListRes.create({
            result: PacketResult.SUCCESS,
            loopMessageFlag: DefineMessage_LoopFlag.END,
        }),
    ];
};

export const getMerchantSellList = async (data: Buffer, socket: net.Socket) => {
    // const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sMerchantStockSellBackItemListReq.decode(bufferReader(data));
    const merchantId = req.merchantId;

    return [
        ss2cMerchantStockSellBackItemListRes.create({
            result: PacketResult.SUCCESS,
            loopMessageFlag: DefineMessage_LoopFlag.BEGIN,
        }),
        ss2cMerchantStockSellBackItemListRes.create({
            result: PacketResult.SUCCESS,
            loopMessageFlag: DefineMessage_LoopFlag.PROGRESS,
            stockList: [
                smerchantStockSellBackItemInfo.create({
                    stockSellBackId:
                        "DesignDataStockSellBack:Id_StockSellBack_Weaponsmith",
                    stockUniqueId: 215,
                }),
            ],
        }),
        ss2cMerchantStockSellBackItemListRes.create({
            result: PacketResult.SUCCESS,
            loopMessageFlag: DefineMessage_LoopFlag.END,
        }),
    ];
};

export const buyMerchantItem = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sMerchantStockBuyReq.decode(bufferReader(data));

    if (!lobbyUser?.characterId) {
        return ss2cMerchantStockBuyRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    for (let item of req.dealItemList) {
        //
        const targetDBItem = await db.inventory.findFirst({
            where: {
                id: item.itemUniqueId,
            },
        });

        if (!targetDBItem) {
            return ss2cMerchantStockBuyRes.create({
                result: PacketResult.FAIL_GENERAL,
            });
        }

        const targetItem = Item.fromDB(targetDBItem);

        const keys = [
            { db_key: "item_contents_count", item_key: "itemContentsCount" },
            { db_key: "item_count", item_key: "itemCount" },
        ];

        for (let key of keys) {
            if (!(item as any)[key.item_key]) {
                continue;
            }

            if (
                (targetItem as any)[key.item_key] > (item as any)[key.item_key]
            ) {
                await db.inventory.update({
                    where: {
                        id: item.itemUniqueId,
                    },
                    data: {
                        [key.db_key]:
                            (targetItem as any)[key.item_key] -
                            (item as any)[key.item_key],
                    },
                });
            } else {
                await db.inventory.delete({
                    where: {
                        id: item.itemUniqueId,
                    },
                });
            }
        }
    }

    for (let item of req.merchantSlotInfo) {
        await addItemToDb(
            {
                ...Item.fromSItem(
                    SItem.create({
                        inventoryId: item.inventoryId,
                        slotId: item.slotId,
                        itemId: item.itemId,
                        itemCount: item.itemCount,
                        itemContentsCount: item.itemContentsCount,
                    })
                ).toDB(),
                character_id: lobbyUser.characterId,
            } as any,
            {
                useAddition: true,
            }
        );
    }

    return ss2cMerchantStockBuyRes.create({
        result: PacketResult.SUCCESS,
    });
};

const addItemToDb = async (
    itemDB: Inventory,
    options: {
        useAddition: boolean;
    }
) => {
    const existingItem = await db.inventory.findFirst({
        where: {
            character_id: itemDB.character_id,
            inventory_id: itemDB.inventory_id,
            slot_id: itemDB.slot_id,
        },
    });

    if (!existingItem) {
        return await db.inventory.create({
            data: itemDB,
        });
    }

    if (existingItem.item_id == itemDB.item_id && options.useAddition) {
        return await db.inventory.update({
            where: {
                id: existingItem.id,
            },
            data: {
                item_count: existingItem.item_count + itemDB.item_count,
                item_contents_count:
                    existingItem.item_contents_count +
                    itemDB.item_contents_count,
                item_ammo_count:
                    existingItem.item_ammo_count + itemDB.item_ammo_count,
            },
        });
    }
};
