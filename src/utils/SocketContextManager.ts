//
import net from "net";
import { SocketContext } from "./SocketContext";

class SocketContextManager {
    private _socketContexts: SocketContext[] = [];

    create(socket: net.Socket) {
        const socketContext = new SocketContext(socket);
        this.add(socketContext);
        return socketContext;
    }

    add(socketContext: SocketContext) {
        this._socketContexts.push(socketContext);
    }

    remove(socketContext: SocketContext) {
        const index = this._socketContexts.indexOf(socketContext);
        if (index > -1) {
            this._socketContexts.splice(index, 1);
        }
    }

    get(id: string) {
        return this._socketContexts.find(
            (socketContext) => socketContext.id === id
        );
    }

    getBySocket(socket: net.Socket) {
        return this._socketContexts.find(
            (socketContext) => socketContext.socket === socket
        );
    }

    getSocketContexts() {
        return this._socketContexts;
    }

    getByAddress(address: string) {
        return this._socketContexts.find(
            (socketContext) => socketContext.address === address
        );
    }
}

export const socketContextManager = new SocketContextManager();
