/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { saccountNickname, scharacterTradeInfo } from "./_Character";
import { SCHATDATA } from "./_Chat";
import { SItem } from "./_Item";

export const protobufPackage = "DC.Packet";

export interface stradeChannel {
  index: number;
  channelName: string;
  memberCount: number;
  roomType: number;
  groupIndex: number;
}

export interface stradeChatC2s {
  chatType: number;
  targetAccountId: string;
  targetCharacterId: string;
  chatData: SCHATDATA | undefined;
}

export interface stradeChatS2c {
  index: number;
  chatType: number;
  time: number;
  chatData: SCHATDATA | undefined;
}

export interface stradeMembershipRequirement {
  memberShipType: number;
  memberShipValue: number;
}

export interface stradingUserInfo {
  nickName: saccountNickname | undefined;
  accountId: string;
}

export interface stradingConfirmItem {
  info: stradingUserInfo | undefined;
  items: SItem[];
}

export interface stradeChannelUserUpdateInfo {
  updateFlag: number;
  trader: scharacterTradeInfo | undefined;
}

export interface sc2sTradeChannelListReq {
}

export interface ss2cTradeChannelListRes {
  isTrader: number;
  channels: stradeChannel[];
}

export interface sc2sTradeChannelSelectReq {
  index: number;
}

export interface ss2cTradeChannelSelectRes {
  result: number;
}

export interface sc2sTradeChannelExitReq {
}

export interface ss2cTradeChannelExitRes {
  result: number;
}

export interface sc2sTradeChannelUserListReq {
}

export interface ss2cTradeChannelUserListRes {
  loopFlag: number;
  traders: scharacterTradeInfo[];
}

export interface ss2cTradeChannelUserUpdateNot {
  updates: stradeChannelUserUpdateInfo[];
}

export interface sc2sTradeChannelChatReq {
  chat: stradeChatC2s | undefined;
}

export interface ss2cTradeChannelChatRes {
  result: number;
  chats: stradeChatS2c[];
}

export interface sc2sTradeChannelChatTextRangeReq {
  beginIndex: number;
}

export interface ss2cTradeChannelChatTextRangeRes {
  chats: stradeChatS2c[];
}

export interface sc2sTradeMembershipRequirementReq {
}

export interface ss2cTradeMembershipRequirementRes {
  requirements: stradeMembershipRequirement[];
}

export interface sc2sTradeMembershipReq {
  becomeTraderFlag: number;
}

export interface ss2cTradeMembershipRes {
  result: number;
}

export interface sc2sTradeRequestReq {
  accountId: string;
  nickName: saccountNickname | undefined;
  characterId: string;
}

export interface ss2cTradeRequestRes {
  result: number;
  requestNickName: saccountNickname | undefined;
}

export interface ss2cTradeRequestNot {
  accountId: string;
  nickName: saccountNickname | undefined;
}

export interface sc2sTradeAnswerReq {
  accountId: string;
  nickName: saccountNickname | undefined;
  selectFlag: number;
}

export interface ss2cTradeAnswerRes {
  result: number;
}

export interface ss2cTradeAnswerRefusalNot {
  accountId: string;
  nickName: saccountNickname | undefined;
}

export interface ss2cTradingBeginNot {
  target: stradingUserInfo | undefined;
  mine: stradingUserInfo | undefined;
  tradeFee: number;
  moveResetTimeSec: number;
}

export interface sc2sTradingCloseReq {
}

export interface ss2cTradingCloseRes {
  result: number;
}

export interface sc2sTradingChatReq {
  chat: stradeChatC2s | undefined;
}

export interface ss2cTradingChatRes {
  result: number;
  chat: stradeChatS2c | undefined;
}

export interface sc2sTradingItemUpdateReq {
  updateFlag: number;
  uniqueId: number;
  slotId: number;
}

export interface ss2cTradingItemUpdateRes {
  result: number;
  updateUserInfo: stradingUserInfo | undefined;
  updateFlag: number;
  updateItem: SItem | undefined;
}

export interface sc2sTradingReadyReq {
  isReady: number;
}

export interface ss2cTradingReadyRes {
  result: number;
}

export interface ss2cTradingReadyNot {
  readyUserInfo: stradingUserInfo | undefined;
  isReady: number;
}

export interface ss2cTradingConfirmNot {
  target: stradingConfirmItem | undefined;
  mine: stradingConfirmItem | undefined;
}

export interface sc2sTradingConfirmReadyReq {
  isReady: number;
}

export interface ss2cTradingConfirmReadyRes {
  result: number;
}

export interface ss2cTradingConfirmReadyNot {
  readyUserInfo: stradingUserInfo | undefined;
  isReady: number;
}

export interface sc2sTradingConfirmCancelReq {
}

export interface ss2cTradingConfirmCancelRes {
  result: number;
}

export interface ss2cTradingResultNot {
  result: number;
}

function createBasestradeChannel(): stradeChannel {
  return { index: 0, channelName: "", memberCount: 0, roomType: 0, groupIndex: 0 };
}

export const stradeChannel = {
  encode(message: stradeChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.channelName !== "") {
      writer.uint32(18).string(message.channelName);
    }
    if (message.memberCount !== 0) {
      writer.uint32(24).uint32(message.memberCount);
    }
    if (message.roomType !== 0) {
      writer.uint32(32).uint32(message.roomType);
    }
    if (message.groupIndex !== 0) {
      writer.uint32(40).uint32(message.groupIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): stradeChannel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasestradeChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channelName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.memberCount = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.roomType = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.groupIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): stradeChannel {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      channelName: isSet(object.channelName) ? String(object.channelName) : "",
      memberCount: isSet(object.memberCount) ? Number(object.memberCount) : 0,
      roomType: isSet(object.roomType) ? Number(object.roomType) : 0,
      groupIndex: isSet(object.groupIndex) ? Number(object.groupIndex) : 0,
    };
  },

  toJSON(message: stradeChannel): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.channelName !== "") {
      obj.channelName = message.channelName;
    }
    if (message.memberCount !== 0) {
      obj.memberCount = Math.round(message.memberCount);
    }
    if (message.roomType !== 0) {
      obj.roomType = Math.round(message.roomType);
    }
    if (message.groupIndex !== 0) {
      obj.groupIndex = Math.round(message.groupIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<stradeChannel>, I>>(base?: I): stradeChannel {
    return stradeChannel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<stradeChannel>, I>>(object: I): stradeChannel {
    const message = createBasestradeChannel();
    message.index = object.index ?? 0;
    message.channelName = object.channelName ?? "";
    message.memberCount = object.memberCount ?? 0;
    message.roomType = object.roomType ?? 0;
    message.groupIndex = object.groupIndex ?? 0;
    return message;
  },
};

function createBasestradeChatC2s(): stradeChatC2s {
  return { chatType: 0, targetAccountId: "", targetCharacterId: "", chatData: undefined };
}

export const stradeChatC2s = {
  encode(message: stradeChatC2s, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatType !== 0) {
      writer.uint32(8).uint32(message.chatType);
    }
    if (message.targetAccountId !== "") {
      writer.uint32(18).string(message.targetAccountId);
    }
    if (message.targetCharacterId !== "") {
      writer.uint32(26).string(message.targetCharacterId);
    }
    if (message.chatData !== undefined) {
      SCHATDATA.encode(message.chatData, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): stradeChatC2s {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasestradeChatC2s();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.chatType = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetAccountId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.targetCharacterId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.chatData = SCHATDATA.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): stradeChatC2s {
    return {
      chatType: isSet(object.chatType) ? Number(object.chatType) : 0,
      targetAccountId: isSet(object.targetAccountId) ? String(object.targetAccountId) : "",
      targetCharacterId: isSet(object.targetCharacterId) ? String(object.targetCharacterId) : "",
      chatData: isSet(object.chatData) ? SCHATDATA.fromJSON(object.chatData) : undefined,
    };
  },

  toJSON(message: stradeChatC2s): unknown {
    const obj: any = {};
    if (message.chatType !== 0) {
      obj.chatType = Math.round(message.chatType);
    }
    if (message.targetAccountId !== "") {
      obj.targetAccountId = message.targetAccountId;
    }
    if (message.targetCharacterId !== "") {
      obj.targetCharacterId = message.targetCharacterId;
    }
    if (message.chatData !== undefined) {
      obj.chatData = SCHATDATA.toJSON(message.chatData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<stradeChatC2s>, I>>(base?: I): stradeChatC2s {
    return stradeChatC2s.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<stradeChatC2s>, I>>(object: I): stradeChatC2s {
    const message = createBasestradeChatC2s();
    message.chatType = object.chatType ?? 0;
    message.targetAccountId = object.targetAccountId ?? "";
    message.targetCharacterId = object.targetCharacterId ?? "";
    message.chatData = (object.chatData !== undefined && object.chatData !== null)
      ? SCHATDATA.fromPartial(object.chatData)
      : undefined;
    return message;
  },
};

function createBasestradeChatS2c(): stradeChatS2c {
  return { index: 0, chatType: 0, time: 0, chatData: undefined };
}

export const stradeChatS2c = {
  encode(message: stradeChatS2c, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.chatType !== 0) {
      writer.uint32(16).uint32(message.chatType);
    }
    if (message.time !== 0) {
      writer.uint32(24).uint64(message.time);
    }
    if (message.chatData !== undefined) {
      SCHATDATA.encode(message.chatData, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): stradeChatS2c {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasestradeChatS2c();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.chatType = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.time = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.chatData = SCHATDATA.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): stradeChatS2c {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      chatType: isSet(object.chatType) ? Number(object.chatType) : 0,
      time: isSet(object.time) ? Number(object.time) : 0,
      chatData: isSet(object.chatData) ? SCHATDATA.fromJSON(object.chatData) : undefined,
    };
  },

  toJSON(message: stradeChatS2c): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.chatType !== 0) {
      obj.chatType = Math.round(message.chatType);
    }
    if (message.time !== 0) {
      obj.time = Math.round(message.time);
    }
    if (message.chatData !== undefined) {
      obj.chatData = SCHATDATA.toJSON(message.chatData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<stradeChatS2c>, I>>(base?: I): stradeChatS2c {
    return stradeChatS2c.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<stradeChatS2c>, I>>(object: I): stradeChatS2c {
    const message = createBasestradeChatS2c();
    message.index = object.index ?? 0;
    message.chatType = object.chatType ?? 0;
    message.time = object.time ?? 0;
    message.chatData = (object.chatData !== undefined && object.chatData !== null)
      ? SCHATDATA.fromPartial(object.chatData)
      : undefined;
    return message;
  },
};

function createBasestradeMembershipRequirement(): stradeMembershipRequirement {
  return { memberShipType: 0, memberShipValue: 0 };
}

export const stradeMembershipRequirement = {
  encode(message: stradeMembershipRequirement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memberShipType !== 0) {
      writer.uint32(8).uint32(message.memberShipType);
    }
    if (message.memberShipValue !== 0) {
      writer.uint32(16).uint32(message.memberShipValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): stradeMembershipRequirement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasestradeMembershipRequirement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.memberShipType = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.memberShipValue = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): stradeMembershipRequirement {
    return {
      memberShipType: isSet(object.memberShipType) ? Number(object.memberShipType) : 0,
      memberShipValue: isSet(object.memberShipValue) ? Number(object.memberShipValue) : 0,
    };
  },

  toJSON(message: stradeMembershipRequirement): unknown {
    const obj: any = {};
    if (message.memberShipType !== 0) {
      obj.memberShipType = Math.round(message.memberShipType);
    }
    if (message.memberShipValue !== 0) {
      obj.memberShipValue = Math.round(message.memberShipValue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<stradeMembershipRequirement>, I>>(base?: I): stradeMembershipRequirement {
    return stradeMembershipRequirement.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<stradeMembershipRequirement>, I>>(object: I): stradeMembershipRequirement {
    const message = createBasestradeMembershipRequirement();
    message.memberShipType = object.memberShipType ?? 0;
    message.memberShipValue = object.memberShipValue ?? 0;
    return message;
  },
};

function createBasestradingUserInfo(): stradingUserInfo {
  return { nickName: undefined, accountId: "" };
}

export const stradingUserInfo = {
  encode(message: stradingUserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): stradingUserInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasestradingUserInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): stradingUserInfo {
    return {
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
    };
  },

  toJSON(message: stradingUserInfo): unknown {
    const obj: any = {};
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<stradingUserInfo>, I>>(base?: I): stradingUserInfo {
    return stradingUserInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<stradingUserInfo>, I>>(object: I): stradingUserInfo {
    const message = createBasestradingUserInfo();
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBasestradingConfirmItem(): stradingConfirmItem {
  return { info: undefined, items: [] };
}

export const stradingConfirmItem = {
  encode(message: stradingConfirmItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      stradingUserInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.items) {
      SItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): stradingConfirmItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasestradingConfirmItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.info = stradingUserInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.items.push(SItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): stradingConfirmItem {
    return {
      info: isSet(object.info) ? stradingUserInfo.fromJSON(object.info) : undefined,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => SItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: stradingConfirmItem): unknown {
    const obj: any = {};
    if (message.info !== undefined) {
      obj.info = stradingUserInfo.toJSON(message.info);
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => SItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<stradingConfirmItem>, I>>(base?: I): stradingConfirmItem {
    return stradingConfirmItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<stradingConfirmItem>, I>>(object: I): stradingConfirmItem {
    const message = createBasestradingConfirmItem();
    message.info = (object.info !== undefined && object.info !== null)
      ? stradingUserInfo.fromPartial(object.info)
      : undefined;
    message.items = object.items?.map((e) => SItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasestradeChannelUserUpdateInfo(): stradeChannelUserUpdateInfo {
  return { updateFlag: 0, trader: undefined };
}

export const stradeChannelUserUpdateInfo = {
  encode(message: stradeChannelUserUpdateInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updateFlag !== 0) {
      writer.uint32(8).uint32(message.updateFlag);
    }
    if (message.trader !== undefined) {
      scharacterTradeInfo.encode(message.trader, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): stradeChannelUserUpdateInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasestradeChannelUserUpdateInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.updateFlag = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.trader = scharacterTradeInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): stradeChannelUserUpdateInfo {
    return {
      updateFlag: isSet(object.updateFlag) ? Number(object.updateFlag) : 0,
      trader: isSet(object.trader) ? scharacterTradeInfo.fromJSON(object.trader) : undefined,
    };
  },

  toJSON(message: stradeChannelUserUpdateInfo): unknown {
    const obj: any = {};
    if (message.updateFlag !== 0) {
      obj.updateFlag = Math.round(message.updateFlag);
    }
    if (message.trader !== undefined) {
      obj.trader = scharacterTradeInfo.toJSON(message.trader);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<stradeChannelUserUpdateInfo>, I>>(base?: I): stradeChannelUserUpdateInfo {
    return stradeChannelUserUpdateInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<stradeChannelUserUpdateInfo>, I>>(object: I): stradeChannelUserUpdateInfo {
    const message = createBasestradeChannelUserUpdateInfo();
    message.updateFlag = object.updateFlag ?? 0;
    message.trader = (object.trader !== undefined && object.trader !== null)
      ? scharacterTradeInfo.fromPartial(object.trader)
      : undefined;
    return message;
  },
};

function createBasesc2sTradeChannelListReq(): sc2sTradeChannelListReq {
  return {};
}

export const sc2sTradeChannelListReq = {
  encode(_: sc2sTradeChannelListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradeChannelListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradeChannelListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): sc2sTradeChannelListReq {
    return {};
  },

  toJSON(_: sc2sTradeChannelListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradeChannelListReq>, I>>(base?: I): sc2sTradeChannelListReq {
    return sc2sTradeChannelListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradeChannelListReq>, I>>(_: I): sc2sTradeChannelListReq {
    const message = createBasesc2sTradeChannelListReq();
    return message;
  },
};

function createBasess2cTradeChannelListRes(): ss2cTradeChannelListRes {
  return { isTrader: 0, channels: [] };
}

export const ss2cTradeChannelListRes = {
  encode(message: ss2cTradeChannelListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isTrader !== 0) {
      writer.uint32(8).uint32(message.isTrader);
    }
    for (const v of message.channels) {
      stradeChannel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradeChannelListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradeChannelListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isTrader = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channels.push(stradeChannel.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradeChannelListRes {
    return {
      isTrader: isSet(object.isTrader) ? Number(object.isTrader) : 0,
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => stradeChannel.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cTradeChannelListRes): unknown {
    const obj: any = {};
    if (message.isTrader !== 0) {
      obj.isTrader = Math.round(message.isTrader);
    }
    if (message.channels?.length) {
      obj.channels = message.channels.map((e) => stradeChannel.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradeChannelListRes>, I>>(base?: I): ss2cTradeChannelListRes {
    return ss2cTradeChannelListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradeChannelListRes>, I>>(object: I): ss2cTradeChannelListRes {
    const message = createBasess2cTradeChannelListRes();
    message.isTrader = object.isTrader ?? 0;
    message.channels = object.channels?.map((e) => stradeChannel.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sTradeChannelSelectReq(): sc2sTradeChannelSelectReq {
  return { index: 0 };
}

export const sc2sTradeChannelSelectReq = {
  encode(message: sc2sTradeChannelSelectReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradeChannelSelectReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradeChannelSelectReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sTradeChannelSelectReq {
    return { index: isSet(object.index) ? Number(object.index) : 0 };
  },

  toJSON(message: sc2sTradeChannelSelectReq): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradeChannelSelectReq>, I>>(base?: I): sc2sTradeChannelSelectReq {
    return sc2sTradeChannelSelectReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradeChannelSelectReq>, I>>(object: I): sc2sTradeChannelSelectReq {
    const message = createBasesc2sTradeChannelSelectReq();
    message.index = object.index ?? 0;
    return message;
  },
};

function createBasess2cTradeChannelSelectRes(): ss2cTradeChannelSelectRes {
  return { result: 0 };
}

export const ss2cTradeChannelSelectRes = {
  encode(message: ss2cTradeChannelSelectRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradeChannelSelectRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradeChannelSelectRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradeChannelSelectRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cTradeChannelSelectRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradeChannelSelectRes>, I>>(base?: I): ss2cTradeChannelSelectRes {
    return ss2cTradeChannelSelectRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradeChannelSelectRes>, I>>(object: I): ss2cTradeChannelSelectRes {
    const message = createBasess2cTradeChannelSelectRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sTradeChannelExitReq(): sc2sTradeChannelExitReq {
  return {};
}

export const sc2sTradeChannelExitReq = {
  encode(_: sc2sTradeChannelExitReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradeChannelExitReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradeChannelExitReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): sc2sTradeChannelExitReq {
    return {};
  },

  toJSON(_: sc2sTradeChannelExitReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradeChannelExitReq>, I>>(base?: I): sc2sTradeChannelExitReq {
    return sc2sTradeChannelExitReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradeChannelExitReq>, I>>(_: I): sc2sTradeChannelExitReq {
    const message = createBasesc2sTradeChannelExitReq();
    return message;
  },
};

function createBasess2cTradeChannelExitRes(): ss2cTradeChannelExitRes {
  return { result: 0 };
}

export const ss2cTradeChannelExitRes = {
  encode(message: ss2cTradeChannelExitRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradeChannelExitRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradeChannelExitRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradeChannelExitRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cTradeChannelExitRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradeChannelExitRes>, I>>(base?: I): ss2cTradeChannelExitRes {
    return ss2cTradeChannelExitRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradeChannelExitRes>, I>>(object: I): ss2cTradeChannelExitRes {
    const message = createBasess2cTradeChannelExitRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sTradeChannelUserListReq(): sc2sTradeChannelUserListReq {
  return {};
}

export const sc2sTradeChannelUserListReq = {
  encode(_: sc2sTradeChannelUserListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradeChannelUserListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradeChannelUserListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): sc2sTradeChannelUserListReq {
    return {};
  },

  toJSON(_: sc2sTradeChannelUserListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradeChannelUserListReq>, I>>(base?: I): sc2sTradeChannelUserListReq {
    return sc2sTradeChannelUserListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradeChannelUserListReq>, I>>(_: I): sc2sTradeChannelUserListReq {
    const message = createBasesc2sTradeChannelUserListReq();
    return message;
  },
};

function createBasess2cTradeChannelUserListRes(): ss2cTradeChannelUserListRes {
  return { loopFlag: 0, traders: [] };
}

export const ss2cTradeChannelUserListRes = {
  encode(message: ss2cTradeChannelUserListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loopFlag !== 0) {
      writer.uint32(8).uint32(message.loopFlag);
    }
    for (const v of message.traders) {
      scharacterTradeInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradeChannelUserListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradeChannelUserListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.loopFlag = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.traders.push(scharacterTradeInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradeChannelUserListRes {
    return {
      loopFlag: isSet(object.loopFlag) ? Number(object.loopFlag) : 0,
      traders: Array.isArray(object?.traders) ? object.traders.map((e: any) => scharacterTradeInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cTradeChannelUserListRes): unknown {
    const obj: any = {};
    if (message.loopFlag !== 0) {
      obj.loopFlag = Math.round(message.loopFlag);
    }
    if (message.traders?.length) {
      obj.traders = message.traders.map((e) => scharacterTradeInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradeChannelUserListRes>, I>>(base?: I): ss2cTradeChannelUserListRes {
    return ss2cTradeChannelUserListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradeChannelUserListRes>, I>>(object: I): ss2cTradeChannelUserListRes {
    const message = createBasess2cTradeChannelUserListRes();
    message.loopFlag = object.loopFlag ?? 0;
    message.traders = object.traders?.map((e) => scharacterTradeInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cTradeChannelUserUpdateNot(): ss2cTradeChannelUserUpdateNot {
  return { updates: [] };
}

export const ss2cTradeChannelUserUpdateNot = {
  encode(message: ss2cTradeChannelUserUpdateNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.updates) {
      stradeChannelUserUpdateInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradeChannelUserUpdateNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradeChannelUserUpdateNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.updates.push(stradeChannelUserUpdateInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradeChannelUserUpdateNot {
    return {
      updates: Array.isArray(object?.updates)
        ? object.updates.map((e: any) => stradeChannelUserUpdateInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cTradeChannelUserUpdateNot): unknown {
    const obj: any = {};
    if (message.updates?.length) {
      obj.updates = message.updates.map((e) => stradeChannelUserUpdateInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradeChannelUserUpdateNot>, I>>(base?: I): ss2cTradeChannelUserUpdateNot {
    return ss2cTradeChannelUserUpdateNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradeChannelUserUpdateNot>, I>>(
    object: I,
  ): ss2cTradeChannelUserUpdateNot {
    const message = createBasess2cTradeChannelUserUpdateNot();
    message.updates = object.updates?.map((e) => stradeChannelUserUpdateInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sTradeChannelChatReq(): sc2sTradeChannelChatReq {
  return { chat: undefined };
}

export const sc2sTradeChannelChatReq = {
  encode(message: sc2sTradeChannelChatReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chat !== undefined) {
      stradeChatC2s.encode(message.chat, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradeChannelChatReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradeChannelChatReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chat = stradeChatC2s.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sTradeChannelChatReq {
    return { chat: isSet(object.chat) ? stradeChatC2s.fromJSON(object.chat) : undefined };
  },

  toJSON(message: sc2sTradeChannelChatReq): unknown {
    const obj: any = {};
    if (message.chat !== undefined) {
      obj.chat = stradeChatC2s.toJSON(message.chat);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradeChannelChatReq>, I>>(base?: I): sc2sTradeChannelChatReq {
    return sc2sTradeChannelChatReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradeChannelChatReq>, I>>(object: I): sc2sTradeChannelChatReq {
    const message = createBasesc2sTradeChannelChatReq();
    message.chat = (object.chat !== undefined && object.chat !== null)
      ? stradeChatC2s.fromPartial(object.chat)
      : undefined;
    return message;
  },
};

function createBasess2cTradeChannelChatRes(): ss2cTradeChannelChatRes {
  return { result: 0, chats: [] };
}

export const ss2cTradeChannelChatRes = {
  encode(message: ss2cTradeChannelChatRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.chats) {
      stradeChatS2c.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradeChannelChatRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradeChannelChatRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chats.push(stradeChatS2c.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradeChannelChatRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      chats: Array.isArray(object?.chats) ? object.chats.map((e: any) => stradeChatS2c.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cTradeChannelChatRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.chats?.length) {
      obj.chats = message.chats.map((e) => stradeChatS2c.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradeChannelChatRes>, I>>(base?: I): ss2cTradeChannelChatRes {
    return ss2cTradeChannelChatRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradeChannelChatRes>, I>>(object: I): ss2cTradeChannelChatRes {
    const message = createBasess2cTradeChannelChatRes();
    message.result = object.result ?? 0;
    message.chats = object.chats?.map((e) => stradeChatS2c.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sTradeChannelChatTextRangeReq(): sc2sTradeChannelChatTextRangeReq {
  return { beginIndex: 0 };
}

export const sc2sTradeChannelChatTextRangeReq = {
  encode(message: sc2sTradeChannelChatTextRangeReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beginIndex !== 0) {
      writer.uint32(8).uint32(message.beginIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradeChannelChatTextRangeReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradeChannelChatTextRangeReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.beginIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sTradeChannelChatTextRangeReq {
    return { beginIndex: isSet(object.beginIndex) ? Number(object.beginIndex) : 0 };
  },

  toJSON(message: sc2sTradeChannelChatTextRangeReq): unknown {
    const obj: any = {};
    if (message.beginIndex !== 0) {
      obj.beginIndex = Math.round(message.beginIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradeChannelChatTextRangeReq>, I>>(
    base?: I,
  ): sc2sTradeChannelChatTextRangeReq {
    return sc2sTradeChannelChatTextRangeReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradeChannelChatTextRangeReq>, I>>(
    object: I,
  ): sc2sTradeChannelChatTextRangeReq {
    const message = createBasesc2sTradeChannelChatTextRangeReq();
    message.beginIndex = object.beginIndex ?? 0;
    return message;
  },
};

function createBasess2cTradeChannelChatTextRangeRes(): ss2cTradeChannelChatTextRangeRes {
  return { chats: [] };
}

export const ss2cTradeChannelChatTextRangeRes = {
  encode(message: ss2cTradeChannelChatTextRangeRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chats) {
      stradeChatS2c.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradeChannelChatTextRangeRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradeChannelChatTextRangeRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chats.push(stradeChatS2c.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradeChannelChatTextRangeRes {
    return { chats: Array.isArray(object?.chats) ? object.chats.map((e: any) => stradeChatS2c.fromJSON(e)) : [] };
  },

  toJSON(message: ss2cTradeChannelChatTextRangeRes): unknown {
    const obj: any = {};
    if (message.chats?.length) {
      obj.chats = message.chats.map((e) => stradeChatS2c.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradeChannelChatTextRangeRes>, I>>(
    base?: I,
  ): ss2cTradeChannelChatTextRangeRes {
    return ss2cTradeChannelChatTextRangeRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradeChannelChatTextRangeRes>, I>>(
    object: I,
  ): ss2cTradeChannelChatTextRangeRes {
    const message = createBasess2cTradeChannelChatTextRangeRes();
    message.chats = object.chats?.map((e) => stradeChatS2c.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sTradeMembershipRequirementReq(): sc2sTradeMembershipRequirementReq {
  return {};
}

export const sc2sTradeMembershipRequirementReq = {
  encode(_: sc2sTradeMembershipRequirementReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradeMembershipRequirementReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradeMembershipRequirementReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): sc2sTradeMembershipRequirementReq {
    return {};
  },

  toJSON(_: sc2sTradeMembershipRequirementReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradeMembershipRequirementReq>, I>>(
    base?: I,
  ): sc2sTradeMembershipRequirementReq {
    return sc2sTradeMembershipRequirementReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradeMembershipRequirementReq>, I>>(
    _: I,
  ): sc2sTradeMembershipRequirementReq {
    const message = createBasesc2sTradeMembershipRequirementReq();
    return message;
  },
};

function createBasess2cTradeMembershipRequirementRes(): ss2cTradeMembershipRequirementRes {
  return { requirements: [] };
}

export const ss2cTradeMembershipRequirementRes = {
  encode(message: ss2cTradeMembershipRequirementRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requirements) {
      stradeMembershipRequirement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradeMembershipRequirementRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradeMembershipRequirementRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requirements.push(stradeMembershipRequirement.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradeMembershipRequirementRes {
    return {
      requirements: Array.isArray(object?.requirements)
        ? object.requirements.map((e: any) => stradeMembershipRequirement.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cTradeMembershipRequirementRes): unknown {
    const obj: any = {};
    if (message.requirements?.length) {
      obj.requirements = message.requirements.map((e) => stradeMembershipRequirement.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradeMembershipRequirementRes>, I>>(
    base?: I,
  ): ss2cTradeMembershipRequirementRes {
    return ss2cTradeMembershipRequirementRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradeMembershipRequirementRes>, I>>(
    object: I,
  ): ss2cTradeMembershipRequirementRes {
    const message = createBasess2cTradeMembershipRequirementRes();
    message.requirements = object.requirements?.map((e) => stradeMembershipRequirement.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sTradeMembershipReq(): sc2sTradeMembershipReq {
  return { becomeTraderFlag: 0 };
}

export const sc2sTradeMembershipReq = {
  encode(message: sc2sTradeMembershipReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.becomeTraderFlag !== 0) {
      writer.uint32(8).uint32(message.becomeTraderFlag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradeMembershipReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradeMembershipReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.becomeTraderFlag = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sTradeMembershipReq {
    return { becomeTraderFlag: isSet(object.becomeTraderFlag) ? Number(object.becomeTraderFlag) : 0 };
  },

  toJSON(message: sc2sTradeMembershipReq): unknown {
    const obj: any = {};
    if (message.becomeTraderFlag !== 0) {
      obj.becomeTraderFlag = Math.round(message.becomeTraderFlag);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradeMembershipReq>, I>>(base?: I): sc2sTradeMembershipReq {
    return sc2sTradeMembershipReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradeMembershipReq>, I>>(object: I): sc2sTradeMembershipReq {
    const message = createBasesc2sTradeMembershipReq();
    message.becomeTraderFlag = object.becomeTraderFlag ?? 0;
    return message;
  },
};

function createBasess2cTradeMembershipRes(): ss2cTradeMembershipRes {
  return { result: 0 };
}

export const ss2cTradeMembershipRes = {
  encode(message: ss2cTradeMembershipRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradeMembershipRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradeMembershipRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradeMembershipRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cTradeMembershipRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradeMembershipRes>, I>>(base?: I): ss2cTradeMembershipRes {
    return ss2cTradeMembershipRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradeMembershipRes>, I>>(object: I): ss2cTradeMembershipRes {
    const message = createBasess2cTradeMembershipRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sTradeRequestReq(): sc2sTradeRequestReq {
  return { accountId: "", nickName: undefined, characterId: "" };
}

export const sc2sTradeRequestReq = {
  encode(message: sc2sTradeRequestReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(18).fork()).ldelim();
    }
    if (message.characterId !== "") {
      writer.uint32(26).string(message.characterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradeRequestReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradeRequestReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.characterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sTradeRequestReq {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
    };
  },

  toJSON(message: sc2sTradeRequestReq): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradeRequestReq>, I>>(base?: I): sc2sTradeRequestReq {
    return sc2sTradeRequestReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradeRequestReq>, I>>(object: I): sc2sTradeRequestReq {
    const message = createBasesc2sTradeRequestReq();
    message.accountId = object.accountId ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterId = object.characterId ?? "";
    return message;
  },
};

function createBasess2cTradeRequestRes(): ss2cTradeRequestRes {
  return { result: 0, requestNickName: undefined };
}

export const ss2cTradeRequestRes = {
  encode(message: ss2cTradeRequestRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.requestNickName !== undefined) {
      saccountNickname.encode(message.requestNickName, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradeRequestRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradeRequestRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.requestNickName = saccountNickname.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradeRequestRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      requestNickName: isSet(object.requestNickName) ? saccountNickname.fromJSON(object.requestNickName) : undefined,
    };
  },

  toJSON(message: ss2cTradeRequestRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.requestNickName !== undefined) {
      obj.requestNickName = saccountNickname.toJSON(message.requestNickName);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradeRequestRes>, I>>(base?: I): ss2cTradeRequestRes {
    return ss2cTradeRequestRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradeRequestRes>, I>>(object: I): ss2cTradeRequestRes {
    const message = createBasess2cTradeRequestRes();
    message.result = object.result ?? 0;
    message.requestNickName = (object.requestNickName !== undefined && object.requestNickName !== null)
      ? saccountNickname.fromPartial(object.requestNickName)
      : undefined;
    return message;
  },
};

function createBasess2cTradeRequestNot(): ss2cTradeRequestNot {
  return { accountId: "", nickName: undefined };
}

export const ss2cTradeRequestNot = {
  encode(message: ss2cTradeRequestNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradeRequestNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradeRequestNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradeRequestNot {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
    };
  },

  toJSON(message: ss2cTradeRequestNot): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradeRequestNot>, I>>(base?: I): ss2cTradeRequestNot {
    return ss2cTradeRequestNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradeRequestNot>, I>>(object: I): ss2cTradeRequestNot {
    const message = createBasess2cTradeRequestNot();
    message.accountId = object.accountId ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    return message;
  },
};

function createBasesc2sTradeAnswerReq(): sc2sTradeAnswerReq {
  return { accountId: "", nickName: undefined, selectFlag: 0 };
}

export const sc2sTradeAnswerReq = {
  encode(message: sc2sTradeAnswerReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(18).fork()).ldelim();
    }
    if (message.selectFlag !== 0) {
      writer.uint32(24).uint32(message.selectFlag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradeAnswerReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradeAnswerReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.selectFlag = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sTradeAnswerReq {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      selectFlag: isSet(object.selectFlag) ? Number(object.selectFlag) : 0,
    };
  },

  toJSON(message: sc2sTradeAnswerReq): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
    }
    if (message.selectFlag !== 0) {
      obj.selectFlag = Math.round(message.selectFlag);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradeAnswerReq>, I>>(base?: I): sc2sTradeAnswerReq {
    return sc2sTradeAnswerReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradeAnswerReq>, I>>(object: I): sc2sTradeAnswerReq {
    const message = createBasesc2sTradeAnswerReq();
    message.accountId = object.accountId ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.selectFlag = object.selectFlag ?? 0;
    return message;
  },
};

function createBasess2cTradeAnswerRes(): ss2cTradeAnswerRes {
  return { result: 0 };
}

export const ss2cTradeAnswerRes = {
  encode(message: ss2cTradeAnswerRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradeAnswerRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradeAnswerRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradeAnswerRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cTradeAnswerRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradeAnswerRes>, I>>(base?: I): ss2cTradeAnswerRes {
    return ss2cTradeAnswerRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradeAnswerRes>, I>>(object: I): ss2cTradeAnswerRes {
    const message = createBasess2cTradeAnswerRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasess2cTradeAnswerRefusalNot(): ss2cTradeAnswerRefusalNot {
  return { accountId: "", nickName: undefined };
}

export const ss2cTradeAnswerRefusalNot = {
  encode(message: ss2cTradeAnswerRefusalNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradeAnswerRefusalNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradeAnswerRefusalNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradeAnswerRefusalNot {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
    };
  },

  toJSON(message: ss2cTradeAnswerRefusalNot): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradeAnswerRefusalNot>, I>>(base?: I): ss2cTradeAnswerRefusalNot {
    return ss2cTradeAnswerRefusalNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradeAnswerRefusalNot>, I>>(object: I): ss2cTradeAnswerRefusalNot {
    const message = createBasess2cTradeAnswerRefusalNot();
    message.accountId = object.accountId ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    return message;
  },
};

function createBasess2cTradingBeginNot(): ss2cTradingBeginNot {
  return { target: undefined, mine: undefined, tradeFee: 0, moveResetTimeSec: 0 };
}

export const ss2cTradingBeginNot = {
  encode(message: ss2cTradingBeginNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.target !== undefined) {
      stradingUserInfo.encode(message.target, writer.uint32(10).fork()).ldelim();
    }
    if (message.mine !== undefined) {
      stradingUserInfo.encode(message.mine, writer.uint32(18).fork()).ldelim();
    }
    if (message.tradeFee !== 0) {
      writer.uint32(32).uint32(message.tradeFee);
    }
    if (message.moveResetTimeSec !== 0) {
      writer.uint32(40).uint32(message.moveResetTimeSec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradingBeginNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradingBeginNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.target = stradingUserInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mine = stradingUserInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.tradeFee = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.moveResetTimeSec = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradingBeginNot {
    return {
      target: isSet(object.target) ? stradingUserInfo.fromJSON(object.target) : undefined,
      mine: isSet(object.mine) ? stradingUserInfo.fromJSON(object.mine) : undefined,
      tradeFee: isSet(object.tradeFee) ? Number(object.tradeFee) : 0,
      moveResetTimeSec: isSet(object.moveResetTimeSec) ? Number(object.moveResetTimeSec) : 0,
    };
  },

  toJSON(message: ss2cTradingBeginNot): unknown {
    const obj: any = {};
    if (message.target !== undefined) {
      obj.target = stradingUserInfo.toJSON(message.target);
    }
    if (message.mine !== undefined) {
      obj.mine = stradingUserInfo.toJSON(message.mine);
    }
    if (message.tradeFee !== 0) {
      obj.tradeFee = Math.round(message.tradeFee);
    }
    if (message.moveResetTimeSec !== 0) {
      obj.moveResetTimeSec = Math.round(message.moveResetTimeSec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradingBeginNot>, I>>(base?: I): ss2cTradingBeginNot {
    return ss2cTradingBeginNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradingBeginNot>, I>>(object: I): ss2cTradingBeginNot {
    const message = createBasess2cTradingBeginNot();
    message.target = (object.target !== undefined && object.target !== null)
      ? stradingUserInfo.fromPartial(object.target)
      : undefined;
    message.mine = (object.mine !== undefined && object.mine !== null)
      ? stradingUserInfo.fromPartial(object.mine)
      : undefined;
    message.tradeFee = object.tradeFee ?? 0;
    message.moveResetTimeSec = object.moveResetTimeSec ?? 0;
    return message;
  },
};

function createBasesc2sTradingCloseReq(): sc2sTradingCloseReq {
  return {};
}

export const sc2sTradingCloseReq = {
  encode(_: sc2sTradingCloseReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradingCloseReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradingCloseReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): sc2sTradingCloseReq {
    return {};
  },

  toJSON(_: sc2sTradingCloseReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradingCloseReq>, I>>(base?: I): sc2sTradingCloseReq {
    return sc2sTradingCloseReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradingCloseReq>, I>>(_: I): sc2sTradingCloseReq {
    const message = createBasesc2sTradingCloseReq();
    return message;
  },
};

function createBasess2cTradingCloseRes(): ss2cTradingCloseRes {
  return { result: 0 };
}

export const ss2cTradingCloseRes = {
  encode(message: ss2cTradingCloseRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradingCloseRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradingCloseRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradingCloseRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cTradingCloseRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradingCloseRes>, I>>(base?: I): ss2cTradingCloseRes {
    return ss2cTradingCloseRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradingCloseRes>, I>>(object: I): ss2cTradingCloseRes {
    const message = createBasess2cTradingCloseRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sTradingChatReq(): sc2sTradingChatReq {
  return { chat: undefined };
}

export const sc2sTradingChatReq = {
  encode(message: sc2sTradingChatReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chat !== undefined) {
      stradeChatC2s.encode(message.chat, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradingChatReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradingChatReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chat = stradeChatC2s.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sTradingChatReq {
    return { chat: isSet(object.chat) ? stradeChatC2s.fromJSON(object.chat) : undefined };
  },

  toJSON(message: sc2sTradingChatReq): unknown {
    const obj: any = {};
    if (message.chat !== undefined) {
      obj.chat = stradeChatC2s.toJSON(message.chat);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradingChatReq>, I>>(base?: I): sc2sTradingChatReq {
    return sc2sTradingChatReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradingChatReq>, I>>(object: I): sc2sTradingChatReq {
    const message = createBasesc2sTradingChatReq();
    message.chat = (object.chat !== undefined && object.chat !== null)
      ? stradeChatC2s.fromPartial(object.chat)
      : undefined;
    return message;
  },
};

function createBasess2cTradingChatRes(): ss2cTradingChatRes {
  return { result: 0, chat: undefined };
}

export const ss2cTradingChatRes = {
  encode(message: ss2cTradingChatRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.chat !== undefined) {
      stradeChatS2c.encode(message.chat, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradingChatRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradingChatRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chat = stradeChatS2c.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradingChatRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      chat: isSet(object.chat) ? stradeChatS2c.fromJSON(object.chat) : undefined,
    };
  },

  toJSON(message: ss2cTradingChatRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.chat !== undefined) {
      obj.chat = stradeChatS2c.toJSON(message.chat);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradingChatRes>, I>>(base?: I): ss2cTradingChatRes {
    return ss2cTradingChatRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradingChatRes>, I>>(object: I): ss2cTradingChatRes {
    const message = createBasess2cTradingChatRes();
    message.result = object.result ?? 0;
    message.chat = (object.chat !== undefined && object.chat !== null)
      ? stradeChatS2c.fromPartial(object.chat)
      : undefined;
    return message;
  },
};

function createBasesc2sTradingItemUpdateReq(): sc2sTradingItemUpdateReq {
  return { updateFlag: 0, uniqueId: 0, slotId: 0 };
}

export const sc2sTradingItemUpdateReq = {
  encode(message: sc2sTradingItemUpdateReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updateFlag !== 0) {
      writer.uint32(8).uint32(message.updateFlag);
    }
    if (message.uniqueId !== 0) {
      writer.uint32(16).uint64(message.uniqueId);
    }
    if (message.slotId !== 0) {
      writer.uint32(24).uint32(message.slotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradingItemUpdateReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradingItemUpdateReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.updateFlag = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.uniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.slotId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sTradingItemUpdateReq {
    return {
      updateFlag: isSet(object.updateFlag) ? Number(object.updateFlag) : 0,
      uniqueId: isSet(object.uniqueId) ? Number(object.uniqueId) : 0,
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
    };
  },

  toJSON(message: sc2sTradingItemUpdateReq): unknown {
    const obj: any = {};
    if (message.updateFlag !== 0) {
      obj.updateFlag = Math.round(message.updateFlag);
    }
    if (message.uniqueId !== 0) {
      obj.uniqueId = Math.round(message.uniqueId);
    }
    if (message.slotId !== 0) {
      obj.slotId = Math.round(message.slotId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradingItemUpdateReq>, I>>(base?: I): sc2sTradingItemUpdateReq {
    return sc2sTradingItemUpdateReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradingItemUpdateReq>, I>>(object: I): sc2sTradingItemUpdateReq {
    const message = createBasesc2sTradingItemUpdateReq();
    message.updateFlag = object.updateFlag ?? 0;
    message.uniqueId = object.uniqueId ?? 0;
    message.slotId = object.slotId ?? 0;
    return message;
  },
};

function createBasess2cTradingItemUpdateRes(): ss2cTradingItemUpdateRes {
  return { result: 0, updateUserInfo: undefined, updateFlag: 0, updateItem: undefined };
}

export const ss2cTradingItemUpdateRes = {
  encode(message: ss2cTradingItemUpdateRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.updateUserInfo !== undefined) {
      stradingUserInfo.encode(message.updateUserInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.updateFlag !== 0) {
      writer.uint32(24).uint32(message.updateFlag);
    }
    if (message.updateItem !== undefined) {
      SItem.encode(message.updateItem, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradingItemUpdateRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradingItemUpdateRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateUserInfo = stradingUserInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updateFlag = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updateItem = SItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradingItemUpdateRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      updateUserInfo: isSet(object.updateUserInfo) ? stradingUserInfo.fromJSON(object.updateUserInfo) : undefined,
      updateFlag: isSet(object.updateFlag) ? Number(object.updateFlag) : 0,
      updateItem: isSet(object.updateItem) ? SItem.fromJSON(object.updateItem) : undefined,
    };
  },

  toJSON(message: ss2cTradingItemUpdateRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.updateUserInfo !== undefined) {
      obj.updateUserInfo = stradingUserInfo.toJSON(message.updateUserInfo);
    }
    if (message.updateFlag !== 0) {
      obj.updateFlag = Math.round(message.updateFlag);
    }
    if (message.updateItem !== undefined) {
      obj.updateItem = SItem.toJSON(message.updateItem);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradingItemUpdateRes>, I>>(base?: I): ss2cTradingItemUpdateRes {
    return ss2cTradingItemUpdateRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradingItemUpdateRes>, I>>(object: I): ss2cTradingItemUpdateRes {
    const message = createBasess2cTradingItemUpdateRes();
    message.result = object.result ?? 0;
    message.updateUserInfo = (object.updateUserInfo !== undefined && object.updateUserInfo !== null)
      ? stradingUserInfo.fromPartial(object.updateUserInfo)
      : undefined;
    message.updateFlag = object.updateFlag ?? 0;
    message.updateItem = (object.updateItem !== undefined && object.updateItem !== null)
      ? SItem.fromPartial(object.updateItem)
      : undefined;
    return message;
  },
};

function createBasesc2sTradingReadyReq(): sc2sTradingReadyReq {
  return { isReady: 0 };
}

export const sc2sTradingReadyReq = {
  encode(message: sc2sTradingReadyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isReady !== 0) {
      writer.uint32(8).uint32(message.isReady);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradingReadyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradingReadyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isReady = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sTradingReadyReq {
    return { isReady: isSet(object.isReady) ? Number(object.isReady) : 0 };
  },

  toJSON(message: sc2sTradingReadyReq): unknown {
    const obj: any = {};
    if (message.isReady !== 0) {
      obj.isReady = Math.round(message.isReady);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradingReadyReq>, I>>(base?: I): sc2sTradingReadyReq {
    return sc2sTradingReadyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradingReadyReq>, I>>(object: I): sc2sTradingReadyReq {
    const message = createBasesc2sTradingReadyReq();
    message.isReady = object.isReady ?? 0;
    return message;
  },
};

function createBasess2cTradingReadyRes(): ss2cTradingReadyRes {
  return { result: 0 };
}

export const ss2cTradingReadyRes = {
  encode(message: ss2cTradingReadyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradingReadyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradingReadyRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradingReadyRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cTradingReadyRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradingReadyRes>, I>>(base?: I): ss2cTradingReadyRes {
    return ss2cTradingReadyRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradingReadyRes>, I>>(object: I): ss2cTradingReadyRes {
    const message = createBasess2cTradingReadyRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasess2cTradingReadyNot(): ss2cTradingReadyNot {
  return { readyUserInfo: undefined, isReady: 0 };
}

export const ss2cTradingReadyNot = {
  encode(message: ss2cTradingReadyNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.readyUserInfo !== undefined) {
      stradingUserInfo.encode(message.readyUserInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.isReady !== 0) {
      writer.uint32(16).uint32(message.isReady);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradingReadyNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradingReadyNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.readyUserInfo = stradingUserInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isReady = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradingReadyNot {
    return {
      readyUserInfo: isSet(object.readyUserInfo) ? stradingUserInfo.fromJSON(object.readyUserInfo) : undefined,
      isReady: isSet(object.isReady) ? Number(object.isReady) : 0,
    };
  },

  toJSON(message: ss2cTradingReadyNot): unknown {
    const obj: any = {};
    if (message.readyUserInfo !== undefined) {
      obj.readyUserInfo = stradingUserInfo.toJSON(message.readyUserInfo);
    }
    if (message.isReady !== 0) {
      obj.isReady = Math.round(message.isReady);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradingReadyNot>, I>>(base?: I): ss2cTradingReadyNot {
    return ss2cTradingReadyNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradingReadyNot>, I>>(object: I): ss2cTradingReadyNot {
    const message = createBasess2cTradingReadyNot();
    message.readyUserInfo = (object.readyUserInfo !== undefined && object.readyUserInfo !== null)
      ? stradingUserInfo.fromPartial(object.readyUserInfo)
      : undefined;
    message.isReady = object.isReady ?? 0;
    return message;
  },
};

function createBasess2cTradingConfirmNot(): ss2cTradingConfirmNot {
  return { target: undefined, mine: undefined };
}

export const ss2cTradingConfirmNot = {
  encode(message: ss2cTradingConfirmNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.target !== undefined) {
      stradingConfirmItem.encode(message.target, writer.uint32(10).fork()).ldelim();
    }
    if (message.mine !== undefined) {
      stradingConfirmItem.encode(message.mine, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradingConfirmNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradingConfirmNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.target = stradingConfirmItem.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mine = stradingConfirmItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradingConfirmNot {
    return {
      target: isSet(object.target) ? stradingConfirmItem.fromJSON(object.target) : undefined,
      mine: isSet(object.mine) ? stradingConfirmItem.fromJSON(object.mine) : undefined,
    };
  },

  toJSON(message: ss2cTradingConfirmNot): unknown {
    const obj: any = {};
    if (message.target !== undefined) {
      obj.target = stradingConfirmItem.toJSON(message.target);
    }
    if (message.mine !== undefined) {
      obj.mine = stradingConfirmItem.toJSON(message.mine);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradingConfirmNot>, I>>(base?: I): ss2cTradingConfirmNot {
    return ss2cTradingConfirmNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradingConfirmNot>, I>>(object: I): ss2cTradingConfirmNot {
    const message = createBasess2cTradingConfirmNot();
    message.target = (object.target !== undefined && object.target !== null)
      ? stradingConfirmItem.fromPartial(object.target)
      : undefined;
    message.mine = (object.mine !== undefined && object.mine !== null)
      ? stradingConfirmItem.fromPartial(object.mine)
      : undefined;
    return message;
  },
};

function createBasesc2sTradingConfirmReadyReq(): sc2sTradingConfirmReadyReq {
  return { isReady: 0 };
}

export const sc2sTradingConfirmReadyReq = {
  encode(message: sc2sTradingConfirmReadyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isReady !== 0) {
      writer.uint32(8).uint32(message.isReady);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradingConfirmReadyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradingConfirmReadyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isReady = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sTradingConfirmReadyReq {
    return { isReady: isSet(object.isReady) ? Number(object.isReady) : 0 };
  },

  toJSON(message: sc2sTradingConfirmReadyReq): unknown {
    const obj: any = {};
    if (message.isReady !== 0) {
      obj.isReady = Math.round(message.isReady);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradingConfirmReadyReq>, I>>(base?: I): sc2sTradingConfirmReadyReq {
    return sc2sTradingConfirmReadyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradingConfirmReadyReq>, I>>(object: I): sc2sTradingConfirmReadyReq {
    const message = createBasesc2sTradingConfirmReadyReq();
    message.isReady = object.isReady ?? 0;
    return message;
  },
};

function createBasess2cTradingConfirmReadyRes(): ss2cTradingConfirmReadyRes {
  return { result: 0 };
}

export const ss2cTradingConfirmReadyRes = {
  encode(message: ss2cTradingConfirmReadyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradingConfirmReadyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradingConfirmReadyRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradingConfirmReadyRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cTradingConfirmReadyRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradingConfirmReadyRes>, I>>(base?: I): ss2cTradingConfirmReadyRes {
    return ss2cTradingConfirmReadyRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradingConfirmReadyRes>, I>>(object: I): ss2cTradingConfirmReadyRes {
    const message = createBasess2cTradingConfirmReadyRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasess2cTradingConfirmReadyNot(): ss2cTradingConfirmReadyNot {
  return { readyUserInfo: undefined, isReady: 0 };
}

export const ss2cTradingConfirmReadyNot = {
  encode(message: ss2cTradingConfirmReadyNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.readyUserInfo !== undefined) {
      stradingUserInfo.encode(message.readyUserInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.isReady !== 0) {
      writer.uint32(16).uint32(message.isReady);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradingConfirmReadyNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradingConfirmReadyNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.readyUserInfo = stradingUserInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isReady = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradingConfirmReadyNot {
    return {
      readyUserInfo: isSet(object.readyUserInfo) ? stradingUserInfo.fromJSON(object.readyUserInfo) : undefined,
      isReady: isSet(object.isReady) ? Number(object.isReady) : 0,
    };
  },

  toJSON(message: ss2cTradingConfirmReadyNot): unknown {
    const obj: any = {};
    if (message.readyUserInfo !== undefined) {
      obj.readyUserInfo = stradingUserInfo.toJSON(message.readyUserInfo);
    }
    if (message.isReady !== 0) {
      obj.isReady = Math.round(message.isReady);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradingConfirmReadyNot>, I>>(base?: I): ss2cTradingConfirmReadyNot {
    return ss2cTradingConfirmReadyNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradingConfirmReadyNot>, I>>(object: I): ss2cTradingConfirmReadyNot {
    const message = createBasess2cTradingConfirmReadyNot();
    message.readyUserInfo = (object.readyUserInfo !== undefined && object.readyUserInfo !== null)
      ? stradingUserInfo.fromPartial(object.readyUserInfo)
      : undefined;
    message.isReady = object.isReady ?? 0;
    return message;
  },
};

function createBasesc2sTradingConfirmCancelReq(): sc2sTradingConfirmCancelReq {
  return {};
}

export const sc2sTradingConfirmCancelReq = {
  encode(_: sc2sTradingConfirmCancelReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTradingConfirmCancelReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTradingConfirmCancelReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): sc2sTradingConfirmCancelReq {
    return {};
  },

  toJSON(_: sc2sTradingConfirmCancelReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTradingConfirmCancelReq>, I>>(base?: I): sc2sTradingConfirmCancelReq {
    return sc2sTradingConfirmCancelReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTradingConfirmCancelReq>, I>>(_: I): sc2sTradingConfirmCancelReq {
    const message = createBasesc2sTradingConfirmCancelReq();
    return message;
  },
};

function createBasess2cTradingConfirmCancelRes(): ss2cTradingConfirmCancelRes {
  return { result: 0 };
}

export const ss2cTradingConfirmCancelRes = {
  encode(message: ss2cTradingConfirmCancelRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradingConfirmCancelRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradingConfirmCancelRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradingConfirmCancelRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cTradingConfirmCancelRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradingConfirmCancelRes>, I>>(base?: I): ss2cTradingConfirmCancelRes {
    return ss2cTradingConfirmCancelRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradingConfirmCancelRes>, I>>(object: I): ss2cTradingConfirmCancelRes {
    const message = createBasess2cTradingConfirmCancelRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasess2cTradingResultNot(): ss2cTradingResultNot {
  return { result: 0 };
}

export const ss2cTradingResultNot = {
  encode(message: ss2cTradingResultNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTradingResultNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTradingResultNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTradingResultNot {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cTradingResultNot): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTradingResultNot>, I>>(base?: I): ss2cTradingResultNot {
    return ss2cTradingResultNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTradingResultNot>, I>>(object: I): ss2cTradingResultNot {
    const message = createBasess2cTradingResultNot();
    message.result = object.result ?? 0;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
