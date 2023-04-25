import net from "net";
import { sendPacket } from "@/utils/packets";
import { GameServer } from "@/state/GameServersManager";
import {
    sc2sGameEnterCompleteNot,
    ss2cAutoMatchRegTeamNot,
    ss2cEnterGameServerNot,
} from "@/protos/ts/InGame";
import { PacketCommand } from "@/protos/ts/_PacketCommand";
import { createCharacterNickname } from "@/controllers/CharacterController";
import { SERVER_IP } from "@/utils/info";

export const announceGameServerReady = async (
    data: {
        game: GameServer;
        accountId: number;
        nickName: string;
    },
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        ss2cEnterGameServerNot
            .encode(
                ss2cEnterGameServerNot.create({
                    accountId: data.accountId.toString(),
                    ip: SERVER_IP,
                    port: data.game.port,
                    isReconnect: 0,
                    nickName: await createCharacterNickname(data.nickName),
                })
            )
            .finish(),
        PacketCommand.S2C_ENTER_GAME_SERVER_NOT
    );
};

export const announceGameEnterComplete = async (
    data: {
        game: GameServer;
        isSuccess: number;
    },
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        sc2sGameEnterCompleteNot
            .encode(
                sc2sGameEnterCompleteNot.create({
                    isSuccess: data.isSuccess,
                })
            )
            .finish(),
        PacketCommand.C2S_GAME_ENTER_COMPLETE_NOT
    );
};

// annoucne the other players the leadder has started or canceled matchmaking
export const announceAutoMatchRegTeam = async (
    data: {
        game: GameServer;
        accountId: number;
        nickName: string;
    },
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        ss2cAutoMatchRegTeamNot
            .encode(
                ss2cAutoMatchRegTeamNot.create({
                    mode: 1,
                    result: 1,
                })
            )
            .finish(),
        PacketCommand.S2C_AUTO_MATCH_REG_TEAM_NOT
    );
};
