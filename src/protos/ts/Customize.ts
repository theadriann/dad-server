/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DC.Packet";

export interface scustomizeBaseInfo {
  customizeType: number;
  customizeId: string;
  isEquip: number;
  equipSlotIndex: number;
}

export interface sc2sCustomizeInfoReq {
}

export interface ss2cCustomizeInfoRes {
  loopFlag: number;
  infos: scustomizeBaseInfo[];
}

export interface sc2sCustomizeMountReq {
  customizeType: number;
  customizeId: string;
  equipSlotIndex: number;
}

export interface ss2cCustomizeMountRes {
  result: number;
  customizeType: number;
  infos: scustomizeBaseInfo[];
}

export interface sc2sCustomizeUnmountReq {
  customizeType: number;
  customizeId: string;
}

export interface ss2cCustomizeUnmountRes {
  result: number;
  customizeType: number;
  infos: scustomizeBaseInfo[];
}

export interface sc2sCustomizeNewItemCheckReq {
  itemId: string;
}

export interface ss2cCustomizeNewItemCheckRes {
}

export interface ss2cCustomizeNewItemAlertNot {
}

function createBasescustomizeBaseInfo(): scustomizeBaseInfo {
  return { customizeType: 0, customizeId: "", isEquip: 0, equipSlotIndex: 0 };
}

export const scustomizeBaseInfo = {
  encode(message: scustomizeBaseInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customizeType !== 0) {
      writer.uint32(8).uint32(message.customizeType);
    }
    if (message.customizeId !== "") {
      writer.uint32(18).string(message.customizeId);
    }
    if (message.isEquip !== 0) {
      writer.uint32(24).uint32(message.isEquip);
    }
    if (message.equipSlotIndex !== 0) {
      writer.uint32(32).int32(message.equipSlotIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): scustomizeBaseInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasescustomizeBaseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.customizeType = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.customizeId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isEquip = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.equipSlotIndex = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): scustomizeBaseInfo {
    return {
      customizeType: isSet(object.customizeType) ? Number(object.customizeType) : 0,
      customizeId: isSet(object.customizeId) ? String(object.customizeId) : "",
      isEquip: isSet(object.isEquip) ? Number(object.isEquip) : 0,
      equipSlotIndex: isSet(object.equipSlotIndex) ? Number(object.equipSlotIndex) : 0,
    };
  },

  toJSON(message: scustomizeBaseInfo): unknown {
    const obj: any = {};
    if (message.customizeType !== 0) {
      obj.customizeType = Math.round(message.customizeType);
    }
    if (message.customizeId !== "") {
      obj.customizeId = message.customizeId;
    }
    if (message.isEquip !== 0) {
      obj.isEquip = Math.round(message.isEquip);
    }
    if (message.equipSlotIndex !== 0) {
      obj.equipSlotIndex = Math.round(message.equipSlotIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<scustomizeBaseInfo>, I>>(base?: I): scustomizeBaseInfo {
    return scustomizeBaseInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<scustomizeBaseInfo>, I>>(object: I): scustomizeBaseInfo {
    const message = createBasescustomizeBaseInfo();
    message.customizeType = object.customizeType ?? 0;
    message.customizeId = object.customizeId ?? "";
    message.isEquip = object.isEquip ?? 0;
    message.equipSlotIndex = object.equipSlotIndex ?? 0;
    return message;
  },
};

function createBasesc2sCustomizeInfoReq(): sc2sCustomizeInfoReq {
  return {};
}

export const sc2sCustomizeInfoReq = {
  encode(_: sc2sCustomizeInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeInfoReq();
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

  fromJSON(_: any): sc2sCustomizeInfoReq {
    return {};
  },

  toJSON(_: sc2sCustomizeInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeInfoReq>, I>>(base?: I): sc2sCustomizeInfoReq {
    return sc2sCustomizeInfoReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeInfoReq>, I>>(_: I): sc2sCustomizeInfoReq {
    const message = createBasesc2sCustomizeInfoReq();
    return message;
  },
};

function createBasess2cCustomizeInfoRes(): ss2cCustomizeInfoRes {
  return { loopFlag: 0, infos: [] };
}

export const ss2cCustomizeInfoRes = {
  encode(message: ss2cCustomizeInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loopFlag !== 0) {
      writer.uint32(8).uint32(message.loopFlag);
    }
    for (const v of message.infos) {
      scustomizeBaseInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeInfoRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.loopFlag = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.infos.push(scustomizeBaseInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeInfoRes {
    return {
      loopFlag: isSet(object.loopFlag) ? Number(object.loopFlag) : 0,
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => scustomizeBaseInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cCustomizeInfoRes): unknown {
    const obj: any = {};
    if (message.loopFlag !== 0) {
      obj.loopFlag = Math.round(message.loopFlag);
    }
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => scustomizeBaseInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeInfoRes>, I>>(base?: I): ss2cCustomizeInfoRes {
    return ss2cCustomizeInfoRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeInfoRes>, I>>(object: I): ss2cCustomizeInfoRes {
    const message = createBasess2cCustomizeInfoRes();
    message.loopFlag = object.loopFlag ?? 0;
    message.infos = object.infos?.map((e) => scustomizeBaseInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeMountReq(): sc2sCustomizeMountReq {
  return { customizeType: 0, customizeId: "", equipSlotIndex: 0 };
}

export const sc2sCustomizeMountReq = {
  encode(message: sc2sCustomizeMountReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customizeType !== 0) {
      writer.uint32(8).uint32(message.customizeType);
    }
    if (message.customizeId !== "") {
      writer.uint32(18).string(message.customizeId);
    }
    if (message.equipSlotIndex !== 0) {
      writer.uint32(24).uint32(message.equipSlotIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeMountReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeMountReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.customizeType = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.customizeId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.equipSlotIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sCustomizeMountReq {
    return {
      customizeType: isSet(object.customizeType) ? Number(object.customizeType) : 0,
      customizeId: isSet(object.customizeId) ? String(object.customizeId) : "",
      equipSlotIndex: isSet(object.equipSlotIndex) ? Number(object.equipSlotIndex) : 0,
    };
  },

  toJSON(message: sc2sCustomizeMountReq): unknown {
    const obj: any = {};
    if (message.customizeType !== 0) {
      obj.customizeType = Math.round(message.customizeType);
    }
    if (message.customizeId !== "") {
      obj.customizeId = message.customizeId;
    }
    if (message.equipSlotIndex !== 0) {
      obj.equipSlotIndex = Math.round(message.equipSlotIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeMountReq>, I>>(base?: I): sc2sCustomizeMountReq {
    return sc2sCustomizeMountReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeMountReq>, I>>(object: I): sc2sCustomizeMountReq {
    const message = createBasesc2sCustomizeMountReq();
    message.customizeType = object.customizeType ?? 0;
    message.customizeId = object.customizeId ?? "";
    message.equipSlotIndex = object.equipSlotIndex ?? 0;
    return message;
  },
};

function createBasess2cCustomizeMountRes(): ss2cCustomizeMountRes {
  return { result: 0, customizeType: 0, infos: [] };
}

export const ss2cCustomizeMountRes = {
  encode(message: ss2cCustomizeMountRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.customizeType !== 0) {
      writer.uint32(16).uint32(message.customizeType);
    }
    for (const v of message.infos) {
      scustomizeBaseInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeMountRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeMountRes();
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

          message.customizeType = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.infos.push(scustomizeBaseInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeMountRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      customizeType: isSet(object.customizeType) ? Number(object.customizeType) : 0,
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => scustomizeBaseInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cCustomizeMountRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.customizeType !== 0) {
      obj.customizeType = Math.round(message.customizeType);
    }
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => scustomizeBaseInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeMountRes>, I>>(base?: I): ss2cCustomizeMountRes {
    return ss2cCustomizeMountRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeMountRes>, I>>(object: I): ss2cCustomizeMountRes {
    const message = createBasess2cCustomizeMountRes();
    message.result = object.result ?? 0;
    message.customizeType = object.customizeType ?? 0;
    message.infos = object.infos?.map((e) => scustomizeBaseInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeUnmountReq(): sc2sCustomizeUnmountReq {
  return { customizeType: 0, customizeId: "" };
}

export const sc2sCustomizeUnmountReq = {
  encode(message: sc2sCustomizeUnmountReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customizeType !== 0) {
      writer.uint32(8).uint32(message.customizeType);
    }
    if (message.customizeId !== "") {
      writer.uint32(18).string(message.customizeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeUnmountReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeUnmountReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.customizeType = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.customizeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sCustomizeUnmountReq {
    return {
      customizeType: isSet(object.customizeType) ? Number(object.customizeType) : 0,
      customizeId: isSet(object.customizeId) ? String(object.customizeId) : "",
    };
  },

  toJSON(message: sc2sCustomizeUnmountReq): unknown {
    const obj: any = {};
    if (message.customizeType !== 0) {
      obj.customizeType = Math.round(message.customizeType);
    }
    if (message.customizeId !== "") {
      obj.customizeId = message.customizeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeUnmountReq>, I>>(base?: I): sc2sCustomizeUnmountReq {
    return sc2sCustomizeUnmountReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeUnmountReq>, I>>(object: I): sc2sCustomizeUnmountReq {
    const message = createBasesc2sCustomizeUnmountReq();
    message.customizeType = object.customizeType ?? 0;
    message.customizeId = object.customizeId ?? "";
    return message;
  },
};

function createBasess2cCustomizeUnmountRes(): ss2cCustomizeUnmountRes {
  return { result: 0, customizeType: 0, infos: [] };
}

export const ss2cCustomizeUnmountRes = {
  encode(message: ss2cCustomizeUnmountRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.customizeType !== 0) {
      writer.uint32(16).uint32(message.customizeType);
    }
    for (const v of message.infos) {
      scustomizeBaseInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeUnmountRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeUnmountRes();
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

          message.customizeType = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.infos.push(scustomizeBaseInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeUnmountRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      customizeType: isSet(object.customizeType) ? Number(object.customizeType) : 0,
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => scustomizeBaseInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cCustomizeUnmountRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.customizeType !== 0) {
      obj.customizeType = Math.round(message.customizeType);
    }
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => scustomizeBaseInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeUnmountRes>, I>>(base?: I): ss2cCustomizeUnmountRes {
    return ss2cCustomizeUnmountRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeUnmountRes>, I>>(object: I): ss2cCustomizeUnmountRes {
    const message = createBasess2cCustomizeUnmountRes();
    message.result = object.result ?? 0;
    message.customizeType = object.customizeType ?? 0;
    message.infos = object.infos?.map((e) => scustomizeBaseInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeNewItemCheckReq(): sc2sCustomizeNewItemCheckReq {
  return { itemId: "" };
}

export const sc2sCustomizeNewItemCheckReq = {
  encode(message: sc2sCustomizeNewItemCheckReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "") {
      writer.uint32(10).string(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeNewItemCheckReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeNewItemCheckReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.itemId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sCustomizeNewItemCheckReq {
    return { itemId: isSet(object.itemId) ? String(object.itemId) : "" };
  },

  toJSON(message: sc2sCustomizeNewItemCheckReq): unknown {
    const obj: any = {};
    if (message.itemId !== "") {
      obj.itemId = message.itemId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeNewItemCheckReq>, I>>(base?: I): sc2sCustomizeNewItemCheckReq {
    return sc2sCustomizeNewItemCheckReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeNewItemCheckReq>, I>>(object: I): sc2sCustomizeNewItemCheckReq {
    const message = createBasesc2sCustomizeNewItemCheckReq();
    message.itemId = object.itemId ?? "";
    return message;
  },
};

function createBasess2cCustomizeNewItemCheckRes(): ss2cCustomizeNewItemCheckRes {
  return {};
}

export const ss2cCustomizeNewItemCheckRes = {
  encode(_: ss2cCustomizeNewItemCheckRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeNewItemCheckRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeNewItemCheckRes();
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

  fromJSON(_: any): ss2cCustomizeNewItemCheckRes {
    return {};
  },

  toJSON(_: ss2cCustomizeNewItemCheckRes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeNewItemCheckRes>, I>>(base?: I): ss2cCustomizeNewItemCheckRes {
    return ss2cCustomizeNewItemCheckRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeNewItemCheckRes>, I>>(_: I): ss2cCustomizeNewItemCheckRes {
    const message = createBasess2cCustomizeNewItemCheckRes();
    return message;
  },
};

function createBasess2cCustomizeNewItemAlertNot(): ss2cCustomizeNewItemAlertNot {
  return {};
}

export const ss2cCustomizeNewItemAlertNot = {
  encode(_: ss2cCustomizeNewItemAlertNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeNewItemAlertNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeNewItemAlertNot();
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

  fromJSON(_: any): ss2cCustomizeNewItemAlertNot {
    return {};
  },

  toJSON(_: ss2cCustomizeNewItemAlertNot): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeNewItemAlertNot>, I>>(base?: I): ss2cCustomizeNewItemAlertNot {
    return ss2cCustomizeNewItemAlertNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeNewItemAlertNot>, I>>(_: I): ss2cCustomizeNewItemAlertNot {
    const message = createBasess2cCustomizeNewItemAlertNot();
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
