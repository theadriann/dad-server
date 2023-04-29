import { CharacterModelProps } from "@/models/Character";
import { CharacterClass } from "@/models/game/enums/CharacterClass";
import { PERK_DATA } from "@/models/game/enums/Perks";
import { SPELLS_DATA } from "@/models/game/enums/Spells";

const generateFighterStartItems: () => CharacterModelProps = () => ({
    perk1: PERK_DATA.FIGHTER.ADRENALINE_SPIKE,
    spell1: SPELLS_DATA.FIGHTER.Sprint,
    spell2: SPELLS_DATA.FIGHTER.AdrenalineRush,
});

const generateBarbarianStartItems: () => CharacterModelProps = () => ({
    perk1: PERK_DATA.BARBARIAN.AXE_SPECIALIZATION,
    spell1: SPELLS_DATA.BARBARIAN.Rage,
    spell2: SPELLS_DATA.BARBARIAN.SavageRoar,
});

const generateRogueStartItems: () => CharacterModelProps = () => ({
    perk1: PERK_DATA.ROGUE.PICKPOCKET,
    spell1: SPELLS_DATA.ROGUE.Rupture,
    spell2: SPELLS_DATA.ROGUE.Hide,
});

const generateRangerStartItems: () => CharacterModelProps = () => ({
    perk1: PERK_DATA.RANGER.SHARPSHOOTER,
    spell1: SPELLS_DATA.RANGER.QuickFire,
    spell2: SPELLS_DATA.RANGER.FieldRation,
});

const generateWizardStartItems: () => CharacterModelProps = () => ({
    perk1: PERK_DATA.WIZARD.ARCANE_FEEDBACK,
    spell1: SPELLS_DATA.WIZARD.Meditation,
    spell2: SPELLS_DATA.WIZARD.SpellMemory1,
});

const generateClericStartItems: () => CharacterModelProps = () => ({
    perk1: PERK_DATA.CLERIC.UNDEAD_SLAYING,
    spell1: SPELLS_DATA.CLERIC.DivineProtection,
    spell2: SPELLS_DATA.CLERIC.SpellMemory1,
});

const generateBardStartItems: () => CharacterModelProps = () => ({
    perk1: PERK_DATA.BARD.LORE_MASTERY,
    spell1: SPELLS_DATA.BARD.Dissonance,
    spell2: SPELLS_DATA.BARD.MusicMemory1,
});

export const generateStarterClassEquip = (characterClass: CharacterClass) => {
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
