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

    primaryPropertyArray: SItemProperty[] = [];

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
        this.inventoryId = obj.inventory_id;
        this.slotId = obj.slot_id;

        this.primaryPropertyArray = JSON.parse(obj.properties);

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
            inventory_id: this.inventoryId || 0,
            slot_id: this.slotId || 0,
            properties: JSON.stringify(this.primaryPropertyArray),
        };

        if (this.id) {
            obj.id = this.id;
        }

        return obj;
    }

    static fromJSON(obj: {
        id?: number;
        itemId: string;
        itemCount: number;
        inventoryId: DefineItem_InventoryId | null;
        slotId: DefineEquipment_SlotId | null;
        primaryPropertyArray: SItemProperty[];
    }) {
        const item = new Item();
        item.fromJSON(obj);
        return item;
    }

    fromJSON(obj: {
        id?: number;
        itemId: string;
        itemCount: number;
        inventoryId: DefineItem_InventoryId | null;
        slotId: DefineEquipment_SlotId | null;
        primaryPropertyArray: SItemProperty[];
    }) {
        this.id = obj.id || 0;
        this.itemId = obj.itemId;
        this.itemCount = obj.itemCount;
        this.inventoryId = obj.inventoryId;
        this.slotId = obj.slotId;

        this.primaryPropertyArray = obj.primaryPropertyArray;
    }

    toJSON() {
        return SItem.create({
            itemUniqueId: this.id,
            itemId: this.itemId,
            itemCount: this.itemCount,
            inventoryId: this.inventoryId || 0,
            slotId: this.slotId || 0,
            primaryPropertyArray: this.primaryPropertyArray,
        });
    }
}
