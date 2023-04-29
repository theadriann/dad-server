import net from "net";
import { logger } from "../loggers";
import { makePacketHeader } from "./makePacketHeader";
import {
    packetCommandFromJSON,
    packetCommandToJSON,
} from "@/protos/ts/_PacketCommand";
import { buffer2HexSpacedString } from "../hex";

//
export const sendPacket = (
    socket: net.Socket,
    packet: Buffer | Uint8Array,
    packetType: string | number
) => {
    logger.debug(`==================== Sending Packet ====================`);

    if (packet instanceof Uint8Array) {
        packet = Buffer.from(packet);
    }

    const header = makePacketHeader(packet, packetType);

    logger.debug(
        `Message-Type ${packetCommandToJSON(
            packetCommandFromJSON(packetType)
        )} (${packetType})`
    );
    logger.debug("Header:");
    logger.debug(buffer2HexSpacedString(header as Buffer));
    logger.debug("Cotents:");
    logger.debug(buffer2HexSpacedString(packet as Buffer));
    const packetToSend = Buffer.from([...header, ...packet]);

    socket.write(packetToSend);
    logger.debug(`=========================================================`);
};
