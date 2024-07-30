/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { SItem, SPerk } from "./_Item";

export const protobufPackage = "DC.Packet";

export enum FriendLocation {
  Friend_Location_NONE = 0,
  Friend_Location_LOBBY = 1,
  Friend_Location_DUNGEON = 2,
  Friend_Location_OFFLINE = 3,
  UNRECOGNIZED = -1,
}

export function friendLocationFromJSON(object: any): FriendLocation {
  switch (object) {
    case 0:
    case "Friend_Location_NONE":
      return FriendLocation.Friend_Location_NONE;
    case 1:
    case "Friend_Location_LOBBY":
      return FriendLocation.Friend_Location_LOBBY;
    case 2:
    case "Friend_Location_DUNGEON":
      return FriendLocation.Friend_Location_DUNGEON;
    case 3:
    case "Friend_Location_OFFLINE":
      return FriendLocation.Friend_Location_OFFLINE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FriendLocation.UNRECOGNIZED;
  }
}

export function friendLocationToJSON(object: FriendLocation): string {
  switch (object) {
    case FriendLocation.Friend_Location_NONE:
      return "Friend_Location_NONE";
    case FriendLocation.Friend_Location_LOBBY:
      return "Friend_Location_LOBBY";
    case FriendLocation.Friend_Location_DUNGEON:
      return "Friend_Location_DUNGEON";
    case FriendLocation.Friend_Location_OFFLINE:
      return "Friend_Location_OFFLINE";
    case FriendLocation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface sstorageInfo {
  inventoryId: number;
  CharacterStorageItemList: SItem[];
}

export interface scharacterInfo {
  accountId: string;
  accountNickname: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
  characterId: string;
  gender: number;
  level: number;
  serviceGrpc: string;
  CharacterItemList: SItem[];
  CharacterStorageItemList: SItem[];
  CharacterStorageInfos: sstorageInfo[];
}

export interface scharacterFriendInfo {
  accountId: string;
  accountNickname: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
  characterId: string;
  gender: number;
  level: number;
  locationStatus: number;
  PartyMemeberCount: number;
  PartyMaxMemeberCount: number;
}

export interface scharacterPartyInfo {
  accountId: string;
  accountNickname: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
  characterId: string;
  gender: number;
  level: number;
  isPartyLeader: number;
  isReady: number;
  isInGame: number;
  equipItemList: SItem[];
  partyIdx: number;
  perks: SPerk[];
  gearScore: number;
}

export interface scharacterTradeInfo {
  accountId: string;
  accountNickname: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
  characterId: string;
  gender: number;
  level: number;
  characterLocation: number;
}

export interface saccountNickname {
  originalNickName: string;
  streamingModeNickName: string;
  karmaRating: number;
  rankId: string;
  fame: number;
}

export interface sblockCharacter {
  accountId: string;
  accountNickname: string;
  characterId: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
  gender: number;
}

export interface scharacterGatheringHallInfo {
  accountId: string;
  accountNickname: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
  characterId: string;
  gender: number;
  level: number;
}

export interface SGameStat {
  statType: number;
  statValue: number;
}

export interface SRankUserInfo {
  rankId: string;
  currentPoint: number;
  needPoint: number;
  gameType: number;
}

function createBasesstorageInfo(): sstorageInfo {
  return { inventoryId: 0, CharacterStorageItemList: [] };
}

export const sstorageInfo = {
  encode(message: sstorageInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inventoryId !== 0) {
      writer.uint32(8).uint32(message.inventoryId);
    }
    for (const v of message.CharacterStorageItemList) {
      SItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sstorageInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesstorageInfo();
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
          if (tag !== 18) {
            break;
          }

          message.CharacterStorageItemList.push(SItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sstorageInfo {
    return {
      inventoryId: isSet(object.inventoryId) ? Number(object.inventoryId) : 0,
      CharacterStorageItemList: Array.isArray(object?.CharacterStorageItemList)
        ? object.CharacterStorageItemList.map((e: any) => SItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: sstorageInfo): unknown {
    const obj: any = {};
    if (message.inventoryId !== 0) {
      obj.inventoryId = Math.round(message.inventoryId);
    }
    if (message.CharacterStorageItemList?.length) {
      obj.CharacterStorageItemList = message.CharacterStorageItemList.map((e) => SItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<sstorageInfo>, I>>(base?: I): sstorageInfo {
    return sstorageInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sstorageInfo>, I>>(object: I): sstorageInfo {
    const message = createBasesstorageInfo();
    message.inventoryId = object.inventoryId ?? 0;
    message.CharacterStorageItemList = object.CharacterStorageItemList?.map((e) => SItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasescharacterInfo(): scharacterInfo {
  return {
    accountId: "",
    accountNickname: "",
    nickName: undefined,
    characterClass: "",
    characterId: "",
    gender: 0,
    level: 0,
    serviceGrpc: "",
    CharacterItemList: [],
    CharacterStorageItemList: [],
    CharacterStorageInfos: [],
  };
}

export const scharacterInfo = {
  encode(message: scharacterInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.accountNickname !== "") {
      writer.uint32(18).string(message.accountNickname);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(26).fork()).ldelim();
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
    if (message.serviceGrpc !== "") {
      writer.uint32(66).string(message.serviceGrpc);
    }
    for (const v of message.CharacterItemList) {
      SItem.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.CharacterStorageItemList) {
      SItem.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.CharacterStorageInfos) {
      sstorageInfo.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): scharacterInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasescharacterInfo();
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

          message.serviceGrpc = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.CharacterItemList.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.CharacterStorageItemList.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.CharacterStorageInfos.push(sstorageInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): scharacterInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      accountNickname: isSet(object.accountNickname) ? String(object.accountNickname) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      serviceGrpc: isSet(object.serviceGrpc) ? String(object.serviceGrpc) : "",
      CharacterItemList: Array.isArray(object?.CharacterItemList)
        ? object.CharacterItemList.map((e: any) => SItem.fromJSON(e))
        : [],
      CharacterStorageItemList: Array.isArray(object?.CharacterStorageItemList)
        ? object.CharacterStorageItemList.map((e: any) => SItem.fromJSON(e))
        : [],
      CharacterStorageInfos: Array.isArray(object?.CharacterStorageInfos)
        ? object.CharacterStorageInfos.map((e: any) => sstorageInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: scharacterInfo): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.accountNickname !== "") {
      obj.accountNickname = message.accountNickname;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
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
    if (message.serviceGrpc !== "") {
      obj.serviceGrpc = message.serviceGrpc;
    }
    if (message.CharacterItemList?.length) {
      obj.CharacterItemList = message.CharacterItemList.map((e) => SItem.toJSON(e));
    }
    if (message.CharacterStorageItemList?.length) {
      obj.CharacterStorageItemList = message.CharacterStorageItemList.map((e) => SItem.toJSON(e));
    }
    if (message.CharacterStorageInfos?.length) {
      obj.CharacterStorageInfos = message.CharacterStorageInfos.map((e) => sstorageInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<scharacterInfo>, I>>(base?: I): scharacterInfo {
    return scharacterInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<scharacterInfo>, I>>(object: I): scharacterInfo {
    const message = createBasescharacterInfo();
    message.accountId = object.accountId ?? "";
    message.accountNickname = object.accountNickname ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    message.characterId = object.characterId ?? "";
    message.gender = object.gender ?? 0;
    message.level = object.level ?? 0;
    message.serviceGrpc = object.serviceGrpc ?? "";
    message.CharacterItemList = object.CharacterItemList?.map((e) => SItem.fromPartial(e)) || [];
    message.CharacterStorageItemList = object.CharacterStorageItemList?.map((e) => SItem.fromPartial(e)) || [];
    message.CharacterStorageInfos = object.CharacterStorageInfos?.map((e) => sstorageInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBasescharacterFriendInfo(): scharacterFriendInfo {
  return {
    accountId: "",
    accountNickname: "",
    nickName: undefined,
    characterClass: "",
    characterId: "",
    gender: 0,
    level: 0,
    locationStatus: 0,
    PartyMemeberCount: 0,
    PartyMaxMemeberCount: 0,
  };
}

export const scharacterFriendInfo = {
  encode(message: scharacterFriendInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.accountNickname !== "") {
      writer.uint32(18).string(message.accountNickname);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(26).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): scharacterFriendInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasescharacterFriendInfo();
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

  fromJSON(object: any): scharacterFriendInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      accountNickname: isSet(object.accountNickname) ? String(object.accountNickname) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      locationStatus: isSet(object.locationStatus) ? Number(object.locationStatus) : 0,
      PartyMemeberCount: isSet(object.PartyMemeberCount) ? Number(object.PartyMemeberCount) : 0,
      PartyMaxMemeberCount: isSet(object.PartyMaxMemeberCount) ? Number(object.PartyMaxMemeberCount) : 0,
    };
  },

  toJSON(message: scharacterFriendInfo): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.accountNickname !== "") {
      obj.accountNickname = message.accountNickname;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
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

  create<I extends Exact<DeepPartial<scharacterFriendInfo>, I>>(base?: I): scharacterFriendInfo {
    return scharacterFriendInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<scharacterFriendInfo>, I>>(object: I): scharacterFriendInfo {
    const message = createBasescharacterFriendInfo();
    message.accountId = object.accountId ?? "";
    message.accountNickname = object.accountNickname ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    message.characterId = object.characterId ?? "";
    message.gender = object.gender ?? 0;
    message.level = object.level ?? 0;
    message.locationStatus = object.locationStatus ?? 0;
    message.PartyMemeberCount = object.PartyMemeberCount ?? 0;
    message.PartyMaxMemeberCount = object.PartyMaxMemeberCount ?? 0;
    return message;
  },
};

function createBasescharacterPartyInfo(): scharacterPartyInfo {
  return {
    accountId: "",
    accountNickname: "",
    nickName: undefined,
    characterClass: "",
    characterId: "",
    gender: 0,
    level: 0,
    isPartyLeader: 0,
    isReady: 0,
    isInGame: 0,
    equipItemList: [],
    partyIdx: 0,
    perks: [],
    gearScore: 0,
  };
}

export const scharacterPartyInfo = {
  encode(message: scharacterPartyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.accountNickname !== "") {
      writer.uint32(18).string(message.accountNickname);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(26).fork()).ldelim();
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
    if (message.isPartyLeader !== 0) {
      writer.uint32(64).uint32(message.isPartyLeader);
    }
    if (message.isReady !== 0) {
      writer.uint32(72).uint32(message.isReady);
    }
    if (message.isInGame !== 0) {
      writer.uint32(80).uint32(message.isInGame);
    }
    for (const v of message.equipItemList) {
      SItem.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.partyIdx !== 0) {
      writer.uint32(96).uint32(message.partyIdx);
    }
    for (const v of message.perks) {
      SPerk.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.gearScore !== 0) {
      writer.uint32(112).uint32(message.gearScore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): scharacterPartyInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasescharacterPartyInfo();
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
          if (tag !== 64) {
            break;
          }

          message.isPartyLeader = reader.uint32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.isReady = reader.uint32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.isInGame = reader.uint32();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.equipItemList.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.partyIdx = reader.uint32();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.perks.push(SPerk.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 112) {
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

  fromJSON(object: any): scharacterPartyInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      accountNickname: isSet(object.accountNickname) ? String(object.accountNickname) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      isPartyLeader: isSet(object.isPartyLeader) ? Number(object.isPartyLeader) : 0,
      isReady: isSet(object.isReady) ? Number(object.isReady) : 0,
      isInGame: isSet(object.isInGame) ? Number(object.isInGame) : 0,
      equipItemList: Array.isArray(object?.equipItemList)
        ? object.equipItemList.map((e: any) => SItem.fromJSON(e))
        : [],
      partyIdx: isSet(object.partyIdx) ? Number(object.partyIdx) : 0,
      perks: Array.isArray(object?.perks) ? object.perks.map((e: any) => SPerk.fromJSON(e)) : [],
      gearScore: isSet(object.gearScore) ? Number(object.gearScore) : 0,
    };
  },

  toJSON(message: scharacterPartyInfo): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.accountNickname !== "") {
      obj.accountNickname = message.accountNickname;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
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
    if (message.isPartyLeader !== 0) {
      obj.isPartyLeader = Math.round(message.isPartyLeader);
    }
    if (message.isReady !== 0) {
      obj.isReady = Math.round(message.isReady);
    }
    if (message.isInGame !== 0) {
      obj.isInGame = Math.round(message.isInGame);
    }
    if (message.equipItemList?.length) {
      obj.equipItemList = message.equipItemList.map((e) => SItem.toJSON(e));
    }
    if (message.partyIdx !== 0) {
      obj.partyIdx = Math.round(message.partyIdx);
    }
    if (message.perks?.length) {
      obj.perks = message.perks.map((e) => SPerk.toJSON(e));
    }
    if (message.gearScore !== 0) {
      obj.gearScore = Math.round(message.gearScore);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<scharacterPartyInfo>, I>>(base?: I): scharacterPartyInfo {
    return scharacterPartyInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<scharacterPartyInfo>, I>>(object: I): scharacterPartyInfo {
    const message = createBasescharacterPartyInfo();
    message.accountId = object.accountId ?? "";
    message.accountNickname = object.accountNickname ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    message.characterId = object.characterId ?? "";
    message.gender = object.gender ?? 0;
    message.level = object.level ?? 0;
    message.isPartyLeader = object.isPartyLeader ?? 0;
    message.isReady = object.isReady ?? 0;
    message.isInGame = object.isInGame ?? 0;
    message.equipItemList = object.equipItemList?.map((e) => SItem.fromPartial(e)) || [];
    message.partyIdx = object.partyIdx ?? 0;
    message.perks = object.perks?.map((e) => SPerk.fromPartial(e)) || [];
    message.gearScore = object.gearScore ?? 0;
    return message;
  },
};

function createBasescharacterTradeInfo(): scharacterTradeInfo {
  return {
    accountId: "",
    accountNickname: "",
    nickName: undefined,
    characterClass: "",
    characterId: "",
    gender: 0,
    level: 0,
    characterLocation: 0,
  };
}

export const scharacterTradeInfo = {
  encode(message: scharacterTradeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.accountNickname !== "") {
      writer.uint32(18).string(message.accountNickname);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(26).fork()).ldelim();
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
    if (message.characterLocation !== 0) {
      writer.uint32(64).uint32(message.characterLocation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): scharacterTradeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasescharacterTradeInfo();
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
          if (tag !== 64) {
            break;
          }

          message.characterLocation = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): scharacterTradeInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      accountNickname: isSet(object.accountNickname) ? String(object.accountNickname) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      characterLocation: isSet(object.characterLocation) ? Number(object.characterLocation) : 0,
    };
  },

  toJSON(message: scharacterTradeInfo): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.accountNickname !== "") {
      obj.accountNickname = message.accountNickname;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
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
    if (message.characterLocation !== 0) {
      obj.characterLocation = Math.round(message.characterLocation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<scharacterTradeInfo>, I>>(base?: I): scharacterTradeInfo {
    return scharacterTradeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<scharacterTradeInfo>, I>>(object: I): scharacterTradeInfo {
    const message = createBasescharacterTradeInfo();
    message.accountId = object.accountId ?? "";
    message.accountNickname = object.accountNickname ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    message.characterId = object.characterId ?? "";
    message.gender = object.gender ?? 0;
    message.level = object.level ?? 0;
    message.characterLocation = object.characterLocation ?? 0;
    return message;
  },
};

function createBasesaccountNickname(): saccountNickname {
  return { originalNickName: "", streamingModeNickName: "", karmaRating: 0, rankId: "", fame: 0 };
}

export const saccountNickname = {
  encode(message: saccountNickname, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originalNickName !== "") {
      writer.uint32(10).string(message.originalNickName);
    }
    if (message.streamingModeNickName !== "") {
      writer.uint32(18).string(message.streamingModeNickName);
    }
    if (message.karmaRating !== 0) {
      writer.uint32(24).int32(message.karmaRating);
    }
    if (message.rankId !== "") {
      writer.uint32(34).string(message.rankId);
    }
    if (message.fame !== 0) {
      writer.uint32(40).uint32(message.fame);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): saccountNickname {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesaccountNickname();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.originalNickName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.streamingModeNickName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.karmaRating = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.rankId = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): saccountNickname {
    return {
      originalNickName: isSet(object.originalNickName) ? String(object.originalNickName) : "",
      streamingModeNickName: isSet(object.streamingModeNickName) ? String(object.streamingModeNickName) : "",
      karmaRating: isSet(object.karmaRating) ? Number(object.karmaRating) : 0,
      rankId: isSet(object.rankId) ? String(object.rankId) : "",
      fame: isSet(object.fame) ? Number(object.fame) : 0,
    };
  },

  toJSON(message: saccountNickname): unknown {
    const obj: any = {};
    if (message.originalNickName !== "") {
      obj.originalNickName = message.originalNickName;
    }
    if (message.streamingModeNickName !== "") {
      obj.streamingModeNickName = message.streamingModeNickName;
    }
    if (message.karmaRating !== 0) {
      obj.karmaRating = Math.round(message.karmaRating);
    }
    if (message.rankId !== "") {
      obj.rankId = message.rankId;
    }
    if (message.fame !== 0) {
      obj.fame = Math.round(message.fame);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<saccountNickname>, I>>(base?: I): saccountNickname {
    return saccountNickname.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<saccountNickname>, I>>(object: I): saccountNickname {
    const message = createBasesaccountNickname();
    message.originalNickName = object.originalNickName ?? "";
    message.streamingModeNickName = object.streamingModeNickName ?? "";
    message.karmaRating = object.karmaRating ?? 0;
    message.rankId = object.rankId ?? "";
    message.fame = object.fame ?? 0;
    return message;
  },
};

function createBasesblockCharacter(): sblockCharacter {
  return { accountId: "", accountNickname: "", characterId: "", nickName: undefined, characterClass: "", gender: 0 };
}

export const sblockCharacter = {
  encode(message: sblockCharacter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.accountNickname !== "") {
      writer.uint32(18).string(message.accountNickname);
    }
    if (message.characterId !== "") {
      writer.uint32(26).string(message.characterId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(34).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(42).string(message.characterClass);
    }
    if (message.gender !== 0) {
      writer.uint32(48).uint32(message.gender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): sblockCharacter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasesblockCharacter();
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

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.gender = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sblockCharacter {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      accountNickname: isSet(object.accountNickname) ? String(object.accountNickname) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
    };
  },

  toJSON(message: sblockCharacter): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.accountNickname !== "") {
      obj.accountNickname = message.accountNickname;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<sblockCharacter>, I>>(base?: I): sblockCharacter {
    return sblockCharacter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<sblockCharacter>, I>>(object: I): sblockCharacter {
    const message = createBasesblockCharacter();
    message.accountId = object.accountId ?? "";
    message.accountNickname = object.accountNickname ?? "";
    message.characterId = object.characterId ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    message.gender = object.gender ?? 0;
    return message;
  },
};

function createBasescharacterGatheringHallInfo(): scharacterGatheringHallInfo {
  return {
    accountId: "",
    accountNickname: "",
    nickName: undefined,
    characterClass: "",
    characterId: "",
    gender: 0,
    level: 0,
  };
}

export const scharacterGatheringHallInfo = {
  encode(message: scharacterGatheringHallInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.accountNickname !== "") {
      writer.uint32(18).string(message.accountNickname);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(26).fork()).ldelim();
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): scharacterGatheringHallInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasescharacterGatheringHallInfo();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): scharacterGatheringHallInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      accountNickname: isSet(object.accountNickname) ? String(object.accountNickname) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
    };
  },

  toJSON(message: scharacterGatheringHallInfo): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.accountNickname !== "") {
      obj.accountNickname = message.accountNickname;
    }
    if (message.nickName !== undefined) {
      obj.nickName = saccountNickname.toJSON(message.nickName);
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
    return obj;
  },

  create<I extends Exact<DeepPartial<scharacterGatheringHallInfo>, I>>(base?: I): scharacterGatheringHallInfo {
    return scharacterGatheringHallInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<scharacterGatheringHallInfo>, I>>(object: I): scharacterGatheringHallInfo {
    const message = createBasescharacterGatheringHallInfo();
    message.accountId = object.accountId ?? "";
    message.accountNickname = object.accountNickname ?? "";
    message.nickName = (object.nickName !== undefined && object.nickName !== null)
      ? saccountNickname.fromPartial(object.nickName)
      : undefined;
    message.characterClass = object.characterClass ?? "";
    message.characterId = object.characterId ?? "";
    message.gender = object.gender ?? 0;
    message.level = object.level ?? 0;
    return message;
  },
};

function createBaseSGameStat(): SGameStat {
  return { statType: 0, statValue: 0 };
}

export const SGameStat = {
  encode(message: SGameStat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statType !== 0) {
      writer.uint32(8).int32(message.statType);
    }
    if (message.statValue !== 0) {
      writer.uint32(16).int32(message.statValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SGameStat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSGameStat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.statType = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.statValue = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SGameStat {
    return {
      statType: isSet(object.statType) ? Number(object.statType) : 0,
      statValue: isSet(object.statValue) ? Number(object.statValue) : 0,
    };
  },

  toJSON(message: SGameStat): unknown {
    const obj: any = {};
    if (message.statType !== 0) {
      obj.statType = Math.round(message.statType);
    }
    if (message.statValue !== 0) {
      obj.statValue = Math.round(message.statValue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SGameStat>, I>>(base?: I): SGameStat {
    return SGameStat.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SGameStat>, I>>(object: I): SGameStat {
    const message = createBaseSGameStat();
    message.statType = object.statType ?? 0;
    message.statValue = object.statValue ?? 0;
    return message;
  },
};

function createBaseSRankUserInfo(): SRankUserInfo {
  return { rankId: "", currentPoint: 0, needPoint: 0, gameType: 0 };
}

export const SRankUserInfo = {
  encode(message: SRankUserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rankId !== "") {
      writer.uint32(10).string(message.rankId);
    }
    if (message.currentPoint !== 0) {
      writer.uint32(16).uint32(message.currentPoint);
    }
    if (message.needPoint !== 0) {
      writer.uint32(24).uint32(message.needPoint);
    }
    if (message.gameType !== 0) {
      writer.uint32(32).uint32(message.gameType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SRankUserInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSRankUserInfo();
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

  fromJSON(object: any): SRankUserInfo {
    return {
      rankId: isSet(object.rankId) ? String(object.rankId) : "",
      currentPoint: isSet(object.currentPoint) ? Number(object.currentPoint) : 0,
      needPoint: isSet(object.needPoint) ? Number(object.needPoint) : 0,
      gameType: isSet(object.gameType) ? Number(object.gameType) : 0,
    };
  },

  toJSON(message: SRankUserInfo): unknown {
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
    if (message.gameType !== 0) {
      obj.gameType = Math.round(message.gameType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SRankUserInfo>, I>>(base?: I): SRankUserInfo {
    return SRankUserInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SRankUserInfo>, I>>(object: I): SRankUserInfo {
    const message = createBaseSRankUserInfo();
    message.rankId = object.rankId ?? "";
    message.currentPoint = object.currentPoint ?? 0;
    message.needPoint = object.needPoint ?? 0;
    message.gameType = object.gameType ?? 0;
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
