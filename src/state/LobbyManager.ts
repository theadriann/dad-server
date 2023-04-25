//
import { LobbyUser } from "@/models/lobby/User";
import { logger } from "@/utils/loggers";
import cuid from "cuid";
import net from "net";

export class LobbyState {
    //
    users = new Map<string, LobbyUser>();

    create = (socket: net.Socket) => {
        const user = new LobbyUser(socket);
        this.add(user);
        return user;
    };

    add(user: LobbyUser) {
        this.users.set(user.sessionId, user);
    }

    remove(user: LobbyUser) {
        this.users.delete(user.sessionId);
    }

    // -----------------------
    // Selectors
    // -----------------------

    getBySessionId(id: string) {
        return this.users.get(id);
    }

    getByAddress(address: string) {
        return Array.from(this.users.values()).find(
            (user) => user.address === address
        );
    }

    getByUserId(userId: number) {
        return Array.from(this.users.values()).find(
            (user) => user.userId === userId
        );
    }

    getByCharacterId(characterId: number) {
        return Array.from(this.users.values()).find(
            (user) => user.characterId === characterId
        );
    }

    getBySocket(socket: net.Socket) {
        return Array.from(this.users.values()).find(
            (user) => user.socket === socket
        );
    }

    getAllActive() {
        return Array.from(this.users.values()).filter(
            (user) => !user.socketContext.active
        );
    }
}

export const lobbyState = new LobbyState();
