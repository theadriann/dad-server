//
import net from "net";
import { SocketContext } from "./SocketContext";

export class SocketContextManager {
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

    getAllActive() {
        return this._socketContexts.filter(
            (socketContext) => !socketContext.socket.destroyed
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

    getByUserId(userId: number) {
        return this._socketContexts.find(
            (socketContext) => socketContext.userId === userId
        );
    }

    getByCharacterId(characterId: number) {
        return this._socketContexts.find(
            (socketContext) => socketContext.characterId === characterId
        );
    }
}

export const socketContextManager = new SocketContextManager();
