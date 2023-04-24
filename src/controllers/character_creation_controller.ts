import net from "net";
import {
    sc2sAccountCharacterCreateReq,
    ss2cAccountCharacterCreateRes,
} from "../protos/ts/Account";
import { bufferReader } from "../utils/bufferReader";
import { db } from "../lib/db";
import { socketContextManager } from "../utils/SocketContextManager";
import {
    generateBandage,
    generateLantern,
    generatePants,
    generateRoundShield,
    generateSword,
    generateTorch,
    generateTunic,
} from "../lib/items/test";
import { PacketResult } from "../protos/ts/_PacketCommand";

export const createCharacter = async (data: Buffer, socket: net.Socket) => {
    const socketContext = socketContextManager.getBySocket(socket);
    const characterData = sc2sAccountCharacterCreateReq.decode(
        bufferReader(data)
    );

    let res = ss2cAccountCharacterCreateRes.create({});

    if (!socketContext || !socketContext.userId) {
        res.result = PacketResult.FAIL_GENERAL;
        return res;
    }

    const character_db = await db.character.create({
        data: {
            nickname: characterData.nickName,
            user_id: socketContext.userId,
            class: characterData.characterClass,
            gender: characterData.gender,
            level: 1,
        },
    });

    const items = [
        generateTorch(),
        generateRoundShield(),
        generateLantern(),
        generateSword(),
        generatePants(),
        generateTunic(),
        generateBandage(),
    ];

    let db_items = [];

    for (let item of items) {
        db_items.push(
            await db.inventory.create({
                data: {
                    character_id: character_db.id,
                    inventory_id: item.inventoryId,
                    item_count: item.itemCount,
                    item_id: item.itemId,
                    properties: JSON.stringify(item.primaryPropertyArray),
                    slot_id: item.slotId,
                },
            })
        );
    }

    res.result = PacketResult.SUCCESS;

    return res;
};
