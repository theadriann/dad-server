import { Parser } from "binary-parser";
import { BasePacket } from "./BasePacket";

//
class CreateCharacterPacketImpl extends BasePacket {
    //
    id = "create-character";
    type = "15";

    parse = (packet: Buffer) => {
        const x = new Parser()
            .uint8("totalLength")
            .uint8("pad1")
            .uint8("pad2")
            .uint8("pad3")
            .uint8("type")
            .uint8("pad4")
            .uint8("increment")
            .uint8("pad6")
            .uint8("separator0")
            .uint8("characterNameLength")
            .array("characterName", {
                type: "uint8",
                length: "characterNameLength",
            })
            .uint8("separator1")
            .uint8("characterClassLength")
            .array("characterClass", {
                type: "uint8",
                length: "characterClassLength",
            })
            .uint8("separator2")
            .uint8("characterLevel");

        const result = x.parse(packet);

        return result;
    };
}

export const CreateCharacterPacket = new CreateCharacterPacketImpl();
