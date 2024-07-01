/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { saccountNickname } from "./_Character";
import { SMusic, SPerk, SShapeShift, SSkill, SSpell } from "./_Item";

export const protobufPackage = "DC.Packet";

export interface strainingRewardInfo {
  uniqueId: number;
  rewardType: string;
  rewardId: string;
  rewardCount: number;
}

export interface sclassTrainingInfo {
  state: number;
  classAbilityChoices: string[];
  rewardChoices: strainingRewardInfo[];
  characterClass: string;
  isMaster: number;
}

export enum sclassTrainingInfo_STATE {
  TRAINING_INFO_NONE = 0,
  CLASS_ABILITY = 1,
  REWARD = 2,
  UNRECOGNIZED = -1,
}

export function sclassTrainingInfo_STATEFromJSON(object: any): sclassTrainingInfo_STATE {
  switch (object) {
    case 0:
    case "TRAINING_INFO_NONE":
      return sclassTrainingInfo_STATE.TRAINING_INFO_NONE;
    case 1:
    case "CLASS_ABILITY":
      return sclassTrainingInfo_STATE.CLASS_ABILITY;
    case 2:
    case "REWARD":
      return sclassTrainingInfo_STATE.REWARD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return sclassTrainingInfo_STATE.UNRECOGNIZED;
  }
}

export function sclassTrainingInfo_STATEToJSON(object: sclassTrainingInfo_STATE): string {
  switch (object) {
    case sclassTrainingInfo_STATE.TRAINING_INFO_NONE:
      return "TRAINING_INFO_NONE";
    case sclassTrainingInfo_STATE.CLASS_ABILITY:
      return "CLASS_ABILITY";
    case sclassTrainingInfo_STATE.REWARD:
      return "REWARD";
    case sclassTrainingInfo_STATE.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface strainingCharacterInfo {
  characterId: string;
  nickname: saccountNickname | undefined;
  characterClass: string;
  gender: number;
  level: number;
  isMaster: number;
  hasLearn: number;
}

export interface sc2sTrainingInfoReq {
}

export interface ss2cTrainingInfoRes {
  info: sclassTrainingInfo | undefined;
  characters: strainingCharacterInfo[];
}

export interface sc2sTrainingRedeemLearningTokenReq {
  masterCharacterId: string;
}

export interface ss2cTrainingRedeemLearningTokenRes {
  result: number;
  classAbilityIds: string[];
  masterCharacterClass: string;
}

export interface sc2sTrainingReceiveClassAbilityReq {
  classAbilityId: string;
}

export interface ss2cTrainingReceiveClassAbilityRes {
  result: number;
}

export interface sc2sTrainingRedeemRewardTokenReq {
}

export interface ss2cTrainingRedeemRewardTokenRes {
  result: number;
  rewards: strainingRewardInfo[];
}

export interface strainingItemSlotInfo {
  inventoryId: number;
  slotId: number;
  itemId: string;
  itemUniqueId: number;
  itemCount: number;
  itemContentsCount: number;
}

export interface sc2sTrainingReceiveRewardReq {
  uniqueId: number;
  slotInfos: strainingItemSlotInfo[];
}

export interface ss2cTrainingReceiveRewardRes {
  result: number;
}

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
  nextRewardLevel: number;
  learningPoint: number;
  nextLearningLevel: number;
  fame: number;
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

export interface sc2sClassShapeshiftListReq {
}

export interface ss2cClassShapeshiftListRes {
  shapeShifts: SShapeShift[];
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

export interface sc2sClassMusicSequenceChangeReq {
  musicId: string;
  dstSequenceIndex: number;
}

export interface ss2cClassMusicSequenceChangeRes {
  result: number;
  equipMusicList: SMusic[];
}

export interface sc2sClassShapeshiftSlotMoveReq {
  shapeShiftId: string;
  dstSlotIndex: number;
}

export interface ss2cClassShapeshiftSlotMoveRes {
  result: number;
  equipShapeShiftList: SShapeShift[];
}

export interface sc2sClassShapeshiftSequenceChangeReq {
  shapeShiftId: string;
  dstSequenceIndex: number;
}

export interface ss2cClassShapeshiftSequenceChangeRes {
  result: number;
  equipShapeShiftList: SShapeShift[];
}

function createBasestrainingRewardInfo(): strainingRewardInfo {
  return { uniqueId: 0, rewardType: "", rewardId: "", rewardCount: 0 };
}

export const strainingRewardInfo = {
  encode(message: strainingRewardInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uniqueId !== 0) {
      writer.uint32(8).int32(message.uniqueId);
    }
    if (message.rewardType !== "") {
      writer.uint32(18).string(message.rewardType);
    }
    if (message.rewardId !== "") {
      writer.uint32(26).string(message.rewardId);
    }
    if (message.rewardCount !== 0) {
      writer.uint32(32).int32(message.rewardCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): strainingRewardInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasestrainingRewardInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.uniqueId = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rewardType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rewardId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.rewardCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): strainingRewardInfo {
    return {
      uniqueId: isSet(object.uniqueId) ? Number(object.uniqueId) : 0,
      rewardType: isSet(object.rewardType) ? String(object.rewardType) : "",
      rewardId: isSet(object.rewardId) ? String(object.rewardId) : "",
      rewardCount: isSet(object.rewardCount) ? Number(object.rewardCount) : 0,
    };
  },

  toJSON(message: strainingRewardInfo): unknown {
    const obj: any = {};
    if (message.uniqueId !== 0) {
      obj.uniqueId = Math.round(message.uniqueId);
    }
    if (message.rewardType !== "") {
      obj.rewardType = message.rewardType;
    }
    if (message.rewardId !== "") {
      obj.rewardId = message.rewardId;
    }
    if (message.rewardCount !== 0) {
      obj.rewardCount = Math.round(message.rewardCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<strainingRewardInfo>, I>>(base?: I): strainingRewardInfo {
    return strainingRewardInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<strainingRewardInfo>, I>>(object: I): strainingRewardInfo {
    const message = createBasestrainingRewardInfo();
    message.uniqueId = object.uniqueId ?? 0;
    message.rewardType = object.rewardType ?? "";
    message.rewardId = object.rewardId ?? "";
    message.rewardCount = object.rewardCount ?? 0;
    return message;
  },
};

function createBasesclassTrainingInfo(): sclassTrainingInfo {
  return { state: 0, classAbilityChoices: [], rewardChoices: [], characterClass: "", isMaster: 0 };
}

export const sclassTrainingInfo = {
  encode(message: sclassTrainingInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    for (const v of message.classAbilityChoices) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.rewardChoices) {
      strainingRewardInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(34).string(message.characterClass);
    }
    if (message.isMaster !== 0) {
      writer.uint32(40).int32(message.isMaster);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sclassTrainingInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesclassTrainingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.state = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.classAbilityChoices.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rewardChoices.push(strainingRewardInfo.decode(reader, reader.uint32()));
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

          message.isMaster = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sclassTrainingInfo {
    return {
      state: isSet(object.state) ? Number(object.state) : 0,
      classAbilityChoices: Array.isArray(object?.classAbilityChoices)
        ? object.classAbilityChoices.map((e: any) => String(e))
        : [],
      rewardChoices: Array.isArray(object?.rewardChoices)
        ? object.rewardChoices.map((e: any) => strainingRewardInfo.fromJSON(e))
        : [],
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      isMaster: isSet(object.isMaster) ? Number(object.isMaster) : 0,
    };
  },

  toJSON(message: sclassTrainingInfo): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = Math.round(message.state);
    }
    if (message.classAbilityChoices?.length) {
      obj.classAbilityChoices = message.classAbilityChoices;
    }
    if (message.rewardChoices?.length) {
      obj.rewardChoices = message.rewardChoices.map((e) => strainingRewardInfo.toJSON(e));
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    if (message.isMaster !== 0) {
      obj.isMaster = Math.round(message.isMaster);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sclassTrainingInfo>, I>>(base?: I): sclassTrainingInfo {
    return sclassTrainingInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sclassTrainingInfo>, I>>(object: I): sclassTrainingInfo {
    const message = createBasesclassTrainingInfo();
    message.state = object.state ?? 0;
    message.classAbilityChoices = object.classAbilityChoices?.map((e) => e) || [];
    message.rewardChoices = object.rewardChoices?.map((e) => strainingRewardInfo.fromPartial(e)) || [];
    message.characterClass = object.characterClass ?? "";
    message.isMaster = object.isMaster ?? 0;
    return message;
  },
};

function createBasestrainingCharacterInfo(): strainingCharacterInfo {
  return { characterId: "", nickname: undefined, characterClass: "", gender: 0, level: 0, isMaster: 0, hasLearn: 0 };
}

export const strainingCharacterInfo = {
  encode(message: strainingCharacterInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.characterId !== "") {
      writer.uint32(10).string(message.characterId);
    }
    if (message.nickname !== undefined) {
      saccountNickname.encode(message.nickname, writer.uint32(18).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(26).string(message.characterClass);
    }
    if (message.gender !== 0) {
      writer.uint32(32).int32(message.gender);
    }
    if (message.level !== 0) {
      writer.uint32(40).int32(message.level);
    }
    if (message.isMaster !== 0) {
      writer.uint32(48).int32(message.isMaster);
    }
    if (message.hasLearn !== 0) {
      writer.uint32(56).int32(message.hasLearn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): strainingCharacterInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasestrainingCharacterInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nickname = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gender = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.level = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isMaster = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.hasLearn = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): strainingCharacterInfo {
    return {
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      nickname: isSet(object.nickname) ? saccountNickname.fromJSON(object.nickname) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      isMaster: isSet(object.isMaster) ? Number(object.isMaster) : 0,
      hasLearn: isSet(object.hasLearn) ? Number(object.hasLearn) : 0,
    };
  },

  toJSON(message: strainingCharacterInfo): unknown {
    const obj: any = {};
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.nickname !== undefined) {
      obj.nickname = saccountNickname.toJSON(message.nickname);
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
    if (message.isMaster !== 0) {
      obj.isMaster = Math.round(message.isMaster);
    }
    if (message.hasLearn !== 0) {
      obj.hasLearn = Math.round(message.hasLearn);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<strainingCharacterInfo>, I>>(base?: I): strainingCharacterInfo {
    return strainingCharacterInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<strainingCharacterInfo>, I>>(object: I): strainingCharacterInfo {
    const message = createBasestrainingCharacterInfo();
    message.characterId = object.characterId ?? "";
    message.nickname = (object.nickname !== undefined && object.nickname !== null)
      ? saccountNickname.fromPartial(object.nickname)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    message.gender = object.gender ?? 0;
    message.level = object.level ?? 0;
    message.isMaster = object.isMaster ?? 0;
    message.hasLearn = object.hasLearn ?? 0;
    return message;
  },
};

function createBasesc2sTrainingInfoReq(): sc2sTrainingInfoReq {
  return {};
}

export const sc2sTrainingInfoReq = {
  encode(_: sc2sTrainingInfoReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTrainingInfoReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTrainingInfoReq();
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

  fromJSON(_: any): sc2sTrainingInfoReq {
    return {};
  },

  toJSON(_: sc2sTrainingInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTrainingInfoReq>, I>>(base?: I): sc2sTrainingInfoReq {
    return sc2sTrainingInfoReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTrainingInfoReq>, I>>(_: I): sc2sTrainingInfoReq {
    const message = createBasesc2sTrainingInfoReq();
    return message;
  },
};

function createBasess2cTrainingInfoRes(): ss2cTrainingInfoRes {
  return { info: undefined, characters: [] };
}

export const ss2cTrainingInfoRes = {
  encode(message: ss2cTrainingInfoRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      sclassTrainingInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.characters) {
      strainingCharacterInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTrainingInfoRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTrainingInfoRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.info = sclassTrainingInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.characters.push(strainingCharacterInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTrainingInfoRes {
    return {
      info: isSet(object.info) ? sclassTrainingInfo.fromJSON(object.info) : undefined,
      characters: Array.isArray(object?.characters)
        ? object.characters.map((e: any) => strainingCharacterInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cTrainingInfoRes): unknown {
    const obj: any = {};
    if (message.info !== undefined) {
      obj.info = sclassTrainingInfo.toJSON(message.info);
    }
    if (message.characters?.length) {
      obj.characters = message.characters.map((e) => strainingCharacterInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTrainingInfoRes>, I>>(base?: I): ss2cTrainingInfoRes {
    return ss2cTrainingInfoRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTrainingInfoRes>, I>>(object: I): ss2cTrainingInfoRes {
    const message = createBasess2cTrainingInfoRes();
    message.info = (object.info !== undefined && object.info !== null)
      ? sclassTrainingInfo.fromPartial(object.info)
      : undefined;
    message.characters = object.characters?.map((e) => strainingCharacterInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sTrainingRedeemLearningTokenReq(): sc2sTrainingRedeemLearningTokenReq {
  return { masterCharacterId: "" };
}

export const sc2sTrainingRedeemLearningTokenReq = {
  encode(message: sc2sTrainingRedeemLearningTokenReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.masterCharacterId !== "") {
      writer.uint32(10).string(message.masterCharacterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTrainingRedeemLearningTokenReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTrainingRedeemLearningTokenReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.masterCharacterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sTrainingRedeemLearningTokenReq {
    return { masterCharacterId: isSet(object.masterCharacterId) ? String(object.masterCharacterId) : "" };
  },

  toJSON(message: sc2sTrainingRedeemLearningTokenReq): unknown {
    const obj: any = {};
    if (message.masterCharacterId !== "") {
      obj.masterCharacterId = message.masterCharacterId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTrainingRedeemLearningTokenReq>, I>>(
    base?: I,
  ): sc2sTrainingRedeemLearningTokenReq {
    return sc2sTrainingRedeemLearningTokenReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTrainingRedeemLearningTokenReq>, I>>(
    object: I,
  ): sc2sTrainingRedeemLearningTokenReq {
    const message = createBasesc2sTrainingRedeemLearningTokenReq();
    message.masterCharacterId = object.masterCharacterId ?? "";
    return message;
  },
};

function createBasess2cTrainingRedeemLearningTokenRes(): ss2cTrainingRedeemLearningTokenRes {
  return { result: 0, classAbilityIds: [], masterCharacterClass: "" };
}

export const ss2cTrainingRedeemLearningTokenRes = {
  encode(message: ss2cTrainingRedeemLearningTokenRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.classAbilityIds) {
      writer.uint32(18).string(v!);
    }
    if (message.masterCharacterClass !== "") {
      writer.uint32(26).string(message.masterCharacterClass);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTrainingRedeemLearningTokenRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTrainingRedeemLearningTokenRes();
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

          message.classAbilityIds.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.masterCharacterClass = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTrainingRedeemLearningTokenRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      classAbilityIds: Array.isArray(object?.classAbilityIds) ? object.classAbilityIds.map((e: any) => String(e)) : [],
      masterCharacterClass: isSet(object.masterCharacterClass) ? String(object.masterCharacterClass) : "",
    };
  },

  toJSON(message: ss2cTrainingRedeemLearningTokenRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.classAbilityIds?.length) {
      obj.classAbilityIds = message.classAbilityIds;
    }
    if (message.masterCharacterClass !== "") {
      obj.masterCharacterClass = message.masterCharacterClass;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTrainingRedeemLearningTokenRes>, I>>(
    base?: I,
  ): ss2cTrainingRedeemLearningTokenRes {
    return ss2cTrainingRedeemLearningTokenRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTrainingRedeemLearningTokenRes>, I>>(
    object: I,
  ): ss2cTrainingRedeemLearningTokenRes {
    const message = createBasess2cTrainingRedeemLearningTokenRes();
    message.result = object.result ?? 0;
    message.classAbilityIds = object.classAbilityIds?.map((e) => e) || [];
    message.masterCharacterClass = object.masterCharacterClass ?? "";
    return message;
  },
};

function createBasesc2sTrainingReceiveClassAbilityReq(): sc2sTrainingReceiveClassAbilityReq {
  return { classAbilityId: "" };
}

export const sc2sTrainingReceiveClassAbilityReq = {
  encode(message: sc2sTrainingReceiveClassAbilityReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classAbilityId !== "") {
      writer.uint32(10).string(message.classAbilityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTrainingReceiveClassAbilityReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTrainingReceiveClassAbilityReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.classAbilityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sTrainingReceiveClassAbilityReq {
    return { classAbilityId: isSet(object.classAbilityId) ? String(object.classAbilityId) : "" };
  },

  toJSON(message: sc2sTrainingReceiveClassAbilityReq): unknown {
    const obj: any = {};
    if (message.classAbilityId !== "") {
      obj.classAbilityId = message.classAbilityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTrainingReceiveClassAbilityReq>, I>>(
    base?: I,
  ): sc2sTrainingReceiveClassAbilityReq {
    return sc2sTrainingReceiveClassAbilityReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTrainingReceiveClassAbilityReq>, I>>(
    object: I,
  ): sc2sTrainingReceiveClassAbilityReq {
    const message = createBasesc2sTrainingReceiveClassAbilityReq();
    message.classAbilityId = object.classAbilityId ?? "";
    return message;
  },
};

function createBasess2cTrainingReceiveClassAbilityRes(): ss2cTrainingReceiveClassAbilityRes {
  return { result: 0 };
}

export const ss2cTrainingReceiveClassAbilityRes = {
  encode(message: ss2cTrainingReceiveClassAbilityRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTrainingReceiveClassAbilityRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTrainingReceiveClassAbilityRes();
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

  fromJSON(object: any): ss2cTrainingReceiveClassAbilityRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cTrainingReceiveClassAbilityRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTrainingReceiveClassAbilityRes>, I>>(
    base?: I,
  ): ss2cTrainingReceiveClassAbilityRes {
    return ss2cTrainingReceiveClassAbilityRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTrainingReceiveClassAbilityRes>, I>>(
    object: I,
  ): ss2cTrainingReceiveClassAbilityRes {
    const message = createBasess2cTrainingReceiveClassAbilityRes();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBasesc2sTrainingRedeemRewardTokenReq(): sc2sTrainingRedeemRewardTokenReq {
  return {};
}

export const sc2sTrainingRedeemRewardTokenReq = {
  encode(_: sc2sTrainingRedeemRewardTokenReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTrainingRedeemRewardTokenReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTrainingRedeemRewardTokenReq();
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

  fromJSON(_: any): sc2sTrainingRedeemRewardTokenReq {
    return {};
  },

  toJSON(_: sc2sTrainingRedeemRewardTokenReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTrainingRedeemRewardTokenReq>, I>>(
    base?: I,
  ): sc2sTrainingRedeemRewardTokenReq {
    return sc2sTrainingRedeemRewardTokenReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTrainingRedeemRewardTokenReq>, I>>(
    _: I,
  ): sc2sTrainingRedeemRewardTokenReq {
    const message = createBasesc2sTrainingRedeemRewardTokenReq();
    return message;
  },
};

function createBasess2cTrainingRedeemRewardTokenRes(): ss2cTrainingRedeemRewardTokenRes {
  return { result: 0, rewards: [] };
}

export const ss2cTrainingRedeemRewardTokenRes = {
  encode(message: ss2cTrainingRedeemRewardTokenRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.rewards) {
      strainingRewardInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTrainingRedeemRewardTokenRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTrainingRedeemRewardTokenRes();
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

          message.rewards.push(strainingRewardInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTrainingRedeemRewardTokenRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => strainingRewardInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: ss2cTrainingRedeemRewardTokenRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.rewards?.length) {
      obj.rewards = message.rewards.map((e) => strainingRewardInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTrainingRedeemRewardTokenRes>, I>>(
    base?: I,
  ): ss2cTrainingRedeemRewardTokenRes {
    return ss2cTrainingRedeemRewardTokenRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTrainingRedeemRewardTokenRes>, I>>(
    object: I,
  ): ss2cTrainingRedeemRewardTokenRes {
    const message = createBasess2cTrainingRedeemRewardTokenRes();
    message.result = object.result ?? 0;
    message.rewards = object.rewards?.map((e) => strainingRewardInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasestrainingItemSlotInfo(): strainingItemSlotInfo {
  return { inventoryId: 0, slotId: 0, itemId: "", itemUniqueId: 0, itemCount: 0, itemContentsCount: 0 };
}

export const strainingItemSlotInfo = {
  encode(message: strainingItemSlotInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inventoryId !== 0) {
      writer.uint32(8).uint32(message.inventoryId);
    }
    if (message.slotId !== 0) {
      writer.uint32(16).uint32(message.slotId);
    }
    if (message.itemId !== "") {
      writer.uint32(26).string(message.itemId);
    }
    if (message.itemUniqueId !== 0) {
      writer.uint32(32).uint64(message.itemUniqueId);
    }
    if (message.itemCount !== 0) {
      writer.uint32(40).uint32(message.itemCount);
    }
    if (message.itemContentsCount !== 0) {
      writer.uint32(48).uint32(message.itemContentsCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): strainingItemSlotInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasestrainingItemSlotInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inventoryId = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.slotId = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.itemId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.itemUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.itemCount = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.itemContentsCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): strainingItemSlotInfo {
    return {
      inventoryId: isSet(object.inventoryId) ? Number(object.inventoryId) : 0,
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
      itemUniqueId: isSet(object.itemUniqueId) ? Number(object.itemUniqueId) : 0,
      itemCount: isSet(object.itemCount) ? Number(object.itemCount) : 0,
      itemContentsCount: isSet(object.itemContentsCount) ? Number(object.itemContentsCount) : 0,
    };
  },

  toJSON(message: strainingItemSlotInfo): unknown {
    const obj: any = {};
    if (message.inventoryId !== 0) {
      obj.inventoryId = Math.round(message.inventoryId);
    }
    if (message.slotId !== 0) {
      obj.slotId = Math.round(message.slotId);
    }
    if (message.itemId !== "") {
      obj.itemId = message.itemId;
    }
    if (message.itemUniqueId !== 0) {
      obj.itemUniqueId = Math.round(message.itemUniqueId);
    }
    if (message.itemCount !== 0) {
      obj.itemCount = Math.round(message.itemCount);
    }
    if (message.itemContentsCount !== 0) {
      obj.itemContentsCount = Math.round(message.itemContentsCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<strainingItemSlotInfo>, I>>(base?: I): strainingItemSlotInfo {
    return strainingItemSlotInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<strainingItemSlotInfo>, I>>(object: I): strainingItemSlotInfo {
    const message = createBasestrainingItemSlotInfo();
    message.inventoryId = object.inventoryId ?? 0;
    message.slotId = object.slotId ?? 0;
    message.itemId = object.itemId ?? "";
    message.itemUniqueId = object.itemUniqueId ?? 0;
    message.itemCount = object.itemCount ?? 0;
    message.itemContentsCount = object.itemContentsCount ?? 0;
    return message;
  },
};

function createBasesc2sTrainingReceiveRewardReq(): sc2sTrainingReceiveRewardReq {
  return { uniqueId: 0, slotInfos: [] };
}

export const sc2sTrainingReceiveRewardReq = {
  encode(message: sc2sTrainingReceiveRewardReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uniqueId !== 0) {
      writer.uint32(8).int32(message.uniqueId);
    }
    for (const v of message.slotInfos) {
      strainingItemSlotInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sTrainingReceiveRewardReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sTrainingReceiveRewardReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.uniqueId = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.slotInfos.push(strainingItemSlotInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sc2sTrainingReceiveRewardReq {
    return {
      uniqueId: isSet(object.uniqueId) ? Number(object.uniqueId) : 0,
      slotInfos: Array.isArray(object?.slotInfos)
        ? object.slotInfos.map((e: any) => strainingItemSlotInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: sc2sTrainingReceiveRewardReq): unknown {
    const obj: any = {};
    if (message.uniqueId !== 0) {
      obj.uniqueId = Math.round(message.uniqueId);
    }
    if (message.slotInfos?.length) {
      obj.slotInfos = message.slotInfos.map((e) => strainingItemSlotInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sTrainingReceiveRewardReq>, I>>(base?: I): sc2sTrainingReceiveRewardReq {
    return sc2sTrainingReceiveRewardReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sTrainingReceiveRewardReq>, I>>(object: I): sc2sTrainingReceiveRewardReq {
    const message = createBasesc2sTrainingReceiveRewardReq();
    message.uniqueId = object.uniqueId ?? 0;
    message.slotInfos = object.slotInfos?.map((e) => strainingItemSlotInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasess2cTrainingReceiveRewardRes(): ss2cTrainingReceiveRewardRes {
  return { result: 0 };
}

export const ss2cTrainingReceiveRewardRes = {
  encode(message: ss2cTrainingReceiveRewardRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cTrainingReceiveRewardRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cTrainingReceiveRewardRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cTrainingReceiveRewardRes {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: ss2cTrainingReceiveRewardRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cTrainingReceiveRewardRes>, I>>(base?: I): ss2cTrainingReceiveRewardRes {
    return ss2cTrainingReceiveRewardRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cTrainingReceiveRewardRes>, I>>(object: I): ss2cTrainingReceiveRewardRes {
    const message = createBasess2cTrainingReceiveRewardRes();
    message.result = object.result ?? 0;
    return message;
  },
};

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
  return {
    level: 0,
    exp: 0,
    expBegin: 0,
    expLimit: 0,
    rewardPoint: 0,
    nextRewardLevel: 0,
    learningPoint: 0,
    nextLearningLevel: 0,
    fame: 0,
  };
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
    if (message.nextRewardLevel !== 0) {
      writer.uint32(48).uint32(message.nextRewardLevel);
    }
    if (message.learningPoint !== 0) {
      writer.uint32(56).uint32(message.learningPoint);
    }
    if (message.nextLearningLevel !== 0) {
      writer.uint32(64).uint32(message.nextLearningLevel);
    }
    if (message.fame !== 0) {
      writer.uint32(72).uint32(message.fame);
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
        case 6:
          if (tag !== 48) {
            break;
          }

          message.nextRewardLevel = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.learningPoint = reader.uint32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.nextLearningLevel = reader.uint32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.fame = reader.uint32();
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
      nextRewardLevel: isSet(object.nextRewardLevel) ? Number(object.nextRewardLevel) : 0,
      learningPoint: isSet(object.learningPoint) ? Number(object.learningPoint) : 0,
      nextLearningLevel: isSet(object.nextLearningLevel) ? Number(object.nextLearningLevel) : 0,
      fame: isSet(object.fame) ? Number(object.fame) : 0,
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
    if (message.nextRewardLevel !== 0) {
      obj.nextRewardLevel = Math.round(message.nextRewardLevel);
    }
    if (message.learningPoint !== 0) {
      obj.learningPoint = Math.round(message.learningPoint);
    }
    if (message.nextLearningLevel !== 0) {
      obj.nextLearningLevel = Math.round(message.nextLearningLevel);
    }
    if (message.fame !== 0) {
      obj.fame = Math.round(message.fame);
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
    message.nextRewardLevel = object.nextRewardLevel ?? 0;
    message.learningPoint = object.learningPoint ?? 0;
    message.nextLearningLevel = object.nextLearningLevel ?? 0;
    message.fame = object.fame ?? 0;
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

function createBasesc2sClassShapeshiftListReq(): sc2sClassShapeshiftListReq {
  return {};
}

export const sc2sClassShapeshiftListReq = {
  encode(_: sc2sClassShapeshiftListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sClassShapeshiftListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sClassShapeshiftListReq();
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

  fromJSON(_: any): sc2sClassShapeshiftListReq {
    return {};
  },

  toJSON(_: sc2sClassShapeshiftListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sClassShapeshiftListReq>, I>>(base?: I): sc2sClassShapeshiftListReq {
    return sc2sClassShapeshiftListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sClassShapeshiftListReq>, I>>(_: I): sc2sClassShapeshiftListReq {
    const message = createBasesc2sClassShapeshiftListReq();
    return message;
  },
};

function createBasess2cClassShapeshiftListRes(): ss2cClassShapeshiftListRes {
  return { shapeShifts: [] };
}

export const ss2cClassShapeshiftListRes = {
  encode(message: ss2cClassShapeshiftListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.shapeShifts) {
      SShapeShift.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClassShapeshiftListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClassShapeshiftListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shapeShifts.push(SShapeShift.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cClassShapeshiftListRes {
    return {
      shapeShifts: Array.isArray(object?.shapeShifts)
        ? object.shapeShifts.map((e: any) => SShapeShift.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cClassShapeshiftListRes): unknown {
    const obj: any = {};
    if (message.shapeShifts?.length) {
      obj.shapeShifts = message.shapeShifts.map((e) => SShapeShift.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClassShapeshiftListRes>, I>>(base?: I): ss2cClassShapeshiftListRes {
    return ss2cClassShapeshiftListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClassShapeshiftListRes>, I>>(object: I): ss2cClassShapeshiftListRes {
    const message = createBasess2cClassShapeshiftListRes();
    message.shapeShifts = object.shapeShifts?.map((e) => SShapeShift.fromPartial(e)) || [];
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

function createBasesc2sClassMusicSequenceChangeReq(): sc2sClassMusicSequenceChangeReq {
  return { musicId: "", dstSequenceIndex: 0 };
}

export const sc2sClassMusicSequenceChangeReq = {
  encode(message: sc2sClassMusicSequenceChangeReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.musicId !== "") {
      writer.uint32(10).string(message.musicId);
    }
    if (message.dstSequenceIndex !== 0) {
      writer.uint32(16).uint32(message.dstSequenceIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sClassMusicSequenceChangeReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sClassMusicSequenceChangeReq();
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

  fromJSON(object: any): sc2sClassMusicSequenceChangeReq {
    return {
      musicId: isSet(object.musicId) ? String(object.musicId) : "",
      dstSequenceIndex: isSet(object.dstSequenceIndex) ? Number(object.dstSequenceIndex) : 0,
    };
  },

  toJSON(message: sc2sClassMusicSequenceChangeReq): unknown {
    const obj: any = {};
    if (message.musicId !== "") {
      obj.musicId = message.musicId;
    }
    if (message.dstSequenceIndex !== 0) {
      obj.dstSequenceIndex = Math.round(message.dstSequenceIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sClassMusicSequenceChangeReq>, I>>(base?: I): sc2sClassMusicSequenceChangeReq {
    return sc2sClassMusicSequenceChangeReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sClassMusicSequenceChangeReq>, I>>(
    object: I,
  ): sc2sClassMusicSequenceChangeReq {
    const message = createBasesc2sClassMusicSequenceChangeReq();
    message.musicId = object.musicId ?? "";
    message.dstSequenceIndex = object.dstSequenceIndex ?? 0;
    return message;
  },
};

function createBasess2cClassMusicSequenceChangeRes(): ss2cClassMusicSequenceChangeRes {
  return { result: 0, equipMusicList: [] };
}

export const ss2cClassMusicSequenceChangeRes = {
  encode(message: ss2cClassMusicSequenceChangeRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipMusicList) {
      SMusic.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClassMusicSequenceChangeRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClassMusicSequenceChangeRes();
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

  fromJSON(object: any): ss2cClassMusicSequenceChangeRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipMusicList: Array.isArray(object?.equipMusicList)
        ? object.equipMusicList.map((e: any) => SMusic.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cClassMusicSequenceChangeRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.equipMusicList?.length) {
      obj.equipMusicList = message.equipMusicList.map((e) => SMusic.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClassMusicSequenceChangeRes>, I>>(base?: I): ss2cClassMusicSequenceChangeRes {
    return ss2cClassMusicSequenceChangeRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClassMusicSequenceChangeRes>, I>>(
    object: I,
  ): ss2cClassMusicSequenceChangeRes {
    const message = createBasess2cClassMusicSequenceChangeRes();
    message.result = object.result ?? 0;
    message.equipMusicList = object.equipMusicList?.map((e) => SMusic.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sClassShapeshiftSlotMoveReq(): sc2sClassShapeshiftSlotMoveReq {
  return { shapeShiftId: "", dstSlotIndex: 0 };
}

export const sc2sClassShapeshiftSlotMoveReq = {
  encode(message: sc2sClassShapeshiftSlotMoveReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shapeShiftId !== "") {
      writer.uint32(10).string(message.shapeShiftId);
    }
    if (message.dstSlotIndex !== 0) {
      writer.uint32(16).int32(message.dstSlotIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sClassShapeshiftSlotMoveReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sClassShapeshiftSlotMoveReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shapeShiftId = reader.string();
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

  fromJSON(object: any): sc2sClassShapeshiftSlotMoveReq {
    return {
      shapeShiftId: isSet(object.shapeShiftId) ? String(object.shapeShiftId) : "",
      dstSlotIndex: isSet(object.dstSlotIndex) ? Number(object.dstSlotIndex) : 0,
    };
  },

  toJSON(message: sc2sClassShapeshiftSlotMoveReq): unknown {
    const obj: any = {};
    if (message.shapeShiftId !== "") {
      obj.shapeShiftId = message.shapeShiftId;
    }
    if (message.dstSlotIndex !== 0) {
      obj.dstSlotIndex = Math.round(message.dstSlotIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sClassShapeshiftSlotMoveReq>, I>>(base?: I): sc2sClassShapeshiftSlotMoveReq {
    return sc2sClassShapeshiftSlotMoveReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sClassShapeshiftSlotMoveReq>, I>>(
    object: I,
  ): sc2sClassShapeshiftSlotMoveReq {
    const message = createBasesc2sClassShapeshiftSlotMoveReq();
    message.shapeShiftId = object.shapeShiftId ?? "";
    message.dstSlotIndex = object.dstSlotIndex ?? 0;
    return message;
  },
};

function createBasess2cClassShapeshiftSlotMoveRes(): ss2cClassShapeshiftSlotMoveRes {
  return { result: 0, equipShapeShiftList: [] };
}

export const ss2cClassShapeshiftSlotMoveRes = {
  encode(message: ss2cClassShapeshiftSlotMoveRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipShapeShiftList) {
      SShapeShift.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClassShapeshiftSlotMoveRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClassShapeshiftSlotMoveRes();
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

          message.equipShapeShiftList.push(SShapeShift.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cClassShapeshiftSlotMoveRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipShapeShiftList: Array.isArray(object?.equipShapeShiftList)
        ? object.equipShapeShiftList.map((e: any) => SShapeShift.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cClassShapeshiftSlotMoveRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.equipShapeShiftList?.length) {
      obj.equipShapeShiftList = message.equipShapeShiftList.map((e) => SShapeShift.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClassShapeshiftSlotMoveRes>, I>>(base?: I): ss2cClassShapeshiftSlotMoveRes {
    return ss2cClassShapeshiftSlotMoveRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClassShapeshiftSlotMoveRes>, I>>(
    object: I,
  ): ss2cClassShapeshiftSlotMoveRes {
    const message = createBasess2cClassShapeshiftSlotMoveRes();
    message.result = object.result ?? 0;
    message.equipShapeShiftList = object.equipShapeShiftList?.map((e) => SShapeShift.fromPartial(e)) || [];
    return message;
  },
};

function createBasesc2sClassShapeshiftSequenceChangeReq(): sc2sClassShapeshiftSequenceChangeReq {
  return { shapeShiftId: "", dstSequenceIndex: 0 };
}

export const sc2sClassShapeshiftSequenceChangeReq = {
  encode(message: sc2sClassShapeshiftSequenceChangeReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shapeShiftId !== "") {
      writer.uint32(10).string(message.shapeShiftId);
    }
    if (message.dstSequenceIndex !== 0) {
      writer.uint32(16).uint32(message.dstSequenceIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sc2sClassShapeshiftSequenceChangeReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesc2sClassShapeshiftSequenceChangeReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shapeShiftId = reader.string();
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

  fromJSON(object: any): sc2sClassShapeshiftSequenceChangeReq {
    return {
      shapeShiftId: isSet(object.shapeShiftId) ? String(object.shapeShiftId) : "",
      dstSequenceIndex: isSet(object.dstSequenceIndex) ? Number(object.dstSequenceIndex) : 0,
    };
  },

  toJSON(message: sc2sClassShapeshiftSequenceChangeReq): unknown {
    const obj: any = {};
    if (message.shapeShiftId !== "") {
      obj.shapeShiftId = message.shapeShiftId;
    }
    if (message.dstSequenceIndex !== 0) {
      obj.dstSequenceIndex = Math.round(message.dstSequenceIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sc2sClassShapeshiftSequenceChangeReq>, I>>(
    base?: I,
  ): sc2sClassShapeshiftSequenceChangeReq {
    return sc2sClassShapeshiftSequenceChangeReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sc2sClassShapeshiftSequenceChangeReq>, I>>(
    object: I,
  ): sc2sClassShapeshiftSequenceChangeReq {
    const message = createBasesc2sClassShapeshiftSequenceChangeReq();
    message.shapeShiftId = object.shapeShiftId ?? "";
    message.dstSequenceIndex = object.dstSequenceIndex ?? 0;
    return message;
  },
};

function createBasess2cClassShapeshiftSequenceChangeRes(): ss2cClassShapeshiftSequenceChangeRes {
  return { result: 0, equipShapeShiftList: [] };
}

export const ss2cClassShapeshiftSequenceChangeRes = {
  encode(message: ss2cClassShapeshiftSequenceChangeRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    for (const v of message.equipShapeShiftList) {
      SShapeShift.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ss2cClassShapeshiftSequenceChangeRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasess2cClassShapeshiftSequenceChangeRes();
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

          message.equipShapeShiftList.push(SShapeShift.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ss2cClassShapeshiftSequenceChangeRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      equipShapeShiftList: Array.isArray(object?.equipShapeShiftList)
        ? object.equipShapeShiftList.map((e: any) => SShapeShift.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ss2cClassShapeshiftSequenceChangeRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.equipShapeShiftList?.length) {
      obj.equipShapeShiftList = message.equipShapeShiftList.map((e) => SShapeShift.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ss2cClassShapeshiftSequenceChangeRes>, I>>(
    base?: I,
  ): ss2cClassShapeshiftSequenceChangeRes {
    return ss2cClassShapeshiftSequenceChangeRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ss2cClassShapeshiftSequenceChangeRes>, I>>(
    object: I,
  ): ss2cClassShapeshiftSequenceChangeRes {
    const message = createBasess2cClassShapeshiftSequenceChangeRes();
    message.result = object.result ?? 0;
    message.equipShapeShiftList = object.equipShapeShiftList?.map((e) => SShapeShift.fromPartial(e)) || [];
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
