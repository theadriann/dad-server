/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { SMusic, SPerk, SSkill, SSpell } from "./_Item";

export const protobufPackage = "DC.Packet";

export interface sclassEquipInfo {
  index: number;
  isAvailableSlot: number;
  requiredLevel: number;
  type: number;
  equipId: string;
}

export interface sclassMoveInfo {
  index: number;
  type: number;
  moveId: string;
  move: number;
}

export interface sc2sClassLevelInfoReq {
}

export interface ss2cClassLevelInfoRes {
  level: number;
  exp: number;
  expBegin: number;
  expLimit: number;
  rewardPoint: number;
}

export interface sc2sClassEquipInfoReq {
}

export interface ss2cClassEquipInfoRes {
  equips: sclassEquipInfo[];
}

export interface sc2sClassPerkListReq {
}

export interface ss2cClassPerkListRes {
  perks: SPerk[];
}

export interface sc2sClassSkillListReq {
}

export interface ss2cClassSkillListRes {
  skills: SSkill[];
}

export interface sc2sClassSpellListReq {
  maxSpellMemory: number;
}

export interface ss2cClassSpellListRes {
  spells: SSpell[];
}

export interface sc2sClassMusicListReq {
}

export interface ss2cClassMusicListRes {
  musics: SMusic[];
}

export interface sc2sClassSpellSlotMoveReq {
  spellId: string;
  dstSlotIndex: number;
}

export interface ss2cClassSpellSlotMoveRes {
  result: number;
  equipSpellList: SSpell[];
}

export interface sc2sClassSpellSequenceChangeReq {
  spellId: string;
  dstSequenceIndex: number;
}

export interface ss2cClassSpellSequenceChangeRes {
  result: number;
  equipSpellList: SSpell[];
}

export interface sc2sClassItemMoveReq {
  oldMove: sclassMoveInfo | undefined;
  newMove: sclassMoveInfo | undefined;
}

export interface ss2cClassItemMoveRes {
  result: number;
  oldMove: sclassMoveInfo | undefined;
  newMove: sclassMoveInfo | undefined;
}

export interface sc2sClassMusicSlotMoveReq {
  musicId: string;
  dstSlotIndex: number;
}

export interface ss2cClassMusicSlotMoveRes {
  result: number;
  equipMusicList: SMusic[];
}

function createBasesclassEquipInfo(): sclassEquipInfo {
  return { index: 0, isAvailableSlot: 0, requiredLevel: 0, type: 0, equipId: "" };
}

export const sclassEquipInfo = {
  encode(message: sclassEquipInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.isAvailableSlot !== 0) {
      writer.uint32(16).uint32(message.isAvailableSlot);
    }
    if (message.requiredLevel !== 0) {
      writer.uint32(24).uint32(message.requiredLevel);
    }
    if (message.type !== 0) {
      writer.uint32(32).uint32(message.type);
    }
    if (message.equipId !== "") {
      writer.uint32(42).string(message.equipId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sclassEquipInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesclassEquipInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isAvailableSlot = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.requiredLevel = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.type = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.equipId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sclassEquipInfo {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      isAvailableSlot: isSet(object.isAvailableSlot) ? Number(object.isAvailableSlot) : 0,
      requiredLevel: isSet(object.requiredLevel) ? Number(object.requiredLevel) : 0,
      type: isSet(object.type) ? Number(object.type) : 0,
      equipId: isSet(object.equipId) ? String(object.equipId) : "",
    };
  },

  toJSON(message: sclassEquipInfo): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.isAvailableSlot !== 0) {
      obj.isAvailableSlot = Math.round(message.isAvailableSlot);
    }
    if (message.requiredLevel !== 0) {
      obj.requiredLevel = Math.round(message.requiredLevel);
    }
    if (message.type !== 0) {
      obj.type = Math.round(message.type);
    }
    if (message.equipId !== "") {
      obj.equipId = message.equipId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sclassEquipInfo>, I>>(base?: I): sclassEquipInfo {
    return sclassEquipInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sclassEquipInfo>, I>>(object: I): sclassEquipInfo {
    const message = createBasesclassEquipInfo();
    message.index = object.index ?? 0;
    message.isAvailableSlot = object.isAvailableSlot ?? 0;
    message.requiredLevel = object.requiredLevel ?? 0;
    message.type = object.type ?? 0;
    message.equipId = object.equipId ?? "";
    return message;
  },
};

function createBasesclassMoveInfo(): sclassMoveInfo {
  return { index: 0, type: 0, moveId: "", move: 0 };
}

export const sclassMoveInfo = {
  encode(message: sclassMoveInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.type !== 0) {
      writer.uint32(16).uint32(message.type);
    }
    if (message.moveId !== "") {
      writer.uint32(26).string(message.moveId);
    }
    if (message.move !== 0) {
      writer.uint32(32).uint32(message.move);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sclassMoveInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesclassMoveInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.moveId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.move = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sclassMoveInfo {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      type: isSet(object.type) ? Number(object.type) : 0,
      moveId: isSet(object.moveId) ? String(object.moveId) : "",
      move: isSet(object.move) ? Number(object.move) : 0,
    };
  },

  toJSON(message: sclassMoveInfo): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.type !== 0) {
      obj.type = Math.round(message.type);
    }
    if (message.moveId !== "") {
      obj.moveId = message.moveId;
    }
    if (message.move !== 0) {
      obj.move = Math.round(message.move);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sclassMoveInfo>, I>>(base?: I): sclassMoveInfo {
    return sclassMoveInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sclassMoveInfo>, I>>(object: I): sclassMoveInfo {
    const message = createBasesclassMoveInfo();
    message.index = object.index ?? 0;
    message.type = object.type ?? 0;
    message.moveId = object.moveId ?? "";
    message.move = object.move ?? 0;
    return message;
  },
};

function createBasesc2sClassLevelInfoReq(): sc2sClassLevelInfoReq {
  return {};
}

export const sc2sClassLevelInfoReq = {
  encode(_: sc2sClassLevelInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sClassLevelInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sClassLevelInfoReq();
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

  fromJSON(_: any): sc2sClassLevelInfoReq {
    return {};
  },

  toJSON(_: sc2sClassLevelInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sClassLevelInfoReq>, I>>(base?: I): sc2sClassLevelInfoReq {
    return sc2sClassLevelInfoReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sClassLevelInfoReq>, I>>(_: I): sc2sClassLevelInfoReq {
    const message = createBasesc2sClassLevelInfoReq();
    return message;
  },
};

function createBasess2cClassLevelInfoRes(): ss2cClassLevelInfoRes {
  return { level: 0, exp: 0, expBegin: 0, expLimit: 0, rewardPoint: 0 };
}

export const ss2cClassLevelInfoRes = {
  encode(message: ss2cClassLevelInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.level !== 0) {
      writer.uint32(8).uint32(message.level);
    }
    if (message.exp !== 0) {
      writer.uint32(16).uint32(message.exp);
    }
    if (message.expBegin !== 0) {
      writer.uint32(24).uint32(message.expBegin);
    }
    if (message.expLimit !== 0) {
      writer.uint32(32).uint32(message.expLimit);
    }
    if (message.rewardPoint !== 0) {
      writer.uint32(40).uint32(message.rewardPoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClassLevelInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClassLevelInfoRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.exp = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.expBegin = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.expLimit = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.rewardPoint = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cClassLevelInfoRes {
    return {
      level: isSet(object.level) ? Number(object.level) : 0,
      exp: isSet(object.exp) ? Number(object.exp) : 0,
      expBegin: isSet(object.expBegin) ? Number(object.expBegin) : 0,
      expLimit: isSet(object.expLimit) ? Number(object.expLimit) : 0,
      rewardPoint: isSet(object.rewardPoint) ? Number(object.rewardPoint) : 0,
    };
  },

  toJSON(message: ss2cClassLevelInfoRes): unknown {
    const obj: any = {};
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.exp !== 0) {
      obj.exp = Math.round(message.exp);
    }
    if (message.expBegin !== 0) {
      obj.expBegin = Math.round(message.expBegin);
    }
    if (message.expLimit !== 0) {
      obj.expLimit = Math.round(message.expLimit);
    }
    if (message.rewardPoint !== 0) {
      obj.rewardPoint = Math.round(message.rewardPoint);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClassLevelInfoRes>, I>>(base?: I): ss2cClassLevelInfoRes {
    return ss2cClassLevelInfoRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClassLevelInfoRes>, I>>(object: I): ss2cClassLevelInfoRes {
    const message = createBasess2cClassLevelInfoRes();
    message.level = object.level ?? 0;
    message.exp = object.exp ?? 0;
    message.expBegin = object.expBegin ?? 0;
    message.expLimit = object.expLimit ?? 0;
    message.rewardPoint = object.rewardPoint ?? 0;
    return message;
  },
};

function createBasesc2sClassEquipInfoReq(): sc2sClassEquipInfoReq {
  return {};
}

export const sc2sClassEquipInfoReq = {
  encode(_: sc2sClassEquipInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sClassEquipInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sClassEquipInfoReq();
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

  fromJSON(_: any): sc2sClassEquipInfoReq {
    return {};
  },

  toJSON(_: sc2sClassEquipInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sClassEquipInfoReq>, I>>(base?: I): sc2sClassEquipInfoReq {
    return sc2sClassEquipInfoReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sClassEquipInfoReq>, I>>(_: I): sc2sClassEquipInfoReq {
    const message = createBasesc2sClassEquipInfoReq();
    return message;
  },
};

function createBasess2cClassEquipInfoRes(): ss2cClassEquipInfoRes {
  return { equips: [] };
}

export const ss2cClassEquipInfoRes = {
  encode(message: ss2cClassEquipInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.equips) {
      sclassEquipInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClassEquipInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClassEquipInfoRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.equips.push(sclassEquipInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cClassEquipInfoRes {
    return { equips: Array.isArray(object?.equips) ? object.equips.map((e: any) => sclassEquipInfo.fromJSON(e)) : [] };
  },

  toJSON(message: ss2cClassEquipInfoRes): unknown {
    const obj: any = {};
    if (message.equips?.length) {
      obj.equips = message.equips.map((e) => sclassEquipInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClassEquipInfoRes>, I>>(base?: I): ss2cClassEquipInfoRes {
    return ss2cClassEquipInfoRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClassEquipInfoRes>, I>>(object: I): ss2cClassEquipInfoRes {
    const message = createBasess2cClassEquipInfoRes();
    message.equips = object.equips?.map((e) => sclassEquipInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sClassPerkListReq(): sc2sClassPerkListReq {
  return {};
}

export const sc2sClassPerkListReq = {
  encode(_: sc2sClassPerkListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sClassPerkListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sClassPerkListReq();
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

  fromJSON(_: any): sc2sClassPerkListReq {
    return {};
  },

  toJSON(_: sc2sClassPerkListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sClassPerkListReq>, I>>(base?: I): sc2sClassPerkListReq {
    return sc2sClassPerkListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sClassPerkListReq>, I>>(_: I): sc2sClassPerkListReq {
    const message = createBasesc2sClassPerkListReq();
    return message;
  },
};

function createBasess2cClassPerkListRes(): ss2cClassPerkListRes {
  return { perks: [] };
}

export const ss2cClassPerkListRes = {
  encode(message: ss2cClassPerkListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.perks) {
      SPerk.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClassPerkListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClassPerkListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.perks.push(SPerk.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cClassPerkListRes {
    return { perks: Array.isArray(object?.perks) ? object.perks.map((e: any) => SPerk.fromJSON(e)) : [] };
  },

  toJSON(message: ss2cClassPerkListRes): unknown {
    const obj: any = {};
    if (message.perks?.length) {
      obj.perks = message.perks.map((e) => SPerk.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClassPerkListRes>, I>>(base?: I): ss2cClassPerkListRes {
    return ss2cClassPerkListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClassPerkListRes>, I>>(object: I): ss2cClassPerkListRes {
    const message = createBasess2cClassPerkListRes();
    message.perks = object.perks?.map((e) => SPerk.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sClassSkillListReq(): sc2sClassSkillListReq {
  return {};
}

export const sc2sClassSkillListReq = {
  encode(_: sc2sClassSkillListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sClassSkillListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sClassSkillListReq();
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

  fromJSON(_: any): sc2sClassSkillListReq {
    return {};
  },

  toJSON(_: sc2sClassSkillListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sClassSkillListReq>, I>>(base?: I): sc2sClassSkillListReq {
    return sc2sClassSkillListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sClassSkillListReq>, I>>(_: I): sc2sClassSkillListReq {
    const message = createBasesc2sClassSkillListReq();
    return message;
  },
};

function createBasess2cClassSkillListRes(): ss2cClassSkillListRes {
  return { skills: [] };
}

export const ss2cClassSkillListRes = {
  encode(message: ss2cClassSkillListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.skills) {
      SSkill.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClassSkillListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClassSkillListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.skills.push(SSkill.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cClassSkillListRes {
    return { skills: Array.isArray(object?.skills) ? object.skills.map((e: any) => SSkill.fromJSON(e)) : [] };
  },

  toJSON(message: ss2cClassSkillListRes): unknown {
    const obj: any = {};
    if (message.skills?.length) {
      obj.skills = message.skills.map((e) => SSkill.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClassSkillListRes>, I>>(base?: I): ss2cClassSkillListRes {
    return ss2cClassSkillListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClassSkillListRes>, I>>(object: I): ss2cClassSkillListRes {
    const message = createBasess2cClassSkillListRes();
    message.skills = object.skills?.map((e) => SSkill.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sClassSpellListReq(): sc2sClassSpellListReq {
  return { maxSpellMemory: 0 };
}

export const sc2sClassSpellListReq = {
  encode(message: sc2sClassSpellListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxSpellMemory !== 0) {
      writer.uint32(8).uint32(message.maxSpellMemory);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sClassSpellListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sClassSpellListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.maxSpellMemory = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sClassSpellListReq {
    return { maxSpellMemory: isSet(object.maxSpellMemory) ? Number(object.maxSpellMemory) : 0 };
  },

  toJSON(message: sc2sClassSpellListReq): unknown {
    const obj: any = {};
    if (message.maxSpellMemory !== 0) {
      obj.maxSpellMemory = Math.round(message.maxSpellMemory);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sClassSpellListReq>, I>>(base?: I): sc2sClassSpellListReq {
    return sc2sClassSpellListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sClassSpellListReq>, I>>(object: I): sc2sClassSpellListReq {
    const message = createBasesc2sClassSpellListReq();
    message.maxSpellMemory = object.maxSpellMemory ?? 0;
    return message;
  },
};

function createBasess2cClassSpellListRes(): ss2cClassSpellListRes {
  return { spells: [] };
}

export const ss2cClassSpellListRes = {
  encode(message: ss2cClassSpellListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.spells) {
      SSpell.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClassSpellListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClassSpellListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.spells.push(SSpell.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cClassSpellListRes {
    return { spells: Array.isArray(object?.spells) ? object.spells.map((e: any) => SSpell.fromJSON(e)) : [] };
  },

  toJSON(message: ss2cClassSpellListRes): unknown {
    const obj: any = {};
    if (message.spells?.length) {
      obj.spells = message.spells.map((e) => SSpell.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClassSpellListRes>, I>>(base?: I): ss2cClassSpellListRes {
    return ss2cClassSpellListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClassSpellListRes>, I>>(object: I): ss2cClassSpellListRes {
    const message = createBasess2cClassSpellListRes();
    message.spells = object.spells?.map((e) => SSpell.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sClassMusicListReq(): sc2sClassMusicListReq {
  return {};
}

export const sc2sClassMusicListReq = {
  encode(_: sc2sClassMusicListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sClassMusicListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sClassMusicListReq();
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

  fromJSON(_: any): sc2sClassMusicListReq {
    return {};
  },

  toJSON(_: sc2sClassMusicListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sClassMusicListReq>, I>>(base?: I): sc2sClassMusicListReq {
    return sc2sClassMusicListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sClassMusicListReq>, I>>(_: I): sc2sClassMusicListReq {
    const message = createBasesc2sClassMusicListReq();
    return message;
  },
};

function createBasess2cClassMusicListRes(): ss2cClassMusicListRes {
  return { musics: [] };
}

export const ss2cClassMusicListRes = {
  encode(message: ss2cClassMusicListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.musics) {
      SMusic.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClassMusicListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClassMusicListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.musics.push(SMusic.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cClassMusicListRes {
    return { musics: Array.isArray(object?.musics) ? object.musics.map((e: any) => SMusic.fromJSON(e)) : [] };
  },

  toJSON(message: ss2cClassMusicListRes): unknown {
    const obj: any = {};
    if (message.musics?.length) {
      obj.musics = message.musics.map((e) => SMusic.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClassMusicListRes>, I>>(base?: I): ss2cClassMusicListRes {
    return ss2cClassMusicListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClassMusicListRes>, I>>(object: I): ss2cClassMusicListRes {
    const message = createBasess2cClassMusicListRes();
    message.musics = object.musics?.map((e) => SMusic.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sClassSpellSlotMoveReq(): sc2sClassSpellSlotMoveReq {
  return { spellId: "", dstSlotIndex: 0 };
}

export const sc2sClassSpellSlotMoveReq = {
  encode(message: sc2sClassSpellSlotMoveReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spellId !== "") {
      writer.uint32(10).string(message.spellId);
    }
    if (message.dstSlotIndex !== 0) {
      writer.uint32(16).int32(message.dstSlotIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sClassSpellSlotMoveReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sClassSpellSlotMoveReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.spellId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.dstSlotIndex = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sClassSpellSlotMoveReq {
    return {
      spellId: isSet(object.spellId) ? String(object.spellId) : "",
      dstSlotIndex: isSet(object.dstSlotIndex) ? Number(object.dstSlotIndex) : 0,
    };
  },

  toJSON(message: sc2sClassSpellSlotMoveReq): unknown {
    const obj: any = {};
    if (message.spellId !== "") {
      obj.spellId = message.spellId;
    }
    if (message.dstSlotIndex !== 0) {
      obj.dstSlotIndex = Math.round(message.dstSlotIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sClassSpellSlotMoveReq>, I>>(base?: I): sc2sClassSpellSlotMoveReq {
    return sc2sClassSpellSlotMoveReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sClassSpellSlotMoveReq>, I>>(object: I): sc2sClassSpellSlotMoveReq {
    const message = createBasesc2sClassSpellSlotMoveReq();
    message.spellId = object.spellId ?? "";
    message.dstSlotIndex = object.dstSlotIndex ?? 0;
    return message;
  },
};

function createBasess2cClassSpellSlotMoveRes(): ss2cClassSpellSlotMoveRes {
  return { result: 0, equipSpellList: [] };
}

export const ss2cClassSpellSlotMoveRes = {
  encode(message: ss2cClassSpellSlotMoveRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipSpellList) {
      SSpell.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClassSpellSlotMoveRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClassSpellSlotMoveRes();
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

          message.equipSpellList.push(SSpell.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cClassSpellSlotMoveRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipSpellList: Array.isArray(object?.equipSpellList)
        ? object.equipSpellList.map((e: any) => SSpell.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cClassSpellSlotMoveRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.equipSpellList?.length) {
      obj.equipSpellList = message.equipSpellList.map((e) => SSpell.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClassSpellSlotMoveRes>, I>>(base?: I): ss2cClassSpellSlotMoveRes {
    return ss2cClassSpellSlotMoveRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClassSpellSlotMoveRes>, I>>(object: I): ss2cClassSpellSlotMoveRes {
    const message = createBasess2cClassSpellSlotMoveRes();
    message.result = object.result ?? 0;
    message.equipSpellList = object.equipSpellList?.map((e) => SSpell.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sClassSpellSequenceChangeReq(): sc2sClassSpellSequenceChangeReq {
  return { spellId: "", dstSequenceIndex: 0 };
}

export const sc2sClassSpellSequenceChangeReq = {
  encode(message: sc2sClassSpellSequenceChangeReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spellId !== "") {
      writer.uint32(10).string(message.spellId);
    }
    if (message.dstSequenceIndex !== 0) {
      writer.uint32(16).uint32(message.dstSequenceIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sClassSpellSequenceChangeReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sClassSpellSequenceChangeReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.spellId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.dstSequenceIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sClassSpellSequenceChangeReq {
    return {
      spellId: isSet(object.spellId) ? String(object.spellId) : "",
      dstSequenceIndex: isSet(object.dstSequenceIndex) ? Number(object.dstSequenceIndex) : 0,
    };
  },

  toJSON(message: sc2sClassSpellSequenceChangeReq): unknown {
    const obj: any = {};
    if (message.spellId !== "") {
      obj.spellId = message.spellId;
    }
    if (message.dstSequenceIndex !== 0) {
      obj.dstSequenceIndex = Math.round(message.dstSequenceIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sClassSpellSequenceChangeReq>, I>>(base?: I): sc2sClassSpellSequenceChangeReq {
    return sc2sClassSpellSequenceChangeReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sClassSpellSequenceChangeReq>, I>>(
    object: I,
  ): sc2sClassSpellSequenceChangeReq {
    const message = createBasesc2sClassSpellSequenceChangeReq();
    message.spellId = object.spellId ?? "";
    message.dstSequenceIndex = object.dstSequenceIndex ?? 0;
    return message;
  },
};

function createBasess2cClassSpellSequenceChangeRes(): ss2cClassSpellSequenceChangeRes {
  return { result: 0, equipSpellList: [] };
}

export const ss2cClassSpellSequenceChangeRes = {
  encode(message: ss2cClassSpellSequenceChangeRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipSpellList) {
      SSpell.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClassSpellSequenceChangeRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClassSpellSequenceChangeRes();
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

          message.equipSpellList.push(SSpell.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cClassSpellSequenceChangeRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipSpellList: Array.isArray(object?.equipSpellList)
        ? object.equipSpellList.map((e: any) => SSpell.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cClassSpellSequenceChangeRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.equipSpellList?.length) {
      obj.equipSpellList = message.equipSpellList.map((e) => SSpell.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClassSpellSequenceChangeRes>, I>>(base?: I): ss2cClassSpellSequenceChangeRes {
    return ss2cClassSpellSequenceChangeRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClassSpellSequenceChangeRes>, I>>(
    object: I,
  ): ss2cClassSpellSequenceChangeRes {
    const message = createBasess2cClassSpellSequenceChangeRes();
    message.result = object.result ?? 0;
    message.equipSpellList = object.equipSpellList?.map((e) => SSpell.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sClassItemMoveReq(): sc2sClassItemMoveReq {
  return { oldMove: undefined, newMove: undefined };
}

export const sc2sClassItemMoveReq = {
  encode(message: sc2sClassItemMoveReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oldMove !== undefined) {
      sclassMoveInfo.encode(message.oldMove, writer.uint32(10).fork()).ldelim();
    }
    if (message.newMove !== undefined) {
      sclassMoveInfo.encode(message.newMove, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sClassItemMoveReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sClassItemMoveReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oldMove = sclassMoveInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.newMove = sclassMoveInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sClassItemMoveReq {
    return {
      oldMove: isSet(object.oldMove) ? sclassMoveInfo.fromJSON(object.oldMove) : undefined,
      newMove: isSet(object.newMove) ? sclassMoveInfo.fromJSON(object.newMove) : undefined,
    };
  },

  toJSON(message: sc2sClassItemMoveReq): unknown {
    const obj: any = {};
    if (message.oldMove !== undefined) {
      obj.oldMove = sclassMoveInfo.toJSON(message.oldMove);
    }
    if (message.newMove !== undefined) {
      obj.newMove = sclassMoveInfo.toJSON(message.newMove);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sClassItemMoveReq>, I>>(base?: I): sc2sClassItemMoveReq {
    return sc2sClassItemMoveReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sClassItemMoveReq>, I>>(object: I): sc2sClassItemMoveReq {
    const message = createBasesc2sClassItemMoveReq();
    message.oldMove = (object.oldMove !== undefined && object.oldMove !== null)
      ? sclassMoveInfo.fromPartial(object.oldMove)
      : undefined;
    message.newMove = (object.newMove !== undefined && object.newMove !== null)
      ? sclassMoveInfo.fromPartial(object.newMove)
      : undefined;
    return message;
  },
};

function createBasess2cClassItemMoveRes(): ss2cClassItemMoveRes {
  return { result: 0, oldMove: undefined, newMove: undefined };
}

export const ss2cClassItemMoveRes = {
  encode(message: ss2cClassItemMoveRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.oldMove !== undefined) {
      sclassMoveInfo.encode(message.oldMove, writer.uint32(18).fork()).ldelim();
    }
    if (message.newMove !== undefined) {
      sclassMoveInfo.encode(message.newMove, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClassItemMoveRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClassItemMoveRes();
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

          message.oldMove = sclassMoveInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.newMove = sclassMoveInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cClassItemMoveRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      oldMove: isSet(object.oldMove) ? sclassMoveInfo.fromJSON(object.oldMove) : undefined,
      newMove: isSet(object.newMove) ? sclassMoveInfo.fromJSON(object.newMove) : undefined,
    };
  },

  toJSON(message: ss2cClassItemMoveRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.oldMove !== undefined) {
      obj.oldMove = sclassMoveInfo.toJSON(message.oldMove);
    }
    if (message.newMove !== undefined) {
      obj.newMove = sclassMoveInfo.toJSON(message.newMove);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClassItemMoveRes>, I>>(base?: I): ss2cClassItemMoveRes {
    return ss2cClassItemMoveRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClassItemMoveRes>, I>>(object: I): ss2cClassItemMoveRes {
    const message = createBasess2cClassItemMoveRes();
    message.result = object.result ?? 0;
    message.oldMove = (object.oldMove !== undefined && object.oldMove !== null)
      ? sclassMoveInfo.fromPartial(object.oldMove)
      : undefined;
    message.newMove = (object.newMove !== undefined && object.newMove !== null)
      ? sclassMoveInfo.fromPartial(object.newMove)
      : undefined;
    return message;
  },
};

function createBasesc2sClassMusicSlotMoveReq(): sc2sClassMusicSlotMoveReq {
  return { musicId: "", dstSlotIndex: 0 };
}

export const sc2sClassMusicSlotMoveReq = {
  encode(message: sc2sClassMusicSlotMoveReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.musicId !== "") {
      writer.uint32(10).string(message.musicId);
    }
    if (message.dstSlotIndex !== 0) {
      writer.uint32(16).int32(message.dstSlotIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sClassMusicSlotMoveReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sClassMusicSlotMoveReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.musicId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.dstSlotIndex = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sClassMusicSlotMoveReq {
    return {
      musicId: isSet(object.musicId) ? String(object.musicId) : "",
      dstSlotIndex: isSet(object.dstSlotIndex) ? Number(object.dstSlotIndex) : 0,
    };
  },

  toJSON(message: sc2sClassMusicSlotMoveReq): unknown {
    const obj: any = {};
    if (message.musicId !== "") {
      obj.musicId = message.musicId;
    }
    if (message.dstSlotIndex !== 0) {
      obj.dstSlotIndex = Math.round(message.dstSlotIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sClassMusicSlotMoveReq>, I>>(base?: I): sc2sClassMusicSlotMoveReq {
    return sc2sClassMusicSlotMoveReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sClassMusicSlotMoveReq>, I>>(object: I): sc2sClassMusicSlotMoveReq {
    const message = createBasesc2sClassMusicSlotMoveReq();
    message.musicId = object.musicId ?? "";
    message.dstSlotIndex = object.dstSlotIndex ?? 0;
    return message;
  },
};

function createBasess2cClassMusicSlotMoveRes(): ss2cClassMusicSlotMoveRes {
  return { result: 0, equipMusicList: [] };
}

export const ss2cClassMusicSlotMoveRes = {
  encode(message: ss2cClassMusicSlotMoveRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipMusicList) {
      SMusic.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClassMusicSlotMoveRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClassMusicSlotMoveRes();
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

          message.equipMusicList.push(SMusic.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cClassMusicSlotMoveRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipMusicList: Array.isArray(object?.equipMusicList)
        ? object.equipMusicList.map((e: any) => SMusic.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cClassMusicSlotMoveRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.equipMusicList?.length) {
      obj.equipMusicList = message.equipMusicList.map((e) => SMusic.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClassMusicSlotMoveRes>, I>>(base?: I): ss2cClassMusicSlotMoveRes {
    return ss2cClassMusicSlotMoveRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClassMusicSlotMoveRes>, I>>(object: I): ss2cClassMusicSlotMoveRes {
    const message = createBasess2cClassMusicSlotMoveRes();
    message.result = object.result ?? 0;
    message.equipMusicList = object.equipMusicList?.map((e) => SMusic.fromPartial(e)) || [];
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
