import net from "net";
import { bufferReader } from "../utils/bufferReader";
import {
    sc2sFriendFindReq,
    sc2sFriendListAllReq,
    sc2sFriendListReq,
    ss2cFriendFindRes,
    ss2cFriendListAllRes,
    ss2cFriendListRes,
} from "../protos/ts/Friend";
import {
    getCharacterFriendInfoById,
    getDbCharacterById,
} from "@/services/CharacterService";
import { DefineMessage_LoopFlag } from "@/protos/ts/_Defins";
import {
    sc2sBlockCharacterListReq,
    ss2cBlockCharacterListRes,
} from "@/protos/ts/Common";
import { sblockCharacter, scharacterFriendInfo } from "@/protos/ts/_Character";
import { createCharacterNickname } from "./CharacterController";
import { logger } from "@/utils/loggers";
import { PacketCommand, PacketResult } from "@/protos/ts/_PacketCommand";
import {
    partyInviteAnswer,
    sc2sPartyInviteAnswerReq,
    sc2sPartyInviteReq,
    ss2cPartyInviteAnswerRes,
    ss2cPartyInviteAnswerResultNot,
    ss2cPartyInviteNot,
    ss2cPartyInviteRes,
} from "@/protos/ts/Party";
import { sendPacket } from "@/utils/packets";
import { lobbyState } from "@/state/LobbyManager";

export const listFriends = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sFriendListReq.decode(bufferReader(data));

    let res = ss2cFriendListRes.create({});

    res.friendInfoList = [];
    res.dungeonLocateCount = 0;
    res.lobbyLocateCount = 0;
    res.pageIndex = 0;
    res.totalFriendCount = 0;

    const char = await getCharacterFriendInfoById(9);
    if (char) {
        res.friendInfoList.push(char);
        res.lobbyLocateCount++;
        res.totalFriendCount++;
    }

    logger.debug("listFriends");
    logger.debug(JSON.stringify(res, null, 2));

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
                accountId: "100",
                characterClass:
                    "DesignDataPlayerCharacter:Id_PlayerCharacter_Fighter",
                characterId: "1337",
                gender: 1,
                nickName: await createCharacterNickname("lololo"),
            }),
        ],
    });

    logger.debug("getBlockCharacterList");
    logger.debug(JSON.stringify(res, null, 2));

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

    const foundUser = lobbyState
        .getAllActive()
        .find((user) =>
            user.characterNickname?.startsWith(
                req.nickName?.originalNickName || ""
            )
        );

    if (!foundUser) {
        return ss2cFriendFindRes.create({
            result: PacketResult.FAIL_GENERAL,
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

export const inviteFriend = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sPartyInviteReq.decode(bufferReader(data));

    logger.debug(req);

    if (!lobbyUser || !lobbyUser.userId || !lobbyUser.characterId) {
        logger.warn("inviteFriend: socketContext not found");
        return ss2cPartyInviteRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    const otherSocketContext = lobbyState.getByCharacterId(
        Number(req.findCharacterId)
    );

    if (!otherSocketContext || otherSocketContext.socket.destroyed) {
        logger.warn("inviteFriend: otherSocketContext not found");
        return ss2cPartyInviteRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    // no need to await
    sendInvitePartyNotification(
        {
            InviteeAccountId: lobbyUser.userId.toString(),
            InviteeCharacterId: lobbyUser.characterId.toString(),
            InviteeNickName: (await getDbCharacterById(lobbyUser.characterId))!
                .nickname,
        },
        otherSocketContext.socket
    );

    return ss2cPartyInviteRes.create({
        result: PacketResult.SUCCESS,
    });
};

export const acceptPartyInvite = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sPartyInviteAnswerReq.decode(bufferReader(data));

    logger.debug(req);

    const inviteResult: partyInviteAnswer = req.inviteResult;
    const toAccountId = req.returnAccountId;

    if (!lobbyUser || !lobbyUser.userId || !lobbyUser.characterId) {
        logger.warn("acceptPartyInvite: socketContext not found");
        return ss2cPartyInviteAnswerRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    const otherSocketContext = lobbyState.getByUserId(Number(toAccountId));

    if (!otherSocketContext || otherSocketContext.socket.destroyed) {
        logger.warn("acceptPartyInvite: otherSocketContext not found");
        return ss2cPartyInviteAnswerRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    // no need to await
    sendAcceptInvitePartyNotification(
        {
            inviteResult,
            nickName: (await getDbCharacterById(lobbyUser.characterId))!
                .nickname,
        },
        otherSocketContext.socket
    );

    return ss2cPartyInviteAnswerRes.create({
        result: PacketResult.SUCCESS,
    });
};

// TODO: do this in a service
export const sendInvitePartyNotification = async (
    data: {
        InviteeAccountId: string;
        InviteeCharacterId: string;
        InviteeNickName: string;
    },
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        ss2cPartyInviteNot
            .encode(
                ss2cPartyInviteNot.create({
                    InviteeAccountId: data.InviteeAccountId,
                    InviteeCharacterId: data.InviteeCharacterId,
                    InviteeNickName: await createCharacterNickname(
                        data.InviteeNickName
                    ),
                })
            )
            .finish(),
        PacketCommand.S2C_PARTY_INVITE_NOT
    );
};

// TODO: do this in a service
export const sendAcceptInvitePartyNotification = async (
    data: {
        nickName: string;
        inviteResult: partyInviteAnswer;
    },
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        ss2cPartyInviteAnswerResultNot
            .encode(
                ss2cPartyInviteAnswerResultNot.create({
                    inviteResult: data.inviteResult,
                    nickName: await createCharacterNickname(data.nickName),
                })
            )
            .finish(),
        PacketCommand.S2C_PARTY_INVITE_ANSWER_RESULT_NOT
    );
};
