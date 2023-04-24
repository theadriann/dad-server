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
import {
    sc2sClassEquipInfoReq,
    ss2cClassEquipInfoRes,
} from "../protos/ts/CharacterClass";
import { saccountNickname, scharacterInfo } from "../protos/ts/_Character";
import {
    sc2sLobbyCharacterInfoReq,
    ss2cLobbyCharacterInfoRes,
} from "../protos/ts/Lobby";

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
    const req = sc2sAccountCharacterListReq.decode(bufferReader(data));

    let res = ss2cAccountCharacterListRes.create({
        pageIndex: req.pageIndex,
    });

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

        characters.push(
            sloginCharacterInfo.create({
                characterClass: character_db.class,
                characterId: character_db.id.toString(),
                gender: character_db.gender,
                level: character_db.level,
                createAt: character_db.created_at.getTime() / 1000,
                lastloginDate: character_db.last_login.getTime() / 1000,
                nickName: saccountNickname.create({
                    originalNickName: character_db.nickname,
                    streamingModeNickName: streamingNickname,
                    karmaRating: 0,
                }),
                equipItemList: [
                    generateTorch(),
                    generateRoundShield(),
                    generateLantern(),
                    generateSword(),
                    generatePants(),
                    generateTunic(),
                    generateBandage(),
                ],
                equipItemSkinList: [],
                equipCharacterSkinList: [],
            })
        );
    }

    res.pageIndex = req.pageIndex;
    res.characterList = characters;
    res.totalCharacterCount = characters.length;

    console.log(JSON.stringify(res, null, 2));

    return res;
};

export const getCharacterInfo = async (data: Buffer, socket: net.Socket) => {
    //
    const socketContext = socketContextManager.getBySocket(socket);
    const req = sc2sLobbyCharacterInfoReq.decode(bufferReader(data));

    let res = ss2cLobbyCharacterInfoRes.create({});
    res.result = PacketResult.FAIL_GENERAL;

    if (!socketContext || !socketContext.userId || !socketContext.characterId) {
        return res;
    }

    const character_db = await db.character.findFirst({
        where: {
            id: socketContext.characterId,
        },
    });

    if (!character_db) {
        return res;
    }

    const streamingNickname = `Fighter#${Math.floor(
        Math.random() * (1700000 - 1000000) + 1000000
    )}`;

    res.result = PacketResult.SUCCESS;
    res.characterDataBase = scharacterInfo.create({
        accountId: socketContext.userId.toString(),
        characterId: socketContext.characterId.toString(),
        characterClass: character_db.class,
        gender: character_db.gender,
        level: character_db.level,
        nickName: saccountNickname.create({
            originalNickName: character_db.nickname,
            streamingModeNickName: streamingNickname,
            karmaRating: 0,
        }),
        CharacterItemList: [
            generateTorch(),
            generateRoundShield(),
            generateLantern(),
            generateSword(),
            generatePants(),
            generateTunic(),
            generateBandage(),
        ],
        CharacterStorageItemList: [],
    });

    return res;
};

export const getClassEquipInfo = async (data: Buffer, socket: net.Socket) => {
    //
    const socketContext = socketContextManager.getBySocket(socket);
    const req = sc2sClassEquipInfoReq.decode(bufferReader(data));

    let res = ss2cClassEquipInfoRes.create({});

    res.equips = [];

    if (!socketContext || !socketContext.userId) {
        return res;
    }

    return res;
};
