import {
    DefineEquipment_SlotId,
    DefineItem_InventoryId,
} from "@/protos/ts/_Defins";
import { SItem } from "@/protos/ts/_Item";
import { Items } from "@/models/game/enums/Items";
import { Item } from "@/models/Item";

export const generateStackOfGoldCoins = (amount: number) => {
    return Item.fromSItem(
        SItem.create({
            inventoryId: DefineItem_InventoryId.STORAGE,
            itemCount: Math.max(Math.min(amount, 20), 1),
            itemId: Items.GOLD_COINS.NONE,
            primaryPropertyArray: [],
            slotId: DefineEquipment_SlotId.NONE,
        })
    );
};

export const generateStackOfGoldCoinPurse = (amount: number) => {
    return Item.fromSItem(
        SItem.create({
            inventoryId: DefineItem_InventoryId.STORAGE,
            itemCount: 1,
            itemContentsCount: Math.max(Math.min(amount, 100), 1),
            itemId: Items.GOLD_COIN_PURSE.NONE,
            primaryPropertyArray: [],
            slotId: DefineEquipment_SlotId.NONE,
        })
    );
};
