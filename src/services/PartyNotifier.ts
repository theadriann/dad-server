import net from "net";
import { sendPacket } from "@/utils/packets";
import { PacketCommand } from "@/protos/ts/_PacketCommand";
import {
    ss2cPartyChatNot,
    ss2cPartyInviteAnswerResultNot,
    ss2cPartyInviteNot,
    ss2cPartyKickedOutNot,
    ss2cPartyMemberInfoNot,
} from "@/protos/ts/Party";
import { scharacterPartyInfo } from "@/protos/ts/_Character";
import { LobbyUser } from "@/models/lobby/LobbyUser";
import { schatdataPiece } from "@/protos/ts/_Chat";

export const announceReceivingPartyInvite = async (
    inviter: LobbyUser,
    receiver: LobbyUser
) => {
    return sendPacket(
        receiver.socket,
        ss2cPartyInviteNot
            .encode(
                ss2cPartyInviteNot.create({
                    InviteeAccountId: inviter.userId?.toString(),
                    InviteeCharacterId: inviter.characterId?.toString(),
                    InviteeNickName: inviter.characterNicknameObject,
                })
            )
            .finish(),
        PacketCommand.S2C_PARTY_INVITE_NOT
    );
};

export const announceAcceptedPartyInvite = async (
    inviteResult: number,
    joiner: LobbyUser,
    inviter: LobbyUser
) => {
    return sendPacket(
        inviter.socket,
        ss2cPartyInviteAnswerResultNot
            .encode(
                ss2cPartyInviteAnswerResultNot.create({
                    inviteResult: inviteResult,
                    nickName: joiner.characterNicknameObject,
                })
            )
            .finish(),
        PacketCommand.S2C_PARTY_INVITE_ANSWER_RESULT_NOT
    );
};

export const announcePartyMembersInfo = async (
    partyInfo: scharacterPartyInfo[],
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        ss2cPartyMemberInfoNot
            .encode(
                ss2cPartyMemberInfoNot.create({
                    playPartyUserInfoData: partyInfo,
                })
            )
            .finish(),
        PacketCommand.S2C_PARTY_MEMBER_INFO_NOT
    );
};

export const announcePartyChatData = async (
    fromUser: LobbyUser,
    message: schatdataPiece[],
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        ss2cPartyChatNot
            .encode(
                ss2cPartyChatNot.create({
                    chatData: {
                        accountId: fromUser.userId!.toString(),
                        characterId: fromUser.characterId!.toString(),
                        chatDataPieceArray: message,
                        nickname: fromUser.characterNicknameObject,
                        partyId: fromUser.partyId!.toString(),
                    },
                })
            )
            .finish(),
        PacketCommand.S2C_PARTY_CHAT_NOT
    );
};

export const announcePartyMemberKicked = async (socket: net.Socket) => {
    return sendPacket(
        socket,
        ss2cPartyKickedOutNot.encode(ss2cPartyKickedOutNot.create({})).finish(),
        PacketCommand.S2C_PARTY_KICKED_OUT_NOT
    );
};
