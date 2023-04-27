// controllers
import {
    createCharacter,
    deleteCharacter,
    getCharacterInfo,
    getClassEquipInfo,
    getClassLevelInfo,
    listCharacters,
} from "../CharacterController";
import { login, relogin, sendServerPolicy } from "../AuthController";
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
    ss2cAccountCharacterDeleteRes,
    ss2cAccountCharacterListRes,
    ss2cAccountLoginRes,
    ss2cLobbyEnterRes,
} from "../../protos/ts/Account";
import {
    saccountCurrencyInfo,
    ss2cCharacterSelectEnterRes,
    ss2cLobbyAccountCurrencyListNot,
    ss2cLobbyCharacterInfoRes,
    ss2cLobbyEnterFromGameRes,
    ss2cLobbyGameDifficultySelectRes,
    ss2cLobbyRegionSelectRes,
    ss2cOpenLobbyMapRes,
} from "../../protos/ts/Lobby";
import {
    ss2cCustomizeActionInfoRes, ss2cCustomizeEmoteInfoRes,
    ss2cCustomizeItemInfoRes,
    ss2cCustomizeLobbyEmoteInfoRes
} from "../../protos/ts/Customize";
import {
    getBlockCharacterList,
    listAllFriendsContinue,
    listAllFriendsEnd,
    listAllFriendsStart,
    searchFriend,
} from "../FriendsController";
import {
    ss2cFriendFindRes,
    ss2cFriendListAllRes,
} from "../../protos/ts/Friend";
import {
    getCustomizeActionInfo,
    getCustomizeItemInfo,
    getEmoteInfo,
    getLobbyEmoteInfo
} from "../CustomizeController";
import {
    ss2cBlockCharacterListRes,
    ss2cMetaLocationRes,
    ss2cReLoginRes,
    ss2cServicePolicyNot,
} from "../../protos/ts/Common";
import { ss2cInventorySingleUpdateRes } from "@/protos/ts/Inventory";
import { singleInventoryUpdate } from "../InventoryController";
import { ss2cAutoMatchRegRes } from "@/protos/ts/InGame";
import { startAutoMatchMaking } from "../MatchMakingController";
import {
    ss2cPartyChatRes,
    ss2cPartyExitRes,
    ss2cPartyInviteAnswerRes,
    ss2cPartyInviteRes,
    ss2cPartyMemberKickRes,
} from "@/protos/ts/Party";
import {
    ss2cClassEquipInfoRes,
    ss2cClassLevelInfoRes,
} from "@/protos/ts/CharacterClass";
import {
    ss2cMerchantListRes,
    ss2cMerchantStockBuyItemListRes,
    ss2cMerchantStockBuyRes,
    ss2cMerchantStockSellBackItemListRes,
} from "@/protos/ts/Merchant";
import {
    buyMerchantItem,
    getMerchantBuyList,
    getMerchantList,
    getMerchantSellList,
} from "../MerchantController";
import { DefineAccount_CurrencyType } from "@/protos/ts/_Defins";
import {
    acceptPartyInvite,
    exitParty,
    inviteFriend,
    onPartyMemberKickReq,
    partyChatReq,
} from "../PartyController";

export type PacketHandler = {
    label: string;
    requestCommand: PacketCommand;
    res: {
        type: any;
        handler: (data: Buffer, socket: net.Socket) => Promise<any>;
        command: PacketCommand;
        multiple?: boolean;
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
            {
                type: ss2cServicePolicyNot,
                handler: sendServerPolicy,
                command: PacketCommand.S2C_SERVICE_POLICY_NOT,
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
    {
        label: "Delete Character",
        requestCommand: PacketCommand.C2S_ACCOUNT_CHARACTER_DELETE_REQ,
        res: [
            {
                command: PacketCommand.S2C_ACCOUNT_CHARACTER_DELETE_RES,
                type: ss2cAccountCharacterDeleteRes,
                handler: deleteCharacter,
            },
        ],
    },
    {
        label: "Get Class Level Info",
        requestCommand: PacketCommand.C2S_CLASS_LEVEL_INFO_REQ,
        res: [
            {
                command: PacketCommand.S2C_CLASS_LEVEL_INFO_RES,
                type: ss2cClassLevelInfoRes,
                handler: getClassLevelInfo,
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
                command: PacketCommand.S2C_CLASS_EQUIP_INFO_RES,
                type: ss2cClassEquipInfoRes,
                handler: getClassEquipInfo,
            },
            {
                command: PacketCommand.S2C_LOBBY_ENTER_RES,
                type: ss2cLobbyEnterRes,
                handler: enterLobby,
            },
            {
                command: PacketCommand.S2C_LOBBY_CHARACTER_INFO_RES,
                handler: getCharacterInfo,
                type: ss2cLobbyCharacterInfoRes,
            },
            {
                command: PacketCommand.S2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOT,
                handler: async (data: Buffer, socket: net.Socket) => {
                    return ss2cLobbyAccountCurrencyListNot.create({
                        currencyInfos: [
                            saccountCurrencyInfo.create({
                                currencyType:
                                    DefineAccount_CurrencyType.ADVENTURE,
                                currencyValue: 100,
                            }),
                        ],
                    });
                },
                type: ss2cLobbyAccountCurrencyListNot,
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
            {
                command: PacketCommand.S2C_FRIEND_LIST_ALL_RES,
                handler: listAllFriendsStart,
                type: ss2cFriendListAllRes,
            },
            {
                command: PacketCommand.S2C_FRIEND_LIST_ALL_RES,
                handler: listAllFriendsContinue,
                type: ss2cFriendListAllRes,
            },
            {
                command: PacketCommand.S2C_FRIEND_LIST_ALL_RES,
                handler: listAllFriendsEnd,
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
    {
        label: "SearchFriend",
        requestCommand: PacketCommand.C2S_FRIEND_FIND_REQ,
        res: [
            {
                command: PacketCommand.S2C_FRIEND_FIND_RES,
                type: ss2cFriendFindRes,
                handler: searchFriend,
            },
        ],
    },
    {
        label: "Invite Friend",
        requestCommand: PacketCommand.C2S_PARTY_INVITE_REQ,
        res: [
            {
                command: PacketCommand.S2C_PARTY_INVITE_RES,
                type: ss2cPartyInviteRes,
                handler: inviteFriend,
            },
        ],
    },
    {
        label: "Accept Party Invite",
        requestCommand: PacketCommand.C2S_PARTY_INVITE_ANSWER_REQ,
        res: [
            {
                command: PacketCommand.S2C_PARTY_INVITE_ANSWER_RES,
                type: ss2cPartyInviteAnswerRes,
                handler: acceptPartyInvite,
            },
        ],
    },
    {
        label: "Exit Party",
        requestCommand: PacketCommand.C2S_PARTY_EXIT_REQ,
        res: [
            {
                command: PacketCommand.S2C_PARTY_EXIT_RES,
                type: ss2cPartyExitRes,
                handler: exitParty,
            },
        ],
    },
    {
        label: "Party Chat Req",
        requestCommand: PacketCommand.C2S_PARTY_CHAT_REQ,
        res: [
            {
                command: PacketCommand.S2C_PARTY_CHAT_RES,
                type: ss2cPartyChatRes,
                handler: partyChatReq,
            },
        ],
    },
    {
        label: "Party Member Kick",
        requestCommand: PacketCommand.C2S_PARTY_MEMBER_KICK_REQ,
        res: [
            {
                command: PacketCommand.S2C_PARTY_MEMBER_KICK_RES,
                type: ss2cPartyMemberKickRes,
                handler: onPartyMemberKickReq,
            },
        ],
    },

    // -----------------------
    // Character Customization
    // -----------------------

    {
        label: "CustomizeCharacterInfo",
        requestCommand: PacketCommand.C2S_CUSTOMIZE_CHARACTER_INFO_REQ,
        res: [
            {
                command: PacketCommand.S2C_LOBBY_CHARACTER_INFO_RES,
                handler: getCharacterInfo,
                type: ss2cLobbyCharacterInfoRes,
            },
            // {
            //     command: PacketCommand.S2C_CUSTOMIZE_CHARACTER_INFO_RES,
            //     handler: customizeCharacterInfo,
            //     type: ss2cCustomizeCharacterInfoRes,
            // },
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

    {
        label: "ClassEquipInfo",
        requestCommand: PacketCommand.C2S_CLASS_EQUIP_INFO_REQ,
        res: [
            {
                command: PacketCommand.S2C_CLASS_EQUIP_INFO_RES,
                type: ss2cClassEquipInfoRes,
                handler: getClassEquipInfo,
            },
        ],
    },

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

    // -----------------------
    //
    // -----------------------

    {
        label: "Re-Login",
        requestCommand: PacketCommand.C2S_RE_LOGIN_REQ,
        res: [
            {
                command: PacketCommand.S2C_RE_LOGIN_RES,
                type: ss2cReLoginRes,
                handler: relogin,
            },
        ],
    },

    // -----------------------
    // Merchants
    // -----------------------

    {
        label: "Merchant List",
        requestCommand: PacketCommand.C2S_MERCHANT_LIST_REQ,
        res: [
            {
                command: PacketCommand.S2C_MERCHANT_LIST_RES,
                type: ss2cMerchantListRes,
                handler: getMerchantList,
            },
        ],
    },

    {
        label: "Merchant Buy List",
        requestCommand: PacketCommand.C2S_MERCHANT_STOCK_BUY_ITEM_LIST_REQ,
        res: [
            {
                command: PacketCommand.S2C_MERCHANT_STOCK_BUY_ITEM_LIST_RES,
                type: ss2cMerchantStockBuyItemListRes,
                handler: getMerchantBuyList,
                multiple: true,
            },
        ],
    },

    {
        label: "Merchant Sell Item List",
        requestCommand:
            PacketCommand.C2S_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_REQ,
        res: [
            {
                command:
                    PacketCommand.S2C_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_RES,
                type: ss2cMerchantStockSellBackItemListRes,
                handler: getMerchantSellList,
                multiple: true,
            },
        ],
    },

    {
        label: "Merchant Buy Item",
        requestCommand: PacketCommand.C2S_MERCHANT_STOCK_BUY_REQ,
        res: [
            {
                command: PacketCommand.S2C_MERCHANT_STOCK_BUY_RES,
                type: ss2cMerchantStockBuyRes,
                handler: buyMerchantItem,
            },
            {
                command: PacketCommand.S2C_LOBBY_CHARACTER_INFO_RES,
                handler: getCharacterInfo,
                type: ss2cLobbyCharacterInfoRes,
            },
        ],
    },

    // pc.C2S_TRADE_MEMBERSHIP_REQUIREMENT_REQ: trade.get_trade_reqs,
    // pc.C2S_TRADE_MEMBERSHIP_REQ: trade.process_membership,
];

export const PacketHandlersMap = new Map<number, PacketHandler>();

PacketHandlers.forEach((handler) => {
    PacketHandlersMap.set(handler.requestCommand, handler);
});
