import {
    DefineEquipment_SlotId,
    DefineItem_InventoryId,
} from "@/protos/ts/_Defins";
import { SItem, SItemProperty } from "@/protos/ts/_Item";
import { Inventory } from "@prisma/client";
import { Items, itemIdToMaxCount } from "./game/enums/Items";

//
export class Item {
    id: number = 0;
    itemId: string = "";
    itemCount: number = 0;
    inventoryId: DefineItem_InventoryId | null = null;
    slotId: DefineEquipment_SlotId | null = null;
    itemContentsCount: number = 0;
    itemAmmoCount: number = 0;

    primaryPropertyArray: SItemProperty[] = [];
    secondaryPropertyArray: SItemProperty[] = [];

    constructor() {}

    assignTempId = () => {
        this.id = Math.floor(Math.random() * 1000000000);
        return this;
    };

    getMaxCount = () => {
        return itemIdToMaxCount(this.itemId);
    };

    // -----------------------
    //
    // -----------------------

    fromDB(obj: Inventory) {
        this.id = obj.id;
        this.itemId = obj.item_id;
        this.itemCount = obj.item_count;
        this.itemContentsCount = obj.item_contents_count;
        this.itemAmmoCount = obj.item_ammo_count;
        this.inventoryId = obj.inventory_id;
        this.slotId = obj.slot_id;

        try {
            this.primaryPropertyArray = JSON.parse(obj.properties);
        } catch (e) {
            this.primaryPropertyArray = [];
        }

        try {
            this.secondaryPropertyArray = JSON.parse(obj.secondary_properties);
        } catch (e) {
            this.secondaryPropertyArray = [];
        }

        return this;
    }

    static fromDB(obj: Inventory) {
        const item = new Item();
        item.fromDB(obj);
        return item;
    }

    toDB() {
        const obj: any = {
            item_id: this.itemId,
            item_count: this.itemCount,
            item_contents_count: this.itemContentsCount || 0,
            item_ammo_count: this.itemAmmoCount || 0,
            inventory_id: this.inventoryId || 0,
            slot_id: this.slotId || 0,
            properties: JSON.stringify(this.primaryPropertyArray),
            secondary_properties: JSON.stringify(this.secondaryPropertyArray),
        };

        if (this.id) {
            obj.id = this.id;
        }

        return obj;
    }

    static fromSItem(obj: SItem) {
        const item = new Item();
        item.fromSItem(obj);
        return item;
    }

    fromSItem(obj: SItem) {
        this.id = obj.itemUniqueId || 0;
        this.itemId = obj.itemId;
        this.itemCount = obj.itemCount;
        this.inventoryId = obj.inventoryId;
        this.slotId = obj.slotId;
        this.itemAmmoCount = obj.itemAmmoCount;
        this.itemContentsCount = obj.itemContentsCount;

        this.primaryPropertyArray = obj.primaryPropertyArray;
        this.secondaryPropertyArray = obj.secondaryPropertyArray;
    }

    toSItem() {
        return SItem.create({
            itemUniqueId: this.id,
            itemId: this.itemId,
            itemCount: this.itemCount,
            inventoryId: this.inventoryId || 0,
            slotId: this.slotId || 0,
            itemAmmoCount: this.itemAmmoCount || 0,
            itemContentsCount: this.itemContentsCount || 0,
            primaryPropertyArray: this.primaryPropertyArray,
            secondaryPropertyArray: this.secondaryPropertyArray,
        });
    }
}
