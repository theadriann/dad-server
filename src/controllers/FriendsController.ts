import net from "net";
import { bufferReader } from "../utils/bufferReader";
import { socketContextManager } from "../utils/SocketContextManager";
import {
    sc2sFriendListAllReq,
    sc2sFriendListReq,
    ss2cFriendListAllRes,
    ss2cFriendListRes,
} from "../protos/ts/Friend";
import { getCharacterFriendInfoById } from "@/services/CharacterService";
import { DefineMessage_LoopFlag } from "@/protos/ts/_Defins";
import {
    sc2sBlockCharacterListReq,
    ss2cBlockCharacterListRes,
} from "@/protos/ts/Common";
import { sblockCharacter } from "@/protos/ts/_Character";
import { createCharacterNickname } from "./CharacterController";
import { logger } from "@/utils/loggers";

export const listFriends = async (data: Buffer, socket: net.Socket) => {
    const socketContext = socketContextManager.getBySocket(socket);
    const req = sc2sFriendListReq.decode(bufferReader(data));

    let res = ss2cFriendListRes.create({});

    res.friendInfoList = [];
    res.dungeonLocateCount = 0;
    res.lobbyLocateCount = 0;
    res.pageIndex = 1;
    res.totalFriendCount = 0;

    const char = await getCharacterFriendInfoById(9);
    if (char) {
        res.friendInfoList.push(char);
        res.lobbyLocateCount++;
        res.totalFriendCount++;
    }

    logger.info("listFriends");
    logger.info(JSON.stringify(res, null, 2));

    return res;
};

export const listAllFriends = async (data: Buffer, socket: net.Socket) => {
    const socketContext = socketContextManager.getBySocket(socket);
    const req = sc2sFriendListAllReq.decode(bufferReader(data));

    let res = ss2cFriendListAllRes.create({});

    res.loopFlag = DefineMessage_LoopFlag.BEGIN;
    res.friendInfoList = [];
    res.dungeonLocateCount = 0;
    res.lobbyLocateCount = 0;
    res.totalUserCount = 0;

    const char = await getCharacterFriendInfoById(9);
    if (char) {
        res.friendInfoList = [char];
        res.lobbyLocateCount++;
        res.totalUserCount++;
    }

    logger.info("listAllFriends");
    logger.info(JSON.stringify(res, null, 2));

    return res;
};

export const listAllFriendsContinue = async (
    data: Buffer,
    socket: net.Socket
) => {
    const socketContext = socketContextManager.getBySocket(socket);
    const req = sc2sFriendListAllReq.decode(bufferReader(data));

    let res = ss2cFriendListAllRes.create({});

    res.loopFlag = DefineMessage_LoopFlag.END;
    res.friendInfoList = [];
    res.dungeonLocateCount = 0;
    res.lobbyLocateCount = 0;
    res.totalUserCount = 0;

    const char = await getCharacterFriendInfoById(9);
    if (char) {
        res.friendInfoList = [char];
        res.lobbyLocateCount++;
        res.totalUserCount++;
    }

    logger.info("listAllFriends");
    logger.info(JSON.stringify(res, null, 2));

    return res;
};

export const getBlockCharacterList = async (
    data: Buffer,
    socket: net.Socket
) => {
    const socketContext = socketContextManager.getBySocket(socket);
    const req = sc2sBlockCharacterListReq.decode(bufferReader(data));

    let res = ss2cBlockCharacterListRes.create({
        blockCharacters: [
            sblockCharacter.create({
                accountId: "100",
                characterClass:
                    "DesignDataPlayerCharacter:Id_PlayerCharacter_Fighter",
                characterId: "1337",
                gender: 1,
                nickName: await createCharacterNickname("lololo"),
            }),
        ],
    });

    logger.info("getBlockCharacterList");
    logger.info(JSON.stringify(res, null, 2));

    return res;
};
