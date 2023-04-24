import net from "net";
import {
    sc2sAccountCharacterCreateReq,
    sc2sAccountCharacterListReq,
    sloginCharacterInfo,
    ss2cAccountCharacterCreateRes,
    ss2cAccountCharacterListRes,
} from "../protos/ts/Account";
import { bufferReader } from "../utils/bufferReader";
import { db } from "../services/db";
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

export const createCharacter = async (data: Buffer, socket: net.Socket) => {
    const socketContext = socketContextManager.getBySocket(socket);
    const characterData = sc2sAccountCharacterCreateReq.decode(
        bufferReader(data)
    );

    let res = ss2cAccountCharacterCreateRes.create({});

    if (!socketContext || !socketContext.userId) {
        res.result = PacketResult.FAIL_GENERAL;
        return res;
    }

    const character_db = await db.character.create({
        data: {
            nickname: characterData.nickName,
            user_id: socketContext.userId,
            class: characterData.characterClass,
            gender: characterData.gender,
            level: 1,
        },
    });

    const items = [
        generateTorch(),
        generateRoundShield(),
        generateLantern(),
        generateSword(),
        generatePants(),
        generateTunic(),
        generateBandage(),
    ];

    let db_items = [];

    for (let item of items) {
        db_items.push(
            await db.inventory.create({
                data: {
                    character_id: character_db.id,
                    inventory_id: item.inventoryId,
                    item_count: item.itemCount,
                    item_id: item.itemId,
                    properties: JSON.stringify(item.primaryPropertyArray),
                    slot_id: item.slotId,
                },
            })
        );
    }

    res.result = PacketResult.SUCCESS;

    return res;
};

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
