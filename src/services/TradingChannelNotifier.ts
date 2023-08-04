import net from "net";
import { sendPacket } from "@/utils/packets";
import { PacketCommand, PacketResult } from "@/protos/ts/_PacketCommand";
import { LobbyUser } from "@/models/lobby/LobbyUser";
import { DefineMessage_UpdateFlag } from "@/protos/ts/_Defins";
import { ss2cGatheringHallChannelChatNot } from "@/protos/ts/GatheringHall";
import {
  ss2cTradeAnswerRefusalNot,
  ss2cTradeChannelChatRes,
  ss2cTradeChannelUserUpdateNot,
  ss2cTradeRequestNot,
  ss2cTradingBeginNot,
  ss2cTradingChatRes,
  ss2cTradingCloseRes,
  ss2cTradingConfirmNot,
  ss2cTradingConfirmReadyNot,
  ss2cTradingItemUpdateRes,
  ss2cTradingReadyNot,
  ss2cTradingResultNot,
  stradeChatS2c,
  stradingConfirmItem,
  stradingUserInfo,
} from "@/protos/ts/Trade";
import { SItem } from "@/protos/ts/_Item";

export const announceMemberJoinTradeChannel = async (
  enteredUser: LobbyUser,
  socket: net.Socket
) => {
  return sendPacket(
    socket,
    ss2cTradeChannelUserUpdateNot
      .encode(
        ss2cTradeChannelUserUpdateNot.create({
          updates: [
            {
              updateFlag: DefineMessage_UpdateFlag.INSERT,
              trader: enteredUser.toTradingChannelInfo(),
            },
          ],
        })
      )
      .finish(),
    PacketCommand.S2C_TRADE_CHANNEL_USER_UPDATE_NOT
  );
};

export const announceMemberLeftTradeChannel = async (
  leftUser: LobbyUser,
  socket: net.Socket
) => {
  return sendPacket(
    socket,
    ss2cTradeChannelUserUpdateNot
      .encode(
        ss2cTradeChannelUserUpdateNot.create({
          updates: [
            {
              updateFlag: DefineMessage_UpdateFlag.DELETE,
              trader: leftUser.toTradingChannelInfo(),
            },
          ],
        })
      )
      .finish(),
    PacketCommand.S2C_TRADE_CHANNEL_USER_UPDATE_NOT
  );
};

export const announceMemberLeftUpdateChannel = async (
  enteredUser: LobbyUser,
  socket: net.Socket
) => {
  return sendPacket(
    socket,
    ss2cTradeChannelUserUpdateNot
      .encode(
        ss2cTradeChannelUserUpdateNot.create({
          updates: [
            {
              updateFlag: DefineMessage_UpdateFlag.UPDATE,
              trader: enteredUser.toTradingChannelInfo(),
            },
          ],
        })
      )
      .finish(),
    PacketCommand.S2C_TRADE_CHANNEL_USER_UPDATE_NOT
  );
};

export const announceTradingChannelNewChat = async (
  chatEntry: stradeChatS2c,
  socket: net.Socket
) => {
  return sendPacket(
    socket,
    ss2cGatheringHallChannelChatNot
      .encode(
        ss2cGatheringHallChannelChatNot.create({
          chats: [chatEntry as any],
        })
      )
      .finish(),
    PacketCommand.S2C_GATHERING_HALL_CHANNEL_CHAT_NOT
  );
};

export const announceTradingChannelNewChatV2 = async (
  chatEntry: stradeChatS2c,
  socket: net.Socket
) => {
  return sendPacket(
    socket,
    ss2cTradeChannelChatRes
      .encode(
        ss2cTradeChannelChatRes.create({
          result: PacketResult.SUCCESS,
          chats: [chatEntry as any],
        })
      )
      .finish(),
    PacketCommand.S2C_TRADE_CHANNEL_CHAT_RES
  );
};

export const announceTradingChatNewChatV2 = async (
  chatEntry: stradeChatS2c,
  socket: net.Socket
) => {
  return sendPacket(
    socket,
    ss2cTradingChatRes
      .encode(
        ss2cTradingChatRes.create({
          result: PacketResult.SUCCESS,
          chat: chatEntry,
        })
      )
      .finish(),
    PacketCommand.S2C_TRADING_CHAT_RES
  );
};

export const announceReceivingTradeRequest = async (
  inviter: LobbyUser,
  receiver: LobbyUser
) => {
  return sendPacket(
    receiver.socket,
    ss2cTradeRequestNot
      .encode(
        ss2cTradeRequestNot.create({
          accountId: inviter.userId!.toString(),
          nickName: inviter.characterNicknameObject,
        })
      )
      .finish(),
    PacketCommand.S2C_TRADE_REQUEST_NOT
  );
};

export const announceRefusingTradeRequest = async (
  answeree: LobbyUser,
  inviter: LobbyUser
) => {
  return sendPacket(
    inviter.socket,
    ss2cTradeAnswerRefusalNot
      .encode(
        ss2cTradeAnswerRefusalNot.create({
          accountId: answeree.userId!.toString(),
          nickName: answeree.characterNicknameObject,
        })
      )
      .finish(),
    PacketCommand.S2C_TRADE_ANSWER_REFUSAL_NOT
  );
};

export const announceTradeBegin = async (
  answeree: LobbyUser,
  inviter: LobbyUser,
  sendTo: LobbyUser
) => {
  return sendPacket(
    sendTo.socket,
    ss2cTradingBeginNot
      .encode(
        ss2cTradingBeginNot.create({
          mine: inviter.toTradingUserInfo(),
          target: answeree.toTradingUserInfo(),
          moveResetTimeSec: 0,
          tradeFee: 0,
        })
      )
      .finish(),
    PacketCommand.S2C_TRADING_BEGIN_NOT
  );
};

export const announceTradingItemUpdate = async (
  itemUpdateRes: ss2cTradingItemUpdateRes,
  socket: net.Socket
) => {
  return sendPacket(
    socket,
    ss2cTradingItemUpdateRes.encode(itemUpdateRes).finish(),
    PacketCommand.S2C_TRADING_ITEM_UPDATE_RES
  );
};

export const announceTradingUserReady = async (
  userInfo: stradingUserInfo,
  isReady: number,
  socket: net.Socket
) => {
  return sendPacket(
    socket,
    ss2cTradingReadyNot
      .encode(
        ss2cTradingReadyNot.create({
          isReady,
          readyUserInfo: userInfo,
        })
      )
      .finish(),
    PacketCommand.S2C_TRADING_READY_NOT
  );
};

export const announceTradingUserConfirm = async (
  userInfo: stradingUserInfo,
  isReady: number,
  socket: net.Socket
) => {
  return sendPacket(
    socket,
    ss2cTradingConfirmReadyNot
      .encode(
        ss2cTradingConfirmReadyNot.create({
          isReady,
          readyUserInfo: userInfo,
        })
      )
      .finish(),
    PacketCommand.S2C_TRADING_CONFIRM_READY_NOT
  );
};

export const announceTradeConfirm = async (
  inviter: LobbyUser,
  answeree: LobbyUser
) => {
  let inviterItems: SItem[] | undefined = Object.values(
    inviter.gameState.trading.tradingInventory
  );

  let answereeItems: SItem[] | undefined = Object.values(
    answeree.gameState.trading.tradingInventory
  );

  inviterItems = inviterItems.length ? inviterItems : undefined;
  answereeItems = answereeItems.length ? answereeItems : undefined;

  return [
    sendPacket(
      inviter.socket,
      ss2cTradingConfirmNot
        .encode(
          ss2cTradingConfirmNot.create({
            mine: stradingConfirmItem.create({
              info: inviter.toTradingUserInfo(),
              items: inviterItems,
            }),
            target: stradingConfirmItem.create({
              info: answeree.toTradingUserInfo(),
              items: answereeItems,
            }),
          })
        )
        .finish(),
      PacketCommand.S2C_TRADING_CONFIRM_NOT
    ),
    sendPacket(
      answeree.socket,
      ss2cTradingConfirmNot
        .encode(
          ss2cTradingConfirmNot.create({
            mine: stradingConfirmItem.create({
              info: answeree.toTradingUserInfo(),
              items: answereeItems,
            }),
            target: stradingConfirmItem.create({
              info: inviter.toTradingUserInfo(),
              items: inviterItems,
            }),
          })
        )
        .finish(),
      PacketCommand.S2C_TRADING_CONFIRM_NOT
    ),
  ];
};

export const announceTradeResult = async (
  result: PacketResult,
  socket: net.Socket
) => {
  return sendPacket(
    socket,
    ss2cTradingResultNot
      .encode(
        ss2cTradingResultNot.create({
          result,
        })
      )
      .finish(),
    PacketCommand.S2C_TRADING_RESULT_NOT
  );
};

export const announceTradeClosed = async (socket: net.Socket) => {
  //
  // announceTradeResult(PacketResult.FAIL_GENERAL, socket);

  return sendPacket(
    socket,
    ss2cTradingCloseRes
      .encode(
        ss2cTradingCloseRes.create({
          result: PacketResult.SUCCESS,
        })
      )
      .finish(),
    PacketCommand.S2C_TRADING_CLOSE_RES
  );
};
