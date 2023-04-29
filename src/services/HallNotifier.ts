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
    DefineMessage_UpdateFlag,
} from "@/protos/ts/_Defins";
import {
    sgatheringHallChatS2c,
    ss2cGatheringHallChannelChatNot,
    ss2cGatheringHallChannelChatRes,
    ss2cGatheringHallChannelUserUpdateNot,
} from "@/protos/ts/GatheringHall";

export const announceMemberJoinHall = async (
    enteredUser: LobbyUser,
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        ss2cGatheringHallChannelUserUpdateNot
            .encode(
                ss2cGatheringHallChannelUserUpdateNot.create({
                    updates: [
                        {
                            updateFlag: DefineMessage_UpdateFlag.INSERT,
                            info: enteredUser.toGatheringHallInfo(),
                        },
                    ],
                })
            )
            .finish(),
        PacketCommand.S2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOT
    );
};

export const announceMemberLeftHall = async (
    leftUser: LobbyUser,
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        ss2cGatheringHallChannelUserUpdateNot
            .encode(
                ss2cGatheringHallChannelUserUpdateNot.create({
                    updates: [
                        {
                            updateFlag: DefineMessage_UpdateFlag.DELETE,
                            info: leftUser.toGatheringHallInfo(),
                        },
                    ],
                })
            )
            .finish(),
        PacketCommand.S2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOT
    );
};

export const announceMemberUpdateHall = async (
    enteredUser: LobbyUser,
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        ss2cGatheringHallChannelUserUpdateNot
            .encode(
                ss2cGatheringHallChannelUserUpdateNot.create({
                    updates: [
                        {
                            updateFlag: DefineMessage_UpdateFlag.UPDATE,
                            info: enteredUser.toGatheringHallInfo(),
                        },
                    ],
                })
            )
            .finish(),
        PacketCommand.S2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOT
    );
};

export const announceHallNewChat = async (
    chatEntry: sgatheringHallChatS2c,
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        ss2cGatheringHallChannelChatNot
            .encode(
                ss2cGatheringHallChannelChatNot.create({
                    chats: [chatEntry],
                })
            )
            .finish(),
        PacketCommand.S2C_GATHERING_HALL_CHANNEL_CHAT_NOT
    );
};
