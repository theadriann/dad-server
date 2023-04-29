import net from "net";
import { bufferReader } from "../utils/bufferReader";
import { PacketResult } from "../protos/ts/_PacketCommand";
import { DefineMessage_LoopFlag } from "../protos/ts/_Defins";
import { logger } from "@/utils/loggers";
import { lobbyState } from "@/state/LobbyManager";
import {
    sc2sGatheringHallChannelChatReq,
    sc2sGatheringHallChannelExitReq,
    sc2sGatheringHallChannelListReq,
    sc2sGatheringHallChannelSelectReq,
    sc2sGatheringHallTargetEquippedItemReq,
    sgatheringHallChatS2c,
    ss2cGatheringHallChannelChatRes,
    ss2cGatheringHallChannelListRes,
    ss2cGatheringHallChannelSelectRes,
    ss2cGatheringHallChannelUserListRes,
    ss2cGatheringHallTargetEquippedItemRes,
} from "@/protos/ts/GatheringHall";
import { SCHATDATA } from "@/protos/ts/_Chat";

export const getGatheringHallChannelList = async (
    data: Buffer,
    socket: net.Socket
) => {
    //
    // const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sGatheringHallChannelListReq.decode(bufferReader(data));
    const hall = lobbyState.halls.get("default")!;
    const userCount = hall.size;

    return ss2cGatheringHallChannelListRes.create({
        channels: [
            {
                channelIndex: 1,
                channelId:
                    "ChatRoomData:Id_ChatRoom_GatheringHall_US_West_Oregon",
                memberCount: userCount,
                groupIndex: 1,
            },
        ],
    });

    return ss2cGatheringHallChannelListRes.create({
        channels: [
            {
                channelIndex: 1,
                channelId:
                    "ChatRoomData:Id_ChatRoom_GatheringHall_US_West_Oregon",
                memberCount: 0,
                groupIndex: 1,
            },
            {
                channelIndex: 2,
                channelId:
                    "ChatRoomData:Id_ChatRoom_GatheringHall_EU_Central_Frankfurt",
                memberCount: 0,
                groupIndex: 1,
            },
            {
                channelIndex: 3,
                channelId:
                    "ChatRoomData:Id_ChatRoom_GatheringHall_East_Asia_Tokyo",
                memberCount: 0,
                groupIndex: 1,
            },
            {
                channelIndex: 4,
                channelId:
                    "ChatRoomData:Id_ChatRoom_GatheringHall_SEA_Singapore",
                memberCount: 0,
                groupIndex: 1,
            },
            {
                channelIndex: 5,
                channelId:
                    "ChatRoomData:Id_ChatRoom_GatheringHall_Oceania_Sydney",
                memberCount: 0,
                groupIndex: 1,
            },
            {
                channelIndex: 6,
                channelId:
                    "ChatRoomData:Id_ChatRoom_GatheringHall_Brazil_SaoPaulo",
                memberCount: 0,
                groupIndex: 1,
            },
            {
                channelIndex: 7,
                channelId:
                    "ChatRoomData:Id_ChatRoom_GatheringHall_US_East_Virginia",
                memberCount: 0,
                groupIndex: 1,
            },
        ],
    });
};

export const onGatheringHallChannelSelect = async (
    data: Buffer,
    socket: net.Socket
) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sGatheringHallChannelSelectReq.decode(bufferReader(data));

    const hall = lobbyState.halls.get("default")!;

    if (lobbyUser) {
        hall.addUser(lobbyUser);
    }

    return ss2cGatheringHallChannelSelectRes.create({
        result: 1,
    });
};

export const onGatheringHallUserListReqStart = async (
    data: Buffer,
    socket: net.Socket
) => {
    //
    return ss2cGatheringHallChannelUserListRes.create({
        loopFlag: DefineMessage_LoopFlag.BEGIN,
    });
};

export const onGatheringHallUserListReqContinue = async (
    data: Buffer,
    socket: net.Socket
) => {
    //
    // scharacterGatheringHallInfo
    const res = ss2cGatheringHallChannelUserListRes.create({
        loopFlag: DefineMessage_LoopFlag.PROGRESS,
        characters:
            lobbyState.halls
                .get("default")
                ?.getCharacterGatheringHallInfoArr() || [],
    });

    logger.debug("onGatheringHallUserListReqContinue");
    logger.debug(JSON.stringify(res, null, 2));

    return res;
};

export const onGatheringHallUserListReqEnd = async (
    data: Buffer,
    socket: net.Socket
) => {
    //
    const res = ss2cGatheringHallChannelUserListRes.create({
        loopFlag: DefineMessage_LoopFlag.END,
    });

    logger.debug("onGatheringHallUserListReqEnd");
    logger.debug(JSON.stringify(res, null, 2));

    return res;
};

export const onGatheringHallChat = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sGatheringHallChannelChatReq.decode(bufferReader(data));
    const hall = lobbyState.halls.get("default")!;
    const chatIndex = hall.getNewMessageIndex();

    if (!lobbyUser) {
        return null;
    }

    const chatEntry = sgatheringHallChatS2c.create({
        chatIndex: chatIndex,
        chatType: req.chat?.chatType,
        time: Date.now(),
        chatData: SCHATDATA.create({
            accountId: lobbyUser.userId?.toString(),
            characterId: lobbyUser.characterId?.toString(),
            chatDataPieceArray: req.chat?.chatData?.chatDataPieceArray,
            nickname: lobbyUser.characterNicknameObject,
            partyId: undefined,
        }),
    });

    hall.announceNewChat(chatEntry, lobbyUser);

    const res = ss2cGatheringHallChannelChatRes.create({
        chats: [chatEntry],
        result: PacketResult.SUCCESS,
    });

    logger.debug("onGatheringHallChat");
    logger.debug(JSON.stringify(res, null, 2));

    return res;
};

export const onGatheringHallLeave = async (
    data: Buffer,
    socket: net.Socket
) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const hall = lobbyState.halls.get("default")!;

    if (lobbyUser?.userId) {
        hall.removeUserId(lobbyUser.userId);
    }

    return sc2sGatheringHallChannelExitReq.create({});
};

export const onGatheringHallTargetEquippedItem = async (
    data: Buffer,
    socket: net.Socket
) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const hall = lobbyState.halls.get("default")!;
    const req = sc2sGatheringHallTargetEquippedItemReq.decode(
        bufferReader(data)
    );

    const user =
        lobbyState.getByCharacterId(Number(req.characterId)) ||
        lobbyState.getByUserId(Number(req.accountId));

    if (!user) {
        return ss2cGatheringHallTargetEquippedItemRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    return ss2cGatheringHallTargetEquippedItemRes.create({
        result: 1,
        characterInfo: user.toGatheringHallInfo(),
        equippedItems: user.toEquipmentInfo(),
    });
};
