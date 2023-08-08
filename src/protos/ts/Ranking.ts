/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { saccountNickname } from "./_Character";

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

export interface ss2cRankingInfoRes {
  seasonState: number;
  seasonId: string;
  beginDate: string;
  beginTime: string;
  endDate: string;
  endTime: string;
}

export enum ss2cRankingInfoRes_STATE {
  NONE = 0,
  PRESEASON = 1,
  SEASON = 2,
  UNRECOGNIZED = -1,
}

export function ss2cRankingInfoRes_STATEFromJSON(object: any): ss2cRankingInfoRes_STATE {
  switch (object) {
    case 0:
    case "NONE":
      return ss2cRankingInfoRes_STATE.NONE;
    case 1:
    case "PRESEASON":
      return ss2cRankingInfoRes_STATE.PRESEASON;
    case 2:
    case "SEASON":
      return ss2cRankingInfoRes_STATE.SEASON;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ss2cRankingInfoRes_STATE.UNRECOGNIZED;
  }
}

export function ss2cRankingInfoRes_STATEToJSON(object: ss2cRankingInfoRes_STATE): string {
  switch (object) {
    case ss2cRankingInfoRes_STATE.NONE:
      return "NONE";
    case ss2cRankingInfoRes_STATE.PRESEASON:
      return "PRESEASON";
    case ss2cRankingInfoRes_STATE.SEASON:
      return "SEASON";
    case ss2cRankingInfoRes_STATE.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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
  sheetId: string;
  contentId: string;
  startIndex: number;
  endIndex: number;
  characterClass: string;
}

export interface ss2cRankingRangeRes {
  result: number;
  records: SRankRecord[];
  sheetId: string;
  contentId: string;
  allRowCount: number;
  startIndex: number;
  endIndex: number;
  characterClass: string;
}

export interface sc2sRankingCharacterReq {
  sheetId: string;
  contentId: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
}

export interface ss2cRankingCharacterRes {
  result: number;
  rankRecord: SRankRecord | undefined;
  sheetId: string;
  contentId: string;
  allRowCount: number;
  characterClass: string;
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

function createBasess2cRankingInfoRes(): ss2cRankingInfoRes {
  return { seasonState: 0, seasonId: "", beginDate: "", beginTime: "", endDate: "", endTime: "" };
}

export const ss2cRankingInfoRes = {
  encode(message: ss2cRankingInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seasonState !== 0) {
      writer.uint32(8).uint32(message.seasonState);
    }
    if (message.seasonId !== "") {
      writer.uint32(34).string(message.seasonId);
    }
    if (message.beginDate !== "") {
      writer.uint32(18).string(message.beginDate);
    }
    if (message.beginTime !== "") {
      writer.uint32(26).string(message.beginTime);
    }
    if (message.endDate !== "") {
      writer.uint32(42).string(message.endDate);
    }
    if (message.endTime !== "") {
      writer.uint32(50).string(message.endTime);
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
          if (tag !== 8) {
            break;
          }

          message.seasonState = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.seasonId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.beginDate = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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
      seasonState: isSet(object.seasonState) ? Number(object.seasonState) : 0,
      seasonId: isSet(object.seasonId) ? String(object.seasonId) : "",
      beginDate: isSet(object.beginDate) ? String(object.beginDate) : "",
      beginTime: isSet(object.beginTime) ? String(object.beginTime) : "",
      endDate: isSet(object.endDate) ? String(object.endDate) : "",
      endTime: isSet(object.endTime) ? String(object.endTime) : "",
    };
  },

  toJSON(message: ss2cRankingInfoRes): unknown {
    const obj: any = {};
    if (message.seasonState !== 0) {
      obj.seasonState = Math.round(message.seasonState);
    }
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cRankingInfoRes>, I>>(base?: I): ss2cRankingInfoRes {
    return ss2cRankingInfoRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cRankingInfoRes>, I>>(object: I): ss2cRankingInfoRes {
    const message = createBasess2cRankingInfoRes();
    message.seasonState = object.seasonState ?? 0;
    message.seasonId = object.seasonId ?? "";
    message.beginDate = object.beginDate ?? "";
    message.beginTime = object.beginTime ?? "";
    message.endDate = object.endDate ?? "";
    message.endTime = object.endTime ?? "";
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
  return { sheetId: "", contentId: "", startIndex: 0, endIndex: 0, characterClass: "" };
}

export const sc2sRankingRangeReq = {
  encode(message: sc2sRankingRangeReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sheetId !== "") {
      writer.uint32(10).string(message.sheetId);
    }
    if (message.contentId !== "") {
      writer.uint32(18).string(message.contentId);
    }
    if (message.startIndex !== 0) {
      writer.uint32(24).uint32(message.startIndex);
    }
    if (message.endIndex !== 0) {
      writer.uint32(32).uint32(message.endIndex);
    }
    if (message.characterClass !== "") {
      writer.uint32(42).string(message.characterClass);
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

          message.sheetId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contentId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.startIndex = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.endIndex = reader.uint32();
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

  fromJSON(object: any): sc2sRankingRangeReq {
    return {
      sheetId: isSet(object.sheetId) ? String(object.sheetId) : "",
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      endIndex: isSet(object.endIndex) ? Number(object.endIndex) : 0,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
    };
  },

  toJSON(message: sc2sRankingRangeReq): unknown {
    const obj: any = {};
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
    for (const v of message.records) {
      SRankRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.sheetId !== "") {
      writer.uint32(26).string(message.sheetId);
    }
    if (message.contentId !== "") {
      writer.uint32(34).string(message.contentId);
    }
    if (message.allRowCount !== 0) {
      writer.uint32(40).uint32(message.allRowCount);
    }
    if (message.startIndex !== 0) {
      writer.uint32(48).uint32(message.startIndex);
    }
    if (message.endIndex !== 0) {
      writer.uint32(56).uint32(message.endIndex);
    }
    if (message.characterClass !== "") {
      writer.uint32(66).string(message.characterClass);
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

          message.records.push(SRankRecord.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sheetId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.contentId = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.allRowCount = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.startIndex = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.endIndex = reader.uint32();
          continue;
        case 8:
          if (tag !== 66) {
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
  return { sheetId: "", contentId: "", nickName: undefined, characterClass: "" };
}

export const sc2sRankingCharacterReq = {
  encode(message: sc2sRankingCharacterReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sheetId !== "") {
      writer.uint32(10).string(message.sheetId);
    }
    if (message.contentId !== "") {
      writer.uint32(18).string(message.contentId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(26).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(34).string(message.characterClass);
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

          message.sheetId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contentId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
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
      sheetId: isSet(object.sheetId) ? String(object.sheetId) : "",
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
    };
  },

  toJSON(message: sc2sRankingCharacterReq): unknown {
    const obj: any = {};
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
    message.sheetId = object.sheetId ?? "";
    message.contentId = object.contentId ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    return message;
  },
};

function createBasess2cRankingCharacterRes(): ss2cRankingCharacterRes {
  return { result: 0, rankRecord: undefined, sheetId: "", contentId: "", allRowCount: 0, characterClass: "" };
}

export const ss2cRankingCharacterRes = {
  encode(message: ss2cRankingCharacterRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.rankRecord !== undefined) {
      SRankRecord.encode(message.rankRecord, writer.uint32(18).fork()).ldelim();
    }
    if (message.sheetId !== "") {
      writer.uint32(26).string(message.sheetId);
    }
    if (message.contentId !== "") {
      writer.uint32(34).string(message.contentId);
    }
    if (message.allRowCount !== 0) {
      writer.uint32(40).uint32(message.allRowCount);
    }
    if (message.characterClass !== "") {
      writer.uint32(50).string(message.characterClass);
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

          message.rankRecord = SRankRecord.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sheetId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.contentId = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.allRowCount = reader.uint32();
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

  fromJSON(object: any): ss2cRankingCharacterRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      rankRecord: isSet(object.rankRecord) ? SRankRecord.fromJSON(object.rankRecord) : undefined,
      sheetId: isSet(object.sheetId) ? String(object.sheetId) : "",
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
      allRowCount: isSet(object.allRowCount) ? Number(object.allRowCount) : 0,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
    };
  },

  toJSON(message: ss2cRankingCharacterRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cRankingCharacterRes>, I>>(base?: I): ss2cRankingCharacterRes {
    return ss2cRankingCharacterRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cRankingCharacterRes>, I>>(object: I): ss2cRankingCharacterRes {
    const message = createBasess2cRankingCharacterRes();
    message.result = object.result ?? 0;
    message.rankRecord = (object.rankRecord !== undefined && object.rankRecord !== null)
      ? SRankRecord.fromPartial(object.rankRecord)
      : undefined;
    message.sheetId = object.sheetId ?? "";
    message.contentId = object.contentId ?? "";
    message.allRowCount = object.allRowCount ?? 0;
    message.characterClass = object.characterClass ?? "";
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
