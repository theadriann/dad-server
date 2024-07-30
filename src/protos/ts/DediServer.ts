/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { saccountNickname, SGameStat } from "./_Character";
import { SDownItem, SEMOTE, SItem, SMusic, SPerk, SShapeShift, SSkill, SSpell } from "./_Item";

export const protobufPackage = "DC.Packet";

export interface SGameQuestContentInfo {
  contentId: string;
  contentValue: number;
}

export interface SGameQuestInfo {
  questId: string;
  infos: SGameQuestContentInfo[];
}

export interface S2CGameEnterUserJson {
  restUrl: string;
  nickName: Buffer;
  streamingNickName: Buffer;
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
  advPoint: number;
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
  gameType: number;
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

export interface S2CGameStartServerJson {
  restUrl: string;
  gameId: number;
  maxGameUser: number;
  waitTimeSec: number;
  dungeonMapIds: string[];
  gameHackPolicy: number;
  validPlayerMeleeAttackRange: number;
  gameType: number;
  shippingLogOnOffPolicy: number;
  shippingLogLevelPolicy: number;
  gmOnOffPolicy: number;
  shippingLogIronShieldOnOffPolicy: number;
  shippingLogIronShieldLevelPolicy: number;
  currentFloor: number;
  floorMatchmakingOnOff: number;
  matchmakingType: number;
  region: string;
  fleetId: string;
  dungeonIdTag: string;
  cloudScanUrl: string;
  serverLocate: string;
  matchingQueueType: string;
}

export enum S2CGameStartServerJson_matchMake {
  NONE = 0,
  NORMAL = 1,
  FLOOR = 2,
  UNRECOGNIZED = -1,
}

export function s2CGameStartServerJson_matchMakeFromJSON(object: any): S2CGameStartServerJson_matchMake {
  switch (object) {
    case 0:
    case "NONE":
      return S2CGameStartServerJson_matchMake.NONE;
    case 1:
    case "NORMAL":
      return S2CGameStartServerJson_matchMake.NORMAL;
    case 2:
    case "FLOOR":
      return S2CGameStartServerJson_matchMake.FLOOR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return S2CGameStartServerJson_matchMake.UNRECOGNIZED;
  }
}

export function s2CGameStartServerJson_matchMakeToJSON(object: S2CGameStartServerJson_matchMake): string {
  switch (object) {
    case S2CGameStartServerJson_matchMake.NONE:
      return "NONE";
    case S2CGameStartServerJson_matchMake.NORMAL:
      return "NORMAL";
    case S2CGameStartServerJson_matchMake.FLOOR:
      return "FLOOR";
    case S2CGameStartServerJson_matchMake.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface C2SGameEndServerPOST {
  users: GameEndUserInfo[];
  gameId: number;
  circles: Circle[];
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
  gameType: number;
}

export interface SRankGameUserInfo {
  rankId: string;
  currentPoint: number;
  needPoint: number;
  currentTotalPoint: number;
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
  musics: SMusic[];
  shapeShifts: SShapeShift[];
  quests: SGameQuestInfo[];
  rankInfo: SRankGameUserInfo | undefined;
  entranceFee: number;
  seasonId: string;
  isSeason: number;
  armorSkinIds: string[];
  totalPlayTimeSec: number;
  level: number;
  fame: number;
  isBlackList: number;
  gearScore: number;
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

export interface Location {
  x: number;
  y: number;
  z: number;
}

export interface Circle {
  pos: Location | undefined;
  radius: number;
}

export interface NewItemLog {
  pos: Location | undefined;
  itemId: string;
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
  gameType: number;
  needBlock: number;
  needHWBlock: number;
  blockTimeMin: number;
  addTriumphExpValue: number;
  locations: Location[];
  newItemLogs: NewItemLog[];
  quests: SGameQuestInfo[];
  gameStats: SGameStat[];
  seasonId: string;
  isSeason: number;
  dungeonIdTag: string;
  isBasecamp: number;
  userPcLanguageCode: string;
}

export interface C2SGameEscapeUserPOST {
  resultInfo: GameResultInfo | undefined;
  items: SItem[];
  secretId: string;
}

export interface C2SGameExitUserV2POST {
  resultInfo: GameResultInfo | undefined;
}

export interface C2SGameExitEscapedUserPOST {
  accountId: string;
  characterId: string;
  gameId: number;
}

export interface SSkillFloor {
  skill: SSkill | undefined;
  count: number;
}

export interface SSpellFloor {
  spell: SSpell | undefined;
  count: number;
}

export interface SMusicFloor {
  music: SMusic | undefined;
  count: number;
}

export interface SShapeShiftFloor {
  shapeShift: SShapeShift | undefined;
  count: number;
}

export interface FloorMatchMakingCharacterInfo {
  accountId: string;
  characterId: string;
  downItems: SDownItem[];
  perks: SPerk[];
  skills: SSkillFloor[];
  spells: SSpellFloor[];
  musics: SMusicFloor[];
  shapeShifts: SShapeShiftFloor[];
  characterSkinIds: string[];
  itemSkinIds: string[];
  emotes: SEMOTE[];
  hp: number;
}

export interface C2SPrepareFloorMatchMaking {
  info: FloorMatchMakingCharacterInfo | undefined;
  resultInfo: GameResultInfo | undefined;
}

export interface S2CGamePolicyGET {
  appHash: string[];
  policyJson: string;
}

export interface S2CGameFileDBGET {
  fileDBJson: string;
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

export interface C2SGameReadyPOST {
  gameId: number;
}

export interface GameFloorMatchMakingUserInfo {
  accountId: string;
  characterId: string;
  partyId: string;
}

export interface C2SFloorMatchMakingPOST {
  infos: GameFloorMatchMakingUserInfo[];
  gameId: number;
  currentFloor: number;
  dungeonId: string;
}

export interface GameFloorMatchMakingUserInfoResponse {
  accountId: string;
  characterId: string;
  ip: string;
  port: number;
  sessionId: string;
}

export interface S2CFloorMatchMakingPOSTResponse {
  infos: GameFloorMatchMakingUserInfoResponse[];
}

export interface C2SIronShieldReportPOST {
  callbackType: number;
  reportId: string;
  hIds: string[];
  blob: number[];
  accountId: string;
  characterId: string;
  originNickname: string;
  reason: string;
  needBlock: number;
  needHWBlock: number;
  blockTimeMin: number;
  banType: number;
  blobType: number;
  blobNameTag: string;
}

export interface C2SBanCheckHardwarePOST {
  accountId: string;
  hIds: string[];
}

export interface S2CBanCheckHardwarePOSTResponse {
  accountId: string;
  isBan: number;
  banHIds: string[];
  loginHIds: string[];
}

export interface C2SDirtyItemPOST {
  accountId: string;
  characterId: string;
  gameId: number;
  upsertItems: SItem[];
  deleteItemUniqueIds: number[];
}

export interface C2SIronShieldIsolationPOST {
  accountId: string;
  isolationHours: number;
}

export interface C2SArenaResultPOST {
  resultInfo: GameResultInfo | undefined;
  items: SItem[];
  secretId: string;
}

export interface C2SArenaExitPOST {
  accountId: string;
  characterId: string;
  gameId: number;
  secretId: string;
}

export interface C2SGameFinalizeSessionPOST {
  gameId: number;
  accountId: string;
  characterId: string;
  recoveryItems: SItem[];
}

function createBaseSGameQuestContentInfo(): SGameQuestContentInfo {
  return { contentId: "", contentValue: 0 };
}

export const SGameQuestContentInfo = {
  encode(message: SGameQuestContentInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentId !== "") {
      writer.uint32(18).string(message.contentId);
    }
    if (message.contentValue !== 0) {
      writer.uint32(24).int32(message.contentValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SGameQuestContentInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSGameQuestContentInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contentId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.contentValue = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SGameQuestContentInfo {
    return {
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
      contentValue: isSet(object.contentValue) ? Number(object.contentValue) : 0,
    };
  },

  toJSON(message: SGameQuestContentInfo): unknown {
    const obj: any = {};
    if (message.contentId !== "") {
      obj.contentId = message.contentId;
    }
    if (message.contentValue !== 0) {
      obj.contentValue = Math.round(message.contentValue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SGameQuestContentInfo>, I>>(base?: I): SGameQuestContentInfo {
    return SGameQuestContentInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SGameQuestContentInfo>, I>>(object: I): SGameQuestContentInfo {
    const message = createBaseSGameQuestContentInfo();
    message.contentId = object.contentId ?? "";
    message.contentValue = object.contentValue ?? 0;
    return message;
  },
};

function createBaseSGameQuestInfo(): SGameQuestInfo {
  return { questId: "", infos: [] };
}

export const SGameQuestInfo = {
  encode(message: SGameQuestInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questId !== "") {
      writer.uint32(10).string(message.questId);
    }
    for (const v of message.infos) {
      SGameQuestContentInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SGameQuestInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSGameQuestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.questId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.infos.push(SGameQuestContentInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SGameQuestInfo {
    return {
      questId: isSet(object.questId) ? String(object.questId) : "",
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => SGameQuestContentInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: SGameQuestInfo): unknown {
    const obj: any = {};
    if (message.questId !== "") {
      obj.questId = message.questId;
    }
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => SGameQuestContentInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SGameQuestInfo>, I>>(base?: I): SGameQuestInfo {
    return SGameQuestInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SGameQuestInfo>, I>>(object: I): SGameQuestInfo {
    const message = createBaseSGameQuestInfo();
    message.questId = object.questId ?? "";
    message.infos = object.infos?.map((e) => SGameQuestContentInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseS2CGameEnterUserJson(): S2CGameEnterUserJson {
  return {
    restUrl: "",
    nickName: Buffer.alloc(0),
    streamingNickName: Buffer.alloc(0),
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
          if (tag !== 10) {
            break;
          }

          message.restUrl = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nickName = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.streamingNickName = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.gender = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.partyId = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.karmaRating = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S2CGameEnterUserJson {
    return {
      restUrl: isSet(object.restUrl) ? String(object.restUrl) : "",
      nickName: isSet(object.nickName) ? Buffer.from(bytesFromBase64(object.nickName)) : Buffer.alloc(0),
      streamingNickName: isSet(object.streamingNickName)
        ? Buffer.from(bytesFromBase64(object.streamingNickName))
        : Buffer.alloc(0),
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
    if (message.restUrl !== "") {
      obj.restUrl = message.restUrl;
    }
    if (message.nickName.length !== 0) {
      obj.nickName = base64FromBytes(message.nickName);
    }
    if (message.streamingNickName.length !== 0) {
      obj.streamingNickName = base64FromBytes(message.streamingNickName);
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.gender !== 0) {
      obj.gender = Math.round(message.gender);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.partyId !== "") {
      obj.partyId = message.partyId;
    }
    if (message.karmaRating !== 0) {
      obj.karmaRating = Math.round(message.karmaRating);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CGameEnterUserJson>, I>>(base?: I): S2CGameEnterUserJson {
    return S2CGameEnterUserJson.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<S2CGameEnterUserJson>, I>>(object: I): S2CGameEnterUserJson {
    const message = createBaseS2CGameEnterUserJson();
    message.restUrl = object.restUrl ?? "";
    message.nickName = object.nickName ?? Buffer.alloc(0);
    message.streamingNickName = object.streamingNickName ?? Buffer.alloc(0);
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
      writer.uint32(8).int32(message.advPointType);
    }
    if (message.advPoint !== 0) {
      writer.uint32(16).int32(message.advPoint);
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
          if (tag !== 8) {
            break;
          }

          message.advPointType = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.advPoint = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.advPointType !== 0) {
      obj.advPointType = Math.round(message.advPointType);
    }
    if (message.advPoint !== 0) {
      obj.advPoint = Math.round(message.advPoint);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameExitAdvPoint>, I>>(base?: I): GameExitAdvPoint {
    return GameExitAdvPoint.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.expPointType = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.expPoint = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.expPointType !== 0) {
      obj.expPointType = Math.round(message.expPointType);
    }
    if (message.expPoint !== 0) {
      obj.expPoint = Math.round(message.expPoint);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameExitExpPoint>, I>>(base?: I): GameExitExpPoint {
    return GameExitExpPoint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameExitExpPoint>, I>>(object: I): GameExitExpPoint {
    const message = createBaseGameExitExpPoint();
    message.expPointType = object.expPointType ?? 0;
    message.expPoint = object.expPoint ?? 0;
    return message;
  },
};

function createBaseKilllog(): Killlog {
  return { instigatorAccountId: "", instigatorName: "", effectCauserName: "", hitBoxType: 0, advPoint: 0 };
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
    if (message.advPoint !== 0) {
      writer.uint32(40).int32(message.advPoint);
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
          if (tag !== 10) {
            break;
          }

          message.instigatorAccountId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instigatorName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.effectCauserName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.hitBoxType = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.advPoint = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
      advPoint: isSet(object.advPoint) ? Number(object.advPoint) : 0,
    };
  },

  toJSON(message: Killlog): unknown {
    const obj: any = {};
    if (message.instigatorAccountId !== "") {
      obj.instigatorAccountId = message.instigatorAccountId;
    }
    if (message.instigatorName !== "") {
      obj.instigatorName = message.instigatorName;
    }
    if (message.effectCauserName !== "") {
      obj.effectCauserName = message.effectCauserName;
    }
    if (message.hitBoxType !== 0) {
      obj.hitBoxType = Math.round(message.hitBoxType);
    }
    if (message.advPoint !== 0) {
      obj.advPoint = Math.round(message.advPoint);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Killlog>, I>>(base?: I): Killlog {
    return Killlog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Killlog>, I>>(object: I): Killlog {
    const message = createBaseKilllog();
    message.instigatorAccountId = object.instigatorAccountId ?? "";
    message.instigatorName = object.instigatorName ?? "";
    message.effectCauserName = object.effectCauserName ?? "";
    message.hitBoxType = object.hitBoxType ?? 0;
    message.advPoint = object.advPoint ?? 0;
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
          if (tag !== 10) {
            break;
          }

          message.monsterName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.monsterKillCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.monsterName !== "") {
      obj.monsterName = message.monsterName;
    }
    if (message.monsterKillCount !== 0) {
      obj.monsterKillCount = Math.round(message.monsterKillCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonsterKillLog>, I>>(base?: I): MonsterKillLog {
    return MonsterKillLog.fromPartial(base ?? ({} as any));
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
    gameType: 0,
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
    if (message.gameType !== 0) {
      writer.uint32(120).uint32(message.gameType);
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
          if (tag !== 8) {
            break;
          }

          message.escape = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.items.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.guaranteedItems.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.killCount = reader.uint32();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.advPoints.push(GameExitAdvPoint.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.escapeMapName = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.expPoints.push(GameExitExpPoint.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.killLogData.push(Killlog.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.monsterKillLogs.push(MonsterKillLog.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.gameType = reader.uint32();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.needBlock = reader.uint32();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.needHWBlock = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
      gameType: isSet(object.gameType) ? Number(object.gameType) : 0,
      needBlock: isSet(object.needBlock) ? Number(object.needBlock) : 0,
      needHWBlock: isSet(object.needHWBlock) ? Number(object.needHWBlock) : 0,
    };
  },

  toJSON(message: C2SGameExitUserPOST): unknown {
    const obj: any = {};
    if (message.escape !== 0) {
      obj.escape = Math.round(message.escape);
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => SItem.toJSON(e));
    }
    if (message.guaranteedItems?.length) {
      obj.guaranteedItems = message.guaranteedItems.map((e) => SItem.toJSON(e));
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    if (message.killCount !== 0) {
      obj.killCount = Math.round(message.killCount);
    }
    if (message.advPoints?.length) {
      obj.advPoints = message.advPoints.map((e) => GameExitAdvPoint.toJSON(e));
    }
    if (message.escapeMapName !== "") {
      obj.escapeMapName = message.escapeMapName;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.expPoints?.length) {
      obj.expPoints = message.expPoints.map((e) => GameExitExpPoint.toJSON(e));
    }
    if (message.killLogData?.length) {
      obj.killLogData = message.killLogData.map((e) => Killlog.toJSON(e));
    }
    if (message.monsterKillLogs?.length) {
      obj.monsterKillLogs = message.monsterKillLogs.map((e) => MonsterKillLog.toJSON(e));
    }
    if (message.gameType !== 0) {
      obj.gameType = Math.round(message.gameType);
    }
    if (message.needBlock !== 0) {
      obj.needBlock = Math.round(message.needBlock);
    }
    if (message.needHWBlock !== 0) {
      obj.needHWBlock = Math.round(message.needHWBlock);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameExitUserPOST>, I>>(base?: I): C2SGameExitUserPOST {
    return C2SGameExitUserPOST.fromPartial(base ?? ({} as any));
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
    message.gameType = object.gameType ?? 0;
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

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isSuccess = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.isSuccess !== 0) {
      obj.isSuccess = Math.round(message.isSuccess);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameEnterUserPost>, I>>(base?: I): C2SGameEnterUserPost {
    return C2SGameEnterUserPost.fromPartial(base ?? ({} as any));
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

function createBaseS2CGameStartServerJson(): S2CGameStartServerJson {
  return {
    restUrl: "",
    gameId: 0,
    maxGameUser: 0,
    waitTimeSec: 0,
    dungeonMapIds: [],
    gameHackPolicy: 0,
    validPlayerMeleeAttackRange: 0,
    gameType: 0,
    shippingLogOnOffPolicy: 0,
    shippingLogLevelPolicy: 0,
    gmOnOffPolicy: 0,
    shippingLogIronShieldOnOffPolicy: 0,
    shippingLogIronShieldLevelPolicy: 0,
    currentFloor: 0,
    floorMatchmakingOnOff: 0,
    matchmakingType: 0,
    region: "",
    fleetId: "",
    dungeonIdTag: "",
    cloudScanUrl: "",
    serverLocate: "",
    matchingQueueType: "",
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
    for (const v of message.dungeonMapIds) {
      writer.uint32(42).string(v!);
    }
    if (message.gameHackPolicy !== 0) {
      writer.uint32(48).uint32(message.gameHackPolicy);
    }
    if (message.validPlayerMeleeAttackRange !== 0) {
      writer.uint32(56).uint32(message.validPlayerMeleeAttackRange);
    }
    if (message.gameType !== 0) {
      writer.uint32(64).uint32(message.gameType);
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
    if (message.shippingLogIronShieldOnOffPolicy !== 0) {
      writer.uint32(96).uint32(message.shippingLogIronShieldOnOffPolicy);
    }
    if (message.shippingLogIronShieldLevelPolicy !== 0) {
      writer.uint32(104).uint32(message.shippingLogIronShieldLevelPolicy);
    }
    if (message.currentFloor !== 0) {
      writer.uint32(128).uint32(message.currentFloor);
    }
    if (message.floorMatchmakingOnOff !== 0) {
      writer.uint32(136).uint32(message.floorMatchmakingOnOff);
    }
    if (message.matchmakingType !== 0) {
      writer.uint32(144).uint32(message.matchmakingType);
    }
    if (message.region !== "") {
      writer.uint32(154).string(message.region);
    }
    if (message.fleetId !== "") {
      writer.uint32(162).string(message.fleetId);
    }
    if (message.dungeonIdTag !== "") {
      writer.uint32(170).string(message.dungeonIdTag);
    }
    if (message.cloudScanUrl !== "") {
      writer.uint32(178).string(message.cloudScanUrl);
    }
    if (message.serverLocate !== "") {
      writer.uint32(186).string(message.serverLocate);
    }
    if (message.matchingQueueType !== "") {
      writer.uint32(194).string(message.matchingQueueType);
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
          if (tag !== 10) {
            break;
          }

          message.restUrl = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxGameUser = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.waitTimeSec = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.dungeonMapIds.push(reader.string());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.gameHackPolicy = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.validPlayerMeleeAttackRange = reader.uint32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.gameType = reader.uint32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.shippingLogOnOffPolicy = reader.uint32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.shippingLogLevelPolicy = reader.uint32();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.gmOnOffPolicy = reader.uint32();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.shippingLogIronShieldOnOffPolicy = reader.uint32();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.shippingLogIronShieldLevelPolicy = reader.uint32();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.currentFloor = reader.uint32();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.floorMatchmakingOnOff = reader.uint32();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.matchmakingType = reader.uint32();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.region = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.fleetId = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.dungeonIdTag = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.cloudScanUrl = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.serverLocate = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.matchingQueueType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
      dungeonMapIds: Array.isArray(object?.dungeonMapIds) ? object.dungeonMapIds.map((e: any) => String(e)) : [],
      gameHackPolicy: isSet(object.gameHackPolicy) ? Number(object.gameHackPolicy) : 0,
      validPlayerMeleeAttackRange: isSet(object.validPlayerMeleeAttackRange)
        ? Number(object.validPlayerMeleeAttackRange)
        : 0,
      gameType: isSet(object.gameType) ? Number(object.gameType) : 0,
      shippingLogOnOffPolicy: isSet(object.shippingLogOnOffPolicy) ? Number(object.shippingLogOnOffPolicy) : 0,
      shippingLogLevelPolicy: isSet(object.shippingLogLevelPolicy) ? Number(object.shippingLogLevelPolicy) : 0,
      gmOnOffPolicy: isSet(object.gmOnOffPolicy) ? Number(object.gmOnOffPolicy) : 0,
      shippingLogIronShieldOnOffPolicy: isSet(object.shippingLogIronShieldOnOffPolicy)
        ? Number(object.shippingLogIronShieldOnOffPolicy)
        : 0,
      shippingLogIronShieldLevelPolicy: isSet(object.shippingLogIronShieldLevelPolicy)
        ? Number(object.shippingLogIronShieldLevelPolicy)
        : 0,
      currentFloor: isSet(object.currentFloor) ? Number(object.currentFloor) : 0,
      floorMatchmakingOnOff: isSet(object.floorMatchmakingOnOff) ? Number(object.floorMatchmakingOnOff) : 0,
      matchmakingType: isSet(object.matchmakingType) ? Number(object.matchmakingType) : 0,
      region: isSet(object.region) ? String(object.region) : "",
      fleetId: isSet(object.fleetId) ? String(object.fleetId) : "",
      dungeonIdTag: isSet(object.dungeonIdTag) ? String(object.dungeonIdTag) : "",
      cloudScanUrl: isSet(object.cloudScanUrl) ? String(object.cloudScanUrl) : "",
      serverLocate: isSet(object.serverLocate) ? String(object.serverLocate) : "",
      matchingQueueType: isSet(object.matchingQueueType) ? String(object.matchingQueueType) : "",
    };
  },

  toJSON(message: S2CGameStartServerJson): unknown {
    const obj: any = {};
    if (message.restUrl !== "") {
      obj.restUrl = message.restUrl;
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.maxGameUser !== 0) {
      obj.maxGameUser = Math.round(message.maxGameUser);
    }
    if (message.waitTimeSec !== 0) {
      obj.waitTimeSec = Math.round(message.waitTimeSec);
    }
    if (message.dungeonMapIds?.length) {
      obj.dungeonMapIds = message.dungeonMapIds;
    }
    if (message.gameHackPolicy !== 0) {
      obj.gameHackPolicy = Math.round(message.gameHackPolicy);
    }
    if (message.validPlayerMeleeAttackRange !== 0) {
      obj.validPlayerMeleeAttackRange = Math.round(message.validPlayerMeleeAttackRange);
    }
    if (message.gameType !== 0) {
      obj.gameType = Math.round(message.gameType);
    }
    if (message.shippingLogOnOffPolicy !== 0) {
      obj.shippingLogOnOffPolicy = Math.round(message.shippingLogOnOffPolicy);
    }
    if (message.shippingLogLevelPolicy !== 0) {
      obj.shippingLogLevelPolicy = Math.round(message.shippingLogLevelPolicy);
    }
    if (message.gmOnOffPolicy !== 0) {
      obj.gmOnOffPolicy = Math.round(message.gmOnOffPolicy);
    }
    if (message.shippingLogIronShieldOnOffPolicy !== 0) {
      obj.shippingLogIronShieldOnOffPolicy = Math.round(message.shippingLogIronShieldOnOffPolicy);
    }
    if (message.shippingLogIronShieldLevelPolicy !== 0) {
      obj.shippingLogIronShieldLevelPolicy = Math.round(message.shippingLogIronShieldLevelPolicy);
    }
    if (message.currentFloor !== 0) {
      obj.currentFloor = Math.round(message.currentFloor);
    }
    if (message.floorMatchmakingOnOff !== 0) {
      obj.floorMatchmakingOnOff = Math.round(message.floorMatchmakingOnOff);
    }
    if (message.matchmakingType !== 0) {
      obj.matchmakingType = Math.round(message.matchmakingType);
    }
    if (message.region !== "") {
      obj.region = message.region;
    }
    if (message.fleetId !== "") {
      obj.fleetId = message.fleetId;
    }
    if (message.dungeonIdTag !== "") {
      obj.dungeonIdTag = message.dungeonIdTag;
    }
    if (message.cloudScanUrl !== "") {
      obj.cloudScanUrl = message.cloudScanUrl;
    }
    if (message.serverLocate !== "") {
      obj.serverLocate = message.serverLocate;
    }
    if (message.matchingQueueType !== "") {
      obj.matchingQueueType = message.matchingQueueType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CGameStartServerJson>, I>>(base?: I): S2CGameStartServerJson {
    return S2CGameStartServerJson.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<S2CGameStartServerJson>, I>>(object: I): S2CGameStartServerJson {
    const message = createBaseS2CGameStartServerJson();
    message.restUrl = object.restUrl ?? "";
    message.gameId = object.gameId ?? 0;
    message.maxGameUser = object.maxGameUser ?? 0;
    message.waitTimeSec = object.waitTimeSec ?? 0;
    message.dungeonMapIds = object.dungeonMapIds?.map((e) => e) || [];
    message.gameHackPolicy = object.gameHackPolicy ?? 0;
    message.validPlayerMeleeAttackRange = object.validPlayerMeleeAttackRange ?? 0;
    message.gameType = object.gameType ?? 0;
    message.shippingLogOnOffPolicy = object.shippingLogOnOffPolicy ?? 0;
    message.shippingLogLevelPolicy = object.shippingLogLevelPolicy ?? 0;
    message.gmOnOffPolicy = object.gmOnOffPolicy ?? 0;
    message.shippingLogIronShieldOnOffPolicy = object.shippingLogIronShieldOnOffPolicy ?? 0;
    message.shippingLogIronShieldLevelPolicy = object.shippingLogIronShieldLevelPolicy ?? 0;
    message.currentFloor = object.currentFloor ?? 0;
    message.floorMatchmakingOnOff = object.floorMatchmakingOnOff ?? 0;
    message.matchmakingType = object.matchmakingType ?? 0;
    message.region = object.region ?? "";
    message.fleetId = object.fleetId ?? "";
    message.dungeonIdTag = object.dungeonIdTag ?? "";
    message.cloudScanUrl = object.cloudScanUrl ?? "";
    message.serverLocate = object.serverLocate ?? "";
    message.matchingQueueType = object.matchingQueueType ?? "";
    return message;
  },
};

function createBaseC2SGameEndServerPOST(): C2SGameEndServerPOST {
  return { users: [], gameId: 0, circles: [] };
}

export const C2SGameEndServerPOST = {
  encode(message: C2SGameEndServerPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      GameEndUserInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.gameId !== 0) {
      writer.uint32(16).uint64(message.gameId);
    }
    for (const v of message.circles) {
      Circle.encode(v!, writer.uint32(26).fork()).ldelim();
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
          if (tag !== 10) {
            break;
          }

          message.users.push(GameEndUserInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.circles.push(Circle.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
      circles: Array.isArray(object?.circles) ? object.circles.map((e: any) => Circle.fromJSON(e)) : [],
    };
  },

  toJSON(message: C2SGameEndServerPOST): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => GameEndUserInfo.toJSON(e));
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.circles?.length) {
      obj.circles = message.circles.map((e) => Circle.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameEndServerPOST>, I>>(base?: I): C2SGameEndServerPOST {
    return C2SGameEndServerPOST.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<C2SGameEndServerPOST>, I>>(object: I): C2SGameEndServerPOST {
    const message = createBaseC2SGameEndServerPOST();
    message.users = object.users?.map((e) => GameEndUserInfo.fromPartial(e)) || [];
    message.gameId = object.gameId ?? 0;
    message.circles = object.circles?.map((e) => Circle.fromPartial(e)) || [];
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
          if (tag !== 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.kill = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.death = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.kill !== 0) {
      obj.kill = Math.round(message.kill);
    }
    if (message.death !== 0) {
      obj.death = Math.round(message.death);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameEndUserInfo>, I>>(base?: I): GameEndUserInfo {
    return GameEndUserInfo.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mapNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.mapNames?.length) {
      obj.mapNames = message.mapNames;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameStartPOST>, I>>(base?: I): C2SGameStartPOST {
    return C2SGameStartPOST.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<C2SGameStartPOST>, I>>(object: I): C2SGameStartPOST {
    const message = createBaseC2SGameStartPOST();
    message.gameId = object.gameId ?? 0;
    message.mapNames = object.mapNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseC2SGameCharacterInfoGet(): C2SGameCharacterInfoGet {
  return { gameId: 0, accountId: "", characterId: "", gameType: 0 };
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
    if (message.gameType !== 0) {
      writer.uint32(32).uint32(message.gameType);
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
          if (tag !== 8) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gameType = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
      gameType: isSet(object.gameType) ? Number(object.gameType) : 0,
    };
  },

  toJSON(message: C2SGameCharacterInfoGet): unknown {
    const obj: any = {};
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.gameType !== 0) {
      obj.gameType = Math.round(message.gameType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameCharacterInfoGet>, I>>(base?: I): C2SGameCharacterInfoGet {
    return C2SGameCharacterInfoGet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<C2SGameCharacterInfoGet>, I>>(object: I): C2SGameCharacterInfoGet {
    const message = createBaseC2SGameCharacterInfoGet();
    message.gameId = object.gameId ?? 0;
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.gameType = object.gameType ?? 0;
    return message;
  },
};

function createBaseSRankGameUserInfo(): SRankGameUserInfo {
  return { rankId: "", currentPoint: 0, needPoint: 0, currentTotalPoint: 0 };
}

export const SRankGameUserInfo = {
  encode(message: SRankGameUserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rankId !== "") {
      writer.uint32(10).string(message.rankId);
    }
    if (message.currentPoint !== 0) {
      writer.uint32(16).uint32(message.currentPoint);
    }
    if (message.needPoint !== 0) {
      writer.uint32(24).uint32(message.needPoint);
    }
    if (message.currentTotalPoint !== 0) {
      writer.uint32(32).uint32(message.currentTotalPoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SRankGameUserInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSRankGameUserInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rankId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.currentPoint = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.needPoint = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.currentTotalPoint = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SRankGameUserInfo {
    return {
      rankId: isSet(object.rankId) ? String(object.rankId) : "",
      currentPoint: isSet(object.currentPoint) ? Number(object.currentPoint) : 0,
      needPoint: isSet(object.needPoint) ? Number(object.needPoint) : 0,
      currentTotalPoint: isSet(object.currentTotalPoint) ? Number(object.currentTotalPoint) : 0,
    };
  },

  toJSON(message: SRankGameUserInfo): unknown {
    const obj: any = {};
    if (message.rankId !== "") {
      obj.rankId = message.rankId;
    }
    if (message.currentPoint !== 0) {
      obj.currentPoint = Math.round(message.currentPoint);
    }
    if (message.needPoint !== 0) {
      obj.needPoint = Math.round(message.needPoint);
    }
    if (message.currentTotalPoint !== 0) {
      obj.currentTotalPoint = Math.round(message.currentTotalPoint);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SRankGameUserInfo>, I>>(base?: I): SRankGameUserInfo {
    return SRankGameUserInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SRankGameUserInfo>, I>>(object: I): SRankGameUserInfo {
    const message = createBaseSRankGameUserInfo();
    message.rankId = object.rankId ?? "";
    message.currentPoint = object.currentPoint ?? 0;
    message.needPoint = object.needPoint ?? 0;
    message.currentTotalPoint = object.currentTotalPoint ?? 0;
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
    musics: [],
    shapeShifts: [],
    quests: [],
    rankInfo: undefined,
    entranceFee: 0,
    seasonId: "",
    isSeason: 0,
    armorSkinIds: [],
    totalPlayTimeSec: 0,
    level: 0,
    fame: 0,
    isBlackList: 0,
    gearScore: 0,
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
    for (const v of message.musics) {
      SMusic.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.shapeShifts) {
      SShapeShift.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.quests) {
      SGameQuestInfo.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.rankInfo !== undefined) {
      SRankGameUserInfo.encode(message.rankInfo, writer.uint32(130).fork()).ldelim();
    }
    if (message.entranceFee !== 0) {
      writer.uint32(136).uint32(message.entranceFee);
    }
    if (message.seasonId !== "") {
      writer.uint32(146).string(message.seasonId);
    }
    if (message.isSeason !== 0) {
      writer.uint32(152).uint32(message.isSeason);
    }
    for (const v of message.armorSkinIds) {
      writer.uint32(162).string(v!);
    }
    if (message.totalPlayTimeSec !== 0) {
      writer.uint32(168).int32(message.totalPlayTimeSec);
    }
    if (message.level !== 0) {
      writer.uint32(176).int32(message.level);
    }
    if (message.fame !== 0) {
      writer.uint32(184).int32(message.fame);
    }
    if (message.isBlackList !== 0) {
      writer.uint32(192).int32(message.isBlackList);
    }
    if (message.gearScore !== 0) {
      writer.uint32(200).int32(message.gearScore);
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
          if (tag !== 8) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.items.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.perks.push(SPerk.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.skills.push(SSkill.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.spells.push(SSpell.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.characterSkinIds.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.itemSkinIds.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.emotes.push(SEMOTE.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.actionIds.push(reader.string());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.musics.push(SMusic.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.shapeShifts.push(SShapeShift.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.quests.push(SGameQuestInfo.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.rankInfo = SRankGameUserInfo.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.entranceFee = reader.uint32();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.seasonId = reader.string();
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.isSeason = reader.uint32();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.armorSkinIds.push(reader.string());
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.totalPlayTimeSec = reader.int32();
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.level = reader.int32();
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.fame = reader.int32();
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.isBlackList = reader.int32();
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.gearScore = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
      musics: Array.isArray(object?.musics) ? object.musics.map((e: any) => SMusic.fromJSON(e)) : [],
      shapeShifts: Array.isArray(object?.shapeShifts)
        ? object.shapeShifts.map((e: any) => SShapeShift.fromJSON(e))
        : [],
      quests: Array.isArray(object?.quests) ? object.quests.map((e: any) => SGameQuestInfo.fromJSON(e)) : [],
      rankInfo: isSet(object.rankInfo) ? SRankGameUserInfo.fromJSON(object.rankInfo) : undefined,
      entranceFee: isSet(object.entranceFee) ? Number(object.entranceFee) : 0,
      seasonId: isSet(object.seasonId) ? String(object.seasonId) : "",
      isSeason: isSet(object.isSeason) ? Number(object.isSeason) : 0,
      armorSkinIds: Array.isArray(object?.armorSkinIds) ? object.armorSkinIds.map((e: any) => String(e)) : [],
      totalPlayTimeSec: isSet(object.totalPlayTimeSec) ? Number(object.totalPlayTimeSec) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      fame: isSet(object.fame) ? Number(object.fame) : 0,
      isBlackList: isSet(object.isBlackList) ? Number(object.isBlackList) : 0,
      gearScore: isSet(object.gearScore) ? Number(object.gearScore) : 0,
    };
  },

  toJSON(message: S2CGameCharacterInfoJson): unknown {
    const obj: any = {};
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => SItem.toJSON(e));
    }
    if (message.perks?.length) {
      obj.perks = message.perks.map((e) => SPerk.toJSON(e));
    }
    if (message.skills?.length) {
      obj.skills = message.skills.map((e) => SSkill.toJSON(e));
    }
    if (message.spells?.length) {
      obj.spells = message.spells.map((e) => SSpell.toJSON(e));
    }
    if (message.characterSkinIds?.length) {
      obj.characterSkinIds = message.characterSkinIds;
    }
    if (message.itemSkinIds?.length) {
      obj.itemSkinIds = message.itemSkinIds;
    }
    if (message.emotes?.length) {
      obj.emotes = message.emotes.map((e) => SEMOTE.toJSON(e));
    }
    if (message.actionIds?.length) {
      obj.actionIds = message.actionIds;
    }
    if (message.musics?.length) {
      obj.musics = message.musics.map((e) => SMusic.toJSON(e));
    }
    if (message.shapeShifts?.length) {
      obj.shapeShifts = message.shapeShifts.map((e) => SShapeShift.toJSON(e));
    }
    if (message.quests?.length) {
      obj.quests = message.quests.map((e) => SGameQuestInfo.toJSON(e));
    }
    if (message.rankInfo !== undefined) {
      obj.rankInfo = SRankGameUserInfo.toJSON(message.rankInfo);
    }
    if (message.entranceFee !== 0) {
      obj.entranceFee = Math.round(message.entranceFee);
    }
    if (message.seasonId !== "") {
      obj.seasonId = message.seasonId;
    }
    if (message.isSeason !== 0) {
      obj.isSeason = Math.round(message.isSeason);
    }
    if (message.armorSkinIds?.length) {
      obj.armorSkinIds = message.armorSkinIds;
    }
    if (message.totalPlayTimeSec !== 0) {
      obj.totalPlayTimeSec = Math.round(message.totalPlayTimeSec);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.fame !== 0) {
      obj.fame = Math.round(message.fame);
    }
    if (message.isBlackList !== 0) {
      obj.isBlackList = Math.round(message.isBlackList);
    }
    if (message.gearScore !== 0) {
      obj.gearScore = Math.round(message.gearScore);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CGameCharacterInfoJson>, I>>(base?: I): S2CGameCharacterInfoJson {
    return S2CGameCharacterInfoJson.fromPartial(base ?? ({} as any));
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
    message.musics = object.musics?.map((e) => SMusic.fromPartial(e)) || [];
    message.shapeShifts = object.shapeShifts?.map((e) => SShapeShift.fromPartial(e)) || [];
    message.quests = object.quests?.map((e) => SGameQuestInfo.fromPartial(e)) || [];
    message.rankInfo = (object.rankInfo !== undefined && object.rankInfo !== null)
      ? SRankGameUserInfo.fromPartial(object.rankInfo)
      : undefined;
    message.entranceFee = object.entranceFee ?? 0;
    message.seasonId = object.seasonId ?? "";
    message.isSeason = object.isSeason ?? 0;
    message.armorSkinIds = object.armorSkinIds?.map((e) => e) || [];
    message.totalPlayTimeSec = object.totalPlayTimeSec ?? 0;
    message.level = object.level ?? 0;
    message.fame = object.fame ?? 0;
    message.isBlackList = object.isBlackList ?? 0;
    message.gearScore = object.gearScore ?? 0;
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
          if (tag !== 8) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameAliveCheckGET>, I>>(base?: I): C2SGameAliveCheckGET {
    return C2SGameAliveCheckGET.fromPartial(base ?? ({} as any));
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
          if (tag !== 10) {
            break;
          }

          message.Id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Us.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.Id !== "") {
      obj.Id = message.Id;
    }
    if (message.Us?.length) {
      obj.Us = message.Us;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AliveDataInfo>, I>>(base?: I): AliveDataInfo {
    return AliveDataInfo.fromPartial(base ?? ({} as any));
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
          if (tag !== 10) {
            break;
          }

          message.Gs = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.infos.push(AliveDataInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.Gs !== "") {
      obj.Gs = message.Gs;
    }
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => AliveDataInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SAliveAppendDataGET>, I>>(base?: I): C2SAliveAppendDataGET {
    return C2SAliveAppendDataGET.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameInterruptPOST>, I>>(base?: I): C2SGameInterruptPOST {
    return C2SGameInterruptPOST.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reportAccountId = reader.string();
          continue;
        case 3:
          if (tag === 24) {
            message.category.push(reader.uint32());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.category.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.targetAccountId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.targetNickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.targetCharacterId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.reportContent = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.reportAccountId !== "") {
      obj.reportAccountId = message.reportAccountId;
    }
    if (message.category?.length) {
      obj.category = message.category.map((e) => Math.round(e));
    }
    if (message.targetAccountId !== "") {
      obj.targetAccountId = message.targetAccountId;
    }
    if (message.targetNickName !== undefined) {
      obj.targetNickName = saccountNickname.toJSON(message.targetNickName);
    }
    if (message.targetCharacterId !== "") {
      obj.targetCharacterId = message.targetCharacterId;
    }
    if (message.reportContent !== "") {
      obj.reportContent = message.reportContent;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SUserReportPOST>, I>>(base?: I): C2SUserReportPOST {
    return C2SUserReportPOST.fromPartial(base ?? ({} as any));
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
          if (tag !== 10) {
            break;
          }

          message.reportAccountId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetAccountId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reportKey = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.category = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.reportAccountId !== "") {
      obj.reportAccountId = message.reportAccountId;
    }
    if (message.targetAccountId !== "") {
      obj.targetAccountId = message.targetAccountId;
    }
    if (message.reportKey !== "") {
      obj.reportKey = message.reportKey;
    }
    if (message.category !== 0) {
      obj.category = Math.round(message.category);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CUserReportPOSTResponse>, I>>(base?: I): S2CUserReportPOSTResponse {
    return S2CUserReportPOSTResponse.fromPartial(base ?? ({} as any));
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

function createBaseLocation(): Location {
  return { x: 0, y: 0, z: 0 };
}

export const Location = {
  encode(message: Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int32(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(24).int32(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Location {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.x = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.y = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.z = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Location {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: Location): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = Math.round(message.x);
    }
    if (message.y !== 0) {
      obj.y = Math.round(message.y);
    }
    if (message.z !== 0) {
      obj.z = Math.round(message.z);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Location>, I>>(base?: I): Location {
    return Location.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Location>, I>>(object: I): Location {
    const message = createBaseLocation();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBaseCircle(): Circle {
  return { pos: undefined, radius: 0 };
}

export const Circle = {
  encode(message: Circle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pos !== undefined) {
      Location.encode(message.pos, writer.uint32(10).fork()).ldelim();
    }
    if (message.radius !== 0) {
      writer.uint32(21).float(message.radius);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Circle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCircle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pos = Location.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.radius = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Circle {
    return {
      pos: isSet(object.pos) ? Location.fromJSON(object.pos) : undefined,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
    };
  },

  toJSON(message: Circle): unknown {
    const obj: any = {};
    if (message.pos !== undefined) {
      obj.pos = Location.toJSON(message.pos);
    }
    if (message.radius !== 0) {
      obj.radius = message.radius;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Circle>, I>>(base?: I): Circle {
    return Circle.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Circle>, I>>(object: I): Circle {
    const message = createBaseCircle();
    message.pos = (object.pos !== undefined && object.pos !== null) ? Location.fromPartial(object.pos) : undefined;
    message.radius = object.radius ?? 0;
    return message;
  },
};

function createBaseNewItemLog(): NewItemLog {
  return { pos: undefined, itemId: "" };
}

export const NewItemLog = {
  encode(message: NewItemLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pos !== undefined) {
      Location.encode(message.pos, writer.uint32(10).fork()).ldelim();
    }
    if (message.itemId !== "") {
      writer.uint32(18).string(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewItemLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewItemLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pos = Location.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.itemId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NewItemLog {
    return {
      pos: isSet(object.pos) ? Location.fromJSON(object.pos) : undefined,
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
    };
  },

  toJSON(message: NewItemLog): unknown {
    const obj: any = {};
    if (message.pos !== undefined) {
      obj.pos = Location.toJSON(message.pos);
    }
    if (message.itemId !== "") {
      obj.itemId = message.itemId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NewItemLog>, I>>(base?: I): NewItemLog {
    return NewItemLog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NewItemLog>, I>>(object: I): NewItemLog {
    const message = createBaseNewItemLog();
    message.pos = (object.pos !== undefined && object.pos !== null) ? Location.fromPartial(object.pos) : undefined;
    message.itemId = object.itemId ?? "";
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
    gameType: 0,
    needBlock: 0,
    needHWBlock: 0,
    blockTimeMin: 0,
    addTriumphExpValue: 0,
    locations: [],
    newItemLogs: [],
    quests: [],
    gameStats: [],
    seasonId: "",
    isSeason: 0,
    dungeonIdTag: "",
    isBasecamp: 0,
    userPcLanguageCode: "",
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
    if (message.gameType !== 0) {
      writer.uint32(96).uint32(message.gameType);
    }
    if (message.needBlock !== 0) {
      writer.uint32(104).uint32(message.needBlock);
    }
    if (message.needHWBlock !== 0) {
      writer.uint32(112).uint32(message.needHWBlock);
    }
    if (message.blockTimeMin !== 0) {
      writer.uint32(120).uint32(message.blockTimeMin);
    }
    if (message.addTriumphExpValue !== 0) {
      writer.uint32(128).int32(message.addTriumphExpValue);
    }
    for (const v of message.locations) {
      Location.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.newItemLogs) {
      NewItemLog.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.quests) {
      SGameQuestInfo.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.gameStats) {
      SGameStat.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    if (message.seasonId !== "") {
      writer.uint32(170).string(message.seasonId);
    }
    if (message.isSeason !== 0) {
      writer.uint32(176).uint32(message.isSeason);
    }
    if (message.dungeonIdTag !== "") {
      writer.uint32(186).string(message.dungeonIdTag);
    }
    if (message.isBasecamp !== 0) {
      writer.uint32(192).uint32(message.isBasecamp);
    }
    if (message.userPcLanguageCode !== "") {
      writer.uint32(202).string(message.userPcLanguageCode);
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

          message.gameId = longToNumber(reader.uint64() as Long);
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

          message.killCount = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.advPoints.push(GameExitAdvPoint.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.escapeMapName = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.expPoints.push(GameExitExpPoint.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.killLogData.push(Killlog.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.monsterKillLogs.push(MonsterKillLog.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.gameType = reader.uint32();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.needBlock = reader.uint32();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.needHWBlock = reader.uint32();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.blockTimeMin = reader.uint32();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.addTriumphExpValue = reader.int32();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.locations.push(Location.decode(reader, reader.uint32()));
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.newItemLogs.push(NewItemLog.decode(reader, reader.uint32()));
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.quests.push(SGameQuestInfo.decode(reader, reader.uint32()));
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.gameStats.push(SGameStat.decode(reader, reader.uint32()));
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.seasonId = reader.string();
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.isSeason = reader.uint32();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.dungeonIdTag = reader.string();
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.isBasecamp = reader.uint32();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.userPcLanguageCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
      gameType: isSet(object.gameType) ? Number(object.gameType) : 0,
      needBlock: isSet(object.needBlock) ? Number(object.needBlock) : 0,
      needHWBlock: isSet(object.needHWBlock) ? Number(object.needHWBlock) : 0,
      blockTimeMin: isSet(object.blockTimeMin) ? Number(object.blockTimeMin) : 0,
      addTriumphExpValue: isSet(object.addTriumphExpValue) ? Number(object.addTriumphExpValue) : 0,
      locations: Array.isArray(object?.locations) ? object.locations.map((e: any) => Location.fromJSON(e)) : [],
      newItemLogs: Array.isArray(object?.newItemLogs) ? object.newItemLogs.map((e: any) => NewItemLog.fromJSON(e)) : [],
      quests: Array.isArray(object?.quests) ? object.quests.map((e: any) => SGameQuestInfo.fromJSON(e)) : [],
      gameStats: Array.isArray(object?.gameStats) ? object.gameStats.map((e: any) => SGameStat.fromJSON(e)) : [],
      seasonId: isSet(object.seasonId) ? String(object.seasonId) : "",
      isSeason: isSet(object.isSeason) ? Number(object.isSeason) : 0,
      dungeonIdTag: isSet(object.dungeonIdTag) ? String(object.dungeonIdTag) : "",
      isBasecamp: isSet(object.isBasecamp) ? Number(object.isBasecamp) : 0,
      userPcLanguageCode: isSet(object.userPcLanguageCode) ? String(object.userPcLanguageCode) : "",
    };
  },

  toJSON(message: GameResultInfo): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.characterClass !== "") {
      obj.characterClass = message.characterClass;
    }
    if (message.killCount !== 0) {
      obj.killCount = Math.round(message.killCount);
    }
    if (message.advPoints?.length) {
      obj.advPoints = message.advPoints.map((e) => GameExitAdvPoint.toJSON(e));
    }
    if (message.escapeMapName !== "") {
      obj.escapeMapName = message.escapeMapName;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.expPoints?.length) {
      obj.expPoints = message.expPoints.map((e) => GameExitExpPoint.toJSON(e));
    }
    if (message.killLogData?.length) {
      obj.killLogData = message.killLogData.map((e) => Killlog.toJSON(e));
    }
    if (message.monsterKillLogs?.length) {
      obj.monsterKillLogs = message.monsterKillLogs.map((e) => MonsterKillLog.toJSON(e));
    }
    if (message.gameType !== 0) {
      obj.gameType = Math.round(message.gameType);
    }
    if (message.needBlock !== 0) {
      obj.needBlock = Math.round(message.needBlock);
    }
    if (message.needHWBlock !== 0) {
      obj.needHWBlock = Math.round(message.needHWBlock);
    }
    if (message.blockTimeMin !== 0) {
      obj.blockTimeMin = Math.round(message.blockTimeMin);
    }
    if (message.addTriumphExpValue !== 0) {
      obj.addTriumphExpValue = Math.round(message.addTriumphExpValue);
    }
    if (message.locations?.length) {
      obj.locations = message.locations.map((e) => Location.toJSON(e));
    }
    if (message.newItemLogs?.length) {
      obj.newItemLogs = message.newItemLogs.map((e) => NewItemLog.toJSON(e));
    }
    if (message.quests?.length) {
      obj.quests = message.quests.map((e) => SGameQuestInfo.toJSON(e));
    }
    if (message.gameStats?.length) {
      obj.gameStats = message.gameStats.map((e) => SGameStat.toJSON(e));
    }
    if (message.seasonId !== "") {
      obj.seasonId = message.seasonId;
    }
    if (message.isSeason !== 0) {
      obj.isSeason = Math.round(message.isSeason);
    }
    if (message.dungeonIdTag !== "") {
      obj.dungeonIdTag = message.dungeonIdTag;
    }
    if (message.isBasecamp !== 0) {
      obj.isBasecamp = Math.round(message.isBasecamp);
    }
    if (message.userPcLanguageCode !== "") {
      obj.userPcLanguageCode = message.userPcLanguageCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameResultInfo>, I>>(base?: I): GameResultInfo {
    return GameResultInfo.fromPartial(base ?? ({} as any));
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
    message.gameType = object.gameType ?? 0;
    message.needBlock = object.needBlock ?? 0;
    message.needHWBlock = object.needHWBlock ?? 0;
    message.blockTimeMin = object.blockTimeMin ?? 0;
    message.addTriumphExpValue = object.addTriumphExpValue ?? 0;
    message.locations = object.locations?.map((e) => Location.fromPartial(e)) || [];
    message.newItemLogs = object.newItemLogs?.map((e) => NewItemLog.fromPartial(e)) || [];
    message.quests = object.quests?.map((e) => SGameQuestInfo.fromPartial(e)) || [];
    message.gameStats = object.gameStats?.map((e) => SGameStat.fromPartial(e)) || [];
    message.seasonId = object.seasonId ?? "";
    message.isSeason = object.isSeason ?? 0;
    message.dungeonIdTag = object.dungeonIdTag ?? "";
    message.isBasecamp = object.isBasecamp ?? 0;
    message.userPcLanguageCode = object.userPcLanguageCode ?? "";
    return message;
  },
};

function createBaseC2SGameEscapeUserPOST(): C2SGameEscapeUserPOST {
  return { resultInfo: undefined, items: [], secretId: "" };
}

export const C2SGameEscapeUserPOST = {
  encode(message: C2SGameEscapeUserPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resultInfo !== undefined) {
      GameResultInfo.encode(message.resultInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.items) {
      SItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.secretId !== "") {
      writer.uint32(26).string(message.secretId);
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
          if (tag !== 10) {
            break;
          }

          message.resultInfo = GameResultInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.items.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.secretId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
      secretId: isSet(object.secretId) ? String(object.secretId) : "",
    };
  },

  toJSON(message: C2SGameEscapeUserPOST): unknown {
    const obj: any = {};
    if (message.resultInfo !== undefined) {
      obj.resultInfo = GameResultInfo.toJSON(message.resultInfo);
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => SItem.toJSON(e));
    }
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameEscapeUserPOST>, I>>(base?: I): C2SGameEscapeUserPOST {
    return C2SGameEscapeUserPOST.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<C2SGameEscapeUserPOST>, I>>(object: I): C2SGameEscapeUserPOST {
    const message = createBaseC2SGameEscapeUserPOST();
    message.resultInfo = (object.resultInfo !== undefined && object.resultInfo !== null)
      ? GameResultInfo.fromPartial(object.resultInfo)
      : undefined;
    message.items = object.items?.map((e) => SItem.fromPartial(e)) || [];
    message.secretId = object.secretId ?? "";
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
          if (tag !== 10) {
            break;
          }

          message.resultInfo = GameResultInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.resultInfo !== undefined) {
      obj.resultInfo = GameResultInfo.toJSON(message.resultInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameExitUserV2POST>, I>>(base?: I): C2SGameExitUserV2POST {
    return C2SGameExitUserV2POST.fromPartial(base ?? ({} as any));
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

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameExitEscapedUserPOST>, I>>(base?: I): C2SGameExitEscapedUserPOST {
    return C2SGameExitEscapedUserPOST.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<C2SGameExitEscapedUserPOST>, I>>(object: I): C2SGameExitEscapedUserPOST {
    const message = createBaseC2SGameExitEscapedUserPOST();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.gameId = object.gameId ?? 0;
    return message;
  },
};

function createBaseSSkillFloor(): SSkillFloor {
  return { skill: undefined, count: 0 };
}

export const SSkillFloor = {
  encode(message: SSkillFloor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.skill !== undefined) {
      SSkill.encode(message.skill, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSkillFloor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSSkillFloor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.skill = SSkill.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.count = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SSkillFloor {
    return {
      skill: isSet(object.skill) ? SSkill.fromJSON(object.skill) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: SSkillFloor): unknown {
    const obj: any = {};
    if (message.skill !== undefined) {
      obj.skill = SSkill.toJSON(message.skill);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SSkillFloor>, I>>(base?: I): SSkillFloor {
    return SSkillFloor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SSkillFloor>, I>>(object: I): SSkillFloor {
    const message = createBaseSSkillFloor();
    message.skill = (object.skill !== undefined && object.skill !== null)
      ? SSkill.fromPartial(object.skill)
      : undefined;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseSSpellFloor(): SSpellFloor {
  return { spell: undefined, count: 0 };
}

export const SSpellFloor = {
  encode(message: SSpellFloor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spell !== undefined) {
      SSpell.encode(message.spell, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSpellFloor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSSpellFloor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.spell = SSpell.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.count = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SSpellFloor {
    return {
      spell: isSet(object.spell) ? SSpell.fromJSON(object.spell) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: SSpellFloor): unknown {
    const obj: any = {};
    if (message.spell !== undefined) {
      obj.spell = SSpell.toJSON(message.spell);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SSpellFloor>, I>>(base?: I): SSpellFloor {
    return SSpellFloor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SSpellFloor>, I>>(object: I): SSpellFloor {
    const message = createBaseSSpellFloor();
    message.spell = (object.spell !== undefined && object.spell !== null)
      ? SSpell.fromPartial(object.spell)
      : undefined;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseSMusicFloor(): SMusicFloor {
  return { music: undefined, count: 0 };
}

export const SMusicFloor = {
  encode(message: SMusicFloor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.music !== undefined) {
      SMusic.encode(message.music, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SMusicFloor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSMusicFloor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.music = SMusic.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.count = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SMusicFloor {
    return {
      music: isSet(object.music) ? SMusic.fromJSON(object.music) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: SMusicFloor): unknown {
    const obj: any = {};
    if (message.music !== undefined) {
      obj.music = SMusic.toJSON(message.music);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SMusicFloor>, I>>(base?: I): SMusicFloor {
    return SMusicFloor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SMusicFloor>, I>>(object: I): SMusicFloor {
    const message = createBaseSMusicFloor();
    message.music = (object.music !== undefined && object.music !== null)
      ? SMusic.fromPartial(object.music)
      : undefined;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseSShapeShiftFloor(): SShapeShiftFloor {
  return { shapeShift: undefined, count: 0 };
}

export const SShapeShiftFloor = {
  encode(message: SShapeShiftFloor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shapeShift !== undefined) {
      SShapeShift.encode(message.shapeShift, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SShapeShiftFloor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSShapeShiftFloor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shapeShift = SShapeShift.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.count = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SShapeShiftFloor {
    return {
      shapeShift: isSet(object.shapeShift) ? SShapeShift.fromJSON(object.shapeShift) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: SShapeShiftFloor): unknown {
    const obj: any = {};
    if (message.shapeShift !== undefined) {
      obj.shapeShift = SShapeShift.toJSON(message.shapeShift);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SShapeShiftFloor>, I>>(base?: I): SShapeShiftFloor {
    return SShapeShiftFloor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SShapeShiftFloor>, I>>(object: I): SShapeShiftFloor {
    const message = createBaseSShapeShiftFloor();
    message.shapeShift = (object.shapeShift !== undefined && object.shapeShift !== null)
      ? SShapeShift.fromPartial(object.shapeShift)
      : undefined;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseFloorMatchMakingCharacterInfo(): FloorMatchMakingCharacterInfo {
  return {
    accountId: "",
    characterId: "",
    downItems: [],
    perks: [],
    skills: [],
    spells: [],
    musics: [],
    shapeShifts: [],
    characterSkinIds: [],
    itemSkinIds: [],
    emotes: [],
    hp: 0,
  };
}

export const FloorMatchMakingCharacterInfo = {
  encode(message: FloorMatchMakingCharacterInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    for (const v of message.downItems) {
      SDownItem.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.perks) {
      SPerk.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.skills) {
      SSkillFloor.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.spells) {
      SSpellFloor.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.musics) {
      SMusicFloor.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.shapeShifts) {
      SShapeShiftFloor.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.characterSkinIds) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.itemSkinIds) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.emotes) {
      SEMOTE.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.hp !== 0) {
      writer.uint32(96).int32(message.hp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FloorMatchMakingCharacterInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloorMatchMakingCharacterInfo();
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

          message.downItems.push(SDownItem.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.perks.push(SPerk.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.skills.push(SSkillFloor.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.spells.push(SSpellFloor.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.musics.push(SMusicFloor.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.shapeShifts.push(SShapeShiftFloor.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.characterSkinIds.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.itemSkinIds.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.emotes.push(SEMOTE.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.hp = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FloorMatchMakingCharacterInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      downItems: Array.isArray(object?.downItems) ? object.downItems.map((e: any) => SDownItem.fromJSON(e)) : [],
      perks: Array.isArray(object?.perks) ? object.perks.map((e: any) => SPerk.fromJSON(e)) : [],
      skills: Array.isArray(object?.skills) ? object.skills.map((e: any) => SSkillFloor.fromJSON(e)) : [],
      spells: Array.isArray(object?.spells) ? object.spells.map((e: any) => SSpellFloor.fromJSON(e)) : [],
      musics: Array.isArray(object?.musics) ? object.musics.map((e: any) => SMusicFloor.fromJSON(e)) : [],
      shapeShifts: Array.isArray(object?.shapeShifts)
        ? object.shapeShifts.map((e: any) => SShapeShiftFloor.fromJSON(e))
        : [],
      characterSkinIds: Array.isArray(object?.characterSkinIds)
        ? object.characterSkinIds.map((e: any) => String(e))
        : [],
      itemSkinIds: Array.isArray(object?.itemSkinIds) ? object.itemSkinIds.map((e: any) => String(e)) : [],
      emotes: Array.isArray(object?.emotes) ? object.emotes.map((e: any) => SEMOTE.fromJSON(e)) : [],
      hp: isSet(object.hp) ? Number(object.hp) : 0,
    };
  },

  toJSON(message: FloorMatchMakingCharacterInfo): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.downItems?.length) {
      obj.downItems = message.downItems.map((e) => SDownItem.toJSON(e));
    }
    if (message.perks?.length) {
      obj.perks = message.perks.map((e) => SPerk.toJSON(e));
    }
    if (message.skills?.length) {
      obj.skills = message.skills.map((e) => SSkillFloor.toJSON(e));
    }
    if (message.spells?.length) {
      obj.spells = message.spells.map((e) => SSpellFloor.toJSON(e));
    }
    if (message.musics?.length) {
      obj.musics = message.musics.map((e) => SMusicFloor.toJSON(e));
    }
    if (message.shapeShifts?.length) {
      obj.shapeShifts = message.shapeShifts.map((e) => SShapeShiftFloor.toJSON(e));
    }
    if (message.characterSkinIds?.length) {
      obj.characterSkinIds = message.characterSkinIds;
    }
    if (message.itemSkinIds?.length) {
      obj.itemSkinIds = message.itemSkinIds;
    }
    if (message.emotes?.length) {
      obj.emotes = message.emotes.map((e) => SEMOTE.toJSON(e));
    }
    if (message.hp !== 0) {
      obj.hp = Math.round(message.hp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FloorMatchMakingCharacterInfo>, I>>(base?: I): FloorMatchMakingCharacterInfo {
    return FloorMatchMakingCharacterInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FloorMatchMakingCharacterInfo>, I>>(
    object: I,
  ): FloorMatchMakingCharacterInfo {
    const message = createBaseFloorMatchMakingCharacterInfo();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.downItems = object.downItems?.map((e) => SDownItem.fromPartial(e)) || [];
    message.perks = object.perks?.map((e) => SPerk.fromPartial(e)) || [];
    message.skills = object.skills?.map((e) => SSkillFloor.fromPartial(e)) || [];
    message.spells = object.spells?.map((e) => SSpellFloor.fromPartial(e)) || [];
    message.musics = object.musics?.map((e) => SMusicFloor.fromPartial(e)) || [];
    message.shapeShifts = object.shapeShifts?.map((e) => SShapeShiftFloor.fromPartial(e)) || [];
    message.characterSkinIds = object.characterSkinIds?.map((e) => e) || [];
    message.itemSkinIds = object.itemSkinIds?.map((e) => e) || [];
    message.emotes = object.emotes?.map((e) => SEMOTE.fromPartial(e)) || [];
    message.hp = object.hp ?? 0;
    return message;
  },
};

function createBaseC2SPrepareFloorMatchMaking(): C2SPrepareFloorMatchMaking {
  return { info: undefined, resultInfo: undefined };
}

export const C2SPrepareFloorMatchMaking = {
  encode(message: C2SPrepareFloorMatchMaking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      FloorMatchMakingCharacterInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    if (message.resultInfo !== undefined) {
      GameResultInfo.encode(message.resultInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SPrepareFloorMatchMaking {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SPrepareFloorMatchMaking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.info = FloorMatchMakingCharacterInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resultInfo = GameResultInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SPrepareFloorMatchMaking {
    return {
      info: isSet(object.info) ? FloorMatchMakingCharacterInfo.fromJSON(object.info) : undefined,
      resultInfo: isSet(object.resultInfo) ? GameResultInfo.fromJSON(object.resultInfo) : undefined,
    };
  },

  toJSON(message: C2SPrepareFloorMatchMaking): unknown {
    const obj: any = {};
    if (message.info !== undefined) {
      obj.info = FloorMatchMakingCharacterInfo.toJSON(message.info);
    }
    if (message.resultInfo !== undefined) {
      obj.resultInfo = GameResultInfo.toJSON(message.resultInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SPrepareFloorMatchMaking>, I>>(base?: I): C2SPrepareFloorMatchMaking {
    return C2SPrepareFloorMatchMaking.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<C2SPrepareFloorMatchMaking>, I>>(object: I): C2SPrepareFloorMatchMaking {
    const message = createBaseC2SPrepareFloorMatchMaking();
    message.info = (object.info !== undefined && object.info !== null)
      ? FloorMatchMakingCharacterInfo.fromPartial(object.info)
      : undefined;
    message.resultInfo = (object.resultInfo !== undefined && object.resultInfo !== null)
      ? GameResultInfo.fromPartial(object.resultInfo)
      : undefined;
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
          if (tag !== 10) {
            break;
          }

          message.appHash.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.policyJson = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.appHash?.length) {
      obj.appHash = message.appHash;
    }
    if (message.policyJson !== "") {
      obj.policyJson = message.policyJson;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CGamePolicyGET>, I>>(base?: I): S2CGamePolicyGET {
    return S2CGamePolicyGET.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<S2CGamePolicyGET>, I>>(object: I): S2CGamePolicyGET {
    const message = createBaseS2CGamePolicyGET();
    message.appHash = object.appHash?.map((e) => e) || [];
    message.policyJson = object.policyJson ?? "";
    return message;
  },
};

function createBaseS2CGameFileDBGET(): S2CGameFileDBGET {
  return { fileDBJson: "" };
}

export const S2CGameFileDBGET = {
  encode(message: S2CGameFileDBGET, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileDBJson !== "") {
      writer.uint32(10).string(message.fileDBJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S2CGameFileDBGET {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS2CGameFileDBGET();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fileDBJson = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S2CGameFileDBGET {
    return { fileDBJson: isSet(object.fileDBJson) ? String(object.fileDBJson) : "" };
  },

  toJSON(message: S2CGameFileDBGET): unknown {
    const obj: any = {};
    if (message.fileDBJson !== "") {
      obj.fileDBJson = message.fileDBJson;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CGameFileDBGET>, I>>(base?: I): S2CGameFileDBGET {
    return S2CGameFileDBGET.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<S2CGameFileDBGET>, I>>(object: I): S2CGameFileDBGET {
    const message = createBaseS2CGameFileDBGET();
    message.fileDBJson = object.fileDBJson ?? "";
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
          if (tag !== 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameSpectatorCheckPOST>, I>>(base?: I): C2SGameSpectatorCheckPOST {
    return C2SGameSpectatorCheckPOST.fromPartial(base ?? ({} as any));
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
          if (tag !== 8) {
            break;
          }

          message.isSuccess = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.isSuccess !== 0) {
      obj.isSuccess = Math.round(message.isSuccess);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CGameSpectatorCheckJson>, I>>(base?: I): S2CGameSpectatorCheckJson {
    return S2CGameSpectatorCheckJson.fromPartial(base ?? ({} as any));
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
          if (tag !== 10) {
            break;
          }

          message.accountId = reader.string();
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

          message.gender = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.level = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<GameDownUserPartyInfo>, I>>(base?: I): GameDownUserPartyInfo {
    return GameDownUserPartyInfo.fromPartial(base ?? ({} as any));
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
          if (tag !== 10) {
            break;
          }

          message.partyMember.push(GameDownUserPartyInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
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
    if (message.partyMember?.length) {
      obj.partyMember = message.partyMember.map((e) => GameDownUserPartyInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CGameDownUserPartyGET>, I>>(base?: I): S2CGameDownUserPartyGET {
    return S2CGameDownUserPartyGET.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<S2CGameDownUserPartyGET>, I>>(object: I): S2CGameDownUserPartyGET {
    const message = createBaseS2CGameDownUserPartyGET();
    message.partyMember = object.partyMember?.map((e) => GameDownUserPartyInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseC2SGameReadyPOST(): C2SGameReadyPOST {
  return { gameId: 0 };
}

export const C2SGameReadyPOST = {
  encode(message: C2SGameReadyPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== 0) {
      writer.uint32(8).uint64(message.gameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SGameReadyPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SGameReadyPOST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SGameReadyPOST {
    return { gameId: isSet(object.gameId) ? Number(object.gameId) : 0 };
  },

  toJSON(message: C2SGameReadyPOST): unknown {
    const obj: any = {};
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameReadyPOST>, I>>(base?: I): C2SGameReadyPOST {
    return C2SGameReadyPOST.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<C2SGameReadyPOST>, I>>(object: I): C2SGameReadyPOST {
    const message = createBaseC2SGameReadyPOST();
    message.gameId = object.gameId ?? 0;
    return message;
  },
};

function createBaseGameFloorMatchMakingUserInfo(): GameFloorMatchMakingUserInfo {
  return { accountId: "", characterId: "", partyId: "" };
}

export const GameFloorMatchMakingUserInfo = {
  encode(message: GameFloorMatchMakingUserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.partyId !== "") {
      writer.uint32(26).string(message.partyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameFloorMatchMakingUserInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameFloorMatchMakingUserInfo();
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

          message.partyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GameFloorMatchMakingUserInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
    };
  },

  toJSON(message: GameFloorMatchMakingUserInfo): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.partyId !== "") {
      obj.partyId = message.partyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameFloorMatchMakingUserInfo>, I>>(base?: I): GameFloorMatchMakingUserInfo {
    return GameFloorMatchMakingUserInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameFloorMatchMakingUserInfo>, I>>(object: I): GameFloorMatchMakingUserInfo {
    const message = createBaseGameFloorMatchMakingUserInfo();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.partyId = object.partyId ?? "";
    return message;
  },
};

function createBaseC2SFloorMatchMakingPOST(): C2SFloorMatchMakingPOST {
  return { infos: [], gameId: 0, currentFloor: 0, dungeonId: "" };
}

export const C2SFloorMatchMakingPOST = {
  encode(message: C2SFloorMatchMakingPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      GameFloorMatchMakingUserInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.gameId !== 0) {
      writer.uint32(16).uint64(message.gameId);
    }
    if (message.currentFloor !== 0) {
      writer.uint32(24).uint32(message.currentFloor);
    }
    if (message.dungeonId !== "") {
      writer.uint32(34).string(message.dungeonId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SFloorMatchMakingPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SFloorMatchMakingPOST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(GameFloorMatchMakingUserInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.currentFloor = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dungeonId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SFloorMatchMakingPOST {
    return {
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => GameFloorMatchMakingUserInfo.fromJSON(e)) : [],
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      currentFloor: isSet(object.currentFloor) ? Number(object.currentFloor) : 0,
      dungeonId: isSet(object.dungeonId) ? String(object.dungeonId) : "",
    };
  },

  toJSON(message: C2SFloorMatchMakingPOST): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => GameFloorMatchMakingUserInfo.toJSON(e));
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.currentFloor !== 0) {
      obj.currentFloor = Math.round(message.currentFloor);
    }
    if (message.dungeonId !== "") {
      obj.dungeonId = message.dungeonId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SFloorMatchMakingPOST>, I>>(base?: I): C2SFloorMatchMakingPOST {
    return C2SFloorMatchMakingPOST.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<C2SFloorMatchMakingPOST>, I>>(object: I): C2SFloorMatchMakingPOST {
    const message = createBaseC2SFloorMatchMakingPOST();
    message.infos = object.infos?.map((e) => GameFloorMatchMakingUserInfo.fromPartial(e)) || [];
    message.gameId = object.gameId ?? 0;
    message.currentFloor = object.currentFloor ?? 0;
    message.dungeonId = object.dungeonId ?? "";
    return message;
  },
};

function createBaseGameFloorMatchMakingUserInfoResponse(): GameFloorMatchMakingUserInfoResponse {
  return { accountId: "", characterId: "", ip: "", port: 0, sessionId: "" };
}

export const GameFloorMatchMakingUserInfoResponse = {
  encode(message: GameFloorMatchMakingUserInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.ip !== "") {
      writer.uint32(26).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(32).int32(message.port);
    }
    if (message.sessionId !== "") {
      writer.uint32(42).string(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameFloorMatchMakingUserInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameFloorMatchMakingUserInfoResponse();
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

          message.ip = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.port = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sessionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GameFloorMatchMakingUserInfoResponse {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      ip: isSet(object.ip) ? String(object.ip) : "",
      port: isSet(object.port) ? Number(object.port) : 0,
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
    };
  },

  toJSON(message: GameFloorMatchMakingUserInfoResponse): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameFloorMatchMakingUserInfoResponse>, I>>(
    base?: I,
  ): GameFloorMatchMakingUserInfoResponse {
    return GameFloorMatchMakingUserInfoResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameFloorMatchMakingUserInfoResponse>, I>>(
    object: I,
  ): GameFloorMatchMakingUserInfoResponse {
    const message = createBaseGameFloorMatchMakingUserInfoResponse();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.ip = object.ip ?? "";
    message.port = object.port ?? 0;
    message.sessionId = object.sessionId ?? "";
    return message;
  },
};

function createBaseS2CFloorMatchMakingPOSTResponse(): S2CFloorMatchMakingPOSTResponse {
  return { infos: [] };
}

export const S2CFloorMatchMakingPOSTResponse = {
  encode(message: S2CFloorMatchMakingPOSTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      GameFloorMatchMakingUserInfoResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S2CFloorMatchMakingPOSTResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS2CFloorMatchMakingPOSTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.infos.push(GameFloorMatchMakingUserInfoResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S2CFloorMatchMakingPOSTResponse {
    return {
      infos: Array.isArray(object?.infos)
        ? object.infos.map((e: any) => GameFloorMatchMakingUserInfoResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: S2CFloorMatchMakingPOSTResponse): unknown {
    const obj: any = {};
    if (message.infos?.length) {
      obj.infos = message.infos.map((e) => GameFloorMatchMakingUserInfoResponse.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CFloorMatchMakingPOSTResponse>, I>>(base?: I): S2CFloorMatchMakingPOSTResponse {
    return S2CFloorMatchMakingPOSTResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<S2CFloorMatchMakingPOSTResponse>, I>>(
    object: I,
  ): S2CFloorMatchMakingPOSTResponse {
    const message = createBaseS2CFloorMatchMakingPOSTResponse();
    message.infos = object.infos?.map((e) => GameFloorMatchMakingUserInfoResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseC2SIronShieldReportPOST(): C2SIronShieldReportPOST {
  return {
    callbackType: 0,
    reportId: "",
    hIds: [],
    blob: [],
    accountId: "",
    characterId: "",
    originNickname: "",
    reason: "",
    needBlock: 0,
    needHWBlock: 0,
    blockTimeMin: 0,
    banType: 0,
    blobType: 0,
    blobNameTag: "",
  };
}

export const C2SIronShieldReportPOST = {
  encode(message: C2SIronShieldReportPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.callbackType !== 0) {
      writer.uint32(8).uint32(message.callbackType);
    }
    if (message.reportId !== "") {
      writer.uint32(18).string(message.reportId);
    }
    for (const v of message.hIds) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(34).fork();
    for (const v of message.blob) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.accountId !== "") {
      writer.uint32(42).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(50).string(message.characterId);
    }
    if (message.originNickname !== "") {
      writer.uint32(58).string(message.originNickname);
    }
    if (message.reason !== "") {
      writer.uint32(66).string(message.reason);
    }
    if (message.needBlock !== 0) {
      writer.uint32(72).uint32(message.needBlock);
    }
    if (message.needHWBlock !== 0) {
      writer.uint32(80).uint32(message.needHWBlock);
    }
    if (message.blockTimeMin !== 0) {
      writer.uint32(88).uint32(message.blockTimeMin);
    }
    if (message.banType !== 0) {
      writer.uint32(96).uint32(message.banType);
    }
    if (message.blobType !== 0) {
      writer.uint32(104).int32(message.blobType);
    }
    if (message.blobNameTag !== "") {
      writer.uint32(114).string(message.blobNameTag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SIronShieldReportPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SIronShieldReportPOST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.callbackType = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reportId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hIds.push(reader.string());
          continue;
        case 4:
          if (tag === 32) {
            message.blob.push(reader.uint32());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.blob.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.originNickname = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.needBlock = reader.uint32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.needHWBlock = reader.uint32();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.blockTimeMin = reader.uint32();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.banType = reader.uint32();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.blobType = reader.int32();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.blobNameTag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SIronShieldReportPOST {
    return {
      callbackType: isSet(object.callbackType) ? Number(object.callbackType) : 0,
      reportId: isSet(object.reportId) ? String(object.reportId) : "",
      hIds: Array.isArray(object?.hIds) ? object.hIds.map((e: any) => String(e)) : [],
      blob: Array.isArray(object?.blob) ? object.blob.map((e: any) => Number(e)) : [],
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      originNickname: isSet(object.originNickname) ? String(object.originNickname) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      needBlock: isSet(object.needBlock) ? Number(object.needBlock) : 0,
      needHWBlock: isSet(object.needHWBlock) ? Number(object.needHWBlock) : 0,
      blockTimeMin: isSet(object.blockTimeMin) ? Number(object.blockTimeMin) : 0,
      banType: isSet(object.banType) ? Number(object.banType) : 0,
      blobType: isSet(object.blobType) ? Number(object.blobType) : 0,
      blobNameTag: isSet(object.blobNameTag) ? String(object.blobNameTag) : "",
    };
  },

  toJSON(message: C2SIronShieldReportPOST): unknown {
    const obj: any = {};
    if (message.callbackType !== 0) {
      obj.callbackType = Math.round(message.callbackType);
    }
    if (message.reportId !== "") {
      obj.reportId = message.reportId;
    }
    if (message.hIds?.length) {
      obj.hIds = message.hIds;
    }
    if (message.blob?.length) {
      obj.blob = message.blob.map((e) => Math.round(e));
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.originNickname !== "") {
      obj.originNickname = message.originNickname;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.needBlock !== 0) {
      obj.needBlock = Math.round(message.needBlock);
    }
    if (message.needHWBlock !== 0) {
      obj.needHWBlock = Math.round(message.needHWBlock);
    }
    if (message.blockTimeMin !== 0) {
      obj.blockTimeMin = Math.round(message.blockTimeMin);
    }
    if (message.banType !== 0) {
      obj.banType = Math.round(message.banType);
    }
    if (message.blobType !== 0) {
      obj.blobType = Math.round(message.blobType);
    }
    if (message.blobNameTag !== "") {
      obj.blobNameTag = message.blobNameTag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SIronShieldReportPOST>, I>>(base?: I): C2SIronShieldReportPOST {
    return C2SIronShieldReportPOST.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<C2SIronShieldReportPOST>, I>>(object: I): C2SIronShieldReportPOST {
    const message = createBaseC2SIronShieldReportPOST();
    message.callbackType = object.callbackType ?? 0;
    message.reportId = object.reportId ?? "";
    message.hIds = object.hIds?.map((e) => e) || [];
    message.blob = object.blob?.map((e) => e) || [];
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.originNickname = object.originNickname ?? "";
    message.reason = object.reason ?? "";
    message.needBlock = object.needBlock ?? 0;
    message.needHWBlock = object.needHWBlock ?? 0;
    message.blockTimeMin = object.blockTimeMin ?? 0;
    message.banType = object.banType ?? 0;
    message.blobType = object.blobType ?? 0;
    message.blobNameTag = object.blobNameTag ?? "";
    return message;
  },
};

function createBaseC2SBanCheckHardwarePOST(): C2SBanCheckHardwarePOST {
  return { accountId: "", hIds: [] };
}

export const C2SBanCheckHardwarePOST = {
  encode(message: C2SBanCheckHardwarePOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    for (const v of message.hIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SBanCheckHardwarePOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SBanCheckHardwarePOST();
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

          message.hIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SBanCheckHardwarePOST {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      hIds: Array.isArray(object?.hIds) ? object.hIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: C2SBanCheckHardwarePOST): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.hIds?.length) {
      obj.hIds = message.hIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SBanCheckHardwarePOST>, I>>(base?: I): C2SBanCheckHardwarePOST {
    return C2SBanCheckHardwarePOST.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<C2SBanCheckHardwarePOST>, I>>(object: I): C2SBanCheckHardwarePOST {
    const message = createBaseC2SBanCheckHardwarePOST();
    message.accountId = object.accountId ?? "";
    message.hIds = object.hIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseS2CBanCheckHardwarePOSTResponse(): S2CBanCheckHardwarePOSTResponse {
  return { accountId: "", isBan: 0, banHIds: [], loginHIds: [] };
}

export const S2CBanCheckHardwarePOSTResponse = {
  encode(message: S2CBanCheckHardwarePOSTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.isBan !== 0) {
      writer.uint32(16).uint32(message.isBan);
    }
    for (const v of message.banHIds) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.loginHIds) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S2CBanCheckHardwarePOSTResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS2CBanCheckHardwarePOSTResponse();
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

          message.isBan = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.banHIds.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.loginHIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S2CBanCheckHardwarePOSTResponse {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      isBan: isSet(object.isBan) ? Number(object.isBan) : 0,
      banHIds: Array.isArray(object?.banHIds) ? object.banHIds.map((e: any) => String(e)) : [],
      loginHIds: Array.isArray(object?.loginHIds) ? object.loginHIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: S2CBanCheckHardwarePOSTResponse): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.isBan !== 0) {
      obj.isBan = Math.round(message.isBan);
    }
    if (message.banHIds?.length) {
      obj.banHIds = message.banHIds;
    }
    if (message.loginHIds?.length) {
      obj.loginHIds = message.loginHIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S2CBanCheckHardwarePOSTResponse>, I>>(base?: I): S2CBanCheckHardwarePOSTResponse {
    return S2CBanCheckHardwarePOSTResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<S2CBanCheckHardwarePOSTResponse>, I>>(
    object: I,
  ): S2CBanCheckHardwarePOSTResponse {
    const message = createBaseS2CBanCheckHardwarePOSTResponse();
    message.accountId = object.accountId ?? "";
    message.isBan = object.isBan ?? 0;
    message.banHIds = object.banHIds?.map((e) => e) || [];
    message.loginHIds = object.loginHIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseC2SDirtyItemPOST(): C2SDirtyItemPOST {
  return { accountId: "", characterId: "", gameId: 0, upsertItems: [], deleteItemUniqueIds: [] };
}

export const C2SDirtyItemPOST = {
  encode(message: C2SDirtyItemPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.gameId !== 0) {
      writer.uint32(24).uint64(message.gameId);
    }
    for (const v of message.upsertItems) {
      SItem.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).fork();
    for (const v of message.deleteItemUniqueIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SDirtyItemPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SDirtyItemPOST();
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

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.upsertItems.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag === 40) {
            message.deleteItemUniqueIds.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.deleteItemUniqueIds.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SDirtyItemPOST {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      upsertItems: Array.isArray(object?.upsertItems) ? object.upsertItems.map((e: any) => SItem.fromJSON(e)) : [],
      deleteItemUniqueIds: Array.isArray(object?.deleteItemUniqueIds)
        ? object.deleteItemUniqueIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: C2SDirtyItemPOST): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.upsertItems?.length) {
      obj.upsertItems = message.upsertItems.map((e) => SItem.toJSON(e));
    }
    if (message.deleteItemUniqueIds?.length) {
      obj.deleteItemUniqueIds = message.deleteItemUniqueIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SDirtyItemPOST>, I>>(base?: I): C2SDirtyItemPOST {
    return C2SDirtyItemPOST.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<C2SDirtyItemPOST>, I>>(object: I): C2SDirtyItemPOST {
    const message = createBaseC2SDirtyItemPOST();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.gameId = object.gameId ?? 0;
    message.upsertItems = object.upsertItems?.map((e) => SItem.fromPartial(e)) || [];
    message.deleteItemUniqueIds = object.deleteItemUniqueIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseC2SIronShieldIsolationPOST(): C2SIronShieldIsolationPOST {
  return { accountId: "", isolationHours: 0 };
}

export const C2SIronShieldIsolationPOST = {
  encode(message: C2SIronShieldIsolationPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.isolationHours !== 0) {
      writer.uint32(16).int32(message.isolationHours);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SIronShieldIsolationPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SIronShieldIsolationPOST();
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

          message.isolationHours = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SIronShieldIsolationPOST {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      isolationHours: isSet(object.isolationHours) ? Number(object.isolationHours) : 0,
    };
  },

  toJSON(message: C2SIronShieldIsolationPOST): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.isolationHours !== 0) {
      obj.isolationHours = Math.round(message.isolationHours);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SIronShieldIsolationPOST>, I>>(base?: I): C2SIronShieldIsolationPOST {
    return C2SIronShieldIsolationPOST.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<C2SIronShieldIsolationPOST>, I>>(object: I): C2SIronShieldIsolationPOST {
    const message = createBaseC2SIronShieldIsolationPOST();
    message.accountId = object.accountId ?? "";
    message.isolationHours = object.isolationHours ?? 0;
    return message;
  },
};

function createBaseC2SArenaResultPOST(): C2SArenaResultPOST {
  return { resultInfo: undefined, items: [], secretId: "" };
}

export const C2SArenaResultPOST = {
  encode(message: C2SArenaResultPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resultInfo !== undefined) {
      GameResultInfo.encode(message.resultInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.items) {
      SItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.secretId !== "") {
      writer.uint32(26).string(message.secretId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SArenaResultPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SArenaResultPOST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resultInfo = GameResultInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.items.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.secretId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SArenaResultPOST {
    return {
      resultInfo: isSet(object.resultInfo) ? GameResultInfo.fromJSON(object.resultInfo) : undefined,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => SItem.fromJSON(e)) : [],
      secretId: isSet(object.secretId) ? String(object.secretId) : "",
    };
  },

  toJSON(message: C2SArenaResultPOST): unknown {
    const obj: any = {};
    if (message.resultInfo !== undefined) {
      obj.resultInfo = GameResultInfo.toJSON(message.resultInfo);
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => SItem.toJSON(e));
    }
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SArenaResultPOST>, I>>(base?: I): C2SArenaResultPOST {
    return C2SArenaResultPOST.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<C2SArenaResultPOST>, I>>(object: I): C2SArenaResultPOST {
    const message = createBaseC2SArenaResultPOST();
    message.resultInfo = (object.resultInfo !== undefined && object.resultInfo !== null)
      ? GameResultInfo.fromPartial(object.resultInfo)
      : undefined;
    message.items = object.items?.map((e) => SItem.fromPartial(e)) || [];
    message.secretId = object.secretId ?? "";
    return message;
  },
};

function createBaseC2SArenaExitPOST(): C2SArenaExitPOST {
  return { accountId: "", characterId: "", gameId: 0, secretId: "" };
}

export const C2SArenaExitPOST = {
  encode(message: C2SArenaExitPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(18).string(message.characterId);
    }
    if (message.gameId !== 0) {
      writer.uint32(24).uint64(message.gameId);
    }
    if (message.secretId !== "") {
      writer.uint32(34).string(message.secretId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SArenaExitPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SArenaExitPOST();
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

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.secretId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SArenaExitPOST {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      secretId: isSet(object.secretId) ? String(object.secretId) : "",
    };
  },

  toJSON(message: C2SArenaExitPOST): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SArenaExitPOST>, I>>(base?: I): C2SArenaExitPOST {
    return C2SArenaExitPOST.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<C2SArenaExitPOST>, I>>(object: I): C2SArenaExitPOST {
    const message = createBaseC2SArenaExitPOST();
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.gameId = object.gameId ?? 0;
    message.secretId = object.secretId ?? "";
    return message;
  },
};

function createBaseC2SGameFinalizeSessionPOST(): C2SGameFinalizeSessionPOST {
  return { gameId: 0, accountId: "", characterId: "", recoveryItems: [] };
}

export const C2SGameFinalizeSessionPOST = {
  encode(message: C2SGameFinalizeSessionPOST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== 0) {
      writer.uint32(8).uint64(message.gameId);
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
    }
    if (message.characterId !== "") {
      writer.uint32(26).string(message.characterId);
    }
    for (const v of message.recoveryItems) {
      SItem.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SGameFinalizeSessionPOST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SGameFinalizeSessionPOST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gameId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.recoveryItems.push(SItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): C2SGameFinalizeSessionPOST {
    return {
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      recoveryItems: Array.isArray(object?.recoveryItems)
        ? object.recoveryItems.map((e: any) => SItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: C2SGameFinalizeSessionPOST): unknown {
    const obj: any = {};
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.characterId !== "") {
      obj.characterId = message.characterId;
    }
    if (message.recoveryItems?.length) {
      obj.recoveryItems = message.recoveryItems.map((e) => SItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<C2SGameFinalizeSessionPOST>, I>>(base?: I): C2SGameFinalizeSessionPOST {
    return C2SGameFinalizeSessionPOST.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<C2SGameFinalizeSessionPOST>, I>>(object: I): C2SGameFinalizeSessionPOST {
    const message = createBaseC2SGameFinalizeSessionPOST();
    message.gameId = object.gameId ?? 0;
    message.accountId = object.accountId ?? "";
    message.characterId = object.characterId ?? "";
    message.recoveryItems = object.recoveryItems?.map((e) => SItem.fromPartial(e)) || [];
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
