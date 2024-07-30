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
  equipArmorSkinList: string[];
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
  banTimeBeginMs: number;
  banTimeEndMs: number;
  upgradeDate: string;
  upgradeTime: string;
  banReason: string;
  latencyToken: string;
  totalPlaytime: number;
  userLoginInfo: number;
  usePlatformLink: number;
  redirectionInfo: accountRedirectionInfo | undefined;
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
  FAIL_BAN = 12,
  FAIL_LOGIN_BAN_HARDWARE = 16,
  FAIL_UNDER_MAINTENANCE = 17,
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
    case "FAIL_BAN":
      return ss2cAccountLoginRes_RESULT.FAIL_BAN;
    case 16:
    case "FAIL_LOGIN_BAN_HARDWARE":
      return ss2cAccountLoginRes_RESULT.FAIL_LOGIN_BAN_HARDWARE;
    case 17:
    case "FAIL_UNDER_MAINTENANCE":
      return ss2cAccountLoginRes_RESULT.FAIL_UNDER_MAINTENANCE;
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
    case ss2cAccountLoginRes_RESULT.FAIL_BAN:
      return "FAIL_BAN";
    case ss2cAccountLoginRes_RESULT.FAIL_LOGIN_BAN_HARDWARE:
      return "FAIL_LOGIN_BAN_HARDWARE";
    case ss2cAccountLoginRes_RESULT.FAIL_UNDER_MAINTENANCE:
      return "FAIL_UNDER_MAINTENANCE";
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
  usePlatformLink: number;
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

export interface saccountCharacterClassInfo {
  characterClassId: string;
  shopId: string;
  isOwned: number;
}

export interface ss2cAccountCharacterClassListNot {
  characterClassList: saccountCharacterClassInfo[];
}

export interface sc2sUserHwInfoReq {
  os: string;
  cpu: string;
  gpu: string;
  gpuVersion: string;
  memory: string;
  storage: string;
  directX: string;
  osVersion: string;
}

export interface ss2cUserHwInfoRes {
}

export interface accountRedirectionInfo {
  generalReportUrl: string;
  banAppealUrl: string;
  knightLinkUrl: string;
  supportFaqUrl: string;
  homeUrl: string;
  newsUrl: string;
  suggestionUrl: string;
  officialDiscordUrl: string;
  bugReportUrl: string;
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
          if (tag !== 10) {
            break;
          }

          message.AccountID = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.AccountID !== "") {
      obj.AccountID = message.AccountID;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sloginAccountInfo>, I>>(base?: I): sloginAccountInfo {
    return sloginAccountInfo.fromPartial(base ?? ({} as any));
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
    equipArmorSkinList: [],
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
    for (const v of message.equipArmorSkinList) {
      writer.uint32(90).string(v!);
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
          if (tag !== 10) {
            break;
          }

          message.characterId = reader.string();
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

          message.characterClass = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.createAt = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gender = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.lastloginDate = longToNumber(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.equipItemList.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.equipCharacterSkinList.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.equipItemSkinList.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.equipArmorSkinList.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
      equipArmorSkinList: Array.isArray(object?.equipArmorSkinList)
        ? object.equipArmorSkinList.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: sloginCharacterInfo): unknown {
    const obj: any = {};
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    if (message.createAt !== 0) {
      obj.createAt = Math.round(message.createAt);
    }
    if (message.gender !== 0) {
      obj.gender = Math.round(message.gender);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.lastloginDate !== 0) {
      obj.lastloginDate = Math.round(message.lastloginDate);
    }
    if (message.equipItemList?.length) {
      obj.equipItemList = message.equipItemList.map((e) => SItem.toJSON(e));
    }
    if (message.equipCharacterSkinList?.length) {
      obj.equipCharacterSkinList = message.equipCharacterSkinList;
    }
    if (message.equipItemSkinList?.length) {
      obj.equipItemSkinList = message.equipItemSkinList;
    }
    if (message.equipArmorSkinList?.length) {
      obj.equipArmorSkinList = message.equipArmorSkinList;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sloginCharacterInfo>, I>>(base?: I): sloginCharacterInfo {
    return sloginCharacterInfo.fromPartial(base ?? ({} as any));
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
    message.equipArmorSkinList = object.equipArmorSkinList?.map((e) => e) || [];
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
          if (tag !== 10) {
            break;
          }

          message.loginId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ipAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.steamBuildId = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.hwIds.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.macAddress = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.platformId = reader.uint32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.buildVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.loginId !== "") {
      obj.loginId = message.loginId;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.ipAddress !== "") {
      obj.ipAddress = message.ipAddress;
    }
    if (message.steamBuildId !== 0) {
      obj.steamBuildId = Math.round(message.steamBuildId);
    }
    if (message.hwIds?.length) {
      obj.hwIds = message.hwIds;
    }
    if (message.macAddress !== "") {
      obj.macAddress = message.macAddress;
    }
    if (message.platformId !== 0) {
      obj.platformId = Math.round(message.platformId);
    }
    if (message.buildVersion !== "") {
      obj.buildVersion = message.buildVersion;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sAccountLoginReq>, I>>(base?: I): sc2sAccountLoginReq {
    return sc2sAccountLoginReq.fromPartial(base ?? ({} as any));
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
    banTimeBeginMs: 0,
    banTimeEndMs: 0,
    upgradeDate: "",
    upgradeTime: "",
    banReason: "",
    latencyToken: "",
    totalPlaytime: 0,
    userLoginInfo: 0,
    usePlatformLink: 0,
    redirectionInfo: undefined,
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
    if (message.banTimeBeginMs !== 0) {
      writer.uint32(72).uint64(message.banTimeBeginMs);
    }
    if (message.banTimeEndMs !== 0) {
      writer.uint32(80).uint64(message.banTimeEndMs);
    }
    if (message.upgradeDate !== "") {
      writer.uint32(90).string(message.upgradeDate);
    }
    if (message.upgradeTime !== "") {
      writer.uint32(98).string(message.upgradeTime);
    }
    if (message.banReason !== "") {
      writer.uint32(106).string(message.banReason);
    }
    if (message.latencyToken !== "") {
      writer.uint32(114).string(message.latencyToken);
    }
    if (message.totalPlaytime !== 0) {
      writer.uint32(120).uint64(message.totalPlaytime);
    }
    if (message.userLoginInfo !== 0) {
      writer.uint32(128).int32(message.userLoginInfo);
    }
    if (message.usePlatformLink !== 0) {
      writer.uint32(136).int32(message.usePlatformLink);
    }
    if (message.redirectionInfo !== undefined) {
      accountRedirectionInfo.encode(message.redirectionInfo, writer.uint32(146).fork()).ldelim();
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
          if (tag !== 8) {
            break;
          }

          message.Result = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.AccountInfo = sloginAccountInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isReconnect = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.address = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.serverLocation = reader.uint32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.secretToken = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.banTimeBeginMs = longToNumber(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.banTimeEndMs = longToNumber(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.upgradeDate = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.upgradeTime = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.banReason = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.latencyToken = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.totalPlaytime = longToNumber(reader.uint64() as Long);
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.userLoginInfo = reader.int32();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.usePlatformLink = reader.int32();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.redirectionInfo = accountRedirectionInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
      banTimeBeginMs: isSet(object.banTimeBeginMs) ? Number(object.banTimeBeginMs) : 0,
      banTimeEndMs: isSet(object.banTimeEndMs) ? Number(object.banTimeEndMs) : 0,
      upgradeDate: isSet(object.upgradeDate) ? String(object.upgradeDate) : "",
      upgradeTime: isSet(object.upgradeTime) ? String(object.upgradeTime) : "",
      banReason: isSet(object.banReason) ? String(object.banReason) : "",
      latencyToken: isSet(object.latencyToken) ? String(object.latencyToken) : "",
      totalPlaytime: isSet(object.totalPlaytime) ? Number(object.totalPlaytime) : 0,
      userLoginInfo: isSet(object.userLoginInfo) ? Number(object.userLoginInfo) : 0,
      usePlatformLink: isSet(object.usePlatformLink) ? Number(object.usePlatformLink) : 0,
      redirectionInfo: isSet(object.redirectionInfo)
        ? accountRedirectionInfo.fromJSON(object.redirectionInfo)
        : undefined,
    };
  },

  toJSON(message: ss2cAccountLoginRes): unknown {
    const obj: any = {};
    if (message.Result !== 0) {
      obj.Result = Math.round(message.Result);
    }
    if (message.AccountInfo !== undefined) {
      obj.AccountInfo = sloginAccountInfo.toJSON(message.AccountInfo);
    }
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
    if (message.serverLocation !== 0) {
      obj.serverLocation = Math.round(message.serverLocation);
    }
    if (message.secretToken !== "") {
      obj.secretToken = message.secretToken;
    }
    if (message.banTimeBeginMs !== 0) {
      obj.banTimeBeginMs = Math.round(message.banTimeBeginMs);
    }
    if (message.banTimeEndMs !== 0) {
      obj.banTimeEndMs = Math.round(message.banTimeEndMs);
    }
    if (message.upgradeDate !== "") {
      obj.upgradeDate = message.upgradeDate;
    }
    if (message.upgradeTime !== "") {
      obj.upgradeTime = message.upgradeTime;
    }
    if (message.banReason !== "") {
      obj.banReason = message.banReason;
    }
    if (message.latencyToken !== "") {
      obj.latencyToken = message.latencyToken;
    }
    if (message.totalPlaytime !== 0) {
      obj.totalPlaytime = Math.round(message.totalPlaytime);
    }
    if (message.userLoginInfo !== 0) {
      obj.userLoginInfo = Math.round(message.userLoginInfo);
    }
    if (message.usePlatformLink !== 0) {
      obj.usePlatformLink = Math.round(message.usePlatformLink);
    }
    if (message.redirectionInfo !== undefined) {
      obj.redirectionInfo = accountRedirectionInfo.toJSON(message.redirectionInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cAccountLoginRes>, I>>(base?: I): ss2cAccountLoginRes {
    return ss2cAccountLoginRes.fromPartial(base ?? ({} as any));
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
    message.banTimeBeginMs = object.banTimeBeginMs ?? 0;
    message.banTimeEndMs = object.banTimeEndMs ?? 0;
    message.upgradeDate = object.upgradeDate ?? "";
    message.upgradeTime = object.upgradeTime ?? "";
    message.banReason = object.banReason ?? "";
    message.latencyToken = object.latencyToken ?? "";
    message.totalPlaytime = object.totalPlaytime ?? 0;
    message.userLoginInfo = object.userLoginInfo ?? 0;
    message.usePlatformLink = object.usePlatformLink ?? 0;
    message.redirectionInfo = (object.redirectionInfo !== undefined && object.redirectionInfo !== null)
      ? accountRedirectionInfo.fromPartial(object.redirectionInfo)
      : undefined;
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
          if (tag !== 10) {
            break;
          }

          message.nickName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.gender = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.nickName !== "") {
      obj.nickName = message.nickName;
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    if (message.gender !== 0) {
      obj.gender = Math.round(message.gender);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sAccountCharacterCreateReq>, I>>(base?: I): sc2sAccountCharacterCreateReq {
    return sc2sAccountCharacterCreateReq.fromPartial(base ?? ({} as any));
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

  fromJSON(object: any): ss2cAccountCharacterCreateRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cAccountCharacterCreateRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cAccountCharacterCreateRes>, I>>(base?: I): ss2cAccountCharacterCreateRes {
    return ss2cAccountCharacterCreateRes.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.pageIndex = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageCapacity = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.pageIndex !== 0) {
      obj.pageIndex = Math.round(message.pageIndex);
    }
    if (message.pageCapacity !== 0) {
      obj.pageCapacity = Math.round(message.pageCapacity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sAccountCharacterListReq>, I>>(base?: I): sc2sAccountCharacterListReq {
    return sc2sAccountCharacterListReq.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.totalCharacterCount = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageIndex = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.characterList.push(sloginCharacterInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.totalCharacterCount !== 0) {
      obj.totalCharacterCount = Math.round(message.totalCharacterCount);
    }
    if (message.pageIndex !== 0) {
      obj.pageIndex = Math.round(message.pageIndex);
    }
    if (message.characterList?.length) {
      obj.characterList = message.characterList.map((e) => sloginCharacterInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cAccountCharacterListRes>, I>>(base?: I): ss2cAccountCharacterListRes {
    return ss2cAccountCharacterListRes.fromPartial(base ?? ({} as any));
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
          if (tag !== 10) {
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

  fromJSON(object: any): sc2sAccountCharacterDeleteReq {
    return { characterId: isSet(object.characterId) ? String(object.characterId) : "" };
  },

  toJSON(message: sc2sAccountCharacterDeleteReq): unknown {
    const obj: any = {};
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sAccountCharacterDeleteReq>, I>>(base?: I): sc2sAccountCharacterDeleteReq {
    return sc2sAccountCharacterDeleteReq.fromPartial(base ?? ({} as any));
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
  return { result: 0, usePlatformLink: 0 };
}

export const ss2cAccountCharacterDeleteRes = {
  encode(message: ss2cAccountCharacterDeleteRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.usePlatformLink !== 0) {
      writer.uint32(16).uint32(message.usePlatformLink);
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
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.usePlatformLink = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cAccountCharacterDeleteRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      usePlatformLink: isSet(object.usePlatformLink) ? Number(object.usePlatformLink) : 0,
    };
  },

  toJSON(message: ss2cAccountCharacterDeleteRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.usePlatformLink !== 0) {
      obj.usePlatformLink = Math.round(message.usePlatformLink);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cAccountCharacterDeleteRes>, I>>(base?: I): ss2cAccountCharacterDeleteRes {
    return ss2cAccountCharacterDeleteRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cAccountCharacterDeleteRes>, I>>(
    object: I,
  ): ss2cAccountCharacterDeleteRes {
    const message = createBasess2cAccountCharacterDeleteRes();
    message.result = object.result ?? 0;
    message.usePlatformLink = object.usePlatformLink ?? 0;
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
          if (tag !== 10) {
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

  fromJSON(object: any): sc2sLobbyEnterReq {
    return { characterId: isSet(object.characterId) ? String(object.characterId) : "" };
  },

  toJSON(message: sc2sLobbyEnterReq): unknown {
    const obj: any = {};
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sLobbyEnterReq>, I>>(base?: I): sc2sLobbyEnterReq {
    return sc2sLobbyEnterReq.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
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

  fromJSON(object: any): ss2cLobbyEnterRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
    };
  },

  toJSON(message: ss2cLobbyEnterRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cLobbyEnterRes>, I>>(base?: I): ss2cLobbyEnterRes {
    return ss2cLobbyEnterRes.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.isAgree = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.isAgree !== 0) {
      obj.isAgree = Math.round(message.isAgree);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sAccountAgreeAnswerReq>, I>>(base?: I): sc2sAccountAgreeAnswerReq {
    return sc2sAccountAgreeAnswerReq.fromPartial(base ?? ({} as any));
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

  fromJSON(object: any): ss2cAccountAgreeAnswerRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cAccountAgreeAnswerRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cAccountAgreeAnswerRes>, I>>(base?: I): ss2cAccountAgreeAnswerRes {
    return ss2cAccountAgreeAnswerRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cAccountAgreeAnswerRes>, I>>(object: I): ss2cAccountAgreeAnswerRes {
    const message = createBasess2cAccountAgreeAnswerRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesaccountCharacterClassInfo(): saccountCharacterClassInfo {
  return { characterClassId: "", shopId: "", isOwned: 0 };
}

export const saccountCharacterClassInfo = {
  encode(message: saccountCharacterClassInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.characterClassId !== "") {
      writer.uint32(10).string(message.characterClassId);
    }
    if (message.shopId !== "") {
      writer.uint32(18).string(message.shopId);
    }
    if (message.isOwned !== 0) {
      writer.uint32(24).uint32(message.isOwned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): saccountCharacterClassInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesaccountCharacterClassInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.characterClassId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.shopId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isOwned = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): saccountCharacterClassInfo {
    return {
      characterClassId: isSet(object.characterClassId) ? String(object.characterClassId) : "",
      shopId: isSet(object.shopId) ? String(object.shopId) : "",
      isOwned: isSet(object.isOwned) ? Number(object.isOwned) : 0,
    };
  },

  toJSON(message: saccountCharacterClassInfo): unknown {
    const obj: any = {};
    if (message.characterClassId !== "") {
      obj.characterClassId = message.characterClassId;
    }
    if (message.shopId !== "") {
      obj.shopId = message.shopId;
    }
    if (message.isOwned !== 0) {
      obj.isOwned = Math.round(message.isOwned);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<saccountCharacterClassInfo>, I>>(base?: I): saccountCharacterClassInfo {
    return saccountCharacterClassInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<saccountCharacterClassInfo>, I>>(object: I): saccountCharacterClassInfo {
    const message = createBasesaccountCharacterClassInfo();
    message.characterClassId = object.characterClassId ?? "";
    message.shopId = object.shopId ?? "";
    message.isOwned = object.isOwned ?? 0;
    return message;
  },
};

function createBasess2cAccountCharacterClassListNot(): ss2cAccountCharacterClassListNot {
  return { characterClassList: [] };
}

export const ss2cAccountCharacterClassListNot = {
  encode(message: ss2cAccountCharacterClassListNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.characterClassList) {
      saccountCharacterClassInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cAccountCharacterClassListNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cAccountCharacterClassListNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.characterClassList.push(saccountCharacterClassInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cAccountCharacterClassListNot {
    return {
      characterClassList: Array.isArray(object?.characterClassList)
        ? object.characterClassList.map((e: any) => saccountCharacterClassInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cAccountCharacterClassListNot): unknown {
    const obj: any = {};
    if (message.characterClassList?.length) {
      obj.characterClassList = message.characterClassList.map((e) => saccountCharacterClassInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cAccountCharacterClassListNot>, I>>(
    base?: I,
  ): ss2cAccountCharacterClassListNot {
    return ss2cAccountCharacterClassListNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cAccountCharacterClassListNot>, I>>(
    object: I,
  ): ss2cAccountCharacterClassListNot {
    const message = createBasess2cAccountCharacterClassListNot();
    message.characterClassList = object.characterClassList?.map((e) => saccountCharacterClassInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sUserHwInfoReq(): sc2sUserHwInfoReq {
  return { os: "", cpu: "", gpu: "", gpuVersion: "", memory: "", storage: "", directX: "", osVersion: "" };
}

export const sc2sUserHwInfoReq = {
  encode(message: sc2sUserHwInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.os !== "") {
      writer.uint32(10).string(message.os);
    }
    if (message.cpu !== "") {
      writer.uint32(18).string(message.cpu);
    }
    if (message.gpu !== "") {
      writer.uint32(26).string(message.gpu);
    }
    if (message.gpuVersion !== "") {
      writer.uint32(34).string(message.gpuVersion);
    }
    if (message.memory !== "") {
      writer.uint32(42).string(message.memory);
    }
    if (message.storage !== "") {
      writer.uint32(50).string(message.storage);
    }
    if (message.directX !== "") {
      writer.uint32(58).string(message.directX);
    }
    if (message.osVersion !== "") {
      writer.uint32(66).string(message.osVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sUserHwInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sUserHwInfoReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.os = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cpu = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gpu = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gpuVersion = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.memory = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.storage = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.directX = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.osVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sUserHwInfoReq {
    return {
      os: isSet(object.os) ? String(object.os) : "",
      cpu: isSet(object.cpu) ? String(object.cpu) : "",
      gpu: isSet(object.gpu) ? String(object.gpu) : "",
      gpuVersion: isSet(object.gpuVersion) ? String(object.gpuVersion) : "",
      memory: isSet(object.memory) ? String(object.memory) : "",
      storage: isSet(object.storage) ? String(object.storage) : "",
      directX: isSet(object.directX) ? String(object.directX) : "",
      osVersion: isSet(object.osVersion) ? String(object.osVersion) : "",
    };
  },

  toJSON(message: sc2sUserHwInfoReq): unknown {
    const obj: any = {};
    if (message.os !== "") {
      obj.os = message.os;
    }
    if (message.cpu !== "") {
      obj.cpu = message.cpu;
    }
    if (message.gpu !== "") {
      obj.gpu = message.gpu;
    }
    if (message.gpuVersion !== "") {
      obj.gpuVersion = message.gpuVersion;
    }
    if (message.memory !== "") {
      obj.memory = message.memory;
    }
    if (message.storage !== "") {
      obj.storage = message.storage;
    }
    if (message.directX !== "") {
      obj.directX = message.directX;
    }
    if (message.osVersion !== "") {
      obj.osVersion = message.osVersion;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sUserHwInfoReq>, I>>(base?: I): sc2sUserHwInfoReq {
    return sc2sUserHwInfoReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sUserHwInfoReq>, I>>(object: I): sc2sUserHwInfoReq {
    const message = createBasesc2sUserHwInfoReq();
    message.os = object.os ?? "";
    message.cpu = object.cpu ?? "";
    message.gpu = object.gpu ?? "";
    message.gpuVersion = object.gpuVersion ?? "";
    message.memory = object.memory ?? "";
    message.storage = object.storage ?? "";
    message.directX = object.directX ?? "";
    message.osVersion = object.osVersion ?? "";
    return message;
  },
};

function createBasess2cUserHwInfoRes(): ss2cUserHwInfoRes {
  return {};
}

export const ss2cUserHwInfoRes = {
  encode(_: ss2cUserHwInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cUserHwInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cUserHwInfoRes();
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

  fromJSON(_: any): ss2cUserHwInfoRes {
    return {};
  },

  toJSON(_: ss2cUserHwInfoRes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cUserHwInfoRes>, I>>(base?: I): ss2cUserHwInfoRes {
    return ss2cUserHwInfoRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cUserHwInfoRes>, I>>(_: I): ss2cUserHwInfoRes {
    const message = createBasess2cUserHwInfoRes();
    return message;
  },
};

function createBaseaccountRedirectionInfo(): accountRedirectionInfo {
  return {
    generalReportUrl: "",
    banAppealUrl: "",
    knightLinkUrl: "",
    supportFaqUrl: "",
    homeUrl: "",
    newsUrl: "",
    suggestionUrl: "",
    officialDiscordUrl: "",
    bugReportUrl: "",
  };
}

export const accountRedirectionInfo = {
  encode(message: accountRedirectionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.generalReportUrl !== "") {
      writer.uint32(10).string(message.generalReportUrl);
    }
    if (message.banAppealUrl !== "") {
      writer.uint32(18).string(message.banAppealUrl);
    }
    if (message.knightLinkUrl !== "") {
      writer.uint32(26).string(message.knightLinkUrl);
    }
    if (message.supportFaqUrl !== "") {
      writer.uint32(34).string(message.supportFaqUrl);
    }
    if (message.homeUrl !== "") {
      writer.uint32(42).string(message.homeUrl);
    }
    if (message.newsUrl !== "") {
      writer.uint32(50).string(message.newsUrl);
    }
    if (message.suggestionUrl !== "") {
      writer.uint32(58).string(message.suggestionUrl);
    }
    if (message.officialDiscordUrl !== "") {
      writer.uint32(66).string(message.officialDiscordUrl);
    }
    if (message.bugReportUrl !== "") {
      writer.uint32(74).string(message.bugReportUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): accountRedirectionInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseaccountRedirectionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.generalReportUrl = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.banAppealUrl = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.knightLinkUrl = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.supportFaqUrl = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.homeUrl = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.newsUrl = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.suggestionUrl = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.officialDiscordUrl = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.bugReportUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): accountRedirectionInfo {
    return {
      generalReportUrl: isSet(object.generalReportUrl) ? String(object.generalReportUrl) : "",
      banAppealUrl: isSet(object.banAppealUrl) ? String(object.banAppealUrl) : "",
      knightLinkUrl: isSet(object.knightLinkUrl) ? String(object.knightLinkUrl) : "",
      supportFaqUrl: isSet(object.supportFaqUrl) ? String(object.supportFaqUrl) : "",
      homeUrl: isSet(object.homeUrl) ? String(object.homeUrl) : "",
      newsUrl: isSet(object.newsUrl) ? String(object.newsUrl) : "",
      suggestionUrl: isSet(object.suggestionUrl) ? String(object.suggestionUrl) : "",
      officialDiscordUrl: isSet(object.officialDiscordUrl) ? String(object.officialDiscordUrl) : "",
      bugReportUrl: isSet(object.bugReportUrl) ? String(object.bugReportUrl) : "",
    };
  },

  toJSON(message: accountRedirectionInfo): unknown {
    const obj: any = {};
    if (message.generalReportUrl !== "") {
      obj.generalReportUrl = message.generalReportUrl;
    }
    if (message.banAppealUrl !== "") {
      obj.banAppealUrl = message.banAppealUrl;
    }
    if (message.knightLinkUrl !== "") {
      obj.knightLinkUrl = message.knightLinkUrl;
    }
    if (message.supportFaqUrl !== "") {
      obj.supportFaqUrl = message.supportFaqUrl;
    }
    if (message.homeUrl !== "") {
      obj.homeUrl = message.homeUrl;
    }
    if (message.newsUrl !== "") {
      obj.newsUrl = message.newsUrl;
    }
    if (message.suggestionUrl !== "") {
      obj.suggestionUrl = message.suggestionUrl;
    }
    if (message.officialDiscordUrl !== "") {
      obj.officialDiscordUrl = message.officialDiscordUrl;
    }
    if (message.bugReportUrl !== "") {
      obj.bugReportUrl = message.bugReportUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<accountRedirectionInfo>, I>>(base?: I): accountRedirectionInfo {
    return accountRedirectionInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<accountRedirectionInfo>, I>>(object: I): accountRedirectionInfo {
    const message = createBaseaccountRedirectionInfo();
    message.generalReportUrl = object.generalReportUrl ?? "";
    message.banAppealUrl = object.banAppealUrl ?? "";
    message.knightLinkUrl = object.knightLinkUrl ?? "";
    message.supportFaqUrl = object.supportFaqUrl ?? "";
    message.homeUrl = object.homeUrl ?? "";
    message.newsUrl = object.newsUrl ?? "";
    message.suggestionUrl = object.suggestionUrl ?? "";
    message.officialDiscordUrl = object.officialDiscordUrl ?? "";
    message.bugReportUrl = object.bugReportUrl ?? "";
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
