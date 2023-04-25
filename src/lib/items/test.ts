import { EffectTypes } from "@/models/game/enums";
import { SItemProperty } from "../../protos/_Item";
import {
    DefineEquipment_SlotId,
    DefineItem_InventoryId,
} from "../../protos/ts/_Defins";
import { SItem } from "../../protos/ts/_Item";

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

export const generateTorch = () => {
    const torch = SItem.create({
        itemUniqueId: 6646818918302105,
        itemId: "DesignDataItem:Id_Item_Torch_6001",
        itemCount: 1,
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.SECONDARY_B,

        primaryPropertyArray: [
            SItemProperty.create({
                propertyTypeId: EffectTypes.MOVESPEED,
                propertyValue: 20,
            }),
            SItemProperty.create({
                propertyTypeId: EffectTypes.PHYSICAL_WEAPON_DAMAGE,
                propertyValue: 1000,
            }),
        ],
    });

    return torch;
};

export const generateRoundShield = () => {
    const shield = SItem.create({
        itemUniqueId: 6646818918302104,
        itemId: "DesignDataItem:Id_Item_RoundShield_0001",
        itemCount: 1,
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.SECONDARY_A,

        primaryPropertyArray: [
            SItemProperty.create({
                propertyTypeId:
                    "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_ArmorRating",
                propertyValue: 13,
            }),
            SItemProperty.create({
                propertyTypeId:
                    "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MoveSpeed",
                propertyValue: -12,
            }),
        ],
    });

    return shield;
};

export const generateLantern = () => {
    const lantern = SItem.create({
        itemUniqueId: 6646818918302099,
        itemId: "DesignDataItem:Id_Item_Lantern_0001",
        itemCount: 1,
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_A_1,

        primaryPropertyArray: [
            SItemProperty.create({
                propertyTypeId:
                    "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_Primitive",
                propertyValue: 10,
            }),
            SItemProperty.create({
                propertyTypeId:
                    "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MoveSpeed",
                propertyValue: -10,
            }),
            SItemProperty.create({
                propertyTypeId:
                    "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_PhysicalWeaponDamage",
                propertyValue: 13,
            }),
        ],
    });

    return lantern;
};

export const generateSword = () => {
    const sword = SItem.create({
        itemUniqueId: 6646818918302103,
        itemId: "DesignDataItem:Id_Item_ArmingSword_0001",
        itemCount: 1,
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.PRIMARY_A,

        primaryPropertyArray: [
            SItemProperty.create({
                propertyTypeId:
                    "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MoveSpeed",
                propertyValue: -20,
            }),

            SItemProperty.create({
                propertyTypeId:
                    "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_PhysicalWeaponDamage",
                propertyValue: 23,
            }),
        ],
    });

    return sword;
};

export const generatePants = () => {
    const pants = SItem.create({
        itemUniqueId: 6646818918302102,
        itemId: "DesignDataItem:Id_Item_ClothPants_0001",
        itemCount: 1,
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.LEGS,

        primaryPropertyArray: [
            SItemProperty.create({
                propertyTypeId:
                    "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_ArmorRating",
                propertyValue: 8,
            }),
            SItemProperty.create({
                propertyTypeId:
                    "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MoveSpeed",
                propertyValue: -5,
            }),
        ],
    });

    return pants;
};

export const generateTunic = () => {
    const tunic = SItem.create({
        itemUniqueId: 6646818918302101,
        itemId: "DesignDataItem:Id_Item_AdventurerTunic_0001",
        itemCount: 1,
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.CHEST,

        primaryPropertyArray: [
            SItemProperty.create({
                propertyTypeId:
                    "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_ArmorRating",
                propertyValue: 14,
            }),
            SItemProperty.create({
                propertyTypeId:
                    "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MoveSpeed",
                propertyValue: -5,
            }),
        ],
    });

    return tunic;
};

export const generateBandage = () => {
    const bandage = SItem.create({
        itemUniqueId: 6646818918302100,
        itemId: "DesignDataItem:Id_Item_Bandage_0001",
        itemCount: 1,
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_A_2,

        primaryPropertyArray: [
            SItemProperty.create({
                propertyTypeId:
                    "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MoveSpeed",
                propertyValue: -20,
            }),
        ],
    });

    return bandage;
};
