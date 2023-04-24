import { SItemProperty } from "../../protos/_Item";
import { SItem } from "../../protos/ts/_Item";

export const generateTorch = () => {
    const torch = SItem.create({
        itemUniqueId: 6646818918302105,
        itemId: "DesignDataItem:Id_Item_Torch_0001",
        itemCount: 1,
        inventoryId: 3,
        slotId: 13,

        primaryPropertyArray: [
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

    return torch;
};

export const generateRoundShield = () => {
    const shield = SItem.create({
        itemUniqueId: 6646818918302104,
        itemId: "DesignDataItem:Id_Item_RoundShield_0001",
        itemCount: 1,
        inventoryId: 3,
        slotId: 11,

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
        inventoryId: 3,
        slotId: 8,

        primaryPropertyArray: [
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
        inventoryId: 3,
        slotId: 10,

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
        inventoryId: 3,
        slotId: 4,

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
        inventoryId: 3,
        slotId: 2,

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
        inventoryId: 3,
        slotId: 14,

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
