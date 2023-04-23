/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { sblockCharacter } from "./_Character";

export const protobufPackage = "DC.Packet";

export interface sc2sMetaLocationReq {
  location: number;
}

export interface ss2cMetaLocationRes {
  location: number;
}

export interface sc2sBlockCharacterReq {
  targetAccountId: string;
  targetCharacterId: string;
}

export interface ss2cBlockCharacterRes {
  result: number;
  targetCharacterInfo: sblockCharacter | undefined;
}

export interface sc2sUnblockCharacterReq {
  targetAccountId: string;
  targetCharacterId: string;
}

export interface ss2cUnblockCharacterRes {
  result: number;
  targetCharacterId: string;
}

export interface sc2sBlockCharacterListReq {
}

export interface ss2cBlockCharacterListRes {
  blockCharacters: sblockCharacter[];
}

export interface sc2sHackLogReq {
  logMessage: string;
}

export interface ss2cHackLogRes {
}

export interface sannounceMessage {
  nationType: number;
  announceMessage: string;
}

export interface ss2cOperateAnnounceNot {
  announceList: sannounceMessage[];
}

export interface fservicePolicy {
  policyType: number;
  policyValue: number;
}

export interface ss2cServicePolicyNot {
  policyList: fservicePolicy[];
}

export interface sc2sReLoginReq {
}

export interface ss2cReLoginRes {
  isReconnect: number;
  address: string;
  sessionId: string;
  accountId: string;
}

export interface ss2cClosedGameNot {
  cyzz: number;
}

export interface ss2cHackCheckDllListNot {
  DLLList: string[];
}

export interface sc2sUserCharacterInfoReq {
  callbackType: number;
  reportId: string;
  hIds: string[];
  blob: number[];
  accountId: string;
  characterId: string;
  originNickname: string;
}

export interface ss2cUserCharacterInfoRes {
}

export interface sc2sGmEnterGameSpectatorReq {
  nickname: string;
  accountId: string;
}

export interface ss2cGmEnterGameSpectatorRes {
  result: number;
  ip: string;
  port: number;
  token: string;
  serviceUrl: string;
}

function createBasesc2sMetaLocationReq(): sc2sMetaLocationReq {
  return { location: 0 };
}

export const sc2sMetaLocationReq = {
  encode(message: sc2sMetaLocationReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== 0) {
      writer.uint32(8).uint32(message.location);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMetaLocationReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMetaLocationReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.location = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMetaLocationReq {
    return { location: isSet(object.location) ? Number(object.location) : 0 };
  },

  toJSON(message: sc2sMetaLocationReq): unknown {
    const obj: any = {};
    message.location !== undefined && (obj.location = Math.round(message.location));
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMetaLocationReq>, I>>(base?: I): sc2sMetaLocationReq {
    return sc2sMetaLocationReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sMetaLocationReq>, I>>(object: I): sc2sMetaLocationReq {
    const message = createBasesc2sMetaLocationReq();
    message.location = object.location ?? 0;
    return message;
  },
};

function createBasess2cMetaLocationRes(): ss2cMetaLocationRes {
  return { location: 0 };
}

export const ss2cMetaLocationRes = {
  encode(message: ss2cMetaLocationRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== 0) {
      writer.uint32(8).uint32(message.location);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMetaLocationRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMetaLocationRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.location = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMetaLocationRes {
    return { location: isSet(object.location) ? Number(object.location) : 0 };
  },

  toJSON(message: ss2cMetaLocationRes): unknown {
    const obj: any = {};
    message.location !== undefined && (obj.location = Math.round(message.location));
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMetaLocationRes>, I>>(base?: I): ss2cMetaLocationRes {
    return ss2cMetaLocationRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cMetaLocationRes>, I>>(object: I): ss2cMetaLocationRes {
    const message = createBasess2cMetaLocationRes();
    message.location = object.location ?? 0;
    return message;
  },
};

function createBasesc2sBlockCharacterReq(): sc2sBlockCharacterReq {
  return { targetAccountId: "", targetCharacterId: "" };
}

export const sc2sBlockCharacterReq = {
  encode(message: sc2sBlockCharacterReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetAccountId !== "") {
      writer.uint32(10).string(message.targetAccountId);
    }
    if (message.targetCharacterId !== "") {
      writer.uint32(18).string(message.targetCharacterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sBlockCharacterReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sBlockCharacterReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.targetAccountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.targetCharacterId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sBlockCharacterReq {
    return {
      targetAccountId: isSet(object.targetAccountId) ? String(object.targetAccountId) : "",
      targetCharacterId: isSet(object.targetCharacterId) ? String(object.targetCharacterId) : "",
    };
  },

  toJSON(message: sc2sBlockCharacterReq): unknown {
    const obj: any = {};
    message.targetAccountId !== undefined && (obj.targetAccountId = message.targetAccountId);
    message.targetCharacterId !== undefined && (obj.targetCharacterId = message.targetCharacterId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sBlockCharacterReq>, I>>(base?: I): sc2sBlockCharacterReq {
    return sc2sBlockCharacterReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sBlockCharacterReq>, I>>(object: I): sc2sBlockCharacterReq {
    const message = createBasesc2sBlockCharacterReq();
    message.targetAccountId = object.targetAccountId ?? "";
    message.targetCharacterId = object.targetCharacterId ?? "";
    return message;
  },
};

function createBasess2cBlockCharacterRes(): ss2cBlockCharacterRes {
  return { result: 0, targetCharacterInfo: undefined };
}

export const ss2cBlockCharacterRes = {
  encode(message: ss2cBlockCharacterRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.targetCharacterInfo !== undefined) {
      sblockCharacter.encode(message.targetCharacterInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cBlockCharacterRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cBlockCharacterRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.targetCharacterInfo = sblockCharacter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cBlockCharacterRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      targetCharacterInfo: isSet(object.targetCharacterInfo)
        ? sblockCharacter.fromJSON(object.targetCharacterInfo)
        : undefined,
    };
  },

  toJSON(message: ss2cBlockCharacterRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.targetCharacterInfo !== undefined && (obj.targetCharacterInfo = message.targetCharacterInfo
      ? sblockCharacter.toJSON(message.targetCharacterInfo)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cBlockCharacterRes>, I>>(base?: I): ss2cBlockCharacterRes {
    return ss2cBlockCharacterRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cBlockCharacterRes>, I>>(object: I): ss2cBlockCharacterRes {
    const message = createBasess2cBlockCharacterRes();
    message.result = object.result ?? 0;
    message.targetCharacterInfo = (object.targetCharacterInfo !== undefined && object.targetCharacterInfo !== null)
      ? sblockCharacter.fromPartial(object.targetCharacterInfo)
      : undefined;
    return message;
  },
};

function createBasesc2sUnblockCharacterReq(): sc2sUnblockCharacterReq {
  return { targetAccountId: "", targetCharacterId: "" };
}

export const sc2sUnblockCharacterReq = {
  encode(message: sc2sUnblockCharacterReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetAccountId !== "") {
      writer.uint32(10).string(message.targetAccountId);
    }
    if (message.targetCharacterId !== "") {
      writer.uint32(18).string(message.targetCharacterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sUnblockCharacterReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sUnblockCharacterReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.targetAccountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.targetCharacterId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sUnblockCharacterReq {
    return {
      targetAccountId: isSet(object.targetAccountId) ? String(object.targetAccountId) : "",
      targetCharacterId: isSet(object.targetCharacterId) ? String(object.targetCharacterId) : "",
    };
  },

  toJSON(message: sc2sUnblockCharacterReq): unknown {
    const obj: any = {};
    message.targetAccountId !== undefined && (obj.targetAccountId = message.targetAccountId);
    message.targetCharacterId !== undefined && (obj.targetCharacterId = message.targetCharacterId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sUnblockCharacterReq>, I>>(base?: I): sc2sUnblockCharacterReq {
    return sc2sUnblockCharacterReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sUnblockCharacterReq>, I>>(object: I): sc2sUnblockCharacterReq {
    const message = createBasesc2sUnblockCharacterReq();
    message.targetAccountId = object.targetAccountId ?? "";
    message.targetCharacterId = object.targetCharacterId ?? "";
    return message;
  },
};

function createBasess2cUnblockCharacterRes(): ss2cUnblockCharacterRes {
  return { result: 0, targetCharacterId: "" };
}

export const ss2cUnblockCharacterRes = {
  encode(message: ss2cUnblockCharacterRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.targetCharacterId !== "") {
      writer.uint32(18).string(message.targetCharacterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cUnblockCharacterRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cUnblockCharacterRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.targetCharacterId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cUnblockCharacterRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      targetCharacterId: isSet(object.targetCharacterId) ? String(object.targetCharacterId) : "",
    };
  },

  toJSON(message: ss2cUnblockCharacterRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.targetCharacterId !== undefined && (obj.targetCharacterId = message.targetCharacterId);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cUnblockCharacterRes>, I>>(base?: I): ss2cUnblockCharacterRes {
    return ss2cUnblockCharacterRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cUnblockCharacterRes>, I>>(object: I): ss2cUnblockCharacterRes {
    const message = createBasess2cUnblockCharacterRes();
    message.result = object.result ?? 0;
    message.targetCharacterId = object.targetCharacterId ?? "";
    return message;
  },
};

function createBasesc2sBlockCharacterListReq(): sc2sBlockCharacterListReq {
  return {};
}

export const sc2sBlockCharacterListReq = {
  encode(_: sc2sBlockCharacterListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sBlockCharacterListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sBlockCharacterListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): sc2sBlockCharacterListReq {
    return {};
  },

  toJSON(_: sc2sBlockCharacterListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sBlockCharacterListReq>, I>>(base?: I): sc2sBlockCharacterListReq {
    return sc2sBlockCharacterListReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sBlockCharacterListReq>, I>>(_: I): sc2sBlockCharacterListReq {
    const message = createBasesc2sBlockCharacterListReq();
    return message;
  },
};

function createBasess2cBlockCharacterListRes(): ss2cBlockCharacterListRes {
  return { blockCharacters: [] };
}

export const ss2cBlockCharacterListRes = {
  encode(message: ss2cBlockCharacterListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.blockCharacters) {
      sblockCharacter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cBlockCharacterListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cBlockCharacterListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.blockCharacters.push(sblockCharacter.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cBlockCharacterListRes {
    return {
      blockCharacters: Array.isArray(object?.blockCharacters)
        ? object.blockCharacters.map((e: any) => sblockCharacter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cBlockCharacterListRes): unknown {
    const obj: any = {};
    if (message.blockCharacters) {
      obj.blockCharacters = message.blockCharacters.map((e) => e ? sblockCharacter.toJSON(e) : undefined);
    } else {
      obj.blockCharacters = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cBlockCharacterListRes>, I>>(base?: I): ss2cBlockCharacterListRes {
    return ss2cBlockCharacterListRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cBlockCharacterListRes>, I>>(object: I): ss2cBlockCharacterListRes {
    const message = createBasess2cBlockCharacterListRes();
    message.blockCharacters = object.blockCharacters?.map((e) => sblockCharacter.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sHackLogReq(): sc2sHackLogReq {
  return { logMessage: "" };
}

export const sc2sHackLogReq = {
  encode(message: sc2sHackLogReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logMessage !== "") {
      writer.uint32(10).string(message.logMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sHackLogReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sHackLogReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.logMessage = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sHackLogReq {
    return { logMessage: isSet(object.logMessage) ? String(object.logMessage) : "" };
  },

  toJSON(message: sc2sHackLogReq): unknown {
    const obj: any = {};
    message.logMessage !== undefined && (obj.logMessage = message.logMessage);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sHackLogReq>, I>>(base?: I): sc2sHackLogReq {
    return sc2sHackLogReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sHackLogReq>, I>>(object: I): sc2sHackLogReq {
    const message = createBasesc2sHackLogReq();
    message.logMessage = object.logMessage ?? "";
    return message;
  },
};

function createBasess2cHackLogRes(): ss2cHackLogRes {
  return {};
}

export const ss2cHackLogRes = {
  encode(_: ss2cHackLogRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cHackLogRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cHackLogRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ss2cHackLogRes {
    return {};
  },

  toJSON(_: ss2cHackLogRes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cHackLogRes>, I>>(base?: I): ss2cHackLogRes {
    return ss2cHackLogRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cHackLogRes>, I>>(_: I): ss2cHackLogRes {
    const message = createBasess2cHackLogRes();
    return message;
  },
};

function createBasesannounceMessage(): sannounceMessage {
  return { nationType: 0, announceMessage: "" };
}

export const sannounceMessage = {
  encode(message: sannounceMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nationType !== 0) {
      writer.uint32(8).int32(message.nationType);
    }
    if (message.announceMessage !== "") {
      writer.uint32(18).string(message.announceMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sannounceMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesannounceMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.nationType = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.announceMessage = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sannounceMessage {
    return {
      nationType: isSet(object.nationType) ? Number(object.nationType) : 0,
      announceMessage: isSet(object.announceMessage) ? String(object.announceMessage) : "",
    };
  },

  toJSON(message: sannounceMessage): unknown {
    const obj: any = {};
    message.nationType !== undefined && (obj.nationType = Math.round(message.nationType));
    message.announceMessage !== undefined && (obj.announceMessage = message.announceMessage);
    return obj;
  },

  create<I extends Exact<DeepPartial<sannounceMessage>, I>>(base?: I): sannounceMessage {
    return sannounceMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sannounceMessage>, I>>(object: I): sannounceMessage {
    const message = createBasesannounceMessage();
    message.nationType = object.nationType ?? 0;
    message.announceMessage = object.announceMessage ?? "";
    return message;
  },
};

function createBasess2cOperateAnnounceNot(): ss2cOperateAnnounceNot {
  return { announceList: [] };
}

export const ss2cOperateAnnounceNot = {
  encode(message: ss2cOperateAnnounceNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.announceList) {
      sannounceMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cOperateAnnounceNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cOperateAnnounceNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.announceList.push(sannounceMessage.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cOperateAnnounceNot {
    return {
      announceList: Array.isArray(object?.announceList)
        ? object.announceList.map((e: any) => sannounceMessage.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cOperateAnnounceNot): unknown {
    const obj: any = {};
    if (message.announceList) {
      obj.announceList = message.announceList.map((e) => e ? sannounceMessage.toJSON(e) : undefined);
    } else {
      obj.announceList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cOperateAnnounceNot>, I>>(base?: I): ss2cOperateAnnounceNot {
    return ss2cOperateAnnounceNot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cOperateAnnounceNot>, I>>(object: I): ss2cOperateAnnounceNot {
    const message = createBasess2cOperateAnnounceNot();
    message.announceList = object.announceList?.map((e) => sannounceMessage.fromPartial(e)) || [];
    return message;
  },
};

function createBasefservicePolicy(): fservicePolicy {
  return { policyType: 0, policyValue: 0 };
}

export const fservicePolicy = {
  encode(message: fservicePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policyType !== 0) {
      writer.uint32(8).int32(message.policyType);
    }
    if (message.policyValue !== 0) {
      writer.uint32(16).int32(message.policyValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): fservicePolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasefservicePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.policyType = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.policyValue = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): fservicePolicy {
    return {
      policyType: isSet(object.policyType) ? Number(object.policyType) : 0,
      policyValue: isSet(object.policyValue) ? Number(object.policyValue) : 0,
    };
  },

  toJSON(message: fservicePolicy): unknown {
    const obj: any = {};
    message.policyType !== undefined && (obj.policyType = Math.round(message.policyType));
    message.policyValue !== undefined && (obj.policyValue = Math.round(message.policyValue));
    return obj;
  },

  create<I extends Exact<DeepPartial<fservicePolicy>, I>>(base?: I): fservicePolicy {
    return fservicePolicy.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<fservicePolicy>, I>>(object: I): fservicePolicy {
    const message = createBasefservicePolicy();
    message.policyType = object.policyType ?? 0;
    message.policyValue = object.policyValue ?? 0;
    return message;
  },
};

function createBasess2cServicePolicyNot(): ss2cServicePolicyNot {
  return { policyList: [] };
}

export const ss2cServicePolicyNot = {
  encode(message: ss2cServicePolicyNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.policyList) {
      fservicePolicy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cServicePolicyNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cServicePolicyNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.policyList.push(fservicePolicy.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cServicePolicyNot {
    return {
      policyList: Array.isArray(object?.policyList)
        ? object.policyList.map((e: any) => fservicePolicy.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cServicePolicyNot): unknown {
    const obj: any = {};
    if (message.policyList) {
      obj.policyList = message.policyList.map((e) => e ? fservicePolicy.toJSON(e) : undefined);
    } else {
      obj.policyList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cServicePolicyNot>, I>>(base?: I): ss2cServicePolicyNot {
    return ss2cServicePolicyNot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cServicePolicyNot>, I>>(object: I): ss2cServicePolicyNot {
    const message = createBasess2cServicePolicyNot();
    message.policyList = object.policyList?.map((e) => fservicePolicy.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sReLoginReq(): sc2sReLoginReq {
  return {};
}

export const sc2sReLoginReq = {
  encode(_: sc2sReLoginReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sReLoginReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sReLoginReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): sc2sReLoginReq {
    return {};
  },

  toJSON(_: sc2sReLoginReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sReLoginReq>, I>>(base?: I): sc2sReLoginReq {
    return sc2sReLoginReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sReLoginReq>, I>>(_: I): sc2sReLoginReq {
    const message = createBasesc2sReLoginReq();
    return message;
  },
};

function createBasess2cReLoginRes(): ss2cReLoginRes {
  return { isReconnect: 0, address: "", sessionId: "", accountId: "" };
}

export const ss2cReLoginRes = {
  encode(message: ss2cReLoginRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isReconnect !== 0) {
      writer.uint32(8).uint32(message.isReconnect);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.sessionId !== "") {
      writer.uint32(26).string(message.sessionId);
    }
    if (message.accountId !== "") {
      writer.uint32(34).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cReLoginRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cReLoginRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isReconnect = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.accountId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cReLoginRes {
    return {
      isReconnect: isSet(object.isReconnect) ? Number(object.isReconnect) : 0,
      address: isSet(object.address) ? String(object.address) : "",
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
    };
  },

  toJSON(message: ss2cReLoginRes): unknown {
    const obj: any = {};
    message.isReconnect !== undefined && (obj.isReconnect = Math.round(message.isReconnect));
    message.address !== undefined && (obj.address = message.address);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.accountId !== undefined && (obj.accountId = message.accountId);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cReLoginRes>, I>>(base?: I): ss2cReLoginRes {
    return ss2cReLoginRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cReLoginRes>, I>>(object: I): ss2cReLoginRes {
    const message = createBasess2cReLoginRes();
    message.isReconnect = object.isReconnect ?? 0;
    message.address = object.address ?? "";
    message.sessionId = object.sessionId ?? "";
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBasess2cClosedGameNot(): ss2cClosedGameNot {
  return { cyzz: 0 };
}

export const ss2cClosedGameNot = {
  encode(message: ss2cClosedGameNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cyzz !== 0) {
      writer.uint32(8).uint32(message.cyzz);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClosedGameNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClosedGameNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.cyzz = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cClosedGameNot {
    return { cyzz: isSet(object.cyzz) ? Number(object.cyzz) : 0 };
  },

  toJSON(message: ss2cClosedGameNot): unknown {
    const obj: any = {};
    message.cyzz !== undefined && (obj.cyzz = Math.round(message.cyzz));
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClosedGameNot>, I>>(base?: I): ss2cClosedGameNot {
    return ss2cClosedGameNot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cClosedGameNot>, I>>(object: I): ss2cClosedGameNot {
    const message = createBasess2cClosedGameNot();
    message.cyzz = object.cyzz ?? 0;
    return message;
  },
};

function createBasess2cHackCheckDllListNot(): ss2cHackCheckDllListNot {
  return { DLLList: [] };
}

export const ss2cHackCheckDllListNot = {
  encode(message: ss2cHackCheckDllListNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.DLLList) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cHackCheckDllListNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cHackCheckDllListNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.DLLList.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cHackCheckDllListNot {
    return { DLLList: Array.isArray(object?.DLLList) ? object.DLLList.map((e: any) => String(e)) : [] };
  },

  toJSON(message: ss2cHackCheckDllListNot): unknown {
    const obj: any = {};
    if (message.DLLList) {
      obj.DLLList = message.DLLList.map((e) => e);
    } else {
      obj.DLLList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cHackCheckDllListNot>, I>>(base?: I): ss2cHackCheckDllListNot {
    return ss2cHackCheckDllListNot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cHackCheckDllListNot>, I>>(object: I): ss2cHackCheckDllListNot {
    const message = createBasess2cHackCheckDllListNot();
    message.DLLList = object.DLLList?.map((e) => e) || [];
    return message;
  },
};

function createBasesc2sUserCharacterInfoReq(): sc2sUserCharacterInfoReq {
  return { callbackType: 0, reportId: "", hIds: [], blob: [], accountId: "", characterId: "", originNickname: "" };
}

export const sc2sUserCharacterInfoReq = {
  encode(message: sc2sUserCharacterInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.callbackType !== 0) {
      writer.uint32(8).uint32(message.callbackType);
    }
    if (message.reportId !== "") {
      writer.uint32(18).string(message.reportId);
    }
    for (const v of message.hIds) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(34).fork();
    for (const v of message.blob) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.accountId !== "") {
      writer.uint32(42).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(50).string(message.characterId);
    }
    if (message.originNickname !== "") {
      writer.uint32(58).string(message.originNickname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sUserCharacterInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sUserCharacterInfoReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.callbackType = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.reportId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.hIds.push(reader.string());
          continue;
        case 4:
          if (tag == 32) {
            message.blob.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.blob.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag != 42) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.originNickname = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sUserCharacterInfoReq {
    return {
      callbackType: isSet(object.callbackType) ? Number(object.callbackType) : 0,
      reportId: isSet(object.reportId) ? String(object.reportId) : "",
      hIds: Array.isArray(object?.hIds) ? object.hIds.map((e: any) => String(e)) : [],
      blob: Array.isArray(object?.blob) ? object.blob.map((e: any) => Number(e)) : [],
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      originNickname: isSet(object.originNickname) ? String(object.originNickname) : "",
    };
  },

  toJSON(message: sc2sUserCharacterInfoReq): unknown {
    const obj: any = {};
    message.callbackType !== undefined && (obj.callbackType = Math.round(message.callbackType));
    message.reportId !== undefined && (obj.reportId = message.reportId);
    if (message.hIds) {
      obj.hIds = message.hIds.map((e) => e);
    } else {
      obj.hIds = [];
    }
    if (message.blob) {
      obj.blob = message.blob.map((e) => Math.round(e));
    } else {
      obj.blob = [];
    }
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.characterId !== undefined && (obj.characterId = message.characterId);
    message.originNickname !== undefined && (obj.originNickname = message.originNickname);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sUserCharacterInfoReq>, I>>(base?: I): sc2sUserCharacterInfoReq {
    return sc2sUserCharacterInfoReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sUserCharacterInfoReq>, I>>(object: I): sc2sUserCharacterInfoReq {
    const message = createBasesc2sUserCharacterInfoReq();
    message.callbackType = object.callbackType ?? 0;
    message.reportId = object.reportId ?? "";
    message.hIds = object.hIds?.map((e) => e) || [];
    message.blob = object.blob?.map((e) => e) || [];
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.originNickname = object.originNickname ?? "";
    return message;
  },
};

function createBasess2cUserCharacterInfoRes(): ss2cUserCharacterInfoRes {
  return {};
}

export const ss2cUserCharacterInfoRes = {
  encode(_: ss2cUserCharacterInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cUserCharacterInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cUserCharacterInfoRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ss2cUserCharacterInfoRes {
    return {};
  },

  toJSON(_: ss2cUserCharacterInfoRes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cUserCharacterInfoRes>, I>>(base?: I): ss2cUserCharacterInfoRes {
    return ss2cUserCharacterInfoRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cUserCharacterInfoRes>, I>>(_: I): ss2cUserCharacterInfoRes {
    const message = createBasess2cUserCharacterInfoRes();
    return message;
  },
};

function createBasesc2sGmEnterGameSpectatorReq(): sc2sGmEnterGameSpectatorReq {
  return { nickname: "", accountId: "" };
}

export const sc2sGmEnterGameSpectatorReq = {
  encode(message: sc2sGmEnterGameSpectatorReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nickname !== "") {
      writer.uint32(10).string(message.nickname);
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sGmEnterGameSpectatorReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sGmEnterGameSpectatorReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.accountId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sGmEnterGameSpectatorReq {
    return {
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
    };
  },

  toJSON(message: sc2sGmEnterGameSpectatorReq): unknown {
    const obj: any = {};
    message.nickname !== undefined && (obj.nickname = message.nickname);
    message.accountId !== undefined && (obj.accountId = message.accountId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sGmEnterGameSpectatorReq>, I>>(base?: I): sc2sGmEnterGameSpectatorReq {
    return sc2sGmEnterGameSpectatorReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sGmEnterGameSpectatorReq>, I>>(object: I): sc2sGmEnterGameSpectatorReq {
    const message = createBasesc2sGmEnterGameSpectatorReq();
    message.nickname = object.nickname ?? "";
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBasess2cGmEnterGameSpectatorRes(): ss2cGmEnterGameSpectatorRes {
  return { result: 0, ip: "", port: 0, token: "", serviceUrl: "" };
}

export const ss2cGmEnterGameSpectatorRes = {
  encode(message: ss2cGmEnterGameSpectatorRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }
    if (message.token !== "") {
      writer.uint32(34).string(message.token);
    }
    if (message.serviceUrl !== "") {
      writer.uint32(42).string(message.serviceUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cGmEnterGameSpectatorRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cGmEnterGameSpectatorRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.port = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.token = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.serviceUrl = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cGmEnterGameSpectatorRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      ip: isSet(object.ip) ? String(object.ip) : "",
      port: isSet(object.port) ? Number(object.port) : 0,
      token: isSet(object.token) ? String(object.token) : "",
      serviceUrl: isSet(object.serviceUrl) ? String(object.serviceUrl) : "",
    };
  },

  toJSON(message: ss2cGmEnterGameSpectatorRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.token !== undefined && (obj.token = message.token);
    message.serviceUrl !== undefined && (obj.serviceUrl = message.serviceUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cGmEnterGameSpectatorRes>, I>>(base?: I): ss2cGmEnterGameSpectatorRes {
    return ss2cGmEnterGameSpectatorRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cGmEnterGameSpectatorRes>, I>>(object: I): ss2cGmEnterGameSpectatorRes {
    const message = createBasess2cGmEnterGameSpectatorRes();
    message.result = object.result ?? 0;
    message.ip = object.ip ?? "";
    message.port = object.port ?? 0;
    message.token = object.token ?? "";
    message.serviceUrl = object.serviceUrl ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
