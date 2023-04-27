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
import { SItem } from "@/protos/_Item";
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
            return getMerchantStockListFromJSON(merchantId);

        default:
            return getMerchantStockListFromJSON("SURGEON");
    }
};

import MerchantConfig from "@/configs/MerchantConfig.json";


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
                secondaryPropertyArray: (
                    merchantItem.secondaryProperties || []
                ).map((property: [string, number]) => {
                    return {
                        propertyTypeId: (EffectTypes as any)[property[0]],
                        propertyValue: property[1] as number,
                    };
                }),
            })
        ),
    }));
};
