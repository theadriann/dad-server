import net from "net";
import { bufferReader } from "../utils/bufferReader";
import {
    sc2sCustomizeActionInfoReq,
    sc2sCustomizeCharacterInfoReq,
    sc2sCustomizeEmoteInfoReq,
    sc2sCustomizeItemInfoReq,
    sc2sCustomizeLobbyEmoteInfoReq,
    ss2cCustomizeActionInfoRes,
    ss2cCustomizeCharacterInfoRes,
    ss2cCustomizeEmoteInfoRes,
    ss2cCustomizeItemInfoRes,
    ss2cCustomizeLobbyEmoteInfoRes,
} from "../protos/ts/Customize";
import { db } from "../services/db";
import { lobbyState } from "@/state/LobbyManager";

export const customizeCharacterInfo = async (
    data: Buffer,
    socket: net.Socket
) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const characterListReq = sc2sCustomizeCharacterInfoReq.decode(
        bufferReader(data)
    );

    let res = ss2cCustomizeCharacterInfoRes.create({});

    if (!lobbyUser?.hasCharacterLoaded) {
        return res;
    }

    const character_db = await db.character.findFirst({
        where: {
            id: lobbyUser.characterId!,
        },
    });

    if (!character_db) {
        return res;
    }

    res.loopFlag = 0;
    res.customizeCharacters = [
        {
            customizeCharacterId: character_db.id.toString(),
            isEquip: 1,
            isNew: 0,
        },
    ];

    return res;
};

export const getEmoteInfo = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sCustomizeEmoteInfoReq.decode(bufferReader(data));

    let res = ss2cCustomizeEmoteInfoRes.create({});

    res.loopFlag = 0;
    res.emotes = [];

    if (!lobbyUser || !lobbyUser.userId) {
        return res;
    }

    return res;
};

export const getCustomizeItemInfo = async (
    data: Buffer,
    socket: net.Socket
) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sCustomizeItemInfoReq.decode(bufferReader(data));

    let res = ss2cCustomizeItemInfoRes.create({});

    res.loopFlag = 0;
    res.customizeItems = [];

    if (!lobbyUser || !lobbyUser.userId) {
        return res;
    }

    return res;
};

export const getLobbyEmoteInfo = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sCustomizeLobbyEmoteInfoReq.decode(bufferReader(data));

    let res = ss2cCustomizeLobbyEmoteInfoRes.create({});

    res.loopFlag = 0;
    res.customizeLobbyEmoteIds = [];

    if (!lobbyUser || !lobbyUser.userId) {
        return res;
    }

    return res;
};

export const getCustomizeActionInfo = async (
    data: Buffer,
    socket: net.Socket
) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sCustomizeActionInfoReq.decode(bufferReader(data));

    let res = ss2cCustomizeActionInfoRes.create({});

    res.loopFlag = 0;
    res.customizeActionIds = [];

    if (!lobbyUser || !lobbyUser.userId) {
        return res;
    }

    return res;
};
