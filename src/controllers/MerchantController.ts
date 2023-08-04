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
import { allMerchants, getMerchantBuyStockList } from "@/generators/merchants";
import { bufferReader } from "@/utils/bufferReader";
import { DefineMessage_LoopFlag } from "@/protos/ts/_Defins";
import { PacketResult } from "@/protos/ts/_PacketCommand";
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
        ...getMerchantBuyStockList(merchantIdFromClient(merchantId) as any).map(
          (stockItem: any) => {
            return smerchantStockBuyItemInfo.create({
              stockBuyId: stockItem.stockBuyId, // TODO: Data -> Generated -> V2 -> Merchant -> StockBuy
              stockUniqueId: stockItem.stockUniqueId,
              itemInfo: stockItem.itemInfo.toSItem(),
            });
          }
        ),
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
            "DesignDataStockSellBack:Id_StockSellBack_Weaponsmith", // TODO: Data -> Generated -> V2 -> Merchant -> StockSellBack
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

export const buyMerchantItemStart = async (
  data: Buffer,
  socket: net.Socket,
  prevResponses?: any[]
) => {
  const lobbyUser = lobbyState.getBySocket(socket);
  const req = sc2sMerchantStockBuyReq.decode(bufferReader(data));

  if (!lobbyUser?.characterId) {
    return ss2cMerchantStockBuyRes.create({
      result: PacketResult.FAIL_GENERAL,
    });
  }

  for (let item of req.dealItemList) {
    //
    const dbItem = await db.inventory.findFirst({
      where: {
        id: item.itemUniqueId,
      },
    });

    if (!dbItem) {
      return ss2cMerchantStockBuyRes.create({
        result: PacketResult.FAIL_GENERAL,
      });
    }

    dbItem.item_count -= item.itemCount;
    dbItem.item_contents_count -= item.itemContentsCount;

    if (dbItem.item_count <= 0) {
      await db.inventory.delete({
        where: {
          id: dbItem.id,
        },
      });
    } else {
      await db.inventory.update({
        where: {
          id: dbItem.id,
        },
        data: {
          item_count: dbItem.item_count,
          item_contents_count: dbItem.item_contents_count,
        },
      });
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

export const buyMerchantItemEnd = async (
  data: Buffer,
  socket: net.Socket,
  prevResponses?: any[]
) => {
  //
  const firstReponse = prevResponses?.[0];

  return (
    firstReponse ||
    ss2cMerchantStockBuyRes.create({
      result: PacketResult.FAIL_GENERAL,
    })
  );
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
          existingItem.item_contents_count + itemDB.item_contents_count,
        item_ammo_count: existingItem.item_ammo_count + itemDB.item_ammo_count,
      },
    });
  }
};
