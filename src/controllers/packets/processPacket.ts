import net from "net";
import {
    packetCommandFromJSON,
    packetCommandToJSON,
} from "../../protos/ts/_PacketCommand";
import { Parser } from "binary-parser";
import { sendPacket } from "../..";
import { PacketHandlersMap } from "./PacketHandlers";

//
export const processPacket = async (data: Buffer, socket: net.Socket) => {
    //
    const parser = new Parser()
        .endianness("little")
        .uint16("totalLength")
        .uint8("separator1")
        .uint8("separator2")
        .uint16("type");

    const parsed = parser.parse(data);
    const command = packetCommandFromJSON(parsed.type);

    const handler = PacketHandlersMap.get(command);

    switch (packetCommandFromJSON(parsed.type)) {
        default: {
            break;
        }
    }

    if (handler) {
        console.log(`Packet-Type: ${packetCommandToJSON(command)}`);
        console.log(`Handler: ${handler.label}`);
        for (let res of handler.res) {
            const responseData = await res.handler(data, socket);

            sendPacket(
                socket,
                res.type.encode(responseData).finish(),
                res.command
            );
        }

        return;
    }

    console.log(`Unknown Packet`);
    console.log(`Packet-Type: ${parsed.type}`);
    console.log(`Packet-Type: ${packetCommandToJSON(command)}`);
};
