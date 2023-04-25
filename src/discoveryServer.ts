import express from "express";
import { logger } from "./utils/loggers";
import { DISCOVERY_PORT, LOBBY_PORT, SERVER_IP } from "./utils/info";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/dc/helloWorld", (req, res) => {
    logger.debug(`[discovery] Requested ${req.url}`);

    res.json({
        ipAddress: SERVER_IP,
        port: LOBBY_PORT,
    });
});

app.get("*", (req, res) => {
    logger.debug(`[discovery] Requested ${req.url}`);
    res.json({});
});

export const startDiscoveryServer = () => {
    const port = DISCOVERY_PORT;

    app.listen(port, () => {
        logger.info(
            `Starting Dark and Darker Discovery Server at port ${port}`
        );
    });
};
