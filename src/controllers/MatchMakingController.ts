import net from "net";
import { bufferReader } from "../utils/bufferReader";
import { socketContextManager } from "../utils/SocketContextManager";
import { PacketResult } from "../protos/ts/_PacketCommand";
import { sc2sAutoMatchRegReq, ss2cAutoMatchRegRes } from "@/protos/ts/InGame";
import {
    DefineGame_DifficultyType,
    DefineMatch_MatchRegion,
} from "@/protos/ts/_Defins";
import cuid from "cuid";
import { logger } from "@/utils/loggers";

class Game {
    id: string;
    clientIds: string[] = [];
    region: DefineMatch_MatchRegion = DefineMatch_MatchRegion.US_EAST;
    difficulty: DefineGame_DifficultyType = DefineGame_DifficultyType.NORMAL;
    mode: number = 0;

    constructor() {
        this.id = cuid();
    }

    fromReq(req: sc2sAutoMatchRegReq) {
        this.region = req.region;
        this.difficulty = req.difficultyType;
        this.mode = req.mode;
    }

    addClient(clientId: string) {
        this.clientIds.push(clientId);
    }

    getSocketContext(clientId: string) {
        return socketContextManager.get(clientId);
    }

    removeClient(clientId: string) {
        this.clientIds.splice(this.clientIds.indexOf(clientId), 1);
    }
}

export const InMemoryGames = new Map<string, Game>();

export const startAutoMatchMaking = async (
    data: Buffer,
    socket: net.Socket
) => {
    const socketContext = socketContextManager.getBySocket(socket);
    const req = sc2sAutoMatchRegReq.decode(bufferReader(data));

    logger.debug(req);

    let res = ss2cAutoMatchRegRes.create({});

    if (!socketContext || !socketContext.userId) {
        res.result = PacketResult.FAIL_GENERAL;
        return res;
    }

    if (req.mode === 2) {
        return cancelAutoMatchMaking(data, socket);
    }

    const findGameAlreadyIn = Array.from(InMemoryGames.values()).find((game) =>
        game.clientIds.includes(socketContext.id)
    );

    if (findGameAlreadyIn) {
        res.result = PacketResult.FAIL_GENERAL;
        return res;
    }

    const game = new Game();

    game.fromReq(req);
    game.addClient(socketContext.id);

    InMemoryGames.set(game.id, game);

    logger.debug(game);

    res.result = PacketResult.SUCCESS;

    return res;
};

export const cancelAutoMatchMaking = async (
    data: Buffer,
    socket: net.Socket
) => {
    const socketContext = socketContextManager.getBySocket(socket);
    // const req = sc2sAutoMatchRegReq.decode(bufferReader(data));
    let res = ss2cAutoMatchRegRes.create({});

    if (!socketContext || !socketContext.userId) {
        res.result = PacketResult.FAIL_GENERAL;
        return res;
    }

    const findGameAlreadyIn = Array.from(InMemoryGames.values()).find((game) =>
        game.clientIds.includes(socketContext.id)
    );

    if (findGameAlreadyIn) {
        findGameAlreadyIn.removeClient(socketContext.id);

        res.result = PacketResult.SUCCESS;
        return res;
    }

    res.result = PacketResult.FAIL_GENERAL;
    return res;
};
