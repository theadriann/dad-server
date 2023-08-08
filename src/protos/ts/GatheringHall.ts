/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { scharacterGatheringHallInfo } from "./_Character";
import { SCHATDATA } from "./_Chat";
import { SItem } from "./_Item";

export const protobufPackage = "DC.Packet";

export interface sgatheringHallChannel {
  channelIndex: number;
  channelId: string;
  memberCount: number;
  groupIndex: number;
}

export interface sgatheringHallChatC2s {
  chatType: number;
  targetAccountId: string;
  targetCharacterId: string;
  chatData: SCHATDATA | undefined;
}

export interface sgatheringHallChatS2c {
  chatIndex: number;
  chatType: number;
  time: number;
  chatData: SCHATDATA | undefined;
}

export interface sgatheringHallUserUpdateInfo {
  updateFlag: number;
  info: scharacterGatheringHallInfo | undefined;
}

export interface sc2sGatheringHallChannelListReq {
}

export interface ss2cGatheringHallChannelListRes {
  channels: sgatheringHallChannel[];
}

export interface sc2sGatheringHallChannelSelectReq {
  channelIndex: number;
}

export interface ss2cGatheringHallChannelSelectRes {
  result: number;
}

export interface sc2sGatheringHallChannelExitReq {
}

export interface ss2cGatheringHallChannelExitRes {
  result: number;
}

export interface sc2sGatheringHallChannelUserListReq {
}

export interface ss2cGatheringHallChannelUserListRes {
  loopFlag: number;
  characters: scharacterGatheringHallInfo[];
}

export interface ss2cGatheringHallChannelUserUpdateNot {
  updates: sgatheringHallUserUpdateInfo[];
}

export interface sc2sGatheringHallChannelChatReq {
  chat: sgatheringHallChatC2s | undefined;
}

export interface ss2cGatheringHallChannelChatRes {
  result: number;
  chats: sgatheringHallChatS2c[];
}

export interface ss2cGatheringHallChannelChatNot {
  chats: sgatheringHallChatS2c[];
}

export interface sc2sGatheringHallTargetEquippedItemReq {
  channelIndex: number;
  accountId: string;
  characterId: string;
}

export interface ss2cGatheringHallTargetEquippedItemRes {
  result: number;
  equippedItems: SItem[];
  characterInfo: scharacterGatheringHallInfo | undefined;
}

function createBasesgatheringHallChannel(): sgatheringHallChannel {
  return { channelIndex: 0, channelId: "", memberCount: 0, groupIndex: 0 };
}

export const sgatheringHallChannel = {
  encode(message: sgatheringHallChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelIndex !== 0) {
      writer.uint32(8).uint32(message.channelIndex);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.memberCount !== 0) {
      writer.uint32(24).uint32(message.memberCount);
    }
    if (message.groupIndex !== 0) {
      writer.uint32(32).uint32(message.groupIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sgatheringHallChannel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesgatheringHallChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.channelIndex = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channelId = reader.string();
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

  fromJSON(object: any): sgatheringHallChannel {
    return {
      channelIndex: isSet(object.channelIndex) ? Number(object.channelIndex) : 0,
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      memberCount: isSet(object.memberCount) ? Number(object.memberCount) : 0,
      groupIndex: isSet(object.groupIndex) ? Number(object.groupIndex) : 0,
    };
  },

  toJSON(message: sgatheringHallChannel): unknown {
    const obj: any = {};
    if (message.channelIndex !== 0) {
      obj.channelIndex = Math.round(message.channelIndex);
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    if (message.memberCount !== 0) {
      obj.memberCount = Math.round(message.memberCount);
    }
    if (message.groupIndex !== 0) {
      obj.groupIndex = Math.round(message.groupIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sgatheringHallChannel>, I>>(base?: I): sgatheringHallChannel {
    return sgatheringHallChannel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sgatheringHallChannel>, I>>(object: I): sgatheringHallChannel {
    const message = createBasesgatheringHallChannel();
    message.channelIndex = object.channelIndex ?? 0;
    message.channelId = object.channelId ?? "";
    message.memberCount = object.memberCount ?? 0;
    message.groupIndex = object.groupIndex ?? 0;
    return message;
  },
};

function createBasesgatheringHallChatC2s(): sgatheringHallChatC2s {
  return { chatType: 0, targetAccountId: "", targetCharacterId: "", chatData: undefined };
}

export const sgatheringHallChatC2s = {
  encode(message: sgatheringHallChatC2s, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): sgatheringHallChatC2s {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesgatheringHallChatC2s();
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

  fromJSON(object: any): sgatheringHallChatC2s {
    return {
      chatType: isSet(object.chatType) ? Number(object.chatType) : 0,
      targetAccountId: isSet(object.targetAccountId) ? String(object.targetAccountId) : "",
      targetCharacterId: isSet(object.targetCharacterId) ? String(object.targetCharacterId) : "",
      chatData: isSet(object.chatData) ? SCHATDATA.fromJSON(object.chatData) : undefined,
    };
  },

  toJSON(message: sgatheringHallChatC2s): unknown {
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

  create<I extends Exact<DeepPartial<sgatheringHallChatC2s>, I>>(base?: I): sgatheringHallChatC2s {
    return sgatheringHallChatC2s.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sgatheringHallChatC2s>, I>>(object: I): sgatheringHallChatC2s {
    const message = createBasesgatheringHallChatC2s();
    message.chatType = object.chatType ?? 0;
    message.targetAccountId = object.targetAccountId ?? "";
    message.targetCharacterId = object.targetCharacterId ?? "";
    message.chatData = (object.chatData !== undefined && object.chatData !== null)
      ? SCHATDATA.fromPartial(object.chatData)
      : undefined;
    return message;
  },
};

function createBasesgatheringHallChatS2c(): sgatheringHallChatS2c {
  return { chatIndex: 0, chatType: 0, time: 0, chatData: undefined };
}

export const sgatheringHallChatS2c = {
  encode(message: sgatheringHallChatS2c, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatIndex !== 0) {
      writer.uint32(8).uint64(message.chatIndex);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): sgatheringHallChatS2c {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesgatheringHallChatS2c();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.chatIndex = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): sgatheringHallChatS2c {
    return {
      chatIndex: isSet(object.chatIndex) ? Number(object.chatIndex) : 0,
      chatType: isSet(object.chatType) ? Number(object.chatType) : 0,
      time: isSet(object.time) ? Number(object.time) : 0,
      chatData: isSet(object.chatData) ? SCHATDATA.fromJSON(object.chatData) : undefined,
    };
  },

  toJSON(message: sgatheringHallChatS2c): unknown {
    const obj: any = {};
    if (message.chatIndex !== 0) {
      obj.chatIndex = Math.round(message.chatIndex);
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

  create<I extends Exact<DeepPartial<sgatheringHallChatS2c>, I>>(base?: I): sgatheringHallChatS2c {
    return sgatheringHallChatS2c.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sgatheringHallChatS2c>, I>>(object: I): sgatheringHallChatS2c {
    const message = createBasesgatheringHallChatS2c();
    message.chatIndex = object.chatIndex ?? 0;
    message.chatType = object.chatType ?? 0;
    message.time = object.time ?? 0;
    message.chatData = (object.chatData !== undefined && object.chatData !== null)
      ? SCHATDATA.fromPartial(object.chatData)
      : undefined;
    return message;
  },
};

function createBasesgatheringHallUserUpdateInfo(): sgatheringHallUserUpdateInfo {
  return { updateFlag: 0, info: undefined };
}

export const sgatheringHallUserUpdateInfo = {
  encode(message: sgatheringHallUserUpdateInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updateFlag !== 0) {
      writer.uint32(8).uint32(message.updateFlag);
    }
    if (message.info !== undefined) {
      scharacterGatheringHallInfo.encode(message.info, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sgatheringHallUserUpdateInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesgatheringHallUserUpdateInfo();
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

          message.info = scharacterGatheringHallInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sgatheringHallUserUpdateInfo {
    return {
      updateFlag: isSet(object.updateFlag) ? Number(object.updateFlag) : 0,
      info: isSet(object.info) ? scharacterGatheringHallInfo.fromJSON(object.info) : undefined,
    };
  },

  toJSON(message: sgatheringHallUserUpdateInfo): unknown {
    const obj: any = {};
    if (message.updateFlag !== 0) {
      obj.updateFlag = Math.round(message.updateFlag);
    }
    if (message.info !== undefined) {
      obj.info = scharacterGatheringHallInfo.toJSON(message.info);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sgatheringHallUserUpdateInfo>, I>>(base?: I): sgatheringHallUserUpdateInfo {
    return sgatheringHallUserUpdateInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sgatheringHallUserUpdateInfo>, I>>(object: I): sgatheringHallUserUpdateInfo {
    const message = createBasesgatheringHallUserUpdateInfo();
    message.updateFlag = object.updateFlag ?? 0;
    message.info = (object.info !== undefined && object.info !== null)
      ? scharacterGatheringHallInfo.fromPartial(object.info)
      : undefined;
    return message;
  },
};

function createBasesc2sGatheringHallChannelListReq(): sc2sGatheringHallChannelListReq {
  return {};
}

export const sc2sGatheringHallChannelListReq = {
  encode(_: sc2sGatheringHallChannelListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sGatheringHallChannelListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sGatheringHallChannelListReq();
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

  fromJSON(_: any): sc2sGatheringHallChannelListReq {
    return {};
  },

  toJSON(_: sc2sGatheringHallChannelListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sGatheringHallChannelListReq>, I>>(base?: I): sc2sGatheringHallChannelListReq {
    return sc2sGatheringHallChannelListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sGatheringHallChannelListReq>, I>>(_: I): sc2sGatheringHallChannelListReq {
    const message = createBasesc2sGatheringHallChannelListReq();
    return message;
  },
};

function createBasess2cGatheringHallChannelListRes(): ss2cGatheringHallChannelListRes {
  return { channels: [] };
}

export const ss2cGatheringHallChannelListRes = {
  encode(message: ss2cGatheringHallChannelListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.channels) {
      sgatheringHallChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cGatheringHallChannelListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cGatheringHallChannelListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channels.push(sgatheringHallChannel.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cGatheringHallChannelListRes {
    return {
      channels: Array.isArray(object?.channels)
        ? object.channels.map((e: any) => sgatheringHallChannel.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cGatheringHallChannelListRes): unknown {
    const obj: any = {};
    if (message.channels?.length) {
      obj.channels = message.channels.map((e) => sgatheringHallChannel.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cGatheringHallChannelListRes>, I>>(base?: I): ss2cGatheringHallChannelListRes {
    return ss2cGatheringHallChannelListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cGatheringHallChannelListRes>, I>>(
    object: I,
  ): ss2cGatheringHallChannelListRes {
    const message = createBasess2cGatheringHallChannelListRes();
    message.channels = object.channels?.map((e) => sgatheringHallChannel.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sGatheringHallChannelSelectReq(): sc2sGatheringHallChannelSelectReq {
  return { channelIndex: 0 };
}

export const sc2sGatheringHallChannelSelectReq = {
  encode(message: sc2sGatheringHallChannelSelectReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelIndex !== 0) {
      writer.uint32(8).uint32(message.channelIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sGatheringHallChannelSelectReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sGatheringHallChannelSelectReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.channelIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sGatheringHallChannelSelectReq {
    return { channelIndex: isSet(object.channelIndex) ? Number(object.channelIndex) : 0 };
  },

  toJSON(message: sc2sGatheringHallChannelSelectReq): unknown {
    const obj: any = {};
    if (message.channelIndex !== 0) {
      obj.channelIndex = Math.round(message.channelIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sGatheringHallChannelSelectReq>, I>>(
    base?: I,
  ): sc2sGatheringHallChannelSelectReq {
    return sc2sGatheringHallChannelSelectReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sGatheringHallChannelSelectReq>, I>>(
    object: I,
  ): sc2sGatheringHallChannelSelectReq {
    const message = createBasesc2sGatheringHallChannelSelectReq();
    message.channelIndex = object.channelIndex ?? 0;
    return message;
  },
};

function createBasess2cGatheringHallChannelSelectRes(): ss2cGatheringHallChannelSelectRes {
  return { result: 0 };
}

export const ss2cGatheringHallChannelSelectRes = {
  encode(message: ss2cGatheringHallChannelSelectRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cGatheringHallChannelSelectRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cGatheringHallChannelSelectRes();
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

  fromJSON(object: any): ss2cGatheringHallChannelSelectRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cGatheringHallChannelSelectRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cGatheringHallChannelSelectRes>, I>>(
    base?: I,
  ): ss2cGatheringHallChannelSelectRes {
    return ss2cGatheringHallChannelSelectRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cGatheringHallChannelSelectRes>, I>>(
    object: I,
  ): ss2cGatheringHallChannelSelectRes {
    const message = createBasess2cGatheringHallChannelSelectRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sGatheringHallChannelExitReq(): sc2sGatheringHallChannelExitReq {
  return {};
}

export const sc2sGatheringHallChannelExitReq = {
  encode(_: sc2sGatheringHallChannelExitReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sGatheringHallChannelExitReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sGatheringHallChannelExitReq();
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

  fromJSON(_: any): sc2sGatheringHallChannelExitReq {
    return {};
  },

  toJSON(_: sc2sGatheringHallChannelExitReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sGatheringHallChannelExitReq>, I>>(base?: I): sc2sGatheringHallChannelExitReq {
    return sc2sGatheringHallChannelExitReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sGatheringHallChannelExitReq>, I>>(_: I): sc2sGatheringHallChannelExitReq {
    const message = createBasesc2sGatheringHallChannelExitReq();
    return message;
  },
};

function createBasess2cGatheringHallChannelExitRes(): ss2cGatheringHallChannelExitRes {
  return { result: 0 };
}

export const ss2cGatheringHallChannelExitRes = {
  encode(message: ss2cGatheringHallChannelExitRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cGatheringHallChannelExitRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cGatheringHallChannelExitRes();
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

  fromJSON(object: any): ss2cGatheringHallChannelExitRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cGatheringHallChannelExitRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cGatheringHallChannelExitRes>, I>>(base?: I): ss2cGatheringHallChannelExitRes {
    return ss2cGatheringHallChannelExitRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cGatheringHallChannelExitRes>, I>>(
    object: I,
  ): ss2cGatheringHallChannelExitRes {
    const message = createBasess2cGatheringHallChannelExitRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sGatheringHallChannelUserListReq(): sc2sGatheringHallChannelUserListReq {
  return {};
}

export const sc2sGatheringHallChannelUserListReq = {
  encode(_: sc2sGatheringHallChannelUserListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sGatheringHallChannelUserListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sGatheringHallChannelUserListReq();
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

  fromJSON(_: any): sc2sGatheringHallChannelUserListReq {
    return {};
  },

  toJSON(_: sc2sGatheringHallChannelUserListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sGatheringHallChannelUserListReq>, I>>(
    base?: I,
  ): sc2sGatheringHallChannelUserListReq {
    return sc2sGatheringHallChannelUserListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sGatheringHallChannelUserListReq>, I>>(
    _: I,
  ): sc2sGatheringHallChannelUserListReq {
    const message = createBasesc2sGatheringHallChannelUserListReq();
    return message;
  },
};

function createBasess2cGatheringHallChannelUserListRes(): ss2cGatheringHallChannelUserListRes {
  return { loopFlag: 0, characters: [] };
}

export const ss2cGatheringHallChannelUserListRes = {
  encode(message: ss2cGatheringHallChannelUserListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loopFlag !== 0) {
      writer.uint32(8).uint32(message.loopFlag);
    }
    for (const v of message.characters) {
      scharacterGatheringHallInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cGatheringHallChannelUserListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cGatheringHallChannelUserListRes();
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

          message.characters.push(scharacterGatheringHallInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cGatheringHallChannelUserListRes {
    return {
      loopFlag: isSet(object.loopFlag) ? Number(object.loopFlag) : 0,
      characters: Array.isArray(object?.characters)
        ? object.characters.map((e: any) => scharacterGatheringHallInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cGatheringHallChannelUserListRes): unknown {
    const obj: any = {};
    if (message.loopFlag !== 0) {
      obj.loopFlag = Math.round(message.loopFlag);
    }
    if (message.characters?.length) {
      obj.characters = message.characters.map((e) => scharacterGatheringHallInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cGatheringHallChannelUserListRes>, I>>(
    base?: I,
  ): ss2cGatheringHallChannelUserListRes {
    return ss2cGatheringHallChannelUserListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cGatheringHallChannelUserListRes>, I>>(
    object: I,
  ): ss2cGatheringHallChannelUserListRes {
    const message = createBasess2cGatheringHallChannelUserListRes();
    message.loopFlag = object.loopFlag ?? 0;
    message.characters = object.characters?.map((e) => scharacterGatheringHallInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cGatheringHallChannelUserUpdateNot(): ss2cGatheringHallChannelUserUpdateNot {
  return { updates: [] };
}

export const ss2cGatheringHallChannelUserUpdateNot = {
  encode(message: ss2cGatheringHallChannelUserUpdateNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.updates) {
      sgatheringHallUserUpdateInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cGatheringHallChannelUserUpdateNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cGatheringHallChannelUserUpdateNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.updates.push(sgatheringHallUserUpdateInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cGatheringHallChannelUserUpdateNot {
    return {
      updates: Array.isArray(object?.updates)
        ? object.updates.map((e: any) => sgatheringHallUserUpdateInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cGatheringHallChannelUserUpdateNot): unknown {
    const obj: any = {};
    if (message.updates?.length) {
      obj.updates = message.updates.map((e) => sgatheringHallUserUpdateInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cGatheringHallChannelUserUpdateNot>, I>>(
    base?: I,
  ): ss2cGatheringHallChannelUserUpdateNot {
    return ss2cGatheringHallChannelUserUpdateNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cGatheringHallChannelUserUpdateNot>, I>>(
    object: I,
  ): ss2cGatheringHallChannelUserUpdateNot {
    const message = createBasess2cGatheringHallChannelUserUpdateNot();
    message.updates = object.updates?.map((e) => sgatheringHallUserUpdateInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sGatheringHallChannelChatReq(): sc2sGatheringHallChannelChatReq {
  return { chat: undefined };
}

export const sc2sGatheringHallChannelChatReq = {
  encode(message: sc2sGatheringHallChannelChatReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chat !== undefined) {
      sgatheringHallChatC2s.encode(message.chat, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sGatheringHallChannelChatReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sGatheringHallChannelChatReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chat = sgatheringHallChatC2s.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sGatheringHallChannelChatReq {
    return { chat: isSet(object.chat) ? sgatheringHallChatC2s.fromJSON(object.chat) : undefined };
  },

  toJSON(message: sc2sGatheringHallChannelChatReq): unknown {
    const obj: any = {};
    if (message.chat !== undefined) {
      obj.chat = sgatheringHallChatC2s.toJSON(message.chat);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sGatheringHallChannelChatReq>, I>>(base?: I): sc2sGatheringHallChannelChatReq {
    return sc2sGatheringHallChannelChatReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sGatheringHallChannelChatReq>, I>>(
    object: I,
  ): sc2sGatheringHallChannelChatReq {
    const message = createBasesc2sGatheringHallChannelChatReq();
    message.chat = (object.chat !== undefined && object.chat !== null)
      ? sgatheringHallChatC2s.fromPartial(object.chat)
      : undefined;
    return message;
  },
};

function createBasess2cGatheringHallChannelChatRes(): ss2cGatheringHallChannelChatRes {
  return { result: 0, chats: [] };
}

export const ss2cGatheringHallChannelChatRes = {
  encode(message: ss2cGatheringHallChannelChatRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.chats) {
      sgatheringHallChatS2c.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cGatheringHallChannelChatRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cGatheringHallChannelChatRes();
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

          message.chats.push(sgatheringHallChatS2c.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cGatheringHallChannelChatRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      chats: Array.isArray(object?.chats) ? object.chats.map((e: any) => sgatheringHallChatS2c.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cGatheringHallChannelChatRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.chats?.length) {
      obj.chats = message.chats.map((e) => sgatheringHallChatS2c.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cGatheringHallChannelChatRes>, I>>(base?: I): ss2cGatheringHallChannelChatRes {
    return ss2cGatheringHallChannelChatRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cGatheringHallChannelChatRes>, I>>(
    object: I,
  ): ss2cGatheringHallChannelChatRes {
    const message = createBasess2cGatheringHallChannelChatRes();
    message.result = object.result ?? 0;
    message.chats = object.chats?.map((e) => sgatheringHallChatS2c.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cGatheringHallChannelChatNot(): ss2cGatheringHallChannelChatNot {
  return { chats: [] };
}

export const ss2cGatheringHallChannelChatNot = {
  encode(message: ss2cGatheringHallChannelChatNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chats) {
      sgatheringHallChatS2c.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cGatheringHallChannelChatNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cGatheringHallChannelChatNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chats.push(sgatheringHallChatS2c.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cGatheringHallChannelChatNot {
    return {
      chats: Array.isArray(object?.chats) ? object.chats.map((e: any) => sgatheringHallChatS2c.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cGatheringHallChannelChatNot): unknown {
    const obj: any = {};
    if (message.chats?.length) {
      obj.chats = message.chats.map((e) => sgatheringHallChatS2c.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cGatheringHallChannelChatNot>, I>>(base?: I): ss2cGatheringHallChannelChatNot {
    return ss2cGatheringHallChannelChatNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cGatheringHallChannelChatNot>, I>>(
    object: I,
  ): ss2cGatheringHallChannelChatNot {
    const message = createBasess2cGatheringHallChannelChatNot();
    message.chats = object.chats?.map((e) => sgatheringHallChatS2c.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sGatheringHallTargetEquippedItemReq(): sc2sGatheringHallTargetEquippedItemReq {
  return { channelIndex: 0, accountId: "", characterId: "" };
}

export const sc2sGatheringHallTargetEquippedItemReq = {
  encode(message: sc2sGatheringHallTargetEquippedItemReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelIndex !== 0) {
      writer.uint32(8).uint32(message.channelIndex);
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(26).string(message.characterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sGatheringHallTargetEquippedItemReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sGatheringHallTargetEquippedItemReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.channelIndex = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accountId = reader.string();
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

  fromJSON(object: any): sc2sGatheringHallTargetEquippedItemReq {
    return {
      channelIndex: isSet(object.channelIndex) ? Number(object.channelIndex) : 0,
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
    };
  },

  toJSON(message: sc2sGatheringHallTargetEquippedItemReq): unknown {
    const obj: any = {};
    if (message.channelIndex !== 0) {
      obj.channelIndex = Math.round(message.channelIndex);
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sGatheringHallTargetEquippedItemReq>, I>>(
    base?: I,
  ): sc2sGatheringHallTargetEquippedItemReq {
    return sc2sGatheringHallTargetEquippedItemReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sGatheringHallTargetEquippedItemReq>, I>>(
    object: I,
  ): sc2sGatheringHallTargetEquippedItemReq {
    const message = createBasesc2sGatheringHallTargetEquippedItemReq();
    message.channelIndex = object.channelIndex ?? 0;
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    return message;
  },
};

function createBasess2cGatheringHallTargetEquippedItemRes(): ss2cGatheringHallTargetEquippedItemRes {
  return { result: 0, equippedItems: [], characterInfo: undefined };
}

export const ss2cGatheringHallTargetEquippedItemRes = {
  encode(message: ss2cGatheringHallTargetEquippedItemRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equippedItems) {
      SItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.characterInfo !== undefined) {
      scharacterGatheringHallInfo.encode(message.characterInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cGatheringHallTargetEquippedItemRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cGatheringHallTargetEquippedItemRes();
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

          message.equippedItems.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.characterInfo = scharacterGatheringHallInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cGatheringHallTargetEquippedItemRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equippedItems: Array.isArray(object?.equippedItems)
        ? object.equippedItems.map((e: any) => SItem.fromJSON(e))
        : [],
      characterInfo: isSet(object.characterInfo)
        ? scharacterGatheringHallInfo.fromJSON(object.characterInfo)
        : undefined,
    };
  },

  toJSON(message: ss2cGatheringHallTargetEquippedItemRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.equippedItems?.length) {
      obj.equippedItems = message.equippedItems.map((e) => SItem.toJSON(e));
    }
    if (message.characterInfo !== undefined) {
      obj.characterInfo = scharacterGatheringHallInfo.toJSON(message.characterInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cGatheringHallTargetEquippedItemRes>, I>>(
    base?: I,
  ): ss2cGatheringHallTargetEquippedItemRes {
    return ss2cGatheringHallTargetEquippedItemRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cGatheringHallTargetEquippedItemRes>, I>>(
    object: I,
  ): ss2cGatheringHallTargetEquippedItemRes {
    const message = createBasess2cGatheringHallTargetEquippedItemRes();
    message.result = object.result ?? 0;
    message.equippedItems = object.equippedItems?.map((e) => SItem.fromPartial(e)) || [];
    message.characterInfo = (object.characterInfo !== undefined && object.characterInfo !== null)
      ? scharacterGatheringHallInfo.fromPartial(object.characterInfo)
      : undefined;
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
