import net from "net";
import { sc2sLobbyEnterReq, ss2cLobbyEnterRes } from "../protos/ts/Account";
import { bufferReader } from "../utils/bufferReader";
import { socketContextManager } from "../utils/SocketContextManager";
import { PacketResult } from "../protos/ts/_PacketCommand";
import {
    sc2sLobbyEnterFromGameReq,
    sc2sLobbyGameDifficultySelectReq,
    sc2sLobbyRegionSelectReq,
    ss2cLobbyEnterFromGameRes,
    ss2cLobbyGameDifficultySelectRes,
    ss2cLobbyRegionSelectRes,
} from "../protos/ts/Lobby";

export const enterLobby = async (data: Buffer, socket: net.Socket) => {
    //
    const socketContext = socketContextManager.getBySocket(socket);
    const reqData = sc2sLobbyEnterReq.decode(bufferReader(data));

    let res = ss2cLobbyEnterRes.create({});

    if (!socketContext || !socketContext.userId) {
        res.result = PacketResult.FAIL_LOBBY_ENTER_COUPON_CODE_INVALID;
        return res;
    }

    res.result = PacketResult.SUCCESS;
    res.accountId = socketContext.userId.toString();

    return res;
};

export const selectGameDifficulty = async (
    data: Buffer,
    socket: net.Socket
) => {
    //
    const socketContext = socketContextManager.getBySocket(socket);
    const reqData = sc2sLobbyGameDifficultySelectReq.decode(bufferReader(data));

    let res = ss2cLobbyGameDifficultySelectRes.create({});

    if (!socketContext || !socketContext.userId) {
        res.result = PacketResult.FAIL_GENERAL;
        return res;
    }

    res.gameDifficultyTypeIndex = reqData.gameDifficultyTypeIndex;
    res.result = PacketResult.SUCCESS;

    return res;
};

export const lobbyEnterFromGame = async (data: Buffer, socket: net.Socket) => {
    //
    const socketContext = socketContextManager.getBySocket(socket);
    const reqData = sc2sLobbyEnterFromGameReq.decode(bufferReader(data));

    let res = ss2cLobbyEnterFromGameRes.create({});

    if (!socketContext || !socketContext.userId) {
        res.result = PacketResult.FAIL_GENERAL;
        return res;
    }

    res.result = PacketResult.SUCCESS;

    return res;
};

export const selectRegion = async (data: Buffer, socket: net.Socket) => {
    //
    const socketContext = socketContextManager.getBySocket(socket);
    const reqData = sc2sLobbyRegionSelectReq.decode(bufferReader(data));

    let res = ss2cLobbyRegionSelectRes.create({});

    if (!socketContext || !socketContext.userId) {
        res.result = PacketResult.FAIL_GENERAL;
        return res;
    }

    res.result = PacketResult.SUCCESS;
    res.region = reqData.region;

    return res;
};
