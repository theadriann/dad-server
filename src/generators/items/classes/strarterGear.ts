import { EffectTypes } from "@/models/game/enums";
import { SItemProperty } from "@/protos/ts/_Item";
import {
  DefineEquipment_SlotId,
  DefineItem_InventoryId,
} from "@/protos/ts/_Defins";
import { SItem } from "@/protos/ts/_Item";
import { Items } from "@/models/game/enums/Items";
import {
  CharacterClass,
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
    Item.fromSItem(
      SItem.create({
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
      })
    ),
    Item.fromSItem(
      SItem.create({
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
      })
    ),
    Item.fromSItem(
      SItem.create({
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
      })
    ),
    Item.fromSItem(
      SItem.create({
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
      })
    ),
    Item.fromSItem(
      SItem.create({
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
      })
    ),
    Item.fromSItem(
      SItem.create({
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
      })
    ),
    Item.fromSItem(
      SItem.create({
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
      })
    ),
  ];
};

export const generateRangerStartItems = () => {
  return [
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.PRIMARY_A,
        itemId: Items.RECURVE_BOW.JUNK,
        itemCount: 1,
        primaryPropertyArray: [],
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.SECONDARY_B,
        itemId: Items.SHORT_SWORD.JUNK,
        itemCount: 1,
        primaryPropertyArray: [],
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.HEAD,
        itemId: Items.RANGER_HOOD.JUNK,
        itemCount: 1,
        primaryPropertyArray: [],
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.CHEST,
        itemId: Items.DOUBLET.JUNK,
        itemCount: 1,
        primaryPropertyArray: [],
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.LEGS,
        itemId: Items.CLOTH_PANTS.JUNK,
        itemCount: 1,
        primaryPropertyArray: [],
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_A_2,
        itemId: Items.BANDAGE.JUNK,
        itemCount: 1,
        primaryPropertyArray: [],
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_A_1,
        itemId: Items.LANTERN.JUNK,
        itemCount: 1,
        primaryPropertyArray: [],
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_A_3,
        itemId: Items.HUNTING_TRAP.JUNK,
        itemCount: 1,
        primaryPropertyArray: [],
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.BAG,
        slotId: DefineEquipment_SlotId.NONE,
        itemId: Items.TORCH.JUNK,
        itemCount: 1,
        primaryPropertyArray: [],
      })
    ),
  ];
};

export const generateBarbarianStartItems = () => {
  return [
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.PRIMARY_A,
        itemId: Items.BATTLE_AXE.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.HEAD,
        itemId: Items.GJERMUNDBU.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.LEGS,
        itemId: Items.CLOTH_PANTS.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.FOOT,
        itemId: Items.HEAVY_BOOTS.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_A_1,
        itemId: Items.FRANCISCA_AXE.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_A_2,
        itemId: Items.LANTERN.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_B_1,
        itemId: Items.BANDAGE.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.SECONDARY_B,
        itemId: Items.TORCH.JUNK,
      })
    ),
  ];
};

export const generateRogueStartItems = () => {
  return [
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.PRIMARY_A,
        itemId: Items.RONDEL_DAGGER.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.SECONDARY_A,
        itemId: Items.CASTILLON_DAGGER.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.HEAD,
        itemId: Items.ROGUE_COWL.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.CHEST,
        itemId: Items.DOUBLET.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.LEGS,
        itemId: Items.CLOTH_PANTS.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_A_1,
        itemId: Items.THROWING_KNIFE.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_A_2,
        itemId: Items.LANTERN.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_B_1,
        itemId: Items.BANDAGE.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.SECONDARY_B,
        itemId: Items.TORCH.JUNK,
      })
    ),
  ];
};

export const generateWizardStartItems = () => {
  return [
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.PRIMARY_A,
        itemId: Items.WIZARD_STAFF.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.HEAD,
        itemId: Items.WIZARD_HAT.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.CHEST,
        itemId: Items.FROCK.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.LEGS,
        itemId: Items.CLOTH_PANTS.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.FOOT,
        itemId: Items.WIZARD_SHOES.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_A_1,
        itemId: Items.PROTECTION_POTION.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_A_2,
        itemId: Items.LANTERN.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.SECONDARY_B,
        itemId: Items.TORCH.JUNK,
      })
    ),
  ];
};

export const generateClericStartItems = () => {
  return [
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.PRIMARY_A,
        itemId: Items.FLANGED_MACE.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.SECONDARY_A,
        itemId: Items.BUCKLER.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.PRIMARY_B,
        itemId: Items.WIZARD_STAFF.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.CHEST,
        itemId: Items.FROCK.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.LEGS,
        itemId: Items.CLOTH_PANTS.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_A_1,
        itemId: Items.HEALING_POTION.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_A_2,
        itemId: Items.LANTERN.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.BAG,
        slotId: DefineEquipment_SlotId.NONE,
        itemId: Items.TORCH.JUNK,
      })
    ),
  ];
};

export const generateBardStartItems = () => {
  return [
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.PRIMARY_A,
        itemId: Items.RAPIER.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.PRIMARY_B,
        itemId: Items.LUTE.JUNK,
      })
    ),

    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.CHEST,
        itemId: Items.WANDERER_ATTIRE.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.LEGS,
        itemId: Items.CLOTH_PANTS.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.FOOT,
        itemId: Items.OLD_SHOES.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_A_1,
        itemId: Items.BANDAGE.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.EQUIPMENT,
        slotId: DefineEquipment_SlotId.UTILITY_A_2,
        itemId: Items.LANTERN.JUNK,
      })
    ),
    Item.fromSItem(
      SItem.create({
        inventoryId: DefineItem_InventoryId.BAG,
        slotId: DefineEquipment_SlotId.NONE,
        itemId: Items.TORCH.JUNK,
      })
    ),
  ];
};

export const generateStarterGear = (characterClass: CharacterClass) => {
  switch (characterClass) {
    case CharacterClass.FIGHTER:
      return generateFighterStartItems();

    case CharacterClass.BARBARIAN:
      return generateBarbarianStartItems();

    case CharacterClass.ROGUE:
      return generateRogueStartItems();

    case CharacterClass.RANGER:
      return generateRangerStartItems();

    case CharacterClass.WIZARD:
      return generateWizardStartItems();

    case CharacterClass.CLERIC:
      return generateClericStartItems();

    case CharacterClass.BARD:
      return generateBardStartItems();

    default:
      return generateFighterStartItems();
  }
};
