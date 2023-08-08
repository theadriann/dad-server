/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DC.Packet";

export interface sc2sGmPartyAllRandomReq {
}

export interface ss2cGmPartyAllRandomRes {
}

function createBasesc2sGmPartyAllRandomReq(): sc2sGmPartyAllRandomReq {
  return {};
}

export const sc2sGmPartyAllRandomReq = {
  encode(_: sc2sGmPartyAllRandomReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sGmPartyAllRandomReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sGmPartyAllRandomReq();
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

  fromJSON(_: any): sc2sGmPartyAllRandomReq {
    return {};
  },

  toJSON(_: sc2sGmPartyAllRandomReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sGmPartyAllRandomReq>, I>>(base?: I): sc2sGmPartyAllRandomReq {
    return sc2sGmPartyAllRandomReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sGmPartyAllRandomReq>, I>>(_: I): sc2sGmPartyAllRandomReq {
    const message = createBasesc2sGmPartyAllRandomReq();
    return message;
  },
};

function createBasess2cGmPartyAllRandomRes(): ss2cGmPartyAllRandomRes {
  return {};
}

export const ss2cGmPartyAllRandomRes = {
  encode(_: ss2cGmPartyAllRandomRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cGmPartyAllRandomRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cGmPartyAllRandomRes();
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

  fromJSON(_: any): ss2cGmPartyAllRandomRes {
    return {};
  },

  toJSON(_: ss2cGmPartyAllRandomRes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cGmPartyAllRandomRes>, I>>(base?: I): ss2cGmPartyAllRandomRes {
    return ss2cGmPartyAllRandomRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cGmPartyAllRandomRes>, I>>(_: I): ss2cGmPartyAllRandomRes {
    const message = createBasess2cGmPartyAllRandomRes();
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
