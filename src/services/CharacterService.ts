//
import { createCharacterNickname } from "@/controllers/CharacterController";
import { FriendLocation, scharacterFriendInfo } from "@/protos/ts/_Character";
import { DefineCommon_MetaLocation } from "@/protos/ts/_Defins";
import { db } from "@/services/db";

//
export const getDbCharacterById = async (chracterId: number) => {
    return await db.character.findFirst({
        where: {
            id: chracterId,
        },
    });
};

//
export const getCharacterFriendInfoById = async (characterId: number) => {
    //
    const dbCharacter = await getDbCharacterById(characterId);

    if (!dbCharacter) {
        return scharacterFriendInfo.create({});
    }

    return scharacterFriendInfo.create({
        accountId: dbCharacter.user_id.toString(),
        characterId: dbCharacter.id.toString(),
        characterClass: dbCharacter.class,
        gender: dbCharacter.gender,
        level: dbCharacter.level,
        // locationStatus: DefineCommon_MetaLocation.PLAY,
        locationStatus: FriendLocation.Friend_Location_LOBBY,
        nickName: await createCharacterNickname(dbCharacter.nickname),
        PartyMemeberCount: 1,
        PartyMaxMemeberCount: 3,
    });
};
