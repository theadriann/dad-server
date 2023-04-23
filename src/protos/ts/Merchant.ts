/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { SItem } from "./_Item";

export const protobufPackage = "DC.Packet";

export interface smerchantInfo {
  merchantId: string;
  faction: number;
  remainTime: number;
  isUnidentified: number;
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
  merchantSlotInfo: smerchantTradeSlotInfo | undefined;
}

export interface ss2cMerchantServiceCraftRes {
  result: number;
}

function createBasesmerchantInfo(): smerchantInfo {
  return { merchantId: "", faction: 0, remainTime: 0, isUnidentified: 0 };
}

export const smerchantInfo = {
  encode(message: smerchantInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merchantId !== "") {
      writer.uint32(10).string(message.merchantId);
    }
    if (message.faction !== 0) {
      writer.uint32(16).uint32(message.faction);
    }
    if (message.remainTime !== 0) {
      writer.uint32(24).uint64(message.remainTime);
    }
    if (message.isUnidentified !== 0) {
      writer.uint32(32).uint32(message.isUnidentified);
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
          if (tag != 10) {
            break;
          }

          message.merchantId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.faction = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.remainTime = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isUnidentified = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smerchantInfo {
    return {
      merchantId: isSet(object.merchantId) ? String(object.merchantId) : "",
      faction: isSet(object.faction) ? Number(object.faction) : 0,
      remainTime: isSet(object.remainTime) ? Number(object.remainTime) : 0,
      isUnidentified: isSet(object.isUnidentified) ? Number(object.isUnidentified) : 0,
    };
  },

  toJSON(message: smerchantInfo): unknown {
    const obj: any = {};
    message.merchantId !== undefined && (obj.merchantId = message.merchantId);
    message.faction !== undefined && (obj.faction = Math.round(message.faction));
    message.remainTime !== undefined && (obj.remainTime = Math.round(message.remainTime));
    message.isUnidentified !== undefined && (obj.isUnidentified = Math.round(message.isUnidentified));
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantInfo>, I>>(base?: I): smerchantInfo {
    return smerchantInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<smerchantInfo>, I>>(object: I): smerchantInfo {
    const message = createBasesmerchantInfo();
    message.merchantId = object.merchantId ?? "";
    message.faction = object.faction ?? 0;
    message.remainTime = object.remainTime ?? 0;
    message.isUnidentified = object.isUnidentified ?? 0;
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
      if ((tag & 7) == 4 || tag == 0) {
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
    return sc2sMerchantListReq.fromPartial(base ?? {});
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
          if (tag != 10) {
            break;
          }

          message.merchantList.push(smerchantInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    if (message.merchantList) {
      obj.merchantList = message.merchantList.map((e) => e ? smerchantInfo.toJSON(e) : undefined);
    } else {
      obj.merchantList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantListRes>, I>>(base?: I): ss2cMerchantListRes {
    return ss2cMerchantListRes.fromPartial(base ?? {});
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
          if (tag != 10) {
            break;
          }

          message.merchantId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.merchantId !== undefined && (obj.merchantId = message.merchantId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantStockBuyItemListReq>, I>>(base?: I): sc2sMerchantStockBuyItemListReq {
    return sc2sMerchantStockBuyItemListReq.fromPartial(base ?? {});
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
  return { stockBuyId: "", stockUniqueId: 0, itemInfo: undefined };
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
          if (tag != 10) {
            break;
          }

          message.stockBuyId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.stockUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.itemInfo = SItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    };
  },

  toJSON(message: smerchantStockBuyItemInfo): unknown {
    const obj: any = {};
    message.stockBuyId !== undefined && (obj.stockBuyId = message.stockBuyId);
    message.stockUniqueId !== undefined && (obj.stockUniqueId = Math.round(message.stockUniqueId));
    message.itemInfo !== undefined && (obj.itemInfo = message.itemInfo ? SItem.toJSON(message.itemInfo) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantStockBuyItemInfo>, I>>(base?: I): smerchantStockBuyItemInfo {
    return smerchantStockBuyItemInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<smerchantStockBuyItemInfo>, I>>(object: I): smerchantStockBuyItemInfo {
    const message = createBasesmerchantStockBuyItemInfo();
    message.stockBuyId = object.stockBuyId ?? "";
    message.stockUniqueId = object.stockUniqueId ?? 0;
    message.itemInfo = (object.itemInfo !== undefined && object.itemInfo !== null)
      ? SItem.fromPartial(object.itemInfo)
      : undefined;
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
          if (tag != 10) {
            break;
          }

          message.stockCraftId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.stockUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.itemInfo = SItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.stockCraftId !== undefined && (obj.stockCraftId = message.stockCraftId);
    message.stockUniqueId !== undefined && (obj.stockUniqueId = Math.round(message.stockUniqueId));
    message.itemInfo !== undefined && (obj.itemInfo = message.itemInfo ? SItem.toJSON(message.itemInfo) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantStockCraftItemInfo>, I>>(base?: I): smerchantStockCraftItemInfo {
    return smerchantStockCraftItemInfo.fromPartial(base ?? {});
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
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.loopMessageFlag = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.stockList.push(smerchantStockBuyItemInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.loopMessageFlag !== undefined && (obj.loopMessageFlag = Math.round(message.loopMessageFlag));
    if (message.stockList) {
      obj.stockList = message.stockList.map((e) => e ? smerchantStockBuyItemInfo.toJSON(e) : undefined);
    } else {
      obj.stockList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantStockBuyItemListRes>, I>>(base?: I): ss2cMerchantStockBuyItemListRes {
    return ss2cMerchantStockBuyItemListRes.fromPartial(base ?? {});
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
          if (tag != 10) {
            break;
          }

          message.merchantId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.merchantId !== undefined && (obj.merchantId = message.merchantId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantStockSellBackItemListReq>, I>>(
    base?: I,
  ): sc2sMerchantStockSellBackItemListReq {
    return sc2sMerchantStockSellBackItemListReq.fromPartial(base ?? {});
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
          if (tag != 10) {
            break;
          }

          message.stockSellBackId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.stockUniqueId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.stockSellBackId !== undefined && (obj.stockSellBackId = message.stockSellBackId);
    message.stockUniqueId !== undefined && (obj.stockUniqueId = Math.round(message.stockUniqueId));
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantStockSellBackItemInfo>, I>>(base?: I): smerchantStockSellBackItemInfo {
    return smerchantStockSellBackItemInfo.fromPartial(base ?? {});
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
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.loopMessageFlag = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.stockList.push(smerchantStockSellBackItemInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.loopMessageFlag !== undefined && (obj.loopMessageFlag = Math.round(message.loopMessageFlag));
    if (message.stockList) {
      obj.stockList = message.stockList.map((e) => e ? smerchantStockSellBackItemInfo.toJSON(e) : undefined);
    } else {
      obj.stockList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantStockSellBackItemListRes>, I>>(
    base?: I,
  ): ss2cMerchantStockSellBackItemListRes {
    return ss2cMerchantStockSellBackItemListRes.fromPartial(base ?? {});
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
          if (tag != 8) {
            break;
          }

          message.itemUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemCount = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemContentsCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.itemUniqueId !== undefined && (obj.itemUniqueId = Math.round(message.itemUniqueId));
    message.itemCount !== undefined && (obj.itemCount = Math.round(message.itemCount));
    message.itemContentsCount !== undefined && (obj.itemContentsCount = Math.round(message.itemContentsCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<merchantTradeItemInfo>, I>>(base?: I): merchantTradeItemInfo {
    return merchantTradeItemInfo.fromPartial(base ?? {});
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
          if (tag != 8) {
            break;
          }

          message.inventoryId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.slotId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.itemId = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.itemUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.itemCount = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.itemContentsCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.inventoryId !== undefined && (obj.inventoryId = Math.round(message.inventoryId));
    message.slotId !== undefined && (obj.slotId = Math.round(message.slotId));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.itemUniqueId !== undefined && (obj.itemUniqueId = Math.round(message.itemUniqueId));
    message.itemCount !== undefined && (obj.itemCount = Math.round(message.itemCount));
    message.itemContentsCount !== undefined && (obj.itemContentsCount = Math.round(message.itemContentsCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantTradeSlotInfo>, I>>(base?: I): smerchantTradeSlotInfo {
    return smerchantTradeSlotInfo.fromPartial(base ?? {});
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
          if (tag != 10) {
            break;
          }

          message.tradeId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.stockUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.dealItemList.push(merchantTradeItemInfo.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.merchantSlotInfo.push(smerchantTradeSlotInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.tradeId !== undefined && (obj.tradeId = message.tradeId);
    message.stockUniqueId !== undefined && (obj.stockUniqueId = Math.round(message.stockUniqueId));
    if (message.dealItemList) {
      obj.dealItemList = message.dealItemList.map((e) => e ? merchantTradeItemInfo.toJSON(e) : undefined);
    } else {
      obj.dealItemList = [];
    }
    if (message.merchantSlotInfo) {
      obj.merchantSlotInfo = message.merchantSlotInfo.map((e) => e ? smerchantTradeSlotInfo.toJSON(e) : undefined);
    } else {
      obj.merchantSlotInfo = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantStockBuyReq>, I>>(base?: I): sc2sMerchantStockBuyReq {
    return sc2sMerchantStockBuyReq.fromPartial(base ?? {});
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
  return { result: 0 };
}

export const ss2cMerchantStockBuyRes = {
  encode(message: ss2cMerchantStockBuyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
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

  fromJSON(object: any): ss2cMerchantStockBuyRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cMerchantStockBuyRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantStockBuyRes>, I>>(base?: I): ss2cMerchantStockBuyRes {
    return ss2cMerchantStockBuyRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cMerchantStockBuyRes>, I>>(object: I): ss2cMerchantStockBuyRes {
    const message = createBasess2cMerchantStockBuyRes();
    message.result = object.result ?? 0;
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
          if (tag != 10) {
            break;
          }

          message.tradeId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.stockUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemUniqueId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.tradeId !== undefined && (obj.tradeId = message.tradeId);
    message.stockUniqueId !== undefined && (obj.stockUniqueId = Math.round(message.stockUniqueId));
    message.itemUniqueId !== undefined && (obj.itemUniqueId = Math.round(message.itemUniqueId));
    return obj;
  },

  create<I extends Exact<DeepPartial<smerchantStockSellBackInfo>, I>>(base?: I): smerchantStockSellBackInfo {
    return smerchantStockSellBackInfo.fromPartial(base ?? {});
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
          if (tag != 10) {
            break;
          }

          message.sellBackInfos.push(smerchantStockSellBackInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.receivedInfos.push(smerchantTradeSlotInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    if (message.sellBackInfos) {
      obj.sellBackInfos = message.sellBackInfos.map((e) => e ? smerchantStockSellBackInfo.toJSON(e) : undefined);
    } else {
      obj.sellBackInfos = [];
    }
    if (message.receivedInfos) {
      obj.receivedInfos = message.receivedInfos.map((e) => e ? smerchantTradeSlotInfo.toJSON(e) : undefined);
    } else {
      obj.receivedInfos = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantStockSellBackReq>, I>>(base?: I): sc2sMerchantStockSellBackReq {
    return sc2sMerchantStockSellBackReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sMerchantStockSellBackReq>, I>>(object: I): sc2sMerchantStockSellBackReq {
    const message = createBasesc2sMerchantStockSellBackReq();
    message.sellBackInfos = object.sellBackInfos?.map((e) => smerchantStockSellBackInfo.fromPartial(e)) || [];
    message.receivedInfos = object.receivedInfos?.map((e) => smerchantTradeSlotInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cMerchantStockSellBackRes(): ss2cMerchantStockSellBackRes {
  return { result: 0 };
}

export const ss2cMerchantStockSellBackRes = {
  encode(message: ss2cMerchantStockSellBackRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
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

  fromJSON(object: any): ss2cMerchantStockSellBackRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cMerchantStockSellBackRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantStockSellBackRes>, I>>(base?: I): ss2cMerchantStockSellBackRes {
    return ss2cMerchantStockSellBackRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cMerchantStockSellBackRes>, I>>(object: I): ss2cMerchantStockSellBackRes {
    const message = createBasess2cMerchantStockSellBackRes();
    message.result = object.result ?? 0;
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
          if (tag != 10) {
            break;
          }

          message.merchantId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.merchantId !== undefined && (obj.merchantId = message.merchantId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantServiceCraftListReq>, I>>(base?: I): sc2sMerchantServiceCraftListReq {
    return sc2sMerchantServiceCraftListReq.fromPartial(base ?? {});
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
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.loopMessageFlag = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.stockCraftList.push(smerchantStockCraftItemInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.loopMessageFlag !== undefined && (obj.loopMessageFlag = Math.round(message.loopMessageFlag));
    if (message.stockCraftList) {
      obj.stockCraftList = message.stockCraftList.map((e) => e ? smerchantStockCraftItemInfo.toJSON(e) : undefined);
    } else {
      obj.stockCraftList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantServiceCraftListRes>, I>>(base?: I): ss2cMerchantServiceCraftListRes {
    return ss2cMerchantServiceCraftListRes.fromPartial(base ?? {});
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
  return { tradeId: "", stockUniqueId: 0, stockCraftList: [], merchantSlotInfo: undefined };
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
    if (message.merchantSlotInfo !== undefined) {
      smerchantTradeSlotInfo.encode(message.merchantSlotInfo, writer.uint32(34).fork()).ldelim();
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
          if (tag != 10) {
            break;
          }

          message.tradeId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.stockUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.stockCraftList.push(merchantTradeItemInfo.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.merchantSlotInfo = smerchantTradeSlotInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
      merchantSlotInfo: isSet(object.merchantSlotInfo)
        ? smerchantTradeSlotInfo.fromJSON(object.merchantSlotInfo)
        : undefined,
    };
  },

  toJSON(message: sc2sMerchantServiceCraftReq): unknown {
    const obj: any = {};
    message.tradeId !== undefined && (obj.tradeId = message.tradeId);
    message.stockUniqueId !== undefined && (obj.stockUniqueId = Math.round(message.stockUniqueId));
    if (message.stockCraftList) {
      obj.stockCraftList = message.stockCraftList.map((e) => e ? merchantTradeItemInfo.toJSON(e) : undefined);
    } else {
      obj.stockCraftList = [];
    }
    message.merchantSlotInfo !== undefined && (obj.merchantSlotInfo = message.merchantSlotInfo
      ? smerchantTradeSlotInfo.toJSON(message.merchantSlotInfo)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMerchantServiceCraftReq>, I>>(base?: I): sc2sMerchantServiceCraftReq {
    return sc2sMerchantServiceCraftReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sMerchantServiceCraftReq>, I>>(object: I): sc2sMerchantServiceCraftReq {
    const message = createBasesc2sMerchantServiceCraftReq();
    message.tradeId = object.tradeId ?? "";
    message.stockUniqueId = object.stockUniqueId ?? 0;
    message.stockCraftList = object.stockCraftList?.map((e) => merchantTradeItemInfo.fromPartial(e)) || [];
    message.merchantSlotInfo = (object.merchantSlotInfo !== undefined && object.merchantSlotInfo !== null)
      ? smerchantTradeSlotInfo.fromPartial(object.merchantSlotInfo)
      : undefined;
    return message;
  },
};

function createBasess2cMerchantServiceCraftRes(): ss2cMerchantServiceCraftRes {
  return { result: 0 };
}

export const ss2cMerchantServiceCraftRes = {
  encode(message: ss2cMerchantServiceCraftRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
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

  fromJSON(object: any): ss2cMerchantServiceCraftRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cMerchantServiceCraftRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMerchantServiceCraftRes>, I>>(base?: I): ss2cMerchantServiceCraftRes {
    return ss2cMerchantServiceCraftRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cMerchantServiceCraftRes>, I>>(object: I): ss2cMerchantServiceCraftRes {
    const message = createBasess2cMerchantServiceCraftRes();
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
