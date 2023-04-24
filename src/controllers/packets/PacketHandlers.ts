// controllers
import {
    createCharacter,
    getCharacterInfo,
    getClassEquipInfo,
    listCharacters,
} from "../CharacterController";
import { login } from "../AuthController";
import {
    backToCharacterSelect,
    enterLobby,
    getPlayerLobbyLocation,
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
    ss2cCharacterSelectEnterRes,
    ss2cLobbyAccountCurrencyListNot,
    ss2cLobbyCharacterInfoRes,
    ss2cLobbyEnterFromGameRes,
    ss2cLobbyGameDifficultySelectRes,
    ss2cLobbyRegionSelectRes,
    ss2cLobbyReportPunishListNot,
    ss2cOpenLobbyMapRes,
} from "../../protos/ts/Lobby";
import { DefineAccount_CurrencyType } from "../../protos/ts/_Defins";
import {
    ss2cCustomizeActionInfoRes,
    ss2cCustomizeCharacterInfoRes,
    ss2cCustomizeEmoteInfoRes,
    ss2cCustomizeItemInfoRes,
    ss2cCustomizeLobbyEmoteInfoRes,
} from "../../protos/ts/Customize";
import {
    getBlockCharacterList,
    listAllFriends,
    listAllFriendsContinue,
    listFriends,
} from "../FriendsController";
import {
    ss2cFriendListAllRes,
    ss2cFriendListRes,
} from "../../protos/ts/Friend";
import {
    customizeCharacterInfo,
    getCustomizeActionInfo,
    getCustomizeItemInfo,
    getEmoteInfo,
    getLobbyEmoteInfo,
} from "../CustomizeController";
import { ss2cClassEquipInfoRes } from "../../protos/ts/CharacterClass";
import {
    ss2cBlockCharacterListRes,
    ss2cMetaLocationRes,
} from "../../protos/ts/Common";
import { ss2cInventorySingleUpdateRes } from "@/protos/ts/Inventory";
import { singleInventoryUpdate } from "../InventoryController";
import { ss2cAutoMatchRegRes } from "@/protos/ts/InGame";
import { startAutoMatchMaking } from "../MatchMakingController";

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
    // -----------------------
    // Connection
    // -----------------------

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

    // -----------------------
    // Account
    // -----------------------

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

    // -----------------------
    // Character
    // -----------------------

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

    // -----------------------
    // Lobby
    // -----------------------

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
    {
        label: "BackCharacterSelect",
        requestCommand: PacketCommand.C2S_CHARACTER_SELECT_ENTER_REQ,
        res: [
            {
                command: PacketCommand.S2C_CHARACTER_SELECT_ENTER_RES,
                type: ss2cCharacterSelectEnterRes,
                handler: backToCharacterSelect,
            },
        ],
    },

    // -----------------------
    // Friends
    // -----------------------

    {
        label: "ListAllFriends",
        requestCommand: PacketCommand.C2S_FRIEND_LIST_ALL_REQ,
        res: [
            // {
            //     command: PacketCommand.S2C_FRIEND_LIST_RES,
            //     handler: listFriends,
            //     type: ss2cFriendListRes,
            // },
            {
                command: PacketCommand.S2C_FRIEND_LIST_ALL_RES,
                handler: listAllFriends,
                type: ss2cFriendListAllRes,
            },
            {
                command: PacketCommand.S2C_FRIEND_LIST_ALL_RES,
                handler: listAllFriendsContinue,
                type: ss2cFriendListAllRes,
            },
        ],
    },
    {
        label: "BlockCharacterListReq",
        requestCommand: PacketCommand.C2S_BLOCK_CHARACTER_LIST_REQ,
        res: [
            {
                command: PacketCommand.S2C_BLOCK_CHARACTER_LIST_RES,
                type: ss2cBlockCharacterListRes,
                handler: getBlockCharacterList,
            },
        ],
    },

    // -----------------------
    // Character Customization
    // -----------------------

    // C2S_LOBBY_CHARACTER_INFO_REQ

    {
        label: "CustomizeCharacterInfo",
        requestCommand: PacketCommand.C2S_CUSTOMIZE_CHARACTER_INFO_REQ,
        res: [
            {
                command: PacketCommand.S2C_LOBBY_CHARACTER_INFO_RES,
                handler: getCharacterInfo,
                type: ss2cLobbyCharacterInfoRes,
            },
            {
                command: PacketCommand.S2C_CUSTOMIZE_CHARACTER_INFO_RES,
                handler: customizeCharacterInfo,
                type: ss2cCustomizeCharacterInfoRes,
            },
        ],
    },
    {
        label: "EmoteInfo",
        requestCommand: PacketCommand.C2S_CUSTOMIZE_EMOTE_INFO_REQ,
        res: [
            {
                command: PacketCommand.S2C_CUSTOMIZE_EMOTE_INFO_RES,
                type: ss2cCustomizeEmoteInfoRes,
                handler: getEmoteInfo,
            },
        ],
    },
    {
        label: "LobbyEmoteInfo",
        requestCommand: PacketCommand.C2S_CUSTOMIZE_LOBBY_EMOTE_INFO_REQ,
        res: [
            {
                command: PacketCommand.S2C_CUSTOMIZE_LOBBY_EMOTE_INFO_RES,
                type: ss2cCustomizeLobbyEmoteInfoRes,
                handler: getLobbyEmoteInfo,
            },
        ],
    },
    {
        label: "CustomizeItemInfo",
        requestCommand: PacketCommand.C2S_CUSTOMIZE_ITEM_INFO_REQ,
        res: [
            {
                command: PacketCommand.S2C_CUSTOMIZE_ITEM_INFO_RES,
                type: ss2cCustomizeItemInfoRes,
                handler: getCustomizeItemInfo,
            },
        ],
    },
    {
        label: "CustomizeActionInfo",
        requestCommand: PacketCommand.C2S_CUSTOMIZE_ACTION_INFO_REQ,
        res: [
            {
                command: PacketCommand.S2C_CUSTOMIZE_ACTION_INFO_RES,
                type: ss2cCustomizeActionInfoRes,
                handler: getCustomizeActionInfo,
            },
        ],
    },

    // -----------------------
    //
    // -----------------------

    // TODO: This crashes, has to be non-empty
    // {
    //     label: "ClassEquipInfo",
    //     requestCommand: PacketCommand.C2S_CLASS_EQUIP_INFO_REQ,
    //     res: [
    //         {
    //             command: PacketCommand.S2C_CLASS_EQUIP_INFO_RES,
    //             type: ss2cClassEquipInfoRes,
    //             handler: getClassEquipInfo,
    //         },
    //     ],
    // },

    {
        label: "MetaLocationReq",
        requestCommand: PacketCommand.C2S_META_LOCATION_REQ,
        res: [
            {
                command: PacketCommand.S2C_META_LOCATION_RES,
                type: ss2cMetaLocationRes,
                handler: getPlayerLobbyLocation,
            },
        ],
    },

    // -----------------------
    // Inventory & Equipment
    // -----------------------

    {
        label: "Inventory Single Update",
        requestCommand: PacketCommand.C2S_INVENTORY_SINGLE_UPDATE_REQ,
        res: [
            {
                command: PacketCommand.S2C_INVENTORY_SINGLE_UPDATE_RES,
                type: ss2cInventorySingleUpdateRes,
                handler: singleInventoryUpdate,
            },
        ],
    },

    // -----------------------
    // Matchmaking
    // -----------------------

    {
        label: "Auto Match Registration",
        requestCommand: PacketCommand.C2S_AUTO_MATCH_REG_REQ,
        res: [
            {
                command: PacketCommand.S2C_AUTO_MATCH_REG_RES,
                type: ss2cAutoMatchRegRes,
                handler: startAutoMatchMaking,
            },
        ],
    },
];

export const PacketHandlersMap = new Map<number, PacketHandler>();

PacketHandlers.forEach((handler) => {
    PacketHandlersMap.set(handler.requestCommand, handler);
});
