import net from "net";
import { bufferReader } from "../utils/bufferReader";
import {
    sc2sFriendFindReq,
    sc2sFriendListReq,
    ss2cFriendFindRes,
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
import { PacketResult } from "@/protos/ts/_PacketCommand";
import { lobbyState } from "@/state/LobbyManager";

// TODO: where is this used?!?
export const listFriends = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sFriendListReq.decode(bufferReader(data));

    let res = ss2cFriendListRes.create({});

    // const char = await getCharacterFriendInfoById(9);
    // if (char) {
    //     res.friendInfoList.push(char);
    //     res.lobbyLocateCount++;
    //     res.totalFriendCount++;
    // }

    // logger.debug("listFriends");
    // logger.debug(JSON.stringify(res, null, 2));

    return res;
};

export const listAllFriendsStart = async (data: Buffer, socket: net.Socket) => {
    //
    let res = ss2cFriendListAllRes.create({
        loopFlag: DefineMessage_LoopFlag.BEGIN,
    });

    logger.debug("listAllFriends");
    logger.debug(JSON.stringify(res, null, 2));

    return res;
};

export const listAllFriendsContinue = async (
    data: Buffer,
    socket: net.Socket
) => {
    //
    const res = ss2cFriendListAllRes.create({
        loopFlag: DefineMessage_LoopFlag.PROGRESS,
        friendInfoList: await Promise.all(
            lobbyState
                .getAllActive()
                .filter((user) => user.hasCharacterLoaded)
                .map((user) => getCharacterFriendInfoById(user.characterId!))
        ),
    });

    logger.debug("listAllFriendsContinue");
    logger.debug(JSON.stringify(res, null, 2));

    return res;
};

export const listAllFriendsEnd = async (data: Buffer, socket: net.Socket) => {
    //
    const res = ss2cFriendListAllRes.create({
        loopFlag: DefineMessage_LoopFlag.END,
        friendInfoList: [],
    });

    const active_characters = await Promise.all(
        lobbyState
            .getAllActive()
            .filter((user) => user.hasCharacterLoaded)
            .map((user) => getCharacterFriendInfoById(user.characterId!))
    );

    res.lobbyLocateCount = active_characters.length;
    res.totalUserCount = active_characters.length;

    logger.debug("listAllFriendsEnd");
    logger.debug(JSON.stringify(res, null, 2));

    return res;
};

export const getBlockCharacterList = async (
    data: Buffer,
    socket: net.Socket
) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sBlockCharacterListReq.decode(bufferReader(data));

    let res = ss2cBlockCharacterListRes.create({
        blockCharacters: [
            sblockCharacter.create({
                accountId: "13371337",
                characterClass:
                    "DesignDataPlayerCharacter:Id_PlayerCharacter_Fighter",
                characterId: "13371337",
                gender: 1,
                nickName: await createCharacterNickname("IgnoreMe"),
            }),
        ],
    });

    // logger.debug("getBlockCharacterList");
    // logger.debug(JSON.stringify(res, null, 2));

    return res;
};

export const searchFriend = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sFriendFindReq.decode(bufferReader(data));

    logger.debug(req);

    if (!req.nickName?.originalNickName) {
        return ss2cFriendFindRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    const foundUser = lobbyState.getAllActive().find((user) => {
        const userCharName = user.characterNickname || "";
        const searchedCharName = req.nickName?.originalNickName || "";

        return (
            userCharName.startsWith(searchedCharName) ||
            userCharName
                .toLowerCase()
                .startsWith(searchedCharName.toLowerCase())
        );
    });

    if (!foundUser) {
        return ss2cFriendFindRes.create({
            result: PacketResult.SUCCESS,
        });
    }

    let res = ss2cFriendFindRes.create({
        result: PacketResult.SUCCESS,
        friendInfo: await getCharacterFriendInfoById(foundUser.characterId!),
    });

    logger.debug("searchFriend");
    logger.debug(JSON.stringify(res, null, 2));

    return res;
};
