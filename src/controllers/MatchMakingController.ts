import net from "net";
import { bufferReader } from "../utils/bufferReader";
import { socketContextManager } from "../utils/SocketContextManager";
import { PacketResult } from "../protos/ts/_PacketCommand";
import { sc2sAutoMatchRegReq, ss2cAutoMatchRegRes } from "@/protos/ts/InGame";
import { DefineGame_Floor } from "@/protos/ts/_Defins";
import { logger } from "@/utils/loggers";
import { gameServersManager } from "@/state/GameServersManager";

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

    let game = gameServersManager.getUserGameServer(socketContext.userId);

    if (game) {
        return ss2cAutoMatchRegRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    game = gameServersManager.requestServer({
        floor: DefineGame_Floor.UNRECOGNIZED,
        region: req.region,
        difficulty: req.difficultyType,
        partyCount: 1,
    });

    if (!game) {
        return ss2cAutoMatchRegRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    // TODO: actually join all the players in the party
    game.join(socketContext.userId);

    logger.debug(game);

    res.result = PacketResult.SUCCESS;

    return res;
};

export const cancelAutoMatchMaking = async (
    data: Buffer,
    socket: net.Socket
) => {
    const socketContext = socketContextManager.getBySocket(socket);

    if (!socketContext || !socketContext.userId) {
        return ss2cAutoMatchRegRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    let game = gameServersManager.getUserGameServer(socketContext.userId);

    if (game && game.userCanLeaveMatchmaking(socketContext.userId)) {
        //
        game.leave(socketContext.userId);

        return ss2cAutoMatchRegRes.create({
            result: PacketResult.SUCCESS,
        });
    }

    return ss2cAutoMatchRegRes.create({
        result: PacketResult.FAIL_GENERAL,
    });
};
