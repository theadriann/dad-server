import { Parser } from "binary-parser";

//
export class BasePacket {
    //
    id = "base";
    type = "00";

    isValid(packet: Buffer): boolean {
        const parser = new Parser()
            .uint8("totalLength")
            .uint8("pad1")
            .uint8("pad2")
            .uint8("pad3")
            .uint8("type");

        const result = parser.parse(packet);

        if (result.type == this.type) {
            return true;
        }

        return false;
    }

    parse = (
        packet: Buffer
    ): {
        [key: string]: any;
    } => {
        return {};
    };
}
