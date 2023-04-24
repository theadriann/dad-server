import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/dc/helloWorld", (req, res) => {
    console.log(`[discovery] Requested ${req.url}`);

    res.json({
        ipAddress: process.env.SERVER_IP || "127.0.0.1",
        port: process.env.LOBBY_PORT || 30001,
    });
});

app.get("*", (req, res) => {
    console.log(`[discovery] Requested ${req.url}`);
    res.json({});
});

app.listen(process.env.DISCOVERY_PORT || 30000, () => {
    console.log("Starting Dark and Darker Discovery Server");
});
