/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DC.Packet";

export interface SItemMeta {
  SoulHeartAccountId: string;
  SoulHeartPartyId: string;
  SoulHeartNickNameOrigin: string;
  SoulHeartNickNameStreaming: string;
  AvailableValue: number;
}

export interface SDownItem {
  itemUniqueId: number;
  itemId: string;
  itemCount: number;
  inventoryId: number;
  slotId: number;
  bEquipped: number;
  itemAmmoCount: number;
  itemContentsCount: number;
  metaItem: SItemMeta | undefined;
  primaryPropertyArray: SItemProperty[];
  secondaryPropertyArray: SItemProperty[];
}

export interface SItem {
  itemUniqueId: number;
  itemId: string;
  itemCount: number;
  inventoryId: number;
  slotId: number;
  itemAmmoCount: number;
  itemContentsCount: number;
  primaryPropertyArray: SItemProperty[];
  secondaryPropertyArray: SItemProperty[];
}

export interface SItemProperty {
  propertyTypeId: string;
  propertyValue: number;
}

export interface SItems {
  item: SItem[];
}

export interface SPerk {
  index: number;
  perkId: string;
}

export interface SSkill {
  index: number;
  skillId: string;
}

export interface SSpell {
  slotIndex: number;
  sequenceIndex: number;
  spellId: string;
}

export interface scustomizeCharacter {
  customizeCharacterId: string;
  isEquip: number;
  isNew: number;
}

export interface scustomizeItem {
  customizeItemId: string;
  isEquip: number;
  isNew: number;
}

export interface SEMOTE {
  emoteId: string;
  equipSlotIndex: number;
  isNew: number;
}

export interface scustomizeAction {
  customizeActionId: string;
  isEquip: number;
  isNew: number;
}

export interface scustomizeLobbyEmote {
  lobbyEmoteId: string;
  equipSlotIndex: number;
  isNew: number;
}

function createBaseSItemMeta(): SItemMeta {
  return {
    SoulHeartAccountId: "",
    SoulHeartPartyId: "",
    SoulHeartNickNameOrigin: "",
    SoulHeartNickNameStreaming: "",
    AvailableValue: 0,
  };
}

export const SItemMeta = {
  encode(message: SItemMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.SoulHeartAccountId !== "") {
      writer.uint32(10).string(message.SoulHeartAccountId);
    }
    if (message.SoulHeartPartyId !== "") {
      writer.uint32(18).string(message.SoulHeartPartyId);
    }
    if (message.SoulHeartNickNameOrigin !== "") {
      writer.uint32(26).string(message.SoulHeartNickNameOrigin);
    }
    if (message.SoulHeartNickNameStreaming !== "") {
      writer.uint32(34).string(message.SoulHeartNickNameStreaming);
    }
    if (message.AvailableValue !== 0) {
      writer.uint32(40).uint32(message.AvailableValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SItemMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSItemMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.SoulHeartAccountId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.SoulHeartPartyId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.SoulHeartNickNameOrigin = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.SoulHeartNickNameStreaming = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.AvailableValue = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SItemMeta {
    return {
      SoulHeartAccountId: isSet(object.SoulHeartAccountId) ? String(object.SoulHeartAccountId) : "",
      SoulHeartPartyId: isSet(object.SoulHeartPartyId) ? String(object.SoulHeartPartyId) : "",
      SoulHeartNickNameOrigin: isSet(object.SoulHeartNickNameOrigin) ? String(object.SoulHeartNickNameOrigin) : "",
      SoulHeartNickNameStreaming: isSet(object.SoulHeartNickNameStreaming)
        ? String(object.SoulHeartNickNameStreaming)
        : "",
      AvailableValue: isSet(object.AvailableValue) ? Number(object.AvailableValue) : 0,
    };
  },

  toJSON(message: SItemMeta): unknown {
    const obj: any = {};
    message.SoulHeartAccountId !== undefined && (obj.SoulHeartAccountId = message.SoulHeartAccountId);
    message.SoulHeartPartyId !== undefined && (obj.SoulHeartPartyId = message.SoulHeartPartyId);
    message.SoulHeartNickNameOrigin !== undefined && (obj.SoulHeartNickNameOrigin = message.SoulHeartNickNameOrigin);
    message.SoulHeartNickNameStreaming !== undefined &&
      (obj.SoulHeartNickNameStreaming = message.SoulHeartNickNameStreaming);
    message.AvailableValue !== undefined && (obj.AvailableValue = Math.round(message.AvailableValue));
    return obj;
  },

  create<I extends Exact<DeepPartial<SItemMeta>, I>>(base?: I): SItemMeta {
    return SItemMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SItemMeta>, I>>(object: I): SItemMeta {
    const message = createBaseSItemMeta();
    message.SoulHeartAccountId = object.SoulHeartAccountId ?? "";
    message.SoulHeartPartyId = object.SoulHeartPartyId ?? "";
    message.SoulHeartNickNameOrigin = object.SoulHeartNickNameOrigin ?? "";
    message.SoulHeartNickNameStreaming = object.SoulHeartNickNameStreaming ?? "";
    message.AvailableValue = object.AvailableValue ?? 0;
    return message;
  },
};

function createBaseSDownItem(): SDownItem {
  return {
    itemUniqueId: 0,
    itemId: "",
    itemCount: 0,
    inventoryId: 0,
    slotId: 0,
    bEquipped: 0,
    itemAmmoCount: 0,
    itemContentsCount: 0,
    metaItem: undefined,
    primaryPropertyArray: [],
    secondaryPropertyArray: [],
  };
}

export const SDownItem = {
  encode(message: SDownItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemUniqueId !== 0) {
      writer.uint32(8).uint64(message.itemUniqueId);
    }
    if (message.itemId !== "") {
      writer.uint32(18).string(message.itemId);
    }
    if (message.itemCount !== 0) {
      writer.uint32(24).uint32(message.itemCount);
    }
    if (message.inventoryId !== 0) {
      writer.uint32(32).uint32(message.inventoryId);
    }
    if (message.slotId !== 0) {
      writer.uint32(40).uint32(message.slotId);
    }
    if (message.bEquipped !== 0) {
      writer.uint32(48).uint32(message.bEquipped);
    }
    if (message.itemAmmoCount !== 0) {
      writer.uint32(56).uint32(message.itemAmmoCount);
    }
    if (message.itemContentsCount !== 0) {
      writer.uint32(64).uint32(message.itemContentsCount);
    }
    if (message.metaItem !== undefined) {
      SItemMeta.encode(message.metaItem, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.primaryPropertyArray) {
      SItemProperty.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.secondaryPropertyArray) {
      SItemProperty.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SDownItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSDownItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.itemId = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemCount = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.inventoryId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.slotId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.bEquipped = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.itemAmmoCount = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.itemContentsCount = reader.uint32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.metaItem = SItemMeta.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.primaryPropertyArray.push(SItemProperty.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.secondaryPropertyArray.push(SItemProperty.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SDownItem {
    return {
      itemUniqueId: isSet(object.itemUniqueId) ? Number(object.itemUniqueId) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
      itemCount: isSet(object.itemCount) ? Number(object.itemCount) : 0,
      inventoryId: isSet(object.inventoryId) ? Number(object.inventoryId) : 0,
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
      bEquipped: isSet(object.bEquipped) ? Number(object.bEquipped) : 0,
      itemAmmoCount: isSet(object.itemAmmoCount) ? Number(object.itemAmmoCount) : 0,
      itemContentsCount: isSet(object.itemContentsCount) ? Number(object.itemContentsCount) : 0,
      metaItem: isSet(object.metaItem) ? SItemMeta.fromJSON(object.metaItem) : undefined,
      primaryPropertyArray: Array.isArray(object?.primaryPropertyArray)
        ? object.primaryPropertyArray.map((e: any) => SItemProperty.fromJSON(e))
        : [],
      secondaryPropertyArray: Array.isArray(object?.secondaryPropertyArray)
        ? object.secondaryPropertyArray.map((e: any) => SItemProperty.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SDownItem): unknown {
    const obj: any = {};
    message.itemUniqueId !== undefined && (obj.itemUniqueId = Math.round(message.itemUniqueId));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.itemCount !== undefined && (obj.itemCount = Math.round(message.itemCount));
    message.inventoryId !== undefined && (obj.inventoryId = Math.round(message.inventoryId));
    message.slotId !== undefined && (obj.slotId = Math.round(message.slotId));
    message.bEquipped !== undefined && (obj.bEquipped = Math.round(message.bEquipped));
    message.itemAmmoCount !== undefined && (obj.itemAmmoCount = Math.round(message.itemAmmoCount));
    message.itemContentsCount !== undefined && (obj.itemContentsCount = Math.round(message.itemContentsCount));
    message.metaItem !== undefined &&
      (obj.metaItem = message.metaItem ? SItemMeta.toJSON(message.metaItem) : undefined);
    if (message.primaryPropertyArray) {
      obj.primaryPropertyArray = message.primaryPropertyArray.map((e) => e ? SItemProperty.toJSON(e) : undefined);
    } else {
      obj.primaryPropertyArray = [];
    }
    if (message.secondaryPropertyArray) {
      obj.secondaryPropertyArray = message.secondaryPropertyArray.map((e) => e ? SItemProperty.toJSON(e) : undefined);
    } else {
      obj.secondaryPropertyArray = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SDownItem>, I>>(base?: I): SDownItem {
    return SDownItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SDownItem>, I>>(object: I): SDownItem {
    const message = createBaseSDownItem();
    message.itemUniqueId = object.itemUniqueId ?? 0;
    message.itemId = object.itemId ?? "";
    message.itemCount = object.itemCount ?? 0;
    message.inventoryId = object.inventoryId ?? 0;
    message.slotId = object.slotId ?? 0;
    message.bEquipped = object.bEquipped ?? 0;
    message.itemAmmoCount = object.itemAmmoCount ?? 0;
    message.itemContentsCount = object.itemContentsCount ?? 0;
    message.metaItem = (object.metaItem !== undefined && object.metaItem !== null)
      ? SItemMeta.fromPartial(object.metaItem)
      : undefined;
    message.primaryPropertyArray = object.primaryPropertyArray?.map((e) => SItemProperty.fromPartial(e)) || [];
    message.secondaryPropertyArray = object.secondaryPropertyArray?.map((e) => SItemProperty.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSItem(): SItem {
  return {
    itemUniqueId: 0,
    itemId: "",
    itemCount: 0,
    inventoryId: 0,
    slotId: 0,
    itemAmmoCount: 0,
    itemContentsCount: 0,
    primaryPropertyArray: [],
    secondaryPropertyArray: [],
  };
}

export const SItem = {
  encode(message: SItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemUniqueId !== 0) {
      writer.uint32(8).uint64(message.itemUniqueId);
    }
    if (message.itemId !== "") {
      writer.uint32(18).string(message.itemId);
    }
    if (message.itemCount !== 0) {
      writer.uint32(24).uint32(message.itemCount);
    }
    if (message.inventoryId !== 0) {
      writer.uint32(32).uint32(message.inventoryId);
    }
    if (message.slotId !== 0) {
      writer.uint32(40).uint32(message.slotId);
    }
    if (message.itemAmmoCount !== 0) {
      writer.uint32(56).uint32(message.itemAmmoCount);
    }
    if (message.itemContentsCount !== 0) {
      writer.uint32(64).uint32(message.itemContentsCount);
    }
    for (const v of message.primaryPropertyArray) {
      SItemProperty.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.secondaryPropertyArray) {
      SItemProperty.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemUniqueId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.itemId = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemCount = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.inventoryId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.slotId = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.itemAmmoCount = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.itemContentsCount = reader.uint32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.primaryPropertyArray.push(SItemProperty.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.secondaryPropertyArray.push(SItemProperty.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SItem {
    return {
      itemUniqueId: isSet(object.itemUniqueId) ? Number(object.itemUniqueId) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
      itemCount: isSet(object.itemCount) ? Number(object.itemCount) : 0,
      inventoryId: isSet(object.inventoryId) ? Number(object.inventoryId) : 0,
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
      itemAmmoCount: isSet(object.itemAmmoCount) ? Number(object.itemAmmoCount) : 0,
      itemContentsCount: isSet(object.itemContentsCount) ? Number(object.itemContentsCount) : 0,
      primaryPropertyArray: Array.isArray(object?.primaryPropertyArray)
        ? object.primaryPropertyArray.map((e: any) => SItemProperty.fromJSON(e))
        : [],
      secondaryPropertyArray: Array.isArray(object?.secondaryPropertyArray)
        ? object.secondaryPropertyArray.map((e: any) => SItemProperty.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SItem): unknown {
    const obj: any = {};
    message.itemUniqueId !== undefined && (obj.itemUniqueId = Math.round(message.itemUniqueId));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.itemCount !== undefined && (obj.itemCount = Math.round(message.itemCount));
    message.inventoryId !== undefined && (obj.inventoryId = Math.round(message.inventoryId));
    message.slotId !== undefined && (obj.slotId = Math.round(message.slotId));
    message.itemAmmoCount !== undefined && (obj.itemAmmoCount = Math.round(message.itemAmmoCount));
    message.itemContentsCount !== undefined && (obj.itemContentsCount = Math.round(message.itemContentsCount));
    if (message.primaryPropertyArray) {
      obj.primaryPropertyArray = message.primaryPropertyArray.map((e) => e ? SItemProperty.toJSON(e) : undefined);
    } else {
      obj.primaryPropertyArray = [];
    }
    if (message.secondaryPropertyArray) {
      obj.secondaryPropertyArray = message.secondaryPropertyArray.map((e) => e ? SItemProperty.toJSON(e) : undefined);
    } else {
      obj.secondaryPropertyArray = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SItem>, I>>(base?: I): SItem {
    return SItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SItem>, I>>(object: I): SItem {
    const message = createBaseSItem();
    message.itemUniqueId = object.itemUniqueId ?? 0;
    message.itemId = object.itemId ?? "";
    message.itemCount = object.itemCount ?? 0;
    message.inventoryId = object.inventoryId ?? 0;
    message.slotId = object.slotId ?? 0;
    message.itemAmmoCount = object.itemAmmoCount ?? 0;
    message.itemContentsCount = object.itemContentsCount ?? 0;
    message.primaryPropertyArray = object.primaryPropertyArray?.map((e) => SItemProperty.fromPartial(e)) || [];
    message.secondaryPropertyArray = object.secondaryPropertyArray?.map((e) => SItemProperty.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSItemProperty(): SItemProperty {
  return { propertyTypeId: "", propertyValue: 0 };
}

export const SItemProperty = {
  encode(message: SItemProperty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.propertyTypeId !== "") {
      writer.uint32(10).string(message.propertyTypeId);
    }
    if (message.propertyValue !== 0) {
      writer.uint32(16).int32(message.propertyValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SItemProperty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSItemProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.propertyTypeId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.propertyValue = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SItemProperty {
    return {
      propertyTypeId: isSet(object.propertyTypeId) ? String(object.propertyTypeId) : "",
      propertyValue: isSet(object.propertyValue) ? Number(object.propertyValue) : 0,
    };
  },

  toJSON(message: SItemProperty): unknown {
    const obj: any = {};
    message.propertyTypeId !== undefined && (obj.propertyTypeId = message.propertyTypeId);
    message.propertyValue !== undefined && (obj.propertyValue = Math.round(message.propertyValue));
    return obj;
  },

  create<I extends Exact<DeepPartial<SItemProperty>, I>>(base?: I): SItemProperty {
    return SItemProperty.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SItemProperty>, I>>(object: I): SItemProperty {
    const message = createBaseSItemProperty();
    message.propertyTypeId = object.propertyTypeId ?? "";
    message.propertyValue = object.propertyValue ?? 0;
    return message;
  },
};

function createBaseSItems(): SItems {
  return { item: [] };
}

export const SItems = {
  encode(message: SItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.item) {
      SItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SItems {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.item.push(SItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SItems {
    return { item: Array.isArray(object?.item) ? object.item.map((e: any) => SItem.fromJSON(e)) : [] };
  },

  toJSON(message: SItems): unknown {
    const obj: any = {};
    if (message.item) {
      obj.item = message.item.map((e) => e ? SItem.toJSON(e) : undefined);
    } else {
      obj.item = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SItems>, I>>(base?: I): SItems {
    return SItems.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SItems>, I>>(object: I): SItems {
    const message = createBaseSItems();
    message.item = object.item?.map((e) => SItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSPerk(): SPerk {
  return { index: 0, perkId: "" };
}

export const SPerk = {
  encode(message: SPerk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.perkId !== "") {
      writer.uint32(18).string(message.perkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SPerk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSPerk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.perkId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SPerk {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      perkId: isSet(object.perkId) ? String(object.perkId) : "",
    };
  },

  toJSON(message: SPerk): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.perkId !== undefined && (obj.perkId = message.perkId);
    return obj;
  },

  create<I extends Exact<DeepPartial<SPerk>, I>>(base?: I): SPerk {
    return SPerk.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SPerk>, I>>(object: I): SPerk {
    const message = createBaseSPerk();
    message.index = object.index ?? 0;
    message.perkId = object.perkId ?? "";
    return message;
  },
};

function createBaseSSkill(): SSkill {
  return { index: 0, skillId: "" };
}

export const SSkill = {
  encode(message: SSkill, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.skillId !== "") {
      writer.uint32(18).string(message.skillId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSkill {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSSkill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.skillId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SSkill {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      skillId: isSet(object.skillId) ? String(object.skillId) : "",
    };
  },

  toJSON(message: SSkill): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.skillId !== undefined && (obj.skillId = message.skillId);
    return obj;
  },

  create<I extends Exact<DeepPartial<SSkill>, I>>(base?: I): SSkill {
    return SSkill.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SSkill>, I>>(object: I): SSkill {
    const message = createBaseSSkill();
    message.index = object.index ?? 0;
    message.skillId = object.skillId ?? "";
    return message;
  },
};

function createBaseSSpell(): SSpell {
  return { slotIndex: 0, sequenceIndex: 0, spellId: "" };
}

export const SSpell = {
  encode(message: SSpell, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slotIndex !== 0) {
      writer.uint32(8).uint32(message.slotIndex);
    }
    if (message.sequenceIndex !== 0) {
      writer.uint32(16).uint32(message.sequenceIndex);
    }
    if (message.spellId !== "") {
      writer.uint32(26).string(message.spellId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSpell {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSSpell();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.slotIndex = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sequenceIndex = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.spellId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SSpell {
    return {
      slotIndex: isSet(object.slotIndex) ? Number(object.slotIndex) : 0,
      sequenceIndex: isSet(object.sequenceIndex) ? Number(object.sequenceIndex) : 0,
      spellId: isSet(object.spellId) ? String(object.spellId) : "",
    };
  },

  toJSON(message: SSpell): unknown {
    const obj: any = {};
    message.slotIndex !== undefined && (obj.slotIndex = Math.round(message.slotIndex));
    message.sequenceIndex !== undefined && (obj.sequenceIndex = Math.round(message.sequenceIndex));
    message.spellId !== undefined && (obj.spellId = message.spellId);
    return obj;
  },

  create<I extends Exact<DeepPartial<SSpell>, I>>(base?: I): SSpell {
    return SSpell.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SSpell>, I>>(object: I): SSpell {
    const message = createBaseSSpell();
    message.slotIndex = object.slotIndex ?? 0;
    message.sequenceIndex = object.sequenceIndex ?? 0;
    message.spellId = object.spellId ?? "";
    return message;
  },
};

function createBasescustomizeCharacter(): scustomizeCharacter {
  return { customizeCharacterId: "", isEquip: 0, isNew: 0 };
}

export const scustomizeCharacter = {
  encode(message: scustomizeCharacter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customizeCharacterId !== "") {
      writer.uint32(10).string(message.customizeCharacterId);
    }
    if (message.isEquip !== 0) {
      writer.uint32(16).int32(message.isEquip);
    }
    if (message.isNew !== 0) {
      writer.uint32(24).int32(message.isNew);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): scustomizeCharacter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasescustomizeCharacter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.customizeCharacterId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isEquip = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isNew = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): scustomizeCharacter {
    return {
      customizeCharacterId: isSet(object.customizeCharacterId) ? String(object.customizeCharacterId) : "",
      isEquip: isSet(object.isEquip) ? Number(object.isEquip) : 0,
      isNew: isSet(object.isNew) ? Number(object.isNew) : 0,
    };
  },

  toJSON(message: scustomizeCharacter): unknown {
    const obj: any = {};
    message.customizeCharacterId !== undefined && (obj.customizeCharacterId = message.customizeCharacterId);
    message.isEquip !== undefined && (obj.isEquip = Math.round(message.isEquip));
    message.isNew !== undefined && (obj.isNew = Math.round(message.isNew));
    return obj;
  },

  create<I extends Exact<DeepPartial<scustomizeCharacter>, I>>(base?: I): scustomizeCharacter {
    return scustomizeCharacter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<scustomizeCharacter>, I>>(object: I): scustomizeCharacter {
    const message = createBasescustomizeCharacter();
    message.customizeCharacterId = object.customizeCharacterId ?? "";
    message.isEquip = object.isEquip ?? 0;
    message.isNew = object.isNew ?? 0;
    return message;
  },
};

function createBasescustomizeItem(): scustomizeItem {
  return { customizeItemId: "", isEquip: 0, isNew: 0 };
}

export const scustomizeItem = {
  encode(message: scustomizeItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customizeItemId !== "") {
      writer.uint32(10).string(message.customizeItemId);
    }
    if (message.isEquip !== 0) {
      writer.uint32(16).int32(message.isEquip);
    }
    if (message.isNew !== 0) {
      writer.uint32(24).int32(message.isNew);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): scustomizeItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasescustomizeItem();
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

          message.isEquip = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isNew = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): scustomizeItem {
    return {
      customizeItemId: isSet(object.customizeItemId) ? String(object.customizeItemId) : "",
      isEquip: isSet(object.isEquip) ? Number(object.isEquip) : 0,
      isNew: isSet(object.isNew) ? Number(object.isNew) : 0,
    };
  },

  toJSON(message: scustomizeItem): unknown {
    const obj: any = {};
    message.customizeItemId !== undefined && (obj.customizeItemId = message.customizeItemId);
    message.isEquip !== undefined && (obj.isEquip = Math.round(message.isEquip));
    message.isNew !== undefined && (obj.isNew = Math.round(message.isNew));
    return obj;
  },

  create<I extends Exact<DeepPartial<scustomizeItem>, I>>(base?: I): scustomizeItem {
    return scustomizeItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<scustomizeItem>, I>>(object: I): scustomizeItem {
    const message = createBasescustomizeItem();
    message.customizeItemId = object.customizeItemId ?? "";
    message.isEquip = object.isEquip ?? 0;
    message.isNew = object.isNew ?? 0;
    return message;
  },
};

function createBaseSEMOTE(): SEMOTE {
  return { emoteId: "", equipSlotIndex: 0, isNew: 0 };
}

export const SEMOTE = {
  encode(message: SEMOTE, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emoteId !== "") {
      writer.uint32(10).string(message.emoteId);
    }
    if (message.equipSlotIndex !== 0) {
      writer.uint32(16).int32(message.equipSlotIndex);
    }
    if (message.isNew !== 0) {
      writer.uint32(24).int32(message.isNew);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SEMOTE {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSEMOTE();
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

          message.equipSlotIndex = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isNew = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SEMOTE {
    return {
      emoteId: isSet(object.emoteId) ? String(object.emoteId) : "",
      equipSlotIndex: isSet(object.equipSlotIndex) ? Number(object.equipSlotIndex) : 0,
      isNew: isSet(object.isNew) ? Number(object.isNew) : 0,
    };
  },

  toJSON(message: SEMOTE): unknown {
    const obj: any = {};
    message.emoteId !== undefined && (obj.emoteId = message.emoteId);
    message.equipSlotIndex !== undefined && (obj.equipSlotIndex = Math.round(message.equipSlotIndex));
    message.isNew !== undefined && (obj.isNew = Math.round(message.isNew));
    return obj;
  },

  create<I extends Exact<DeepPartial<SEMOTE>, I>>(base?: I): SEMOTE {
    return SEMOTE.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SEMOTE>, I>>(object: I): SEMOTE {
    const message = createBaseSEMOTE();
    message.emoteId = object.emoteId ?? "";
    message.equipSlotIndex = object.equipSlotIndex ?? 0;
    message.isNew = object.isNew ?? 0;
    return message;
  },
};

function createBasescustomizeAction(): scustomizeAction {
  return { customizeActionId: "", isEquip: 0, isNew: 0 };
}

export const scustomizeAction = {
  encode(message: scustomizeAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customizeActionId !== "") {
      writer.uint32(10).string(message.customizeActionId);
    }
    if (message.isEquip !== 0) {
      writer.uint32(16).int32(message.isEquip);
    }
    if (message.isNew !== 0) {
      writer.uint32(24).int32(message.isNew);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): scustomizeAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasescustomizeAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.customizeActionId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isEquip = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isNew = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): scustomizeAction {
    return {
      customizeActionId: isSet(object.customizeActionId) ? String(object.customizeActionId) : "",
      isEquip: isSet(object.isEquip) ? Number(object.isEquip) : 0,
      isNew: isSet(object.isNew) ? Number(object.isNew) : 0,
    };
  },

  toJSON(message: scustomizeAction): unknown {
    const obj: any = {};
    message.customizeActionId !== undefined && (obj.customizeActionId = message.customizeActionId);
    message.isEquip !== undefined && (obj.isEquip = Math.round(message.isEquip));
    message.isNew !== undefined && (obj.isNew = Math.round(message.isNew));
    return obj;
  },

  create<I extends Exact<DeepPartial<scustomizeAction>, I>>(base?: I): scustomizeAction {
    return scustomizeAction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<scustomizeAction>, I>>(object: I): scustomizeAction {
    const message = createBasescustomizeAction();
    message.customizeActionId = object.customizeActionId ?? "";
    message.isEquip = object.isEquip ?? 0;
    message.isNew = object.isNew ?? 0;
    return message;
  },
};

function createBasescustomizeLobbyEmote(): scustomizeLobbyEmote {
  return { lobbyEmoteId: "", equipSlotIndex: 0, isNew: 0 };
}

export const scustomizeLobbyEmote = {
  encode(message: scustomizeLobbyEmote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyEmoteId !== "") {
      writer.uint32(10).string(message.lobbyEmoteId);
    }
    if (message.equipSlotIndex !== 0) {
      writer.uint32(16).int32(message.equipSlotIndex);
    }
    if (message.isNew !== 0) {
      writer.uint32(24).int32(message.isNew);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): scustomizeLobbyEmote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasescustomizeLobbyEmote();
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

          message.equipSlotIndex = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isNew = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): scustomizeLobbyEmote {
    return {
      lobbyEmoteId: isSet(object.lobbyEmoteId) ? String(object.lobbyEmoteId) : "",
      equipSlotIndex: isSet(object.equipSlotIndex) ? Number(object.equipSlotIndex) : 0,
      isNew: isSet(object.isNew) ? Number(object.isNew) : 0,
    };
  },

  toJSON(message: scustomizeLobbyEmote): unknown {
    const obj: any = {};
    message.lobbyEmoteId !== undefined && (obj.lobbyEmoteId = message.lobbyEmoteId);
    message.equipSlotIndex !== undefined && (obj.equipSlotIndex = Math.round(message.equipSlotIndex));
    message.isNew !== undefined && (obj.isNew = Math.round(message.isNew));
    return obj;
  },

  create<I extends Exact<DeepPartial<scustomizeLobbyEmote>, I>>(base?: I): scustomizeLobbyEmote {
    return scustomizeLobbyEmote.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<scustomizeLobbyEmote>, I>>(object: I): scustomizeLobbyEmote {
    const message = createBasescustomizeLobbyEmote();
    message.lobbyEmoteId = object.lobbyEmoteId ?? "";
    message.equipSlotIndex = object.equipSlotIndex ?? 0;
    message.isNew = object.isNew ?? 0;
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
