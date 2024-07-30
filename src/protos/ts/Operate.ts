/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { SItems } from "./_Item";

export const protobufPackage = "DC.Packet";

export interface OperateBadWordList {
  badWord: string[];
}

export interface OperateAddBadWord {
  securityCode: string;
  badWord: string;
}

export interface OperateAnnounceMessageInfo {
  nationType: number;
  announceMessage: string;
}

export interface OperateAddAnnounceMsg {
  securityCode: string;
  announceList: OperateAnnounceMessageInfo[];
}

export interface OperateDllInfo {
  securityCode: string;
  dllPath: string;
}

export interface OperateDllList {
  dlls: string[];
}

export interface OperateUserInfo {
  accountId: number;
  nicknameList: string[];
}

export interface HackLogInfo {
  logIdx: string;
  accountId: string;
  characterId: string;
  nickname: string;
  reason: string;
  registerTime: string;
}

export interface OperateHacklog {
  infos: HackLogInfo[];
}

export interface OperateBanReportUser {
  securityCode: string;
  reportId: string;
  nickName: string;
  banTimeMin: number;
  banReason: string;
}

export interface OperateHackReportList {
  securityCode: string;
}

export interface OperateIronShieldList {
  securityCode: string;
}

export interface OperateAddHardwareBan {
  securityCode: string;
  hardwareId: string;
}

export interface OperateBanHistory {
  securityCode: string;
  nickname: string;
}

export interface banInfo {
  accountId: string;
  banType: string;
  comment: string;
  registerTime: string;
}

export interface OperateBanInfoList {
  infos: banInfo[];
}

export interface OperateBanHardwareList {
  securityCode: string;
}

export interface OperateNicknameChange {
  securityCode: string;
  currentNickname: string;
  changeNickname: string;
}

export interface OperateCharacterInfo {
  accountId: number;
  characterId: number;
  nickname: string;
  characterClass: string;
  gebder: string;
  registerDate: string;
  lastLoginDate: string;
}

export interface OperateCharacterInfoList {
  infos: OperateCharacterInfo[];
}

export interface OperateReportInfo {
  reportId: number;
  targetCharacterId: number;
  targetNickname: string;
  gameId: number;
  registerDate: string;
}

export interface OperateReportInfoList {
  infos: OperateReportInfo[];
}

export interface OperateIronShieldInfo {
  accountId: number;
  characterId: number;
  nickname: string;
  hardwareIds: string[];
  callbackType: string;
  registerDate: string;
}

export interface OperateIronShieldInfoList {
  infos: OperateIronShieldInfo[];
}

export interface OperateBanUserInfo {
  accountId: number;
  banType: string;
  comment: string;
  registerDate: string;
}

export interface OperateBanUserInfoList {
  infos: OperateBanUserInfo[];
}

export interface OperateLoginLog {
  idx: number;
  accountId: number;
  loginTime: string;
  logoutTime: string;
  ipAddress: string;
}

export interface OperateLoginLogList {
  logs: OperateLoginLog[];
}

export interface OperateBanUser {
  securityCode: string;
  nickName: string;
  reason: string;
  banType: number;
  banTimeMin: number;
}

export interface OperateBanUser2 {
  securityCode: string;
  accountId: number;
  nickName: string;
  reason: string;
  banType: number;
  banTimeMin: number;
  jiraId: string;
  isRankReset: number;
  isRankRecovery: number;
  logIdx: number;
}

export interface OperateBanHardware {
  hardwareId: string;
  reason: string;
  banType: number;
  banTimeMin: number;
}

export interface OperateCharacterInfo {
  accountId: number;
  characterId: number;
  nickname: string;
  characterClass: string;
  gender: string;
  registerdate: string;
  lastlogindate: string;
  inventoryItems: SItems[];
  storageItems: SItems[];
}

export interface OperateOperateReportBodyInfo {
  reportId: number;
  reportAccountId: number;
  targetCharacterId: number;
  targetNickname: string;
  gameId: number;
  file: OperateOperateFileInfo | undefined;
  registerDate: string;
}

export interface OperateOperateIronShieldInfo {
  idx: number;
  accountId: number;
  characterId: number;
  nickname: string;
  callbackType: string;
  file: OperateOperateFileInfo | undefined;
  RegisterTime: string;
  hardwareIds: string[];
}

export interface OperateOperateBanUserInfos {
  accountId: number;
  banType: number;
  logIdx: number;
  comment: string;
  beginTime: string;
  endTime: string;
  registerTime: string;
  isHardwareBan: string;
}

export interface OperateOperateLoginLogInfo {
  accountId: number;
  loginTime: string;
  logoutTime: string;
  ipAddress: string;
}

export interface OperateOperateHardwareAccountInfo {
  accountId: number;
  hardwareId: string;
  lastUpdateDate: string;
  isHardwareBan: string;
}

export interface OperateOperateDuplicateHardwareInfo {
  accountId: number;
  hardwareId: string;
  isAccountBan: string;
}

export interface OperateOperateHardwareInfo {
  hardwareAccountInfos: OperateOperateHardwareAccountInfo[];
  duplicateHardwareInfos: OperateOperateDuplicateHardwareInfo[];
}

export interface OperateOperateFileInfo {
  name: string;
  url: string;
}

export interface OperateOperateBanInfo {
  accountId: string;
  banType: string;
  comment: string;
  registerTime: string;
  beginTime: string;
  endTime: string;
}

export interface OperateOperateBanHardwareInfo {
  hardwareId: string;
  banType: string;
  comment: string;
  registerTime: string;
}

export interface OperateOperatePlatformInfo {
  ironmaceid: string;
  email: string;
  username: string;
  accountNickName: string;
}

export interface OperateAllHackInfo {
  characterInfos: OperateCharacterInfo[];
  reportBodyInfos: OperateOperateReportBodyInfo[];
  ironShieldInfos: OperateOperateIronShieldInfo[];
  banUserInfos: OperateOperateBanUserInfos[];
  loginLogInfos: OperateOperateLoginLogInfo[];
  hardwareAccountInfos: OperateOperateHardwareAccountInfo[];
  duplicateHardwareInfos: OperateOperateDuplicateHardwareInfo[];
  fileInfos: OperateOperateFileInfo[];
  banInfos: OperateOperateBanInfo[];
  banHardwareInfos: OperateOperateBanHardwareInfo[];
  hackInfos: OperateHacklog | undefined;
  findBanList: number[];
  banList: number[];
  platformInfo: OperateOperatePlatformInfo | undefined;
}

export interface OperateAllReportList {
  report: OperateOperateReportBodyInfo[];
}

export interface OperateAllIronShieldList {
  ironShield: OperateOperateIronShieldInfo[];
}

export interface ReasonSearchBanUserInfo {
  accountId: number;
  nickname: string;
  reason: string;
  banType: number;
  comment: string;
  beginTime: string;
  endTime: string;
  registerTime: string;
  sortTime: number;
}

export interface OperateSearchHackReasonResult {
  infos: ReasonSearchBanUserInfo[];
  maxPageSize: number;
  currentPage: number;
  searchType: number;
}

export interface OperateBulkBanInfo {
  accountId: number;
  nickname: string;
}

export interface OperateHackUserBanBulk {
  infos: OperateBulkBanInfo[];
  reason: string;
  banType: number;
  banTimeMin: number;
  jiraId: string;
  withLoginHardwareBan: number;
  logIdx: number;
}

export interface OperateHackUserUnbanBulk {
  infos: OperateBulkBanInfo[];
  reason: string;
  jiraId: string;
  withLoginHardwareBan: number;
}

export interface OperateBlacklist {
  writeType: number;
  accountId: number;
  reason: string;
}

export interface OperateAccountNameChange {
  accountId: number;
  accountName: string;
}

function createBaseOperateBadWordList(): OperateBadWordList {
  return { badWord: [] };
}

export const OperateBadWordList = {
  encode(message: OperateBadWordList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.badWord) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateBadWordList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateBadWordList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.badWord.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateBadWordList {
    return { badWord: Array.isArray(object?.badWord) ? object.badWord.map((e: any) => String(e)) : [] };
  },

  toJSON(message: OperateBadWordList): unknown {
    const obj: any = {};
    if (message.badWord?.length) {
      obj.badWord = message.badWord;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateBadWordList>, I>>(base?: I): OperateBadWordList {
    return OperateBadWordList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateBadWordList>, I>>(object: I): OperateBadWordList {
    const message = createBaseOperateBadWordList();
    message.badWord = object.badWord?.map((e) => e) || [];
    return message;
  },
};

function createBaseOperateAddBadWord(): OperateAddBadWord {
  return { securityCode: "", badWord: "" };
}

export const OperateAddBadWord = {
  encode(message: OperateAddBadWord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityCode !== "") {
      writer.uint32(10).string(message.securityCode);
    }
    if (message.badWord !== "") {
      writer.uint32(18).string(message.badWord);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateAddBadWord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateAddBadWord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityCode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.badWord = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateAddBadWord {
    return {
      securityCode: isSet(object.securityCode) ? String(object.securityCode) : "",
      badWord: isSet(object.badWord) ? String(object.badWord) : "",
    };
  },

  toJSON(message: OperateAddBadWord): unknown {
    const obj: any = {};
    if (message.securityCode !== "") {
      obj.securityCode = message.securityCode;
    }
    if (message.badWord !== "") {
      obj.badWord = message.badWord;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateAddBadWord>, I>>(base?: I): OperateAddBadWord {
    return OperateAddBadWord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateAddBadWord>, I>>(object: I): OperateAddBadWord {
    const message = createBaseOperateAddBadWord();
    message.securityCode = object.securityCode ?? "";
    message.badWord = object.badWord ?? "";
    return message;
  },
};

function createBaseOperateAnnounceMessageInfo(): OperateAnnounceMessageInfo {
  return { nationType: 0, announceMessage: "" };
}

export const OperateAnnounceMessageInfo = {
  encode(message: OperateAnnounceMessageInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nationType !== 0) {
      writer.uint32(8).int32(message.nationType);
    }
    if (message.announceMessage !== "") {
      writer.uint32(18).string(message.announceMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateAnnounceMessageInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateAnnounceMessageInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nationType = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): OperateAnnounceMessageInfo {
    return {
      nationType: isSet(object.nationType) ? Number(object.nationType) : 0,
      announceMessage: isSet(object.announceMessage) ? String(object.announceMessage) : "",
    };
  },

  toJSON(message: OperateAnnounceMessageInfo): unknown {
    const obj: any = {};
    if (message.nationType !== 0) {
      obj.nationType = Math.round(message.nationType);
    }
    if (message.announceMessage !== "") {
      obj.announceMessage = message.announceMessage;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateAnnounceMessageInfo>, I>>(base?: I): OperateAnnounceMessageInfo {
    return OperateAnnounceMessageInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateAnnounceMessageInfo>, I>>(object: I): OperateAnnounceMessageInfo {
    const message = createBaseOperateAnnounceMessageInfo();
    message.nationType = object.nationType ?? 0;
    message.announceMessage = object.announceMessage ?? "";
    return message;
  },
};

function createBaseOperateAddAnnounceMsg(): OperateAddAnnounceMsg {
  return { securityCode: "", announceList: [] };
}

export const OperateAddAnnounceMsg = {
  encode(message: OperateAddAnnounceMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityCode !== "") {
      writer.uint32(10).string(message.securityCode);
    }
    for (const v of message.announceList) {
      OperateAnnounceMessageInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateAddAnnounceMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateAddAnnounceMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityCode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.announceList.push(OperateAnnounceMessageInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateAddAnnounceMsg {
    return {
      securityCode: isSet(object.securityCode) ? String(object.securityCode) : "",
      announceList: Array.isArray(object?.announceList)
        ? object.announceList.map((e: any) => OperateAnnounceMessageInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OperateAddAnnounceMsg): unknown {
    const obj: any = {};
    if (message.securityCode !== "") {
      obj.securityCode = message.securityCode;
    }
    if (message.announceList?.length) {
      obj.announceList = message.announceList.map((e) => OperateAnnounceMessageInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateAddAnnounceMsg>, I>>(base?: I): OperateAddAnnounceMsg {
    return OperateAddAnnounceMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateAddAnnounceMsg>, I>>(object: I): OperateAddAnnounceMsg {
    const message = createBaseOperateAddAnnounceMsg();
    message.securityCode = object.securityCode ?? "";
    message.announceList = object.announceList?.map((e) => OperateAnnounceMessageInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOperateDllInfo(): OperateDllInfo {
  return { securityCode: "", dllPath: "" };
}

export const OperateDllInfo = {
  encode(message: OperateDllInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityCode !== "") {
      writer.uint32(10).string(message.securityCode);
    }
    if (message.dllPath !== "") {
      writer.uint32(18).string(message.dllPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateDllInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateDllInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityCode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dllPath = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateDllInfo {
    return {
      securityCode: isSet(object.securityCode) ? String(object.securityCode) : "",
      dllPath: isSet(object.dllPath) ? String(object.dllPath) : "",
    };
  },

  toJSON(message: OperateDllInfo): unknown {
    const obj: any = {};
    if (message.securityCode !== "") {
      obj.securityCode = message.securityCode;
    }
    if (message.dllPath !== "") {
      obj.dllPath = message.dllPath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateDllInfo>, I>>(base?: I): OperateDllInfo {
    return OperateDllInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateDllInfo>, I>>(object: I): OperateDllInfo {
    const message = createBaseOperateDllInfo();
    message.securityCode = object.securityCode ?? "";
    message.dllPath = object.dllPath ?? "";
    return message;
  },
};

function createBaseOperateDllList(): OperateDllList {
  return { dlls: [] };
}

export const OperateDllList = {
  encode(message: OperateDllList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dlls) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateDllList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateDllList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dlls.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateDllList {
    return { dlls: Array.isArray(object?.dlls) ? object.dlls.map((e: any) => String(e)) : [] };
  },

  toJSON(message: OperateDllList): unknown {
    const obj: any = {};
    if (message.dlls?.length) {
      obj.dlls = message.dlls;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateDllList>, I>>(base?: I): OperateDllList {
    return OperateDllList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateDllList>, I>>(object: I): OperateDllList {
    const message = createBaseOperateDllList();
    message.dlls = object.dlls?.map((e) => e) || [];
    return message;
  },
};

function createBaseOperateUserInfo(): OperateUserInfo {
  return { accountId: 0, nicknameList: [] };
}

export const OperateUserInfo = {
  encode(message: OperateUserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint64(message.accountId);
    }
    for (const v of message.nicknameList) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateUserInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateUserInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nicknameList.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateUserInfo {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      nicknameList: Array.isArray(object?.nicknameList) ? object.nicknameList.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: OperateUserInfo): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.nicknameList?.length) {
      obj.nicknameList = message.nicknameList;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateUserInfo>, I>>(base?: I): OperateUserInfo {
    return OperateUserInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateUserInfo>, I>>(object: I): OperateUserInfo {
    const message = createBaseOperateUserInfo();
    message.accountId = object.accountId ?? 0;
    message.nicknameList = object.nicknameList?.map((e) => e) || [];
    return message;
  },
};

function createBaseHackLogInfo(): HackLogInfo {
  return { logIdx: "", accountId: "", characterId: "", nickname: "", reason: "", registerTime: "" };
}

export const HackLogInfo = {
  encode(message: HackLogInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logIdx !== "") {
      writer.uint32(10).string(message.logIdx);
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(26).string(message.characterId);
    }
    if (message.nickname !== "") {
      writer.uint32(34).string(message.nickname);
    }
    if (message.reason !== "") {
      writer.uint32(42).string(message.reason);
    }
    if (message.registerTime !== "") {
      writer.uint32(50).string(message.registerTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HackLogInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHackLogInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logIdx = reader.string();
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
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.registerTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HackLogInfo {
    return {
      logIdx: isSet(object.logIdx) ? String(object.logIdx) : "",
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      registerTime: isSet(object.registerTime) ? String(object.registerTime) : "",
    };
  },

  toJSON(message: HackLogInfo): unknown {
    const obj: any = {};
    if (message.logIdx !== "") {
      obj.logIdx = message.logIdx;
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.registerTime !== "") {
      obj.registerTime = message.registerTime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HackLogInfo>, I>>(base?: I): HackLogInfo {
    return HackLogInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HackLogInfo>, I>>(object: I): HackLogInfo {
    const message = createBaseHackLogInfo();
    message.logIdx = object.logIdx ?? "";
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.nickname = object.nickname ?? "";
    message.reason = object.reason ?? "";
    message.registerTime = object.registerTime ?? "";
    return message;
  },
};

function createBaseOperateHacklog(): OperateHacklog {
  return { infos: [] };
}

export const OperateHacklog = {
  encode(message: OperateHacklog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      HackLogInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateHacklog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateHacklog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(HackLogInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateHacklog {
    return { infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => HackLogInfo.fromJSON(e)) : [] };
  },

  toJSON(message: OperateHacklog): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => HackLogInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateHacklog>, I>>(base?: I): OperateHacklog {
    return OperateHacklog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateHacklog>, I>>(object: I): OperateHacklog {
    const message = createBaseOperateHacklog();
    message.infos = object.infos?.map((e) => HackLogInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOperateBanReportUser(): OperateBanReportUser {
  return { securityCode: "", reportId: "", nickName: "", banTimeMin: 0, banReason: "" };
}

export const OperateBanReportUser = {
  encode(message: OperateBanReportUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityCode !== "") {
      writer.uint32(10).string(message.securityCode);
    }
    if (message.reportId !== "") {
      writer.uint32(18).string(message.reportId);
    }
    if (message.nickName !== "") {
      writer.uint32(26).string(message.nickName);
    }
    if (message.banTimeMin !== 0) {
      writer.uint32(32).uint32(message.banTimeMin);
    }
    if (message.banReason !== "") {
      writer.uint32(42).string(message.banReason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateBanReportUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateBanReportUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityCode = reader.string();
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

          message.nickName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.banTimeMin = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.banReason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateBanReportUser {
    return {
      securityCode: isSet(object.securityCode) ? String(object.securityCode) : "",
      reportId: isSet(object.reportId) ? String(object.reportId) : "",
      nickName: isSet(object.nickName) ? String(object.nickName) : "",
      banTimeMin: isSet(object.banTimeMin) ? Number(object.banTimeMin) : 0,
      banReason: isSet(object.banReason) ? String(object.banReason) : "",
    };
  },

  toJSON(message: OperateBanReportUser): unknown {
    const obj: any = {};
    if (message.securityCode !== "") {
      obj.securityCode = message.securityCode;
    }
    if (message.reportId !== "") {
      obj.reportId = message.reportId;
    }
    if (message.nickName !== "") {
      obj.nickName = message.nickName;
    }
    if (message.banTimeMin !== 0) {
      obj.banTimeMin = Math.round(message.banTimeMin);
    }
    if (message.banReason !== "") {
      obj.banReason = message.banReason;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateBanReportUser>, I>>(base?: I): OperateBanReportUser {
    return OperateBanReportUser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateBanReportUser>, I>>(object: I): OperateBanReportUser {
    const message = createBaseOperateBanReportUser();
    message.securityCode = object.securityCode ?? "";
    message.reportId = object.reportId ?? "";
    message.nickName = object.nickName ?? "";
    message.banTimeMin = object.banTimeMin ?? 0;
    message.banReason = object.banReason ?? "";
    return message;
  },
};

function createBaseOperateHackReportList(): OperateHackReportList {
  return { securityCode: "" };
}

export const OperateHackReportList = {
  encode(message: OperateHackReportList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityCode !== "") {
      writer.uint32(10).string(message.securityCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateHackReportList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateHackReportList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateHackReportList {
    return { securityCode: isSet(object.securityCode) ? String(object.securityCode) : "" };
  },

  toJSON(message: OperateHackReportList): unknown {
    const obj: any = {};
    if (message.securityCode !== "") {
      obj.securityCode = message.securityCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateHackReportList>, I>>(base?: I): OperateHackReportList {
    return OperateHackReportList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateHackReportList>, I>>(object: I): OperateHackReportList {
    const message = createBaseOperateHackReportList();
    message.securityCode = object.securityCode ?? "";
    return message;
  },
};

function createBaseOperateIronShieldList(): OperateIronShieldList {
  return { securityCode: "" };
}

export const OperateIronShieldList = {
  encode(message: OperateIronShieldList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityCode !== "") {
      writer.uint32(10).string(message.securityCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateIronShieldList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateIronShieldList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateIronShieldList {
    return { securityCode: isSet(object.securityCode) ? String(object.securityCode) : "" };
  },

  toJSON(message: OperateIronShieldList): unknown {
    const obj: any = {};
    if (message.securityCode !== "") {
      obj.securityCode = message.securityCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateIronShieldList>, I>>(base?: I): OperateIronShieldList {
    return OperateIronShieldList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateIronShieldList>, I>>(object: I): OperateIronShieldList {
    const message = createBaseOperateIronShieldList();
    message.securityCode = object.securityCode ?? "";
    return message;
  },
};

function createBaseOperateAddHardwareBan(): OperateAddHardwareBan {
  return { securityCode: "", hardwareId: "" };
}

export const OperateAddHardwareBan = {
  encode(message: OperateAddHardwareBan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityCode !== "") {
      writer.uint32(10).string(message.securityCode);
    }
    if (message.hardwareId !== "") {
      writer.uint32(18).string(message.hardwareId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateAddHardwareBan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateAddHardwareBan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityCode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hardwareId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateAddHardwareBan {
    return {
      securityCode: isSet(object.securityCode) ? String(object.securityCode) : "",
      hardwareId: isSet(object.hardwareId) ? String(object.hardwareId) : "",
    };
  },

  toJSON(message: OperateAddHardwareBan): unknown {
    const obj: any = {};
    if (message.securityCode !== "") {
      obj.securityCode = message.securityCode;
    }
    if (message.hardwareId !== "") {
      obj.hardwareId = message.hardwareId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateAddHardwareBan>, I>>(base?: I): OperateAddHardwareBan {
    return OperateAddHardwareBan.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateAddHardwareBan>, I>>(object: I): OperateAddHardwareBan {
    const message = createBaseOperateAddHardwareBan();
    message.securityCode = object.securityCode ?? "";
    message.hardwareId = object.hardwareId ?? "";
    return message;
  },
};

function createBaseOperateBanHistory(): OperateBanHistory {
  return { securityCode: "", nickname: "" };
}

export const OperateBanHistory = {
  encode(message: OperateBanHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityCode !== "") {
      writer.uint32(10).string(message.securityCode);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateBanHistory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateBanHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityCode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nickname = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateBanHistory {
    return {
      securityCode: isSet(object.securityCode) ? String(object.securityCode) : "",
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
    };
  },

  toJSON(message: OperateBanHistory): unknown {
    const obj: any = {};
    if (message.securityCode !== "") {
      obj.securityCode = message.securityCode;
    }
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateBanHistory>, I>>(base?: I): OperateBanHistory {
    return OperateBanHistory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateBanHistory>, I>>(object: I): OperateBanHistory {
    const message = createBaseOperateBanHistory();
    message.securityCode = object.securityCode ?? "";
    message.nickname = object.nickname ?? "";
    return message;
  },
};

function createBasebanInfo(): banInfo {
  return { accountId: "", banType: "", comment: "", registerTime: "" };
}

export const banInfo = {
  encode(message: banInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.banType !== "") {
      writer.uint32(18).string(message.banType);
    }
    if (message.comment !== "") {
      writer.uint32(26).string(message.comment);
    }
    if (message.registerTime !== "") {
      writer.uint32(34).string(message.registerTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): banInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasebanInfo();
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

          message.banType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.registerTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): banInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      banType: isSet(object.banType) ? String(object.banType) : "",
      comment: isSet(object.comment) ? String(object.comment) : "",
      registerTime: isSet(object.registerTime) ? String(object.registerTime) : "",
    };
  },

  toJSON(message: banInfo): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.banType !== "") {
      obj.banType = message.banType;
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    if (message.registerTime !== "") {
      obj.registerTime = message.registerTime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<banInfo>, I>>(base?: I): banInfo {
    return banInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<banInfo>, I>>(object: I): banInfo {
    const message = createBasebanInfo();
    message.accountId = object.accountId ?? "";
    message.banType = object.banType ?? "";
    message.comment = object.comment ?? "";
    message.registerTime = object.registerTime ?? "";
    return message;
  },
};

function createBaseOperateBanInfoList(): OperateBanInfoList {
  return { infos: [] };
}

export const OperateBanInfoList = {
  encode(message: OperateBanInfoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      banInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateBanInfoList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateBanInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(banInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateBanInfoList {
    return { infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => banInfo.fromJSON(e)) : [] };
  },

  toJSON(message: OperateBanInfoList): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => banInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateBanInfoList>, I>>(base?: I): OperateBanInfoList {
    return OperateBanInfoList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateBanInfoList>, I>>(object: I): OperateBanInfoList {
    const message = createBaseOperateBanInfoList();
    message.infos = object.infos?.map((e) => banInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOperateBanHardwareList(): OperateBanHardwareList {
  return { securityCode: "" };
}

export const OperateBanHardwareList = {
  encode(message: OperateBanHardwareList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityCode !== "") {
      writer.uint32(10).string(message.securityCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateBanHardwareList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateBanHardwareList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateBanHardwareList {
    return { securityCode: isSet(object.securityCode) ? String(object.securityCode) : "" };
  },

  toJSON(message: OperateBanHardwareList): unknown {
    const obj: any = {};
    if (message.securityCode !== "") {
      obj.securityCode = message.securityCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateBanHardwareList>, I>>(base?: I): OperateBanHardwareList {
    return OperateBanHardwareList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateBanHardwareList>, I>>(object: I): OperateBanHardwareList {
    const message = createBaseOperateBanHardwareList();
    message.securityCode = object.securityCode ?? "";
    return message;
  },
};

function createBaseOperateNicknameChange(): OperateNicknameChange {
  return { securityCode: "", currentNickname: "", changeNickname: "" };
}

export const OperateNicknameChange = {
  encode(message: OperateNicknameChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityCode !== "") {
      writer.uint32(10).string(message.securityCode);
    }
    if (message.currentNickname !== "") {
      writer.uint32(18).string(message.currentNickname);
    }
    if (message.changeNickname !== "") {
      writer.uint32(26).string(message.changeNickname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateNicknameChange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateNicknameChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityCode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.currentNickname = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.changeNickname = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateNicknameChange {
    return {
      securityCode: isSet(object.securityCode) ? String(object.securityCode) : "",
      currentNickname: isSet(object.currentNickname) ? String(object.currentNickname) : "",
      changeNickname: isSet(object.changeNickname) ? String(object.changeNickname) : "",
    };
  },

  toJSON(message: OperateNicknameChange): unknown {
    const obj: any = {};
    if (message.securityCode !== "") {
      obj.securityCode = message.securityCode;
    }
    if (message.currentNickname !== "") {
      obj.currentNickname = message.currentNickname;
    }
    if (message.changeNickname !== "") {
      obj.changeNickname = message.changeNickname;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateNicknameChange>, I>>(base?: I): OperateNicknameChange {
    return OperateNicknameChange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateNicknameChange>, I>>(object: I): OperateNicknameChange {
    const message = createBaseOperateNicknameChange();
    message.securityCode = object.securityCode ?? "";
    message.currentNickname = object.currentNickname ?? "";
    message.changeNickname = object.changeNickname ?? "";
    return message;
  },
};

function createBaseOperateCharacterInfo(): OperateCharacterInfo {
  return {
    accountId: 0,
    characterId: 0,
    nickname: "",
    characterClass: "",
    gebder: "",
    registerDate: "",
    lastLoginDate: "",
  };
}

export const OperateCharacterInfo = {
  encode(message: OperateCharacterInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint64(message.accountId);
    }
    if (message.characterId !== 0) {
      writer.uint32(16).uint64(message.characterId);
    }
    if (message.nickname !== "") {
      writer.uint32(26).string(message.nickname);
    }
    if (message.characterClass !== "") {
      writer.uint32(34).string(message.characterClass);
    }
    if (message.gebder !== "") {
      writer.uint32(42).string(message.gebder);
    }
    if (message.registerDate !== "") {
      writer.uint32(50).string(message.registerDate);
    }
    if (message.lastLoginDate !== "") {
      writer.uint32(58).string(message.lastLoginDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateCharacterInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateCharacterInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.characterId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gebder = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.registerDate = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.lastLoginDate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateCharacterInfo {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      characterId: isSet(object.characterId) ? Number(object.characterId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      gebder: isSet(object.gebder) ? String(object.gebder) : "",
      registerDate: isSet(object.registerDate) ? String(object.registerDate) : "",
      lastLoginDate: isSet(object.lastLoginDate) ? String(object.lastLoginDate) : "",
    };
  },

  toJSON(message: OperateCharacterInfo): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.characterId !== 0) {
      obj.characterId = Math.round(message.characterId);
    }
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    if (message.gebder !== "") {
      obj.gebder = message.gebder;
    }
    if (message.registerDate !== "") {
      obj.registerDate = message.registerDate;
    }
    if (message.lastLoginDate !== "") {
      obj.lastLoginDate = message.lastLoginDate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateCharacterInfo>, I>>(base?: I): OperateCharacterInfo {
    return OperateCharacterInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateCharacterInfo>, I>>(object: I): OperateCharacterInfo {
    const message = createBaseOperateCharacterInfo();
    message.accountId = object.accountId ?? 0;
    message.characterId = object.characterId ?? 0;
    message.nickname = object.nickname ?? "";
    message.characterClass = object.characterClass ?? "";
    message.gebder = object.gebder ?? "";
    message.registerDate = object.registerDate ?? "";
    message.lastLoginDate = object.lastLoginDate ?? "";
    return message;
  },
};

function createBaseOperateCharacterInfoList(): OperateCharacterInfoList {
  return { infos: [] };
}

export const OperateCharacterInfoList = {
  encode(message: OperateCharacterInfoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      OperateCharacterInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateCharacterInfoList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateCharacterInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(OperateCharacterInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateCharacterInfoList {
    return {
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => OperateCharacterInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: OperateCharacterInfoList): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => OperateCharacterInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateCharacterInfoList>, I>>(base?: I): OperateCharacterInfoList {
    return OperateCharacterInfoList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateCharacterInfoList>, I>>(object: I): OperateCharacterInfoList {
    const message = createBaseOperateCharacterInfoList();
    message.infos = object.infos?.map((e) => OperateCharacterInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOperateReportInfo(): OperateReportInfo {
  return { reportId: 0, targetCharacterId: 0, targetNickname: "", gameId: 0, registerDate: "" };
}

export const OperateReportInfo = {
  encode(message: OperateReportInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reportId !== 0) {
      writer.uint32(8).uint64(message.reportId);
    }
    if (message.targetCharacterId !== 0) {
      writer.uint32(16).uint64(message.targetCharacterId);
    }
    if (message.targetNickname !== "") {
      writer.uint32(26).string(message.targetNickname);
    }
    if (message.gameId !== 0) {
      writer.uint32(32).uint64(message.gameId);
    }
    if (message.registerDate !== "") {
      writer.uint32(42).string(message.registerDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateReportInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateReportInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.reportId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.targetCharacterId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.targetNickname = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.registerDate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateReportInfo {
    return {
      reportId: isSet(object.reportId) ? Number(object.reportId) : 0,
      targetCharacterId: isSet(object.targetCharacterId) ? Number(object.targetCharacterId) : 0,
      targetNickname: isSet(object.targetNickname) ? String(object.targetNickname) : "",
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      registerDate: isSet(object.registerDate) ? String(object.registerDate) : "",
    };
  },

  toJSON(message: OperateReportInfo): unknown {
    const obj: any = {};
    if (message.reportId !== 0) {
      obj.reportId = Math.round(message.reportId);
    }
    if (message.targetCharacterId !== 0) {
      obj.targetCharacterId = Math.round(message.targetCharacterId);
    }
    if (message.targetNickname !== "") {
      obj.targetNickname = message.targetNickname;
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.registerDate !== "") {
      obj.registerDate = message.registerDate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateReportInfo>, I>>(base?: I): OperateReportInfo {
    return OperateReportInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateReportInfo>, I>>(object: I): OperateReportInfo {
    const message = createBaseOperateReportInfo();
    message.reportId = object.reportId ?? 0;
    message.targetCharacterId = object.targetCharacterId ?? 0;
    message.targetNickname = object.targetNickname ?? "";
    message.gameId = object.gameId ?? 0;
    message.registerDate = object.registerDate ?? "";
    return message;
  },
};

function createBaseOperateReportInfoList(): OperateReportInfoList {
  return { infos: [] };
}

export const OperateReportInfoList = {
  encode(message: OperateReportInfoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      OperateReportInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateReportInfoList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateReportInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(OperateReportInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateReportInfoList {
    return { infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => OperateReportInfo.fromJSON(e)) : [] };
  },

  toJSON(message: OperateReportInfoList): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => OperateReportInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateReportInfoList>, I>>(base?: I): OperateReportInfoList {
    return OperateReportInfoList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateReportInfoList>, I>>(object: I): OperateReportInfoList {
    const message = createBaseOperateReportInfoList();
    message.infos = object.infos?.map((e) => OperateReportInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOperateIronShieldInfo(): OperateIronShieldInfo {
  return { accountId: 0, characterId: 0, nickname: "", hardwareIds: [], callbackType: "", registerDate: "" };
}

export const OperateIronShieldInfo = {
  encode(message: OperateIronShieldInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint64(message.accountId);
    }
    if (message.characterId !== 0) {
      writer.uint32(16).uint64(message.characterId);
    }
    if (message.nickname !== "") {
      writer.uint32(26).string(message.nickname);
    }
    for (const v of message.hardwareIds) {
      writer.uint32(34).string(v!);
    }
    if (message.callbackType !== "") {
      writer.uint32(42).string(message.callbackType);
    }
    if (message.registerDate !== "") {
      writer.uint32(50).string(message.registerDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateIronShieldInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateIronShieldInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.characterId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.hardwareIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.callbackType = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.registerDate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateIronShieldInfo {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      characterId: isSet(object.characterId) ? Number(object.characterId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      hardwareIds: Array.isArray(object?.hardwareIds) ? object.hardwareIds.map((e: any) => String(e)) : [],
      callbackType: isSet(object.callbackType) ? String(object.callbackType) : "",
      registerDate: isSet(object.registerDate) ? String(object.registerDate) : "",
    };
  },

  toJSON(message: OperateIronShieldInfo): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.characterId !== 0) {
      obj.characterId = Math.round(message.characterId);
    }
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    if (message.hardwareIds?.length) {
      obj.hardwareIds = message.hardwareIds;
    }
    if (message.callbackType !== "") {
      obj.callbackType = message.callbackType;
    }
    if (message.registerDate !== "") {
      obj.registerDate = message.registerDate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateIronShieldInfo>, I>>(base?: I): OperateIronShieldInfo {
    return OperateIronShieldInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateIronShieldInfo>, I>>(object: I): OperateIronShieldInfo {
    const message = createBaseOperateIronShieldInfo();
    message.accountId = object.accountId ?? 0;
    message.characterId = object.characterId ?? 0;
    message.nickname = object.nickname ?? "";
    message.hardwareIds = object.hardwareIds?.map((e) => e) || [];
    message.callbackType = object.callbackType ?? "";
    message.registerDate = object.registerDate ?? "";
    return message;
  },
};

function createBaseOperateIronShieldInfoList(): OperateIronShieldInfoList {
  return { infos: [] };
}

export const OperateIronShieldInfoList = {
  encode(message: OperateIronShieldInfoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      OperateIronShieldInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateIronShieldInfoList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateIronShieldInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(OperateIronShieldInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateIronShieldInfoList {
    return {
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => OperateIronShieldInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: OperateIronShieldInfoList): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => OperateIronShieldInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateIronShieldInfoList>, I>>(base?: I): OperateIronShieldInfoList {
    return OperateIronShieldInfoList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateIronShieldInfoList>, I>>(object: I): OperateIronShieldInfoList {
    const message = createBaseOperateIronShieldInfoList();
    message.infos = object.infos?.map((e) => OperateIronShieldInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOperateBanUserInfo(): OperateBanUserInfo {
  return { accountId: 0, banType: "", comment: "", registerDate: "" };
}

export const OperateBanUserInfo = {
  encode(message: OperateBanUserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint64(message.accountId);
    }
    if (message.banType !== "") {
      writer.uint32(18).string(message.banType);
    }
    if (message.comment !== "") {
      writer.uint32(26).string(message.comment);
    }
    if (message.registerDate !== "") {
      writer.uint32(34).string(message.registerDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateBanUserInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateBanUserInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.banType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.registerDate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateBanUserInfo {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      banType: isSet(object.banType) ? String(object.banType) : "",
      comment: isSet(object.comment) ? String(object.comment) : "",
      registerDate: isSet(object.registerDate) ? String(object.registerDate) : "",
    };
  },

  toJSON(message: OperateBanUserInfo): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.banType !== "") {
      obj.banType = message.banType;
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    if (message.registerDate !== "") {
      obj.registerDate = message.registerDate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateBanUserInfo>, I>>(base?: I): OperateBanUserInfo {
    return OperateBanUserInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateBanUserInfo>, I>>(object: I): OperateBanUserInfo {
    const message = createBaseOperateBanUserInfo();
    message.accountId = object.accountId ?? 0;
    message.banType = object.banType ?? "";
    message.comment = object.comment ?? "";
    message.registerDate = object.registerDate ?? "";
    return message;
  },
};

function createBaseOperateBanUserInfoList(): OperateBanUserInfoList {
  return { infos: [] };
}

export const OperateBanUserInfoList = {
  encode(message: OperateBanUserInfoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      OperateBanUserInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateBanUserInfoList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateBanUserInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(OperateBanUserInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateBanUserInfoList {
    return { infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => OperateBanUserInfo.fromJSON(e)) : [] };
  },

  toJSON(message: OperateBanUserInfoList): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => OperateBanUserInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateBanUserInfoList>, I>>(base?: I): OperateBanUserInfoList {
    return OperateBanUserInfoList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateBanUserInfoList>, I>>(object: I): OperateBanUserInfoList {
    const message = createBaseOperateBanUserInfoList();
    message.infos = object.infos?.map((e) => OperateBanUserInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOperateLoginLog(): OperateLoginLog {
  return { idx: 0, accountId: 0, loginTime: "", logoutTime: "", ipAddress: "" };
}

export const OperateLoginLog = {
  encode(message: OperateLoginLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idx !== 0) {
      writer.uint32(8).uint64(message.idx);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint64(message.accountId);
    }
    if (message.loginTime !== "") {
      writer.uint32(26).string(message.loginTime);
    }
    if (message.logoutTime !== "") {
      writer.uint32(34).string(message.logoutTime);
    }
    if (message.ipAddress !== "") {
      writer.uint32(42).string(message.ipAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateLoginLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateLoginLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.idx = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.loginTime = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.logoutTime = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.ipAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateLoginLog {
    return {
      idx: isSet(object.idx) ? Number(object.idx) : 0,
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      loginTime: isSet(object.loginTime) ? String(object.loginTime) : "",
      logoutTime: isSet(object.logoutTime) ? String(object.logoutTime) : "",
      ipAddress: isSet(object.ipAddress) ? String(object.ipAddress) : "",
    };
  },

  toJSON(message: OperateLoginLog): unknown {
    const obj: any = {};
    if (message.idx !== 0) {
      obj.idx = Math.round(message.idx);
    }
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.loginTime !== "") {
      obj.loginTime = message.loginTime;
    }
    if (message.logoutTime !== "") {
      obj.logoutTime = message.logoutTime;
    }
    if (message.ipAddress !== "") {
      obj.ipAddress = message.ipAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateLoginLog>, I>>(base?: I): OperateLoginLog {
    return OperateLoginLog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateLoginLog>, I>>(object: I): OperateLoginLog {
    const message = createBaseOperateLoginLog();
    message.idx = object.idx ?? 0;
    message.accountId = object.accountId ?? 0;
    message.loginTime = object.loginTime ?? "";
    message.logoutTime = object.logoutTime ?? "";
    message.ipAddress = object.ipAddress ?? "";
    return message;
  },
};

function createBaseOperateLoginLogList(): OperateLoginLogList {
  return { logs: [] };
}

export const OperateLoginLogList = {
  encode(message: OperateLoginLogList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.logs) {
      OperateLoginLog.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateLoginLogList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateLoginLogList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logs.push(OperateLoginLog.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateLoginLogList {
    return { logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => OperateLoginLog.fromJSON(e)) : [] };
  },

  toJSON(message: OperateLoginLogList): unknown {
    const obj: any = {};
    if (message.logs?.length) {
      obj.logs = message.logs.map((e) => OperateLoginLog.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateLoginLogList>, I>>(base?: I): OperateLoginLogList {
    return OperateLoginLogList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateLoginLogList>, I>>(object: I): OperateLoginLogList {
    const message = createBaseOperateLoginLogList();
    message.logs = object.logs?.map((e) => OperateLoginLog.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOperateBanUser(): OperateBanUser {
  return { securityCode: "", nickName: "", reason: "", banType: 0, banTimeMin: 0 };
}

export const OperateBanUser = {
  encode(message: OperateBanUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityCode !== "") {
      writer.uint32(10).string(message.securityCode);
    }
    if (message.nickName !== "") {
      writer.uint32(18).string(message.nickName);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    if (message.banType !== 0) {
      writer.uint32(32).uint32(message.banType);
    }
    if (message.banTimeMin !== 0) {
      writer.uint32(40).uint32(message.banTimeMin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateBanUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateBanUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityCode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nickName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.banType = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.banTimeMin = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateBanUser {
    return {
      securityCode: isSet(object.securityCode) ? String(object.securityCode) : "",
      nickName: isSet(object.nickName) ? String(object.nickName) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      banType: isSet(object.banType) ? Number(object.banType) : 0,
      banTimeMin: isSet(object.banTimeMin) ? Number(object.banTimeMin) : 0,
    };
  },

  toJSON(message: OperateBanUser): unknown {
    const obj: any = {};
    if (message.securityCode !== "") {
      obj.securityCode = message.securityCode;
    }
    if (message.nickName !== "") {
      obj.nickName = message.nickName;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.banType !== 0) {
      obj.banType = Math.round(message.banType);
    }
    if (message.banTimeMin !== 0) {
      obj.banTimeMin = Math.round(message.banTimeMin);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateBanUser>, I>>(base?: I): OperateBanUser {
    return OperateBanUser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateBanUser>, I>>(object: I): OperateBanUser {
    const message = createBaseOperateBanUser();
    message.securityCode = object.securityCode ?? "";
    message.nickName = object.nickName ?? "";
    message.reason = object.reason ?? "";
    message.banType = object.banType ?? 0;
    message.banTimeMin = object.banTimeMin ?? 0;
    return message;
  },
};

function createBaseOperateBanUser2(): OperateBanUser2 {
  return {
    securityCode: "",
    accountId: 0,
    nickName: "",
    reason: "",
    banType: 0,
    banTimeMin: 0,
    jiraId: "",
    isRankReset: 0,
    isRankRecovery: 0,
    logIdx: 0,
  };
}

export const OperateBanUser2 = {
  encode(message: OperateBanUser2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.securityCode !== "") {
      writer.uint32(10).string(message.securityCode);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint64(message.accountId);
    }
    if (message.nickName !== "") {
      writer.uint32(26).string(message.nickName);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    if (message.banType !== 0) {
      writer.uint32(40).uint32(message.banType);
    }
    if (message.banTimeMin !== 0) {
      writer.uint32(48).uint32(message.banTimeMin);
    }
    if (message.jiraId !== "") {
      writer.uint32(58).string(message.jiraId);
    }
    if (message.isRankReset !== 0) {
      writer.uint32(64).uint32(message.isRankReset);
    }
    if (message.isRankRecovery !== 0) {
      writer.uint32(72).uint32(message.isRankRecovery);
    }
    if (message.logIdx !== 0) {
      writer.uint32(80).uint64(message.logIdx);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateBanUser2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateBanUser2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityCode = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
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

          message.reason = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.banType = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.banTimeMin = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.jiraId = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.isRankReset = reader.uint32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.isRankRecovery = reader.uint32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.logIdx = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateBanUser2 {
    return {
      securityCode: isSet(object.securityCode) ? String(object.securityCode) : "",
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      nickName: isSet(object.nickName) ? String(object.nickName) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      banType: isSet(object.banType) ? Number(object.banType) : 0,
      banTimeMin: isSet(object.banTimeMin) ? Number(object.banTimeMin) : 0,
      jiraId: isSet(object.jiraId) ? String(object.jiraId) : "",
      isRankReset: isSet(object.isRankReset) ? Number(object.isRankReset) : 0,
      isRankRecovery: isSet(object.isRankRecovery) ? Number(object.isRankRecovery) : 0,
      logIdx: isSet(object.logIdx) ? Number(object.logIdx) : 0,
    };
  },

  toJSON(message: OperateBanUser2): unknown {
    const obj: any = {};
    if (message.securityCode !== "") {
      obj.securityCode = message.securityCode;
    }
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.nickName !== "") {
      obj.nickName = message.nickName;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.banType !== 0) {
      obj.banType = Math.round(message.banType);
    }
    if (message.banTimeMin !== 0) {
      obj.banTimeMin = Math.round(message.banTimeMin);
    }
    if (message.jiraId !== "") {
      obj.jiraId = message.jiraId;
    }
    if (message.isRankReset !== 0) {
      obj.isRankReset = Math.round(message.isRankReset);
    }
    if (message.isRankRecovery !== 0) {
      obj.isRankRecovery = Math.round(message.isRankRecovery);
    }
    if (message.logIdx !== 0) {
      obj.logIdx = Math.round(message.logIdx);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateBanUser2>, I>>(base?: I): OperateBanUser2 {
    return OperateBanUser2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateBanUser2>, I>>(object: I): OperateBanUser2 {
    const message = createBaseOperateBanUser2();
    message.securityCode = object.securityCode ?? "";
    message.accountId = object.accountId ?? 0;
    message.nickName = object.nickName ?? "";
    message.reason = object.reason ?? "";
    message.banType = object.banType ?? 0;
    message.banTimeMin = object.banTimeMin ?? 0;
    message.jiraId = object.jiraId ?? "";
    message.isRankReset = object.isRankReset ?? 0;
    message.isRankRecovery = object.isRankRecovery ?? 0;
    message.logIdx = object.logIdx ?? 0;
    return message;
  },
};

function createBaseOperateBanHardware(): OperateBanHardware {
  return { hardwareId: "", reason: "", banType: 0, banTimeMin: 0 };
}

export const OperateBanHardware = {
  encode(message: OperateBanHardware, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hardwareId !== "") {
      writer.uint32(10).string(message.hardwareId);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.banType !== 0) {
      writer.uint32(24).uint32(message.banType);
    }
    if (message.banTimeMin !== 0) {
      writer.uint32(32).uint32(message.banTimeMin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateBanHardware {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateBanHardware();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hardwareId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.banType = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.banTimeMin = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateBanHardware {
    return {
      hardwareId: isSet(object.hardwareId) ? String(object.hardwareId) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      banType: isSet(object.banType) ? Number(object.banType) : 0,
      banTimeMin: isSet(object.banTimeMin) ? Number(object.banTimeMin) : 0,
    };
  },

  toJSON(message: OperateBanHardware): unknown {
    const obj: any = {};
    if (message.hardwareId !== "") {
      obj.hardwareId = message.hardwareId;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.banType !== 0) {
      obj.banType = Math.round(message.banType);
    }
    if (message.banTimeMin !== 0) {
      obj.banTimeMin = Math.round(message.banTimeMin);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateBanHardware>, I>>(base?: I): OperateBanHardware {
    return OperateBanHardware.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateBanHardware>, I>>(object: I): OperateBanHardware {
    const message = createBaseOperateBanHardware();
    message.hardwareId = object.hardwareId ?? "";
    message.reason = object.reason ?? "";
    message.banType = object.banType ?? 0;
    message.banTimeMin = object.banTimeMin ?? 0;
    return message;
  },
};

function createBaseOperateCharacterInfo(): OperateCharacterInfo {
  return {
    accountId: 0,
    characterId: 0,
    nickname: "",
    characterClass: "",
    gender: "",
    registerdate: "",
    lastlogindate: "",
    inventoryItems: [],
    storageItems: [],
  };
}

export const OperateCharacterInfo = {
  encode(message: OperateCharacterInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint64(message.accountId);
    }
    if (message.characterId !== 0) {
      writer.uint32(16).uint64(message.characterId);
    }
    if (message.nickname !== "") {
      writer.uint32(26).string(message.nickname);
    }
    if (message.characterClass !== "") {
      writer.uint32(34).string(message.characterClass);
    }
    if (message.gender !== "") {
      writer.uint32(42).string(message.gender);
    }
    if (message.registerdate !== "") {
      writer.uint32(50).string(message.registerdate);
    }
    if (message.lastlogindate !== "") {
      writer.uint32(58).string(message.lastlogindate);
    }
    for (const v of message.inventoryItems) {
      SItems.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.storageItems) {
      SItems.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateCharacterInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateCharacterInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.characterId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gender = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.registerdate = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.lastlogindate = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.inventoryItems.push(SItems.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.storageItems.push(SItems.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateCharacterInfo {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      characterId: isSet(object.characterId) ? Number(object.characterId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      gender: isSet(object.gender) ? String(object.gender) : "",
      registerdate: isSet(object.registerdate) ? String(object.registerdate) : "",
      lastlogindate: isSet(object.lastlogindate) ? String(object.lastlogindate) : "",
      inventoryItems: Array.isArray(object?.inventoryItems)
        ? object.inventoryItems.map((e: any) => SItems.fromJSON(e))
        : [],
      storageItems: Array.isArray(object?.storageItems) ? object.storageItems.map((e: any) => SItems.fromJSON(e)) : [],
    };
  },

  toJSON(message: OperateCharacterInfo): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.characterId !== 0) {
      obj.characterId = Math.round(message.characterId);
    }
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    if (message.gender !== "") {
      obj.gender = message.gender;
    }
    if (message.registerdate !== "") {
      obj.registerdate = message.registerdate;
    }
    if (message.lastlogindate !== "") {
      obj.lastlogindate = message.lastlogindate;
    }
    if (message.inventoryItems?.length) {
      obj.inventoryItems = message.inventoryItems.map((e) => SItems.toJSON(e));
    }
    if (message.storageItems?.length) {
      obj.storageItems = message.storageItems.map((e) => SItems.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateCharacterInfo>, I>>(base?: I): OperateCharacterInfo {
    return OperateCharacterInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateCharacterInfo>, I>>(object: I): OperateCharacterInfo {
    const message = createBaseOperateCharacterInfo();
    message.accountId = object.accountId ?? 0;
    message.characterId = object.characterId ?? 0;
    message.nickname = object.nickname ?? "";
    message.characterClass = object.characterClass ?? "";
    message.gender = object.gender ?? "";
    message.registerdate = object.registerdate ?? "";
    message.lastlogindate = object.lastlogindate ?? "";
    message.inventoryItems = object.inventoryItems?.map((e) => SItems.fromPartial(e)) || [];
    message.storageItems = object.storageItems?.map((e) => SItems.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOperateOperateReportBodyInfo(): OperateOperateReportBodyInfo {
  return {
    reportId: 0,
    reportAccountId: 0,
    targetCharacterId: 0,
    targetNickname: "",
    gameId: 0,
    file: undefined,
    registerDate: "",
  };
}

export const OperateOperateReportBodyInfo = {
  encode(message: OperateOperateReportBodyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reportId !== 0) {
      writer.uint32(8).uint64(message.reportId);
    }
    if (message.reportAccountId !== 0) {
      writer.uint32(16).uint64(message.reportAccountId);
    }
    if (message.targetCharacterId !== 0) {
      writer.uint32(24).uint64(message.targetCharacterId);
    }
    if (message.targetNickname !== "") {
      writer.uint32(34).string(message.targetNickname);
    }
    if (message.gameId !== 0) {
      writer.uint32(40).uint64(message.gameId);
    }
    if (message.file !== undefined) {
      OperateOperateFileInfo.encode(message.file, writer.uint32(50).fork()).ldelim();
    }
    if (message.registerDate !== "") {
      writer.uint32(58).string(message.registerDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateOperateReportBodyInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateOperateReportBodyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.reportId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.reportAccountId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.targetCharacterId = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.targetNickname = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.file = OperateOperateFileInfo.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.registerDate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateOperateReportBodyInfo {
    return {
      reportId: isSet(object.reportId) ? Number(object.reportId) : 0,
      reportAccountId: isSet(object.reportAccountId) ? Number(object.reportAccountId) : 0,
      targetCharacterId: isSet(object.targetCharacterId) ? Number(object.targetCharacterId) : 0,
      targetNickname: isSet(object.targetNickname) ? String(object.targetNickname) : "",
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      file: isSet(object.file) ? OperateOperateFileInfo.fromJSON(object.file) : undefined,
      registerDate: isSet(object.registerDate) ? String(object.registerDate) : "",
    };
  },

  toJSON(message: OperateOperateReportBodyInfo): unknown {
    const obj: any = {};
    if (message.reportId !== 0) {
      obj.reportId = Math.round(message.reportId);
    }
    if (message.reportAccountId !== 0) {
      obj.reportAccountId = Math.round(message.reportAccountId);
    }
    if (message.targetCharacterId !== 0) {
      obj.targetCharacterId = Math.round(message.targetCharacterId);
    }
    if (message.targetNickname !== "") {
      obj.targetNickname = message.targetNickname;
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.file !== undefined) {
      obj.file = OperateOperateFileInfo.toJSON(message.file);
    }
    if (message.registerDate !== "") {
      obj.registerDate = message.registerDate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateOperateReportBodyInfo>, I>>(base?: I): OperateOperateReportBodyInfo {
    return OperateOperateReportBodyInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateOperateReportBodyInfo>, I>>(object: I): OperateOperateReportBodyInfo {
    const message = createBaseOperateOperateReportBodyInfo();
    message.reportId = object.reportId ?? 0;
    message.reportAccountId = object.reportAccountId ?? 0;
    message.targetCharacterId = object.targetCharacterId ?? 0;
    message.targetNickname = object.targetNickname ?? "";
    message.gameId = object.gameId ?? 0;
    message.file = (object.file !== undefined && object.file !== null)
      ? OperateOperateFileInfo.fromPartial(object.file)
      : undefined;
    message.registerDate = object.registerDate ?? "";
    return message;
  },
};

function createBaseOperateOperateIronShieldInfo(): OperateOperateIronShieldInfo {
  return {
    idx: 0,
    accountId: 0,
    characterId: 0,
    nickname: "",
    callbackType: "",
    file: undefined,
    RegisterTime: "",
    hardwareIds: [],
  };
}

export const OperateOperateIronShieldInfo = {
  encode(message: OperateOperateIronShieldInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idx !== 0) {
      writer.uint32(8).uint64(message.idx);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint64(message.accountId);
    }
    if (message.characterId !== 0) {
      writer.uint32(24).uint64(message.characterId);
    }
    if (message.nickname !== "") {
      writer.uint32(34).string(message.nickname);
    }
    if (message.callbackType !== "") {
      writer.uint32(42).string(message.callbackType);
    }
    if (message.file !== undefined) {
      OperateOperateFileInfo.encode(message.file, writer.uint32(50).fork()).ldelim();
    }
    if (message.RegisterTime !== "") {
      writer.uint32(58).string(message.RegisterTime);
    }
    for (const v of message.hardwareIds) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateOperateIronShieldInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateOperateIronShieldInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.idx = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.characterId = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.callbackType = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.file = OperateOperateFileInfo.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.RegisterTime = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.hardwareIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateOperateIronShieldInfo {
    return {
      idx: isSet(object.idx) ? Number(object.idx) : 0,
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      characterId: isSet(object.characterId) ? Number(object.characterId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      callbackType: isSet(object.callbackType) ? String(object.callbackType) : "",
      file: isSet(object.file) ? OperateOperateFileInfo.fromJSON(object.file) : undefined,
      RegisterTime: isSet(object.RegisterTime) ? String(object.RegisterTime) : "",
      hardwareIds: Array.isArray(object?.hardwareIds) ? object.hardwareIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: OperateOperateIronShieldInfo): unknown {
    const obj: any = {};
    if (message.idx !== 0) {
      obj.idx = Math.round(message.idx);
    }
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.characterId !== 0) {
      obj.characterId = Math.round(message.characterId);
    }
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    if (message.callbackType !== "") {
      obj.callbackType = message.callbackType;
    }
    if (message.file !== undefined) {
      obj.file = OperateOperateFileInfo.toJSON(message.file);
    }
    if (message.RegisterTime !== "") {
      obj.RegisterTime = message.RegisterTime;
    }
    if (message.hardwareIds?.length) {
      obj.hardwareIds = message.hardwareIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateOperateIronShieldInfo>, I>>(base?: I): OperateOperateIronShieldInfo {
    return OperateOperateIronShieldInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateOperateIronShieldInfo>, I>>(object: I): OperateOperateIronShieldInfo {
    const message = createBaseOperateOperateIronShieldInfo();
    message.idx = object.idx ?? 0;
    message.accountId = object.accountId ?? 0;
    message.characterId = object.characterId ?? 0;
    message.nickname = object.nickname ?? "";
    message.callbackType = object.callbackType ?? "";
    message.file = (object.file !== undefined && object.file !== null)
      ? OperateOperateFileInfo.fromPartial(object.file)
      : undefined;
    message.RegisterTime = object.RegisterTime ?? "";
    message.hardwareIds = object.hardwareIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseOperateOperateBanUserInfos(): OperateOperateBanUserInfos {
  return {
    accountId: 0,
    banType: 0,
    logIdx: 0,
    comment: "",
    beginTime: "",
    endTime: "",
    registerTime: "",
    isHardwareBan: "",
  };
}

export const OperateOperateBanUserInfos = {
  encode(message: OperateOperateBanUserInfos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint64(message.accountId);
    }
    if (message.banType !== 0) {
      writer.uint32(16).int32(message.banType);
    }
    if (message.logIdx !== 0) {
      writer.uint32(24).uint64(message.logIdx);
    }
    if (message.comment !== "") {
      writer.uint32(34).string(message.comment);
    }
    if (message.beginTime !== "") {
      writer.uint32(42).string(message.beginTime);
    }
    if (message.endTime !== "") {
      writer.uint32(50).string(message.endTime);
    }
    if (message.registerTime !== "") {
      writer.uint32(58).string(message.registerTime);
    }
    if (message.isHardwareBan !== "") {
      writer.uint32(66).string(message.isHardwareBan);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateOperateBanUserInfos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateOperateBanUserInfos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.banType = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.logIdx = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.beginTime = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.endTime = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.registerTime = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.isHardwareBan = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateOperateBanUserInfos {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      banType: isSet(object.banType) ? Number(object.banType) : 0,
      logIdx: isSet(object.logIdx) ? Number(object.logIdx) : 0,
      comment: isSet(object.comment) ? String(object.comment) : "",
      beginTime: isSet(object.beginTime) ? String(object.beginTime) : "",
      endTime: isSet(object.endTime) ? String(object.endTime) : "",
      registerTime: isSet(object.registerTime) ? String(object.registerTime) : "",
      isHardwareBan: isSet(object.isHardwareBan) ? String(object.isHardwareBan) : "",
    };
  },

  toJSON(message: OperateOperateBanUserInfos): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.banType !== 0) {
      obj.banType = Math.round(message.banType);
    }
    if (message.logIdx !== 0) {
      obj.logIdx = Math.round(message.logIdx);
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    if (message.beginTime !== "") {
      obj.beginTime = message.beginTime;
    }
    if (message.endTime !== "") {
      obj.endTime = message.endTime;
    }
    if (message.registerTime !== "") {
      obj.registerTime = message.registerTime;
    }
    if (message.isHardwareBan !== "") {
      obj.isHardwareBan = message.isHardwareBan;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateOperateBanUserInfos>, I>>(base?: I): OperateOperateBanUserInfos {
    return OperateOperateBanUserInfos.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateOperateBanUserInfos>, I>>(object: I): OperateOperateBanUserInfos {
    const message = createBaseOperateOperateBanUserInfos();
    message.accountId = object.accountId ?? 0;
    message.banType = object.banType ?? 0;
    message.logIdx = object.logIdx ?? 0;
    message.comment = object.comment ?? "";
    message.beginTime = object.beginTime ?? "";
    message.endTime = object.endTime ?? "";
    message.registerTime = object.registerTime ?? "";
    message.isHardwareBan = object.isHardwareBan ?? "";
    return message;
  },
};

function createBaseOperateOperateLoginLogInfo(): OperateOperateLoginLogInfo {
  return { accountId: 0, loginTime: "", logoutTime: "", ipAddress: "" };
}

export const OperateOperateLoginLogInfo = {
  encode(message: OperateOperateLoginLogInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint64(message.accountId);
    }
    if (message.loginTime !== "") {
      writer.uint32(18).string(message.loginTime);
    }
    if (message.logoutTime !== "") {
      writer.uint32(26).string(message.logoutTime);
    }
    if (message.ipAddress !== "") {
      writer.uint32(34).string(message.ipAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateOperateLoginLogInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateOperateLoginLogInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.loginTime = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.logoutTime = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ipAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateOperateLoginLogInfo {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      loginTime: isSet(object.loginTime) ? String(object.loginTime) : "",
      logoutTime: isSet(object.logoutTime) ? String(object.logoutTime) : "",
      ipAddress: isSet(object.ipAddress) ? String(object.ipAddress) : "",
    };
  },

  toJSON(message: OperateOperateLoginLogInfo): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.loginTime !== "") {
      obj.loginTime = message.loginTime;
    }
    if (message.logoutTime !== "") {
      obj.logoutTime = message.logoutTime;
    }
    if (message.ipAddress !== "") {
      obj.ipAddress = message.ipAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateOperateLoginLogInfo>, I>>(base?: I): OperateOperateLoginLogInfo {
    return OperateOperateLoginLogInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateOperateLoginLogInfo>, I>>(object: I): OperateOperateLoginLogInfo {
    const message = createBaseOperateOperateLoginLogInfo();
    message.accountId = object.accountId ?? 0;
    message.loginTime = object.loginTime ?? "";
    message.logoutTime = object.logoutTime ?? "";
    message.ipAddress = object.ipAddress ?? "";
    return message;
  },
};

function createBaseOperateOperateHardwareAccountInfo(): OperateOperateHardwareAccountInfo {
  return { accountId: 0, hardwareId: "", lastUpdateDate: "", isHardwareBan: "" };
}

export const OperateOperateHardwareAccountInfo = {
  encode(message: OperateOperateHardwareAccountInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint64(message.accountId);
    }
    if (message.hardwareId !== "") {
      writer.uint32(18).string(message.hardwareId);
    }
    if (message.lastUpdateDate !== "") {
      writer.uint32(26).string(message.lastUpdateDate);
    }
    if (message.isHardwareBan !== "") {
      writer.uint32(34).string(message.isHardwareBan);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateOperateHardwareAccountInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateOperateHardwareAccountInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hardwareId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lastUpdateDate = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.isHardwareBan = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateOperateHardwareAccountInfo {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      hardwareId: isSet(object.hardwareId) ? String(object.hardwareId) : "",
      lastUpdateDate: isSet(object.lastUpdateDate) ? String(object.lastUpdateDate) : "",
      isHardwareBan: isSet(object.isHardwareBan) ? String(object.isHardwareBan) : "",
    };
  },

  toJSON(message: OperateOperateHardwareAccountInfo): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.hardwareId !== "") {
      obj.hardwareId = message.hardwareId;
    }
    if (message.lastUpdateDate !== "") {
      obj.lastUpdateDate = message.lastUpdateDate;
    }
    if (message.isHardwareBan !== "") {
      obj.isHardwareBan = message.isHardwareBan;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateOperateHardwareAccountInfo>, I>>(
    base?: I,
  ): OperateOperateHardwareAccountInfo {
    return OperateOperateHardwareAccountInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateOperateHardwareAccountInfo>, I>>(
    object: I,
  ): OperateOperateHardwareAccountInfo {
    const message = createBaseOperateOperateHardwareAccountInfo();
    message.accountId = object.accountId ?? 0;
    message.hardwareId = object.hardwareId ?? "";
    message.lastUpdateDate = object.lastUpdateDate ?? "";
    message.isHardwareBan = object.isHardwareBan ?? "";
    return message;
  },
};

function createBaseOperateOperateDuplicateHardwareInfo(): OperateOperateDuplicateHardwareInfo {
  return { accountId: 0, hardwareId: "", isAccountBan: "" };
}

export const OperateOperateDuplicateHardwareInfo = {
  encode(message: OperateOperateDuplicateHardwareInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint64(message.accountId);
    }
    if (message.hardwareId !== "") {
      writer.uint32(18).string(message.hardwareId);
    }
    if (message.isAccountBan !== "") {
      writer.uint32(26).string(message.isAccountBan);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateOperateDuplicateHardwareInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateOperateDuplicateHardwareInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hardwareId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.isAccountBan = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateOperateDuplicateHardwareInfo {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      hardwareId: isSet(object.hardwareId) ? String(object.hardwareId) : "",
      isAccountBan: isSet(object.isAccountBan) ? String(object.isAccountBan) : "",
    };
  },

  toJSON(message: OperateOperateDuplicateHardwareInfo): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.hardwareId !== "") {
      obj.hardwareId = message.hardwareId;
    }
    if (message.isAccountBan !== "") {
      obj.isAccountBan = message.isAccountBan;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateOperateDuplicateHardwareInfo>, I>>(
    base?: I,
  ): OperateOperateDuplicateHardwareInfo {
    return OperateOperateDuplicateHardwareInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateOperateDuplicateHardwareInfo>, I>>(
    object: I,
  ): OperateOperateDuplicateHardwareInfo {
    const message = createBaseOperateOperateDuplicateHardwareInfo();
    message.accountId = object.accountId ?? 0;
    message.hardwareId = object.hardwareId ?? "";
    message.isAccountBan = object.isAccountBan ?? "";
    return message;
  },
};

function createBaseOperateOperateHardwareInfo(): OperateOperateHardwareInfo {
  return { hardwareAccountInfos: [], duplicateHardwareInfos: [] };
}

export const OperateOperateHardwareInfo = {
  encode(message: OperateOperateHardwareInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hardwareAccountInfos) {
      OperateOperateHardwareAccountInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.duplicateHardwareInfos) {
      OperateOperateDuplicateHardwareInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateOperateHardwareInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateOperateHardwareInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hardwareAccountInfos.push(OperateOperateHardwareAccountInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.duplicateHardwareInfos.push(OperateOperateDuplicateHardwareInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateOperateHardwareInfo {
    return {
      hardwareAccountInfos: Array.isArray(object?.hardwareAccountInfos)
        ? object.hardwareAccountInfos.map((e: any) => OperateOperateHardwareAccountInfo.fromJSON(e))
        : [],
      duplicateHardwareInfos: Array.isArray(object?.duplicateHardwareInfos)
        ? object.duplicateHardwareInfos.map((e: any) => OperateOperateDuplicateHardwareInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OperateOperateHardwareInfo): unknown {
    const obj: any = {};
    if (message.hardwareAccountInfos?.length) {
      obj.hardwareAccountInfos = message.hardwareAccountInfos.map((e) => OperateOperateHardwareAccountInfo.toJSON(e));
    }
    if (message.duplicateHardwareInfos?.length) {
      obj.duplicateHardwareInfos = message.duplicateHardwareInfos.map((e) =>
        OperateOperateDuplicateHardwareInfo.toJSON(e)
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateOperateHardwareInfo>, I>>(base?: I): OperateOperateHardwareInfo {
    return OperateOperateHardwareInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateOperateHardwareInfo>, I>>(object: I): OperateOperateHardwareInfo {
    const message = createBaseOperateOperateHardwareInfo();
    message.hardwareAccountInfos =
      object.hardwareAccountInfos?.map((e) => OperateOperateHardwareAccountInfo.fromPartial(e)) || [];
    message.duplicateHardwareInfos =
      object.duplicateHardwareInfos?.map((e) => OperateOperateDuplicateHardwareInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOperateOperateFileInfo(): OperateOperateFileInfo {
  return { name: "", url: "" };
}

export const OperateOperateFileInfo = {
  encode(message: OperateOperateFileInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateOperateFileInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateOperateFileInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
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

  fromJSON(object: any): OperateOperateFileInfo {
    return { name: isSet(object.name) ? String(object.name) : "", url: isSet(object.url) ? String(object.url) : "" };
  },

  toJSON(message: OperateOperateFileInfo): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateOperateFileInfo>, I>>(base?: I): OperateOperateFileInfo {
    return OperateOperateFileInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateOperateFileInfo>, I>>(object: I): OperateOperateFileInfo {
    const message = createBaseOperateOperateFileInfo();
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseOperateOperateBanInfo(): OperateOperateBanInfo {
  return { accountId: "", banType: "", comment: "", registerTime: "", beginTime: "", endTime: "" };
}

export const OperateOperateBanInfo = {
  encode(message: OperateOperateBanInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.banType !== "") {
      writer.uint32(18).string(message.banType);
    }
    if (message.comment !== "") {
      writer.uint32(26).string(message.comment);
    }
    if (message.registerTime !== "") {
      writer.uint32(34).string(message.registerTime);
    }
    if (message.beginTime !== "") {
      writer.uint32(42).string(message.beginTime);
    }
    if (message.endTime !== "") {
      writer.uint32(50).string(message.endTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateOperateBanInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateOperateBanInfo();
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

          message.banType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.registerTime = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.beginTime = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.endTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateOperateBanInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      banType: isSet(object.banType) ? String(object.banType) : "",
      comment: isSet(object.comment) ? String(object.comment) : "",
      registerTime: isSet(object.registerTime) ? String(object.registerTime) : "",
      beginTime: isSet(object.beginTime) ? String(object.beginTime) : "",
      endTime: isSet(object.endTime) ? String(object.endTime) : "",
    };
  },

  toJSON(message: OperateOperateBanInfo): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.banType !== "") {
      obj.banType = message.banType;
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    if (message.registerTime !== "") {
      obj.registerTime = message.registerTime;
    }
    if (message.beginTime !== "") {
      obj.beginTime = message.beginTime;
    }
    if (message.endTime !== "") {
      obj.endTime = message.endTime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateOperateBanInfo>, I>>(base?: I): OperateOperateBanInfo {
    return OperateOperateBanInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateOperateBanInfo>, I>>(object: I): OperateOperateBanInfo {
    const message = createBaseOperateOperateBanInfo();
    message.accountId = object.accountId ?? "";
    message.banType = object.banType ?? "";
    message.comment = object.comment ?? "";
    message.registerTime = object.registerTime ?? "";
    message.beginTime = object.beginTime ?? "";
    message.endTime = object.endTime ?? "";
    return message;
  },
};

function createBaseOperateOperateBanHardwareInfo(): OperateOperateBanHardwareInfo {
  return { hardwareId: "", banType: "", comment: "", registerTime: "" };
}

export const OperateOperateBanHardwareInfo = {
  encode(message: OperateOperateBanHardwareInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hardwareId !== "") {
      writer.uint32(10).string(message.hardwareId);
    }
    if (message.banType !== "") {
      writer.uint32(18).string(message.banType);
    }
    if (message.comment !== "") {
      writer.uint32(26).string(message.comment);
    }
    if (message.registerTime !== "") {
      writer.uint32(34).string(message.registerTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateOperateBanHardwareInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateOperateBanHardwareInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hardwareId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.banType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.registerTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateOperateBanHardwareInfo {
    return {
      hardwareId: isSet(object.hardwareId) ? String(object.hardwareId) : "",
      banType: isSet(object.banType) ? String(object.banType) : "",
      comment: isSet(object.comment) ? String(object.comment) : "",
      registerTime: isSet(object.registerTime) ? String(object.registerTime) : "",
    };
  },

  toJSON(message: OperateOperateBanHardwareInfo): unknown {
    const obj: any = {};
    if (message.hardwareId !== "") {
      obj.hardwareId = message.hardwareId;
    }
    if (message.banType !== "") {
      obj.banType = message.banType;
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    if (message.registerTime !== "") {
      obj.registerTime = message.registerTime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateOperateBanHardwareInfo>, I>>(base?: I): OperateOperateBanHardwareInfo {
    return OperateOperateBanHardwareInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateOperateBanHardwareInfo>, I>>(
    object: I,
  ): OperateOperateBanHardwareInfo {
    const message = createBaseOperateOperateBanHardwareInfo();
    message.hardwareId = object.hardwareId ?? "";
    message.banType = object.banType ?? "";
    message.comment = object.comment ?? "";
    message.registerTime = object.registerTime ?? "";
    return message;
  },
};

function createBaseOperateOperatePlatformInfo(): OperateOperatePlatformInfo {
  return { ironmaceid: "", email: "", username: "", accountNickName: "" };
}

export const OperateOperatePlatformInfo = {
  encode(message: OperateOperatePlatformInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ironmaceid !== "") {
      writer.uint32(10).string(message.ironmaceid);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.username !== "") {
      writer.uint32(26).string(message.username);
    }
    if (message.accountNickName !== "") {
      writer.uint32(34).string(message.accountNickName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateOperatePlatformInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateOperatePlatformInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ironmaceid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.username = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.accountNickName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateOperatePlatformInfo {
    return {
      ironmaceid: isSet(object.ironmaceid) ? String(object.ironmaceid) : "",
      email: isSet(object.email) ? String(object.email) : "",
      username: isSet(object.username) ? String(object.username) : "",
      accountNickName: isSet(object.accountNickName) ? String(object.accountNickName) : "",
    };
  },

  toJSON(message: OperateOperatePlatformInfo): unknown {
    const obj: any = {};
    if (message.ironmaceid !== "") {
      obj.ironmaceid = message.ironmaceid;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.accountNickName !== "") {
      obj.accountNickName = message.accountNickName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateOperatePlatformInfo>, I>>(base?: I): OperateOperatePlatformInfo {
    return OperateOperatePlatformInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateOperatePlatformInfo>, I>>(object: I): OperateOperatePlatformInfo {
    const message = createBaseOperateOperatePlatformInfo();
    message.ironmaceid = object.ironmaceid ?? "";
    message.email = object.email ?? "";
    message.username = object.username ?? "";
    message.accountNickName = object.accountNickName ?? "";
    return message;
  },
};

function createBaseOperateAllHackInfo(): OperateAllHackInfo {
  return {
    characterInfos: [],
    reportBodyInfos: [],
    ironShieldInfos: [],
    banUserInfos: [],
    loginLogInfos: [],
    hardwareAccountInfos: [],
    duplicateHardwareInfos: [],
    fileInfos: [],
    banInfos: [],
    banHardwareInfos: [],
    hackInfos: undefined,
    findBanList: [],
    banList: [],
    platformInfo: undefined,
  };
}

export const OperateAllHackInfo = {
  encode(message: OperateAllHackInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.characterInfos) {
      OperateCharacterInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.reportBodyInfos) {
      OperateOperateReportBodyInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.ironShieldInfos) {
      OperateOperateIronShieldInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.banUserInfos) {
      OperateOperateBanUserInfos.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.loginLogInfos) {
      OperateOperateLoginLogInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.hardwareAccountInfos) {
      OperateOperateHardwareAccountInfo.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.duplicateHardwareInfos) {
      OperateOperateDuplicateHardwareInfo.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.fileInfos) {
      OperateOperateFileInfo.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.banInfos) {
      OperateOperateBanInfo.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.banHardwareInfos) {
      OperateOperateBanHardwareInfo.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.hackInfos !== undefined) {
      OperateHacklog.encode(message.hackInfos, writer.uint32(90).fork()).ldelim();
    }
    writer.uint32(98).fork();
    for (const v of message.findBanList) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(106).fork();
    for (const v of message.banList) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.platformInfo !== undefined) {
      OperateOperatePlatformInfo.encode(message.platformInfo, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateAllHackInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateAllHackInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.characterInfos.push(OperateCharacterInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reportBodyInfos.push(OperateOperateReportBodyInfo.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ironShieldInfos.push(OperateOperateIronShieldInfo.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.banUserInfos.push(OperateOperateBanUserInfos.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.loginLogInfos.push(OperateOperateLoginLogInfo.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.hardwareAccountInfos.push(OperateOperateHardwareAccountInfo.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.duplicateHardwareInfos.push(OperateOperateDuplicateHardwareInfo.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.fileInfos.push(OperateOperateFileInfo.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.banInfos.push(OperateOperateBanInfo.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.banHardwareInfos.push(OperateOperateBanHardwareInfo.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.hackInfos = OperateHacklog.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag === 96) {
            message.findBanList.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 98) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.findBanList.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 13:
          if (tag === 104) {
            message.banList.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 106) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.banList.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.platformInfo = OperateOperatePlatformInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateAllHackInfo {
    return {
      characterInfos: Array.isArray(object?.characterInfos)
        ? object.characterInfos.map((e: any) => OperateCharacterInfo.fromJSON(e))
        : [],
      reportBodyInfos: Array.isArray(object?.reportBodyInfos)
        ? object.reportBodyInfos.map((e: any) => OperateOperateReportBodyInfo.fromJSON(e))
        : [],
      ironShieldInfos: Array.isArray(object?.ironShieldInfos)
        ? object.ironShieldInfos.map((e: any) => OperateOperateIronShieldInfo.fromJSON(e))
        : [],
      banUserInfos: Array.isArray(object?.banUserInfos)
        ? object.banUserInfos.map((e: any) => OperateOperateBanUserInfos.fromJSON(e))
        : [],
      loginLogInfos: Array.isArray(object?.loginLogInfos)
        ? object.loginLogInfos.map((e: any) => OperateOperateLoginLogInfo.fromJSON(e))
        : [],
      hardwareAccountInfos: Array.isArray(object?.hardwareAccountInfos)
        ? object.hardwareAccountInfos.map((e: any) => OperateOperateHardwareAccountInfo.fromJSON(e))
        : [],
      duplicateHardwareInfos: Array.isArray(object?.duplicateHardwareInfos)
        ? object.duplicateHardwareInfos.map((e: any) => OperateOperateDuplicateHardwareInfo.fromJSON(e))
        : [],
      fileInfos: Array.isArray(object?.fileInfos)
        ? object.fileInfos.map((e: any) => OperateOperateFileInfo.fromJSON(e))
        : [],
      banInfos: Array.isArray(object?.banInfos)
        ? object.banInfos.map((e: any) => OperateOperateBanInfo.fromJSON(e))
        : [],
      banHardwareInfos: Array.isArray(object?.banHardwareInfos)
        ? object.banHardwareInfos.map((e: any) => OperateOperateBanHardwareInfo.fromJSON(e))
        : [],
      hackInfos: isSet(object.hackInfos) ? OperateHacklog.fromJSON(object.hackInfos) : undefined,
      findBanList: Array.isArray(object?.findBanList)
        ? object.findBanList.map((e: any) => Number(e))
        : [],
      banList: Array.isArray(object?.banList) ? object.banList.map((e: any) => Number(e)) : [],
      platformInfo: isSet(object.platformInfo) ? OperateOperatePlatformInfo.fromJSON(object.platformInfo) : undefined,
    };
  },

  toJSON(message: OperateAllHackInfo): unknown {
    const obj: any = {};
    if (message.characterInfos?.length) {
      obj.characterInfos = message.characterInfos.map((e) => OperateCharacterInfo.toJSON(e));
    }
    if (message.reportBodyInfos?.length) {
      obj.reportBodyInfos = message.reportBodyInfos.map((e) => OperateOperateReportBodyInfo.toJSON(e));
    }
    if (message.ironShieldInfos?.length) {
      obj.ironShieldInfos = message.ironShieldInfos.map((e) => OperateOperateIronShieldInfo.toJSON(e));
    }
    if (message.banUserInfos?.length) {
      obj.banUserInfos = message.banUserInfos.map((e) => OperateOperateBanUserInfos.toJSON(e));
    }
    if (message.loginLogInfos?.length) {
      obj.loginLogInfos = message.loginLogInfos.map((e) => OperateOperateLoginLogInfo.toJSON(e));
    }
    if (message.hardwareAccountInfos?.length) {
      obj.hardwareAccountInfos = message.hardwareAccountInfos.map((e) => OperateOperateHardwareAccountInfo.toJSON(e));
    }
    if (message.duplicateHardwareInfos?.length) {
      obj.duplicateHardwareInfos = message.duplicateHardwareInfos.map((e) =>
        OperateOperateDuplicateHardwareInfo.toJSON(e)
      );
    }
    if (message.fileInfos?.length) {
      obj.fileInfos = message.fileInfos.map((e) => OperateOperateFileInfo.toJSON(e));
    }
    if (message.banInfos?.length) {
      obj.banInfos = message.banInfos.map((e) => OperateOperateBanInfo.toJSON(e));
    }
    if (message.banHardwareInfos?.length) {
      obj.banHardwareInfos = message.banHardwareInfos.map((e) => OperateOperateBanHardwareInfo.toJSON(e));
    }
    if (message.hackInfos !== undefined) {
      obj.hackInfos = OperateHacklog.toJSON(message.hackInfos);
    }
    if (message.findBanList?.length) {
      obj.findBanList = message.findBanList.map((e) => Math.round(e));
    }
    if (message.banList?.length) {
      obj.banList = message.banList.map((e) => Math.round(e));
    }
    if (message.platformInfo !== undefined) {
      obj.platformInfo = OperateOperatePlatformInfo.toJSON(message.platformInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateAllHackInfo>, I>>(base?: I): OperateAllHackInfo {
    return OperateAllHackInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateAllHackInfo>, I>>(object: I): OperateAllHackInfo {
    const message = createBaseOperateAllHackInfo();
    message.characterInfos = object.characterInfos?.map((e) => OperateCharacterInfo.fromPartial(e)) || [];
    message.reportBodyInfos = object.reportBodyInfos?.map((e) => OperateOperateReportBodyInfo.fromPartial(e)) || [];
    message.ironShieldInfos = object.ironShieldInfos?.map((e) => OperateOperateIronShieldInfo.fromPartial(e)) || [];
    message.banUserInfos = object.banUserInfos?.map((e) => OperateOperateBanUserInfos.fromPartial(e)) || [];
    message.loginLogInfos = object.loginLogInfos?.map((e) => OperateOperateLoginLogInfo.fromPartial(e)) || [];
    message.hardwareAccountInfos =
      object.hardwareAccountInfos?.map((e) => OperateOperateHardwareAccountInfo.fromPartial(e)) || [];
    message.duplicateHardwareInfos =
      object.duplicateHardwareInfos?.map((e) => OperateOperateDuplicateHardwareInfo.fromPartial(e)) || [];
    message.fileInfos = object.fileInfos?.map((e) => OperateOperateFileInfo.fromPartial(e)) || [];
    message.banInfos = object.banInfos?.map((e) => OperateOperateBanInfo.fromPartial(e)) || [];
    message.banHardwareInfos = object.banHardwareInfos?.map((e) => OperateOperateBanHardwareInfo.fromPartial(e)) || [];
    message.hackInfos = (object.hackInfos !== undefined && object.hackInfos !== null)
      ? OperateHacklog.fromPartial(object.hackInfos)
      : undefined;
    message.findBanList = object.findBanList?.map((e) => e) || [];
    message.banList = object.banList?.map((e) => e) || [];
    message.platformInfo = (object.platformInfo !== undefined && object.platformInfo !== null)
      ? OperateOperatePlatformInfo.fromPartial(object.platformInfo)
      : undefined;
    return message;
  },
};

function createBaseOperateAllReportList(): OperateAllReportList {
  return { report: [] };
}

export const OperateAllReportList = {
  encode(message: OperateAllReportList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.report) {
      OperateOperateReportBodyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateAllReportList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateAllReportList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.report.push(OperateOperateReportBodyInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateAllReportList {
    return {
      report: Array.isArray(object?.report)
        ? object.report.map((e: any) => OperateOperateReportBodyInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OperateAllReportList): unknown {
    const obj: any = {};
    if (message.report?.length) {
      obj.report = message.report.map((e) => OperateOperateReportBodyInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateAllReportList>, I>>(base?: I): OperateAllReportList {
    return OperateAllReportList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateAllReportList>, I>>(object: I): OperateAllReportList {
    const message = createBaseOperateAllReportList();
    message.report = object.report?.map((e) => OperateOperateReportBodyInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOperateAllIronShieldList(): OperateAllIronShieldList {
  return { ironShield: [] };
}

export const OperateAllIronShieldList = {
  encode(message: OperateAllIronShieldList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ironShield) {
      OperateOperateIronShieldInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateAllIronShieldList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateAllIronShieldList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ironShield.push(OperateOperateIronShieldInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateAllIronShieldList {
    return {
      ironShield: Array.isArray(object?.ironShield)
        ? object.ironShield.map((e: any) => OperateOperateIronShieldInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OperateAllIronShieldList): unknown {
    const obj: any = {};
    if (message.ironShield?.length) {
      obj.ironShield = message.ironShield.map((e) => OperateOperateIronShieldInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateAllIronShieldList>, I>>(base?: I): OperateAllIronShieldList {
    return OperateAllIronShieldList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateAllIronShieldList>, I>>(object: I): OperateAllIronShieldList {
    const message = createBaseOperateAllIronShieldList();
    message.ironShield = object.ironShield?.map((e) => OperateOperateIronShieldInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseReasonSearchBanUserInfo(): ReasonSearchBanUserInfo {
  return {
    accountId: 0,
    nickname: "",
    reason: "",
    banType: 0,
    comment: "",
    beginTime: "",
    endTime: "",
    registerTime: "",
    sortTime: 0,
  };
}

export const ReasonSearchBanUserInfo = {
  encode(message: ReasonSearchBanUserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint64(message.accountId);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    if (message.banType !== 0) {
      writer.uint32(32).int32(message.banType);
    }
    if (message.comment !== "") {
      writer.uint32(42).string(message.comment);
    }
    if (message.beginTime !== "") {
      writer.uint32(50).string(message.beginTime);
    }
    if (message.endTime !== "") {
      writer.uint32(58).string(message.endTime);
    }
    if (message.registerTime !== "") {
      writer.uint32(66).string(message.registerTime);
    }
    if (message.sortTime !== 0) {
      writer.uint32(72).uint64(message.sortTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReasonSearchBanUserInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReasonSearchBanUserInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.banType = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.beginTime = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.endTime = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.registerTime = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.sortTime = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReasonSearchBanUserInfo {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      banType: isSet(object.banType) ? Number(object.banType) : 0,
      comment: isSet(object.comment) ? String(object.comment) : "",
      beginTime: isSet(object.beginTime) ? String(object.beginTime) : "",
      endTime: isSet(object.endTime) ? String(object.endTime) : "",
      registerTime: isSet(object.registerTime) ? String(object.registerTime) : "",
      sortTime: isSet(object.sortTime) ? Number(object.sortTime) : 0,
    };
  },

  toJSON(message: ReasonSearchBanUserInfo): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.banType !== 0) {
      obj.banType = Math.round(message.banType);
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    if (message.beginTime !== "") {
      obj.beginTime = message.beginTime;
    }
    if (message.endTime !== "") {
      obj.endTime = message.endTime;
    }
    if (message.registerTime !== "") {
      obj.registerTime = message.registerTime;
    }
    if (message.sortTime !== 0) {
      obj.sortTime = Math.round(message.sortTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReasonSearchBanUserInfo>, I>>(base?: I): ReasonSearchBanUserInfo {
    return ReasonSearchBanUserInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReasonSearchBanUserInfo>, I>>(object: I): ReasonSearchBanUserInfo {
    const message = createBaseReasonSearchBanUserInfo();
    message.accountId = object.accountId ?? 0;
    message.nickname = object.nickname ?? "";
    message.reason = object.reason ?? "";
    message.banType = object.banType ?? 0;
    message.comment = object.comment ?? "";
    message.beginTime = object.beginTime ?? "";
    message.endTime = object.endTime ?? "";
    message.registerTime = object.registerTime ?? "";
    message.sortTime = object.sortTime ?? 0;
    return message;
  },
};

function createBaseOperateSearchHackReasonResult(): OperateSearchHackReasonResult {
  return { infos: [], maxPageSize: 0, currentPage: 0, searchType: 0 };
}

export const OperateSearchHackReasonResult = {
  encode(message: OperateSearchHackReasonResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      ReasonSearchBanUserInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxPageSize !== 0) {
      writer.uint32(16).int32(message.maxPageSize);
    }
    if (message.currentPage !== 0) {
      writer.uint32(24).int32(message.currentPage);
    }
    if (message.searchType !== 0) {
      writer.uint32(32).int32(message.searchType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateSearchHackReasonResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateSearchHackReasonResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(ReasonSearchBanUserInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxPageSize = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.currentPage = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.searchType = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateSearchHackReasonResult {
    return {
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => ReasonSearchBanUserInfo.fromJSON(e)) : [],
      maxPageSize: isSet(object.maxPageSize) ? Number(object.maxPageSize) : 0,
      currentPage: isSet(object.currentPage) ? Number(object.currentPage) : 0,
      searchType: isSet(object.searchType) ? Number(object.searchType) : 0,
    };
  },

  toJSON(message: OperateSearchHackReasonResult): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => ReasonSearchBanUserInfo.toJSON(e));
    }
    if (message.maxPageSize !== 0) {
      obj.maxPageSize = Math.round(message.maxPageSize);
    }
    if (message.currentPage !== 0) {
      obj.currentPage = Math.round(message.currentPage);
    }
    if (message.searchType !== 0) {
      obj.searchType = Math.round(message.searchType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateSearchHackReasonResult>, I>>(base?: I): OperateSearchHackReasonResult {
    return OperateSearchHackReasonResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateSearchHackReasonResult>, I>>(
    object: I,
  ): OperateSearchHackReasonResult {
    const message = createBaseOperateSearchHackReasonResult();
    message.infos = object.infos?.map((e) => ReasonSearchBanUserInfo.fromPartial(e)) || [];
    message.maxPageSize = object.maxPageSize ?? 0;
    message.currentPage = object.currentPage ?? 0;
    message.searchType = object.searchType ?? 0;
    return message;
  },
};

function createBaseOperateBulkBanInfo(): OperateBulkBanInfo {
  return { accountId: 0, nickname: "" };
}

export const OperateBulkBanInfo = {
  encode(message: OperateBulkBanInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint64(message.accountId);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateBulkBanInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateBulkBanInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nickname = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateBulkBanInfo {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
    };
  },

  toJSON(message: OperateBulkBanInfo): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateBulkBanInfo>, I>>(base?: I): OperateBulkBanInfo {
    return OperateBulkBanInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateBulkBanInfo>, I>>(object: I): OperateBulkBanInfo {
    const message = createBaseOperateBulkBanInfo();
    message.accountId = object.accountId ?? 0;
    message.nickname = object.nickname ?? "";
    return message;
  },
};

function createBaseOperateHackUserBanBulk(): OperateHackUserBanBulk {
  return { infos: [], reason: "", banType: 0, banTimeMin: 0, jiraId: "", withLoginHardwareBan: 0, logIdx: 0 };
}

export const OperateHackUserBanBulk = {
  encode(message: OperateHackUserBanBulk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      OperateBulkBanInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.banType !== 0) {
      writer.uint32(24).uint32(message.banType);
    }
    if (message.banTimeMin !== 0) {
      writer.uint32(32).uint32(message.banTimeMin);
    }
    if (message.jiraId !== "") {
      writer.uint32(42).string(message.jiraId);
    }
    if (message.withLoginHardwareBan !== 0) {
      writer.uint32(48).uint32(message.withLoginHardwareBan);
    }
    if (message.logIdx !== 0) {
      writer.uint32(56).uint64(message.logIdx);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateHackUserBanBulk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateHackUserBanBulk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(OperateBulkBanInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.banType = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.banTimeMin = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.jiraId = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.withLoginHardwareBan = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.logIdx = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateHackUserBanBulk {
    return {
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => OperateBulkBanInfo.fromJSON(e)) : [],
      reason: isSet(object.reason) ? String(object.reason) : "",
      banType: isSet(object.banType) ? Number(object.banType) : 0,
      banTimeMin: isSet(object.banTimeMin) ? Number(object.banTimeMin) : 0,
      jiraId: isSet(object.jiraId) ? String(object.jiraId) : "",
      withLoginHardwareBan: isSet(object.withLoginHardwareBan) ? Number(object.withLoginHardwareBan) : 0,
      logIdx: isSet(object.logIdx) ? Number(object.logIdx) : 0,
    };
  },

  toJSON(message: OperateHackUserBanBulk): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => OperateBulkBanInfo.toJSON(e));
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.banType !== 0) {
      obj.banType = Math.round(message.banType);
    }
    if (message.banTimeMin !== 0) {
      obj.banTimeMin = Math.round(message.banTimeMin);
    }
    if (message.jiraId !== "") {
      obj.jiraId = message.jiraId;
    }
    if (message.withLoginHardwareBan !== 0) {
      obj.withLoginHardwareBan = Math.round(message.withLoginHardwareBan);
    }
    if (message.logIdx !== 0) {
      obj.logIdx = Math.round(message.logIdx);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateHackUserBanBulk>, I>>(base?: I): OperateHackUserBanBulk {
    return OperateHackUserBanBulk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateHackUserBanBulk>, I>>(object: I): OperateHackUserBanBulk {
    const message = createBaseOperateHackUserBanBulk();
    message.infos = object.infos?.map((e) => OperateBulkBanInfo.fromPartial(e)) || [];
    message.reason = object.reason ?? "";
    message.banType = object.banType ?? 0;
    message.banTimeMin = object.banTimeMin ?? 0;
    message.jiraId = object.jiraId ?? "";
    message.withLoginHardwareBan = object.withLoginHardwareBan ?? 0;
    message.logIdx = object.logIdx ?? 0;
    return message;
  },
};

function createBaseOperateHackUserUnbanBulk(): OperateHackUserUnbanBulk {
  return { infos: [], reason: "", jiraId: "", withLoginHardwareBan: 0 };
}

export const OperateHackUserUnbanBulk = {
  encode(message: OperateHackUserUnbanBulk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      OperateBulkBanInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.jiraId !== "") {
      writer.uint32(26).string(message.jiraId);
    }
    if (message.withLoginHardwareBan !== 0) {
      writer.uint32(32).uint32(message.withLoginHardwareBan);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateHackUserUnbanBulk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateHackUserUnbanBulk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(OperateBulkBanInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.jiraId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.withLoginHardwareBan = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateHackUserUnbanBulk {
    return {
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => OperateBulkBanInfo.fromJSON(e)) : [],
      reason: isSet(object.reason) ? String(object.reason) : "",
      jiraId: isSet(object.jiraId) ? String(object.jiraId) : "",
      withLoginHardwareBan: isSet(object.withLoginHardwareBan) ? Number(object.withLoginHardwareBan) : 0,
    };
  },

  toJSON(message: OperateHackUserUnbanBulk): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => OperateBulkBanInfo.toJSON(e));
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.jiraId !== "") {
      obj.jiraId = message.jiraId;
    }
    if (message.withLoginHardwareBan !== 0) {
      obj.withLoginHardwareBan = Math.round(message.withLoginHardwareBan);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateHackUserUnbanBulk>, I>>(base?: I): OperateHackUserUnbanBulk {
    return OperateHackUserUnbanBulk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateHackUserUnbanBulk>, I>>(object: I): OperateHackUserUnbanBulk {
    const message = createBaseOperateHackUserUnbanBulk();
    message.infos = object.infos?.map((e) => OperateBulkBanInfo.fromPartial(e)) || [];
    message.reason = object.reason ?? "";
    message.jiraId = object.jiraId ?? "";
    message.withLoginHardwareBan = object.withLoginHardwareBan ?? 0;
    return message;
  },
};

function createBaseOperateBlacklist(): OperateBlacklist {
  return { writeType: 0, accountId: 0, reason: "" };
}

export const OperateBlacklist = {
  encode(message: OperateBlacklist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.writeType !== 0) {
      writer.uint32(8).uint32(message.writeType);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint64(message.accountId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateBlacklist {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateBlacklist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.writeType = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateBlacklist {
    return {
      writeType: isSet(object.writeType) ? Number(object.writeType) : 0,
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: OperateBlacklist): unknown {
    const obj: any = {};
    if (message.writeType !== 0) {
      obj.writeType = Math.round(message.writeType);
    }
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateBlacklist>, I>>(base?: I): OperateBlacklist {
    return OperateBlacklist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateBlacklist>, I>>(object: I): OperateBlacklist {
    const message = createBaseOperateBlacklist();
    message.writeType = object.writeType ?? 0;
    message.accountId = object.accountId ?? 0;
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseOperateAccountNameChange(): OperateAccountNameChange {
  return { accountId: 0, accountName: "" };
}

export const OperateAccountNameChange = {
  encode(message: OperateAccountNameChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint64(message.accountId);
    }
    if (message.accountName !== "") {
      writer.uint32(18).string(message.accountName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperateAccountNameChange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperateAccountNameChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accountId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accountName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperateAccountNameChange {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      accountName: isSet(object.accountName) ? String(object.accountName) : "",
    };
  },

  toJSON(message: OperateAccountNameChange): unknown {
    const obj: any = {};
    if (message.accountId !== 0) {
      obj.accountId = Math.round(message.accountId);
    }
    if (message.accountName !== "") {
      obj.accountName = message.accountName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperateAccountNameChange>, I>>(base?: I): OperateAccountNameChange {
    return OperateAccountNameChange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperateAccountNameChange>, I>>(object: I): OperateAccountNameChange {
    const message = createBaseOperateAccountNameChange();
    message.accountId = object.accountId ?? 0;
    message.accountName = object.accountName ?? "";
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
