import { scharacterInfo } from "@/protos/ts/_Character";
import { Item } from "./Item";
import { Character as CharacterDB, Inventory } from "@prisma/client";
import { db } from "@/services/db";
import { CharacterClass } from "./game/enums/CharacterClass";
import { lobbyState } from "@/state/LobbyManager";

//
export type CharacterModelProps = {
    id?: number;

    userId?: number;
    nickname?: string;
    characterClass?: CharacterClass;
    gender?: number;
    level?: number;

    perk1?: string;
    perk2?: string;
    perk3?: string;
    perk4?: string;

    spell1?: string;
    spell2?: string;

    items?: Item[];
};

//
export class Character {
    //
    id: number = 0;

    //
    userId: number = 0;
    nickname: string = "";
    characterClass: CharacterClass = CharacterClass.FIGHTER;
    gender: number = 1;
    level: number = 1;

    perk1: string = "";
    perk2: string = "";
    perk3: string = "";
    perk4: string = "";

    spell1: string = "";
    spell2: string = "";

    // inventory: Inventory | null = null;
    items: Item[] = [];

    created_at: number = Date.now();
    updated_at: number = Date.now();

    constructor() {}

    // -----------------------
    // JSON Serialization
    // -----------------------

    static fromJSON(json: CharacterModelProps) {
        const character = new Character();
        character.fromJSON(json);
        return character;
    }

    fromJSON(json: CharacterModelProps) {
        //
        this.id = json.id || this.id;
        this.userId = json.userId || this.userId;
        this.nickname = json.nickname || this.nickname;
        this.characterClass = json.characterClass || this.characterClass;
        this.gender = json.gender || this.gender;
        this.level = json.level || this.level;

        this.perk1 = json.perk1 || this.perk1;
        this.perk2 = json.perk2 || this.perk2;
        this.perk3 = json.perk3 || this.perk3;
        this.perk4 = json.perk4 || this.perk4;

        this.spell1 = json.spell1 || this.spell1;
        this.spell2 = json.spell2 || this.spell2;

        this.items = json.items || this.items || [];

        return this;
    }

    // -----------------------
    // DB Serialization
    // -----------------------

    fromDB(
        obj: CharacterDB & {
            inventory?: Inventory[];
        }
    ) {
        //
        if (!obj) {
            return this;
        }

        //
        if (obj.id) {
            this.id = obj.id;
        }

        this.userId = obj.user_id || this.userId;
        this.nickname = obj.nickname || this.nickname;
        this.characterClass =
            (obj.class as CharacterClass) || this.characterClass;
        this.gender = obj.gender || this.gender;
        this.level = obj.level || this.level;

        this.perk1 = obj.perk1 || this.perk1;
        this.perk2 = obj.perk2 || this.perk2;
        this.perk3 = obj.perk3 || this.perk3;
        this.perk4 = obj.perk4 || this.perk4;

        this.spell1 = obj.spell1 || this.spell1;
        this.spell2 = obj.spell2 || this.spell2;

        if (obj.inventory) {
            this.items.push(...obj.inventory.map((item) => Item.fromDB(item)));
        }

        return this;
    }

    static fromDB(obj: any) {
        const character = new Character();
        character.fromDB(obj);
        return character;
    }

    toDB() {
        const obj: Partial<CharacterDB> = {
            user_id: this.userId,
            nickname: this.nickname,
            class: this.characterClass,
            level: this.level,
            gender: this.gender,

            perk1: this.perk1,
            perk2: this.perk2,
            perk3: this.perk3,
            perk4: this.perk4,

            spell1: this.spell1,
            spell2: this.spell2,
        };

        if (this.id) {
            obj.id = this.id;
        }

        return obj;
    }

    // -----------------------
    // Chracter Info Serialization
    // -----------------------

    static fromProtoCharacterInfo(obj: scharacterInfo) {
        const item = new Character();
        item.fromProtoCharacterInfo(obj);
        return item;
    }

    fromProtoCharacterInfo(obj: scharacterInfo) {
        return this;
    }

    toProtoCharacterInfo(): scharacterInfo {
        return scharacterInfo.create({});
    }

    // -----------------------
    //
    // -----------------------

    toClassEquipList() {
        return [
            {
                index: 1,
                isAvailableSlot: 1,
                requiredLevel: 1,
                type: 1,
                equipId: this.perk1 || "", // Perk #1
            },
            {
                index: 2,
                isAvailableSlot: Number(this.level >= 5), // is level 5
                requiredLevel: 5,
                type: 1,
                equipId: this.perk2 || "", // Perk #2
            },
            {
                index: 3,
                isAvailableSlot: Number(this.level >= 10), // is level 10
                requiredLevel: 10,
                type: 1,
                equipId: this.perk3 || "", // Perk #3
            },
            {
                index: 4,
                isAvailableSlot: Number(this.level >= 15),
                requiredLevel: 15,
                type: 1,
                equipId: this.perk4 || "", // Perk #4
            },
            {
                index: 5,
                isAvailableSlot: 1,
                requiredLevel: 1,
                type: 2,
                equipId: this.spell1 || "", // Skill #1
            },
            {
                index: 6,
                isAvailableSlot: 1,
                requiredLevel: 1,
                type: 2,
                equipId: this.spell2 || "", // Skill #2
            },
        ];
    }

    setClassEquipListItem(index: number, equipId: string) {
        switch (index) {
            case 1:
                this.perk1 = equipId;
                break;
            case 2:
                this.perk2 = equipId;
                break;
            case 3:
                this.perk3 = equipId;
                break;
            case 4:
                this.perk4 = equipId;
                break;
            case 5:
                this.spell1 = equipId;
                break;
            case 6:
                this.spell2 = equipId;
                break;
        }

        return this;
    }

    async updateClassEquipList() {
        //
        const list = this.toClassEquipList();

        //
        this.fromDB(
            await db.character.update({
                where: {
                    id: this.id,
                },
                data: {
                    perk1: list[0].equipId,
                    perk2: list[1].equipId,
                    perk3: list[2].equipId,
                    perk4: list[3].equipId,
                    spell1: list[4].equipId,
                    spell2: list[5].equipId,
                },
            })
        );

        if (this.userId) {
            lobbyState.getByUserId(this.userId)?.loadCharacterData();
        }
    }
}
