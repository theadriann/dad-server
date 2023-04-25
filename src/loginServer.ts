// controllers
import { processPacket } from "./controllers/packets/processPacket";

// utils
import net from "net";
import { buffer2HexSpacedString } from "./utils/hex";
import { socketContextManager } from "./utils/SocketContextManager";

// types
import { logger } from "./utils/loggers";

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
        logger.debug("[HEX]");
        logger.debug(buffer2HexSpacedString(data));

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
            logger.debug("[HEX-DATA]");
            logger.debug(buffer2HexSpacedString(data));
            logger.debug("[HEX-REMAINING]");
            logger.debug(buffer2HexSpacedString(rest));

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

export const startLoginServer = () => {
    const port = process.env.LOBBY_PORT || 30001;
    tcpServer.listen(port, () => {
        logger.info(`Starting Dark and Darker Login Server on port ${port}`);
    });
};
