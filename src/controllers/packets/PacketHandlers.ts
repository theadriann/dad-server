// controllers
import { createCharacter, listCharacters } from "../CharacterController";
import { login } from "../AuthController";
import {
    enterLobby,
    lobbyEnterFromGame,
    selectGameDifficulty,
    selectRegion,
} from "../LobbyController";

// utils
import net from "net";

// commandsq
import { PacketCommand } from "../../protos/ts/_PacketCommand";

// types
import { ss2cAliveRes } from "../../protos/ts/_PacketCommand";
import {
    ss2cAccountCharacterCreateRes,
    ss2cAccountCharacterListRes,
    ss2cAccountLoginRes,
    ss2cLobbyEnterRes,
} from "../../protos/ts/Account";
import {
    ss2cLobbyAccountCurrencyListNot,
    ss2cLobbyEnterFromGameRes,
    ss2cLobbyGameDifficultySelectRes,
    ss2cLobbyRegionSelectRes,
    ss2cLobbyReportPunishListNot,
    ss2cOpenLobbyMapRes,
} from "../../protos/ts/Lobby";
import { DefineAccount_CurrencyType } from "../../protos/ts/_Defins";

export type PacketHandler = {
    label: string;
    requestCommand: PacketCommand;
    res: {
        type: any;
        handler: (data: Buffer, socket: net.Socket) => Promise<any>;
        command: PacketCommand;
    }[];
};

export const PacketHandlers: PacketHandler[] = [
    {
        label: "Login",
        requestCommand: PacketCommand.C2S_ACCOUNT_LOGIN_REQ,
        res: [
            {
                type: ss2cAccountLoginRes,
                handler: login,
                command: PacketCommand.S2C_ACCOUNT_LOGIN_RES,
            },
        ],
    },
    {
        label: "KeepAlive",
        requestCommand: PacketCommand.C2S_ALIVE_REQ,
        res: [
            {
                type: ss2cAliveRes,
                handler: async (data: Buffer, socket: net.Socket) =>
                    ss2cAliveRes.create({}),
                command: PacketCommand.S2C_ALIVE_RES,
            },
        ],
    },
    {
        label: "FetchCharacterList",
        requestCommand: PacketCommand.C2S_ACCOUNT_CHARACTER_LIST_REQ,
        res: [
            {
                type: ss2cAccountCharacterListRes,
                handler: listCharacters,
                command: PacketCommand.S2C_ACCOUNT_CHARACTER_LIST_RES,
            },
        ],
    },
    {
        label: "CreateCharacter",
        requestCommand: PacketCommand.C2S_ACCOUNT_CHARACTER_CREATE_REQ,
        res: [
            {
                command: PacketCommand.S2C_ACCOUNT_CHARACTER_CREATE_RES,
                type: ss2cAccountCharacterCreateRes,
                handler: createCharacter,
            },
        ],
    },
    {
        label: "LobbyEnter",
        requestCommand: PacketCommand.C2S_LOBBY_ENTER_REQ,
        res: [
            {
                command: PacketCommand.S2C_LOBBY_ENTER_RES,
                type: ss2cLobbyEnterRes,
                handler: enterLobby,
            },
        ],
    },
    {
        label: "LobbyEnterFromGame",
        requestCommand: PacketCommand.C2S_LOBBY_ENTER_FROM_GAME_REQ,
        res: [
            {
                command: PacketCommand.S2C_LOBBY_ENTER_FROM_GAME_RES,
                type: ss2cLobbyEnterFromGameRes,
                handler: lobbyEnterFromGame,
            },
        ],
    },
    {
        label: "LobbyRegionSelect",
        requestCommand: PacketCommand.C2S_LOBBY_REGION_SELECT_REQ,
        res: [
            {
                command: PacketCommand.S2C_LOBBY_REGION_SELECT_RES,
                type: ss2cLobbyRegionSelectRes,
                handler: selectRegion,
            },
        ],
    },
    {
        label: "LobbyMapRequest",
        requestCommand: PacketCommand.C2S_OPEN_LOBBY_MAP_REQ,
        res: [
            {
                type: ss2cOpenLobbyMapRes,
                handler: async () => ss2cOpenLobbyMapRes.create({}),
                command: PacketCommand.S2C_OPEN_LOBBY_MAP_RES,
            },
        ],
    },
    {
        label: "Game Difficulty Select",
        requestCommand: PacketCommand.C2S_LOBBY_GAME_DIFFICULTY_SELECT_REQ,
        res: [
            {
                type: ss2cLobbyGameDifficultySelectRes,
                handler: selectGameDifficulty,
                command: PacketCommand.S2C_LOBBY_GAME_DIFFICULTY_SELECT_RES,
            },
        ],
    },
    {
        label: "LobbyAccountCurrencyListNot",
        requestCommand: PacketCommand.S2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOT,
        res: [
            {
                type: ss2cLobbyAccountCurrencyListNot,
                command: PacketCommand.S2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOT,
                handler: async (data: Buffer, socket: net.Socket) => {
                    return ss2cLobbyAccountCurrencyListNot.create({
                        currencyInfos: [
                            {
                                currencyType:
                                    DefineAccount_CurrencyType.ADVENTURE,
                                currencyValue: 1000,
                            },
                            {
                                currencyType:
                                    DefineAccount_CurrencyType.CURRENCY_NONE,
                                currencyValue: 100,
                            },
                        ],
                    });
                },
            },
        ],
    },
    {
        label: "LobbyReportPunishListNot",
        requestCommand: PacketCommand.S2C_LOBBY_REPORT_PUNISH_LIST_NOT,
        res: [
            {
                command: PacketCommand.S2C_LOBBY_REPORT_PUNISH_LIST_NOT,
                type: ss2cLobbyReportPunishListNot,
                handler: async (data: Buffer, socket: net.Socket) =>
                    ss2cLobbyReportPunishListNot.create({
                        infos: [],
                    }),
            },
        ],
    },
];

export const PacketHandlersMap = new Map<number, PacketHandler>();

PacketHandlers.forEach((handler) => {
    PacketHandlersMap.set(handler.requestCommand, handler);
});
