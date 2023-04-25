import { EffectTypes } from "@/models/game/enums";
import { SItemProperty } from "../../protos/_Item";
import {
    DefineEquipment_SlotId,
    DefineItem_InventoryId,
} from "../../protos/ts/_Defins";
import { SItem } from "../../protos/ts/_Item";
import { Items } from "@/models/game/enums/Items";
import {
    CharacterClassKey,
    CharacterClassKeys,
} from "@/models/game/enums/CharacterClass";
import { Item } from "@/models/Item";

// export enum DefineEquipment_SlotId {
//     NONE = 0,
//     HEAD = 1,
//     CHEST = 2,
//     HANDS = 3,
//     LEGS = 4,
//     FOOT = 5,
//     BELT_A = 6,
//     BELT_B = 7,
//     UTILITY_A_1 = 8,
//     UTILITY_B_1 = 9,
//     PRIMARY_A = 10,
//     SECONDARY_A = 11,
//     PRIMARY_B = 12,
//     SECONDARY_B = 13,
//     UTILITY_A_2 = 14,
//     UTILITY_A_3 = 15,
//     UTILITY_B_2 = 16,
//     UTILITY_B_3 = 17,
//     SOULHEART = 18,
//     NECKLACE = 19,
//     RING_A = 20,
//     RING_B = 21,
//     BACK = 22,
//     UNRECOGNIZED = -1,
//   }

export const generateFighterStartItems = () => {
    return [
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.EQUIPMENT,
            slotId: DefineEquipment_SlotId.PRIMARY_A,
            itemId: Items.ARMING_SWORD.RARE,
            itemCount: 1,
            primaryPropertyArray: [
                SItemProperty.create({
                    propertyTypeId: EffectTypes.MOVESPEED,
                    propertyValue: -20,
                }),

                SItemProperty.create({
                    propertyTypeId: EffectTypes.PHYSICAL_WEAPON_DAMAGE,
                    propertyValue: 23,
                }),
            ],
        }),
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.EQUIPMENT,
            slotId: DefineEquipment_SlotId.SECONDARY_A,
            itemId: Items.ROUND_SHIELD.JUNK,
            itemCount: 1,
            primaryPropertyArray: [
                SItemProperty.create({
                    propertyTypeId: EffectTypes.ARMOR_RATING,
                    propertyValue: 13,
                }),

                SItemProperty.create({
                    propertyTypeId: EffectTypes.MOVESPEED,
                    propertyValue: -12,
                }),
            ],
        }),
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.EQUIPMENT,
            slotId: DefineEquipment_SlotId.CHEST,
            itemId: Items.ADVENTURER_TUNIC.JUNK,
            itemCount: 1,
            primaryPropertyArray: [
                SItemProperty.create({
                    propertyTypeId: EffectTypes.ARMOR_RATING,
                    propertyValue: 41,
                }),

                SItemProperty.create({
                    propertyTypeId: EffectTypes.MOVESPEED,
                    propertyValue: -5,
                }),
            ],
        }),
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.EQUIPMENT,
            slotId: DefineEquipment_SlotId.LEGS,
            itemId: Items.CLOTH_PANTS.JUNK,
            itemCount: 1,
            primaryPropertyArray: [
                SItemProperty.create({
                    propertyTypeId: EffectTypes.ARMOR_RATING,
                    propertyValue: 8,
                }),

                SItemProperty.create({
                    propertyTypeId: EffectTypes.MOVESPEED,
                    propertyValue: -5,
                }),
            ],
        }),
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.EQUIPMENT,
            slotId: DefineEquipment_SlotId.UTILITY_A_2,
            itemId: Items.BANDAGE.JUNK,
            itemCount: 1,
            primaryPropertyArray: [
                SItemProperty.create({
                    propertyTypeId: EffectTypes.MOVESPEED,
                    propertyValue: -20,
                }),
            ],
        }),
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.EQUIPMENT,
            slotId: DefineEquipment_SlotId.UTILITY_A_1,
            itemId: Items.LANTERN.JUNK,
            itemCount: 1,
            primaryPropertyArray: [
                SItemProperty.create({
                    propertyTypeId: EffectTypes.MOVESPEED,
                    propertyValue: -10,
                }),

                SItemProperty.create({
                    propertyTypeId: EffectTypes.PHYSICAL_WEAPON_DAMAGE,
                    propertyValue: 13,
                }),
            ],
        }),
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.EQUIPMENT,
            slotId: DefineEquipment_SlotId.SECONDARY_B,
            itemId: Items.TORCH.JUNK,
            itemCount: 1,
            primaryPropertyArray: [
                SItemProperty.create({
                    propertyTypeId: EffectTypes.PHYSICAL_WEAPON_DAMAGE,
                    propertyValue: 15,
                }),

                SItemProperty.create({
                    propertyTypeId: EffectTypes.MOVESPEED,
                    propertyValue: -12,
                }),
            ],
        }),
    ];
};

export const generateRangerStartItems = () => {
    return [
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.EQUIPMENT,
            slotId: DefineEquipment_SlotId.PRIMARY_A,
            itemId: Items.RECURVE_BOW.JUNK,
            itemCount: 1,
            primaryPropertyArray: [],
        }),
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.EQUIPMENT,
            slotId: DefineEquipment_SlotId.SECONDARY_B,
            itemId: Items.SHORT_SWORD.JUNK,
            itemCount: 1,
            primaryPropertyArray: [],
        }),
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.EQUIPMENT,
            slotId: DefineEquipment_SlotId.HEAD,
            itemId: Items.RANGER_HOOD.JUNK,
            itemCount: 1,
            primaryPropertyArray: [],
        }),
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.EQUIPMENT,
            slotId: DefineEquipment_SlotId.CHEST,
            itemId: Items.DOUBLET.JUNK,
            itemCount: 1,
            primaryPropertyArray: [],
        }),
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.EQUIPMENT,
            slotId: DefineEquipment_SlotId.LEGS,
            itemId: Items.CLOTH_PANTS.JUNK,
            itemCount: 1,
            primaryPropertyArray: [],
        }),
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.EQUIPMENT,
            slotId: DefineEquipment_SlotId.UTILITY_A_2,
            itemId: Items.BANDAGE.JUNK,
            itemCount: 1,
            primaryPropertyArray: [],
        }),
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.EQUIPMENT,
            slotId: DefineEquipment_SlotId.UTILITY_A_1,
            itemId: Items.LANTERN.JUNK,
            itemCount: 1,
            primaryPropertyArray: [],
        }),
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.EQUIPMENT,
            slotId: DefineEquipment_SlotId.UTILITY_A_3,
            itemId: Items.HUNTING_TRAP.JUNK,
            itemCount: 1,
            primaryPropertyArray: [],
        }),
        Item.fromJSON({
            inventoryId: DefineItem_InventoryId.BAG,
            slotId: DefineEquipment_SlotId.NONE,
            itemId: Items.TORCH.JUNK,
            itemCount: 1,
            primaryPropertyArray: [],
        }),
    ];
};

export const generateStartItems = (characterClass: CharacterClassKey) => {
    switch (characterClass) {
        case CharacterClassKeys.FIGHTER:
            console.log("Generating fighter start items");
            return generateFighterStartItems();

        case CharacterClassKeys.RANGER:
            console.log("Generating ranger start items");
            return generateRangerStartItems();

        default:
            console.log("Generating default start items");
            return generateFighterStartItems();
    }
};
