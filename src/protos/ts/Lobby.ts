/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { saccountNickname, scharacterInfo } from "./_Character";
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

export interface sc2sLobbyGameDifficultySelectReq {
  gameDifficultyTypeIndex: number;
}

export interface ss2cLobbyGameDifficultySelectRes {
  result: number;
  gameDifficultyTypeIndex: number;
}

export interface saccountCurrencyInfo {
  currencyType: number;
  currencyValue: number;
}

export interface ss2cLobbyAccountCurrencyListNot {
  currencyInfos: saccountCurrencyInfo[];
}

export interface ss2cLobbyCharacterLobbyEmoteNot {
  lobbyEmoteList: scustomizeLobbyEmote[];
}

export interface sreportPunishInfo {
  nickname: saccountNickname | undefined;
}

export interface ss2cLobbyReportPunishListNot {
  infos: sreportPunishInfo[];
}

export interface sc2sLobbyEnterCouponCodeReq {
  code: string;
}

export interface ss2cLobbyEnterCouponCodeRes {
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
      if ((tag & 7) == 4 || tag == 0) {
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
    return sc2sCharacterSelectEnterReq.fromPartial(base ?? {});
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
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCharacterSelectEnterRes>, I>>(base?: I): ss2cCharacterSelectEnterRes {
    return ss2cCharacterSelectEnterRes.fromPartial(base ?? {});
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
      if ((tag & 7) == 4 || tag == 0) {
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
    return sc2sLobbyCharacterInfoReq.fromPartial(base ?? {});
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
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.characterDataBase = scharacterInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.characterDataBase !== undefined &&
      (obj.characterDataBase = message.characterDataBase
        ? scharacterInfo.toJSON(message.characterDataBase)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyCharacterInfoRes>, I>>(base?: I): ss2cLobbyCharacterInfoRes {
    return ss2cLobbyCharacterInfoRes.fromPartial(base ?? {});
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
      if ((tag & 7) == 4 || tag == 0) {
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
    return sc2sOpenLobbyMapReq.fromPartial(base ?? {});
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
      if ((tag & 7) == 4 || tag == 0) {
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
    return ss2cOpenLobbyMapRes.fromPartial(base ?? {});
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
          if (tag != 8) {
            break;
          }

          message.region = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.region !== undefined && (obj.region = Math.round(message.region));
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sLobbyRegionSelectReq>, I>>(base?: I): sc2sLobbyRegionSelectReq {
    return sc2sLobbyRegionSelectReq.fromPartial(base ?? {});
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
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.region = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.region !== undefined && (obj.region = Math.round(message.region));
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyRegionSelectRes>, I>>(base?: I): ss2cLobbyRegionSelectRes {
    return ss2cLobbyRegionSelectRes.fromPartial(base ?? {});
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
      if ((tag & 7) == 4 || tag == 0) {
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
    return sc2sLobbyEnterFromGameReq.fromPartial(base ?? {});
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
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyEnterFromGameRes>, I>>(base?: I): ss2cLobbyEnterFromGameRes {
    return ss2cLobbyEnterFromGameRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cLobbyEnterFromGameRes>, I>>(object: I): ss2cLobbyEnterFromGameRes {
    const message = createBasess2cLobbyEnterFromGameRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sLobbyGameDifficultySelectReq(): sc2sLobbyGameDifficultySelectReq {
  return { gameDifficultyTypeIndex: 0 };
}

export const sc2sLobbyGameDifficultySelectReq = {
  encode(message: sc2sLobbyGameDifficultySelectReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameDifficultyTypeIndex !== 0) {
      writer.uint32(8).uint32(message.gameDifficultyTypeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sLobbyGameDifficultySelectReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sLobbyGameDifficultySelectReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gameDifficultyTypeIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sLobbyGameDifficultySelectReq {
    return {
      gameDifficultyTypeIndex: isSet(object.gameDifficultyTypeIndex) ? Number(object.gameDifficultyTypeIndex) : 0,
    };
  },

  toJSON(message: sc2sLobbyGameDifficultySelectReq): unknown {
    const obj: any = {};
    message.gameDifficultyTypeIndex !== undefined &&
      (obj.gameDifficultyTypeIndex = Math.round(message.gameDifficultyTypeIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sLobbyGameDifficultySelectReq>, I>>(
    base?: I,
  ): sc2sLobbyGameDifficultySelectReq {
    return sc2sLobbyGameDifficultySelectReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sLobbyGameDifficultySelectReq>, I>>(
    object: I,
  ): sc2sLobbyGameDifficultySelectReq {
    const message = createBasesc2sLobbyGameDifficultySelectReq();
    message.gameDifficultyTypeIndex = object.gameDifficultyTypeIndex ?? 0;
    return message;
  },
};

function createBasess2cLobbyGameDifficultySelectRes(): ss2cLobbyGameDifficultySelectRes {
  return { result: 0, gameDifficultyTypeIndex: 0 };
}

export const ss2cLobbyGameDifficultySelectRes = {
  encode(message: ss2cLobbyGameDifficultySelectRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.gameDifficultyTypeIndex !== 0) {
      writer.uint32(16).uint32(message.gameDifficultyTypeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cLobbyGameDifficultySelectRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cLobbyGameDifficultySelectRes();
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
          if (tag != 16) {
            break;
          }

          message.gameDifficultyTypeIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cLobbyGameDifficultySelectRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      gameDifficultyTypeIndex: isSet(object.gameDifficultyTypeIndex) ? Number(object.gameDifficultyTypeIndex) : 0,
    };
  },

  toJSON(message: ss2cLobbyGameDifficultySelectRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.gameDifficultyTypeIndex !== undefined &&
      (obj.gameDifficultyTypeIndex = Math.round(message.gameDifficultyTypeIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyGameDifficultySelectRes>, I>>(
    base?: I,
  ): ss2cLobbyGameDifficultySelectRes {
    return ss2cLobbyGameDifficultySelectRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cLobbyGameDifficultySelectRes>, I>>(
    object: I,
  ): ss2cLobbyGameDifficultySelectRes {
    const message = createBasess2cLobbyGameDifficultySelectRes();
    message.result = object.result ?? 0;
    message.gameDifficultyTypeIndex = object.gameDifficultyTypeIndex ?? 0;
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
          if (tag != 8) {
            break;
          }

          message.currencyType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.currencyValue = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.currencyType !== undefined && (obj.currencyType = Math.round(message.currencyType));
    message.currencyValue !== undefined && (obj.currencyValue = Math.round(message.currencyValue));
    return obj;
  },

  create<I extends Exact<DeepPartial<saccountCurrencyInfo>, I>>(base?: I): saccountCurrencyInfo {
    return saccountCurrencyInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<saccountCurrencyInfo>, I>>(object: I): saccountCurrencyInfo {
    const message = createBasesaccountCurrencyInfo();
    message.currencyType = object.currencyType ?? 0;
    message.currencyValue = object.currencyValue ?? 0;
    return message;
  },
};

function createBasess2cLobbyAccountCurrencyListNot(): ss2cLobbyAccountCurrencyListNot {
  return { currencyInfos: [] };
}

export const ss2cLobbyAccountCurrencyListNot = {
  encode(message: ss2cLobbyAccountCurrencyListNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.currencyInfos) {
      saccountCurrencyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
          if (tag != 10) {
            break;
          }

          message.currencyInfos.push(saccountCurrencyInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    };
  },

  toJSON(message: ss2cLobbyAccountCurrencyListNot): unknown {
    const obj: any = {};
    if (message.currencyInfos) {
      obj.currencyInfos = message.currencyInfos.map((e) => e ? saccountCurrencyInfo.toJSON(e) : undefined);
    } else {
      obj.currencyInfos = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyAccountCurrencyListNot>, I>>(base?: I): ss2cLobbyAccountCurrencyListNot {
    return ss2cLobbyAccountCurrencyListNot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cLobbyAccountCurrencyListNot>, I>>(
    object: I,
  ): ss2cLobbyAccountCurrencyListNot {
    const message = createBasess2cLobbyAccountCurrencyListNot();
    message.currencyInfos = object.currencyInfos?.map((e) => saccountCurrencyInfo.fromPartial(e)) || [];
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
          if (tag != 10) {
            break;
          }

          message.lobbyEmoteList.push(scustomizeLobbyEmote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    if (message.lobbyEmoteList) {
      obj.lobbyEmoteList = message.lobbyEmoteList.map((e) => e ? scustomizeLobbyEmote.toJSON(e) : undefined);
    } else {
      obj.lobbyEmoteList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyCharacterLobbyEmoteNot>, I>>(base?: I): ss2cLobbyCharacterLobbyEmoteNot {
    return ss2cLobbyCharacterLobbyEmoteNot.fromPartial(base ?? {});
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
  return { nickname: undefined };
}

export const sreportPunishInfo = {
  encode(message: sreportPunishInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nickname !== undefined) {
      saccountNickname.encode(message.nickname, writer.uint32(10).fork()).ldelim();
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
          if (tag != 10) {
            break;
          }

          message.nickname = saccountNickname.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sreportPunishInfo {
    return { nickname: isSet(object.nickname) ? saccountNickname.fromJSON(object.nickname) : undefined };
  },

  toJSON(message: sreportPunishInfo): unknown {
    const obj: any = {};
    message.nickname !== undefined &&
      (obj.nickname = message.nickname ? saccountNickname.toJSON(message.nickname) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<sreportPunishInfo>, I>>(base?: I): sreportPunishInfo {
    return sreportPunishInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sreportPunishInfo>, I>>(object: I): sreportPunishInfo {
    const message = createBasesreportPunishInfo();
    message.nickname = (object.nickname !== undefined && object.nickname !== null)
      ? saccountNickname.fromPartial(object.nickname)
      : undefined;
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
          if (tag != 10) {
            break;
          }

          message.infos.push(sreportPunishInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    if (message.infos) {
      obj.infos = message.infos.map((e) => e ? sreportPunishInfo.toJSON(e) : undefined);
    } else {
      obj.infos = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyReportPunishListNot>, I>>(base?: I): ss2cLobbyReportPunishListNot {
    return ss2cLobbyReportPunishListNot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cLobbyReportPunishListNot>, I>>(object: I): ss2cLobbyReportPunishListNot {
    const message = createBasess2cLobbyReportPunishListNot();
    message.infos = object.infos?.map((e) => sreportPunishInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sLobbyEnterCouponCodeReq(): sc2sLobbyEnterCouponCodeReq {
  return { code: "" };
}

export const sc2sLobbyEnterCouponCodeReq = {
  encode(message: sc2sLobbyEnterCouponCodeReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sLobbyEnterCouponCodeReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sLobbyEnterCouponCodeReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.code = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sLobbyEnterCouponCodeReq {
    return { code: isSet(object.code) ? String(object.code) : "" };
  },

  toJSON(message: sc2sLobbyEnterCouponCodeReq): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sLobbyEnterCouponCodeReq>, I>>(base?: I): sc2sLobbyEnterCouponCodeReq {
    return sc2sLobbyEnterCouponCodeReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sLobbyEnterCouponCodeReq>, I>>(object: I): sc2sLobbyEnterCouponCodeReq {
    const message = createBasesc2sLobbyEnterCouponCodeReq();
    message.code = object.code ?? "";
    return message;
  },
};

function createBasess2cLobbyEnterCouponCodeRes(): ss2cLobbyEnterCouponCodeRes {
  return { result: 0 };
}

export const ss2cLobbyEnterCouponCodeRes = {
  encode(message: ss2cLobbyEnterCouponCodeRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cLobbyEnterCouponCodeRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cLobbyEnterCouponCodeRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cLobbyEnterCouponCodeRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cLobbyEnterCouponCodeRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyEnterCouponCodeRes>, I>>(base?: I): ss2cLobbyEnterCouponCodeRes {
    return ss2cLobbyEnterCouponCodeRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cLobbyEnterCouponCodeRes>, I>>(object: I): ss2cLobbyEnterCouponCodeRes {
    const message = createBasess2cLobbyEnterCouponCodeRes();
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
