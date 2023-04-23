import express from "express";

// start server
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/dc/helloWorld", (req, res) => {
    res.json({
        ipAddress: "192.168.1.153",
        port: 30001,
    });
});

app.listen(30000, () => {
    console.log("Starting Dark and Darker Discovery Server");
});
