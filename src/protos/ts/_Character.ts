/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { SItem } from "./_Item";

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

export interface scharacterInfo {
  accountId: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
  characterId: string;
  gender: number;
  level: number;
  serviceGrpc: string;
  CharacterItemList: SItem[];
  CharacterStorageItemList: SItem[];
}

export interface scharacterFriendInfo {
  accountId: string;
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
}

export interface scharacterTradeInfo {
  accountId: string;
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
}

export interface sblockCharacter {
  accountId: string;
  characterId: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
  gender: number;
}

export interface scharacterGatheringHallInfo {
  accountId: string;
  nickName: saccountNickname | undefined;
  characterClass: string;
  characterId: string;
  gender: number;
  level: number;
}

function createBasescharacterInfo(): scharacterInfo {
  return {
    accountId: "",
    nickName: undefined,
    characterClass: "",
    characterId: "",
    gender: 0,
    level: 0,
    serviceGrpc: "",
    CharacterItemList: [],
    CharacterStorageItemList: [],
  };
}

export const scharacterInfo = {
  encode(message: scharacterInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(18).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(26).string(message.characterClass);
    }
    if (message.characterId !== "") {
      writer.uint32(34).string(message.characterId);
    }
    if (message.gender !== 0) {
      writer.uint32(40).uint32(message.gender);
    }
    if (message.level !== 0) {
      writer.uint32(48).uint32(message.level);
    }
    if (message.serviceGrpc !== "") {
      writer.uint32(58).string(message.serviceGrpc);
    }
    for (const v of message.CharacterItemList) {
      SItem.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.CharacterStorageItemList) {
      SItem.encode(v!, writer.uint32(74).fork()).ldelim();
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
          if (tag != 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.gender = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.serviceGrpc = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.CharacterItemList.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.CharacterStorageItemList.push(SItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): scharacterInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
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
    };
  },

  toJSON(message: scharacterInfo): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.nickName !== undefined &&
      (obj.nickName = message.nickName ? saccountNickname.toJSON(message.nickName) : undefined);
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    message.characterId !== undefined && (obj.characterId = message.characterId);
    message.gender !== undefined && (obj.gender = Math.round(message.gender));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.serviceGrpc !== undefined && (obj.serviceGrpc = message.serviceGrpc);
    if (message.CharacterItemList) {
      obj.CharacterItemList = message.CharacterItemList.map((e) => e ? SItem.toJSON(e) : undefined);
    } else {
      obj.CharacterItemList = [];
    }
    if (message.CharacterStorageItemList) {
      obj.CharacterStorageItemList = message.CharacterStorageItemList.map((e) => e ? SItem.toJSON(e) : undefined);
    } else {
      obj.CharacterStorageItemList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<scharacterInfo>, I>>(base?: I): scharacterInfo {
    return scharacterInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<scharacterInfo>, I>>(object: I): scharacterInfo {
    const message = createBasescharacterInfo();
    message.accountId = object.accountId ?? "";
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
    return message;
  },
};

function createBasescharacterFriendInfo(): scharacterFriendInfo {
  return {
    accountId: "",
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
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(18).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(26).string(message.characterClass);
    }
    if (message.characterId !== "") {
      writer.uint32(34).string(message.characterId);
    }
    if (message.gender !== 0) {
      writer.uint32(40).uint32(message.gender);
    }
    if (message.level !== 0) {
      writer.uint32(48).uint32(message.level);
    }
    if (message.locationStatus !== 0) {
      writer.uint32(56).uint32(message.locationStatus);
    }
    if (message.PartyMemeberCount !== 0) {
      writer.uint32(64).uint32(message.PartyMemeberCount);
    }
    if (message.PartyMaxMemeberCount !== 0) {
      writer.uint32(72).uint32(message.PartyMaxMemeberCount);
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
          if (tag != 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.gender = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.locationStatus = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.PartyMemeberCount = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.PartyMaxMemeberCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): scharacterFriendInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
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
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.nickName !== undefined &&
      (obj.nickName = message.nickName ? saccountNickname.toJSON(message.nickName) : undefined);
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    message.characterId !== undefined && (obj.characterId = message.characterId);
    message.gender !== undefined && (obj.gender = Math.round(message.gender));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.locationStatus !== undefined && (obj.locationStatus = Math.round(message.locationStatus));
    message.PartyMemeberCount !== undefined && (obj.PartyMemeberCount = Math.round(message.PartyMemeberCount));
    message.PartyMaxMemeberCount !== undefined && (obj.PartyMaxMemeberCount = Math.round(message.PartyMaxMemeberCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<scharacterFriendInfo>, I>>(base?: I): scharacterFriendInfo {
    return scharacterFriendInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<scharacterFriendInfo>, I>>(object: I): scharacterFriendInfo {
    const message = createBasescharacterFriendInfo();
    message.accountId = object.accountId ?? "";
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
  };
}

export const scharacterPartyInfo = {
  encode(message: scharacterPartyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(18).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(26).string(message.characterClass);
    }
    if (message.characterId !== "") {
      writer.uint32(34).string(message.characterId);
    }
    if (message.gender !== 0) {
      writer.uint32(40).uint32(message.gender);
    }
    if (message.level !== 0) {
      writer.uint32(48).uint32(message.level);
    }
    if (message.isPartyLeader !== 0) {
      writer.uint32(56).uint32(message.isPartyLeader);
    }
    if (message.isReady !== 0) {
      writer.uint32(64).uint32(message.isReady);
    }
    if (message.isInGame !== 0) {
      writer.uint32(72).uint32(message.isInGame);
    }
    for (const v of message.equipItemList) {
      SItem.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.partyIdx !== 0) {
      writer.uint32(88).uint32(message.partyIdx);
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
          if (tag != 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.gender = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.isPartyLeader = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.isReady = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.isInGame = reader.uint32();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.equipItemList.push(SItem.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.partyIdx = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): scharacterPartyInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
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
    };
  },

  toJSON(message: scharacterPartyInfo): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.nickName !== undefined &&
      (obj.nickName = message.nickName ? saccountNickname.toJSON(message.nickName) : undefined);
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    message.characterId !== undefined && (obj.characterId = message.characterId);
    message.gender !== undefined && (obj.gender = Math.round(message.gender));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.isPartyLeader !== undefined && (obj.isPartyLeader = Math.round(message.isPartyLeader));
    message.isReady !== undefined && (obj.isReady = Math.round(message.isReady));
    message.isInGame !== undefined && (obj.isInGame = Math.round(message.isInGame));
    if (message.equipItemList) {
      obj.equipItemList = message.equipItemList.map((e) => e ? SItem.toJSON(e) : undefined);
    } else {
      obj.equipItemList = [];
    }
    message.partyIdx !== undefined && (obj.partyIdx = Math.round(message.partyIdx));
    return obj;
  },

  create<I extends Exact<DeepPartial<scharacterPartyInfo>, I>>(base?: I): scharacterPartyInfo {
    return scharacterPartyInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<scharacterPartyInfo>, I>>(object: I): scharacterPartyInfo {
    const message = createBasescharacterPartyInfo();
    message.accountId = object.accountId ?? "";
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
    return message;
  },
};

function createBasescharacterTradeInfo(): scharacterTradeInfo {
  return {
    accountId: "",
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
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(18).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(26).string(message.characterClass);
    }
    if (message.characterId !== "") {
      writer.uint32(34).string(message.characterId);
    }
    if (message.gender !== 0) {
      writer.uint32(40).uint32(message.gender);
    }
    if (message.level !== 0) {
      writer.uint32(48).uint32(message.level);
    }
    if (message.characterLocation !== 0) {
      writer.uint32(56).uint32(message.characterLocation);
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
          if (tag != 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.gender = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.characterLocation = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): scharacterTradeInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
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
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.nickName !== undefined &&
      (obj.nickName = message.nickName ? saccountNickname.toJSON(message.nickName) : undefined);
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    message.characterId !== undefined && (obj.characterId = message.characterId);
    message.gender !== undefined && (obj.gender = Math.round(message.gender));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.characterLocation !== undefined && (obj.characterLocation = Math.round(message.characterLocation));
    return obj;
  },

  create<I extends Exact<DeepPartial<scharacterTradeInfo>, I>>(base?: I): scharacterTradeInfo {
    return scharacterTradeInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<scharacterTradeInfo>, I>>(object: I): scharacterTradeInfo {
    const message = createBasescharacterTradeInfo();
    message.accountId = object.accountId ?? "";
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
  return { originalNickName: "", streamingModeNickName: "", karmaRating: 0 };
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
          if (tag != 10) {
            break;
          }

          message.originalNickName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.streamingModeNickName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
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

  fromJSON(object: any): saccountNickname {
    return {
      originalNickName: isSet(object.originalNickName) ? String(object.originalNickName) : "",
      streamingModeNickName: isSet(object.streamingModeNickName) ? String(object.streamingModeNickName) : "",
      karmaRating: isSet(object.karmaRating) ? Number(object.karmaRating) : 0,
    };
  },

  toJSON(message: saccountNickname): unknown {
    const obj: any = {};
    message.originalNickName !== undefined && (obj.originalNickName = message.originalNickName);
    message.streamingModeNickName !== undefined && (obj.streamingModeNickName = message.streamingModeNickName);
    message.karmaRating !== undefined && (obj.karmaRating = Math.round(message.karmaRating));
    return obj;
  },

  create<I extends Exact<DeepPartial<saccountNickname>, I>>(base?: I): saccountNickname {
    return saccountNickname.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<saccountNickname>, I>>(object: I): saccountNickname {
    const message = createBasesaccountNickname();
    message.originalNickName = object.originalNickName ?? "";
    message.streamingModeNickName = object.streamingModeNickName ?? "";
    message.karmaRating = object.karmaRating ?? 0;
    return message;
  },
};

function createBasesblockCharacter(): sblockCharacter {
  return { accountId: "", characterId: "", nickName: undefined, characterClass: "", gender: 0 };
}

export const sblockCharacter = {
  encode(message: sblockCharacter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
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
          if (tag != 26) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
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

          message.gender = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): sblockCharacter {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
    };
  },

  toJSON(message: sblockCharacter): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.characterId !== undefined && (obj.characterId = message.characterId);
    message.nickName !== undefined &&
      (obj.nickName = message.nickName ? saccountNickname.toJSON(message.nickName) : undefined);
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    message.gender !== undefined && (obj.gender = Math.round(message.gender));
    return obj;
  },

  create<I extends Exact<DeepPartial<sblockCharacter>, I>>(base?: I): sblockCharacter {
    return sblockCharacter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<sblockCharacter>, I>>(object: I): sblockCharacter {
    const message = createBasesblockCharacter();
    message.accountId = object.accountId ?? "";
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
  return { accountId: "", nickName: undefined, characterClass: "", characterId: "", gender: 0, level: 0 };
}

export const scharacterGatheringHallInfo = {
  encode(message: scharacterGatheringHallInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.nickName !== undefined) {
      saccountNickname.encode(message.nickName, writer.uint32(18).fork()).ldelim();
    }
    if (message.characterClass !== "") {
      writer.uint32(26).string(message.characterClass);
    }
    if (message.characterId !== "") {
      writer.uint32(34).string(message.characterId);
    }
    if (message.gender !== 0) {
      writer.uint32(40).uint32(message.gender);
    }
    if (message.level !== 0) {
      writer.uint32(48).uint32(message.level);
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
          if (tag != 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.nickName = saccountNickname.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.characterClass = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.characterId = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.gender = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
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

  fromJSON(object: any): scharacterGatheringHallInfo {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      nickName: isSet(object.nickName) ? saccountNickname.fromJSON(object.nickName) : undefined,
      characterClass: isSet(object.characterClass) ? String(object.characterClass) : "",
      characterId: isSet(object.characterId) ? String(object.characterId) : "",
      gender: isSet(object.gender) ? Number(object.gender) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
    };
  },

  toJSON(message: scharacterGatheringHallInfo): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.nickName !== undefined &&
      (obj.nickName = message.nickName ? saccountNickname.toJSON(message.nickName) : undefined);
    message.characterClass !== undefined && (obj.characterClass = message.characterClass);
    message.characterId !== undefined && (obj.characterId = message.characterId);
    message.gender !== undefined && (obj.gender = Math.round(message.gender));
    message.level !== undefined && (obj.level = Math.round(message.level));
    return obj;
  },

  create<I extends Exact<DeepPartial<scharacterGatheringHallInfo>, I>>(base?: I): scharacterGatheringHallInfo {
    return scharacterGatheringHallInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<scharacterGatheringHallInfo>, I>>(object: I): scharacterGatheringHallInfo {
    const message = createBasescharacterGatheringHallInfo();
    message.accountId = object.accountId ?? "";
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
