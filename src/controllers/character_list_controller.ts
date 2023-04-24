import net from "net";
import {
    sc2sAccountCharacterCreateReq,
    sc2sAccountCharacterListReq,
    sloginCharacterInfo,
    ss2cAccountCharacterCreateRes,
    ss2cAccountCharacterListRes,
} from "../protos/ts/Account";
import { bufferReader } from "../utils/bufferReader";
import { db } from "../lib/db";
import { socketContextManager } from "../utils/SocketContextManager";
import {
    generateBandage,
    generateLantern,
    generatePants,
    generateRoundShield,
    generateSword,
    generateTorch,
    generateTunic,
} from "../lib/items/test";
import { PacketResult } from "../protos/ts/_PacketCommand";

export const listCharacters = async (data: Buffer, socket: net.Socket) => {
    //
    const socketContext = socketContextManager.getBySocket(socket);
    const characterListReq = sc2sAccountCharacterListReq.decode(
        bufferReader(data)
    );

    let res = ss2cAccountCharacterListRes.create({});

    if (!socketContext || !socketContext.userId) {
        return res;
    }

    const characters: sloginCharacterInfo[] = [];

    const characters_db = await db.character.findMany({
        where: {
            user_id: socketContext.userId,
        },
    });

    for (let character_db of characters_db) {
        //
        const streamingNickname = `Fighter#${Math.floor(
            Math.random() * (1700000 - 1000000) + 1000000
        )}`;

        characters.push({
            characterClass: character_db.class,
            characterId: character_db.id.toString(),
            gender: character_db.gender,
            level: character_db.level,
            createAt: character_db.created_at.getTime(),
            lastloginDate: character_db.last_login.getTime(),
            nickName: {
                karmaRating: 0,
                originalNickName: character_db.nickname,
                streamingModeNickName: streamingNickname,
            },
            equipCharacterSkinList: [],
            equipItemList: [],
            equipItemSkinList: [],
        });
    }

    res.pageIndex = characterListReq.pageIndex;
    res.characterList = characters;
    res.totalCharacterCount = characters.length;

    return res;
};
