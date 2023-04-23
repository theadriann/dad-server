//
import { Parser } from "binary-parser";
import { BasePacket } from "./BasePacket";

class KeepAlivePacketImpl extends BasePacket {
    //
    id = "keep-alive";
    type = "01";

    parse = (packet: Buffer) => {
        const parser = new Parser()
            .uint8("totalLength")
            .uint8("pad1")
            .uint8("pad2")
            .uint8("pad3")
            .uint8("type")
            .uint8("pad4")
            .uint8("increment")
            .uint8("pad6");

        const result = parser.parse(packet);

        return result;
    };
}

export const KeepAlivePacket = new KeepAlivePacketImpl();
