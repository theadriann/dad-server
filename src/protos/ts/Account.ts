/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { saccountNickname } from "./_Character";
import { SItem } from "./_Item";

export const protobufPackage = "DC.Packet";

export interface sloginAccountInfo {
  AccountID: string;
}

export interface sloginCharacterInfo {
  characterId: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
  createAt: number;
  gender: number;
  level: number;
  lastloginDate: number;
  equipItemList: SItem[];
  equipCharacterSkinList: string[];
  equipItemSkinList: string[];
}

export interface sc2sAccountLoginReq {
  loginId: string;
  password: string;
  ipAddress: string;
  steamBuildId: number;
  hwIds: string[];
  macAddress: string;
  platformId: number;
  buildVersion: string;
}

export interface ss2cAccountLoginRes {
  Result: number;
  AccountInfo: sloginAccountInfo | undefined;
  isReconnect: number;
  address: string;
  sessionId: string;
  accountId: string;
  serverLocation: number;
  secretToken: string;
}

export enum ss2cAccountLoginRes_RESULT {
  RESULT_NONE = 0,
  SUCCESS = 1,
  SUCCESS_FIRST = 2,
  FAIL_PASSWORD = 3,
  FAIL_CONNECT = 4,
  FAIL_SHORT_ID_OR_PASSWORD = 5,
  FAIL_OVERFLOW_ID_OR_PASSWORD = 6,
  FAIL_IP_PORT = 7,
  FAIL_OVERLAP_LOGIN = 8,
  FAIL_STEAM_BUILD_ID = 11,
  FAIL_LOGIN_BAN_USER = 12,
  FAIL_LOGIN_BAN_USER_CHEATER = 13,
  FAIL_LOGIN_BAN_USER_INAPPROPRIATE_NAME = 14,
  FAIL_LOGIN_BAN_USER_ETC = 15,
  FAIL_LOGIN_BAN_HARDWARE = 16,
  FAIL_BUILD_VERSION_ID = 41,
  SUCCESS_AGREE_CHECK_RES = 51,
  UNRECOGNIZED = -1,
}

export function ss2cAccountLoginRes_RESULTFromJSON(object: any): ss2cAccountLoginRes_RESULT {
  switch (object) {
    case 0:
    case "RESULT_NONE":
      return ss2cAccountLoginRes_RESULT.RESULT_NONE;
    case 1:
    case "SUCCESS":
      return ss2cAccountLoginRes_RESULT.SUCCESS;
    case 2:
    case "SUCCESS_FIRST":
      return ss2cAccountLoginRes_RESULT.SUCCESS_FIRST;
    case 3:
    case "FAIL_PASSWORD":
      return ss2cAccountLoginRes_RESULT.FAIL_PASSWORD;
    case 4:
    case "FAIL_CONNECT":
      return ss2cAccountLoginRes_RESULT.FAIL_CONNECT;
    case 5:
    case "FAIL_SHORT_ID_OR_PASSWORD":
      return ss2cAccountLoginRes_RESULT.FAIL_SHORT_ID_OR_PASSWORD;
    case 6:
    case "FAIL_OVERFLOW_ID_OR_PASSWORD":
      return ss2cAccountLoginRes_RESULT.FAIL_OVERFLOW_ID_OR_PASSWORD;
    case 7:
    case "FAIL_IP_PORT":
      return ss2cAccountLoginRes_RESULT.FAIL_IP_PORT;
    case 8:
    case "FAIL_OVERLAP_LOGIN":
      return ss2cAccountLoginRes_RESULT.FAIL_OVERLAP_LOGIN;
    case 11:
    case "FAIL_STEAM_BUILD_ID":
      return ss2cAccountLoginRes_RESULT.FAIL_STEAM_BUILD_ID;
    case 12:
    case "FAIL_LOGIN_BAN_USER":
      return ss2cAccountLoginRes_RESULT.FAIL_LOGIN_BAN_USER;
    case 13:
    case "FAIL_LOGIN_BAN_USER_CHEATER":
      return ss2cAccountLoginRes_RESULT.FAIL_LOGIN_BAN_USER_CHEATER;
    case 14:
    case "FAIL_LOGIN_BAN_USER_INAPPROPRIATE_NAME":
      return ss2cAccountLoginRes_RESULT.FAIL_LOGIN_BAN_USER_INAPPROPRIATE_NAME;
    case 15:
    case "FAIL_LOGIN_BAN_USER_ETC":
      return ss2cAccountLoginRes_RESULT.FAIL_LOGIN_BAN_USER_ETC;
    case 16:
    case "FAIL_LOGIN_BAN_HARDWARE":
      return ss2cAccountLoginRes_RESULT.FAIL_LOGIN_BAN_HARDWARE;
    case 41:
    case "FAIL_BUILD_VERSION_ID":
      return ss2cAccountLoginRes_RESULT.FAIL_BUILD_VERSION_ID;
    case 51:
    case "SUCCESS_AGREE_CHECK_RES":
      return ss2cAccountLoginRes_RESULT.SUCCESS_AGREE_CHECK_RES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ss2cAccountLoginRes_RESULT.UNRECOGNIZED;
  }
}

export function ss2cAccountLoginRes_RESULTToJSON(object: ss2cAccountLoginRes_RESULT): string {
  switch (object) {
    case ss2cAccountLoginRes_RESULT.RESULT_NONE:
      return "RESULT_NONE";
    case ss2cAccountLoginRes_RESULT.SUCCESS:
      return "SUCCESS";
    case ss2cAccountLoginRes_RESULT.SUCCESS_FIRST:
      return "SUCCESS_FIRST";
    case ss2cAccountLoginRes_RESULT.FAIL_PASSWORD:
      return "FAIL_PASSWORD";
    case ss2cAccountLoginRes_RESULT.FAIL_CONNECT:
      return "FAIL_CONNECT";
    case ss2cAccountLoginRes_RESULT.FAIL_SHORT_ID_OR_PASSWORD:
      return "FAIL_SHORT_ID_OR_PASSWORD";
    case ss2cAccountLoginRes_RESULT.FAIL_OVERFLOW_ID_OR_PASSWORD:
      return "FAIL_OVERFLOW_ID_OR_PASSWORD";
    case ss2cAccountLoginRes_RESULT.FAIL_IP_PORT:
      return "FAIL_IP_PORT";
    case ss2cAccountLoginRes_RESULT.FAIL_OVERLAP_LOGIN:
      return "FAIL_OVERLAP_LOGIN";
    case ss2cAccountLoginRes_RESULT.FAIL_STEAM_BUILD_ID:
      return "FAIL_STEAM_BUILD_ID";
    case ss2cAccountLoginRes_RESULT.FAIL_LOGIN_BAN_USER:
      return "FAIL_LOGIN_BAN_USER";
    case ss2cAccountLoginRes_RESULT.FAIL_LOGIN_BAN_USER_CHEATER:
      return "FAIL_LOGIN_BAN_USER_CHEATER";
    case ss2cAccountLoginRes_RESULT.FAIL_LOGIN_BAN_USER_INAPPROPRIATE_NAME:
      return "FAIL_LOGIN_BAN_USER_INAPPROPRIATE_NAME";
    case ss2cAccountLoginRes_RESULT.FAIL_LOGIN_BAN_USER_ETC:
      return "FAIL_LOGIN_BAN_USER_ETC";
    case ss2cAccountLoginRes_RESULT.FAIL_LOGIN_BAN_HARDWARE:
      return "FAIL_LOGIN_BAN_HARDWARE";
    case ss2cAccountLoginRes_RESULT.FAIL_BUILD_VERSION_ID:
      return "FAIL_BUILD_VERSION_ID";
    case ss2cAccountLoginRes_RESULT.SUCCESS_AGREE_CHECK_RES:
      return "SUCCESS_AGREE_CHECK_RES";
    case ss2cAccountLoginRes_RESULT.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface sc2sAccountCharacterCreateReq {
  nickName: string;
  characterClass: string;
  gender: number;
}

export interface ss2cAccountCharacterCreateRes {
  result: number;
}

export interface sc2sAccountCharacterListReq {
  pageIndex: number;
  pageCapacity: number;
}

export interface ss2cAccountCharacterListRes {
  totalCharacterCount: number;
  pageIndex: number;
  characterList: sloginCharacterInfo[];
}

export interface sc2sAccountCharacterDeleteReq {
  characterId: string;
}

export interface ss2cAccountCharacterDeleteRes {
  result: number;
}

export interface sc2sLobbyEnterReq {
  characterId: string;
}

export interface ss2cLobbyEnterRes {
  result: number;
  accountId: string;
}

export interface sc2sAccountAgreeAnswerReq {
  isAgree: number;
}

export interface ss2cAccountAgreeAnswerRes {
  result: number;
}

function createBasesloginAccountInfo(): sloginAccountInfo {
  return { AccountID: "" };
}

export const sloginAccountInfo = {
  encode(message: sloginAccountInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.AccountID !== "") {
      writer.uint32(10).string(message.AccountID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sloginAccountInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesloginAccountInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.AccountID = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sloginAccountInfo {
    return { AccountID: isSet(object.AccountID) ? String(object.AccountID) : "" };
  },

  toJSON(message: sloginAccountInfo): unknown {
    const obj: any = {};
    message.AccountID !== undefined && (obj.AccountID = message.AccountID);
    return obj;
  },

  create<I extends Exact<DeepPartial<sloginAccountInfo>, I>>(base?: I): sloginAccountInfo {
    return sloginAccountInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sloginAccountInfo>, I>>(object: I): sloginAccountInfo {
    const message = createBasesloginAccountInfo();
    message.AccountID = object.AccountID ?? "";
    return message;
  },
};

function createBasesloginCharacterInfo(): sloginCharacterInfo {
  return {
    characterId: "",
    nickName: undefined,
    characterClass: "",
    createAt: 0,
    gender: 0,
    level: 0,
    lastloginDate: 0,
    equipItemList: [],
    equipCharacterSkinList: [],
    equipItemSkinList: [],
  };
}

export const sloginCharacterInfo = {
  encode(message: sloginCharacterInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.characterId !== "") {
      writer.uint32(10).string(message.characterId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(18).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(26).string(message.characterClass);
    }
    if (message.createAt !== 0) {
      writer.uint32(32).uint64(message.createAt);
    }
    if (message.gender !== 0) {
      writer.uint32(40).uint32(message.gender);
    }
    if (message.level !== 0) {
      writer.uint32(48).uint32(message.level);
    }
    if (message.lastloginDate !== 0) {
      writer.uint32(56).uint64(message.lastloginDate);
    }
    for (const v of message.equipItemList) {
      SItem.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.equipCharacterSkinList) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.equipItemSkinList) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sloginCharacterInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesloginCharacterInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.createAt = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.gender = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.lastloginDate = longToNumber(reader.uint64() as Long);
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.equipItemList.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.equipCharacterSkinList.push(reader.string());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.equipItemSkinList.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sloginCharacterInfo {
    return {
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
      gender: isSet(object.gender) ? Number(object.gender) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      lastloginDate: isSet(object.lastloginDate) ? Number(object.lastloginDate) : 0,
      equipItemList: Array.isArray(object?.equipItemList)
        ? object.equipItemList.map((e: any) => SItem.fromJSON(e))
        : [],
      equipCharacterSkinList: Array.isArray(object?.equipCharacterSkinList)
        ? object.equipCharacterSkinList.map((e: any) => String(e))
        : [],
      equipItemSkinList: Array.isArray(object?.equipItemSkinList)
        ? object.equipItemSkinList.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: sloginCharacterInfo): unknown {
    const obj: any = {};
    message.characterId !== undefined && (obj.characterId = message.characterId);
    message.nickName !== undefined &&
      (obj.nickName = message.nickName ? saccountNickname.toJSON(message.nickName) : undefined);
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    message.createAt !== undefined && (obj.createAt = Math.round(message.createAt));
    message.gender !== undefined && (obj.gender = Math.round(message.gender));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.lastloginDate !== undefined && (obj.lastloginDate = Math.round(message.lastloginDate));
    if (message.equipItemList) {
      obj.equipItemList = message.equipItemList.map((e) => e ? SItem.toJSON(e) : undefined);
    } else {
      obj.equipItemList = [];
    }
    if (message.equipCharacterSkinList) {
      obj.equipCharacterSkinList = message.equipCharacterSkinList.map((e) => e);
    } else {
      obj.equipCharacterSkinList = [];
    }
    if (message.equipItemSkinList) {
      obj.equipItemSkinList = message.equipItemSkinList.map((e) => e);
    } else {
      obj.equipItemSkinList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sloginCharacterInfo>, I>>(base?: I): sloginCharacterInfo {
    return sloginCharacterInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sloginCharacterInfo>, I>>(object: I): sloginCharacterInfo {
    const message = createBasesloginCharacterInfo();
    message.characterId = object.characterId ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    message.createAt = object.createAt ?? 0;
    message.gender = object.gender ?? 0;
    message.level = object.level ?? 0;
    message.lastloginDate = object.lastloginDate ?? 0;
    message.equipItemList = object.equipItemList?.map((e) => SItem.fromPartial(e)) || [];
    message.equipCharacterSkinList = object.equipCharacterSkinList?.map((e) => e) || [];
    message.equipItemSkinList = object.equipItemSkinList?.map((e) => e) || [];
    return message;
  },
};

function createBasesc2sAccountLoginReq(): sc2sAccountLoginReq {
  return {
    loginId: "",
    password: "",
    ipAddress: "",
    steamBuildId: 0,
    hwIds: [],
    macAddress: "",
    platformId: 0,
    buildVersion: "",
  };
}

export const sc2sAccountLoginReq = {
  encode(message: sc2sAccountLoginReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loginId !== "") {
      writer.uint32(10).string(message.loginId);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.ipAddress !== "") {
      writer.uint32(26).string(message.ipAddress);
    }
    if (message.steamBuildId !== 0) {
      writer.uint32(32).uint32(message.steamBuildId);
    }
    for (const v of message.hwIds) {
      writer.uint32(42).string(v!);
    }
    if (message.macAddress !== "") {
      writer.uint32(50).string(message.macAddress);
    }
    if (message.platformId !== 0) {
      writer.uint32(56).uint32(message.platformId);
    }
    if (message.buildVersion !== "") {
      writer.uint32(66).string(message.buildVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sAccountLoginReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sAccountLoginReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.loginId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.password = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.ipAddress = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.steamBuildId = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.hwIds.push(reader.string());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.macAddress = reader.string();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.platformId = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.buildVersion = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sAccountLoginReq {
    return {
      loginId: isSet(object.loginId) ? String(object.loginId) : "",
      password: isSet(object.password) ? String(object.password) : "",
      ipAddress: isSet(object.ipAddress) ? String(object.ipAddress) : "",
      steamBuildId: isSet(object.steamBuildId) ? Number(object.steamBuildId) : 0,
      hwIds: Array.isArray(object?.hwIds) ? object.hwIds.map((e: any) => String(e)) : [],
      macAddress: isSet(object.macAddress) ? String(object.macAddress) : "",
      platformId: isSet(object.platformId) ? Number(object.platformId) : 0,
      buildVersion: isSet(object.buildVersion) ? String(object.buildVersion) : "",
    };
  },

  toJSON(message: sc2sAccountLoginReq): unknown {
    const obj: any = {};
    message.loginId !== undefined && (obj.loginId = message.loginId);
    message.password !== undefined && (obj.password = message.password);
    message.ipAddress !== undefined && (obj.ipAddress = message.ipAddress);
    message.steamBuildId !== undefined && (obj.steamBuildId = Math.round(message.steamBuildId));
    if (message.hwIds) {
      obj.hwIds = message.hwIds.map((e) => e);
    } else {
      obj.hwIds = [];
    }
    message.macAddress !== undefined && (obj.macAddress = message.macAddress);
    message.platformId !== undefined && (obj.platformId = Math.round(message.platformId));
    message.buildVersion !== undefined && (obj.buildVersion = message.buildVersion);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sAccountLoginReq>, I>>(base?: I): sc2sAccountLoginReq {
    return sc2sAccountLoginReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sAccountLoginReq>, I>>(object: I): sc2sAccountLoginReq {
    const message = createBasesc2sAccountLoginReq();
    message.loginId = object.loginId ?? "";
    message.password = object.password ?? "";
    message.ipAddress = object.ipAddress ?? "";
    message.steamBuildId = object.steamBuildId ?? 0;
    message.hwIds = object.hwIds?.map((e) => e) || [];
    message.macAddress = object.macAddress ?? "";
    message.platformId = object.platformId ?? 0;
    message.buildVersion = object.buildVersion ?? "";
    return message;
  },
};

function createBasess2cAccountLoginRes(): ss2cAccountLoginRes {
  return {
    Result: 0,
    AccountInfo: undefined,
    isReconnect: 0,
    address: "",
    sessionId: "",
    accountId: "",
    serverLocation: 0,
    secretToken: "",
  };
}

export const ss2cAccountLoginRes = {
  encode(message: ss2cAccountLoginRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Result !== 0) {
      writer.uint32(8).uint32(message.Result);
    }
    if (message.AccountInfo !== undefined) {
      sloginAccountInfo.encode(message.AccountInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.isReconnect !== 0) {
      writer.uint32(24).uint32(message.isReconnect);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.sessionId !== "") {
      writer.uint32(42).string(message.sessionId);
    }
    if (message.accountId !== "") {
      writer.uint32(50).string(message.accountId);
    }
    if (message.serverLocation !== 0) {
      writer.uint32(56).uint32(message.serverLocation);
    }
    if (message.secretToken !== "") {
      writer.uint32(66).string(message.secretToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cAccountLoginRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cAccountLoginRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.Result = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.AccountInfo = sloginAccountInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isReconnect = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.address = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.serverLocation = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.secretToken = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cAccountLoginRes {
    return {
      Result: isSet(object.Result) ? Number(object.Result) : 0,
      AccountInfo: isSet(object.AccountInfo) ? sloginAccountInfo.fromJSON(object.AccountInfo) : undefined,
      isReconnect: isSet(object.isReconnect) ? Number(object.isReconnect) : 0,
      address: isSet(object.address) ? String(object.address) : "",
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      serverLocation: isSet(object.serverLocation) ? Number(object.serverLocation) : 0,
      secretToken: isSet(object.secretToken) ? String(object.secretToken) : "",
    };
  },

  toJSON(message: ss2cAccountLoginRes): unknown {
    const obj: any = {};
    message.Result !== undefined && (obj.Result = Math.round(message.Result));
    message.AccountInfo !== undefined &&
      (obj.AccountInfo = message.AccountInfo ? sloginAccountInfo.toJSON(message.AccountInfo) : undefined);
    message.isReconnect !== undefined && (obj.isReconnect = Math.round(message.isReconnect));
    message.address !== undefined && (obj.address = message.address);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.serverLocation !== undefined && (obj.serverLocation = Math.round(message.serverLocation));
    message.secretToken !== undefined && (obj.secretToken = message.secretToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cAccountLoginRes>, I>>(base?: I): ss2cAccountLoginRes {
    return ss2cAccountLoginRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cAccountLoginRes>, I>>(object: I): ss2cAccountLoginRes {
    const message = createBasess2cAccountLoginRes();
    message.Result = object.Result ?? 0;
    message.AccountInfo = (object.AccountInfo !== undefined && object.AccountInfo !== null)
      ? sloginAccountInfo.fromPartial(object.AccountInfo)
      : undefined;
    message.isReconnect = object.isReconnect ?? 0;
    message.address = object.address ?? "";
    message.sessionId = object.sessionId ?? "";
    message.accountId = object.accountId ?? "";
    message.serverLocation = object.serverLocation ?? 0;
    message.secretToken = object.secretToken ?? "";
    return message;
  },
};

function createBasesc2sAccountCharacterCreateReq(): sc2sAccountCharacterCreateReq {
  return { nickName: "", characterClass: "", gender: 0 };
}

export const sc2sAccountCharacterCreateReq = {
  encode(message: sc2sAccountCharacterCreateReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nickName !== "") {
      writer.uint32(10).string(message.nickName);
    }
    if (message.characterClass !== "") {
      writer.uint32(18).string(message.characterClass);
    }
    if (message.gender !== 0) {
      writer.uint32(24).uint32(message.gender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sAccountCharacterCreateReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sAccountCharacterCreateReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.nickName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.gender = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sAccountCharacterCreateReq {
    return {
      nickName: isSet(object.nickName) ? String(object.nickName) : "",
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
    };
  },

  toJSON(message: sc2sAccountCharacterCreateReq): unknown {
    const obj: any = {};
    message.nickName !== undefined && (obj.nickName = message.nickName);
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    message.gender !== undefined && (obj.gender = Math.round(message.gender));
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sAccountCharacterCreateReq>, I>>(base?: I): sc2sAccountCharacterCreateReq {
    return sc2sAccountCharacterCreateReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sAccountCharacterCreateReq>, I>>(
    object: I,
  ): sc2sAccountCharacterCreateReq {
    const message = createBasesc2sAccountCharacterCreateReq();
    message.nickName = object.nickName ?? "";
    message.characterClass = object.characterClass ?? "";
    message.gender = object.gender ?? 0;
    return message;
  },
};

function createBasess2cAccountCharacterCreateRes(): ss2cAccountCharacterCreateRes {
  return { result: 0 };
}

export const ss2cAccountCharacterCreateRes = {
  encode(message: ss2cAccountCharacterCreateRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cAccountCharacterCreateRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cAccountCharacterCreateRes();
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

  fromJSON(object: any): ss2cAccountCharacterCreateRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cAccountCharacterCreateRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cAccountCharacterCreateRes>, I>>(base?: I): ss2cAccountCharacterCreateRes {
    return ss2cAccountCharacterCreateRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cAccountCharacterCreateRes>, I>>(
    object: I,
  ): ss2cAccountCharacterCreateRes {
    const message = createBasess2cAccountCharacterCreateRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sAccountCharacterListReq(): sc2sAccountCharacterListReq {
  return { pageIndex: 0, pageCapacity: 0 };
}

export const sc2sAccountCharacterListReq = {
  encode(message: sc2sAccountCharacterListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageIndex !== 0) {
      writer.uint32(8).uint32(message.pageIndex);
    }
    if (message.pageCapacity !== 0) {
      writer.uint32(16).uint32(message.pageCapacity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sAccountCharacterListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sAccountCharacterListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.pageIndex = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.pageCapacity = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sAccountCharacterListReq {
    return {
      pageIndex: isSet(object.pageIndex) ? Number(object.pageIndex) : 0,
      pageCapacity: isSet(object.pageCapacity) ? Number(object.pageCapacity) : 0,
    };
  },

  toJSON(message: sc2sAccountCharacterListReq): unknown {
    const obj: any = {};
    message.pageIndex !== undefined && (obj.pageIndex = Math.round(message.pageIndex));
    message.pageCapacity !== undefined && (obj.pageCapacity = Math.round(message.pageCapacity));
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sAccountCharacterListReq>, I>>(base?: I): sc2sAccountCharacterListReq {
    return sc2sAccountCharacterListReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sAccountCharacterListReq>, I>>(object: I): sc2sAccountCharacterListReq {
    const message = createBasesc2sAccountCharacterListReq();
    message.pageIndex = object.pageIndex ?? 0;
    message.pageCapacity = object.pageCapacity ?? 0;
    return message;
  },
};

function createBasess2cAccountCharacterListRes(): ss2cAccountCharacterListRes {
  return { totalCharacterCount: 0, pageIndex: 0, characterList: [] };
}

export const ss2cAccountCharacterListRes = {
  encode(message: ss2cAccountCharacterListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalCharacterCount !== 0) {
      writer.uint32(8).uint32(message.totalCharacterCount);
    }
    if (message.pageIndex !== 0) {
      writer.uint32(16).uint32(message.pageIndex);
    }
    for (const v of message.characterList) {
      sloginCharacterInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cAccountCharacterListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cAccountCharacterListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.totalCharacterCount = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.pageIndex = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.characterList.push(sloginCharacterInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cAccountCharacterListRes {
    return {
      totalCharacterCount: isSet(object.totalCharacterCount) ? Number(object.totalCharacterCount) : 0,
      pageIndex: isSet(object.pageIndex) ? Number(object.pageIndex) : 0,
      characterList: Array.isArray(object?.characterList)
        ? object.characterList.map((e: any) => sloginCharacterInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cAccountCharacterListRes): unknown {
    const obj: any = {};
    message.totalCharacterCount !== undefined && (obj.totalCharacterCount = Math.round(message.totalCharacterCount));
    message.pageIndex !== undefined && (obj.pageIndex = Math.round(message.pageIndex));
    if (message.characterList) {
      obj.characterList = message.characterList.map((e) => e ? sloginCharacterInfo.toJSON(e) : undefined);
    } else {
      obj.characterList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cAccountCharacterListRes>, I>>(base?: I): ss2cAccountCharacterListRes {
    return ss2cAccountCharacterListRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cAccountCharacterListRes>, I>>(object: I): ss2cAccountCharacterListRes {
    const message = createBasess2cAccountCharacterListRes();
    message.totalCharacterCount = object.totalCharacterCount ?? 0;
    message.pageIndex = object.pageIndex ?? 0;
    message.characterList = object.characterList?.map((e) => sloginCharacterInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sAccountCharacterDeleteReq(): sc2sAccountCharacterDeleteReq {
  return { characterId: "" };
}

export const sc2sAccountCharacterDeleteReq = {
  encode(message: sc2sAccountCharacterDeleteReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.characterId !== "") {
      writer.uint32(10).string(message.characterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sAccountCharacterDeleteReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sAccountCharacterDeleteReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.characterId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sAccountCharacterDeleteReq {
    return { characterId: isSet(object.characterId) ? String(object.characterId) : "" };
  },

  toJSON(message: sc2sAccountCharacterDeleteReq): unknown {
    const obj: any = {};
    message.characterId !== undefined && (obj.characterId = message.characterId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sAccountCharacterDeleteReq>, I>>(base?: I): sc2sAccountCharacterDeleteReq {
    return sc2sAccountCharacterDeleteReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sAccountCharacterDeleteReq>, I>>(
    object: I,
  ): sc2sAccountCharacterDeleteReq {
    const message = createBasesc2sAccountCharacterDeleteReq();
    message.characterId = object.characterId ?? "";
    return message;
  },
};

function createBasess2cAccountCharacterDeleteRes(): ss2cAccountCharacterDeleteRes {
  return { result: 0 };
}

export const ss2cAccountCharacterDeleteRes = {
  encode(message: ss2cAccountCharacterDeleteRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cAccountCharacterDeleteRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cAccountCharacterDeleteRes();
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

  fromJSON(object: any): ss2cAccountCharacterDeleteRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cAccountCharacterDeleteRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cAccountCharacterDeleteRes>, I>>(base?: I): ss2cAccountCharacterDeleteRes {
    return ss2cAccountCharacterDeleteRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cAccountCharacterDeleteRes>, I>>(
    object: I,
  ): ss2cAccountCharacterDeleteRes {
    const message = createBasess2cAccountCharacterDeleteRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sLobbyEnterReq(): sc2sLobbyEnterReq {
  return { characterId: "" };
}

export const sc2sLobbyEnterReq = {
  encode(message: sc2sLobbyEnterReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.characterId !== "") {
      writer.uint32(10).string(message.characterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sLobbyEnterReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sLobbyEnterReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.characterId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sLobbyEnterReq {
    return { characterId: isSet(object.characterId) ? String(object.characterId) : "" };
  },

  toJSON(message: sc2sLobbyEnterReq): unknown {
    const obj: any = {};
    message.characterId !== undefined && (obj.characterId = message.characterId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sLobbyEnterReq>, I>>(base?: I): sc2sLobbyEnterReq {
    return sc2sLobbyEnterReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sLobbyEnterReq>, I>>(object: I): sc2sLobbyEnterReq {
    const message = createBasesc2sLobbyEnterReq();
    message.characterId = object.characterId ?? "";
    return message;
  },
};

function createBasess2cLobbyEnterRes(): ss2cLobbyEnterRes {
  return { result: 0, accountId: "" };
}

export const ss2cLobbyEnterRes = {
  encode(message: ss2cLobbyEnterRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cLobbyEnterRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cLobbyEnterRes();
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

  fromJSON(object: any): ss2cLobbyEnterRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
    };
  },

  toJSON(message: ss2cLobbyEnterRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.accountId !== undefined && (obj.accountId = message.accountId);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyEnterRes>, I>>(base?: I): ss2cLobbyEnterRes {
    return ss2cLobbyEnterRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cLobbyEnterRes>, I>>(object: I): ss2cLobbyEnterRes {
    const message = createBasess2cLobbyEnterRes();
    message.result = object.result ?? 0;
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBasesc2sAccountAgreeAnswerReq(): sc2sAccountAgreeAnswerReq {
  return { isAgree: 0 };
}

export const sc2sAccountAgreeAnswerReq = {
  encode(message: sc2sAccountAgreeAnswerReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isAgree !== 0) {
      writer.uint32(8).uint32(message.isAgree);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sAccountAgreeAnswerReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sAccountAgreeAnswerReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isAgree = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sAccountAgreeAnswerReq {
    return { isAgree: isSet(object.isAgree) ? Number(object.isAgree) : 0 };
  },

  toJSON(message: sc2sAccountAgreeAnswerReq): unknown {
    const obj: any = {};
    message.isAgree !== undefined && (obj.isAgree = Math.round(message.isAgree));
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sAccountAgreeAnswerReq>, I>>(base?: I): sc2sAccountAgreeAnswerReq {
    return sc2sAccountAgreeAnswerReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sAccountAgreeAnswerReq>, I>>(object: I): sc2sAccountAgreeAnswerReq {
    const message = createBasesc2sAccountAgreeAnswerReq();
    message.isAgree = object.isAgree ?? 0;
    return message;
  },
};

function createBasess2cAccountAgreeAnswerRes(): ss2cAccountAgreeAnswerRes {
  return { result: 0 };
}

export const ss2cAccountAgreeAnswerRes = {
  encode(message: ss2cAccountAgreeAnswerRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cAccountAgreeAnswerRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cAccountAgreeAnswerRes();
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

  fromJSON(object: any): ss2cAccountAgreeAnswerRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cAccountAgreeAnswerRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cAccountAgreeAnswerRes>, I>>(base?: I): ss2cAccountAgreeAnswerRes {
    return ss2cAccountAgreeAnswerRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cAccountAgreeAnswerRes>, I>>(object: I): ss2cAccountAgreeAnswerRes {
    const message = createBasess2cAccountAgreeAnswerRes();
    message.result = object.result ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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
