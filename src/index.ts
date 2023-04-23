import net from "net";

const tcpServer = net.createServer((socket) => {
    console.log("client connected");

    socket.on("end", () => {
        console.log("client disconnected");
    });

    socket.write("hello\r\n");
    socket.pipe(socket);
});

tcpServer.on("error", (err) => {
    throw err;
});

tcpServer.listen(30001, () => {
    console.log("server bound");
});
