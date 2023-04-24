import net from "net";
import {
    packetCommandFromJSON,
    packetCommandToJSON,
} from "../../protos/ts/_PacketCommand";
import { Parser } from "binary-parser";
import { PacketHandlersMap } from "./PacketHandlers";
import { logger } from "@/utils/loggers";
import { sendPacket } from "@/tcpServer";

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
        logger.info(`Packet-Type: ${packetCommandToJSON(command)}`);
        logger.info(`Handler: ${handler.label}`);
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

    logger.info(`Unknown Packet`);
    logger.info(`Packet-Type: ${parsed.type}`);
    logger.info(`Packet-Type: ${packetCommandToJSON(command)}`);
    logger.info(`=========================================================`);
};
