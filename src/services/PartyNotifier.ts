import net from "net";
import { sendPacket } from "@/utils/packets";
import { PacketCommand } from "@/protos/ts/_PacketCommand";
import {
    ss2cPartyChatNot,
    ss2cPartyGameDifficultyChangeNot,
    ss2cPartyInviteAnswerResultNot,
    ss2cPartyInviteNot,
    ss2cPartyKickedOutNot,
    ss2cPartyLocationUpdateNot,
    ss2cPartyMemberInfoNot,
    ss2cPartyReadyChangeNot,
    ss2cPartyRegionChangeNot,
} from "@/protos/ts/Party";
import { scharacterPartyInfo } from "@/protos/ts/_Character";
import { LobbyUser } from "@/models/lobby/LobbyUser";
import { schatdataPiece } from "@/protos/ts/_Chat";
import {
    DefineGame_DifficultyType,
    DefineMatch_MatchRegion,
} from "@/protos/ts/_Defins";

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

export const announcePartyMemberLocationChange = async (
    user: LobbyUser,
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        ss2cPartyLocationUpdateNot
            .encode(
                ss2cPartyLocationUpdateNot.create({
                    accountId: user.userId!.toString(),
                    characterId: user.characterId!.toString(),
                    updateLocation: user.characterLocation,
                })
            )
            .finish(),
        PacketCommand.S2C_PARTY_LOCATION_UPDATE_NOT
    );
};

export const announcePartyRegionChange = async (
    region: DefineMatch_MatchRegion,
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        ss2cPartyRegionChangeNot
            .encode(
                ss2cPartyRegionChangeNot.create({
                    region: region,
                })
            )
            .finish(),
        PacketCommand.S2C_PARTY_REGION_CHANGE_NOT
    );
};

export const announcePartyDifficultyChange = async (
    gameDifficultyTypeIndex: DefineGame_DifficultyType,
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        ss2cPartyGameDifficultyChangeNot
            .encode(
                ss2cPartyGameDifficultyChangeNot.create({
                    gameDifficultyTypeIndex,
                })
            )
            .finish(),
        PacketCommand.S2C_PARTY_GAME_DIFFICULTY_CHANGE_NOT
    );
};

export const announcePartyReadyChange = async (
    changedUser: LobbyUser,
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        ss2cPartyReadyChangeNot
            .encode(
                ss2cPartyReadyChangeNot.create({
                    accountId: changedUser.userId!.toString(),
                    characterId: changedUser.characterId!.toString(),
                    isReady: changedUser.isReady,
                })
            )
            .finish(),
        PacketCommand.S2C_PARTY_READY_CHANGE_NOT
    );
};
