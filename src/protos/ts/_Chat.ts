/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { saccountNickname } from "./_Character";

export const protobufPackage = "DC.Packet";

export interface schatdataPieceItemProperty {
  pid: string;
  pv: number;
}

export interface schatdataPieceItem {
  uid: number;
  iid: string;
  pp: schatdataPieceItemProperty[];
  sp: schatdataPieceItemProperty[];
}

export interface schatdataPiece {
  chatStr: string;
  chatDataPieceItem: schatdataPieceItem | undefined;
}

export interface SCHATDATA {
  accountId: string;
  characterId: string;
  nickname: saccountNickname | undefined;
  partyId: string;
  chatDataPieceArray: schatdataPiece[];
}

export interface spieceItemBody {
  idx: number;
  pieces: schatdataPieceItem | undefined;
}

export interface spieceItemArray {
  links: spieceItemBody[];
}

function createBaseschatdataPieceItemProperty(): schatdataPieceItemProperty {
  return { pid: "", pv: 0 };
}

export const schatdataPieceItemProperty = {
  encode(message: schatdataPieceItemProperty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pid !== "") {
      writer.uint32(10).string(message.pid);
    }
    if (message.pv !== 0) {
      writer.uint32(16).int32(message.pv);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): schatdataPieceItemProperty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseschatdataPieceItemProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pid = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pv = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): schatdataPieceItemProperty {
    return { pid: isSet(object.pid) ? String(object.pid) : "", pv: isSet(object.pv) ? Number(object.pv) : 0 };
  },

  toJSON(message: schatdataPieceItemProperty): unknown {
    const obj: any = {};
    if (message.pid !== "") {
      obj.pid = message.pid;
    }
    if (message.pv !== 0) {
      obj.pv = Math.round(message.pv);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<schatdataPieceItemProperty>, I>>(base?: I): schatdataPieceItemProperty {
    return schatdataPieceItemProperty.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<schatdataPieceItemProperty>, I>>(object: I): schatdataPieceItemProperty {
    const message = createBaseschatdataPieceItemProperty();
    message.pid = object.pid ?? "";
    message.pv = object.pv ?? 0;
    return message;
  },
};

function createBaseschatdataPieceItem(): schatdataPieceItem {
  return { uid: 0, iid: "", pp: [], sp: [] };
}

export const schatdataPieceItem = {
  encode(message: schatdataPieceItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uid !== 0) {
      writer.uint32(8).uint64(message.uid);
    }
    if (message.iid !== "") {
      writer.uint32(18).string(message.iid);
    }
    for (const v of message.pp) {
      schatdataPieceItemProperty.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sp) {
      schatdataPieceItemProperty.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): schatdataPieceItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseschatdataPieceItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.uid = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.iid = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pp.push(schatdataPieceItemProperty.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sp.push(schatdataPieceItemProperty.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): schatdataPieceItem {
    return {
      uid: isSet(object.uid) ? Number(object.uid) : 0,
      iid: isSet(object.iid) ? String(object.iid) : "",
      pp: Array.isArray(object?.pp) ? object.pp.map((e: any) => schatdataPieceItemProperty.fromJSON(e)) : [],
      sp: Array.isArray(object?.sp) ? object.sp.map((e: any) => schatdataPieceItemProperty.fromJSON(e)) : [],
    };
  },

  toJSON(message: schatdataPieceItem): unknown {
    const obj: any = {};
    if (message.uid !== 0) {
      obj.uid = Math.round(message.uid);
    }
    if (message.iid !== "") {
      obj.iid = message.iid;
    }
    if (message.pp?.length) {
      obj.pp = message.pp.map((e) => schatdataPieceItemProperty.toJSON(e));
    }
    if (message.sp?.length) {
      obj.sp = message.sp.map((e) => schatdataPieceItemProperty.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<schatdataPieceItem>, I>>(base?: I): schatdataPieceItem {
    return schatdataPieceItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<schatdataPieceItem>, I>>(object: I): schatdataPieceItem {
    const message = createBaseschatdataPieceItem();
    message.uid = object.uid ?? 0;
    message.iid = object.iid ?? "";
    message.pp = object.pp?.map((e) => schatdataPieceItemProperty.fromPartial(e)) || [];
    message.sp = object.sp?.map((e) => schatdataPieceItemProperty.fromPartial(e)) || [];
    return message;
  },
};

function createBaseschatdataPiece(): schatdataPiece {
  return { chatStr: "", chatDataPieceItem: undefined };
}

export const schatdataPiece = {
  encode(message: schatdataPiece, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatStr !== "") {
      writer.uint32(10).string(message.chatStr);
    }
    if (message.chatDataPieceItem !== undefined) {
      schatdataPieceItem.encode(message.chatDataPieceItem, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): schatdataPiece {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseschatdataPiece();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatStr = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chatDataPieceItem = schatdataPieceItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): schatdataPiece {
    return {
      chatStr: isSet(object.chatStr) ? String(object.chatStr) : "",
      chatDataPieceItem: isSet(object.chatDataPieceItem)
        ? schatdataPieceItem.fromJSON(object.chatDataPieceItem)
        : undefined,
    };
  },

  toJSON(message: schatdataPiece): unknown {
    const obj: any = {};
    if (message.chatStr !== "") {
      obj.chatStr = message.chatStr;
    }
    if (message.chatDataPieceItem !== undefined) {
      obj.chatDataPieceItem = schatdataPieceItem.toJSON(message.chatDataPieceItem);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<schatdataPiece>, I>>(base?: I): schatdataPiece {
    return schatdataPiece.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<schatdataPiece>, I>>(object: I): schatdataPiece {
    const message = createBaseschatdataPiece();
    message.chatStr = object.chatStr ?? "";
    message.chatDataPieceItem = (object.chatDataPieceItem !== undefined && object.chatDataPieceItem !== null)
      ? schatdataPieceItem.fromPartial(object.chatDataPieceItem)
      : undefined;
    return message;
  },
};

function createBaseSCHATDATA(): SCHATDATA {
  return { accountId: "", characterId: "", nickname: undefined, partyId: "", chatDataPieceArray: [] };
}

export const SCHATDATA = {
  encode(message: SCHATDATA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.nickname !== undefined) {
      saccountNickname.encode(message.nickname, writer.uint32(26).fork()).ldelim();
    }
    if (message.partyId !== "") {
      writer.uint32(34).string(message.partyId);
    }
    for (const v of message.chatDataPieceArray) {
      schatdataPiece.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SCHATDATA {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSCHATDATA();
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

          message.nickname = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.partyId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.chatDataPieceArray.push(schatdataPiece.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SCHATDATA {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      nickname: isSet(object.nickname) ? saccountNickname.fromJSON(object.nickname) : undefined,
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      chatDataPieceArray: Array.isArray(object?.chatDataPieceArray)
        ? object.chatDataPieceArray.map((e: any) => schatdataPiece.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SCHATDATA): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.nickname !== undefined) {
      obj.nickname = saccountNickname.toJSON(message.nickname);
    }
    if (message.partyId !== "") {
      obj.partyId = message.partyId;
    }
    if (message.chatDataPieceArray?.length) {
      obj.chatDataPieceArray = message.chatDataPieceArray.map((e) => schatdataPiece.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SCHATDATA>, I>>(base?: I): SCHATDATA {
    return SCHATDATA.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SCHATDATA>, I>>(object: I): SCHATDATA {
    const message = createBaseSCHATDATA();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.nickname = (object.nickname !== undefined && object.nickname !== null)
      ? saccountNickname.fromPartial(object.nickname)
      : undefined;
    message.partyId = object.partyId ?? "";
    message.chatDataPieceArray = object.chatDataPieceArray?.map((e) => schatdataPiece.fromPartial(e)) || [];
    return message;
  },
};

function createBasespieceItemBody(): spieceItemBody {
  return { idx: 0, pieces: undefined };
}

export const spieceItemBody = {
  encode(message: spieceItemBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idx !== 0) {
      writer.uint32(8).uint32(message.idx);
    }
    if (message.pieces !== undefined) {
      schatdataPieceItem.encode(message.pieces, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): spieceItemBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasespieceItemBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.idx = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pieces = schatdataPieceItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): spieceItemBody {
    return {
      idx: isSet(object.idx) ? Number(object.idx) : 0,
      pieces: isSet(object.pieces) ? schatdataPieceItem.fromJSON(object.pieces) : undefined,
    };
  },

  toJSON(message: spieceItemBody): unknown {
    const obj: any = {};
    if (message.idx !== 0) {
      obj.idx = Math.round(message.idx);
    }
    if (message.pieces !== undefined) {
      obj.pieces = schatdataPieceItem.toJSON(message.pieces);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<spieceItemBody>, I>>(base?: I): spieceItemBody {
    return spieceItemBody.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<spieceItemBody>, I>>(object: I): spieceItemBody {
    const message = createBasespieceItemBody();
    message.idx = object.idx ?? 0;
    message.pieces = (object.pieces !== undefined && object.pieces !== null)
      ? schatdataPieceItem.fromPartial(object.pieces)
      : undefined;
    return message;
  },
};

function createBasespieceItemArray(): spieceItemArray {
  return { links: [] };
}

export const spieceItemArray = {
  encode(message: spieceItemArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.links) {
      spieceItemBody.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): spieceItemArray {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasespieceItemArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.links.push(spieceItemBody.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): spieceItemArray {
    return { links: Array.isArray(object?.links) ? object.links.map((e: any) => spieceItemBody.fromJSON(e)) : [] };
  },

  toJSON(message: spieceItemArray): unknown {
    const obj: any = {};
    if (message.links?.length) {
      obj.links = message.links.map((e) => spieceItemBody.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<spieceItemArray>, I>>(base?: I): spieceItemArray {
    return spieceItemArray.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<spieceItemArray>, I>>(object: I): spieceItemArray {
    const message = createBasespieceItemArray();
    message.links = object.links?.map((e) => spieceItemBody.fromPartial(e)) || [];
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
