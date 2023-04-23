/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { saccountNickname } from "./_Character";
import { SDownItem, SEMOTE, SItem, SPerk, SSkill, SSpell } from "./_Item";

export const protobufPackage = "DC.Packet";

export interface S2CGameEnterUserJson {
  restUrl: string;
  nickName: Uint8Array;
  streamingNickName: Uint8Array;
  characterClass: string;
  characterId: string;
  gender: number;
  level: number;
  partyId: string;
  karmaRating: number;
}

export interface GameExitAdvPoint {
  advPointType: number;
  advPoint: number;
}

export interface GameExitExpPoint {
  expPointType: number;
  expPoint: number;
}

export interface Killlog {
  instigatorAccountId: string;
  instigatorName: string;
  effectCauserName: string;
  hitBoxType: number;
}

export interface MonsterKillLog {
  monsterName: string;
  monsterKillCount: number;
}

export interface C2SGameExitUserPOST {
  escape: number;
  accountId: string;
  characterId: string;
  gameId: number;
  items: SItem[];
  guaranteedItems: SItem[];
  characterClass: string;
  killCount: number;
  advPoints: GameExitAdvPoint[];
  escapeMapName: string;
  reason: string;
  expPoints: GameExitExpPoint[];
  killLogData: Killlog[];
  monsterKillLogs: MonsterKillLog[];
  gameDifficultyType: number;
  needBlock: number;
  needHWBlock: number;
}

export enum C2SGameExitUserPOST_ESCAPE {
  NONE = 0,
  SUCCESS = 1,
  FAIL = 2,
  UNRECOGNIZED = -1,
}

export function c2SGameExitUserPOST_ESCAPEFromJSON(object: any): C2SGameExitUserPOST_ESCAPE {
  switch (object) {
    case 0:
    case "NONE":
      return C2SGameExitUserPOST_ESCAPE.NONE;
    case 1:
    case "SUCCESS":
      return C2SGameExitUserPOST_ESCAPE.SUCCESS;
    case 2:
    case "FAIL":
      return C2SGameExitUserPOST_ESCAPE.FAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return C2SGameExitUserPOST_ESCAPE.UNRECOGNIZED;
  }
}

export function c2SGameExitUserPOST_ESCAPEToJSON(object: C2SGameExitUserPOST_ESCAPE): string {
  switch (object) {
    case C2SGameExitUserPOST_ESCAPE.NONE:
      return "NONE";
    case C2SGameExitUserPOST_ESCAPE.SUCCESS:
      return "SUCCESS";
    case C2SGameExitUserPOST_ESCAPE.FAIL:
      return "FAIL";
    case C2SGameExitUserPOST_ESCAPE.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface C2SGameEnterUserPost {
  accountId: string;
  characterId: string;
  gameId: number;
  isSuccess: number;
}

export interface StartGameSessionDataDiscrepancy {
  movementTimeDiscrepancyDetection: number;
  movementTimeDiscrepancyResolution: number;
  movementTimeDiscrepancyMaxTimeMargin: number;
  movementTimeDiscrepancyMinTimeMargin: number;
  movementTimeDiscrepancyResolutionRate: number;
  movementTimeDiscrepancyDriftAllowance: number;
  movementTimeDiscrepancyForceCorrectionsDuringResolution: number;
}

export interface StartGameSessionDataHackPolicy {
  hackIronShieldScanSpeedHack: number;
  hackIronShieldScanDllInjection: number;
  hackMovementScan: number;
  hackMeleeAttackScan: number;
  hackInvalidItemScan: number;
  hackInteractionScan: number;
  hackIronShieldScanEspHack: number;
}

export interface S2CGameStartServerJson {
  restUrl: string;
  gameId: number;
  maxGameUser: number;
  waitTimeSec: number;
  discrepancy: StartGameSessionDataDiscrepancy | undefined;
  gameHackPolicy: number;
  validPlayerMeleeAttackRange: number;
  gameDifficultyType: number;
  shippingLogOnOffPolicy: number;
  shippingLogLevelPolicy: number;
  gmOnOffPolicy: number;
  allowedInteractionPolicy: number;
  allowedInteractionDistance: number;
  allowedInteractionXyDistance: number;
  hackPolicy: StartGameSessionDataHackPolicy | undefined;
  currentFloor: number;
  isFloorMatchmaking: number;
}

export interface C2SGameEndServerPOST {
  users: GameEndUserInfo[];
  gameId: number;
}

export interface GameEndUserInfo {
  accountId: string;
  kill: number;
  death: number;
}

export interface C2SGameStartPOST {
  gameId: number;
  mapNames: string[];
}

export interface C2SGameCharacterInfoGet {
  gameId: number;
  accountId: string;
  characterId: string;
}

export interface S2CGameCharacterInfoJson {
  gameId: number;
  accountId: string;
  characterId: string;
  items: SItem[];
  perks: SPerk[];
  skills: SSkill[];
  spells: SSpell[];
  characterSkinIds: string[];
  itemSkinIds: string[];
  emotes: SEMOTE[];
  actionIds: string[];
}

export interface C2SGameAliveCheckGET {
  gameId: number;
}

export interface AliveDataInfo {
  Id: string;
  Us: string[];
}

export interface C2SAliveAppendDataGET {
  Gs: string;
  infos: AliveDataInfo[];
}

export interface C2SGameInterruptPOST {
  gameId: number;
}

export interface C2SUserReportPOST {
  gameId: number;
  reportAccountId: string;
  category: number[];
  targetAccountId: string;
  targetNickName: saccountNickname | undefined;
  targetCharacterId: string;
  reportContent: string;
}

export interface S2CUserReportPOSTResponse {
  reportAccountId: string;
  targetAccountId: string;
  reportKey: string;
  category: number;
}

export interface GameResultInfo {
  accountId: string;
  characterId: string;
  gameId: number;
  characterClass: string;
  killCount: number;
  advPoints: GameExitAdvPoint[];
  escapeMapName: string;
  reason: string;
  expPoints: GameExitExpPoint[];
  killLogData: Killlog[];
  monsterKillLogs: MonsterKillLog[];
  gameDifficultyType: number;
  needBlock: number;
  needHWBlock: number;
}

export interface C2SGameDownUserPOST {
  resultInfo: GameResultInfo | undefined;
  downItems: SDownItem[];
  currentFloor: number;
  hp: number;
  partyAccountIds: string[];
  partyIdx: number;
}

export interface C2SGameEscapeUserPOST {
  resultInfo: GameResultInfo | undefined;
  items: SItem[];
}

export interface C2SGameExitUserV2POST {
  resultInfo: GameResultInfo | undefined;
}

export interface C2SGameExitEscapedUserPOST {
  accountId: string;
  characterId: string;
  gameId: number;
}

export interface S2CGameCharacterInfoDownJson {
  gameId: number;
  accountId: string;
  characterId: string;
  downItems: SDownItem[];
  perks: SPerk[];
  skills: SSkill[];
  spells: SSpell[];
  characterSkinIds: string[];
  itemSkinIds: string[];
  emotes: SEMOTE[];
  hp: number;
}

export interface S2CGamePolicyGET {
  appHash: string[];
  policyJson: string;
}

export interface C2SGameSpectatorCheckPOST {
  accountId: string;
  token: string;
}

export interface S2CGameSpectatorCheckJson {
  isSuccess: number;
}

export interface GameDownUserPartyInfo {
  accountId: string;
  nickname: saccountNickname | undefined;
  characterClass: string;
  gender: number;
  level: number;
}

export interface S2CGameDownUserPartyGET {
  partyMember: GameDownUserPartyInfo[];
}

function createBaseS2CGameEnterUserJson(): S2CGameEnterUserJson {
  return {
    restUrl: "",
    nickName: new Uint8Array(),
    streamingNickName: new Uint8Array(),
    characterClass: "",
    characterId: "",
    gender: 0,
    level: 0,
    partyId: "",
    karmaRating: 0,
  };
}

export const S2CGameEnterUserJson = {
  encode(message: S2CGameEnterUserJson, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.restUrl !== "") {
      writer.uint32(10).string(message.restUrl);
    }
    if (message.nickName.length !== 0) {
      writer.uint32(18).bytes(message.nickName);
    }
    if (message.streamingNickName.length !== 0) {
      writer.uint32(26).bytes(message.streamingNickName);
    }
    if (message.characterClass !== "") {
      writer.uint32(34).string(message.characterClass);
    }
    if (message.characterId !== "") {
      writer.uint32(42).string(message.characterId);
    }
    if (message.gender !== 0) {
      writer.uint32(48).uint32(message.gender);
    }
    if (message.level !== 0) {
      writer.uint32(56).uint32(message.level);
    }
    if (message.partyId !== "") {
      writer.uint32(66).string(message.partyId);
    }
    if (message.karmaRating !== 0) {
      writer.uint32(72).int32(message.karmaRating);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S2CGameEnterUserJson {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS2CGameEnterUserJson();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.restUrl = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.nickName = reader.bytes();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.streamingNickName = reader.bytes();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.gender = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.partyId = reader.string();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.karmaRating = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S2CGameEnterUserJson {
    return {
      restUrl: isSet(object.restUrl) ? String(object.restUrl) : "",
      nickName: isSet(object.nickName) ? bytesFromBase64(object.nickName) : new Uint8Array(),
      streamingNickName: isSet(object.streamingNickName) ? bytesFromBase64(object.streamingNickName) : new Uint8Array(),
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      karmaRating: isSet(object.karmaRating) ? Number(object.karmaRating) : 0,
    };
  },

  toJSON(message: S2CGameEnterUserJson): unknown {
    const obj: any = {};
    message.restUrl !== undefined && (obj.restUrl = message.restUrl);
    message.nickName !== undefined &&
      (obj.nickName = base64FromBytes(message.nickName !== undefined ? message.nickName : new Uint8Array()));
    message.streamingNickName !== undefined &&
      (obj.streamingNickName = base64FromBytes(
        message.streamingNickName !== undefined ? message.streamingNickName : new Uint8Array(),
      ));
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    message.characterId !== undefined && (obj.characterId = message.characterId);
    message.gender !== undefined && (obj.gender = Math.round(message.gender));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.karmaRating !== undefined && (obj.karmaRating = Math.round(message.karmaRating));
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CGameEnterUserJson>, I>>(base?: I): S2CGameEnterUserJson {
    return S2CGameEnterUserJson.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<S2CGameEnterUserJson>, I>>(object: I): S2CGameEnterUserJson {
    const message = createBaseS2CGameEnterUserJson();
    message.restUrl = object.restUrl ?? "";
    message.nickName = object.nickName ?? new Uint8Array();
    message.streamingNickName = object.streamingNickName ?? new Uint8Array();
    message.characterClass = object.characterClass ?? "";
    message.characterId = object.characterId ?? "";
    message.gender = object.gender ?? 0;
    message.level = object.level ?? 0;
    message.partyId = object.partyId ?? "";
    message.karmaRating = object.karmaRating ?? 0;
    return message;
  },
};

function createBaseGameExitAdvPoint(): GameExitAdvPoint {
  return { advPointType: 0, advPoint: 0 };
}

export const GameExitAdvPoint = {
  encode(message: GameExitAdvPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.advPointType !== 0) {
      writer.uint32(8).uint32(message.advPointType);
    }
    if (message.advPoint !== 0) {
      writer.uint32(16).uint32(message.advPoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameExitAdvPoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameExitAdvPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.advPointType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.advPoint = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GameExitAdvPoint {
    return {
      advPointType: isSet(object.advPointType) ? Number(object.advPointType) : 0,
      advPoint: isSet(object.advPoint) ? Number(object.advPoint) : 0,
    };
  },

  toJSON(message: GameExitAdvPoint): unknown {
    const obj: any = {};
    message.advPointType !== undefined && (obj.advPointType = Math.round(message.advPointType));
    message.advPoint !== undefined && (obj.advPoint = Math.round(message.advPoint));
    return obj;
  },

  create<I extends Exact<DeepPartial<GameExitAdvPoint>, I>>(base?: I): GameExitAdvPoint {
    return GameExitAdvPoint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GameExitAdvPoint>, I>>(object: I): GameExitAdvPoint {
    const message = createBaseGameExitAdvPoint();
    message.advPointType = object.advPointType ?? 0;
    message.advPoint = object.advPoint ?? 0;
    return message;
  },
};

function createBaseGameExitExpPoint(): GameExitExpPoint {
  return { expPointType: 0, expPoint: 0 };
}

export const GameExitExpPoint = {
  encode(message: GameExitExpPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expPointType !== 0) {
      writer.uint32(8).uint32(message.expPointType);
    }
    if (message.expPoint !== 0) {
      writer.uint32(16).uint32(message.expPoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameExitExpPoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameExitExpPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.expPointType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.expPoint = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GameExitExpPoint {
    return {
      expPointType: isSet(object.expPointType) ? Number(object.expPointType) : 0,
      expPoint: isSet(object.expPoint) ? Number(object.expPoint) : 0,
    };
  },

  toJSON(message: GameExitExpPoint): unknown {
    const obj: any = {};
    message.expPointType !== undefined && (obj.expPointType = Math.round(message.expPointType));
    message.expPoint !== undefined && (obj.expPoint = Math.round(message.expPoint));
    return obj;
  },

  create<I extends Exact<DeepPartial<GameExitExpPoint>, I>>(base?: I): GameExitExpPoint {
    return GameExitExpPoint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GameExitExpPoint>, I>>(object: I): GameExitExpPoint {
    const message = createBaseGameExitExpPoint();
    message.expPointType = object.expPointType ?? 0;
    message.expPoint = object.expPoint ?? 0;
    return message;
  },
};

function createBaseKilllog(): Killlog {
  return { instigatorAccountId: "", instigatorName: "", effectCauserName: "", hitBoxType: 0 };
}

export const Killlog = {
  encode(message: Killlog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instigatorAccountId !== "") {
      writer.uint32(10).string(message.instigatorAccountId);
    }
    if (message.instigatorName !== "") {
      writer.uint32(18).string(message.instigatorName);
    }
    if (message.effectCauserName !== "") {
      writer.uint32(26).string(message.effectCauserName);
    }
    if (message.hitBoxType !== 0) {
      writer.uint32(32).uint32(message.hitBoxType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Killlog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKilllog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.instigatorAccountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.instigatorName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.effectCauserName = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.hitBoxType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Killlog {
    return {
      instigatorAccountId: isSet(object.instigatorAccountId) ? String(object.instigatorAccountId) : "",
      instigatorName: isSet(object.instigatorName) ? String(object.instigatorName) : "",
      effectCauserName: isSet(object.effectCauserName) ? String(object.effectCauserName) : "",
      hitBoxType: isSet(object.hitBoxType) ? Number(object.hitBoxType) : 0,
    };
  },

  toJSON(message: Killlog): unknown {
    const obj: any = {};
    message.instigatorAccountId !== undefined && (obj.instigatorAccountId = message.instigatorAccountId);
    message.instigatorName !== undefined && (obj.instigatorName = message.instigatorName);
    message.effectCauserName !== undefined && (obj.effectCauserName = message.effectCauserName);
    message.hitBoxType !== undefined && (obj.hitBoxType = Math.round(message.hitBoxType));
    return obj;
  },

  create<I extends Exact<DeepPartial<Killlog>, I>>(base?: I): Killlog {
    return Killlog.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Killlog>, I>>(object: I): Killlog {
    const message = createBaseKilllog();
    message.instigatorAccountId = object.instigatorAccountId ?? "";
    message.instigatorName = object.instigatorName ?? "";
    message.effectCauserName = object.effectCauserName ?? "";
    message.hitBoxType = object.hitBoxType ?? 0;
    return message;
  },
};

function createBaseMonsterKillLog(): MonsterKillLog {
  return { monsterName: "", monsterKillCount: 0 };
}

export const MonsterKillLog = {
  encode(message: MonsterKillLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.monsterName !== "") {
      writer.uint32(10).string(message.monsterName);
    }
    if (message.monsterKillCount !== 0) {
      writer.uint32(16).uint32(message.monsterKillCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MonsterKillLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonsterKillLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.monsterName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.monsterKillCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MonsterKillLog {
    return {
      monsterName: isSet(object.monsterName) ? String(object.monsterName) : "",
      monsterKillCount: isSet(object.monsterKillCount) ? Number(object.monsterKillCount) : 0,
    };
  },

  toJSON(message: MonsterKillLog): unknown {
    const obj: any = {};
    message.monsterName !== undefined && (obj.monsterName = message.monsterName);
    message.monsterKillCount !== undefined && (obj.monsterKillCount = Math.round(message.monsterKillCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<MonsterKillLog>, I>>(base?: I): MonsterKillLog {
    return MonsterKillLog.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MonsterKillLog>, I>>(object: I): MonsterKillLog {
    const message = createBaseMonsterKillLog();
    message.monsterName = object.monsterName ?? "";
    message.monsterKillCount = object.monsterKillCount ?? 0;
    return message;
  },
};

function createBaseC2SGameExitUserPOST(): C2SGameExitUserPOST {
  return {
    escape: 0,
    accountId: "",
    characterId: "",
    gameId: 0,
    items: [],
    guaranteedItems: [],
    characterClass: "",
    killCount: 0,
    advPoints: [],
    escapeMapName: "",
    reason: "",
    expPoints: [],
    killLogData: [],
    monsterKillLogs: [],
    gameDifficultyType: 0,
    needBlock: 0,
    needHWBlock: 0,
  };
}

export const C2SGameExitUserPOST = {
  encode(message: C2SGameExitUserPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.escape !== 0) {
      writer.uint32(8).uint32(message.escape);
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(26).string(message.characterId);
    }
    if (message.gameId !== 0) {
      writer.uint32(32).uint64(message.gameId);
    }
    for (const v of message.items) {
      SItem.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.guaranteedItems) {
      SItem.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(58).string(message.characterClass);
    }
    if (message.killCount !== 0) {
      writer.uint32(64).uint32(message.killCount);
    }
    for (const v of message.advPoints) {
      GameExitAdvPoint.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.escapeMapName !== "") {
      writer.uint32(82).string(message.escapeMapName);
    }
    if (message.reason !== "") {
      writer.uint32(90).string(message.reason);
    }
    for (const v of message.expPoints) {
      GameExitExpPoint.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.killLogData) {
      Killlog.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.monsterKillLogs) {
      MonsterKillLog.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.gameDifficultyType !== 0) {
      writer.uint32(120).uint32(message.gameDifficultyType);
    }
    if (message.needBlock !== 0) {
      writer.uint32(128).uint32(message.needBlock);
    }
    if (message.needHWBlock !== 0) {
      writer.uint32(136).uint32(message.needHWBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SGameExitUserPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SGameExitUserPOST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.escape = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.items.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.guaranteedItems.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.killCount = reader.uint32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.advPoints.push(GameExitAdvPoint.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.escapeMapName = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.expPoints.push(GameExitExpPoint.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.killLogData.push(Killlog.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.monsterKillLogs.push(MonsterKillLog.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.gameDifficultyType = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.needBlock = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.needHWBlock = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SGameExitUserPOST {
    return {
      escape: isSet(object.escape) ? Number(object.escape) : 0,
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => SItem.fromJSON(e)) : [],
      guaranteedItems: Array.isArray(object?.guaranteedItems)
        ? object.guaranteedItems.map((e: any) => SItem.fromJSON(e))
        : [],
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      killCount: isSet(object.killCount) ? Number(object.killCount) : 0,
      advPoints: Array.isArray(object?.advPoints) ? object.advPoints.map((e: any) => GameExitAdvPoint.fromJSON(e)) : [],
      escapeMapName: isSet(object.escapeMapName) ? String(object.escapeMapName) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      expPoints: Array.isArray(object?.expPoints) ? object.expPoints.map((e: any) => GameExitExpPoint.fromJSON(e)) : [],
      killLogData: Array.isArray(object?.killLogData) ? object.killLogData.map((e: any) => Killlog.fromJSON(e)) : [],
      monsterKillLogs: Array.isArray(object?.monsterKillLogs)
        ? object.monsterKillLogs.map((e: any) => MonsterKillLog.fromJSON(e))
        : [],
      gameDifficultyType: isSet(object.gameDifficultyType) ? Number(object.gameDifficultyType) : 0,
      needBlock: isSet(object.needBlock) ? Number(object.needBlock) : 0,
      needHWBlock: isSet(object.needHWBlock) ? Number(object.needHWBlock) : 0,
    };
  },

  toJSON(message: C2SGameExitUserPOST): unknown {
    const obj: any = {};
    message.escape !== undefined && (obj.escape = Math.round(message.escape));
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.characterId !== undefined && (obj.characterId = message.characterId);
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    if (message.items) {
      obj.items = message.items.map((e) => e ? SItem.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    if (message.guaranteedItems) {
      obj.guaranteedItems = message.guaranteedItems.map((e) => e ? SItem.toJSON(e) : undefined);
    } else {
      obj.guaranteedItems = [];
    }
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    message.killCount !== undefined && (obj.killCount = Math.round(message.killCount));
    if (message.advPoints) {
      obj.advPoints = message.advPoints.map((e) => e ? GameExitAdvPoint.toJSON(e) : undefined);
    } else {
      obj.advPoints = [];
    }
    message.escapeMapName !== undefined && (obj.escapeMapName = message.escapeMapName);
    message.reason !== undefined && (obj.reason = message.reason);
    if (message.expPoints) {
      obj.expPoints = message.expPoints.map((e) => e ? GameExitExpPoint.toJSON(e) : undefined);
    } else {
      obj.expPoints = [];
    }
    if (message.killLogData) {
      obj.killLogData = message.killLogData.map((e) => e ? Killlog.toJSON(e) : undefined);
    } else {
      obj.killLogData = [];
    }
    if (message.monsterKillLogs) {
      obj.monsterKillLogs = message.monsterKillLogs.map((e) => e ? MonsterKillLog.toJSON(e) : undefined);
    } else {
      obj.monsterKillLogs = [];
    }
    message.gameDifficultyType !== undefined && (obj.gameDifficultyType = Math.round(message.gameDifficultyType));
    message.needBlock !== undefined && (obj.needBlock = Math.round(message.needBlock));
    message.needHWBlock !== undefined && (obj.needHWBlock = Math.round(message.needHWBlock));
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameExitUserPOST>, I>>(base?: I): C2SGameExitUserPOST {
    return C2SGameExitUserPOST.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<C2SGameExitUserPOST>, I>>(object: I): C2SGameExitUserPOST {
    const message = createBaseC2SGameExitUserPOST();
    message.escape = object.escape ?? 0;
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.gameId = object.gameId ?? 0;
    message.items = object.items?.map((e) => SItem.fromPartial(e)) || [];
    message.guaranteedItems = object.guaranteedItems?.map((e) => SItem.fromPartial(e)) || [];
    message.characterClass = object.characterClass ?? "";
    message.killCount = object.killCount ?? 0;
    message.advPoints = object.advPoints?.map((e) => GameExitAdvPoint.fromPartial(e)) || [];
    message.escapeMapName = object.escapeMapName ?? "";
    message.reason = object.reason ?? "";
    message.expPoints = object.expPoints?.map((e) => GameExitExpPoint.fromPartial(e)) || [];
    message.killLogData = object.killLogData?.map((e) => Killlog.fromPartial(e)) || [];
    message.monsterKillLogs = object.monsterKillLogs?.map((e) => MonsterKillLog.fromPartial(e)) || [];
    message.gameDifficultyType = object.gameDifficultyType ?? 0;
    message.needBlock = object.needBlock ?? 0;
    message.needHWBlock = object.needHWBlock ?? 0;
    return message;
  },
};

function createBaseC2SGameEnterUserPost(): C2SGameEnterUserPost {
  return { accountId: "", characterId: "", gameId: 0, isSuccess: 0 };
}

export const C2SGameEnterUserPost = {
  encode(message: C2SGameEnterUserPost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.gameId !== 0) {
      writer.uint32(24).uint64(message.gameId);
    }
    if (message.isSuccess !== 0) {
      writer.uint32(32).uint32(message.isSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SGameEnterUserPost {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SGameEnterUserPost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isSuccess = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SGameEnterUserPost {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      isSuccess: isSet(object.isSuccess) ? Number(object.isSuccess) : 0,
    };
  },

  toJSON(message: C2SGameEnterUserPost): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.characterId !== undefined && (obj.characterId = message.characterId);
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    message.isSuccess !== undefined && (obj.isSuccess = Math.round(message.isSuccess));
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameEnterUserPost>, I>>(base?: I): C2SGameEnterUserPost {
    return C2SGameEnterUserPost.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<C2SGameEnterUserPost>, I>>(object: I): C2SGameEnterUserPost {
    const message = createBaseC2SGameEnterUserPost();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.gameId = object.gameId ?? 0;
    message.isSuccess = object.isSuccess ?? 0;
    return message;
  },
};

function createBaseStartGameSessionDataDiscrepancy(): StartGameSessionDataDiscrepancy {
  return {
    movementTimeDiscrepancyDetection: 0,
    movementTimeDiscrepancyResolution: 0,
    movementTimeDiscrepancyMaxTimeMargin: 0,
    movementTimeDiscrepancyMinTimeMargin: 0,
    movementTimeDiscrepancyResolutionRate: 0,
    movementTimeDiscrepancyDriftAllowance: 0,
    movementTimeDiscrepancyForceCorrectionsDuringResolution: 0,
  };
}

export const StartGameSessionDataDiscrepancy = {
  encode(message: StartGameSessionDataDiscrepancy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.movementTimeDiscrepancyDetection !== 0) {
      writer.uint32(8).uint32(message.movementTimeDiscrepancyDetection);
    }
    if (message.movementTimeDiscrepancyResolution !== 0) {
      writer.uint32(16).uint32(message.movementTimeDiscrepancyResolution);
    }
    if (message.movementTimeDiscrepancyMaxTimeMargin !== 0) {
      writer.uint32(29).float(message.movementTimeDiscrepancyMaxTimeMargin);
    }
    if (message.movementTimeDiscrepancyMinTimeMargin !== 0) {
      writer.uint32(37).float(message.movementTimeDiscrepancyMinTimeMargin);
    }
    if (message.movementTimeDiscrepancyResolutionRate !== 0) {
      writer.uint32(45).float(message.movementTimeDiscrepancyResolutionRate);
    }
    if (message.movementTimeDiscrepancyDriftAllowance !== 0) {
      writer.uint32(53).float(message.movementTimeDiscrepancyDriftAllowance);
    }
    if (message.movementTimeDiscrepancyForceCorrectionsDuringResolution !== 0) {
      writer.uint32(56).uint32(message.movementTimeDiscrepancyForceCorrectionsDuringResolution);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartGameSessionDataDiscrepancy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartGameSessionDataDiscrepancy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.movementTimeDiscrepancyDetection = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.movementTimeDiscrepancyResolution = reader.uint32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.movementTimeDiscrepancyMaxTimeMargin = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.movementTimeDiscrepancyMinTimeMargin = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.movementTimeDiscrepancyResolutionRate = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.movementTimeDiscrepancyDriftAllowance = reader.float();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.movementTimeDiscrepancyForceCorrectionsDuringResolution = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartGameSessionDataDiscrepancy {
    return {
      movementTimeDiscrepancyDetection: isSet(object.movementTimeDiscrepancyDetection)
        ? Number(object.movementTimeDiscrepancyDetection)
        : 0,
      movementTimeDiscrepancyResolution: isSet(object.movementTimeDiscrepancyResolution)
        ? Number(object.movementTimeDiscrepancyResolution)
        : 0,
      movementTimeDiscrepancyMaxTimeMargin: isSet(object.movementTimeDiscrepancyMaxTimeMargin)
        ? Number(object.movementTimeDiscrepancyMaxTimeMargin)
        : 0,
      movementTimeDiscrepancyMinTimeMargin: isSet(object.movementTimeDiscrepancyMinTimeMargin)
        ? Number(object.movementTimeDiscrepancyMinTimeMargin)
        : 0,
      movementTimeDiscrepancyResolutionRate: isSet(object.movementTimeDiscrepancyResolutionRate)
        ? Number(object.movementTimeDiscrepancyResolutionRate)
        : 0,
      movementTimeDiscrepancyDriftAllowance: isSet(object.movementTimeDiscrepancyDriftAllowance)
        ? Number(object.movementTimeDiscrepancyDriftAllowance)
        : 0,
      movementTimeDiscrepancyForceCorrectionsDuringResolution:
        isSet(object.movementTimeDiscrepancyForceCorrectionsDuringResolution)
          ? Number(object.movementTimeDiscrepancyForceCorrectionsDuringResolution)
          : 0,
    };
  },

  toJSON(message: StartGameSessionDataDiscrepancy): unknown {
    const obj: any = {};
    message.movementTimeDiscrepancyDetection !== undefined &&
      (obj.movementTimeDiscrepancyDetection = Math.round(message.movementTimeDiscrepancyDetection));
    message.movementTimeDiscrepancyResolution !== undefined &&
      (obj.movementTimeDiscrepancyResolution = Math.round(message.movementTimeDiscrepancyResolution));
    message.movementTimeDiscrepancyMaxTimeMargin !== undefined &&
      (obj.movementTimeDiscrepancyMaxTimeMargin = message.movementTimeDiscrepancyMaxTimeMargin);
    message.movementTimeDiscrepancyMinTimeMargin !== undefined &&
      (obj.movementTimeDiscrepancyMinTimeMargin = message.movementTimeDiscrepancyMinTimeMargin);
    message.movementTimeDiscrepancyResolutionRate !== undefined &&
      (obj.movementTimeDiscrepancyResolutionRate = message.movementTimeDiscrepancyResolutionRate);
    message.movementTimeDiscrepancyDriftAllowance !== undefined &&
      (obj.movementTimeDiscrepancyDriftAllowance = message.movementTimeDiscrepancyDriftAllowance);
    message.movementTimeDiscrepancyForceCorrectionsDuringResolution !== undefined &&
      (obj.movementTimeDiscrepancyForceCorrectionsDuringResolution = Math.round(
        message.movementTimeDiscrepancyForceCorrectionsDuringResolution,
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<StartGameSessionDataDiscrepancy>, I>>(base?: I): StartGameSessionDataDiscrepancy {
    return StartGameSessionDataDiscrepancy.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartGameSessionDataDiscrepancy>, I>>(
    object: I,
  ): StartGameSessionDataDiscrepancy {
    const message = createBaseStartGameSessionDataDiscrepancy();
    message.movementTimeDiscrepancyDetection = object.movementTimeDiscrepancyDetection ?? 0;
    message.movementTimeDiscrepancyResolution = object.movementTimeDiscrepancyResolution ?? 0;
    message.movementTimeDiscrepancyMaxTimeMargin = object.movementTimeDiscrepancyMaxTimeMargin ?? 0;
    message.movementTimeDiscrepancyMinTimeMargin = object.movementTimeDiscrepancyMinTimeMargin ?? 0;
    message.movementTimeDiscrepancyResolutionRate = object.movementTimeDiscrepancyResolutionRate ?? 0;
    message.movementTimeDiscrepancyDriftAllowance = object.movementTimeDiscrepancyDriftAllowance ?? 0;
    message.movementTimeDiscrepancyForceCorrectionsDuringResolution =
      object.movementTimeDiscrepancyForceCorrectionsDuringResolution ?? 0;
    return message;
  },
};

function createBaseStartGameSessionDataHackPolicy(): StartGameSessionDataHackPolicy {
  return {
    hackIronShieldScanSpeedHack: 0,
    hackIronShieldScanDllInjection: 0,
    hackMovementScan: 0,
    hackMeleeAttackScan: 0,
    hackInvalidItemScan: 0,
    hackInteractionScan: 0,
    hackIronShieldScanEspHack: 0,
  };
}

export const StartGameSessionDataHackPolicy = {
  encode(message: StartGameSessionDataHackPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hackIronShieldScanSpeedHack !== 0) {
      writer.uint32(8).uint32(message.hackIronShieldScanSpeedHack);
    }
    if (message.hackIronShieldScanDllInjection !== 0) {
      writer.uint32(16).uint32(message.hackIronShieldScanDllInjection);
    }
    if (message.hackMovementScan !== 0) {
      writer.uint32(24).uint32(message.hackMovementScan);
    }
    if (message.hackMeleeAttackScan !== 0) {
      writer.uint32(32).uint32(message.hackMeleeAttackScan);
    }
    if (message.hackInvalidItemScan !== 0) {
      writer.uint32(40).uint32(message.hackInvalidItemScan);
    }
    if (message.hackInteractionScan !== 0) {
      writer.uint32(48).uint32(message.hackInteractionScan);
    }
    if (message.hackIronShieldScanEspHack !== 0) {
      writer.uint32(56).uint32(message.hackIronShieldScanEspHack);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartGameSessionDataHackPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartGameSessionDataHackPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.hackIronShieldScanSpeedHack = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.hackIronShieldScanDllInjection = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.hackMovementScan = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.hackMeleeAttackScan = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.hackInvalidItemScan = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.hackInteractionScan = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.hackIronShieldScanEspHack = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartGameSessionDataHackPolicy {
    return {
      hackIronShieldScanSpeedHack: isSet(object.hackIronShieldScanSpeedHack)
        ? Number(object.hackIronShieldScanSpeedHack)
        : 0,
      hackIronShieldScanDllInjection: isSet(object.hackIronShieldScanDllInjection)
        ? Number(object.hackIronShieldScanDllInjection)
        : 0,
      hackMovementScan: isSet(object.hackMovementScan) ? Number(object.hackMovementScan) : 0,
      hackMeleeAttackScan: isSet(object.hackMeleeAttackScan) ? Number(object.hackMeleeAttackScan) : 0,
      hackInvalidItemScan: isSet(object.hackInvalidItemScan) ? Number(object.hackInvalidItemScan) : 0,
      hackInteractionScan: isSet(object.hackInteractionScan) ? Number(object.hackInteractionScan) : 0,
      hackIronShieldScanEspHack: isSet(object.hackIronShieldScanEspHack) ? Number(object.hackIronShieldScanEspHack) : 0,
    };
  },

  toJSON(message: StartGameSessionDataHackPolicy): unknown {
    const obj: any = {};
    message.hackIronShieldScanSpeedHack !== undefined &&
      (obj.hackIronShieldScanSpeedHack = Math.round(message.hackIronShieldScanSpeedHack));
    message.hackIronShieldScanDllInjection !== undefined &&
      (obj.hackIronShieldScanDllInjection = Math.round(message.hackIronShieldScanDllInjection));
    message.hackMovementScan !== undefined && (obj.hackMovementScan = Math.round(message.hackMovementScan));
    message.hackMeleeAttackScan !== undefined && (obj.hackMeleeAttackScan = Math.round(message.hackMeleeAttackScan));
    message.hackInvalidItemScan !== undefined && (obj.hackInvalidItemScan = Math.round(message.hackInvalidItemScan));
    message.hackInteractionScan !== undefined && (obj.hackInteractionScan = Math.round(message.hackInteractionScan));
    message.hackIronShieldScanEspHack !== undefined &&
      (obj.hackIronShieldScanEspHack = Math.round(message.hackIronShieldScanEspHack));
    return obj;
  },

  create<I extends Exact<DeepPartial<StartGameSessionDataHackPolicy>, I>>(base?: I): StartGameSessionDataHackPolicy {
    return StartGameSessionDataHackPolicy.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartGameSessionDataHackPolicy>, I>>(
    object: I,
  ): StartGameSessionDataHackPolicy {
    const message = createBaseStartGameSessionDataHackPolicy();
    message.hackIronShieldScanSpeedHack = object.hackIronShieldScanSpeedHack ?? 0;
    message.hackIronShieldScanDllInjection = object.hackIronShieldScanDllInjection ?? 0;
    message.hackMovementScan = object.hackMovementScan ?? 0;
    message.hackMeleeAttackScan = object.hackMeleeAttackScan ?? 0;
    message.hackInvalidItemScan = object.hackInvalidItemScan ?? 0;
    message.hackInteractionScan = object.hackInteractionScan ?? 0;
    message.hackIronShieldScanEspHack = object.hackIronShieldScanEspHack ?? 0;
    return message;
  },
};

function createBaseS2CGameStartServerJson(): S2CGameStartServerJson {
  return {
    restUrl: "",
    gameId: 0,
    maxGameUser: 0,
    waitTimeSec: 0,
    discrepancy: undefined,
    gameHackPolicy: 0,
    validPlayerMeleeAttackRange: 0,
    gameDifficultyType: 0,
    shippingLogOnOffPolicy: 0,
    shippingLogLevelPolicy: 0,
    gmOnOffPolicy: 0,
    allowedInteractionPolicy: 0,
    allowedInteractionDistance: 0,
    allowedInteractionXyDistance: 0,
    hackPolicy: undefined,
    currentFloor: 0,
    isFloorMatchmaking: 0,
  };
}

export const S2CGameStartServerJson = {
  encode(message: S2CGameStartServerJson, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.restUrl !== "") {
      writer.uint32(10).string(message.restUrl);
    }
    if (message.gameId !== 0) {
      writer.uint32(16).uint64(message.gameId);
    }
    if (message.maxGameUser !== 0) {
      writer.uint32(24).uint32(message.maxGameUser);
    }
    if (message.waitTimeSec !== 0) {
      writer.uint32(32).uint32(message.waitTimeSec);
    }
    if (message.discrepancy !== undefined) {
      StartGameSessionDataDiscrepancy.encode(message.discrepancy, writer.uint32(42).fork()).ldelim();
    }
    if (message.gameHackPolicy !== 0) {
      writer.uint32(48).uint32(message.gameHackPolicy);
    }
    if (message.validPlayerMeleeAttackRange !== 0) {
      writer.uint32(56).uint32(message.validPlayerMeleeAttackRange);
    }
    if (message.gameDifficultyType !== 0) {
      writer.uint32(64).uint32(message.gameDifficultyType);
    }
    if (message.shippingLogOnOffPolicy !== 0) {
      writer.uint32(72).uint32(message.shippingLogOnOffPolicy);
    }
    if (message.shippingLogLevelPolicy !== 0) {
      writer.uint32(80).uint32(message.shippingLogLevelPolicy);
    }
    if (message.gmOnOffPolicy !== 0) {
      writer.uint32(88).uint32(message.gmOnOffPolicy);
    }
    if (message.allowedInteractionPolicy !== 0) {
      writer.uint32(96).uint32(message.allowedInteractionPolicy);
    }
    if (message.allowedInteractionDistance !== 0) {
      writer.uint32(109).float(message.allowedInteractionDistance);
    }
    if (message.allowedInteractionXyDistance !== 0) {
      writer.uint32(117).float(message.allowedInteractionXyDistance);
    }
    if (message.hackPolicy !== undefined) {
      StartGameSessionDataHackPolicy.encode(message.hackPolicy, writer.uint32(122).fork()).ldelim();
    }
    if (message.currentFloor !== 0) {
      writer.uint32(128).uint32(message.currentFloor);
    }
    if (message.isFloorMatchmaking !== 0) {
      writer.uint32(136).uint32(message.isFloorMatchmaking);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S2CGameStartServerJson {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS2CGameStartServerJson();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.restUrl = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.maxGameUser = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.waitTimeSec = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.discrepancy = StartGameSessionDataDiscrepancy.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.gameHackPolicy = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.validPlayerMeleeAttackRange = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.gameDifficultyType = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.shippingLogOnOffPolicy = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.shippingLogLevelPolicy = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.gmOnOffPolicy = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.allowedInteractionPolicy = reader.uint32();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.allowedInteractionDistance = reader.float();
          continue;
        case 14:
          if (tag != 117) {
            break;
          }

          message.allowedInteractionXyDistance = reader.float();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.hackPolicy = StartGameSessionDataHackPolicy.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.currentFloor = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.isFloorMatchmaking = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S2CGameStartServerJson {
    return {
      restUrl: isSet(object.restUrl) ? String(object.restUrl) : "",
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      maxGameUser: isSet(object.maxGameUser) ? Number(object.maxGameUser) : 0,
      waitTimeSec: isSet(object.waitTimeSec) ? Number(object.waitTimeSec) : 0,
      discrepancy: isSet(object.discrepancy) ? StartGameSessionDataDiscrepancy.fromJSON(object.discrepancy) : undefined,
      gameHackPolicy: isSet(object.gameHackPolicy) ? Number(object.gameHackPolicy) : 0,
      validPlayerMeleeAttackRange: isSet(object.validPlayerMeleeAttackRange)
        ? Number(object.validPlayerMeleeAttackRange)
        : 0,
      gameDifficultyType: isSet(object.gameDifficultyType) ? Number(object.gameDifficultyType) : 0,
      shippingLogOnOffPolicy: isSet(object.shippingLogOnOffPolicy) ? Number(object.shippingLogOnOffPolicy) : 0,
      shippingLogLevelPolicy: isSet(object.shippingLogLevelPolicy) ? Number(object.shippingLogLevelPolicy) : 0,
      gmOnOffPolicy: isSet(object.gmOnOffPolicy) ? Number(object.gmOnOffPolicy) : 0,
      allowedInteractionPolicy: isSet(object.allowedInteractionPolicy) ? Number(object.allowedInteractionPolicy) : 0,
      allowedInteractionDistance: isSet(object.allowedInteractionDistance)
        ? Number(object.allowedInteractionDistance)
        : 0,
      allowedInteractionXyDistance: isSet(object.allowedInteractionXyDistance)
        ? Number(object.allowedInteractionXyDistance)
        : 0,
      hackPolicy: isSet(object.hackPolicy) ? StartGameSessionDataHackPolicy.fromJSON(object.hackPolicy) : undefined,
      currentFloor: isSet(object.currentFloor) ? Number(object.currentFloor) : 0,
      isFloorMatchmaking: isSet(object.isFloorMatchmaking) ? Number(object.isFloorMatchmaking) : 0,
    };
  },

  toJSON(message: S2CGameStartServerJson): unknown {
    const obj: any = {};
    message.restUrl !== undefined && (obj.restUrl = message.restUrl);
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    message.maxGameUser !== undefined && (obj.maxGameUser = Math.round(message.maxGameUser));
    message.waitTimeSec !== undefined && (obj.waitTimeSec = Math.round(message.waitTimeSec));
    message.discrepancy !== undefined &&
      (obj.discrepancy = message.discrepancy ? StartGameSessionDataDiscrepancy.toJSON(message.discrepancy) : undefined);
    message.gameHackPolicy !== undefined && (obj.gameHackPolicy = Math.round(message.gameHackPolicy));
    message.validPlayerMeleeAttackRange !== undefined &&
      (obj.validPlayerMeleeAttackRange = Math.round(message.validPlayerMeleeAttackRange));
    message.gameDifficultyType !== undefined && (obj.gameDifficultyType = Math.round(message.gameDifficultyType));
    message.shippingLogOnOffPolicy !== undefined &&
      (obj.shippingLogOnOffPolicy = Math.round(message.shippingLogOnOffPolicy));
    message.shippingLogLevelPolicy !== undefined &&
      (obj.shippingLogLevelPolicy = Math.round(message.shippingLogLevelPolicy));
    message.gmOnOffPolicy !== undefined && (obj.gmOnOffPolicy = Math.round(message.gmOnOffPolicy));
    message.allowedInteractionPolicy !== undefined &&
      (obj.allowedInteractionPolicy = Math.round(message.allowedInteractionPolicy));
    message.allowedInteractionDistance !== undefined &&
      (obj.allowedInteractionDistance = message.allowedInteractionDistance);
    message.allowedInteractionXyDistance !== undefined &&
      (obj.allowedInteractionXyDistance = message.allowedInteractionXyDistance);
    message.hackPolicy !== undefined &&
      (obj.hackPolicy = message.hackPolicy ? StartGameSessionDataHackPolicy.toJSON(message.hackPolicy) : undefined);
    message.currentFloor !== undefined && (obj.currentFloor = Math.round(message.currentFloor));
    message.isFloorMatchmaking !== undefined && (obj.isFloorMatchmaking = Math.round(message.isFloorMatchmaking));
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CGameStartServerJson>, I>>(base?: I): S2CGameStartServerJson {
    return S2CGameStartServerJson.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<S2CGameStartServerJson>, I>>(object: I): S2CGameStartServerJson {
    const message = createBaseS2CGameStartServerJson();
    message.restUrl = object.restUrl ?? "";
    message.gameId = object.gameId ?? 0;
    message.maxGameUser = object.maxGameUser ?? 0;
    message.waitTimeSec = object.waitTimeSec ?? 0;
    message.discrepancy = (object.discrepancy !== undefined && object.discrepancy !== null)
      ? StartGameSessionDataDiscrepancy.fromPartial(object.discrepancy)
      : undefined;
    message.gameHackPolicy = object.gameHackPolicy ?? 0;
    message.validPlayerMeleeAttackRange = object.validPlayerMeleeAttackRange ?? 0;
    message.gameDifficultyType = object.gameDifficultyType ?? 0;
    message.shippingLogOnOffPolicy = object.shippingLogOnOffPolicy ?? 0;
    message.shippingLogLevelPolicy = object.shippingLogLevelPolicy ?? 0;
    message.gmOnOffPolicy = object.gmOnOffPolicy ?? 0;
    message.allowedInteractionPolicy = object.allowedInteractionPolicy ?? 0;
    message.allowedInteractionDistance = object.allowedInteractionDistance ?? 0;
    message.allowedInteractionXyDistance = object.allowedInteractionXyDistance ?? 0;
    message.hackPolicy = (object.hackPolicy !== undefined && object.hackPolicy !== null)
      ? StartGameSessionDataHackPolicy.fromPartial(object.hackPolicy)
      : undefined;
    message.currentFloor = object.currentFloor ?? 0;
    message.isFloorMatchmaking = object.isFloorMatchmaking ?? 0;
    return message;
  },
};

function createBaseC2SGameEndServerPOST(): C2SGameEndServerPOST {
  return { users: [], gameId: 0 };
}

export const C2SGameEndServerPOST = {
  encode(message: C2SGameEndServerPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      GameEndUserInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.gameId !== 0) {
      writer.uint32(16).uint64(message.gameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SGameEndServerPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SGameEndServerPOST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.users.push(GameEndUserInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SGameEndServerPOST {
    return {
      users: Array.isArray(object?.users) ? object.users.map((e: any) => GameEndUserInfo.fromJSON(e)) : [],
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
    };
  },

  toJSON(message: C2SGameEndServerPOST): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => e ? GameEndUserInfo.toJSON(e) : undefined);
    } else {
      obj.users = [];
    }
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameEndServerPOST>, I>>(base?: I): C2SGameEndServerPOST {
    return C2SGameEndServerPOST.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<C2SGameEndServerPOST>, I>>(object: I): C2SGameEndServerPOST {
    const message = createBaseC2SGameEndServerPOST();
    message.users = object.users?.map((e) => GameEndUserInfo.fromPartial(e)) || [];
    message.gameId = object.gameId ?? 0;
    return message;
  },
};

function createBaseGameEndUserInfo(): GameEndUserInfo {
  return { accountId: "", kill: 0, death: 0 };
}

export const GameEndUserInfo = {
  encode(message: GameEndUserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.kill !== 0) {
      writer.uint32(16).uint32(message.kill);
    }
    if (message.death !== 0) {
      writer.uint32(24).uint32(message.death);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameEndUserInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameEndUserInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.kill = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.death = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GameEndUserInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      kill: isSet(object.kill) ? Number(object.kill) : 0,
      death: isSet(object.death) ? Number(object.death) : 0,
    };
  },

  toJSON(message: GameEndUserInfo): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.kill !== undefined && (obj.kill = Math.round(message.kill));
    message.death !== undefined && (obj.death = Math.round(message.death));
    return obj;
  },

  create<I extends Exact<DeepPartial<GameEndUserInfo>, I>>(base?: I): GameEndUserInfo {
    return GameEndUserInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GameEndUserInfo>, I>>(object: I): GameEndUserInfo {
    const message = createBaseGameEndUserInfo();
    message.accountId = object.accountId ?? "";
    message.kill = object.kill ?? 0;
    message.death = object.death ?? 0;
    return message;
  },
};

function createBaseC2SGameStartPOST(): C2SGameStartPOST {
  return { gameId: 0, mapNames: [] };
}

export const C2SGameStartPOST = {
  encode(message: C2SGameStartPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== 0) {
      writer.uint32(8).uint64(message.gameId);
    }
    for (const v of message.mapNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SGameStartPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SGameStartPOST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.mapNames.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SGameStartPOST {
    return {
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      mapNames: Array.isArray(object?.mapNames) ? object.mapNames.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: C2SGameStartPOST): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    if (message.mapNames) {
      obj.mapNames = message.mapNames.map((e) => e);
    } else {
      obj.mapNames = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameStartPOST>, I>>(base?: I): C2SGameStartPOST {
    return C2SGameStartPOST.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<C2SGameStartPOST>, I>>(object: I): C2SGameStartPOST {
    const message = createBaseC2SGameStartPOST();
    message.gameId = object.gameId ?? 0;
    message.mapNames = object.mapNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseC2SGameCharacterInfoGet(): C2SGameCharacterInfoGet {
  return { gameId: 0, accountId: "", characterId: "" };
}

export const C2SGameCharacterInfoGet = {
  encode(message: C2SGameCharacterInfoGet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== 0) {
      writer.uint32(8).uint64(message.gameId);
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(26).string(message.characterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SGameCharacterInfoGet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SGameCharacterInfoGet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.characterId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SGameCharacterInfoGet {
    return {
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
    };
  },

  toJSON(message: C2SGameCharacterInfoGet): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.characterId !== undefined && (obj.characterId = message.characterId);
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameCharacterInfoGet>, I>>(base?: I): C2SGameCharacterInfoGet {
    return C2SGameCharacterInfoGet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<C2SGameCharacterInfoGet>, I>>(object: I): C2SGameCharacterInfoGet {
    const message = createBaseC2SGameCharacterInfoGet();
    message.gameId = object.gameId ?? 0;
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    return message;
  },
};

function createBaseS2CGameCharacterInfoJson(): S2CGameCharacterInfoJson {
  return {
    gameId: 0,
    accountId: "",
    characterId: "",
    items: [],
    perks: [],
    skills: [],
    spells: [],
    characterSkinIds: [],
    itemSkinIds: [],
    emotes: [],
    actionIds: [],
  };
}

export const S2CGameCharacterInfoJson = {
  encode(message: S2CGameCharacterInfoJson, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== 0) {
      writer.uint32(8).uint64(message.gameId);
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(26).string(message.characterId);
    }
    for (const v of message.items) {
      SItem.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.perks) {
      SPerk.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.skills) {
      SSkill.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.spells) {
      SSpell.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.characterSkinIds) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.itemSkinIds) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.emotes) {
      SEMOTE.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.actionIds) {
      writer.uint32(90).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S2CGameCharacterInfoJson {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS2CGameCharacterInfoJson();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.items.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.perks.push(SPerk.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.skills.push(SSkill.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.spells.push(SSpell.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.characterSkinIds.push(reader.string());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.itemSkinIds.push(reader.string());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.emotes.push(SEMOTE.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.actionIds.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S2CGameCharacterInfoJson {
    return {
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      items: Array.isArray(object?.items) ? object.items.map((e: any) => SItem.fromJSON(e)) : [],
      perks: Array.isArray(object?.perks) ? object.perks.map((e: any) => SPerk.fromJSON(e)) : [],
      skills: Array.isArray(object?.skills) ? object.skills.map((e: any) => SSkill.fromJSON(e)) : [],
      spells: Array.isArray(object?.spells) ? object.spells.map((e: any) => SSpell.fromJSON(e)) : [],
      characterSkinIds: Array.isArray(object?.characterSkinIds)
        ? object.characterSkinIds.map((e: any) => String(e))
        : [],
      itemSkinIds: Array.isArray(object?.itemSkinIds) ? object.itemSkinIds.map((e: any) => String(e)) : [],
      emotes: Array.isArray(object?.emotes) ? object.emotes.map((e: any) => SEMOTE.fromJSON(e)) : [],
      actionIds: Array.isArray(object?.actionIds) ? object.actionIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: S2CGameCharacterInfoJson): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.characterId !== undefined && (obj.characterId = message.characterId);
    if (message.items) {
      obj.items = message.items.map((e) => e ? SItem.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    if (message.perks) {
      obj.perks = message.perks.map((e) => e ? SPerk.toJSON(e) : undefined);
    } else {
      obj.perks = [];
    }
    if (message.skills) {
      obj.skills = message.skills.map((e) => e ? SSkill.toJSON(e) : undefined);
    } else {
      obj.skills = [];
    }
    if (message.spells) {
      obj.spells = message.spells.map((e) => e ? SSpell.toJSON(e) : undefined);
    } else {
      obj.spells = [];
    }
    if (message.characterSkinIds) {
      obj.characterSkinIds = message.characterSkinIds.map((e) => e);
    } else {
      obj.characterSkinIds = [];
    }
    if (message.itemSkinIds) {
      obj.itemSkinIds = message.itemSkinIds.map((e) => e);
    } else {
      obj.itemSkinIds = [];
    }
    if (message.emotes) {
      obj.emotes = message.emotes.map((e) => e ? SEMOTE.toJSON(e) : undefined);
    } else {
      obj.emotes = [];
    }
    if (message.actionIds) {
      obj.actionIds = message.actionIds.map((e) => e);
    } else {
      obj.actionIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CGameCharacterInfoJson>, I>>(base?: I): S2CGameCharacterInfoJson {
    return S2CGameCharacterInfoJson.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<S2CGameCharacterInfoJson>, I>>(object: I): S2CGameCharacterInfoJson {
    const message = createBaseS2CGameCharacterInfoJson();
    message.gameId = object.gameId ?? 0;
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.items = object.items?.map((e) => SItem.fromPartial(e)) || [];
    message.perks = object.perks?.map((e) => SPerk.fromPartial(e)) || [];
    message.skills = object.skills?.map((e) => SSkill.fromPartial(e)) || [];
    message.spells = object.spells?.map((e) => SSpell.fromPartial(e)) || [];
    message.characterSkinIds = object.characterSkinIds?.map((e) => e) || [];
    message.itemSkinIds = object.itemSkinIds?.map((e) => e) || [];
    message.emotes = object.emotes?.map((e) => SEMOTE.fromPartial(e)) || [];
    message.actionIds = object.actionIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseC2SGameAliveCheckGET(): C2SGameAliveCheckGET {
  return { gameId: 0 };
}

export const C2SGameAliveCheckGET = {
  encode(message: C2SGameAliveCheckGET, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== 0) {
      writer.uint32(8).uint64(message.gameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SGameAliveCheckGET {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SGameAliveCheckGET();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SGameAliveCheckGET {
    return { gameId: isSet(object.gameId) ? Number(object.gameId) : 0 };
  },

  toJSON(message: C2SGameAliveCheckGET): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameAliveCheckGET>, I>>(base?: I): C2SGameAliveCheckGET {
    return C2SGameAliveCheckGET.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<C2SGameAliveCheckGET>, I>>(object: I): C2SGameAliveCheckGET {
    const message = createBaseC2SGameAliveCheckGET();
    message.gameId = object.gameId ?? 0;
    return message;
  },
};

function createBaseAliveDataInfo(): AliveDataInfo {
  return { Id: "", Us: [] };
}

export const AliveDataInfo = {
  encode(message: AliveDataInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Id !== "") {
      writer.uint32(10).string(message.Id);
    }
    for (const v of message.Us) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AliveDataInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAliveDataInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.Id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.Us.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AliveDataInfo {
    return {
      Id: isSet(object.Id) ? String(object.Id) : "",
      Us: Array.isArray(object?.Us) ? object.Us.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: AliveDataInfo): unknown {
    const obj: any = {};
    message.Id !== undefined && (obj.Id = message.Id);
    if (message.Us) {
      obj.Us = message.Us.map((e) => e);
    } else {
      obj.Us = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AliveDataInfo>, I>>(base?: I): AliveDataInfo {
    return AliveDataInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AliveDataInfo>, I>>(object: I): AliveDataInfo {
    const message = createBaseAliveDataInfo();
    message.Id = object.Id ?? "";
    message.Us = object.Us?.map((e) => e) || [];
    return message;
  },
};

function createBaseC2SAliveAppendDataGET(): C2SAliveAppendDataGET {
  return { Gs: "", infos: [] };
}

export const C2SAliveAppendDataGET = {
  encode(message: C2SAliveAppendDataGET, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Gs !== "") {
      writer.uint32(10).string(message.Gs);
    }
    for (const v of message.infos) {
      AliveDataInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SAliveAppendDataGET {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SAliveAppendDataGET();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.Gs = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.infos.push(AliveDataInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SAliveAppendDataGET {
    return {
      Gs: isSet(object.Gs) ? String(object.Gs) : "",
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => AliveDataInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: C2SAliveAppendDataGET): unknown {
    const obj: any = {};
    message.Gs !== undefined && (obj.Gs = message.Gs);
    if (message.infos) {
      obj.infos = message.infos.map((e) => e ? AliveDataInfo.toJSON(e) : undefined);
    } else {
      obj.infos = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SAliveAppendDataGET>, I>>(base?: I): C2SAliveAppendDataGET {
    return C2SAliveAppendDataGET.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<C2SAliveAppendDataGET>, I>>(object: I): C2SAliveAppendDataGET {
    const message = createBaseC2SAliveAppendDataGET();
    message.Gs = object.Gs ?? "";
    message.infos = object.infos?.map((e) => AliveDataInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseC2SGameInterruptPOST(): C2SGameInterruptPOST {
  return { gameId: 0 };
}

export const C2SGameInterruptPOST = {
  encode(message: C2SGameInterruptPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== 0) {
      writer.uint32(8).uint64(message.gameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SGameInterruptPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SGameInterruptPOST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SGameInterruptPOST {
    return { gameId: isSet(object.gameId) ? Number(object.gameId) : 0 };
  },

  toJSON(message: C2SGameInterruptPOST): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameInterruptPOST>, I>>(base?: I): C2SGameInterruptPOST {
    return C2SGameInterruptPOST.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<C2SGameInterruptPOST>, I>>(object: I): C2SGameInterruptPOST {
    const message = createBaseC2SGameInterruptPOST();
    message.gameId = object.gameId ?? 0;
    return message;
  },
};

function createBaseC2SUserReportPOST(): C2SUserReportPOST {
  return {
    gameId: 0,
    reportAccountId: "",
    category: [],
    targetAccountId: "",
    targetNickName: undefined,
    targetCharacterId: "",
    reportContent: "",
  };
}

export const C2SUserReportPOST = {
  encode(message: C2SUserReportPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== 0) {
      writer.uint32(8).uint64(message.gameId);
    }
    if (message.reportAccountId !== "") {
      writer.uint32(18).string(message.reportAccountId);
    }
    writer.uint32(26).fork();
    for (const v of message.category) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.targetAccountId !== "") {
      writer.uint32(34).string(message.targetAccountId);
    }
    if (message.targetNickName !== undefined) {
      saccountNickname.encode(message.targetNickName, writer.uint32(42).fork()).ldelim();
    }
    if (message.targetCharacterId !== "") {
      writer.uint32(50).string(message.targetCharacterId);
    }
    if (message.reportContent !== "") {
      writer.uint32(58).string(message.reportContent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SUserReportPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SUserReportPOST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.reportAccountId = reader.string();
          continue;
        case 3:
          if (tag == 24) {
            message.category.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.category.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag != 34) {
            break;
          }

          message.targetAccountId = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.targetNickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.targetCharacterId = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.reportContent = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SUserReportPOST {
    return {
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      reportAccountId: isSet(object.reportAccountId) ? String(object.reportAccountId) : "",
      category: Array.isArray(object?.category) ? object.category.map((e: any) => Number(e)) : [],
      targetAccountId: isSet(object.targetAccountId) ? String(object.targetAccountId) : "",
      targetNickName: isSet(object.targetNickName) ? saccountNickname.fromJSON(object.targetNickName) : undefined,
      targetCharacterId: isSet(object.targetCharacterId) ? String(object.targetCharacterId) : "",
      reportContent: isSet(object.reportContent) ? String(object.reportContent) : "",
    };
  },

  toJSON(message: C2SUserReportPOST): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    message.reportAccountId !== undefined && (obj.reportAccountId = message.reportAccountId);
    if (message.category) {
      obj.category = message.category.map((e) => Math.round(e));
    } else {
      obj.category = [];
    }
    message.targetAccountId !== undefined && (obj.targetAccountId = message.targetAccountId);
    message.targetNickName !== undefined &&
      (obj.targetNickName = message.targetNickName ? saccountNickname.toJSON(message.targetNickName) : undefined);
    message.targetCharacterId !== undefined && (obj.targetCharacterId = message.targetCharacterId);
    message.reportContent !== undefined && (obj.reportContent = message.reportContent);
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SUserReportPOST>, I>>(base?: I): C2SUserReportPOST {
    return C2SUserReportPOST.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<C2SUserReportPOST>, I>>(object: I): C2SUserReportPOST {
    const message = createBaseC2SUserReportPOST();
    message.gameId = object.gameId ?? 0;
    message.reportAccountId = object.reportAccountId ?? "";
    message.category = object.category?.map((e) => e) || [];
    message.targetAccountId = object.targetAccountId ?? "";
    message.targetNickName = (object.targetNickName !== undefined && object.targetNickName !== null)
      ? saccountNickname.fromPartial(object.targetNickName)
      : undefined;
    message.targetCharacterId = object.targetCharacterId ?? "";
    message.reportContent = object.reportContent ?? "";
    return message;
  },
};

function createBaseS2CUserReportPOSTResponse(): S2CUserReportPOSTResponse {
  return { reportAccountId: "", targetAccountId: "", reportKey: "", category: 0 };
}

export const S2CUserReportPOSTResponse = {
  encode(message: S2CUserReportPOSTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reportAccountId !== "") {
      writer.uint32(10).string(message.reportAccountId);
    }
    if (message.targetAccountId !== "") {
      writer.uint32(18).string(message.targetAccountId);
    }
    if (message.reportKey !== "") {
      writer.uint32(26).string(message.reportKey);
    }
    if (message.category !== 0) {
      writer.uint32(32).uint32(message.category);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S2CUserReportPOSTResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS2CUserReportPOSTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.reportAccountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.targetAccountId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.reportKey = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.category = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S2CUserReportPOSTResponse {
    return {
      reportAccountId: isSet(object.reportAccountId) ? String(object.reportAccountId) : "",
      targetAccountId: isSet(object.targetAccountId) ? String(object.targetAccountId) : "",
      reportKey: isSet(object.reportKey) ? String(object.reportKey) : "",
      category: isSet(object.category) ? Number(object.category) : 0,
    };
  },

  toJSON(message: S2CUserReportPOSTResponse): unknown {
    const obj: any = {};
    message.reportAccountId !== undefined && (obj.reportAccountId = message.reportAccountId);
    message.targetAccountId !== undefined && (obj.targetAccountId = message.targetAccountId);
    message.reportKey !== undefined && (obj.reportKey = message.reportKey);
    message.category !== undefined && (obj.category = Math.round(message.category));
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CUserReportPOSTResponse>, I>>(base?: I): S2CUserReportPOSTResponse {
    return S2CUserReportPOSTResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<S2CUserReportPOSTResponse>, I>>(object: I): S2CUserReportPOSTResponse {
    const message = createBaseS2CUserReportPOSTResponse();
    message.reportAccountId = object.reportAccountId ?? "";
    message.targetAccountId = object.targetAccountId ?? "";
    message.reportKey = object.reportKey ?? "";
    message.category = object.category ?? 0;
    return message;
  },
};

function createBaseGameResultInfo(): GameResultInfo {
  return {
    accountId: "",
    characterId: "",
    gameId: 0,
    characterClass: "",
    killCount: 0,
    advPoints: [],
    escapeMapName: "",
    reason: "",
    expPoints: [],
    killLogData: [],
    monsterKillLogs: [],
    gameDifficultyType: 0,
    needBlock: 0,
    needHWBlock: 0,
  };
}

export const GameResultInfo = {
  encode(message: GameResultInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.gameId !== 0) {
      writer.uint32(24).uint64(message.gameId);
    }
    if (message.characterClass !== "") {
      writer.uint32(34).string(message.characterClass);
    }
    if (message.killCount !== 0) {
      writer.uint32(40).uint32(message.killCount);
    }
    for (const v of message.advPoints) {
      GameExitAdvPoint.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.escapeMapName !== "") {
      writer.uint32(58).string(message.escapeMapName);
    }
    if (message.reason !== "") {
      writer.uint32(66).string(message.reason);
    }
    for (const v of message.expPoints) {
      GameExitExpPoint.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.killLogData) {
      Killlog.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.monsterKillLogs) {
      MonsterKillLog.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.gameDifficultyType !== 0) {
      writer.uint32(96).uint32(message.gameDifficultyType);
    }
    if (message.needBlock !== 0) {
      writer.uint32(104).uint32(message.needBlock);
    }
    if (message.needHWBlock !== 0) {
      writer.uint32(112).uint32(message.needHWBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameResultInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameResultInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.killCount = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.advPoints.push(GameExitAdvPoint.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.escapeMapName = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.expPoints.push(GameExitExpPoint.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.killLogData.push(Killlog.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.monsterKillLogs.push(MonsterKillLog.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.gameDifficultyType = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.needBlock = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.needHWBlock = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GameResultInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      killCount: isSet(object.killCount) ? Number(object.killCount) : 0,
      advPoints: Array.isArray(object?.advPoints) ? object.advPoints.map((e: any) => GameExitAdvPoint.fromJSON(e)) : [],
      escapeMapName: isSet(object.escapeMapName) ? String(object.escapeMapName) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      expPoints: Array.isArray(object?.expPoints) ? object.expPoints.map((e: any) => GameExitExpPoint.fromJSON(e)) : [],
      killLogData: Array.isArray(object?.killLogData) ? object.killLogData.map((e: any) => Killlog.fromJSON(e)) : [],
      monsterKillLogs: Array.isArray(object?.monsterKillLogs)
        ? object.monsterKillLogs.map((e: any) => MonsterKillLog.fromJSON(e))
        : [],
      gameDifficultyType: isSet(object.gameDifficultyType) ? Number(object.gameDifficultyType) : 0,
      needBlock: isSet(object.needBlock) ? Number(object.needBlock) : 0,
      needHWBlock: isSet(object.needHWBlock) ? Number(object.needHWBlock) : 0,
    };
  },

  toJSON(message: GameResultInfo): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.characterId !== undefined && (obj.characterId = message.characterId);
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    message.killCount !== undefined && (obj.killCount = Math.round(message.killCount));
    if (message.advPoints) {
      obj.advPoints = message.advPoints.map((e) => e ? GameExitAdvPoint.toJSON(e) : undefined);
    } else {
      obj.advPoints = [];
    }
    message.escapeMapName !== undefined && (obj.escapeMapName = message.escapeMapName);
    message.reason !== undefined && (obj.reason = message.reason);
    if (message.expPoints) {
      obj.expPoints = message.expPoints.map((e) => e ? GameExitExpPoint.toJSON(e) : undefined);
    } else {
      obj.expPoints = [];
    }
    if (message.killLogData) {
      obj.killLogData = message.killLogData.map((e) => e ? Killlog.toJSON(e) : undefined);
    } else {
      obj.killLogData = [];
    }
    if (message.monsterKillLogs) {
      obj.monsterKillLogs = message.monsterKillLogs.map((e) => e ? MonsterKillLog.toJSON(e) : undefined);
    } else {
      obj.monsterKillLogs = [];
    }
    message.gameDifficultyType !== undefined && (obj.gameDifficultyType = Math.round(message.gameDifficultyType));
    message.needBlock !== undefined && (obj.needBlock = Math.round(message.needBlock));
    message.needHWBlock !== undefined && (obj.needHWBlock = Math.round(message.needHWBlock));
    return obj;
  },

  create<I extends Exact<DeepPartial<GameResultInfo>, I>>(base?: I): GameResultInfo {
    return GameResultInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GameResultInfo>, I>>(object: I): GameResultInfo {
    const message = createBaseGameResultInfo();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.gameId = object.gameId ?? 0;
    message.characterClass = object.characterClass ?? "";
    message.killCount = object.killCount ?? 0;
    message.advPoints = object.advPoints?.map((e) => GameExitAdvPoint.fromPartial(e)) || [];
    message.escapeMapName = object.escapeMapName ?? "";
    message.reason = object.reason ?? "";
    message.expPoints = object.expPoints?.map((e) => GameExitExpPoint.fromPartial(e)) || [];
    message.killLogData = object.killLogData?.map((e) => Killlog.fromPartial(e)) || [];
    message.monsterKillLogs = object.monsterKillLogs?.map((e) => MonsterKillLog.fromPartial(e)) || [];
    message.gameDifficultyType = object.gameDifficultyType ?? 0;
    message.needBlock = object.needBlock ?? 0;
    message.needHWBlock = object.needHWBlock ?? 0;
    return message;
  },
};

function createBaseC2SGameDownUserPOST(): C2SGameDownUserPOST {
  return { resultInfo: undefined, downItems: [], currentFloor: 0, hp: 0, partyAccountIds: [], partyIdx: 0 };
}

export const C2SGameDownUserPOST = {
  encode(message: C2SGameDownUserPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resultInfo !== undefined) {
      GameResultInfo.encode(message.resultInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.downItems) {
      SDownItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentFloor !== 0) {
      writer.uint32(24).uint32(message.currentFloor);
    }
    if (message.hp !== 0) {
      writer.uint32(32).uint32(message.hp);
    }
    for (const v of message.partyAccountIds) {
      writer.uint32(42).string(v!);
    }
    if (message.partyIdx !== 0) {
      writer.uint32(48).uint64(message.partyIdx);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SGameDownUserPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SGameDownUserPOST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.resultInfo = GameResultInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.downItems.push(SDownItem.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.currentFloor = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.hp = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.partyAccountIds.push(reader.string());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.partyIdx = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SGameDownUserPOST {
    return {
      resultInfo: isSet(object.resultInfo) ? GameResultInfo.fromJSON(object.resultInfo) : undefined,
      downItems: Array.isArray(object?.downItems) ? object.downItems.map((e: any) => SDownItem.fromJSON(e)) : [],
      currentFloor: isSet(object.currentFloor) ? Number(object.currentFloor) : 0,
      hp: isSet(object.hp) ? Number(object.hp) : 0,
      partyAccountIds: Array.isArray(object?.partyAccountIds) ? object.partyAccountIds.map((e: any) => String(e)) : [],
      partyIdx: isSet(object.partyIdx) ? Number(object.partyIdx) : 0,
    };
  },

  toJSON(message: C2SGameDownUserPOST): unknown {
    const obj: any = {};
    message.resultInfo !== undefined &&
      (obj.resultInfo = message.resultInfo ? GameResultInfo.toJSON(message.resultInfo) : undefined);
    if (message.downItems) {
      obj.downItems = message.downItems.map((e) => e ? SDownItem.toJSON(e) : undefined);
    } else {
      obj.downItems = [];
    }
    message.currentFloor !== undefined && (obj.currentFloor = Math.round(message.currentFloor));
    message.hp !== undefined && (obj.hp = Math.round(message.hp));
    if (message.partyAccountIds) {
      obj.partyAccountIds = message.partyAccountIds.map((e) => e);
    } else {
      obj.partyAccountIds = [];
    }
    message.partyIdx !== undefined && (obj.partyIdx = Math.round(message.partyIdx));
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameDownUserPOST>, I>>(base?: I): C2SGameDownUserPOST {
    return C2SGameDownUserPOST.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<C2SGameDownUserPOST>, I>>(object: I): C2SGameDownUserPOST {
    const message = createBaseC2SGameDownUserPOST();
    message.resultInfo = (object.resultInfo !== undefined && object.resultInfo !== null)
      ? GameResultInfo.fromPartial(object.resultInfo)
      : undefined;
    message.downItems = object.downItems?.map((e) => SDownItem.fromPartial(e)) || [];
    message.currentFloor = object.currentFloor ?? 0;
    message.hp = object.hp ?? 0;
    message.partyAccountIds = object.partyAccountIds?.map((e) => e) || [];
    message.partyIdx = object.partyIdx ?? 0;
    return message;
  },
};

function createBaseC2SGameEscapeUserPOST(): C2SGameEscapeUserPOST {
  return { resultInfo: undefined, items: [] };
}

export const C2SGameEscapeUserPOST = {
  encode(message: C2SGameEscapeUserPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resultInfo !== undefined) {
      GameResultInfo.encode(message.resultInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.items) {
      SItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SGameEscapeUserPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SGameEscapeUserPOST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.resultInfo = GameResultInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.items.push(SItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SGameEscapeUserPOST {
    return {
      resultInfo: isSet(object.resultInfo) ? GameResultInfo.fromJSON(object.resultInfo) : undefined,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => SItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: C2SGameEscapeUserPOST): unknown {
    const obj: any = {};
    message.resultInfo !== undefined &&
      (obj.resultInfo = message.resultInfo ? GameResultInfo.toJSON(message.resultInfo) : undefined);
    if (message.items) {
      obj.items = message.items.map((e) => e ? SItem.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameEscapeUserPOST>, I>>(base?: I): C2SGameEscapeUserPOST {
    return C2SGameEscapeUserPOST.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<C2SGameEscapeUserPOST>, I>>(object: I): C2SGameEscapeUserPOST {
    const message = createBaseC2SGameEscapeUserPOST();
    message.resultInfo = (object.resultInfo !== undefined && object.resultInfo !== null)
      ? GameResultInfo.fromPartial(object.resultInfo)
      : undefined;
    message.items = object.items?.map((e) => SItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseC2SGameExitUserV2POST(): C2SGameExitUserV2POST {
  return { resultInfo: undefined };
}

export const C2SGameExitUserV2POST = {
  encode(message: C2SGameExitUserV2POST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resultInfo !== undefined) {
      GameResultInfo.encode(message.resultInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SGameExitUserV2POST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SGameExitUserV2POST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.resultInfo = GameResultInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SGameExitUserV2POST {
    return { resultInfo: isSet(object.resultInfo) ? GameResultInfo.fromJSON(object.resultInfo) : undefined };
  },

  toJSON(message: C2SGameExitUserV2POST): unknown {
    const obj: any = {};
    message.resultInfo !== undefined &&
      (obj.resultInfo = message.resultInfo ? GameResultInfo.toJSON(message.resultInfo) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameExitUserV2POST>, I>>(base?: I): C2SGameExitUserV2POST {
    return C2SGameExitUserV2POST.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<C2SGameExitUserV2POST>, I>>(object: I): C2SGameExitUserV2POST {
    const message = createBaseC2SGameExitUserV2POST();
    message.resultInfo = (object.resultInfo !== undefined && object.resultInfo !== null)
      ? GameResultInfo.fromPartial(object.resultInfo)
      : undefined;
    return message;
  },
};

function createBaseC2SGameExitEscapedUserPOST(): C2SGameExitEscapedUserPOST {
  return { accountId: "", characterId: "", gameId: 0 };
}

export const C2SGameExitEscapedUserPOST = {
  encode(message: C2SGameExitEscapedUserPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.gameId !== 0) {
      writer.uint32(24).uint64(message.gameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SGameExitEscapedUserPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SGameExitEscapedUserPOST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SGameExitEscapedUserPOST {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
    };
  },

  toJSON(message: C2SGameExitEscapedUserPOST): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.characterId !== undefined && (obj.characterId = message.characterId);
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameExitEscapedUserPOST>, I>>(base?: I): C2SGameExitEscapedUserPOST {
    return C2SGameExitEscapedUserPOST.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<C2SGameExitEscapedUserPOST>, I>>(object: I): C2SGameExitEscapedUserPOST {
    const message = createBaseC2SGameExitEscapedUserPOST();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.gameId = object.gameId ?? 0;
    return message;
  },
};

function createBaseS2CGameCharacterInfoDownJson(): S2CGameCharacterInfoDownJson {
  return {
    gameId: 0,
    accountId: "",
    characterId: "",
    downItems: [],
    perks: [],
    skills: [],
    spells: [],
    characterSkinIds: [],
    itemSkinIds: [],
    emotes: [],
    hp: 0,
  };
}

export const S2CGameCharacterInfoDownJson = {
  encode(message: S2CGameCharacterInfoDownJson, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== 0) {
      writer.uint32(8).uint64(message.gameId);
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(26).string(message.characterId);
    }
    for (const v of message.downItems) {
      SDownItem.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.perks) {
      SPerk.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.skills) {
      SSkill.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.spells) {
      SSpell.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.characterSkinIds) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.itemSkinIds) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.emotes) {
      SEMOTE.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.hp !== 0) {
      writer.uint32(88).uint32(message.hp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S2CGameCharacterInfoDownJson {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS2CGameCharacterInfoDownJson();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.downItems.push(SDownItem.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.perks.push(SPerk.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.skills.push(SSkill.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.spells.push(SSpell.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.characterSkinIds.push(reader.string());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.itemSkinIds.push(reader.string());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.emotes.push(SEMOTE.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.hp = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S2CGameCharacterInfoDownJson {
    return {
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      downItems: Array.isArray(object?.downItems) ? object.downItems.map((e: any) => SDownItem.fromJSON(e)) : [],
      perks: Array.isArray(object?.perks) ? object.perks.map((e: any) => SPerk.fromJSON(e)) : [],
      skills: Array.isArray(object?.skills) ? object.skills.map((e: any) => SSkill.fromJSON(e)) : [],
      spells: Array.isArray(object?.spells) ? object.spells.map((e: any) => SSpell.fromJSON(e)) : [],
      characterSkinIds: Array.isArray(object?.characterSkinIds)
        ? object.characterSkinIds.map((e: any) => String(e))
        : [],
      itemSkinIds: Array.isArray(object?.itemSkinIds) ? object.itemSkinIds.map((e: any) => String(e)) : [],
      emotes: Array.isArray(object?.emotes) ? object.emotes.map((e: any) => SEMOTE.fromJSON(e)) : [],
      hp: isSet(object.hp) ? Number(object.hp) : 0,
    };
  },

  toJSON(message: S2CGameCharacterInfoDownJson): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.characterId !== undefined && (obj.characterId = message.characterId);
    if (message.downItems) {
      obj.downItems = message.downItems.map((e) => e ? SDownItem.toJSON(e) : undefined);
    } else {
      obj.downItems = [];
    }
    if (message.perks) {
      obj.perks = message.perks.map((e) => e ? SPerk.toJSON(e) : undefined);
    } else {
      obj.perks = [];
    }
    if (message.skills) {
      obj.skills = message.skills.map((e) => e ? SSkill.toJSON(e) : undefined);
    } else {
      obj.skills = [];
    }
    if (message.spells) {
      obj.spells = message.spells.map((e) => e ? SSpell.toJSON(e) : undefined);
    } else {
      obj.spells = [];
    }
    if (message.characterSkinIds) {
      obj.characterSkinIds = message.characterSkinIds.map((e) => e);
    } else {
      obj.characterSkinIds = [];
    }
    if (message.itemSkinIds) {
      obj.itemSkinIds = message.itemSkinIds.map((e) => e);
    } else {
      obj.itemSkinIds = [];
    }
    if (message.emotes) {
      obj.emotes = message.emotes.map((e) => e ? SEMOTE.toJSON(e) : undefined);
    } else {
      obj.emotes = [];
    }
    message.hp !== undefined && (obj.hp = Math.round(message.hp));
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CGameCharacterInfoDownJson>, I>>(base?: I): S2CGameCharacterInfoDownJson {
    return S2CGameCharacterInfoDownJson.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<S2CGameCharacterInfoDownJson>, I>>(object: I): S2CGameCharacterInfoDownJson {
    const message = createBaseS2CGameCharacterInfoDownJson();
    message.gameId = object.gameId ?? 0;
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.downItems = object.downItems?.map((e) => SDownItem.fromPartial(e)) || [];
    message.perks = object.perks?.map((e) => SPerk.fromPartial(e)) || [];
    message.skills = object.skills?.map((e) => SSkill.fromPartial(e)) || [];
    message.spells = object.spells?.map((e) => SSpell.fromPartial(e)) || [];
    message.characterSkinIds = object.characterSkinIds?.map((e) => e) || [];
    message.itemSkinIds = object.itemSkinIds?.map((e) => e) || [];
    message.emotes = object.emotes?.map((e) => SEMOTE.fromPartial(e)) || [];
    message.hp = object.hp ?? 0;
    return message;
  },
};

function createBaseS2CGamePolicyGET(): S2CGamePolicyGET {
  return { appHash: [], policyJson: "" };
}

export const S2CGamePolicyGET = {
  encode(message: S2CGamePolicyGET, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.appHash) {
      writer.uint32(10).string(v!);
    }
    if (message.policyJson !== "") {
      writer.uint32(18).string(message.policyJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S2CGamePolicyGET {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS2CGamePolicyGET();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.appHash.push(reader.string());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.policyJson = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S2CGamePolicyGET {
    return {
      appHash: Array.isArray(object?.appHash) ? object.appHash.map((e: any) => String(e)) : [],
      policyJson: isSet(object.policyJson) ? String(object.policyJson) : "",
    };
  },

  toJSON(message: S2CGamePolicyGET): unknown {
    const obj: any = {};
    if (message.appHash) {
      obj.appHash = message.appHash.map((e) => e);
    } else {
      obj.appHash = [];
    }
    message.policyJson !== undefined && (obj.policyJson = message.policyJson);
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CGamePolicyGET>, I>>(base?: I): S2CGamePolicyGET {
    return S2CGamePolicyGET.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<S2CGamePolicyGET>, I>>(object: I): S2CGamePolicyGET {
    const message = createBaseS2CGamePolicyGET();
    message.appHash = object.appHash?.map((e) => e) || [];
    message.policyJson = object.policyJson ?? "";
    return message;
  },
};

function createBaseC2SGameSpectatorCheckPOST(): C2SGameSpectatorCheckPOST {
  return { accountId: "", token: "" };
}

export const C2SGameSpectatorCheckPOST = {
  encode(message: C2SGameSpectatorCheckPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SGameSpectatorCheckPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SGameSpectatorCheckPOST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SGameSpectatorCheckPOST {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: C2SGameSpectatorCheckPOST): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameSpectatorCheckPOST>, I>>(base?: I): C2SGameSpectatorCheckPOST {
    return C2SGameSpectatorCheckPOST.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<C2SGameSpectatorCheckPOST>, I>>(object: I): C2SGameSpectatorCheckPOST {
    const message = createBaseC2SGameSpectatorCheckPOST();
    message.accountId = object.accountId ?? "";
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseS2CGameSpectatorCheckJson(): S2CGameSpectatorCheckJson {
  return { isSuccess: 0 };
}

export const S2CGameSpectatorCheckJson = {
  encode(message: S2CGameSpectatorCheckJson, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isSuccess !== 0) {
      writer.uint32(8).uint32(message.isSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S2CGameSpectatorCheckJson {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS2CGameSpectatorCheckJson();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isSuccess = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S2CGameSpectatorCheckJson {
    return { isSuccess: isSet(object.isSuccess) ? Number(object.isSuccess) : 0 };
  },

  toJSON(message: S2CGameSpectatorCheckJson): unknown {
    const obj: any = {};
    message.isSuccess !== undefined && (obj.isSuccess = Math.round(message.isSuccess));
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CGameSpectatorCheckJson>, I>>(base?: I): S2CGameSpectatorCheckJson {
    return S2CGameSpectatorCheckJson.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<S2CGameSpectatorCheckJson>, I>>(object: I): S2CGameSpectatorCheckJson {
    const message = createBaseS2CGameSpectatorCheckJson();
    message.isSuccess = object.isSuccess ?? 0;
    return message;
  },
};

function createBaseGameDownUserPartyInfo(): GameDownUserPartyInfo {
  return { accountId: "", nickname: undefined, characterClass: "", gender: 0, level: 0 };
}

export const GameDownUserPartyInfo = {
  encode(message: GameDownUserPartyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.nickname !== undefined) {
      saccountNickname.encode(message.nickname, writer.uint32(18).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(26).string(message.characterClass);
    }
    if (message.gender !== 0) {
      writer.uint32(32).uint32(message.gender);
    }
    if (message.level !== 0) {
      writer.uint32(40).uint32(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameDownUserPartyInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameDownUserPartyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.nickname = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.gender = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.level = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GameDownUserPartyInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      nickname: isSet(object.nickname) ? saccountNickname.fromJSON(object.nickname) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
    };
  },

  toJSON(message: GameDownUserPartyInfo): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.nickname !== undefined &&
      (obj.nickname = message.nickname ? saccountNickname.toJSON(message.nickname) : undefined);
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    message.gender !== undefined && (obj.gender = Math.round(message.gender));
    message.level !== undefined && (obj.level = Math.round(message.level));
    return obj;
  },

  create<I extends Exact<DeepPartial<GameDownUserPartyInfo>, I>>(base?: I): GameDownUserPartyInfo {
    return GameDownUserPartyInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GameDownUserPartyInfo>, I>>(object: I): GameDownUserPartyInfo {
    const message = createBaseGameDownUserPartyInfo();
    message.accountId = object.accountId ?? "";
    message.nickname = (object.nickname !== undefined && object.nickname !== null)
      ? saccountNickname.fromPartial(object.nickname)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    message.gender = object.gender ?? 0;
    message.level = object.level ?? 0;
    return message;
  },
};

function createBaseS2CGameDownUserPartyGET(): S2CGameDownUserPartyGET {
  return { partyMember: [] };
}

export const S2CGameDownUserPartyGET = {
  encode(message: S2CGameDownUserPartyGET, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.partyMember) {
      GameDownUserPartyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S2CGameDownUserPartyGET {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS2CGameDownUserPartyGET();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.partyMember.push(GameDownUserPartyInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S2CGameDownUserPartyGET {
    return {
      partyMember: Array.isArray(object?.partyMember)
        ? object.partyMember.map((e: any) => GameDownUserPartyInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: S2CGameDownUserPartyGET): unknown {
    const obj: any = {};
    if (message.partyMember) {
      obj.partyMember = message.partyMember.map((e) => e ? GameDownUserPartyInfo.toJSON(e) : undefined);
    } else {
      obj.partyMember = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CGameDownUserPartyGET>, I>>(base?: I): S2CGameDownUserPartyGET {
    return S2CGameDownUserPartyGET.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<S2CGameDownUserPartyGET>, I>>(object: I): S2CGameDownUserPartyGET {
    const message = createBaseS2CGameDownUserPartyGET();
    message.partyMember = object.partyMember?.map((e) => GameDownUserPartyInfo.fromPartial(e)) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
