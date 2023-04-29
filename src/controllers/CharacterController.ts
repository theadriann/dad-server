import net from "net";
import {
    sc2sAccountCharacterCreateReq,
    sc2sAccountCharacterDeleteReq,
    sc2sAccountCharacterListReq,
    sloginCharacterInfo,
    ss2cAccountCharacterCreateRes,
    ss2cAccountCharacterDeleteRes,
    ss2cAccountCharacterListRes,
} from "../protos/ts/Account";
import { bufferReader } from "../utils/bufferReader";
import { db } from "../services/db";
import { generateStarterGear } from "../generators/items/classes/strarterGear";
import { PacketResult } from "../protos/ts/_PacketCommand";
import {
    sc2sClassEquipInfoReq,
    sc2sClassItemMoveReq,
    sc2sClassLevelInfoReq,
    sc2sClassPerkListReq,
    sc2sClassSkillListReq,
    sc2sClassSpellListReq,
    ss2cClassEquipInfoRes,
    ss2cClassItemMoveRes,
    ss2cClassLevelInfoRes,
    ss2cClassPerkListRes,
    ss2cClassSkillListRes,
    ss2cClassSpellListRes,
} from "../protos/ts/CharacterClass";
import { saccountNickname, scharacterInfo } from "../protos/ts/_Character";
import {
    sc2sLobbyCharacterInfoReq,
    ss2cLobbyCharacterInfoRes,
} from "../protos/ts/Lobby";
import { logger } from "@/utils/loggers";
import { FighterClassSkills } from "@/models/game/enums/ClassSkills";
import { lobbyState } from "@/state/LobbyManager";
import {
    CharacterClass,
    characterClassFromClient,
} from "@/models/game/enums/CharacterClass";
import { Item } from "@/models/Item";
import { random } from "lodash";
import {
    generateStackOfGoldCoinPurse,
    generateStackOfGoldCoins,
} from "@/generators/items/common/gold";
import { getClassPerks } from "@/generators/perks";
import { getClassSkills } from "@/generators/skills";
import { SPerk, SSkill } from "@/protos/ts/_Item";
import { Character } from "@/models/Character";
import { generateNewCharacter } from "@/generators/characters";
import { DefineClass_Move, DefineItem_InventoryId } from "@/protos/ts/_Defins";

export const createCharacter = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sAccountCharacterCreateReq.decode(bufferReader(data));

    let res = ss2cAccountCharacterCreateRes.create({});

    if (!lobbyUser || !lobbyUser.userId) {
        res.result = PacketResult.FAIL_GENERAL;
        return res;
    }

    const characterClass = req.characterClass as CharacterClass;
    const character = generateNewCharacter(characterClass, {
        nickname: req.nickName,
        gender: req.gender,
        userId: lobbyUser.userId,
    });

    // TODO: use items from character

    const character_db = await db.character.create({
        data: {
            ...(character.toDB() as any),
        },
    });

    const items = generateStarterGear(req.characterClass as CharacterClass);

    let db_items = [];

    for (let item of items) {
        db_items.push(
            await db.inventory.create({
                data: {
                    ...item.toDB(),
                    character_id: character_db.id,
                },
            })
        );
    }

    let totalGold = 421;
    let slotId = 0;
    while (totalGold > 0) {
        const randomGold = random(1, 10);
        // const randomGold = random(1, 100);
        const gold =
            randomGold > 10
                ? generateStackOfGoldCoinPurse(randomGold)
                : generateStackOfGoldCoins(randomGold);

        await db.inventory.create({
            data: {
                ...gold.toDB(),
                character_id: character_db.id,
                slot_id: slotId++,
            },
        });

        totalGold -= randomGold;
    }

    res.result = PacketResult.SUCCESS;

    return res;
};

export const deleteCharacter = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sAccountCharacterDeleteReq.decode(bufferReader(data));

    const db_character = await db.character.findFirst({
        where: {
            id: Number(req.characterId),
        },
    });

    if (!db_character) {
        logger.warn(`character_id: ${req.characterId} not found`);
        return ss2cAccountCharacterDeleteRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    if (db_character.user_id !== lobbyUser?.userId) {
        logger.warn(`user_id: ${lobbyUser?.userId} is not owner of character`);
        return ss2cAccountCharacterDeleteRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    // delete inventory
    await db.inventory.deleteMany({
        where: {
            character_id: db_character.id,
        },
    });

    // delete character
    await db.character.delete({
        where: {
            id: db_character.id,
        },
    });

    return ss2cAccountCharacterDeleteRes.create({
        result: PacketResult.SUCCESS,
    });
};

export const listCharacters = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sAccountCharacterListReq.decode(bufferReader(data));

    let res = ss2cAccountCharacterListRes.create({
        pageIndex: req.pageIndex,
    });

    if (!lobbyUser || !lobbyUser.userId) {
        return res;
    }

    const characters: sloginCharacterInfo[] = [];
    const characters_db = await db.character.findMany({
        where: {
            user_id: lobbyUser.userId,
        },
        include: {
            inventory: true,
        },
    });

    for (let character_db of characters_db) {
        //
        const character_items = character_db.inventory
            .map((item) => new Item().fromDB(item).toSItem())
            .filter(
                (item) => item.inventoryId === DefineItem_InventoryId.EQUIPMENT
            );

        characters.push(
            sloginCharacterInfo.create({
                characterClass: character_db.class,
                characterId: character_db.id.toString(),
                gender: character_db.gender,
                level: character_db.level,
                createAt: character_db.created_at.getTime(),
                lastloginDate: character_db.last_login.getTime(),
                nickName: await createCharacterNickname(character_db.nickname),
                equipItemList: character_items,
                equipItemSkinList: [],
                equipCharacterSkinList: [],
            })
        );
    }

    res.pageIndex = req.pageIndex;
    res.characterList = characters;
    res.totalCharacterCount = characters.length;

    logger.debug(JSON.stringify(res, null, 2));

    return res;
};

export const getCharacterInfo = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const char = Character.fromDB(await lobbyUser?.getCharacterDb());

    if (!lobbyUser?.hasCharacterLoaded) {
        return ss2cLobbyCharacterInfoRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    const character_items = char.items.map((item) => item.toSItem());

    return ss2cLobbyCharacterInfoRes.create({
        result: PacketResult.SUCCESS,
        characterDataBase: {
            accountId: lobbyUser.userId!.toString(),
            characterId: lobbyUser.characterId!.toString(),
            characterClass: char.characterClass,
            gender: char.gender,
            level: char.level,
            nickName: lobbyUser.characterNicknameObject,
            CharacterItemList: character_items,
            CharacterStorageItemList: [],
        },
    });
};

export const getClassLevelInfo = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sClassLevelInfoReq.decode(bufferReader(data));
    const char = Character.fromDB(await lobbyUser?.getCharacterDb());

    return ss2cClassLevelInfoRes.create({
        exp: 0,
        expBegin: 0,
        expLimit: 0,
        level: char.level,
        rewardPoint: 0,
    });
};

export const getClassEquipInfo = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sClassEquipInfoReq.decode(bufferReader(data));
    const char = Character.fromDB(await lobbyUser?.getCharacterDb());

    let res = ss2cClassEquipInfoRes.create({});

    if (!char.id) {
        return res;
    }

    res.equips = char.toClassEquipList();

    if (!lobbyUser || !lobbyUser.userId) {
        return res;
    }

    return res;
};

export const getClassPerkList = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sClassPerkListReq.decode(bufferReader(data));
    const character = Character.fromDB(await lobbyUser?.getCharacterDb());
    const characterClassEquipList = character.toClassEquipList();

    // return ss2cClassPerkListRes.create({
    //     perks: getClassPerks((lobbyUser?.characterDb?.class || "") as any).map(
    //         (perkId: string, index: number) => {
    //             return {
    //                 index: index,
    //                 perkId: perkId,
    //             } as SPerk;
    //         }
    //     ),
    // });

    return ss2cClassPerkListRes.create({
        perks: getClassPerks((lobbyUser?.characterDb?.class || "") as any)
            .map((perkId: string, index: number) => {
                return {
                    index: index,
                    perkId: perkId,
                } as SPerk;
            })
            .filter((perkId: SPerk) => {
                return !characterClassEquipList.find((equip) => {
                    return equip.equipId === perkId.perkId;
                });
            }),
    });
};

export const getClassSkillList = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sClassSkillListReq.decode(bufferReader(data));
    const character = Character.fromDB(await lobbyUser?.getCharacterDb());
    const characterClassEquipList = character.toClassEquipList();

    return ss2cClassSkillListRes.create({
        skills: getClassSkills((lobbyUser?.characterDb?.class || "") as any)
            .map((skillId: string, index: number) => {
                return {
                    index: index,
                    skillId: skillId,
                } as SSkill;
            })
            .filter((skill: SSkill) => {
                return !characterClassEquipList.find((equip) => {
                    return equip.equipId === skill.skillId;
                });
            }),
    });
};

export const getClassSpellList = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sClassSpellListReq.decode(bufferReader(data));

    // req.maxSpellMemory = 0;

    return ss2cClassSpellListRes.create({
        spells: [],
    });
};

export const classItemMoveReq = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sClassItemMoveReq.decode(bufferReader(data));
    const character = Character.fromDB(await lobbyUser?.getCharacterDb());

    if (
        req.oldMove?.index &&
        req.newMove?.index &&
        req.oldMove?.move === req.newMove.move &&
        req.oldMove?.move === 1
    ) {
        character.setClassEquipListItem(req.newMove.index, req.oldMove.moveId);
        character.setClassEquipListItem(req.oldMove.index, req.newMove.moveId);
    } else {
        if (req.oldMove?.index) {
            character.setClassEquipListItem(
                req.oldMove.index,
                req.oldMove.move === DefineClass_Move.UN_EQUIP
                    ? ""
                    : req.oldMove.moveId
            );
        }

        if (req.newMove?.index) {
            character.setClassEquipListItem(
                req.newMove.index,
                req.newMove.move === DefineClass_Move.UN_EQUIP
                    ? ""
                    : req.newMove.moveId
            );
        }
    }

    await character.updateClassEquipList();

    return ss2cClassItemMoveRes.create({
        result: PacketResult.SUCCESS,
        oldMove: req.oldMove,
        newMove: req.newMove,
    });
};

export const createCharacterNickname = async (nickname: string) => {
    //
    const streamingNickname = `Fighter#${Math.floor(
        Math.random() * (1700000 - 1000000) + 1000000
    )}`;

    return saccountNickname.create({
        originalNickName: nickname,
        streamingModeNickName: streamingNickname,
        karmaRating: 0,
    });
};
