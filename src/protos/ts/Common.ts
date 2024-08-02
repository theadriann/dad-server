/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { sblockCharacter } from "./_Character";
import { SCHATDATA } from "./_Chat";

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
  designDataId: string;
  params: string[];
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

export interface sc2sUserCharacterInfoReq {
  callbackType: number;
  reportId: string;
  hIds: string[];
  blob: number[];
  accountId: string;
  characterId: string;
  originNickname: string;
  blobTagName: string;
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

export interface sallmapRotationInfo {
  gameType: number;
  mapTag: string;
}

export interface ss2cAllMapMatchmakingNot {
  infos: sallmapRotationInfo[];
  nextRotationDate: string;
  nextRotationTime: string;
}

export interface slatencyCheckInfo {
  path: string;
}

export interface ss2cLatencyCheckNot {
  checkCount: number;
  checkTermMS: number;
  latencyInfos: slatencyCheckInfo[];
}

export interface ss2cLobbyCompleteNot {
  type: number;
}

export interface sc2sChatHackReportReq {
  reportIndex: number;
  chatIndex: number;
  chatType: number;
  reportType: number;
}

export interface ss2cChatHackReportRes {
  result: number;
}

export interface sc2sJoinLastGameReq {
}

export interface ss2cJoinLastGameRes {
  canJoin: number;
  address: string;
  sessionId: string;
  accountId: string;
  serviceUrl: string;
}

export interface sc2sWhisperChatReq {
  chatData: SCHATDATA | undefined;
  targetNickname: string;
}

export interface ss2cWhisperChatRes {
  result: number;
}

export interface ss2cWhisperChatNot {
  chatData: SCHATDATA | undefined;
  time: number;
}

export interface ss2cAccountStatusNot {
  accountStatus: number;
}

export interface sc2sPlatformLinkCodeGenReq {
}

export interface ss2cPlatformLinkCodeGenRes {
  result: number;
  genCode: string;
  remainTimeMS: number;
}

export interface sc2sPlatformLinkCodeActiveReq {
  code: string;
}

export interface ss2cPlatformLinkCodeActiveRes {
  result: number;
}

export interface splatformLinkInfo {
  loginType: number;
  platformId: string;
}

export interface sc2sPlatformLinkInfoListReq {
}

export interface ss2cPlatformLinkInfoListRes {
  infos: splatformLinkInfo[];
}

export interface sc2sPlatformLinkFaqUrlReq {
}

export interface ss2cPlatformLinkFaqUrlRes {
  faqUrl: string;
}

export interface ss2cClientPopupMessageNot {
  message: string;
}

export interface ss2cTerminateNot {
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
          if (tag !== 8) {
            break;
          }

          message.location = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.location !== 0) {
      obj.location = Math.round(message.location);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMetaLocationReq>, I>>(base?: I): sc2sMetaLocationReq {
    return sc2sMetaLocationReq.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.location = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.location !== 0) {
      obj.location = Math.round(message.location);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMetaLocationRes>, I>>(base?: I): ss2cMetaLocationRes {
    return ss2cMetaLocationRes.fromPartial(base ?? ({} as any));
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
          if (tag !== 10) {
            break;
          }

          message.targetAccountId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetCharacterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.targetAccountId !== "") {
      obj.targetAccountId = message.targetAccountId;
    }
    if (message.targetCharacterId !== "") {
      obj.targetCharacterId = message.targetCharacterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sBlockCharacterReq>, I>>(base?: I): sc2sBlockCharacterReq {
    return sc2sBlockCharacterReq.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetCharacterInfo = sblockCharacter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.targetCharacterInfo !== undefined) {
      obj.targetCharacterInfo = sblockCharacter.toJSON(message.targetCharacterInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cBlockCharacterRes>, I>>(base?: I): ss2cBlockCharacterRes {
    return ss2cBlockCharacterRes.fromPartial(base ?? ({} as any));
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
          if (tag !== 10) {
            break;
          }

          message.targetAccountId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetCharacterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.targetAccountId !== "") {
      obj.targetAccountId = message.targetAccountId;
    }
    if (message.targetCharacterId !== "") {
      obj.targetCharacterId = message.targetCharacterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sUnblockCharacterReq>, I>>(base?: I): sc2sUnblockCharacterReq {
    return sc2sUnblockCharacterReq.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetCharacterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.targetCharacterId !== "") {
      obj.targetCharacterId = message.targetCharacterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cUnblockCharacterRes>, I>>(base?: I): ss2cUnblockCharacterRes {
    return ss2cUnblockCharacterRes.fromPartial(base ?? ({} as any));
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
      if ((tag & 7) === 4 || tag === 0) {
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
    return sc2sBlockCharacterListReq.fromPartial(base ?? ({} as any));
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
          if (tag !== 10) {
            break;
          }

          message.blockCharacters.push(sblockCharacter.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.blockCharacters?.length) {
      obj.blockCharacters = message.blockCharacters.map((e) => sblockCharacter.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cBlockCharacterListRes>, I>>(base?: I): ss2cBlockCharacterListRes {
    return ss2cBlockCharacterListRes.fromPartial(base ?? ({} as any));
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
          if (tag !== 10) {
            break;
          }

          message.logMessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.logMessage !== "") {
      obj.logMessage = message.logMessage;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sHackLogReq>, I>>(base?: I): sc2sHackLogReq {
    return sc2sHackLogReq.fromPartial(base ?? ({} as any));
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
      if ((tag & 7) === 4 || tag === 0) {
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
    return ss2cHackLogRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cHackLogRes>, I>>(_: I): ss2cHackLogRes {
    const message = createBasess2cHackLogRes();
    return message;
  },
};

function createBasesannounceMessage(): sannounceMessage {
  return { designDataId: "", params: [], announceMessage: "" };
}

export const sannounceMessage = {
  encode(message: sannounceMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.designDataId !== "") {
      writer.uint32(10).string(message.designDataId);
    }
    for (const v of message.params) {
      writer.uint32(18).string(v!);
    }
    if (message.announceMessage !== "") {
      writer.uint32(26).string(message.announceMessage);
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
          if (tag !== 10) {
            break;
          }

          message.designDataId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.announceMessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sannounceMessage {
    return {
      designDataId: isSet(object.designDataId) ? String(object.designDataId) : "",
      params: Array.isArray(object?.params) ? object.params.map((e: any) => String(e)) : [],
      announceMessage: isSet(object.announceMessage) ? String(object.announceMessage) : "",
    };
  },

  toJSON(message: sannounceMessage): unknown {
    const obj: any = {};
    if (message.designDataId !== "") {
      obj.designDataId = message.designDataId;
    }
    if (message.params?.length) {
      obj.params = message.params;
    }
    if (message.announceMessage !== "") {
      obj.announceMessage = message.announceMessage;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sannounceMessage>, I>>(base?: I): sannounceMessage {
    return sannounceMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sannounceMessage>, I>>(object: I): sannounceMessage {
    const message = createBasesannounceMessage();
    message.designDataId = object.designDataId ?? "";
    message.params = object.params?.map((e) => e) || [];
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
          if (tag !== 10) {
            break;
          }

          message.announceList.push(sannounceMessage.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.announceList?.length) {
      obj.announceList = message.announceList.map((e) => sannounceMessage.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cOperateAnnounceNot>, I>>(base?: I): ss2cOperateAnnounceNot {
    return ss2cOperateAnnounceNot.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.policyType = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.policyValue = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.policyType !== 0) {
      obj.policyType = Math.round(message.policyType);
    }
    if (message.policyValue !== 0) {
      obj.policyValue = Math.round(message.policyValue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<fservicePolicy>, I>>(base?: I): fservicePolicy {
    return fservicePolicy.fromPartial(base ?? ({} as any));
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
          if (tag !== 10) {
            break;
          }

          message.policyList.push(fservicePolicy.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.policyList?.length) {
      obj.policyList = message.policyList.map((e) => fservicePolicy.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cServicePolicyNot>, I>>(base?: I): ss2cServicePolicyNot {
    return ss2cServicePolicyNot.fromPartial(base ?? ({} as any));
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
      if ((tag & 7) === 4 || tag === 0) {
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
    return sc2sReLoginReq.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.isReconnect = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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
    if (message.isReconnect !== 0) {
      obj.isReconnect = Math.round(message.isReconnect);
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cReLoginRes>, I>>(base?: I): ss2cReLoginRes {
    return ss2cReLoginRes.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.cyzz = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.cyzz !== 0) {
      obj.cyzz = Math.round(message.cyzz);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClosedGameNot>, I>>(base?: I): ss2cClosedGameNot {
    return ss2cClosedGameNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClosedGameNot>, I>>(object: I): ss2cClosedGameNot {
    const message = createBasess2cClosedGameNot();
    message.cyzz = object.cyzz ?? 0;
    return message;
  },
};

function createBasesc2sUserCharacterInfoReq(): sc2sUserCharacterInfoReq {
  return {
    callbackType: 0,
    reportId: "",
    hIds: [],
    blob: [],
    accountId: "",
    characterId: "",
    originNickname: "",
    blobTagName: "",
  };
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
    if (message.blobTagName !== "") {
      writer.uint32(66).string(message.blobTagName);
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
          if (tag !== 8) {
            break;
          }

          message.callbackType = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reportId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hIds.push(reader.string());
          continue;
        case 4:
          if (tag === 32) {
            message.blob.push(reader.uint32());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.blob.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.originNickname = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.blobTagName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
      blobTagName: isSet(object.blobTagName) ? String(object.blobTagName) : "",
    };
  },

  toJSON(message: sc2sUserCharacterInfoReq): unknown {
    const obj: any = {};
    if (message.callbackType !== 0) {
      obj.callbackType = Math.round(message.callbackType);
    }
    if (message.reportId !== "") {
      obj.reportId = message.reportId;
    }
    if (message.hIds?.length) {
      obj.hIds = message.hIds;
    }
    if (message.blob?.length) {
      obj.blob = message.blob.map((e) => Math.round(e));
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.originNickname !== "") {
      obj.originNickname = message.originNickname;
    }
    if (message.blobTagName !== "") {
      obj.blobTagName = message.blobTagName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sUserCharacterInfoReq>, I>>(base?: I): sc2sUserCharacterInfoReq {
    return sc2sUserCharacterInfoReq.fromPartial(base ?? ({} as any));
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
    message.blobTagName = object.blobTagName ?? "";
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
      if ((tag & 7) === 4 || tag === 0) {
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
    return ss2cUserCharacterInfoRes.fromPartial(base ?? ({} as any));
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
          if (tag !== 10) {
            break;
          }

          message.nickname = reader.string();
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

  fromJSON(object: any): sc2sGmEnterGameSpectatorReq {
    return {
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
    };
  },

  toJSON(message: sc2sGmEnterGameSpectatorReq): unknown {
    const obj: any = {};
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sGmEnterGameSpectatorReq>, I>>(base?: I): sc2sGmEnterGameSpectatorReq {
    return sc2sGmEnterGameSpectatorReq.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.port = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.token = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.serviceUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.serviceUrl !== "") {
      obj.serviceUrl = message.serviceUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cGmEnterGameSpectatorRes>, I>>(base?: I): ss2cGmEnterGameSpectatorRes {
    return ss2cGmEnterGameSpectatorRes.fromPartial(base ?? ({} as any));
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

function createBasesallmapRotationInfo(): sallmapRotationInfo {
  return { gameType: 0, mapTag: "" };
}

export const sallmapRotationInfo = {
  encode(message: sallmapRotationInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameType !== 0) {
      writer.uint32(8).uint32(message.gameType);
    }
    if (message.mapTag !== "") {
      writer.uint32(18).string(message.mapTag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sallmapRotationInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesallmapRotationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gameType = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mapTag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sallmapRotationInfo {
    return {
      gameType: isSet(object.gameType) ? Number(object.gameType) : 0,
      mapTag: isSet(object.mapTag) ? String(object.mapTag) : "",
    };
  },

  toJSON(message: sallmapRotationInfo): unknown {
    const obj: any = {};
    if (message.gameType !== 0) {
      obj.gameType = Math.round(message.gameType);
    }
    if (message.mapTag !== "") {
      obj.mapTag = message.mapTag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sallmapRotationInfo>, I>>(base?: I): sallmapRotationInfo {
    return sallmapRotationInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sallmapRotationInfo>, I>>(object: I): sallmapRotationInfo {
    const message = createBasesallmapRotationInfo();
    message.gameType = object.gameType ?? 0;
    message.mapTag = object.mapTag ?? "";
    return message;
  },
};

function createBasess2cAllMapMatchmakingNot(): ss2cAllMapMatchmakingNot {
  return { infos: [], nextRotationDate: "", nextRotationTime: "" };
}

export const ss2cAllMapMatchmakingNot = {
  encode(message: ss2cAllMapMatchmakingNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      sallmapRotationInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextRotationDate !== "") {
      writer.uint32(26).string(message.nextRotationDate);
    }
    if (message.nextRotationTime !== "") {
      writer.uint32(34).string(message.nextRotationTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cAllMapMatchmakingNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cAllMapMatchmakingNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(sallmapRotationInfo.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nextRotationDate = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nextRotationTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cAllMapMatchmakingNot {
    return {
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => sallmapRotationInfo.fromJSON(e)) : [],
      nextRotationDate: isSet(object.nextRotationDate) ? String(object.nextRotationDate) : "",
      nextRotationTime: isSet(object.nextRotationTime) ? String(object.nextRotationTime) : "",
    };
  },

  toJSON(message: ss2cAllMapMatchmakingNot): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => sallmapRotationInfo.toJSON(e));
    }
    if (message.nextRotationDate !== "") {
      obj.nextRotationDate = message.nextRotationDate;
    }
    if (message.nextRotationTime !== "") {
      obj.nextRotationTime = message.nextRotationTime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cAllMapMatchmakingNot>, I>>(base?: I): ss2cAllMapMatchmakingNot {
    return ss2cAllMapMatchmakingNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cAllMapMatchmakingNot>, I>>(object: I): ss2cAllMapMatchmakingNot {
    const message = createBasess2cAllMapMatchmakingNot();
    message.infos = object.infos?.map((e) => sallmapRotationInfo.fromPartial(e)) || [];
    message.nextRotationDate = object.nextRotationDate ?? "";
    message.nextRotationTime = object.nextRotationTime ?? "";
    return message;
  },
};

function createBaseslatencyCheckInfo(): slatencyCheckInfo {
  return { path: "" };
}

export const slatencyCheckInfo = {
  encode(message: slatencyCheckInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): slatencyCheckInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseslatencyCheckInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): slatencyCheckInfo {
    return { path: isSet(object.path) ? String(object.path) : "" };
  },

  toJSON(message: slatencyCheckInfo): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<slatencyCheckInfo>, I>>(base?: I): slatencyCheckInfo {
    return slatencyCheckInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<slatencyCheckInfo>, I>>(object: I): slatencyCheckInfo {
    const message = createBaseslatencyCheckInfo();
    message.path = object.path ?? "";
    return message;
  },
};

function createBasess2cLatencyCheckNot(): ss2cLatencyCheckNot {
  return { checkCount: 0, checkTermMS: 0, latencyInfos: [] };
}

export const ss2cLatencyCheckNot = {
  encode(message: ss2cLatencyCheckNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.checkCount !== 0) {
      writer.uint32(8).int32(message.checkCount);
    }
    if (message.checkTermMS !== 0) {
      writer.uint32(16).int32(message.checkTermMS);
    }
    for (const v of message.latencyInfos) {
      slatencyCheckInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cLatencyCheckNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cLatencyCheckNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.checkCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.checkTermMS = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.latencyInfos.push(slatencyCheckInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cLatencyCheckNot {
    return {
      checkCount: isSet(object.checkCount) ? Number(object.checkCount) : 0,
      checkTermMS: isSet(object.checkTermMS) ? Number(object.checkTermMS) : 0,
      latencyInfos: Array.isArray(object?.latencyInfos)
        ? object.latencyInfos.map((e: any) => slatencyCheckInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cLatencyCheckNot): unknown {
    const obj: any = {};
    if (message.checkCount !== 0) {
      obj.checkCount = Math.round(message.checkCount);
    }
    if (message.checkTermMS !== 0) {
      obj.checkTermMS = Math.round(message.checkTermMS);
    }
    if (message.latencyInfos?.length) {
      obj.latencyInfos = message.latencyInfos.map((e) => slatencyCheckInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLatencyCheckNot>, I>>(base?: I): ss2cLatencyCheckNot {
    return ss2cLatencyCheckNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cLatencyCheckNot>, I>>(object: I): ss2cLatencyCheckNot {
    const message = createBasess2cLatencyCheckNot();
    message.checkCount = object.checkCount ?? 0;
    message.checkTermMS = object.checkTermMS ?? 0;
    message.latencyInfos = object.latencyInfos?.map((e) => slatencyCheckInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cLobbyCompleteNot(): ss2cLobbyCompleteNot {
  return { type: 0 };
}

export const ss2cLobbyCompleteNot = {
  encode(message: ss2cLobbyCompleteNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cLobbyCompleteNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cLobbyCompleteNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cLobbyCompleteNot {
    return { type: isSet(object.type) ? Number(object.type) : 0 };
  },

  toJSON(message: ss2cLobbyCompleteNot): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = Math.round(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyCompleteNot>, I>>(base?: I): ss2cLobbyCompleteNot {
    return ss2cLobbyCompleteNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cLobbyCompleteNot>, I>>(object: I): ss2cLobbyCompleteNot {
    const message = createBasess2cLobbyCompleteNot();
    message.type = object.type ?? 0;
    return message;
  },
};

function createBasesc2sChatHackReportReq(): sc2sChatHackReportReq {
  return { reportIndex: 0, chatIndex: 0, chatType: 0, reportType: 0 };
}

export const sc2sChatHackReportReq = {
  encode(message: sc2sChatHackReportReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reportIndex !== 0) {
      writer.uint32(8).uint32(message.reportIndex);
    }
    if (message.chatIndex !== 0) {
      writer.uint32(16).uint64(message.chatIndex);
    }
    if (message.chatType !== 0) {
      writer.uint32(24).uint32(message.chatType);
    }
    if (message.reportType !== 0) {
      writer.uint32(32).uint32(message.reportType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sChatHackReportReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sChatHackReportReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.reportIndex = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.chatIndex = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.chatType = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.reportType = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sChatHackReportReq {
    return {
      reportIndex: isSet(object.reportIndex) ? Number(object.reportIndex) : 0,
      chatIndex: isSet(object.chatIndex) ? Number(object.chatIndex) : 0,
      chatType: isSet(object.chatType) ? Number(object.chatType) : 0,
      reportType: isSet(object.reportType) ? Number(object.reportType) : 0,
    };
  },

  toJSON(message: sc2sChatHackReportReq): unknown {
    const obj: any = {};
    if (message.reportIndex !== 0) {
      obj.reportIndex = Math.round(message.reportIndex);
    }
    if (message.chatIndex !== 0) {
      obj.chatIndex = Math.round(message.chatIndex);
    }
    if (message.chatType !== 0) {
      obj.chatType = Math.round(message.chatType);
    }
    if (message.reportType !== 0) {
      obj.reportType = Math.round(message.reportType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sChatHackReportReq>, I>>(base?: I): sc2sChatHackReportReq {
    return sc2sChatHackReportReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sChatHackReportReq>, I>>(object: I): sc2sChatHackReportReq {
    const message = createBasesc2sChatHackReportReq();
    message.reportIndex = object.reportIndex ?? 0;
    message.chatIndex = object.chatIndex ?? 0;
    message.chatType = object.chatType ?? 0;
    message.reportType = object.reportType ?? 0;
    return message;
  },
};

function createBasess2cChatHackReportRes(): ss2cChatHackReportRes {
  return { result: 0 };
}

export const ss2cChatHackReportRes = {
  encode(message: ss2cChatHackReportRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cChatHackReportRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cChatHackReportRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cChatHackReportRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cChatHackReportRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cChatHackReportRes>, I>>(base?: I): ss2cChatHackReportRes {
    return ss2cChatHackReportRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cChatHackReportRes>, I>>(object: I): ss2cChatHackReportRes {
    const message = createBasess2cChatHackReportRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sJoinLastGameReq(): sc2sJoinLastGameReq {
  return {};
}

export const sc2sJoinLastGameReq = {
  encode(_: sc2sJoinLastGameReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sJoinLastGameReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sJoinLastGameReq();
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

  fromJSON(_: any): sc2sJoinLastGameReq {
    return {};
  },

  toJSON(_: sc2sJoinLastGameReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sJoinLastGameReq>, I>>(base?: I): sc2sJoinLastGameReq {
    return sc2sJoinLastGameReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sJoinLastGameReq>, I>>(_: I): sc2sJoinLastGameReq {
    const message = createBasesc2sJoinLastGameReq();
    return message;
  },
};

function createBasess2cJoinLastGameRes(): ss2cJoinLastGameRes {
  return { canJoin: 0, address: "", sessionId: "", accountId: "", serviceUrl: "" };
}

export const ss2cJoinLastGameRes = {
  encode(message: ss2cJoinLastGameRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.canJoin !== 0) {
      writer.uint32(8).uint32(message.canJoin);
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
    if (message.serviceUrl !== "") {
      writer.uint32(42).string(message.serviceUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cJoinLastGameRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cJoinLastGameRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.canJoin = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.serviceUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cJoinLastGameRes {
    return {
      canJoin: isSet(object.canJoin) ? Number(object.canJoin) : 0,
      address: isSet(object.address) ? String(object.address) : "",
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      serviceUrl: isSet(object.serviceUrl) ? String(object.serviceUrl) : "",
    };
  },

  toJSON(message: ss2cJoinLastGameRes): unknown {
    const obj: any = {};
    if (message.canJoin !== 0) {
      obj.canJoin = Math.round(message.canJoin);
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.serviceUrl !== "") {
      obj.serviceUrl = message.serviceUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cJoinLastGameRes>, I>>(base?: I): ss2cJoinLastGameRes {
    return ss2cJoinLastGameRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cJoinLastGameRes>, I>>(object: I): ss2cJoinLastGameRes {
    const message = createBasess2cJoinLastGameRes();
    message.canJoin = object.canJoin ?? 0;
    message.address = object.address ?? "";
    message.sessionId = object.sessionId ?? "";
    message.accountId = object.accountId ?? "";
    message.serviceUrl = object.serviceUrl ?? "";
    return message;
  },
};

function createBasesc2sWhisperChatReq(): sc2sWhisperChatReq {
  return { chatData: undefined, targetNickname: "" };
}

export const sc2sWhisperChatReq = {
  encode(message: sc2sWhisperChatReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatData !== undefined) {
      SCHATDATA.encode(message.chatData, writer.uint32(10).fork()).ldelim();
    }
    if (message.targetNickname !== "") {
      writer.uint32(18).string(message.targetNickname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sWhisperChatReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sWhisperChatReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatData = SCHATDATA.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetNickname = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sWhisperChatReq {
    return {
      chatData: isSet(object.chatData) ? SCHATDATA.fromJSON(object.chatData) : undefined,
      targetNickname: isSet(object.targetNickname) ? String(object.targetNickname) : "",
    };
  },

  toJSON(message: sc2sWhisperChatReq): unknown {
    const obj: any = {};
    if (message.chatData !== undefined) {
      obj.chatData = SCHATDATA.toJSON(message.chatData);
    }
    if (message.targetNickname !== "") {
      obj.targetNickname = message.targetNickname;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sWhisperChatReq>, I>>(base?: I): sc2sWhisperChatReq {
    return sc2sWhisperChatReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sWhisperChatReq>, I>>(object: I): sc2sWhisperChatReq {
    const message = createBasesc2sWhisperChatReq();
    message.chatData = (object.chatData !== undefined && object.chatData !== null)
      ? SCHATDATA.fromPartial(object.chatData)
      : undefined;
    message.targetNickname = object.targetNickname ?? "";
    return message;
  },
};

function createBasess2cWhisperChatRes(): ss2cWhisperChatRes {
  return { result: 0 };
}

export const ss2cWhisperChatRes = {
  encode(message: ss2cWhisperChatRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cWhisperChatRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cWhisperChatRes();
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

  fromJSON(object: any): ss2cWhisperChatRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cWhisperChatRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cWhisperChatRes>, I>>(base?: I): ss2cWhisperChatRes {
    return ss2cWhisperChatRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cWhisperChatRes>, I>>(object: I): ss2cWhisperChatRes {
    const message = createBasess2cWhisperChatRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasess2cWhisperChatNot(): ss2cWhisperChatNot {
  return { chatData: undefined, time: 0 };
}

export const ss2cWhisperChatNot = {
  encode(message: ss2cWhisperChatNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatData !== undefined) {
      SCHATDATA.encode(message.chatData, writer.uint32(10).fork()).ldelim();
    }
    if (message.time !== 0) {
      writer.uint32(16).uint64(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cWhisperChatNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cWhisperChatNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatData = SCHATDATA.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.time = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cWhisperChatNot {
    return {
      chatData: isSet(object.chatData) ? SCHATDATA.fromJSON(object.chatData) : undefined,
      time: isSet(object.time) ? Number(object.time) : 0,
    };
  },

  toJSON(message: ss2cWhisperChatNot): unknown {
    const obj: any = {};
    if (message.chatData !== undefined) {
      obj.chatData = SCHATDATA.toJSON(message.chatData);
    }
    if (message.time !== 0) {
      obj.time = Math.round(message.time);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cWhisperChatNot>, I>>(base?: I): ss2cWhisperChatNot {
    return ss2cWhisperChatNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cWhisperChatNot>, I>>(object: I): ss2cWhisperChatNot {
    const message = createBasess2cWhisperChatNot();
    message.chatData = (object.chatData !== undefined && object.chatData !== null)
      ? SCHATDATA.fromPartial(object.chatData)
      : undefined;
    message.time = object.time ?? 0;
    return message;
  },
};

function createBasess2cAccountStatusNot(): ss2cAccountStatusNot {
  return { accountStatus: 0 };
}

export const ss2cAccountStatusNot = {
  encode(message: ss2cAccountStatusNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountStatus !== 0) {
      writer.uint32(8).uint32(message.accountStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cAccountStatusNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cAccountStatusNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountStatus = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cAccountStatusNot {
    return { accountStatus: isSet(object.accountStatus) ? Number(object.accountStatus) : 0 };
  },

  toJSON(message: ss2cAccountStatusNot): unknown {
    const obj: any = {};
    if (message.accountStatus !== 0) {
      obj.accountStatus = Math.round(message.accountStatus);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cAccountStatusNot>, I>>(base?: I): ss2cAccountStatusNot {
    return ss2cAccountStatusNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cAccountStatusNot>, I>>(object: I): ss2cAccountStatusNot {
    const message = createBasess2cAccountStatusNot();
    message.accountStatus = object.accountStatus ?? 0;
    return message;
  },
};

function createBasesc2sPlatformLinkCodeGenReq(): sc2sPlatformLinkCodeGenReq {
  return {};
}

export const sc2sPlatformLinkCodeGenReq = {
  encode(_: sc2sPlatformLinkCodeGenReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sPlatformLinkCodeGenReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sPlatformLinkCodeGenReq();
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

  fromJSON(_: any): sc2sPlatformLinkCodeGenReq {
    return {};
  },

  toJSON(_: sc2sPlatformLinkCodeGenReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sPlatformLinkCodeGenReq>, I>>(base?: I): sc2sPlatformLinkCodeGenReq {
    return sc2sPlatformLinkCodeGenReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sPlatformLinkCodeGenReq>, I>>(_: I): sc2sPlatformLinkCodeGenReq {
    const message = createBasesc2sPlatformLinkCodeGenReq();
    return message;
  },
};

function createBasess2cPlatformLinkCodeGenRes(): ss2cPlatformLinkCodeGenRes {
  return { result: 0, genCode: "", remainTimeMS: 0 };
}

export const ss2cPlatformLinkCodeGenRes = {
  encode(message: ss2cPlatformLinkCodeGenRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.genCode !== "") {
      writer.uint32(18).string(message.genCode);
    }
    if (message.remainTimeMS !== 0) {
      writer.uint32(24).int64(message.remainTimeMS);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPlatformLinkCodeGenRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPlatformLinkCodeGenRes();
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

          message.genCode = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.remainTimeMS = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPlatformLinkCodeGenRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      genCode: isSet(object.genCode) ? String(object.genCode) : "",
      remainTimeMS: isSet(object.remainTimeMS) ? Number(object.remainTimeMS) : 0,
    };
  },

  toJSON(message: ss2cPlatformLinkCodeGenRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.genCode !== "") {
      obj.genCode = message.genCode;
    }
    if (message.remainTimeMS !== 0) {
      obj.remainTimeMS = Math.round(message.remainTimeMS);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPlatformLinkCodeGenRes>, I>>(base?: I): ss2cPlatformLinkCodeGenRes {
    return ss2cPlatformLinkCodeGenRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPlatformLinkCodeGenRes>, I>>(object: I): ss2cPlatformLinkCodeGenRes {
    const message = createBasess2cPlatformLinkCodeGenRes();
    message.result = object.result ?? 0;
    message.genCode = object.genCode ?? "";
    message.remainTimeMS = object.remainTimeMS ?? 0;
    return message;
  },
};

function createBasesc2sPlatformLinkCodeActiveReq(): sc2sPlatformLinkCodeActiveReq {
  return { code: "" };
}

export const sc2sPlatformLinkCodeActiveReq = {
  encode(message: sc2sPlatformLinkCodeActiveReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sPlatformLinkCodeActiveReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sPlatformLinkCodeActiveReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.code = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sPlatformLinkCodeActiveReq {
    return { code: isSet(object.code) ? String(object.code) : "" };
  },

  toJSON(message: sc2sPlatformLinkCodeActiveReq): unknown {
    const obj: any = {};
    if (message.code !== "") {
      obj.code = message.code;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sPlatformLinkCodeActiveReq>, I>>(base?: I): sc2sPlatformLinkCodeActiveReq {
    return sc2sPlatformLinkCodeActiveReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sPlatformLinkCodeActiveReq>, I>>(
    object: I,
  ): sc2sPlatformLinkCodeActiveReq {
    const message = createBasesc2sPlatformLinkCodeActiveReq();
    message.code = object.code ?? "";
    return message;
  },
};

function createBasess2cPlatformLinkCodeActiveRes(): ss2cPlatformLinkCodeActiveRes {
  return { result: 0 };
}

export const ss2cPlatformLinkCodeActiveRes = {
  encode(message: ss2cPlatformLinkCodeActiveRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPlatformLinkCodeActiveRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPlatformLinkCodeActiveRes();
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

  fromJSON(object: any): ss2cPlatformLinkCodeActiveRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cPlatformLinkCodeActiveRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPlatformLinkCodeActiveRes>, I>>(base?: I): ss2cPlatformLinkCodeActiveRes {
    return ss2cPlatformLinkCodeActiveRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPlatformLinkCodeActiveRes>, I>>(
    object: I,
  ): ss2cPlatformLinkCodeActiveRes {
    const message = createBasess2cPlatformLinkCodeActiveRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesplatformLinkInfo(): splatformLinkInfo {
  return { loginType: 0, platformId: "" };
}

export const splatformLinkInfo = {
  encode(message: splatformLinkInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loginType !== 0) {
      writer.uint32(8).uint32(message.loginType);
    }
    if (message.platformId !== "") {
      writer.uint32(18).string(message.platformId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): splatformLinkInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesplatformLinkInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.loginType = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.platformId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): splatformLinkInfo {
    return {
      loginType: isSet(object.loginType) ? Number(object.loginType) : 0,
      platformId: isSet(object.platformId) ? String(object.platformId) : "",
    };
  },

  toJSON(message: splatformLinkInfo): unknown {
    const obj: any = {};
    if (message.loginType !== 0) {
      obj.loginType = Math.round(message.loginType);
    }
    if (message.platformId !== "") {
      obj.platformId = message.platformId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<splatformLinkInfo>, I>>(base?: I): splatformLinkInfo {
    return splatformLinkInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<splatformLinkInfo>, I>>(object: I): splatformLinkInfo {
    const message = createBasesplatformLinkInfo();
    message.loginType = object.loginType ?? 0;
    message.platformId = object.platformId ?? "";
    return message;
  },
};

function createBasesc2sPlatformLinkInfoListReq(): sc2sPlatformLinkInfoListReq {
  return {};
}

export const sc2sPlatformLinkInfoListReq = {
  encode(_: sc2sPlatformLinkInfoListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sPlatformLinkInfoListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sPlatformLinkInfoListReq();
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

  fromJSON(_: any): sc2sPlatformLinkInfoListReq {
    return {};
  },

  toJSON(_: sc2sPlatformLinkInfoListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sPlatformLinkInfoListReq>, I>>(base?: I): sc2sPlatformLinkInfoListReq {
    return sc2sPlatformLinkInfoListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sPlatformLinkInfoListReq>, I>>(_: I): sc2sPlatformLinkInfoListReq {
    const message = createBasesc2sPlatformLinkInfoListReq();
    return message;
  },
};

function createBasess2cPlatformLinkInfoListRes(): ss2cPlatformLinkInfoListRes {
  return { infos: [] };
}

export const ss2cPlatformLinkInfoListRes = {
  encode(message: ss2cPlatformLinkInfoListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      splatformLinkInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPlatformLinkInfoListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPlatformLinkInfoListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(splatformLinkInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPlatformLinkInfoListRes {
    return { infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => splatformLinkInfo.fromJSON(e)) : [] };
  },

  toJSON(message: ss2cPlatformLinkInfoListRes): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => splatformLinkInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPlatformLinkInfoListRes>, I>>(base?: I): ss2cPlatformLinkInfoListRes {
    return ss2cPlatformLinkInfoListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPlatformLinkInfoListRes>, I>>(object: I): ss2cPlatformLinkInfoListRes {
    const message = createBasess2cPlatformLinkInfoListRes();
    message.infos = object.infos?.map((e) => splatformLinkInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sPlatformLinkFaqUrlReq(): sc2sPlatformLinkFaqUrlReq {
  return {};
}

export const sc2sPlatformLinkFaqUrlReq = {
  encode(_: sc2sPlatformLinkFaqUrlReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sPlatformLinkFaqUrlReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sPlatformLinkFaqUrlReq();
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

  fromJSON(_: any): sc2sPlatformLinkFaqUrlReq {
    return {};
  },

  toJSON(_: sc2sPlatformLinkFaqUrlReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sPlatformLinkFaqUrlReq>, I>>(base?: I): sc2sPlatformLinkFaqUrlReq {
    return sc2sPlatformLinkFaqUrlReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sPlatformLinkFaqUrlReq>, I>>(_: I): sc2sPlatformLinkFaqUrlReq {
    const message = createBasesc2sPlatformLinkFaqUrlReq();
    return message;
  },
};

function createBasess2cPlatformLinkFaqUrlRes(): ss2cPlatformLinkFaqUrlRes {
  return { faqUrl: "" };
}

export const ss2cPlatformLinkFaqUrlRes = {
  encode(message: ss2cPlatformLinkFaqUrlRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.faqUrl !== "") {
      writer.uint32(10).string(message.faqUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPlatformLinkFaqUrlRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPlatformLinkFaqUrlRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.faqUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPlatformLinkFaqUrlRes {
    return { faqUrl: isSet(object.faqUrl) ? String(object.faqUrl) : "" };
  },

  toJSON(message: ss2cPlatformLinkFaqUrlRes): unknown {
    const obj: any = {};
    if (message.faqUrl !== "") {
      obj.faqUrl = message.faqUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPlatformLinkFaqUrlRes>, I>>(base?: I): ss2cPlatformLinkFaqUrlRes {
    return ss2cPlatformLinkFaqUrlRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPlatformLinkFaqUrlRes>, I>>(object: I): ss2cPlatformLinkFaqUrlRes {
    const message = createBasess2cPlatformLinkFaqUrlRes();
    message.faqUrl = object.faqUrl ?? "";
    return message;
  },
};

function createBasess2cClientPopupMessageNot(): ss2cClientPopupMessageNot {
  return { message: "" };
}

export const ss2cClientPopupMessageNot = {
  encode(message: ss2cClientPopupMessageNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClientPopupMessageNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClientPopupMessageNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cClientPopupMessageNot {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: ss2cClientPopupMessageNot): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClientPopupMessageNot>, I>>(base?: I): ss2cClientPopupMessageNot {
    return ss2cClientPopupMessageNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClientPopupMessageNot>, I>>(object: I): ss2cClientPopupMessageNot {
    const message = createBasess2cClientPopupMessageNot();
    message.message = object.message ?? "";
    return message;
  },
};

function createBasess2cTerminateNot(): ss2cTerminateNot {
  return {};
}

export const ss2cTerminateNot = {
  encode(_: ss2cTerminateNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTerminateNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTerminateNot();
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

  fromJSON(_: any): ss2cTerminateNot {
    return {};
  },

  toJSON(_: ss2cTerminateNot): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTerminateNot>, I>>(base?: I): ss2cTerminateNot {
    return ss2cTerminateNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTerminateNot>, I>>(_: I): ss2cTerminateNot {
    const message = createBasess2cTerminateNot();
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
