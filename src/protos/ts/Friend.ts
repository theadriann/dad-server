/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { saccountNickname, scharacterFriendInfo } from "./_Character";

export const protobufPackage = "DC.Packet";

export interface sc2sFriendListReq {
  pageIndex: number;
  pageCapacity: number;
}

export interface ss2cFriendListRes {
  friendInfoList: scharacterFriendInfo[];
  pageIndex: number;
  totalFriendCount: number;
  lobbyLocateCount: number;
  dungeonLocateCount: number;
}

export interface sc2sFriendListAllReq {
}

export interface ss2cFriendListAllRes {
  friendInfoList: scharacterFriendInfo[];
  loopFlag: number;
  totalUserCount: number;
  lobbyLocateCount: number;
  dungeonLocateCount: number;
}

export interface sc2sFriendFindReq {
  nickName: saccountNickname | undefined;
}

export interface ss2cFriendFindRes {
  result: number;
  friendInfo: scharacterFriendInfo | undefined;
}

function createBasesc2sFriendListReq(): sc2sFriendListReq {
  return { pageIndex: 0, pageCapacity: 0 };
}

export const sc2sFriendListReq = {
  encode(message: sc2sFriendListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageIndex !== 0) {
      writer.uint32(8).uint32(message.pageIndex);
    }
    if (message.pageCapacity !== 0) {
      writer.uint32(16).uint32(message.pageCapacity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sFriendListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sFriendListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pageIndex = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageCapacity = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sFriendListReq {
    return {
      pageIndex: isSet(object.pageIndex) ? Number(object.pageIndex) : 0,
      pageCapacity: isSet(object.pageCapacity) ? Number(object.pageCapacity) : 0,
    };
  },

  toJSON(message: sc2sFriendListReq): unknown {
    const obj: any = {};
    if (message.pageIndex !== 0) {
      obj.pageIndex = Math.round(message.pageIndex);
    }
    if (message.pageCapacity !== 0) {
      obj.pageCapacity = Math.round(message.pageCapacity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sFriendListReq>, I>>(base?: I): sc2sFriendListReq {
    return sc2sFriendListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sFriendListReq>, I>>(object: I): sc2sFriendListReq {
    const message = createBasesc2sFriendListReq();
    message.pageIndex = object.pageIndex ?? 0;
    message.pageCapacity = object.pageCapacity ?? 0;
    return message;
  },
};

function createBasess2cFriendListRes(): ss2cFriendListRes {
  return { friendInfoList: [], pageIndex: 0, totalFriendCount: 0, lobbyLocateCount: 0, dungeonLocateCount: 0 };
}

export const ss2cFriendListRes = {
  encode(message: ss2cFriendListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.friendInfoList) {
      scharacterFriendInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pageIndex !== 0) {
      writer.uint32(16).uint32(message.pageIndex);
    }
    if (message.totalFriendCount !== 0) {
      writer.uint32(24).uint32(message.totalFriendCount);
    }
    if (message.lobbyLocateCount !== 0) {
      writer.uint32(32).uint32(message.lobbyLocateCount);
    }
    if (message.dungeonLocateCount !== 0) {
      writer.uint32(40).uint32(message.dungeonLocateCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.friendInfoList.push(scharacterFriendInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageIndex = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalFriendCount = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.lobbyLocateCount = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.dungeonLocateCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cFriendListRes {
    return {
      friendInfoList: Array.isArray(object?.friendInfoList)
        ? object.friendInfoList.map((e: any) => scharacterFriendInfo.fromJSON(e))
        : [],
      pageIndex: isSet(object.pageIndex) ? Number(object.pageIndex) : 0,
      totalFriendCount: isSet(object.totalFriendCount) ? Number(object.totalFriendCount) : 0,
      lobbyLocateCount: isSet(object.lobbyLocateCount) ? Number(object.lobbyLocateCount) : 0,
      dungeonLocateCount: isSet(object.dungeonLocateCount) ? Number(object.dungeonLocateCount) : 0,
    };
  },

  toJSON(message: ss2cFriendListRes): unknown {
    const obj: any = {};
    if (message.friendInfoList?.length) {
      obj.friendInfoList = message.friendInfoList.map((e) => scharacterFriendInfo.toJSON(e));
    }
    if (message.pageIndex !== 0) {
      obj.pageIndex = Math.round(message.pageIndex);
    }
    if (message.totalFriendCount !== 0) {
      obj.totalFriendCount = Math.round(message.totalFriendCount);
    }
    if (message.lobbyLocateCount !== 0) {
      obj.lobbyLocateCount = Math.round(message.lobbyLocateCount);
    }
    if (message.dungeonLocateCount !== 0) {
      obj.dungeonLocateCount = Math.round(message.dungeonLocateCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendListRes>, I>>(base?: I): ss2cFriendListRes {
    return ss2cFriendListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendListRes>, I>>(object: I): ss2cFriendListRes {
    const message = createBasess2cFriendListRes();
    message.friendInfoList = object.friendInfoList?.map((e) => scharacterFriendInfo.fromPartial(e)) || [];
    message.pageIndex = object.pageIndex ?? 0;
    message.totalFriendCount = object.totalFriendCount ?? 0;
    message.lobbyLocateCount = object.lobbyLocateCount ?? 0;
    message.dungeonLocateCount = object.dungeonLocateCount ?? 0;
    return message;
  },
};

function createBasesc2sFriendListAllReq(): sc2sFriendListAllReq {
  return {};
}

export const sc2sFriendListAllReq = {
  encode(_: sc2sFriendListAllReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sFriendListAllReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sFriendListAllReq();
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

  fromJSON(_: any): sc2sFriendListAllReq {
    return {};
  },

  toJSON(_: sc2sFriendListAllReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sFriendListAllReq>, I>>(base?: I): sc2sFriendListAllReq {
    return sc2sFriendListAllReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sFriendListAllReq>, I>>(_: I): sc2sFriendListAllReq {
    const message = createBasesc2sFriendListAllReq();
    return message;
  },
};

function createBasess2cFriendListAllRes(): ss2cFriendListAllRes {
  return { friendInfoList: [], loopFlag: 0, totalUserCount: 0, lobbyLocateCount: 0, dungeonLocateCount: 0 };
}

export const ss2cFriendListAllRes = {
  encode(message: ss2cFriendListAllRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.friendInfoList) {
      scharacterFriendInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.loopFlag !== 0) {
      writer.uint32(16).uint32(message.loopFlag);
    }
    if (message.totalUserCount !== 0) {
      writer.uint32(24).uint32(message.totalUserCount);
    }
    if (message.lobbyLocateCount !== 0) {
      writer.uint32(32).uint32(message.lobbyLocateCount);
    }
    if (message.dungeonLocateCount !== 0) {
      writer.uint32(40).uint32(message.dungeonLocateCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendListAllRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendListAllRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.friendInfoList.push(scharacterFriendInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.loopFlag = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalUserCount = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.lobbyLocateCount = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.dungeonLocateCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cFriendListAllRes {
    return {
      friendInfoList: Array.isArray(object?.friendInfoList)
        ? object.friendInfoList.map((e: any) => scharacterFriendInfo.fromJSON(e))
        : [],
      loopFlag: isSet(object.loopFlag) ? Number(object.loopFlag) : 0,
      totalUserCount: isSet(object.totalUserCount) ? Number(object.totalUserCount) : 0,
      lobbyLocateCount: isSet(object.lobbyLocateCount) ? Number(object.lobbyLocateCount) : 0,
      dungeonLocateCount: isSet(object.dungeonLocateCount) ? Number(object.dungeonLocateCount) : 0,
    };
  },

  toJSON(message: ss2cFriendListAllRes): unknown {
    const obj: any = {};
    if (message.friendInfoList?.length) {
      obj.friendInfoList = message.friendInfoList.map((e) => scharacterFriendInfo.toJSON(e));
    }
    if (message.loopFlag !== 0) {
      obj.loopFlag = Math.round(message.loopFlag);
    }
    if (message.totalUserCount !== 0) {
      obj.totalUserCount = Math.round(message.totalUserCount);
    }
    if (message.lobbyLocateCount !== 0) {
      obj.lobbyLocateCount = Math.round(message.lobbyLocateCount);
    }
    if (message.dungeonLocateCount !== 0) {
      obj.dungeonLocateCount = Math.round(message.dungeonLocateCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendListAllRes>, I>>(base?: I): ss2cFriendListAllRes {
    return ss2cFriendListAllRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendListAllRes>, I>>(object: I): ss2cFriendListAllRes {
    const message = createBasess2cFriendListAllRes();
    message.friendInfoList = object.friendInfoList?.map((e) => scharacterFriendInfo.fromPartial(e)) || [];
    message.loopFlag = object.loopFlag ?? 0;
    message.totalUserCount = object.totalUserCount ?? 0;
    message.lobbyLocateCount = object.lobbyLocateCount ?? 0;
    message.dungeonLocateCount = object.dungeonLocateCount ?? 0;
    return message;
  },
};

function createBasesc2sFriendFindReq(): sc2sFriendFindReq {
  return { nickName: undefined };
}

export const sc2sFriendFindReq = {
  encode(message: sc2sFriendFindReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sFriendFindReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sFriendFindReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sFriendFindReq {
    return { nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined };
  },

  toJSON(message: sc2sFriendFindReq): unknown {
    const obj: any = {};
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sFriendFindReq>, I>>(base?: I): sc2sFriendFindReq {
    return sc2sFriendFindReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sFriendFindReq>, I>>(object: I): sc2sFriendFindReq {
    const message = createBasesc2sFriendFindReq();
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    return message;
  },
};

function createBasess2cFriendFindRes(): ss2cFriendFindRes {
  return { result: 0, friendInfo: undefined };
}

export const ss2cFriendFindRes = {
  encode(message: ss2cFriendFindRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.friendInfo !== undefined) {
      scharacterFriendInfo.encode(message.friendInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendFindRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendFindRes();
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

          message.friendInfo = scharacterFriendInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cFriendFindRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      friendInfo: isSet(object.friendInfo) ? scharacterFriendInfo.fromJSON(object.friendInfo) : undefined,
    };
  },

  toJSON(message: ss2cFriendFindRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.friendInfo !== undefined) {
      obj.friendInfo = scharacterFriendInfo.toJSON(message.friendInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendFindRes>, I>>(base?: I): ss2cFriendFindRes {
    return ss2cFriendFindRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendFindRes>, I>>(object: I): ss2cFriendFindRes {
    const message = createBasess2cFriendFindRes();
    message.result = object.result ?? 0;
    message.friendInfo = (object.friendInfo !== undefined && object.friendInfo !== null)
      ? scharacterFriendInfo.fromPartial(object.friendInfo)
      : undefined;
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
