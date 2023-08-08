/* eslint-disable */
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

export interface sgiftCodeRewardInfo {
  rewardType: string;
  stockId: string;
}

export interface sc2sShopEnterGiftCodeReq {
  giftCode: string;
}

export interface ss2cShopEnterGiftCodeRes {
  result: number;
  rewards: sgiftCodeRewardInfo[];
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

function createBasesgiftCodeRewardInfo(): sgiftCodeRewardInfo {
  return { rewardType: "", stockId: "" };
}

export const sgiftCodeRewardInfo = {
  encode(message: sgiftCodeRewardInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardType !== "") {
      writer.uint32(10).string(message.rewardType);
    }
    if (message.stockId !== "") {
      writer.uint32(18).string(message.stockId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sgiftCodeRewardInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesgiftCodeRewardInfo();
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

  fromJSON(object: any): sgiftCodeRewardInfo {
    return {
      rewardType: isSet(object.rewardType) ? String(object.rewardType) : "",
      stockId: isSet(object.stockId) ? String(object.stockId) : "",
    };
  },

  toJSON(message: sgiftCodeRewardInfo): unknown {
    const obj: any = {};
    if (message.rewardType !== "") {
      obj.rewardType = message.rewardType;
    }
    if (message.stockId !== "") {
      obj.stockId = message.stockId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sgiftCodeRewardInfo>, I>>(base?: I): sgiftCodeRewardInfo {
    return sgiftCodeRewardInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sgiftCodeRewardInfo>, I>>(object: I): sgiftCodeRewardInfo {
    const message = createBasesgiftCodeRewardInfo();
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
      sgiftCodeRewardInfo.encode(v!, writer.uint32(18).fork()).ldelim();
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

          message.rewards.push(sgiftCodeRewardInfo.decode(reader, reader.uint32()));
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
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => sgiftCodeRewardInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cShopEnterGiftCodeRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.rewards?.length) {
      obj.rewards = message.rewards.map((e) => sgiftCodeRewardInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopEnterGiftCodeRes>, I>>(base?: I): ss2cShopEnterGiftCodeRes {
    return ss2cShopEnterGiftCodeRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cShopEnterGiftCodeRes>, I>>(object: I): ss2cShopEnterGiftCodeRes {
    const message = createBasess2cShopEnterGiftCodeRes();
    message.result = object.result ?? 0;
    message.rewards = object.rewards?.map((e) => sgiftCodeRewardInfo.fromPartial(e)) || [];
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
