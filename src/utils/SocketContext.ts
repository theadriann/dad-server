import cuid from "cuid";
import net from "net";

//
export class SocketContext {
    //
    id: string;
    socket: net.Socket;
    sessionId: string;
    dataNumber: number;
    keepAliveNumber: number;
    loggedIn: boolean = false;

    userId: number | null = null;

    constructor(socket: net.Socket) {
        this.id = cuid();
        this.socket = socket;
        this.sessionId = cuid();
        this.dataNumber = 0;
        this.keepAliveNumber = 0;
    }

    setLoggedIn(value: boolean) {
        this.loggedIn = value;
    }

    setUserId(value: number) {
        this.userId = value;
    }
}
