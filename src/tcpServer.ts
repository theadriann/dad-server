// controllers
import { processPacket } from "./controllers/packets/processPacket";

// utils
import net from "net";
import { buffer2HexSpacedString, numberToHex } from "./utils/hex";
import { socketContextManager } from "./utils/SocketContextManager";

// types
import {
    packetCommandFromJSON,
    packetCommandToJSON,
} from "./protos/ts/_PacketCommand";
import { logger } from "./utils/loggers";

export const makeHeader = (
    packet: Buffer | Uint8Array,
    packetType: string | number
) => {
    const type = packetCommandFromJSON(packetType);
    const typeHex = numberToHex(type);

    //
    const totalLength = packet.length + 8;
    const totalLengthHex = numberToHex(totalLength);

    let header: Buffer[] = [];

    if (totalLengthHex.length <= 2) {
        header.push(Buffer.from([totalLength, 0x00]));
    } else {
        header.push(
            Buffer.from(
                totalLengthHex.match(/.{2}/g)!.reverse().join(""),
                "hex"
            )
        );
    }

    header.push(Buffer.from([0x00, 0x00]));

    if (typeHex.length <= 2) {
        header.push(Buffer.from([type, 0x00]));
    } else {
        header.push(
            Buffer.from(typeHex.match(/.{2}/g)!.reverse().join(""), "hex")
        );
    }

    header.push(Buffer.from([0x00, 0x00]));

    // let lengthComponents = Buffer.from([totalLength]);
    // let headerRest = [];

    // logger.info(`Message Size: ${totalLength}`);
    // logger.info(`Length Bytes: ${totalLengthHex.length}`);

    // if (totalLengthHex.length <= 2) {
    //     headerRest.push(0x00);
    // } else {
    //     lengthComponents = Buffer.from(
    //         numberToHex(totalLength).match(/.{2}/g)!.reverse().join(""),
    //         "hex"
    //     );
    // }

    // headerRest = [...headerRest, 0x00, 0x00, type, 0x00, 0x00, 0x00];

    return header.reduce((a, b) => Buffer.concat([a, b]), Buffer.alloc(0));
};

export const sendPacket = (
    socket: net.Socket,
    packet: Buffer | Uint8Array,
    packetType: string | number
) => {
    logger.debug(`==================== Sending Packet ====================`);

    const header = makeHeader(packet, packetType);

    if (packet instanceof Uint8Array) {
        packet = Buffer.from(packet);
    }

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

const tcpServer = net.createServer((socket) => {
    //
    let socketAddress = socket.remoteAddress || "";
    let context = socketContextManager.create(socket);
    // let context = socketContextManager.getByAddress(socketAddress);

    // if (!context) {
    //     context = socketContextManager.create(socket);
    // } else {
    //     logger.info(`Reconnected ${context.id}`);
    //     context.setSocket(socket);

    //     if (context.userId && context.characterId) {
    //         // TODO: hacky way to handle fast custom reconnection
    //     }
    // }

    if (!context) {
        logger.error("Failed to create socket context");
        return;
    }

    //
    logger.info(
        `${(socket.address() as any)?.address} connected as ${context.id}`
    );

    socket.on("end", () => {
        if (!context) {
            logger.error("Socket context is null");
            return;
        }

        logger.info(`${context.id} disconnected`);
        // socket.destroy();
    });

    socket.on("error", (err) => {
        if (!context) {
            logger.error("Socket context is null");
            return;
        }

        logger.info(`${context.id} errored`, err);
        socket.destroy();
    });

    socket.on("data", async (data) => {
        if (!context) {
            logger.error("Socket context is null");
            return;
        }

        logger.debug(
            `==================== Received Packet ====================`
        );
        logger.debug(`=============== ${context.id} ===============`);

        //
        logger.debug("[HEX]", buffer2HexSpacedString(data));

        //
        context.appendData(data);

        if (context.processLock) {
            logger.warn("Socket is locked, skipping packet processing");
            return;
        }

        context.setProcessLock(true);
        context.deleteDataCleaningTimeout();

        while (context.hasCompleteData()) {
            const { data, rest } = context.getCompleteData();

            // set the rest of the data back into the context
            logger.debug("[HEX-DATA]", buffer2HexSpacedString(data));
            logger.debug("[HEX-REMAINING]", buffer2HexSpacedString(rest));

            context.setData(rest);

            await processPacket(data, socket);
        }

        if (context.remainingData?.length) {
            context.queueDataCleaningTimeout();
        }

        context.setProcessLock(false);
    });

    socket.pipe(socket);
});

tcpServer.on("error", (err) => {
    throw err;
});

export const startTcpServer = () => {
    tcpServer.listen(process.env.LOBBY_PORT || 30001, () => {
        logger.info("Starting Dark and Darker Login Server");
    });
};
