import { snakeCase, startCase } from "lodash";

//
export enum ItemQuality {
    NONE = "NONE",
    JUNK = "JUNK",
    POOR = "POOR",
    COMMON = "COMMON",
    UNCOMMON = "UNCOMMON",
    RARE = "RARE",
    EPIC = "EPIC",
    LEGENDARY = "LEGENDARY",
    ARTIFACT = "ARTIFACT",
}

//
export enum ItemQualityId {
    NONE = "",
    JUNK = "0001",
    POOR = "1001",
    COMMON = "2001",
    UNCOMMON = "3001",
    RARE = "4001",
    EPIC = "5001",
    LEGENDARY = "6001",
    ARTIFACT = "7001",
}

export function itemQualityFromClient(itemId: string): ItemQuality {
    //
    const qualityId = itemId.split("_").pop();

    switch (qualityId) {
        case "0001":
        case "JUNK":
            return ItemQuality.JUNK;

        case "1001":
        case "POOR":
            return ItemQuality.POOR;

        case "2001":
        case "COMMON":
            return ItemQuality.COMMON;

        case "3001":
        case "UNCOMMON":
            return ItemQuality.UNCOMMON;

        case "4001":
        case "RARE":
            return ItemQuality.RARE;

        case "5001":
        case "EPIC":
            return ItemQuality.EPIC;

        case "6001":
        case "LEGENDARY":
            return ItemQuality.LEGENDARY;

        case "7001":
        case "ARTIFACT":
            return ItemQuality.ARTIFACT;

        default:
            return ItemQuality.NONE;
    }
}

export function itemQualityToClient(quality: ItemQuality): string {
    switch (quality) {
        case ItemQuality.JUNK:
            return "0001";

        case ItemQuality.POOR:
            return "1001";

        case ItemQuality.COMMON:
            return "2001";

        case ItemQuality.UNCOMMON:
            return "3001";

        case ItemQuality.RARE:
            return "4001";

        case ItemQuality.EPIC:
            return "5001";

        case ItemQuality.LEGENDARY:
            return "6001";

        case ItemQuality.ARTIFACT:
            return "7001";

        default:
            return "";
    }
}

export function itemNameFromClient(itemId: string): string {
    return snakeCase(itemId.split("_")[2]).toUpperCase();
}

export function itemNameToClient(itemName: string): string {
    return startCase(itemName.toLowerCase()).split(" ").join("");
}

//
export const Items = {
    ADVENTURER_BOOTS: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_AdventurerBoots_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_AdventurerBoots_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_AdventurerBoots_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_AdventurerBoots_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_AdventurerBoots_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_AdventurerBoots_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_AdventurerBoots_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_AdventurerBoots_7001",
    },
    ADVENTURER_CLOAK: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_AdventurerCloak_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_AdventurerCloak_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_AdventurerCloak_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_AdventurerCloak_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_AdventurerCloak_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_AdventurerCloak_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_AdventurerCloak_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_AdventurerCloak_7001",
    },
    ADVENTURER_TUNIC: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_AdventurerTunic_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_AdventurerTunic_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_AdventurerTunic_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_AdventurerTunic_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_AdventurerTunic_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_AdventurerTunic_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_AdventurerTunic_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_AdventurerTunic_7001",
    },
    ALE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Ale_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Ale_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Ale_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Ale_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Ale_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Ale_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Ale_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Ale_7001",
    },
    ARMET: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Armet_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Armet_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Armet_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Armet_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Armet_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Armet_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Armet_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Armet_7001",
    },
    ARMING_SWORD: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_ArmingSword_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_ArmingSword_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_ArmingSword_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_ArmingSword_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_ArmingSword_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_ArmingSword_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_ArmingSword_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_ArmingSword_7001",
    },
    ARROW: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Arrow_0001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Arrow_2001",
    },
    BADGER_PENDANT: {
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_BadgerPendant_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_BadgerPendant_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_BadgerPendant_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_BadgerPendant_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_BadgerPendant_7001",
    },
    BANDAGE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Bandage_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Bandage_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Bandage_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Bandage_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Bandage_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Bandage_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Bandage_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Bandage_7001",
    },
    BARBUTA_HELM: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_BarbutaHelm_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_BarbutaHelm_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_BarbutaHelm_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_BarbutaHelm_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_BarbutaHelm_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_BarbutaHelm_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_BarbutaHelm_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_BarbutaHelm_7001",
    },
    BARDIC_PANTS: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_BardicPants_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_BardicPants_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_BardicPants_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_BardicPants_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_BardicPants_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_BardicPants_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_BardicPants_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_BardicPants_7001",
    },
    BARDICHE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Bardiche_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Bardiche_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Bardiche_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Bardiche_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Bardiche_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Bardiche_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Bardiche_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Bardiche_7001",
    },
    BARE_HAND_RIGHT: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_BareHandRight",
    },
    BARE_HANDS: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_BareHands",
    },
    BATTLE_AXE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_BattleAxe_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_BattleAxe_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_BattleAxe_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_BattleAxe_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_BattleAxe_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_BattleAxe_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_BattleAxe_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_BattleAxe_7001",
    },
    BLUE_SAPPHIRE: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_BlueSapphire_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_BlueSapphire_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_BlueSapphire_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_BlueSapphire_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_BlueSapphire_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_BlueSapphire_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_BlueSapphire_7001",
    },
    BOLT: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Bolt_0001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Bolt_2001",
    },
    BUCKLER: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Buckler_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Buckler_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Buckler_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Buckler_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Buckler_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Buckler_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Buckler_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Buckler_7001",
    },
    CAMPFIRE_KIT: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_CampfireKit_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_CampfireKit_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_CampfireKit_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_CampfireKit_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CampfireKit_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_CampfireKit_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_CampfireKit_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_CampfireKit_7001",
    },
    CANDY_CANE: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_CandyCane",
    },
    CANDY_CORNS: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_CandyCorns",
    },
    CASTILLON_DAGGER: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_CastillonDagger_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_CastillonDagger_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_CastillonDagger_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_CastillonDagger_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CastillonDagger_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_CastillonDagger_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_CastillonDagger_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_CastillonDagger_7001",
    },
    CEREMONIAL_DAGGER: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_CeremonialDagger_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_CeremonialDagger_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_CeremonialDagger_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CeremonialDagger_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_CeremonialDagger_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_CeremonialDagger_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_CeremonialDagger_7001",
    },
    CHAPEL_DE_FER: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_ChapelDeFer_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_ChapelDeFer_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_ChapelDeFer_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_ChapelDeFer_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_ChapelDeFer_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_ChapelDeFer_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_ChapelDeFer_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_ChapelDeFer_7001",
    },
    CHAPERON: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Chaperon_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Chaperon_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Chaperon_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Chaperon_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Chaperon_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Chaperon_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Chaperon_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Chaperon_7001",
    },
    CLARITY_POTION: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_ClarityPotion_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_ClarityPotion_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_ClarityPotion_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_ClarityPotion_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_ClarityPotion_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_ClarityPotion_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_ClarityPotion_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_ClarityPotion_7001",
    },
    CLOTH_PANTS: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_ClothPants_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_ClothPants_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_ClothPants_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_ClothPants_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_ClothPants_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_ClothPants_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_ClothPants_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_ClothPants_7001",
    },
    COBALT_CHAPEL_DE_FER: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltChapelDeFer_4001",
    },
    COBALT_FROCK: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltFrock_4001",
    },
    COBALT_HAT: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltHat_4001",
    },
    COBALT_HEAVY_GAUNTLET: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltHeavyGauntlet_4001",
    },
    COBALT_HOOD: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltHood_4001",
    },
    COBALT_INGOTS: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltIngots_4001",
    },
    COBALT_LEATHER_GLOVES: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltLeatherGloves_4001",
    },
    COBALT_LIGHTFOOT_BOOTS: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltLightfootBoots_4001",
    },
    COBALT_ORES: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltOres_4001",
    },
    COBALT_PLATE_BOOTS: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltPlateBoots_4001",
    },
    COBALT_PLATE_PANTS: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltPlatePants_4001",
    },
    COBALT_POWDER: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltPowder_4001",
    },
    COBALT_REGAL_GAMBESON: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltRegalGambeson_4001",
    },
    COBALT_TEMPLAR_ARMOR: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltTemplarArmor_4001",
    },
    COBALT_TROUSERS: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltTrousers_4001",
    },
    COBALT_VIKING_HELM: {
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CobaltVikingHelm_4001",
    },
    COIN_PURSE: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_CoinPurse",
    },
    CROSSBOW: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Crossbow_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Crossbow_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Crossbow_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Crossbow_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Crossbow_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Crossbow_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Crossbow_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Crossbow_7001",
    },
    CRYSTAL_BALL: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_CrystalBall_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_CrystalBall_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_CrystalBall_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_CrystalBall_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CrystalBall_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_CrystalBall_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_CrystalBall_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_CrystalBall_7001",
    },
    CRYSTAL_SWORD: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_CrystalSword_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_CrystalSword_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_CrystalSword_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_CrystalSword_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_CrystalSword_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_CrystalSword_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_CrystalSword_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_CrystalSword_7001",
    },
    DARK_PLATE_ARMOR: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_DarkPlateArmor_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_DarkPlateArmor_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_DarkPlateArmor_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_DarkPlateArmor_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_DarkPlateArmor_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_DarkPlateArmor_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_DarkPlateArmor_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_DarkPlateArmor_7001",
    },
    DIAMOND: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Diamond_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Diamond_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Diamond_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Diamond_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Diamond_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Diamond_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Diamond_7001",
    },
    DOUBLE_AXE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_DoubleAxe_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_DoubleAxe_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_DoubleAxe_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_DoubleAxe_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_DoubleAxe_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_DoubleAxe_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_DoubleAxe_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_DoubleAxe_7001",
    },
    DOUBLET: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Doublet_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Doublet_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Doublet_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Doublet_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Doublet_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Doublet_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Doublet_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Doublet_7001",
    },
    EMERALD: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Emerald_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Emerald_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Emerald_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Emerald_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Emerald_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Emerald_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Emerald_7001",
    },
    EXPLOSION_BOTTLE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_ExplosionBottle_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_ExplosionBottle_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_ExplosionBottle_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_ExplosionBottle_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_ExplosionBottle_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_ExplosionBottle_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_ExplosionBottle_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_ExplosionBottle_7001",
    },
    FALCHION: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Falchion_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Falchion_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Falchion_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Falchion_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Falchion_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Falchion_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Falchion_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Falchion_7001",
    },
    FEATHERED_HAT: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_FeatheredHat_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_FeatheredHat_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_FeatheredHat_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_FeatheredHat_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_FeatheredHat_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_FeatheredHat_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_FeatheredHat_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_FeatheredHat_7001",
    },
    FELLING_AXE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_FellingAxe_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_FellingAxe_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_FellingAxe_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_FellingAxe_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_FellingAxe_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_FellingAxe_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_FellingAxe_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_FellingAxe_7001",
    },
    FINE_CUIRASS: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_FineCuirass_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_FineCuirass_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_FineCuirass_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_FineCuirass_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_FineCuirass_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_FineCuirass_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_FineCuirass_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_FineCuirass_7001",
    },
    FLANGED_MACE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_FlangedMace_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_FlangedMace_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_FlangedMace_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_FlangedMace_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_FlangedMace_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_FlangedMace_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_FlangedMace_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_FlangedMace_7001",
    },
    FOREST_HOOD: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_ForestHood_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_ForestHood_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_ForestHood_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_ForestHood_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_ForestHood_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_ForestHood_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_ForestHood_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_ForestHood_7001",
    },
    FOX_PENDANT: {
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_FoxPendant_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_FoxPendant_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_FoxPendant_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_FoxPendant_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_FoxPendant_7001",
    },
    FRANCISCA_AXE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_FranciscaAxe_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_FranciscaAxe_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_FranciscaAxe_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_FranciscaAxe_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_FranciscaAxe_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_FranciscaAxe_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_FranciscaAxe_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_FranciscaAxe_7001",
    },
    FROCK: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Frock_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Frock_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Frock_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Frock_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Frock_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Frock_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Frock_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Frock_7001",
    },
    FROST_AMULET: {
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_FrostAmulet_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_FrostAmulet_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_FrostAmulet_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_FrostAmulet_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_FrostAmulet_7001",
    },
    GEM_NECKLACE: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GemNecklace_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GemNecklace_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GemNecklace_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GemNecklace_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GemNecklace_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GemNecklace_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GemNecklace_7001",
    },
    GEM_RING: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GemRing_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GemRing_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GemRing_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GemRing_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GemRing_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GemRing_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GemRing_7001",
    },
    GJERMUNDBU: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Gjermundbu_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Gjermundbu_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Gjermundbu_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Gjermundbu_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Gjermundbu_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Gjermundbu_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Gjermundbu_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Gjermundbu_7001",
    },
    GOLD_BAND: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldBand_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldBand_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldBand_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldBand_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldBand_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldBand_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldBand_7001",
    },
    GOLD_BANGLE_1_B: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldBangle1B_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldBangle1B_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldBangle1B_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldBangle1B_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldBangle1B_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldBangle1B_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldBangle1B_7001",
    },
    GOLD_BANGLE_1_C: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldBangle1C_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldBangle1C_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldBangle1C_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldBangle1C_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldBangle1C_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldBangle1C_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldBangle1C_7001",
    },
    GOLD_BANGLE_1_D: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldBangle1D_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldBangle1D_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldBangle1D_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldBangle1D_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldBangle1D_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldBangle1D_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldBangle1D_7001",
    },
    GOLD_BANGLE_1_E: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldBangle1E_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldBangle1E_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldBangle1E_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldBangle1E_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldBangle1E_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldBangle1E_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldBangle1E_7001",
    },
    GOLD_BANGLE_1_H: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldBangle1H_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldBangle1H_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldBangle1H_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldBangle1H_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldBangle1H_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldBangle1H_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldBangle1H_7001",
    },
    GOLD_BANGLE_1_I: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldBangle1I_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldBangle1I_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldBangle1I_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldBangle1I_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldBangle1I_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldBangle1I_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldBangle1I_7001",
    },
    GOLD_BANGLE_1_J: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldBangle1J_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldBangle1J_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldBangle1J_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldBangle1J_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldBangle1J_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldBangle1J_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldBangle1J_7001",
    },
    GOLD_BANGLE_2_D: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldBangle2D_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldBangle2D_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldBangle2D_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldBangle2D_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldBangle2D_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldBangle2D_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldBangle2D_7001",
    },
    GOLD_BANGLE_2_G: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldBangle2G_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldBangle2G_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldBangle2G_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldBangle2G_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldBangle2G_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldBangle2G_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldBangle2G_7001",
    },
    GOLD_BANGLE_2_H: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldBangle2H_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldBangle2H_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldBangle2H_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldBangle2H_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldBangle2H_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldBangle2H_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldBangle2H_7001",
    },
    GOLD_BOWL: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldBowl_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldBowl_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldBowl_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldBowl_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldBowl_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldBowl_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldBowl_7001",
    },
    GOLD_CANDELABRA: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldCandelabra_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldCandelabra_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldCandelabra_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldCandelabra_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldCandelabra_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldCandelabra_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldCandelabra_7001",
    },
    GOLD_CANDLE_HOLDER: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldCandleHolder_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldCandleHolder_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldCandleHolder_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldCandleHolder_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldCandleHolder_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldCandleHolder_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldCandleHolder_7001",
    },
    GOLD_CANDLE_PLATTER: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldCandlePlatter_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldCandlePlatter_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldCandlePlatter_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldCandlePlatter_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldCandlePlatter_5001",
        [ItemQuality.LEGENDARY]:
            "DesignDataItem:Id_Item_GoldCandlePlatter_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldCandlePlatter_7001",
    },
    GOLD_CHALICE_A: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldChaliceA_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldChaliceA_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldChaliceA_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldChaliceA_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldChaliceA_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldChaliceA_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldChaliceA_7001",
    },
    GOLD_CHALICE_B: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldChaliceB_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldChaliceB_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldChaliceB_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldChaliceB_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldChaliceB_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldChaliceB_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldChaliceB_7001",
    },
    GOLD_COIN_BAG: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_GoldCoinBag",
    },
    GOLD_COIN_CHEST: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_GoldCoinChest",
    },
    GOLD_COIN_PURSE: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_GoldCoinPurse",
    },
    GOLD_COINS: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_GoldCoins",
    },
    GOLD_CROWN: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldCrown_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldCrown_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldCrown_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldCrown_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldCrown_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldCrown_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldCrown_7001",
    },
    GOLD_WATERPOT: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_GoldWaterpot_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_GoldWaterpot_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_GoldWaterpot_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_GoldWaterpot_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_GoldWaterpot_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_GoldWaterpot_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_GoldWaterpot_7001",
    },
    GOLDEN_KEY: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_GoldenKey",
    },
    HALBERD: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Halberd_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Halberd_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Halberd_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Halberd_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Halberd_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Halberd_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Halberd_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Halberd_7001",
    },
    HAND_CROSSBOW: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_HandCrossbow_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_HandCrossbow_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_HandCrossbow_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_HandCrossbow_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_HandCrossbow_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_HandCrossbow_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_HandCrossbow_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_HandCrossbow_7001",
    },
    HATCHET: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Hatchet_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Hatchet_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Hatchet_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Hatchet_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Hatchet_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Hatchet_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Hatchet_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Hatchet_7001",
    },
    HEALING_POTION: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_HealingPotion_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_HealingPotion_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_HealingPotion_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_HealingPotion_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_HealingPotion_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_HealingPotion_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_HealingPotion_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_HealingPotion_7001",
    },
    HEATER_SHIELD: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_HeaterShield_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_HeaterShield_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_HeaterShield_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_HeaterShield_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_HeaterShield_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_HeaterShield_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_HeaterShield_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_HeaterShield_7001",
    },
    HEAVY_BOOTS: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_HeavyBoots_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_HeavyBoots_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_HeavyBoots_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_HeavyBoots_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_HeavyBoots_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_HeavyBoots_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_HeavyBoots_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_HeavyBoots_7001",
    },
    HEAVY_GAUNTLET: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_HeavyGauntlet_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_HeavyGauntlet_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_HeavyGauntlet_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_HeavyGauntlet_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_HeavyGauntlet_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_HeavyGauntlet_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_HeavyGauntlet_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_HeavyGauntlet_7001",
    },
    HEAVY_LEATHER_LEGGINGS: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_HeavyLeatherLeggings_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_HeavyLeatherLeggings_1001",
        [ItemQuality.COMMON]:
            "DesignDataItem:Id_Item_HeavyLeatherLeggings_2001",
        [ItemQuality.UNCOMMON]:
            "DesignDataItem:Id_Item_HeavyLeatherLeggings_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_HeavyLeatherLeggings_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_HeavyLeatherLeggings_5001",
        [ItemQuality.LEGENDARY]:
            "DesignDataItem:Id_Item_HeavyLeatherLeggings_6001",
        [ItemQuality.ARTIFACT]:
            "DesignDataItem:Id_Item_HeavyLeatherLeggings_7001",
    },
    HORSEMANS_AXE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_HorsemansAxe_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_HorsemansAxe_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_HorsemansAxe_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_HorsemansAxe_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_HorsemansAxe_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_HorsemansAxe_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_HorsemansAxe_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_HorsemansAxe_7001",
    },
    HOUNSKULL: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Hounskull_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Hounskull_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Hounskull_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Hounskull_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Hounskull_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Hounskull_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Hounskull_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Hounskull_7001",
    },
    HUNTING_TRAP: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_HuntingTrap_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_HuntingTrap_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_HuntingTrap_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_HuntingTrap_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_HuntingTrap_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_HuntingTrap_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_HuntingTrap_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_HuntingTrap_7001",
    },
    INVISIBILITY_POTION: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_InvisibilityPotion_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_InvisibilityPotion_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_InvisibilityPotion_2001",
        [ItemQuality.UNCOMMON]:
            "DesignDataItem:Id_Item_InvisibilityPotion_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_InvisibilityPotion_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_InvisibilityPotion_5001",
        [ItemQuality.LEGENDARY]:
            "DesignDataItem:Id_Item_InvisibilityPotion_6001",
        [ItemQuality.ARTIFACT]:
            "DesignDataItem:Id_Item_InvisibilityPotion_7001",
    },
    KETTLE_HAT: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_KettleHat_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_KettleHat_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_KettleHat_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_KettleHat_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_KettleHat_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_KettleHat_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_KettleHat_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_KettleHat_7001",
    },
    KRIS_DAGGER: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_KrisDagger_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_KrisDagger_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_KrisDagger_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_KrisDagger_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_KrisDagger_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_KrisDagger_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_KrisDagger_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_KrisDagger_7001",
    },
    LACED_TURNSHOE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_LacedTurnshoe_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_LacedTurnshoe_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_LacedTurnshoe_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_LacedTurnshoe_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_LacedTurnshoe_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_LacedTurnshoe_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_LacedTurnshoe_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_LacedTurnshoe_7001",
    },
    LANTERN: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Lantern_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Lantern_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Lantern_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Lantern_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Lantern_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Lantern_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Lantern_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Lantern_7001",
    },
    LARGE_SCROLL: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_LargeScroll_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_LargeScroll_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_LargeScroll_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_LargeScroll_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_LargeScroll_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_LargeScroll_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_LargeScroll_7001",
    },
    LEATHER_BONNET: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_LeatherBonnet_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_LeatherBonnet_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_LeatherBonnet_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_LeatherBonnet_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_LeatherBonnet_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_LeatherBonnet_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_LeatherBonnet_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_LeatherBonnet_7001",
    },
    LEATHER_CAP: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_LeatherCap_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_LeatherCap_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_LeatherCap_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_LeatherCap_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_LeatherCap_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_LeatherCap_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_LeatherCap_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_LeatherCap_7001",
    },
    LEATHER_CHAUSSES: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_LeatherChausses_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_LeatherChausses_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_LeatherChausses_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_LeatherChausses_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_LeatherChausses_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_LeatherChausses_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_LeatherChausses_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_LeatherChausses_7001",
    },
    LEATHER_GLOVES: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_LeatherGloves_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_LeatherGloves_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_LeatherGloves_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_LeatherGloves_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_LeatherGloves_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_LeatherGloves_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_LeatherGloves_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_LeatherGloves_7001",
    },
    LEATHER_LEGGINGS: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_LeatherLeggings_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_LeatherLeggings_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_LeatherLeggings_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_LeatherLeggings_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_LeatherLeggings_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_LeatherLeggings_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_LeatherLeggings_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_LeatherLeggings_7001",
    },
    LIGHTFOOT_BOOTS: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_LightfootBoots_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_LightfootBoots_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_LightfootBoots_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_LightfootBoots_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_LightfootBoots_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_LightfootBoots_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_LightfootBoots_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_LightfootBoots_7001",
    },
    LOCKPICK: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_Lockpick",
    },
    LONGBOW: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Longbow_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Longbow_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Longbow_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Longbow_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Longbow_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Longbow_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Longbow_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Longbow_7001",
    },
    LONGSWORD: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Longsword_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Longsword_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Longsword_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Longsword_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Longsword_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Longsword_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Longsword_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Longsword_7001",
    },
    LOOSE_TROUSERS: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_LooseTrousers_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_LooseTrousers_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_LooseTrousers_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_LooseTrousers_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_LooseTrousers_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_LooseTrousers_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_LooseTrousers_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_LooseTrousers_7001",
    },
    LUTE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Lute_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Lute_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Lute_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Lute_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Lute_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Lute_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Lute_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Lute_7001",
    },
    MAGIC_WAND: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_MagicWand_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_MagicWand_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_MagicWand_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_MagicWand_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_MagicWand_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_MagicWand_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_MagicWand_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_MagicWand_7001",
    },
    MARAUDER_OUTFIT: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_MarauderOutfit_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_MarauderOutfit_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_MarauderOutfit_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_MarauderOutfit_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_MarauderOutfit_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_MarauderOutfit_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_MarauderOutfit_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_MarauderOutfit_7001",
    },
    METAL_CUP: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_MetalCup_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_MetalCup_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_MetalCup_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_MetalCup_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_MetalCup_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_MetalCup_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_MetalCup_7001",
    },
    MORNING_STAR: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_MorningStar_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_MorningStar_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_MorningStar_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_MorningStar_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_MorningStar_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_MorningStar_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_MorningStar_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_MorningStar_7001",
    },
    MYSTIC_VESTMENTS: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_MysticVestments_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_MysticVestments_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_MysticVestments_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_MysticVestments_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_MysticVestments_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_MysticVestments_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_MysticVestments_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_MysticVestments_7001",
    },
    NECKLACE_OF_PEACE: {
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_NecklaceOfPeace_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_NecklaceOfPeace_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_NecklaceOfPeace_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_NecklaceOfPeace_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_NecklaceOfPeace_7001",
    },
    NORTHERN_FULL_TUNIC: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_NorthernFullTunic_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_NorthernFullTunic_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_NorthernFullTunic_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_NorthernFullTunic_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_NorthernFullTunic_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_NorthernFullTunic_5001",
        [ItemQuality.LEGENDARY]:
            "DesignDataItem:Id_Item_NorthernFullTunic_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_NorthernFullTunic_7001",
    },
    OIL_LANTERN: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_OilLantern",
    },
    OLD_SHOES: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_OldShoes_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_OldShoes_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_OldShoes_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_OldShoes_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_OldShoes_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_OldShoes_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_OldShoes_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_OldShoes_7001",
    },
    ORACLE_ROBE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_OracleRobe_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_OracleRobe_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_OracleRobe_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_OracleRobe_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_OracleRobe_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_OracleRobe_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_OracleRobe_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_OracleRobe_7001",
    },
    OX_PENDANT: {
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_OxPendant_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_OxPendant_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_OxPendant_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_OxPendant_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_OxPendant_7001",
    },
    PADDED_LEGGINGS: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_PaddedLeggings_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_PaddedLeggings_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_PaddedLeggings_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_PaddedLeggings_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_PaddedLeggings_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_PaddedLeggings_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_PaddedLeggings_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_PaddedLeggings_7001",
    },
    PADDED_TUNIC: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_PaddedTunic_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_PaddedTunic_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_PaddedTunic_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_PaddedTunic_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_PaddedTunic_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_PaddedTunic_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_PaddedTunic_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_PaddedTunic_7001",
    },
    PAVISE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Pavise_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Pavise_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Pavise_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Pavise_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Pavise_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Pavise_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Pavise_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Pavise_7001",
    },
    PEARL_NECKLACE: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_PearlNecklace_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_PearlNecklace_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_PearlNecklace_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_PearlNecklace_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_PearlNecklace_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_PearlNecklace_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_PearlNecklace_7001",
    },
    PHOENIX_CHOKER: {
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_PhoenixChoker_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_PhoenixChoker_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_PhoenixChoker_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_PhoenixChoker_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_PhoenixChoker_7001",
    },
    PICKAXE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Pickaxe_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Pickaxe_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Pickaxe_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Pickaxe_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Pickaxe_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Pickaxe_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Pickaxe_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Pickaxe_7001",
    },
    PLATE_BOOTS: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_PlateBoots_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_PlateBoots_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_PlateBoots_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_PlateBoots_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_PlateBoots_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_PlateBoots_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_PlateBoots_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_PlateBoots_7001",
    },
    PLATE_PANTS: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_PlatePants_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_PlatePants_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_PlatePants_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_PlatePants_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_PlatePants_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_PlatePants_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_PlatePants_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_PlatePants_7001",
    },
    PROTECTION_POTION: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_ProtectionPotion_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_ProtectionPotion_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_ProtectionPotion_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_ProtectionPotion_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_ProtectionPotion_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_ProtectionPotion_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_ProtectionPotion_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_ProtectionPotion_7001",
    },
    QUARTERSTAFF: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Quarterstaff_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Quarterstaff_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Quarterstaff_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Quarterstaff_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Quarterstaff_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Quarterstaff_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Quarterstaff_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Quarterstaff_7001",
    },
    RADIANT_CLOAK: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_RadiantCloak_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_RadiantCloak_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_RadiantCloak_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_RadiantCloak_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_RadiantCloak_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RadiantCloak_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_RadiantCloak_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_RadiantCloak_7001",
    },
    RANGER_HOOD: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_RangerHood_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_RangerHood_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_RangerHood_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_RangerHood_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_RangerHood_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RangerHood_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_RangerHood_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_RangerHood_7001",
    },
    RAPIER: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Rapier_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Rapier_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Rapier_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Rapier_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Rapier_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Rapier_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Rapier_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Rapier_7001",
    },
    RAT_PENDANT: {
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_RatPendant_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_RatPendant_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RatPendant_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_RatPendant_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_RatPendant_7001",
    },
    RAWHIDE_GLOVES: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_RawhideGloves_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_RawhideGloves_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_RawhideGloves_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_RawhideGloves_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_RawhideGloves_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RawhideGloves_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_RawhideGloves_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_RawhideGloves_7001",
    },
    RECURVE_BOW: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_RecurveBow_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_RecurveBow_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_RecurveBow_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_RecurveBow_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_RecurveBow_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RecurveBow_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_RecurveBow_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_RecurveBow_7001",
    },
    REGAL_GAMBESON: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_RegalGambeson_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_RegalGambeson_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_RegalGambeson_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_RegalGambeson_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_RegalGambeson_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RegalGambeson_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_RegalGambeson_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_RegalGambeson_7001",
    },
    REINFORCED_GLOVES: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_ReinforcedGloves_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_ReinforcedGloves_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_ReinforcedGloves_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_ReinforcedGloves_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_ReinforcedGloves_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_ReinforcedGloves_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_ReinforcedGloves_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_ReinforcedGloves_7001",
    },
    RING_OF_COURAGE: {
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_RingOfCourage_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_RingOfCourage_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RingOfCourage_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_RingOfCourage_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_RingOfCourage_7001",
    },
    RING_OF_QUICKNESS: {
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_RingOfQuickness_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_RingOfQuickness_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RingOfQuickness_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_RingOfQuickness_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_RingOfQuickness_7001",
    },
    RING_OF_RESOLVE: {
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_RingOfResolve_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_RingOfResolve_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RingOfResolve_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_RingOfResolve_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_RingOfResolve_7001",
    },
    RING_OF_SURVIVAL: {
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_RingOfSurvival_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_RingOfSurvival_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RingOfSurvival_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_RingOfSurvival_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_RingOfSurvival_7001",
    },
    RIVETED_GLOVES: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_RivetedGloves_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_RivetedGloves_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_RivetedGloves_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_RivetedGloves_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_RivetedGloves_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RivetedGloves_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_RivetedGloves_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_RivetedGloves_7001",
    },
    ROGUE_COWL: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_RogueCowl_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_RogueCowl_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_RogueCowl_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_RogueCowl_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_RogueCowl_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RogueCowl_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_RogueCowl_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_RogueCowl_7001",
    },
    RONDEL_DAGGER: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_RondelDagger_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_RondelDagger_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_RondelDagger_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_RondelDagger_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_RondelDagger_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RondelDagger_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_RondelDagger_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_RondelDagger_7001",
    },
    ROUND_SHIELD: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_RoundShield_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_RoundShield_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_RoundShield_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_RoundShield_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_RoundShield_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RoundShield_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_RoundShield_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_RoundShield_7001",
    },
    RUBY: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Ruby_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Ruby_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Ruby_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Ruby_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Ruby_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Ruby_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Ruby_7001",
    },
    RUBYSILVER_ADVENTURER_BOOTS: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_RubysilverAdventurerBoots",
    },
    RUBYSILVER_BARBUTA_HELM: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_RubysilverBarbutaHelm",
    },
    RUBYSILVER_DOUBLET: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_RubysilverDoublet",
    },
    RUBYSILVER_FINE_CUIRASS: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_RubysilverFineCuirass",
    },
    RUBYSILVER_HEAVY_GAUNTLET: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_RubysilverHeavyGauntlet",
    },
    RUBYSILVER_HOOD: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_RubysilverHood",
    },
    RUBYSILVER_INGOTS: {
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RubysilverIngots_5001",
    },
    RUBYSILVER_LEATHER_CAP: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_RubysilverLeatherCap",
    },
    RUBYSILVER_LEATHER_LEGGINGS: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_RubysilverLeatherLeggings",
    },
    RUBYSILVER_MYSTIC_VESTMENTS: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_RubysilverMysticVestments",
    },
    RUBYSILVER_ORES: {
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RubysilverOres_5001",
    },
    RUBYSILVER_PLATE_BOOTS: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_RubysilverPlateBoots",
    },
    RUBYSILVER_PLATE_PANTS: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_RubysilverPlatePants",
    },
    RUBYSILVER_POWDER: {
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RubysilverPowder_5001",
    },
    RUBYSILVER_RAWHIDE_GLOVES: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_RubysilverRawhideGloves",
    },
    RUGGED_BOOTS: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_RuggedBoots_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_RuggedBoots_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_RuggedBoots_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_RuggedBoots_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_RuggedBoots_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_RuggedBoots_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_RuggedBoots_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_RuggedBoots_7001",
    },
    SHADOW_HOOD: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_ShadowHood_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_ShadowHood_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_ShadowHood_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_ShadowHood_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_ShadowHood_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_ShadowHood_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_ShadowHood_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_ShadowHood_7001",
    },
    SHADOW_MASK: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_ShadowMask_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_ShadowMask_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_ShadowMask_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_ShadowMask_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_ShadowMask_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_ShadowMask_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_ShadowMask_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_ShadowMask_7001",
    },
    SHORT_SWORD: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_ShortSword_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_ShortSword_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_ShortSword_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_ShortSword_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_ShortSword_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_ShortSword_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_ShortSword_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_ShortSword_7001",
    },
    SILVER_CHALICE: {
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_SilverChalice_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_SilverChalice_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_SilverChalice_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_SilverChalice_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_SilverChalice_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_SilverChalice_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_SilverChalice_7001",
    },
    SILVER_COIN: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_SilverCoin",
    },
    SKULL_KEY: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_SkullKey",
    },
    SOUL_HEART: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_SoulHeart",
    },
    SOUL_TORQ: {
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_SoulTorq_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_SoulTorq_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_SoulTorq_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_SoulTorq_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_SoulTorq_7001",
    },
    SPEAR: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Spear_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Spear_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Spear_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Spear_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Spear_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Spear_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Spear_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Spear_7001",
    },
    SPELLBOOK: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Spellbook_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Spellbook_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Spellbook_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Spellbook_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Spellbook_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Spellbook_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Spellbook_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Spellbook_7001",
    },
    SPLENDID_CLOAK: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_SplendidCloak_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_SplendidCloak_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_SplendidCloak_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_SplendidCloak_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_SplendidCloak_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_SplendidCloak_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_SplendidCloak_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_SplendidCloak_7001",
    },
    STILETTO_DAGGER: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_StilettoDagger_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_StilettoDagger_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_StilettoDagger_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_StilettoDagger_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_StilettoDagger_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_StilettoDagger_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_StilettoDagger_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_StilettoDagger_7001",
    },
    STRAW_HAT: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_StrawHat_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_StrawHat_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_StrawHat_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_StrawHat_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_StrawHat_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_StrawHat_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_StrawHat_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_StrawHat_7001",
    },
    SURGICAL_KIT: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_SurgicalKit_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_SurgicalKit_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_SurgicalKit_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_SurgicalKit_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_SurgicalKit_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_SurgicalKit_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_SurgicalKit_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_SurgicalKit_7001",
    },
    SURVIVAL_BOW: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_SurvivalBow_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_SurvivalBow_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_SurvivalBow_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_SurvivalBow_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_SurvivalBow_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_SurvivalBow_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_SurvivalBow_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_SurvivalBow_7001",
    },
    TATTERED_CLOAK: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_TatteredCloak_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_TatteredCloak_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_TatteredCloak_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_TatteredCloak_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_TatteredCloak_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_TatteredCloak_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_TatteredCloak_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_TatteredCloak_7001",
    },
    TEMPLAR_ARMOR: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_TemplarArmor_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_TemplarArmor_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_TemplarArmor_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_TemplarArmor_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_TemplarArmor_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_TemplarArmor_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_TemplarArmor_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_TemplarArmor_7001",
    },
    THROWING_KNIFE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_ThrowingKnife_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_ThrowingKnife_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_ThrowingKnife_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_ThrowingKnife_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_ThrowingKnife_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_ThrowingKnife_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_ThrowingKnife_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_ThrowingKnife_7001",
    },
    TORCH: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Torch_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Torch_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Torch_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Torch_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Torch_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Torch_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Torch_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Torch_7001",
    },
    TROLL_BLOOD: {
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_TrollBlood_5001",
    },
    TROUBADOUR_OUTFIT: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_TroubadourOutfit_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_TroubadourOutfit_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_TroubadourOutfit_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_TroubadourOutfit_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_TroubadourOutfit_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_TroubadourOutfit_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_TroubadourOutfit_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_TroubadourOutfit_7001",
    },
    VALENTINE_CANDIES: {
        [ItemQuality.NONE]: "DesignDataItem:Id_Item_ValentineCandies",
    },
    VIKING_HELM: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_VikingHelm_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_VikingHelm_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_VikingHelm_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_VikingHelm_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_VikingHelm_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_VikingHelm_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_VikingHelm_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_VikingHelm_7001",
    },
    VIKING_SWORD: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_VikingSword_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_VikingSword_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_VikingSword_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_VikingSword_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_VikingSword_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_VikingSword_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_VikingSword_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_VikingSword_7001",
    },
    VISORED_BARBUTA_HELM: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_VisoredBarbutaHelm_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_VisoredBarbutaHelm_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_VisoredBarbutaHelm_2001",
        [ItemQuality.UNCOMMON]:
            "DesignDataItem:Id_Item_VisoredBarbutaHelm_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_VisoredBarbutaHelm_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_VisoredBarbutaHelm_5001",
        [ItemQuality.LEGENDARY]:
            "DesignDataItem:Id_Item_VisoredBarbutaHelm_6001",
        [ItemQuality.ARTIFACT]:
            "DesignDataItem:Id_Item_VisoredBarbutaHelm_7001",
    },
    WANDERER_ATTIRE: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_WandererAttire_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_WandererAttire_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_WandererAttire_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_WandererAttire_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_WandererAttire_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_WandererAttire_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_WandererAttire_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_WandererAttire_7001",
    },
    WAR_MAUL: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_WarMaul_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_WarMaul_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_WarMaul_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_WarMaul_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_WarMaul_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_WarMaul_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_WarMaul_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_WarMaul_7001",
    },
    WARDEN_OUTFIT: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_WardenOutfit_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_WardenOutfit_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_WardenOutfit_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_WardenOutfit_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_WardenOutfit_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_WardenOutfit_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_WardenOutfit_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_WardenOutfit_7001",
    },
    WIND_LOCKET: {
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_WindLocket_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_WindLocket_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_WindLocket_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_WindLocket_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_WindLocket_7001",
    },
    WINDLASS_CROSSBOW: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_WindlassCrossbow_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_WindlassCrossbow_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_WindlassCrossbow_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_WindlassCrossbow_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_WindlassCrossbow_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_WindlassCrossbow_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_WindlassCrossbow_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_WindlassCrossbow_7001",
    },
    WIZARD_HAT: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_WizardHat_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_WizardHat_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_WizardHat_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_WizardHat_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_WizardHat_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_WizardHat_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_WizardHat_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_WizardHat_7001",
    },
    WIZARD_SHOES: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_WizardShoes_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_WizardShoes_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_WizardShoes_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_WizardShoes_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_WizardShoes_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_WizardShoes_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_WizardShoes_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_WizardShoes_7001",
    },
    WIZARD_STAFF: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_WizardStaff_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_WizardStaff_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_WizardStaff_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_WizardStaff_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_WizardStaff_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_WizardStaff_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_WizardStaff_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_WizardStaff_7001",
    },
    ZWEIHANDER: {
        [ItemQuality.JUNK]: "DesignDataItem:Id_Item_Zweihander_0001",
        [ItemQuality.POOR]: "DesignDataItem:Id_Item_Zweihander_1001",
        [ItemQuality.COMMON]: "DesignDataItem:Id_Item_Zweihander_2001",
        [ItemQuality.UNCOMMON]: "DesignDataItem:Id_Item_Zweihander_3001",
        [ItemQuality.RARE]: "DesignDataItem:Id_Item_Zweihander_4001",
        [ItemQuality.EPIC]: "DesignDataItem:Id_Item_Zweihander_5001",
        [ItemQuality.LEGENDARY]: "DesignDataItem:Id_Item_Zweihander_6001",
        [ItemQuality.ARTIFACT]: "DesignDataItem:Id_Item_Zweihander_7001",
    },
};

export const itemConfigToItemId = (
    itemKey: ItemKey,
    quality: ItemQuality
): string => {
    return (Items as any)[itemKey][quality];
};

export const itemIdToItemConfig = (itemId: string) => {
    return {
        itemKey: itemNameFromClient(itemId),
        quality: itemQualityFromClient(itemId),
    };
};

export type ItemKey =
    | "ADVENTURER_BOOTS"
    | "ADVENTURER_CLOAK"
    | "ADVENTURER_TUNIC"
    | "ALE"
    | "ARMET"
    | "ARMING_SWORD"
    | "ARROW"
    | "BADGER_PENDANT"
    | "BANDAGE"
    | "BARBUTA_HELM"
    | "BARDIC_PANTS"
    | "BARDICHE"
    | "BARE_HAND_RIGHT"
    | "BARE_HANDS"
    | "BATTLE_AXE"
    | "BLUE_SAPPHIRE"
    | "BOLT"
    | "BUCKLER"
    | "CAMPFIRE_KIT"
    | "CANDY_CANE"
    | "CANDY_CORNS"
    | "CASTILLON_DAGGER"
    | "CEREMONIAL_DAGGER"
    | "CHAPEL_DE_FER"
    | "CHAPERON"
    | "CLARITY_POTION"
    | "CLOTH_PANTS"
    | "COBALT_CHAPEL_DE_FER"
    | "COBALT_FROCK"
    | "COBALT_HAT"
    | "COBALT_HEAVY_GAUNTLET"
    | "COBALT_HOOD"
    | "COBALT_INGOTS"
    | "COBALT_LEATHER_GLOVES"
    | "COBALT_LIGHTFOOT_BOOTS"
    | "COBALT_ORES"
    | "COBALT_PLATE_BOOTS"
    | "COBALT_PLATE_PANTS"
    | "COBALT_POWDER"
    | "COBALT_REGAL_GAMBESON"
    | "COBALT_TEMPLAR_ARMOR"
    | "COBALT_TROUSERS"
    | "COBALT_VIKING_HELM"
    | "COIN_PURSE"
    | "CROSSBOW"
    | "CRYSTAL_BALL"
    | "CRYSTAL_SWORD"
    | "DARK_PLATE_ARMOR"
    | "DIAMOND"
    | "DOUBLE_AXE"
    | "DOUBLET"
    | "EMERALD"
    | "EXPLOSION_BOTTLE"
    | "FALCHION"
    | "FEATHERED_HAT"
    | "FELLING_AXE"
    | "FINE_CUIRASS"
    | "FLANGED_MACE"
    | "FOREST_HOOD"
    | "FOX_PENDANT"
    | "FRANCISCA_AXE"
    | "FROCK"
    | "FROST_AMULET"
    | "GEM_NECKLACE"
    | "GEM_RING"
    | "GJERMUNDBU"
    | "GOLD_BAND"
    | "GOLD_BANGLE_1_B"
    | "GOLD_BANGLE_1_C"
    | "GOLD_BANGLE_1_D"
    | "GOLD_BANGLE_1_E"
    | "GOLD_BANGLE_1_H"
    | "GOLD_BANGLE_1_I"
    | "GOLD_BANGLE_1_J"
    | "GOLD_BANGLE_2_D"
    | "GOLD_BANGLE_2_G"
    | "GOLD_BANGLE_2_H"
    | "GOLD_BOWL"
    | "GOLD_CANDELABRA"
    | "GOLD_CANDLE_HOLDER"
    | "GOLD_CANDLE_PLATTER"
    | "GOLD_CHALICE_A"
    | "GOLD_CHALICE_B"
    | "GOLD_COIN_BAG"
    | "GOLD_COIN_CHEST"
    | "GOLD_COIN_PURSE"
    | "GOLD_COINS"
    | "GOLD_CROWN"
    | "GOLD_WATERPOT"
    | "GOLDEN_KEY"
    | "HALBERD"
    | "HAND_CROSSBOW"
    | "HATCHET"
    | "HEALING_POTION"
    | "HEATER_SHIELD"
    | "HEAVY_BOOTS"
    | "HEAVY_GAUNTLET"
    | "HEAVY_LEATHER_LEGGINGS"
    | "HORSEMANS_AXE"
    | "HOUNSKULL"
    | "HUNTING_TRAP"
    | "INVISIBILITY_POTION"
    | "KETTLE_HAT"
    | "KRIS_DAGGER"
    | "LACED_TURNSHOE"
    | "LANTERN"
    | "LARGE_SCROLL"
    | "LEATHER_BONNET"
    | "LEATHER_CAP"
    | "LEATHER_CHAUSSES"
    | "LEATHER_GLOVES"
    | "LEATHER_LEGGINGS"
    | "LIGHTFOOT_BOOTS"
    | "LOCKPICK"
    | "LONGBOW"
    | "LONGSWORD"
    | "LOOSE_TROUSERS"
    | "LUTE"
    | "MAGIC_WAND"
    | "MARAUDER_OUTFIT"
    | "METAL_CUP"
    | "MORNING_STAR"
    | "MYSTIC_VESTMENTS"
    | "NECKLACE_OF_PEACE"
    | "NORTHERN_FULL_TUNIC"
    | "OIL_LANTERN"
    | "OLD_SHOES"
    | "ORACLE_ROBE"
    | "OX_PENDANT"
    | "PADDED_LEGGINGS"
    | "PADDED_TUNIC"
    | "PAVISE"
    | "PEARL_NECKLACE"
    | "PHOENIX_CHOKER"
    | "PICKAXE"
    | "PLATE_BOOTS"
    | "PLATE_PANTS"
    | "PROTECTION_POTION"
    | "QUARTERSTAFF"
    | "RADIANT_CLOAK"
    | "RANGER_HOOD"
    | "RAPIER"
    | "RAT_PENDANT"
    | "RAWHIDE_GLOVES"
    | "RECURVE_BOW"
    | "REGAL_GAMBESON"
    | "REINFORCED_GLOVES"
    | "RING_OF_COURAGE"
    | "RING_OF_QUICKNESS"
    | "RING_OF_RESOLVE"
    | "RING_OF_SURVIVAL"
    | "RIVETED_GLOVES"
    | "ROGUE_COWL"
    | "RONDEL_DAGGER"
    | "ROUND_SHIELD"
    | "RUBY"
    | "RUBYSILVER_ADVENTURER_BOOTS"
    | "RUBYSILVER_BARBUTA_HELM"
    | "RUBYSILVER_DOUBLET"
    | "RUBYSILVER_FINE_CUIRASS"
    | "RUBYSILVER_HEAVY_GAUNTLET"
    | "RUBYSILVER_HOOD"
    | "RUBYSILVER_INGOTS"
    | "RUBYSILVER_LEATHER_CAP"
    | "RUBYSILVER_LEATHER_LEGGINGS"
    | "RUBYSILVER_MYSTIC_VESTMENTS"
    | "RUBYSILVER_ORES"
    | "RUBYSILVER_PLATE_BOOTS"
    | "RUBYSILVER_PLATE_PANTS"
    | "RUBYSILVER_POWDER"
    | "RUBYSILVER_RAWHIDE_GLOVES"
    | "RUGGED_BOOTS"
    | "SHADOW_HOOD"
    | "SHADOW_MASK"
    | "SHORT_SWORD"
    | "SILVER_CHALICE"
    | "SILVER_COIN"
    | "SKULL_KEY"
    | "SOUL_HEART"
    | "SOUL_TORQ"
    | "SPEAR"
    | "SPELLBOOK"
    | "SPLENDID_CLOAK"
    | "STILETTO_DAGGER"
    | "STRAW_HAT"
    | "SURGICAL_KIT"
    | "SURVIVAL_BOW"
    | "TATTERED_CLOAK"
    | "TEMPLAR_ARMOR"
    | "THROWING_KNIFE"
    | "TORCH"
    | "TROLL_BLOOD"
    | "TROUBADOUR_OUTFIT"
    | "VALENTINE_CANDIES"
    | "VIKING_HELM"
    | "VIKING_SWORD"
    | "VISORED_BARBUTA_HELM"
    | "WANDERER_ATTIRE"
    | "WAR_MAUL"
    | "WARDEN_OUTFIT"
    | "WIND_LOCKET"
    | "WINDLASS_CROSSBOW"
    | "WIZARD_HAT"
    | "WIZARD_SHOES"
    | "WIZARD_STAFF"
    | "ZWEIHANDER";

export const itemIdToMaxCount = (itemId: string): number => {
    switch (itemId) {
        case Items.GOLD_COINS.NONE:
            return 10;

        case Items.GOLD_COIN_PURSE.NONE:
            return 1;

        case Items.BANDAGE.JUNK:
        case Items.BANDAGE.POOR:
        case Items.BANDAGE.COMMON:
        case Items.BANDAGE.UNCOMMON:
        case Items.BANDAGE.RARE:
        case Items.BANDAGE.EPIC:
        case Items.BANDAGE.ARTIFACT:
        case Items.BANDAGE.LEGENDARY:
            return 3;

        case Items.HEALING_POTION.JUNK:
        case Items.HEALING_POTION.POOR:
        case Items.HEALING_POTION.COMMON:
        case Items.HEALING_POTION.UNCOMMON:
        case Items.HEALING_POTION.RARE:
        case Items.HEALING_POTION.EPIC:
        case Items.HEALING_POTION.ARTIFACT:
        case Items.HEALING_POTION.LEGENDARY:
        case Items.CLARITY_POTION.JUNK:
        case Items.CLARITY_POTION.POOR:
        case Items.CLARITY_POTION.COMMON:
        case Items.CLARITY_POTION.UNCOMMON:
        case Items.CLARITY_POTION.RARE:
        case Items.CLARITY_POTION.EPIC:
        case Items.CLARITY_POTION.ARTIFACT:
        case Items.CLARITY_POTION.LEGENDARY:
        case Items.PROTECTION_POTION.JUNK:
        case Items.PROTECTION_POTION.POOR:
        case Items.PROTECTION_POTION.COMMON:
        case Items.PROTECTION_POTION.UNCOMMON:
        case Items.PROTECTION_POTION.RARE:
        case Items.PROTECTION_POTION.EPIC:
        case Items.PROTECTION_POTION.ARTIFACT:
        case Items.PROTECTION_POTION.LEGENDARY:
        case Items.INVISIBILITY_POTION.JUNK:
        case Items.INVISIBILITY_POTION.POOR:
        case Items.INVISIBILITY_POTION.COMMON:
        case Items.INVISIBILITY_POTION.UNCOMMON:
        case Items.INVISIBILITY_POTION.RARE:
        case Items.INVISIBILITY_POTION.EPIC:
        case Items.INVISIBILITY_POTION.ARTIFACT:
        case Items.INVISIBILITY_POTION.LEGENDARY:
            return 3;

        default:
            return 0;
    }
};

export const itemIdToMaxItemContents = (itemId: string): number => {
    switch (itemId) {
        case Items.GOLD_COIN_PURSE.NONE:
            return 100;

        default:
            return 0;
    }
};
