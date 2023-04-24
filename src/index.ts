// controllers
import { processPacket } from "./controllers/packets/processPacket";

// utils
import "./discoveryServer";
import net from "net";
import { buffer2HexSpacedString, numberToHex } from "./utils/hex";
import { socketContextManager } from "./utils/SocketContextManager";

// types
import { packetCommandFromJSON } from "./protos/ts/_PacketCommand";

export const makeHeader = (
    packet: Buffer | Uint8Array,
    packetType: string | number
) => {
    const type = packetCommandFromJSON(packetType);
    const totalLength = packet.length + 8;
    const totalLengthHex = numberToHex(totalLength);

    let lengthComponents = Buffer.from([totalLength]);
    let headerRest = [];

    console.log(`Header: ${totalLength}`);
    console.log(`Header Length: ${totalLengthHex.length}`);

    if (totalLengthHex.length <= 2) {
        headerRest.push(0x00);
    } else {
        lengthComponents = Buffer.from(
            numberToHex(totalLength).match(/.{2}/g)!.reverse().join(""),
            "hex"
        );
    }

    headerRest = [...headerRest, 0x00, 0x00, type, 0x00, 0x00, 0x00];

    return Buffer.from([...lengthComponents, ...headerRest]);
};

export const sendPacket = (
    socket: net.Socket,
    packet: Buffer | Uint8Array,
    packetType: string | number
) => {
    const header = makeHeader(packet, packetType);

    if (packet instanceof Uint8Array) {
        packet = Buffer.from(packet);
    }

    console.log(`Sending Packet ${packetType}`);
    console.log(header, packet);
    const packetToSend = Buffer.from([...header, ...packet]);

    socket.write(packetToSend);
};

const tcpServer = net.createServer((socket) => {
    //
    const context = socketContextManager.create(socket);

    //
    console.log(`${context.id} client connected`);

    socket.on("end", () => {
        console.log("client disconnected");
        socket.destroy();
    });

    socket.on("error", (err) => {
        console.log("client error", err);
        socket.destroy();
    });

    socket.on("data", async (data) => {
        console.log(`\n\ndata received from ${context.id}`);

        //
        console.log("[HEX]\n", buffer2HexSpacedString(data));

        //
        context.appendData(data);

        if (context.processLock) {
            console.log("Socket is locked, skipping packet processing");
            return;
        }

        context.setProcessLock(true);
        context.deleteDataCleaningTimeout();

        while (context.hasCompleteData()) {
            const { data, rest } = context.getCompleteData();

            // set the rest of the data back into the context
            console.log("[HEX-DATA]\n", buffer2HexSpacedString(data));
            console.log("[HEX-REMAINING]\n", buffer2HexSpacedString(rest));

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

tcpServer.listen(process.env.LOBBY_PORT || 30001, () => {
    console.log("Starting Dark and Darker Login Server");
});
