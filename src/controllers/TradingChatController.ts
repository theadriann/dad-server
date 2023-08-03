import net from "net";
import { bufferReader } from "../utils/bufferReader";
import { PacketResult } from "../protos/ts/_PacketCommand";
import {
  DefineChat_RoomType,
  DefineMessage_LoopFlag,
} from "../protos/ts/_Defins";
import { logger } from "@/utils/loggers";
import { lobbyState } from "@/state/LobbyManager";
import { SCHATDATA } from "@/protos/ts/_Chat";
import {
  sc2sTradeAnswerReq,
  sc2sTradeChannelChatReq,
  sc2sTradeChannelExitReq,
  sc2sTradeChannelListReq,
  sc2sTradeChannelSelectReq,
  sc2sTradeChannelUserListReq,
  sc2sTradeMembershipRequirementReq,
  sc2sTradeRequestReq,
  ss2cTradeAnswerRes,
  ss2cTradeChannelChatRes,
  ss2cTradeChannelExitRes,
  ss2cTradeChannelListRes,
  ss2cTradeChannelSelectRes,
  ss2cTradeChannelUserListRes,
  ss2cTradeMembershipRequirementRes,
  ss2cTradeRequestRes,
  stradeChatC2s,
  stradeChatS2c,
} from "@/protos/ts/Trade";
import { announceReceivingTradeRequest } from "@/services/TradingChannelNotifier";

export const onTradeMembershipRequirement = async (
  data: Buffer,
  socket: net.Socket
) => {
  //
  // const lobbyUser = lobbyState.getBySocket(socket);
  const req = sc2sTradeMembershipRequirementReq.decode(bufferReader(data));

  return ss2cTradeMembershipRequirementRes.create({
    requirements: [
      {
        memberShipType: 1,
        memberShipValue: 1,
      },
    ],
  });
};

export const onTradeChannelList = async (data: Buffer, socket: net.Socket) => {
  //
  // const lobbyUser = lobbyState.getBySocket(socket);
  const req = sc2sTradeChannelListReq.decode(bufferReader(data));

  const groupNums: any = {};
  const channels = Array.from(lobbyState.tradingChannels.values()).map(
    (channel, index) => {
      if (!groupNums[channel.category]) {
        groupNums[channel.category] = 1;
      } else {
        groupNums[channel.category] += 1;
      }

      return {
        index: index + 1,
        channelName: channel.id,
        memberCount: channel.userIds.size,
        roomType: channel.category,
        groupIndex: groupNums[channel.category],
      };
    }
  ) as any;

  return ss2cTradeChannelListRes.create({
    isTrader: 1,
    channels: channels,
  });
};

export const onTradeChannelSelect = async (
  data: Buffer,
  socket: net.Socket
) => {
  const lobbyUser = lobbyState.getBySocket(socket);
  const req = sc2sTradeChannelSelectReq.decode(bufferReader(data));

  const channels = Array.from(lobbyState.tradingChannels.values());
  const tradingChannel = channels[req.index - 1];

  if (!tradingChannel) {
    logger.error("tradingChannel not found");
    return null;
  }

  if (lobbyUser) {
    tradingChannel.addUser(lobbyUser);
  }

  return ss2cTradeChannelSelectRes.create({
    result: PacketResult.SUCCESS,
  });
};

export const onTradeChannelExit = async (data: Buffer, socket: net.Socket) => {
  const lobbyUser = lobbyState.getBySocket(socket);
  const req = sc2sTradeChannelExitReq.decode(bufferReader(data));
  const tradingChannel = lobbyState.tradingChannels.get("default")!;

  if (lobbyUser?.userId) {
    tradingChannel.removeUserId(lobbyUser.userId);
  }

  return ss2cTradeChannelExitRes.create({
    result: PacketResult.SUCCESS,
  });
};

export const onTradeChannelUserList = async (
  data: Buffer,
  socket: net.Socket
) => {
  // S2C_TRADE_CHANNEL_USER_LIST_RES
  const lobbyUser = lobbyState.getBySocket(socket);
  const req = sc2sTradeChannelUserListReq.decode(bufferReader(data));

  return ss2cTradeChannelUserListRes.create({});
};

export const onTradingChannelUserListReqStart = async (
  data: Buffer,
  socket: net.Socket
) => {
  //
  return ss2cTradeChannelUserListRes.create({
    loopFlag: DefineMessage_LoopFlag.BEGIN,
  });
};

export const onTradingChannelUserListReqContinue = async (
  data: Buffer,
  socket: net.Socket
) => {
  //
  const lobbyUser = lobbyState.getBySocket(socket);

  if (!lobbyUser?.userId) {
    return null;
  }

  const tradingChannel = lobbyState.getTradingChannelByUserId(
    lobbyUser?.userId
  );

  if (!tradingChannel) {
    return null;
  }

  const res = ss2cTradeChannelUserListRes.create({
    loopFlag: DefineMessage_LoopFlag.PROGRESS,
    traders: tradingChannel.getCharactersInfo(),
  });

  return res;
};

export const onTradingChannelUserListReqEnd = async (
  data: Buffer,
  socket: net.Socket
) => {
  //
  const res = ss2cTradeChannelUserListRes.create({
    loopFlag: DefineMessage_LoopFlag.END,
  });

  return res;
};

export const onTradeChannelChat = async (data: Buffer, socket: net.Socket) => {
  const lobbyUser = lobbyState.getBySocket(socket);
  const req = sc2sTradeChannelChatReq.decode(bufferReader(data));

  // const chatEntry = sgatheringHallChatS2c.create({
  //     chatIndex: chatIndex,
  //     chatType: req.chat?.chatType,
  //     time: Date.now(),
  //     chatData: SCHATDATA.create({
  //         accountId: lobbyUser.userId?.toString(),
  //         characterId: lobbyUser.characterId?.toString(),
  //         chatDataPieceArray: req.chat?.chatData?.chatDataPieceArray,
  //         nickname: lobbyUser.characterNicknameObject,
  //         partyId: undefined,
  //     }),
  // });

  if (!lobbyUser?.userId) {
    return null;
  }

  const tradingChannel = lobbyState.getTradingChannelByUserId(
    lobbyUser?.userId
  );

  if (!tradingChannel) {
    logger.error("tradingChannel not found");
    return null;
  }

  const chatEntry = stradeChatS2c.create({
    chatType: req.chat?.chatType,
    index: 1,
    time: Date.now(),
    chatData: SCHATDATA.create({
      accountId: lobbyUser.userId?.toString(),
      characterId: lobbyUser.characterId?.toString(),
      chatDataPieceArray: req.chat?.chatData?.chatDataPieceArray,
      nickname: lobbyUser.characterNicknameObject,
      partyId: undefined,
    }),
  });

  tradingChannel.announceNewChat(chatEntry, lobbyUser);

  return ss2cTradeChannelChatRes.create({
    chats: [chatEntry],
    result: PacketResult.SUCCESS,
  });
};

export const onTradeRequest = async (data: Buffer, socket: net.Socket) => {
  const inviter = lobbyState.getBySocket(socket);
  const req = sc2sTradeRequestReq.decode(bufferReader(data));

  if (!inviter?.userId) {
    return null;
  }

  console.log(req);
  const receiver = lobbyState.getByCharacterId(Number(req.characterId));

  if (!receiver || receiver.socket.destroyed) {
    logger.warn("inviteFriend: receiver not found");
    return ss2cTradeRequestRes.create({
      result: PacketResult.FAIL_GENERAL,
      requestNickName: req.nickName,
    });
  }

  if (receiver.userId === inviter.userId) {
    logger.warn("inviteFriend: why stupid?");
    return ss2cTradeRequestRes.create({
      result: PacketResult.FAIL_GENERAL,
      requestNickName: req.nickName,
    });
  }

  announceReceivingTradeRequest(inviter, receiver);

  return ss2cTradeRequestRes.create({
    result: PacketResult.SUCCESS,
    requestNickName: receiver.characterNicknameObject,
  });
};

export const onTradeAnswer = async (data: Buffer, socket: net.Socket) => {
  //
  const req = sc2sTradeAnswerReq.decode(bufferReader(data));

  const answeree = lobbyState.getBySocket(socket);
  if (!answeree?.userId) {
    return null;
  }

  const tradingChannel = lobbyState.getTradingChannelByUserId(answeree?.userId);
  if (!tradingChannel) {
    logger.error("tradingChannel not found");
    return null;
  }

  const invitee = lobbyState.getByUserId(Number(req.accountId));
  if (!invitee) {
    logger.error("invitee not found");
    return null;
  }

  if (invitee === answeree) {
    logger.error("invitee === answeree");
    return null;
  }

  if (req.selectFlag === 1) {
    // ss2cTradingBeginNot
    tradingChannel.announceTradeBegin(invitee, answeree);
  } else if (req.selectFlag === 2) {
    //  ss2cTradeAnswerRefusalNot
  }

  return ss2cTradeAnswerRes.create({
    result: PacketResult.SUCCESS,
  });
};
