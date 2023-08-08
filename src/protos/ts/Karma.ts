/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { saccountNickname } from "./_Character";

export const protobufPackage = "DC.Packet";

export interface skarmaCharacterInfo {
  accountId: string;
  characterId: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
  gender: number;
  isVote: number;
  karmaAction: number;
  karmaStatus: number;
}

export interface skarmaMostRecentMatchInfo {
  matchIdx: number;
  characterInfos: skarmaCharacterInfo[];
}

export interface sc2sKarmaReportListReq {
}

export interface ss2cKarmaReportListRes {
  matchInfos: skarmaMostRecentMatchInfo[];
  currentTicketCount: number;
  collectionStepCount: number;
  maxCollectionCount: number;
  maxTicketCount: number;
}

export interface sc2sKarmaReportActionReq {
  matchIdx: number;
  accountId: string;
  characterId: string;
  action: number;
}

export interface ss2cKarmaReportActionRes {
  result: number;
  matchIdx: number;
  updateCharacterInfo: skarmaCharacterInfo | undefined;
  currentTicketCount: number;
  collectionStepCount: number;
  maxCollectionCount: number;
  maxTicketCount: number;
}

export interface ss2cKarmaRatingUpdateNot {
  updateKarmaRating: number;
  accountId: string;
  characterId: string;
}

function createBaseskarmaCharacterInfo(): skarmaCharacterInfo {
  return {
    accountId: "",
    characterId: "",
    nickName: undefined,
    characterClass: "",
    gender: 0,
    isVote: 0,
    karmaAction: 0,
    karmaStatus: 0,
  };
}

export const skarmaCharacterInfo = {
  encode(message: skarmaCharacterInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(26).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(34).string(message.characterClass);
    }
    if (message.gender !== 0) {
      writer.uint32(40).uint32(message.gender);
    }
    if (message.isVote !== 0) {
      writer.uint32(48).uint32(message.isVote);
    }
    if (message.karmaAction !== 0) {
      writer.uint32(56).uint32(message.karmaAction);
    }
    if (message.karmaStatus !== 0) {
      writer.uint32(64).uint32(message.karmaStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): skarmaCharacterInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseskarmaCharacterInfo();
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

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.characterClass = reader.string();
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

          message.isVote = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.karmaAction = reader.uint32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.karmaStatus = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): skarmaCharacterInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
      isVote: isSet(object.isVote) ? Number(object.isVote) : 0,
      karmaAction: isSet(object.karmaAction) ? Number(object.karmaAction) : 0,
      karmaStatus: isSet(object.karmaStatus) ? Number(object.karmaStatus) : 0,
    };
  },

  toJSON(message: skarmaCharacterInfo): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    if (message.gender !== 0) {
      obj.gender = Math.round(message.gender);
    }
    if (message.isVote !== 0) {
      obj.isVote = Math.round(message.isVote);
    }
    if (message.karmaAction !== 0) {
      obj.karmaAction = Math.round(message.karmaAction);
    }
    if (message.karmaStatus !== 0) {
      obj.karmaStatus = Math.round(message.karmaStatus);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<skarmaCharacterInfo>, I>>(base?: I): skarmaCharacterInfo {
    return skarmaCharacterInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<skarmaCharacterInfo>, I>>(object: I): skarmaCharacterInfo {
    const message = createBaseskarmaCharacterInfo();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    message.gender = object.gender ?? 0;
    message.isVote = object.isVote ?? 0;
    message.karmaAction = object.karmaAction ?? 0;
    message.karmaStatus = object.karmaStatus ?? 0;
    return message;
  },
};

function createBaseskarmaMostRecentMatchInfo(): skarmaMostRecentMatchInfo {
  return { matchIdx: 0, characterInfos: [] };
}

export const skarmaMostRecentMatchInfo = {
  encode(message: skarmaMostRecentMatchInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchIdx !== 0) {
      writer.uint32(8).uint32(message.matchIdx);
    }
    for (const v of message.characterInfos) {
      skarmaCharacterInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): skarmaMostRecentMatchInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseskarmaMostRecentMatchInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.matchIdx = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.characterInfos.push(skarmaCharacterInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): skarmaMostRecentMatchInfo {
    return {
      matchIdx: isSet(object.matchIdx) ? Number(object.matchIdx) : 0,
      characterInfos: Array.isArray(object?.characterInfos)
        ? object.characterInfos.map((e: any) => skarmaCharacterInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: skarmaMostRecentMatchInfo): unknown {
    const obj: any = {};
    if (message.matchIdx !== 0) {
      obj.matchIdx = Math.round(message.matchIdx);
    }
    if (message.characterInfos?.length) {
      obj.characterInfos = message.characterInfos.map((e) => skarmaCharacterInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<skarmaMostRecentMatchInfo>, I>>(base?: I): skarmaMostRecentMatchInfo {
    return skarmaMostRecentMatchInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<skarmaMostRecentMatchInfo>, I>>(object: I): skarmaMostRecentMatchInfo {
    const message = createBaseskarmaMostRecentMatchInfo();
    message.matchIdx = object.matchIdx ?? 0;
    message.characterInfos = object.characterInfos?.map((e) => skarmaCharacterInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sKarmaReportListReq(): sc2sKarmaReportListReq {
  return {};
}

export const sc2sKarmaReportListReq = {
  encode(_: sc2sKarmaReportListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sKarmaReportListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sKarmaReportListReq();
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

  fromJSON(_: any): sc2sKarmaReportListReq {
    return {};
  },

  toJSON(_: sc2sKarmaReportListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sKarmaReportListReq>, I>>(base?: I): sc2sKarmaReportListReq {
    return sc2sKarmaReportListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sKarmaReportListReq>, I>>(_: I): sc2sKarmaReportListReq {
    const message = createBasesc2sKarmaReportListReq();
    return message;
  },
};

function createBasess2cKarmaReportListRes(): ss2cKarmaReportListRes {
  return { matchInfos: [], currentTicketCount: 0, collectionStepCount: 0, maxCollectionCount: 0, maxTicketCount: 0 };
}

export const ss2cKarmaReportListRes = {
  encode(message: ss2cKarmaReportListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matchInfos) {
      skarmaMostRecentMatchInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentTicketCount !== 0) {
      writer.uint32(16).uint32(message.currentTicketCount);
    }
    if (message.collectionStepCount !== 0) {
      writer.uint32(24).uint32(message.collectionStepCount);
    }
    if (message.maxCollectionCount !== 0) {
      writer.uint32(32).uint32(message.maxCollectionCount);
    }
    if (message.maxTicketCount !== 0) {
      writer.uint32(40).uint32(message.maxTicketCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cKarmaReportListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cKarmaReportListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchInfos.push(skarmaMostRecentMatchInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.currentTicketCount = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.collectionStepCount = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.maxCollectionCount = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.maxTicketCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cKarmaReportListRes {
    return {
      matchInfos: Array.isArray(object?.matchInfos)
        ? object.matchInfos.map((e: any) => skarmaMostRecentMatchInfo.fromJSON(e))
        : [],
      currentTicketCount: isSet(object.currentTicketCount) ? Number(object.currentTicketCount) : 0,
      collectionStepCount: isSet(object.collectionStepCount) ? Number(object.collectionStepCount) : 0,
      maxCollectionCount: isSet(object.maxCollectionCount) ? Number(object.maxCollectionCount) : 0,
      maxTicketCount: isSet(object.maxTicketCount) ? Number(object.maxTicketCount) : 0,
    };
  },

  toJSON(message: ss2cKarmaReportListRes): unknown {
    const obj: any = {};
    if (message.matchInfos?.length) {
      obj.matchInfos = message.matchInfos.map((e) => skarmaMostRecentMatchInfo.toJSON(e));
    }
    if (message.currentTicketCount !== 0) {
      obj.currentTicketCount = Math.round(message.currentTicketCount);
    }
    if (message.collectionStepCount !== 0) {
      obj.collectionStepCount = Math.round(message.collectionStepCount);
    }
    if (message.maxCollectionCount !== 0) {
      obj.maxCollectionCount = Math.round(message.maxCollectionCount);
    }
    if (message.maxTicketCount !== 0) {
      obj.maxTicketCount = Math.round(message.maxTicketCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cKarmaReportListRes>, I>>(base?: I): ss2cKarmaReportListRes {
    return ss2cKarmaReportListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cKarmaReportListRes>, I>>(object: I): ss2cKarmaReportListRes {
    const message = createBasess2cKarmaReportListRes();
    message.matchInfos = object.matchInfos?.map((e) => skarmaMostRecentMatchInfo.fromPartial(e)) || [];
    message.currentTicketCount = object.currentTicketCount ?? 0;
    message.collectionStepCount = object.collectionStepCount ?? 0;
    message.maxCollectionCount = object.maxCollectionCount ?? 0;
    message.maxTicketCount = object.maxTicketCount ?? 0;
    return message;
  },
};

function createBasesc2sKarmaReportActionReq(): sc2sKarmaReportActionReq {
  return { matchIdx: 0, accountId: "", characterId: "", action: 0 };
}

export const sc2sKarmaReportActionReq = {
  encode(message: sc2sKarmaReportActionReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchIdx !== 0) {
      writer.uint32(8).uint32(message.matchIdx);
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(26).string(message.characterId);
    }
    if (message.action !== 0) {
      writer.uint32(32).uint32(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sKarmaReportActionReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sKarmaReportActionReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.matchIdx = reader.uint32();
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
          if (tag !== 32) {
            break;
          }

          message.action = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sKarmaReportActionReq {
    return {
      matchIdx: isSet(object.matchIdx) ? Number(object.matchIdx) : 0,
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      action: isSet(object.action) ? Number(object.action) : 0,
    };
  },

  toJSON(message: sc2sKarmaReportActionReq): unknown {
    const obj: any = {};
    if (message.matchIdx !== 0) {
      obj.matchIdx = Math.round(message.matchIdx);
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.action !== 0) {
      obj.action = Math.round(message.action);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sKarmaReportActionReq>, I>>(base?: I): sc2sKarmaReportActionReq {
    return sc2sKarmaReportActionReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sKarmaReportActionReq>, I>>(object: I): sc2sKarmaReportActionReq {
    const message = createBasesc2sKarmaReportActionReq();
    message.matchIdx = object.matchIdx ?? 0;
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.action = object.action ?? 0;
    return message;
  },
};

function createBasess2cKarmaReportActionRes(): ss2cKarmaReportActionRes {
  return {
    result: 0,
    matchIdx: 0,
    updateCharacterInfo: undefined,
    currentTicketCount: 0,
    collectionStepCount: 0,
    maxCollectionCount: 0,
    maxTicketCount: 0,
  };
}

export const ss2cKarmaReportActionRes = {
  encode(message: ss2cKarmaReportActionRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.matchIdx !== 0) {
      writer.uint32(16).uint32(message.matchIdx);
    }
    if (message.updateCharacterInfo !== undefined) {
      skarmaCharacterInfo.encode(message.updateCharacterInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.currentTicketCount !== 0) {
      writer.uint32(32).uint32(message.currentTicketCount);
    }
    if (message.collectionStepCount !== 0) {
      writer.uint32(40).uint32(message.collectionStepCount);
    }
    if (message.maxCollectionCount !== 0) {
      writer.uint32(48).uint32(message.maxCollectionCount);
    }
    if (message.maxTicketCount !== 0) {
      writer.uint32(56).uint32(message.maxTicketCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cKarmaReportActionRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cKarmaReportActionRes();
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

          message.matchIdx = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateCharacterInfo = skarmaCharacterInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.currentTicketCount = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.collectionStepCount = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.maxCollectionCount = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.maxTicketCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cKarmaReportActionRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      matchIdx: isSet(object.matchIdx) ? Number(object.matchIdx) : 0,
      updateCharacterInfo: isSet(object.updateCharacterInfo)
        ? skarmaCharacterInfo.fromJSON(object.updateCharacterInfo)
        : undefined,
      currentTicketCount: isSet(object.currentTicketCount) ? Number(object.currentTicketCount) : 0,
      collectionStepCount: isSet(object.collectionStepCount) ? Number(object.collectionStepCount) : 0,
      maxCollectionCount: isSet(object.maxCollectionCount) ? Number(object.maxCollectionCount) : 0,
      maxTicketCount: isSet(object.maxTicketCount) ? Number(object.maxTicketCount) : 0,
    };
  },

  toJSON(message: ss2cKarmaReportActionRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.matchIdx !== 0) {
      obj.matchIdx = Math.round(message.matchIdx);
    }
    if (message.updateCharacterInfo !== undefined) {
      obj.updateCharacterInfo = skarmaCharacterInfo.toJSON(message.updateCharacterInfo);
    }
    if (message.currentTicketCount !== 0) {
      obj.currentTicketCount = Math.round(message.currentTicketCount);
    }
    if (message.collectionStepCount !== 0) {
      obj.collectionStepCount = Math.round(message.collectionStepCount);
    }
    if (message.maxCollectionCount !== 0) {
      obj.maxCollectionCount = Math.round(message.maxCollectionCount);
    }
    if (message.maxTicketCount !== 0) {
      obj.maxTicketCount = Math.round(message.maxTicketCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cKarmaReportActionRes>, I>>(base?: I): ss2cKarmaReportActionRes {
    return ss2cKarmaReportActionRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cKarmaReportActionRes>, I>>(object: I): ss2cKarmaReportActionRes {
    const message = createBasess2cKarmaReportActionRes();
    message.result = object.result ?? 0;
    message.matchIdx = object.matchIdx ?? 0;
    message.updateCharacterInfo = (object.updateCharacterInfo !== undefined && object.updateCharacterInfo !== null)
      ? skarmaCharacterInfo.fromPartial(object.updateCharacterInfo)
      : undefined;
    message.currentTicketCount = object.currentTicketCount ?? 0;
    message.collectionStepCount = object.collectionStepCount ?? 0;
    message.maxCollectionCount = object.maxCollectionCount ?? 0;
    message.maxTicketCount = object.maxTicketCount ?? 0;
    return message;
  },
};

function createBasess2cKarmaRatingUpdateNot(): ss2cKarmaRatingUpdateNot {
  return { updateKarmaRating: 0, accountId: "", characterId: "" };
}

export const ss2cKarmaRatingUpdateNot = {
  encode(message: ss2cKarmaRatingUpdateNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updateKarmaRating !== 0) {
      writer.uint32(8).int32(message.updateKarmaRating);
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(26).string(message.characterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cKarmaRatingUpdateNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cKarmaRatingUpdateNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.updateKarmaRating = reader.int32();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cKarmaRatingUpdateNot {
    return {
      updateKarmaRating: isSet(object.updateKarmaRating) ? Number(object.updateKarmaRating) : 0,
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
    };
  },

  toJSON(message: ss2cKarmaRatingUpdateNot): unknown {
    const obj: any = {};
    if (message.updateKarmaRating !== 0) {
      obj.updateKarmaRating = Math.round(message.updateKarmaRating);
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cKarmaRatingUpdateNot>, I>>(base?: I): ss2cKarmaRatingUpdateNot {
    return ss2cKarmaRatingUpdateNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cKarmaRatingUpdateNot>, I>>(object: I): ss2cKarmaRatingUpdateNot {
    const message = createBasess2cKarmaRatingUpdateNot();
    message.updateKarmaRating = object.updateKarmaRating ?? 0;
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
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
