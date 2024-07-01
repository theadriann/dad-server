/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { SItem } from "./_Item";

export const protobufPackage = "DC.Packet";

export interface smerchantInfo {
  merchantId: string;
  remainTime: number;
  isUnidentified: number;
  merchantFlag: number;
  affinity: number;
  affinityId: string;
}

export enum smerchantInfo_FLAG {
  NONE = 0,
  QUEST = 1,
  SUCCESS = 2,
  RECOVERY = 3,
  UNRECOGNIZED = -1,
}

export function smerchantInfo_FLAGFromJSON(object: any): smerchantInfo_FLAG {
  switch (object) {
    case 0:
    case "NONE":
      return smerchantInfo_FLAG.NONE;
    case 1:
    case "QUEST":
      return smerchantInfo_FLAG.QUEST;
    case 2:
    case "SUCCESS":
      return smerchantInfo_FLAG.SUCCESS;
    case 3:
    case "RECOVERY":
      return smerchantInfo_FLAG.RECOVERY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return smerchantInfo_FLAG.UNRECOGNIZED;
  }
}

export function smerchantInfo_FLAGToJSON(object: smerchantInfo_FLAG): string {
  switch (object) {
    case smerchantInfo_FLAG.NONE:
      return "NONE";
    case smerchantInfo_FLAG.QUEST:
      return "QUEST";
    case smerchantInfo_FLAG.SUCCESS:
      return "SUCCESS";
    case smerchantInfo_FLAG.RECOVERY:
      return "RECOVERY";
    case smerchantInfo_FLAG.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface smerchantQuestContentInfo {
  contentId: string;
  contentCurrentValue: number;
}

export interface smerchantQuestInfo {
  questOrder: number;
  questId: string;
  chapterId: string;
  questFlag: number;
  missions: smerchantQuestContentInfo[];
}

export enum smerchantQuestInfo_FLAG {
  NONE = 0,
  PROGRESS = 1,
  SUCCESS = 2,
  COMPLETE = 3,
  LOCKED = 4,
  AVAILABLE = 5,
  UNRECOGNIZED = -1,
}

export function smerchantQuestInfo_FLAGFromJSON(object: any): smerchantQuestInfo_FLAG {
  switch (object) {
    case 0:
    case "NONE":
      return smerchantQuestInfo_FLAG.NONE;
    case 1:
    case "PROGRESS":
      return smerchantQuestInfo_FLAG.PROGRESS;
    case 2:
    case "SUCCESS":
      return smerchantQuestInfo_FLAG.SUCCESS;
    case 3:
    case "COMPLETE":
      return smerchantQuestInfo_FLAG.COMPLETE;
    case 4:
    case "LOCKED":
      return smerchantQuestInfo_FLAG.LOCKED;
    case 5:
    case "AVAILABLE":
      return smerchantQuestInfo_FLAG.AVAILABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return smerchantQuestInfo_FLAG.UNRECOGNIZED;
  }
}

export function smerchantQuestInfo_FLAGToJSON(object: smerchantQuestInfo_FLAG): string {
  switch (object) {
    case smerchantQuestInfo_FLAG.NONE:
      return "NONE";
    case smerchantQuestInfo_FLAG.PROGRESS:
      return "PROGRESS";
    case smerchantQuestInfo_FLAG.SUCCESS:
      return "SUCCESS";
    case smerchantQuestInfo_FLAG.COMPLETE:
      return "COMPLETE";
    case smerchantQuestInfo_FLAG.LOCKED:
      return "LOCKED";
    case smerchantQuestInfo_FLAG.AVAILABLE:
      return "AVAILABLE";
    case smerchantQuestInfo_FLAG.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface sc2sMerchantListReq {
}

export interface ss2cMerchantListRes {
  merchantList: smerchantInfo[];
}

export interface sc2sMerchantStockBuyItemListReq {
  merchantId: string;
}

export interface smerchantStockBuyItemInfo {
  stockBuyId: string;
  stockUniqueId: number;
  itemInfo: SItem | undefined;
  originPrice: number;
  finalPrice: number;
}

export interface smerchantStockCraftItemInfo {
  stockCraftId: string;
  stockUniqueId: number;
  itemInfo: SItem | undefined;
}

export interface ss2cMerchantStockBuyItemListRes {
  result: number;
  loopMessageFlag: number;
  stockList: smerchantStockBuyItemInfo[];
}

export interface sc2sMerchantStockSellBackItemListReq {
  merchantId: string;
}

export interface smerchantStockSellBackItemInfo {
  stockSellBackId: string;
  stockUniqueId: number;
}

export interface ss2cMerchantStockSellBackItemListRes {
  result: number;
  loopMessageFlag: number;
  stockList: smerchantStockSellBackItemInfo[];
}

export interface merchantTradeItemInfo {
  itemUniqueId: number;
  itemCount: number;
  itemContentsCount: number;
}

export interface smerchantTradeSlotInfo {
  inventoryId: number;
  slotId: number;
  itemId: string;
  itemUniqueId: number;
  itemCount: number;
  itemContentsCount: number;
}

export interface sc2sMerchantStockBuyReq {
  tradeId: string;
  stockUniqueId: number;
  dealItemList: merchantTradeItemInfo[];
  merchantSlotInfo: smerchantTradeSlotInfo[];
}

export interface ss2cMerchantStockBuyRes {
  result: number;
  givenItemId: string;
}

export interface smerchantStockSellBackInfo {
  tradeId: string;
  stockUniqueId: number;
  itemUniqueId: number;
}

export interface sc2sMerchantStockSellBackReq {
  sellBackInfos: smerchantStockSellBackInfo[];
  receivedInfos: smerchantTradeSlotInfo[];
}

export interface ss2cMerchantStockSellBackRes {
  result: number;
  givenItemIds: string[];
}

export interface sc2sMerchantServiceCraftListReq {
  merchantId: string;
}

export interface ss2cMerchantServiceCraftListRes {
  result: number;
  loopMessageFlag: number;
  stockCraftList: smerchantStockCraftItemInfo[];
}

export interface sc2sMerchantServiceCraftReq {
  tradeId: string;
  stockUniqueId: number;
  stockCraftList: merchantTradeItemInfo[];
  merchantSlotInfo: smerchantTradeSlotInfo[];
}

export interface ss2cMerchantServiceCraftRes {
  result: number;
  givenItemId: string;
}

export interface sc2sMerchantQuestListInfoReq {
  merchantId: string;
}

export interface ss2cMerchantQuestListInfoRes {
  result: number;
  quests: smerchantQuestInfo[];
}

export interface sc2sMerchantQuestSelectReq {
  merchantId: string;
  questId: string;
  chapterId: string;
}

export interface ss2cMerchantQuestSelectRes {
  result: number;
}

export interface sc2sMerchantQuestCompleteReq {
  merchantId: string;
  questId: string;
  chapterId: string;
  questItemList: merchantTradeItemInfo[];
  merchantSlotInfo: smerchantTradeSlotInfo[];
}

export interface ss2cMerchantQuestCompleteRes {
  result: number;
  givenMerchantId: string;
  givenQuestId: string;
  givenChapterId: string;
}

export interface sc2sMerchantQuestContentValueStackReq {
  merchantId: string;
  questId: string;
  chapterId: string;
  questItemList: merchantTradeItemInfo[];
}

export interface ss2cMerchantQuestContentValueStackRes {
  result: number;
}

export interface smerchantBaseGearInfo {
  dataUniqueId: number;
  itemInfo: SItem | undefined;
}

export interface smerchantBaseGearSaveSlotInfo {
  uniqueId: number;
  slotId: number;
}

export interface sc2sMerchantBaseGearListReq {
  merchantId: string;
}

export interface ss2cMerchantBaseGearListRes {
  result: number;
  loopMessageFlag: number;
  baseGears: smerchantBaseGearInfo[];
}

export interface sc2sMerchantBaseGearSetReq {
}

export interface ss2cMerchantBaseGearSetRes {
  equipBaseGears: SItem[];
}

export interface sc2sMerchantSaveBaseGearSetReq {
  merchantId: string;
  saveInfos: smerchantBaseGearSaveSlotInfo[];
}

export interface ss2cMerchantSaveBaseGearSetRes {
  result: number;
}

export interface sc2sMerchantEquipBaseGearSetReq {
}

export interface ss2cMerchantEquipBaseGearSetRes {
  result: number;
}

export interface sc2sMerchantServiceMindwipeInfoReq {
}

export interface ss2cMerchantServiceMindwipeInfoRes {
  remainResetTimeMS: number;
  canReRoll: number;
  resetTermMS: number;
}

export interface sc2sMerchantServiceMindwipeReq {
}

export interface ss2cMerchantServiceMindwipeRes {
  result: number;
}

export interface sc2sMerchantRecoveryListReq {
}

export interface srecoveryItemPrice {
  itemId: string;
  amount: number;
}

export interface smerchantRecoveryItemInfo {
  recoveryUniqueId: number;
  itemInfo: SItem | undefined;
  originPriceList: srecoveryItemPrice[];
  salePriceList: srecoveryItemPrice[];
  remainExpiredTimeMS: number;
}

export interface ss2cMerchantRecoveryListRes {
  infos: smerchantRecoveryItemInfo[];
}

export interface sc2sMerchantRecoveryBuyReq {
  recoveryUniqueId: number;
  dealItemList: merchantTradeItemInfo[];
  merchantSlotInfo: smerchantTradeSlotInfo[];
}

export interface ss2cMerchantRecoveryBuyRes {
  result: number;
  givenItemId: string;
}

export interface smerchantQuestLogInfo {
  merchantId: string;
  quests: smerchantQuestInfo[];
}

export interface sc2sMerchantQuestLogListReq {
}

export interface ss2cMerchantQuestLogListRes {
  result: number;
  questList: smerchantQuestLogInfo[];
}

export interface sc2sMerchantQuestLogAcceptAllReq {
}

export interface ss2cMerchantQuestLogAcceptAllRes {
  result: number;
}

export interface ss2cMerchantRecoveryItemCheckNot {
  recoveryFlag: number;
}

export enum ss2cMerchantRecoveryItemCheckNot_FLAG {
  NONE = 0,
  RECOVERY = 1,
  UNRECOGNIZED = -1,
}

export function ss2cMerchantRecoveryItemCheckNot_FLAGFromJSON(object: any): ss2cMerchantRecoveryItemCheckNot_FLAG {
  switch (object) {
    case 0:
    case "NONE":
      return ss2cMerchantRecoveryItemCheckNot_FLAG.NONE;
    case 1:
    case "RECOVERY":
      return ss2cMerchantRecoveryItemCheckNot_FLAG.RECOVERY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ss2cMerchantRecoveryItemCheckNot_FLAG.UNRECOGNIZED;
  }
}

export function ss2cMerchantRecoveryItemCheckNot_FLAGToJSON(object: ss2cMerchantRecoveryItemCheckNot_FLAG): string {
  switch (object) {
    case ss2cMerchantRecoveryItemCheckNot_FLAG.NONE:
      return "NONE";
    case ss2cMerchantRecoveryItemCheckNot_FLAG.RECOVERY:
      return "RECOVERY";
    case ss2cMerchantRecoveryItemCheckNot_FLAG.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface sc2sMerchantRecoveryCheckReq {
}

export interface ss2cMerchantRecoveryCheckRes {
  recoveryFlag: number;
}

function createBasesmerchantInfo(): smerchantInfo {
  return { merchantId: "", remainTime: 0, isUnidentified: 0, merchantFlag: 0, affinity: 0, affinityId: "" };
}

export const smerchantInfo = {
  encode(message: smerchantInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merchantId !== "") {
      writer.uint32(10).string(message.merchantId);
    }
    if (message.remainTime !== 0) {
      writer.uint32(16).uint64(message.remainTime);
    }
    if (message.isUnidentified !== 0) {
      writer.uint32(24).uint32(message.isUnidentified);
    }
    if (message.merchantFlag !== 0) {
      writer.uint32(32).uint32(message.merchantFlag);
    }
    if (message.affinity !== 0) {
      writer.uint32(40).int32(message.affinity);
    }
    if (message.affinityId !== "") {
      writer.uint32(50).string(message.affinityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smerchantInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmerchantInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.merchantId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.remainTime = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isUnidentified = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.merchantFlag = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.affinity = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.affinityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smerchantInfo {
    return {
      merchantId: isSet(object.merchantId) ? String(object.merchantId) : "",
      remainTime: isSet(object.remainTime) ? Number(object.remainTime) : 0,
      isUnidentified: isSet(object.isUnidentified) ? Number(object.isUnidentified) : 0,
      merchantFlag: isSet(object.merchantFlag) ? Number(object.merchantFlag) : 0,
      affinity: isSet(object.affinity) ? Number(object.affinity) : 0,
      affinityId: isSet(object.affinityId) ? String(object.affinityId) : "",
    };
  },

  toJSON(message: smerchantInfo): unknown {
    const obj: any = {};
    if (message.merchantId !== "") {
      obj.merchantId = message.merchantId;
    }
    if (message.remainTime !== 0) {
      obj.remainTime = Math.round(message.remainTime);
    }
    if (message.isUnidentified !== 0) {
      obj.isUnidentified = Math.round(message.isUnidentified);
    }
    if (message.merchantFlag !== 0) {
      obj.merchantFlag = Math.round(message.merchantFlag);
    }
    if (message.affinity !== 0) {
      obj.affinity = Math.round(message.affinity);
    }
    if (message.affinityId !== "") {
      obj.affinityId = message.affinityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantInfo>, I>>(base?: I): smerchantInfo {
    return smerchantInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smerchantInfo>, I>>(object: I): smerchantInfo {
    const message = createBasesmerchantInfo();
    message.merchantId = object.merchantId ?? "";
    message.remainTime = object.remainTime ?? 0;
    message.isUnidentified = object.isUnidentified ?? 0;
    message.merchantFlag = object.merchantFlag ?? 0;
    message.affinity = object.affinity ?? 0;
    message.affinityId = object.affinityId ?? "";
    return message;
  },
};

function createBasesmerchantQuestContentInfo(): smerchantQuestContentInfo {
  return { contentId: "", contentCurrentValue: 0 };
}

export const smerchantQuestContentInfo = {
  encode(message: smerchantQuestContentInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentId !== "") {
      writer.uint32(10).string(message.contentId);
    }
    if (message.contentCurrentValue !== 0) {
      writer.uint32(16).int32(message.contentCurrentValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smerchantQuestContentInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmerchantQuestContentInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contentId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.contentCurrentValue = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smerchantQuestContentInfo {
    return {
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
      contentCurrentValue: isSet(object.contentCurrentValue) ? Number(object.contentCurrentValue) : 0,
    };
  },

  toJSON(message: smerchantQuestContentInfo): unknown {
    const obj: any = {};
    if (message.contentId !== "") {
      obj.contentId = message.contentId;
    }
    if (message.contentCurrentValue !== 0) {
      obj.contentCurrentValue = Math.round(message.contentCurrentValue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantQuestContentInfo>, I>>(base?: I): smerchantQuestContentInfo {
    return smerchantQuestContentInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smerchantQuestContentInfo>, I>>(object: I): smerchantQuestContentInfo {
    const message = createBasesmerchantQuestContentInfo();
    message.contentId = object.contentId ?? "";
    message.contentCurrentValue = object.contentCurrentValue ?? 0;
    return message;
  },
};

function createBasesmerchantQuestInfo(): smerchantQuestInfo {
  return { questOrder: 0, questId: "", chapterId: "", questFlag: 0, missions: [] };
}

export const smerchantQuestInfo = {
  encode(message: smerchantQuestInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questOrder !== 0) {
      writer.uint32(8).uint32(message.questOrder);
    }
    if (message.questId !== "") {
      writer.uint32(18).string(message.questId);
    }
    if (message.chapterId !== "") {
      writer.uint32(26).string(message.chapterId);
    }
    if (message.questFlag !== 0) {
      writer.uint32(32).int32(message.questFlag);
    }
    for (const v of message.missions) {
      smerchantQuestContentInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smerchantQuestInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmerchantQuestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.questOrder = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.questId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.chapterId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.questFlag = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.missions.push(smerchantQuestContentInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smerchantQuestInfo {
    return {
      questOrder: isSet(object.questOrder) ? Number(object.questOrder) : 0,
      questId: isSet(object.questId) ? String(object.questId) : "",
      chapterId: isSet(object.chapterId) ? String(object.chapterId) : "",
      questFlag: isSet(object.questFlag) ? Number(object.questFlag) : 0,
      missions: Array.isArray(object?.missions)
        ? object.missions.map((e: any) => smerchantQuestContentInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: smerchantQuestInfo): unknown {
    const obj: any = {};
    if (message.questOrder !== 0) {
      obj.questOrder = Math.round(message.questOrder);
    }
    if (message.questId !== "") {
      obj.questId = message.questId;
    }
    if (message.chapterId !== "") {
      obj.chapterId = message.chapterId;
    }
    if (message.questFlag !== 0) {
      obj.questFlag = Math.round(message.questFlag);
    }
    if (message.missions?.length) {
      obj.missions = message.missions.map((e) => smerchantQuestContentInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantQuestInfo>, I>>(base?: I): smerchantQuestInfo {
    return smerchantQuestInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smerchantQuestInfo>, I>>(object: I): smerchantQuestInfo {
    const message = createBasesmerchantQuestInfo();
    message.questOrder = object.questOrder ?? 0;
    message.questId = object.questId ?? "";
    message.chapterId = object.chapterId ?? "";
    message.questFlag = object.questFlag ?? 0;
    message.missions = object.missions?.map((e) => smerchantQuestContentInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sMerchantListReq(): sc2sMerchantListReq {
  return {};
}

export const sc2sMerchantListReq = {
  encode(_: sc2sMerchantListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantListReq();
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

  fromJSON(_: any): sc2sMerchantListReq {
    return {};
  },

  toJSON(_: sc2sMerchantListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantListReq>, I>>(base?: I): sc2sMerchantListReq {
    return sc2sMerchantListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantListReq>, I>>(_: I): sc2sMerchantListReq {
    const message = createBasesc2sMerchantListReq();
    return message;
  },
};

function createBasess2cMerchantListRes(): ss2cMerchantListRes {
  return { merchantList: [] };
}

export const ss2cMerchantListRes = {
  encode(message: ss2cMerchantListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.merchantList) {
      smerchantInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.merchantList.push(smerchantInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantListRes {
    return {
      merchantList: Array.isArray(object?.merchantList)
        ? object.merchantList.map((e: any) => smerchantInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cMerchantListRes): unknown {
    const obj: any = {};
    if (message.merchantList?.length) {
      obj.merchantList = message.merchantList.map((e) => smerchantInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantListRes>, I>>(base?: I): ss2cMerchantListRes {
    return ss2cMerchantListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantListRes>, I>>(object: I): ss2cMerchantListRes {
    const message = createBasess2cMerchantListRes();
    message.merchantList = object.merchantList?.map((e) => smerchantInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sMerchantStockBuyItemListReq(): sc2sMerchantStockBuyItemListReq {
  return { merchantId: "" };
}

export const sc2sMerchantStockBuyItemListReq = {
  encode(message: sc2sMerchantStockBuyItemListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merchantId !== "") {
      writer.uint32(10).string(message.merchantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantStockBuyItemListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantStockBuyItemListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.merchantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMerchantStockBuyItemListReq {
    return { merchantId: isSet(object.merchantId) ? String(object.merchantId) : "" };
  },

  toJSON(message: sc2sMerchantStockBuyItemListReq): unknown {
    const obj: any = {};
    if (message.merchantId !== "") {
      obj.merchantId = message.merchantId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantStockBuyItemListReq>, I>>(base?: I): sc2sMerchantStockBuyItemListReq {
    return sc2sMerchantStockBuyItemListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantStockBuyItemListReq>, I>>(
    object: I,
  ): sc2sMerchantStockBuyItemListReq {
    const message = createBasesc2sMerchantStockBuyItemListReq();
    message.merchantId = object.merchantId ?? "";
    return message;
  },
};

function createBasesmerchantStockBuyItemInfo(): smerchantStockBuyItemInfo {
  return { stockBuyId: "", stockUniqueId: 0, itemInfo: undefined, originPrice: 0, finalPrice: 0 };
}

export const smerchantStockBuyItemInfo = {
  encode(message: smerchantStockBuyItemInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stockBuyId !== "") {
      writer.uint32(10).string(message.stockBuyId);
    }
    if (message.stockUniqueId !== 0) {
      writer.uint32(16).uint64(message.stockUniqueId);
    }
    if (message.itemInfo !== undefined) {
      SItem.encode(message.itemInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.originPrice !== 0) {
      writer.uint32(32).int32(message.originPrice);
    }
    if (message.finalPrice !== 0) {
      writer.uint32(40).int32(message.finalPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smerchantStockBuyItemInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmerchantStockBuyItemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stockBuyId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.stockUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.itemInfo = SItem.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.originPrice = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.finalPrice = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smerchantStockBuyItemInfo {
    return {
      stockBuyId: isSet(object.stockBuyId) ? String(object.stockBuyId) : "",
      stockUniqueId: isSet(object.stockUniqueId) ? Number(object.stockUniqueId) : 0,
      itemInfo: isSet(object.itemInfo) ? SItem.fromJSON(object.itemInfo) : undefined,
      originPrice: isSet(object.originPrice) ? Number(object.originPrice) : 0,
      finalPrice: isSet(object.finalPrice) ? Number(object.finalPrice) : 0,
    };
  },

  toJSON(message: smerchantStockBuyItemInfo): unknown {
    const obj: any = {};
    if (message.stockBuyId !== "") {
      obj.stockBuyId = message.stockBuyId;
    }
    if (message.stockUniqueId !== 0) {
      obj.stockUniqueId = Math.round(message.stockUniqueId);
    }
    if (message.itemInfo !== undefined) {
      obj.itemInfo = SItem.toJSON(message.itemInfo);
    }
    if (message.originPrice !== 0) {
      obj.originPrice = Math.round(message.originPrice);
    }
    if (message.finalPrice !== 0) {
      obj.finalPrice = Math.round(message.finalPrice);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantStockBuyItemInfo>, I>>(base?: I): smerchantStockBuyItemInfo {
    return smerchantStockBuyItemInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smerchantStockBuyItemInfo>, I>>(object: I): smerchantStockBuyItemInfo {
    const message = createBasesmerchantStockBuyItemInfo();
    message.stockBuyId = object.stockBuyId ?? "";
    message.stockUniqueId = object.stockUniqueId ?? 0;
    message.itemInfo = (object.itemInfo !== undefined && object.itemInfo !== null)
      ? SItem.fromPartial(object.itemInfo)
      : undefined;
    message.originPrice = object.originPrice ?? 0;
    message.finalPrice = object.finalPrice ?? 0;
    return message;
  },
};

function createBasesmerchantStockCraftItemInfo(): smerchantStockCraftItemInfo {
  return { stockCraftId: "", stockUniqueId: 0, itemInfo: undefined };
}

export const smerchantStockCraftItemInfo = {
  encode(message: smerchantStockCraftItemInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stockCraftId !== "") {
      writer.uint32(10).string(message.stockCraftId);
    }
    if (message.stockUniqueId !== 0) {
      writer.uint32(16).uint64(message.stockUniqueId);
    }
    if (message.itemInfo !== undefined) {
      SItem.encode(message.itemInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smerchantStockCraftItemInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmerchantStockCraftItemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stockCraftId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.stockUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.itemInfo = SItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smerchantStockCraftItemInfo {
    return {
      stockCraftId: isSet(object.stockCraftId) ? String(object.stockCraftId) : "",
      stockUniqueId: isSet(object.stockUniqueId) ? Number(object.stockUniqueId) : 0,
      itemInfo: isSet(object.itemInfo) ? SItem.fromJSON(object.itemInfo) : undefined,
    };
  },

  toJSON(message: smerchantStockCraftItemInfo): unknown {
    const obj: any = {};
    if (message.stockCraftId !== "") {
      obj.stockCraftId = message.stockCraftId;
    }
    if (message.stockUniqueId !== 0) {
      obj.stockUniqueId = Math.round(message.stockUniqueId);
    }
    if (message.itemInfo !== undefined) {
      obj.itemInfo = SItem.toJSON(message.itemInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantStockCraftItemInfo>, I>>(base?: I): smerchantStockCraftItemInfo {
    return smerchantStockCraftItemInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smerchantStockCraftItemInfo>, I>>(object: I): smerchantStockCraftItemInfo {
    const message = createBasesmerchantStockCraftItemInfo();
    message.stockCraftId = object.stockCraftId ?? "";
    message.stockUniqueId = object.stockUniqueId ?? 0;
    message.itemInfo = (object.itemInfo !== undefined && object.itemInfo !== null)
      ? SItem.fromPartial(object.itemInfo)
      : undefined;
    return message;
  },
};

function createBasess2cMerchantStockBuyItemListRes(): ss2cMerchantStockBuyItemListRes {
  return { result: 0, loopMessageFlag: 0, stockList: [] };
}

export const ss2cMerchantStockBuyItemListRes = {
  encode(message: ss2cMerchantStockBuyItemListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.loopMessageFlag !== 0) {
      writer.uint32(16).uint32(message.loopMessageFlag);
    }
    for (const v of message.stockList) {
      smerchantStockBuyItemInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantStockBuyItemListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantStockBuyItemListRes();
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

          message.loopMessageFlag = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.stockList.push(smerchantStockBuyItemInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantStockBuyItemListRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      loopMessageFlag: isSet(object.loopMessageFlag) ? Number(object.loopMessageFlag) : 0,
      stockList: Array.isArray(object?.stockList)
        ? object.stockList.map((e: any) => smerchantStockBuyItemInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cMerchantStockBuyItemListRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.loopMessageFlag !== 0) {
      obj.loopMessageFlag = Math.round(message.loopMessageFlag);
    }
    if (message.stockList?.length) {
      obj.stockList = message.stockList.map((e) => smerchantStockBuyItemInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantStockBuyItemListRes>, I>>(base?: I): ss2cMerchantStockBuyItemListRes {
    return ss2cMerchantStockBuyItemListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantStockBuyItemListRes>, I>>(
    object: I,
  ): ss2cMerchantStockBuyItemListRes {
    const message = createBasess2cMerchantStockBuyItemListRes();
    message.result = object.result ?? 0;
    message.loopMessageFlag = object.loopMessageFlag ?? 0;
    message.stockList = object.stockList?.map((e) => smerchantStockBuyItemInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sMerchantStockSellBackItemListReq(): sc2sMerchantStockSellBackItemListReq {
  return { merchantId: "" };
}

export const sc2sMerchantStockSellBackItemListReq = {
  encode(message: sc2sMerchantStockSellBackItemListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merchantId !== "") {
      writer.uint32(10).string(message.merchantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantStockSellBackItemListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantStockSellBackItemListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.merchantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMerchantStockSellBackItemListReq {
    return { merchantId: isSet(object.merchantId) ? String(object.merchantId) : "" };
  },

  toJSON(message: sc2sMerchantStockSellBackItemListReq): unknown {
    const obj: any = {};
    if (message.merchantId !== "") {
      obj.merchantId = message.merchantId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantStockSellBackItemListReq>, I>>(
    base?: I,
  ): sc2sMerchantStockSellBackItemListReq {
    return sc2sMerchantStockSellBackItemListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantStockSellBackItemListReq>, I>>(
    object: I,
  ): sc2sMerchantStockSellBackItemListReq {
    const message = createBasesc2sMerchantStockSellBackItemListReq();
    message.merchantId = object.merchantId ?? "";
    return message;
  },
};

function createBasesmerchantStockSellBackItemInfo(): smerchantStockSellBackItemInfo {
  return { stockSellBackId: "", stockUniqueId: 0 };
}

export const smerchantStockSellBackItemInfo = {
  encode(message: smerchantStockSellBackItemInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stockSellBackId !== "") {
      writer.uint32(10).string(message.stockSellBackId);
    }
    if (message.stockUniqueId !== 0) {
      writer.uint32(16).uint64(message.stockUniqueId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smerchantStockSellBackItemInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmerchantStockSellBackItemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stockSellBackId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.stockUniqueId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smerchantStockSellBackItemInfo {
    return {
      stockSellBackId: isSet(object.stockSellBackId) ? String(object.stockSellBackId) : "",
      stockUniqueId: isSet(object.stockUniqueId) ? Number(object.stockUniqueId) : 0,
    };
  },

  toJSON(message: smerchantStockSellBackItemInfo): unknown {
    const obj: any = {};
    if (message.stockSellBackId !== "") {
      obj.stockSellBackId = message.stockSellBackId;
    }
    if (message.stockUniqueId !== 0) {
      obj.stockUniqueId = Math.round(message.stockUniqueId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantStockSellBackItemInfo>, I>>(base?: I): smerchantStockSellBackItemInfo {
    return smerchantStockSellBackItemInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smerchantStockSellBackItemInfo>, I>>(
    object: I,
  ): smerchantStockSellBackItemInfo {
    const message = createBasesmerchantStockSellBackItemInfo();
    message.stockSellBackId = object.stockSellBackId ?? "";
    message.stockUniqueId = object.stockUniqueId ?? 0;
    return message;
  },
};

function createBasess2cMerchantStockSellBackItemListRes(): ss2cMerchantStockSellBackItemListRes {
  return { result: 0, loopMessageFlag: 0, stockList: [] };
}

export const ss2cMerchantStockSellBackItemListRes = {
  encode(message: ss2cMerchantStockSellBackItemListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.loopMessageFlag !== 0) {
      writer.uint32(16).uint32(message.loopMessageFlag);
    }
    for (const v of message.stockList) {
      smerchantStockSellBackItemInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantStockSellBackItemListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantStockSellBackItemListRes();
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

          message.loopMessageFlag = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.stockList.push(smerchantStockSellBackItemInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantStockSellBackItemListRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      loopMessageFlag: isSet(object.loopMessageFlag) ? Number(object.loopMessageFlag) : 0,
      stockList: Array.isArray(object?.stockList)
        ? object.stockList.map((e: any) => smerchantStockSellBackItemInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cMerchantStockSellBackItemListRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.loopMessageFlag !== 0) {
      obj.loopMessageFlag = Math.round(message.loopMessageFlag);
    }
    if (message.stockList?.length) {
      obj.stockList = message.stockList.map((e) => smerchantStockSellBackItemInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantStockSellBackItemListRes>, I>>(
    base?: I,
  ): ss2cMerchantStockSellBackItemListRes {
    return ss2cMerchantStockSellBackItemListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantStockSellBackItemListRes>, I>>(
    object: I,
  ): ss2cMerchantStockSellBackItemListRes {
    const message = createBasess2cMerchantStockSellBackItemListRes();
    message.result = object.result ?? 0;
    message.loopMessageFlag = object.loopMessageFlag ?? 0;
    message.stockList = object.stockList?.map((e) => smerchantStockSellBackItemInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasemerchantTradeItemInfo(): merchantTradeItemInfo {
  return { itemUniqueId: 0, itemCount: 0, itemContentsCount: 0 };
}

export const merchantTradeItemInfo = {
  encode(message: merchantTradeItemInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemUniqueId !== 0) {
      writer.uint32(8).uint64(message.itemUniqueId);
    }
    if (message.itemCount !== 0) {
      writer.uint32(16).uint32(message.itemCount);
    }
    if (message.itemContentsCount !== 0) {
      writer.uint32(24).uint32(message.itemContentsCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): merchantTradeItemInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasemerchantTradeItemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.itemUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.itemCount = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.itemContentsCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): merchantTradeItemInfo {
    return {
      itemUniqueId: isSet(object.itemUniqueId) ? Number(object.itemUniqueId) : 0,
      itemCount: isSet(object.itemCount) ? Number(object.itemCount) : 0,
      itemContentsCount: isSet(object.itemContentsCount) ? Number(object.itemContentsCount) : 0,
    };
  },

  toJSON(message: merchantTradeItemInfo): unknown {
    const obj: any = {};
    if (message.itemUniqueId !== 0) {
      obj.itemUniqueId = Math.round(message.itemUniqueId);
    }
    if (message.itemCount !== 0) {
      obj.itemCount = Math.round(message.itemCount);
    }
    if (message.itemContentsCount !== 0) {
      obj.itemContentsCount = Math.round(message.itemContentsCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<merchantTradeItemInfo>, I>>(base?: I): merchantTradeItemInfo {
    return merchantTradeItemInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<merchantTradeItemInfo>, I>>(object: I): merchantTradeItemInfo {
    const message = createBasemerchantTradeItemInfo();
    message.itemUniqueId = object.itemUniqueId ?? 0;
    message.itemCount = object.itemCount ?? 0;
    message.itemContentsCount = object.itemContentsCount ?? 0;
    return message;
  },
};

function createBasesmerchantTradeSlotInfo(): smerchantTradeSlotInfo {
  return { inventoryId: 0, slotId: 0, itemId: "", itemUniqueId: 0, itemCount: 0, itemContentsCount: 0 };
}

export const smerchantTradeSlotInfo = {
  encode(message: smerchantTradeSlotInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inventoryId !== 0) {
      writer.uint32(8).uint32(message.inventoryId);
    }
    if (message.slotId !== 0) {
      writer.uint32(16).uint32(message.slotId);
    }
    if (message.itemId !== "") {
      writer.uint32(26).string(message.itemId);
    }
    if (message.itemUniqueId !== 0) {
      writer.uint32(32).uint64(message.itemUniqueId);
    }
    if (message.itemCount !== 0) {
      writer.uint32(40).uint32(message.itemCount);
    }
    if (message.itemContentsCount !== 0) {
      writer.uint32(48).uint32(message.itemContentsCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smerchantTradeSlotInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmerchantTradeSlotInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inventoryId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.slotId = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.itemId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.itemUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.itemCount = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.itemContentsCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smerchantTradeSlotInfo {
    return {
      inventoryId: isSet(object.inventoryId) ? Number(object.inventoryId) : 0,
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
      itemUniqueId: isSet(object.itemUniqueId) ? Number(object.itemUniqueId) : 0,
      itemCount: isSet(object.itemCount) ? Number(object.itemCount) : 0,
      itemContentsCount: isSet(object.itemContentsCount) ? Number(object.itemContentsCount) : 0,
    };
  },

  toJSON(message: smerchantTradeSlotInfo): unknown {
    const obj: any = {};
    if (message.inventoryId !== 0) {
      obj.inventoryId = Math.round(message.inventoryId);
    }
    if (message.slotId !== 0) {
      obj.slotId = Math.round(message.slotId);
    }
    if (message.itemId !== "") {
      obj.itemId = message.itemId;
    }
    if (message.itemUniqueId !== 0) {
      obj.itemUniqueId = Math.round(message.itemUniqueId);
    }
    if (message.itemCount !== 0) {
      obj.itemCount = Math.round(message.itemCount);
    }
    if (message.itemContentsCount !== 0) {
      obj.itemContentsCount = Math.round(message.itemContentsCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantTradeSlotInfo>, I>>(base?: I): smerchantTradeSlotInfo {
    return smerchantTradeSlotInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smerchantTradeSlotInfo>, I>>(object: I): smerchantTradeSlotInfo {
    const message = createBasesmerchantTradeSlotInfo();
    message.inventoryId = object.inventoryId ?? 0;
    message.slotId = object.slotId ?? 0;
    message.itemId = object.itemId ?? "";
    message.itemUniqueId = object.itemUniqueId ?? 0;
    message.itemCount = object.itemCount ?? 0;
    message.itemContentsCount = object.itemContentsCount ?? 0;
    return message;
  },
};

function createBasesc2sMerchantStockBuyReq(): sc2sMerchantStockBuyReq {
  return { tradeId: "", stockUniqueId: 0, dealItemList: [], merchantSlotInfo: [] };
}

export const sc2sMerchantStockBuyReq = {
  encode(message: sc2sMerchantStockBuyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeId !== "") {
      writer.uint32(10).string(message.tradeId);
    }
    if (message.stockUniqueId !== 0) {
      writer.uint32(16).uint64(message.stockUniqueId);
    }
    for (const v of message.dealItemList) {
      merchantTradeItemInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.merchantSlotInfo) {
      smerchantTradeSlotInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantStockBuyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantStockBuyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tradeId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.stockUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dealItemList.push(merchantTradeItemInfo.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.merchantSlotInfo.push(smerchantTradeSlotInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMerchantStockBuyReq {
    return {
      tradeId: isSet(object.tradeId) ? String(object.tradeId) : "",
      stockUniqueId: isSet(object.stockUniqueId) ? Number(object.stockUniqueId) : 0,
      dealItemList: Array.isArray(object?.dealItemList)
        ? object.dealItemList.map((e: any) => merchantTradeItemInfo.fromJSON(e))
        : [],
      merchantSlotInfo: Array.isArray(object?.merchantSlotInfo)
        ? object.merchantSlotInfo.map((e: any) => smerchantTradeSlotInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: sc2sMerchantStockBuyReq): unknown {
    const obj: any = {};
    if (message.tradeId !== "") {
      obj.tradeId = message.tradeId;
    }
    if (message.stockUniqueId !== 0) {
      obj.stockUniqueId = Math.round(message.stockUniqueId);
    }
    if (message.dealItemList?.length) {
      obj.dealItemList = message.dealItemList.map((e) => merchantTradeItemInfo.toJSON(e));
    }
    if (message.merchantSlotInfo?.length) {
      obj.merchantSlotInfo = message.merchantSlotInfo.map((e) => smerchantTradeSlotInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantStockBuyReq>, I>>(base?: I): sc2sMerchantStockBuyReq {
    return sc2sMerchantStockBuyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantStockBuyReq>, I>>(object: I): sc2sMerchantStockBuyReq {
    const message = createBasesc2sMerchantStockBuyReq();
    message.tradeId = object.tradeId ?? "";
    message.stockUniqueId = object.stockUniqueId ?? 0;
    message.dealItemList = object.dealItemList?.map((e) => merchantTradeItemInfo.fromPartial(e)) || [];
    message.merchantSlotInfo = object.merchantSlotInfo?.map((e) => smerchantTradeSlotInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cMerchantStockBuyRes(): ss2cMerchantStockBuyRes {
  return { result: 0, givenItemId: "" };
}

export const ss2cMerchantStockBuyRes = {
  encode(message: ss2cMerchantStockBuyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.givenItemId !== "") {
      writer.uint32(18).string(message.givenItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantStockBuyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantStockBuyRes();
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

          message.givenItemId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantStockBuyRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      givenItemId: isSet(object.givenItemId) ? String(object.givenItemId) : "",
    };
  },

  toJSON(message: ss2cMerchantStockBuyRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.givenItemId !== "") {
      obj.givenItemId = message.givenItemId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantStockBuyRes>, I>>(base?: I): ss2cMerchantStockBuyRes {
    return ss2cMerchantStockBuyRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantStockBuyRes>, I>>(object: I): ss2cMerchantStockBuyRes {
    const message = createBasess2cMerchantStockBuyRes();
    message.result = object.result ?? 0;
    message.givenItemId = object.givenItemId ?? "";
    return message;
  },
};

function createBasesmerchantStockSellBackInfo(): smerchantStockSellBackInfo {
  return { tradeId: "", stockUniqueId: 0, itemUniqueId: 0 };
}

export const smerchantStockSellBackInfo = {
  encode(message: smerchantStockSellBackInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeId !== "") {
      writer.uint32(10).string(message.tradeId);
    }
    if (message.stockUniqueId !== 0) {
      writer.uint32(16).uint64(message.stockUniqueId);
    }
    if (message.itemUniqueId !== 0) {
      writer.uint32(24).uint64(message.itemUniqueId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smerchantStockSellBackInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmerchantStockSellBackInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tradeId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.stockUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.itemUniqueId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smerchantStockSellBackInfo {
    return {
      tradeId: isSet(object.tradeId) ? String(object.tradeId) : "",
      stockUniqueId: isSet(object.stockUniqueId) ? Number(object.stockUniqueId) : 0,
      itemUniqueId: isSet(object.itemUniqueId) ? Number(object.itemUniqueId) : 0,
    };
  },

  toJSON(message: smerchantStockSellBackInfo): unknown {
    const obj: any = {};
    if (message.tradeId !== "") {
      obj.tradeId = message.tradeId;
    }
    if (message.stockUniqueId !== 0) {
      obj.stockUniqueId = Math.round(message.stockUniqueId);
    }
    if (message.itemUniqueId !== 0) {
      obj.itemUniqueId = Math.round(message.itemUniqueId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantStockSellBackInfo>, I>>(base?: I): smerchantStockSellBackInfo {
    return smerchantStockSellBackInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smerchantStockSellBackInfo>, I>>(object: I): smerchantStockSellBackInfo {
    const message = createBasesmerchantStockSellBackInfo();
    message.tradeId = object.tradeId ?? "";
    message.stockUniqueId = object.stockUniqueId ?? 0;
    message.itemUniqueId = object.itemUniqueId ?? 0;
    return message;
  },
};

function createBasesc2sMerchantStockSellBackReq(): sc2sMerchantStockSellBackReq {
  return { sellBackInfos: [], receivedInfos: [] };
}

export const sc2sMerchantStockSellBackReq = {
  encode(message: sc2sMerchantStockSellBackReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sellBackInfos) {
      smerchantStockSellBackInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.receivedInfos) {
      smerchantTradeSlotInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantStockSellBackReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantStockSellBackReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sellBackInfos.push(smerchantStockSellBackInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.receivedInfos.push(smerchantTradeSlotInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMerchantStockSellBackReq {
    return {
      sellBackInfos: Array.isArray(object?.sellBackInfos)
        ? object.sellBackInfos.map((e: any) => smerchantStockSellBackInfo.fromJSON(e))
        : [],
      receivedInfos: Array.isArray(object?.receivedInfos)
        ? object.receivedInfos.map((e: any) => smerchantTradeSlotInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: sc2sMerchantStockSellBackReq): unknown {
    const obj: any = {};
    if (message.sellBackInfos?.length) {
      obj.sellBackInfos = message.sellBackInfos.map((e) => smerchantStockSellBackInfo.toJSON(e));
    }
    if (message.receivedInfos?.length) {
      obj.receivedInfos = message.receivedInfos.map((e) => smerchantTradeSlotInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantStockSellBackReq>, I>>(base?: I): sc2sMerchantStockSellBackReq {
    return sc2sMerchantStockSellBackReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantStockSellBackReq>, I>>(object: I): sc2sMerchantStockSellBackReq {
    const message = createBasesc2sMerchantStockSellBackReq();
    message.sellBackInfos = object.sellBackInfos?.map((e) => smerchantStockSellBackInfo.fromPartial(e)) || [];
    message.receivedInfos = object.receivedInfos?.map((e) => smerchantTradeSlotInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cMerchantStockSellBackRes(): ss2cMerchantStockSellBackRes {
  return { result: 0, givenItemIds: [] };
}

export const ss2cMerchantStockSellBackRes = {
  encode(message: ss2cMerchantStockSellBackRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.givenItemIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantStockSellBackRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantStockSellBackRes();
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

          message.givenItemIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantStockSellBackRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      givenItemIds: Array.isArray(object?.givenItemIds) ? object.givenItemIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ss2cMerchantStockSellBackRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.givenItemIds?.length) {
      obj.givenItemIds = message.givenItemIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantStockSellBackRes>, I>>(base?: I): ss2cMerchantStockSellBackRes {
    return ss2cMerchantStockSellBackRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantStockSellBackRes>, I>>(object: I): ss2cMerchantStockSellBackRes {
    const message = createBasess2cMerchantStockSellBackRes();
    message.result = object.result ?? 0;
    message.givenItemIds = object.givenItemIds?.map((e) => e) || [];
    return message;
  },
};

function createBasesc2sMerchantServiceCraftListReq(): sc2sMerchantServiceCraftListReq {
  return { merchantId: "" };
}

export const sc2sMerchantServiceCraftListReq = {
  encode(message: sc2sMerchantServiceCraftListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merchantId !== "") {
      writer.uint32(10).string(message.merchantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantServiceCraftListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantServiceCraftListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.merchantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMerchantServiceCraftListReq {
    return { merchantId: isSet(object.merchantId) ? String(object.merchantId) : "" };
  },

  toJSON(message: sc2sMerchantServiceCraftListReq): unknown {
    const obj: any = {};
    if (message.merchantId !== "") {
      obj.merchantId = message.merchantId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantServiceCraftListReq>, I>>(base?: I): sc2sMerchantServiceCraftListReq {
    return sc2sMerchantServiceCraftListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantServiceCraftListReq>, I>>(
    object: I,
  ): sc2sMerchantServiceCraftListReq {
    const message = createBasesc2sMerchantServiceCraftListReq();
    message.merchantId = object.merchantId ?? "";
    return message;
  },
};

function createBasess2cMerchantServiceCraftListRes(): ss2cMerchantServiceCraftListRes {
  return { result: 0, loopMessageFlag: 0, stockCraftList: [] };
}

export const ss2cMerchantServiceCraftListRes = {
  encode(message: ss2cMerchantServiceCraftListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.loopMessageFlag !== 0) {
      writer.uint32(16).uint32(message.loopMessageFlag);
    }
    for (const v of message.stockCraftList) {
      smerchantStockCraftItemInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantServiceCraftListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantServiceCraftListRes();
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

          message.loopMessageFlag = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.stockCraftList.push(smerchantStockCraftItemInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantServiceCraftListRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      loopMessageFlag: isSet(object.loopMessageFlag) ? Number(object.loopMessageFlag) : 0,
      stockCraftList: Array.isArray(object?.stockCraftList)
        ? object.stockCraftList.map((e: any) => smerchantStockCraftItemInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cMerchantServiceCraftListRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.loopMessageFlag !== 0) {
      obj.loopMessageFlag = Math.round(message.loopMessageFlag);
    }
    if (message.stockCraftList?.length) {
      obj.stockCraftList = message.stockCraftList.map((e) => smerchantStockCraftItemInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantServiceCraftListRes>, I>>(base?: I): ss2cMerchantServiceCraftListRes {
    return ss2cMerchantServiceCraftListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantServiceCraftListRes>, I>>(
    object: I,
  ): ss2cMerchantServiceCraftListRes {
    const message = createBasess2cMerchantServiceCraftListRes();
    message.result = object.result ?? 0;
    message.loopMessageFlag = object.loopMessageFlag ?? 0;
    message.stockCraftList = object.stockCraftList?.map((e) => smerchantStockCraftItemInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sMerchantServiceCraftReq(): sc2sMerchantServiceCraftReq {
  return { tradeId: "", stockUniqueId: 0, stockCraftList: [], merchantSlotInfo: [] };
}

export const sc2sMerchantServiceCraftReq = {
  encode(message: sc2sMerchantServiceCraftReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeId !== "") {
      writer.uint32(10).string(message.tradeId);
    }
    if (message.stockUniqueId !== 0) {
      writer.uint32(16).uint64(message.stockUniqueId);
    }
    for (const v of message.stockCraftList) {
      merchantTradeItemInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.merchantSlotInfo) {
      smerchantTradeSlotInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantServiceCraftReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantServiceCraftReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tradeId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.stockUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.stockCraftList.push(merchantTradeItemInfo.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.merchantSlotInfo.push(smerchantTradeSlotInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMerchantServiceCraftReq {
    return {
      tradeId: isSet(object.tradeId) ? String(object.tradeId) : "",
      stockUniqueId: isSet(object.stockUniqueId) ? Number(object.stockUniqueId) : 0,
      stockCraftList: Array.isArray(object?.stockCraftList)
        ? object.stockCraftList.map((e: any) => merchantTradeItemInfo.fromJSON(e))
        : [],
      merchantSlotInfo: Array.isArray(object?.merchantSlotInfo)
        ? object.merchantSlotInfo.map((e: any) => smerchantTradeSlotInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: sc2sMerchantServiceCraftReq): unknown {
    const obj: any = {};
    if (message.tradeId !== "") {
      obj.tradeId = message.tradeId;
    }
    if (message.stockUniqueId !== 0) {
      obj.stockUniqueId = Math.round(message.stockUniqueId);
    }
    if (message.stockCraftList?.length) {
      obj.stockCraftList = message.stockCraftList.map((e) => merchantTradeItemInfo.toJSON(e));
    }
    if (message.merchantSlotInfo?.length) {
      obj.merchantSlotInfo = message.merchantSlotInfo.map((e) => smerchantTradeSlotInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantServiceCraftReq>, I>>(base?: I): sc2sMerchantServiceCraftReq {
    return sc2sMerchantServiceCraftReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantServiceCraftReq>, I>>(object: I): sc2sMerchantServiceCraftReq {
    const message = createBasesc2sMerchantServiceCraftReq();
    message.tradeId = object.tradeId ?? "";
    message.stockUniqueId = object.stockUniqueId ?? 0;
    message.stockCraftList = object.stockCraftList?.map((e) => merchantTradeItemInfo.fromPartial(e)) || [];
    message.merchantSlotInfo = object.merchantSlotInfo?.map((e) => smerchantTradeSlotInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cMerchantServiceCraftRes(): ss2cMerchantServiceCraftRes {
  return { result: 0, givenItemId: "" };
}

export const ss2cMerchantServiceCraftRes = {
  encode(message: ss2cMerchantServiceCraftRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.givenItemId !== "") {
      writer.uint32(18).string(message.givenItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantServiceCraftRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantServiceCraftRes();
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

          message.givenItemId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantServiceCraftRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      givenItemId: isSet(object.givenItemId) ? String(object.givenItemId) : "",
    };
  },

  toJSON(message: ss2cMerchantServiceCraftRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.givenItemId !== "") {
      obj.givenItemId = message.givenItemId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantServiceCraftRes>, I>>(base?: I): ss2cMerchantServiceCraftRes {
    return ss2cMerchantServiceCraftRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantServiceCraftRes>, I>>(object: I): ss2cMerchantServiceCraftRes {
    const message = createBasess2cMerchantServiceCraftRes();
    message.result = object.result ?? 0;
    message.givenItemId = object.givenItemId ?? "";
    return message;
  },
};

function createBasesc2sMerchantQuestListInfoReq(): sc2sMerchantQuestListInfoReq {
  return { merchantId: "" };
}

export const sc2sMerchantQuestListInfoReq = {
  encode(message: sc2sMerchantQuestListInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merchantId !== "") {
      writer.uint32(10).string(message.merchantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantQuestListInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantQuestListInfoReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.merchantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMerchantQuestListInfoReq {
    return { merchantId: isSet(object.merchantId) ? String(object.merchantId) : "" };
  },

  toJSON(message: sc2sMerchantQuestListInfoReq): unknown {
    const obj: any = {};
    if (message.merchantId !== "") {
      obj.merchantId = message.merchantId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantQuestListInfoReq>, I>>(base?: I): sc2sMerchantQuestListInfoReq {
    return sc2sMerchantQuestListInfoReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantQuestListInfoReq>, I>>(object: I): sc2sMerchantQuestListInfoReq {
    const message = createBasesc2sMerchantQuestListInfoReq();
    message.merchantId = object.merchantId ?? "";
    return message;
  },
};

function createBasess2cMerchantQuestListInfoRes(): ss2cMerchantQuestListInfoRes {
  return { result: 0, quests: [] };
}

export const ss2cMerchantQuestListInfoRes = {
  encode(message: ss2cMerchantQuestListInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.quests) {
      smerchantQuestInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantQuestListInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantQuestListInfoRes();
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

          message.quests.push(smerchantQuestInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantQuestListInfoRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      quests: Array.isArray(object?.quests) ? object.quests.map((e: any) => smerchantQuestInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cMerchantQuestListInfoRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.quests?.length) {
      obj.quests = message.quests.map((e) => smerchantQuestInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantQuestListInfoRes>, I>>(base?: I): ss2cMerchantQuestListInfoRes {
    return ss2cMerchantQuestListInfoRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantQuestListInfoRes>, I>>(object: I): ss2cMerchantQuestListInfoRes {
    const message = createBasess2cMerchantQuestListInfoRes();
    message.result = object.result ?? 0;
    message.quests = object.quests?.map((e) => smerchantQuestInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sMerchantQuestSelectReq(): sc2sMerchantQuestSelectReq {
  return { merchantId: "", questId: "", chapterId: "" };
}

export const sc2sMerchantQuestSelectReq = {
  encode(message: sc2sMerchantQuestSelectReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merchantId !== "") {
      writer.uint32(10).string(message.merchantId);
    }
    if (message.questId !== "") {
      writer.uint32(18).string(message.questId);
    }
    if (message.chapterId !== "") {
      writer.uint32(26).string(message.chapterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantQuestSelectReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantQuestSelectReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.merchantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.questId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.chapterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMerchantQuestSelectReq {
    return {
      merchantId: isSet(object.merchantId) ? String(object.merchantId) : "",
      questId: isSet(object.questId) ? String(object.questId) : "",
      chapterId: isSet(object.chapterId) ? String(object.chapterId) : "",
    };
  },

  toJSON(message: sc2sMerchantQuestSelectReq): unknown {
    const obj: any = {};
    if (message.merchantId !== "") {
      obj.merchantId = message.merchantId;
    }
    if (message.questId !== "") {
      obj.questId = message.questId;
    }
    if (message.chapterId !== "") {
      obj.chapterId = message.chapterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantQuestSelectReq>, I>>(base?: I): sc2sMerchantQuestSelectReq {
    return sc2sMerchantQuestSelectReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantQuestSelectReq>, I>>(object: I): sc2sMerchantQuestSelectReq {
    const message = createBasesc2sMerchantQuestSelectReq();
    message.merchantId = object.merchantId ?? "";
    message.questId = object.questId ?? "";
    message.chapterId = object.chapterId ?? "";
    return message;
  },
};

function createBasess2cMerchantQuestSelectRes(): ss2cMerchantQuestSelectRes {
  return { result: 0 };
}

export const ss2cMerchantQuestSelectRes = {
  encode(message: ss2cMerchantQuestSelectRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantQuestSelectRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantQuestSelectRes();
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

  fromJSON(object: any): ss2cMerchantQuestSelectRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cMerchantQuestSelectRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantQuestSelectRes>, I>>(base?: I): ss2cMerchantQuestSelectRes {
    return ss2cMerchantQuestSelectRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantQuestSelectRes>, I>>(object: I): ss2cMerchantQuestSelectRes {
    const message = createBasess2cMerchantQuestSelectRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sMerchantQuestCompleteReq(): sc2sMerchantQuestCompleteReq {
  return { merchantId: "", questId: "", chapterId: "", questItemList: [], merchantSlotInfo: [] };
}

export const sc2sMerchantQuestCompleteReq = {
  encode(message: sc2sMerchantQuestCompleteReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merchantId !== "") {
      writer.uint32(10).string(message.merchantId);
    }
    if (message.questId !== "") {
      writer.uint32(18).string(message.questId);
    }
    if (message.chapterId !== "") {
      writer.uint32(26).string(message.chapterId);
    }
    for (const v of message.questItemList) {
      merchantTradeItemInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.merchantSlotInfo) {
      smerchantTradeSlotInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantQuestCompleteReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantQuestCompleteReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.merchantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.questId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.chapterId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.questItemList.push(merchantTradeItemInfo.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.merchantSlotInfo.push(smerchantTradeSlotInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMerchantQuestCompleteReq {
    return {
      merchantId: isSet(object.merchantId) ? String(object.merchantId) : "",
      questId: isSet(object.questId) ? String(object.questId) : "",
      chapterId: isSet(object.chapterId) ? String(object.chapterId) : "",
      questItemList: Array.isArray(object?.questItemList)
        ? object.questItemList.map((e: any) => merchantTradeItemInfo.fromJSON(e))
        : [],
      merchantSlotInfo: Array.isArray(object?.merchantSlotInfo)
        ? object.merchantSlotInfo.map((e: any) => smerchantTradeSlotInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: sc2sMerchantQuestCompleteReq): unknown {
    const obj: any = {};
    if (message.merchantId !== "") {
      obj.merchantId = message.merchantId;
    }
    if (message.questId !== "") {
      obj.questId = message.questId;
    }
    if (message.chapterId !== "") {
      obj.chapterId = message.chapterId;
    }
    if (message.questItemList?.length) {
      obj.questItemList = message.questItemList.map((e) => merchantTradeItemInfo.toJSON(e));
    }
    if (message.merchantSlotInfo?.length) {
      obj.merchantSlotInfo = message.merchantSlotInfo.map((e) => smerchantTradeSlotInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantQuestCompleteReq>, I>>(base?: I): sc2sMerchantQuestCompleteReq {
    return sc2sMerchantQuestCompleteReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantQuestCompleteReq>, I>>(object: I): sc2sMerchantQuestCompleteReq {
    const message = createBasesc2sMerchantQuestCompleteReq();
    message.merchantId = object.merchantId ?? "";
    message.questId = object.questId ?? "";
    message.chapterId = object.chapterId ?? "";
    message.questItemList = object.questItemList?.map((e) => merchantTradeItemInfo.fromPartial(e)) || [];
    message.merchantSlotInfo = object.merchantSlotInfo?.map((e) => smerchantTradeSlotInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cMerchantQuestCompleteRes(): ss2cMerchantQuestCompleteRes {
  return { result: 0, givenMerchantId: "", givenQuestId: "", givenChapterId: "" };
}

export const ss2cMerchantQuestCompleteRes = {
  encode(message: ss2cMerchantQuestCompleteRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.givenMerchantId !== "") {
      writer.uint32(18).string(message.givenMerchantId);
    }
    if (message.givenQuestId !== "") {
      writer.uint32(26).string(message.givenQuestId);
    }
    if (message.givenChapterId !== "") {
      writer.uint32(34).string(message.givenChapterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantQuestCompleteRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantQuestCompleteRes();
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

          message.givenMerchantId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.givenQuestId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.givenChapterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantQuestCompleteRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      givenMerchantId: isSet(object.givenMerchantId) ? String(object.givenMerchantId) : "",
      givenQuestId: isSet(object.givenQuestId) ? String(object.givenQuestId) : "",
      givenChapterId: isSet(object.givenChapterId) ? String(object.givenChapterId) : "",
    };
  },

  toJSON(message: ss2cMerchantQuestCompleteRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.givenMerchantId !== "") {
      obj.givenMerchantId = message.givenMerchantId;
    }
    if (message.givenQuestId !== "") {
      obj.givenQuestId = message.givenQuestId;
    }
    if (message.givenChapterId !== "") {
      obj.givenChapterId = message.givenChapterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantQuestCompleteRes>, I>>(base?: I): ss2cMerchantQuestCompleteRes {
    return ss2cMerchantQuestCompleteRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantQuestCompleteRes>, I>>(object: I): ss2cMerchantQuestCompleteRes {
    const message = createBasess2cMerchantQuestCompleteRes();
    message.result = object.result ?? 0;
    message.givenMerchantId = object.givenMerchantId ?? "";
    message.givenQuestId = object.givenQuestId ?? "";
    message.givenChapterId = object.givenChapterId ?? "";
    return message;
  },
};

function createBasesc2sMerchantQuestContentValueStackReq(): sc2sMerchantQuestContentValueStackReq {
  return { merchantId: "", questId: "", chapterId: "", questItemList: [] };
}

export const sc2sMerchantQuestContentValueStackReq = {
  encode(message: sc2sMerchantQuestContentValueStackReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merchantId !== "") {
      writer.uint32(10).string(message.merchantId);
    }
    if (message.questId !== "") {
      writer.uint32(18).string(message.questId);
    }
    if (message.chapterId !== "") {
      writer.uint32(26).string(message.chapterId);
    }
    for (const v of message.questItemList) {
      merchantTradeItemInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantQuestContentValueStackReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantQuestContentValueStackReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.merchantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.questId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.chapterId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.questItemList.push(merchantTradeItemInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMerchantQuestContentValueStackReq {
    return {
      merchantId: isSet(object.merchantId) ? String(object.merchantId) : "",
      questId: isSet(object.questId) ? String(object.questId) : "",
      chapterId: isSet(object.chapterId) ? String(object.chapterId) : "",
      questItemList: Array.isArray(object?.questItemList)
        ? object.questItemList.map((e: any) => merchantTradeItemInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: sc2sMerchantQuestContentValueStackReq): unknown {
    const obj: any = {};
    if (message.merchantId !== "") {
      obj.merchantId = message.merchantId;
    }
    if (message.questId !== "") {
      obj.questId = message.questId;
    }
    if (message.chapterId !== "") {
      obj.chapterId = message.chapterId;
    }
    if (message.questItemList?.length) {
      obj.questItemList = message.questItemList.map((e) => merchantTradeItemInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantQuestContentValueStackReq>, I>>(
    base?: I,
  ): sc2sMerchantQuestContentValueStackReq {
    return sc2sMerchantQuestContentValueStackReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantQuestContentValueStackReq>, I>>(
    object: I,
  ): sc2sMerchantQuestContentValueStackReq {
    const message = createBasesc2sMerchantQuestContentValueStackReq();
    message.merchantId = object.merchantId ?? "";
    message.questId = object.questId ?? "";
    message.chapterId = object.chapterId ?? "";
    message.questItemList = object.questItemList?.map((e) => merchantTradeItemInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cMerchantQuestContentValueStackRes(): ss2cMerchantQuestContentValueStackRes {
  return { result: 0 };
}

export const ss2cMerchantQuestContentValueStackRes = {
  encode(message: ss2cMerchantQuestContentValueStackRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantQuestContentValueStackRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantQuestContentValueStackRes();
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

  fromJSON(object: any): ss2cMerchantQuestContentValueStackRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cMerchantQuestContentValueStackRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantQuestContentValueStackRes>, I>>(
    base?: I,
  ): ss2cMerchantQuestContentValueStackRes {
    return ss2cMerchantQuestContentValueStackRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantQuestContentValueStackRes>, I>>(
    object: I,
  ): ss2cMerchantQuestContentValueStackRes {
    const message = createBasess2cMerchantQuestContentValueStackRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesmerchantBaseGearInfo(): smerchantBaseGearInfo {
  return { dataUniqueId: 0, itemInfo: undefined };
}

export const smerchantBaseGearInfo = {
  encode(message: smerchantBaseGearInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataUniqueId !== 0) {
      writer.uint32(8).uint64(message.dataUniqueId);
    }
    if (message.itemInfo !== undefined) {
      SItem.encode(message.itemInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smerchantBaseGearInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmerchantBaseGearInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.dataUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.itemInfo = SItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smerchantBaseGearInfo {
    return {
      dataUniqueId: isSet(object.dataUniqueId) ? Number(object.dataUniqueId) : 0,
      itemInfo: isSet(object.itemInfo) ? SItem.fromJSON(object.itemInfo) : undefined,
    };
  },

  toJSON(message: smerchantBaseGearInfo): unknown {
    const obj: any = {};
    if (message.dataUniqueId !== 0) {
      obj.dataUniqueId = Math.round(message.dataUniqueId);
    }
    if (message.itemInfo !== undefined) {
      obj.itemInfo = SItem.toJSON(message.itemInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantBaseGearInfo>, I>>(base?: I): smerchantBaseGearInfo {
    return smerchantBaseGearInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smerchantBaseGearInfo>, I>>(object: I): smerchantBaseGearInfo {
    const message = createBasesmerchantBaseGearInfo();
    message.dataUniqueId = object.dataUniqueId ?? 0;
    message.itemInfo = (object.itemInfo !== undefined && object.itemInfo !== null)
      ? SItem.fromPartial(object.itemInfo)
      : undefined;
    return message;
  },
};

function createBasesmerchantBaseGearSaveSlotInfo(): smerchantBaseGearSaveSlotInfo {
  return { uniqueId: 0, slotId: 0 };
}

export const smerchantBaseGearSaveSlotInfo = {
  encode(message: smerchantBaseGearSaveSlotInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uniqueId !== 0) {
      writer.uint32(8).uint64(message.uniqueId);
    }
    if (message.slotId !== 0) {
      writer.uint32(16).int32(message.slotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smerchantBaseGearSaveSlotInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmerchantBaseGearSaveSlotInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.uniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.slotId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smerchantBaseGearSaveSlotInfo {
    return {
      uniqueId: isSet(object.uniqueId) ? Number(object.uniqueId) : 0,
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
    };
  },

  toJSON(message: smerchantBaseGearSaveSlotInfo): unknown {
    const obj: any = {};
    if (message.uniqueId !== 0) {
      obj.uniqueId = Math.round(message.uniqueId);
    }
    if (message.slotId !== 0) {
      obj.slotId = Math.round(message.slotId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantBaseGearSaveSlotInfo>, I>>(base?: I): smerchantBaseGearSaveSlotInfo {
    return smerchantBaseGearSaveSlotInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smerchantBaseGearSaveSlotInfo>, I>>(
    object: I,
  ): smerchantBaseGearSaveSlotInfo {
    const message = createBasesmerchantBaseGearSaveSlotInfo();
    message.uniqueId = object.uniqueId ?? 0;
    message.slotId = object.slotId ?? 0;
    return message;
  },
};

function createBasesc2sMerchantBaseGearListReq(): sc2sMerchantBaseGearListReq {
  return { merchantId: "" };
}

export const sc2sMerchantBaseGearListReq = {
  encode(message: sc2sMerchantBaseGearListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merchantId !== "") {
      writer.uint32(10).string(message.merchantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantBaseGearListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantBaseGearListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.merchantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMerchantBaseGearListReq {
    return { merchantId: isSet(object.merchantId) ? String(object.merchantId) : "" };
  },

  toJSON(message: sc2sMerchantBaseGearListReq): unknown {
    const obj: any = {};
    if (message.merchantId !== "") {
      obj.merchantId = message.merchantId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantBaseGearListReq>, I>>(base?: I): sc2sMerchantBaseGearListReq {
    return sc2sMerchantBaseGearListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantBaseGearListReq>, I>>(object: I): sc2sMerchantBaseGearListReq {
    const message = createBasesc2sMerchantBaseGearListReq();
    message.merchantId = object.merchantId ?? "";
    return message;
  },
};

function createBasess2cMerchantBaseGearListRes(): ss2cMerchantBaseGearListRes {
  return { result: 0, loopMessageFlag: 0, baseGears: [] };
}

export const ss2cMerchantBaseGearListRes = {
  encode(message: ss2cMerchantBaseGearListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.loopMessageFlag !== 0) {
      writer.uint32(16).uint32(message.loopMessageFlag);
    }
    for (const v of message.baseGears) {
      smerchantBaseGearInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantBaseGearListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantBaseGearListRes();
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

          message.loopMessageFlag = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.baseGears.push(smerchantBaseGearInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantBaseGearListRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      loopMessageFlag: isSet(object.loopMessageFlag) ? Number(object.loopMessageFlag) : 0,
      baseGears: Array.isArray(object?.baseGears)
        ? object.baseGears.map((e: any) => smerchantBaseGearInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cMerchantBaseGearListRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.loopMessageFlag !== 0) {
      obj.loopMessageFlag = Math.round(message.loopMessageFlag);
    }
    if (message.baseGears?.length) {
      obj.baseGears = message.baseGears.map((e) => smerchantBaseGearInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantBaseGearListRes>, I>>(base?: I): ss2cMerchantBaseGearListRes {
    return ss2cMerchantBaseGearListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantBaseGearListRes>, I>>(object: I): ss2cMerchantBaseGearListRes {
    const message = createBasess2cMerchantBaseGearListRes();
    message.result = object.result ?? 0;
    message.loopMessageFlag = object.loopMessageFlag ?? 0;
    message.baseGears = object.baseGears?.map((e) => smerchantBaseGearInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sMerchantBaseGearSetReq(): sc2sMerchantBaseGearSetReq {
  return {};
}

export const sc2sMerchantBaseGearSetReq = {
  encode(_: sc2sMerchantBaseGearSetReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantBaseGearSetReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantBaseGearSetReq();
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

  fromJSON(_: any): sc2sMerchantBaseGearSetReq {
    return {};
  },

  toJSON(_: sc2sMerchantBaseGearSetReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantBaseGearSetReq>, I>>(base?: I): sc2sMerchantBaseGearSetReq {
    return sc2sMerchantBaseGearSetReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantBaseGearSetReq>, I>>(_: I): sc2sMerchantBaseGearSetReq {
    const message = createBasesc2sMerchantBaseGearSetReq();
    return message;
  },
};

function createBasess2cMerchantBaseGearSetRes(): ss2cMerchantBaseGearSetRes {
  return { equipBaseGears: [] };
}

export const ss2cMerchantBaseGearSetRes = {
  encode(message: ss2cMerchantBaseGearSetRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.equipBaseGears) {
      SItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantBaseGearSetRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantBaseGearSetRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.equipBaseGears.push(SItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantBaseGearSetRes {
    return {
      equipBaseGears: Array.isArray(object?.equipBaseGears)
        ? object.equipBaseGears.map((e: any) => SItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cMerchantBaseGearSetRes): unknown {
    const obj: any = {};
    if (message.equipBaseGears?.length) {
      obj.equipBaseGears = message.equipBaseGears.map((e) => SItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantBaseGearSetRes>, I>>(base?: I): ss2cMerchantBaseGearSetRes {
    return ss2cMerchantBaseGearSetRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantBaseGearSetRes>, I>>(object: I): ss2cMerchantBaseGearSetRes {
    const message = createBasess2cMerchantBaseGearSetRes();
    message.equipBaseGears = object.equipBaseGears?.map((e) => SItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sMerchantSaveBaseGearSetReq(): sc2sMerchantSaveBaseGearSetReq {
  return { merchantId: "", saveInfos: [] };
}

export const sc2sMerchantSaveBaseGearSetReq = {
  encode(message: sc2sMerchantSaveBaseGearSetReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merchantId !== "") {
      writer.uint32(10).string(message.merchantId);
    }
    for (const v of message.saveInfos) {
      smerchantBaseGearSaveSlotInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantSaveBaseGearSetReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantSaveBaseGearSetReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.merchantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.saveInfos.push(smerchantBaseGearSaveSlotInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMerchantSaveBaseGearSetReq {
    return {
      merchantId: isSet(object.merchantId) ? String(object.merchantId) : "",
      saveInfos: Array.isArray(object?.saveInfos)
        ? object.saveInfos.map((e: any) => smerchantBaseGearSaveSlotInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: sc2sMerchantSaveBaseGearSetReq): unknown {
    const obj: any = {};
    if (message.merchantId !== "") {
      obj.merchantId = message.merchantId;
    }
    if (message.saveInfos?.length) {
      obj.saveInfos = message.saveInfos.map((e) => smerchantBaseGearSaveSlotInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantSaveBaseGearSetReq>, I>>(base?: I): sc2sMerchantSaveBaseGearSetReq {
    return sc2sMerchantSaveBaseGearSetReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantSaveBaseGearSetReq>, I>>(
    object: I,
  ): sc2sMerchantSaveBaseGearSetReq {
    const message = createBasesc2sMerchantSaveBaseGearSetReq();
    message.merchantId = object.merchantId ?? "";
    message.saveInfos = object.saveInfos?.map((e) => smerchantBaseGearSaveSlotInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cMerchantSaveBaseGearSetRes(): ss2cMerchantSaveBaseGearSetRes {
  return { result: 0 };
}

export const ss2cMerchantSaveBaseGearSetRes = {
  encode(message: ss2cMerchantSaveBaseGearSetRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantSaveBaseGearSetRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantSaveBaseGearSetRes();
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

  fromJSON(object: any): ss2cMerchantSaveBaseGearSetRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cMerchantSaveBaseGearSetRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantSaveBaseGearSetRes>, I>>(base?: I): ss2cMerchantSaveBaseGearSetRes {
    return ss2cMerchantSaveBaseGearSetRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantSaveBaseGearSetRes>, I>>(
    object: I,
  ): ss2cMerchantSaveBaseGearSetRes {
    const message = createBasess2cMerchantSaveBaseGearSetRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sMerchantEquipBaseGearSetReq(): sc2sMerchantEquipBaseGearSetReq {
  return {};
}

export const sc2sMerchantEquipBaseGearSetReq = {
  encode(_: sc2sMerchantEquipBaseGearSetReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantEquipBaseGearSetReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantEquipBaseGearSetReq();
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

  fromJSON(_: any): sc2sMerchantEquipBaseGearSetReq {
    return {};
  },

  toJSON(_: sc2sMerchantEquipBaseGearSetReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantEquipBaseGearSetReq>, I>>(base?: I): sc2sMerchantEquipBaseGearSetReq {
    return sc2sMerchantEquipBaseGearSetReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantEquipBaseGearSetReq>, I>>(_: I): sc2sMerchantEquipBaseGearSetReq {
    const message = createBasesc2sMerchantEquipBaseGearSetReq();
    return message;
  },
};

function createBasess2cMerchantEquipBaseGearSetRes(): ss2cMerchantEquipBaseGearSetRes {
  return { result: 0 };
}

export const ss2cMerchantEquipBaseGearSetRes = {
  encode(message: ss2cMerchantEquipBaseGearSetRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantEquipBaseGearSetRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantEquipBaseGearSetRes();
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

  fromJSON(object: any): ss2cMerchantEquipBaseGearSetRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cMerchantEquipBaseGearSetRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantEquipBaseGearSetRes>, I>>(base?: I): ss2cMerchantEquipBaseGearSetRes {
    return ss2cMerchantEquipBaseGearSetRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantEquipBaseGearSetRes>, I>>(
    object: I,
  ): ss2cMerchantEquipBaseGearSetRes {
    const message = createBasess2cMerchantEquipBaseGearSetRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sMerchantServiceMindwipeInfoReq(): sc2sMerchantServiceMindwipeInfoReq {
  return {};
}

export const sc2sMerchantServiceMindwipeInfoReq = {
  encode(_: sc2sMerchantServiceMindwipeInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantServiceMindwipeInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantServiceMindwipeInfoReq();
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

  fromJSON(_: any): sc2sMerchantServiceMindwipeInfoReq {
    return {};
  },

  toJSON(_: sc2sMerchantServiceMindwipeInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantServiceMindwipeInfoReq>, I>>(
    base?: I,
  ): sc2sMerchantServiceMindwipeInfoReq {
    return sc2sMerchantServiceMindwipeInfoReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantServiceMindwipeInfoReq>, I>>(
    _: I,
  ): sc2sMerchantServiceMindwipeInfoReq {
    const message = createBasesc2sMerchantServiceMindwipeInfoReq();
    return message;
  },
};

function createBasess2cMerchantServiceMindwipeInfoRes(): ss2cMerchantServiceMindwipeInfoRes {
  return { remainResetTimeMS: 0, canReRoll: 0, resetTermMS: 0 };
}

export const ss2cMerchantServiceMindwipeInfoRes = {
  encode(message: ss2cMerchantServiceMindwipeInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remainResetTimeMS !== 0) {
      writer.uint32(8).int64(message.remainResetTimeMS);
    }
    if (message.canReRoll !== 0) {
      writer.uint32(16).int32(message.canReRoll);
    }
    if (message.resetTermMS !== 0) {
      writer.uint32(24).int64(message.resetTermMS);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantServiceMindwipeInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantServiceMindwipeInfoRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.remainResetTimeMS = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.canReRoll = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.resetTermMS = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantServiceMindwipeInfoRes {
    return {
      remainResetTimeMS: isSet(object.remainResetTimeMS) ? Number(object.remainResetTimeMS) : 0,
      canReRoll: isSet(object.canReRoll) ? Number(object.canReRoll) : 0,
      resetTermMS: isSet(object.resetTermMS) ? Number(object.resetTermMS) : 0,
    };
  },

  toJSON(message: ss2cMerchantServiceMindwipeInfoRes): unknown {
    const obj: any = {};
    if (message.remainResetTimeMS !== 0) {
      obj.remainResetTimeMS = Math.round(message.remainResetTimeMS);
    }
    if (message.canReRoll !== 0) {
      obj.canReRoll = Math.round(message.canReRoll);
    }
    if (message.resetTermMS !== 0) {
      obj.resetTermMS = Math.round(message.resetTermMS);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantServiceMindwipeInfoRes>, I>>(
    base?: I,
  ): ss2cMerchantServiceMindwipeInfoRes {
    return ss2cMerchantServiceMindwipeInfoRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantServiceMindwipeInfoRes>, I>>(
    object: I,
  ): ss2cMerchantServiceMindwipeInfoRes {
    const message = createBasess2cMerchantServiceMindwipeInfoRes();
    message.remainResetTimeMS = object.remainResetTimeMS ?? 0;
    message.canReRoll = object.canReRoll ?? 0;
    message.resetTermMS = object.resetTermMS ?? 0;
    return message;
  },
};

function createBasesc2sMerchantServiceMindwipeReq(): sc2sMerchantServiceMindwipeReq {
  return {};
}

export const sc2sMerchantServiceMindwipeReq = {
  encode(_: sc2sMerchantServiceMindwipeReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantServiceMindwipeReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantServiceMindwipeReq();
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

  fromJSON(_: any): sc2sMerchantServiceMindwipeReq {
    return {};
  },

  toJSON(_: sc2sMerchantServiceMindwipeReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantServiceMindwipeReq>, I>>(base?: I): sc2sMerchantServiceMindwipeReq {
    return sc2sMerchantServiceMindwipeReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantServiceMindwipeReq>, I>>(_: I): sc2sMerchantServiceMindwipeReq {
    const message = createBasesc2sMerchantServiceMindwipeReq();
    return message;
  },
};

function createBasess2cMerchantServiceMindwipeRes(): ss2cMerchantServiceMindwipeRes {
  return { result: 0 };
}

export const ss2cMerchantServiceMindwipeRes = {
  encode(message: ss2cMerchantServiceMindwipeRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantServiceMindwipeRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantServiceMindwipeRes();
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

  fromJSON(object: any): ss2cMerchantServiceMindwipeRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cMerchantServiceMindwipeRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantServiceMindwipeRes>, I>>(base?: I): ss2cMerchantServiceMindwipeRes {
    return ss2cMerchantServiceMindwipeRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantServiceMindwipeRes>, I>>(
    object: I,
  ): ss2cMerchantServiceMindwipeRes {
    const message = createBasess2cMerchantServiceMindwipeRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sMerchantRecoveryListReq(): sc2sMerchantRecoveryListReq {
  return {};
}

export const sc2sMerchantRecoveryListReq = {
  encode(_: sc2sMerchantRecoveryListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantRecoveryListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantRecoveryListReq();
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

  fromJSON(_: any): sc2sMerchantRecoveryListReq {
    return {};
  },

  toJSON(_: sc2sMerchantRecoveryListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantRecoveryListReq>, I>>(base?: I): sc2sMerchantRecoveryListReq {
    return sc2sMerchantRecoveryListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantRecoveryListReq>, I>>(_: I): sc2sMerchantRecoveryListReq {
    const message = createBasesc2sMerchantRecoveryListReq();
    return message;
  },
};

function createBasesrecoveryItemPrice(): srecoveryItemPrice {
  return { itemId: "", amount: 0 };
}

export const srecoveryItemPrice = {
  encode(message: srecoveryItemPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "") {
      writer.uint32(10).string(message.itemId);
    }
    if (message.amount !== 0) {
      writer.uint32(16).uint32(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): srecoveryItemPrice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesrecoveryItemPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.itemId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.amount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): srecoveryItemPrice {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: srecoveryItemPrice): unknown {
    const obj: any = {};
    if (message.itemId !== "") {
      obj.itemId = message.itemId;
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<srecoveryItemPrice>, I>>(base?: I): srecoveryItemPrice {
    return srecoveryItemPrice.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<srecoveryItemPrice>, I>>(object: I): srecoveryItemPrice {
    const message = createBasesrecoveryItemPrice();
    message.itemId = object.itemId ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBasesmerchantRecoveryItemInfo(): smerchantRecoveryItemInfo {
  return { recoveryUniqueId: 0, itemInfo: undefined, originPriceList: [], salePriceList: [], remainExpiredTimeMS: 0 };
}

export const smerchantRecoveryItemInfo = {
  encode(message: smerchantRecoveryItemInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recoveryUniqueId !== 0) {
      writer.uint32(8).uint64(message.recoveryUniqueId);
    }
    if (message.itemInfo !== undefined) {
      SItem.encode(message.itemInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.originPriceList) {
      srecoveryItemPrice.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.salePriceList) {
      srecoveryItemPrice.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.remainExpiredTimeMS !== 0) {
      writer.uint32(40).uint64(message.remainExpiredTimeMS);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smerchantRecoveryItemInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmerchantRecoveryItemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.recoveryUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.itemInfo = SItem.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.originPriceList.push(srecoveryItemPrice.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.salePriceList.push(srecoveryItemPrice.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.remainExpiredTimeMS = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smerchantRecoveryItemInfo {
    return {
      recoveryUniqueId: isSet(object.recoveryUniqueId) ? Number(object.recoveryUniqueId) : 0,
      itemInfo: isSet(object.itemInfo) ? SItem.fromJSON(object.itemInfo) : undefined,
      originPriceList: Array.isArray(object?.originPriceList)
        ? object.originPriceList.map((e: any) => srecoveryItemPrice.fromJSON(e))
        : [],
      salePriceList: Array.isArray(object?.salePriceList)
        ? object.salePriceList.map((e: any) => srecoveryItemPrice.fromJSON(e))
        : [],
      remainExpiredTimeMS: isSet(object.remainExpiredTimeMS) ? Number(object.remainExpiredTimeMS) : 0,
    };
  },

  toJSON(message: smerchantRecoveryItemInfo): unknown {
    const obj: any = {};
    if (message.recoveryUniqueId !== 0) {
      obj.recoveryUniqueId = Math.round(message.recoveryUniqueId);
    }
    if (message.itemInfo !== undefined) {
      obj.itemInfo = SItem.toJSON(message.itemInfo);
    }
    if (message.originPriceList?.length) {
      obj.originPriceList = message.originPriceList.map((e) => srecoveryItemPrice.toJSON(e));
    }
    if (message.salePriceList?.length) {
      obj.salePriceList = message.salePriceList.map((e) => srecoveryItemPrice.toJSON(e));
    }
    if (message.remainExpiredTimeMS !== 0) {
      obj.remainExpiredTimeMS = Math.round(message.remainExpiredTimeMS);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantRecoveryItemInfo>, I>>(base?: I): smerchantRecoveryItemInfo {
    return smerchantRecoveryItemInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smerchantRecoveryItemInfo>, I>>(object: I): smerchantRecoveryItemInfo {
    const message = createBasesmerchantRecoveryItemInfo();
    message.recoveryUniqueId = object.recoveryUniqueId ?? 0;
    message.itemInfo = (object.itemInfo !== undefined && object.itemInfo !== null)
      ? SItem.fromPartial(object.itemInfo)
      : undefined;
    message.originPriceList = object.originPriceList?.map((e) => srecoveryItemPrice.fromPartial(e)) || [];
    message.salePriceList = object.salePriceList?.map((e) => srecoveryItemPrice.fromPartial(e)) || [];
    message.remainExpiredTimeMS = object.remainExpiredTimeMS ?? 0;
    return message;
  },
};

function createBasess2cMerchantRecoveryListRes(): ss2cMerchantRecoveryListRes {
  return { infos: [] };
}

export const ss2cMerchantRecoveryListRes = {
  encode(message: ss2cMerchantRecoveryListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      smerchantRecoveryItemInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantRecoveryListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantRecoveryListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(smerchantRecoveryItemInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantRecoveryListRes {
    return {
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => smerchantRecoveryItemInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cMerchantRecoveryListRes): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => smerchantRecoveryItemInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantRecoveryListRes>, I>>(base?: I): ss2cMerchantRecoveryListRes {
    return ss2cMerchantRecoveryListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantRecoveryListRes>, I>>(object: I): ss2cMerchantRecoveryListRes {
    const message = createBasess2cMerchantRecoveryListRes();
    message.infos = object.infos?.map((e) => smerchantRecoveryItemInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sMerchantRecoveryBuyReq(): sc2sMerchantRecoveryBuyReq {
  return { recoveryUniqueId: 0, dealItemList: [], merchantSlotInfo: [] };
}

export const sc2sMerchantRecoveryBuyReq = {
  encode(message: sc2sMerchantRecoveryBuyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recoveryUniqueId !== 0) {
      writer.uint32(8).uint64(message.recoveryUniqueId);
    }
    for (const v of message.dealItemList) {
      merchantTradeItemInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.merchantSlotInfo) {
      smerchantTradeSlotInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantRecoveryBuyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantRecoveryBuyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.recoveryUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dealItemList.push(merchantTradeItemInfo.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.merchantSlotInfo.push(smerchantTradeSlotInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMerchantRecoveryBuyReq {
    return {
      recoveryUniqueId: isSet(object.recoveryUniqueId) ? Number(object.recoveryUniqueId) : 0,
      dealItemList: Array.isArray(object?.dealItemList)
        ? object.dealItemList.map((e: any) => merchantTradeItemInfo.fromJSON(e))
        : [],
      merchantSlotInfo: Array.isArray(object?.merchantSlotInfo)
        ? object.merchantSlotInfo.map((e: any) => smerchantTradeSlotInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: sc2sMerchantRecoveryBuyReq): unknown {
    const obj: any = {};
    if (message.recoveryUniqueId !== 0) {
      obj.recoveryUniqueId = Math.round(message.recoveryUniqueId);
    }
    if (message.dealItemList?.length) {
      obj.dealItemList = message.dealItemList.map((e) => merchantTradeItemInfo.toJSON(e));
    }
    if (message.merchantSlotInfo?.length) {
      obj.merchantSlotInfo = message.merchantSlotInfo.map((e) => smerchantTradeSlotInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantRecoveryBuyReq>, I>>(base?: I): sc2sMerchantRecoveryBuyReq {
    return sc2sMerchantRecoveryBuyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantRecoveryBuyReq>, I>>(object: I): sc2sMerchantRecoveryBuyReq {
    const message = createBasesc2sMerchantRecoveryBuyReq();
    message.recoveryUniqueId = object.recoveryUniqueId ?? 0;
    message.dealItemList = object.dealItemList?.map((e) => merchantTradeItemInfo.fromPartial(e)) || [];
    message.merchantSlotInfo = object.merchantSlotInfo?.map((e) => smerchantTradeSlotInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cMerchantRecoveryBuyRes(): ss2cMerchantRecoveryBuyRes {
  return { result: 0, givenItemId: "" };
}

export const ss2cMerchantRecoveryBuyRes = {
  encode(message: ss2cMerchantRecoveryBuyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.givenItemId !== "") {
      writer.uint32(18).string(message.givenItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantRecoveryBuyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantRecoveryBuyRes();
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

          message.givenItemId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantRecoveryBuyRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      givenItemId: isSet(object.givenItemId) ? String(object.givenItemId) : "",
    };
  },

  toJSON(message: ss2cMerchantRecoveryBuyRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.givenItemId !== "") {
      obj.givenItemId = message.givenItemId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantRecoveryBuyRes>, I>>(base?: I): ss2cMerchantRecoveryBuyRes {
    return ss2cMerchantRecoveryBuyRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantRecoveryBuyRes>, I>>(object: I): ss2cMerchantRecoveryBuyRes {
    const message = createBasess2cMerchantRecoveryBuyRes();
    message.result = object.result ?? 0;
    message.givenItemId = object.givenItemId ?? "";
    return message;
  },
};

function createBasesmerchantQuestLogInfo(): smerchantQuestLogInfo {
  return { merchantId: "", quests: [] };
}

export const smerchantQuestLogInfo = {
  encode(message: smerchantQuestLogInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merchantId !== "") {
      writer.uint32(10).string(message.merchantId);
    }
    for (const v of message.quests) {
      smerchantQuestInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smerchantQuestLogInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmerchantQuestLogInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.merchantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.quests.push(smerchantQuestInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smerchantQuestLogInfo {
    return {
      merchantId: isSet(object.merchantId) ? String(object.merchantId) : "",
      quests: Array.isArray(object?.quests) ? object.quests.map((e: any) => smerchantQuestInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: smerchantQuestLogInfo): unknown {
    const obj: any = {};
    if (message.merchantId !== "") {
      obj.merchantId = message.merchantId;
    }
    if (message.quests?.length) {
      obj.quests = message.quests.map((e) => smerchantQuestInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantQuestLogInfo>, I>>(base?: I): smerchantQuestLogInfo {
    return smerchantQuestLogInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smerchantQuestLogInfo>, I>>(object: I): smerchantQuestLogInfo {
    const message = createBasesmerchantQuestLogInfo();
    message.merchantId = object.merchantId ?? "";
    message.quests = object.quests?.map((e) => smerchantQuestInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sMerchantQuestLogListReq(): sc2sMerchantQuestLogListReq {
  return {};
}

export const sc2sMerchantQuestLogListReq = {
  encode(_: sc2sMerchantQuestLogListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantQuestLogListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantQuestLogListReq();
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

  fromJSON(_: any): sc2sMerchantQuestLogListReq {
    return {};
  },

  toJSON(_: sc2sMerchantQuestLogListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantQuestLogListReq>, I>>(base?: I): sc2sMerchantQuestLogListReq {
    return sc2sMerchantQuestLogListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantQuestLogListReq>, I>>(_: I): sc2sMerchantQuestLogListReq {
    const message = createBasesc2sMerchantQuestLogListReq();
    return message;
  },
};

function createBasess2cMerchantQuestLogListRes(): ss2cMerchantQuestLogListRes {
  return { result: 0, questList: [] };
}

export const ss2cMerchantQuestLogListRes = {
  encode(message: ss2cMerchantQuestLogListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.questList) {
      smerchantQuestLogInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantQuestLogListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantQuestLogListRes();
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

          message.questList.push(smerchantQuestLogInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantQuestLogListRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      questList: Array.isArray(object?.questList)
        ? object.questList.map((e: any) => smerchantQuestLogInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cMerchantQuestLogListRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.questList?.length) {
      obj.questList = message.questList.map((e) => smerchantQuestLogInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantQuestLogListRes>, I>>(base?: I): ss2cMerchantQuestLogListRes {
    return ss2cMerchantQuestLogListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantQuestLogListRes>, I>>(object: I): ss2cMerchantQuestLogListRes {
    const message = createBasess2cMerchantQuestLogListRes();
    message.result = object.result ?? 0;
    message.questList = object.questList?.map((e) => smerchantQuestLogInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sMerchantQuestLogAcceptAllReq(): sc2sMerchantQuestLogAcceptAllReq {
  return {};
}

export const sc2sMerchantQuestLogAcceptAllReq = {
  encode(_: sc2sMerchantQuestLogAcceptAllReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantQuestLogAcceptAllReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantQuestLogAcceptAllReq();
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

  fromJSON(_: any): sc2sMerchantQuestLogAcceptAllReq {
    return {};
  },

  toJSON(_: sc2sMerchantQuestLogAcceptAllReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantQuestLogAcceptAllReq>, I>>(
    base?: I,
  ): sc2sMerchantQuestLogAcceptAllReq {
    return sc2sMerchantQuestLogAcceptAllReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantQuestLogAcceptAllReq>, I>>(
    _: I,
  ): sc2sMerchantQuestLogAcceptAllReq {
    const message = createBasesc2sMerchantQuestLogAcceptAllReq();
    return message;
  },
};

function createBasess2cMerchantQuestLogAcceptAllRes(): ss2cMerchantQuestLogAcceptAllRes {
  return { result: 0 };
}

export const ss2cMerchantQuestLogAcceptAllRes = {
  encode(message: ss2cMerchantQuestLogAcceptAllRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantQuestLogAcceptAllRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantQuestLogAcceptAllRes();
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

  fromJSON(object: any): ss2cMerchantQuestLogAcceptAllRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cMerchantQuestLogAcceptAllRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantQuestLogAcceptAllRes>, I>>(
    base?: I,
  ): ss2cMerchantQuestLogAcceptAllRes {
    return ss2cMerchantQuestLogAcceptAllRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantQuestLogAcceptAllRes>, I>>(
    object: I,
  ): ss2cMerchantQuestLogAcceptAllRes {
    const message = createBasess2cMerchantQuestLogAcceptAllRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasess2cMerchantRecoveryItemCheckNot(): ss2cMerchantRecoveryItemCheckNot {
  return { recoveryFlag: 0 };
}

export const ss2cMerchantRecoveryItemCheckNot = {
  encode(message: ss2cMerchantRecoveryItemCheckNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recoveryFlag !== 0) {
      writer.uint32(8).uint32(message.recoveryFlag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantRecoveryItemCheckNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantRecoveryItemCheckNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.recoveryFlag = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantRecoveryItemCheckNot {
    return { recoveryFlag: isSet(object.recoveryFlag) ? Number(object.recoveryFlag) : 0 };
  },

  toJSON(message: ss2cMerchantRecoveryItemCheckNot): unknown {
    const obj: any = {};
    if (message.recoveryFlag !== 0) {
      obj.recoveryFlag = Math.round(message.recoveryFlag);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantRecoveryItemCheckNot>, I>>(
    base?: I,
  ): ss2cMerchantRecoveryItemCheckNot {
    return ss2cMerchantRecoveryItemCheckNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantRecoveryItemCheckNot>, I>>(
    object: I,
  ): ss2cMerchantRecoveryItemCheckNot {
    const message = createBasess2cMerchantRecoveryItemCheckNot();
    message.recoveryFlag = object.recoveryFlag ?? 0;
    return message;
  },
};

function createBasesc2sMerchantRecoveryCheckReq(): sc2sMerchantRecoveryCheckReq {
  return {};
}

export const sc2sMerchantRecoveryCheckReq = {
  encode(_: sc2sMerchantRecoveryCheckReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMerchantRecoveryCheckReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMerchantRecoveryCheckReq();
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

  fromJSON(_: any): sc2sMerchantRecoveryCheckReq {
    return {};
  },

  toJSON(_: sc2sMerchantRecoveryCheckReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantRecoveryCheckReq>, I>>(base?: I): sc2sMerchantRecoveryCheckReq {
    return sc2sMerchantRecoveryCheckReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMerchantRecoveryCheckReq>, I>>(_: I): sc2sMerchantRecoveryCheckReq {
    const message = createBasesc2sMerchantRecoveryCheckReq();
    return message;
  },
};

function createBasess2cMerchantRecoveryCheckRes(): ss2cMerchantRecoveryCheckRes {
  return { recoveryFlag: 0 };
}

export const ss2cMerchantRecoveryCheckRes = {
  encode(message: ss2cMerchantRecoveryCheckRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recoveryFlag !== 0) {
      writer.uint32(8).uint32(message.recoveryFlag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMerchantRecoveryCheckRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMerchantRecoveryCheckRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.recoveryFlag = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMerchantRecoveryCheckRes {
    return { recoveryFlag: isSet(object.recoveryFlag) ? Number(object.recoveryFlag) : 0 };
  },

  toJSON(message: ss2cMerchantRecoveryCheckRes): unknown {
    const obj: any = {};
    if (message.recoveryFlag !== 0) {
      obj.recoveryFlag = Math.round(message.recoveryFlag);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantRecoveryCheckRes>, I>>(base?: I): ss2cMerchantRecoveryCheckRes {
    return ss2cMerchantRecoveryCheckRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMerchantRecoveryCheckRes>, I>>(object: I): ss2cMerchantRecoveryCheckRes {
    const message = createBasess2cMerchantRecoveryCheckRes();
    message.recoveryFlag = object.recoveryFlag ?? 0;
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
