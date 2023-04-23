import { Parser } from "binary-parser";
import { BasePacket } from "./BasePacket";

//
class GetCharacterListPacketImpl extends BasePacket {
    //
    id = "get-character-list";
    type = "17";

    // 0c 00 00 00 11 00 03 00 08   01 10 07
    parse = (packet: Buffer) => {
        const x = new Parser()
            .uint8("totalLength")
            .uint8("pad1")
            .uint8("pad2")
            .uint8("pad3")
            .uint8("type")
            .uint8("pad4")
            .uint8("increment")
            .uint8("separator0");

        const result = x.parse(packet);

        return result;
    };
}

export const GetCharacterListPacket = new GetCharacterListPacketImpl();
