/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { saccountNickname, SRankUserInfo } from "./_Character";

export const protobufPackage = "DC.Packet";

export enum rankingType {
  NONE = 0,
  TreasureCollector = 1,
  KillerOutlaw = 2,
  EscapeArtist = 3,
  VeteranAdventurer = 4,
  Slayer_Lich = 5,
  Slayer_GhostKing = 6,
  Slayer_SkeletonWarlord = 7,
  Slayer_CaveTroll = 8,
  Slayer_BossAll = 9,
  UNRECOGNIZED = -1,
}

export function rankingTypeFromJSON(object: any): rankingType {
  switch (object) {
    case 0:
    case "NONE":
      return rankingType.NONE;
    case 1:
    case "TreasureCollector":
      return rankingType.TreasureCollector;
    case 2:
    case "KillerOutlaw":
      return rankingType.KillerOutlaw;
    case 3:
    case "EscapeArtist":
      return rankingType.EscapeArtist;
    case 4:
    case "VeteranAdventurer":
      return rankingType.VeteranAdventurer;
    case 5:
    case "Slayer_Lich":
      return rankingType.Slayer_Lich;
    case 6:
    case "Slayer_GhostKing":
      return rankingType.Slayer_GhostKing;
    case 7:
    case "Slayer_SkeletonWarlord":
      return rankingType.Slayer_SkeletonWarlord;
    case 8:
    case "Slayer_CaveTroll":
      return rankingType.Slayer_CaveTroll;
    case 9:
    case "Slayer_BossAll":
      return rankingType.Slayer_BossAll;
    case -1:
    case "UNRECOGNIZED":
    default:
      return rankingType.UNRECOGNIZED;
  }
}

export function rankingTypeToJSON(object: rankingType): string {
  switch (object) {
    case rankingType.NONE:
      return "NONE";
    case rankingType.TreasureCollector:
      return "TreasureCollector";
    case rankingType.KillerOutlaw:
      return "KillerOutlaw";
    case rankingType.EscapeArtist:
      return "EscapeArtist";
    case rankingType.VeteranAdventurer:
      return "VeteranAdventurer";
    case rankingType.Slayer_Lich:
      return "Slayer_Lich";
    case rankingType.Slayer_GhostKing:
      return "Slayer_GhostKing";
    case rankingType.Slayer_SkeletonWarlord:
      return "Slayer_SkeletonWarlord";
    case rankingType.Slayer_CaveTroll:
      return "Slayer_CaveTroll";
    case rankingType.Slayer_BossAll:
      return "Slayer_BossAll";
    case rankingType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum contentType {
  NONE_CONTENT = 0,
  TREASURE_COLLECTOR = 1,
  KILLER_OUTLAW = 2,
  ESCAPE_ARTIST = 3,
  VETERAN_ADVENTURER = 4,
  SLAYER = 5,
  UNRECOGNIZED = -1,
}

export function contentTypeFromJSON(object: any): contentType {
  switch (object) {
    case 0:
    case "NONE_CONTENT":
      return contentType.NONE_CONTENT;
    case 1:
    case "TREASURE_COLLECTOR":
      return contentType.TREASURE_COLLECTOR;
    case 2:
    case "KILLER_OUTLAW":
      return contentType.KILLER_OUTLAW;
    case 3:
    case "ESCAPE_ARTIST":
      return contentType.ESCAPE_ARTIST;
    case 4:
    case "VETERAN_ADVENTURER":
      return contentType.VETERAN_ADVENTURER;
    case 5:
    case "SLAYER":
      return contentType.SLAYER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return contentType.UNRECOGNIZED;
  }
}

export function contentTypeToJSON(object: contentType): string {
  switch (object) {
    case contentType.NONE_CONTENT:
      return "NONE_CONTENT";
    case contentType.TREASURE_COLLECTOR:
      return "TREASURE_COLLECTOR";
    case contentType.KILLER_OUTLAW:
      return "KILLER_OUTLAW";
    case contentType.ESCAPE_ARTIST:
      return "ESCAPE_ARTIST";
    case contentType.VETERAN_ADVENTURER:
      return "VETERAN_ADVENTURER";
    case contentType.SLAYER:
      return "SLAYER";
    case contentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface sc2sRankingInfoReq {
}

export interface srankingRewardInfo {
  groupId: string;
  rewardState: number;
}

export enum srankingRewardInfo_rewardState {
  REWARD_STATE_NONE = 0,
  ACTIVE = 1,
  RECEIVED = 2,
  FINISHED = 3,
  UNRECOGNIZED = -1,
}

export function srankingRewardInfo_rewardStateFromJSON(object: any): srankingRewardInfo_rewardState {
  switch (object) {
    case 0:
    case "REWARD_STATE_NONE":
      return srankingRewardInfo_rewardState.REWARD_STATE_NONE;
    case 1:
    case "ACTIVE":
      return srankingRewardInfo_rewardState.ACTIVE;
    case 2:
    case "RECEIVED":
      return srankingRewardInfo_rewardState.RECEIVED;
    case 3:
    case "FINISHED":
      return srankingRewardInfo_rewardState.FINISHED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return srankingRewardInfo_rewardState.UNRECOGNIZED;
  }
}

export function srankingRewardInfo_rewardStateToJSON(object: srankingRewardInfo_rewardState): string {
  switch (object) {
    case srankingRewardInfo_rewardState.REWARD_STATE_NONE:
      return "REWARD_STATE_NONE";
    case srankingRewardInfo_rewardState.ACTIVE:
      return "ACTIVE";
    case srankingRewardInfo_rewardState.RECEIVED:
      return "RECEIVED";
    case srankingRewardInfo_rewardState.FINISHED:
      return "FINISHED";
    case srankingRewardInfo_rewardState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface srankingInfo {
  seasonId: string;
  beginDate: string;
  beginTime: string;
  endDate: string;
  endTime: string;
  wipeDate: string;
  wipeTime: string;
  rewardDate: string;
  rewardTime: string;
  rankInfo: SRankUserInfo[];
  rewardInfos: srankingRewardInfo[];
}

export enum srankingInfo_STATE {
  NONE = 0,
  PRESEASON = 1,
  SEASON = 2,
  UNRECOGNIZED = -1,
}

export function srankingInfo_STATEFromJSON(object: any): srankingInfo_STATE {
  switch (object) {
    case 0:
    case "NONE":
      return srankingInfo_STATE.NONE;
    case 1:
    case "PRESEASON":
      return srankingInfo_STATE.PRESEASON;
    case 2:
    case "SEASON":
      return srankingInfo_STATE.SEASON;
    case -1:
    case "UNRECOGNIZED":
    default:
      return srankingInfo_STATE.UNRECOGNIZED;
  }
}

export function srankingInfo_STATEToJSON(object: srankingInfo_STATE): string {
  switch (object) {
    case srankingInfo_STATE.NONE:
      return "NONE";
    case srankingInfo_STATE.PRESEASON:
      return "PRESEASON";
    case srankingInfo_STATE.SEASON:
      return "SEASON";
    case srankingInfo_STATE.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ss2cRankingInfoRes {
  rankingInfos: srankingInfo[];
  currentDate: string;
  currentTime: string;
}

export interface SRankRecord {
  pageIndex: number;
  rank: number;
  score: number;
  percentage: number;
  accountId: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
}

export interface sc2sRankingRangeReq {
  seasonId: string;
  sheetId: string;
  contentId: string;
  startIndex: number;
  endIndex: number;
  characterClass: string;
}

export interface ss2cRankingRangeRes {
  result: number;
  seasonId: string;
  records: SRankRecord[];
  sheetId: string;
  contentId: string;
  allRowCount: number;
  startIndex: number;
  endIndex: number;
  characterClass: string;
}

export interface sc2sRankingCharacterReq {
  seasonId: string;
  sheetId: string;
  contentId: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
}

export interface sc2sRankingRewardGetReq {
  seasonId: string;
  groupId: string;
}

export interface ss2cRankingRewardGetRes {
  result: number;
}

export interface ss2cRankingCharacterRes {
  result: number;
  seasonId: string;
  rankRecord: SRankRecord | undefined;
  sheetId: string;
  contentId: string;
  allRowCount: number;
  characterClass: string;
  playGameCount: number;
  batchGameCount: number;
}

export interface sc2sRankingApConfigReq {
  gameType: number;
  dungeonTagId: string;
}

export interface srankingApConfigRecord {
  rankAPId: string;
  requiredTotalAP: number;
}

export interface srankingEfConfigRecord {
  rankEFId: string;
  entranceFee: number;
}

export interface srankingConfigInfo {
  gameType: number;
  dungeonIdTag: string;
  apRecords: srankingApConfigRecord[];
  efRecords: srankingEfConfigRecord[];
}

export interface ss2cRankingApConfigRes {
  configInfos: srankingConfigInfo[];
}

export interface ss2cRankingHasRewardNot {
  isHasReward: number;
}

function createBasesc2sRankingInfoReq(): sc2sRankingInfoReq {
  return {};
}

export const sc2sRankingInfoReq = {
  encode(_: sc2sRankingInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sRankingInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sRankingInfoReq();
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

  fromJSON(_: any): sc2sRankingInfoReq {
    return {};
  },

  toJSON(_: sc2sRankingInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sRankingInfoReq>, I>>(base?: I): sc2sRankingInfoReq {
    return sc2sRankingInfoReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sRankingInfoReq>, I>>(_: I): sc2sRankingInfoReq {
    const message = createBasesc2sRankingInfoReq();
    return message;
  },
};

function createBasesrankingRewardInfo(): srankingRewardInfo {
  return { groupId: "", rewardState: 0 };
}

export const srankingRewardInfo = {
  encode(message: srankingRewardInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.rewardState !== 0) {
      writer.uint32(16).int32(message.rewardState);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): srankingRewardInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesrankingRewardInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.rewardState = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): srankingRewardInfo {
    return {
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
      rewardState: isSet(object.rewardState) ? Number(object.rewardState) : 0,
    };
  },

  toJSON(message: srankingRewardInfo): unknown {
    const obj: any = {};
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    if (message.rewardState !== 0) {
      obj.rewardState = Math.round(message.rewardState);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<srankingRewardInfo>, I>>(base?: I): srankingRewardInfo {
    return srankingRewardInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<srankingRewardInfo>, I>>(object: I): srankingRewardInfo {
    const message = createBasesrankingRewardInfo();
    message.groupId = object.groupId ?? "";
    message.rewardState = object.rewardState ?? 0;
    return message;
  },
};

function createBasesrankingInfo(): srankingInfo {
  return {
    seasonId: "",
    beginDate: "",
    beginTime: "",
    endDate: "",
    endTime: "",
    wipeDate: "",
    wipeTime: "",
    rewardDate: "",
    rewardTime: "",
    rankInfo: [],
    rewardInfos: [],
  };
}

export const srankingInfo = {
  encode(message: srankingInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seasonId !== "") {
      writer.uint32(18).string(message.seasonId);
    }
    if (message.beginDate !== "") {
      writer.uint32(26).string(message.beginDate);
    }
    if (message.beginTime !== "") {
      writer.uint32(34).string(message.beginTime);
    }
    if (message.endDate !== "") {
      writer.uint32(42).string(message.endDate);
    }
    if (message.endTime !== "") {
      writer.uint32(50).string(message.endTime);
    }
    if (message.wipeDate !== "") {
      writer.uint32(58).string(message.wipeDate);
    }
    if (message.wipeTime !== "") {
      writer.uint32(66).string(message.wipeTime);
    }
    if (message.rewardDate !== "") {
      writer.uint32(74).string(message.rewardDate);
    }
    if (message.rewardTime !== "") {
      writer.uint32(82).string(message.rewardTime);
    }
    for (const v of message.rankInfo) {
      SRankUserInfo.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.rewardInfos) {
      srankingRewardInfo.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): srankingInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesrankingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.seasonId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.beginDate = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.beginTime = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.endDate = reader.string();
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

          message.wipeDate = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.wipeTime = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.rewardDate = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.rewardTime = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.rankInfo.push(SRankUserInfo.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.rewardInfos.push(srankingRewardInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): srankingInfo {
    return {
      seasonId: isSet(object.seasonId) ? String(object.seasonId) : "",
      beginDate: isSet(object.beginDate) ? String(object.beginDate) : "",
      beginTime: isSet(object.beginTime) ? String(object.beginTime) : "",
      endDate: isSet(object.endDate) ? String(object.endDate) : "",
      endTime: isSet(object.endTime) ? String(object.endTime) : "",
      wipeDate: isSet(object.wipeDate) ? String(object.wipeDate) : "",
      wipeTime: isSet(object.wipeTime) ? String(object.wipeTime) : "",
      rewardDate: isSet(object.rewardDate) ? String(object.rewardDate) : "",
      rewardTime: isSet(object.rewardTime) ? String(object.rewardTime) : "",
      rankInfo: Array.isArray(object?.rankInfo) ? object.rankInfo.map((e: any) => SRankUserInfo.fromJSON(e)) : [],
      rewardInfos: Array.isArray(object?.rewardInfos)
        ? object.rewardInfos.map((e: any) => srankingRewardInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: srankingInfo): unknown {
    const obj: any = {};
    if (message.seasonId !== "") {
      obj.seasonId = message.seasonId;
    }
    if (message.beginDate !== "") {
      obj.beginDate = message.beginDate;
    }
    if (message.beginTime !== "") {
      obj.beginTime = message.beginTime;
    }
    if (message.endDate !== "") {
      obj.endDate = message.endDate;
    }
    if (message.endTime !== "") {
      obj.endTime = message.endTime;
    }
    if (message.wipeDate !== "") {
      obj.wipeDate = message.wipeDate;
    }
    if (message.wipeTime !== "") {
      obj.wipeTime = message.wipeTime;
    }
    if (message.rewardDate !== "") {
      obj.rewardDate = message.rewardDate;
    }
    if (message.rewardTime !== "") {
      obj.rewardTime = message.rewardTime;
    }
    if (message.rankInfo?.length) {
      obj.rankInfo = message.rankInfo.map((e) => SRankUserInfo.toJSON(e));
    }
    if (message.rewardInfos?.length) {
      obj.rewardInfos = message.rewardInfos.map((e) => srankingRewardInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<srankingInfo>, I>>(base?: I): srankingInfo {
    return srankingInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<srankingInfo>, I>>(object: I): srankingInfo {
    const message = createBasesrankingInfo();
    message.seasonId = object.seasonId ?? "";
    message.beginDate = object.beginDate ?? "";
    message.beginTime = object.beginTime ?? "";
    message.endDate = object.endDate ?? "";
    message.endTime = object.endTime ?? "";
    message.wipeDate = object.wipeDate ?? "";
    message.wipeTime = object.wipeTime ?? "";
    message.rewardDate = object.rewardDate ?? "";
    message.rewardTime = object.rewardTime ?? "";
    message.rankInfo = object.rankInfo?.map((e) => SRankUserInfo.fromPartial(e)) || [];
    message.rewardInfos = object.rewardInfos?.map((e) => srankingRewardInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cRankingInfoRes(): ss2cRankingInfoRes {
  return { rankingInfos: [], currentDate: "", currentTime: "" };
}

export const ss2cRankingInfoRes = {
  encode(message: ss2cRankingInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rankingInfos) {
      srankingInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentDate !== "") {
      writer.uint32(18).string(message.currentDate);
    }
    if (message.currentTime !== "") {
      writer.uint32(26).string(message.currentTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cRankingInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cRankingInfoRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rankingInfos.push(srankingInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.currentDate = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.currentTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cRankingInfoRes {
    return {
      rankingInfos: Array.isArray(object?.rankingInfos)
        ? object.rankingInfos.map((e: any) => srankingInfo.fromJSON(e))
        : [],
      currentDate: isSet(object.currentDate) ? String(object.currentDate) : "",
      currentTime: isSet(object.currentTime) ? String(object.currentTime) : "",
    };
  },

  toJSON(message: ss2cRankingInfoRes): unknown {
    const obj: any = {};
    if (message.rankingInfos?.length) {
      obj.rankingInfos = message.rankingInfos.map((e) => srankingInfo.toJSON(e));
    }
    if (message.currentDate !== "") {
      obj.currentDate = message.currentDate;
    }
    if (message.currentTime !== "") {
      obj.currentTime = message.currentTime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cRankingInfoRes>, I>>(base?: I): ss2cRankingInfoRes {
    return ss2cRankingInfoRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cRankingInfoRes>, I>>(object: I): ss2cRankingInfoRes {
    const message = createBasess2cRankingInfoRes();
    message.rankingInfos = object.rankingInfos?.map((e) => srankingInfo.fromPartial(e)) || [];
    message.currentDate = object.currentDate ?? "";
    message.currentTime = object.currentTime ?? "";
    return message;
  },
};

function createBaseSRankRecord(): SRankRecord {
  return { pageIndex: 0, rank: 0, score: 0, percentage: 0, accountId: "", nickName: undefined, characterClass: "" };
}

export const SRankRecord = {
  encode(message: SRankRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageIndex !== 0) {
      writer.uint32(8).uint32(message.pageIndex);
    }
    if (message.rank !== 0) {
      writer.uint32(16).uint32(message.rank);
    }
    if (message.score !== 0) {
      writer.uint32(24).uint32(message.score);
    }
    if (message.percentage !== 0) {
      writer.uint32(37).float(message.percentage);
    }
    if (message.accountId !== "") {
      writer.uint32(42).string(message.accountId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(50).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(58).string(message.characterClass);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SRankRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSRankRecord();
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

          message.rank = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.score = reader.uint32();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.percentage = reader.float();
          continue;
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

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.characterClass = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SRankRecord {
    return {
      pageIndex: isSet(object.pageIndex) ? Number(object.pageIndex) : 0,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      score: isSet(object.score) ? Number(object.score) : 0,
      percentage: isSet(object.percentage) ? Number(object.percentage) : 0,
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
    };
  },

  toJSON(message: SRankRecord): unknown {
    const obj: any = {};
    if (message.pageIndex !== 0) {
      obj.pageIndex = Math.round(message.pageIndex);
    }
    if (message.rank !== 0) {
      obj.rank = Math.round(message.rank);
    }
    if (message.score !== 0) {
      obj.score = Math.round(message.score);
    }
    if (message.percentage !== 0) {
      obj.percentage = message.percentage;
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SRankRecord>, I>>(base?: I): SRankRecord {
    return SRankRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SRankRecord>, I>>(object: I): SRankRecord {
    const message = createBaseSRankRecord();
    message.pageIndex = object.pageIndex ?? 0;
    message.rank = object.rank ?? 0;
    message.score = object.score ?? 0;
    message.percentage = object.percentage ?? 0;
    message.accountId = object.accountId ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    return message;
  },
};

function createBasesc2sRankingRangeReq(): sc2sRankingRangeReq {
  return { seasonId: "", sheetId: "", contentId: "", startIndex: 0, endIndex: 0, characterClass: "" };
}

export const sc2sRankingRangeReq = {
  encode(message: sc2sRankingRangeReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seasonId !== "") {
      writer.uint32(10).string(message.seasonId);
    }
    if (message.sheetId !== "") {
      writer.uint32(18).string(message.sheetId);
    }
    if (message.contentId !== "") {
      writer.uint32(26).string(message.contentId);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).uint32(message.startIndex);
    }
    if (message.endIndex !== 0) {
      writer.uint32(40).uint32(message.endIndex);
    }
    if (message.characterClass !== "") {
      writer.uint32(50).string(message.characterClass);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sRankingRangeReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sRankingRangeReq();
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
          if (tag !== 18) {
            break;
          }

          message.sheetId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contentId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.startIndex = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.endIndex = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.characterClass = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sRankingRangeReq {
    return {
      seasonId: isSet(object.seasonId) ? String(object.seasonId) : "",
      sheetId: isSet(object.sheetId) ? String(object.sheetId) : "",
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      endIndex: isSet(object.endIndex) ? Number(object.endIndex) : 0,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
    };
  },

  toJSON(message: sc2sRankingRangeReq): unknown {
    const obj: any = {};
    if (message.seasonId !== "") {
      obj.seasonId = message.seasonId;
    }
    if (message.sheetId !== "") {
      obj.sheetId = message.sheetId;
    }
    if (message.contentId !== "") {
      obj.contentId = message.contentId;
    }
    if (message.startIndex !== 0) {
      obj.startIndex = Math.round(message.startIndex);
    }
    if (message.endIndex !== 0) {
      obj.endIndex = Math.round(message.endIndex);
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sRankingRangeReq>, I>>(base?: I): sc2sRankingRangeReq {
    return sc2sRankingRangeReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sRankingRangeReq>, I>>(object: I): sc2sRankingRangeReq {
    const message = createBasesc2sRankingRangeReq();
    message.seasonId = object.seasonId ?? "";
    message.sheetId = object.sheetId ?? "";
    message.contentId = object.contentId ?? "";
    message.startIndex = object.startIndex ?? 0;
    message.endIndex = object.endIndex ?? 0;
    message.characterClass = object.characterClass ?? "";
    return message;
  },
};

function createBasess2cRankingRangeRes(): ss2cRankingRangeRes {
  return {
    result: 0,
    seasonId: "",
    records: [],
    sheetId: "",
    contentId: "",
    allRowCount: 0,
    startIndex: 0,
    endIndex: 0,
    characterClass: "",
  };
}

export const ss2cRankingRangeRes = {
  encode(message: ss2cRankingRangeRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.seasonId !== "") {
      writer.uint32(18).string(message.seasonId);
    }
    for (const v of message.records) {
      SRankRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.sheetId !== "") {
      writer.uint32(34).string(message.sheetId);
    }
    if (message.contentId !== "") {
      writer.uint32(42).string(message.contentId);
    }
    if (message.allRowCount !== 0) {
      writer.uint32(48).uint32(message.allRowCount);
    }
    if (message.startIndex !== 0) {
      writer.uint32(56).uint32(message.startIndex);
    }
    if (message.endIndex !== 0) {
      writer.uint32(64).uint32(message.endIndex);
    }
    if (message.characterClass !== "") {
      writer.uint32(74).string(message.characterClass);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cRankingRangeRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cRankingRangeRes();
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

          message.seasonId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.records.push(SRankRecord.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sheetId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.contentId = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.allRowCount = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.startIndex = reader.uint32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.endIndex = reader.uint32();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.characterClass = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cRankingRangeRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      seasonId: isSet(object.seasonId) ? String(object.seasonId) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => SRankRecord.fromJSON(e)) : [],
      sheetId: isSet(object.sheetId) ? String(object.sheetId) : "",
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
      allRowCount: isSet(object.allRowCount) ? Number(object.allRowCount) : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      endIndex: isSet(object.endIndex) ? Number(object.endIndex) : 0,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
    };
  },

  toJSON(message: ss2cRankingRangeRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.seasonId !== "") {
      obj.seasonId = message.seasonId;
    }
    if (message.records?.length) {
      obj.records = message.records.map((e) => SRankRecord.toJSON(e));
    }
    if (message.sheetId !== "") {
      obj.sheetId = message.sheetId;
    }
    if (message.contentId !== "") {
      obj.contentId = message.contentId;
    }
    if (message.allRowCount !== 0) {
      obj.allRowCount = Math.round(message.allRowCount);
    }
    if (message.startIndex !== 0) {
      obj.startIndex = Math.round(message.startIndex);
    }
    if (message.endIndex !== 0) {
      obj.endIndex = Math.round(message.endIndex);
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cRankingRangeRes>, I>>(base?: I): ss2cRankingRangeRes {
    return ss2cRankingRangeRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cRankingRangeRes>, I>>(object: I): ss2cRankingRangeRes {
    const message = createBasess2cRankingRangeRes();
    message.result = object.result ?? 0;
    message.seasonId = object.seasonId ?? "";
    message.records = object.records?.map((e) => SRankRecord.fromPartial(e)) || [];
    message.sheetId = object.sheetId ?? "";
    message.contentId = object.contentId ?? "";
    message.allRowCount = object.allRowCount ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.endIndex = object.endIndex ?? 0;
    message.characterClass = object.characterClass ?? "";
    return message;
  },
};

function createBasesc2sRankingCharacterReq(): sc2sRankingCharacterReq {
  return { seasonId: "", sheetId: "", contentId: "", nickName: undefined, characterClass: "" };
}

export const sc2sRankingCharacterReq = {
  encode(message: sc2sRankingCharacterReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seasonId !== "") {
      writer.uint32(10).string(message.seasonId);
    }
    if (message.sheetId !== "") {
      writer.uint32(18).string(message.sheetId);
    }
    if (message.contentId !== "") {
      writer.uint32(26).string(message.contentId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(34).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(42).string(message.characterClass);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sRankingCharacterReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sRankingCharacterReq();
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
          if (tag !== 18) {
            break;
          }

          message.sheetId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contentId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.characterClass = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sRankingCharacterReq {
    return {
      seasonId: isSet(object.seasonId) ? String(object.seasonId) : "",
      sheetId: isSet(object.sheetId) ? String(object.sheetId) : "",
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
    };
  },

  toJSON(message: sc2sRankingCharacterReq): unknown {
    const obj: any = {};
    if (message.seasonId !== "") {
      obj.seasonId = message.seasonId;
    }
    if (message.sheetId !== "") {
      obj.sheetId = message.sheetId;
    }
    if (message.contentId !== "") {
      obj.contentId = message.contentId;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sRankingCharacterReq>, I>>(base?: I): sc2sRankingCharacterReq {
    return sc2sRankingCharacterReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sRankingCharacterReq>, I>>(object: I): sc2sRankingCharacterReq {
    const message = createBasesc2sRankingCharacterReq();
    message.seasonId = object.seasonId ?? "";
    message.sheetId = object.sheetId ?? "";
    message.contentId = object.contentId ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    return message;
  },
};

function createBasesc2sRankingRewardGetReq(): sc2sRankingRewardGetReq {
  return { seasonId: "", groupId: "" };
}

export const sc2sRankingRewardGetReq = {
  encode(message: sc2sRankingRewardGetReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seasonId !== "") {
      writer.uint32(10).string(message.seasonId);
    }
    if (message.groupId !== "") {
      writer.uint32(18).string(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sRankingRewardGetReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sRankingRewardGetReq();
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
          if (tag !== 18) {
            break;
          }

          message.groupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sRankingRewardGetReq {
    return {
      seasonId: isSet(object.seasonId) ? String(object.seasonId) : "",
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
    };
  },

  toJSON(message: sc2sRankingRewardGetReq): unknown {
    const obj: any = {};
    if (message.seasonId !== "") {
      obj.seasonId = message.seasonId;
    }
    if (message.groupId !== "") {
      obj.groupId = message.groupId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sRankingRewardGetReq>, I>>(base?: I): sc2sRankingRewardGetReq {
    return sc2sRankingRewardGetReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sRankingRewardGetReq>, I>>(object: I): sc2sRankingRewardGetReq {
    const message = createBasesc2sRankingRewardGetReq();
    message.seasonId = object.seasonId ?? "";
    message.groupId = object.groupId ?? "";
    return message;
  },
};

function createBasess2cRankingRewardGetRes(): ss2cRankingRewardGetRes {
  return { result: 0 };
}

export const ss2cRankingRewardGetRes = {
  encode(message: ss2cRankingRewardGetRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cRankingRewardGetRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cRankingRewardGetRes();
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

  fromJSON(object: any): ss2cRankingRewardGetRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cRankingRewardGetRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cRankingRewardGetRes>, I>>(base?: I): ss2cRankingRewardGetRes {
    return ss2cRankingRewardGetRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cRankingRewardGetRes>, I>>(object: I): ss2cRankingRewardGetRes {
    const message = createBasess2cRankingRewardGetRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasess2cRankingCharacterRes(): ss2cRankingCharacterRes {
  return {
    result: 0,
    seasonId: "",
    rankRecord: undefined,
    sheetId: "",
    contentId: "",
    allRowCount: 0,
    characterClass: "",
    playGameCount: 0,
    batchGameCount: 0,
  };
}

export const ss2cRankingCharacterRes = {
  encode(message: ss2cRankingCharacterRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.seasonId !== "") {
      writer.uint32(18).string(message.seasonId);
    }
    if (message.rankRecord !== undefined) {
      SRankRecord.encode(message.rankRecord, writer.uint32(26).fork()).ldelim();
    }
    if (message.sheetId !== "") {
      writer.uint32(34).string(message.sheetId);
    }
    if (message.contentId !== "") {
      writer.uint32(42).string(message.contentId);
    }
    if (message.allRowCount !== 0) {
      writer.uint32(48).uint32(message.allRowCount);
    }
    if (message.characterClass !== "") {
      writer.uint32(58).string(message.characterClass);
    }
    if (message.playGameCount !== 0) {
      writer.uint32(64).uint32(message.playGameCount);
    }
    if (message.batchGameCount !== 0) {
      writer.uint32(72).uint32(message.batchGameCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cRankingCharacterRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cRankingCharacterRes();
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

          message.seasonId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rankRecord = SRankRecord.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sheetId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.contentId = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.allRowCount = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.playGameCount = reader.uint32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.batchGameCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cRankingCharacterRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      seasonId: isSet(object.seasonId) ? String(object.seasonId) : "",
      rankRecord: isSet(object.rankRecord) ? SRankRecord.fromJSON(object.rankRecord) : undefined,
      sheetId: isSet(object.sheetId) ? String(object.sheetId) : "",
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
      allRowCount: isSet(object.allRowCount) ? Number(object.allRowCount) : 0,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      playGameCount: isSet(object.playGameCount) ? Number(object.playGameCount) : 0,
      batchGameCount: isSet(object.batchGameCount) ? Number(object.batchGameCount) : 0,
    };
  },

  toJSON(message: ss2cRankingCharacterRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.seasonId !== "") {
      obj.seasonId = message.seasonId;
    }
    if (message.rankRecord !== undefined) {
      obj.rankRecord = SRankRecord.toJSON(message.rankRecord);
    }
    if (message.sheetId !== "") {
      obj.sheetId = message.sheetId;
    }
    if (message.contentId !== "") {
      obj.contentId = message.contentId;
    }
    if (message.allRowCount !== 0) {
      obj.allRowCount = Math.round(message.allRowCount);
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    if (message.playGameCount !== 0) {
      obj.playGameCount = Math.round(message.playGameCount);
    }
    if (message.batchGameCount !== 0) {
      obj.batchGameCount = Math.round(message.batchGameCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cRankingCharacterRes>, I>>(base?: I): ss2cRankingCharacterRes {
    return ss2cRankingCharacterRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cRankingCharacterRes>, I>>(object: I): ss2cRankingCharacterRes {
    const message = createBasess2cRankingCharacterRes();
    message.result = object.result ?? 0;
    message.seasonId = object.seasonId ?? "";
    message.rankRecord = (object.rankRecord !== undefined && object.rankRecord !== null)
      ? SRankRecord.fromPartial(object.rankRecord)
      : undefined;
    message.sheetId = object.sheetId ?? "";
    message.contentId = object.contentId ?? "";
    message.allRowCount = object.allRowCount ?? 0;
    message.characterClass = object.characterClass ?? "";
    message.playGameCount = object.playGameCount ?? 0;
    message.batchGameCount = object.batchGameCount ?? 0;
    return message;
  },
};

function createBasesc2sRankingApConfigReq(): sc2sRankingApConfigReq {
  return { gameType: 0, dungeonTagId: "" };
}

export const sc2sRankingApConfigReq = {
  encode(message: sc2sRankingApConfigReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameType !== 0) {
      writer.uint32(8).int32(message.gameType);
    }
    if (message.dungeonTagId !== "") {
      writer.uint32(18).string(message.dungeonTagId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sRankingApConfigReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sRankingApConfigReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gameType = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dungeonTagId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sRankingApConfigReq {
    return {
      gameType: isSet(object.gameType) ? Number(object.gameType) : 0,
      dungeonTagId: isSet(object.dungeonTagId) ? String(object.dungeonTagId) : "",
    };
  },

  toJSON(message: sc2sRankingApConfigReq): unknown {
    const obj: any = {};
    if (message.gameType !== 0) {
      obj.gameType = Math.round(message.gameType);
    }
    if (message.dungeonTagId !== "") {
      obj.dungeonTagId = message.dungeonTagId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sRankingApConfigReq>, I>>(base?: I): sc2sRankingApConfigReq {
    return sc2sRankingApConfigReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sRankingApConfigReq>, I>>(object: I): sc2sRankingApConfigReq {
    const message = createBasesc2sRankingApConfigReq();
    message.gameType = object.gameType ?? 0;
    message.dungeonTagId = object.dungeonTagId ?? "";
    return message;
  },
};

function createBasesrankingApConfigRecord(): srankingApConfigRecord {
  return { rankAPId: "", requiredTotalAP: 0 };
}

export const srankingApConfigRecord = {
  encode(message: srankingApConfigRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rankAPId !== "") {
      writer.uint32(10).string(message.rankAPId);
    }
    if (message.requiredTotalAP !== 0) {
      writer.uint32(16).int32(message.requiredTotalAP);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): srankingApConfigRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesrankingApConfigRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rankAPId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.requiredTotalAP = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): srankingApConfigRecord {
    return {
      rankAPId: isSet(object.rankAPId) ? String(object.rankAPId) : "",
      requiredTotalAP: isSet(object.requiredTotalAP) ? Number(object.requiredTotalAP) : 0,
    };
  },

  toJSON(message: srankingApConfigRecord): unknown {
    const obj: any = {};
    if (message.rankAPId !== "") {
      obj.rankAPId = message.rankAPId;
    }
    if (message.requiredTotalAP !== 0) {
      obj.requiredTotalAP = Math.round(message.requiredTotalAP);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<srankingApConfigRecord>, I>>(base?: I): srankingApConfigRecord {
    return srankingApConfigRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<srankingApConfigRecord>, I>>(object: I): srankingApConfigRecord {
    const message = createBasesrankingApConfigRecord();
    message.rankAPId = object.rankAPId ?? "";
    message.requiredTotalAP = object.requiredTotalAP ?? 0;
    return message;
  },
};

function createBasesrankingEfConfigRecord(): srankingEfConfigRecord {
  return { rankEFId: "", entranceFee: 0 };
}

export const srankingEfConfigRecord = {
  encode(message: srankingEfConfigRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rankEFId !== "") {
      writer.uint32(10).string(message.rankEFId);
    }
    if (message.entranceFee !== 0) {
      writer.uint32(16).int32(message.entranceFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): srankingEfConfigRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesrankingEfConfigRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rankEFId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.entranceFee = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): srankingEfConfigRecord {
    return {
      rankEFId: isSet(object.rankEFId) ? String(object.rankEFId) : "",
      entranceFee: isSet(object.entranceFee) ? Number(object.entranceFee) : 0,
    };
  },

  toJSON(message: srankingEfConfigRecord): unknown {
    const obj: any = {};
    if (message.rankEFId !== "") {
      obj.rankEFId = message.rankEFId;
    }
    if (message.entranceFee !== 0) {
      obj.entranceFee = Math.round(message.entranceFee);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<srankingEfConfigRecord>, I>>(base?: I): srankingEfConfigRecord {
    return srankingEfConfigRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<srankingEfConfigRecord>, I>>(object: I): srankingEfConfigRecord {
    const message = createBasesrankingEfConfigRecord();
    message.rankEFId = object.rankEFId ?? "";
    message.entranceFee = object.entranceFee ?? 0;
    return message;
  },
};

function createBasesrankingConfigInfo(): srankingConfigInfo {
  return { gameType: 0, dungeonIdTag: "", apRecords: [], efRecords: [] };
}

export const srankingConfigInfo = {
  encode(message: srankingConfigInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameType !== 0) {
      writer.uint32(8).int32(message.gameType);
    }
    if (message.dungeonIdTag !== "") {
      writer.uint32(18).string(message.dungeonIdTag);
    }
    for (const v of message.apRecords) {
      srankingApConfigRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.efRecords) {
      srankingEfConfigRecord.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): srankingConfigInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesrankingConfigInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gameType = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dungeonIdTag = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.apRecords.push(srankingApConfigRecord.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.efRecords.push(srankingEfConfigRecord.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): srankingConfigInfo {
    return {
      gameType: isSet(object.gameType) ? Number(object.gameType) : 0,
      dungeonIdTag: isSet(object.dungeonIdTag) ? String(object.dungeonIdTag) : "",
      apRecords: Array.isArray(object?.apRecords)
        ? object.apRecords.map((e: any) => srankingApConfigRecord.fromJSON(e))
        : [],
      efRecords: Array.isArray(object?.efRecords)
        ? object.efRecords.map((e: any) => srankingEfConfigRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: srankingConfigInfo): unknown {
    const obj: any = {};
    if (message.gameType !== 0) {
      obj.gameType = Math.round(message.gameType);
    }
    if (message.dungeonIdTag !== "") {
      obj.dungeonIdTag = message.dungeonIdTag;
    }
    if (message.apRecords?.length) {
      obj.apRecords = message.apRecords.map((e) => srankingApConfigRecord.toJSON(e));
    }
    if (message.efRecords?.length) {
      obj.efRecords = message.efRecords.map((e) => srankingEfConfigRecord.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<srankingConfigInfo>, I>>(base?: I): srankingConfigInfo {
    return srankingConfigInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<srankingConfigInfo>, I>>(object: I): srankingConfigInfo {
    const message = createBasesrankingConfigInfo();
    message.gameType = object.gameType ?? 0;
    message.dungeonIdTag = object.dungeonIdTag ?? "";
    message.apRecords = object.apRecords?.map((e) => srankingApConfigRecord.fromPartial(e)) || [];
    message.efRecords = object.efRecords?.map((e) => srankingEfConfigRecord.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cRankingApConfigRes(): ss2cRankingApConfigRes {
  return { configInfos: [] };
}

export const ss2cRankingApConfigRes = {
  encode(message: ss2cRankingApConfigRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.configInfos) {
      srankingConfigInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cRankingApConfigRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cRankingApConfigRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configInfos.push(srankingConfigInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cRankingApConfigRes {
    return {
      configInfos: Array.isArray(object?.configInfos)
        ? object.configInfos.map((e: any) => srankingConfigInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cRankingApConfigRes): unknown {
    const obj: any = {};
    if (message.configInfos?.length) {
      obj.configInfos = message.configInfos.map((e) => srankingConfigInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cRankingApConfigRes>, I>>(base?: I): ss2cRankingApConfigRes {
    return ss2cRankingApConfigRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cRankingApConfigRes>, I>>(object: I): ss2cRankingApConfigRes {
    const message = createBasess2cRankingApConfigRes();
    message.configInfos = object.configInfos?.map((e) => srankingConfigInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cRankingHasRewardNot(): ss2cRankingHasRewardNot {
  return { isHasReward: 0 };
}

export const ss2cRankingHasRewardNot = {
  encode(message: ss2cRankingHasRewardNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isHasReward !== 0) {
      writer.uint32(8).int32(message.isHasReward);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cRankingHasRewardNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cRankingHasRewardNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isHasReward = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cRankingHasRewardNot {
    return { isHasReward: isSet(object.isHasReward) ? Number(object.isHasReward) : 0 };
  },

  toJSON(message: ss2cRankingHasRewardNot): unknown {
    const obj: any = {};
    if (message.isHasReward !== 0) {
      obj.isHasReward = Math.round(message.isHasReward);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cRankingHasRewardNot>, I>>(base?: I): ss2cRankingHasRewardNot {
    return ss2cRankingHasRewardNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cRankingHasRewardNot>, I>>(object: I): ss2cRankingHasRewardNot {
    const message = createBasess2cRankingHasRewardNot();
    message.isHasReward = object.isHasReward ?? 0;
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
