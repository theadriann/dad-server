import net from "net";
import { sendPacket } from "@/utils/packets";
import { PacketCommand, PacketResult } from "@/protos/ts/_PacketCommand";
import { LobbyUser } from "@/models/lobby/LobbyUser";
import {
  DefineMessage_UpdateFlag
} from "@/protos/ts/_Defins";
import {
  ss2cGatheringHallChannelChatNot
} from "@/protos/ts/GatheringHall";
import {
  ss2cTradeAnswerRefusalNot,
  ss2cTradeChannelChatRes,
  ss2cTradeChannelUserUpdateNot,
  ss2cTradeRequestNot,
  ss2cTradingBeginNot,
  stradeChatS2c,
} from "@/protos/ts/Trade";

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
  inviteResult: number,
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
