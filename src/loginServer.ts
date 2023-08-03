// controllers
import { processPacket } from "./controllers/packets/processPacket";

// utils
import net from "net";
import { buffer2HexSpacedString } from "./utils/hex";

// types
import { logger } from "./utils/loggers";
import { lobbyState } from "./state/LobbyManager";
import { reportPackets } from "./utils/packets/FileDumper";
import { LOG_PACKETS } from "./utils/info";

const tcpServer = net.createServer((socket) => {
  //
  let socketAddress = socket.remoteAddress || "";
  const lobbyUser = lobbyState.create(socket);
  // let context = socketContextManager.create(socket);
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

  if (!lobbyUser) {
    logger.error("Failed to create a lobby user");
    return;
  }

  //
  logger.info(`${socketAddress} connected as ${lobbyUser.sessionId}`);

  socket.on("end", () => {
    lobbyUser.socketContext.setActive(false);
    logger.info(`${lobbyUser?.sessionId} disconnected`);
    socket.destroy();
    lobbyUser.onDisconnect();
  });

  socket.on("error", (err) => {
    lobbyUser.socketContext.setActive(false);
    logger.info(`${lobbyUser?.sessionId} errored`, err);
    socket.destroy();
    lobbyUser.onDisconnect();
  });

  socket.on("data", async (data) => {
    if (!lobbyUser) {
      logger.error("No lobby user found");
      return;
    }

    logger.debug(`==================== Received Packet ====================`);
    logger.debug(`=============== ${lobbyUser.sessionId} ===============`);

    //
    // logger.debug("[HEX]");
    // logger.debug(buffer2HexSpacedString(data));
    if (LOG_PACKETS) {
      const id = lobbyUser.sessionId || "";
      reportPackets(data.toString("hex"), id);
    }

    //
    lobbyUser.socketContext.appendData(data);

    if (lobbyUser.socketContext.processLock) {
      logger.warn("Socket is locked, skipping packet processing");
      return;
    }

    lobbyUser.socketContext.setProcessLock(true);
    lobbyUser.socketContext.deleteDataCleaningTimeout();

    while (lobbyUser.socketContext.hasCompleteData()) {
      const { data, rest } = lobbyUser.socketContext.getCompleteData();

      // set the rest of the data back into the context
      // logger.debug("[HEX-DATA]");
      // logger.debug(buffer2HexSpacedString(data));
      // logger.debug("[HEX-REMAINING]");
      // logger.debug(buffer2HexSpacedString(rest));

      lobbyUser.socketContext.setData(rest);

      await processPacket(data, socket);
    }

    if (lobbyUser.socketContext.remainingData?.length) {
      lobbyUser.socketContext.queueDataCleaningTimeout();
    }

    lobbyUser.socketContext.setProcessLock(false);
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

  setInterval(() => {
    logger.info(`Active Users: ${lobbyState.getAllActive().length}`);
  }, 10 * 1000);
};
