/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { SItem } from "./_Item";

export const protobufPackage = "DC.Packet";

export interface sc2sInventoryInfoReq {
}

export interface ss2cInventoryInfoRes {
  result: number;
  inventoryItems: SItem[];
}

export enum ss2cInventoryInfoRes_resultInventoryInfoInfo {
  NONE = 0,
  OK_SEND_DATA = 1,
  OK_NOT_CHANGE = 2,
  FAIL = 3,
  UNRECOGNIZED = -1,
}

export function ss2cInventoryInfoRes_resultInventoryInfoInfoFromJSON(
  object: any,
): ss2cInventoryInfoRes_resultInventoryInfoInfo {
  switch (object) {
    case 0:
    case "NONE":
      return ss2cInventoryInfoRes_resultInventoryInfoInfo.NONE;
    case 1:
    case "OK_SEND_DATA":
      return ss2cInventoryInfoRes_resultInventoryInfoInfo.OK_SEND_DATA;
    case 2:
    case "OK_NOT_CHANGE":
      return ss2cInventoryInfoRes_resultInventoryInfoInfo.OK_NOT_CHANGE;
    case 3:
    case "FAIL":
      return ss2cInventoryInfoRes_resultInventoryInfoInfo.FAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ss2cInventoryInfoRes_resultInventoryInfoInfo.UNRECOGNIZED;
  }
}

export function ss2cInventoryInfoRes_resultInventoryInfoInfoToJSON(
  object: ss2cInventoryInfoRes_resultInventoryInfoInfo,
): string {
  switch (object) {
    case ss2cInventoryInfoRes_resultInventoryInfoInfo.NONE:
      return "NONE";
    case ss2cInventoryInfoRes_resultInventoryInfoInfo.OK_SEND_DATA:
      return "OK_SEND_DATA";
    case ss2cInventoryInfoRes_resultInventoryInfoInfo.OK_NOT_CHANGE:
      return "OK_NOT_CHANGE";
    case ss2cInventoryInfoRes_resultInventoryInfoInfo.FAIL:
      return "FAIL";
    case ss2cInventoryInfoRes_resultInventoryInfoInfo.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface sc2sInventoryAllUpdateReq {
  inventoryItems: SItem[];
}

export interface ss2cInventoryAllUpdateRes {
  result: number;
  inventoryItems: SItem[];
}

export enum ss2cInventoryAllUpdateRes_resultInventoryUpdate {
  NONE = 0,
  OK = 1,
  FAIL = 2,
  UNRECOGNIZED = -1,
}

export function ss2cInventoryAllUpdateRes_resultInventoryUpdateFromJSON(
  object: any,
): ss2cInventoryAllUpdateRes_resultInventoryUpdate {
  switch (object) {
    case 0:
    case "NONE":
      return ss2cInventoryAllUpdateRes_resultInventoryUpdate.NONE;
    case 1:
    case "OK":
      return ss2cInventoryAllUpdateRes_resultInventoryUpdate.OK;
    case 2:
    case "FAIL":
      return ss2cInventoryAllUpdateRes_resultInventoryUpdate.FAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ss2cInventoryAllUpdateRes_resultInventoryUpdate.UNRECOGNIZED;
  }
}

export function ss2cInventoryAllUpdateRes_resultInventoryUpdateToJSON(
  object: ss2cInventoryAllUpdateRes_resultInventoryUpdate,
): string {
  switch (object) {
    case ss2cInventoryAllUpdateRes_resultInventoryUpdate.NONE:
      return "NONE";
    case ss2cInventoryAllUpdateRes_resultInventoryUpdate.OK:
      return "OK";
    case ss2cInventoryAllUpdateRes_resultInventoryUpdate.FAIL:
      return "FAIL";
    case ss2cInventoryAllUpdateRes_resultInventoryUpdate.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface sinventoryItemReqInfo {
  uniqueId: number;
  inventoryId: number;
  slotId: number;
}

export interface sc2sInventoryMoveReq {
  srcInfo: sinventoryItemReqInfo | undefined;
  dstInventoryId: number;
  dstSlotId: number;
}

export interface ss2cInventoryMoveRes {
}

export interface sc2sInventoryMergeReq {
  srcInfo: sinventoryItemReqInfo | undefined;
  dstInfo: sinventoryItemReqInfo | undefined;
}

export interface ss2cInventoryMergeRes {
}

export interface inventorySwapDstInfo {
  dstInfo: sinventoryItemReqInfo | undefined;
  newSlotId: number;
  newInventoryId: number;
}

export interface sc2sInventorySwapReq {
  srcInfo: sinventoryItemReqInfo | undefined;
  dstInfo: sinventoryItemReqInfo | undefined;
  swapInfos: inventorySwapDstInfo[];
}

export interface ss2cInventorySwapRes {
}

export interface sc2sInventorySplitMoveReq {
  srcInfo: sinventoryItemReqInfo | undefined;
  count: number;
  dstInventoryId: number;
  dstSlotId: number;
}

export interface ss2cInventorySplitMoveRes {
  newUniqueId: number;
  newInventoryId: number;
  newSlotId: number;
}

export interface sc2sInventorySplitMergeReq {
  srcInfo: sinventoryItemReqInfo | undefined;
  dstInfo: sinventoryItemReqInfo | undefined;
  count: number;
}

export interface ss2cInventorySplitMergeRes {
}

export interface sc2sInventorySplitSwapReq {
  srcInfo: sinventoryItemReqInfo | undefined;
  dstInfo: sinventoryItemReqInfo | undefined;
  count: number;
  newSlotId: number;
  newInventoryId: number;
}

export interface ss2cInventorySplitSwapRes {
  newUniqueId: number;
  newInventoryId: number;
  newSlotId: number;
}

export interface sc2sInventoryTwoHandedWeaponSwapReq {
  srcInfo: sinventoryItemReqInfo | undefined;
  dstInfo: sinventoryItemReqInfo | undefined;
  newSlotId: number;
  newInventoryId: number;
}

export interface ss2cInventoryTwoHandedWeaponSwapRes {
}

export interface sc2sInventorySingleUpdateReq {
  singleUpdateFlag: number;
  oldItem: SItem[];
  newItem: SItem[];
}

export interface ss2cInventorySingleUpdateRes {
  result: number;
  oldItem: SItem[];
  newItem: SItem[];
}

export enum ss2cInventorySingleUpdateRes_resultInventorySingleUpdate {
  NONE = 0,
  OK = 1,
  FAIL = 2,
  FAIL_VALID_CHECK_OLD_ITEM = 3,
  FAIL_VALID_CHECK_NEW_ITEM = 4,
  FAIL_CHECK_LOGIC_LOG = 5,
  UNRECOGNIZED = -1,
}

export function ss2cInventorySingleUpdateRes_resultInventorySingleUpdateFromJSON(
  object: any,
): ss2cInventorySingleUpdateRes_resultInventorySingleUpdate {
  switch (object) {
    case 0:
    case "NONE":
      return ss2cInventorySingleUpdateRes_resultInventorySingleUpdate.NONE;
    case 1:
    case "OK":
      return ss2cInventorySingleUpdateRes_resultInventorySingleUpdate.OK;
    case 2:
    case "FAIL":
      return ss2cInventorySingleUpdateRes_resultInventorySingleUpdate.FAIL;
    case 3:
    case "FAIL_VALID_CHECK_OLD_ITEM":
      return ss2cInventorySingleUpdateRes_resultInventorySingleUpdate.FAIL_VALID_CHECK_OLD_ITEM;
    case 4:
    case "FAIL_VALID_CHECK_NEW_ITEM":
      return ss2cInventorySingleUpdateRes_resultInventorySingleUpdate.FAIL_VALID_CHECK_NEW_ITEM;
    case 5:
    case "FAIL_CHECK_LOGIC_LOG":
      return ss2cInventorySingleUpdateRes_resultInventorySingleUpdate.FAIL_CHECK_LOGIC_LOG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ss2cInventorySingleUpdateRes_resultInventorySingleUpdate.UNRECOGNIZED;
  }
}

export function ss2cInventorySingleUpdateRes_resultInventorySingleUpdateToJSON(
  object: ss2cInventorySingleUpdateRes_resultInventorySingleUpdate,
): string {
  switch (object) {
    case ss2cInventorySingleUpdateRes_resultInventorySingleUpdate.NONE:
      return "NONE";
    case ss2cInventorySingleUpdateRes_resultInventorySingleUpdate.OK:
      return "OK";
    case ss2cInventorySingleUpdateRes_resultInventorySingleUpdate.FAIL:
      return "FAIL";
    case ss2cInventorySingleUpdateRes_resultInventorySingleUpdate.FAIL_VALID_CHECK_OLD_ITEM:
      return "FAIL_VALID_CHECK_OLD_ITEM";
    case ss2cInventorySingleUpdateRes_resultInventorySingleUpdate.FAIL_VALID_CHECK_NEW_ITEM:
      return "FAIL_VALID_CHECK_NEW_ITEM";
    case ss2cInventorySingleUpdateRes_resultInventorySingleUpdate.FAIL_CHECK_LOGIC_LOG:
      return "FAIL_CHECK_LOGIC_LOG";
    case ss2cInventorySingleUpdateRes_resultInventorySingleUpdate.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface sc2sStorageInfoReq {
  isRefresh: number;
}

export interface ss2cStorageInfoRes {
  result: number;
  storageItems: SItem[];
}

export enum ss2cStorageInfoRes_resultStorageInfo {
  NONE = 0,
  OK_SEND_DATA = 1,
  OK_NOT_CHANGE = 2,
  FAIL = 3,
  UNRECOGNIZED = -1,
}

export function ss2cStorageInfoRes_resultStorageInfoFromJSON(object: any): ss2cStorageInfoRes_resultStorageInfo {
  switch (object) {
    case 0:
    case "NONE":
      return ss2cStorageInfoRes_resultStorageInfo.NONE;
    case 1:
    case "OK_SEND_DATA":
      return ss2cStorageInfoRes_resultStorageInfo.OK_SEND_DATA;
    case 2:
    case "OK_NOT_CHANGE":
      return ss2cStorageInfoRes_resultStorageInfo.OK_NOT_CHANGE;
    case 3:
    case "FAIL":
      return ss2cStorageInfoRes_resultStorageInfo.FAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ss2cStorageInfoRes_resultStorageInfo.UNRECOGNIZED;
  }
}

export function ss2cStorageInfoRes_resultStorageInfoToJSON(object: ss2cStorageInfoRes_resultStorageInfo): string {
  switch (object) {
    case ss2cStorageInfoRes_resultStorageInfo.NONE:
      return "NONE";
    case ss2cStorageInfoRes_resultStorageInfo.OK_SEND_DATA:
      return "OK_SEND_DATA";
    case ss2cStorageInfoRes_resultStorageInfo.OK_NOT_CHANGE:
      return "OK_NOT_CHANGE";
    case ss2cStorageInfoRes_resultStorageInfo.FAIL:
      return "FAIL";
    case ss2cStorageInfoRes_resultStorageInfo.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface sc2sInventoryExpandStorageReq {
  buyInventoryId: number;
}

export interface ss2cInventoryExpandStorageRes {
  result: number;
}

function createBasesc2sInventoryInfoReq(): sc2sInventoryInfoReq {
  return {};
}

export const sc2sInventoryInfoReq = {
  encode(_: sc2sInventoryInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sInventoryInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sInventoryInfoReq();
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

  fromJSON(_: any): sc2sInventoryInfoReq {
    return {};
  },

  toJSON(_: sc2sInventoryInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sInventoryInfoReq>, I>>(base?: I): sc2sInventoryInfoReq {
    return sc2sInventoryInfoReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sInventoryInfoReq>, I>>(_: I): sc2sInventoryInfoReq {
    const message = createBasesc2sInventoryInfoReq();
    return message;
  },
};

function createBasess2cInventoryInfoRes(): ss2cInventoryInfoRes {
  return { result: 0, inventoryItems: [] };
}

export const ss2cInventoryInfoRes = {
  encode(message: ss2cInventoryInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.inventoryItems) {
      SItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cInventoryInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cInventoryInfoRes();
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

          message.inventoryItems.push(SItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cInventoryInfoRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      inventoryItems: Array.isArray(object?.inventoryItems)
        ? object.inventoryItems.map((e: any) => SItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cInventoryInfoRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.inventoryItems?.length) {
      obj.inventoryItems = message.inventoryItems.map((e) => SItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cInventoryInfoRes>, I>>(base?: I): ss2cInventoryInfoRes {
    return ss2cInventoryInfoRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cInventoryInfoRes>, I>>(object: I): ss2cInventoryInfoRes {
    const message = createBasess2cInventoryInfoRes();
    message.result = object.result ?? 0;
    message.inventoryItems = object.inventoryItems?.map((e) => SItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sInventoryAllUpdateReq(): sc2sInventoryAllUpdateReq {
  return { inventoryItems: [] };
}

export const sc2sInventoryAllUpdateReq = {
  encode(message: sc2sInventoryAllUpdateReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inventoryItems) {
      SItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sInventoryAllUpdateReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sInventoryAllUpdateReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inventoryItems.push(SItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sInventoryAllUpdateReq {
    return {
      inventoryItems: Array.isArray(object?.inventoryItems)
        ? object.inventoryItems.map((e: any) => SItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: sc2sInventoryAllUpdateReq): unknown {
    const obj: any = {};
    if (message.inventoryItems?.length) {
      obj.inventoryItems = message.inventoryItems.map((e) => SItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sInventoryAllUpdateReq>, I>>(base?: I): sc2sInventoryAllUpdateReq {
    return sc2sInventoryAllUpdateReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sInventoryAllUpdateReq>, I>>(object: I): sc2sInventoryAllUpdateReq {
    const message = createBasesc2sInventoryAllUpdateReq();
    message.inventoryItems = object.inventoryItems?.map((e) => SItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cInventoryAllUpdateRes(): ss2cInventoryAllUpdateRes {
  return { result: 0, inventoryItems: [] };
}

export const ss2cInventoryAllUpdateRes = {
  encode(message: ss2cInventoryAllUpdateRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.inventoryItems) {
      SItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cInventoryAllUpdateRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cInventoryAllUpdateRes();
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

          message.inventoryItems.push(SItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cInventoryAllUpdateRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      inventoryItems: Array.isArray(object?.inventoryItems)
        ? object.inventoryItems.map((e: any) => SItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cInventoryAllUpdateRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.inventoryItems?.length) {
      obj.inventoryItems = message.inventoryItems.map((e) => SItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cInventoryAllUpdateRes>, I>>(base?: I): ss2cInventoryAllUpdateRes {
    return ss2cInventoryAllUpdateRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cInventoryAllUpdateRes>, I>>(object: I): ss2cInventoryAllUpdateRes {
    const message = createBasess2cInventoryAllUpdateRes();
    message.result = object.result ?? 0;
    message.inventoryItems = object.inventoryItems?.map((e) => SItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasesinventoryItemReqInfo(): sinventoryItemReqInfo {
  return { uniqueId: 0, inventoryId: 0, slotId: 0 };
}

export const sinventoryItemReqInfo = {
  encode(message: sinventoryItemReqInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uniqueId !== 0) {
      writer.uint32(8).uint64(message.uniqueId);
    }
    if (message.inventoryId !== 0) {
      writer.uint32(16).uint32(message.inventoryId);
    }
    if (message.slotId !== 0) {
      writer.uint32(24).uint32(message.slotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sinventoryItemReqInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesinventoryItemReqInfo();
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

          message.inventoryId = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.slotId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sinventoryItemReqInfo {
    return {
      uniqueId: isSet(object.uniqueId) ? Number(object.uniqueId) : 0,
      inventoryId: isSet(object.inventoryId) ? Number(object.inventoryId) : 0,
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
    };
  },

  toJSON(message: sinventoryItemReqInfo): unknown {
    const obj: any = {};
    if (message.uniqueId !== 0) {
      obj.uniqueId = Math.round(message.uniqueId);
    }
    if (message.inventoryId !== 0) {
      obj.inventoryId = Math.round(message.inventoryId);
    }
    if (message.slotId !== 0) {
      obj.slotId = Math.round(message.slotId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sinventoryItemReqInfo>, I>>(base?: I): sinventoryItemReqInfo {
    return sinventoryItemReqInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sinventoryItemReqInfo>, I>>(object: I): sinventoryItemReqInfo {
    const message = createBasesinventoryItemReqInfo();
    message.uniqueId = object.uniqueId ?? 0;
    message.inventoryId = object.inventoryId ?? 0;
    message.slotId = object.slotId ?? 0;
    return message;
  },
};

function createBasesc2sInventoryMoveReq(): sc2sInventoryMoveReq {
  return { srcInfo: undefined, dstInventoryId: 0, dstSlotId: 0 };
}

export const sc2sInventoryMoveReq = {
  encode(message: sc2sInventoryMoveReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcInfo !== undefined) {
      sinventoryItemReqInfo.encode(message.srcInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.dstInventoryId !== 0) {
      writer.uint32(16).uint32(message.dstInventoryId);
    }
    if (message.dstSlotId !== 0) {
      writer.uint32(24).uint32(message.dstSlotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sInventoryMoveReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sInventoryMoveReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.srcInfo = sinventoryItemReqInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.dstInventoryId = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.dstSlotId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sInventoryMoveReq {
    return {
      srcInfo: isSet(object.srcInfo) ? sinventoryItemReqInfo.fromJSON(object.srcInfo) : undefined,
      dstInventoryId: isSet(object.dstInventoryId) ? Number(object.dstInventoryId) : 0,
      dstSlotId: isSet(object.dstSlotId) ? Number(object.dstSlotId) : 0,
    };
  },

  toJSON(message: sc2sInventoryMoveReq): unknown {
    const obj: any = {};
    if (message.srcInfo !== undefined) {
      obj.srcInfo = sinventoryItemReqInfo.toJSON(message.srcInfo);
    }
    if (message.dstInventoryId !== 0) {
      obj.dstInventoryId = Math.round(message.dstInventoryId);
    }
    if (message.dstSlotId !== 0) {
      obj.dstSlotId = Math.round(message.dstSlotId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sInventoryMoveReq>, I>>(base?: I): sc2sInventoryMoveReq {
    return sc2sInventoryMoveReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sInventoryMoveReq>, I>>(object: I): sc2sInventoryMoveReq {
    const message = createBasesc2sInventoryMoveReq();
    message.srcInfo = (object.srcInfo !== undefined && object.srcInfo !== null)
      ? sinventoryItemReqInfo.fromPartial(object.srcInfo)
      : undefined;
    message.dstInventoryId = object.dstInventoryId ?? 0;
    message.dstSlotId = object.dstSlotId ?? 0;
    return message;
  },
};

function createBasess2cInventoryMoveRes(): ss2cInventoryMoveRes {
  return {};
}

export const ss2cInventoryMoveRes = {
  encode(_: ss2cInventoryMoveRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cInventoryMoveRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cInventoryMoveRes();
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

  fromJSON(_: any): ss2cInventoryMoveRes {
    return {};
  },

  toJSON(_: ss2cInventoryMoveRes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cInventoryMoveRes>, I>>(base?: I): ss2cInventoryMoveRes {
    return ss2cInventoryMoveRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cInventoryMoveRes>, I>>(_: I): ss2cInventoryMoveRes {
    const message = createBasess2cInventoryMoveRes();
    return message;
  },
};

function createBasesc2sInventoryMergeReq(): sc2sInventoryMergeReq {
  return { srcInfo: undefined, dstInfo: undefined };
}

export const sc2sInventoryMergeReq = {
  encode(message: sc2sInventoryMergeReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcInfo !== undefined) {
      sinventoryItemReqInfo.encode(message.srcInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.dstInfo !== undefined) {
      sinventoryItemReqInfo.encode(message.dstInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sInventoryMergeReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sInventoryMergeReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.srcInfo = sinventoryItemReqInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dstInfo = sinventoryItemReqInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sInventoryMergeReq {
    return {
      srcInfo: isSet(object.srcInfo) ? sinventoryItemReqInfo.fromJSON(object.srcInfo) : undefined,
      dstInfo: isSet(object.dstInfo) ? sinventoryItemReqInfo.fromJSON(object.dstInfo) : undefined,
    };
  },

  toJSON(message: sc2sInventoryMergeReq): unknown {
    const obj: any = {};
    if (message.srcInfo !== undefined) {
      obj.srcInfo = sinventoryItemReqInfo.toJSON(message.srcInfo);
    }
    if (message.dstInfo !== undefined) {
      obj.dstInfo = sinventoryItemReqInfo.toJSON(message.dstInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sInventoryMergeReq>, I>>(base?: I): sc2sInventoryMergeReq {
    return sc2sInventoryMergeReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sInventoryMergeReq>, I>>(object: I): sc2sInventoryMergeReq {
    const message = createBasesc2sInventoryMergeReq();
    message.srcInfo = (object.srcInfo !== undefined && object.srcInfo !== null)
      ? sinventoryItemReqInfo.fromPartial(object.srcInfo)
      : undefined;
    message.dstInfo = (object.dstInfo !== undefined && object.dstInfo !== null)
      ? sinventoryItemReqInfo.fromPartial(object.dstInfo)
      : undefined;
    return message;
  },
};

function createBasess2cInventoryMergeRes(): ss2cInventoryMergeRes {
  return {};
}

export const ss2cInventoryMergeRes = {
  encode(_: ss2cInventoryMergeRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cInventoryMergeRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cInventoryMergeRes();
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

  fromJSON(_: any): ss2cInventoryMergeRes {
    return {};
  },

  toJSON(_: ss2cInventoryMergeRes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cInventoryMergeRes>, I>>(base?: I): ss2cInventoryMergeRes {
    return ss2cInventoryMergeRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cInventoryMergeRes>, I>>(_: I): ss2cInventoryMergeRes {
    const message = createBasess2cInventoryMergeRes();
    return message;
  },
};

function createBaseinventorySwapDstInfo(): inventorySwapDstInfo {
  return { dstInfo: undefined, newSlotId: 0, newInventoryId: 0 };
}

export const inventorySwapDstInfo = {
  encode(message: inventorySwapDstInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dstInfo !== undefined) {
      sinventoryItemReqInfo.encode(message.dstInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.newSlotId !== 0) {
      writer.uint32(16).uint32(message.newSlotId);
    }
    if (message.newInventoryId !== 0) {
      writer.uint32(24).uint32(message.newInventoryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): inventorySwapDstInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseinventorySwapDstInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dstInfo = sinventoryItemReqInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.newSlotId = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.newInventoryId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): inventorySwapDstInfo {
    return {
      dstInfo: isSet(object.dstInfo) ? sinventoryItemReqInfo.fromJSON(object.dstInfo) : undefined,
      newSlotId: isSet(object.newSlotId) ? Number(object.newSlotId) : 0,
      newInventoryId: isSet(object.newInventoryId) ? Number(object.newInventoryId) : 0,
    };
  },

  toJSON(message: inventorySwapDstInfo): unknown {
    const obj: any = {};
    if (message.dstInfo !== undefined) {
      obj.dstInfo = sinventoryItemReqInfo.toJSON(message.dstInfo);
    }
    if (message.newSlotId !== 0) {
      obj.newSlotId = Math.round(message.newSlotId);
    }
    if (message.newInventoryId !== 0) {
      obj.newInventoryId = Math.round(message.newInventoryId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<inventorySwapDstInfo>, I>>(base?: I): inventorySwapDstInfo {
    return inventorySwapDstInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<inventorySwapDstInfo>, I>>(object: I): inventorySwapDstInfo {
    const message = createBaseinventorySwapDstInfo();
    message.dstInfo = (object.dstInfo !== undefined && object.dstInfo !== null)
      ? sinventoryItemReqInfo.fromPartial(object.dstInfo)
      : undefined;
    message.newSlotId = object.newSlotId ?? 0;
    message.newInventoryId = object.newInventoryId ?? 0;
    return message;
  },
};

function createBasesc2sInventorySwapReq(): sc2sInventorySwapReq {
  return { srcInfo: undefined, dstInfo: undefined, swapInfos: [] };
}

export const sc2sInventorySwapReq = {
  encode(message: sc2sInventorySwapReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcInfo !== undefined) {
      sinventoryItemReqInfo.encode(message.srcInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.dstInfo !== undefined) {
      sinventoryItemReqInfo.encode(message.dstInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.swapInfos) {
      inventorySwapDstInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sInventorySwapReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sInventorySwapReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.srcInfo = sinventoryItemReqInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dstInfo = sinventoryItemReqInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.swapInfos.push(inventorySwapDstInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sInventorySwapReq {
    return {
      srcInfo: isSet(object.srcInfo) ? sinventoryItemReqInfo.fromJSON(object.srcInfo) : undefined,
      dstInfo: isSet(object.dstInfo) ? sinventoryItemReqInfo.fromJSON(object.dstInfo) : undefined,
      swapInfos: Array.isArray(object?.swapInfos)
        ? object.swapInfos.map((e: any) => inventorySwapDstInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: sc2sInventorySwapReq): unknown {
    const obj: any = {};
    if (message.srcInfo !== undefined) {
      obj.srcInfo = sinventoryItemReqInfo.toJSON(message.srcInfo);
    }
    if (message.dstInfo !== undefined) {
      obj.dstInfo = sinventoryItemReqInfo.toJSON(message.dstInfo);
    }
    if (message.swapInfos?.length) {
      obj.swapInfos = message.swapInfos.map((e) => inventorySwapDstInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sInventorySwapReq>, I>>(base?: I): sc2sInventorySwapReq {
    return sc2sInventorySwapReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sInventorySwapReq>, I>>(object: I): sc2sInventorySwapReq {
    const message = createBasesc2sInventorySwapReq();
    message.srcInfo = (object.srcInfo !== undefined && object.srcInfo !== null)
      ? sinventoryItemReqInfo.fromPartial(object.srcInfo)
      : undefined;
    message.dstInfo = (object.dstInfo !== undefined && object.dstInfo !== null)
      ? sinventoryItemReqInfo.fromPartial(object.dstInfo)
      : undefined;
    message.swapInfos = object.swapInfos?.map((e) => inventorySwapDstInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cInventorySwapRes(): ss2cInventorySwapRes {
  return {};
}

export const ss2cInventorySwapRes = {
  encode(_: ss2cInventorySwapRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cInventorySwapRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cInventorySwapRes();
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

  fromJSON(_: any): ss2cInventorySwapRes {
    return {};
  },

  toJSON(_: ss2cInventorySwapRes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cInventorySwapRes>, I>>(base?: I): ss2cInventorySwapRes {
    return ss2cInventorySwapRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cInventorySwapRes>, I>>(_: I): ss2cInventorySwapRes {
    const message = createBasess2cInventorySwapRes();
    return message;
  },
};

function createBasesc2sInventorySplitMoveReq(): sc2sInventorySplitMoveReq {
  return { srcInfo: undefined, count: 0, dstInventoryId: 0, dstSlotId: 0 };
}

export const sc2sInventorySplitMoveReq = {
  encode(message: sc2sInventorySplitMoveReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcInfo !== undefined) {
      sinventoryItemReqInfo.encode(message.srcInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.dstInventoryId !== 0) {
      writer.uint32(24).uint32(message.dstInventoryId);
    }
    if (message.dstSlotId !== 0) {
      writer.uint32(32).uint32(message.dstSlotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sInventorySplitMoveReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sInventorySplitMoveReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.srcInfo = sinventoryItemReqInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.count = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.dstInventoryId = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.dstSlotId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sInventorySplitMoveReq {
    return {
      srcInfo: isSet(object.srcInfo) ? sinventoryItemReqInfo.fromJSON(object.srcInfo) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
      dstInventoryId: isSet(object.dstInventoryId) ? Number(object.dstInventoryId) : 0,
      dstSlotId: isSet(object.dstSlotId) ? Number(object.dstSlotId) : 0,
    };
  },

  toJSON(message: sc2sInventorySplitMoveReq): unknown {
    const obj: any = {};
    if (message.srcInfo !== undefined) {
      obj.srcInfo = sinventoryItemReqInfo.toJSON(message.srcInfo);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.dstInventoryId !== 0) {
      obj.dstInventoryId = Math.round(message.dstInventoryId);
    }
    if (message.dstSlotId !== 0) {
      obj.dstSlotId = Math.round(message.dstSlotId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sInventorySplitMoveReq>, I>>(base?: I): sc2sInventorySplitMoveReq {
    return sc2sInventorySplitMoveReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sInventorySplitMoveReq>, I>>(object: I): sc2sInventorySplitMoveReq {
    const message = createBasesc2sInventorySplitMoveReq();
    message.srcInfo = (object.srcInfo !== undefined && object.srcInfo !== null)
      ? sinventoryItemReqInfo.fromPartial(object.srcInfo)
      : undefined;
    message.count = object.count ?? 0;
    message.dstInventoryId = object.dstInventoryId ?? 0;
    message.dstSlotId = object.dstSlotId ?? 0;
    return message;
  },
};

function createBasess2cInventorySplitMoveRes(): ss2cInventorySplitMoveRes {
  return { newUniqueId: 0, newInventoryId: 0, newSlotId: 0 };
}

export const ss2cInventorySplitMoveRes = {
  encode(message: ss2cInventorySplitMoveRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newUniqueId !== 0) {
      writer.uint32(8).uint64(message.newUniqueId);
    }
    if (message.newInventoryId !== 0) {
      writer.uint32(16).uint32(message.newInventoryId);
    }
    if (message.newSlotId !== 0) {
      writer.uint32(24).uint32(message.newSlotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cInventorySplitMoveRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cInventorySplitMoveRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.newUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.newInventoryId = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.newSlotId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cInventorySplitMoveRes {
    return {
      newUniqueId: isSet(object.newUniqueId) ? Number(object.newUniqueId) : 0,
      newInventoryId: isSet(object.newInventoryId) ? Number(object.newInventoryId) : 0,
      newSlotId: isSet(object.newSlotId) ? Number(object.newSlotId) : 0,
    };
  },

  toJSON(message: ss2cInventorySplitMoveRes): unknown {
    const obj: any = {};
    if (message.newUniqueId !== 0) {
      obj.newUniqueId = Math.round(message.newUniqueId);
    }
    if (message.newInventoryId !== 0) {
      obj.newInventoryId = Math.round(message.newInventoryId);
    }
    if (message.newSlotId !== 0) {
      obj.newSlotId = Math.round(message.newSlotId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cInventorySplitMoveRes>, I>>(base?: I): ss2cInventorySplitMoveRes {
    return ss2cInventorySplitMoveRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cInventorySplitMoveRes>, I>>(object: I): ss2cInventorySplitMoveRes {
    const message = createBasess2cInventorySplitMoveRes();
    message.newUniqueId = object.newUniqueId ?? 0;
    message.newInventoryId = object.newInventoryId ?? 0;
    message.newSlotId = object.newSlotId ?? 0;
    return message;
  },
};

function createBasesc2sInventorySplitMergeReq(): sc2sInventorySplitMergeReq {
  return { srcInfo: undefined, dstInfo: undefined, count: 0 };
}

export const sc2sInventorySplitMergeReq = {
  encode(message: sc2sInventorySplitMergeReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcInfo !== undefined) {
      sinventoryItemReqInfo.encode(message.srcInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.dstInfo !== undefined) {
      sinventoryItemReqInfo.encode(message.dstInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(24).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sInventorySplitMergeReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sInventorySplitMergeReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.srcInfo = sinventoryItemReqInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dstInfo = sinventoryItemReqInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.count = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sInventorySplitMergeReq {
    return {
      srcInfo: isSet(object.srcInfo) ? sinventoryItemReqInfo.fromJSON(object.srcInfo) : undefined,
      dstInfo: isSet(object.dstInfo) ? sinventoryItemReqInfo.fromJSON(object.dstInfo) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: sc2sInventorySplitMergeReq): unknown {
    const obj: any = {};
    if (message.srcInfo !== undefined) {
      obj.srcInfo = sinventoryItemReqInfo.toJSON(message.srcInfo);
    }
    if (message.dstInfo !== undefined) {
      obj.dstInfo = sinventoryItemReqInfo.toJSON(message.dstInfo);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sInventorySplitMergeReq>, I>>(base?: I): sc2sInventorySplitMergeReq {
    return sc2sInventorySplitMergeReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sInventorySplitMergeReq>, I>>(object: I): sc2sInventorySplitMergeReq {
    const message = createBasesc2sInventorySplitMergeReq();
    message.srcInfo = (object.srcInfo !== undefined && object.srcInfo !== null)
      ? sinventoryItemReqInfo.fromPartial(object.srcInfo)
      : undefined;
    message.dstInfo = (object.dstInfo !== undefined && object.dstInfo !== null)
      ? sinventoryItemReqInfo.fromPartial(object.dstInfo)
      : undefined;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBasess2cInventorySplitMergeRes(): ss2cInventorySplitMergeRes {
  return {};
}

export const ss2cInventorySplitMergeRes = {
  encode(_: ss2cInventorySplitMergeRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cInventorySplitMergeRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cInventorySplitMergeRes();
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

  fromJSON(_: any): ss2cInventorySplitMergeRes {
    return {};
  },

  toJSON(_: ss2cInventorySplitMergeRes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cInventorySplitMergeRes>, I>>(base?: I): ss2cInventorySplitMergeRes {
    return ss2cInventorySplitMergeRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cInventorySplitMergeRes>, I>>(_: I): ss2cInventorySplitMergeRes {
    const message = createBasess2cInventorySplitMergeRes();
    return message;
  },
};

function createBasesc2sInventorySplitSwapReq(): sc2sInventorySplitSwapReq {
  return { srcInfo: undefined, dstInfo: undefined, count: 0, newSlotId: 0, newInventoryId: 0 };
}

export const sc2sInventorySplitSwapReq = {
  encode(message: sc2sInventorySplitSwapReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcInfo !== undefined) {
      sinventoryItemReqInfo.encode(message.srcInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.dstInfo !== undefined) {
      sinventoryItemReqInfo.encode(message.dstInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(24).uint32(message.count);
    }
    if (message.newSlotId !== 0) {
      writer.uint32(32).uint32(message.newSlotId);
    }
    if (message.newInventoryId !== 0) {
      writer.uint32(40).uint32(message.newInventoryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sInventorySplitSwapReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sInventorySplitSwapReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.srcInfo = sinventoryItemReqInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dstInfo = sinventoryItemReqInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.count = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.newSlotId = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.newInventoryId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sInventorySplitSwapReq {
    return {
      srcInfo: isSet(object.srcInfo) ? sinventoryItemReqInfo.fromJSON(object.srcInfo) : undefined,
      dstInfo: isSet(object.dstInfo) ? sinventoryItemReqInfo.fromJSON(object.dstInfo) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
      newSlotId: isSet(object.newSlotId) ? Number(object.newSlotId) : 0,
      newInventoryId: isSet(object.newInventoryId) ? Number(object.newInventoryId) : 0,
    };
  },

  toJSON(message: sc2sInventorySplitSwapReq): unknown {
    const obj: any = {};
    if (message.srcInfo !== undefined) {
      obj.srcInfo = sinventoryItemReqInfo.toJSON(message.srcInfo);
    }
    if (message.dstInfo !== undefined) {
      obj.dstInfo = sinventoryItemReqInfo.toJSON(message.dstInfo);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.newSlotId !== 0) {
      obj.newSlotId = Math.round(message.newSlotId);
    }
    if (message.newInventoryId !== 0) {
      obj.newInventoryId = Math.round(message.newInventoryId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sInventorySplitSwapReq>, I>>(base?: I): sc2sInventorySplitSwapReq {
    return sc2sInventorySplitSwapReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sInventorySplitSwapReq>, I>>(object: I): sc2sInventorySplitSwapReq {
    const message = createBasesc2sInventorySplitSwapReq();
    message.srcInfo = (object.srcInfo !== undefined && object.srcInfo !== null)
      ? sinventoryItemReqInfo.fromPartial(object.srcInfo)
      : undefined;
    message.dstInfo = (object.dstInfo !== undefined && object.dstInfo !== null)
      ? sinventoryItemReqInfo.fromPartial(object.dstInfo)
      : undefined;
    message.count = object.count ?? 0;
    message.newSlotId = object.newSlotId ?? 0;
    message.newInventoryId = object.newInventoryId ?? 0;
    return message;
  },
};

function createBasess2cInventorySplitSwapRes(): ss2cInventorySplitSwapRes {
  return { newUniqueId: 0, newInventoryId: 0, newSlotId: 0 };
}

export const ss2cInventorySplitSwapRes = {
  encode(message: ss2cInventorySplitSwapRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newUniqueId !== 0) {
      writer.uint32(8).uint64(message.newUniqueId);
    }
    if (message.newInventoryId !== 0) {
      writer.uint32(16).uint32(message.newInventoryId);
    }
    if (message.newSlotId !== 0) {
      writer.uint32(24).uint32(message.newSlotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cInventorySplitSwapRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cInventorySplitSwapRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.newUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.newInventoryId = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.newSlotId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cInventorySplitSwapRes {
    return {
      newUniqueId: isSet(object.newUniqueId) ? Number(object.newUniqueId) : 0,
      newInventoryId: isSet(object.newInventoryId) ? Number(object.newInventoryId) : 0,
      newSlotId: isSet(object.newSlotId) ? Number(object.newSlotId) : 0,
    };
  },

  toJSON(message: ss2cInventorySplitSwapRes): unknown {
    const obj: any = {};
    if (message.newUniqueId !== 0) {
      obj.newUniqueId = Math.round(message.newUniqueId);
    }
    if (message.newInventoryId !== 0) {
      obj.newInventoryId = Math.round(message.newInventoryId);
    }
    if (message.newSlotId !== 0) {
      obj.newSlotId = Math.round(message.newSlotId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cInventorySplitSwapRes>, I>>(base?: I): ss2cInventorySplitSwapRes {
    return ss2cInventorySplitSwapRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cInventorySplitSwapRes>, I>>(object: I): ss2cInventorySplitSwapRes {
    const message = createBasess2cInventorySplitSwapRes();
    message.newUniqueId = object.newUniqueId ?? 0;
    message.newInventoryId = object.newInventoryId ?? 0;
    message.newSlotId = object.newSlotId ?? 0;
    return message;
  },
};

function createBasesc2sInventoryTwoHandedWeaponSwapReq(): sc2sInventoryTwoHandedWeaponSwapReq {
  return { srcInfo: undefined, dstInfo: undefined, newSlotId: 0, newInventoryId: 0 };
}

export const sc2sInventoryTwoHandedWeaponSwapReq = {
  encode(message: sc2sInventoryTwoHandedWeaponSwapReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcInfo !== undefined) {
      sinventoryItemReqInfo.encode(message.srcInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.dstInfo !== undefined) {
      sinventoryItemReqInfo.encode(message.dstInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.newSlotId !== 0) {
      writer.uint32(24).uint32(message.newSlotId);
    }
    if (message.newInventoryId !== 0) {
      writer.uint32(32).uint32(message.newInventoryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sInventoryTwoHandedWeaponSwapReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sInventoryTwoHandedWeaponSwapReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.srcInfo = sinventoryItemReqInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dstInfo = sinventoryItemReqInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.newSlotId = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.newInventoryId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sInventoryTwoHandedWeaponSwapReq {
    return {
      srcInfo: isSet(object.srcInfo) ? sinventoryItemReqInfo.fromJSON(object.srcInfo) : undefined,
      dstInfo: isSet(object.dstInfo) ? sinventoryItemReqInfo.fromJSON(object.dstInfo) : undefined,
      newSlotId: isSet(object.newSlotId) ? Number(object.newSlotId) : 0,
      newInventoryId: isSet(object.newInventoryId) ? Number(object.newInventoryId) : 0,
    };
  },

  toJSON(message: sc2sInventoryTwoHandedWeaponSwapReq): unknown {
    const obj: any = {};
    if (message.srcInfo !== undefined) {
      obj.srcInfo = sinventoryItemReqInfo.toJSON(message.srcInfo);
    }
    if (message.dstInfo !== undefined) {
      obj.dstInfo = sinventoryItemReqInfo.toJSON(message.dstInfo);
    }
    if (message.newSlotId !== 0) {
      obj.newSlotId = Math.round(message.newSlotId);
    }
    if (message.newInventoryId !== 0) {
      obj.newInventoryId = Math.round(message.newInventoryId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sInventoryTwoHandedWeaponSwapReq>, I>>(
    base?: I,
  ): sc2sInventoryTwoHandedWeaponSwapReq {
    return sc2sInventoryTwoHandedWeaponSwapReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sInventoryTwoHandedWeaponSwapReq>, I>>(
    object: I,
  ): sc2sInventoryTwoHandedWeaponSwapReq {
    const message = createBasesc2sInventoryTwoHandedWeaponSwapReq();
    message.srcInfo = (object.srcInfo !== undefined && object.srcInfo !== null)
      ? sinventoryItemReqInfo.fromPartial(object.srcInfo)
      : undefined;
    message.dstInfo = (object.dstInfo !== undefined && object.dstInfo !== null)
      ? sinventoryItemReqInfo.fromPartial(object.dstInfo)
      : undefined;
    message.newSlotId = object.newSlotId ?? 0;
    message.newInventoryId = object.newInventoryId ?? 0;
    return message;
  },
};

function createBasess2cInventoryTwoHandedWeaponSwapRes(): ss2cInventoryTwoHandedWeaponSwapRes {
  return {};
}

export const ss2cInventoryTwoHandedWeaponSwapRes = {
  encode(_: ss2cInventoryTwoHandedWeaponSwapRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cInventoryTwoHandedWeaponSwapRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cInventoryTwoHandedWeaponSwapRes();
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

  fromJSON(_: any): ss2cInventoryTwoHandedWeaponSwapRes {
    return {};
  },

  toJSON(_: ss2cInventoryTwoHandedWeaponSwapRes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cInventoryTwoHandedWeaponSwapRes>, I>>(
    base?: I,
  ): ss2cInventoryTwoHandedWeaponSwapRes {
    return ss2cInventoryTwoHandedWeaponSwapRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cInventoryTwoHandedWeaponSwapRes>, I>>(
    _: I,
  ): ss2cInventoryTwoHandedWeaponSwapRes {
    const message = createBasess2cInventoryTwoHandedWeaponSwapRes();
    return message;
  },
};

function createBasesc2sInventorySingleUpdateReq(): sc2sInventorySingleUpdateReq {
  return { singleUpdateFlag: 0, oldItem: [], newItem: [] };
}

export const sc2sInventorySingleUpdateReq = {
  encode(message: sc2sInventorySingleUpdateReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.singleUpdateFlag !== 0) {
      writer.uint32(8).uint32(message.singleUpdateFlag);
    }
    for (const v of message.oldItem) {
      SItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.newItem) {
      SItem.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sInventorySingleUpdateReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sInventorySingleUpdateReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.singleUpdateFlag = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.oldItem.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.newItem.push(SItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sInventorySingleUpdateReq {
    return {
      singleUpdateFlag: isSet(object.singleUpdateFlag) ? Number(object.singleUpdateFlag) : 0,
      oldItem: Array.isArray(object?.oldItem) ? object.oldItem.map((e: any) => SItem.fromJSON(e)) : [],
      newItem: Array.isArray(object?.newItem) ? object.newItem.map((e: any) => SItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: sc2sInventorySingleUpdateReq): unknown {
    const obj: any = {};
    if (message.singleUpdateFlag !== 0) {
      obj.singleUpdateFlag = Math.round(message.singleUpdateFlag);
    }
    if (message.oldItem?.length) {
      obj.oldItem = message.oldItem.map((e) => SItem.toJSON(e));
    }
    if (message.newItem?.length) {
      obj.newItem = message.newItem.map((e) => SItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sInventorySingleUpdateReq>, I>>(base?: I): sc2sInventorySingleUpdateReq {
    return sc2sInventorySingleUpdateReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sInventorySingleUpdateReq>, I>>(object: I): sc2sInventorySingleUpdateReq {
    const message = createBasesc2sInventorySingleUpdateReq();
    message.singleUpdateFlag = object.singleUpdateFlag ?? 0;
    message.oldItem = object.oldItem?.map((e) => SItem.fromPartial(e)) || [];
    message.newItem = object.newItem?.map((e) => SItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cInventorySingleUpdateRes(): ss2cInventorySingleUpdateRes {
  return { result: 0, oldItem: [], newItem: [] };
}

export const ss2cInventorySingleUpdateRes = {
  encode(message: ss2cInventorySingleUpdateRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.oldItem) {
      SItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.newItem) {
      SItem.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cInventorySingleUpdateRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cInventorySingleUpdateRes();
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

          message.oldItem.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.newItem.push(SItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cInventorySingleUpdateRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      oldItem: Array.isArray(object?.oldItem) ? object.oldItem.map((e: any) => SItem.fromJSON(e)) : [],
      newItem: Array.isArray(object?.newItem) ? object.newItem.map((e: any) => SItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cInventorySingleUpdateRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.oldItem?.length) {
      obj.oldItem = message.oldItem.map((e) => SItem.toJSON(e));
    }
    if (message.newItem?.length) {
      obj.newItem = message.newItem.map((e) => SItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cInventorySingleUpdateRes>, I>>(base?: I): ss2cInventorySingleUpdateRes {
    return ss2cInventorySingleUpdateRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cInventorySingleUpdateRes>, I>>(object: I): ss2cInventorySingleUpdateRes {
    const message = createBasess2cInventorySingleUpdateRes();
    message.result = object.result ?? 0;
    message.oldItem = object.oldItem?.map((e) => SItem.fromPartial(e)) || [];
    message.newItem = object.newItem?.map((e) => SItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sStorageInfoReq(): sc2sStorageInfoReq {
  return { isRefresh: 0 };
}

export const sc2sStorageInfoReq = {
  encode(message: sc2sStorageInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isRefresh !== 0) {
      writer.uint32(8).uint32(message.isRefresh);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sStorageInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sStorageInfoReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isRefresh = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sStorageInfoReq {
    return { isRefresh: isSet(object.isRefresh) ? Number(object.isRefresh) : 0 };
  },

  toJSON(message: sc2sStorageInfoReq): unknown {
    const obj: any = {};
    if (message.isRefresh !== 0) {
      obj.isRefresh = Math.round(message.isRefresh);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sStorageInfoReq>, I>>(base?: I): sc2sStorageInfoReq {
    return sc2sStorageInfoReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sStorageInfoReq>, I>>(object: I): sc2sStorageInfoReq {
    const message = createBasesc2sStorageInfoReq();
    message.isRefresh = object.isRefresh ?? 0;
    return message;
  },
};

function createBasess2cStorageInfoRes(): ss2cStorageInfoRes {
  return { result: 0, storageItems: [] };
}

export const ss2cStorageInfoRes = {
  encode(message: ss2cStorageInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.storageItems) {
      SItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cStorageInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cStorageInfoRes();
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

          message.storageItems.push(SItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cStorageInfoRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      storageItems: Array.isArray(object?.storageItems) ? object.storageItems.map((e: any) => SItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cStorageInfoRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.storageItems?.length) {
      obj.storageItems = message.storageItems.map((e) => SItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cStorageInfoRes>, I>>(base?: I): ss2cStorageInfoRes {
    return ss2cStorageInfoRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cStorageInfoRes>, I>>(object: I): ss2cStorageInfoRes {
    const message = createBasess2cStorageInfoRes();
    message.result = object.result ?? 0;
    message.storageItems = object.storageItems?.map((e) => SItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sInventoryExpandStorageReq(): sc2sInventoryExpandStorageReq {
  return { buyInventoryId: 0 };
}

export const sc2sInventoryExpandStorageReq = {
  encode(message: sc2sInventoryExpandStorageReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buyInventoryId !== 0) {
      writer.uint32(8).int32(message.buyInventoryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sInventoryExpandStorageReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sInventoryExpandStorageReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.buyInventoryId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sInventoryExpandStorageReq {
    return { buyInventoryId: isSet(object.buyInventoryId) ? Number(object.buyInventoryId) : 0 };
  },

  toJSON(message: sc2sInventoryExpandStorageReq): unknown {
    const obj: any = {};
    if (message.buyInventoryId !== 0) {
      obj.buyInventoryId = Math.round(message.buyInventoryId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sInventoryExpandStorageReq>, I>>(base?: I): sc2sInventoryExpandStorageReq {
    return sc2sInventoryExpandStorageReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sInventoryExpandStorageReq>, I>>(
    object: I,
  ): sc2sInventoryExpandStorageReq {
    const message = createBasesc2sInventoryExpandStorageReq();
    message.buyInventoryId = object.buyInventoryId ?? 0;
    return message;
  },
};

function createBasess2cInventoryExpandStorageRes(): ss2cInventoryExpandStorageRes {
  return { result: 0 };
}

export const ss2cInventoryExpandStorageRes = {
  encode(message: ss2cInventoryExpandStorageRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cInventoryExpandStorageRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cInventoryExpandStorageRes();
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

  fromJSON(object: any): ss2cInventoryExpandStorageRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cInventoryExpandStorageRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cInventoryExpandStorageRes>, I>>(base?: I): ss2cInventoryExpandStorageRes {
    return ss2cInventoryExpandStorageRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cInventoryExpandStorageRes>, I>>(
    object: I,
  ): ss2cInventoryExpandStorageRes {
    const message = createBasess2cInventoryExpandStorageRes();
    message.result = object.result ?? 0;
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
