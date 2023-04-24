import express from "express";
import { logger } from "./utils/loggers";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/dc/helloWorld", (req, res) => {
    logger.debug(`[discovery] Requested ${req.url}`);

    res.json({
        ipAddress: process.env.SERVER_IP || "127.0.0.1",
        port: process.env.LOBBY_PORT || 30001,
    });
});

app.get("*", (req, res) => {
    logger.debug(`[discovery] Requested ${req.url}`);
    res.json({});
});

export const startDiscoveryServer = () => {
    app.listen(process.env.DISCOVERY_PORT || 30000, () => {
        logger.info("Starting Dark and Darker Discovery Server");
    });
};
