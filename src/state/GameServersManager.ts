// utils
import dgram from "dgram";
import cuid from "cuid";
import { logger } from "@/utils/loggers";
import { SocketContextManager } from "@/utils/SocketContextManager";

// types
import {
    DefineGame_DifficultyType,
    DefineGame_Floor,
    DefineMatch_MatchRegion,
} from "@/protos/ts/_Defins";
import { buffer2HexSpacedString } from "@/utils/hex";

class GameServerUdpServer {
    //
    game: GameServer;
    instance: dgram.Socket | null = null;

    constructor(game: GameServer) {
        this.game = game;
    }

    start = () => {
        this.instance = dgram.createSocket("udp4");

        this.instance.on("error", (err) => {
            throw err;
        });

        this.instance.on("connect", () => {
            logger.info(`client connected to game ${this.game.id}.`);
        });

        this.instance.on("message", (msg, rinfo) => {
            logger.info(`client ${rinfo.address}:${rinfo.port} sent data:`);
            logger.debug(buffer2HexSpacedString(msg as Buffer));
            logger.info(msg.toString());
        });

        this.instance.bind(this.game.port, () => {
            const address = this.instance?.address();
            logger.info(
                `Starting Dark and Darker Game Server at ${address}${this.game.port}`
            );
        });
    };

    // -----------------------
    //
    // -----------------------
}

//
export class GameServer {
    id: string;
    port: number;
    players = new Map<number, string>();

    floor: DefineGame_Floor = DefineGame_Floor.NONE_FLOOR;
    region: DefineMatch_MatchRegion = DefineMatch_MatchRegion.EU_CENTRAL;
    difficulty: DefineGame_DifficultyType = DefineGame_DifficultyType.NORMAL;

    server: GameServerUdpServer;
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
        this.server = new GameServerUdpServer(this);
    }

    // -----------------------
    //
    // -----------------------

    start = () => {
        this.server.start();
    };

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

        server.start();

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
