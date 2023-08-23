//

import { Item } from "@/models/Item";
import { Merchant } from "@/models/Merchant";
import { EffectTypes } from "@/models/game/enums";
import {
  ItemQuality,
  Items,
  itemConfigToItemId,
} from "@/models/game/enums/Items";
import {
  MERCHANTS_IDS,
  MERCHANTS_IDS_TYPE,
  merchantIdToClient,
} from "@/models/game/enums/Merchant";
import { SItem } from "@/protos/ts/_Item";
import { smerchantInfo } from "@/protos/ts/Merchant";

export const allMerchants = [
  ...Object.values(MERCHANTS_IDS).map((merchantId) =>
    new Merchant().fromMerchantInfo(smerchantInfo.create({ merchantId }))
  ),
];

export const getMerchantBuyStockList = (merchantId: MERCHANTS_IDS_TYPE) => {
  switch (merchantId) {
    case "SURGEON":
    case "ALCHEMIST":
    case "WOODSMAN":
    case "VALENTINE":
    case "TAVERN_MASTER":
    case "PUMPKIN_MAN":
      return getMerchantStockListFromJSON(merchantId);

    default:
      return getMerchantStockListFromJSON("SURGEON");
  }
};

import MerchantConfig from "@/configs/MerchantConfig.json";

// const x = {
//     SURGEON: {
//         key: "SURGEON",
//         items: [
//             {
//                 id: 1,
//                 name: Items.BANDAGE,
//                 quality: ItemQuality.POOR,
//                 itemCount: 1,
//                 properties: [[EffectTypes.MOVESPEED, -20]],
//             },
//             {
//                 id: 2,
//                 name: Items.BANDAGE,
//                 quality: ItemQuality.COMMON,
//                 itemCount: 1,
//                 properties: [[EffectTypes.MOVESPEED, -20]],
//             },
//             {
//                 id: 3,
//                 name: Items.BANDAGE,
//                 quality: ItemQuality.POOR,
//                 itemCount: 3,
//                 properties: [[EffectTypes.MOVESPEED, -20]],
//             },
//             {
//                 id: 4,
//                 name: Items.BANDAGE,
//                 quality: ItemQuality.COMMON,
//                 itemCount: 3,
//                 properties: [[EffectTypes.MOVESPEED, -20]],
//             },
//             {
//                 id: 5,
//                 name: Items.WIZARD_STAFF,
//                 quality: ItemQuality.EPIC,
//                 properties: [
//                     [EffectTypes.MOVESPEED, -20],
//                     [EffectTypes.PHYSICAL_WEAPON_DAMAGE, 32],
//                 ],
//                 secondaryProperties: [
//                     [EffectTypes.SPELL_CAPACITY_ADD, 2],
//                     [EffectTypes.SPELL_CAPACITY_BONUS, 51],
//                     [EffectTypes.SPELL_CASTING_SPEED, 16],
//                 ],
//             },
//             {
//                 id: 6,
//                 name: Items.DOUBLET,
//                 quality: ItemQuality.EPIC,
//                 properties: [
//                     [EffectTypes.ARMOR_RATING, 27],
//                     [EffectTypes.MOVESPEED, -8],
//                 ],
//                 secondaryProperties: [
//                     [EffectTypes.MAGICAL_DAMAGE_REDUCTION, 36],
//                     [EffectTypes.MAGIC_REGISTANCE, 10],
//                     [EffectTypes.PHYSICAL_POWER, 2],
//                 ],
//             },
//             {
//                 id: 7,
//                 name: Items.ORACLE_ROBE,
//                 quality: ItemQuality.EPIC,
//                 properties: [
//                     [EffectTypes.ARMOR_RATING, 30],
//                     [EffectTypes.KNOWLEDGE, 1],
//                     [EffectTypes.MOVESPEED, -5],
//                 ],
//                 secondaryProperties: [
//                     [EffectTypes.SPELL_CAPACITY_ADD, 2],
//                     [EffectTypes.MOVESPEED_BONUS, 13],
//                     [EffectTypes.PHYSICAL_DAMAGE_BONUS, 48],
//                 ],
//             },
//             {
//                 id: 5,
//                 name: Items.QUARTERSTAFF,
//                 quality: ItemQuality.EPIC,
//                 properties: [
//                     [EffectTypes.MOVESPEED, -35],
//                     [EffectTypes.PHYSICAL_WEAPON_DAMAGE, 41],
//                 ],
//                 secondaryProperties: [
//                     [EffectTypes.MOVESPEED_BONUS, 14],
//                     [EffectTypes.RESOURCEFULNESS, 1],
//                     [EffectTypes.MOVESPEED_ADD, 3],
//                 ],
//             },
//         ],
//     },
// };

export const getMerchantStockListFromJSON = (
  merchantKey: MERCHANTS_IDS_TYPE
) => {
  const items = (MerchantConfig as any)[merchantKey].items;
  const merchantName = merchantIdToClient(merchantKey).split("_").pop();

  return items.map((merchantItem: any, index: number) => ({
    stockBuyId: `DesignDataStockBuy:Id_StockBuy_${merchantName}_0${merchantItem.id}`,
    stockUniqueId: merchantItem.id,
    itemInfo: Item.fromSItem(
      SItem.create({
        itemUniqueId: merchantItem.id,
        itemId: itemConfigToItemId(
          merchantItem.name as any,
          merchantItem.quality as any
        ),
        itemCount: merchantItem.itemCount,
        inventoryId: 0,
        slotId: 0,
        itemAmmoCount: 0,
        itemContentsCount: 0,
        primaryPropertyArray: (merchantItem.properties || []).map(
          (property: [string, number]) => {
            return {
              propertyTypeId: (EffectTypes as any)[property[0]],
              propertyValue: property[1] as number,
            };
          }
        ),
        secondaryPropertyArray: (merchantItem.secondaryProperties || []).map(
          (property: [string, number]) => {
            return {
              propertyTypeId: (EffectTypes as any)[property[0]],
              propertyValue: property[1] as number,
            };
          }
        ),
      })
    ),
  }));
};
