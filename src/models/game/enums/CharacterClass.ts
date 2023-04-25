// TODO: refactor
export const CharacterClassKeys = {
    BARBARIAN: "BARBARIAN",
    BARD: "BARD",
    CLERIC: "CLERIC",
    FIGHTER: "FIGHTER",
    RANGER: "RANGER",
    ROGUE: "ROGUE",
    WIZARD: "WIZARD",
};

export const CharacterClass = {
    BARBARIAN: "DesignDataPlayerCharacter:Id_PlayerCharacter_Barbarian",
    BARD: "DesignDataPlayerCharacter:Id_PlayerCharacter_Bard",
    CLERIC: "DesignDataPlayerCharacter:Id_PlayerCharacter_Cleric",
    FIGHTER: "DesignDataPlayerCharacter:Id_PlayerCharacter_Fighter",
    RANGER: "DesignDataPlayerCharacter:Id_PlayerCharacter_Ranger",
    ROGUE: "DesignDataPlayerCharacter:Id_PlayerCharacter_Rogue",
    WIZARD: "DesignDataPlayerCharacter:Id_PlayerCharacter_Wizard",
};

export type CharacterClassKey = keyof typeof CharacterClass;
export type CharacterClassClientStr = string;

export const characterClassFromClient = (
    characterClass: string
): CharacterClassKey => {
    return (
        (Object.keys(CharacterClass).find(
            (key: any) =>
                CharacterClass[key as CharacterClassKey] === characterClass
        ) as CharacterClassKey) || CharacterClass.FIGHTER
    );
};

export const characterClassToClient = (characterClass: CharacterClassKey) => {
    return CharacterClass[characterClass] || "";
};
