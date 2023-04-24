// utils
import net from "net";

// types
import { logger } from "./utils/loggers";

const tcpServer = net.createServer((socket) => {
    //
    let socketAddress = socket.remoteAddress || "";

    logger.info(`${socketAddress} connected.`);

    socket.on("end", () => {
        socket.destroy();
    });

    socket.on("error", (err) => {
        socket.destroy();
    });

    socket.on("data", async (data) => {});

    socket.pipe(socket);
});

tcpServer.on("error", (err) => {
    throw err;
});

export const startGameServer = (port: number) => {
    tcpServer.listen(port, () => {
        logger.info(`Starting Dark and Darker Game Server at port ${port}`);
    });
};
