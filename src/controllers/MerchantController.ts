import net from "net";
import { lobbyState } from "@/state/LobbyManager";
import {
    sc2sMerchantStockBuyItemListReq,
    sc2sMerchantStockSellBackItemListReq,
    smerchantStockBuyItemInfo,
    smerchantStockSellBackItemInfo,
    ss2cMerchantListRes,
    ss2cMerchantStockBuyItemListRes,
    ss2cMerchantStockSellBackItemListRes,
} from "@/protos/ts/Merchant";
import { allMerchants } from "@/lib/merchants";
import { bufferReader } from "@/utils/bufferReader";
import {
    DefineEquipment_SlotId,
    DefineItem_InventoryId,
    DefineMessage_LoopFlag,
} from "@/protos/ts/_Defins";
import { PacketResult } from "@/protos/ts/_PacketCommand";
import { Items } from "@/models/game/enums/Items";
import { Item } from "@/models/Item";

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
                smerchantStockBuyItemInfo.create({
                    stockBuyId: "DesignDataStockBuy:Id_StockBuy_Alchemist_01",
                    stockUniqueId: 1,
                    itemInfo: Item.fromJSON({
                        inventoryId: DefineItem_InventoryId.NONE,
                        slotId: DefineEquipment_SlotId.NONE,
                        itemId: Items.BANDAGE.COMMON,
                        itemCount: 1,
                        primaryPropertyArray: [],
                    })
                        .assignTempId()
                        .toJSON(),
                }),
                smerchantStockBuyItemInfo.create({
                    stockBuyId: "DesignDataStockBuy:Id_StockBuy_Alchemist_02",
                    stockUniqueId: 2,
                    itemInfo: Item.fromJSON({
                        inventoryId: DefineItem_InventoryId.NONE,
                        slotId: DefineEquipment_SlotId.NONE,
                        itemId: Items.BANDAGE.UNCOMMON,
                        itemCount: 1,
                        primaryPropertyArray: [],
                    })
                        .assignTempId()
                        .toJSON(),
                }),
                smerchantStockBuyItemInfo.create({
                    stockBuyId: "DesignDataStockBuy:Id_StockBuy_Alchemist_03",
                    stockUniqueId: 3,
                    itemInfo: Item.fromJSON({
                        inventoryId: DefineItem_InventoryId.NONE,
                        slotId: DefineEquipment_SlotId.NONE,
                        itemId: Items.BANDAGE.COMMON,
                        itemCount: 3,
                        primaryPropertyArray: [],
                    })
                        .assignTempId()
                        .toJSON(),
                }),
                smerchantStockBuyItemInfo.create({
                    stockBuyId: "DesignDataStockBuy:Id_StockBuy_Alchemist_04",
                    stockUniqueId: 4,
                    itemInfo: Item.fromJSON({
                        inventoryId: DefineItem_InventoryId.NONE,
                        slotId: DefineEquipment_SlotId.NONE,
                        itemId: Items.BANDAGE.UNCOMMON,
                        itemCount: 3,
                        primaryPropertyArray: [],
                    })
                        .assignTempId()
                        .toJSON(),
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
