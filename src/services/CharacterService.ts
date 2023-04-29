//
import { createCharacterNickname } from "@/controllers/CharacterController";
import { FriendLocation, scharacterFriendInfo } from "@/protos/ts/_Character";
import { DefineCommon_MetaLocation } from "@/protos/ts/_Defins";
import { db } from "@/services/db";
import { lobbyState } from "@/state/LobbyManager";

//
export const getDbCharacterById = async (chracterId: number) => {
    return await db.character.findFirst({
        where: {
            id: chracterId,
        },
        include: {
            inventory: true,
        },
    });
};

//
export const getCharacterFriendInfoById = async (characterId: number) => {
    //
    const user = lobbyState.getByCharacterId(characterId);

    if (!user?.characterDb || user.characterDb.id !== characterId) {
        await user?.loadCharacterData();
    }

    if (!user?.characterDb) {
        return scharacterFriendInfo.create({});
    }

    return scharacterFriendInfo.create({
        accountId: user.userId!.toString(),
        characterId: user.characterId!.toString(),
        characterClass: user.characterDb.class,
        // characterClass: "DesignDataPlayerCharacter:Id_PlayerCharacter_Fighter",
        gender: user.characterDb.gender,
        level: user.characterDb.level,
        // locationStatus: DefineCommon_MetaLocation.PLAY,
        locationStatus: FriendLocation.Friend_Location_LOBBY,
        nickName: user.characterNicknameObject,
        PartyMemeberCount: user.getCurrentPartySize(),
        PartyMaxMemeberCount: 3,
    });
};
