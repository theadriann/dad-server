import { Character, CharacterModelProps } from "@/models/Character";
import { CharacterClass } from "@/models/game/enums/CharacterClass";
import { generateFighterStartItems } from "../items/classes/strarterGear";
import { generateStarterGear } from "../items/classes/strarterGear";
import { generateStarterClassEquip } from "../perks/generateStarterClassEquip";

export const generateNewCharacter = (
    characterClass: CharacterClass,
    characterProps?: CharacterModelProps
) => {
    //
    return Character.fromJSON({
        ...characterProps,
        characterClass: characterClass,
        ...generateStarterClassEquip(characterClass),
        items: generateStarterGear(characterClass),
    });
};
