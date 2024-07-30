/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { saccountNickname, scharacterPartyInfo } from "./_Character";
import { SCHATDATA } from "./_Chat";
import { SItem } from "./_Item";

export const protobufPackage = "DC.Packet";

export enum partyInviteAnswer {
  INVITE_ANSWER_NONE = 0,
  INVITE_ANSWER_ACEEPT = 1,
  INVITE_ANSWER_CANCEL = 2,
  UNRECOGNIZED = -1,
}

export function partyInviteAnswerFromJSON(object: any): partyInviteAnswer {
  switch (object) {
    case 0:
    case "INVITE_ANSWER_NONE":
      return partyInviteAnswer.INVITE_ANSWER_NONE;
    case 1:
    case "INVITE_ANSWER_ACEEPT":
      return partyInviteAnswer.INVITE_ANSWER_ACEEPT;
    case 2:
    case "INVITE_ANSWER_CANCEL":
      return partyInviteAnswer.INVITE_ANSWER_CANCEL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return partyInviteAnswer.UNRECOGNIZED;
  }
}

export function partyInviteAnswerToJSON(object: partyInviteAnswer): string {
  switch (object) {
    case partyInviteAnswer.INVITE_ANSWER_NONE:
      return "INVITE_ANSWER_NONE";
    case partyInviteAnswer.INVITE_ANSWER_ACEEPT:
      return "INVITE_ANSWER_ACEEPT";
    case partyInviteAnswer.INVITE_ANSWER_CANCEL:
      return "INVITE_ANSWER_CANCEL";
    case partyInviteAnswer.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface sc2sPartyInviteReq {
  findNickName: saccountNickname | undefined;
  findAccountId: string;
  findCharacterId: string;
}

export interface ss2cPartyInviteRes {
  result: number;
}

export interface ss2cPartyInviteNot {
  InviteeNickName: saccountNickname | undefined;
  InviteeAccountId: string;
  InviteeCharacterId: string;
}

export interface sc2sPartyInviteAnswerReq {
  inviteResult: number;
  returnAccountId: string;
}

export interface ss2cPartyInviteAnswerRes {
  result: number;
}

export interface ss2cPartyInviteAnswerResultNot {
  nickName: saccountNickname | undefined;
  inviteResult: number;
}

export interface sc2sPartyExitReq {
}

export interface ss2cPartyExitRes {
  result: number;
}

export interface ss2cPartyMemberInfoNot {
  playPartyUserInfoData: scharacterPartyInfo[];
}

export interface sc2sPartyReadyReq {
  isReady: number;
}

export interface ss2cPartyReadyRes {
  result: number;
  restrictionMS: number;
}

export interface ss2cPartyEquipItemChangeNot {
  accountId: string;
  characterId: string;
  oldItems: SItem[];
  newItems: SItem[];
}

export interface ss2cPartyRegionChangeNot {
  region: number;
}

export interface ss2cPartyLocationUpdateNot {
  accountId: string;
  characterId: string;
  updateLocation: number;
}

export interface ss2cPartyCharacterSkinListNot {
  accountId: string;
  characterId: string;
  characterSkinIdList: string[];
}

export interface ss2cPartyCharacterSkinChangeNot {
  accountId: string;
  characterId: string;
  oldCharacterSkinId: string;
  newCharacterSkinId: string;
}

export interface ss2cPartyItemSkinListNot {
  accountId: string;
  characterId: string;
  itemSkinIdList: string[];
}

export interface ss2cPartyItemSkinChangeNot {
  accountId: string;
  characterId: string;
  oldItemSkinId: string;
  newItemSkinId: string;
}

export interface ss2cPartyArmorSkinListNot {
  accountId: string;
  characterId: string;
  armorSkinIdList: string[];
}

export interface ss2cPartyArmorSkinChangeNot {
  accountId: string;
  characterId: string;
  oldItemSkinId: string;
  newItemSkinId: string;
}

export interface ss2cPartyGameTypeChangeNot {
  gameTypeIndex: number;
}

export interface sc2sPartyMemberKickReq {
  accountId: string;
  characterId: string;
}

export interface ss2cPartyMemberKickRes {
  result: number;
}

export interface sc2sPartyChatReq {
  chatData: SCHATDATA | undefined;
}

export interface ss2cPartyChatRes {
  result: number;
}

export interface ss2cPartyChatNot {
  chatData: SCHATDATA | undefined;
  time: number;
}

export interface ss2cPartyReadyChangeNot {
  accountId: string;
  characterId: string;
  isReady: number;
}

export interface ss2cPartyKickedOutNot {
}

export interface ss2cPartyMemberLobbyEmoteNot {
  accountId: string;
  characterId: string;
  lobbyEmoteIdList: string[];
}

export interface sc2sPartyStartLobbyEmoteReq {
  lobbyEmoteId: string;
}

export interface ss2cPartyStartLobbyEmoteRes {
  result: number;
}

export interface ss2cPartyStartLobbyEmoteNot {
  accountId: string;
  characterId: string;
  lobbyEmoteId: string;
}

export interface ss2cPartyGearScoreChangeNot {
  accountId: string;
  characterId: string;
  gearScore: number;
}

function createBasesc2sPartyInviteReq(): sc2sPartyInviteReq {
  return { findNickName: undefined, findAccountId: "", findCharacterId: "" };
}

export const sc2sPartyInviteReq = {
  encode(message: sc2sPartyInviteReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.findNickName !== undefined) {
      saccountNickname.encode(message.findNickName, writer.uint32(10).fork()).ldelim();
    }
    if (message.findAccountId !== "") {
      writer.uint32(18).string(message.findAccountId);
    }
    if (message.findCharacterId !== "") {
      writer.uint32(26).string(message.findCharacterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sPartyInviteReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sPartyInviteReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.findNickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.findAccountId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.findCharacterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sPartyInviteReq {
    return {
      findNickName: isSet(object.findNickName) ? saccountNickname.fromJSON(object.findNickName) : undefined,
      findAccountId: isSet(object.findAccountId) ? String(object.findAccountId) : "",
      findCharacterId: isSet(object.findCharacterId) ? String(object.findCharacterId) : "",
    };
  },

  toJSON(message: sc2sPartyInviteReq): unknown {
    const obj: any = {};
    if (message.findNickName !== undefined) {
      obj.findNickName = saccountNickname.toJSON(message.findNickName);
    }
    if (message.findAccountId !== "") {
      obj.findAccountId = message.findAccountId;
    }
    if (message.findCharacterId !== "") {
      obj.findCharacterId = message.findCharacterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sPartyInviteReq>, I>>(base?: I): sc2sPartyInviteReq {
    return sc2sPartyInviteReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sPartyInviteReq>, I>>(object: I): sc2sPartyInviteReq {
    const message = createBasesc2sPartyInviteReq();
    message.findNickName = (object.findNickName !== undefined && object.findNickName !== null)
      ? saccountNickname.fromPartial(object.findNickName)
      : undefined;
    message.findAccountId = object.findAccountId ?? "";
    message.findCharacterId = object.findCharacterId ?? "";
    return message;
  },
};

function createBasess2cPartyInviteRes(): ss2cPartyInviteRes {
  return { result: 0 };
}

export const ss2cPartyInviteRes = {
  encode(message: ss2cPartyInviteRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyInviteRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyInviteRes();
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

  fromJSON(object: any): ss2cPartyInviteRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cPartyInviteRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyInviteRes>, I>>(base?: I): ss2cPartyInviteRes {
    return ss2cPartyInviteRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyInviteRes>, I>>(object: I): ss2cPartyInviteRes {
    const message = createBasess2cPartyInviteRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasess2cPartyInviteNot(): ss2cPartyInviteNot {
  return { InviteeNickName: undefined, InviteeAccountId: "", InviteeCharacterId: "" };
}

export const ss2cPartyInviteNot = {
  encode(message: ss2cPartyInviteNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.InviteeNickName !== undefined) {
      saccountNickname.encode(message.InviteeNickName, writer.uint32(10).fork()).ldelim();
    }
    if (message.InviteeAccountId !== "") {
      writer.uint32(18).string(message.InviteeAccountId);
    }
    if (message.InviteeCharacterId !== "") {
      writer.uint32(26).string(message.InviteeCharacterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyInviteNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyInviteNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.InviteeNickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.InviteeAccountId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.InviteeCharacterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyInviteNot {
    return {
      InviteeNickName: isSet(object.InviteeNickName) ? saccountNickname.fromJSON(object.InviteeNickName) : undefined,
      InviteeAccountId: isSet(object.InviteeAccountId) ? String(object.InviteeAccountId) : "",
      InviteeCharacterId: isSet(object.InviteeCharacterId) ? String(object.InviteeCharacterId) : "",
    };
  },

  toJSON(message: ss2cPartyInviteNot): unknown {
    const obj: any = {};
    if (message.InviteeNickName !== undefined) {
      obj.InviteeNickName = saccountNickname.toJSON(message.InviteeNickName);
    }
    if (message.InviteeAccountId !== "") {
      obj.InviteeAccountId = message.InviteeAccountId;
    }
    if (message.InviteeCharacterId !== "") {
      obj.InviteeCharacterId = message.InviteeCharacterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyInviteNot>, I>>(base?: I): ss2cPartyInviteNot {
    return ss2cPartyInviteNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyInviteNot>, I>>(object: I): ss2cPartyInviteNot {
    const message = createBasess2cPartyInviteNot();
    message.InviteeNickName = (object.InviteeNickName !== undefined && object.InviteeNickName !== null)
      ? saccountNickname.fromPartial(object.InviteeNickName)
      : undefined;
    message.InviteeAccountId = object.InviteeAccountId ?? "";
    message.InviteeCharacterId = object.InviteeCharacterId ?? "";
    return message;
  },
};

function createBasesc2sPartyInviteAnswerReq(): sc2sPartyInviteAnswerReq {
  return { inviteResult: 0, returnAccountId: "" };
}

export const sc2sPartyInviteAnswerReq = {
  encode(message: sc2sPartyInviteAnswerReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteResult !== 0) {
      writer.uint32(8).uint32(message.inviteResult);
    }
    if (message.returnAccountId !== "") {
      writer.uint32(18).string(message.returnAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sPartyInviteAnswerReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sPartyInviteAnswerReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inviteResult = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.returnAccountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sPartyInviteAnswerReq {
    return {
      inviteResult: isSet(object.inviteResult) ? Number(object.inviteResult) : 0,
      returnAccountId: isSet(object.returnAccountId) ? String(object.returnAccountId) : "",
    };
  },

  toJSON(message: sc2sPartyInviteAnswerReq): unknown {
    const obj: any = {};
    if (message.inviteResult !== 0) {
      obj.inviteResult = Math.round(message.inviteResult);
    }
    if (message.returnAccountId !== "") {
      obj.returnAccountId = message.returnAccountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sPartyInviteAnswerReq>, I>>(base?: I): sc2sPartyInviteAnswerReq {
    return sc2sPartyInviteAnswerReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sPartyInviteAnswerReq>, I>>(object: I): sc2sPartyInviteAnswerReq {
    const message = createBasesc2sPartyInviteAnswerReq();
    message.inviteResult = object.inviteResult ?? 0;
    message.returnAccountId = object.returnAccountId ?? "";
    return message;
  },
};

function createBasess2cPartyInviteAnswerRes(): ss2cPartyInviteAnswerRes {
  return { result: 0 };
}

export const ss2cPartyInviteAnswerRes = {
  encode(message: ss2cPartyInviteAnswerRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyInviteAnswerRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyInviteAnswerRes();
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

  fromJSON(object: any): ss2cPartyInviteAnswerRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cPartyInviteAnswerRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyInviteAnswerRes>, I>>(base?: I): ss2cPartyInviteAnswerRes {
    return ss2cPartyInviteAnswerRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyInviteAnswerRes>, I>>(object: I): ss2cPartyInviteAnswerRes {
    const message = createBasess2cPartyInviteAnswerRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasess2cPartyInviteAnswerResultNot(): ss2cPartyInviteAnswerResultNot {
  return { nickName: undefined, inviteResult: 0 };
}

export const ss2cPartyInviteAnswerResultNot = {
  encode(message: ss2cPartyInviteAnswerResultNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(10).fork()).ldelim();
    }
    if (message.inviteResult !== 0) {
      writer.uint32(16).uint32(message.inviteResult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyInviteAnswerResultNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyInviteAnswerResultNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.inviteResult = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyInviteAnswerResultNot {
    return {
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      inviteResult: isSet(object.inviteResult) ? Number(object.inviteResult) : 0,
    };
  },

  toJSON(message: ss2cPartyInviteAnswerResultNot): unknown {
    const obj: any = {};
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
    }
    if (message.inviteResult !== 0) {
      obj.inviteResult = Math.round(message.inviteResult);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyInviteAnswerResultNot>, I>>(base?: I): ss2cPartyInviteAnswerResultNot {
    return ss2cPartyInviteAnswerResultNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyInviteAnswerResultNot>, I>>(
    object: I,
  ): ss2cPartyInviteAnswerResultNot {
    const message = createBasess2cPartyInviteAnswerResultNot();
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.inviteResult = object.inviteResult ?? 0;
    return message;
  },
};

function createBasesc2sPartyExitReq(): sc2sPartyExitReq {
  return {};
}

export const sc2sPartyExitReq = {
  encode(_: sc2sPartyExitReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sPartyExitReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sPartyExitReq();
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

  fromJSON(_: any): sc2sPartyExitReq {
    return {};
  },

  toJSON(_: sc2sPartyExitReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sPartyExitReq>, I>>(base?: I): sc2sPartyExitReq {
    return sc2sPartyExitReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sPartyExitReq>, I>>(_: I): sc2sPartyExitReq {
    const message = createBasesc2sPartyExitReq();
    return message;
  },
};

function createBasess2cPartyExitRes(): ss2cPartyExitRes {
  return { result: 0 };
}

export const ss2cPartyExitRes = {
  encode(message: ss2cPartyExitRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyExitRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyExitRes();
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

  fromJSON(object: any): ss2cPartyExitRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cPartyExitRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyExitRes>, I>>(base?: I): ss2cPartyExitRes {
    return ss2cPartyExitRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyExitRes>, I>>(object: I): ss2cPartyExitRes {
    const message = createBasess2cPartyExitRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasess2cPartyMemberInfoNot(): ss2cPartyMemberInfoNot {
  return { playPartyUserInfoData: [] };
}

export const ss2cPartyMemberInfoNot = {
  encode(message: ss2cPartyMemberInfoNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playPartyUserInfoData) {
      scharacterPartyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyMemberInfoNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyMemberInfoNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playPartyUserInfoData.push(scharacterPartyInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyMemberInfoNot {
    return {
      playPartyUserInfoData: Array.isArray(object?.playPartyUserInfoData)
        ? object.playPartyUserInfoData.map((e: any) => scharacterPartyInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cPartyMemberInfoNot): unknown {
    const obj: any = {};
    if (message.playPartyUserInfoData?.length) {
      obj.playPartyUserInfoData = message.playPartyUserInfoData.map((e) => scharacterPartyInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyMemberInfoNot>, I>>(base?: I): ss2cPartyMemberInfoNot {
    return ss2cPartyMemberInfoNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyMemberInfoNot>, I>>(object: I): ss2cPartyMemberInfoNot {
    const message = createBasess2cPartyMemberInfoNot();
    message.playPartyUserInfoData = object.playPartyUserInfoData?.map((e) => scharacterPartyInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sPartyReadyReq(): sc2sPartyReadyReq {
  return { isReady: 0 };
}

export const sc2sPartyReadyReq = {
  encode(message: sc2sPartyReadyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isReady !== 0) {
      writer.uint32(8).uint32(message.isReady);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sPartyReadyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sPartyReadyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isReady = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sPartyReadyReq {
    return { isReady: isSet(object.isReady) ? Number(object.isReady) : 0 };
  },

  toJSON(message: sc2sPartyReadyReq): unknown {
    const obj: any = {};
    if (message.isReady !== 0) {
      obj.isReady = Math.round(message.isReady);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sPartyReadyReq>, I>>(base?: I): sc2sPartyReadyReq {
    return sc2sPartyReadyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sPartyReadyReq>, I>>(object: I): sc2sPartyReadyReq {
    const message = createBasesc2sPartyReadyReq();
    message.isReady = object.isReady ?? 0;
    return message;
  },
};

function createBasess2cPartyReadyRes(): ss2cPartyReadyRes {
  return { result: 0, restrictionMS: 0 };
}

export const ss2cPartyReadyRes = {
  encode(message: ss2cPartyReadyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.restrictionMS !== 0) {
      writer.uint32(16).uint32(message.restrictionMS);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyReadyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyReadyRes();
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

          message.restrictionMS = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyReadyRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      restrictionMS: isSet(object.restrictionMS) ? Number(object.restrictionMS) : 0,
    };
  },

  toJSON(message: ss2cPartyReadyRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.restrictionMS !== 0) {
      obj.restrictionMS = Math.round(message.restrictionMS);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyReadyRes>, I>>(base?: I): ss2cPartyReadyRes {
    return ss2cPartyReadyRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyReadyRes>, I>>(object: I): ss2cPartyReadyRes {
    const message = createBasess2cPartyReadyRes();
    message.result = object.result ?? 0;
    message.restrictionMS = object.restrictionMS ?? 0;
    return message;
  },
};

function createBasess2cPartyEquipItemChangeNot(): ss2cPartyEquipItemChangeNot {
  return { accountId: "", characterId: "", oldItems: [], newItems: [] };
}

export const ss2cPartyEquipItemChangeNot = {
  encode(message: ss2cPartyEquipItemChangeNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    for (const v of message.oldItems) {
      SItem.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.newItems) {
      SItem.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyEquipItemChangeNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyEquipItemChangeNot();
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

          message.oldItems.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.newItems.push(SItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyEquipItemChangeNot {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      oldItems: Array.isArray(object?.oldItems) ? object.oldItems.map((e: any) => SItem.fromJSON(e)) : [],
      newItems: Array.isArray(object?.newItems) ? object.newItems.map((e: any) => SItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cPartyEquipItemChangeNot): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.oldItems?.length) {
      obj.oldItems = message.oldItems.map((e) => SItem.toJSON(e));
    }
    if (message.newItems?.length) {
      obj.newItems = message.newItems.map((e) => SItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyEquipItemChangeNot>, I>>(base?: I): ss2cPartyEquipItemChangeNot {
    return ss2cPartyEquipItemChangeNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyEquipItemChangeNot>, I>>(object: I): ss2cPartyEquipItemChangeNot {
    const message = createBasess2cPartyEquipItemChangeNot();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.oldItems = object.oldItems?.map((e) => SItem.fromPartial(e)) || [];
    message.newItems = object.newItems?.map((e) => SItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cPartyRegionChangeNot(): ss2cPartyRegionChangeNot {
  return { region: 0 };
}

export const ss2cPartyRegionChangeNot = {
  encode(message: ss2cPartyRegionChangeNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.region !== 0) {
      writer.uint32(8).uint32(message.region);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyRegionChangeNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyRegionChangeNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.region = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyRegionChangeNot {
    return { region: isSet(object.region) ? Number(object.region) : 0 };
  },

  toJSON(message: ss2cPartyRegionChangeNot): unknown {
    const obj: any = {};
    if (message.region !== 0) {
      obj.region = Math.round(message.region);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyRegionChangeNot>, I>>(base?: I): ss2cPartyRegionChangeNot {
    return ss2cPartyRegionChangeNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyRegionChangeNot>, I>>(object: I): ss2cPartyRegionChangeNot {
    const message = createBasess2cPartyRegionChangeNot();
    message.region = object.region ?? 0;
    return message;
  },
};

function createBasess2cPartyLocationUpdateNot(): ss2cPartyLocationUpdateNot {
  return { accountId: "", characterId: "", updateLocation: 0 };
}

export const ss2cPartyLocationUpdateNot = {
  encode(message: ss2cPartyLocationUpdateNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.updateLocation !== 0) {
      writer.uint32(24).uint32(message.updateLocation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyLocationUpdateNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyLocationUpdateNot();
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
          if (tag !== 24) {
            break;
          }

          message.updateLocation = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyLocationUpdateNot {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      updateLocation: isSet(object.updateLocation) ? Number(object.updateLocation) : 0,
    };
  },

  toJSON(message: ss2cPartyLocationUpdateNot): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.updateLocation !== 0) {
      obj.updateLocation = Math.round(message.updateLocation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyLocationUpdateNot>, I>>(base?: I): ss2cPartyLocationUpdateNot {
    return ss2cPartyLocationUpdateNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyLocationUpdateNot>, I>>(object: I): ss2cPartyLocationUpdateNot {
    const message = createBasess2cPartyLocationUpdateNot();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.updateLocation = object.updateLocation ?? 0;
    return message;
  },
};

function createBasess2cPartyCharacterSkinListNot(): ss2cPartyCharacterSkinListNot {
  return { accountId: "", characterId: "", characterSkinIdList: [] };
}

export const ss2cPartyCharacterSkinListNot = {
  encode(message: ss2cPartyCharacterSkinListNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    for (const v of message.characterSkinIdList) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyCharacterSkinListNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyCharacterSkinListNot();
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

          message.characterSkinIdList.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyCharacterSkinListNot {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      characterSkinIdList: Array.isArray(object?.characterSkinIdList)
        ? object.characterSkinIdList.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ss2cPartyCharacterSkinListNot): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.characterSkinIdList?.length) {
      obj.characterSkinIdList = message.characterSkinIdList;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyCharacterSkinListNot>, I>>(base?: I): ss2cPartyCharacterSkinListNot {
    return ss2cPartyCharacterSkinListNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyCharacterSkinListNot>, I>>(
    object: I,
  ): ss2cPartyCharacterSkinListNot {
    const message = createBasess2cPartyCharacterSkinListNot();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.characterSkinIdList = object.characterSkinIdList?.map((e) => e) || [];
    return message;
  },
};

function createBasess2cPartyCharacterSkinChangeNot(): ss2cPartyCharacterSkinChangeNot {
  return { accountId: "", characterId: "", oldCharacterSkinId: "", newCharacterSkinId: "" };
}

export const ss2cPartyCharacterSkinChangeNot = {
  encode(message: ss2cPartyCharacterSkinChangeNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.oldCharacterSkinId !== "") {
      writer.uint32(26).string(message.oldCharacterSkinId);
    }
    if (message.newCharacterSkinId !== "") {
      writer.uint32(34).string(message.newCharacterSkinId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyCharacterSkinChangeNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyCharacterSkinChangeNot();
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

          message.oldCharacterSkinId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.newCharacterSkinId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyCharacterSkinChangeNot {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      oldCharacterSkinId: isSet(object.oldCharacterSkinId) ? String(object.oldCharacterSkinId) : "",
      newCharacterSkinId: isSet(object.newCharacterSkinId) ? String(object.newCharacterSkinId) : "",
    };
  },

  toJSON(message: ss2cPartyCharacterSkinChangeNot): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.oldCharacterSkinId !== "") {
      obj.oldCharacterSkinId = message.oldCharacterSkinId;
    }
    if (message.newCharacterSkinId !== "") {
      obj.newCharacterSkinId = message.newCharacterSkinId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyCharacterSkinChangeNot>, I>>(base?: I): ss2cPartyCharacterSkinChangeNot {
    return ss2cPartyCharacterSkinChangeNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyCharacterSkinChangeNot>, I>>(
    object: I,
  ): ss2cPartyCharacterSkinChangeNot {
    const message = createBasess2cPartyCharacterSkinChangeNot();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.oldCharacterSkinId = object.oldCharacterSkinId ?? "";
    message.newCharacterSkinId = object.newCharacterSkinId ?? "";
    return message;
  },
};

function createBasess2cPartyItemSkinListNot(): ss2cPartyItemSkinListNot {
  return { accountId: "", characterId: "", itemSkinIdList: [] };
}

export const ss2cPartyItemSkinListNot = {
  encode(message: ss2cPartyItemSkinListNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    for (const v of message.itemSkinIdList) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyItemSkinListNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyItemSkinListNot();
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

          message.itemSkinIdList.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyItemSkinListNot {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      itemSkinIdList: Array.isArray(object?.itemSkinIdList) ? object.itemSkinIdList.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ss2cPartyItemSkinListNot): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.itemSkinIdList?.length) {
      obj.itemSkinIdList = message.itemSkinIdList;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyItemSkinListNot>, I>>(base?: I): ss2cPartyItemSkinListNot {
    return ss2cPartyItemSkinListNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyItemSkinListNot>, I>>(object: I): ss2cPartyItemSkinListNot {
    const message = createBasess2cPartyItemSkinListNot();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.itemSkinIdList = object.itemSkinIdList?.map((e) => e) || [];
    return message;
  },
};

function createBasess2cPartyItemSkinChangeNot(): ss2cPartyItemSkinChangeNot {
  return { accountId: "", characterId: "", oldItemSkinId: "", newItemSkinId: "" };
}

export const ss2cPartyItemSkinChangeNot = {
  encode(message: ss2cPartyItemSkinChangeNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.oldItemSkinId !== "") {
      writer.uint32(26).string(message.oldItemSkinId);
    }
    if (message.newItemSkinId !== "") {
      writer.uint32(34).string(message.newItemSkinId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyItemSkinChangeNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyItemSkinChangeNot();
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

          message.oldItemSkinId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.newItemSkinId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyItemSkinChangeNot {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      oldItemSkinId: isSet(object.oldItemSkinId) ? String(object.oldItemSkinId) : "",
      newItemSkinId: isSet(object.newItemSkinId) ? String(object.newItemSkinId) : "",
    };
  },

  toJSON(message: ss2cPartyItemSkinChangeNot): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.oldItemSkinId !== "") {
      obj.oldItemSkinId = message.oldItemSkinId;
    }
    if (message.newItemSkinId !== "") {
      obj.newItemSkinId = message.newItemSkinId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyItemSkinChangeNot>, I>>(base?: I): ss2cPartyItemSkinChangeNot {
    return ss2cPartyItemSkinChangeNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyItemSkinChangeNot>, I>>(object: I): ss2cPartyItemSkinChangeNot {
    const message = createBasess2cPartyItemSkinChangeNot();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.oldItemSkinId = object.oldItemSkinId ?? "";
    message.newItemSkinId = object.newItemSkinId ?? "";
    return message;
  },
};

function createBasess2cPartyArmorSkinListNot(): ss2cPartyArmorSkinListNot {
  return { accountId: "", characterId: "", armorSkinIdList: [] };
}

export const ss2cPartyArmorSkinListNot = {
  encode(message: ss2cPartyArmorSkinListNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    for (const v of message.armorSkinIdList) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyArmorSkinListNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyArmorSkinListNot();
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

          message.armorSkinIdList.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyArmorSkinListNot {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      armorSkinIdList: Array.isArray(object?.armorSkinIdList) ? object.armorSkinIdList.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ss2cPartyArmorSkinListNot): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.armorSkinIdList?.length) {
      obj.armorSkinIdList = message.armorSkinIdList;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyArmorSkinListNot>, I>>(base?: I): ss2cPartyArmorSkinListNot {
    return ss2cPartyArmorSkinListNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyArmorSkinListNot>, I>>(object: I): ss2cPartyArmorSkinListNot {
    const message = createBasess2cPartyArmorSkinListNot();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.armorSkinIdList = object.armorSkinIdList?.map((e) => e) || [];
    return message;
  },
};

function createBasess2cPartyArmorSkinChangeNot(): ss2cPartyArmorSkinChangeNot {
  return { accountId: "", characterId: "", oldItemSkinId: "", newItemSkinId: "" };
}

export const ss2cPartyArmorSkinChangeNot = {
  encode(message: ss2cPartyArmorSkinChangeNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.oldItemSkinId !== "") {
      writer.uint32(26).string(message.oldItemSkinId);
    }
    if (message.newItemSkinId !== "") {
      writer.uint32(34).string(message.newItemSkinId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyArmorSkinChangeNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyArmorSkinChangeNot();
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

          message.oldItemSkinId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.newItemSkinId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyArmorSkinChangeNot {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      oldItemSkinId: isSet(object.oldItemSkinId) ? String(object.oldItemSkinId) : "",
      newItemSkinId: isSet(object.newItemSkinId) ? String(object.newItemSkinId) : "",
    };
  },

  toJSON(message: ss2cPartyArmorSkinChangeNot): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.oldItemSkinId !== "") {
      obj.oldItemSkinId = message.oldItemSkinId;
    }
    if (message.newItemSkinId !== "") {
      obj.newItemSkinId = message.newItemSkinId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyArmorSkinChangeNot>, I>>(base?: I): ss2cPartyArmorSkinChangeNot {
    return ss2cPartyArmorSkinChangeNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyArmorSkinChangeNot>, I>>(object: I): ss2cPartyArmorSkinChangeNot {
    const message = createBasess2cPartyArmorSkinChangeNot();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.oldItemSkinId = object.oldItemSkinId ?? "";
    message.newItemSkinId = object.newItemSkinId ?? "";
    return message;
  },
};

function createBasess2cPartyGameTypeChangeNot(): ss2cPartyGameTypeChangeNot {
  return { gameTypeIndex: 0 };
}

export const ss2cPartyGameTypeChangeNot = {
  encode(message: ss2cPartyGameTypeChangeNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameTypeIndex !== 0) {
      writer.uint32(8).uint32(message.gameTypeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyGameTypeChangeNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyGameTypeChangeNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gameTypeIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyGameTypeChangeNot {
    return { gameTypeIndex: isSet(object.gameTypeIndex) ? Number(object.gameTypeIndex) : 0 };
  },

  toJSON(message: ss2cPartyGameTypeChangeNot): unknown {
    const obj: any = {};
    if (message.gameTypeIndex !== 0) {
      obj.gameTypeIndex = Math.round(message.gameTypeIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyGameTypeChangeNot>, I>>(base?: I): ss2cPartyGameTypeChangeNot {
    return ss2cPartyGameTypeChangeNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyGameTypeChangeNot>, I>>(object: I): ss2cPartyGameTypeChangeNot {
    const message = createBasess2cPartyGameTypeChangeNot();
    message.gameTypeIndex = object.gameTypeIndex ?? 0;
    return message;
  },
};

function createBasesc2sPartyMemberKickReq(): sc2sPartyMemberKickReq {
  return { accountId: "", characterId: "" };
}

export const sc2sPartyMemberKickReq = {
  encode(message: sc2sPartyMemberKickReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sPartyMemberKickReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sPartyMemberKickReq();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sPartyMemberKickReq {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
    };
  },

  toJSON(message: sc2sPartyMemberKickReq): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sPartyMemberKickReq>, I>>(base?: I): sc2sPartyMemberKickReq {
    return sc2sPartyMemberKickReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sPartyMemberKickReq>, I>>(object: I): sc2sPartyMemberKickReq {
    const message = createBasesc2sPartyMemberKickReq();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    return message;
  },
};

function createBasess2cPartyMemberKickRes(): ss2cPartyMemberKickRes {
  return { result: 0 };
}

export const ss2cPartyMemberKickRes = {
  encode(message: ss2cPartyMemberKickRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyMemberKickRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyMemberKickRes();
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

  fromJSON(object: any): ss2cPartyMemberKickRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cPartyMemberKickRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyMemberKickRes>, I>>(base?: I): ss2cPartyMemberKickRes {
    return ss2cPartyMemberKickRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyMemberKickRes>, I>>(object: I): ss2cPartyMemberKickRes {
    const message = createBasess2cPartyMemberKickRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sPartyChatReq(): sc2sPartyChatReq {
  return { chatData: undefined };
}

export const sc2sPartyChatReq = {
  encode(message: sc2sPartyChatReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatData !== undefined) {
      SCHATDATA.encode(message.chatData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sPartyChatReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sPartyChatReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatData = SCHATDATA.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sPartyChatReq {
    return { chatData: isSet(object.chatData) ? SCHATDATA.fromJSON(object.chatData) : undefined };
  },

  toJSON(message: sc2sPartyChatReq): unknown {
    const obj: any = {};
    if (message.chatData !== undefined) {
      obj.chatData = SCHATDATA.toJSON(message.chatData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sPartyChatReq>, I>>(base?: I): sc2sPartyChatReq {
    return sc2sPartyChatReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sPartyChatReq>, I>>(object: I): sc2sPartyChatReq {
    const message = createBasesc2sPartyChatReq();
    message.chatData = (object.chatData !== undefined && object.chatData !== null)
      ? SCHATDATA.fromPartial(object.chatData)
      : undefined;
    return message;
  },
};

function createBasess2cPartyChatRes(): ss2cPartyChatRes {
  return { result: 0 };
}

export const ss2cPartyChatRes = {
  encode(message: ss2cPartyChatRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyChatRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyChatRes();
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

  fromJSON(object: any): ss2cPartyChatRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cPartyChatRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyChatRes>, I>>(base?: I): ss2cPartyChatRes {
    return ss2cPartyChatRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyChatRes>, I>>(object: I): ss2cPartyChatRes {
    const message = createBasess2cPartyChatRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasess2cPartyChatNot(): ss2cPartyChatNot {
  return { chatData: undefined, time: 0 };
}

export const ss2cPartyChatNot = {
  encode(message: ss2cPartyChatNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatData !== undefined) {
      SCHATDATA.encode(message.chatData, writer.uint32(10).fork()).ldelim();
    }
    if (message.time !== 0) {
      writer.uint32(16).uint64(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyChatNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyChatNot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chatData = SCHATDATA.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.time = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyChatNot {
    return {
      chatData: isSet(object.chatData) ? SCHATDATA.fromJSON(object.chatData) : undefined,
      time: isSet(object.time) ? Number(object.time) : 0,
    };
  },

  toJSON(message: ss2cPartyChatNot): unknown {
    const obj: any = {};
    if (message.chatData !== undefined) {
      obj.chatData = SCHATDATA.toJSON(message.chatData);
    }
    if (message.time !== 0) {
      obj.time = Math.round(message.time);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyChatNot>, I>>(base?: I): ss2cPartyChatNot {
    return ss2cPartyChatNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyChatNot>, I>>(object: I): ss2cPartyChatNot {
    const message = createBasess2cPartyChatNot();
    message.chatData = (object.chatData !== undefined && object.chatData !== null)
      ? SCHATDATA.fromPartial(object.chatData)
      : undefined;
    message.time = object.time ?? 0;
    return message;
  },
};

function createBasess2cPartyReadyChangeNot(): ss2cPartyReadyChangeNot {
  return { accountId: "", characterId: "", isReady: 0 };
}

export const ss2cPartyReadyChangeNot = {
  encode(message: ss2cPartyReadyChangeNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.isReady !== 0) {
      writer.uint32(24).uint32(message.isReady);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyReadyChangeNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyReadyChangeNot();
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
          if (tag !== 24) {
            break;
          }

          message.isReady = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyReadyChangeNot {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      isReady: isSet(object.isReady) ? Number(object.isReady) : 0,
    };
  },

  toJSON(message: ss2cPartyReadyChangeNot): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.isReady !== 0) {
      obj.isReady = Math.round(message.isReady);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyReadyChangeNot>, I>>(base?: I): ss2cPartyReadyChangeNot {
    return ss2cPartyReadyChangeNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyReadyChangeNot>, I>>(object: I): ss2cPartyReadyChangeNot {
    const message = createBasess2cPartyReadyChangeNot();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.isReady = object.isReady ?? 0;
    return message;
  },
};

function createBasess2cPartyKickedOutNot(): ss2cPartyKickedOutNot {
  return {};
}

export const ss2cPartyKickedOutNot = {
  encode(_: ss2cPartyKickedOutNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyKickedOutNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyKickedOutNot();
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

  fromJSON(_: any): ss2cPartyKickedOutNot {
    return {};
  },

  toJSON(_: ss2cPartyKickedOutNot): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyKickedOutNot>, I>>(base?: I): ss2cPartyKickedOutNot {
    return ss2cPartyKickedOutNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyKickedOutNot>, I>>(_: I): ss2cPartyKickedOutNot {
    const message = createBasess2cPartyKickedOutNot();
    return message;
  },
};

function createBasess2cPartyMemberLobbyEmoteNot(): ss2cPartyMemberLobbyEmoteNot {
  return { accountId: "", characterId: "", lobbyEmoteIdList: [] };
}

export const ss2cPartyMemberLobbyEmoteNot = {
  encode(message: ss2cPartyMemberLobbyEmoteNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    for (const v of message.lobbyEmoteIdList) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyMemberLobbyEmoteNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyMemberLobbyEmoteNot();
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

          message.lobbyEmoteIdList.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyMemberLobbyEmoteNot {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      lobbyEmoteIdList: Array.isArray(object?.lobbyEmoteIdList)
        ? object.lobbyEmoteIdList.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ss2cPartyMemberLobbyEmoteNot): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.lobbyEmoteIdList?.length) {
      obj.lobbyEmoteIdList = message.lobbyEmoteIdList;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyMemberLobbyEmoteNot>, I>>(base?: I): ss2cPartyMemberLobbyEmoteNot {
    return ss2cPartyMemberLobbyEmoteNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyMemberLobbyEmoteNot>, I>>(object: I): ss2cPartyMemberLobbyEmoteNot {
    const message = createBasess2cPartyMemberLobbyEmoteNot();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.lobbyEmoteIdList = object.lobbyEmoteIdList?.map((e) => e) || [];
    return message;
  },
};

function createBasesc2sPartyStartLobbyEmoteReq(): sc2sPartyStartLobbyEmoteReq {
  return { lobbyEmoteId: "" };
}

export const sc2sPartyStartLobbyEmoteReq = {
  encode(message: sc2sPartyStartLobbyEmoteReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyEmoteId !== "") {
      writer.uint32(10).string(message.lobbyEmoteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sPartyStartLobbyEmoteReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sPartyStartLobbyEmoteReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lobbyEmoteId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sPartyStartLobbyEmoteReq {
    return { lobbyEmoteId: isSet(object.lobbyEmoteId) ? String(object.lobbyEmoteId) : "" };
  },

  toJSON(message: sc2sPartyStartLobbyEmoteReq): unknown {
    const obj: any = {};
    if (message.lobbyEmoteId !== "") {
      obj.lobbyEmoteId = message.lobbyEmoteId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sPartyStartLobbyEmoteReq>, I>>(base?: I): sc2sPartyStartLobbyEmoteReq {
    return sc2sPartyStartLobbyEmoteReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sPartyStartLobbyEmoteReq>, I>>(object: I): sc2sPartyStartLobbyEmoteReq {
    const message = createBasesc2sPartyStartLobbyEmoteReq();
    message.lobbyEmoteId = object.lobbyEmoteId ?? "";
    return message;
  },
};

function createBasess2cPartyStartLobbyEmoteRes(): ss2cPartyStartLobbyEmoteRes {
  return { result: 0 };
}

export const ss2cPartyStartLobbyEmoteRes = {
  encode(message: ss2cPartyStartLobbyEmoteRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyStartLobbyEmoteRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyStartLobbyEmoteRes();
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

  fromJSON(object: any): ss2cPartyStartLobbyEmoteRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cPartyStartLobbyEmoteRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyStartLobbyEmoteRes>, I>>(base?: I): ss2cPartyStartLobbyEmoteRes {
    return ss2cPartyStartLobbyEmoteRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyStartLobbyEmoteRes>, I>>(object: I): ss2cPartyStartLobbyEmoteRes {
    const message = createBasess2cPartyStartLobbyEmoteRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasess2cPartyStartLobbyEmoteNot(): ss2cPartyStartLobbyEmoteNot {
  return { accountId: "", characterId: "", lobbyEmoteId: "" };
}

export const ss2cPartyStartLobbyEmoteNot = {
  encode(message: ss2cPartyStartLobbyEmoteNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.lobbyEmoteId !== "") {
      writer.uint32(26).string(message.lobbyEmoteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyStartLobbyEmoteNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyStartLobbyEmoteNot();
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

          message.lobbyEmoteId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyStartLobbyEmoteNot {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      lobbyEmoteId: isSet(object.lobbyEmoteId) ? String(object.lobbyEmoteId) : "",
    };
  },

  toJSON(message: ss2cPartyStartLobbyEmoteNot): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.lobbyEmoteId !== "") {
      obj.lobbyEmoteId = message.lobbyEmoteId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyStartLobbyEmoteNot>, I>>(base?: I): ss2cPartyStartLobbyEmoteNot {
    return ss2cPartyStartLobbyEmoteNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyStartLobbyEmoteNot>, I>>(object: I): ss2cPartyStartLobbyEmoteNot {
    const message = createBasess2cPartyStartLobbyEmoteNot();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.lobbyEmoteId = object.lobbyEmoteId ?? "";
    return message;
  },
};

function createBasess2cPartyGearScoreChangeNot(): ss2cPartyGearScoreChangeNot {
  return { accountId: "", characterId: "", gearScore: 0 };
}

export const ss2cPartyGearScoreChangeNot = {
  encode(message: ss2cPartyGearScoreChangeNot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.gearScore !== 0) {
      writer.uint32(24).uint32(message.gearScore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cPartyGearScoreChangeNot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cPartyGearScoreChangeNot();
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
          if (tag !== 24) {
            break;
          }

          message.gearScore = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cPartyGearScoreChangeNot {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      gearScore: isSet(object.gearScore) ? Number(object.gearScore) : 0,
    };
  },

  toJSON(message: ss2cPartyGearScoreChangeNot): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.gearScore !== 0) {
      obj.gearScore = Math.round(message.gearScore);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cPartyGearScoreChangeNot>, I>>(base?: I): ss2cPartyGearScoreChangeNot {
    return ss2cPartyGearScoreChangeNot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cPartyGearScoreChangeNot>, I>>(object: I): ss2cPartyGearScoreChangeNot {
    const message = createBasess2cPartyGearScoreChangeNot();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.gearScore = object.gearScore ?? 0;
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
