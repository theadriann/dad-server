//
import { logger } from "@/utils/loggers";
import cuid from "cuid";
import net from "net";
import { SocketContext } from "./SocketContext";

//
export class LobbyUser {
    //
    socket: net.Socket;
    sessionId: string;
    address: string;

    //
    userId: number | null = null;
    characterId: number | null = null;

    //
    socketContext: SocketContext;

    constructor(socket: net.Socket) {
        this.socket = socket;
        this.sessionId = cuid();
        this.address = socket.remoteAddress || "";

        this.socketContext = new SocketContext(this);
    }

    // -----------------------
    //
    // -----------------------

    setSocket(socket: net.Socket) {
        this.socket = socket;
        this.address = socket.remoteAddress || "";
    }

    setUserId(value: number) {
        this.userId = value;
    }

    setCharacterId(value: number) {
        this.characterId = value;
    }

    // -----------------------
    //
    // -----------------------

    get isLoggedIn() {
        return this.userId !== null;
    }

    get hasCharacterLoaded() {
        return this.isLoggedIn && this.characterId !== null;
    }
}
