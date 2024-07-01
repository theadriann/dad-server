/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { saccountNickname } from "./_Character";
import { SItem } from "./_Item";

export const protobufPackage = "DC.Packet";

export enum marketplaceFilter {
  FILTER_NONE = 0,
  NAME = 1,
  RARITY = 2,
  SLOT = 3,
  TYPE = 4,
  STATIC_ATTRIBUTE = 5,
  RANDOM_ATTRIBUTE = 6,
  PRICE = 7,
  CLASS = 8,
  UNRECOGNIZED = -1,
}

export function marketplaceFilterFromJSON(object: any): marketplaceFilter {
  switch (object) {
    case 0:
    case "FILTER_NONE":
      return marketplaceFilter.FILTER_NONE;
    case 1:
    case "NAME":
      return marketplaceFilter.NAME;
    case 2:
    case "RARITY":
      return marketplaceFilter.RARITY;
    case 3:
    case "SLOT":
      return marketplaceFilter.SLOT;
    case 4:
    case "TYPE":
      return marketplaceFilter.TYPE;
    case 5:
    case "STATIC_ATTRIBUTE":
      return marketplaceFilter.STATIC_ATTRIBUTE;
    case 6:
    case "RANDOM_ATTRIBUTE":
      return marketplaceFilter.RANDOM_ATTRIBUTE;
    case 7:
    case "PRICE":
      return marketplaceFilter.PRICE;
    case 8:
    case "CLASS":
      return marketplaceFilter.CLASS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return marketplaceFilter.UNRECOGNIZED;
  }
}

export function marketplaceFilterToJSON(object: marketplaceFilter): string {
  switch (object) {
    case marketplaceFilter.FILTER_NONE:
      return "FILTER_NONE";
    case marketplaceFilter.NAME:
      return "NAME";
    case marketplaceFilter.RARITY:
      return "RARITY";
    case marketplaceFilter.SLOT:
      return "SLOT";
    case marketplaceFilter.TYPE:
      return "TYPE";
    case marketplaceFilter.STATIC_ATTRIBUTE:
      return "STATIC_ATTRIBUTE";
    case marketplaceFilter.RANDOM_ATTRIBUTE:
      return "RANDOM_ATTRIBUTE";
    case marketplaceFilter.PRICE:
      return "PRICE";
    case marketplaceFilter.CLASS:
      return "CLASS";
    case marketplaceFilter.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum marketplaceSort {
  MARKETPLACE_SORT_NONE = 0,
  ASCENDING = 1,
  DESCENDING = 2,
  UNRECOGNIZED = -1,
}

export function marketplaceSortFromJSON(object: any): marketplaceSort {
  switch (object) {
    case 0:
    case "MARKETPLACE_SORT_NONE":
      return marketplaceSort.MARKETPLACE_SORT_NONE;
    case 1:
    case "ASCENDING":
      return marketplaceSort.ASCENDING;
    case 2:
    case "DESCENDING":
      return marketplaceSort.DESCENDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return marketplaceSort.UNRECOGNIZED;
  }
}

export function marketplaceSortToJSON(object: marketplaceSort): string {
  switch (object) {
    case marketplaceSort.MARKETPLACE_SORT_NONE:
      return "MARKETPLACE_SORT_NONE";
    case marketplaceSort.ASCENDING:
      return "ASCENDING";
    case marketplaceSort.DESCENDING:
      return "DESCENDING";
    case marketplaceSort.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum marketplaceMyItemState {
  MY_ITEM_STATE_NONE = 0,
  LISTING = 1,
  LISTING_EXPIRED = 2,
  SOLD = 3,
  TRANSFER_EXPIRED = 4,
  UNRECOGNIZED = -1,
}

export function marketplaceMyItemStateFromJSON(object: any): marketplaceMyItemState {
  switch (object) {
    case 0:
    case "MY_ITEM_STATE_NONE":
      return marketplaceMyItemState.MY_ITEM_STATE_NONE;
    case 1:
    case "LISTING":
      return marketplaceMyItemState.LISTING;
    case 2:
    case "LISTING_EXPIRED":
      return marketplaceMyItemState.LISTING_EXPIRED;
    case 3:
    case "SOLD":
      return marketplaceMyItemState.SOLD;
    case 4:
    case "TRANSFER_EXPIRED":
      return marketplaceMyItemState.TRANSFER_EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return marketplaceMyItemState.UNRECOGNIZED;
  }
}

export function marketplaceMyItemStateToJSON(object: marketplaceMyItemState): string {
  switch (object) {
    case marketplaceMyItemState.MY_ITEM_STATE_NONE:
      return "MY_ITEM_STATE_NONE";
    case marketplaceMyItemState.LISTING:
      return "LISTING";
    case marketplaceMyItemState.LISTING_EXPIRED:
      return "LISTING_EXPIRED";
    case marketplaceMyItemState.SOLD:
      return "SOLD";
    case marketplaceMyItemState.TRANSFER_EXPIRED:
      return "TRANSFER_EXPIRED";
    case marketplaceMyItemState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface smarketplaceFilterInfo {
  filterType: number;
  filters: string[];
}

export interface sc2sMarketplaceItemListReq {
  filterInfos: smarketplaceFilterInfo[];
  sortType: number;
  sortMethod: number;
  currentPage: number;
}

export interface smarketplaceItemInfo {
  listingId: number;
  item: SItem | undefined;
  price: number;
  remainExpirationTime: number;
  nickname: saccountNickname | undefined;
}

export interface ss2cMarketplaceItemListRes {
  itemInfos: smarketplaceItemInfo[];
  currentPage: number;
  maxPage: number;
}

export interface sc2sMarketplaceMyItemListReq {
}

export interface smarketplacePriceInfo {
  itemId: string;
  price: number;
}

export interface smarketplaceMyItemInfo {
  itemInfo: smarketplaceItemInfo | undefined;
  remainExpirationTime: number;
  myItemState: number;
  priceInfos: smarketplacePriceInfo[];
}

export interface ss2cMarketplaceMyItemListRes {
  myItemInfos: smarketplaceMyItemInfo[];
}

export interface smarketplaceTradeItemInfo {
  itemUniqueId: number;
  itemCount: number;
  itemContentsCount: number;
  slotId: number;
}

export interface sc2sMarketplaceItemBuyReq {
  listingId: number;
  tradeInfos: smarketplaceTradeItemInfo[];
}

export interface ss2cMarketplaceItemBuyRes {
  result: number;
}

export interface smarketplaceRegisterInfo {
  uniqueId: number;
  itemCount: number;
  itemContentsCount: number;
}

export interface sc2sMarketplaceItemRegisterReq {
  registerInfo: smarketplaceRegisterInfo | undefined;
  priceInfos: smarketplacePriceInfo[];
}

export interface ss2cMarketplaceItemRegisterRes {
  result: number;
}

export interface sc2sMarketplaceItemCancelReq {
  listingId: number;
}

export interface ss2cMarketplaceItemCancelRes {
  result: number;
}

export interface smarketplaceTradeSlotInfo {
  inventoryId: number;
  slotId: number;
  itemId: string;
  itemUniqueId: number;
  itemCount: number;
  itemContentsCount: number;
}

export interface sc2sMarketplaceTransferItemsReq {
  listingId: number;
  slotInfos: smarketplaceTradeSlotInfo[];
}

export interface ss2cMarketplaceTransferItemsRes {
  result: number;
}

export interface ss2cMarketplaceItemHasSoldNot {
  isSold: number;
}

export interface sc2sMarketplaceEnterReq {
}

export interface ss2cMarketplaceEnterRes {
  result: number;
}

function createBasesmarketplaceFilterInfo(): smarketplaceFilterInfo {
  return { filterType: 0, filters: [] };
}

export const smarketplaceFilterInfo = {
  encode(message: smarketplaceFilterInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filterType !== 0) {
      writer.uint32(8).int32(message.filterType);
    }
    for (const v of message.filters) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smarketplaceFilterInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmarketplaceFilterInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.filterType = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.filters.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smarketplaceFilterInfo {
    return {
      filterType: isSet(object.filterType) ? Number(object.filterType) : 0,
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: smarketplaceFilterInfo): unknown {
    const obj: any = {};
    if (message.filterType !== 0) {
      obj.filterType = Math.round(message.filterType);
    }
    if (message.filters?.length) {
      obj.filters = message.filters;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smarketplaceFilterInfo>, I>>(base?: I): smarketplaceFilterInfo {
    return smarketplaceFilterInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smarketplaceFilterInfo>, I>>(object: I): smarketplaceFilterInfo {
    const message = createBasesmarketplaceFilterInfo();
    message.filterType = object.filterType ?? 0;
    message.filters = object.filters?.map((e) => e) || [];
    return message;
  },
};

function createBasesc2sMarketplaceItemListReq(): sc2sMarketplaceItemListReq {
  return { filterInfos: [], sortType: 0, sortMethod: 0, currentPage: 0 };
}

export const sc2sMarketplaceItemListReq = {
  encode(message: sc2sMarketplaceItemListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filterInfos) {
      smarketplaceFilterInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.sortType !== 0) {
      writer.uint32(24).int32(message.sortType);
    }
    if (message.sortMethod !== 0) {
      writer.uint32(16).int32(message.sortMethod);
    }
    if (message.currentPage !== 0) {
      writer.uint32(32).int32(message.currentPage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMarketplaceItemListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMarketplaceItemListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filterInfos.push(smarketplaceFilterInfo.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sortType = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sortMethod = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.currentPage = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMarketplaceItemListReq {
    return {
      filterInfos: Array.isArray(object?.filterInfos)
        ? object.filterInfos.map((e: any) => smarketplaceFilterInfo.fromJSON(e))
        : [],
      sortType: isSet(object.sortType) ? Number(object.sortType) : 0,
      sortMethod: isSet(object.sortMethod) ? Number(object.sortMethod) : 0,
      currentPage: isSet(object.currentPage) ? Number(object.currentPage) : 0,
    };
  },

  toJSON(message: sc2sMarketplaceItemListReq): unknown {
    const obj: any = {};
    if (message.filterInfos?.length) {
      obj.filterInfos = message.filterInfos.map((e) => smarketplaceFilterInfo.toJSON(e));
    }
    if (message.sortType !== 0) {
      obj.sortType = Math.round(message.sortType);
    }
    if (message.sortMethod !== 0) {
      obj.sortMethod = Math.round(message.sortMethod);
    }
    if (message.currentPage !== 0) {
      obj.currentPage = Math.round(message.currentPage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMarketplaceItemListReq>, I>>(base?: I): sc2sMarketplaceItemListReq {
    return sc2sMarketplaceItemListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMarketplaceItemListReq>, I>>(object: I): sc2sMarketplaceItemListReq {
    const message = createBasesc2sMarketplaceItemListReq();
    message.filterInfos = object.filterInfos?.map((e) => smarketplaceFilterInfo.fromPartial(e)) || [];
    message.sortType = object.sortType ?? 0;
    message.sortMethod = object.sortMethod ?? 0;
    message.currentPage = object.currentPage ?? 0;
    return message;
  },
};

function createBasesmarketplaceItemInfo(): smarketplaceItemInfo {
  return { listingId: 0, item: undefined, price: 0, remainExpirationTime: 0, nickname: undefined };
}

export const smarketplaceItemInfo = {
  encode(message: smarketplaceItemInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.listingId !== 0) {
      writer.uint32(8).int64(message.listingId);
    }
    if (message.item !== undefined) {
      SItem.encode(message.item, writer.uint32(18).fork()).ldelim();
    }
    if (message.price !== 0) {
      writer.uint32(24).int32(message.price);
    }
    if (message.remainExpirationTime !== 0) {
      writer.uint32(32).int64(message.remainExpirationTime);
    }
    if (message.nickname !== undefined) {
      saccountNickname.encode(message.nickname, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smarketplaceItemInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmarketplaceItemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.listingId = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.item = SItem.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.price = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.remainExpirationTime = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.nickname = saccountNickname.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smarketplaceItemInfo {
    return {
      listingId: isSet(object.listingId) ? Number(object.listingId) : 0,
      item: isSet(object.item) ? SItem.fromJSON(object.item) : undefined,
      price: isSet(object.price) ? Number(object.price) : 0,
      remainExpirationTime: isSet(object.remainExpirationTime) ? Number(object.remainExpirationTime) : 0,
      nickname: isSet(object.nickname) ? saccountNickname.fromJSON(object.nickname) : undefined,
    };
  },

  toJSON(message: smarketplaceItemInfo): unknown {
    const obj: any = {};
    if (message.listingId !== 0) {
      obj.listingId = Math.round(message.listingId);
    }
    if (message.item !== undefined) {
      obj.item = SItem.toJSON(message.item);
    }
    if (message.price !== 0) {
      obj.price = Math.round(message.price);
    }
    if (message.remainExpirationTime !== 0) {
      obj.remainExpirationTime = Math.round(message.remainExpirationTime);
    }
    if (message.nickname !== undefined) {
      obj.nickname = saccountNickname.toJSON(message.nickname);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smarketplaceItemInfo>, I>>(base?: I): smarketplaceItemInfo {
    return smarketplaceItemInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smarketplaceItemInfo>, I>>(object: I): smarketplaceItemInfo {
    const message = createBasesmarketplaceItemInfo();
    message.listingId = object.listingId ?? 0;
    message.item = (object.item !== undefined && object.item !== null) ? SItem.fromPartial(object.item) : undefined;
    message.price = object.price ?? 0;
    message.remainExpirationTime = object.remainExpirationTime ?? 0;
    message.nickname = (object.nickname !== undefined && object.nickname !== null)
      ? saccountNickname.fromPartial(object.nickname)
      : undefined;
    return message;
  },
};

function createBasess2cMarketplaceItemListRes(): ss2cMarketplaceItemListRes {
  return { itemInfos: [], currentPage: 0, maxPage: 0 };
}

export const ss2cMarketplaceItemListRes = {
  encode(message: ss2cMarketplaceItemListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.itemInfos) {
      smarketplaceItemInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentPage !== 0) {
      writer.uint32(16).int32(message.currentPage);
    }
    if (message.maxPage !== 0) {
      writer.uint32(24).int32(message.maxPage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMarketplaceItemListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMarketplaceItemListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.itemInfos.push(smarketplaceItemInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.currentPage = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxPage = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMarketplaceItemListRes {
    return {
      itemInfos: Array.isArray(object?.itemInfos)
        ? object.itemInfos.map((e: any) => smarketplaceItemInfo.fromJSON(e))
        : [],
      currentPage: isSet(object.currentPage) ? Number(object.currentPage) : 0,
      maxPage: isSet(object.maxPage) ? Number(object.maxPage) : 0,
    };
  },

  toJSON(message: ss2cMarketplaceItemListRes): unknown {
    const obj: any = {};
    if (message.itemInfos?.length) {
      obj.itemInfos = message.itemInfos.map((e) => smarketplaceItemInfo.toJSON(e));
    }
    if (message.currentPage !== 0) {
      obj.currentPage = Math.round(message.currentPage);
    }
    if (message.maxPage !== 0) {
      obj.maxPage = Math.round(message.maxPage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMarketplaceItemListRes>, I>>(base?: I): ss2cMarketplaceItemListRes {
    return ss2cMarketplaceItemListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMarketplaceItemListRes>, I>>(object: I): ss2cMarketplaceItemListRes {
    const message = createBasess2cMarketplaceItemListRes();
    message.itemInfos = object.itemInfos?.map((e) => smarketplaceItemInfo.fromPartial(e)) || [];
    message.currentPage = object.currentPage ?? 0;
    message.maxPage = object.maxPage ?? 0;
    return message;
  },
};

function createBasesc2sMarketplaceMyItemListReq(): sc2sMarketplaceMyItemListReq {
  return {};
}

export const sc2sMarketplaceMyItemListReq = {
  encode(_: sc2sMarketplaceMyItemListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMarketplaceMyItemListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMarketplaceMyItemListReq();
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

  fromJSON(_: any): sc2sMarketplaceMyItemListReq {
    return {};
  },

  toJSON(_: sc2sMarketplaceMyItemListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMarketplaceMyItemListReq>, I>>(base?: I): sc2sMarketplaceMyItemListReq {
    return sc2sMarketplaceMyItemListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMarketplaceMyItemListReq>, I>>(_: I): sc2sMarketplaceMyItemListReq {
    const message = createBasesc2sMarketplaceMyItemListReq();
    return message;
  },
};

function createBasesmarketplacePriceInfo(): smarketplacePriceInfo {
  return { itemId: "", price: 0 };
}

export const smarketplacePriceInfo = {
  encode(message: smarketplacePriceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "") {
      writer.uint32(10).string(message.itemId);
    }
    if (message.price !== 0) {
      writer.uint32(16).uint32(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smarketplacePriceInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmarketplacePriceInfo();
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

          message.price = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smarketplacePriceInfo {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
    };
  },

  toJSON(message: smarketplacePriceInfo): unknown {
    const obj: any = {};
    if (message.itemId !== "") {
      obj.itemId = message.itemId;
    }
    if (message.price !== 0) {
      obj.price = Math.round(message.price);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smarketplacePriceInfo>, I>>(base?: I): smarketplacePriceInfo {
    return smarketplacePriceInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smarketplacePriceInfo>, I>>(object: I): smarketplacePriceInfo {
    const message = createBasesmarketplacePriceInfo();
    message.itemId = object.itemId ?? "";
    message.price = object.price ?? 0;
    return message;
  },
};

function createBasesmarketplaceMyItemInfo(): smarketplaceMyItemInfo {
  return { itemInfo: undefined, remainExpirationTime: 0, myItemState: 0, priceInfos: [] };
}

export const smarketplaceMyItemInfo = {
  encode(message: smarketplaceMyItemInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemInfo !== undefined) {
      smarketplaceItemInfo.encode(message.itemInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.remainExpirationTime !== 0) {
      writer.uint32(16).int64(message.remainExpirationTime);
    }
    if (message.myItemState !== 0) {
      writer.uint32(24).int32(message.myItemState);
    }
    for (const v of message.priceInfos) {
      smarketplacePriceInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smarketplaceMyItemInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmarketplaceMyItemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.itemInfo = smarketplaceItemInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.remainExpirationTime = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.myItemState = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.priceInfos.push(smarketplacePriceInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): smarketplaceMyItemInfo {
    return {
      itemInfo: isSet(object.itemInfo) ? smarketplaceItemInfo.fromJSON(object.itemInfo) : undefined,
      remainExpirationTime: isSet(object.remainExpirationTime) ? Number(object.remainExpirationTime) : 0,
      myItemState: isSet(object.myItemState) ? Number(object.myItemState) : 0,
      priceInfos: Array.isArray(object?.priceInfos)
        ? object.priceInfos.map((e: any) => smarketplacePriceInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: smarketplaceMyItemInfo): unknown {
    const obj: any = {};
    if (message.itemInfo !== undefined) {
      obj.itemInfo = smarketplaceItemInfo.toJSON(message.itemInfo);
    }
    if (message.remainExpirationTime !== 0) {
      obj.remainExpirationTime = Math.round(message.remainExpirationTime);
    }
    if (message.myItemState !== 0) {
      obj.myItemState = Math.round(message.myItemState);
    }
    if (message.priceInfos?.length) {
      obj.priceInfos = message.priceInfos.map((e) => smarketplacePriceInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smarketplaceMyItemInfo>, I>>(base?: I): smarketplaceMyItemInfo {
    return smarketplaceMyItemInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smarketplaceMyItemInfo>, I>>(object: I): smarketplaceMyItemInfo {
    const message = createBasesmarketplaceMyItemInfo();
    message.itemInfo = (object.itemInfo !== undefined && object.itemInfo !== null)
      ? smarketplaceItemInfo.fromPartial(object.itemInfo)
      : undefined;
    message.remainExpirationTime = object.remainExpirationTime ?? 0;
    message.myItemState = object.myItemState ?? 0;
    message.priceInfos = object.priceInfos?.map((e) => smarketplacePriceInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cMarketplaceMyItemListRes(): ss2cMarketplaceMyItemListRes {
  return { myItemInfos: [] };
}

export const ss2cMarketplaceMyItemListRes = {
  encode(message: ss2cMarketplaceMyItemListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.myItemInfos) {
      smarketplaceMyItemInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMarketplaceMyItemListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMarketplaceMyItemListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.myItemInfos.push(smarketplaceMyItemInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMarketplaceMyItemListRes {
    return {
      myItemInfos: Array.isArray(object?.myItemInfos)
        ? object.myItemInfos.map((e: any) => smarketplaceMyItemInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cMarketplaceMyItemListRes): unknown {
    const obj: any = {};
    if (message.myItemInfos?.length) {
      obj.myItemInfos = message.myItemInfos.map((e) => smarketplaceMyItemInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMarketplaceMyItemListRes>, I>>(base?: I): ss2cMarketplaceMyItemListRes {
    return ss2cMarketplaceMyItemListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMarketplaceMyItemListRes>, I>>(object: I): ss2cMarketplaceMyItemListRes {
    const message = createBasess2cMarketplaceMyItemListRes();
    message.myItemInfos = object.myItemInfos?.map((e) => smarketplaceMyItemInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesmarketplaceTradeItemInfo(): smarketplaceTradeItemInfo {
  return { itemUniqueId: 0, itemCount: 0, itemContentsCount: 0, slotId: 0 };
}

export const smarketplaceTradeItemInfo = {
  encode(message: smarketplaceTradeItemInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemUniqueId !== 0) {
      writer.uint32(8).uint64(message.itemUniqueId);
    }
    if (message.itemCount !== 0) {
      writer.uint32(16).uint32(message.itemCount);
    }
    if (message.itemContentsCount !== 0) {
      writer.uint32(24).uint32(message.itemContentsCount);
    }
    if (message.slotId !== 0) {
      writer.uint32(32).int32(message.slotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smarketplaceTradeItemInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmarketplaceTradeItemInfo();
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
        case 4:
          if (tag !== 32) {
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

  fromJSON(object: any): smarketplaceTradeItemInfo {
    return {
      itemUniqueId: isSet(object.itemUniqueId) ? Number(object.itemUniqueId) : 0,
      itemCount: isSet(object.itemCount) ? Number(object.itemCount) : 0,
      itemContentsCount: isSet(object.itemContentsCount) ? Number(object.itemContentsCount) : 0,
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
    };
  },

  toJSON(message: smarketplaceTradeItemInfo): unknown {
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
    if (message.slotId !== 0) {
      obj.slotId = Math.round(message.slotId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smarketplaceTradeItemInfo>, I>>(base?: I): smarketplaceTradeItemInfo {
    return smarketplaceTradeItemInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smarketplaceTradeItemInfo>, I>>(object: I): smarketplaceTradeItemInfo {
    const message = createBasesmarketplaceTradeItemInfo();
    message.itemUniqueId = object.itemUniqueId ?? 0;
    message.itemCount = object.itemCount ?? 0;
    message.itemContentsCount = object.itemContentsCount ?? 0;
    message.slotId = object.slotId ?? 0;
    return message;
  },
};

function createBasesc2sMarketplaceItemBuyReq(): sc2sMarketplaceItemBuyReq {
  return { listingId: 0, tradeInfos: [] };
}

export const sc2sMarketplaceItemBuyReq = {
  encode(message: sc2sMarketplaceItemBuyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.listingId !== 0) {
      writer.uint32(8).int64(message.listingId);
    }
    for (const v of message.tradeInfos) {
      smarketplaceTradeItemInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMarketplaceItemBuyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMarketplaceItemBuyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.listingId = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tradeInfos.push(smarketplaceTradeItemInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMarketplaceItemBuyReq {
    return {
      listingId: isSet(object.listingId) ? Number(object.listingId) : 0,
      tradeInfos: Array.isArray(object?.tradeInfos)
        ? object.tradeInfos.map((e: any) => smarketplaceTradeItemInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: sc2sMarketplaceItemBuyReq): unknown {
    const obj: any = {};
    if (message.listingId !== 0) {
      obj.listingId = Math.round(message.listingId);
    }
    if (message.tradeInfos?.length) {
      obj.tradeInfos = message.tradeInfos.map((e) => smarketplaceTradeItemInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMarketplaceItemBuyReq>, I>>(base?: I): sc2sMarketplaceItemBuyReq {
    return sc2sMarketplaceItemBuyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMarketplaceItemBuyReq>, I>>(object: I): sc2sMarketplaceItemBuyReq {
    const message = createBasesc2sMarketplaceItemBuyReq();
    message.listingId = object.listingId ?? 0;
    message.tradeInfos = object.tradeInfos?.map((e) => smarketplaceTradeItemInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cMarketplaceItemBuyRes(): ss2cMarketplaceItemBuyRes {
  return { result: 0 };
}

export const ss2cMarketplaceItemBuyRes = {
  encode(message: ss2cMarketplaceItemBuyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMarketplaceItemBuyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMarketplaceItemBuyRes();
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

  fromJSON(object: any): ss2cMarketplaceItemBuyRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cMarketplaceItemBuyRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMarketplaceItemBuyRes>, I>>(base?: I): ss2cMarketplaceItemBuyRes {
    return ss2cMarketplaceItemBuyRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMarketplaceItemBuyRes>, I>>(object: I): ss2cMarketplaceItemBuyRes {
    const message = createBasess2cMarketplaceItemBuyRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesmarketplaceRegisterInfo(): smarketplaceRegisterInfo {
  return { uniqueId: 0, itemCount: 0, itemContentsCount: 0 };
}

export const smarketplaceRegisterInfo = {
  encode(message: smarketplaceRegisterInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uniqueId !== 0) {
      writer.uint32(8).int64(message.uniqueId);
    }
    if (message.itemCount !== 0) {
      writer.uint32(16).uint32(message.itemCount);
    }
    if (message.itemContentsCount !== 0) {
      writer.uint32(24).uint32(message.itemContentsCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): smarketplaceRegisterInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmarketplaceRegisterInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.uniqueId = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): smarketplaceRegisterInfo {
    return {
      uniqueId: isSet(object.uniqueId) ? Number(object.uniqueId) : 0,
      itemCount: isSet(object.itemCount) ? Number(object.itemCount) : 0,
      itemContentsCount: isSet(object.itemContentsCount) ? Number(object.itemContentsCount) : 0,
    };
  },

  toJSON(message: smarketplaceRegisterInfo): unknown {
    const obj: any = {};
    if (message.uniqueId !== 0) {
      obj.uniqueId = Math.round(message.uniqueId);
    }
    if (message.itemCount !== 0) {
      obj.itemCount = Math.round(message.itemCount);
    }
    if (message.itemContentsCount !== 0) {
      obj.itemContentsCount = Math.round(message.itemContentsCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<smarketplaceRegisterInfo>, I>>(base?: I): smarketplaceRegisterInfo {
    return smarketplaceRegisterInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smarketplaceRegisterInfo>, I>>(object: I): smarketplaceRegisterInfo {
    const message = createBasesmarketplaceRegisterInfo();
    message.uniqueId = object.uniqueId ?? 0;
    message.itemCount = object.itemCount ?? 0;
    message.itemContentsCount = object.itemContentsCount ?? 0;
    return message;
  },
};

function createBasesc2sMarketplaceItemRegisterReq(): sc2sMarketplaceItemRegisterReq {
  return { registerInfo: undefined, priceInfos: [] };
}

export const sc2sMarketplaceItemRegisterReq = {
  encode(message: sc2sMarketplaceItemRegisterReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registerInfo !== undefined) {
      smarketplaceRegisterInfo.encode(message.registerInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.priceInfos) {
      smarketplacePriceInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMarketplaceItemRegisterReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMarketplaceItemRegisterReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registerInfo = smarketplaceRegisterInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.priceInfos.push(smarketplacePriceInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMarketplaceItemRegisterReq {
    return {
      registerInfo: isSet(object.registerInfo) ? smarketplaceRegisterInfo.fromJSON(object.registerInfo) : undefined,
      priceInfos: Array.isArray(object?.priceInfos)
        ? object.priceInfos.map((e: any) => smarketplacePriceInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: sc2sMarketplaceItemRegisterReq): unknown {
    const obj: any = {};
    if (message.registerInfo !== undefined) {
      obj.registerInfo = smarketplaceRegisterInfo.toJSON(message.registerInfo);
    }
    if (message.priceInfos?.length) {
      obj.priceInfos = message.priceInfos.map((e) => smarketplacePriceInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMarketplaceItemRegisterReq>, I>>(base?: I): sc2sMarketplaceItemRegisterReq {
    return sc2sMarketplaceItemRegisterReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMarketplaceItemRegisterReq>, I>>(
    object: I,
  ): sc2sMarketplaceItemRegisterReq {
    const message = createBasesc2sMarketplaceItemRegisterReq();
    message.registerInfo = (object.registerInfo !== undefined && object.registerInfo !== null)
      ? smarketplaceRegisterInfo.fromPartial(object.registerInfo)
      : undefined;
    message.priceInfos = object.priceInfos?.map((e) => smarketplacePriceInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cMarketplaceItemRegisterRes(): ss2cMarketplaceItemRegisterRes {
  return { result: 0 };
}

export const ss2cMarketplaceItemRegisterRes = {
  encode(message: ss2cMarketplaceItemRegisterRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMarketplaceItemRegisterRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMarketplaceItemRegisterRes();
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

  fromJSON(object: any): ss2cMarketplaceItemRegisterRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cMarketplaceItemRegisterRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMarketplaceItemRegisterRes>, I>>(base?: I): ss2cMarketplaceItemRegisterRes {
    return ss2cMarketplaceItemRegisterRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMarketplaceItemRegisterRes>, I>>(
    object: I,
  ): ss2cMarketplaceItemRegisterRes {
    const message = createBasess2cMarketplaceItemRegisterRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sMarketplaceItemCancelReq(): sc2sMarketplaceItemCancelReq {
  return { listingId: 0 };
}

export const sc2sMarketplaceItemCancelReq = {
  encode(message: sc2sMarketplaceItemCancelReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.listingId !== 0) {
      writer.uint32(8).int64(message.listingId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMarketplaceItemCancelReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMarketplaceItemCancelReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.listingId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMarketplaceItemCancelReq {
    return { listingId: isSet(object.listingId) ? Number(object.listingId) : 0 };
  },

  toJSON(message: sc2sMarketplaceItemCancelReq): unknown {
    const obj: any = {};
    if (message.listingId !== 0) {
      obj.listingId = Math.round(message.listingId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMarketplaceItemCancelReq>, I>>(base?: I): sc2sMarketplaceItemCancelReq {
    return sc2sMarketplaceItemCancelReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMarketplaceItemCancelReq>, I>>(object: I): sc2sMarketplaceItemCancelReq {
    const message = createBasesc2sMarketplaceItemCancelReq();
    message.listingId = object.listingId ?? 0;
    return message;
  },
};

function createBasess2cMarketplaceItemCancelRes(): ss2cMarketplaceItemCancelRes {
  return { result: 0 };
}

export const ss2cMarketplaceItemCancelRes = {
  encode(message: ss2cMarketplaceItemCancelRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMarketplaceItemCancelRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMarketplaceItemCancelRes();
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

  fromJSON(object: any): ss2cMarketplaceItemCancelRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cMarketplaceItemCancelRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMarketplaceItemCancelRes>, I>>(base?: I): ss2cMarketplaceItemCancelRes {
    return ss2cMarketplaceItemCancelRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMarketplaceItemCancelRes>, I>>(object: I): ss2cMarketplaceItemCancelRes {
    const message = createBasess2cMarketplaceItemCancelRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesmarketplaceTradeSlotInfo(): smarketplaceTradeSlotInfo {
  return { inventoryId: 0, slotId: 0, itemId: "", itemUniqueId: 0, itemCount: 0, itemContentsCount: 0 };
}

export const smarketplaceTradeSlotInfo = {
  encode(message: smarketplaceTradeSlotInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): smarketplaceTradeSlotInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesmarketplaceTradeSlotInfo();
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

  fromJSON(object: any): smarketplaceTradeSlotInfo {
    return {
      inventoryId: isSet(object.inventoryId) ? Number(object.inventoryId) : 0,
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
      itemUniqueId: isSet(object.itemUniqueId) ? Number(object.itemUniqueId) : 0,
      itemCount: isSet(object.itemCount) ? Number(object.itemCount) : 0,
      itemContentsCount: isSet(object.itemContentsCount) ? Number(object.itemContentsCount) : 0,
    };
  },

  toJSON(message: smarketplaceTradeSlotInfo): unknown {
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

  create<I extends Exact<DeepPartial<smarketplaceTradeSlotInfo>, I>>(base?: I): smarketplaceTradeSlotInfo {
    return smarketplaceTradeSlotInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<smarketplaceTradeSlotInfo>, I>>(object: I): smarketplaceTradeSlotInfo {
    const message = createBasesmarketplaceTradeSlotInfo();
    message.inventoryId = object.inventoryId ?? 0;
    message.slotId = object.slotId ?? 0;
    message.itemId = object.itemId ?? "";
    message.itemUniqueId = object.itemUniqueId ?? 0;
    message.itemCount = object.itemCount ?? 0;
    message.itemContentsCount = object.itemContentsCount ?? 0;
    return message;
  },
};

function createBasesc2sMarketplaceTransferItemsReq(): sc2sMarketplaceTransferItemsReq {
  return { listingId: 0, slotInfos: [] };
}

export const sc2sMarketplaceTransferItemsReq = {
  encode(message: sc2sMarketplaceTransferItemsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.listingId !== 0) {
      writer.uint32(8).int64(message.listingId);
    }
    for (const v of message.slotInfos) {
      smarketplaceTradeSlotInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMarketplaceTransferItemsReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMarketplaceTransferItemsReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.listingId = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.slotInfos.push(smarketplaceTradeSlotInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sMarketplaceTransferItemsReq {
    return {
      listingId: isSet(object.listingId) ? Number(object.listingId) : 0,
      slotInfos: Array.isArray(object?.slotInfos)
        ? object.slotInfos.map((e: any) => smarketplaceTradeSlotInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: sc2sMarketplaceTransferItemsReq): unknown {
    const obj: any = {};
    if (message.listingId !== 0) {
      obj.listingId = Math.round(message.listingId);
    }
    if (message.slotInfos?.length) {
      obj.slotInfos = message.slotInfos.map((e) => smarketplaceTradeSlotInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMarketplaceTransferItemsReq>, I>>(base?: I): sc2sMarketplaceTransferItemsReq {
    return sc2sMarketplaceTransferItemsReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMarketplaceTransferItemsReq>, I>>(
    object: I,
  ): sc2sMarketplaceTransferItemsReq {
    const message = createBasesc2sMarketplaceTransferItemsReq();
    message.listingId = object.listingId ?? 0;
    message.slotInfos = object.slotInfos?.map((e) => smarketplaceTradeSlotInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cMarketplaceTransferItemsRes(): ss2cMarketplaceTransferItemsRes {
  return { result: 0 };
}

export const ss2cMarketplaceTransferItemsRes = {
  encode(message: ss2cMarketplaceTransferItemsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMarketplaceTransferItemsRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMarketplaceTransferItemsRes();
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

  fromJSON(object: any): ss2cMarketplaceTransferItemsRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cMarketplaceTransferItemsRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMarketplaceTransferItemsRes>, I>>(base?: I): ss2cMarketplaceTransferItemsRes {
    return ss2cMarketplaceTransferItemsRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMarketplaceTransferItemsRes>, I>>(
    object: I,
  ): ss2cMarketplaceTransferItemsRes {
    const message = createBasess2cMarketplaceTransferItemsRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasess2cMarketplaceItemHasSoldNot(): ss2cMarketplaceItemHasSoldNot {
  return { isSold: 0 };
}

export const ss2cMarketplaceItemHasSoldNot = {
  encode(message: ss2cMarketplaceItemHasSoldNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isSold !== 0) {
      writer.uint32(8).int32(message.isSold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMarketplaceItemHasSoldNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMarketplaceItemHasSoldNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isSold = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cMarketplaceItemHasSoldNot {
    return { isSold: isSet(object.isSold) ? Number(object.isSold) : 0 };
  },

  toJSON(message: ss2cMarketplaceItemHasSoldNot): unknown {
    const obj: any = {};
    if (message.isSold !== 0) {
      obj.isSold = Math.round(message.isSold);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMarketplaceItemHasSoldNot>, I>>(base?: I): ss2cMarketplaceItemHasSoldNot {
    return ss2cMarketplaceItemHasSoldNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMarketplaceItemHasSoldNot>, I>>(
    object: I,
  ): ss2cMarketplaceItemHasSoldNot {
    const message = createBasess2cMarketplaceItemHasSoldNot();
    message.isSold = object.isSold ?? 0;
    return message;
  },
};

function createBasesc2sMarketplaceEnterReq(): sc2sMarketplaceEnterReq {
  return {};
}

export const sc2sMarketplaceEnterReq = {
  encode(_: sc2sMarketplaceEnterReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sMarketplaceEnterReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sMarketplaceEnterReq();
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

  fromJSON(_: any): sc2sMarketplaceEnterReq {
    return {};
  },

  toJSON(_: sc2sMarketplaceEnterReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sMarketplaceEnterReq>, I>>(base?: I): sc2sMarketplaceEnterReq {
    return sc2sMarketplaceEnterReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sMarketplaceEnterReq>, I>>(_: I): sc2sMarketplaceEnterReq {
    const message = createBasesc2sMarketplaceEnterReq();
    return message;
  },
};

function createBasess2cMarketplaceEnterRes(): ss2cMarketplaceEnterRes {
  return { result: 0 };
}

export const ss2cMarketplaceEnterRes = {
  encode(message: ss2cMarketplaceEnterRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cMarketplaceEnterRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cMarketplaceEnterRes();
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

  fromJSON(object: any): ss2cMarketplaceEnterRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cMarketplaceEnterRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cMarketplaceEnterRes>, I>>(base?: I): ss2cMarketplaceEnterRes {
    return ss2cMarketplaceEnterRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cMarketplaceEnterRes>, I>>(object: I): ss2cMarketplaceEnterRes {
    const message = createBasess2cMarketplaceEnterRes();
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
