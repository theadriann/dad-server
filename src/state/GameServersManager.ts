// utils
import cuid from "cuid";
import { SocketContextManager } from "@/utils/SocketContextManager";

// types
import {
    DefineGame_DifficultyType,
    DefineGame_Floor,
    DefineMatch_MatchRegion,
} from "@/protos/ts/_Defins";

//
export class GameServer {
    id: string;
    port: number;
    players = new Map<number, string>();

    floor: DefineGame_Floor = DefineGame_Floor.NONE_FLOOR;
    region: DefineMatch_MatchRegion = DefineMatch_MatchRegion.EU_CENTRAL;
    difficulty: DefineGame_DifficultyType = DefineGame_DifficultyType.NORMAL;

    socketContextManager = new SocketContextManager();

    phase: "waiting-players" | "lobby" | "game" = "waiting-players";

    constructor(config: {
        port: number;
        floor: DefineGame_Floor;
        region: DefineMatch_MatchRegion;
        difficulty: DefineGame_DifficultyType;
    }) {
        this.id = cuid();
        this.port = config.port;
        this.floor = config.floor;
        this.region = config.region;
        this.difficulty = config.difficulty;
    }

    // -----------------------
    //
    // -----------------------

    start = () => {};

    join = (userId: number) => {
        // TODO: add socket context to game server
        // and match with the user id

        this.players.set(userId, cuid()); // TBC
    };

    leave = (userId: number) => {
        this.players.delete(userId);
    };

    // -----------------------
    //
    // -----------------------

    isFull = () => {
        return this.players.size >= 10;
    };

    canJoin = (count: number) => {
        return this.players.size + count <= 10;
    };

    userCanLeaveMatchmaking = (userId: number) => {
        return this.phase === "waiting-players" && this.players.has(userId);
    };

    hasUser = (userId: number) => {
        return this.players.has(userId);
    };
}

//
export class GameServersManager {
    //
    servers = new Map<string, GameServer>();

    //
    addServer(server: GameServer) {
        this.servers.set(server.id, server);
    }

    createServer(config: {
        floor: DefineGame_Floor;
        region: DefineMatch_MatchRegion;
        difficulty: DefineGame_DifficultyType;
    }) {
        const port = this.findFreePort();

        if (!port) {
            return null;
        }

        const server = new GameServer({
            port,
            floor: config.floor,
            region: config.region,
            difficulty: config.difficulty,
        });

        this.addServer(server);

        return server;
    }

    requestServer(config: {
        floor: DefineGame_Floor;
        region: DefineMatch_MatchRegion;
        difficulty: DefineGame_DifficultyType;
        partyCount: number;
    }) {
        const { floor, region, difficulty } = config;

        const server = [...this.servers.values()].find(
            (server) =>
                server.floor === floor &&
                server.region === region &&
                server.difficulty === difficulty &&
                !server.canJoin(config.partyCount)
        );

        if (server) {
            return server;
        }

        return this.createServer({
            floor: config.floor,
            region: config.region,
            difficulty: config.difficulty,
        });
    }

    // -----------------------
    //
    // -----------------------

    findFreePort() {
        const minPort = Number(process.env.GAME_PORT_MIN || 32000);
        const maxPort = Number(process.env.GAME_PORT_MAX || 32100);

        for (let port = minPort; port <= maxPort; port++) {
            if (this.isPortFree(port)) {
                return port;
            }
        }

        return null;
    }

    isPortFree(port: number) {
        return [...this.servers.values()].every(
            (server) => server.port !== port
        );
    }

    // -----------------------
    //
    // -----------------------

    isUserInGame(userId: number) {
        return [...this.servers.values()].some((server) =>
            server.hasUser(userId)
        );
    }

    getUserGameServer(userId: number) {
        return (
            [...this.servers.values()].find((server) =>
                server.hasUser(userId)
            ) || null
        );
    }
}

export const gameServersManager = new GameServersManager();