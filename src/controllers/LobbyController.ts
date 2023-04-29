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
import { FriendLocation } from "@/protos/ts/_Character";
import { sc2sPartyReadyReq, ss2cPartyReadyRes } from "@/protos/ts/Party";

export const enterLobbyAction = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const reqData = sc2sLobbyEnterReq.decode(bufferReader(data));

    if (!lobbyUser || !lobbyUser.userId) {
        return;
    }

    lobbyUser.setCharacterId(Number(reqData.characterId));

    await lobbyUser.loadCharacterData();

    // lobbyUser.setLocation(DefineCommon_MetaLocation.PLAY);
    // lobbyUser.setFriendLocation(FriendLocation.Friend_Location_LOBBY);
    // lobbyUser.announcePartyStatus();
};

export const enterLobby = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const reqData = sc2sLobbyEnterReq.decode(bufferReader(data));

    if (!lobbyUser?.hasCharacterLoaded) {
        return ss2cLobbyEnterRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    lobbyUser.setLocation(DefineCommon_MetaLocation.PLAY);
    lobbyUser.setFriendLocation(FriendLocation.Friend_Location_LOBBY);
    lobbyUser.announcePartyStatus();

    return ss2cLobbyEnterRes.create({
        accountId: lobbyUser.userId?.toString(),
        result: PacketResult.SUCCESS,
    });
};

export const selectGameDifficulty = async (
    data: Buffer,
    socket: net.Socket
) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const party = lobbyUser?.getParty();
    const reqData = sc2sLobbyGameDifficultySelectReq.decode(bufferReader(data));
    const difficulty: DefineGame_DifficultyType =
        reqData.gameDifficultyTypeIndex;

    if (!lobbyUser || !lobbyUser.userId) {
        return ss2cLobbyGameDifficultySelectRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    if (!party) {
        //
        lobbyUser.setGameDifficultyId(difficulty);

        //
        return ss2cLobbyGameDifficultySelectRes.create({
            result: PacketResult.SUCCESS,
            gameDifficultyTypeIndex: difficulty,
        });
    }

    if (!party.isPartyLeader(lobbyUser)) {
        return ss2cLobbyGameDifficultySelectRes.create({
            result: PacketResult.FAIL_GENERAL,
            gameDifficultyTypeIndex: difficulty,
        });
    }

    party.setGameDifficultyId(difficulty);

    return ss2cLobbyGameDifficultySelectRes.create({
        result: PacketResult.SUCCESS,
        gameDifficultyTypeIndex: difficulty,
    });
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
    const region: DefineMatch_MatchRegion = reqData.region;

    if (!lobbyUser || !lobbyUser.userId) {
        return ss2cLobbyRegionSelectRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    const party = lobbyUser.getParty();
    if (!party) {
        //
        lobbyUser.setRegionId(region);

        return ss2cLobbyRegionSelectRes.create({
            result: PacketResult.SUCCESS,
            region: region,
        });
    }

    if (!party.isPartyLeader(lobbyUser)) {
        return ss2cLobbyRegionSelectRes.create({
            result: PacketResult.FAIL_GENERAL,
            region: region,
        });
    }

    party.setRegionId(region);

    return ss2cLobbyRegionSelectRes.create({
        result: PacketResult.SUCCESS,
        region: region,
    });
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
    const party = lobbyUser.getParty();
    if (party) {
        party.announceMemberLocationChange(lobbyUser.userId!);
    }

    return res;
};

export const backToCharacterSelect = async (
    data: Buffer,
    socket: net.Socket
) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const party = lobbyUser?.getParty();

    let res = ss2cCharacterSelectEnterRes.create({});

    if (!lobbyUser || !lobbyUser.characterId) {
        res.result = PacketResult.FAIL_GENERAL;
        return;
    }

    lobbyUser.setFriendLocation(FriendLocation.Friend_Location_OFFLINE);
    lobbyUser.setLocation(DefineCommon_MetaLocation.CHARACTER_SELECT);
    if (party) {
        party.announceMemberLocationChange(lobbyUser.userId!);
    }

    res.result = PacketResult.SUCCESS;

    return res;
};

export const onPartyReadyReq = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);
    const req = sc2sPartyReadyReq.decode(bufferReader(data));

    if (!lobbyUser || !lobbyUser.characterId) {
        return ss2cPartyReadyRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    const party = lobbyUser.getParty();

    if (!party) {
        return ss2cPartyReadyRes.create({
            result: PacketResult.FAIL_GENERAL,
        });
    }

    //
    lobbyUser.setIsReady(req.isReady);

    //
    party.announceReadyChange(lobbyUser.userId!);
};
