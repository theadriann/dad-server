import net from "net";
import "./helloWorld";
import { scopedLogger } from "./utils/FileLogger";
import cuid from "cuid";
import { Parser } from "binary-parser";
import {
    PacketCommand,
    packetCommandFromJSON,
    ss2cAliveRes,
} from "./protos/ts/_PacketCommand";
import {
    ss2cAccountCharacterCreateRes,
    ss2cAccountCharacterListRes,
    ss2cAccountLoginRes,
} from "./protos/ts/Account";
import { socketContextManager } from "./utils/SocketContextManager";
import { login } from "./controllers/login_controller";
import { createCharacter } from "./controllers/character_creation_controller";
import { listCharacters } from "./controllers/character_list_controller";

export const makeHeader = (
    packet: Buffer | Uint8Array,
    packetType: string | number
) => {
    const type = packetCommandFromJSON(packetType);
    const totalLength = packet.length + 8;
    const header = [totalLength, 0x00, 0x00, 0x00, type, 0x00, 0x00, 0x00];

    return Buffer.from(header);
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

    // console.log(header, packet);

    const packetToSend = Buffer.from([...header, ...packet]);

    socket.write(packetToSend);
};

const tcpServer = net.createServer((socket) => {
    //
    socketContextManager.create(socket);

    let clientId = cuid();
    let dataNumber = 0;

    //
    console.log(`${clientId} client connected`);

    socket.on("end", () => {
        console.log("client disconnected");
    });

    socket.on("error", (err) => {
        console.log("client error", err);
    });

    socket.on("data", async (data) => {
        console.log("\n\nClient Data Received");

        //
        dataNumber++;
        const logger = scopedLogger(`${clientId}/${dataNumber}`);

        // show every hex byte
        const hex = data.toString("hex");

        const dataArr: any[] = [];
        for (let i = 0; i < hex.length; i += 2) {
            dataArr.push(hex.substr(i, 2));
        }

        // ASCII
        // console.log(`Length: ${data.length}`);
        // console.log("ASCII\n", data.toString("ascii"));
        console.log("HEX:\n", dataArr.join(" "));
        logger.log(data.toString("ascii"));

        const parser = new Parser()
            .uint8("totalLength")
            .uint8("pad1")
            .uint8("pad2")
            .uint8("pad3")
            .uint8("type");

        const parsed = parser.parse(data);

        switch (packetCommandFromJSON(parsed.type)) {
            case PacketCommand.C2S_ACCOUNT_LOGIN_REQ: {
                console.log(`Login REQUEST`);

                const loginRes = await login(data, socket);

                sendPacket(
                    socket,
                    ss2cAccountLoginRes.encode(loginRes).finish(),
                    PacketCommand.S2C_ACCOUNT_LOGIN_RES
                );

                break;
            }

            case PacketCommand.C2S_ALIVE_REQ: {
                console.log(`Keep Alive REQUEST`);

                sendPacket(
                    socket,
                    ss2cAliveRes.encode(ss2cAliveRes.create({})).finish(),
                    PacketCommand.S2C_ALIVE_RES
                );

                break;
            }

            case PacketCommand.C2S_ACCOUNT_CHARACTER_LIST_REQ: {
                console.log(`Character List REQUEST`);

                const characterListResData = await listCharacters(data, socket);

                sendPacket(
                    socket,
                    ss2cAccountCharacterListRes
                        .encode(characterListResData)
                        .finish(),
                    PacketCommand.S2C_ACCOUNT_CHARACTER_LIST_RES
                );

                break;
            }

            case PacketCommand.C2S_ACCOUNT_CHARACTER_CREATE_REQ: {
                console.log(`Character Create REQUEST`);

                const characterResponseData = await createCharacter(
                    data,
                    socket
                );

                console.log(`Sending RESPONSE`);
                sendPacket(
                    socket,
                    ss2cAccountCharacterCreateRes
                        .encode(characterResponseData)
                        .finish(),
                    PacketCommand.S2C_ACCOUNT_CHARACTER_CREATE_RES
                );

                break;
            }

            default: {
                console.log(`Unknown Packet`);
                console.log(`Packet Type: ${parsed.type}`);
                break;
            }
        }
    });

    socket.pipe(socket);
});

tcpServer.on("error", (err) => {
    throw err;
});

tcpServer.listen(30001, () => {
    console.log("Starting Dark and Darker Login Server");
});
