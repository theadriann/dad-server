/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { saccountNickname } from "./_Character";

export const protobufPackage = "DC.Packet";

export interface ss2cEnterGameServerNot {
  port: number;
  ip: string;
  sessionId: string;
  accountId: string;
  isReconnect: number;
  nickName: saccountNickname | undefined;
}

export interface sc2sAutoMatchRegReq {
  mode: number;
  region: number;
  difficultyType: number;
}

export enum sc2sAutoMatchRegReq_MODE {
  NONE = 0,
  REGISTER = 1,
  CANCEL = 2,
  UNRECOGNIZED = -1,
}

export function sc2sAutoMatchRegReq_MODEFromJSON(object: any): sc2sAutoMatchRegReq_MODE {
  switch (object) {
    case 0:
    case "NONE":
      return sc2sAutoMatchRegReq_MODE.NONE;
    case 1:
    case "REGISTER":
      return sc2sAutoMatchRegReq_MODE.REGISTER;
    case 2:
    case "CANCEL":
      return sc2sAutoMatchRegReq_MODE.CANCEL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return sc2sAutoMatchRegReq_MODE.UNRECOGNIZED;
  }
}

export function sc2sAutoMatchRegReq_MODEToJSON(object: sc2sAutoMatchRegReq_MODE): string {
  switch (object) {
    case sc2sAutoMatchRegReq_MODE.NONE:
      return "NONE";
    case sc2sAutoMatchRegReq_MODE.REGISTER:
      return "REGISTER";
    case sc2sAutoMatchRegReq_MODE.CANCEL:
      return "CANCEL";
    case sc2sAutoMatchRegReq_MODE.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ss2cAutoMatchRegRes {
  result: number;
}

export enum ss2cAutoMatchRegRes_RESULT {
  NONE = 0,
  SUCCESS = 1,
  FAIL = 2,
  FAIL_ALREADY_TRYING = 3,
  FAIL_NO_READY_PARTY_MEMBER = 4,
  FAIL_REGION_SELECT = 5,
  FAIL_SERVER_DISABLE = 6,
  FAIL_SHORTAGE_ENTRANCE_FEE = 7,
  FAIL_SOLO_ONLY = 8,
  FAIL_SHORTAGE_LEVEL = 9,
  UNRECOGNIZED = -1,
}

export function ss2cAutoMatchRegRes_RESULTFromJSON(object: any): ss2cAutoMatchRegRes_RESULT {
  switch (object) {
    case 0:
    case "NONE":
      return ss2cAutoMatchRegRes_RESULT.NONE;
    case 1:
    case "SUCCESS":
      return ss2cAutoMatchRegRes_RESULT.SUCCESS;
    case 2:
    case "FAIL":
      return ss2cAutoMatchRegRes_RESULT.FAIL;
    case 3:
    case "FAIL_ALREADY_TRYING":
      return ss2cAutoMatchRegRes_RESULT.FAIL_ALREADY_TRYING;
    case 4:
    case "FAIL_NO_READY_PARTY_MEMBER":
      return ss2cAutoMatchRegRes_RESULT.FAIL_NO_READY_PARTY_MEMBER;
    case 5:
    case "FAIL_REGION_SELECT":
      return ss2cAutoMatchRegRes_RESULT.FAIL_REGION_SELECT;
    case 6:
    case "FAIL_SERVER_DISABLE":
      return ss2cAutoMatchRegRes_RESULT.FAIL_SERVER_DISABLE;
    case 7:
    case "FAIL_SHORTAGE_ENTRANCE_FEE":
      return ss2cAutoMatchRegRes_RESULT.FAIL_SHORTAGE_ENTRANCE_FEE;
    case 8:
    case "FAIL_SOLO_ONLY":
      return ss2cAutoMatchRegRes_RESULT.FAIL_SOLO_ONLY;
    case 9:
    case "FAIL_SHORTAGE_LEVEL":
      return ss2cAutoMatchRegRes_RESULT.FAIL_SHORTAGE_LEVEL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ss2cAutoMatchRegRes_RESULT.UNRECOGNIZED;
  }
}

export function ss2cAutoMatchRegRes_RESULTToJSON(object: ss2cAutoMatchRegRes_RESULT): string {
  switch (object) {
    case ss2cAutoMatchRegRes_RESULT.NONE:
      return "NONE";
    case ss2cAutoMatchRegRes_RESULT.SUCCESS:
      return "SUCCESS";
    case ss2cAutoMatchRegRes_RESULT.FAIL:
      return "FAIL";
    case ss2cAutoMatchRegRes_RESULT.FAIL_ALREADY_TRYING:
      return "FAIL_ALREADY_TRYING";
    case ss2cAutoMatchRegRes_RESULT.FAIL_NO_READY_PARTY_MEMBER:
      return "FAIL_NO_READY_PARTY_MEMBER";
    case ss2cAutoMatchRegRes_RESULT.FAIL_REGION_SELECT:
      return "FAIL_REGION_SELECT";
    case ss2cAutoMatchRegRes_RESULT.FAIL_SERVER_DISABLE:
      return "FAIL_SERVER_DISABLE";
    case ss2cAutoMatchRegRes_RESULT.FAIL_SHORTAGE_ENTRANCE_FEE:
      return "FAIL_SHORTAGE_ENTRANCE_FEE";
    case ss2cAutoMatchRegRes_RESULT.FAIL_SOLO_ONLY:
      return "FAIL_SOLO_ONLY";
    case ss2cAutoMatchRegRes_RESULT.FAIL_SHORTAGE_LEVEL:
      return "FAIL_SHORTAGE_LEVEL";
    case ss2cAutoMatchRegRes_RESULT.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface sc2sGameEnterCompleteNot {
  isSuccess: number;
}

export interface ss2cAutoMatchRegTeamNot {
  result: number;
  mode: number;
}

export interface sc2sReconnectIngameReq {
  isRefusal: number;
  nickName: saccountNickname | undefined;
}

export interface ss2cReconnectIngameRes {
  result: number;
  serviceUrl: string;
}

export interface ss2cFloorMatchmakedNot {
  port: number;
  ip: string;
  sessionId: string;
}

function createBasess2cEnterGameServerNot(): ss2cEnterGameServerNot {
  return { port: 0, ip: "", sessionId: "", accountId: "", isReconnect: 0, nickName: undefined };
}

export const ss2cEnterGameServerNot = {
  encode(message: ss2cEnterGameServerNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port !== 0) {
      writer.uint32(8).uint32(message.port);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.sessionId !== "") {
      writer.uint32(26).string(message.sessionId);
    }
    if (message.accountId !== "") {
      writer.uint32(34).string(message.accountId);
    }
    if (message.isReconnect !== 0) {
      writer.uint32(40).uint32(message.isReconnect);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cEnterGameServerNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cEnterGameServerNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.port = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.ip = reader.string();
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
        case 5:
          if (tag != 40) {
            break;
          }

          message.isReconnect = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cEnterGameServerNot {
    return {
      port: isSet(object.port) ? Number(object.port) : 0,
      ip: isSet(object.ip) ? String(object.ip) : "",
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      isReconnect: isSet(object.isReconnect) ? Number(object.isReconnect) : 0,
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
    };
  },

  toJSON(message: ss2cEnterGameServerNot): unknown {
    const obj: any = {};
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.ip !== undefined && (obj.ip = message.ip);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.isReconnect !== undefined && (obj.isReconnect = Math.round(message.isReconnect));
    message.nickName !== undefined &&
      (obj.nickName = message.nickName ? saccountNickname.toJSON(message.nickName) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cEnterGameServerNot>, I>>(base?: I): ss2cEnterGameServerNot {
    return ss2cEnterGameServerNot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cEnterGameServerNot>, I>>(object: I): ss2cEnterGameServerNot {
    const message = createBasess2cEnterGameServerNot();
    message.port = object.port ?? 0;
    message.ip = object.ip ?? "";
    message.sessionId = object.sessionId ?? "";
    message.accountId = object.accountId ?? "";
    message.isReconnect = object.isReconnect ?? 0;
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    return message;
  },
};

function createBasesc2sAutoMatchRegReq(): sc2sAutoMatchRegReq {
  return { mode: 0, region: 0, difficultyType: 0 };
}

export const sc2sAutoMatchRegReq = {
  encode(message: sc2sAutoMatchRegReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).uint32(message.mode);
    }
    if (message.region !== 0) {
      writer.uint32(16).uint32(message.region);
    }
    if (message.difficultyType !== 0) {
      writer.uint32(24).uint32(message.difficultyType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sAutoMatchRegReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sAutoMatchRegReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.mode = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.region = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.difficultyType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sAutoMatchRegReq {
    return {
      mode: isSet(object.mode) ? Number(object.mode) : 0,
      region: isSet(object.region) ? Number(object.region) : 0,
      difficultyType: isSet(object.difficultyType) ? Number(object.difficultyType) : 0,
    };
  },

  toJSON(message: sc2sAutoMatchRegReq): unknown {
    const obj: any = {};
    message.mode !== undefined && (obj.mode = Math.round(message.mode));
    message.region !== undefined && (obj.region = Math.round(message.region));
    message.difficultyType !== undefined && (obj.difficultyType = Math.round(message.difficultyType));
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sAutoMatchRegReq>, I>>(base?: I): sc2sAutoMatchRegReq {
    return sc2sAutoMatchRegReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sAutoMatchRegReq>, I>>(object: I): sc2sAutoMatchRegReq {
    const message = createBasesc2sAutoMatchRegReq();
    message.mode = object.mode ?? 0;
    message.region = object.region ?? 0;
    message.difficultyType = object.difficultyType ?? 0;
    return message;
  },
};

function createBasess2cAutoMatchRegRes(): ss2cAutoMatchRegRes {
  return { result: 0 };
}

export const ss2cAutoMatchRegRes = {
  encode(message: ss2cAutoMatchRegRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cAutoMatchRegRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cAutoMatchRegRes();
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

  fromJSON(object: any): ss2cAutoMatchRegRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cAutoMatchRegRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cAutoMatchRegRes>, I>>(base?: I): ss2cAutoMatchRegRes {
    return ss2cAutoMatchRegRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cAutoMatchRegRes>, I>>(object: I): ss2cAutoMatchRegRes {
    const message = createBasess2cAutoMatchRegRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sGameEnterCompleteNot(): sc2sGameEnterCompleteNot {
  return { isSuccess: 0 };
}

export const sc2sGameEnterCompleteNot = {
  encode(message: sc2sGameEnterCompleteNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isSuccess !== 0) {
      writer.uint32(8).uint32(message.isSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sGameEnterCompleteNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sGameEnterCompleteNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isSuccess = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sGameEnterCompleteNot {
    return { isSuccess: isSet(object.isSuccess) ? Number(object.isSuccess) : 0 };
  },

  toJSON(message: sc2sGameEnterCompleteNot): unknown {
    const obj: any = {};
    message.isSuccess !== undefined && (obj.isSuccess = Math.round(message.isSuccess));
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sGameEnterCompleteNot>, I>>(base?: I): sc2sGameEnterCompleteNot {
    return sc2sGameEnterCompleteNot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sGameEnterCompleteNot>, I>>(object: I): sc2sGameEnterCompleteNot {
    const message = createBasesc2sGameEnterCompleteNot();
    message.isSuccess = object.isSuccess ?? 0;
    return message;
  },
};

function createBasess2cAutoMatchRegTeamNot(): ss2cAutoMatchRegTeamNot {
  return { result: 0, mode: 0 };
}

export const ss2cAutoMatchRegTeamNot = {
  encode(message: ss2cAutoMatchRegTeamNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.mode !== 0) {
      writer.uint32(16).uint32(message.mode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cAutoMatchRegTeamNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cAutoMatchRegTeamNot();
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

          message.mode = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cAutoMatchRegTeamNot {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      mode: isSet(object.mode) ? Number(object.mode) : 0,
    };
  },

  toJSON(message: ss2cAutoMatchRegTeamNot): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.mode !== undefined && (obj.mode = Math.round(message.mode));
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cAutoMatchRegTeamNot>, I>>(base?: I): ss2cAutoMatchRegTeamNot {
    return ss2cAutoMatchRegTeamNot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cAutoMatchRegTeamNot>, I>>(object: I): ss2cAutoMatchRegTeamNot {
    const message = createBasess2cAutoMatchRegTeamNot();
    message.result = object.result ?? 0;
    message.mode = object.mode ?? 0;
    return message;
  },
};

function createBasesc2sReconnectIngameReq(): sc2sReconnectIngameReq {
  return { isRefusal: 0, nickName: undefined };
}

export const sc2sReconnectIngameReq = {
  encode(message: sc2sReconnectIngameReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isRefusal !== 0) {
      writer.uint32(8).uint32(message.isRefusal);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sReconnectIngameReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sReconnectIngameReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isRefusal = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sReconnectIngameReq {
    return {
      isRefusal: isSet(object.isRefusal) ? Number(object.isRefusal) : 0,
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
    };
  },

  toJSON(message: sc2sReconnectIngameReq): unknown {
    const obj: any = {};
    message.isRefusal !== undefined && (obj.isRefusal = Math.round(message.isRefusal));
    message.nickName !== undefined &&
      (obj.nickName = message.nickName ? saccountNickname.toJSON(message.nickName) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sReconnectIngameReq>, I>>(base?: I): sc2sReconnectIngameReq {
    return sc2sReconnectIngameReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sReconnectIngameReq>, I>>(object: I): sc2sReconnectIngameReq {
    const message = createBasesc2sReconnectIngameReq();
    message.isRefusal = object.isRefusal ?? 0;
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    return message;
  },
};

function createBasess2cReconnectIngameRes(): ss2cReconnectIngameRes {
  return { result: 0, serviceUrl: "" };
}

export const ss2cReconnectIngameRes = {
  encode(message: ss2cReconnectIngameRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.serviceUrl !== "") {
      writer.uint32(18).string(message.serviceUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cReconnectIngameRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cReconnectIngameRes();
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

  fromJSON(object: any): ss2cReconnectIngameRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      serviceUrl: isSet(object.serviceUrl) ? String(object.serviceUrl) : "",
    };
  },

  toJSON(message: ss2cReconnectIngameRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.serviceUrl !== undefined && (obj.serviceUrl = message.serviceUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cReconnectIngameRes>, I>>(base?: I): ss2cReconnectIngameRes {
    return ss2cReconnectIngameRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cReconnectIngameRes>, I>>(object: I): ss2cReconnectIngameRes {
    const message = createBasess2cReconnectIngameRes();
    message.result = object.result ?? 0;
    message.serviceUrl = object.serviceUrl ?? "";
    return message;
  },
};

function createBasess2cFloorMatchmakedNot(): ss2cFloorMatchmakedNot {
  return { port: 0, ip: "", sessionId: "" };
}

export const ss2cFloorMatchmakedNot = {
  encode(message: ss2cFloorMatchmakedNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port !== 0) {
      writer.uint32(8).uint32(message.port);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.sessionId !== "") {
      writer.uint32(26).string(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFloorMatchmakedNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFloorMatchmakedNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.port = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.sessionId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cFloorMatchmakedNot {
    return {
      port: isSet(object.port) ? Number(object.port) : 0,
      ip: isSet(object.ip) ? String(object.ip) : "",
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
    };
  },

  toJSON(message: ss2cFloorMatchmakedNot): unknown {
    const obj: any = {};
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.ip !== undefined && (obj.ip = message.ip);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFloorMatchmakedNot>, I>>(base?: I): ss2cFloorMatchmakedNot {
    return ss2cFloorMatchmakedNot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cFloorMatchmakedNot>, I>>(object: I): ss2cFloorMatchmakedNot {
    const message = createBasess2cFloorMatchmakedNot();
    message.port = object.port ?? 0;
    message.ip = object.ip ?? "";
    message.sessionId = object.sessionId ?? "";
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
