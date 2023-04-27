//
export const EffectTypes = {
    ACTION_SPEED:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_ActionSpeed",
    AGILITY: "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_Agility",
    ARMOR_PENETRATION:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_ArmorPenetration",
    ARMOR_RATING:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_ArmorRating",
    ARMOR_RATING_ADD:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_ArmorRatingAdd",
    BUFF_DURATION_BONUS:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_BuffDurationBonus",
    DEBUFF_DURATION_BONUS:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_DebuffDurationBonus",
    HEADSHOT_REDUCTION_MOD:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_HeadshotReductionMod",
    ITEM_EQUIP_SPEED:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_ItemEquipSpeed",
    KNOWLEDGE:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_Knowledge",
    MAGICAL_DAMAGE:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MagicalDamage",
    MAGICAL_DAMAGE_ADD:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MagicalDamageAdd",
    MAGICAL_DAMAGE_BONUS:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MagicalDamageBonus",
    MAGICAL_DAMAGE_REDUCTION:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MagicalDamageReduction",
    MAGICAL_DAMAGE_TRUE:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MagicalDamageTrue",
    MAGICAL_HEALING:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MagicalHealing",
    MAGICAL_INTERACTION_SPEED:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MagicalInteractionSpeed",
    MAGICAL_POWER:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MagicalPower",
    MAGICAL_WEAPON_DAMAGE:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MagicalWeaponDamage",
    MAGIC_PENETRATION:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MagicPenetration",
    MAGIC_REGISTANCE:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MagicRegistance",
    MAX_HEALTH_ADD:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MaxHealthAdd",
    MAX_HEALTH_BONUS:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MaxHealthBonus",
    MOVESPEED:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MoveSpeed",
    MOVESPEED_ADD:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MoveSpeedAdd",
    MOVESPEED_BONUS:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_MoveSpeedBonus",
    PHYSICAL_DAMAGE_ADD:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_PhysicalDamageAdd",
    PHYSICAL_DAMAGE_BONUS:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_PhysicalDamageBonus",
    PHYSICAL_DAMAGE_REDUCTION:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_PhysicalDamageReduction",
    PHYSICAL_DAMAGE_TRUE:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_PhysicalDamageTrue",
    PHYSICAL_HEALING:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_PhysicalHealing",
    PHYSICAL_POWER:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_PhysicalPower",
    PHYSICAL_WEAPON_DAMAGE:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_PhysicalWeaponDamage",
    PHYSICAL_WEAPON_DAMAGE_ADD:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_PhysicalWeaponDamageAdd",
    PRESTIGE_ITEM_DROP:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_PrestigeItemDrop",
    PRIMITIVE:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_Primitive",
    ALL_ATTRIBUTES:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_Primitive",
    PROJECTILE_REDUCTION_MOD:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_ProjectileReductionMod",
    REGULAR_INTERACTION_SPEED:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_RegularInteractionSpeed",
    RESOURCEFULNESS:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_Resourcefulness",
    SPELL_CAPACITY_ADD:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_SpellCapacityAdd",
    SPELL_CAPACITY_BONUS:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_SpellCapacityBonus",
    SPELL_CASTING_SPEED:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_SpellCastingSpeed",
    STRENGTH: "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_Strength",
    UTILITY_EFFECTIVENESS_ADD:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_UtilityEffectivenessAdd",
    UTILITY_EFFECTIVENESS_BONUS:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_UtilityEffectivenessBonus",
    WEIGHT_LIMIT_ADD:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_WeightLimitAdd",
    WEIGHT_LIMIT_BONUS:
        "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_WeightLimitBonus",
    WILL: "DesignDataItemPropertyType:Id_ItemPropertyType_Effect_Will",
};

export type EffectTypeKey = keyof typeof EffectTypes;
export type EffectTypeValue = (typeof EffectTypes)[EffectTypeKey];

export const EffectValueToKey = (value: EffectTypeKey) => {
    return (Object.keys(EffectTypes) as any).find(
        (key: EffectTypeKey) => EffectTypes[key] === value
    );
};
