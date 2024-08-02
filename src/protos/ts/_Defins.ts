/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DC.Packet.Defines";

export enum CharacterGenderType {
  NONE = 0,
  MAN = 1,
  WOMAN = 2,
  UNISEX = 3,
  UNRECOGNIZED = -1,
}

export function characterGenderTypeFromJSON(object: any): CharacterGenderType {
  switch (object) {
    case 0:
    case "NONE":
      return CharacterGenderType.NONE;
    case 1:
    case "MAN":
      return CharacterGenderType.MAN;
    case 2:
    case "WOMAN":
      return CharacterGenderType.WOMAN;
    case 3:
    case "UNISEX":
      return CharacterGenderType.UNISEX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CharacterGenderType.UNRECOGNIZED;
  }
}

export function characterGenderTypeToJSON(object: CharacterGenderType): string {
  switch (object) {
    case CharacterGenderType.NONE:
      return "NONE";
    case CharacterGenderType.MAN:
      return "MAN";
    case CharacterGenderType.WOMAN:
      return "WOMAN";
    case CharacterGenderType.UNISEX:
      return "UNISEX";
    case CharacterGenderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineAccount {
}

export enum DefineAccount_LengthText {
  NONE = 0,
  MIN = 2,
  MAX = 20,
  UNRECOGNIZED = -1,
}

export function defineAccount_LengthTextFromJSON(object: any): DefineAccount_LengthText {
  switch (object) {
    case 0:
    case "NONE":
      return DefineAccount_LengthText.NONE;
    case 2:
    case "MIN":
      return DefineAccount_LengthText.MIN;
    case 20:
    case "MAX":
      return DefineAccount_LengthText.MAX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineAccount_LengthText.UNRECOGNIZED;
  }
}

export function defineAccount_LengthTextToJSON(object: DefineAccount_LengthText): string {
  switch (object) {
    case DefineAccount_LengthText.NONE:
      return "NONE";
    case DefineAccount_LengthText.MIN:
      return "MIN";
    case DefineAccount_LengthText.MAX:
      return "MAX";
    case DefineAccount_LengthText.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineAccount_CurrencyType {
  CURRENCY_NONE = 0,
  BLUE_STONE_SHARD = 1,
  RED_STONE_SHARD = 2,
  UNRECOGNIZED = -1,
}

export function defineAccount_CurrencyTypeFromJSON(object: any): DefineAccount_CurrencyType {
  switch (object) {
    case 0:
    case "CURRENCY_NONE":
      return DefineAccount_CurrencyType.CURRENCY_NONE;
    case 1:
    case "BLUE_STONE_SHARD":
      return DefineAccount_CurrencyType.BLUE_STONE_SHARD;
    case 2:
    case "RED_STONE_SHARD":
      return DefineAccount_CurrencyType.RED_STONE_SHARD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineAccount_CurrencyType.UNRECOGNIZED;
  }
}

export function defineAccount_CurrencyTypeToJSON(object: DefineAccount_CurrencyType): string {
  switch (object) {
    case DefineAccount_CurrencyType.CURRENCY_NONE:
      return "CURRENCY_NONE";
    case DefineAccount_CurrencyType.BLUE_STONE_SHARD:
      return "BLUE_STONE_SHARD";
    case DefineAccount_CurrencyType.RED_STONE_SHARD:
      return "RED_STONE_SHARD";
    case DefineAccount_CurrencyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineAccount_LoginType {
  LOGIN_TYPE_NONE = 0,
  STEAM = 1,
  EPIC = 2,
  IRONMACE = 3,
  CHAF = 4,
  MICROSOFT = 5,
  UNRECOGNIZED = -1,
}

export function defineAccount_LoginTypeFromJSON(object: any): DefineAccount_LoginType {
  switch (object) {
    case 0:
    case "LOGIN_TYPE_NONE":
      return DefineAccount_LoginType.LOGIN_TYPE_NONE;
    case 1:
    case "STEAM":
      return DefineAccount_LoginType.STEAM;
    case 2:
    case "EPIC":
      return DefineAccount_LoginType.EPIC;
    case 3:
    case "IRONMACE":
      return DefineAccount_LoginType.IRONMACE;
    case 4:
    case "CHAF":
      return DefineAccount_LoginType.CHAF;
    case 5:
    case "MICROSOFT":
      return DefineAccount_LoginType.MICROSOFT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineAccount_LoginType.UNRECOGNIZED;
  }
}

export function defineAccount_LoginTypeToJSON(object: DefineAccount_LoginType): string {
  switch (object) {
    case DefineAccount_LoginType.LOGIN_TYPE_NONE:
      return "LOGIN_TYPE_NONE";
    case DefineAccount_LoginType.STEAM:
      return "STEAM";
    case DefineAccount_LoginType.EPIC:
      return "EPIC";
    case DefineAccount_LoginType.IRONMACE:
      return "IRONMACE";
    case DefineAccount_LoginType.CHAF:
      return "CHAF";
    case DefineAccount_LoginType.MICROSOFT:
      return "MICROSOFT";
    case DefineAccount_LoginType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineAccount_AccountStatus {
  ACCOUNT_STATUS_NONE = 0,
  ACCOUNT_STATUS_SQUIRE = 1,
  ACCOUNT_STATUS_LEGEND = 2,
  UNRECOGNIZED = -1,
}

export function defineAccount_AccountStatusFromJSON(object: any): DefineAccount_AccountStatus {
  switch (object) {
    case 0:
    case "ACCOUNT_STATUS_NONE":
      return DefineAccount_AccountStatus.ACCOUNT_STATUS_NONE;
    case 1:
    case "ACCOUNT_STATUS_SQUIRE":
      return DefineAccount_AccountStatus.ACCOUNT_STATUS_SQUIRE;
    case 2:
    case "ACCOUNT_STATUS_LEGEND":
      return DefineAccount_AccountStatus.ACCOUNT_STATUS_LEGEND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineAccount_AccountStatus.UNRECOGNIZED;
  }
}

export function defineAccount_AccountStatusToJSON(object: DefineAccount_AccountStatus): string {
  switch (object) {
    case DefineAccount_AccountStatus.ACCOUNT_STATUS_NONE:
      return "ACCOUNT_STATUS_NONE";
    case DefineAccount_AccountStatus.ACCOUNT_STATUS_SQUIRE:
      return "ACCOUNT_STATUS_SQUIRE";
    case DefineAccount_AccountStatus.ACCOUNT_STATUS_LEGEND:
      return "ACCOUNT_STATUS_LEGEND";
    case DefineAccount_AccountStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineCharacter {
}

export enum DefineCharacter_LengthNickName {
  NONE = 0,
  MIN = 2,
  MAX = 20,
  UNRECOGNIZED = -1,
}

export function defineCharacter_LengthNickNameFromJSON(object: any): DefineCharacter_LengthNickName {
  switch (object) {
    case 0:
    case "NONE":
      return DefineCharacter_LengthNickName.NONE;
    case 2:
    case "MIN":
      return DefineCharacter_LengthNickName.MIN;
    case 20:
    case "MAX":
      return DefineCharacter_LengthNickName.MAX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineCharacter_LengthNickName.UNRECOGNIZED;
  }
}

export function defineCharacter_LengthNickNameToJSON(object: DefineCharacter_LengthNickName): string {
  switch (object) {
    case DefineCharacter_LengthNickName.NONE:
      return "NONE";
    case DefineCharacter_LengthNickName.MIN:
      return "MIN";
    case DefineCharacter_LengthNickName.MAX:
      return "MAX";
    case DefineCharacter_LengthNickName.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineCharacter_Limit {
  NONE_Limit = 0,
  MAX_COUNT = 8,
  UNRECOGNIZED = -1,
}

export function defineCharacter_LimitFromJSON(object: any): DefineCharacter_Limit {
  switch (object) {
    case 0:
    case "NONE_Limit":
      return DefineCharacter_Limit.NONE_Limit;
    case 8:
    case "MAX_COUNT":
      return DefineCharacter_Limit.MAX_COUNT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineCharacter_Limit.UNRECOGNIZED;
  }
}

export function defineCharacter_LimitToJSON(object: DefineCharacter_Limit): string {
  switch (object) {
    case DefineCharacter_Limit.NONE_Limit:
      return "NONE_Limit";
    case DefineCharacter_Limit.MAX_COUNT:
      return "MAX_COUNT";
    case DefineCharacter_Limit.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineParty {
}

export enum DefineParty_MemberCountLimit {
  NONE = 0,
  MAX = 3,
  MIN = 1,
  UNRECOGNIZED = -1,
}

export function defineParty_MemberCountLimitFromJSON(object: any): DefineParty_MemberCountLimit {
  switch (object) {
    case 0:
    case "NONE":
      return DefineParty_MemberCountLimit.NONE;
    case 3:
    case "MAX":
      return DefineParty_MemberCountLimit.MAX;
    case 1:
    case "MIN":
      return DefineParty_MemberCountLimit.MIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineParty_MemberCountLimit.UNRECOGNIZED;
  }
}

export function defineParty_MemberCountLimitToJSON(object: DefineParty_MemberCountLimit): string {
  switch (object) {
    case DefineParty_MemberCountLimit.NONE:
      return "NONE";
    case DefineParty_MemberCountLimit.MAX:
      return "MAX";
    case DefineParty_MemberCountLimit.MIN:
      return "MIN";
    case DefineParty_MemberCountLimit.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineItem {
}

export enum DefineItem_InventoryId {
  NONE = 0,
  CHEST = 1,
  BAG = 2,
  EQUIPMENT = 3,
  STORAGE = 4,
  PURCHASED_STORAGE_0 = 5,
  PURCHASED_STORAGE_1 = 6,
  PURCHASED_STORAGE_2 = 7,
  PURCHASED_STORAGE_3 = 8,
  PURCHASED_STORAGE_4 = 9,
  SHARED_STASH_0 = 20,
  MAX = 30,
  UNRECOGNIZED = -1,
}

export function defineItem_InventoryIdFromJSON(object: any): DefineItem_InventoryId {
  switch (object) {
    case 0:
    case "NONE":
      return DefineItem_InventoryId.NONE;
    case 1:
    case "CHEST":
      return DefineItem_InventoryId.CHEST;
    case 2:
    case "BAG":
      return DefineItem_InventoryId.BAG;
    case 3:
    case "EQUIPMENT":
      return DefineItem_InventoryId.EQUIPMENT;
    case 4:
    case "STORAGE":
      return DefineItem_InventoryId.STORAGE;
    case 5:
    case "PURCHASED_STORAGE_0":
      return DefineItem_InventoryId.PURCHASED_STORAGE_0;
    case 6:
    case "PURCHASED_STORAGE_1":
      return DefineItem_InventoryId.PURCHASED_STORAGE_1;
    case 7:
    case "PURCHASED_STORAGE_2":
      return DefineItem_InventoryId.PURCHASED_STORAGE_2;
    case 8:
    case "PURCHASED_STORAGE_3":
      return DefineItem_InventoryId.PURCHASED_STORAGE_3;
    case 9:
    case "PURCHASED_STORAGE_4":
      return DefineItem_InventoryId.PURCHASED_STORAGE_4;
    case 20:
    case "SHARED_STASH_0":
      return DefineItem_InventoryId.SHARED_STASH_0;
    case 30:
    case "MAX":
      return DefineItem_InventoryId.MAX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineItem_InventoryId.UNRECOGNIZED;
  }
}

export function defineItem_InventoryIdToJSON(object: DefineItem_InventoryId): string {
  switch (object) {
    case DefineItem_InventoryId.NONE:
      return "NONE";
    case DefineItem_InventoryId.CHEST:
      return "CHEST";
    case DefineItem_InventoryId.BAG:
      return "BAG";
    case DefineItem_InventoryId.EQUIPMENT:
      return "EQUIPMENT";
    case DefineItem_InventoryId.STORAGE:
      return "STORAGE";
    case DefineItem_InventoryId.PURCHASED_STORAGE_0:
      return "PURCHASED_STORAGE_0";
    case DefineItem_InventoryId.PURCHASED_STORAGE_1:
      return "PURCHASED_STORAGE_1";
    case DefineItem_InventoryId.PURCHASED_STORAGE_2:
      return "PURCHASED_STORAGE_2";
    case DefineItem_InventoryId.PURCHASED_STORAGE_3:
      return "PURCHASED_STORAGE_3";
    case DefineItem_InventoryId.PURCHASED_STORAGE_4:
      return "PURCHASED_STORAGE_4";
    case DefineItem_InventoryId.SHARED_STASH_0:
      return "SHARED_STASH_0";
    case DefineItem_InventoryId.MAX:
      return "MAX";
    case DefineItem_InventoryId.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineItem_rarityType {
  NONE_RARITY_TYPE = 0,
  POOR = 1,
  COMMON = 2,
  UNCOMMON = 3,
  RARE = 4,
  EPIC = 5,
  LEGEND = 6,
  UNIQUE = 7,
  UNRECOGNIZED = -1,
}

export function defineItem_rarityTypeFromJSON(object: any): DefineItem_rarityType {
  switch (object) {
    case 0:
    case "NONE_RARITY_TYPE":
      return DefineItem_rarityType.NONE_RARITY_TYPE;
    case 1:
    case "POOR":
      return DefineItem_rarityType.POOR;
    case 2:
    case "COMMON":
      return DefineItem_rarityType.COMMON;
    case 3:
    case "UNCOMMON":
      return DefineItem_rarityType.UNCOMMON;
    case 4:
    case "RARE":
      return DefineItem_rarityType.RARE;
    case 5:
    case "EPIC":
      return DefineItem_rarityType.EPIC;
    case 6:
    case "LEGEND":
      return DefineItem_rarityType.LEGEND;
    case 7:
    case "UNIQUE":
      return DefineItem_rarityType.UNIQUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineItem_rarityType.UNRECOGNIZED;
  }
}

export function defineItem_rarityTypeToJSON(object: DefineItem_rarityType): string {
  switch (object) {
    case DefineItem_rarityType.NONE_RARITY_TYPE:
      return "NONE_RARITY_TYPE";
    case DefineItem_rarityType.POOR:
      return "POOR";
    case DefineItem_rarityType.COMMON:
      return "COMMON";
    case DefineItem_rarityType.UNCOMMON:
      return "UNCOMMON";
    case DefineItem_rarityType.RARE:
      return "RARE";
    case DefineItem_rarityType.EPIC:
      return "EPIC";
    case DefineItem_rarityType.LEGEND:
      return "LEGEND";
    case DefineItem_rarityType.UNIQUE:
      return "UNIQUE";
    case DefineItem_rarityType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineItem_LootState {
  NONE_SOURCE = 0,
  SUPPLIED = 1,
  LOOTED = 2,
  HANDLED = 3,
  CRAFT = 4,
  UNRECOGNIZED = -1,
}

export function defineItem_LootStateFromJSON(object: any): DefineItem_LootState {
  switch (object) {
    case 0:
    case "NONE_SOURCE":
      return DefineItem_LootState.NONE_SOURCE;
    case 1:
    case "SUPPLIED":
      return DefineItem_LootState.SUPPLIED;
    case 2:
    case "LOOTED":
      return DefineItem_LootState.LOOTED;
    case 3:
    case "HANDLED":
      return DefineItem_LootState.HANDLED;
    case 4:
    case "CRAFT":
      return DefineItem_LootState.CRAFT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineItem_LootState.UNRECOGNIZED;
  }
}

export function defineItem_LootStateToJSON(object: DefineItem_LootState): string {
  switch (object) {
    case DefineItem_LootState.NONE_SOURCE:
      return "NONE_SOURCE";
    case DefineItem_LootState.SUPPLIED:
      return "SUPPLIED";
    case DefineItem_LootState.LOOTED:
      return "LOOTED";
    case DefineItem_LootState.HANDLED:
      return "HANDLED";
    case DefineItem_LootState.CRAFT:
      return "CRAFT";
    case DefineItem_LootState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineEquipment {
}

export enum DefineEquipment_SlotId {
  NONE = 0,
  HEAD = 1,
  CHEST = 2,
  HANDS = 3,
  LEGS = 4,
  FOOT = 5,
  BELT_A = 6,
  BELT_B = 7,
  UTILITY_A_1 = 8,
  UTILITY_B_1 = 9,
  PRIMARY_A = 10,
  SECONDARY_A = 11,
  PRIMARY_B = 12,
  SECONDARY_B = 13,
  UTILITY_A_2 = 14,
  UTILITY_A_3 = 15,
  UTILITY_B_2 = 16,
  UTILITY_B_3 = 17,
  SOULHEART = 18,
  NECKLACE = 19,
  RING_A = 20,
  RING_B = 21,
  BACK = 22,
  UNRECOGNIZED = -1,
}

export function defineEquipment_SlotIdFromJSON(object: any): DefineEquipment_SlotId {
  switch (object) {
    case 0:
    case "NONE":
      return DefineEquipment_SlotId.NONE;
    case 1:
    case "HEAD":
      return DefineEquipment_SlotId.HEAD;
    case 2:
    case "CHEST":
      return DefineEquipment_SlotId.CHEST;
    case 3:
    case "HANDS":
      return DefineEquipment_SlotId.HANDS;
    case 4:
    case "LEGS":
      return DefineEquipment_SlotId.LEGS;
    case 5:
    case "FOOT":
      return DefineEquipment_SlotId.FOOT;
    case 6:
    case "BELT_A":
      return DefineEquipment_SlotId.BELT_A;
    case 7:
    case "BELT_B":
      return DefineEquipment_SlotId.BELT_B;
    case 8:
    case "UTILITY_A_1":
      return DefineEquipment_SlotId.UTILITY_A_1;
    case 9:
    case "UTILITY_B_1":
      return DefineEquipment_SlotId.UTILITY_B_1;
    case 10:
    case "PRIMARY_A":
      return DefineEquipment_SlotId.PRIMARY_A;
    case 11:
    case "SECONDARY_A":
      return DefineEquipment_SlotId.SECONDARY_A;
    case 12:
    case "PRIMARY_B":
      return DefineEquipment_SlotId.PRIMARY_B;
    case 13:
    case "SECONDARY_B":
      return DefineEquipment_SlotId.SECONDARY_B;
    case 14:
    case "UTILITY_A_2":
      return DefineEquipment_SlotId.UTILITY_A_2;
    case 15:
    case "UTILITY_A_3":
      return DefineEquipment_SlotId.UTILITY_A_3;
    case 16:
    case "UTILITY_B_2":
      return DefineEquipment_SlotId.UTILITY_B_2;
    case 17:
    case "UTILITY_B_3":
      return DefineEquipment_SlotId.UTILITY_B_3;
    case 18:
    case "SOULHEART":
      return DefineEquipment_SlotId.SOULHEART;
    case 19:
    case "NECKLACE":
      return DefineEquipment_SlotId.NECKLACE;
    case 20:
    case "RING_A":
      return DefineEquipment_SlotId.RING_A;
    case 21:
    case "RING_B":
      return DefineEquipment_SlotId.RING_B;
    case 22:
    case "BACK":
      return DefineEquipment_SlotId.BACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineEquipment_SlotId.UNRECOGNIZED;
  }
}

export function defineEquipment_SlotIdToJSON(object: DefineEquipment_SlotId): string {
  switch (object) {
    case DefineEquipment_SlotId.NONE:
      return "NONE";
    case DefineEquipment_SlotId.HEAD:
      return "HEAD";
    case DefineEquipment_SlotId.CHEST:
      return "CHEST";
    case DefineEquipment_SlotId.HANDS:
      return "HANDS";
    case DefineEquipment_SlotId.LEGS:
      return "LEGS";
    case DefineEquipment_SlotId.FOOT:
      return "FOOT";
    case DefineEquipment_SlotId.BELT_A:
      return "BELT_A";
    case DefineEquipment_SlotId.BELT_B:
      return "BELT_B";
    case DefineEquipment_SlotId.UTILITY_A_1:
      return "UTILITY_A_1";
    case DefineEquipment_SlotId.UTILITY_B_1:
      return "UTILITY_B_1";
    case DefineEquipment_SlotId.PRIMARY_A:
      return "PRIMARY_A";
    case DefineEquipment_SlotId.SECONDARY_A:
      return "SECONDARY_A";
    case DefineEquipment_SlotId.PRIMARY_B:
      return "PRIMARY_B";
    case DefineEquipment_SlotId.SECONDARY_B:
      return "SECONDARY_B";
    case DefineEquipment_SlotId.UTILITY_A_2:
      return "UTILITY_A_2";
    case DefineEquipment_SlotId.UTILITY_A_3:
      return "UTILITY_A_3";
    case DefineEquipment_SlotId.UTILITY_B_2:
      return "UTILITY_B_2";
    case DefineEquipment_SlotId.UTILITY_B_3:
      return "UTILITY_B_3";
    case DefineEquipment_SlotId.SOULHEART:
      return "SOULHEART";
    case DefineEquipment_SlotId.NECKLACE:
      return "NECKLACE";
    case DefineEquipment_SlotId.RING_A:
      return "RING_A";
    case DefineEquipment_SlotId.RING_B:
      return "RING_B";
    case DefineEquipment_SlotId.BACK:
      return "BACK";
    case DefineEquipment_SlotId.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineMessage {
}

export enum DefineMessage_LoopFlag {
  NONE = 0,
  BEGIN = 1,
  PROGRESS = 2,
  END = 3,
  UNRECOGNIZED = -1,
}

export function defineMessage_LoopFlagFromJSON(object: any): DefineMessage_LoopFlag {
  switch (object) {
    case 0:
    case "NONE":
      return DefineMessage_LoopFlag.NONE;
    case 1:
    case "BEGIN":
      return DefineMessage_LoopFlag.BEGIN;
    case 2:
    case "PROGRESS":
      return DefineMessage_LoopFlag.PROGRESS;
    case 3:
    case "END":
      return DefineMessage_LoopFlag.END;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineMessage_LoopFlag.UNRECOGNIZED;
  }
}

export function defineMessage_LoopFlagToJSON(object: DefineMessage_LoopFlag): string {
  switch (object) {
    case DefineMessage_LoopFlag.NONE:
      return "NONE";
    case DefineMessage_LoopFlag.BEGIN:
      return "BEGIN";
    case DefineMessage_LoopFlag.PROGRESS:
      return "PROGRESS";
    case DefineMessage_LoopFlag.END:
      return "END";
    case DefineMessage_LoopFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineMessage_UpdateFlag {
  NONE_UPDATE_FLAG = 0,
  INSERT = 1,
  UPDATE = 2,
  DELETE = 3,
  UNRECOGNIZED = -1,
}

export function defineMessage_UpdateFlagFromJSON(object: any): DefineMessage_UpdateFlag {
  switch (object) {
    case 0:
    case "NONE_UPDATE_FLAG":
      return DefineMessage_UpdateFlag.NONE_UPDATE_FLAG;
    case 1:
    case "INSERT":
      return DefineMessage_UpdateFlag.INSERT;
    case 2:
    case "UPDATE":
      return DefineMessage_UpdateFlag.UPDATE;
    case 3:
    case "DELETE":
      return DefineMessage_UpdateFlag.DELETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineMessage_UpdateFlag.UNRECOGNIZED;
  }
}

export function defineMessage_UpdateFlagToJSON(object: DefineMessage_UpdateFlag): string {
  switch (object) {
    case DefineMessage_UpdateFlag.NONE_UPDATE_FLAG:
      return "NONE_UPDATE_FLAG";
    case DefineMessage_UpdateFlag.INSERT:
      return "INSERT";
    case DefineMessage_UpdateFlag.UPDATE:
      return "UPDATE";
    case DefineMessage_UpdateFlag.DELETE:
      return "DELETE";
    case DefineMessage_UpdateFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineMessage_SelectFlag {
  NONE_SELECT_FLAG = 0,
  OK = 1,
  CANCEL = 2,
  UNRECOGNIZED = -1,
}

export function defineMessage_SelectFlagFromJSON(object: any): DefineMessage_SelectFlag {
  switch (object) {
    case 0:
    case "NONE_SELECT_FLAG":
      return DefineMessage_SelectFlag.NONE_SELECT_FLAG;
    case 1:
    case "OK":
      return DefineMessage_SelectFlag.OK;
    case 2:
    case "CANCEL":
      return DefineMessage_SelectFlag.CANCEL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineMessage_SelectFlag.UNRECOGNIZED;
  }
}

export function defineMessage_SelectFlagToJSON(object: DefineMessage_SelectFlag): string {
  switch (object) {
    case DefineMessage_SelectFlag.NONE_SELECT_FLAG:
      return "NONE_SELECT_FLAG";
    case DefineMessage_SelectFlag.OK:
      return "OK";
    case DefineMessage_SelectFlag.CANCEL:
      return "CANCEL";
    case DefineMessage_SelectFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineMatch {
}

export enum DefineMatch_MatchRegion {
  NONE = 0,
  US_WEST = 1,
  US_EAST = 2,
  EU_CENTRAL = 3,
  KR = 4,
  SINGAPORE = 5,
  SYDNEY = 6,
  SAOPAULO = 7,
  TOKYO = 8,
  UNRECOGNIZED = -1,
}

export function defineMatch_MatchRegionFromJSON(object: any): DefineMatch_MatchRegion {
  switch (object) {
    case 0:
    case "NONE":
      return DefineMatch_MatchRegion.NONE;
    case 1:
    case "US_WEST":
      return DefineMatch_MatchRegion.US_WEST;
    case 2:
    case "US_EAST":
      return DefineMatch_MatchRegion.US_EAST;
    case 3:
    case "EU_CENTRAL":
      return DefineMatch_MatchRegion.EU_CENTRAL;
    case 4:
    case "KR":
      return DefineMatch_MatchRegion.KR;
    case 5:
    case "SINGAPORE":
      return DefineMatch_MatchRegion.SINGAPORE;
    case 6:
    case "SYDNEY":
      return DefineMatch_MatchRegion.SYDNEY;
    case 7:
    case "SAOPAULO":
      return DefineMatch_MatchRegion.SAOPAULO;
    case 8:
    case "TOKYO":
      return DefineMatch_MatchRegion.TOKYO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineMatch_MatchRegion.UNRECOGNIZED;
  }
}

export function defineMatch_MatchRegionToJSON(object: DefineMatch_MatchRegion): string {
  switch (object) {
    case DefineMatch_MatchRegion.NONE:
      return "NONE";
    case DefineMatch_MatchRegion.US_WEST:
      return "US_WEST";
    case DefineMatch_MatchRegion.US_EAST:
      return "US_EAST";
    case DefineMatch_MatchRegion.EU_CENTRAL:
      return "EU_CENTRAL";
    case DefineMatch_MatchRegion.KR:
      return "KR";
    case DefineMatch_MatchRegion.SINGAPORE:
      return "SINGAPORE";
    case DefineMatch_MatchRegion.SYDNEY:
      return "SYDNEY";
    case DefineMatch_MatchRegion.SAOPAULO:
      return "SAOPAULO";
    case DefineMatch_MatchRegion.TOKYO:
      return "TOKYO";
    case DefineMatch_MatchRegion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineStat {
}

export enum DefineStat_StatType {
  NONE_STAT = 0,
  GAMES_PLAYED = 1,
  EXTRACTIONS = 2,
  DOWN_PORTALS_TAKEN = 3,
  KILLS = 4,
  DEATHS = 5,
  TREASURE_VALUE_EXTRACTED = 6,
  MONSTERS_KILLED = 7,
  SUBBOSSES_KILLED = 8,
  BOSSES_KILLED = 9,
  ORNATE_CHESTS_OPENED = 10,
  ROYAL_COFFINS_OPENED = 11,
  LIONS_HEAD_CHESTS_OPENED = 12,
  GOLDEN_CHESTS_OPENED = 13,
  MARVELOUS_CHESTS_OPENED = 14,
  ALLIES_REVIVED = 15,
  PLAYER_KILL_ASSIST = 16,
  MONSTER_KILL_ASSIST = 17,
  SUBBOSS_KILL_ASSIST = 18,
  BOSS_KILL_ASSIST = 19,
  UNRECOGNIZED = -1,
}

export function defineStat_StatTypeFromJSON(object: any): DefineStat_StatType {
  switch (object) {
    case 0:
    case "NONE_STAT":
      return DefineStat_StatType.NONE_STAT;
    case 1:
    case "GAMES_PLAYED":
      return DefineStat_StatType.GAMES_PLAYED;
    case 2:
    case "EXTRACTIONS":
      return DefineStat_StatType.EXTRACTIONS;
    case 3:
    case "DOWN_PORTALS_TAKEN":
      return DefineStat_StatType.DOWN_PORTALS_TAKEN;
    case 4:
    case "KILLS":
      return DefineStat_StatType.KILLS;
    case 5:
    case "DEATHS":
      return DefineStat_StatType.DEATHS;
    case 6:
    case "TREASURE_VALUE_EXTRACTED":
      return DefineStat_StatType.TREASURE_VALUE_EXTRACTED;
    case 7:
    case "MONSTERS_KILLED":
      return DefineStat_StatType.MONSTERS_KILLED;
    case 8:
    case "SUBBOSSES_KILLED":
      return DefineStat_StatType.SUBBOSSES_KILLED;
    case 9:
    case "BOSSES_KILLED":
      return DefineStat_StatType.BOSSES_KILLED;
    case 10:
    case "ORNATE_CHESTS_OPENED":
      return DefineStat_StatType.ORNATE_CHESTS_OPENED;
    case 11:
    case "ROYAL_COFFINS_OPENED":
      return DefineStat_StatType.ROYAL_COFFINS_OPENED;
    case 12:
    case "LIONS_HEAD_CHESTS_OPENED":
      return DefineStat_StatType.LIONS_HEAD_CHESTS_OPENED;
    case 13:
    case "GOLDEN_CHESTS_OPENED":
      return DefineStat_StatType.GOLDEN_CHESTS_OPENED;
    case 14:
    case "MARVELOUS_CHESTS_OPENED":
      return DefineStat_StatType.MARVELOUS_CHESTS_OPENED;
    case 15:
    case "ALLIES_REVIVED":
      return DefineStat_StatType.ALLIES_REVIVED;
    case 16:
    case "PLAYER_KILL_ASSIST":
      return DefineStat_StatType.PLAYER_KILL_ASSIST;
    case 17:
    case "MONSTER_KILL_ASSIST":
      return DefineStat_StatType.MONSTER_KILL_ASSIST;
    case 18:
    case "SUBBOSS_KILL_ASSIST":
      return DefineStat_StatType.SUBBOSS_KILL_ASSIST;
    case 19:
    case "BOSS_KILL_ASSIST":
      return DefineStat_StatType.BOSS_KILL_ASSIST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineStat_StatType.UNRECOGNIZED;
  }
}

export function defineStat_StatTypeToJSON(object: DefineStat_StatType): string {
  switch (object) {
    case DefineStat_StatType.NONE_STAT:
      return "NONE_STAT";
    case DefineStat_StatType.GAMES_PLAYED:
      return "GAMES_PLAYED";
    case DefineStat_StatType.EXTRACTIONS:
      return "EXTRACTIONS";
    case DefineStat_StatType.DOWN_PORTALS_TAKEN:
      return "DOWN_PORTALS_TAKEN";
    case DefineStat_StatType.KILLS:
      return "KILLS";
    case DefineStat_StatType.DEATHS:
      return "DEATHS";
    case DefineStat_StatType.TREASURE_VALUE_EXTRACTED:
      return "TREASURE_VALUE_EXTRACTED";
    case DefineStat_StatType.MONSTERS_KILLED:
      return "MONSTERS_KILLED";
    case DefineStat_StatType.SUBBOSSES_KILLED:
      return "SUBBOSSES_KILLED";
    case DefineStat_StatType.BOSSES_KILLED:
      return "BOSSES_KILLED";
    case DefineStat_StatType.ORNATE_CHESTS_OPENED:
      return "ORNATE_CHESTS_OPENED";
    case DefineStat_StatType.ROYAL_COFFINS_OPENED:
      return "ROYAL_COFFINS_OPENED";
    case DefineStat_StatType.LIONS_HEAD_CHESTS_OPENED:
      return "LIONS_HEAD_CHESTS_OPENED";
    case DefineStat_StatType.GOLDEN_CHESTS_OPENED:
      return "GOLDEN_CHESTS_OPENED";
    case DefineStat_StatType.MARVELOUS_CHESTS_OPENED:
      return "MARVELOUS_CHESTS_OPENED";
    case DefineStat_StatType.ALLIES_REVIVED:
      return "ALLIES_REVIVED";
    case DefineStat_StatType.PLAYER_KILL_ASSIST:
      return "PLAYER_KILL_ASSIST";
    case DefineStat_StatType.MONSTER_KILL_ASSIST:
      return "MONSTER_KILL_ASSIST";
    case DefineStat_StatType.SUBBOSS_KILL_ASSIST:
      return "SUBBOSS_KILL_ASSIST";
    case DefineStat_StatType.BOSS_KILL_ASSIST:
      return "BOSS_KILL_ASSIST";
    case DefineStat_StatType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineGame {
}

export enum DefineGame_AdvPointType {
  NONE = 0,
  PlayerKill = 1,
  DungeonDown = 2,
  MonsterKill = 3,
  PropsInteraction = 4,
  ItemAchieve = 5,
  PlayerDead = 6,
  PlayerLocation = 7,
  PlayerLootNewItem = 8,
  SubBossKill = 9,
  BossKill = 10,
  HighEndPropsInteraction = 11,
  Treasure = 12,
  EntranceFee = 13,
  PlayerKillAssist = 14,
  MonsterKillAssist = 15,
  SubBossKillAssist = 16,
  BossKillAssist = 17,
  UNRECOGNIZED = -1,
}

export function defineGame_AdvPointTypeFromJSON(object: any): DefineGame_AdvPointType {
  switch (object) {
    case 0:
    case "NONE":
      return DefineGame_AdvPointType.NONE;
    case 1:
    case "PlayerKill":
      return DefineGame_AdvPointType.PlayerKill;
    case 2:
    case "DungeonDown":
      return DefineGame_AdvPointType.DungeonDown;
    case 3:
    case "MonsterKill":
      return DefineGame_AdvPointType.MonsterKill;
    case 4:
    case "PropsInteraction":
      return DefineGame_AdvPointType.PropsInteraction;
    case 5:
    case "ItemAchieve":
      return DefineGame_AdvPointType.ItemAchieve;
    case 6:
    case "PlayerDead":
      return DefineGame_AdvPointType.PlayerDead;
    case 7:
    case "PlayerLocation":
      return DefineGame_AdvPointType.PlayerLocation;
    case 8:
    case "PlayerLootNewItem":
      return DefineGame_AdvPointType.PlayerLootNewItem;
    case 9:
    case "SubBossKill":
      return DefineGame_AdvPointType.SubBossKill;
    case 10:
    case "BossKill":
      return DefineGame_AdvPointType.BossKill;
    case 11:
    case "HighEndPropsInteraction":
      return DefineGame_AdvPointType.HighEndPropsInteraction;
    case 12:
    case "Treasure":
      return DefineGame_AdvPointType.Treasure;
    case 13:
    case "EntranceFee":
      return DefineGame_AdvPointType.EntranceFee;
    case 14:
    case "PlayerKillAssist":
      return DefineGame_AdvPointType.PlayerKillAssist;
    case 15:
    case "MonsterKillAssist":
      return DefineGame_AdvPointType.MonsterKillAssist;
    case 16:
    case "SubBossKillAssist":
      return DefineGame_AdvPointType.SubBossKillAssist;
    case 17:
    case "BossKillAssist":
      return DefineGame_AdvPointType.BossKillAssist;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineGame_AdvPointType.UNRECOGNIZED;
  }
}

export function defineGame_AdvPointTypeToJSON(object: DefineGame_AdvPointType): string {
  switch (object) {
    case DefineGame_AdvPointType.NONE:
      return "NONE";
    case DefineGame_AdvPointType.PlayerKill:
      return "PlayerKill";
    case DefineGame_AdvPointType.DungeonDown:
      return "DungeonDown";
    case DefineGame_AdvPointType.MonsterKill:
      return "MonsterKill";
    case DefineGame_AdvPointType.PropsInteraction:
      return "PropsInteraction";
    case DefineGame_AdvPointType.ItemAchieve:
      return "ItemAchieve";
    case DefineGame_AdvPointType.PlayerDead:
      return "PlayerDead";
    case DefineGame_AdvPointType.PlayerLocation:
      return "PlayerLocation";
    case DefineGame_AdvPointType.PlayerLootNewItem:
      return "PlayerLootNewItem";
    case DefineGame_AdvPointType.SubBossKill:
      return "SubBossKill";
    case DefineGame_AdvPointType.BossKill:
      return "BossKill";
    case DefineGame_AdvPointType.HighEndPropsInteraction:
      return "HighEndPropsInteraction";
    case DefineGame_AdvPointType.Treasure:
      return "Treasure";
    case DefineGame_AdvPointType.EntranceFee:
      return "EntranceFee";
    case DefineGame_AdvPointType.PlayerKillAssist:
      return "PlayerKillAssist";
    case DefineGame_AdvPointType.MonsterKillAssist:
      return "MonsterKillAssist";
    case DefineGame_AdvPointType.SubBossKillAssist:
      return "SubBossKillAssist";
    case DefineGame_AdvPointType.BossKillAssist:
      return "BossKillAssist";
    case DefineGame_AdvPointType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineGame_GameType {
  NONE_MODE = 0,
  DUNGEON_TRIO_NORMAL = 1,
  DUNGEON_TRIO_HIGH_ROLLER = 2,
  DUNGEON_SOLO_NORMAL = 3,
  DUNGEON_DUO_NORMAL = 4,
  DUNGEON_SOLO_HIGH_ROLLER = 5,
  DUNGEON_DUO_HIGH_ROLLER = 6,
  ARENA_DUO = 7,
  ARENA_TRIO = 8,
  UNRECOGNIZED = -1,
}

export function defineGame_GameTypeFromJSON(object: any): DefineGame_GameType {
  switch (object) {
    case 0:
    case "NONE_MODE":
      return DefineGame_GameType.NONE_MODE;
    case 1:
    case "DUNGEON_TRIO_NORMAL":
      return DefineGame_GameType.DUNGEON_TRIO_NORMAL;
    case 2:
    case "DUNGEON_TRIO_HIGH_ROLLER":
      return DefineGame_GameType.DUNGEON_TRIO_HIGH_ROLLER;
    case 3:
    case "DUNGEON_SOLO_NORMAL":
      return DefineGame_GameType.DUNGEON_SOLO_NORMAL;
    case 4:
    case "DUNGEON_DUO_NORMAL":
      return DefineGame_GameType.DUNGEON_DUO_NORMAL;
    case 5:
    case "DUNGEON_SOLO_HIGH_ROLLER":
      return DefineGame_GameType.DUNGEON_SOLO_HIGH_ROLLER;
    case 6:
    case "DUNGEON_DUO_HIGH_ROLLER":
      return DefineGame_GameType.DUNGEON_DUO_HIGH_ROLLER;
    case 7:
    case "ARENA_DUO":
      return DefineGame_GameType.ARENA_DUO;
    case 8:
    case "ARENA_TRIO":
      return DefineGame_GameType.ARENA_TRIO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineGame_GameType.UNRECOGNIZED;
  }
}

export function defineGame_GameTypeToJSON(object: DefineGame_GameType): string {
  switch (object) {
    case DefineGame_GameType.NONE_MODE:
      return "NONE_MODE";
    case DefineGame_GameType.DUNGEON_TRIO_NORMAL:
      return "DUNGEON_TRIO_NORMAL";
    case DefineGame_GameType.DUNGEON_TRIO_HIGH_ROLLER:
      return "DUNGEON_TRIO_HIGH_ROLLER";
    case DefineGame_GameType.DUNGEON_SOLO_NORMAL:
      return "DUNGEON_SOLO_NORMAL";
    case DefineGame_GameType.DUNGEON_DUO_NORMAL:
      return "DUNGEON_DUO_NORMAL";
    case DefineGame_GameType.DUNGEON_SOLO_HIGH_ROLLER:
      return "DUNGEON_SOLO_HIGH_ROLLER";
    case DefineGame_GameType.DUNGEON_DUO_HIGH_ROLLER:
      return "DUNGEON_DUO_HIGH_ROLLER";
    case DefineGame_GameType.ARENA_DUO:
      return "ARENA_DUO";
    case DefineGame_GameType.ARENA_TRIO:
      return "ARENA_TRIO";
    case DefineGame_GameType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineGame_Floor {
  NONE_FLOOR = 0,
  FLOOR_1F = 1,
  FLOOR_2F = 2,
  FLOOR_3F = 3,
  UNRECOGNIZED = -1,
}

export function defineGame_FloorFromJSON(object: any): DefineGame_Floor {
  switch (object) {
    case 0:
    case "NONE_FLOOR":
      return DefineGame_Floor.NONE_FLOOR;
    case 1:
    case "FLOOR_1F":
      return DefineGame_Floor.FLOOR_1F;
    case 2:
    case "FLOOR_2F":
      return DefineGame_Floor.FLOOR_2F;
    case 3:
    case "FLOOR_3F":
      return DefineGame_Floor.FLOOR_3F;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineGame_Floor.UNRECOGNIZED;
  }
}

export function defineGame_FloorToJSON(object: DefineGame_Floor): string {
  switch (object) {
    case DefineGame_Floor.NONE_FLOOR:
      return "NONE_FLOOR";
    case DefineGame_Floor.FLOOR_1F:
      return "FLOOR_1F";
    case DefineGame_Floor.FLOOR_2F:
      return "FLOOR_2F";
    case DefineGame_Floor.FLOOR_3F:
      return "FLOOR_3F";
    case DefineGame_Floor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineCommon {
}

export enum DefineCommon_MetaLocation {
  NONE = 0,
  INGAME = 1,
  PLAY = 2,
  LEADERBOARD = 3,
  LOADOUT = 4,
  MERCHANT = 5,
  TRADE = 6,
  CLASS = 7,
  CHARACTER_SELECT = 8,
  OFFLINE = 9,
  CUSTOMIZE = 10,
  SHOP = 11,
  RECRUIT = 12,
  UNRECOGNIZED = -1,
}

export function defineCommon_MetaLocationFromJSON(object: any): DefineCommon_MetaLocation {
  switch (object) {
    case 0:
    case "NONE":
      return DefineCommon_MetaLocation.NONE;
    case 1:
    case "INGAME":
      return DefineCommon_MetaLocation.INGAME;
    case 2:
    case "PLAY":
      return DefineCommon_MetaLocation.PLAY;
    case 3:
    case "LEADERBOARD":
      return DefineCommon_MetaLocation.LEADERBOARD;
    case 4:
    case "LOADOUT":
      return DefineCommon_MetaLocation.LOADOUT;
    case 5:
    case "MERCHANT":
      return DefineCommon_MetaLocation.MERCHANT;
    case 6:
    case "TRADE":
      return DefineCommon_MetaLocation.TRADE;
    case 7:
    case "CLASS":
      return DefineCommon_MetaLocation.CLASS;
    case 8:
    case "CHARACTER_SELECT":
      return DefineCommon_MetaLocation.CHARACTER_SELECT;
    case 9:
    case "OFFLINE":
      return DefineCommon_MetaLocation.OFFLINE;
    case 10:
    case "CUSTOMIZE":
      return DefineCommon_MetaLocation.CUSTOMIZE;
    case 11:
    case "SHOP":
      return DefineCommon_MetaLocation.SHOP;
    case 12:
    case "RECRUIT":
      return DefineCommon_MetaLocation.RECRUIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineCommon_MetaLocation.UNRECOGNIZED;
  }
}

export function defineCommon_MetaLocationToJSON(object: DefineCommon_MetaLocation): string {
  switch (object) {
    case DefineCommon_MetaLocation.NONE:
      return "NONE";
    case DefineCommon_MetaLocation.INGAME:
      return "INGAME";
    case DefineCommon_MetaLocation.PLAY:
      return "PLAY";
    case DefineCommon_MetaLocation.LEADERBOARD:
      return "LEADERBOARD";
    case DefineCommon_MetaLocation.LOADOUT:
      return "LOADOUT";
    case DefineCommon_MetaLocation.MERCHANT:
      return "MERCHANT";
    case DefineCommon_MetaLocation.TRADE:
      return "TRADE";
    case DefineCommon_MetaLocation.CLASS:
      return "CLASS";
    case DefineCommon_MetaLocation.CHARACTER_SELECT:
      return "CHARACTER_SELECT";
    case DefineCommon_MetaLocation.OFFLINE:
      return "OFFLINE";
    case DefineCommon_MetaLocation.CUSTOMIZE:
      return "CUSTOMIZE";
    case DefineCommon_MetaLocation.SHOP:
      return "SHOP";
    case DefineCommon_MetaLocation.RECRUIT:
      return "RECRUIT";
    case DefineCommon_MetaLocation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineCommon_ServerLocation {
  NONE_LOCATION = 0,
  LOCAL = 1,
  QA = 2,
  PLAY_TEST = 3,
  NA = 4,
  UNRECOGNIZED = -1,
}

export function defineCommon_ServerLocationFromJSON(object: any): DefineCommon_ServerLocation {
  switch (object) {
    case 0:
    case "NONE_LOCATION":
      return DefineCommon_ServerLocation.NONE_LOCATION;
    case 1:
    case "LOCAL":
      return DefineCommon_ServerLocation.LOCAL;
    case 2:
    case "QA":
      return DefineCommon_ServerLocation.QA;
    case 3:
    case "PLAY_TEST":
      return DefineCommon_ServerLocation.PLAY_TEST;
    case 4:
    case "NA":
      return DefineCommon_ServerLocation.NA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineCommon_ServerLocation.UNRECOGNIZED;
  }
}

export function defineCommon_ServerLocationToJSON(object: DefineCommon_ServerLocation): string {
  switch (object) {
    case DefineCommon_ServerLocation.NONE_LOCATION:
      return "NONE_LOCATION";
    case DefineCommon_ServerLocation.LOCAL:
      return "LOCAL";
    case DefineCommon_ServerLocation.QA:
      return "QA";
    case DefineCommon_ServerLocation.PLAY_TEST:
      return "PLAY_TEST";
    case DefineCommon_ServerLocation.NA:
      return "NA";
    case DefineCommon_ServerLocation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineClass {
}

export enum DefineClass_Type {
  NONE_TYPE = 0,
  PERK = 1,
  SKILL = 2,
  SPELL = 3,
  MUSIC = 4,
  SHAPE_SHIFT = 5,
  UNRECOGNIZED = -1,
}

export function defineClass_TypeFromJSON(object: any): DefineClass_Type {
  switch (object) {
    case 0:
    case "NONE_TYPE":
      return DefineClass_Type.NONE_TYPE;
    case 1:
    case "PERK":
      return DefineClass_Type.PERK;
    case 2:
    case "SKILL":
      return DefineClass_Type.SKILL;
    case 3:
    case "SPELL":
      return DefineClass_Type.SPELL;
    case 4:
    case "MUSIC":
      return DefineClass_Type.MUSIC;
    case 5:
    case "SHAPE_SHIFT":
      return DefineClass_Type.SHAPE_SHIFT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineClass_Type.UNRECOGNIZED;
  }
}

export function defineClass_TypeToJSON(object: DefineClass_Type): string {
  switch (object) {
    case DefineClass_Type.NONE_TYPE:
      return "NONE_TYPE";
    case DefineClass_Type.PERK:
      return "PERK";
    case DefineClass_Type.SKILL:
      return "SKILL";
    case DefineClass_Type.SPELL:
      return "SPELL";
    case DefineClass_Type.MUSIC:
      return "MUSIC";
    case DefineClass_Type.SHAPE_SHIFT:
      return "SHAPE_SHIFT";
    case DefineClass_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineClass_Move {
  NONE_MOVE = 0,
  EQUIP = 1,
  UN_EQUIP = 2,
  UNRECOGNIZED = -1,
}

export function defineClass_MoveFromJSON(object: any): DefineClass_Move {
  switch (object) {
    case 0:
    case "NONE_MOVE":
      return DefineClass_Move.NONE_MOVE;
    case 1:
    case "EQUIP":
      return DefineClass_Move.EQUIP;
    case 2:
    case "UN_EQUIP":
      return DefineClass_Move.UN_EQUIP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineClass_Move.UNRECOGNIZED;
  }
}

export function defineClass_MoveToJSON(object: DefineClass_Move): string {
  switch (object) {
    case DefineClass_Move.NONE_MOVE:
      return "NONE_MOVE";
    case DefineClass_Move.EQUIP:
      return "EQUIP";
    case DefineClass_Move.UN_EQUIP:
      return "UN_EQUIP";
    case DefineClass_Move.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineChat {
}

export enum DefineChat_Type {
  NONE_TYPE = 0,
  NORMAL = 1,
  WHISPER = 2,
  UNRECOGNIZED = -1,
}

export function defineChat_TypeFromJSON(object: any): DefineChat_Type {
  switch (object) {
    case 0:
    case "NONE_TYPE":
      return DefineChat_Type.NONE_TYPE;
    case 1:
    case "NORMAL":
      return DefineChat_Type.NORMAL;
    case 2:
    case "WHISPER":
      return DefineChat_Type.WHISPER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineChat_Type.UNRECOGNIZED;
  }
}

export function defineChat_TypeToJSON(object: DefineChat_Type): string {
  switch (object) {
    case DefineChat_Type.NONE_TYPE:
      return "NONE_TYPE";
    case DefineChat_Type.NORMAL:
      return "NORMAL";
    case DefineChat_Type.WHISPER:
      return "WHISPER";
    case DefineChat_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineChat_RoomType {
  ROOM_TYPE_WEAPON = 0,
  ROOM_TYPE_ARMOR = 1,
  ROOM_TYPE_UTILITY = 2,
  ROOM_TYPE_ETC = 3,
  UNRECOGNIZED = -1,
}

export function defineChat_RoomTypeFromJSON(object: any): DefineChat_RoomType {
  switch (object) {
    case 0:
    case "ROOM_TYPE_WEAPON":
      return DefineChat_RoomType.ROOM_TYPE_WEAPON;
    case 1:
    case "ROOM_TYPE_ARMOR":
      return DefineChat_RoomType.ROOM_TYPE_ARMOR;
    case 2:
    case "ROOM_TYPE_UTILITY":
      return DefineChat_RoomType.ROOM_TYPE_UTILITY;
    case 3:
    case "ROOM_TYPE_ETC":
      return DefineChat_RoomType.ROOM_TYPE_ETC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineChat_RoomType.UNRECOGNIZED;
  }
}

export function defineChat_RoomTypeToJSON(object: DefineChat_RoomType): string {
  switch (object) {
    case DefineChat_RoomType.ROOM_TYPE_WEAPON:
      return "ROOM_TYPE_WEAPON";
    case DefineChat_RoomType.ROOM_TYPE_ARMOR:
      return "ROOM_TYPE_ARMOR";
    case DefineChat_RoomType.ROOM_TYPE_UTILITY:
      return "ROOM_TYPE_UTILITY";
    case DefineChat_RoomType.ROOM_TYPE_ETC:
      return "ROOM_TYPE_ETC";
    case DefineChat_RoomType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineTrade {
}

export enum DefineTrade_RequirementType {
  NONE_REQUIREMENT_TYPE = 0,
  MINIMUM_LEVEL = 1,
  MINIMUM_REINCARNATION_LEVEL = 2,
  INITIATION_FEE = 3,
  MONTHLY_DUES = 4,
  COST_PER_TRADE = 5,
  UNRECOGNIZED = -1,
}

export function defineTrade_RequirementTypeFromJSON(object: any): DefineTrade_RequirementType {
  switch (object) {
    case 0:
    case "NONE_REQUIREMENT_TYPE":
      return DefineTrade_RequirementType.NONE_REQUIREMENT_TYPE;
    case 1:
    case "MINIMUM_LEVEL":
      return DefineTrade_RequirementType.MINIMUM_LEVEL;
    case 2:
    case "MINIMUM_REINCARNATION_LEVEL":
      return DefineTrade_RequirementType.MINIMUM_REINCARNATION_LEVEL;
    case 3:
    case "INITIATION_FEE":
      return DefineTrade_RequirementType.INITIATION_FEE;
    case 4:
    case "MONTHLY_DUES":
      return DefineTrade_RequirementType.MONTHLY_DUES;
    case 5:
    case "COST_PER_TRADE":
      return DefineTrade_RequirementType.COST_PER_TRADE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineTrade_RequirementType.UNRECOGNIZED;
  }
}

export function defineTrade_RequirementTypeToJSON(object: DefineTrade_RequirementType): string {
  switch (object) {
    case DefineTrade_RequirementType.NONE_REQUIREMENT_TYPE:
      return "NONE_REQUIREMENT_TYPE";
    case DefineTrade_RequirementType.MINIMUM_LEVEL:
      return "MINIMUM_LEVEL";
    case DefineTrade_RequirementType.MINIMUM_REINCARNATION_LEVEL:
      return "MINIMUM_REINCARNATION_LEVEL";
    case DefineTrade_RequirementType.INITIATION_FEE:
      return "INITIATION_FEE";
    case DefineTrade_RequirementType.MONTHLY_DUES:
      return "MONTHLY_DUES";
    case DefineTrade_RequirementType.COST_PER_TRADE:
      return "COST_PER_TRADE";
    case DefineTrade_RequirementType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Operate {
}

export enum Operate_Policy {
  NONE_POLICY = 0,
  POLICY_CHAT_LENGTH_MAX = 1,
  POLICY_TRADE_CHANNEL_CHAT_RESEND_TIME_MS = 2,
  POLICY_TRADE_CHANNEL_CHAT_MAX_LINE = 3,
  POLICY_BLOCK_CHARACTER_MAX_LIMIT = 4,
  POLICY_CHAT_RESEND_MS = 5,
  POLICY_CHAT_MAX_LINE = 6,
  POLICY_HIGH_ROLLER_ENTRANCE_FEE = 7,
  POLICY_MATCH_CANCEL_TIME_MS = 8,
  POLICY_GATHERING_HALL_CHAT_RESEND_MS = 9,
  POLICY_GATHERING_HALL_CHAT_MAX_LINE = 10,
  POLICY_GATHERING_HALL_JOIN_MIN_LEVEL = 11,
  POLICY_HIGH_ROLLER_ENTRANCE_MIN_LEVEL = 12,
  POLICY_GOBLIN_HIGH_ROLLER_ENTRANCE_FEE = 13,
  POLICY_GOBLIN_HIGH_ROLLER_ENTRANCE_MIN_LEVEL = 14,
  POLICY_MAX_RANK_BATCH_GAME_COUNT = 15,
  POLICY_ITEM_RARITY_TYPE_NORMAL_VALUE = 16,
  POLICY_ITEM_RARITY_TYPE_HIGH_ROLLER_VALUE = 17,
  POLICY_ITEM_RARITY_TYPE_RUINS_VALUE = 18,
  POLICY_ITEM_RARITY_TYPE_GOBLIN_VALUE = 19,
  POLICY_ITEM_RARITY_TYPE_GOBLIN_HIGH_ROLLER_VALUE = 20,
  POLICY_LEADERBOARD_SCORE_FRACTIONAL_DIGITS = 21,
  POLICY_RUINS_HIGH_ROLLER_ENTRANCE_FEE = 22,
  POLICY_RUINS_HIGH_ROLLER_ENTRANCE_MIN_LEVEL = 23,
  POLICY_ITEM_RARITY_TYPE_RUINS_HIGH_ROLLER_VALUE = 24,
  POLICY_MARKETPLACE_FIXED_LISTING_FEE = 25,
  POLICY_MARKETPLACE_VARIABLE_LISTING_FEE_RATE = 26,
  POLICY_MARKETPLACE_LISTING_EXPIRED_TIME = 27,
  POLICY_MARKETPLACE_TRANSFER_EXPIRED_TIME = 28,
  POLICY_MARKETPLACE_LISTING_LIMIT_COUNT = 29,
  POLICY_MARKETPLACE_MAXIMUM_SALE_AMOUNT = 30,
  POLICY_MARKETPLACE_CLOSED = 31,
  POLICY_DEATH_CAM_ON_OFF = 32,
  POLICY_ENABLE_CLOTHPHYSICS = 33,
  POLICY_ENABLE_CLOTHPHYSICS_USE_TASKTHREAD = 34,
  POLICY_WAITFOR_PARALLEL_CLOTHTASK = 35,
  POLICY_MINDWIPE_PRICE = 36,
  POLICY_ENABLE_SHIPPING_CLIENT_LOG = 37,
  POLICY_SET_SHIPPING_CLIENT_LOG_LEVEL = 38,
  POLICY_OVERRIDE_ANTIALIASING = 39,
  POLICY_ONLY_LOOTED_TRADE_ON = 40,
  POLICY_ENABLE_UPDATE_ENGINE_VARIABLES = 41,
  POLICY_KNIGHT_PROGRAM_LINK_PLAY_TIME_LIMIT = 42,
  POLICY_ACCOUNT_STATUS_UPGRADE = 43,
  POLICY_UPGRADE_CREATION_HIGH_ROLLER_CHECK_SEC = 45,
  POLICY_UPGRADE_CREATION_TRADE_CHECK_SEC = 46,
  POLICY_UPGRADE_CREATION_LISTING_MARKETPLACE_SEC = 47,
  POLICY_REPORT_IN_GAME_ON_OFF = 48,
  POLICY_REPORT_BAN_APPEAL_TICKET_SEND_ON_OFF = 49,
  POLICY_TRADE_CHAT_BAN_MIN = 50,
  POLICY_PREVENT_CROWS_HR_MIN_GEAR_SCORE = 51,
  POLICY_PREVENT_CROWS_HR_PARTY_SIZE_LIMIT = 52,
  UNRECOGNIZED = -1,
}

export function operate_PolicyFromJSON(object: any): Operate_Policy {
  switch (object) {
    case 0:
    case "NONE_POLICY":
      return Operate_Policy.NONE_POLICY;
    case 1:
    case "POLICY_CHAT_LENGTH_MAX":
      return Operate_Policy.POLICY_CHAT_LENGTH_MAX;
    case 2:
    case "POLICY_TRADE_CHANNEL_CHAT_RESEND_TIME_MS":
      return Operate_Policy.POLICY_TRADE_CHANNEL_CHAT_RESEND_TIME_MS;
    case 3:
    case "POLICY_TRADE_CHANNEL_CHAT_MAX_LINE":
      return Operate_Policy.POLICY_TRADE_CHANNEL_CHAT_MAX_LINE;
    case 4:
    case "POLICY_BLOCK_CHARACTER_MAX_LIMIT":
      return Operate_Policy.POLICY_BLOCK_CHARACTER_MAX_LIMIT;
    case 5:
    case "POLICY_CHAT_RESEND_MS":
      return Operate_Policy.POLICY_CHAT_RESEND_MS;
    case 6:
    case "POLICY_CHAT_MAX_LINE":
      return Operate_Policy.POLICY_CHAT_MAX_LINE;
    case 7:
    case "POLICY_HIGH_ROLLER_ENTRANCE_FEE":
      return Operate_Policy.POLICY_HIGH_ROLLER_ENTRANCE_FEE;
    case 8:
    case "POLICY_MATCH_CANCEL_TIME_MS":
      return Operate_Policy.POLICY_MATCH_CANCEL_TIME_MS;
    case 9:
    case "POLICY_GATHERING_HALL_CHAT_RESEND_MS":
      return Operate_Policy.POLICY_GATHERING_HALL_CHAT_RESEND_MS;
    case 10:
    case "POLICY_GATHERING_HALL_CHAT_MAX_LINE":
      return Operate_Policy.POLICY_GATHERING_HALL_CHAT_MAX_LINE;
    case 11:
    case "POLICY_GATHERING_HALL_JOIN_MIN_LEVEL":
      return Operate_Policy.POLICY_GATHERING_HALL_JOIN_MIN_LEVEL;
    case 12:
    case "POLICY_HIGH_ROLLER_ENTRANCE_MIN_LEVEL":
      return Operate_Policy.POLICY_HIGH_ROLLER_ENTRANCE_MIN_LEVEL;
    case 13:
    case "POLICY_GOBLIN_HIGH_ROLLER_ENTRANCE_FEE":
      return Operate_Policy.POLICY_GOBLIN_HIGH_ROLLER_ENTRANCE_FEE;
    case 14:
    case "POLICY_GOBLIN_HIGH_ROLLER_ENTRANCE_MIN_LEVEL":
      return Operate_Policy.POLICY_GOBLIN_HIGH_ROLLER_ENTRANCE_MIN_LEVEL;
    case 15:
    case "POLICY_MAX_RANK_BATCH_GAME_COUNT":
      return Operate_Policy.POLICY_MAX_RANK_BATCH_GAME_COUNT;
    case 16:
    case "POLICY_ITEM_RARITY_TYPE_NORMAL_VALUE":
      return Operate_Policy.POLICY_ITEM_RARITY_TYPE_NORMAL_VALUE;
    case 17:
    case "POLICY_ITEM_RARITY_TYPE_HIGH_ROLLER_VALUE":
      return Operate_Policy.POLICY_ITEM_RARITY_TYPE_HIGH_ROLLER_VALUE;
    case 18:
    case "POLICY_ITEM_RARITY_TYPE_RUINS_VALUE":
      return Operate_Policy.POLICY_ITEM_RARITY_TYPE_RUINS_VALUE;
    case 19:
    case "POLICY_ITEM_RARITY_TYPE_GOBLIN_VALUE":
      return Operate_Policy.POLICY_ITEM_RARITY_TYPE_GOBLIN_VALUE;
    case 20:
    case "POLICY_ITEM_RARITY_TYPE_GOBLIN_HIGH_ROLLER_VALUE":
      return Operate_Policy.POLICY_ITEM_RARITY_TYPE_GOBLIN_HIGH_ROLLER_VALUE;
    case 21:
    case "POLICY_LEADERBOARD_SCORE_FRACTIONAL_DIGITS":
      return Operate_Policy.POLICY_LEADERBOARD_SCORE_FRACTIONAL_DIGITS;
    case 22:
    case "POLICY_RUINS_HIGH_ROLLER_ENTRANCE_FEE":
      return Operate_Policy.POLICY_RUINS_HIGH_ROLLER_ENTRANCE_FEE;
    case 23:
    case "POLICY_RUINS_HIGH_ROLLER_ENTRANCE_MIN_LEVEL":
      return Operate_Policy.POLICY_RUINS_HIGH_ROLLER_ENTRANCE_MIN_LEVEL;
    case 24:
    case "POLICY_ITEM_RARITY_TYPE_RUINS_HIGH_ROLLER_VALUE":
      return Operate_Policy.POLICY_ITEM_RARITY_TYPE_RUINS_HIGH_ROLLER_VALUE;
    case 25:
    case "POLICY_MARKETPLACE_FIXED_LISTING_FEE":
      return Operate_Policy.POLICY_MARKETPLACE_FIXED_LISTING_FEE;
    case 26:
    case "POLICY_MARKETPLACE_VARIABLE_LISTING_FEE_RATE":
      return Operate_Policy.POLICY_MARKETPLACE_VARIABLE_LISTING_FEE_RATE;
    case 27:
    case "POLICY_MARKETPLACE_LISTING_EXPIRED_TIME":
      return Operate_Policy.POLICY_MARKETPLACE_LISTING_EXPIRED_TIME;
    case 28:
    case "POLICY_MARKETPLACE_TRANSFER_EXPIRED_TIME":
      return Operate_Policy.POLICY_MARKETPLACE_TRANSFER_EXPIRED_TIME;
    case 29:
    case "POLICY_MARKETPLACE_LISTING_LIMIT_COUNT":
      return Operate_Policy.POLICY_MARKETPLACE_LISTING_LIMIT_COUNT;
    case 30:
    case "POLICY_MARKETPLACE_MAXIMUM_SALE_AMOUNT":
      return Operate_Policy.POLICY_MARKETPLACE_MAXIMUM_SALE_AMOUNT;
    case 31:
    case "POLICY_MARKETPLACE_CLOSED":
      return Operate_Policy.POLICY_MARKETPLACE_CLOSED;
    case 32:
    case "POLICY_DEATH_CAM_ON_OFF":
      return Operate_Policy.POLICY_DEATH_CAM_ON_OFF;
    case 33:
    case "POLICY_ENABLE_CLOTHPHYSICS":
      return Operate_Policy.POLICY_ENABLE_CLOTHPHYSICS;
    case 34:
    case "POLICY_ENABLE_CLOTHPHYSICS_USE_TASKTHREAD":
      return Operate_Policy.POLICY_ENABLE_CLOTHPHYSICS_USE_TASKTHREAD;
    case 35:
    case "POLICY_WAITFOR_PARALLEL_CLOTHTASK":
      return Operate_Policy.POLICY_WAITFOR_PARALLEL_CLOTHTASK;
    case 36:
    case "POLICY_MINDWIPE_PRICE":
      return Operate_Policy.POLICY_MINDWIPE_PRICE;
    case 37:
    case "POLICY_ENABLE_SHIPPING_CLIENT_LOG":
      return Operate_Policy.POLICY_ENABLE_SHIPPING_CLIENT_LOG;
    case 38:
    case "POLICY_SET_SHIPPING_CLIENT_LOG_LEVEL":
      return Operate_Policy.POLICY_SET_SHIPPING_CLIENT_LOG_LEVEL;
    case 39:
    case "POLICY_OVERRIDE_ANTIALIASING":
      return Operate_Policy.POLICY_OVERRIDE_ANTIALIASING;
    case 40:
    case "POLICY_ONLY_LOOTED_TRADE_ON":
      return Operate_Policy.POLICY_ONLY_LOOTED_TRADE_ON;
    case 41:
    case "POLICY_ENABLE_UPDATE_ENGINE_VARIABLES":
      return Operate_Policy.POLICY_ENABLE_UPDATE_ENGINE_VARIABLES;
    case 42:
    case "POLICY_KNIGHT_PROGRAM_LINK_PLAY_TIME_LIMIT":
      return Operate_Policy.POLICY_KNIGHT_PROGRAM_LINK_PLAY_TIME_LIMIT;
    case 43:
    case "POLICY_ACCOUNT_STATUS_UPGRADE":
      return Operate_Policy.POLICY_ACCOUNT_STATUS_UPGRADE;
    case 45:
    case "POLICY_UPGRADE_CREATION_HIGH_ROLLER_CHECK_SEC":
      return Operate_Policy.POLICY_UPGRADE_CREATION_HIGH_ROLLER_CHECK_SEC;
    case 46:
    case "POLICY_UPGRADE_CREATION_TRADE_CHECK_SEC":
      return Operate_Policy.POLICY_UPGRADE_CREATION_TRADE_CHECK_SEC;
    case 47:
    case "POLICY_UPGRADE_CREATION_LISTING_MARKETPLACE_SEC":
      return Operate_Policy.POLICY_UPGRADE_CREATION_LISTING_MARKETPLACE_SEC;
    case 48:
    case "POLICY_REPORT_IN_GAME_ON_OFF":
      return Operate_Policy.POLICY_REPORT_IN_GAME_ON_OFF;
    case 49:
    case "POLICY_REPORT_BAN_APPEAL_TICKET_SEND_ON_OFF":
      return Operate_Policy.POLICY_REPORT_BAN_APPEAL_TICKET_SEND_ON_OFF;
    case 50:
    case "POLICY_TRADE_CHAT_BAN_MIN":
      return Operate_Policy.POLICY_TRADE_CHAT_BAN_MIN;
    case 51:
    case "POLICY_PREVENT_CROWS_HR_MIN_GEAR_SCORE":
      return Operate_Policy.POLICY_PREVENT_CROWS_HR_MIN_GEAR_SCORE;
    case 52:
    case "POLICY_PREVENT_CROWS_HR_PARTY_SIZE_LIMIT":
      return Operate_Policy.POLICY_PREVENT_CROWS_HR_PARTY_SIZE_LIMIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Operate_Policy.UNRECOGNIZED;
  }
}

export function operate_PolicyToJSON(object: Operate_Policy): string {
  switch (object) {
    case Operate_Policy.NONE_POLICY:
      return "NONE_POLICY";
    case Operate_Policy.POLICY_CHAT_LENGTH_MAX:
      return "POLICY_CHAT_LENGTH_MAX";
    case Operate_Policy.POLICY_TRADE_CHANNEL_CHAT_RESEND_TIME_MS:
      return "POLICY_TRADE_CHANNEL_CHAT_RESEND_TIME_MS";
    case Operate_Policy.POLICY_TRADE_CHANNEL_CHAT_MAX_LINE:
      return "POLICY_TRADE_CHANNEL_CHAT_MAX_LINE";
    case Operate_Policy.POLICY_BLOCK_CHARACTER_MAX_LIMIT:
      return "POLICY_BLOCK_CHARACTER_MAX_LIMIT";
    case Operate_Policy.POLICY_CHAT_RESEND_MS:
      return "POLICY_CHAT_RESEND_MS";
    case Operate_Policy.POLICY_CHAT_MAX_LINE:
      return "POLICY_CHAT_MAX_LINE";
    case Operate_Policy.POLICY_HIGH_ROLLER_ENTRANCE_FEE:
      return "POLICY_HIGH_ROLLER_ENTRANCE_FEE";
    case Operate_Policy.POLICY_MATCH_CANCEL_TIME_MS:
      return "POLICY_MATCH_CANCEL_TIME_MS";
    case Operate_Policy.POLICY_GATHERING_HALL_CHAT_RESEND_MS:
      return "POLICY_GATHERING_HALL_CHAT_RESEND_MS";
    case Operate_Policy.POLICY_GATHERING_HALL_CHAT_MAX_LINE:
      return "POLICY_GATHERING_HALL_CHAT_MAX_LINE";
    case Operate_Policy.POLICY_GATHERING_HALL_JOIN_MIN_LEVEL:
      return "POLICY_GATHERING_HALL_JOIN_MIN_LEVEL";
    case Operate_Policy.POLICY_HIGH_ROLLER_ENTRANCE_MIN_LEVEL:
      return "POLICY_HIGH_ROLLER_ENTRANCE_MIN_LEVEL";
    case Operate_Policy.POLICY_GOBLIN_HIGH_ROLLER_ENTRANCE_FEE:
      return "POLICY_GOBLIN_HIGH_ROLLER_ENTRANCE_FEE";
    case Operate_Policy.POLICY_GOBLIN_HIGH_ROLLER_ENTRANCE_MIN_LEVEL:
      return "POLICY_GOBLIN_HIGH_ROLLER_ENTRANCE_MIN_LEVEL";
    case Operate_Policy.POLICY_MAX_RANK_BATCH_GAME_COUNT:
      return "POLICY_MAX_RANK_BATCH_GAME_COUNT";
    case Operate_Policy.POLICY_ITEM_RARITY_TYPE_NORMAL_VALUE:
      return "POLICY_ITEM_RARITY_TYPE_NORMAL_VALUE";
    case Operate_Policy.POLICY_ITEM_RARITY_TYPE_HIGH_ROLLER_VALUE:
      return "POLICY_ITEM_RARITY_TYPE_HIGH_ROLLER_VALUE";
    case Operate_Policy.POLICY_ITEM_RARITY_TYPE_RUINS_VALUE:
      return "POLICY_ITEM_RARITY_TYPE_RUINS_VALUE";
    case Operate_Policy.POLICY_ITEM_RARITY_TYPE_GOBLIN_VALUE:
      return "POLICY_ITEM_RARITY_TYPE_GOBLIN_VALUE";
    case Operate_Policy.POLICY_ITEM_RARITY_TYPE_GOBLIN_HIGH_ROLLER_VALUE:
      return "POLICY_ITEM_RARITY_TYPE_GOBLIN_HIGH_ROLLER_VALUE";
    case Operate_Policy.POLICY_LEADERBOARD_SCORE_FRACTIONAL_DIGITS:
      return "POLICY_LEADERBOARD_SCORE_FRACTIONAL_DIGITS";
    case Operate_Policy.POLICY_RUINS_HIGH_ROLLER_ENTRANCE_FEE:
      return "POLICY_RUINS_HIGH_ROLLER_ENTRANCE_FEE";
    case Operate_Policy.POLICY_RUINS_HIGH_ROLLER_ENTRANCE_MIN_LEVEL:
      return "POLICY_RUINS_HIGH_ROLLER_ENTRANCE_MIN_LEVEL";
    case Operate_Policy.POLICY_ITEM_RARITY_TYPE_RUINS_HIGH_ROLLER_VALUE:
      return "POLICY_ITEM_RARITY_TYPE_RUINS_HIGH_ROLLER_VALUE";
    case Operate_Policy.POLICY_MARKETPLACE_FIXED_LISTING_FEE:
      return "POLICY_MARKETPLACE_FIXED_LISTING_FEE";
    case Operate_Policy.POLICY_MARKETPLACE_VARIABLE_LISTING_FEE_RATE:
      return "POLICY_MARKETPLACE_VARIABLE_LISTING_FEE_RATE";
    case Operate_Policy.POLICY_MARKETPLACE_LISTING_EXPIRED_TIME:
      return "POLICY_MARKETPLACE_LISTING_EXPIRED_TIME";
    case Operate_Policy.POLICY_MARKETPLACE_TRANSFER_EXPIRED_TIME:
      return "POLICY_MARKETPLACE_TRANSFER_EXPIRED_TIME";
    case Operate_Policy.POLICY_MARKETPLACE_LISTING_LIMIT_COUNT:
      return "POLICY_MARKETPLACE_LISTING_LIMIT_COUNT";
    case Operate_Policy.POLICY_MARKETPLACE_MAXIMUM_SALE_AMOUNT:
      return "POLICY_MARKETPLACE_MAXIMUM_SALE_AMOUNT";
    case Operate_Policy.POLICY_MARKETPLACE_CLOSED:
      return "POLICY_MARKETPLACE_CLOSED";
    case Operate_Policy.POLICY_DEATH_CAM_ON_OFF:
      return "POLICY_DEATH_CAM_ON_OFF";
    case Operate_Policy.POLICY_ENABLE_CLOTHPHYSICS:
      return "POLICY_ENABLE_CLOTHPHYSICS";
    case Operate_Policy.POLICY_ENABLE_CLOTHPHYSICS_USE_TASKTHREAD:
      return "POLICY_ENABLE_CLOTHPHYSICS_USE_TASKTHREAD";
    case Operate_Policy.POLICY_WAITFOR_PARALLEL_CLOTHTASK:
      return "POLICY_WAITFOR_PARALLEL_CLOTHTASK";
    case Operate_Policy.POLICY_MINDWIPE_PRICE:
      return "POLICY_MINDWIPE_PRICE";
    case Operate_Policy.POLICY_ENABLE_SHIPPING_CLIENT_LOG:
      return "POLICY_ENABLE_SHIPPING_CLIENT_LOG";
    case Operate_Policy.POLICY_SET_SHIPPING_CLIENT_LOG_LEVEL:
      return "POLICY_SET_SHIPPING_CLIENT_LOG_LEVEL";
    case Operate_Policy.POLICY_OVERRIDE_ANTIALIASING:
      return "POLICY_OVERRIDE_ANTIALIASING";
    case Operate_Policy.POLICY_ONLY_LOOTED_TRADE_ON:
      return "POLICY_ONLY_LOOTED_TRADE_ON";
    case Operate_Policy.POLICY_ENABLE_UPDATE_ENGINE_VARIABLES:
      return "POLICY_ENABLE_UPDATE_ENGINE_VARIABLES";
    case Operate_Policy.POLICY_KNIGHT_PROGRAM_LINK_PLAY_TIME_LIMIT:
      return "POLICY_KNIGHT_PROGRAM_LINK_PLAY_TIME_LIMIT";
    case Operate_Policy.POLICY_ACCOUNT_STATUS_UPGRADE:
      return "POLICY_ACCOUNT_STATUS_UPGRADE";
    case Operate_Policy.POLICY_UPGRADE_CREATION_HIGH_ROLLER_CHECK_SEC:
      return "POLICY_UPGRADE_CREATION_HIGH_ROLLER_CHECK_SEC";
    case Operate_Policy.POLICY_UPGRADE_CREATION_TRADE_CHECK_SEC:
      return "POLICY_UPGRADE_CREATION_TRADE_CHECK_SEC";
    case Operate_Policy.POLICY_UPGRADE_CREATION_LISTING_MARKETPLACE_SEC:
      return "POLICY_UPGRADE_CREATION_LISTING_MARKETPLACE_SEC";
    case Operate_Policy.POLICY_REPORT_IN_GAME_ON_OFF:
      return "POLICY_REPORT_IN_GAME_ON_OFF";
    case Operate_Policy.POLICY_REPORT_BAN_APPEAL_TICKET_SEND_ON_OFF:
      return "POLICY_REPORT_BAN_APPEAL_TICKET_SEND_ON_OFF";
    case Operate_Policy.POLICY_TRADE_CHAT_BAN_MIN:
      return "POLICY_TRADE_CHAT_BAN_MIN";
    case Operate_Policy.POLICY_PREVENT_CROWS_HR_MIN_GEAR_SCORE:
      return "POLICY_PREVENT_CROWS_HR_MIN_GEAR_SCORE";
    case Operate_Policy.POLICY_PREVENT_CROWS_HR_PARTY_SIZE_LIMIT:
      return "POLICY_PREVENT_CROWS_HR_PARTY_SIZE_LIMIT";
    case Operate_Policy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineHack {
}

export enum DefineHack_Policy {
  NONE_GAME_HACK_POLICY = 0,
  GAME_HACK_POLICY_KICK = 1,
  GAME_HACK_POLICY_BLOCK = 2,
  GAME_HACK_POLICY_KICK_AND_BLOCK = 3,
  UNRECOGNIZED = -1,
}

export function defineHack_PolicyFromJSON(object: any): DefineHack_Policy {
  switch (object) {
    case 0:
    case "NONE_GAME_HACK_POLICY":
      return DefineHack_Policy.NONE_GAME_HACK_POLICY;
    case 1:
    case "GAME_HACK_POLICY_KICK":
      return DefineHack_Policy.GAME_HACK_POLICY_KICK;
    case 2:
    case "GAME_HACK_POLICY_BLOCK":
      return DefineHack_Policy.GAME_HACK_POLICY_BLOCK;
    case 3:
    case "GAME_HACK_POLICY_KICK_AND_BLOCK":
      return DefineHack_Policy.GAME_HACK_POLICY_KICK_AND_BLOCK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineHack_Policy.UNRECOGNIZED;
  }
}

export function defineHack_PolicyToJSON(object: DefineHack_Policy): string {
  switch (object) {
    case DefineHack_Policy.NONE_GAME_HACK_POLICY:
      return "NONE_GAME_HACK_POLICY";
    case DefineHack_Policy.GAME_HACK_POLICY_KICK:
      return "GAME_HACK_POLICY_KICK";
    case DefineHack_Policy.GAME_HACK_POLICY_BLOCK:
      return "GAME_HACK_POLICY_BLOCK";
    case DefineHack_Policy.GAME_HACK_POLICY_KICK_AND_BLOCK:
      return "GAME_HACK_POLICY_KICK_AND_BLOCK";
    case DefineHack_Policy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineHack_banType {
  NONE_BAN_TYPE = 0,
  Cheater = 1,
  InappropriateName = 2,
  Etc = 3,
  RmtUser = 4,
  RmtSpam = 5,
  AbnormalDetection = 6,
  CheaterGroup = 7,
  ExploitAbuser = 8,
  AbnormalScreen = 9,
  Teaming = 10,
  StreamSniping = 11,
  InappropriateChat = 12,
  InappropriateVoip = 13,
  RacistName = 14,
  RacistChat = 15,
  RacistVoip = 16,
  Refund_Abuse = 17,
  AbnormalChat = 18,
  Investigation = 19,
  UNRECOGNIZED = -1,
}

export function defineHack_banTypeFromJSON(object: any): DefineHack_banType {
  switch (object) {
    case 0:
    case "NONE_BAN_TYPE":
      return DefineHack_banType.NONE_BAN_TYPE;
    case 1:
    case "Cheater":
      return DefineHack_banType.Cheater;
    case 2:
    case "InappropriateName":
      return DefineHack_banType.InappropriateName;
    case 3:
    case "Etc":
      return DefineHack_banType.Etc;
    case 4:
    case "RmtUser":
      return DefineHack_banType.RmtUser;
    case 5:
    case "RmtSpam":
      return DefineHack_banType.RmtSpam;
    case 6:
    case "AbnormalDetection":
      return DefineHack_banType.AbnormalDetection;
    case 7:
    case "CheaterGroup":
      return DefineHack_banType.CheaterGroup;
    case 8:
    case "ExploitAbuser":
      return DefineHack_banType.ExploitAbuser;
    case 9:
    case "AbnormalScreen":
      return DefineHack_banType.AbnormalScreen;
    case 10:
    case "Teaming":
      return DefineHack_banType.Teaming;
    case 11:
    case "StreamSniping":
      return DefineHack_banType.StreamSniping;
    case 12:
    case "InappropriateChat":
      return DefineHack_banType.InappropriateChat;
    case 13:
    case "InappropriateVoip":
      return DefineHack_banType.InappropriateVoip;
    case 14:
    case "RacistName":
      return DefineHack_banType.RacistName;
    case 15:
    case "RacistChat":
      return DefineHack_banType.RacistChat;
    case 16:
    case "RacistVoip":
      return DefineHack_banType.RacistVoip;
    case 17:
    case "Refund_Abuse":
      return DefineHack_banType.Refund_Abuse;
    case 18:
    case "AbnormalChat":
      return DefineHack_banType.AbnormalChat;
    case 19:
    case "Investigation":
      return DefineHack_banType.Investigation;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineHack_banType.UNRECOGNIZED;
  }
}

export function defineHack_banTypeToJSON(object: DefineHack_banType): string {
  switch (object) {
    case DefineHack_banType.NONE_BAN_TYPE:
      return "NONE_BAN_TYPE";
    case DefineHack_banType.Cheater:
      return "Cheater";
    case DefineHack_banType.InappropriateName:
      return "InappropriateName";
    case DefineHack_banType.Etc:
      return "Etc";
    case DefineHack_banType.RmtUser:
      return "RmtUser";
    case DefineHack_banType.RmtSpam:
      return "RmtSpam";
    case DefineHack_banType.AbnormalDetection:
      return "AbnormalDetection";
    case DefineHack_banType.CheaterGroup:
      return "CheaterGroup";
    case DefineHack_banType.ExploitAbuser:
      return "ExploitAbuser";
    case DefineHack_banType.AbnormalScreen:
      return "AbnormalScreen";
    case DefineHack_banType.Teaming:
      return "Teaming";
    case DefineHack_banType.StreamSniping:
      return "StreamSniping";
    case DefineHack_banType.InappropriateChat:
      return "InappropriateChat";
    case DefineHack_banType.InappropriateVoip:
      return "InappropriateVoip";
    case DefineHack_banType.RacistName:
      return "RacistName";
    case DefineHack_banType.RacistChat:
      return "RacistChat";
    case DefineHack_banType.RacistVoip:
      return "RacistVoip";
    case DefineHack_banType.Refund_Abuse:
      return "Refund_Abuse";
    case DefineHack_banType.AbnormalChat:
      return "AbnormalChat";
    case DefineHack_banType.Investigation:
      return "Investigation";
    case DefineHack_banType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineReport {
}

export enum DefineReport_Category {
  NONE_CATEGORY = 0,
  CHEATER = 1,
  INAPPROPRIATE_CHARACTER_NAME = 2,
  STREAM_SNIPING = 3,
  DIRTY_CHATTING = 4,
  UNRECOGNIZED = -1,
}

export function defineReport_CategoryFromJSON(object: any): DefineReport_Category {
  switch (object) {
    case 0:
    case "NONE_CATEGORY":
      return DefineReport_Category.NONE_CATEGORY;
    case 1:
    case "CHEATER":
      return DefineReport_Category.CHEATER;
    case 2:
    case "INAPPROPRIATE_CHARACTER_NAME":
      return DefineReport_Category.INAPPROPRIATE_CHARACTER_NAME;
    case 3:
    case "STREAM_SNIPING":
      return DefineReport_Category.STREAM_SNIPING;
    case 4:
    case "DIRTY_CHATTING":
      return DefineReport_Category.DIRTY_CHATTING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineReport_Category.UNRECOGNIZED;
  }
}

export function defineReport_CategoryToJSON(object: DefineReport_Category): string {
  switch (object) {
    case DefineReport_Category.NONE_CATEGORY:
      return "NONE_CATEGORY";
    case DefineReport_Category.CHEATER:
      return "CHEATER";
    case DefineReport_Category.INAPPROPRIATE_CHARACTER_NAME:
      return "INAPPROPRIATE_CHARACTER_NAME";
    case DefineReport_Category.STREAM_SNIPING:
      return "STREAM_SNIPING";
    case DefineReport_Category.DIRTY_CHATTING:
      return "DIRTY_CHATTING";
    case DefineReport_Category.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineLog {
}

export enum DefineLog_Level {
  NONE_LEVEL = 0,
  FATAL = 1,
  ERROR = 2,
  WARNING = 3,
  DISPLAY = 4,
  LOG = 5,
  VERBOSE = 6,
  VERY_VERBOSE = 7,
  UNRECOGNIZED = -1,
}

export function defineLog_LevelFromJSON(object: any): DefineLog_Level {
  switch (object) {
    case 0:
    case "NONE_LEVEL":
      return DefineLog_Level.NONE_LEVEL;
    case 1:
    case "FATAL":
      return DefineLog_Level.FATAL;
    case 2:
    case "ERROR":
      return DefineLog_Level.ERROR;
    case 3:
    case "WARNING":
      return DefineLog_Level.WARNING;
    case 4:
    case "DISPLAY":
      return DefineLog_Level.DISPLAY;
    case 5:
    case "LOG":
      return DefineLog_Level.LOG;
    case 6:
    case "VERBOSE":
      return DefineLog_Level.VERBOSE;
    case 7:
    case "VERY_VERBOSE":
      return DefineLog_Level.VERY_VERBOSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineLog_Level.UNRECOGNIZED;
  }
}

export function defineLog_LevelToJSON(object: DefineLog_Level): string {
  switch (object) {
    case DefineLog_Level.NONE_LEVEL:
      return "NONE_LEVEL";
    case DefineLog_Level.FATAL:
      return "FATAL";
    case DefineLog_Level.ERROR:
      return "ERROR";
    case DefineLog_Level.WARNING:
      return "WARNING";
    case DefineLog_Level.DISPLAY:
      return "DISPLAY";
    case DefineLog_Level.LOG:
      return "LOG";
    case DefineLog_Level.VERBOSE:
      return "VERBOSE";
    case DefineLog_Level.VERY_VERBOSE:
      return "VERY_VERBOSE";
    case DefineLog_Level.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineKarma {
}

export enum DefineKarma_Action {
  NONE_KARMA_ACTION = 0,
  PRAISE = 1,
  PUNISH = 2,
  FORGIVE = 3,
  PUNISH_TEAM_KILLER = 4,
  UNRECOGNIZED = -1,
}

export function defineKarma_ActionFromJSON(object: any): DefineKarma_Action {
  switch (object) {
    case 0:
    case "NONE_KARMA_ACTION":
      return DefineKarma_Action.NONE_KARMA_ACTION;
    case 1:
    case "PRAISE":
      return DefineKarma_Action.PRAISE;
    case 2:
    case "PUNISH":
      return DefineKarma_Action.PUNISH;
    case 3:
    case "FORGIVE":
      return DefineKarma_Action.FORGIVE;
    case 4:
    case "PUNISH_TEAM_KILLER":
      return DefineKarma_Action.PUNISH_TEAM_KILLER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineKarma_Action.UNRECOGNIZED;
  }
}

export function defineKarma_ActionToJSON(object: DefineKarma_Action): string {
  switch (object) {
    case DefineKarma_Action.NONE_KARMA_ACTION:
      return "NONE_KARMA_ACTION";
    case DefineKarma_Action.PRAISE:
      return "PRAISE";
    case DefineKarma_Action.PUNISH:
      return "PUNISH";
    case DefineKarma_Action.FORGIVE:
      return "FORGIVE";
    case DefineKarma_Action.PUNISH_TEAM_KILLER:
      return "PUNISH_TEAM_KILLER";
    case DefineKarma_Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineKarma_Status {
  NONE_KARMA_STATUS = 0,
  NORMAL = 1,
  TEAM_KILLER = 2,
  UNRECOGNIZED = -1,
}

export function defineKarma_StatusFromJSON(object: any): DefineKarma_Status {
  switch (object) {
    case 0:
    case "NONE_KARMA_STATUS":
      return DefineKarma_Status.NONE_KARMA_STATUS;
    case 1:
    case "NORMAL":
      return DefineKarma_Status.NORMAL;
    case 2:
    case "TEAM_KILLER":
      return DefineKarma_Status.TEAM_KILLER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineKarma_Status.UNRECOGNIZED;
  }
}

export function defineKarma_StatusToJSON(object: DefineKarma_Status): string {
  switch (object) {
    case DefineKarma_Status.NONE_KARMA_STATUS:
      return "NONE_KARMA_STATUS";
    case DefineKarma_Status.NORMAL:
      return "NORMAL";
    case DefineKarma_Status.TEAM_KILLER:
      return "TEAM_KILLER";
    case DefineKarma_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineCoupon {
}

export enum DefineCoupon_Type {
  NONE_TYPE = 0,
  MADRINAS = 1,
  UNRECOGNIZED = -1,
}

export function defineCoupon_TypeFromJSON(object: any): DefineCoupon_Type {
  switch (object) {
    case 0:
    case "NONE_TYPE":
      return DefineCoupon_Type.NONE_TYPE;
    case 1:
    case "MADRINAS":
      return DefineCoupon_Type.MADRINAS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineCoupon_Type.UNRECOGNIZED;
  }
}

export function defineCoupon_TypeToJSON(object: DefineCoupon_Type): string {
  switch (object) {
    case DefineCoupon_Type.NONE_TYPE:
      return "NONE_TYPE";
    case DefineCoupon_Type.MADRINAS:
      return "MADRINAS";
    case DefineCoupon_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineShop {
}

export enum DefineShop_Type {
  SHOP_TYPE_NONE = 0,
  CHARACTER_SKIN = 1,
  ITEM_SKIN = 2,
  EMOTE = 3,
  ACTION = 4,
  LOBBY_EMOTE = 5,
  CLASS_PACKAGE = 6,
  ARMOR_SKIN = 7,
  UNRECOGNIZED = -1,
}

export function defineShop_TypeFromJSON(object: any): DefineShop_Type {
  switch (object) {
    case 0:
    case "SHOP_TYPE_NONE":
      return DefineShop_Type.SHOP_TYPE_NONE;
    case 1:
    case "CHARACTER_SKIN":
      return DefineShop_Type.CHARACTER_SKIN;
    case 2:
    case "ITEM_SKIN":
      return DefineShop_Type.ITEM_SKIN;
    case 3:
    case "EMOTE":
      return DefineShop_Type.EMOTE;
    case 4:
    case "ACTION":
      return DefineShop_Type.ACTION;
    case 5:
    case "LOBBY_EMOTE":
      return DefineShop_Type.LOBBY_EMOTE;
    case 6:
    case "CLASS_PACKAGE":
      return DefineShop_Type.CLASS_PACKAGE;
    case 7:
    case "ARMOR_SKIN":
      return DefineShop_Type.ARMOR_SKIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineShop_Type.UNRECOGNIZED;
  }
}

export function defineShop_TypeToJSON(object: DefineShop_Type): string {
  switch (object) {
    case DefineShop_Type.SHOP_TYPE_NONE:
      return "SHOP_TYPE_NONE";
    case DefineShop_Type.CHARACTER_SKIN:
      return "CHARACTER_SKIN";
    case DefineShop_Type.ITEM_SKIN:
      return "ITEM_SKIN";
    case DefineShop_Type.EMOTE:
      return "EMOTE";
    case DefineShop_Type.ACTION:
      return "ACTION";
    case DefineShop_Type.LOBBY_EMOTE:
      return "LOBBY_EMOTE";
    case DefineShop_Type.CLASS_PACKAGE:
      return "CLASS_PACKAGE";
    case DefineShop_Type.ARMOR_SKIN:
      return "ARMOR_SKIN";
    case DefineShop_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineShop_PaymentMethod {
  PAYMENT_NONE = 0,
  BLUE_STONE_SHARD = 1,
  RED_STONE_SHARD = 2,
  UNRECOGNIZED = -1,
}

export function defineShop_PaymentMethodFromJSON(object: any): DefineShop_PaymentMethod {
  switch (object) {
    case 0:
    case "PAYMENT_NONE":
      return DefineShop_PaymentMethod.PAYMENT_NONE;
    case 1:
    case "BLUE_STONE_SHARD":
      return DefineShop_PaymentMethod.BLUE_STONE_SHARD;
    case 2:
    case "RED_STONE_SHARD":
      return DefineShop_PaymentMethod.RED_STONE_SHARD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineShop_PaymentMethod.UNRECOGNIZED;
  }
}

export function defineShop_PaymentMethodToJSON(object: DefineShop_PaymentMethod): string {
  switch (object) {
    case DefineShop_PaymentMethod.PAYMENT_NONE:
      return "PAYMENT_NONE";
    case DefineShop_PaymentMethod.BLUE_STONE_SHARD:
      return "BLUE_STONE_SHARD";
    case DefineShop_PaymentMethod.RED_STONE_SHARD:
      return "RED_STONE_SHARD";
    case DefineShop_PaymentMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineShop_SalesChannelType {
  CHANNEL_NONE = 0,
  CHANNEL_SHOP = 1,
  CHANNEL_FOUNDERS_PACK = 2,
  UNRECOGNIZED = -1,
}

export function defineShop_SalesChannelTypeFromJSON(object: any): DefineShop_SalesChannelType {
  switch (object) {
    case 0:
    case "CHANNEL_NONE":
      return DefineShop_SalesChannelType.CHANNEL_NONE;
    case 1:
    case "CHANNEL_SHOP":
      return DefineShop_SalesChannelType.CHANNEL_SHOP;
    case 2:
    case "CHANNEL_FOUNDERS_PACK":
      return DefineShop_SalesChannelType.CHANNEL_FOUNDERS_PACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineShop_SalesChannelType.UNRECOGNIZED;
  }
}

export function defineShop_SalesChannelTypeToJSON(object: DefineShop_SalesChannelType): string {
  switch (object) {
    case DefineShop_SalesChannelType.CHANNEL_NONE:
      return "CHANNEL_NONE";
    case DefineShop_SalesChannelType.CHANNEL_SHOP:
      return "CHANNEL_SHOP";
    case DefineShop_SalesChannelType.CHANNEL_FOUNDERS_PACK:
      return "CHANNEL_FOUNDERS_PACK";
    case DefineShop_SalesChannelType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefineShop_ChangeNickNameType {
  ACCOUNT_NAME = 0,
  UNRECOGNIZED = -1,
}

export function defineShop_ChangeNickNameTypeFromJSON(object: any): DefineShop_ChangeNickNameType {
  switch (object) {
    case 0:
    case "ACCOUNT_NAME":
      return DefineShop_ChangeNickNameType.ACCOUNT_NAME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineShop_ChangeNickNameType.UNRECOGNIZED;
  }
}

export function defineShop_ChangeNickNameTypeToJSON(object: DefineShop_ChangeNickNameType): string {
  switch (object) {
    case DefineShop_ChangeNickNameType.ACCOUNT_NAME:
      return "ACCOUNT_NAME";
    case DefineShop_ChangeNickNameType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DefineReward {
}

export enum DefineReward_RewardType {
  NONE_TYPE = 0,
  CharacterSkin = 1,
  ItemSkin = 2,
  Emote = 3,
  Action = 4,
  LobbyEmote = 5,
  ClassPackage = 6,
  Item = 7,
  Exp = 8,
  Affinity = 9,
  Stash = 10,
  ArmorSkin = 11,
  UNRECOGNIZED = -1,
}

export function defineReward_RewardTypeFromJSON(object: any): DefineReward_RewardType {
  switch (object) {
    case 0:
    case "NONE_TYPE":
      return DefineReward_RewardType.NONE_TYPE;
    case 1:
    case "CharacterSkin":
      return DefineReward_RewardType.CharacterSkin;
    case 2:
    case "ItemSkin":
      return DefineReward_RewardType.ItemSkin;
    case 3:
    case "Emote":
      return DefineReward_RewardType.Emote;
    case 4:
    case "Action":
      return DefineReward_RewardType.Action;
    case 5:
    case "LobbyEmote":
      return DefineReward_RewardType.LobbyEmote;
    case 6:
    case "ClassPackage":
      return DefineReward_RewardType.ClassPackage;
    case 7:
    case "Item":
      return DefineReward_RewardType.Item;
    case 8:
    case "Exp":
      return DefineReward_RewardType.Exp;
    case 9:
    case "Affinity":
      return DefineReward_RewardType.Affinity;
    case 10:
    case "Stash":
      return DefineReward_RewardType.Stash;
    case 11:
    case "ArmorSkin":
      return DefineReward_RewardType.ArmorSkin;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefineReward_RewardType.UNRECOGNIZED;
  }
}

export function defineReward_RewardTypeToJSON(object: DefineReward_RewardType): string {
  switch (object) {
    case DefineReward_RewardType.NONE_TYPE:
      return "NONE_TYPE";
    case DefineReward_RewardType.CharacterSkin:
      return "CharacterSkin";
    case DefineReward_RewardType.ItemSkin:
      return "ItemSkin";
    case DefineReward_RewardType.Emote:
      return "Emote";
    case DefineReward_RewardType.Action:
      return "Action";
    case DefineReward_RewardType.LobbyEmote:
      return "LobbyEmote";
    case DefineReward_RewardType.ClassPackage:
      return "ClassPackage";
    case DefineReward_RewardType.Item:
      return "Item";
    case DefineReward_RewardType.Exp:
      return "Exp";
    case DefineReward_RewardType.Affinity:
      return "Affinity";
    case DefineReward_RewardType.Stash:
      return "Stash";
    case DefineReward_RewardType.ArmorSkin:
      return "ArmorSkin";
    case DefineReward_RewardType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseDefineAccount(): DefineAccount {
  return {};
}

export const DefineAccount = {
  encode(_: DefineAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineAccount();
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

  fromJSON(_: any): DefineAccount {
    return {};
  },

  toJSON(_: DefineAccount): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineAccount>, I>>(base?: I): DefineAccount {
    return DefineAccount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineAccount>, I>>(_: I): DefineAccount {
    const message = createBaseDefineAccount();
    return message;
  },
};

function createBaseDefineCharacter(): DefineCharacter {
  return {};
}

export const DefineCharacter = {
  encode(_: DefineCharacter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineCharacter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineCharacter();
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

  fromJSON(_: any): DefineCharacter {
    return {};
  },

  toJSON(_: DefineCharacter): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineCharacter>, I>>(base?: I): DefineCharacter {
    return DefineCharacter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineCharacter>, I>>(_: I): DefineCharacter {
    const message = createBaseDefineCharacter();
    return message;
  },
};

function createBaseDefineParty(): DefineParty {
  return {};
}

export const DefineParty = {
  encode(_: DefineParty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineParty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineParty();
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

  fromJSON(_: any): DefineParty {
    return {};
  },

  toJSON(_: DefineParty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineParty>, I>>(base?: I): DefineParty {
    return DefineParty.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineParty>, I>>(_: I): DefineParty {
    const message = createBaseDefineParty();
    return message;
  },
};

function createBaseDefineItem(): DefineItem {
  return {};
}

export const DefineItem = {
  encode(_: DefineItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineItem();
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

  fromJSON(_: any): DefineItem {
    return {};
  },

  toJSON(_: DefineItem): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineItem>, I>>(base?: I): DefineItem {
    return DefineItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineItem>, I>>(_: I): DefineItem {
    const message = createBaseDefineItem();
    return message;
  },
};

function createBaseDefineEquipment(): DefineEquipment {
  return {};
}

export const DefineEquipment = {
  encode(_: DefineEquipment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineEquipment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineEquipment();
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

  fromJSON(_: any): DefineEquipment {
    return {};
  },

  toJSON(_: DefineEquipment): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineEquipment>, I>>(base?: I): DefineEquipment {
    return DefineEquipment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineEquipment>, I>>(_: I): DefineEquipment {
    const message = createBaseDefineEquipment();
    return message;
  },
};

function createBaseDefineMessage(): DefineMessage {
  return {};
}

export const DefineMessage = {
  encode(_: DefineMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineMessage();
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

  fromJSON(_: any): DefineMessage {
    return {};
  },

  toJSON(_: DefineMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineMessage>, I>>(base?: I): DefineMessage {
    return DefineMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineMessage>, I>>(_: I): DefineMessage {
    const message = createBaseDefineMessage();
    return message;
  },
};

function createBaseDefineMatch(): DefineMatch {
  return {};
}

export const DefineMatch = {
  encode(_: DefineMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineMatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineMatch();
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

  fromJSON(_: any): DefineMatch {
    return {};
  },

  toJSON(_: DefineMatch): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineMatch>, I>>(base?: I): DefineMatch {
    return DefineMatch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineMatch>, I>>(_: I): DefineMatch {
    const message = createBaseDefineMatch();
    return message;
  },
};

function createBaseDefineStat(): DefineStat {
  return {};
}

export const DefineStat = {
  encode(_: DefineStat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineStat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineStat();
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

  fromJSON(_: any): DefineStat {
    return {};
  },

  toJSON(_: DefineStat): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineStat>, I>>(base?: I): DefineStat {
    return DefineStat.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineStat>, I>>(_: I): DefineStat {
    const message = createBaseDefineStat();
    return message;
  },
};

function createBaseDefineGame(): DefineGame {
  return {};
}

export const DefineGame = {
  encode(_: DefineGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineGame();
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

  fromJSON(_: any): DefineGame {
    return {};
  },

  toJSON(_: DefineGame): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineGame>, I>>(base?: I): DefineGame {
    return DefineGame.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineGame>, I>>(_: I): DefineGame {
    const message = createBaseDefineGame();
    return message;
  },
};

function createBaseDefineCommon(): DefineCommon {
  return {};
}

export const DefineCommon = {
  encode(_: DefineCommon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineCommon {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineCommon();
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

  fromJSON(_: any): DefineCommon {
    return {};
  },

  toJSON(_: DefineCommon): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineCommon>, I>>(base?: I): DefineCommon {
    return DefineCommon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineCommon>, I>>(_: I): DefineCommon {
    const message = createBaseDefineCommon();
    return message;
  },
};

function createBaseDefineClass(): DefineClass {
  return {};
}

export const DefineClass = {
  encode(_: DefineClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineClass {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineClass();
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

  fromJSON(_: any): DefineClass {
    return {};
  },

  toJSON(_: DefineClass): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineClass>, I>>(base?: I): DefineClass {
    return DefineClass.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineClass>, I>>(_: I): DefineClass {
    const message = createBaseDefineClass();
    return message;
  },
};

function createBaseDefineChat(): DefineChat {
  return {};
}

export const DefineChat = {
  encode(_: DefineChat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineChat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineChat();
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

  fromJSON(_: any): DefineChat {
    return {};
  },

  toJSON(_: DefineChat): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineChat>, I>>(base?: I): DefineChat {
    return DefineChat.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineChat>, I>>(_: I): DefineChat {
    const message = createBaseDefineChat();
    return message;
  },
};

function createBaseDefineTrade(): DefineTrade {
  return {};
}

export const DefineTrade = {
  encode(_: DefineTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineTrade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineTrade();
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

  fromJSON(_: any): DefineTrade {
    return {};
  },

  toJSON(_: DefineTrade): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineTrade>, I>>(base?: I): DefineTrade {
    return DefineTrade.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineTrade>, I>>(_: I): DefineTrade {
    const message = createBaseDefineTrade();
    return message;
  },
};

function createBaseOperate(): Operate {
  return {};
}

export const Operate = {
  encode(_: Operate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Operate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperate();
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

  fromJSON(_: any): Operate {
    return {};
  },

  toJSON(_: Operate): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Operate>, I>>(base?: I): Operate {
    return Operate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Operate>, I>>(_: I): Operate {
    const message = createBaseOperate();
    return message;
  },
};

function createBaseDefineHack(): DefineHack {
  return {};
}

export const DefineHack = {
  encode(_: DefineHack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineHack {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineHack();
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

  fromJSON(_: any): DefineHack {
    return {};
  },

  toJSON(_: DefineHack): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineHack>, I>>(base?: I): DefineHack {
    return DefineHack.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineHack>, I>>(_: I): DefineHack {
    const message = createBaseDefineHack();
    return message;
  },
};

function createBaseDefineReport(): DefineReport {
  return {};
}

export const DefineReport = {
  encode(_: DefineReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineReport();
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

  fromJSON(_: any): DefineReport {
    return {};
  },

  toJSON(_: DefineReport): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineReport>, I>>(base?: I): DefineReport {
    return DefineReport.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineReport>, I>>(_: I): DefineReport {
    const message = createBaseDefineReport();
    return message;
  },
};

function createBaseDefineLog(): DefineLog {
  return {};
}

export const DefineLog = {
  encode(_: DefineLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineLog();
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

  fromJSON(_: any): DefineLog {
    return {};
  },

  toJSON(_: DefineLog): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineLog>, I>>(base?: I): DefineLog {
    return DefineLog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineLog>, I>>(_: I): DefineLog {
    const message = createBaseDefineLog();
    return message;
  },
};

function createBaseDefineKarma(): DefineKarma {
  return {};
}

export const DefineKarma = {
  encode(_: DefineKarma, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineKarma {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineKarma();
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

  fromJSON(_: any): DefineKarma {
    return {};
  },

  toJSON(_: DefineKarma): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineKarma>, I>>(base?: I): DefineKarma {
    return DefineKarma.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineKarma>, I>>(_: I): DefineKarma {
    const message = createBaseDefineKarma();
    return message;
  },
};

function createBaseDefineCoupon(): DefineCoupon {
  return {};
}

export const DefineCoupon = {
  encode(_: DefineCoupon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineCoupon {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineCoupon();
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

  fromJSON(_: any): DefineCoupon {
    return {};
  },

  toJSON(_: DefineCoupon): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineCoupon>, I>>(base?: I): DefineCoupon {
    return DefineCoupon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineCoupon>, I>>(_: I): DefineCoupon {
    const message = createBaseDefineCoupon();
    return message;
  },
};

function createBaseDefineShop(): DefineShop {
  return {};
}

export const DefineShop = {
  encode(_: DefineShop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineShop {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineShop();
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

  fromJSON(_: any): DefineShop {
    return {};
  },

  toJSON(_: DefineShop): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineShop>, I>>(base?: I): DefineShop {
    return DefineShop.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineShop>, I>>(_: I): DefineShop {
    const message = createBaseDefineShop();
    return message;
  },
};

function createBaseDefineReward(): DefineReward {
  return {};
}

export const DefineReward = {
  encode(_: DefineReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefineReward {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefineReward();
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

  fromJSON(_: any): DefineReward {
    return {};
  },

  toJSON(_: DefineReward): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DefineReward>, I>>(base?: I): DefineReward {
    return DefineReward.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefineReward>, I>>(_: I): DefineReward {
    const message = createBaseDefineReward();
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
