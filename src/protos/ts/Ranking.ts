/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { saccountNickname } from "./_Character";

export const protobufPackage = "DC.Packet";

export enum rankingType {
  NONE = 0,
  COIN = 1,
  KILL = 2,
  ESCAPE = 3,
  ADVENTURE = 4,
  BOSSKILL_LICH = 5,
  BOSSKILL_GHOSTKING = 6,
  UNRECOGNIZED = -1,
}

export function rankingTypeFromJSON(object: any): rankingType {
  switch (object) {
    case 0:
    case "NONE":
      return rankingType.NONE;
    case 1:
    case "COIN":
      return rankingType.COIN;
    case 2:
    case "KILL":
      return rankingType.KILL;
    case 3:
    case "ESCAPE":
      return rankingType.ESCAPE;
    case 4:
    case "ADVENTURE":
      return rankingType.ADVENTURE;
    case 5:
    case "BOSSKILL_LICH":
      return rankingType.BOSSKILL_LICH;
    case 6:
    case "BOSSKILL_GHOSTKING":
      return rankingType.BOSSKILL_GHOSTKING;
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
    case rankingType.COIN:
      return "COIN";
    case rankingType.KILL:
      return "KILL";
    case rankingType.ESCAPE:
      return "ESCAPE";
    case rankingType.ADVENTURE:
      return "ADVENTURE";
    case rankingType.BOSSKILL_LICH:
      return "BOSSKILL_LICH";
    case rankingType.BOSSKILL_GHOSTKING:
      return "BOSSKILL_GHOSTKING";
    case rankingType.UNRECOGNIZED:
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
  rankType: number;
  startIndex: number;
  endIndex: number;
  characterClass: string;
}

export interface ss2cRankingRangeRes {
  result: number;
  records: SRankRecord[];
  rankType: number;
  allRowCount: number;
  startIndex: number;
  endIndex: number;
  characterClass: string;
}

export interface sc2sRankingNearbyReq {
  rankType: number;
  searchRange: number;
  searchIndex: number;
  characterClass: string;
}

export interface ss2cRankingNearbyRes {
  result: number;
  records: SRankRecord[];
  rankType: number;
  allRowCount: number;
  searchRange: number;
  characterClass: string;
}

export interface sc2sRankingCharacterReq {
  rankType: number;
  nickName: saccountNickname | undefined;
  characterClass: string;
}

export interface ss2cRankingCharacterRes {
  result: number;
  rankRecord: SRankRecord | undefined;
  rankType: number;
  allRowCount: number;
  characterClass: string;
}

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
          if (tag != 8) {
            break;
          }

          message.pageIndex = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.rank = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.score = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.percentage = reader.float();
          continue;
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

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.characterClass = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.pageIndex !== undefined && (obj.pageIndex = Math.round(message.pageIndex));
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.score !== undefined && (obj.score = Math.round(message.score));
    message.percentage !== undefined && (obj.percentage = message.percentage);
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.nickName !== undefined &&
      (obj.nickName = message.nickName ? saccountNickname.toJSON(message.nickName) : undefined);
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    return obj;
  },

  create<I extends Exact<DeepPartial<SRankRecord>, I>>(base?: I): SRankRecord {
    return SRankRecord.fromPartial(base ?? {});
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
  return { rankType: 0, startIndex: 0, endIndex: 0, characterClass: "" };
}

export const sc2sRankingRangeReq = {
  encode(message: sc2sRankingRangeReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rankType !== 0) {
      writer.uint32(8).uint32(message.rankType);
    }
    if (message.startIndex !== 0) {
      writer.uint32(16).uint32(message.startIndex);
    }
    if (message.endIndex !== 0) {
      writer.uint32(24).uint32(message.endIndex);
    }
    if (message.characterClass !== "") {
      writer.uint32(34).string(message.characterClass);
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
          if (tag != 8) {
            break;
          }

          message.rankType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.startIndex = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.endIndex = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.characterClass = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sRankingRangeReq {
    return {
      rankType: isSet(object.rankType) ? Number(object.rankType) : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      endIndex: isSet(object.endIndex) ? Number(object.endIndex) : 0,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
    };
  },

  toJSON(message: sc2sRankingRangeReq): unknown {
    const obj: any = {};
    message.rankType !== undefined && (obj.rankType = Math.round(message.rankType));
    message.startIndex !== undefined && (obj.startIndex = Math.round(message.startIndex));
    message.endIndex !== undefined && (obj.endIndex = Math.round(message.endIndex));
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sRankingRangeReq>, I>>(base?: I): sc2sRankingRangeReq {
    return sc2sRankingRangeReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sRankingRangeReq>, I>>(object: I): sc2sRankingRangeReq {
    const message = createBasesc2sRankingRangeReq();
    message.rankType = object.rankType ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.endIndex = object.endIndex ?? 0;
    message.characterClass = object.characterClass ?? "";
    return message;
  },
};

function createBasess2cRankingRangeRes(): ss2cRankingRangeRes {
  return { result: 0, records: [], rankType: 0, allRowCount: 0, startIndex: 0, endIndex: 0, characterClass: "" };
}

export const ss2cRankingRangeRes = {
  encode(message: ss2cRankingRangeRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.records) {
      SRankRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.rankType !== 0) {
      writer.uint32(24).uint32(message.rankType);
    }
    if (message.allRowCount !== 0) {
      writer.uint32(32).uint32(message.allRowCount);
    }
    if (message.startIndex !== 0) {
      writer.uint32(40).uint32(message.startIndex);
    }
    if (message.endIndex !== 0) {
      writer.uint32(48).uint32(message.endIndex);
    }
    if (message.characterClass !== "") {
      writer.uint32(58).string(message.characterClass);
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
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.records.push(SRankRecord.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.rankType = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.allRowCount = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.startIndex = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.endIndex = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.characterClass = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
      rankType: isSet(object.rankType) ? Number(object.rankType) : 0,
      allRowCount: isSet(object.allRowCount) ? Number(object.allRowCount) : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      endIndex: isSet(object.endIndex) ? Number(object.endIndex) : 0,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
    };
  },

  toJSON(message: ss2cRankingRangeRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.records) {
      obj.records = message.records.map((e) => e ? SRankRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    message.rankType !== undefined && (obj.rankType = Math.round(message.rankType));
    message.allRowCount !== undefined && (obj.allRowCount = Math.round(message.allRowCount));
    message.startIndex !== undefined && (obj.startIndex = Math.round(message.startIndex));
    message.endIndex !== undefined && (obj.endIndex = Math.round(message.endIndex));
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cRankingRangeRes>, I>>(base?: I): ss2cRankingRangeRes {
    return ss2cRankingRangeRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cRankingRangeRes>, I>>(object: I): ss2cRankingRangeRes {
    const message = createBasess2cRankingRangeRes();
    message.result = object.result ?? 0;
    message.records = object.records?.map((e) => SRankRecord.fromPartial(e)) || [];
    message.rankType = object.rankType ?? 0;
    message.allRowCount = object.allRowCount ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.endIndex = object.endIndex ?? 0;
    message.characterClass = object.characterClass ?? "";
    return message;
  },
};

function createBasesc2sRankingNearbyReq(): sc2sRankingNearbyReq {
  return { rankType: 0, searchRange: 0, searchIndex: 0, characterClass: "" };
}

export const sc2sRankingNearbyReq = {
  encode(message: sc2sRankingNearbyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rankType !== 0) {
      writer.uint32(8).uint32(message.rankType);
    }
    if (message.searchRange !== 0) {
      writer.uint32(16).uint32(message.searchRange);
    }
    if (message.searchIndex !== 0) {
      writer.uint32(24).uint32(message.searchIndex);
    }
    if (message.characterClass !== "") {
      writer.uint32(34).string(message.characterClass);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sRankingNearbyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sRankingNearbyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.rankType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.searchRange = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.searchIndex = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.characterClass = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sRankingNearbyReq {
    return {
      rankType: isSet(object.rankType) ? Number(object.rankType) : 0,
      searchRange: isSet(object.searchRange) ? Number(object.searchRange) : 0,
      searchIndex: isSet(object.searchIndex) ? Number(object.searchIndex) : 0,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
    };
  },

  toJSON(message: sc2sRankingNearbyReq): unknown {
    const obj: any = {};
    message.rankType !== undefined && (obj.rankType = Math.round(message.rankType));
    message.searchRange !== undefined && (obj.searchRange = Math.round(message.searchRange));
    message.searchIndex !== undefined && (obj.searchIndex = Math.round(message.searchIndex));
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sRankingNearbyReq>, I>>(base?: I): sc2sRankingNearbyReq {
    return sc2sRankingNearbyReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sRankingNearbyReq>, I>>(object: I): sc2sRankingNearbyReq {
    const message = createBasesc2sRankingNearbyReq();
    message.rankType = object.rankType ?? 0;
    message.searchRange = object.searchRange ?? 0;
    message.searchIndex = object.searchIndex ?? 0;
    message.characterClass = object.characterClass ?? "";
    return message;
  },
};

function createBasess2cRankingNearbyRes(): ss2cRankingNearbyRes {
  return { result: 0, records: [], rankType: 0, allRowCount: 0, searchRange: 0, characterClass: "" };
}

export const ss2cRankingNearbyRes = {
  encode(message: ss2cRankingNearbyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.records) {
      SRankRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.rankType !== 0) {
      writer.uint32(24).uint32(message.rankType);
    }
    if (message.allRowCount !== 0) {
      writer.uint32(32).uint32(message.allRowCount);
    }
    if (message.searchRange !== 0) {
      writer.uint32(40).uint32(message.searchRange);
    }
    if (message.characterClass !== "") {
      writer.uint32(50).string(message.characterClass);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cRankingNearbyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cRankingNearbyRes();
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

          message.records.push(SRankRecord.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.rankType = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.allRowCount = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.searchRange = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.characterClass = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cRankingNearbyRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      records: Array.isArray(object?.records) ? object.records.map((e: any) => SRankRecord.fromJSON(e)) : [],
      rankType: isSet(object.rankType) ? Number(object.rankType) : 0,
      allRowCount: isSet(object.allRowCount) ? Number(object.allRowCount) : 0,
      searchRange: isSet(object.searchRange) ? Number(object.searchRange) : 0,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
    };
  },

  toJSON(message: ss2cRankingNearbyRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.records) {
      obj.records = message.records.map((e) => e ? SRankRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    message.rankType !== undefined && (obj.rankType = Math.round(message.rankType));
    message.allRowCount !== undefined && (obj.allRowCount = Math.round(message.allRowCount));
    message.searchRange !== undefined && (obj.searchRange = Math.round(message.searchRange));
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cRankingNearbyRes>, I>>(base?: I): ss2cRankingNearbyRes {
    return ss2cRankingNearbyRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cRankingNearbyRes>, I>>(object: I): ss2cRankingNearbyRes {
    const message = createBasess2cRankingNearbyRes();
    message.result = object.result ?? 0;
    message.records = object.records?.map((e) => SRankRecord.fromPartial(e)) || [];
    message.rankType = object.rankType ?? 0;
    message.allRowCount = object.allRowCount ?? 0;
    message.searchRange = object.searchRange ?? 0;
    message.characterClass = object.characterClass ?? "";
    return message;
  },
};

function createBasesc2sRankingCharacterReq(): sc2sRankingCharacterReq {
  return { rankType: 0, nickName: undefined, characterClass: "" };
}

export const sc2sRankingCharacterReq = {
  encode(message: sc2sRankingCharacterReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rankType !== 0) {
      writer.uint32(8).uint32(message.rankType);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(18).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(26).string(message.characterClass);
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
          if (tag != 8) {
            break;
          }

          message.rankType = reader.uint32();
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
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sRankingCharacterReq {
    return {
      rankType: isSet(object.rankType) ? Number(object.rankType) : 0,
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
    };
  },

  toJSON(message: sc2sRankingCharacterReq): unknown {
    const obj: any = {};
    message.rankType !== undefined && (obj.rankType = Math.round(message.rankType));
    message.nickName !== undefined &&
      (obj.nickName = message.nickName ? saccountNickname.toJSON(message.nickName) : undefined);
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sRankingCharacterReq>, I>>(base?: I): sc2sRankingCharacterReq {
    return sc2sRankingCharacterReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sRankingCharacterReq>, I>>(object: I): sc2sRankingCharacterReq {
    const message = createBasesc2sRankingCharacterReq();
    message.rankType = object.rankType ?? 0;
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    return message;
  },
};

function createBasess2cRankingCharacterRes(): ss2cRankingCharacterRes {
  return { result: 0, rankRecord: undefined, rankType: 0, allRowCount: 0, characterClass: "" };
}

export const ss2cRankingCharacterRes = {
  encode(message: ss2cRankingCharacterRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.rankRecord !== undefined) {
      SRankRecord.encode(message.rankRecord, writer.uint32(18).fork()).ldelim();
    }
    if (message.rankType !== 0) {
      writer.uint32(24).uint32(message.rankType);
    }
    if (message.allRowCount !== 0) {
      writer.uint32(32).uint32(message.allRowCount);
    }
    if (message.characterClass !== "") {
      writer.uint32(42).string(message.characterClass);
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
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.rankRecord = SRankRecord.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.rankType = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.allRowCount = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.characterClass = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
      rankType: isSet(object.rankType) ? Number(object.rankType) : 0,
      allRowCount: isSet(object.allRowCount) ? Number(object.allRowCount) : 0,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
    };
  },

  toJSON(message: ss2cRankingCharacterRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.rankRecord !== undefined &&
      (obj.rankRecord = message.rankRecord ? SRankRecord.toJSON(message.rankRecord) : undefined);
    message.rankType !== undefined && (obj.rankType = Math.round(message.rankType));
    message.allRowCount !== undefined && (obj.allRowCount = Math.round(message.allRowCount));
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cRankingCharacterRes>, I>>(base?: I): ss2cRankingCharacterRes {
    return ss2cRankingCharacterRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cRankingCharacterRes>, I>>(object: I): ss2cRankingCharacterRes {
    const message = createBasess2cRankingCharacterRes();
    message.result = object.result ?? 0;
    message.rankRecord = (object.rankRecord !== undefined && object.rankRecord !== null)
      ? SRankRecord.fromPartial(object.rankRecord)
      : undefined;
    message.rankType = object.rankType ?? 0;
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
