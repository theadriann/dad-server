import net from "net";
import { bufferReader } from "../utils/bufferReader";
import { PacketResult } from "../protos/ts/_PacketCommand";
import {
    sc2sAutoMatchRegReq,
    sc2sAutoMatchRegReq_MODE,
    ss2cAutoMatchRegRes,
    ss2cAutoMatchRegRes_RESULT,
} from "@/protos/ts/InGame";
import {
    DefineGame_DifficultyType,
    DefineGame_Floor,
} from "@/protos/ts/_Defins";
import { logger } from "@/utils/loggers";
import { gameServersManager } from "@/state/GameServersManager";
import {
    announceGameEnterComplete,
    announceGameServerReady,
} from "@/services/GameServerNotifier";
import { getDbCharacterById } from "@/services/CharacterService";
import { lobbyState } from "@/state/LobbyManager";

export const startAutoMatchMaking = async (
    data: Buffer,
    socket: net.Socket
) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sAutoMatchRegReq.decode(bufferReader(data));

    logger.debug(req);

    let res = ss2cAutoMatchRegRes.create({});

    if (!lobbyUser || !lobbyUser.userId || !lobbyUser.characterId) {
        res.result = ss2cAutoMatchRegRes_RESULT.FAIL;
        return res;
    }

    if (req.mode === sc2sAutoMatchRegReq_MODE.CANCEL) {
        return cancelAutoMatchMaking(data, socket);
    }

    let game = gameServersManager.getUserGameServer(lobbyUser.userId);

    if (game) {
        return ss2cAutoMatchRegRes.create({
            result: ss2cAutoMatchRegRes_RESULT.FAIL_ALREADY_TRYING,
        });
    }

    // if (
    //     partyCount > 1 &&
    //     req.difficultyType === DefineGame_DifficultyType.GOBLIN
    // ) {
    //     return ss2cAutoMatchRegRes.create({
    //         result: ss2cAutoMatchRegRes_RESULT.FAIL_SOLO_ONLY,
    //     });
    // }

    // if (
    //     req.difficultyType === DefineGame_DifficultyType.HIGH_ROLLER &&
    //     money < 150
    // ) {
    //     return ss2cAutoMatchRegRes.create({
    //         result: ss2cAutoMatchRegRes_RESULT.FAIL_SHORTAGE_ENTRANCE_FEE,
    //     });
    // }

    game = gameServersManager.requestServer({
        floor: DefineGame_Floor.UNRECOGNIZED,
        region: req.region,
        difficulty: req.difficultyType,
        partyCount: 1,
    });

    if (!game) {
        return ss2cAutoMatchRegRes.create({
            result: ss2cAutoMatchRegRes_RESULT.FAIL_SERVER_DISABLE,
        });
    }

    setTimeout(async () => {
        if (!game || !lobbyUser?.userId || !lobbyUser?.characterId) {
            logger.error("wtf?!");
            return;
        }

        announceGameServerReady(
            {
                game,
                accountId: lobbyUser.userId,
                nickName: (await getDbCharacterById(lobbyUser.characterId))!
                    .nickname,
                sessionId: lobbyUser.sessionId,
            },
            socket
        );
    }, 5000);

    // setTimeout(async () => {
    //     if (!game) {
    //         logger.error("wtf?!");
    //         return;
    //     }

    //     announceGameEnterComplete(
    //         {
    //             game,
    //             isSuccess: 0,
    //         },
    //         socket
    //     );
    // }, 4000);

    // TODO: actually join all the players in the party
    game.join(lobbyUser.userId);

    logger.debug(game);

    res.result = ss2cAutoMatchRegRes_RESULT.SUCCESS;

    return res;
};

export const cancelAutoMatchMaking = async (
    data: Buffer,
    socket: net.Socket
) => {
    const lobbyUser = lobbyState.getBySocket(socket);

    if (!lobbyUser || !lobbyUser.userId) {
        return ss2cAutoMatchRegRes.create({
            result: ss2cAutoMatchRegRes_RESULT.FAIL,
        });
    }

    let game = gameServersManager.getUserGameServer(lobbyUser.userId);

    if (game && game.userCanLeaveMatchmaking(lobbyUser.userId)) {
        //
        game.leave(lobbyUser.userId);

        return ss2cAutoMatchRegRes.create({
            result: ss2cAutoMatchRegRes_RESULT.SUCCESS,
        });
    }

    return ss2cAutoMatchRegRes.create({
        result: ss2cAutoMatchRegRes_RESULT.FAIL,
    });
};
