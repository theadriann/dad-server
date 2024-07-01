/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { saccountNickname, scharacterFriendInfo } from "./_Character";

export const protobufPackage = "DC.Packet";

export interface sc2sFriendCheckAccountnicknameReq {
  accountNickname: string;
}

export interface ss2cFriendCheckAccountnicknameRes {
  result: number;
}

export interface sc2sFriendCreateAccountnicknameReq {
  accountNickname: string;
}

export interface ss2cFriendCreateAccountnicknameRes {
  result: number;
  accountNickname: string;
}

export interface sc2sFriendSetStatusReq {
  status: number;
  temporary: number;
}

export interface ss2cFriendSetStatusRes {
  result: number;
  status: number;
}

export interface sc2sFriendSetPrivacyReq {
  privacy: number;
}

export interface ss2cFriendSetPrivacyRes {
  result: number;
  privacy: number;
}

export interface sc2sFriendInviteReq {
  accountId: string;
}

export interface ss2cFriendInviteRes {
  result: number;
}

export interface sc2sFriendInviteByAccountnicknameReq {
  accountNickname: string;
}

export interface ss2cFriendInviteByAccountnicknameRes {
  result: number;
}

export interface sc2sFriendInviteAcceptReq {
  accountIds: string[];
}

export interface ss2cFriendInviteAcceptRes {
  result: number;
}

export interface sc2sFriendInviteDeclineReq {
  accountIds: string[];
}

export interface ss2cFriendInviteDeclineRes {
  result: number;
}

export interface sc2sFriendInviteCancelReq {
  accountIds: string[];
}

export interface ss2cFriendInviteCancelRes {
  result: number;
}

export interface sc2sFriendDelFriendReq {
  accountId: string;
}

export interface ss2cFriendDelFriendRes {
  result: number;
}

export interface sfriendAccountInfo {
  accountId: string;
  accountNickname: string;
}

export interface sfriendInfo {
  accountInfo: sfriendAccountInfo | undefined;
  characterId: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
  gender: number;
  level: number;
  status: number;
  locationStatus: number;
  PartyMemeberCount: number;
  PartyMaxMemeberCount: number;
}

export interface sfriendAcceptInfo {
  accountInfo: sfriendAccountInfo | undefined;
  characterId: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
  gender: number;
  level: number;
  status: number;
}

export interface sfriendRequestInfo {
  accountInfo: sfriendAccountInfo | undefined;
  characterId: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
  gender: number;
  level: number;
  status: number;
}

export interface ss2cFriendInfoNot {
  accountNickname: string;
  status: number;
  privacy: number;
}

export interface ss2cFriendSetFriendInfosNot {
  infos: sfriendInfo[];
}

export interface ss2cFriendDelFriendInfosNot {
  accountIds: string[];
}

export interface ss2cFriendSetAcceptInfosNot {
  infos: sfriendAcceptInfo[];
}

export interface ss2cFriendDelAcceptInfosNot {
  accountIds: string[];
}

export interface ss2cFriendSetInviteInfosNot {
  infos: sfriendRequestInfo[];
}

export interface ss2cFriendDelInviteInfosNot {
  accountIds: string[];
}

export interface ss2cFriendSetStatusNot {
  accountId: string;
  status: number;
}

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
  accountNickname: string;
}

export interface ss2cFriendFindRes {
  result: number;
  friendInfo: scharacterFriendInfo | undefined;
}

function createBasesc2sFriendCheckAccountnicknameReq(): sc2sFriendCheckAccountnicknameReq {
  return { accountNickname: "" };
}

export const sc2sFriendCheckAccountnicknameReq = {
  encode(message: sc2sFriendCheckAccountnicknameReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountNickname !== "") {
      writer.uint32(10).string(message.accountNickname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sFriendCheckAccountnicknameReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sFriendCheckAccountnicknameReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountNickname = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sFriendCheckAccountnicknameReq {
    return { accountNickname: isSet(object.accountNickname) ? String(object.accountNickname) : "" };
  },

  toJSON(message: sc2sFriendCheckAccountnicknameReq): unknown {
    const obj: any = {};
    if (message.accountNickname !== "") {
      obj.accountNickname = message.accountNickname;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sFriendCheckAccountnicknameReq>, I>>(
    base?: I,
  ): sc2sFriendCheckAccountnicknameReq {
    return sc2sFriendCheckAccountnicknameReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sFriendCheckAccountnicknameReq>, I>>(
    object: I,
  ): sc2sFriendCheckAccountnicknameReq {
    const message = createBasesc2sFriendCheckAccountnicknameReq();
    message.accountNickname = object.accountNickname ?? "";
    return message;
  },
};

function createBasess2cFriendCheckAccountnicknameRes(): ss2cFriendCheckAccountnicknameRes {
  return { result: 0 };
}

export const ss2cFriendCheckAccountnicknameRes = {
  encode(message: ss2cFriendCheckAccountnicknameRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendCheckAccountnicknameRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendCheckAccountnicknameRes();
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

  fromJSON(object: any): ss2cFriendCheckAccountnicknameRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cFriendCheckAccountnicknameRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendCheckAccountnicknameRes>, I>>(
    base?: I,
  ): ss2cFriendCheckAccountnicknameRes {
    return ss2cFriendCheckAccountnicknameRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendCheckAccountnicknameRes>, I>>(
    object: I,
  ): ss2cFriendCheckAccountnicknameRes {
    const message = createBasess2cFriendCheckAccountnicknameRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sFriendCreateAccountnicknameReq(): sc2sFriendCreateAccountnicknameReq {
  return { accountNickname: "" };
}

export const sc2sFriendCreateAccountnicknameReq = {
  encode(message: sc2sFriendCreateAccountnicknameReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountNickname !== "") {
      writer.uint32(10).string(message.accountNickname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sFriendCreateAccountnicknameReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sFriendCreateAccountnicknameReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountNickname = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sFriendCreateAccountnicknameReq {
    return { accountNickname: isSet(object.accountNickname) ? String(object.accountNickname) : "" };
  },

  toJSON(message: sc2sFriendCreateAccountnicknameReq): unknown {
    const obj: any = {};
    if (message.accountNickname !== "") {
      obj.accountNickname = message.accountNickname;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sFriendCreateAccountnicknameReq>, I>>(
    base?: I,
  ): sc2sFriendCreateAccountnicknameReq {
    return sc2sFriendCreateAccountnicknameReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sFriendCreateAccountnicknameReq>, I>>(
    object: I,
  ): sc2sFriendCreateAccountnicknameReq {
    const message = createBasesc2sFriendCreateAccountnicknameReq();
    message.accountNickname = object.accountNickname ?? "";
    return message;
  },
};

function createBasess2cFriendCreateAccountnicknameRes(): ss2cFriendCreateAccountnicknameRes {
  return { result: 0, accountNickname: "" };
}

export const ss2cFriendCreateAccountnicknameRes = {
  encode(message: ss2cFriendCreateAccountnicknameRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.accountNickname !== "") {
      writer.uint32(18).string(message.accountNickname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendCreateAccountnicknameRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendCreateAccountnicknameRes();
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

          message.accountNickname = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cFriendCreateAccountnicknameRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      accountNickname: isSet(object.accountNickname) ? String(object.accountNickname) : "",
    };
  },

  toJSON(message: ss2cFriendCreateAccountnicknameRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.accountNickname !== "") {
      obj.accountNickname = message.accountNickname;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendCreateAccountnicknameRes>, I>>(
    base?: I,
  ): ss2cFriendCreateAccountnicknameRes {
    return ss2cFriendCreateAccountnicknameRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendCreateAccountnicknameRes>, I>>(
    object: I,
  ): ss2cFriendCreateAccountnicknameRes {
    const message = createBasess2cFriendCreateAccountnicknameRes();
    message.result = object.result ?? 0;
    message.accountNickname = object.accountNickname ?? "";
    return message;
  },
};

function createBasesc2sFriendSetStatusReq(): sc2sFriendSetStatusReq {
  return { status: 0, temporary: 0 };
}

export const sc2sFriendSetStatusReq = {
  encode(message: sc2sFriendSetStatusReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).uint32(message.status);
    }
    if (message.temporary !== 0) {
      writer.uint32(16).uint32(message.temporary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sFriendSetStatusReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sFriendSetStatusReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.temporary = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sFriendSetStatusReq {
    return {
      status: isSet(object.status) ? Number(object.status) : 0,
      temporary: isSet(object.temporary) ? Number(object.temporary) : 0,
    };
  },

  toJSON(message: sc2sFriendSetStatusReq): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.temporary !== 0) {
      obj.temporary = Math.round(message.temporary);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sFriendSetStatusReq>, I>>(base?: I): sc2sFriendSetStatusReq {
    return sc2sFriendSetStatusReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sFriendSetStatusReq>, I>>(object: I): sc2sFriendSetStatusReq {
    const message = createBasesc2sFriendSetStatusReq();
    message.status = object.status ?? 0;
    message.temporary = object.temporary ?? 0;
    return message;
  },
};

function createBasess2cFriendSetStatusRes(): ss2cFriendSetStatusRes {
  return { result: 0, status: 0 };
}

export const ss2cFriendSetStatusRes = {
  encode(message: ss2cFriendSetStatusRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.status !== 0) {
      writer.uint32(16).uint32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendSetStatusRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendSetStatusRes();
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

          message.status = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cFriendSetStatusRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      status: isSet(object.status) ? Number(object.status) : 0,
    };
  },

  toJSON(message: ss2cFriendSetStatusRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendSetStatusRes>, I>>(base?: I): ss2cFriendSetStatusRes {
    return ss2cFriendSetStatusRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendSetStatusRes>, I>>(object: I): ss2cFriendSetStatusRes {
    const message = createBasess2cFriendSetStatusRes();
    message.result = object.result ?? 0;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBasesc2sFriendSetPrivacyReq(): sc2sFriendSetPrivacyReq {
  return { privacy: 0 };
}

export const sc2sFriendSetPrivacyReq = {
  encode(message: sc2sFriendSetPrivacyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privacy !== 0) {
      writer.uint32(8).uint32(message.privacy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sFriendSetPrivacyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sFriendSetPrivacyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.privacy = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sFriendSetPrivacyReq {
    return { privacy: isSet(object.privacy) ? Number(object.privacy) : 0 };
  },

  toJSON(message: sc2sFriendSetPrivacyReq): unknown {
    const obj: any = {};
    if (message.privacy !== 0) {
      obj.privacy = Math.round(message.privacy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sFriendSetPrivacyReq>, I>>(base?: I): sc2sFriendSetPrivacyReq {
    return sc2sFriendSetPrivacyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sFriendSetPrivacyReq>, I>>(object: I): sc2sFriendSetPrivacyReq {
    const message = createBasesc2sFriendSetPrivacyReq();
    message.privacy = object.privacy ?? 0;
    return message;
  },
};

function createBasess2cFriendSetPrivacyRes(): ss2cFriendSetPrivacyRes {
  return { result: 0, privacy: 0 };
}

export const ss2cFriendSetPrivacyRes = {
  encode(message: ss2cFriendSetPrivacyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.privacy !== 0) {
      writer.uint32(16).uint32(message.privacy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendSetPrivacyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendSetPrivacyRes();
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

          message.privacy = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cFriendSetPrivacyRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      privacy: isSet(object.privacy) ? Number(object.privacy) : 0,
    };
  },

  toJSON(message: ss2cFriendSetPrivacyRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.privacy !== 0) {
      obj.privacy = Math.round(message.privacy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendSetPrivacyRes>, I>>(base?: I): ss2cFriendSetPrivacyRes {
    return ss2cFriendSetPrivacyRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendSetPrivacyRes>, I>>(object: I): ss2cFriendSetPrivacyRes {
    const message = createBasess2cFriendSetPrivacyRes();
    message.result = object.result ?? 0;
    message.privacy = object.privacy ?? 0;
    return message;
  },
};

function createBasesc2sFriendInviteReq(): sc2sFriendInviteReq {
  return { accountId: "" };
}

export const sc2sFriendInviteReq = {
  encode(message: sc2sFriendInviteReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sFriendInviteReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sFriendInviteReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sFriendInviteReq {
    return { accountId: isSet(object.accountId) ? String(object.accountId) : "" };
  },

  toJSON(message: sc2sFriendInviteReq): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sFriendInviteReq>, I>>(base?: I): sc2sFriendInviteReq {
    return sc2sFriendInviteReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sFriendInviteReq>, I>>(object: I): sc2sFriendInviteReq {
    const message = createBasesc2sFriendInviteReq();
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBasess2cFriendInviteRes(): ss2cFriendInviteRes {
  return { result: 0 };
}

export const ss2cFriendInviteRes = {
  encode(message: ss2cFriendInviteRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendInviteRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendInviteRes();
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

  fromJSON(object: any): ss2cFriendInviteRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cFriendInviteRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendInviteRes>, I>>(base?: I): ss2cFriendInviteRes {
    return ss2cFriendInviteRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendInviteRes>, I>>(object: I): ss2cFriendInviteRes {
    const message = createBasess2cFriendInviteRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sFriendInviteByAccountnicknameReq(): sc2sFriendInviteByAccountnicknameReq {
  return { accountNickname: "" };
}

export const sc2sFriendInviteByAccountnicknameReq = {
  encode(message: sc2sFriendInviteByAccountnicknameReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountNickname !== "") {
      writer.uint32(10).string(message.accountNickname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sFriendInviteByAccountnicknameReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sFriendInviteByAccountnicknameReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountNickname = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sFriendInviteByAccountnicknameReq {
    return { accountNickname: isSet(object.accountNickname) ? String(object.accountNickname) : "" };
  },

  toJSON(message: sc2sFriendInviteByAccountnicknameReq): unknown {
    const obj: any = {};
    if (message.accountNickname !== "") {
      obj.accountNickname = message.accountNickname;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sFriendInviteByAccountnicknameReq>, I>>(
    base?: I,
  ): sc2sFriendInviteByAccountnicknameReq {
    return sc2sFriendInviteByAccountnicknameReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sFriendInviteByAccountnicknameReq>, I>>(
    object: I,
  ): sc2sFriendInviteByAccountnicknameReq {
    const message = createBasesc2sFriendInviteByAccountnicknameReq();
    message.accountNickname = object.accountNickname ?? "";
    return message;
  },
};

function createBasess2cFriendInviteByAccountnicknameRes(): ss2cFriendInviteByAccountnicknameRes {
  return { result: 0 };
}

export const ss2cFriendInviteByAccountnicknameRes = {
  encode(message: ss2cFriendInviteByAccountnicknameRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendInviteByAccountnicknameRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendInviteByAccountnicknameRes();
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

  fromJSON(object: any): ss2cFriendInviteByAccountnicknameRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cFriendInviteByAccountnicknameRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendInviteByAccountnicknameRes>, I>>(
    base?: I,
  ): ss2cFriendInviteByAccountnicknameRes {
    return ss2cFriendInviteByAccountnicknameRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendInviteByAccountnicknameRes>, I>>(
    object: I,
  ): ss2cFriendInviteByAccountnicknameRes {
    const message = createBasess2cFriendInviteByAccountnicknameRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sFriendInviteAcceptReq(): sc2sFriendInviteAcceptReq {
  return { accountIds: [] };
}

export const sc2sFriendInviteAcceptReq = {
  encode(message: sc2sFriendInviteAcceptReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accountIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sFriendInviteAcceptReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sFriendInviteAcceptReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sFriendInviteAcceptReq {
    return { accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: sc2sFriendInviteAcceptReq): unknown {
    const obj: any = {};
    if (message.accountIds?.length) {
      obj.accountIds = message.accountIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sFriendInviteAcceptReq>, I>>(base?: I): sc2sFriendInviteAcceptReq {
    return sc2sFriendInviteAcceptReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sFriendInviteAcceptReq>, I>>(object: I): sc2sFriendInviteAcceptReq {
    const message = createBasesc2sFriendInviteAcceptReq();
    message.accountIds = object.accountIds?.map((e) => e) || [];
    return message;
  },
};

function createBasess2cFriendInviteAcceptRes(): ss2cFriendInviteAcceptRes {
  return { result: 0 };
}

export const ss2cFriendInviteAcceptRes = {
  encode(message: ss2cFriendInviteAcceptRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendInviteAcceptRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendInviteAcceptRes();
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

  fromJSON(object: any): ss2cFriendInviteAcceptRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cFriendInviteAcceptRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendInviteAcceptRes>, I>>(base?: I): ss2cFriendInviteAcceptRes {
    return ss2cFriendInviteAcceptRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendInviteAcceptRes>, I>>(object: I): ss2cFriendInviteAcceptRes {
    const message = createBasess2cFriendInviteAcceptRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sFriendInviteDeclineReq(): sc2sFriendInviteDeclineReq {
  return { accountIds: [] };
}

export const sc2sFriendInviteDeclineReq = {
  encode(message: sc2sFriendInviteDeclineReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accountIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sFriendInviteDeclineReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sFriendInviteDeclineReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sFriendInviteDeclineReq {
    return { accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: sc2sFriendInviteDeclineReq): unknown {
    const obj: any = {};
    if (message.accountIds?.length) {
      obj.accountIds = message.accountIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sFriendInviteDeclineReq>, I>>(base?: I): sc2sFriendInviteDeclineReq {
    return sc2sFriendInviteDeclineReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sFriendInviteDeclineReq>, I>>(object: I): sc2sFriendInviteDeclineReq {
    const message = createBasesc2sFriendInviteDeclineReq();
    message.accountIds = object.accountIds?.map((e) => e) || [];
    return message;
  },
};

function createBasess2cFriendInviteDeclineRes(): ss2cFriendInviteDeclineRes {
  return { result: 0 };
}

export const ss2cFriendInviteDeclineRes = {
  encode(message: ss2cFriendInviteDeclineRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendInviteDeclineRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendInviteDeclineRes();
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

  fromJSON(object: any): ss2cFriendInviteDeclineRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cFriendInviteDeclineRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendInviteDeclineRes>, I>>(base?: I): ss2cFriendInviteDeclineRes {
    return ss2cFriendInviteDeclineRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendInviteDeclineRes>, I>>(object: I): ss2cFriendInviteDeclineRes {
    const message = createBasess2cFriendInviteDeclineRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sFriendInviteCancelReq(): sc2sFriendInviteCancelReq {
  return { accountIds: [] };
}

export const sc2sFriendInviteCancelReq = {
  encode(message: sc2sFriendInviteCancelReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accountIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sFriendInviteCancelReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sFriendInviteCancelReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sFriendInviteCancelReq {
    return { accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: sc2sFriendInviteCancelReq): unknown {
    const obj: any = {};
    if (message.accountIds?.length) {
      obj.accountIds = message.accountIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sFriendInviteCancelReq>, I>>(base?: I): sc2sFriendInviteCancelReq {
    return sc2sFriendInviteCancelReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sFriendInviteCancelReq>, I>>(object: I): sc2sFriendInviteCancelReq {
    const message = createBasesc2sFriendInviteCancelReq();
    message.accountIds = object.accountIds?.map((e) => e) || [];
    return message;
  },
};

function createBasess2cFriendInviteCancelRes(): ss2cFriendInviteCancelRes {
  return { result: 0 };
}

export const ss2cFriendInviteCancelRes = {
  encode(message: ss2cFriendInviteCancelRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendInviteCancelRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendInviteCancelRes();
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

  fromJSON(object: any): ss2cFriendInviteCancelRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cFriendInviteCancelRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendInviteCancelRes>, I>>(base?: I): ss2cFriendInviteCancelRes {
    return ss2cFriendInviteCancelRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendInviteCancelRes>, I>>(object: I): ss2cFriendInviteCancelRes {
    const message = createBasess2cFriendInviteCancelRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sFriendDelFriendReq(): sc2sFriendDelFriendReq {
  return { accountId: "" };
}

export const sc2sFriendDelFriendReq = {
  encode(message: sc2sFriendDelFriendReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sFriendDelFriendReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sFriendDelFriendReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sFriendDelFriendReq {
    return { accountId: isSet(object.accountId) ? String(object.accountId) : "" };
  },

  toJSON(message: sc2sFriendDelFriendReq): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sFriendDelFriendReq>, I>>(base?: I): sc2sFriendDelFriendReq {
    return sc2sFriendDelFriendReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sFriendDelFriendReq>, I>>(object: I): sc2sFriendDelFriendReq {
    const message = createBasesc2sFriendDelFriendReq();
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBasess2cFriendDelFriendRes(): ss2cFriendDelFriendRes {
  return { result: 0 };
}

export const ss2cFriendDelFriendRes = {
  encode(message: ss2cFriendDelFriendRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendDelFriendRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendDelFriendRes();
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

  fromJSON(object: any): ss2cFriendDelFriendRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cFriendDelFriendRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendDelFriendRes>, I>>(base?: I): ss2cFriendDelFriendRes {
    return ss2cFriendDelFriendRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendDelFriendRes>, I>>(object: I): ss2cFriendDelFriendRes {
    const message = createBasess2cFriendDelFriendRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesfriendAccountInfo(): sfriendAccountInfo {
  return { accountId: "", accountNickname: "" };
}

export const sfriendAccountInfo = {
  encode(message: sfriendAccountInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.accountNickname !== "") {
      writer.uint32(18).string(message.accountNickname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sfriendAccountInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesfriendAccountInfo();
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

          message.accountNickname = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sfriendAccountInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      accountNickname: isSet(object.accountNickname) ? String(object.accountNickname) : "",
    };
  },

  toJSON(message: sfriendAccountInfo): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.accountNickname !== "") {
      obj.accountNickname = message.accountNickname;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sfriendAccountInfo>, I>>(base?: I): sfriendAccountInfo {
    return sfriendAccountInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sfriendAccountInfo>, I>>(object: I): sfriendAccountInfo {
    const message = createBasesfriendAccountInfo();
    message.accountId = object.accountId ?? "";
    message.accountNickname = object.accountNickname ?? "";
    return message;
  },
};

function createBasesfriendInfo(): sfriendInfo {
  return {
    accountInfo: undefined,
    characterId: "",
    nickName: undefined,
    characterClass: "",
    gender: 0,
    level: 0,
    status: 0,
    locationStatus: 0,
    PartyMemeberCount: 0,
    PartyMaxMemeberCount: 0,
  };
}

export const sfriendInfo = {
  encode(message: sfriendInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountInfo !== undefined) {
      sfriendAccountInfo.encode(message.accountInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(26).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(34).string(message.characterClass);
    }
    if (message.gender !== 0) {
      writer.uint32(40).uint32(message.gender);
    }
    if (message.level !== 0) {
      writer.uint32(48).uint32(message.level);
    }
    if (message.status !== 0) {
      writer.uint32(56).uint32(message.status);
    }
    if (message.locationStatus !== 0) {
      writer.uint32(64).uint32(message.locationStatus);
    }
    if (message.PartyMemeberCount !== 0) {
      writer.uint32(72).uint32(message.PartyMemeberCount);
    }
    if (message.PartyMaxMemeberCount !== 0) {
      writer.uint32(80).uint32(message.PartyMaxMemeberCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sfriendInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesfriendInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountInfo = sfriendAccountInfo.decode(reader, reader.uint32());
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

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gender = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.status = reader.uint32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.locationStatus = reader.uint32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.PartyMemeberCount = reader.uint32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.PartyMaxMemeberCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sfriendInfo {
    return {
      accountInfo: isSet(object.accountInfo) ? sfriendAccountInfo.fromJSON(object.accountInfo) : undefined,
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      status: isSet(object.status) ? Number(object.status) : 0,
      locationStatus: isSet(object.locationStatus) ? Number(object.locationStatus) : 0,
      PartyMemeberCount: isSet(object.PartyMemeberCount) ? Number(object.PartyMemeberCount) : 0,
      PartyMaxMemeberCount: isSet(object.PartyMaxMemeberCount) ? Number(object.PartyMaxMemeberCount) : 0,
    };
  },

  toJSON(message: sfriendInfo): unknown {
    const obj: any = {};
    if (message.accountInfo !== undefined) {
      obj.accountInfo = sfriendAccountInfo.toJSON(message.accountInfo);
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    if (message.gender !== 0) {
      obj.gender = Math.round(message.gender);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.locationStatus !== 0) {
      obj.locationStatus = Math.round(message.locationStatus);
    }
    if (message.PartyMemeberCount !== 0) {
      obj.PartyMemeberCount = Math.round(message.PartyMemeberCount);
    }
    if (message.PartyMaxMemeberCount !== 0) {
      obj.PartyMaxMemeberCount = Math.round(message.PartyMaxMemeberCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sfriendInfo>, I>>(base?: I): sfriendInfo {
    return sfriendInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sfriendInfo>, I>>(object: I): sfriendInfo {
    const message = createBasesfriendInfo();
    message.accountInfo = (object.accountInfo !== undefined && object.accountInfo !== null)
      ? sfriendAccountInfo.fromPartial(object.accountInfo)
      : undefined;
    message.characterId = object.characterId ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    message.gender = object.gender ?? 0;
    message.level = object.level ?? 0;
    message.status = object.status ?? 0;
    message.locationStatus = object.locationStatus ?? 0;
    message.PartyMemeberCount = object.PartyMemeberCount ?? 0;
    message.PartyMaxMemeberCount = object.PartyMaxMemeberCount ?? 0;
    return message;
  },
};

function createBasesfriendAcceptInfo(): sfriendAcceptInfo {
  return {
    accountInfo: undefined,
    characterId: "",
    nickName: undefined,
    characterClass: "",
    gender: 0,
    level: 0,
    status: 0,
  };
}

export const sfriendAcceptInfo = {
  encode(message: sfriendAcceptInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountInfo !== undefined) {
      sfriendAccountInfo.encode(message.accountInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(26).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(34).string(message.characterClass);
    }
    if (message.gender !== 0) {
      writer.uint32(40).uint32(message.gender);
    }
    if (message.level !== 0) {
      writer.uint32(48).uint32(message.level);
    }
    if (message.status !== 0) {
      writer.uint32(56).uint32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sfriendAcceptInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesfriendAcceptInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountInfo = sfriendAccountInfo.decode(reader, reader.uint32());
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

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gender = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.status = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sfriendAcceptInfo {
    return {
      accountInfo: isSet(object.accountInfo) ? sfriendAccountInfo.fromJSON(object.accountInfo) : undefined,
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      status: isSet(object.status) ? Number(object.status) : 0,
    };
  },

  toJSON(message: sfriendAcceptInfo): unknown {
    const obj: any = {};
    if (message.accountInfo !== undefined) {
      obj.accountInfo = sfriendAccountInfo.toJSON(message.accountInfo);
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    if (message.gender !== 0) {
      obj.gender = Math.round(message.gender);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sfriendAcceptInfo>, I>>(base?: I): sfriendAcceptInfo {
    return sfriendAcceptInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sfriendAcceptInfo>, I>>(object: I): sfriendAcceptInfo {
    const message = createBasesfriendAcceptInfo();
    message.accountInfo = (object.accountInfo !== undefined && object.accountInfo !== null)
      ? sfriendAccountInfo.fromPartial(object.accountInfo)
      : undefined;
    message.characterId = object.characterId ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    message.gender = object.gender ?? 0;
    message.level = object.level ?? 0;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBasesfriendRequestInfo(): sfriendRequestInfo {
  return {
    accountInfo: undefined,
    characterId: "",
    nickName: undefined,
    characterClass: "",
    gender: 0,
    level: 0,
    status: 0,
  };
}

export const sfriendRequestInfo = {
  encode(message: sfriendRequestInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountInfo !== undefined) {
      sfriendAccountInfo.encode(message.accountInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(26).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(34).string(message.characterClass);
    }
    if (message.gender !== 0) {
      writer.uint32(40).uint32(message.gender);
    }
    if (message.level !== 0) {
      writer.uint32(48).uint32(message.level);
    }
    if (message.status !== 0) {
      writer.uint32(56).uint32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sfriendRequestInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesfriendRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountInfo = sfriendAccountInfo.decode(reader, reader.uint32());
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

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gender = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.status = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sfriendRequestInfo {
    return {
      accountInfo: isSet(object.accountInfo) ? sfriendAccountInfo.fromJSON(object.accountInfo) : undefined,
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      status: isSet(object.status) ? Number(object.status) : 0,
    };
  },

  toJSON(message: sfriendRequestInfo): unknown {
    const obj: any = {};
    if (message.accountInfo !== undefined) {
      obj.accountInfo = sfriendAccountInfo.toJSON(message.accountInfo);
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    if (message.gender !== 0) {
      obj.gender = Math.round(message.gender);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sfriendRequestInfo>, I>>(base?: I): sfriendRequestInfo {
    return sfriendRequestInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sfriendRequestInfo>, I>>(object: I): sfriendRequestInfo {
    const message = createBasesfriendRequestInfo();
    message.accountInfo = (object.accountInfo !== undefined && object.accountInfo !== null)
      ? sfriendAccountInfo.fromPartial(object.accountInfo)
      : undefined;
    message.characterId = object.characterId ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    message.gender = object.gender ?? 0;
    message.level = object.level ?? 0;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBasess2cFriendInfoNot(): ss2cFriendInfoNot {
  return { accountNickname: "", status: 0, privacy: 0 };
}

export const ss2cFriendInfoNot = {
  encode(message: ss2cFriendInfoNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountNickname !== "") {
      writer.uint32(10).string(message.accountNickname);
    }
    if (message.status !== 0) {
      writer.uint32(16).uint32(message.status);
    }
    if (message.privacy !== 0) {
      writer.uint32(24).uint32(message.privacy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendInfoNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendInfoNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountNickname = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.privacy = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cFriendInfoNot {
    return {
      accountNickname: isSet(object.accountNickname) ? String(object.accountNickname) : "",
      status: isSet(object.status) ? Number(object.status) : 0,
      privacy: isSet(object.privacy) ? Number(object.privacy) : 0,
    };
  },

  toJSON(message: ss2cFriendInfoNot): unknown {
    const obj: any = {};
    if (message.accountNickname !== "") {
      obj.accountNickname = message.accountNickname;
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.privacy !== 0) {
      obj.privacy = Math.round(message.privacy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendInfoNot>, I>>(base?: I): ss2cFriendInfoNot {
    return ss2cFriendInfoNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendInfoNot>, I>>(object: I): ss2cFriendInfoNot {
    const message = createBasess2cFriendInfoNot();
    message.accountNickname = object.accountNickname ?? "";
    message.status = object.status ?? 0;
    message.privacy = object.privacy ?? 0;
    return message;
  },
};

function createBasess2cFriendSetFriendInfosNot(): ss2cFriendSetFriendInfosNot {
  return { infos: [] };
}

export const ss2cFriendSetFriendInfosNot = {
  encode(message: ss2cFriendSetFriendInfosNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      sfriendInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendSetFriendInfosNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendSetFriendInfosNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(sfriendInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cFriendSetFriendInfosNot {
    return { infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => sfriendInfo.fromJSON(e)) : [] };
  },

  toJSON(message: ss2cFriendSetFriendInfosNot): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => sfriendInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendSetFriendInfosNot>, I>>(base?: I): ss2cFriendSetFriendInfosNot {
    return ss2cFriendSetFriendInfosNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendSetFriendInfosNot>, I>>(object: I): ss2cFriendSetFriendInfosNot {
    const message = createBasess2cFriendSetFriendInfosNot();
    message.infos = object.infos?.map((e) => sfriendInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cFriendDelFriendInfosNot(): ss2cFriendDelFriendInfosNot {
  return { accountIds: [] };
}

export const ss2cFriendDelFriendInfosNot = {
  encode(message: ss2cFriendDelFriendInfosNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accountIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendDelFriendInfosNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendDelFriendInfosNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cFriendDelFriendInfosNot {
    return { accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: ss2cFriendDelFriendInfosNot): unknown {
    const obj: any = {};
    if (message.accountIds?.length) {
      obj.accountIds = message.accountIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendDelFriendInfosNot>, I>>(base?: I): ss2cFriendDelFriendInfosNot {
    return ss2cFriendDelFriendInfosNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendDelFriendInfosNot>, I>>(object: I): ss2cFriendDelFriendInfosNot {
    const message = createBasess2cFriendDelFriendInfosNot();
    message.accountIds = object.accountIds?.map((e) => e) || [];
    return message;
  },
};

function createBasess2cFriendSetAcceptInfosNot(): ss2cFriendSetAcceptInfosNot {
  return { infos: [] };
}

export const ss2cFriendSetAcceptInfosNot = {
  encode(message: ss2cFriendSetAcceptInfosNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      sfriendAcceptInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendSetAcceptInfosNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendSetAcceptInfosNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(sfriendAcceptInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cFriendSetAcceptInfosNot {
    return { infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => sfriendAcceptInfo.fromJSON(e)) : [] };
  },

  toJSON(message: ss2cFriendSetAcceptInfosNot): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => sfriendAcceptInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendSetAcceptInfosNot>, I>>(base?: I): ss2cFriendSetAcceptInfosNot {
    return ss2cFriendSetAcceptInfosNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendSetAcceptInfosNot>, I>>(object: I): ss2cFriendSetAcceptInfosNot {
    const message = createBasess2cFriendSetAcceptInfosNot();
    message.infos = object.infos?.map((e) => sfriendAcceptInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cFriendDelAcceptInfosNot(): ss2cFriendDelAcceptInfosNot {
  return { accountIds: [] };
}

export const ss2cFriendDelAcceptInfosNot = {
  encode(message: ss2cFriendDelAcceptInfosNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accountIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendDelAcceptInfosNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendDelAcceptInfosNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cFriendDelAcceptInfosNot {
    return { accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: ss2cFriendDelAcceptInfosNot): unknown {
    const obj: any = {};
    if (message.accountIds?.length) {
      obj.accountIds = message.accountIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendDelAcceptInfosNot>, I>>(base?: I): ss2cFriendDelAcceptInfosNot {
    return ss2cFriendDelAcceptInfosNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendDelAcceptInfosNot>, I>>(object: I): ss2cFriendDelAcceptInfosNot {
    const message = createBasess2cFriendDelAcceptInfosNot();
    message.accountIds = object.accountIds?.map((e) => e) || [];
    return message;
  },
};

function createBasess2cFriendSetInviteInfosNot(): ss2cFriendSetInviteInfosNot {
  return { infos: [] };
}

export const ss2cFriendSetInviteInfosNot = {
  encode(message: ss2cFriendSetInviteInfosNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      sfriendRequestInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendSetInviteInfosNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendSetInviteInfosNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(sfriendRequestInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cFriendSetInviteInfosNot {
    return { infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => sfriendRequestInfo.fromJSON(e)) : [] };
  },

  toJSON(message: ss2cFriendSetInviteInfosNot): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => sfriendRequestInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendSetInviteInfosNot>, I>>(base?: I): ss2cFriendSetInviteInfosNot {
    return ss2cFriendSetInviteInfosNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendSetInviteInfosNot>, I>>(object: I): ss2cFriendSetInviteInfosNot {
    const message = createBasess2cFriendSetInviteInfosNot();
    message.infos = object.infos?.map((e) => sfriendRequestInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cFriendDelInviteInfosNot(): ss2cFriendDelInviteInfosNot {
  return { accountIds: [] };
}

export const ss2cFriendDelInviteInfosNot = {
  encode(message: ss2cFriendDelInviteInfosNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accountIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendDelInviteInfosNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendDelInviteInfosNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cFriendDelInviteInfosNot {
    return { accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: ss2cFriendDelInviteInfosNot): unknown {
    const obj: any = {};
    if (message.accountIds?.length) {
      obj.accountIds = message.accountIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendDelInviteInfosNot>, I>>(base?: I): ss2cFriendDelInviteInfosNot {
    return ss2cFriendDelInviteInfosNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendDelInviteInfosNot>, I>>(object: I): ss2cFriendDelInviteInfosNot {
    const message = createBasess2cFriendDelInviteInfosNot();
    message.accountIds = object.accountIds?.map((e) => e) || [];
    return message;
  },
};

function createBasess2cFriendSetStatusNot(): ss2cFriendSetStatusNot {
  return { accountId: "", status: 0 };
}

export const ss2cFriendSetStatusNot = {
  encode(message: ss2cFriendSetStatusNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.status !== 0) {
      writer.uint32(16).uint32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cFriendSetStatusNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cFriendSetStatusNot();
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
          if (tag !== 16) {
            break;
          }

          message.status = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cFriendSetStatusNot {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      status: isSet(object.status) ? Number(object.status) : 0,
    };
  },

  toJSON(message: ss2cFriendSetStatusNot): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cFriendSetStatusNot>, I>>(base?: I): ss2cFriendSetStatusNot {
    return ss2cFriendSetStatusNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cFriendSetStatusNot>, I>>(object: I): ss2cFriendSetStatusNot {
    const message = createBasess2cFriendSetStatusNot();
    message.accountId = object.accountId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

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
  return { accountNickname: "" };
}

export const sc2sFriendFindReq = {
  encode(message: sc2sFriendFindReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountNickname !== "") {
      writer.uint32(10).string(message.accountNickname);
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

          message.accountNickname = reader.string();
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
    return { accountNickname: isSet(object.accountNickname) ? String(object.accountNickname) : "" };
  },

  toJSON(message: sc2sFriendFindReq): unknown {
    const obj: any = {};
    if (message.accountNickname !== "") {
      obj.accountNickname = message.accountNickname;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sFriendFindReq>, I>>(base?: I): sc2sFriendFindReq {
    return sc2sFriendFindReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sFriendFindReq>, I>>(object: I): sc2sFriendFindReq {
    const message = createBasesc2sFriendFindReq();
    message.accountNickname = object.accountNickname ?? "";
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
