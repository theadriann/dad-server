//
import { LobbyUser } from "@/models/lobby/LobbyUser";
import { Party } from "@/models/lobby/Party";
import { scharacterPartyInfo } from "@/protos/ts/_Character";
import { logger } from "@/utils/loggers";
import cuid from "cuid";
import net from "net";

export class LobbyState {
    //
    users = new Map<string, LobbyUser>();
    parties = new Map<string, Party>();

    create = (socket: net.Socket) => {
        const user = new LobbyUser(socket, this);
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
    // Party
    // -----------------------

    createParty = (user: LobbyUser) => {
        const party = new Party(this);

        party.addCharacter(user.characterId!);
        party.setPartyLeader(user.characterId!);

        this.parties.set(party.id, party);
    };

    ensureUserParty = (user: LobbyUser) => {
        if (user.getParty()) {
            return;
        }

        this.createParty(user);
    };

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
