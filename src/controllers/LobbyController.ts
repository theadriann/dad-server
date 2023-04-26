import net from "net";
import { sc2sLobbyEnterReq, ss2cLobbyEnterRes } from "../protos/ts/Account";
import { bufferReader } from "../utils/bufferReader";
import { PacketResult } from "../protos/ts/_PacketCommand";
import {
    sc2sCharacterSelectEnterReq,
    sc2sLobbyEnterFromGameReq,
    sc2sLobbyGameDifficultySelectReq,
    sc2sLobbyRegionSelectReq,
    ss2cCharacterSelectEnterRes,
    ss2cLobbyEnterFromGameRes,
    ss2cLobbyGameDifficultySelectRes,
    ss2cLobbyRegionSelectRes,
} from "../protos/ts/Lobby";
import { sc2sMetaLocationReq, ss2cMetaLocationRes } from "../protos/ts/Common";
import {
    DefineCommon_MetaLocation,
    DefineGame_DifficultyType,
    DefineMatch_MatchRegion,
} from "../protos/ts/_Defins";
import { logger } from "@/utils/loggers";
import { lobbyState } from "@/state/LobbyManager";

export const enterLobby = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const reqData = sc2sLobbyEnterReq.decode(bufferReader(data));

    let res = ss2cLobbyEnterRes.create({});

    if (!lobbyUser || !lobbyUser.userId) {
        res.result = PacketResult.FAIL_LOBBY_ENTER_COUPON_CODE_INVALID;
        return res;
    }

    res.result = PacketResult.SUCCESS;
    res.accountId = lobbyUser.userId.toString();

    lobbyUser.setCharacterId(Number(reqData.characterId));

    logger.debug(res);

    return res;
};

export const selectGameDifficulty = async (
    data: Buffer,
    socket: net.Socket
) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const reqData = sc2sLobbyGameDifficultySelectReq.decode(bufferReader(data));

    let res = ss2cLobbyGameDifficultySelectRes.create({});

    if (!lobbyUser || !lobbyUser.userId) {
        res.result = PacketResult.FAIL_GENERAL;
        return res;
    }

    const difficulty: DefineGame_DifficultyType =
        reqData.gameDifficultyTypeIndex;

    if (difficulty === DefineGame_DifficultyType.HIGH_ROLLER) {
        // check money
    }

    res.gameDifficultyTypeIndex = difficulty;
    res.result = PacketResult.SUCCESS;

    return res;
};

export const lobbyEnterFromGame = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const reqData = sc2sLobbyEnterFromGameReq.decode(bufferReader(data));

    let res = ss2cLobbyEnterFromGameRes.create({});

    if (!lobbyUser || !lobbyUser.userId) {
        res.result = PacketResult.FAIL_GENERAL;
        return res;
    }

    res.result = PacketResult.SUCCESS;

    return res;
};

export const selectRegion = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const reqData = sc2sLobbyRegionSelectReq.decode(bufferReader(data));

    let res = ss2cLobbyRegionSelectRes.create({});

    if (!lobbyUser || !lobbyUser.userId) {
        res.result = PacketResult.FAIL_GENERAL;
        return res;
    }

    res.result = PacketResult.SUCCESS;

    const region: DefineMatch_MatchRegion = reqData.region;
    res.region = region;

    return res;
};

export const getPlayerLobbyLocation = async (
    data: Buffer,
    socket: net.Socket
) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const reqData = sc2sMetaLocationReq.decode(bufferReader(data));

    let res = ss2cMetaLocationRes.create({});

    if (!lobbyUser || !lobbyUser.characterId) {
        return res;
    }

    const location: DefineCommon_MetaLocation = reqData.location;
    res.location = location;
    lobbyUser.setLocation(location);

    // notify party members of location change

    return res;
};

export const backToCharacterSelect = async (
    data: Buffer,
    socket: net.Socket
) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const reqData = sc2sCharacterSelectEnterReq.decode(bufferReader(data));

    let res = ss2cCharacterSelectEnterRes.create({});

    if (!lobbyUser || !lobbyUser.characterId) {
        res.result = PacketResult.FAIL_GENERAL;
        return;
    }

    res.result = PacketResult.SUCCESS;

    return res;
};
