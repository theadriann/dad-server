import net from "net";
import { bufferReader } from "../utils/bufferReader";
import { getDbCharacterById } from "@/services/CharacterService";
import { createCharacterNickname } from "./CharacterController";
import { logger } from "@/utils/loggers";
import { PacketCommand, PacketResult } from "@/protos/ts/_PacketCommand";
import {
    partyInviteAnswer,
    sc2sPartyChatReq,
    sc2sPartyExitReq,
    sc2sPartyInviteAnswerReq,
    sc2sPartyInviteReq,
    sc2sPartyMemberKickReq,
    ss2cPartyChatRes,
    ss2cPartyExitRes,
    ss2cPartyInviteAnswerRes,
    ss2cPartyInviteAnswerResultNot,
    ss2cPartyInviteNot,
    ss2cPartyInviteRes,
    ss2cPartyMemberKickRes,
} from "@/protos/ts/Party";
import { sendPacket } from "@/utils/packets";
import { lobbyState } from "@/state/LobbyManager";
import {
    announceAcceptedPartyInvite,
    announceReceivingPartyInvite,
} from "@/services/PartyNotifier";

export const inviteFriend = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sPartyInviteReq.decode(bufferReader(data));

    if (!lobbyUser || !lobbyUser.userId || !lobbyUser.characterId) {
        logger.warn("inviteFriend: lobbyUser not found");
        return ss2cPartyInviteRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    const otherUser = lobbyState.getByCharacterId(Number(req.findCharacterId));

    if (!otherUser || otherUser.socket.destroyed) {
        logger.warn("inviteFriend: otherUser not found");
        return ss2cPartyInviteRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    // const otherUserParty = otherUser.getParty();
    // if (otherUserParty && otherUserParty.isFormed) {
    //     logger.warn("inviteFriend: otherUser is already in a party");
    //     return ss2cPartyInviteRes.create({
    //         result: PacketResult.FAIL_GENERAL,
    //     });
    // }

    //
    lobbyState.ensureUserParty(lobbyUser);

    announceReceivingPartyInvite(lobbyUser, otherUser);

    return ss2cPartyInviteRes.create({
        result: PacketResult.SUCCESS,
    });
};

export const acceptPartyInvite = async (data: Buffer, socket: net.Socket) => {
    const accepter = lobbyState.getBySocket(socket);
    const req = sc2sPartyInviteAnswerReq.decode(bufferReader(data));

    const inviteResult: partyInviteAnswer = req.inviteResult;
    const toAccountId = req.returnAccountId;

    logger.debug(req);

    if (!accepter?.hasCharacterLoaded) {
        logger.warn("acceptPartyInvite: accepter is not valid");
        return ss2cPartyInviteAnswerRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    const inviter = lobbyState.getByUserId(Number(toAccountId));
    const targetParty = inviter?.getParty();

    if (!inviter || !targetParty) {
        logger.warn("acceptPartyInvite: inviter or inviter party not found");
        return ss2cPartyInviteAnswerRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    const myParty = accepter.getParty();
    // if (myParty && myParty.isFormed) {
    //     logger.warn("acceptPartyInvite: already joined a different party");
    //     return ss2cPartyInviteAnswerRes.create({
    //         result: PacketResult.FAIL_GENERAL,
    //     });
    // }
    if (myParty === targetParty) {
        logger.warn("acceptPartyInvite: already joined the same party");
        return ss2cPartyInviteAnswerRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    // no need to await
    announceAcceptedPartyInvite(inviteResult, accepter, inviter);

    // 2 = not accepted
    if (inviteResult == 2) {
        return ss2cPartyInviteAnswerRes.create({
            result: PacketResult.SUCCESS,
        });
    }

    targetParty.addUser(accepter.userId!);
    targetParty.announceMembersInfo();

    return ss2cPartyInviteAnswerRes.create({
        result: PacketResult.SUCCESS,
    });
};

export const exitParty = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sPartyExitReq.decode(bufferReader(data));

    const party = lobbyUser?.getParty();

    if (!party) {
        return ss2cPartyExitRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    party.removeUser(lobbyUser!.userId!);
    party.announceMembersInfo();

    return ss2cPartyExitRes.create({
        result: PacketResult.SUCCESS,
    });
};

export const partyChatReq = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sPartyChatReq.decode(bufferReader(data));

    const senderUser = lobbyUser;
    const party = senderUser?.getParty();

    if (!senderUser || !party) {
        logger.warn("partyChatReq: party not found");
        return ss2cPartyChatRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    party.announceChatFromUser(
        senderUser,
        req.chatData?.chatDataPieceArray || []
    );

    return ss2cPartyChatRes.create({
        result: PacketResult.SUCCESS,
    });
};

export const onPartyMemberKickReq = async (
    data: Buffer,
    socket: net.Socket
) => {
    const req = sc2sPartyMemberKickReq.decode(bufferReader(data));
    const lobbyUser = lobbyState.getBySocket(socket);
    const party = lobbyUser?.getParty();

    if (!party || !lobbyUser) {
        logger.warn("onPartyMemberKickReq: party not found");
        return ss2cPartyMemberKickRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    const foundUser = lobbyState.getByCharacterId(Number(req.characterId));

    if (!foundUser || foundUser.getParty() !== party) {
        logger.warn("onPartyMemberKickReq: why stupid?");
        return ss2cPartyMemberKickRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    party.kickUser(foundUser.userId!);

    return ss2cPartyMemberKickRes.create({
        result: PacketResult.SUCCESS,
    });
};
