import { CharacterClass } from "@/models/game/enums/CharacterClass";
import { PERK_DATA } from "@/models/game/enums/Perks";

const getBarbarianPerks = () => [
    "DesignDataPerk:Id_Perk_AxeSpecialization",
    "DesignDataPerk:Id_Perk_Berserker",
    "DesignDataPerk:Id_Perk_Carnage",
    "DesignDataPerk:Id_Perk_IronWill",
    "DesignDataPerk:Id_Perk_MoraleBoost",
    "DesignDataPerk:Id_Perk_Savage",
    "DesignDataPerk:Id_Perk_Crush",
    "DesignDataPerk:Id_Perk_Robust",
    "DesignDataPerk:Id_Perk_TwoHander",
    "DesignDataPerk:Id_Perk_PotionChugger",
    "DesignDataPerk:Id_Perk_Executioner",
];

const getBardPerks = () => [
    "DesignDataPerk:Id_Perk_LoreMastery",
    "DesignDataPerk:Id_Perk_MelodicProtection",
    "DesignDataPerk:Id_Perk_RapierMastery",
    "DesignDataPerk:Id_Perk_WanderersLuck",
    "DesignDataPerk:Id_Perk_WarSong",
];

const getClericPerks = () => [
    "DesignDataPerk:Id_Perk_AdvancedHealer",
    "DesignDataPerk:Id_Perk_BluntWeaponMastery",
    "DesignDataPerk:Id_Perk_Brewmaster",
    "DesignDataPerk:Id_Perk_Kindness",
    "DesignDataPerk:Id_Perk_Perseverance",
    "DesignDataPerk:Id_Perk_ProtectionfromEvil",
    "DesignDataPerk:Id_Perk_Requiem",
    "DesignDataPerk:Id_Perk_UndeadSlaying",
    "DesignDataPerk:Id_Perk_HolyAura",
];

const getFighterPerks = () => [
    "DesignDataPerk:Id_Perk_Barricade",
    "DesignDataPerk:Id_Perk_ComboAttack",
    "DesignDataPerk:Id_Perk_Counterattack",
    "DesignDataPerk:Id_Perk_DefenseExpert",
    "DesignDataPerk:Id_Perk_DualWield",
    "DesignDataPerk:Id_Perk_ProjectileResistance",
    "DesignDataPerk:Id_Perk_ShieldExpert",
    "DesignDataPerk:Id_Perk_Swift",
    "DesignDataPerk:Id_Perk_WeaponMastery",
    "DesignDataPerk:Id_Perk_AdrenalineSpike",
    "DesignDataPerk:Id_Perk_Slayer",
];

const getRangerPerks = () => [
    "DesignDataPerk:Id_Perk_CrossbowMastery",
    "DesignDataPerk:Id_Perk_EnhancedHearing",
    "DesignDataPerk:Id_Perk_Kinesthesia",
    "DesignDataPerk:Id_Perk_NimbleHands",
    "DesignDataPerk:Id_Perk_RangedWeaponsExpert",
    "DesignDataPerk:Id_Perk_Sharpshooter",
    "DesignDataPerk:Id_Perk_SpearProficiency",
    "DesignDataPerk:Id_Perk_Tracking",
    "DesignDataPerk:Id_Perk_TrapExpert",
    "DesignDataPerk:Id_Perk_CripplingShot",
    "DesignDataPerk:Id_Perk_QuickReload",
];

const getRoguePerks = () => [
    "DesignDataPerk:Id_Perk_Ambush",
    "DesignDataPerk:Id_Perk_BackAttack",
    "DesignDataPerk:Id_Perk_Creep",
    "DesignDataPerk:Id_Perk_DaggerExpert",
    "DesignDataPerk:Id_Perk_HiddenPocket",
    "DesignDataPerk:Id_Perk_LockpickSet",
    "DesignDataPerk:Id_Perk_Pickpocket",
    "DesignDataPerk:Id_Perk_PoisonedWeapon",
    "DesignDataPerk:Id_Perk_Stealth",
    "DesignDataPerk:Id_Perk_TrapDetection",
    "DesignDataPerk:Id_Perk_DoubleJump",
    "DesignDataPerk:Id_Perk_Jokester",
    "DesignDataPerk:Id_Perk_ShadowRunner",
    "DesignDataPerk:Id_Perk_Thrust",
];

const getWizardPerks = () => [
    "DesignDataPerk:Id_Perk_ArcaneFeedback",
    "DesignDataPerk:Id_Perk_ArcaneMastery",
    "DesignDataPerk:Id_Perk_FireMastery",
    "DesignDataPerk:Id_Perk_IceShield",
    "DesignDataPerk:Id_Perk_ManaSurge",
    "DesignDataPerk:Id_Perk_Melt",
    "DesignDataPerk:Id_Perk_QuickChant",
    "DesignDataPerk:Id_Perk_ReactiveShield",
    "DesignDataPerk:Id_Perk_Sage",
];

export const getClassPerks = (characterClass: CharacterClass) => {
    switch (characterClass) {
        case CharacterClass.BARBARIAN:
            return getBarbarianPerks();
        case CharacterClass.BARD:
            return getBardPerks();
        case CharacterClass.CLERIC:
            return getClericPerks();
        case CharacterClass.FIGHTER:
            return getFighterPerks();
        case CharacterClass.RANGER:
            return getRangerPerks();
        case CharacterClass.ROGUE:
            return getRoguePerks();
        case CharacterClass.WIZARD:
            return getWizardPerks();
        default:
            return [];
    }
};
