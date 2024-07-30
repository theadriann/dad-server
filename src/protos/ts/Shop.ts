/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DC.Packet";

export interface sshopItemBaseInfo {
  shopType: number;
  shopItemId: string;
  isHave: number;
}

export interface sc2sShopItemListReq {
}

export interface ss2cShopItemListRes {
  loopFlag: number;
  infos: sshopItemBaseInfo[];
  currentTriumphLevel: number;
  nextTriumphExp: number;
  currentTriumphExp: number;
}

export interface sc2sShopItemBuyReq {
  shopType: number;
  buyShopItemId: string;
  paymentMethod: number;
}

export interface ss2cShopItemBuyRes {
  result: number;
  shopType: number;
  buyShopItemId: string;
  paymentMethod: number;
}

export interface srewardInfo {
  rewardType: string;
  stockId: string;
}

export interface sc2sShopEnterGiftCodeReq {
  giftCode: string;
}

export interface ss2cShopEnterGiftCodeRes {
  result: number;
  rewards: srewardInfo[];
}

export interface sc2sShopRedStoneShardInfoReq {
}

export interface sshopRedStoneShardInfo {
  productIndex: number;
  productPrice: number;
  productCount: number;
  designDataId: string;
  redirectionUrl: string;
  customData: string;
  productName: string;
}

export interface ss2cShopRedStoneShardInfoRes {
  infos: sshopRedStoneShardInfo[];
  loginType: number;
}

export interface sc2sShopRedStoneShardBuyReq {
  productIndex: number;
  localPort: number;
}

export interface ss2cShopRedStoneShardBuyRes {
  result: number;
  trxId: number;
  trxIdStr: string;
  platformId: string;
  offerItemId: string;
  sandboxId: string;
}

export interface sc2sShopRedStoneShardBuyCheckReq {
  appId: number;
  orderId: number;
  authorized: number;
  transactionId: string;
}

export interface ss2cShopRedStoneShardBuyCheckRes {
  result: number;
}

export interface sc2sShopLegendUpgradeReq {
}

export interface ss2cShopLegendUpgradeRes {
  result: number;
  upgradeDate: string;
  upgradeTime: string;
}

export interface sc2sRefreshRedStoneShardReq {
  accessId: string;
}

export interface ss2cRefreshRedStoneShardRes {
}

export interface sc2sShopChangeAccountNameReq {
  changeAccountName: string;
}

export interface ss2cShopChangeAccountNameRes {
  result: number;
  changeAccountName: string;
}

function createBasesshopItemBaseInfo(): sshopItemBaseInfo {
  return { shopType: 0, shopItemId: "", isHave: 0 };
}

export const sshopItemBaseInfo = {
  encode(message: sshopItemBaseInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shopType !== 0) {
      writer.uint32(8).uint32(message.shopType);
    }
    if (message.shopItemId !== "") {
      writer.uint32(18).string(message.shopItemId);
    }
    if (message.isHave !== 0) {
      writer.uint32(24).uint32(message.isHave);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sshopItemBaseInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesshopItemBaseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.shopType = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.shopItemId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isHave = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sshopItemBaseInfo {
    return {
      shopType: isSet(object.shopType) ? Number(object.shopType) : 0,
      shopItemId: isSet(object.shopItemId) ? String(object.shopItemId) : "",
      isHave: isSet(object.isHave) ? Number(object.isHave) : 0,
    };
  },

  toJSON(message: sshopItemBaseInfo): unknown {
    const obj: any = {};
    if (message.shopType !== 0) {
      obj.shopType = Math.round(message.shopType);
    }
    if (message.shopItemId !== "") {
      obj.shopItemId = message.shopItemId;
    }
    if (message.isHave !== 0) {
      obj.isHave = Math.round(message.isHave);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sshopItemBaseInfo>, I>>(base?: I): sshopItemBaseInfo {
    return sshopItemBaseInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sshopItemBaseInfo>, I>>(object: I): sshopItemBaseInfo {
    const message = createBasesshopItemBaseInfo();
    message.shopType = object.shopType ?? 0;
    message.shopItemId = object.shopItemId ?? "";
    message.isHave = object.isHave ?? 0;
    return message;
  },
};

function createBasesc2sShopItemListReq(): sc2sShopItemListReq {
  return {};
}

export const sc2sShopItemListReq = {
  encode(_: sc2sShopItemListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopItemListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopItemListReq();
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

  fromJSON(_: any): sc2sShopItemListReq {
    return {};
  },

  toJSON(_: sc2sShopItemListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopItemListReq>, I>>(base?: I): sc2sShopItemListReq {
    return sc2sShopItemListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sShopItemListReq>, I>>(_: I): sc2sShopItemListReq {
    const message = createBasesc2sShopItemListReq();
    return message;
  },
};

function createBasess2cShopItemListRes(): ss2cShopItemListRes {
  return { loopFlag: 0, infos: [], currentTriumphLevel: 0, nextTriumphExp: 0, currentTriumphExp: 0 };
}

export const ss2cShopItemListRes = {
  encode(message: ss2cShopItemListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loopFlag !== 0) {
      writer.uint32(8).int32(message.loopFlag);
    }
    for (const v of message.infos) {
      sshopItemBaseInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentTriumphLevel !== 0) {
      writer.uint32(24).int32(message.currentTriumphLevel);
    }
    if (message.nextTriumphExp !== 0) {
      writer.uint32(32).int32(message.nextTriumphExp);
    }
    if (message.currentTriumphExp !== 0) {
      writer.uint32(40).int32(message.currentTriumphExp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopItemListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopItemListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.loopFlag = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.infos.push(sshopItemBaseInfo.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.currentTriumphLevel = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nextTriumphExp = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.currentTriumphExp = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopItemListRes {
    return {
      loopFlag: isSet(object.loopFlag) ? Number(object.loopFlag) : 0,
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => sshopItemBaseInfo.fromJSON(e)) : [],
      currentTriumphLevel: isSet(object.currentTriumphLevel) ? Number(object.currentTriumphLevel) : 0,
      nextTriumphExp: isSet(object.nextTriumphExp) ? Number(object.nextTriumphExp) : 0,
      currentTriumphExp: isSet(object.currentTriumphExp) ? Number(object.currentTriumphExp) : 0,
    };
  },

  toJSON(message: ss2cShopItemListRes): unknown {
    const obj: any = {};
    if (message.loopFlag !== 0) {
      obj.loopFlag = Math.round(message.loopFlag);
    }
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => sshopItemBaseInfo.toJSON(e));
    }
    if (message.currentTriumphLevel !== 0) {
      obj.currentTriumphLevel = Math.round(message.currentTriumphLevel);
    }
    if (message.nextTriumphExp !== 0) {
      obj.nextTriumphExp = Math.round(message.nextTriumphExp);
    }
    if (message.currentTriumphExp !== 0) {
      obj.currentTriumphExp = Math.round(message.currentTriumphExp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopItemListRes>, I>>(base?: I): ss2cShopItemListRes {
    return ss2cShopItemListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cShopItemListRes>, I>>(object: I): ss2cShopItemListRes {
    const message = createBasess2cShopItemListRes();
    message.loopFlag = object.loopFlag ?? 0;
    message.infos = object.infos?.map((e) => sshopItemBaseInfo.fromPartial(e)) || [];
    message.currentTriumphLevel = object.currentTriumphLevel ?? 0;
    message.nextTriumphExp = object.nextTriumphExp ?? 0;
    message.currentTriumphExp = object.currentTriumphExp ?? 0;
    return message;
  },
};

function createBasesc2sShopItemBuyReq(): sc2sShopItemBuyReq {
  return { shopType: 0, buyShopItemId: "", paymentMethod: 0 };
}

export const sc2sShopItemBuyReq = {
  encode(message: sc2sShopItemBuyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shopType !== 0) {
      writer.uint32(8).uint32(message.shopType);
    }
    if (message.buyShopItemId !== "") {
      writer.uint32(18).string(message.buyShopItemId);
    }
    if (message.paymentMethod !== 0) {
      writer.uint32(24).uint32(message.paymentMethod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopItemBuyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopItemBuyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.shopType = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.buyShopItemId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.paymentMethod = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sShopItemBuyReq {
    return {
      shopType: isSet(object.shopType) ? Number(object.shopType) : 0,
      buyShopItemId: isSet(object.buyShopItemId) ? String(object.buyShopItemId) : "",
      paymentMethod: isSet(object.paymentMethod) ? Number(object.paymentMethod) : 0,
    };
  },

  toJSON(message: sc2sShopItemBuyReq): unknown {
    const obj: any = {};
    if (message.shopType !== 0) {
      obj.shopType = Math.round(message.shopType);
    }
    if (message.buyShopItemId !== "") {
      obj.buyShopItemId = message.buyShopItemId;
    }
    if (message.paymentMethod !== 0) {
      obj.paymentMethod = Math.round(message.paymentMethod);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopItemBuyReq>, I>>(base?: I): sc2sShopItemBuyReq {
    return sc2sShopItemBuyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sShopItemBuyReq>, I>>(object: I): sc2sShopItemBuyReq {
    const message = createBasesc2sShopItemBuyReq();
    message.shopType = object.shopType ?? 0;
    message.buyShopItemId = object.buyShopItemId ?? "";
    message.paymentMethod = object.paymentMethod ?? 0;
    return message;
  },
};

function createBasess2cShopItemBuyRes(): ss2cShopItemBuyRes {
  return { result: 0, shopType: 0, buyShopItemId: "", paymentMethod: 0 };
}

export const ss2cShopItemBuyRes = {
  encode(message: ss2cShopItemBuyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.shopType !== 0) {
      writer.uint32(16).uint32(message.shopType);
    }
    if (message.buyShopItemId !== "") {
      writer.uint32(26).string(message.buyShopItemId);
    }
    if (message.paymentMethod !== 0) {
      writer.uint32(32).uint32(message.paymentMethod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopItemBuyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopItemBuyRes();
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

          message.shopType = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.buyShopItemId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.paymentMethod = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopItemBuyRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      shopType: isSet(object.shopType) ? Number(object.shopType) : 0,
      buyShopItemId: isSet(object.buyShopItemId) ? String(object.buyShopItemId) : "",
      paymentMethod: isSet(object.paymentMethod) ? Number(object.paymentMethod) : 0,
    };
  },

  toJSON(message: ss2cShopItemBuyRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.shopType !== 0) {
      obj.shopType = Math.round(message.shopType);
    }
    if (message.buyShopItemId !== "") {
      obj.buyShopItemId = message.buyShopItemId;
    }
    if (message.paymentMethod !== 0) {
      obj.paymentMethod = Math.round(message.paymentMethod);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopItemBuyRes>, I>>(base?: I): ss2cShopItemBuyRes {
    return ss2cShopItemBuyRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cShopItemBuyRes>, I>>(object: I): ss2cShopItemBuyRes {
    const message = createBasess2cShopItemBuyRes();
    message.result = object.result ?? 0;
    message.shopType = object.shopType ?? 0;
    message.buyShopItemId = object.buyShopItemId ?? "";
    message.paymentMethod = object.paymentMethod ?? 0;
    return message;
  },
};

function createBasesrewardInfo(): srewardInfo {
  return { rewardType: "", stockId: "" };
}

export const srewardInfo = {
  encode(message: srewardInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardType !== "") {
      writer.uint32(10).string(message.rewardType);
    }
    if (message.stockId !== "") {
      writer.uint32(18).string(message.stockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): srewardInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesrewardInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewardType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stockId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): srewardInfo {
    return {
      rewardType: isSet(object.rewardType) ? String(object.rewardType) : "",
      stockId: isSet(object.stockId) ? String(object.stockId) : "",
    };
  },

  toJSON(message: srewardInfo): unknown {
    const obj: any = {};
    if (message.rewardType !== "") {
      obj.rewardType = message.rewardType;
    }
    if (message.stockId !== "") {
      obj.stockId = message.stockId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<srewardInfo>, I>>(base?: I): srewardInfo {
    return srewardInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<srewardInfo>, I>>(object: I): srewardInfo {
    const message = createBasesrewardInfo();
    message.rewardType = object.rewardType ?? "";
    message.stockId = object.stockId ?? "";
    return message;
  },
};

function createBasesc2sShopEnterGiftCodeReq(): sc2sShopEnterGiftCodeReq {
  return { giftCode: "" };
}

export const sc2sShopEnterGiftCodeReq = {
  encode(message: sc2sShopEnterGiftCodeReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.giftCode !== "") {
      writer.uint32(10).string(message.giftCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopEnterGiftCodeReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopEnterGiftCodeReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.giftCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sShopEnterGiftCodeReq {
    return { giftCode: isSet(object.giftCode) ? String(object.giftCode) : "" };
  },

  toJSON(message: sc2sShopEnterGiftCodeReq): unknown {
    const obj: any = {};
    if (message.giftCode !== "") {
      obj.giftCode = message.giftCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopEnterGiftCodeReq>, I>>(base?: I): sc2sShopEnterGiftCodeReq {
    return sc2sShopEnterGiftCodeReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sShopEnterGiftCodeReq>, I>>(object: I): sc2sShopEnterGiftCodeReq {
    const message = createBasesc2sShopEnterGiftCodeReq();
    message.giftCode = object.giftCode ?? "";
    return message;
  },
};

function createBasess2cShopEnterGiftCodeRes(): ss2cShopEnterGiftCodeRes {
  return { result: 0, rewards: [] };
}

export const ss2cShopEnterGiftCodeRes = {
  encode(message: ss2cShopEnterGiftCodeRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.rewards) {
      srewardInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopEnterGiftCodeRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopEnterGiftCodeRes();
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

          message.rewards.push(srewardInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopEnterGiftCodeRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => srewardInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cShopEnterGiftCodeRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.rewards?.length) {
      obj.rewards = message.rewards.map((e) => srewardInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopEnterGiftCodeRes>, I>>(base?: I): ss2cShopEnterGiftCodeRes {
    return ss2cShopEnterGiftCodeRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cShopEnterGiftCodeRes>, I>>(object: I): ss2cShopEnterGiftCodeRes {
    const message = createBasess2cShopEnterGiftCodeRes();
    message.result = object.result ?? 0;
    message.rewards = object.rewards?.map((e) => srewardInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sShopRedStoneShardInfoReq(): sc2sShopRedStoneShardInfoReq {
  return {};
}

export const sc2sShopRedStoneShardInfoReq = {
  encode(_: sc2sShopRedStoneShardInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopRedStoneShardInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopRedStoneShardInfoReq();
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

  fromJSON(_: any): sc2sShopRedStoneShardInfoReq {
    return {};
  },

  toJSON(_: sc2sShopRedStoneShardInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopRedStoneShardInfoReq>, I>>(base?: I): sc2sShopRedStoneShardInfoReq {
    return sc2sShopRedStoneShardInfoReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sShopRedStoneShardInfoReq>, I>>(_: I): sc2sShopRedStoneShardInfoReq {
    const message = createBasesc2sShopRedStoneShardInfoReq();
    return message;
  },
};

function createBasesshopRedStoneShardInfo(): sshopRedStoneShardInfo {
  return {
    productIndex: 0,
    productPrice: 0,
    productCount: 0,
    designDataId: "",
    redirectionUrl: "",
    customData: "",
    productName: "",
  };
}

export const sshopRedStoneShardInfo = {
  encode(message: sshopRedStoneShardInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productIndex !== 0) {
      writer.uint32(8).uint32(message.productIndex);
    }
    if (message.productPrice !== 0) {
      writer.uint32(21).float(message.productPrice);
    }
    if (message.productCount !== 0) {
      writer.uint32(24).uint32(message.productCount);
    }
    if (message.designDataId !== "") {
      writer.uint32(34).string(message.designDataId);
    }
    if (message.redirectionUrl !== "") {
      writer.uint32(42).string(message.redirectionUrl);
    }
    if (message.customData !== "") {
      writer.uint32(50).string(message.customData);
    }
    if (message.productName !== "") {
      writer.uint32(58).string(message.productName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sshopRedStoneShardInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesshopRedStoneShardInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.productIndex = reader.uint32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.productPrice = reader.float();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.productCount = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.designDataId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.redirectionUrl = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.customData = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.productName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sshopRedStoneShardInfo {
    return {
      productIndex: isSet(object.productIndex) ? Number(object.productIndex) : 0,
      productPrice: isSet(object.productPrice) ? Number(object.productPrice) : 0,
      productCount: isSet(object.productCount) ? Number(object.productCount) : 0,
      designDataId: isSet(object.designDataId) ? String(object.designDataId) : "",
      redirectionUrl: isSet(object.redirectionUrl) ? String(object.redirectionUrl) : "",
      customData: isSet(object.customData) ? String(object.customData) : "",
      productName: isSet(object.productName) ? String(object.productName) : "",
    };
  },

  toJSON(message: sshopRedStoneShardInfo): unknown {
    const obj: any = {};
    if (message.productIndex !== 0) {
      obj.productIndex = Math.round(message.productIndex);
    }
    if (message.productPrice !== 0) {
      obj.productPrice = message.productPrice;
    }
    if (message.productCount !== 0) {
      obj.productCount = Math.round(message.productCount);
    }
    if (message.designDataId !== "") {
      obj.designDataId = message.designDataId;
    }
    if (message.redirectionUrl !== "") {
      obj.redirectionUrl = message.redirectionUrl;
    }
    if (message.customData !== "") {
      obj.customData = message.customData;
    }
    if (message.productName !== "") {
      obj.productName = message.productName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sshopRedStoneShardInfo>, I>>(base?: I): sshopRedStoneShardInfo {
    return sshopRedStoneShardInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sshopRedStoneShardInfo>, I>>(object: I): sshopRedStoneShardInfo {
    const message = createBasesshopRedStoneShardInfo();
    message.productIndex = object.productIndex ?? 0;
    message.productPrice = object.productPrice ?? 0;
    message.productCount = object.productCount ?? 0;
    message.designDataId = object.designDataId ?? "";
    message.redirectionUrl = object.redirectionUrl ?? "";
    message.customData = object.customData ?? "";
    message.productName = object.productName ?? "";
    return message;
  },
};

function createBasess2cShopRedStoneShardInfoRes(): ss2cShopRedStoneShardInfoRes {
  return { infos: [], loginType: 0 };
}

export const ss2cShopRedStoneShardInfoRes = {
  encode(message: ss2cShopRedStoneShardInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      sshopRedStoneShardInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.loginType !== 0) {
      writer.uint32(16).uint32(message.loginType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopRedStoneShardInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopRedStoneShardInfoRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(sshopRedStoneShardInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.loginType = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopRedStoneShardInfoRes {
    return {
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => sshopRedStoneShardInfo.fromJSON(e)) : [],
      loginType: isSet(object.loginType) ? Number(object.loginType) : 0,
    };
  },

  toJSON(message: ss2cShopRedStoneShardInfoRes): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => sshopRedStoneShardInfo.toJSON(e));
    }
    if (message.loginType !== 0) {
      obj.loginType = Math.round(message.loginType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopRedStoneShardInfoRes>, I>>(base?: I): ss2cShopRedStoneShardInfoRes {
    return ss2cShopRedStoneShardInfoRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cShopRedStoneShardInfoRes>, I>>(object: I): ss2cShopRedStoneShardInfoRes {
    const message = createBasess2cShopRedStoneShardInfoRes();
    message.infos = object.infos?.map((e) => sshopRedStoneShardInfo.fromPartial(e)) || [];
    message.loginType = object.loginType ?? 0;
    return message;
  },
};

function createBasesc2sShopRedStoneShardBuyReq(): sc2sShopRedStoneShardBuyReq {
  return { productIndex: 0, localPort: 0 };
}

export const sc2sShopRedStoneShardBuyReq = {
  encode(message: sc2sShopRedStoneShardBuyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productIndex !== 0) {
      writer.uint32(8).int32(message.productIndex);
    }
    if (message.localPort !== 0) {
      writer.uint32(16).int32(message.localPort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopRedStoneShardBuyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopRedStoneShardBuyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.productIndex = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.localPort = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sShopRedStoneShardBuyReq {
    return {
      productIndex: isSet(object.productIndex) ? Number(object.productIndex) : 0,
      localPort: isSet(object.localPort) ? Number(object.localPort) : 0,
    };
  },

  toJSON(message: sc2sShopRedStoneShardBuyReq): unknown {
    const obj: any = {};
    if (message.productIndex !== 0) {
      obj.productIndex = Math.round(message.productIndex);
    }
    if (message.localPort !== 0) {
      obj.localPort = Math.round(message.localPort);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopRedStoneShardBuyReq>, I>>(base?: I): sc2sShopRedStoneShardBuyReq {
    return sc2sShopRedStoneShardBuyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sShopRedStoneShardBuyReq>, I>>(object: I): sc2sShopRedStoneShardBuyReq {
    const message = createBasesc2sShopRedStoneShardBuyReq();
    message.productIndex = object.productIndex ?? 0;
    message.localPort = object.localPort ?? 0;
    return message;
  },
};

function createBasess2cShopRedStoneShardBuyRes(): ss2cShopRedStoneShardBuyRes {
  return { result: 0, trxId: 0, trxIdStr: "", platformId: "", offerItemId: "", sandboxId: "" };
}

export const ss2cShopRedStoneShardBuyRes = {
  encode(message: ss2cShopRedStoneShardBuyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.trxId !== 0) {
      writer.uint32(16).int64(message.trxId);
    }
    if (message.trxIdStr !== "") {
      writer.uint32(26).string(message.trxIdStr);
    }
    if (message.platformId !== "") {
      writer.uint32(34).string(message.platformId);
    }
    if (message.offerItemId !== "") {
      writer.uint32(42).string(message.offerItemId);
    }
    if (message.sandboxId !== "") {
      writer.uint32(50).string(message.sandboxId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopRedStoneShardBuyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopRedStoneShardBuyRes();
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
          if (tag !== 16) {
            break;
          }

          message.trxId = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.trxIdStr = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.platformId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.offerItemId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sandboxId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopRedStoneShardBuyRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      trxId: isSet(object.trxId) ? Number(object.trxId) : 0,
      trxIdStr: isSet(object.trxIdStr) ? String(object.trxIdStr) : "",
      platformId: isSet(object.platformId) ? String(object.platformId) : "",
      offerItemId: isSet(object.offerItemId) ? String(object.offerItemId) : "",
      sandboxId: isSet(object.sandboxId) ? String(object.sandboxId) : "",
    };
  },

  toJSON(message: ss2cShopRedStoneShardBuyRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.trxId !== 0) {
      obj.trxId = Math.round(message.trxId);
    }
    if (message.trxIdStr !== "") {
      obj.trxIdStr = message.trxIdStr;
    }
    if (message.platformId !== "") {
      obj.platformId = message.platformId;
    }
    if (message.offerItemId !== "") {
      obj.offerItemId = message.offerItemId;
    }
    if (message.sandboxId !== "") {
      obj.sandboxId = message.sandboxId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopRedStoneShardBuyRes>, I>>(base?: I): ss2cShopRedStoneShardBuyRes {
    return ss2cShopRedStoneShardBuyRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cShopRedStoneShardBuyRes>, I>>(object: I): ss2cShopRedStoneShardBuyRes {
    const message = createBasess2cShopRedStoneShardBuyRes();
    message.result = object.result ?? 0;
    message.trxId = object.trxId ?? 0;
    message.trxIdStr = object.trxIdStr ?? "";
    message.platformId = object.platformId ?? "";
    message.offerItemId = object.offerItemId ?? "";
    message.sandboxId = object.sandboxId ?? "";
    return message;
  },
};

function createBasesc2sShopRedStoneShardBuyCheckReq(): sc2sShopRedStoneShardBuyCheckReq {
  return { appId: 0, orderId: 0, authorized: 0, transactionId: "" };
}

export const sc2sShopRedStoneShardBuyCheckReq = {
  encode(message: sc2sShopRedStoneShardBuyCheckReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.orderId !== 0) {
      writer.uint32(16).uint64(message.orderId);
    }
    if (message.authorized !== 0) {
      writer.uint32(24).int32(message.authorized);
    }
    if (message.transactionId !== "") {
      writer.uint32(34).string(message.transactionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopRedStoneShardBuyCheckReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopRedStoneShardBuyCheckReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.appId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.orderId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.authorized = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.transactionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sShopRedStoneShardBuyCheckReq {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
      authorized: isSet(object.authorized) ? Number(object.authorized) : 0,
      transactionId: isSet(object.transactionId) ? String(object.transactionId) : "",
    };
  },

  toJSON(message: sc2sShopRedStoneShardBuyCheckReq): unknown {
    const obj: any = {};
    if (message.appId !== 0) {
      obj.appId = Math.round(message.appId);
    }
    if (message.orderId !== 0) {
      obj.orderId = Math.round(message.orderId);
    }
    if (message.authorized !== 0) {
      obj.authorized = Math.round(message.authorized);
    }
    if (message.transactionId !== "") {
      obj.transactionId = message.transactionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopRedStoneShardBuyCheckReq>, I>>(
    base?: I,
  ): sc2sShopRedStoneShardBuyCheckReq {
    return sc2sShopRedStoneShardBuyCheckReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sShopRedStoneShardBuyCheckReq>, I>>(
    object: I,
  ): sc2sShopRedStoneShardBuyCheckReq {
    const message = createBasesc2sShopRedStoneShardBuyCheckReq();
    message.appId = object.appId ?? 0;
    message.orderId = object.orderId ?? 0;
    message.authorized = object.authorized ?? 0;
    message.transactionId = object.transactionId ?? "";
    return message;
  },
};

function createBasess2cShopRedStoneShardBuyCheckRes(): ss2cShopRedStoneShardBuyCheckRes {
  return { result: 0 };
}

export const ss2cShopRedStoneShardBuyCheckRes = {
  encode(message: ss2cShopRedStoneShardBuyCheckRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopRedStoneShardBuyCheckRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopRedStoneShardBuyCheckRes();
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

  fromJSON(object: any): ss2cShopRedStoneShardBuyCheckRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cShopRedStoneShardBuyCheckRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopRedStoneShardBuyCheckRes>, I>>(
    base?: I,
  ): ss2cShopRedStoneShardBuyCheckRes {
    return ss2cShopRedStoneShardBuyCheckRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cShopRedStoneShardBuyCheckRes>, I>>(
    object: I,
  ): ss2cShopRedStoneShardBuyCheckRes {
    const message = createBasess2cShopRedStoneShardBuyCheckRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sShopLegendUpgradeReq(): sc2sShopLegendUpgradeReq {
  return {};
}

export const sc2sShopLegendUpgradeReq = {
  encode(_: sc2sShopLegendUpgradeReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopLegendUpgradeReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopLegendUpgradeReq();
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

  fromJSON(_: any): sc2sShopLegendUpgradeReq {
    return {};
  },

  toJSON(_: sc2sShopLegendUpgradeReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopLegendUpgradeReq>, I>>(base?: I): sc2sShopLegendUpgradeReq {
    return sc2sShopLegendUpgradeReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sShopLegendUpgradeReq>, I>>(_: I): sc2sShopLegendUpgradeReq {
    const message = createBasesc2sShopLegendUpgradeReq();
    return message;
  },
};

function createBasess2cShopLegendUpgradeRes(): ss2cShopLegendUpgradeRes {
  return { result: 0, upgradeDate: "", upgradeTime: "" };
}

export const ss2cShopLegendUpgradeRes = {
  encode(message: ss2cShopLegendUpgradeRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.upgradeDate !== "") {
      writer.uint32(18).string(message.upgradeDate);
    }
    if (message.upgradeTime !== "") {
      writer.uint32(26).string(message.upgradeTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopLegendUpgradeRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopLegendUpgradeRes();
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

          message.upgradeDate = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.upgradeTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopLegendUpgradeRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      upgradeDate: isSet(object.upgradeDate) ? String(object.upgradeDate) : "",
      upgradeTime: isSet(object.upgradeTime) ? String(object.upgradeTime) : "",
    };
  },

  toJSON(message: ss2cShopLegendUpgradeRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.upgradeDate !== "") {
      obj.upgradeDate = message.upgradeDate;
    }
    if (message.upgradeTime !== "") {
      obj.upgradeTime = message.upgradeTime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopLegendUpgradeRes>, I>>(base?: I): ss2cShopLegendUpgradeRes {
    return ss2cShopLegendUpgradeRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cShopLegendUpgradeRes>, I>>(object: I): ss2cShopLegendUpgradeRes {
    const message = createBasess2cShopLegendUpgradeRes();
    message.result = object.result ?? 0;
    message.upgradeDate = object.upgradeDate ?? "";
    message.upgradeTime = object.upgradeTime ?? "";
    return message;
  },
};

function createBasesc2sRefreshRedStoneShardReq(): sc2sRefreshRedStoneShardReq {
  return { accessId: "" };
}

export const sc2sRefreshRedStoneShardReq = {
  encode(message: sc2sRefreshRedStoneShardReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessId !== "") {
      writer.uint32(10).string(message.accessId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sRefreshRedStoneShardReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sRefreshRedStoneShardReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sRefreshRedStoneShardReq {
    return { accessId: isSet(object.accessId) ? String(object.accessId) : "" };
  },

  toJSON(message: sc2sRefreshRedStoneShardReq): unknown {
    const obj: any = {};
    if (message.accessId !== "") {
      obj.accessId = message.accessId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sRefreshRedStoneShardReq>, I>>(base?: I): sc2sRefreshRedStoneShardReq {
    return sc2sRefreshRedStoneShardReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sRefreshRedStoneShardReq>, I>>(object: I): sc2sRefreshRedStoneShardReq {
    const message = createBasesc2sRefreshRedStoneShardReq();
    message.accessId = object.accessId ?? "";
    return message;
  },
};

function createBasess2cRefreshRedStoneShardRes(): ss2cRefreshRedStoneShardRes {
  return {};
}

export const ss2cRefreshRedStoneShardRes = {
  encode(_: ss2cRefreshRedStoneShardRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cRefreshRedStoneShardRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cRefreshRedStoneShardRes();
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

  fromJSON(_: any): ss2cRefreshRedStoneShardRes {
    return {};
  },

  toJSON(_: ss2cRefreshRedStoneShardRes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cRefreshRedStoneShardRes>, I>>(base?: I): ss2cRefreshRedStoneShardRes {
    return ss2cRefreshRedStoneShardRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cRefreshRedStoneShardRes>, I>>(_: I): ss2cRefreshRedStoneShardRes {
    const message = createBasess2cRefreshRedStoneShardRes();
    return message;
  },
};

function createBasesc2sShopChangeAccountNameReq(): sc2sShopChangeAccountNameReq {
  return { changeAccountName: "" };
}

export const sc2sShopChangeAccountNameReq = {
  encode(message: sc2sShopChangeAccountNameReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.changeAccountName !== "") {
      writer.uint32(10).string(message.changeAccountName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopChangeAccountNameReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopChangeAccountNameReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.changeAccountName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sShopChangeAccountNameReq {
    return { changeAccountName: isSet(object.changeAccountName) ? String(object.changeAccountName) : "" };
  },

  toJSON(message: sc2sShopChangeAccountNameReq): unknown {
    const obj: any = {};
    if (message.changeAccountName !== "") {
      obj.changeAccountName = message.changeAccountName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopChangeAccountNameReq>, I>>(base?: I): sc2sShopChangeAccountNameReq {
    return sc2sShopChangeAccountNameReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sShopChangeAccountNameReq>, I>>(object: I): sc2sShopChangeAccountNameReq {
    const message = createBasesc2sShopChangeAccountNameReq();
    message.changeAccountName = object.changeAccountName ?? "";
    return message;
  },
};

function createBasess2cShopChangeAccountNameRes(): ss2cShopChangeAccountNameRes {
  return { result: 0, changeAccountName: "" };
}

export const ss2cShopChangeAccountNameRes = {
  encode(message: ss2cShopChangeAccountNameRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.changeAccountName !== "") {
      writer.uint32(18).string(message.changeAccountName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopChangeAccountNameRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopChangeAccountNameRes();
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

          message.changeAccountName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopChangeAccountNameRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      changeAccountName: isSet(object.changeAccountName) ? String(object.changeAccountName) : "",
    };
  },

  toJSON(message: ss2cShopChangeAccountNameRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.changeAccountName !== "") {
      obj.changeAccountName = message.changeAccountName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopChangeAccountNameRes>, I>>(base?: I): ss2cShopChangeAccountNameRes {
    return ss2cShopChangeAccountNameRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cShopChangeAccountNameRes>, I>>(object: I): ss2cShopChangeAccountNameRes {
    const message = createBasess2cShopChangeAccountNameRes();
    message.result = object.result ?? 0;
    message.changeAccountName = object.changeAccountName ?? "";
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
