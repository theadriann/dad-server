/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DC.Packet";

export interface sshopCharacterSkinInfo {
  characterSkinId: string;
  isHave: number;
}

export interface sshopItemSkinInfo {
  itemSkinId: string;
  isHave: number;
}

export interface sshopEmoteInfo {
  emoteId: string;
  isHave: number;
}

export interface sshopActionInfo {
  actionId: string;
  isHave: number;
}

export interface sshopLobbyEmoteInfo {
  lobbyEmoteId: string;
  isHave: number;
}

export interface sc2sShopCharacterSkinListReq {
}

export interface ss2cShopCharacterSkinListRes {
  loopFlag: number;
  characterSkinInfoList: sshopCharacterSkinInfo[];
}

export interface sc2sShopItemSkinListReq {
}

export interface ss2cShopItemSkinListRes {
  loopFlag: number;
  itemSkinInfoList: sshopItemSkinInfo[];
}

export interface sc2sShopEmoteListReq {
}

export interface ss2cShopEmoteListRes {
  loopFlag: number;
  emoteInfoList: sshopEmoteInfo[];
}

export interface sc2sShopActionListReq {
}

export interface ss2cShopActionListRes {
  loopFlag: number;
  actionInfoList: sshopActionInfo[];
}

export interface sc2sShopLobbyEmoteListReq {
}

export interface ss2cShopLobbyEmoteListRes {
  loopFlag: number;
  lobbyEmoteInfoList: sshopLobbyEmoteInfo[];
}

export interface sc2sShopCharacterSkinBuyReq {
  buyShopCharacterSkinId: string;
}

export interface ss2cShopCharacterSkinBuyRes {
  result: number;
  buyShopCharacterSkinId: string;
}

export interface sc2sShopItemSkinBuyReq {
  buyShopItemSkinId: string;
}

export interface ss2cShopItemSkinBuyRes {
  result: number;
  buyShopItemSkinId: string;
}

export interface sc2sShopEmoteBuyReq {
  buyShopEmoteId: string;
}

export interface ss2cShopEmoteBuyRes {
  result: number;
  buyShopEmoteId: string;
}

export interface sc2sShopActionBuyReq {
  buyActionId: string;
}

export interface ss2cShopActionBuyRes {
  result: number;
  buyActionId: string;
}

export interface sc2sShopLobbyEmoteBuyReq {
  buyLobbyEmoteId: string;
}

export interface ss2cShopLobbyEmoteBuyRes {
  result: number;
  buyLobbyEmoteId: string;
}

function createBasesshopCharacterSkinInfo(): sshopCharacterSkinInfo {
  return { characterSkinId: "", isHave: 0 };
}

export const sshopCharacterSkinInfo = {
  encode(message: sshopCharacterSkinInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.characterSkinId !== "") {
      writer.uint32(10).string(message.characterSkinId);
    }
    if (message.isHave !== 0) {
      writer.uint32(16).uint32(message.isHave);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sshopCharacterSkinInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesshopCharacterSkinInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.characterSkinId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isHave = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sshopCharacterSkinInfo {
    return {
      characterSkinId: isSet(object.characterSkinId) ? String(object.characterSkinId) : "",
      isHave: isSet(object.isHave) ? Number(object.isHave) : 0,
    };
  },

  toJSON(message: sshopCharacterSkinInfo): unknown {
    const obj: any = {};
    message.characterSkinId !== undefined && (obj.characterSkinId = message.characterSkinId);
    message.isHave !== undefined && (obj.isHave = Math.round(message.isHave));
    return obj;
  },

  create<I extends Exact<DeepPartial<sshopCharacterSkinInfo>, I>>(base?: I): sshopCharacterSkinInfo {
    return sshopCharacterSkinInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sshopCharacterSkinInfo>, I>>(object: I): sshopCharacterSkinInfo {
    const message = createBasesshopCharacterSkinInfo();
    message.characterSkinId = object.characterSkinId ?? "";
    message.isHave = object.isHave ?? 0;
    return message;
  },
};

function createBasesshopItemSkinInfo(): sshopItemSkinInfo {
  return { itemSkinId: "", isHave: 0 };
}

export const sshopItemSkinInfo = {
  encode(message: sshopItemSkinInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemSkinId !== "") {
      writer.uint32(10).string(message.itemSkinId);
    }
    if (message.isHave !== 0) {
      writer.uint32(16).uint32(message.isHave);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sshopItemSkinInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesshopItemSkinInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.itemSkinId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isHave = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sshopItemSkinInfo {
    return {
      itemSkinId: isSet(object.itemSkinId) ? String(object.itemSkinId) : "",
      isHave: isSet(object.isHave) ? Number(object.isHave) : 0,
    };
  },

  toJSON(message: sshopItemSkinInfo): unknown {
    const obj: any = {};
    message.itemSkinId !== undefined && (obj.itemSkinId = message.itemSkinId);
    message.isHave !== undefined && (obj.isHave = Math.round(message.isHave));
    return obj;
  },

  create<I extends Exact<DeepPartial<sshopItemSkinInfo>, I>>(base?: I): sshopItemSkinInfo {
    return sshopItemSkinInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sshopItemSkinInfo>, I>>(object: I): sshopItemSkinInfo {
    const message = createBasesshopItemSkinInfo();
    message.itemSkinId = object.itemSkinId ?? "";
    message.isHave = object.isHave ?? 0;
    return message;
  },
};

function createBasesshopEmoteInfo(): sshopEmoteInfo {
  return { emoteId: "", isHave: 0 };
}

export const sshopEmoteInfo = {
  encode(message: sshopEmoteInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emoteId !== "") {
      writer.uint32(10).string(message.emoteId);
    }
    if (message.isHave !== 0) {
      writer.uint32(16).uint32(message.isHave);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sshopEmoteInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesshopEmoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.emoteId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isHave = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sshopEmoteInfo {
    return {
      emoteId: isSet(object.emoteId) ? String(object.emoteId) : "",
      isHave: isSet(object.isHave) ? Number(object.isHave) : 0,
    };
  },

  toJSON(message: sshopEmoteInfo): unknown {
    const obj: any = {};
    message.emoteId !== undefined && (obj.emoteId = message.emoteId);
    message.isHave !== undefined && (obj.isHave = Math.round(message.isHave));
    return obj;
  },

  create<I extends Exact<DeepPartial<sshopEmoteInfo>, I>>(base?: I): sshopEmoteInfo {
    return sshopEmoteInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sshopEmoteInfo>, I>>(object: I): sshopEmoteInfo {
    const message = createBasesshopEmoteInfo();
    message.emoteId = object.emoteId ?? "";
    message.isHave = object.isHave ?? 0;
    return message;
  },
};

function createBasesshopActionInfo(): sshopActionInfo {
  return { actionId: "", isHave: 0 };
}

export const sshopActionInfo = {
  encode(message: sshopActionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionId !== "") {
      writer.uint32(10).string(message.actionId);
    }
    if (message.isHave !== 0) {
      writer.uint32(16).uint32(message.isHave);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sshopActionInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesshopActionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.actionId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isHave = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sshopActionInfo {
    return {
      actionId: isSet(object.actionId) ? String(object.actionId) : "",
      isHave: isSet(object.isHave) ? Number(object.isHave) : 0,
    };
  },

  toJSON(message: sshopActionInfo): unknown {
    const obj: any = {};
    message.actionId !== undefined && (obj.actionId = message.actionId);
    message.isHave !== undefined && (obj.isHave = Math.round(message.isHave));
    return obj;
  },

  create<I extends Exact<DeepPartial<sshopActionInfo>, I>>(base?: I): sshopActionInfo {
    return sshopActionInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sshopActionInfo>, I>>(object: I): sshopActionInfo {
    const message = createBasesshopActionInfo();
    message.actionId = object.actionId ?? "";
    message.isHave = object.isHave ?? 0;
    return message;
  },
};

function createBasesshopLobbyEmoteInfo(): sshopLobbyEmoteInfo {
  return { lobbyEmoteId: "", isHave: 0 };
}

export const sshopLobbyEmoteInfo = {
  encode(message: sshopLobbyEmoteInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyEmoteId !== "") {
      writer.uint32(10).string(message.lobbyEmoteId);
    }
    if (message.isHave !== 0) {
      writer.uint32(16).uint32(message.isHave);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sshopLobbyEmoteInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesshopLobbyEmoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.lobbyEmoteId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isHave = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sshopLobbyEmoteInfo {
    return {
      lobbyEmoteId: isSet(object.lobbyEmoteId) ? String(object.lobbyEmoteId) : "",
      isHave: isSet(object.isHave) ? Number(object.isHave) : 0,
    };
  },

  toJSON(message: sshopLobbyEmoteInfo): unknown {
    const obj: any = {};
    message.lobbyEmoteId !== undefined && (obj.lobbyEmoteId = message.lobbyEmoteId);
    message.isHave !== undefined && (obj.isHave = Math.round(message.isHave));
    return obj;
  },

  create<I extends Exact<DeepPartial<sshopLobbyEmoteInfo>, I>>(base?: I): sshopLobbyEmoteInfo {
    return sshopLobbyEmoteInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sshopLobbyEmoteInfo>, I>>(object: I): sshopLobbyEmoteInfo {
    const message = createBasesshopLobbyEmoteInfo();
    message.lobbyEmoteId = object.lobbyEmoteId ?? "";
    message.isHave = object.isHave ?? 0;
    return message;
  },
};

function createBasesc2sShopCharacterSkinListReq(): sc2sShopCharacterSkinListReq {
  return {};
}

export const sc2sShopCharacterSkinListReq = {
  encode(_: sc2sShopCharacterSkinListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopCharacterSkinListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopCharacterSkinListReq();
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

  fromJSON(_: any): sc2sShopCharacterSkinListReq {
    return {};
  },

  toJSON(_: sc2sShopCharacterSkinListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopCharacterSkinListReq>, I>>(base?: I): sc2sShopCharacterSkinListReq {
    return sc2sShopCharacterSkinListReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sShopCharacterSkinListReq>, I>>(_: I): sc2sShopCharacterSkinListReq {
    const message = createBasesc2sShopCharacterSkinListReq();
    return message;
  },
};

function createBasess2cShopCharacterSkinListRes(): ss2cShopCharacterSkinListRes {
  return { loopFlag: 0, characterSkinInfoList: [] };
}

export const ss2cShopCharacterSkinListRes = {
  encode(message: ss2cShopCharacterSkinListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loopFlag !== 0) {
      writer.uint32(8).uint32(message.loopFlag);
    }
    for (const v of message.characterSkinInfoList) {
      sshopCharacterSkinInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopCharacterSkinListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopCharacterSkinListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.loopFlag = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.characterSkinInfoList.push(sshopCharacterSkinInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopCharacterSkinListRes {
    return {
      loopFlag: isSet(object.loopFlag) ? Number(object.loopFlag) : 0,
      characterSkinInfoList: Array.isArray(object?.characterSkinInfoList)
        ? object.characterSkinInfoList.map((e: any) => sshopCharacterSkinInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cShopCharacterSkinListRes): unknown {
    const obj: any = {};
    message.loopFlag !== undefined && (obj.loopFlag = Math.round(message.loopFlag));
    if (message.characterSkinInfoList) {
      obj.characterSkinInfoList = message.characterSkinInfoList.map((e) =>
        e ? sshopCharacterSkinInfo.toJSON(e) : undefined
      );
    } else {
      obj.characterSkinInfoList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopCharacterSkinListRes>, I>>(base?: I): ss2cShopCharacterSkinListRes {
    return ss2cShopCharacterSkinListRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cShopCharacterSkinListRes>, I>>(object: I): ss2cShopCharacterSkinListRes {
    const message = createBasess2cShopCharacterSkinListRes();
    message.loopFlag = object.loopFlag ?? 0;
    message.characterSkinInfoList = object.characterSkinInfoList?.map((e) => sshopCharacterSkinInfo.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBasesc2sShopItemSkinListReq(): sc2sShopItemSkinListReq {
  return {};
}

export const sc2sShopItemSkinListReq = {
  encode(_: sc2sShopItemSkinListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopItemSkinListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopItemSkinListReq();
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

  fromJSON(_: any): sc2sShopItemSkinListReq {
    return {};
  },

  toJSON(_: sc2sShopItemSkinListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopItemSkinListReq>, I>>(base?: I): sc2sShopItemSkinListReq {
    return sc2sShopItemSkinListReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sShopItemSkinListReq>, I>>(_: I): sc2sShopItemSkinListReq {
    const message = createBasesc2sShopItemSkinListReq();
    return message;
  },
};

function createBasess2cShopItemSkinListRes(): ss2cShopItemSkinListRes {
  return { loopFlag: 0, itemSkinInfoList: [] };
}

export const ss2cShopItemSkinListRes = {
  encode(message: ss2cShopItemSkinListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loopFlag !== 0) {
      writer.uint32(8).uint32(message.loopFlag);
    }
    for (const v of message.itemSkinInfoList) {
      sshopItemSkinInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopItemSkinListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopItemSkinListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.loopFlag = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.itemSkinInfoList.push(sshopItemSkinInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopItemSkinListRes {
    return {
      loopFlag: isSet(object.loopFlag) ? Number(object.loopFlag) : 0,
      itemSkinInfoList: Array.isArray(object?.itemSkinInfoList)
        ? object.itemSkinInfoList.map((e: any) => sshopItemSkinInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cShopItemSkinListRes): unknown {
    const obj: any = {};
    message.loopFlag !== undefined && (obj.loopFlag = Math.round(message.loopFlag));
    if (message.itemSkinInfoList) {
      obj.itemSkinInfoList = message.itemSkinInfoList.map((e) => e ? sshopItemSkinInfo.toJSON(e) : undefined);
    } else {
      obj.itemSkinInfoList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopItemSkinListRes>, I>>(base?: I): ss2cShopItemSkinListRes {
    return ss2cShopItemSkinListRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cShopItemSkinListRes>, I>>(object: I): ss2cShopItemSkinListRes {
    const message = createBasess2cShopItemSkinListRes();
    message.loopFlag = object.loopFlag ?? 0;
    message.itemSkinInfoList = object.itemSkinInfoList?.map((e) => sshopItemSkinInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sShopEmoteListReq(): sc2sShopEmoteListReq {
  return {};
}

export const sc2sShopEmoteListReq = {
  encode(_: sc2sShopEmoteListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopEmoteListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopEmoteListReq();
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

  fromJSON(_: any): sc2sShopEmoteListReq {
    return {};
  },

  toJSON(_: sc2sShopEmoteListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopEmoteListReq>, I>>(base?: I): sc2sShopEmoteListReq {
    return sc2sShopEmoteListReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sShopEmoteListReq>, I>>(_: I): sc2sShopEmoteListReq {
    const message = createBasesc2sShopEmoteListReq();
    return message;
  },
};

function createBasess2cShopEmoteListRes(): ss2cShopEmoteListRes {
  return { loopFlag: 0, emoteInfoList: [] };
}

export const ss2cShopEmoteListRes = {
  encode(message: ss2cShopEmoteListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loopFlag !== 0) {
      writer.uint32(8).uint32(message.loopFlag);
    }
    for (const v of message.emoteInfoList) {
      sshopEmoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopEmoteListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopEmoteListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.loopFlag = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.emoteInfoList.push(sshopEmoteInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopEmoteListRes {
    return {
      loopFlag: isSet(object.loopFlag) ? Number(object.loopFlag) : 0,
      emoteInfoList: Array.isArray(object?.emoteInfoList)
        ? object.emoteInfoList.map((e: any) => sshopEmoteInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cShopEmoteListRes): unknown {
    const obj: any = {};
    message.loopFlag !== undefined && (obj.loopFlag = Math.round(message.loopFlag));
    if (message.emoteInfoList) {
      obj.emoteInfoList = message.emoteInfoList.map((e) => e ? sshopEmoteInfo.toJSON(e) : undefined);
    } else {
      obj.emoteInfoList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopEmoteListRes>, I>>(base?: I): ss2cShopEmoteListRes {
    return ss2cShopEmoteListRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cShopEmoteListRes>, I>>(object: I): ss2cShopEmoteListRes {
    const message = createBasess2cShopEmoteListRes();
    message.loopFlag = object.loopFlag ?? 0;
    message.emoteInfoList = object.emoteInfoList?.map((e) => sshopEmoteInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sShopActionListReq(): sc2sShopActionListReq {
  return {};
}

export const sc2sShopActionListReq = {
  encode(_: sc2sShopActionListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopActionListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopActionListReq();
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

  fromJSON(_: any): sc2sShopActionListReq {
    return {};
  },

  toJSON(_: sc2sShopActionListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopActionListReq>, I>>(base?: I): sc2sShopActionListReq {
    return sc2sShopActionListReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sShopActionListReq>, I>>(_: I): sc2sShopActionListReq {
    const message = createBasesc2sShopActionListReq();
    return message;
  },
};

function createBasess2cShopActionListRes(): ss2cShopActionListRes {
  return { loopFlag: 0, actionInfoList: [] };
}

export const ss2cShopActionListRes = {
  encode(message: ss2cShopActionListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loopFlag !== 0) {
      writer.uint32(8).uint32(message.loopFlag);
    }
    for (const v of message.actionInfoList) {
      sshopActionInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopActionListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopActionListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.loopFlag = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.actionInfoList.push(sshopActionInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopActionListRes {
    return {
      loopFlag: isSet(object.loopFlag) ? Number(object.loopFlag) : 0,
      actionInfoList: Array.isArray(object?.actionInfoList)
        ? object.actionInfoList.map((e: any) => sshopActionInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cShopActionListRes): unknown {
    const obj: any = {};
    message.loopFlag !== undefined && (obj.loopFlag = Math.round(message.loopFlag));
    if (message.actionInfoList) {
      obj.actionInfoList = message.actionInfoList.map((e) => e ? sshopActionInfo.toJSON(e) : undefined);
    } else {
      obj.actionInfoList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopActionListRes>, I>>(base?: I): ss2cShopActionListRes {
    return ss2cShopActionListRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cShopActionListRes>, I>>(object: I): ss2cShopActionListRes {
    const message = createBasess2cShopActionListRes();
    message.loopFlag = object.loopFlag ?? 0;
    message.actionInfoList = object.actionInfoList?.map((e) => sshopActionInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sShopLobbyEmoteListReq(): sc2sShopLobbyEmoteListReq {
  return {};
}

export const sc2sShopLobbyEmoteListReq = {
  encode(_: sc2sShopLobbyEmoteListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopLobbyEmoteListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopLobbyEmoteListReq();
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

  fromJSON(_: any): sc2sShopLobbyEmoteListReq {
    return {};
  },

  toJSON(_: sc2sShopLobbyEmoteListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopLobbyEmoteListReq>, I>>(base?: I): sc2sShopLobbyEmoteListReq {
    return sc2sShopLobbyEmoteListReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sShopLobbyEmoteListReq>, I>>(_: I): sc2sShopLobbyEmoteListReq {
    const message = createBasesc2sShopLobbyEmoteListReq();
    return message;
  },
};

function createBasess2cShopLobbyEmoteListRes(): ss2cShopLobbyEmoteListRes {
  return { loopFlag: 0, lobbyEmoteInfoList: [] };
}

export const ss2cShopLobbyEmoteListRes = {
  encode(message: ss2cShopLobbyEmoteListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loopFlag !== 0) {
      writer.uint32(8).uint32(message.loopFlag);
    }
    for (const v of message.lobbyEmoteInfoList) {
      sshopLobbyEmoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopLobbyEmoteListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopLobbyEmoteListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.loopFlag = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.lobbyEmoteInfoList.push(sshopLobbyEmoteInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopLobbyEmoteListRes {
    return {
      loopFlag: isSet(object.loopFlag) ? Number(object.loopFlag) : 0,
      lobbyEmoteInfoList: Array.isArray(object?.lobbyEmoteInfoList)
        ? object.lobbyEmoteInfoList.map((e: any) => sshopLobbyEmoteInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cShopLobbyEmoteListRes): unknown {
    const obj: any = {};
    message.loopFlag !== undefined && (obj.loopFlag = Math.round(message.loopFlag));
    if (message.lobbyEmoteInfoList) {
      obj.lobbyEmoteInfoList = message.lobbyEmoteInfoList.map((e) => e ? sshopLobbyEmoteInfo.toJSON(e) : undefined);
    } else {
      obj.lobbyEmoteInfoList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopLobbyEmoteListRes>, I>>(base?: I): ss2cShopLobbyEmoteListRes {
    return ss2cShopLobbyEmoteListRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cShopLobbyEmoteListRes>, I>>(object: I): ss2cShopLobbyEmoteListRes {
    const message = createBasess2cShopLobbyEmoteListRes();
    message.loopFlag = object.loopFlag ?? 0;
    message.lobbyEmoteInfoList = object.lobbyEmoteInfoList?.map((e) => sshopLobbyEmoteInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sShopCharacterSkinBuyReq(): sc2sShopCharacterSkinBuyReq {
  return { buyShopCharacterSkinId: "" };
}

export const sc2sShopCharacterSkinBuyReq = {
  encode(message: sc2sShopCharacterSkinBuyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buyShopCharacterSkinId !== "") {
      writer.uint32(10).string(message.buyShopCharacterSkinId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopCharacterSkinBuyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopCharacterSkinBuyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.buyShopCharacterSkinId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sShopCharacterSkinBuyReq {
    return {
      buyShopCharacterSkinId: isSet(object.buyShopCharacterSkinId) ? String(object.buyShopCharacterSkinId) : "",
    };
  },

  toJSON(message: sc2sShopCharacterSkinBuyReq): unknown {
    const obj: any = {};
    message.buyShopCharacterSkinId !== undefined && (obj.buyShopCharacterSkinId = message.buyShopCharacterSkinId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopCharacterSkinBuyReq>, I>>(base?: I): sc2sShopCharacterSkinBuyReq {
    return sc2sShopCharacterSkinBuyReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sShopCharacterSkinBuyReq>, I>>(object: I): sc2sShopCharacterSkinBuyReq {
    const message = createBasesc2sShopCharacterSkinBuyReq();
    message.buyShopCharacterSkinId = object.buyShopCharacterSkinId ?? "";
    return message;
  },
};

function createBasess2cShopCharacterSkinBuyRes(): ss2cShopCharacterSkinBuyRes {
  return { result: 0, buyShopCharacterSkinId: "" };
}

export const ss2cShopCharacterSkinBuyRes = {
  encode(message: ss2cShopCharacterSkinBuyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.buyShopCharacterSkinId !== "") {
      writer.uint32(18).string(message.buyShopCharacterSkinId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopCharacterSkinBuyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopCharacterSkinBuyRes();
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
          if (tag != 18) {
            break;
          }

          message.buyShopCharacterSkinId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopCharacterSkinBuyRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      buyShopCharacterSkinId: isSet(object.buyShopCharacterSkinId) ? String(object.buyShopCharacterSkinId) : "",
    };
  },

  toJSON(message: ss2cShopCharacterSkinBuyRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.buyShopCharacterSkinId !== undefined && (obj.buyShopCharacterSkinId = message.buyShopCharacterSkinId);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopCharacterSkinBuyRes>, I>>(base?: I): ss2cShopCharacterSkinBuyRes {
    return ss2cShopCharacterSkinBuyRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cShopCharacterSkinBuyRes>, I>>(object: I): ss2cShopCharacterSkinBuyRes {
    const message = createBasess2cShopCharacterSkinBuyRes();
    message.result = object.result ?? 0;
    message.buyShopCharacterSkinId = object.buyShopCharacterSkinId ?? "";
    return message;
  },
};

function createBasesc2sShopItemSkinBuyReq(): sc2sShopItemSkinBuyReq {
  return { buyShopItemSkinId: "" };
}

export const sc2sShopItemSkinBuyReq = {
  encode(message: sc2sShopItemSkinBuyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buyShopItemSkinId !== "") {
      writer.uint32(10).string(message.buyShopItemSkinId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopItemSkinBuyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopItemSkinBuyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.buyShopItemSkinId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sShopItemSkinBuyReq {
    return { buyShopItemSkinId: isSet(object.buyShopItemSkinId) ? String(object.buyShopItemSkinId) : "" };
  },

  toJSON(message: sc2sShopItemSkinBuyReq): unknown {
    const obj: any = {};
    message.buyShopItemSkinId !== undefined && (obj.buyShopItemSkinId = message.buyShopItemSkinId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopItemSkinBuyReq>, I>>(base?: I): sc2sShopItemSkinBuyReq {
    return sc2sShopItemSkinBuyReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sShopItemSkinBuyReq>, I>>(object: I): sc2sShopItemSkinBuyReq {
    const message = createBasesc2sShopItemSkinBuyReq();
    message.buyShopItemSkinId = object.buyShopItemSkinId ?? "";
    return message;
  },
};

function createBasess2cShopItemSkinBuyRes(): ss2cShopItemSkinBuyRes {
  return { result: 0, buyShopItemSkinId: "" };
}

export const ss2cShopItemSkinBuyRes = {
  encode(message: ss2cShopItemSkinBuyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.buyShopItemSkinId !== "") {
      writer.uint32(18).string(message.buyShopItemSkinId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopItemSkinBuyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopItemSkinBuyRes();
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
          if (tag != 18) {
            break;
          }

          message.buyShopItemSkinId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopItemSkinBuyRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      buyShopItemSkinId: isSet(object.buyShopItemSkinId) ? String(object.buyShopItemSkinId) : "",
    };
  },

  toJSON(message: ss2cShopItemSkinBuyRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.buyShopItemSkinId !== undefined && (obj.buyShopItemSkinId = message.buyShopItemSkinId);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopItemSkinBuyRes>, I>>(base?: I): ss2cShopItemSkinBuyRes {
    return ss2cShopItemSkinBuyRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cShopItemSkinBuyRes>, I>>(object: I): ss2cShopItemSkinBuyRes {
    const message = createBasess2cShopItemSkinBuyRes();
    message.result = object.result ?? 0;
    message.buyShopItemSkinId = object.buyShopItemSkinId ?? "";
    return message;
  },
};

function createBasesc2sShopEmoteBuyReq(): sc2sShopEmoteBuyReq {
  return { buyShopEmoteId: "" };
}

export const sc2sShopEmoteBuyReq = {
  encode(message: sc2sShopEmoteBuyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buyShopEmoteId !== "") {
      writer.uint32(10).string(message.buyShopEmoteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopEmoteBuyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopEmoteBuyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.buyShopEmoteId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sShopEmoteBuyReq {
    return { buyShopEmoteId: isSet(object.buyShopEmoteId) ? String(object.buyShopEmoteId) : "" };
  },

  toJSON(message: sc2sShopEmoteBuyReq): unknown {
    const obj: any = {};
    message.buyShopEmoteId !== undefined && (obj.buyShopEmoteId = message.buyShopEmoteId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopEmoteBuyReq>, I>>(base?: I): sc2sShopEmoteBuyReq {
    return sc2sShopEmoteBuyReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sShopEmoteBuyReq>, I>>(object: I): sc2sShopEmoteBuyReq {
    const message = createBasesc2sShopEmoteBuyReq();
    message.buyShopEmoteId = object.buyShopEmoteId ?? "";
    return message;
  },
};

function createBasess2cShopEmoteBuyRes(): ss2cShopEmoteBuyRes {
  return { result: 0, buyShopEmoteId: "" };
}

export const ss2cShopEmoteBuyRes = {
  encode(message: ss2cShopEmoteBuyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.buyShopEmoteId !== "") {
      writer.uint32(18).string(message.buyShopEmoteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopEmoteBuyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopEmoteBuyRes();
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
          if (tag != 18) {
            break;
          }

          message.buyShopEmoteId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopEmoteBuyRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      buyShopEmoteId: isSet(object.buyShopEmoteId) ? String(object.buyShopEmoteId) : "",
    };
  },

  toJSON(message: ss2cShopEmoteBuyRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.buyShopEmoteId !== undefined && (obj.buyShopEmoteId = message.buyShopEmoteId);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopEmoteBuyRes>, I>>(base?: I): ss2cShopEmoteBuyRes {
    return ss2cShopEmoteBuyRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cShopEmoteBuyRes>, I>>(object: I): ss2cShopEmoteBuyRes {
    const message = createBasess2cShopEmoteBuyRes();
    message.result = object.result ?? 0;
    message.buyShopEmoteId = object.buyShopEmoteId ?? "";
    return message;
  },
};

function createBasesc2sShopActionBuyReq(): sc2sShopActionBuyReq {
  return { buyActionId: "" };
}

export const sc2sShopActionBuyReq = {
  encode(message: sc2sShopActionBuyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buyActionId !== "") {
      writer.uint32(10).string(message.buyActionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopActionBuyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopActionBuyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.buyActionId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sShopActionBuyReq {
    return { buyActionId: isSet(object.buyActionId) ? String(object.buyActionId) : "" };
  },

  toJSON(message: sc2sShopActionBuyReq): unknown {
    const obj: any = {};
    message.buyActionId !== undefined && (obj.buyActionId = message.buyActionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopActionBuyReq>, I>>(base?: I): sc2sShopActionBuyReq {
    return sc2sShopActionBuyReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sShopActionBuyReq>, I>>(object: I): sc2sShopActionBuyReq {
    const message = createBasesc2sShopActionBuyReq();
    message.buyActionId = object.buyActionId ?? "";
    return message;
  },
};

function createBasess2cShopActionBuyRes(): ss2cShopActionBuyRes {
  return { result: 0, buyActionId: "" };
}

export const ss2cShopActionBuyRes = {
  encode(message: ss2cShopActionBuyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.buyActionId !== "") {
      writer.uint32(18).string(message.buyActionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopActionBuyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopActionBuyRes();
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
          if (tag != 18) {
            break;
          }

          message.buyActionId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopActionBuyRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      buyActionId: isSet(object.buyActionId) ? String(object.buyActionId) : "",
    };
  },

  toJSON(message: ss2cShopActionBuyRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.buyActionId !== undefined && (obj.buyActionId = message.buyActionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopActionBuyRes>, I>>(base?: I): ss2cShopActionBuyRes {
    return ss2cShopActionBuyRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cShopActionBuyRes>, I>>(object: I): ss2cShopActionBuyRes {
    const message = createBasess2cShopActionBuyRes();
    message.result = object.result ?? 0;
    message.buyActionId = object.buyActionId ?? "";
    return message;
  },
};

function createBasesc2sShopLobbyEmoteBuyReq(): sc2sShopLobbyEmoteBuyReq {
  return { buyLobbyEmoteId: "" };
}

export const sc2sShopLobbyEmoteBuyReq = {
  encode(message: sc2sShopLobbyEmoteBuyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buyLobbyEmoteId !== "") {
      writer.uint32(10).string(message.buyLobbyEmoteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sShopLobbyEmoteBuyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sShopLobbyEmoteBuyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.buyLobbyEmoteId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sShopLobbyEmoteBuyReq {
    return { buyLobbyEmoteId: isSet(object.buyLobbyEmoteId) ? String(object.buyLobbyEmoteId) : "" };
  },

  toJSON(message: sc2sShopLobbyEmoteBuyReq): unknown {
    const obj: any = {};
    message.buyLobbyEmoteId !== undefined && (obj.buyLobbyEmoteId = message.buyLobbyEmoteId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sShopLobbyEmoteBuyReq>, I>>(base?: I): sc2sShopLobbyEmoteBuyReq {
    return sc2sShopLobbyEmoteBuyReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sShopLobbyEmoteBuyReq>, I>>(object: I): sc2sShopLobbyEmoteBuyReq {
    const message = createBasesc2sShopLobbyEmoteBuyReq();
    message.buyLobbyEmoteId = object.buyLobbyEmoteId ?? "";
    return message;
  },
};

function createBasess2cShopLobbyEmoteBuyRes(): ss2cShopLobbyEmoteBuyRes {
  return { result: 0, buyLobbyEmoteId: "" };
}

export const ss2cShopLobbyEmoteBuyRes = {
  encode(message: ss2cShopLobbyEmoteBuyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.buyLobbyEmoteId !== "") {
      writer.uint32(18).string(message.buyLobbyEmoteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cShopLobbyEmoteBuyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cShopLobbyEmoteBuyRes();
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
          if (tag != 18) {
            break;
          }

          message.buyLobbyEmoteId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cShopLobbyEmoteBuyRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      buyLobbyEmoteId: isSet(object.buyLobbyEmoteId) ? String(object.buyLobbyEmoteId) : "",
    };
  },

  toJSON(message: ss2cShopLobbyEmoteBuyRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.buyLobbyEmoteId !== undefined && (obj.buyLobbyEmoteId = message.buyLobbyEmoteId);
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cShopLobbyEmoteBuyRes>, I>>(base?: I): ss2cShopLobbyEmoteBuyRes {
    return ss2cShopLobbyEmoteBuyRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cShopLobbyEmoteBuyRes>, I>>(object: I): ss2cShopLobbyEmoteBuyRes {
    const message = createBasess2cShopLobbyEmoteBuyRes();
    message.result = object.result ?? 0;
    message.buyLobbyEmoteId = object.buyLobbyEmoteId ?? "";
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
