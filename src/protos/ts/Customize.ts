/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { scustomizeAction, scustomizeCharacter, scustomizeItem, scustomizeLobbyEmote, SEMOTE } from "./_Item";

export const protobufPackage = "DC.Packet";

export interface sc2sCustomizeCharacterInfoReq {
}

export interface ss2cCustomizeCharacterInfoRes {
  loopFlag: number;
  customizeCharacters: scustomizeCharacter[];
}

export interface sc2sCustomizeItemInfoReq {
}

export interface ss2cCustomizeItemInfoRes {
  loopFlag: number;
  customizeItems: scustomizeItem[];
}

export interface sc2sCustomizeEmoteInfoReq {
}

export interface ss2cCustomizeEmoteInfoRes {
  loopFlag: number;
  emotes: SEMOTE[];
}

export interface sc2sCustomizeActionInfoReq {
}

export interface ss2cCustomizeActionInfoRes {
  loopFlag: number;
  customizeActionIds: scustomizeAction[];
}

export interface sc2sCustomizeLobbyEmoteInfoReq {
}

export interface ss2cCustomizeLobbyEmoteInfoRes {
  loopFlag: number;
  customizeLobbyEmoteIds: scustomizeLobbyEmote[];
}

export interface sc2sCustomizeCharacterMountReq {
  customizeCharacterId: string;
}

export interface ss2cCustomizeCharacterMountRes {
  result: number;
  equipCustomizeCharacters: scustomizeCharacter[];
}

export interface sc2sCustomizeCharacterUnmountReq {
  customizeCharacterId: string;
}

export interface ss2cCustomizeCharacterUnmountRes {
  result: number;
  equipCustomizeCharacters: scustomizeCharacter[];
}

export interface sc2sCustomizeItemMountReq {
  customizeItemId: string;
  equipSlotIndex: number;
}

export interface ss2cCustomizeItemMountRes {
  result: number;
  equipCustomizeItems: scustomizeItem[];
}

export interface sc2sCustomizeItemUnmountReq {
  customizeItemId: string;
}

export interface ss2cCustomizeItemUnmountRes {
  result: number;
  equipCustomizeItems: scustomizeItem[];
}

export interface sc2sCustomizeEmoteMountReq {
  emoteId: string;
  equipSlotIndex: number;
}

export interface ss2cCustomizeEmoteMountRes {
  result: number;
  equipEmotes: SEMOTE[];
}

export interface sc2sCustomizeEmoteUnmountReq {
  emoteId: string;
}

export interface ss2cCustomizeEmoteUnmountRes {
  result: number;
  equipEmotes: SEMOTE[];
}

export interface sc2sCustomizeActionMountReq {
  customizeActionId: string;
}

export interface ss2cCustomizeActionMountRes {
  result: number;
  equipCustomizeActionIds: scustomizeAction[];
}

export interface sc2sCustomizeActionUnmountReq {
  customizeActionId: string;
}

export interface ss2cCustomizeActionUnmountRes {
  result: number;
  equipCustomizeActionIds: scustomizeAction[];
}

export interface sc2sCustomizeLobbyEmoteMountReq {
  customizeLobbyEmoteId: string;
  equipSlotIndex: number;
}

export interface ss2cCustomizeLobbyEmoteMountRes {
  result: number;
  equipCustomizeLobbyEmoteIds: scustomizeLobbyEmote[];
}

export interface sc2sCustomizeLobbyEmoteUnmountReq {
  customizeLobbyEmoteId: string;
}

export interface ss2cCustomizeLobbyEmoteUnmountRes {
  result: number;
  equipCustomizeLobbyEmoteIds: scustomizeLobbyEmote[];
}

export interface sc2sCustomizeNewItemCheckReq {
  itemId: string;
}

export interface ss2cCustomizeNewItemCheckRes {
}

export interface ss2cCustomizeNewItemAlertNot {
}

function createBasesc2sCustomizeCharacterInfoReq(): sc2sCustomizeCharacterInfoReq {
  return {};
}

export const sc2sCustomizeCharacterInfoReq = {
  encode(_: sc2sCustomizeCharacterInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeCharacterInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeCharacterInfoReq();
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

  fromJSON(_: any): sc2sCustomizeCharacterInfoReq {
    return {};
  },

  toJSON(_: sc2sCustomizeCharacterInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeCharacterInfoReq>, I>>(base?: I): sc2sCustomizeCharacterInfoReq {
    return sc2sCustomizeCharacterInfoReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeCharacterInfoReq>, I>>(_: I): sc2sCustomizeCharacterInfoReq {
    const message = createBasesc2sCustomizeCharacterInfoReq();
    return message;
  },
};

function createBasess2cCustomizeCharacterInfoRes(): ss2cCustomizeCharacterInfoRes {
  return { loopFlag: 0, customizeCharacters: [] };
}

export const ss2cCustomizeCharacterInfoRes = {
  encode(message: ss2cCustomizeCharacterInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loopFlag !== 0) {
      writer.uint32(8).uint32(message.loopFlag);
    }
    for (const v of message.customizeCharacters) {
      scustomizeCharacter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeCharacterInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeCharacterInfoRes();
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

          message.customizeCharacters.push(scustomizeCharacter.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeCharacterInfoRes {
    return {
      loopFlag: isSet(object.loopFlag) ? Number(object.loopFlag) : 0,
      customizeCharacters: Array.isArray(object?.customizeCharacters)
        ? object.customizeCharacters.map((e: any) => scustomizeCharacter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cCustomizeCharacterInfoRes): unknown {
    const obj: any = {};
    message.loopFlag !== undefined && (obj.loopFlag = Math.round(message.loopFlag));
    if (message.customizeCharacters) {
      obj.customizeCharacters = message.customizeCharacters.map((e) => e ? scustomizeCharacter.toJSON(e) : undefined);
    } else {
      obj.customizeCharacters = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeCharacterInfoRes>, I>>(base?: I): ss2cCustomizeCharacterInfoRes {
    return ss2cCustomizeCharacterInfoRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeCharacterInfoRes>, I>>(
    object: I,
  ): ss2cCustomizeCharacterInfoRes {
    const message = createBasess2cCustomizeCharacterInfoRes();
    message.loopFlag = object.loopFlag ?? 0;
    message.customizeCharacters = object.customizeCharacters?.map((e) => scustomizeCharacter.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeItemInfoReq(): sc2sCustomizeItemInfoReq {
  return {};
}

export const sc2sCustomizeItemInfoReq = {
  encode(_: sc2sCustomizeItemInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeItemInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeItemInfoReq();
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

  fromJSON(_: any): sc2sCustomizeItemInfoReq {
    return {};
  },

  toJSON(_: sc2sCustomizeItemInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeItemInfoReq>, I>>(base?: I): sc2sCustomizeItemInfoReq {
    return sc2sCustomizeItemInfoReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeItemInfoReq>, I>>(_: I): sc2sCustomizeItemInfoReq {
    const message = createBasesc2sCustomizeItemInfoReq();
    return message;
  },
};

function createBasess2cCustomizeItemInfoRes(): ss2cCustomizeItemInfoRes {
  return { loopFlag: 0, customizeItems: [] };
}

export const ss2cCustomizeItemInfoRes = {
  encode(message: ss2cCustomizeItemInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loopFlag !== 0) {
      writer.uint32(8).uint32(message.loopFlag);
    }
    for (const v of message.customizeItems) {
      scustomizeItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeItemInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeItemInfoRes();
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

          message.customizeItems.push(scustomizeItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeItemInfoRes {
    return {
      loopFlag: isSet(object.loopFlag) ? Number(object.loopFlag) : 0,
      customizeItems: Array.isArray(object?.customizeItems)
        ? object.customizeItems.map((e: any) => scustomizeItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cCustomizeItemInfoRes): unknown {
    const obj: any = {};
    message.loopFlag !== undefined && (obj.loopFlag = Math.round(message.loopFlag));
    if (message.customizeItems) {
      obj.customizeItems = message.customizeItems.map((e) => e ? scustomizeItem.toJSON(e) : undefined);
    } else {
      obj.customizeItems = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeItemInfoRes>, I>>(base?: I): ss2cCustomizeItemInfoRes {
    return ss2cCustomizeItemInfoRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeItemInfoRes>, I>>(object: I): ss2cCustomizeItemInfoRes {
    const message = createBasess2cCustomizeItemInfoRes();
    message.loopFlag = object.loopFlag ?? 0;
    message.customizeItems = object.customizeItems?.map((e) => scustomizeItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeEmoteInfoReq(): sc2sCustomizeEmoteInfoReq {
  return {};
}

export const sc2sCustomizeEmoteInfoReq = {
  encode(_: sc2sCustomizeEmoteInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeEmoteInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeEmoteInfoReq();
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

  fromJSON(_: any): sc2sCustomizeEmoteInfoReq {
    return {};
  },

  toJSON(_: sc2sCustomizeEmoteInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeEmoteInfoReq>, I>>(base?: I): sc2sCustomizeEmoteInfoReq {
    return sc2sCustomizeEmoteInfoReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeEmoteInfoReq>, I>>(_: I): sc2sCustomizeEmoteInfoReq {
    const message = createBasesc2sCustomizeEmoteInfoReq();
    return message;
  },
};

function createBasess2cCustomizeEmoteInfoRes(): ss2cCustomizeEmoteInfoRes {
  return { loopFlag: 0, emotes: [] };
}

export const ss2cCustomizeEmoteInfoRes = {
  encode(message: ss2cCustomizeEmoteInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loopFlag !== 0) {
      writer.uint32(8).uint32(message.loopFlag);
    }
    for (const v of message.emotes) {
      SEMOTE.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeEmoteInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeEmoteInfoRes();
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

          message.emotes.push(SEMOTE.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeEmoteInfoRes {
    return {
      loopFlag: isSet(object.loopFlag) ? Number(object.loopFlag) : 0,
      emotes: Array.isArray(object?.emotes) ? object.emotes.map((e: any) => SEMOTE.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cCustomizeEmoteInfoRes): unknown {
    const obj: any = {};
    message.loopFlag !== undefined && (obj.loopFlag = Math.round(message.loopFlag));
    if (message.emotes) {
      obj.emotes = message.emotes.map((e) => e ? SEMOTE.toJSON(e) : undefined);
    } else {
      obj.emotes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeEmoteInfoRes>, I>>(base?: I): ss2cCustomizeEmoteInfoRes {
    return ss2cCustomizeEmoteInfoRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeEmoteInfoRes>, I>>(object: I): ss2cCustomizeEmoteInfoRes {
    const message = createBasess2cCustomizeEmoteInfoRes();
    message.loopFlag = object.loopFlag ?? 0;
    message.emotes = object.emotes?.map((e) => SEMOTE.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeActionInfoReq(): sc2sCustomizeActionInfoReq {
  return {};
}

export const sc2sCustomizeActionInfoReq = {
  encode(_: sc2sCustomizeActionInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeActionInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeActionInfoReq();
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

  fromJSON(_: any): sc2sCustomizeActionInfoReq {
    return {};
  },

  toJSON(_: sc2sCustomizeActionInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeActionInfoReq>, I>>(base?: I): sc2sCustomizeActionInfoReq {
    return sc2sCustomizeActionInfoReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeActionInfoReq>, I>>(_: I): sc2sCustomizeActionInfoReq {
    const message = createBasesc2sCustomizeActionInfoReq();
    return message;
  },
};

function createBasess2cCustomizeActionInfoRes(): ss2cCustomizeActionInfoRes {
  return { loopFlag: 0, customizeActionIds: [] };
}

export const ss2cCustomizeActionInfoRes = {
  encode(message: ss2cCustomizeActionInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loopFlag !== 0) {
      writer.uint32(8).uint32(message.loopFlag);
    }
    for (const v of message.customizeActionIds) {
      scustomizeAction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeActionInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeActionInfoRes();
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

          message.customizeActionIds.push(scustomizeAction.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeActionInfoRes {
    return {
      loopFlag: isSet(object.loopFlag) ? Number(object.loopFlag) : 0,
      customizeActionIds: Array.isArray(object?.customizeActionIds)
        ? object.customizeActionIds.map((e: any) => scustomizeAction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cCustomizeActionInfoRes): unknown {
    const obj: any = {};
    message.loopFlag !== undefined && (obj.loopFlag = Math.round(message.loopFlag));
    if (message.customizeActionIds) {
      obj.customizeActionIds = message.customizeActionIds.map((e) => e ? scustomizeAction.toJSON(e) : undefined);
    } else {
      obj.customizeActionIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeActionInfoRes>, I>>(base?: I): ss2cCustomizeActionInfoRes {
    return ss2cCustomizeActionInfoRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeActionInfoRes>, I>>(object: I): ss2cCustomizeActionInfoRes {
    const message = createBasess2cCustomizeActionInfoRes();
    message.loopFlag = object.loopFlag ?? 0;
    message.customizeActionIds = object.customizeActionIds?.map((e) => scustomizeAction.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeLobbyEmoteInfoReq(): sc2sCustomizeLobbyEmoteInfoReq {
  return {};
}

export const sc2sCustomizeLobbyEmoteInfoReq = {
  encode(_: sc2sCustomizeLobbyEmoteInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeLobbyEmoteInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeLobbyEmoteInfoReq();
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

  fromJSON(_: any): sc2sCustomizeLobbyEmoteInfoReq {
    return {};
  },

  toJSON(_: sc2sCustomizeLobbyEmoteInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeLobbyEmoteInfoReq>, I>>(base?: I): sc2sCustomizeLobbyEmoteInfoReq {
    return sc2sCustomizeLobbyEmoteInfoReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeLobbyEmoteInfoReq>, I>>(_: I): sc2sCustomizeLobbyEmoteInfoReq {
    const message = createBasesc2sCustomizeLobbyEmoteInfoReq();
    return message;
  },
};

function createBasess2cCustomizeLobbyEmoteInfoRes(): ss2cCustomizeLobbyEmoteInfoRes {
  return { loopFlag: 0, customizeLobbyEmoteIds: [] };
}

export const ss2cCustomizeLobbyEmoteInfoRes = {
  encode(message: ss2cCustomizeLobbyEmoteInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loopFlag !== 0) {
      writer.uint32(8).uint32(message.loopFlag);
    }
    for (const v of message.customizeLobbyEmoteIds) {
      scustomizeLobbyEmote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeLobbyEmoteInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeLobbyEmoteInfoRes();
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

          message.customizeLobbyEmoteIds.push(scustomizeLobbyEmote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeLobbyEmoteInfoRes {
    return {
      loopFlag: isSet(object.loopFlag) ? Number(object.loopFlag) : 0,
      customizeLobbyEmoteIds: Array.isArray(object?.customizeLobbyEmoteIds)
        ? object.customizeLobbyEmoteIds.map((e: any) => scustomizeLobbyEmote.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cCustomizeLobbyEmoteInfoRes): unknown {
    const obj: any = {};
    message.loopFlag !== undefined && (obj.loopFlag = Math.round(message.loopFlag));
    if (message.customizeLobbyEmoteIds) {
      obj.customizeLobbyEmoteIds = message.customizeLobbyEmoteIds.map((e) =>
        e ? scustomizeLobbyEmote.toJSON(e) : undefined
      );
    } else {
      obj.customizeLobbyEmoteIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeLobbyEmoteInfoRes>, I>>(base?: I): ss2cCustomizeLobbyEmoteInfoRes {
    return ss2cCustomizeLobbyEmoteInfoRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeLobbyEmoteInfoRes>, I>>(
    object: I,
  ): ss2cCustomizeLobbyEmoteInfoRes {
    const message = createBasess2cCustomizeLobbyEmoteInfoRes();
    message.loopFlag = object.loopFlag ?? 0;
    message.customizeLobbyEmoteIds = object.customizeLobbyEmoteIds?.map((e) => scustomizeLobbyEmote.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBasesc2sCustomizeCharacterMountReq(): sc2sCustomizeCharacterMountReq {
  return { customizeCharacterId: "" };
}

export const sc2sCustomizeCharacterMountReq = {
  encode(message: sc2sCustomizeCharacterMountReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customizeCharacterId !== "") {
      writer.uint32(10).string(message.customizeCharacterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeCharacterMountReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeCharacterMountReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.customizeCharacterId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sCustomizeCharacterMountReq {
    return { customizeCharacterId: isSet(object.customizeCharacterId) ? String(object.customizeCharacterId) : "" };
  },

  toJSON(message: sc2sCustomizeCharacterMountReq): unknown {
    const obj: any = {};
    message.customizeCharacterId !== undefined && (obj.customizeCharacterId = message.customizeCharacterId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeCharacterMountReq>, I>>(base?: I): sc2sCustomizeCharacterMountReq {
    return sc2sCustomizeCharacterMountReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeCharacterMountReq>, I>>(
    object: I,
  ): sc2sCustomizeCharacterMountReq {
    const message = createBasesc2sCustomizeCharacterMountReq();
    message.customizeCharacterId = object.customizeCharacterId ?? "";
    return message;
  },
};

function createBasess2cCustomizeCharacterMountRes(): ss2cCustomizeCharacterMountRes {
  return { result: 0, equipCustomizeCharacters: [] };
}

export const ss2cCustomizeCharacterMountRes = {
  encode(message: ss2cCustomizeCharacterMountRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipCustomizeCharacters) {
      scustomizeCharacter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeCharacterMountRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeCharacterMountRes();
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

          message.equipCustomizeCharacters.push(scustomizeCharacter.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeCharacterMountRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipCustomizeCharacters: Array.isArray(object?.equipCustomizeCharacters)
        ? object.equipCustomizeCharacters.map((e: any) => scustomizeCharacter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cCustomizeCharacterMountRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.equipCustomizeCharacters) {
      obj.equipCustomizeCharacters = message.equipCustomizeCharacters.map((e) =>
        e ? scustomizeCharacter.toJSON(e) : undefined
      );
    } else {
      obj.equipCustomizeCharacters = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeCharacterMountRes>, I>>(base?: I): ss2cCustomizeCharacterMountRes {
    return ss2cCustomizeCharacterMountRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeCharacterMountRes>, I>>(
    object: I,
  ): ss2cCustomizeCharacterMountRes {
    const message = createBasess2cCustomizeCharacterMountRes();
    message.result = object.result ?? 0;
    message.equipCustomizeCharacters =
      object.equipCustomizeCharacters?.map((e) => scustomizeCharacter.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeCharacterUnmountReq(): sc2sCustomizeCharacterUnmountReq {
  return { customizeCharacterId: "" };
}

export const sc2sCustomizeCharacterUnmountReq = {
  encode(message: sc2sCustomizeCharacterUnmountReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customizeCharacterId !== "") {
      writer.uint32(10).string(message.customizeCharacterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeCharacterUnmountReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeCharacterUnmountReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.customizeCharacterId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sCustomizeCharacterUnmountReq {
    return { customizeCharacterId: isSet(object.customizeCharacterId) ? String(object.customizeCharacterId) : "" };
  },

  toJSON(message: sc2sCustomizeCharacterUnmountReq): unknown {
    const obj: any = {};
    message.customizeCharacterId !== undefined && (obj.customizeCharacterId = message.customizeCharacterId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeCharacterUnmountReq>, I>>(
    base?: I,
  ): sc2sCustomizeCharacterUnmountReq {
    return sc2sCustomizeCharacterUnmountReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeCharacterUnmountReq>, I>>(
    object: I,
  ): sc2sCustomizeCharacterUnmountReq {
    const message = createBasesc2sCustomizeCharacterUnmountReq();
    message.customizeCharacterId = object.customizeCharacterId ?? "";
    return message;
  },
};

function createBasess2cCustomizeCharacterUnmountRes(): ss2cCustomizeCharacterUnmountRes {
  return { result: 0, equipCustomizeCharacters: [] };
}

export const ss2cCustomizeCharacterUnmountRes = {
  encode(message: ss2cCustomizeCharacterUnmountRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipCustomizeCharacters) {
      scustomizeCharacter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeCharacterUnmountRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeCharacterUnmountRes();
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

          message.equipCustomizeCharacters.push(scustomizeCharacter.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeCharacterUnmountRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipCustomizeCharacters: Array.isArray(object?.equipCustomizeCharacters)
        ? object.equipCustomizeCharacters.map((e: any) => scustomizeCharacter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cCustomizeCharacterUnmountRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.equipCustomizeCharacters) {
      obj.equipCustomizeCharacters = message.equipCustomizeCharacters.map((e) =>
        e ? scustomizeCharacter.toJSON(e) : undefined
      );
    } else {
      obj.equipCustomizeCharacters = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeCharacterUnmountRes>, I>>(
    base?: I,
  ): ss2cCustomizeCharacterUnmountRes {
    return ss2cCustomizeCharacterUnmountRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeCharacterUnmountRes>, I>>(
    object: I,
  ): ss2cCustomizeCharacterUnmountRes {
    const message = createBasess2cCustomizeCharacterUnmountRes();
    message.result = object.result ?? 0;
    message.equipCustomizeCharacters =
      object.equipCustomizeCharacters?.map((e) => scustomizeCharacter.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeItemMountReq(): sc2sCustomizeItemMountReq {
  return { customizeItemId: "", equipSlotIndex: 0 };
}

export const sc2sCustomizeItemMountReq = {
  encode(message: sc2sCustomizeItemMountReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customizeItemId !== "") {
      writer.uint32(10).string(message.customizeItemId);
    }
    if (message.equipSlotIndex !== 0) {
      writer.uint32(16).int32(message.equipSlotIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeItemMountReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeItemMountReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.customizeItemId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.equipSlotIndex = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sCustomizeItemMountReq {
    return {
      customizeItemId: isSet(object.customizeItemId) ? String(object.customizeItemId) : "",
      equipSlotIndex: isSet(object.equipSlotIndex) ? Number(object.equipSlotIndex) : 0,
    };
  },

  toJSON(message: sc2sCustomizeItemMountReq): unknown {
    const obj: any = {};
    message.customizeItemId !== undefined && (obj.customizeItemId = message.customizeItemId);
    message.equipSlotIndex !== undefined && (obj.equipSlotIndex = Math.round(message.equipSlotIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeItemMountReq>, I>>(base?: I): sc2sCustomizeItemMountReq {
    return sc2sCustomizeItemMountReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeItemMountReq>, I>>(object: I): sc2sCustomizeItemMountReq {
    const message = createBasesc2sCustomizeItemMountReq();
    message.customizeItemId = object.customizeItemId ?? "";
    message.equipSlotIndex = object.equipSlotIndex ?? 0;
    return message;
  },
};

function createBasess2cCustomizeItemMountRes(): ss2cCustomizeItemMountRes {
  return { result: 0, equipCustomizeItems: [] };
}

export const ss2cCustomizeItemMountRes = {
  encode(message: ss2cCustomizeItemMountRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipCustomizeItems) {
      scustomizeItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeItemMountRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeItemMountRes();
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

          message.equipCustomizeItems.push(scustomizeItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeItemMountRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipCustomizeItems: Array.isArray(object?.equipCustomizeItems)
        ? object.equipCustomizeItems.map((e: any) => scustomizeItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cCustomizeItemMountRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.equipCustomizeItems) {
      obj.equipCustomizeItems = message.equipCustomizeItems.map((e) => e ? scustomizeItem.toJSON(e) : undefined);
    } else {
      obj.equipCustomizeItems = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeItemMountRes>, I>>(base?: I): ss2cCustomizeItemMountRes {
    return ss2cCustomizeItemMountRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeItemMountRes>, I>>(object: I): ss2cCustomizeItemMountRes {
    const message = createBasess2cCustomizeItemMountRes();
    message.result = object.result ?? 0;
    message.equipCustomizeItems = object.equipCustomizeItems?.map((e) => scustomizeItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeItemUnmountReq(): sc2sCustomizeItemUnmountReq {
  return { customizeItemId: "" };
}

export const sc2sCustomizeItemUnmountReq = {
  encode(message: sc2sCustomizeItemUnmountReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customizeItemId !== "") {
      writer.uint32(10).string(message.customizeItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeItemUnmountReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeItemUnmountReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.customizeItemId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sCustomizeItemUnmountReq {
    return { customizeItemId: isSet(object.customizeItemId) ? String(object.customizeItemId) : "" };
  },

  toJSON(message: sc2sCustomizeItemUnmountReq): unknown {
    const obj: any = {};
    message.customizeItemId !== undefined && (obj.customizeItemId = message.customizeItemId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeItemUnmountReq>, I>>(base?: I): sc2sCustomizeItemUnmountReq {
    return sc2sCustomizeItemUnmountReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeItemUnmountReq>, I>>(object: I): sc2sCustomizeItemUnmountReq {
    const message = createBasesc2sCustomizeItemUnmountReq();
    message.customizeItemId = object.customizeItemId ?? "";
    return message;
  },
};

function createBasess2cCustomizeItemUnmountRes(): ss2cCustomizeItemUnmountRes {
  return { result: 0, equipCustomizeItems: [] };
}

export const ss2cCustomizeItemUnmountRes = {
  encode(message: ss2cCustomizeItemUnmountRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipCustomizeItems) {
      scustomizeItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeItemUnmountRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeItemUnmountRes();
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

          message.equipCustomizeItems.push(scustomizeItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeItemUnmountRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipCustomizeItems: Array.isArray(object?.equipCustomizeItems)
        ? object.equipCustomizeItems.map((e: any) => scustomizeItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cCustomizeItemUnmountRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.equipCustomizeItems) {
      obj.equipCustomizeItems = message.equipCustomizeItems.map((e) => e ? scustomizeItem.toJSON(e) : undefined);
    } else {
      obj.equipCustomizeItems = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeItemUnmountRes>, I>>(base?: I): ss2cCustomizeItemUnmountRes {
    return ss2cCustomizeItemUnmountRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeItemUnmountRes>, I>>(object: I): ss2cCustomizeItemUnmountRes {
    const message = createBasess2cCustomizeItemUnmountRes();
    message.result = object.result ?? 0;
    message.equipCustomizeItems = object.equipCustomizeItems?.map((e) => scustomizeItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeEmoteMountReq(): sc2sCustomizeEmoteMountReq {
  return { emoteId: "", equipSlotIndex: 0 };
}

export const sc2sCustomizeEmoteMountReq = {
  encode(message: sc2sCustomizeEmoteMountReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emoteId !== "") {
      writer.uint32(10).string(message.emoteId);
    }
    if (message.equipSlotIndex !== 0) {
      writer.uint32(16).uint32(message.equipSlotIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeEmoteMountReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeEmoteMountReq();
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

          message.equipSlotIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sCustomizeEmoteMountReq {
    return {
      emoteId: isSet(object.emoteId) ? String(object.emoteId) : "",
      equipSlotIndex: isSet(object.equipSlotIndex) ? Number(object.equipSlotIndex) : 0,
    };
  },

  toJSON(message: sc2sCustomizeEmoteMountReq): unknown {
    const obj: any = {};
    message.emoteId !== undefined && (obj.emoteId = message.emoteId);
    message.equipSlotIndex !== undefined && (obj.equipSlotIndex = Math.round(message.equipSlotIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeEmoteMountReq>, I>>(base?: I): sc2sCustomizeEmoteMountReq {
    return sc2sCustomizeEmoteMountReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeEmoteMountReq>, I>>(object: I): sc2sCustomizeEmoteMountReq {
    const message = createBasesc2sCustomizeEmoteMountReq();
    message.emoteId = object.emoteId ?? "";
    message.equipSlotIndex = object.equipSlotIndex ?? 0;
    return message;
  },
};

function createBasess2cCustomizeEmoteMountRes(): ss2cCustomizeEmoteMountRes {
  return { result: 0, equipEmotes: [] };
}

export const ss2cCustomizeEmoteMountRes = {
  encode(message: ss2cCustomizeEmoteMountRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipEmotes) {
      SEMOTE.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeEmoteMountRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeEmoteMountRes();
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

          message.equipEmotes.push(SEMOTE.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeEmoteMountRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipEmotes: Array.isArray(object?.equipEmotes) ? object.equipEmotes.map((e: any) => SEMOTE.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cCustomizeEmoteMountRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.equipEmotes) {
      obj.equipEmotes = message.equipEmotes.map((e) => e ? SEMOTE.toJSON(e) : undefined);
    } else {
      obj.equipEmotes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeEmoteMountRes>, I>>(base?: I): ss2cCustomizeEmoteMountRes {
    return ss2cCustomizeEmoteMountRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeEmoteMountRes>, I>>(object: I): ss2cCustomizeEmoteMountRes {
    const message = createBasess2cCustomizeEmoteMountRes();
    message.result = object.result ?? 0;
    message.equipEmotes = object.equipEmotes?.map((e) => SEMOTE.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeEmoteUnmountReq(): sc2sCustomizeEmoteUnmountReq {
  return { emoteId: "" };
}

export const sc2sCustomizeEmoteUnmountReq = {
  encode(message: sc2sCustomizeEmoteUnmountReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emoteId !== "") {
      writer.uint32(10).string(message.emoteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeEmoteUnmountReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeEmoteUnmountReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.emoteId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sCustomizeEmoteUnmountReq {
    return { emoteId: isSet(object.emoteId) ? String(object.emoteId) : "" };
  },

  toJSON(message: sc2sCustomizeEmoteUnmountReq): unknown {
    const obj: any = {};
    message.emoteId !== undefined && (obj.emoteId = message.emoteId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeEmoteUnmountReq>, I>>(base?: I): sc2sCustomizeEmoteUnmountReq {
    return sc2sCustomizeEmoteUnmountReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeEmoteUnmountReq>, I>>(object: I): sc2sCustomizeEmoteUnmountReq {
    const message = createBasesc2sCustomizeEmoteUnmountReq();
    message.emoteId = object.emoteId ?? "";
    return message;
  },
};

function createBasess2cCustomizeEmoteUnmountRes(): ss2cCustomizeEmoteUnmountRes {
  return { result: 0, equipEmotes: [] };
}

export const ss2cCustomizeEmoteUnmountRes = {
  encode(message: ss2cCustomizeEmoteUnmountRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipEmotes) {
      SEMOTE.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeEmoteUnmountRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeEmoteUnmountRes();
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

          message.equipEmotes.push(SEMOTE.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeEmoteUnmountRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipEmotes: Array.isArray(object?.equipEmotes) ? object.equipEmotes.map((e: any) => SEMOTE.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cCustomizeEmoteUnmountRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.equipEmotes) {
      obj.equipEmotes = message.equipEmotes.map((e) => e ? SEMOTE.toJSON(e) : undefined);
    } else {
      obj.equipEmotes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeEmoteUnmountRes>, I>>(base?: I): ss2cCustomizeEmoteUnmountRes {
    return ss2cCustomizeEmoteUnmountRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeEmoteUnmountRes>, I>>(object: I): ss2cCustomizeEmoteUnmountRes {
    const message = createBasess2cCustomizeEmoteUnmountRes();
    message.result = object.result ?? 0;
    message.equipEmotes = object.equipEmotes?.map((e) => SEMOTE.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeActionMountReq(): sc2sCustomizeActionMountReq {
  return { customizeActionId: "" };
}

export const sc2sCustomizeActionMountReq = {
  encode(message: sc2sCustomizeActionMountReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customizeActionId !== "") {
      writer.uint32(10).string(message.customizeActionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeActionMountReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeActionMountReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.customizeActionId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sCustomizeActionMountReq {
    return { customizeActionId: isSet(object.customizeActionId) ? String(object.customizeActionId) : "" };
  },

  toJSON(message: sc2sCustomizeActionMountReq): unknown {
    const obj: any = {};
    message.customizeActionId !== undefined && (obj.customizeActionId = message.customizeActionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeActionMountReq>, I>>(base?: I): sc2sCustomizeActionMountReq {
    return sc2sCustomizeActionMountReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeActionMountReq>, I>>(object: I): sc2sCustomizeActionMountReq {
    const message = createBasesc2sCustomizeActionMountReq();
    message.customizeActionId = object.customizeActionId ?? "";
    return message;
  },
};

function createBasess2cCustomizeActionMountRes(): ss2cCustomizeActionMountRes {
  return { result: 0, equipCustomizeActionIds: [] };
}

export const ss2cCustomizeActionMountRes = {
  encode(message: ss2cCustomizeActionMountRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipCustomizeActionIds) {
      scustomizeAction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeActionMountRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeActionMountRes();
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

          message.equipCustomizeActionIds.push(scustomizeAction.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeActionMountRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipCustomizeActionIds: Array.isArray(object?.equipCustomizeActionIds)
        ? object.equipCustomizeActionIds.map((e: any) => scustomizeAction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cCustomizeActionMountRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.equipCustomizeActionIds) {
      obj.equipCustomizeActionIds = message.equipCustomizeActionIds.map((e) =>
        e ? scustomizeAction.toJSON(e) : undefined
      );
    } else {
      obj.equipCustomizeActionIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeActionMountRes>, I>>(base?: I): ss2cCustomizeActionMountRes {
    return ss2cCustomizeActionMountRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeActionMountRes>, I>>(object: I): ss2cCustomizeActionMountRes {
    const message = createBasess2cCustomizeActionMountRes();
    message.result = object.result ?? 0;
    message.equipCustomizeActionIds = object.equipCustomizeActionIds?.map((e) => scustomizeAction.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeActionUnmountReq(): sc2sCustomizeActionUnmountReq {
  return { customizeActionId: "" };
}

export const sc2sCustomizeActionUnmountReq = {
  encode(message: sc2sCustomizeActionUnmountReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customizeActionId !== "") {
      writer.uint32(10).string(message.customizeActionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeActionUnmountReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeActionUnmountReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.customizeActionId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sCustomizeActionUnmountReq {
    return { customizeActionId: isSet(object.customizeActionId) ? String(object.customizeActionId) : "" };
  },

  toJSON(message: sc2sCustomizeActionUnmountReq): unknown {
    const obj: any = {};
    message.customizeActionId !== undefined && (obj.customizeActionId = message.customizeActionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeActionUnmountReq>, I>>(base?: I): sc2sCustomizeActionUnmountReq {
    return sc2sCustomizeActionUnmountReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeActionUnmountReq>, I>>(
    object: I,
  ): sc2sCustomizeActionUnmountReq {
    const message = createBasesc2sCustomizeActionUnmountReq();
    message.customizeActionId = object.customizeActionId ?? "";
    return message;
  },
};

function createBasess2cCustomizeActionUnmountRes(): ss2cCustomizeActionUnmountRes {
  return { result: 0, equipCustomizeActionIds: [] };
}

export const ss2cCustomizeActionUnmountRes = {
  encode(message: ss2cCustomizeActionUnmountRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipCustomizeActionIds) {
      scustomizeAction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeActionUnmountRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeActionUnmountRes();
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

          message.equipCustomizeActionIds.push(scustomizeAction.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeActionUnmountRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipCustomizeActionIds: Array.isArray(object?.equipCustomizeActionIds)
        ? object.equipCustomizeActionIds.map((e: any) => scustomizeAction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cCustomizeActionUnmountRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.equipCustomizeActionIds) {
      obj.equipCustomizeActionIds = message.equipCustomizeActionIds.map((e) =>
        e ? scustomizeAction.toJSON(e) : undefined
      );
    } else {
      obj.equipCustomizeActionIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeActionUnmountRes>, I>>(base?: I): ss2cCustomizeActionUnmountRes {
    return ss2cCustomizeActionUnmountRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeActionUnmountRes>, I>>(
    object: I,
  ): ss2cCustomizeActionUnmountRes {
    const message = createBasess2cCustomizeActionUnmountRes();
    message.result = object.result ?? 0;
    message.equipCustomizeActionIds = object.equipCustomizeActionIds?.map((e) => scustomizeAction.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeLobbyEmoteMountReq(): sc2sCustomizeLobbyEmoteMountReq {
  return { customizeLobbyEmoteId: "", equipSlotIndex: 0 };
}

export const sc2sCustomizeLobbyEmoteMountReq = {
  encode(message: sc2sCustomizeLobbyEmoteMountReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customizeLobbyEmoteId !== "") {
      writer.uint32(10).string(message.customizeLobbyEmoteId);
    }
    if (message.equipSlotIndex !== 0) {
      writer.uint32(16).uint32(message.equipSlotIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeLobbyEmoteMountReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeLobbyEmoteMountReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.customizeLobbyEmoteId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.equipSlotIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sCustomizeLobbyEmoteMountReq {
    return {
      customizeLobbyEmoteId: isSet(object.customizeLobbyEmoteId) ? String(object.customizeLobbyEmoteId) : "",
      equipSlotIndex: isSet(object.equipSlotIndex) ? Number(object.equipSlotIndex) : 0,
    };
  },

  toJSON(message: sc2sCustomizeLobbyEmoteMountReq): unknown {
    const obj: any = {};
    message.customizeLobbyEmoteId !== undefined && (obj.customizeLobbyEmoteId = message.customizeLobbyEmoteId);
    message.equipSlotIndex !== undefined && (obj.equipSlotIndex = Math.round(message.equipSlotIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeLobbyEmoteMountReq>, I>>(base?: I): sc2sCustomizeLobbyEmoteMountReq {
    return sc2sCustomizeLobbyEmoteMountReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeLobbyEmoteMountReq>, I>>(
    object: I,
  ): sc2sCustomizeLobbyEmoteMountReq {
    const message = createBasesc2sCustomizeLobbyEmoteMountReq();
    message.customizeLobbyEmoteId = object.customizeLobbyEmoteId ?? "";
    message.equipSlotIndex = object.equipSlotIndex ?? 0;
    return message;
  },
};

function createBasess2cCustomizeLobbyEmoteMountRes(): ss2cCustomizeLobbyEmoteMountRes {
  return { result: 0, equipCustomizeLobbyEmoteIds: [] };
}

export const ss2cCustomizeLobbyEmoteMountRes = {
  encode(message: ss2cCustomizeLobbyEmoteMountRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipCustomizeLobbyEmoteIds) {
      scustomizeLobbyEmote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeLobbyEmoteMountRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeLobbyEmoteMountRes();
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

          message.equipCustomizeLobbyEmoteIds.push(scustomizeLobbyEmote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeLobbyEmoteMountRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipCustomizeLobbyEmoteIds: Array.isArray(object?.equipCustomizeLobbyEmoteIds)
        ? object.equipCustomizeLobbyEmoteIds.map((e: any) => scustomizeLobbyEmote.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cCustomizeLobbyEmoteMountRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.equipCustomizeLobbyEmoteIds) {
      obj.equipCustomizeLobbyEmoteIds = message.equipCustomizeLobbyEmoteIds.map((e) =>
        e ? scustomizeLobbyEmote.toJSON(e) : undefined
      );
    } else {
      obj.equipCustomizeLobbyEmoteIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeLobbyEmoteMountRes>, I>>(base?: I): ss2cCustomizeLobbyEmoteMountRes {
    return ss2cCustomizeLobbyEmoteMountRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeLobbyEmoteMountRes>, I>>(
    object: I,
  ): ss2cCustomizeLobbyEmoteMountRes {
    const message = createBasess2cCustomizeLobbyEmoteMountRes();
    message.result = object.result ?? 0;
    message.equipCustomizeLobbyEmoteIds =
      object.equipCustomizeLobbyEmoteIds?.map((e) => scustomizeLobbyEmote.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sCustomizeLobbyEmoteUnmountReq(): sc2sCustomizeLobbyEmoteUnmountReq {
  return { customizeLobbyEmoteId: "" };
}

export const sc2sCustomizeLobbyEmoteUnmountReq = {
  encode(message: sc2sCustomizeLobbyEmoteUnmountReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customizeLobbyEmoteId !== "") {
      writer.uint32(10).string(message.customizeLobbyEmoteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sCustomizeLobbyEmoteUnmountReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sCustomizeLobbyEmoteUnmountReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.customizeLobbyEmoteId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sCustomizeLobbyEmoteUnmountReq {
    return { customizeLobbyEmoteId: isSet(object.customizeLobbyEmoteId) ? String(object.customizeLobbyEmoteId) : "" };
  },

  toJSON(message: sc2sCustomizeLobbyEmoteUnmountReq): unknown {
    const obj: any = {};
    message.customizeLobbyEmoteId !== undefined && (obj.customizeLobbyEmoteId = message.customizeLobbyEmoteId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeLobbyEmoteUnmountReq>, I>>(
    base?: I,
  ): sc2sCustomizeLobbyEmoteUnmountReq {
    return sc2sCustomizeLobbyEmoteUnmountReq.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sc2sCustomizeLobbyEmoteUnmountReq>, I>>(
    object: I,
  ): sc2sCustomizeLobbyEmoteUnmountReq {
    const message = createBasesc2sCustomizeLobbyEmoteUnmountReq();
    message.customizeLobbyEmoteId = object.customizeLobbyEmoteId ?? "";
    return message;
  },
};

function createBasess2cCustomizeLobbyEmoteUnmountRes(): ss2cCustomizeLobbyEmoteUnmountRes {
  return { result: 0, equipCustomizeLobbyEmoteIds: [] };
}

export const ss2cCustomizeLobbyEmoteUnmountRes = {
  encode(message: ss2cCustomizeLobbyEmoteUnmountRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipCustomizeLobbyEmoteIds) {
      scustomizeLobbyEmote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cCustomizeLobbyEmoteUnmountRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cCustomizeLobbyEmoteUnmountRes();
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

          message.equipCustomizeLobbyEmoteIds.push(scustomizeLobbyEmote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cCustomizeLobbyEmoteUnmountRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipCustomizeLobbyEmoteIds: Array.isArray(object?.equipCustomizeLobbyEmoteIds)
        ? object.equipCustomizeLobbyEmoteIds.map((e: any) => scustomizeLobbyEmote.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cCustomizeLobbyEmoteUnmountRes): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.equipCustomizeLobbyEmoteIds) {
      obj.equipCustomizeLobbyEmoteIds = message.equipCustomizeLobbyEmoteIds.map((e) =>
        e ? scustomizeLobbyEmote.toJSON(e) : undefined
      );
    } else {
      obj.equipCustomizeLobbyEmoteIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cCustomizeLobbyEmoteUnmountRes>, I>>(
    base?: I,
  ): ss2cCustomizeLobbyEmoteUnmountRes {
    return ss2cCustomizeLobbyEmoteUnmountRes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ss2cCustomizeLobbyEmoteUnmountRes>, I>>(
    object: I,
  ): ss2cCustomizeLobbyEmoteUnmountRes {
    const message = createBasess2cCustomizeLobbyEmoteUnmountRes();
    message.result = object.result ?? 0;
    message.equipCustomizeLobbyEmoteIds =
      object.equipCustomizeLobbyEmoteIds?.map((e) => scustomizeLobbyEmote.fromPartial(e)) || [];
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
          if (tag != 10) {
            break;
          }

          message.itemId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sCustomizeNewItemCheckReq>, I>>(base?: I): sc2sCustomizeNewItemCheckReq {
    return sc2sCustomizeNewItemCheckReq.fromPartial(base ?? {});
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
      if ((tag & 7) == 4 || tag == 0) {
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
    return ss2cCustomizeNewItemCheckRes.fromPartial(base ?? {});
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
      if ((tag & 7) == 4 || tag == 0) {
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
    return ss2cCustomizeNewItemAlertNot.fromPartial(base ?? {});
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
