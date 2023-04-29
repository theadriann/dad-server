//
import { GatheringHall } from "@/models/lobby/GatheringHall";
import { LobbyUser } from "@/models/lobby/LobbyUser";
import { Party } from "@/models/lobby/Party";
import { logger } from "@/utils/loggers";
import net from "net";

export class LobbyState {
    //
    users = new Map<string, LobbyUser>();
    parties = new Map<string, Party>();
    halls = new Map<string, GatheringHall>();

    constructor() {
        this.createGatheringHall();
    }

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
    //
    // -----------------------

    kickOtherConnectionsForUserId = (userId: number) => {
        let user = null;

        while ((user = this.getByUserId(userId))) {
            logger.info(
                `Kicking user ${userId} - ${user.sessionId} from lobby`
            );
            user.onDisconnect();
            this.remove(user);
        }
    };

    // -----------------------
    // Gathering Hall
    // -----------------------

    createGatheringHall = () => {
        const hall = new GatheringHall(this);
        hall.id = "default";

        this.halls.set(hall.id, hall);
    };

    // -----------------------
    // Party
    // -----------------------

    createParty = (user: LobbyUser) => {
        const party = new Party(this);

        party.addUser(user.userId!);
        party.setPartyLeader(user.userId!);

        this.parties.set(party.id, party);
    };

    ensureUserParty = (user: LobbyUser) => {
        if (user.getParty()) {
            return;
        }

        this.createParty(user);
    };

    removeUserFromParties = (userId: number) => {
        const user = this.getByUserId(userId);
        const party = user?.getParty();

        if (party) {
            party.removeUser(userId);
        }
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
            (user) => !user.socket.destroyed
        );
    }
}

export const lobbyState = new LobbyState();
