/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { saccountNickname, scharacterInfo, SGameStat } from "./_Character";
import { scustomizeLobbyEmote } from "./_Item";

export const protobufPackage = "DC.Packet";

export interface sc2sCharacterSelectEnterReq {
}

export interface ss2cCharacterSelectEnterRes {
  result: number;
}

export interface sc2sLobbyCharacterInfoReq {
}

export interface ss2cLobbyCharacterInfoRes {
  result: number;
  characterDataBase: scharacterInfo | undefined;
}

export interface sc2sOpenLobbyMapReq {
}

export interface ss2cOpenLobbyMapRes {
}

export interface sc2sLobbyRegionSelectReq {
  region: number;
}

export interface ss2cLobbyRegionSelectRes {
  result: number;
  region: number;
}

export interface sc2sLobbyEnterFromGameReq {
}

export interface ss2cLobbyEnterFromGameRes {
  result: number;
}

export interface sc2sLobbyGameTypeSelectReq {
  gameTypeIndex: number;
}

export interface ss2cLobbyGameTypeSelectRes {
  result: number;
  gameTypeIndex: number;
}

export interface saccountCurrencyInfo {
  currencyType: number;
  currencyValue: number;
}

export interface ss2cLobbyAccountCurrencyListNot {
  currencyInfos: saccountCurrencyInfo[];
  buyRedstoneShardUrl: string;
}

export interface ss2cLobbyCharacterLobbyEmoteNot {
  lobbyEmoteList: scustomizeLobbyEmote[];
}

export interface sreportPunishInfo {
  nickname: saccountNickname | undefined;
  reportBanType: number;
}

export interface ss2cLobbyReportPunishListNot {
  infos: sreportPunishInfo[];
}

export enum ss2cLobbyReportPunishListNot_reportBanType {
  NONE_BAN_TYPE = 0,
  PERMANENT_BAN = 1,
  TEMPORARY_BAN = 2,
  UNRECOGNIZED = -1,
}

export function ss2cLobbyReportPunishListNot_reportBanTypeFromJSON(
  object: any,
): ss2cLobbyReportPunishListNot_reportBanType {
  switch (object) {
    case 0:
    case "NONE_BAN_TYPE":
      return ss2cLobbyReportPunishListNot_reportBanType.NONE_BAN_TYPE;
    case 1:
    case "PERMANENT_BAN":
      return ss2cLobbyReportPunishListNot_reportBanType.PERMANENT_BAN;
    case 2:
    case "TEMPORARY_BAN":
      return ss2cLobbyReportPunishListNot_reportBanType.TEMPORARY_BAN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ss2cLobbyReportPunishListNot_reportBanType.UNRECOGNIZED;
  }
}

export function ss2cLobbyReportPunishListNot_reportBanTypeToJSON(
  object: ss2cLobbyReportPunishListNot_reportBanType,
): string {
  switch (object) {
    case ss2cLobbyReportPunishListNot_reportBanType.NONE_BAN_TYPE:
      return "NONE_BAN_TYPE";
    case ss2cLobbyReportPunishListNot_reportBanType.PERMANENT_BAN:
      return "PERMANENT_BAN";
    case ss2cLobbyReportPunishListNot_reportBanType.TEMPORARY_BAN:
      return "TEMPORARY_BAN";
    case ss2cLobbyReportPunishListNot_reportBanType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface sc2sUserCharacterGameStatInfoReq {
  seasonId: string;
  gameType: number;
  dungeonIdTag: string;
}

export interface ss2cUserCharacterGameStatInfoRes {
  seasonId: string;
  gameType: number;
  gameStats: SGameStat[];
  dungeonIdTag: string;
}

export interface sc2sKnightProgramLinkSelectReq {
}

export interface ss2cKnightProgramLinkSelectRes {
  result: number;
  url: string;
}

export interface sc2sGmTradeChatBanReq {
  accountId: string;
  characterId: string;
  nickName: string;
  lastChatMsg: string;
  banType: number;
}

export interface ss2cGmTradeChatBanRes {
  result: number;
}

function createBasesc2sCharacterSelectEnterReq(): sc2sCharacterSelectEnterReq {
  return {};
}

export const sc2sCharacterSelectEnterReq = {
  encode(_: sc2sCharacterSelectEnterReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCharacterSelectEnterReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCharacterSelectEnterReq();
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

  fromJSON(_: any): sc2sCharacterSelectEnterReq {
    return {};
  },

  toJSON(_: sc2sCharacterSelectEnterReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCharacterSelectEnterReq>, I>>(base?: I): sc2sCharacterSelectEnterReq {
    return sc2sCharacterSelectEnterReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sCharacterSelectEnterReq>, I>>(_: I): sc2sCharacterSelectEnterReq {
    const message = createBasesc2sCharacterSelectEnterReq();
    return message;
  },
};

function createBasess2cCharacterSelectEnterRes(): ss2cCharacterSelectEnterRes {
  return { result: 0 };
}

export const ss2cCharacterSelectEnterRes = {
  encode(message: ss2cCharacterSelectEnterRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCharacterSelectEnterRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCharacterSelectEnterRes();
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

  fromJSON(object: any): ss2cCharacterSelectEnterRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cCharacterSelectEnterRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCharacterSelectEnterRes>, I>>(base?: I): ss2cCharacterSelectEnterRes {
    return ss2cCharacterSelectEnterRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cCharacterSelectEnterRes>, I>>(object: I): ss2cCharacterSelectEnterRes {
    const message = createBasess2cCharacterSelectEnterRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sLobbyCharacterInfoReq(): sc2sLobbyCharacterInfoReq {
  return {};
}

export const sc2sLobbyCharacterInfoReq = {
  encode(_: sc2sLobbyCharacterInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sLobbyCharacterInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sLobbyCharacterInfoReq();
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

  fromJSON(_: any): sc2sLobbyCharacterInfoReq {
    return {};
  },

  toJSON(_: sc2sLobbyCharacterInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sLobbyCharacterInfoReq>, I>>(base?: I): sc2sLobbyCharacterInfoReq {
    return sc2sLobbyCharacterInfoReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sLobbyCharacterInfoReq>, I>>(_: I): sc2sLobbyCharacterInfoReq {
    const message = createBasesc2sLobbyCharacterInfoReq();
    return message;
  },
};

function createBasess2cLobbyCharacterInfoRes(): ss2cLobbyCharacterInfoRes {
  return { result: 0, characterDataBase: undefined };
}

export const ss2cLobbyCharacterInfoRes = {
  encode(message: ss2cLobbyCharacterInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.characterDataBase !== undefined) {
      scharacterInfo.encode(message.characterDataBase, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cLobbyCharacterInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cLobbyCharacterInfoRes();
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

          message.characterDataBase = scharacterInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cLobbyCharacterInfoRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      characterDataBase: isSet(object.characterDataBase)
        ? scharacterInfo.fromJSON(object.characterDataBase)
        : undefined,
    };
  },

  toJSON(message: ss2cLobbyCharacterInfoRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.characterDataBase !== undefined) {
      obj.characterDataBase = scharacterInfo.toJSON(message.characterDataBase);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyCharacterInfoRes>, I>>(base?: I): ss2cLobbyCharacterInfoRes {
    return ss2cLobbyCharacterInfoRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cLobbyCharacterInfoRes>, I>>(object: I): ss2cLobbyCharacterInfoRes {
    const message = createBasess2cLobbyCharacterInfoRes();
    message.result = object.result ?? 0;
    message.characterDataBase = (object.characterDataBase !== undefined && object.characterDataBase !== null)
      ? scharacterInfo.fromPartial(object.characterDataBase)
      : undefined;
    return message;
  },
};

function createBasesc2sOpenLobbyMapReq(): sc2sOpenLobbyMapReq {
  return {};
}

export const sc2sOpenLobbyMapReq = {
  encode(_: sc2sOpenLobbyMapReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sOpenLobbyMapReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sOpenLobbyMapReq();
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

  fromJSON(_: any): sc2sOpenLobbyMapReq {
    return {};
  },

  toJSON(_: sc2sOpenLobbyMapReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sOpenLobbyMapReq>, I>>(base?: I): sc2sOpenLobbyMapReq {
    return sc2sOpenLobbyMapReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sOpenLobbyMapReq>, I>>(_: I): sc2sOpenLobbyMapReq {
    const message = createBasesc2sOpenLobbyMapReq();
    return message;
  },
};

function createBasess2cOpenLobbyMapRes(): ss2cOpenLobbyMapRes {
  return {};
}

export const ss2cOpenLobbyMapRes = {
  encode(_: ss2cOpenLobbyMapRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cOpenLobbyMapRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cOpenLobbyMapRes();
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

  fromJSON(_: any): ss2cOpenLobbyMapRes {
    return {};
  },

  toJSON(_: ss2cOpenLobbyMapRes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cOpenLobbyMapRes>, I>>(base?: I): ss2cOpenLobbyMapRes {
    return ss2cOpenLobbyMapRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cOpenLobbyMapRes>, I>>(_: I): ss2cOpenLobbyMapRes {
    const message = createBasess2cOpenLobbyMapRes();
    return message;
  },
};

function createBasesc2sLobbyRegionSelectReq(): sc2sLobbyRegionSelectReq {
  return { region: 0 };
}

export const sc2sLobbyRegionSelectReq = {
  encode(message: sc2sLobbyRegionSelectReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.region !== 0) {
      writer.uint32(8).uint32(message.region);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sLobbyRegionSelectReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sLobbyRegionSelectReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.region = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sLobbyRegionSelectReq {
    return { region: isSet(object.region) ? Number(object.region) : 0 };
  },

  toJSON(message: sc2sLobbyRegionSelectReq): unknown {
    const obj: any = {};
    if (message.region !== 0) {
      obj.region = Math.round(message.region);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sLobbyRegionSelectReq>, I>>(base?: I): sc2sLobbyRegionSelectReq {
    return sc2sLobbyRegionSelectReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sLobbyRegionSelectReq>, I>>(object: I): sc2sLobbyRegionSelectReq {
    const message = createBasesc2sLobbyRegionSelectReq();
    message.region = object.region ?? 0;
    return message;
  },
};

function createBasess2cLobbyRegionSelectRes(): ss2cLobbyRegionSelectRes {
  return { result: 0, region: 0 };
}

export const ss2cLobbyRegionSelectRes = {
  encode(message: ss2cLobbyRegionSelectRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.region !== 0) {
      writer.uint32(16).uint32(message.region);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cLobbyRegionSelectRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cLobbyRegionSelectRes();
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
          if (tag !== 16) {
            break;
          }

          message.region = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cLobbyRegionSelectRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      region: isSet(object.region) ? Number(object.region) : 0,
    };
  },

  toJSON(message: ss2cLobbyRegionSelectRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.region !== 0) {
      obj.region = Math.round(message.region);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyRegionSelectRes>, I>>(base?: I): ss2cLobbyRegionSelectRes {
    return ss2cLobbyRegionSelectRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cLobbyRegionSelectRes>, I>>(object: I): ss2cLobbyRegionSelectRes {
    const message = createBasess2cLobbyRegionSelectRes();
    message.result = object.result ?? 0;
    message.region = object.region ?? 0;
    return message;
  },
};

function createBasesc2sLobbyEnterFromGameReq(): sc2sLobbyEnterFromGameReq {
  return {};
}

export const sc2sLobbyEnterFromGameReq = {
  encode(_: sc2sLobbyEnterFromGameReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sLobbyEnterFromGameReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sLobbyEnterFromGameReq();
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

  fromJSON(_: any): sc2sLobbyEnterFromGameReq {
    return {};
  },

  toJSON(_: sc2sLobbyEnterFromGameReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sLobbyEnterFromGameReq>, I>>(base?: I): sc2sLobbyEnterFromGameReq {
    return sc2sLobbyEnterFromGameReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sLobbyEnterFromGameReq>, I>>(_: I): sc2sLobbyEnterFromGameReq {
    const message = createBasesc2sLobbyEnterFromGameReq();
    return message;
  },
};

function createBasess2cLobbyEnterFromGameRes(): ss2cLobbyEnterFromGameRes {
  return { result: 0 };
}

export const ss2cLobbyEnterFromGameRes = {
  encode(message: ss2cLobbyEnterFromGameRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cLobbyEnterFromGameRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cLobbyEnterFromGameRes();
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

  fromJSON(object: any): ss2cLobbyEnterFromGameRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cLobbyEnterFromGameRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyEnterFromGameRes>, I>>(base?: I): ss2cLobbyEnterFromGameRes {
    return ss2cLobbyEnterFromGameRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cLobbyEnterFromGameRes>, I>>(object: I): ss2cLobbyEnterFromGameRes {
    const message = createBasess2cLobbyEnterFromGameRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sLobbyGameTypeSelectReq(): sc2sLobbyGameTypeSelectReq {
  return { gameTypeIndex: 0 };
}

export const sc2sLobbyGameTypeSelectReq = {
  encode(message: sc2sLobbyGameTypeSelectReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameTypeIndex !== 0) {
      writer.uint32(8).uint32(message.gameTypeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sLobbyGameTypeSelectReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sLobbyGameTypeSelectReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gameTypeIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sLobbyGameTypeSelectReq {
    return { gameTypeIndex: isSet(object.gameTypeIndex) ? Number(object.gameTypeIndex) : 0 };
  },

  toJSON(message: sc2sLobbyGameTypeSelectReq): unknown {
    const obj: any = {};
    if (message.gameTypeIndex !== 0) {
      obj.gameTypeIndex = Math.round(message.gameTypeIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sLobbyGameTypeSelectReq>, I>>(base?: I): sc2sLobbyGameTypeSelectReq {
    return sc2sLobbyGameTypeSelectReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sLobbyGameTypeSelectReq>, I>>(object: I): sc2sLobbyGameTypeSelectReq {
    const message = createBasesc2sLobbyGameTypeSelectReq();
    message.gameTypeIndex = object.gameTypeIndex ?? 0;
    return message;
  },
};

function createBasess2cLobbyGameTypeSelectRes(): ss2cLobbyGameTypeSelectRes {
  return { result: 0, gameTypeIndex: 0 };
}

export const ss2cLobbyGameTypeSelectRes = {
  encode(message: ss2cLobbyGameTypeSelectRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.gameTypeIndex !== 0) {
      writer.uint32(16).uint32(message.gameTypeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cLobbyGameTypeSelectRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cLobbyGameTypeSelectRes();
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
          if (tag !== 16) {
            break;
          }

          message.gameTypeIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cLobbyGameTypeSelectRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      gameTypeIndex: isSet(object.gameTypeIndex) ? Number(object.gameTypeIndex) : 0,
    };
  },

  toJSON(message: ss2cLobbyGameTypeSelectRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.gameTypeIndex !== 0) {
      obj.gameTypeIndex = Math.round(message.gameTypeIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyGameTypeSelectRes>, I>>(base?: I): ss2cLobbyGameTypeSelectRes {
    return ss2cLobbyGameTypeSelectRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cLobbyGameTypeSelectRes>, I>>(object: I): ss2cLobbyGameTypeSelectRes {
    const message = createBasess2cLobbyGameTypeSelectRes();
    message.result = object.result ?? 0;
    message.gameTypeIndex = object.gameTypeIndex ?? 0;
    return message;
  },
};

function createBasesaccountCurrencyInfo(): saccountCurrencyInfo {
  return { currencyType: 0, currencyValue: 0 };
}

export const saccountCurrencyInfo = {
  encode(message: saccountCurrencyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currencyType !== 0) {
      writer.uint32(8).uint32(message.currencyType);
    }
    if (message.currencyValue !== 0) {
      writer.uint32(16).uint32(message.currencyValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): saccountCurrencyInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesaccountCurrencyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.currencyType = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.currencyValue = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): saccountCurrencyInfo {
    return {
      currencyType: isSet(object.currencyType) ? Number(object.currencyType) : 0,
      currencyValue: isSet(object.currencyValue) ? Number(object.currencyValue) : 0,
    };
  },

  toJSON(message: saccountCurrencyInfo): unknown {
    const obj: any = {};
    if (message.currencyType !== 0) {
      obj.currencyType = Math.round(message.currencyType);
    }
    if (message.currencyValue !== 0) {
      obj.currencyValue = Math.round(message.currencyValue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<saccountCurrencyInfo>, I>>(base?: I): saccountCurrencyInfo {
    return saccountCurrencyInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<saccountCurrencyInfo>, I>>(object: I): saccountCurrencyInfo {
    const message = createBasesaccountCurrencyInfo();
    message.currencyType = object.currencyType ?? 0;
    message.currencyValue = object.currencyValue ?? 0;
    return message;
  },
};

function createBasess2cLobbyAccountCurrencyListNot(): ss2cLobbyAccountCurrencyListNot {
  return { currencyInfos: [], buyRedstoneShardUrl: "" };
}

export const ss2cLobbyAccountCurrencyListNot = {
  encode(message: ss2cLobbyAccountCurrencyListNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.currencyInfos) {
      saccountCurrencyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.buyRedstoneShardUrl !== "") {
      writer.uint32(18).string(message.buyRedstoneShardUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cLobbyAccountCurrencyListNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cLobbyAccountCurrencyListNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.currencyInfos.push(saccountCurrencyInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.buyRedstoneShardUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cLobbyAccountCurrencyListNot {
    return {
      currencyInfos: Array.isArray(object?.currencyInfos)
        ? object.currencyInfos.map((e: any) => saccountCurrencyInfo.fromJSON(e))
        : [],
      buyRedstoneShardUrl: isSet(object.buyRedstoneShardUrl) ? String(object.buyRedstoneShardUrl) : "",
    };
  },

  toJSON(message: ss2cLobbyAccountCurrencyListNot): unknown {
    const obj: any = {};
    if (message.currencyInfos?.length) {
      obj.currencyInfos = message.currencyInfos.map((e) => saccountCurrencyInfo.toJSON(e));
    }
    if (message.buyRedstoneShardUrl !== "") {
      obj.buyRedstoneShardUrl = message.buyRedstoneShardUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyAccountCurrencyListNot>, I>>(base?: I): ss2cLobbyAccountCurrencyListNot {
    return ss2cLobbyAccountCurrencyListNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cLobbyAccountCurrencyListNot>, I>>(
    object: I,
  ): ss2cLobbyAccountCurrencyListNot {
    const message = createBasess2cLobbyAccountCurrencyListNot();
    message.currencyInfos = object.currencyInfos?.map((e) => saccountCurrencyInfo.fromPartial(e)) || [];
    message.buyRedstoneShardUrl = object.buyRedstoneShardUrl ?? "";
    return message;
  },
};

function createBasess2cLobbyCharacterLobbyEmoteNot(): ss2cLobbyCharacterLobbyEmoteNot {
  return { lobbyEmoteList: [] };
}

export const ss2cLobbyCharacterLobbyEmoteNot = {
  encode(message: ss2cLobbyCharacterLobbyEmoteNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lobbyEmoteList) {
      scustomizeLobbyEmote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cLobbyCharacterLobbyEmoteNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cLobbyCharacterLobbyEmoteNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lobbyEmoteList.push(scustomizeLobbyEmote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cLobbyCharacterLobbyEmoteNot {
    return {
      lobbyEmoteList: Array.isArray(object?.lobbyEmoteList)
        ? object.lobbyEmoteList.map((e: any) => scustomizeLobbyEmote.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cLobbyCharacterLobbyEmoteNot): unknown {
    const obj: any = {};
    if (message.lobbyEmoteList?.length) {
      obj.lobbyEmoteList = message.lobbyEmoteList.map((e) => scustomizeLobbyEmote.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyCharacterLobbyEmoteNot>, I>>(base?: I): ss2cLobbyCharacterLobbyEmoteNot {
    return ss2cLobbyCharacterLobbyEmoteNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cLobbyCharacterLobbyEmoteNot>, I>>(
    object: I,
  ): ss2cLobbyCharacterLobbyEmoteNot {
    const message = createBasess2cLobbyCharacterLobbyEmoteNot();
    message.lobbyEmoteList = object.lobbyEmoteList?.map((e) => scustomizeLobbyEmote.fromPartial(e)) || [];
    return message;
  },
};

function createBasesreportPunishInfo(): sreportPunishInfo {
  return { nickname: undefined, reportBanType: 0 };
}

export const sreportPunishInfo = {
  encode(message: sreportPunishInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nickname !== undefined) {
      saccountNickname.encode(message.nickname, writer.uint32(10).fork()).ldelim();
    }
    if (message.reportBanType !== 0) {
      writer.uint32(16).int32(message.reportBanType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sreportPunishInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesreportPunishInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nickname = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.reportBanType = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sreportPunishInfo {
    return {
      nickname: isSet(object.nickname) ? saccountNickname.fromJSON(object.nickname) : undefined,
      reportBanType: isSet(object.reportBanType) ? Number(object.reportBanType) : 0,
    };
  },

  toJSON(message: sreportPunishInfo): unknown {
    const obj: any = {};
    if (message.nickname !== undefined) {
      obj.nickname = saccountNickname.toJSON(message.nickname);
    }
    if (message.reportBanType !== 0) {
      obj.reportBanType = Math.round(message.reportBanType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sreportPunishInfo>, I>>(base?: I): sreportPunishInfo {
    return sreportPunishInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sreportPunishInfo>, I>>(object: I): sreportPunishInfo {
    const message = createBasesreportPunishInfo();
    message.nickname = (object.nickname !== undefined && object.nickname !== null)
      ? saccountNickname.fromPartial(object.nickname)
      : undefined;
    message.reportBanType = object.reportBanType ?? 0;
    return message;
  },
};

function createBasess2cLobbyReportPunishListNot(): ss2cLobbyReportPunishListNot {
  return { infos: [] };
}

export const ss2cLobbyReportPunishListNot = {
  encode(message: ss2cLobbyReportPunishListNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      sreportPunishInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cLobbyReportPunishListNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cLobbyReportPunishListNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(sreportPunishInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cLobbyReportPunishListNot {
    return { infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => sreportPunishInfo.fromJSON(e)) : [] };
  },

  toJSON(message: ss2cLobbyReportPunishListNot): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => sreportPunishInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyReportPunishListNot>, I>>(base?: I): ss2cLobbyReportPunishListNot {
    return ss2cLobbyReportPunishListNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cLobbyReportPunishListNot>, I>>(object: I): ss2cLobbyReportPunishListNot {
    const message = createBasess2cLobbyReportPunishListNot();
    message.infos = object.infos?.map((e) => sreportPunishInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sUserCharacterGameStatInfoReq(): sc2sUserCharacterGameStatInfoReq {
  return { seasonId: "", gameType: 0, dungeonIdTag: "" };
}

export const sc2sUserCharacterGameStatInfoReq = {
  encode(message: sc2sUserCharacterGameStatInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seasonId !== "") {
      writer.uint32(10).string(message.seasonId);
    }
    if (message.gameType !== 0) {
      writer.uint32(16).int32(message.gameType);
    }
    if (message.dungeonIdTag !== "") {
      writer.uint32(26).string(message.dungeonIdTag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sUserCharacterGameStatInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sUserCharacterGameStatInfoReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.seasonId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.gameType = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dungeonIdTag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sUserCharacterGameStatInfoReq {
    return {
      seasonId: isSet(object.seasonId) ? String(object.seasonId) : "",
      gameType: isSet(object.gameType) ? Number(object.gameType) : 0,
      dungeonIdTag: isSet(object.dungeonIdTag) ? String(object.dungeonIdTag) : "",
    };
  },

  toJSON(message: sc2sUserCharacterGameStatInfoReq): unknown {
    const obj: any = {};
    if (message.seasonId !== "") {
      obj.seasonId = message.seasonId;
    }
    if (message.gameType !== 0) {
      obj.gameType = Math.round(message.gameType);
    }
    if (message.dungeonIdTag !== "") {
      obj.dungeonIdTag = message.dungeonIdTag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sUserCharacterGameStatInfoReq>, I>>(
    base?: I,
  ): sc2sUserCharacterGameStatInfoReq {
    return sc2sUserCharacterGameStatInfoReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sUserCharacterGameStatInfoReq>, I>>(
    object: I,
  ): sc2sUserCharacterGameStatInfoReq {
    const message = createBasesc2sUserCharacterGameStatInfoReq();
    message.seasonId = object.seasonId ?? "";
    message.gameType = object.gameType ?? 0;
    message.dungeonIdTag = object.dungeonIdTag ?? "";
    return message;
  },
};

function createBasess2cUserCharacterGameStatInfoRes(): ss2cUserCharacterGameStatInfoRes {
  return { seasonId: "", gameType: 0, gameStats: [], dungeonIdTag: "" };
}

export const ss2cUserCharacterGameStatInfoRes = {
  encode(message: ss2cUserCharacterGameStatInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seasonId !== "") {
      writer.uint32(10).string(message.seasonId);
    }
    if (message.gameType !== 0) {
      writer.uint32(16).int32(message.gameType);
    }
    for (const v of message.gameStats) {
      SGameStat.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.dungeonIdTag !== "") {
      writer.uint32(34).string(message.dungeonIdTag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cUserCharacterGameStatInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cUserCharacterGameStatInfoRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.seasonId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.gameType = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gameStats.push(SGameStat.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dungeonIdTag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cUserCharacterGameStatInfoRes {
    return {
      seasonId: isSet(object.seasonId) ? String(object.seasonId) : "",
      gameType: isSet(object.gameType) ? Number(object.gameType) : 0,
      gameStats: Array.isArray(object?.gameStats) ? object.gameStats.map((e: any) => SGameStat.fromJSON(e)) : [],
      dungeonIdTag: isSet(object.dungeonIdTag) ? String(object.dungeonIdTag) : "",
    };
  },

  toJSON(message: ss2cUserCharacterGameStatInfoRes): unknown {
    const obj: any = {};
    if (message.seasonId !== "") {
      obj.seasonId = message.seasonId;
    }
    if (message.gameType !== 0) {
      obj.gameType = Math.round(message.gameType);
    }
    if (message.gameStats?.length) {
      obj.gameStats = message.gameStats.map((e) => SGameStat.toJSON(e));
    }
    if (message.dungeonIdTag !== "") {
      obj.dungeonIdTag = message.dungeonIdTag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cUserCharacterGameStatInfoRes>, I>>(
    base?: I,
  ): ss2cUserCharacterGameStatInfoRes {
    return ss2cUserCharacterGameStatInfoRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cUserCharacterGameStatInfoRes>, I>>(
    object: I,
  ): ss2cUserCharacterGameStatInfoRes {
    const message = createBasess2cUserCharacterGameStatInfoRes();
    message.seasonId = object.seasonId ?? "";
    message.gameType = object.gameType ?? 0;
    message.gameStats = object.gameStats?.map((e) => SGameStat.fromPartial(e)) || [];
    message.dungeonIdTag = object.dungeonIdTag ?? "";
    return message;
  },
};

function createBasesc2sKnightProgramLinkSelectReq(): sc2sKnightProgramLinkSelectReq {
  return {};
}

export const sc2sKnightProgramLinkSelectReq = {
  encode(_: sc2sKnightProgramLinkSelectReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sKnightProgramLinkSelectReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sKnightProgramLinkSelectReq();
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

  fromJSON(_: any): sc2sKnightProgramLinkSelectReq {
    return {};
  },

  toJSON(_: sc2sKnightProgramLinkSelectReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sKnightProgramLinkSelectReq>, I>>(base?: I): sc2sKnightProgramLinkSelectReq {
    return sc2sKnightProgramLinkSelectReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sKnightProgramLinkSelectReq>, I>>(_: I): sc2sKnightProgramLinkSelectReq {
    const message = createBasesc2sKnightProgramLinkSelectReq();
    return message;
  },
};

function createBasess2cKnightProgramLinkSelectRes(): ss2cKnightProgramLinkSelectRes {
  return { result: 0, url: "" };
}

export const ss2cKnightProgramLinkSelectRes = {
  encode(message: ss2cKnightProgramLinkSelectRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cKnightProgramLinkSelectRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cKnightProgramLinkSelectRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cKnightProgramLinkSelectRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: ss2cKnightProgramLinkSelectRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cKnightProgramLinkSelectRes>, I>>(base?: I): ss2cKnightProgramLinkSelectRes {
    return ss2cKnightProgramLinkSelectRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cKnightProgramLinkSelectRes>, I>>(
    object: I,
  ): ss2cKnightProgramLinkSelectRes {
    const message = createBasess2cKnightProgramLinkSelectRes();
    message.result = object.result ?? 0;
    message.url = object.url ?? "";
    return message;
  },
};

function createBasesc2sGmTradeChatBanReq(): sc2sGmTradeChatBanReq {
  return { accountId: "", characterId: "", nickName: "", lastChatMsg: "", banType: 0 };
}

export const sc2sGmTradeChatBanReq = {
  encode(message: sc2sGmTradeChatBanReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.nickName !== "") {
      writer.uint32(26).string(message.nickName);
    }
    if (message.lastChatMsg !== "") {
      writer.uint32(34).string(message.lastChatMsg);
    }
    if (message.banType !== 0) {
      writer.uint32(40).uint32(message.banType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sGmTradeChatBanReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sGmTradeChatBanReq();
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

          message.characterId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nickName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lastChatMsg = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.banType = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sGmTradeChatBanReq {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      nickName: isSet(object.nickName) ? String(object.nickName) : "",
      lastChatMsg: isSet(object.lastChatMsg) ? String(object.lastChatMsg) : "",
      banType: isSet(object.banType) ? Number(object.banType) : 0,
    };
  },

  toJSON(message: sc2sGmTradeChatBanReq): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.nickName !== "") {
      obj.nickName = message.nickName;
    }
    if (message.lastChatMsg !== "") {
      obj.lastChatMsg = message.lastChatMsg;
    }
    if (message.banType !== 0) {
      obj.banType = Math.round(message.banType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sGmTradeChatBanReq>, I>>(base?: I): sc2sGmTradeChatBanReq {
    return sc2sGmTradeChatBanReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sGmTradeChatBanReq>, I>>(object: I): sc2sGmTradeChatBanReq {
    const message = createBasesc2sGmTradeChatBanReq();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.nickName = object.nickName ?? "";
    message.lastChatMsg = object.lastChatMsg ?? "";
    message.banType = object.banType ?? 0;
    return message;
  },
};

function createBasess2cGmTradeChatBanRes(): ss2cGmTradeChatBanRes {
  return { result: 0 };
}

export const ss2cGmTradeChatBanRes = {
  encode(message: ss2cGmTradeChatBanRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cGmTradeChatBanRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cGmTradeChatBanRes();
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

  fromJSON(object: any): ss2cGmTradeChatBanRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cGmTradeChatBanRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cGmTradeChatBanRes>, I>>(base?: I): ss2cGmTradeChatBanRes {
    return ss2cGmTradeChatBanRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cGmTradeChatBanRes>, I>>(object: I): ss2cGmTradeChatBanRes {
    const message = createBasess2cGmTradeChatBanRes();
    message.result = object.result ?? 0;
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
