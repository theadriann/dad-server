import net from "net";
import { bufferReader } from "../utils/bufferReader";
import { PacketCommand, PacketResult } from "../protos/ts/_PacketCommand";
import {
  DefineChat_RoomType,
  DefineMessage_LoopFlag,
  DefineMessage_UpdateFlag,
  DefineTrade_RequirementType,
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
  sc2sTradingChatReq,
  sc2sTradingCloseReq,
  sc2sTradingConfirmCancelReq,
  sc2sTradingConfirmReadyReq,
  sc2sTradingItemUpdateReq,
  sc2sTradingReadyReq,
  ss2cTradeAnswerRes,
  ss2cTradeChannelChatRes,
  ss2cTradeChannelExitRes,
  ss2cTradeChannelListRes,
  ss2cTradeChannelSelectRes,
  ss2cTradeChannelUserListRes,
  ss2cTradeMembershipRequirementRes,
  ss2cTradeRequestRes,
  ss2cTradingChatRes,
  ss2cTradingCloseRes,
  ss2cTradingConfirmCancelRes,
  ss2cTradingConfirmReadyRes,
  ss2cTradingItemUpdateRes,
  ss2cTradingReadyNot,
  ss2cTradingReadyRes,
  stradeChatC2s,
  stradeChatS2c,
} from "@/protos/ts/Trade";
import {
  announceReceivingTradeRequest,
  announceRefusingTradeRequest,
  announceTradeClosed,
  announceTradeConfirm,
  announceTradeResult,
  announceTradingChannelNewChatV2,
  announceTradingChatNewChatV2,
  announceTradingItemUpdate,
  announceTradingUserConfirm,
  announceTradingUserReady,
} from "@/services/TradingChannelNotifier";
import { db } from "@/services/db";
import { Item } from "@/models/Item";
import { SItem } from "@/protos/ts/_Item";

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
        memberShipType: DefineTrade_RequirementType.MINIMUM_LEVEL,
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

  if (!lobbyUser?.userId) {
    return ss2cTradeChannelExitRes.create({
      result: PacketResult.FAIL_GENERAL,
    });
  }

  const tradingChannel = lobbyState.getTradingChannelByUserId(
    lobbyUser?.userId
  );

  if (!tradingChannel) {
    return ss2cTradeChannelExitRes.create({
      result: PacketResult.FAIL_GENERAL,
    });
  }

  tradingChannel.removeUserId(lobbyUser.userId);

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
    invitee.gameState.trading.setTradingWith(answeree);
    answeree.gameState.trading.setTradingWith(invitee);
  } else if (req.selectFlag === 2) {
    announceRefusingTradeRequest(answeree, invitee);
  }

  return ss2cTradeAnswerRes.create({
    result: PacketResult.SUCCESS,
  });
};

export const onTradeChat = async (data: Buffer, socket: net.Socket) => {
  //
  const req = sc2sTradingChatReq.decode(bufferReader(data));
  const lobbyUser = lobbyState.getBySocket(socket);

  if (!lobbyUser?.userId) {
    return null;
  }

  const otherTrader = lobbyUser.gameState.trading.tradingWith;

  if (!otherTrader) {
    return null;
    // return ss2cTradingChatRes.create({
    //   result: PacketResult.FAIL_GENERAL,
    //   chat: undefined,
    // });
  }

  const chat = stradeChatS2c.create({
    chatData: SCHATDATA.create({
      accountId: lobbyUser.userId?.toString(),
      characterId: lobbyUser.characterId?.toString(),
      chatDataPieceArray: req.chat?.chatData?.chatDataPieceArray,
      nickname: lobbyUser.characterNicknameObject,
      partyId: undefined,
    }),
    chatType: req.chat?.chatType,
    index: 1,
    time: Date.now(),
  });

  announceTradingChatNewChatV2(chat, otherTrader.socket);

  return null;
  // return ss2cTradingChatRes.create({
  //   result: PacketResult.SUCCESS,
  //   chat: undefined,
  // });
};

export const onTradeItemUpdate = async (data: Buffer, socket: net.Socket) => {
  //
  const req = sc2sTradingItemUpdateReq.decode(bufferReader(data));
  const lobbyUser = lobbyState.getBySocket(socket);

  // slotId - [0 - 24] - 5x5

  // TODO: should check if it's user's item
  const dbItem = await db.inventory.findFirst({
    where: {
      id: req.uniqueId,
    },
  });

  if (!dbItem || !lobbyUser?.userId) {
    return null;
  }

  const item = new Item().fromDB(dbItem);
  const sItem = {
    ...item.toSItem(),
    slotId: req.slotId,
  } as SItem;

  switch (req.updateFlag) {
    case DefineMessage_UpdateFlag.INSERT: {
      lobbyUser.gameState.trading.addItem(req.slotId, sItem);
      break;
    }

    case DefineMessage_UpdateFlag.DELETE: {
      lobbyUser.gameState.trading.removeItem(req.slotId);
      lobbyUser.gameState.trading.removeItemByItemId(req.uniqueId);
      break;
    }

    case DefineMessage_UpdateFlag.UPDATE: {
      lobbyUser.gameState.trading.removeItemByItemId(req.uniqueId);
      lobbyUser.gameState.trading.addItem(req.slotId, sItem);
      break;
    }
  }

  console.log(lobbyUser.gameState.trading.tradingInventory);

  const res = ss2cTradingItemUpdateRes.create({
    result: PacketResult.SUCCESS,
    updateFlag: req.updateFlag,
    updateItem: sItem, // should use different inventoryId, slotId
    updateUserInfo: lobbyUser.toTradingUserInfo(),
  });

  if (lobbyUser) {
    const otherTrader = lobbyUser.gameState.trading.tradingWith;
    if (otherTrader) {
      announceTradingItemUpdate(res, otherTrader.socket);
    }
  }

  return res;
};

export const onTradeReady = async (data: Buffer, socket: net.Socket) => {
  //
  const req = sc2sTradingReadyReq.decode(bufferReader(data));
  const lobbyUser = lobbyState.getBySocket(socket);

  if (!lobbyUser) {
    return ss2cTradingReadyRes.create({
      result: PacketResult.FAIL_GENERAL,
    });
  }

  const otherTrader = lobbyUser.gameState.trading.tradingWith;
  if (!otherTrader) {
    return ss2cTradingReadyRes.create({
      result: PacketResult.FAIL_GENERAL,
    });
  }

  lobbyUser.gameState.trading.setReady(req.isReady);

  announceTradingUserReady(
    lobbyUser.toTradingUserInfo(),
    req.isReady,
    otherTrader.socket
  );

  announceTradingUserReady(
    lobbyUser.toTradingUserInfo(),
    req.isReady,
    lobbyUser.socket
  );

  if (
    lobbyUser.gameState.trading.isReady &&
    otherTrader.gameState.trading.isReady
  ) {
    announceTradeConfirm(lobbyUser, otherTrader);
  }

  return ss2cTradingReadyRes.create({
    result: PacketResult.SUCCESS,
  });
};

export const onTradeConfirmCancel = async (
  data: Buffer,
  socket: net.Socket
) => {
  //
  const req = sc2sTradingConfirmCancelReq.decode(bufferReader(data));
  const lobbyUser = lobbyState.getBySocket(socket);

  if (!lobbyUser) {
    return ss2cTradingConfirmReadyRes.create({
      result: PacketResult.FAIL_GENERAL,
    });
  }

  const otherTrader = lobbyUser.gameState.trading.tradingWith;
  if (!otherTrader) {
    return ss2cTradingConfirmReadyRes.create({
      result: PacketResult.FAIL_GENERAL,
    });
  }

  announceTradingUserConfirm(
    lobbyUser.toTradingUserInfo(),
    0,
    otherTrader.socket
  );

  announceTradingUserConfirm(
    lobbyUser.toTradingUserInfo(),
    0,
    lobbyUser.socket
  );

  return ss2cTradingConfirmCancelRes.create({
    result: PacketResult.SUCCESS,
  });
};

export const onTradeConfirmReady = async (data: Buffer, socket: net.Socket) => {
  //
  const req = sc2sTradingConfirmReadyReq.decode(bufferReader(data));
  const lobbyUser = lobbyState.getBySocket(socket);

  if (!lobbyUser) {
    return ss2cTradingConfirmReadyRes.create({
      result: PacketResult.FAIL_GENERAL,
    });
  }

  const otherTrader = lobbyUser.gameState.trading.tradingWith;
  if (!otherTrader) {
    return ss2cTradingConfirmReadyRes.create({
      result: PacketResult.FAIL_GENERAL,
    });
  }

  lobbyUser.gameState.trading.setIsConfirmed(req.isReady);

  announceTradingUserConfirm(
    lobbyUser.toTradingUserInfo(),
    req.isReady,
    otherTrader.socket
  );

  announceTradingUserConfirm(
    lobbyUser.toTradingUserInfo(),
    req.isReady,
    lobbyUser.socket
  );

  if (
    lobbyUser.gameState.trading.isConfirmed &&
    otherTrader.gameState.trading.isConfirmed
  ) {
    announceTradeResult(PacketResult.SUCCESS, lobbyUser.socket);
    announceTradeResult(PacketResult.SUCCESS, otherTrader.socket);
  }

  // ss2cTradingReadyNot;

  return ss2cTradingConfirmReadyRes.create({
    result: PacketResult.SUCCESS,
  });
};

export const onTradeClose = async (data: Buffer, socket: net.Socket) => {
  //
  const req = sc2sTradingCloseReq.decode(bufferReader(data));
  const lobbyUser = lobbyState.getBySocket(socket);

  if (!lobbyUser) {
    return ss2cTradingCloseRes.create({
      result: PacketResult.SUCCESS,
    });
  }

  const otherTrader = lobbyUser.gameState.trading.tradingWith;
  if (!otherTrader) {
    return ss2cTradingCloseRes.create({
      result: PacketResult.SUCCESS,
    });
  }

  lobbyUser.gameState.trading.reset();
  otherTrader.gameState.trading.reset();
  announceTradeClosed(otherTrader.socket);

  return ss2cTradingCloseRes.create({
    result: PacketResult.SUCCESS,
  });
};
