//
import fs from "fs-extra";
import { LobbyUser } from "@/models/lobby/LobbyUser";
import { SocketContext } from "@/models/lobby/SocketContext";
import {
  sc2sAccountAgreeAnswerReq,
  sc2sAccountCharacterCreateReq,
  sc2sAccountCharacterDeleteReq,
  sc2sAccountCharacterListReq,
  sc2sAccountLoginReq,
  sc2sLobbyEnterReq,
  ss2cAccountAgreeAnswerRes,
  ss2cAccountCharacterClassListNot,
  ss2cAccountCharacterCreateRes,
  ss2cAccountCharacterDeleteRes,
  ss2cAccountCharacterListRes,
  ss2cAccountLoginRes,
  ss2cLobbyEnterRes,
} from "@/protos/ts/Account";
import {
  sc2sClassLevelInfoReq,
  ss2cClassLevelInfoRes,
  sc2sClassEquipInfoReq,
  ss2cClassEquipInfoRes,
  sc2sClassPerkListReq,
  ss2cClassPerkListRes,
  sc2sClassSkillListReq,
  ss2cClassSkillListRes,
  sc2sClassSpellListReq,
  ss2cClassSpellListRes,
  sc2sClassItemMoveReq,
  ss2cClassItemMoveRes,
  sc2sClassSpellSlotMoveReq,
  ss2cClassSpellSlotMoveRes,
  sc2sClassSpellSequenceChangeReq,
  ss2cClassSpellSequenceChangeRes,
  sc2sClassMusicSlotMoveReq,
  ss2cClassMusicSlotMoveRes,
  sc2sClassMusicListReq,
  ss2cClassMusicListRes,
} from "@/protos/ts/CharacterClass";
import {
  sc2sBlockCharacterListReq,
  sc2sBlockCharacterReq,
  sc2sGmEnterGameSpectatorReq,
  sc2sHackLogReq,
  sc2sMetaLocationReq,
  sc2sReLoginReq,
  sc2sUnblockCharacterReq,
  sc2sUserCharacterInfoReq,
  ss2cBlockCharacterListRes,
  ss2cBlockCharacterRes,
  ss2cClosedGameNot,
  ss2cGmEnterGameSpectatorRes,
  ss2cHackLogRes,
  ss2cMetaLocationRes,
  ss2cOperateAnnounceNot,
  ss2cReLoginRes,
  ss2cServicePolicyNot,
  ss2cUnblockCharacterRes,
  ss2cUserCharacterInfoRes,
} from "@/protos/ts/Common";
import {
  sc2sCustomizeNewItemCheckReq,
  ss2cCustomizeNewItemCheckRes,
  ss2cCustomizeNewItemAlertNot,
  sc2sCustomizeInfoReq,
  sc2sCustomizeMountReq,
  sc2sCustomizeUnmountReq,
  ss2cCustomizeInfoRes,
  ss2cCustomizeMountRes,
  ss2cCustomizeUnmountRes,
} from "@/protos/ts/Customize";
import {
  sc2sFriendListReq,
  ss2cFriendListRes,
  sc2sFriendListAllReq,
  ss2cFriendListAllRes,
  sc2sFriendFindReq,
  ss2cFriendFindRes,
} from "@/protos/ts/Friend";
import {
  sc2sGatheringHallChannelListReq,
  ss2cGatheringHallChannelListRes,
  sc2sGatheringHallChannelSelectReq,
  ss2cGatheringHallChannelSelectRes,
  sc2sGatheringHallChannelExitReq,
  ss2cGatheringHallChannelExitRes,
  sc2sGatheringHallChannelUserListReq,
  ss2cGatheringHallChannelUserListRes,
  ss2cGatheringHallChannelUserUpdateNot,
  sc2sGatheringHallChannelChatReq,
  ss2cGatheringHallChannelChatRes,
  ss2cGatheringHallChannelChatNot,
  sc2sGatheringHallTargetEquippedItemReq,
  ss2cGatheringHallTargetEquippedItemRes,
} from "@/protos/ts/GatheringHall";
import {
  sc2sGmPartyAllRandomReq,
  ss2cGmPartyAllRandomRes,
} from "@/protos/ts/Gm";
import {
  sc2sAutoMatchRegReq,
  ss2cAutoMatchRegRes,
  ss2cEnterGameServerNot,
  sc2sGameEnterCompleteNot,
  ss2cAutoMatchRegTeamNot,
  sc2sReconnectIngameReq,
  ss2cReconnectIngameRes,
} from "@/protos/ts/InGame";
import {
  sc2sInventoryInfoReq,
  ss2cInventoryInfoRes,
  sc2sInventoryAllUpdateReq,
  ss2cInventoryAllUpdateRes,
  sc2sInventorySingleUpdateReq,
  ss2cInventorySingleUpdateRes,
  sc2sInventoryMoveReq,
  ss2cInventoryMoveRes,
  sc2sInventoryMergeReq,
  ss2cInventoryMergeRes,
  sc2sInventorySwapReq,
  ss2cInventorySwapRes,
  sc2sInventorySplitMoveReq,
  ss2cInventorySplitMoveRes,
  sc2sInventorySplitMergeReq,
  ss2cInventorySplitMergeRes,
  sc2sInventorySplitSwapReq,
  ss2cInventorySplitSwapRes,
  sc2sInventoryTwoHandedWeaponSwapReq,
  ss2cInventoryTwoHandedWeaponSwapRes,
  sc2sStorageInfoReq,
  ss2cStorageInfoRes,
} from "@/protos/ts/Inventory";
import {
  sc2sKarmaReportListReq,
  ss2cKarmaReportListRes,
  sc2sKarmaReportActionReq,
  ss2cKarmaReportActionRes,
  ss2cKarmaRatingUpdateNot,
} from "@/protos/ts/Karma";
import {
  sc2sCharacterSelectEnterReq,
  sc2sLobbyCharacterInfoReq,
  sc2sLobbyEnterFromGameReq,
  sc2sLobbyGameDifficultySelectReq,
  sc2sLobbyRegionSelectReq,
  sc2sOpenLobbyMapReq,
  ss2cCharacterSelectEnterRes,
  ss2cLobbyAccountCurrencyListNot,
  ss2cLobbyCharacterInfoRes,
  ss2cLobbyCharacterLobbyEmoteNot,
  ss2cLobbyEnterFromGameRes,
  ss2cLobbyGameDifficultySelectRes,
  ss2cLobbyRegionSelectRes,
  ss2cLobbyReportPunishListNot,
  ss2cOpenLobbyMapRes,
} from "@/protos/ts/Lobby";
import {
  sc2sMerchantListReq,
  ss2cMerchantListRes,
  sc2sMerchantStockBuyItemListReq,
  ss2cMerchantStockBuyItemListRes,
  sc2sMerchantStockSellBackItemListReq,
  ss2cMerchantStockSellBackItemListRes,
  sc2sMerchantStockBuyReq,
  ss2cMerchantStockBuyRes,
  sc2sMerchantStockSellBackReq,
  ss2cMerchantStockSellBackRes,
  sc2sMerchantServiceCraftListReq,
  ss2cMerchantServiceCraftListRes,
  sc2sMerchantServiceCraftReq,
  ss2cMerchantServiceCraftRes,
} from "@/protos/ts/Merchant";
import {
  sc2sPartyInviteReq,
  ss2cPartyInviteRes,
  ss2cPartyInviteNot,
  sc2sPartyInviteAnswerReq,
  ss2cPartyInviteAnswerRes,
  ss2cPartyInviteAnswerResultNot,
  sc2sPartyExitReq,
  ss2cPartyExitRes,
  ss2cPartyMemberInfoNot,
  sc2sPartyReadyReq,
  ss2cPartyReadyRes,
  ss2cPartyEquipItemChangeNot,
  ss2cPartyRegionChangeNot,
  ss2cPartyLocationUpdateNot,
  ss2cPartyCharacterSkinListNot,
  ss2cPartyCharacterSkinChangeNot,
  ss2cPartyItemSkinListNot,
  ss2cPartyItemSkinChangeNot,
  ss2cPartyGameDifficultyChangeNot,
  sc2sPartyMemberKickReq,
  ss2cPartyMemberKickRes,
  sc2sPartyChatReq,
  ss2cPartyChatRes,
  ss2cPartyChatNot,
  ss2cPartyReadyChangeNot,
  ss2cPartyKickedOutNot,
  ss2cPartyMemberLobbyEmoteNot,
  sc2sPartyStartLobbyEmoteReq,
  ss2cPartyStartLobbyEmoteRes,
  ss2cPartyStartLobbyEmoteNot,
} from "@/protos/ts/Party";
import {
  sc2sRankingRangeReq,
  ss2cRankingRangeRes,
  sc2sRankingCharacterReq,
  ss2cRankingCharacterRes,
  sc2sRankingInfoReq,
  ss2cRankingInfoRes,
} from "@/protos/ts/Ranking";
import {
  ss2cShopRedStoneShardInfoRes,
  sc2sShopEnterGiftCodeReq,
  sc2sShopItemBuyReq,
  sc2sShopItemListReq,
  sc2sShopRedStoneShardInfoReq,
  ss2cShopEnterGiftCodeRes,
  ss2cShopItemBuyRes,
  ss2cShopItemListRes,
} from "@/protos/ts/Shop";
import {
  sc2sTradeAnswerReq,
  sc2sTradeChannelChatReq,
  sc2sTradeChannelChatTextRangeReq,
  sc2sTradeChannelExitReq,
  sc2sTradeChannelListReq,
  sc2sTradeChannelSelectReq,
  sc2sTradeChannelUserListReq,
  sc2sTradeMembershipReq,
  sc2sTradeMembershipRequirementReq,
  sc2sTradeRequestReq,
  sc2sTradingChatReq,
  sc2sTradingCloseReq,
  sc2sTradingConfirmCancelReq,
  sc2sTradingConfirmReadyReq,
  sc2sTradingItemUpdateReq,
  sc2sTradingReadyReq,
  ss2cTradeAnswerRefusalNot,
  ss2cTradeAnswerRes,
  ss2cTradeChannelChatRes,
  ss2cTradeChannelChatTextRangeRes,
  ss2cTradeChannelExitRes,
  ss2cTradeChannelListRes,
  ss2cTradeChannelSelectRes,
  ss2cTradeChannelUserListRes,
  ss2cTradeChannelUserUpdateNot,
  ss2cTradeMembershipRequirementRes,
  ss2cTradeMembershipRes,
  ss2cTradeRequestNot,
  ss2cTradeRequestRes,
  ss2cTradingBeginNot,
  ss2cTradingChatRes,
  ss2cTradingCloseRes,
  ss2cTradingConfirmCancelRes,
  ss2cTradingConfirmNot,
  ss2cTradingConfirmReadyNot,
  ss2cTradingConfirmReadyRes,
  ss2cTradingItemUpdateRes,
  ss2cTradingReadyNot,
  ss2cTradingReadyRes,
  ss2cTradingResultNot,
} from "@/protos/ts/Trade";
import {
  PacketCommand,
  packetCommandFromJSON,
  packetCommandToJSON,
  sc2sAliveReq,
  sc2sReconnectReq,
  ss2cAliveRes,
  ss2cReconnectRes,
} from "@/protos/ts/_PacketCommand";
import { bufferReader } from "@/utils/bufferReader";
import { buffer2HexSpacedString } from "@/utils/hex";
import { logger } from "@/utils/loggers";
import { beautifyHexUnicodeFile } from "./filesutils";

export function packTypeToObjType(object: PacketCommand): any {
  switch (object) {
    case PacketCommand.PACKET_NONE:
      return null;
    case PacketCommand.C2S_ALIVE_REQ:
      return sc2sAliveReq;
    case PacketCommand.S2C_ALIVE_RES:
      return ss2cAliveRes;
    case PacketCommand.C2S_RECONNECT_REQ:
      return sc2sReconnectReq;
    case PacketCommand.S2C_RECONNECT_RES:
      return ss2cReconnectRes;
    case PacketCommand.C2S_ACCOUNT_LOGIN_REQ:
      return sc2sAccountLoginReq;
    case PacketCommand.S2C_ACCOUNT_LOGIN_RES:
      return ss2cAccountLoginRes;
    case PacketCommand.C2S_ACCOUNT_CHARACTER_CREATE_REQ:
      return sc2sAccountCharacterCreateReq;
    case PacketCommand.S2C_ACCOUNT_CHARACTER_CREATE_RES:
      return ss2cAccountCharacterCreateRes;
    case PacketCommand.C2S_ACCOUNT_CHARACTER_LIST_REQ:
      return sc2sAccountCharacterListReq;
    case PacketCommand.S2C_ACCOUNT_CHARACTER_LIST_RES:
      return ss2cAccountCharacterListRes;
    case PacketCommand.C2S_ACCOUNT_CHARACTER_DELETE_REQ:
      return sc2sAccountCharacterDeleteReq;
    case PacketCommand.S2C_ACCOUNT_CHARACTER_DELETE_RES:
      return ss2cAccountCharacterDeleteRes;
    case PacketCommand.C2S_LOBBY_ENTER_REQ:
      return sc2sLobbyEnterReq;
    case PacketCommand.S2C_LOBBY_ENTER_RES:
      return ss2cLobbyEnterRes;
    case PacketCommand.C2S_ACCOUNT_AGREE_ANSWER_REQ:
      return sc2sAccountAgreeAnswerReq;
    case PacketCommand.S2C_ACCOUNT_AGREE_ANSWER_RES:
      return ss2cAccountAgreeAnswerRes;
    case PacketCommand.S2C_ACCOUNT_CHARACTER_CLASS_LIST_NOT:
      return ss2cAccountCharacterClassListNot;
    case PacketCommand.C2S_CHARACTER_SELECT_ENTER_REQ:
      return sc2sCharacterSelectEnterReq;
    case PacketCommand.S2C_CHARACTER_SELECT_ENTER_RES:
      return ss2cCharacterSelectEnterRes;
    case PacketCommand.C2S_LOBBY_CHARACTER_INFO_REQ:
      return sc2sLobbyCharacterInfoReq;
    case PacketCommand.S2C_LOBBY_CHARACTER_INFO_RES:
      return ss2cLobbyCharacterInfoRes;
    case PacketCommand.C2S_OPEN_LOBBY_MAP_REQ:
      return sc2sOpenLobbyMapReq;
    case PacketCommand.S2C_OPEN_LOBBY_MAP_RES:
      return ss2cOpenLobbyMapRes;
    case PacketCommand.C2S_LOBBY_REGION_SELECT_REQ:
      return sc2sLobbyRegionSelectReq;
    case PacketCommand.S2C_LOBBY_REGION_SELECT_RES:
      return ss2cLobbyRegionSelectRes;
    case PacketCommand.C2S_LOBBY_ENTER_FROM_GAME_REQ:
      return sc2sLobbyEnterFromGameReq;
    case PacketCommand.S2C_LOBBY_ENTER_FROM_GAME_RES:
      return ss2cLobbyEnterFromGameRes;
    case PacketCommand.C2S_LOBBY_GAME_DIFFICULTY_SELECT_REQ:
      return sc2sLobbyGameDifficultySelectReq;
    case PacketCommand.S2C_LOBBY_GAME_DIFFICULTY_SELECT_RES:
      return ss2cLobbyGameDifficultySelectRes;
    case PacketCommand.S2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOT:
      return ss2cLobbyAccountCurrencyListNot;
    case PacketCommand.S2C_LOBBY_CHARACTER_LOBBY_EMOTE_NOT:
      return ss2cLobbyCharacterLobbyEmoteNot;
    case PacketCommand.S2C_LOBBY_REPORT_PUNISH_LIST_NOT:
      return ss2cLobbyReportPunishListNot;
    case PacketCommand.MIN_INVENTORY_PACKET:
      return null;
    case PacketCommand.C2S_INVENTORY_INFO_REQ:
      return sc2sInventoryInfoReq;
    case PacketCommand.S2C_INVENTORY_INFO_RES:
      return ss2cInventoryInfoRes;
    case PacketCommand.C2S_INVENTORY_ALL_UPDATE_REQ:
      return sc2sInventoryAllUpdateReq;
    case PacketCommand.S2C_INVENTORY_ALL_UPDATE_RES:
      return ss2cInventoryAllUpdateRes;
    case PacketCommand.C2S_INVENTORY_SINGLE_UPDATE_REQ:
      return sc2sInventorySingleUpdateReq;
    case PacketCommand.S2C_INVENTORY_SINGLE_UPDATE_RES:
      return ss2cInventorySingleUpdateRes;
    case PacketCommand.C2S_INVENTORY_MOVE_REQ:
      return sc2sInventoryMoveReq;
    case PacketCommand.S2C_INVENTORY_MOVE_RES:
      return ss2cInventoryMoveRes;
    case PacketCommand.C2S_INVENTORY_MERGE_REQ:
      return sc2sInventoryMergeReq;
    case PacketCommand.S2C_INVENTORY_MERGE_RES:
      return ss2cInventoryMergeRes;
    case PacketCommand.C2S_INVENTORY_SWAP_REQ:
      return sc2sInventorySwapReq;
    case PacketCommand.S2C_INVENTORY_SWAP_RES:
      return ss2cInventorySwapRes;
    case PacketCommand.C2S_INVENTORY_SPLIT_MOVE_REQ:
      return sc2sInventorySplitMoveReq;
    case PacketCommand.S2C_INVENTORY_SPLIT_MOVE_RES:
      return ss2cInventorySplitMoveRes;
    case PacketCommand.C2S_INVENTORY_SPLIT_MERGE_REQ:
      return sc2sInventorySplitMergeReq;
    case PacketCommand.S2C_INVENTORY_SPLIT_MERGE_RES:
      return ss2cInventorySplitMergeRes;
    case PacketCommand.C2S_INVENTORY_SPLIT_SWAP_REQ:
      return sc2sInventorySplitSwapReq;
    case PacketCommand.S2C_INVENTORY_SPLIT_SWAP_RES:
      return ss2cInventorySplitSwapRes;
    case PacketCommand.C2S_INVENTORY_TWO_HANDED_WEAPON_SWAP_REQ:
      return sc2sInventoryTwoHandedWeaponSwapReq;
    case PacketCommand.S2C_INVENTORY_TWO_HANDED_WEAPON_SWAP_RES:
      return ss2cInventoryTwoHandedWeaponSwapRes;
    case PacketCommand.C2S_STORAGE_INFO_REQ:
      return sc2sStorageInfoReq;
    case PacketCommand.S2C_STORAGE_INFO_RES:
      return ss2cStorageInfoRes;
    case PacketCommand.MAX_INVENTORY_PACKET:
      return null;
    case PacketCommand.C2S_AUTO_MATCH_REG_REQ:
      return sc2sAutoMatchRegReq;
    case PacketCommand.S2C_AUTO_MATCH_REG_RES:
      return ss2cAutoMatchRegRes;
    case PacketCommand.S2C_ENTER_GAME_SERVER_NOT:
      return ss2cEnterGameServerNot;
    case PacketCommand.C2S_GAME_ENTER_COMPLETE_NOT:
      return sc2sGameEnterCompleteNot;
    case PacketCommand.S2C_AUTO_MATCH_REG_TEAM_NOT:
      return ss2cAutoMatchRegTeamNot;
    case PacketCommand.C2S_RECONNECT_INGAME_REQ:
      return sc2sReconnectIngameReq;
    case PacketCommand.S2C_RECONNECT_INGAME_RES:
      return ss2cReconnectIngameRes;
    case PacketCommand.MIN_RANKING_PACKET:
      return null;
    case PacketCommand.C2S_RANKING_RANGE_REQ:
      return sc2sRankingRangeReq;
    case PacketCommand.S2C_RANKING_RANGE_RES:
      return ss2cRankingRangeRes;
    case PacketCommand.C2S_RANKING_CHARACTER_REQ:
      return sc2sRankingCharacterReq;
    case PacketCommand.S2C_RANKING_CHARACTER_RES:
      return ss2cRankingCharacterRes;
    case PacketCommand.C2S_RANKING_INFO_REQ:
      return sc2sRankingInfoReq;
    case PacketCommand.S2C_RANKING_INFO_RES:
      return ss2cRankingInfoRes;
    case PacketCommand.MAX_RANKING_PACKET:
      return null;
    case PacketCommand.MIN_FRIEND_PACKET:
      return null;
    case PacketCommand.C2S_FRIEND_LIST_REQ:
      return sc2sFriendListReq;
    case PacketCommand.S2C_FRIEND_LIST_RES:
      return ss2cFriendListRes;
    case PacketCommand.C2S_FRIEND_LIST_ALL_REQ:
      return sc2sFriendListAllReq;
    case PacketCommand.S2C_FRIEND_LIST_ALL_RES:
      return ss2cFriendListAllRes;
    case PacketCommand.C2S_FRIEND_FIND_REQ:
      return sc2sFriendFindReq;
    case PacketCommand.S2C_FRIEND_FIND_RES:
      return ss2cFriendFindRes;
    case PacketCommand.MAX_FRIEND_PACKET:
      return null;
    case PacketCommand.MIN_PARTY_PACKET:
      return null;
    case PacketCommand.C2S_PARTY_INVITE_REQ:
      return sc2sPartyInviteReq;
    case PacketCommand.S2C_PARTY_INVITE_RES:
      return ss2cPartyInviteRes;
    case PacketCommand.S2C_PARTY_INVITE_NOT:
      return ss2cPartyInviteNot;
    case PacketCommand.C2S_PARTY_INVITE_ANSWER_REQ:
      return sc2sPartyInviteAnswerReq;
    case PacketCommand.S2C_PARTY_INVITE_ANSWER_RES:
      return ss2cPartyInviteAnswerRes;
    case PacketCommand.S2C_PARTY_INVITE_ANSWER_RESULT_NOT:
      return ss2cPartyInviteAnswerResultNot;
    case PacketCommand.C2S_PARTY_EXIT_REQ:
      return sc2sPartyExitReq;
    case PacketCommand.S2C_PARTY_EXIT_RES:
      return ss2cPartyExitRes;
    case PacketCommand.S2C_PARTY_MEMBER_INFO_NOT:
      return ss2cPartyMemberInfoNot;
    case PacketCommand.C2S_PARTY_READY_REQ:
      return sc2sPartyReadyReq;
    case PacketCommand.S2C_PARTY_READY_RES:
      return ss2cPartyReadyRes;
    case PacketCommand.S2C_PARTY_EQUIP_ITEM_CHANGE_NOT:
      return ss2cPartyEquipItemChangeNot;
    case PacketCommand.S2C_PARTY_REGION_CHANGE_NOT:
      return ss2cPartyRegionChangeNot;
    case PacketCommand.S2C_PARTY_LOCATION_UPDATE_NOT:
      return ss2cPartyLocationUpdateNot;
    case PacketCommand.S2C_PARTY_CHARACTER_SKIN_LIST_NOT:
      return ss2cPartyCharacterSkinListNot;
    case PacketCommand.S2C_PARTY_CHARACTER_SKIN_CHANGE_NOT:
      return ss2cPartyCharacterSkinChangeNot;
    case PacketCommand.S2C_PARTY_ITEM_SKIN_LIST_NOT:
      return ss2cPartyItemSkinListNot;
    case PacketCommand.S2C_PARTY_ITEM_SKIN_CHANGE_NOT:
      return ss2cPartyItemSkinChangeNot;
    case PacketCommand.S2C_PARTY_GAME_DIFFICULTY_CHANGE_NOT:
      return ss2cPartyGameDifficultyChangeNot;
    case PacketCommand.C2S_PARTY_MEMBER_KICK_REQ:
      return sc2sPartyMemberKickReq;
    case PacketCommand.S2C_PARTY_MEMBER_KICK_RES:
      return ss2cPartyMemberKickRes;
    case PacketCommand.C2S_PARTY_CHAT_REQ:
      return sc2sPartyChatReq;
    case PacketCommand.S2C_PARTY_CHAT_RES:
      return ss2cPartyChatRes;
    case PacketCommand.S2C_PARTY_CHAT_NOT:
      return ss2cPartyChatNot;
    case PacketCommand.S2C_PARTY_READY_CHANGE_NOT:
      return ss2cPartyReadyChangeNot;
    case PacketCommand.S2C_PARTY_KICKED_OUT_NOT:
      return ss2cPartyKickedOutNot;
    case PacketCommand.S2C_PARTY_MEMBER_LOBBY_EMOTE_NOT:
      return ss2cPartyMemberLobbyEmoteNot;
    case PacketCommand.C2S_PARTY_START_LOBBY_EMOTE_REQ:
      return sc2sPartyStartLobbyEmoteReq;
    case PacketCommand.S2C_PARTY_START_LOBBY_EMOTE_RES:
      return ss2cPartyStartLobbyEmoteRes;
    case PacketCommand.S2C_PARTY_START_LOBBY_EMOTE_NOT:
      return ss2cPartyStartLobbyEmoteNot;
    case PacketCommand.MAX_PARTY_PACKET:
      return null;
    case PacketCommand.MIN_GM_PACKET:
      return null;
    case PacketCommand.C2S_GM_PARTY_ALL_RANDOM_REQ:
      return sc2sGmPartyAllRandomReq;
    case PacketCommand.S2C_GM_PARTY_ALL_RANDOM_RES:
      return ss2cGmPartyAllRandomRes;
    case PacketCommand.C2S_GM_ENTER_GAME_SPECTATOR_REQ:
      return sc2sGmEnterGameSpectatorReq;
    case PacketCommand.S2C_GM_ENTER_GAME_SPECTATOR_RES:
      return ss2cGmEnterGameSpectatorRes;
    case PacketCommand.MAX_GM_PACKET:
      return null;
    case PacketCommand.MIN_MERCHANT_PACKET:
      return null;
    case PacketCommand.C2S_MERCHANT_LIST_REQ:
      return sc2sMerchantListReq;
    case PacketCommand.S2C_MERCHANT_LIST_RES:
      return ss2cMerchantListRes;
    case PacketCommand.C2S_MERCHANT_STOCK_BUY_ITEM_LIST_REQ:
      return sc2sMerchantStockBuyItemListReq;
    case PacketCommand.S2C_MERCHANT_STOCK_BUY_ITEM_LIST_RES:
      return ss2cMerchantStockBuyItemListRes;
    case PacketCommand.C2S_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_REQ:
      return sc2sMerchantStockSellBackItemListReq;
    case PacketCommand.S2C_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_RES:
      return ss2cMerchantStockSellBackItemListRes;
    case PacketCommand.C2S_MERCHANT_STOCK_BUY_REQ:
      return sc2sMerchantStockBuyReq;
    case PacketCommand.S2C_MERCHANT_STOCK_BUY_RES:
      return ss2cMerchantStockBuyRes;
    case PacketCommand.C2S_MERCHANT_STOCK_SELL_BACK_REQ:
      return sc2sMerchantStockSellBackReq;
    case PacketCommand.S2C_MERCHANT_STOCK_SELL_BACK_RES:
      return ss2cMerchantStockSellBackRes;
    case PacketCommand.C2S_MERCHANT_SERVICE_CRAFT_LIST_REQ:
      return sc2sMerchantServiceCraftListReq;
    case PacketCommand.S2C_MERCHANT_SERVICE_CRAFT_LIST_RES:
      return ss2cMerchantServiceCraftListRes;
    case PacketCommand.C2S_MERCHANT_SERVICE_CRAFT_REQ:
      return sc2sMerchantServiceCraftReq;
    case PacketCommand.S2C_MERCHANT_SERVICE_CRAFT_RES:
      return ss2cMerchantServiceCraftRes;
    case PacketCommand.C2S_MERCHANT_SERVICE_REPAIR_REQ:
      return null;
    //   sc2sMerchantServiceRepairReq;
    case PacketCommand.S2C_MERCHANT_SERVICE_REPAIR_RES:
      return null;
    //   ss2cMerchantServiceRepairRes;
    case PacketCommand.C2S_MERCHANT_QUEST_LIST_REQ:
      return null;
    //   sc2sMerchantQuestListReq;
    case PacketCommand.S2C_MERCHANT_QUEST_LIST_RES:
      return null;
    //   ss2cMerchantQuestListRes;
    case PacketCommand.C2S_MERCHANT_QUEST_REQ:
      return null;
    //   sc2sMerchantQuestReq;
    case PacketCommand.S2C_MERCHANT_QUEST_RES:
      return null;
    //   ss2cMerchantQuestRes;
    case PacketCommand.MAX_MERCHANT_PACKET:
      return null;

    case PacketCommand.MIN_KARMA_PACKET:
      return null;
    case PacketCommand.C2S_KARMA_REPORT_LIST_REQ:
      return sc2sKarmaReportListReq;
    case PacketCommand.S2C_KARMA_REPORT_LIST_RES:
      return ss2cKarmaReportListRes;
    case PacketCommand.C2S_KARMA_REPORT_ACTION_REQ:
      return sc2sKarmaReportActionReq;
    case PacketCommand.S2C_KARMA_REPORT_ACTION_RES:
      return ss2cKarmaReportActionRes;
    case PacketCommand.S2C_KARMA_RATING_UPDATE_NOT:
      return ss2cKarmaRatingUpdateNot;
    case PacketCommand.MAX_KARMA_PACKET:
      return null;
    case PacketCommand.MIN_TRADE_PACKET:
      return null;
    case PacketCommand.C2S_TRADE_CHANNEL_LIST_REQ:
      return sc2sTradeChannelListReq;
    case PacketCommand.S2C_TRADE_CHANNEL_LIST_RES:
      return ss2cTradeChannelListRes;
    case PacketCommand.C2S_TRADE_CHANNEL_SELECT_REQ:
      return sc2sTradeChannelSelectReq;
    case PacketCommand.S2C_TRADE_CHANNEL_SELECT_RES:
      return ss2cTradeChannelSelectRes;
    case PacketCommand.C2S_TRADE_CHANNEL_EXIT_REQ:
      return sc2sTradeChannelExitReq;
    case PacketCommand.S2C_TRADE_CHANNEL_EXIT_RES:
      return ss2cTradeChannelExitRes;
    case PacketCommand.C2S_TRADE_CHANNEL_USER_LIST_REQ:
      return sc2sTradeChannelUserListReq;
    case PacketCommand.S2C_TRADE_CHANNEL_USER_LIST_RES:
      return ss2cTradeChannelUserListRes;
    case PacketCommand.S2C_TRADE_CHANNEL_USER_UPDATE_NOT:
      return ss2cTradeChannelUserUpdateNot;
    case PacketCommand.C2S_TRADE_CHANNEL_CHAT_REQ:
      return sc2sTradeChannelChatReq;
    case PacketCommand.S2C_TRADE_CHANNEL_CHAT_RES:
      return ss2cTradeChannelChatRes;
    case PacketCommand.C2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQ:
      return sc2sTradeChannelChatTextRangeReq;
    case PacketCommand.S2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES:
      return ss2cTradeChannelChatTextRangeRes;
    case PacketCommand.C2S_TRADE_MEMBERSHIP_REQUIREMENT_REQ:
      return sc2sTradeMembershipRequirementReq;
    case PacketCommand.S2C_TRADE_MEMBERSHIP_REQUIREMENT_RES:
      return ss2cTradeMembershipRequirementRes;
    case PacketCommand.C2S_TRADE_MEMBERSHIP_REQ:
      return sc2sTradeMembershipReq;
    case PacketCommand.S2C_TRADE_MEMBERSHIP_RES:
      return ss2cTradeMembershipRes;
    case PacketCommand.C2S_TRADE_REQUEST_REQ:
      return sc2sTradeRequestReq;
    case PacketCommand.S2C_TRADE_REQUEST_RES:
      return ss2cTradeRequestRes;
    case PacketCommand.S2C_TRADE_REQUEST_NOT:
      return ss2cTradeRequestNot;
    case PacketCommand.C2S_TRADE_ANSWER_REQ:
      return sc2sTradeAnswerReq;
    case PacketCommand.S2C_TRADE_ANSWER_RES:
      return ss2cTradeAnswerRes;
    case PacketCommand.S2C_TRADE_ANSWER_REFUSAL_NOT:
      return ss2cTradeAnswerRefusalNot;
    case PacketCommand.S2C_TRADING_BEGIN_NOT:
      return ss2cTradingBeginNot;
    case PacketCommand.C2S_TRADING_CLOSE_REQ:
      return sc2sTradingCloseReq;
    case PacketCommand.S2C_TRADING_CLOSE_RES:
      return ss2cTradingCloseRes;
    case PacketCommand.C2S_TRADING_CHAT_REQ:
      return sc2sTradingChatReq;
    case PacketCommand.S2C_TRADING_CHAT_RES:
      return ss2cTradingChatRes;
    case PacketCommand.C2S_TRADING_ITEM_UPDATE_REQ:
      return sc2sTradingItemUpdateReq;
    case PacketCommand.S2C_TRADING_ITEM_UPDATE_RES:
      return ss2cTradingItemUpdateRes;
    case PacketCommand.C2S_TRADING_READY_REQ:
      return sc2sTradingReadyReq;
    case PacketCommand.S2C_TRADING_READY_RES:
      return ss2cTradingReadyRes;
    case PacketCommand.S2C_TRADING_READY_NOT:
      return ss2cTradingReadyNot;
    case PacketCommand.S2C_TRADING_CONFIRM_NOT:
      return ss2cTradingConfirmNot;
    case PacketCommand.C2S_TRADING_CONFIRM_READY_REQ:
      return sc2sTradingConfirmReadyReq;
    case PacketCommand.S2C_TRADING_CONFIRM_READY_RES:
      return ss2cTradingConfirmReadyRes;
    case PacketCommand.S2C_TRADING_CONFIRM_READY_NOT:
      return ss2cTradingConfirmReadyNot;
    case PacketCommand.C2S_TRADING_CONFIRM_CANCEL_REQ:
      return sc2sTradingConfirmCancelReq;
    case PacketCommand.S2C_TRADING_CONFIRM_CANCEL_RES:
      return ss2cTradingConfirmCancelRes;
    case PacketCommand.S2C_TRADING_RESULT_NOT:
      return ss2cTradingResultNot;
    case PacketCommand.MAX_TRADE_PACKET:
      return null;
    case PacketCommand.MIN_CUSTOMIZE_PACKET:
      return null;
    case PacketCommand.C2S_CUSTOMIZE_NEW_ITEM_CHECK_REQ:
      return sc2sCustomizeNewItemCheckReq;
    case PacketCommand.S2C_CUSTOMIZE_NEW_ITEM_CHECK_RES:
      return ss2cCustomizeNewItemCheckRes;
    case PacketCommand.S2C_CUSTOMIZE_NEW_ITEM_ALERT_NOT:
      return ss2cCustomizeNewItemAlertNot;
    case PacketCommand.C2S_CUSTOMIZE_INFO_REQ:
      return sc2sCustomizeInfoReq;
    case PacketCommand.S2C_CUSTOMIZE_INFO_RES:
      return ss2cCustomizeInfoRes;
    case PacketCommand.C2S_CUSTOMIZE_MOUNT_REQ:
      return sc2sCustomizeMountReq;
    case PacketCommand.S2C_CUSTOMIZE_MOUNT_RES:
      return ss2cCustomizeMountRes;
    case PacketCommand.C2S_CUSTOMIZE_UNMOUNT_REQ:
      return sc2sCustomizeUnmountReq;
    case PacketCommand.S2C_CUSTOMIZE_UNMOUNT_RES:
      return ss2cCustomizeUnmountRes;
    case PacketCommand.MAX_CUSTOMIZE_PACKET:
      return null;
    case PacketCommand.MIN_SHOP_PACKET:
      return null;
    case PacketCommand.C2S_SHOP_ITEM_LIST_REQ:
      return sc2sShopItemListReq;
    case PacketCommand.S2C_SHOP_ITEM_LIST_RES:
      return ss2cShopItemListRes;
    case PacketCommand.C2S_SHOP_ITEM_BUY_REQ:
      return sc2sShopItemBuyReq;
    case PacketCommand.S2C_SHOP_ITEM_BUY_RES:
      return ss2cShopItemBuyRes;
    case PacketCommand.C2S_SHOP_ENTER_GIFT_CODE_REQ:
      return sc2sShopEnterGiftCodeReq;
    case PacketCommand.S2C_SHOP_ENTER_GIFT_CODE_RES:
      return ss2cShopEnterGiftCodeRes;
    case PacketCommand.C2S_SHOP_RED_STONE_SHARD_INFO_REQ:
      return sc2sShopRedStoneShardInfoReq;
    case PacketCommand.S2C_SHOP_RED_STONE_SHARD_INFO_RES:
      return ss2cShopRedStoneShardInfoRes;
    case PacketCommand.MAX_SHOP_PACKET:
      return null;
    case PacketCommand.MIN_CLASS_PACKET:
      return null;
    case PacketCommand.C2S_CLASS_LEVEL_INFO_REQ:
      return sc2sClassLevelInfoReq;
    case PacketCommand.S2C_CLASS_LEVEL_INFO_RES:
      return ss2cClassLevelInfoRes;
    case PacketCommand.C2S_CLASS_EQUIP_INFO_REQ:
      return sc2sClassEquipInfoReq;
    case PacketCommand.S2C_CLASS_EQUIP_INFO_RES:
      return ss2cClassEquipInfoRes;
    case PacketCommand.C2S_CLASS_PERK_LIST_REQ:
      return sc2sClassPerkListReq;
    case PacketCommand.S2C_CLASS_PERK_LIST_RES:
      return ss2cClassPerkListRes;
    case PacketCommand.C2S_CLASS_SKILL_LIST_REQ:
      return sc2sClassSkillListReq;
    case PacketCommand.S2C_CLASS_SKILL_LIST_RES:
      return ss2cClassSkillListRes;
    case PacketCommand.C2S_CLASS_SPELL_LIST_REQ:
      return sc2sClassSpellListReq;
    case PacketCommand.S2C_CLASS_SPELL_LIST_RES:
      return ss2cClassSpellListRes;
    case PacketCommand.C2S_CLASS_MUSIC_LIST_REQ:
      return sc2sClassMusicListReq;
    case PacketCommand.S2C_CLASS_MUSIC_LIST_RES:
      return ss2cClassMusicListRes;
    case PacketCommand.C2S_CLASS_ITEM_MOVE_REQ:
      return sc2sClassItemMoveReq;
    case PacketCommand.S2C_CLASS_ITEM_MOVE_RES:
      return ss2cClassItemMoveRes;
    case PacketCommand.C2S_CLASS_SPELL_SLOT_MOVE_REQ:
      return sc2sClassSpellSlotMoveReq;
    case PacketCommand.S2C_CLASS_SPELL_SLOT_MOVE_RES:
      return ss2cClassSpellSlotMoveRes;
    case PacketCommand.C2S_CLASS_SPELL_SEQUENCE_CHANGE_REQ:
      return sc2sClassSpellSequenceChangeReq;
    case PacketCommand.S2C_CLASS_SPELL_SEQUENCE_CHANGE_RES:
      return ss2cClassSpellSequenceChangeRes;
    case PacketCommand.C2S_CLASS_MUSIC_SLOT_MOVE_REQ:
      return sc2sClassMusicSlotMoveReq;
    case PacketCommand.S2C_CLASS_MUSIC_SLOT_MOVE_RES:
      return ss2cClassMusicSlotMoveRes;
    case PacketCommand.MAX_CLASS_PACKET:
      return null;
    case PacketCommand.MIN_GATHERING_HALL_PACKET:
      return null;
    case PacketCommand.C2S_GATHERING_HALL_CHANNEL_LIST_REQ:
      return sc2sGatheringHallChannelListReq;
    case PacketCommand.S2C_GATHERING_HALL_CHANNEL_LIST_RES:
      return ss2cGatheringHallChannelListRes;
    case PacketCommand.C2S_GATHERING_HALL_CHANNEL_SELECT_REQ:
      return sc2sGatheringHallChannelSelectReq;
    case PacketCommand.S2C_GATHERING_HALL_CHANNEL_SELECT_RES:
      return ss2cGatheringHallChannelSelectRes;
    case PacketCommand.C2S_GATHERING_HALL_CHANNEL_EXIT_REQ:
      return sc2sGatheringHallChannelExitReq;
    case PacketCommand.S2C_GATHERING_HALL_CHANNEL_EXIT_RES:
      return ss2cGatheringHallChannelExitRes;
    case PacketCommand.C2S_GATHERING_HALL_CHANNEL_USER_LIST_REQ:
      return sc2sGatheringHallChannelUserListReq;
    case PacketCommand.S2C_GATHERING_HALL_CHANNEL_USER_LIST_RES:
      return ss2cGatheringHallChannelUserListRes;
    case PacketCommand.S2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOT:
      return ss2cGatheringHallChannelUserUpdateNot;
    case PacketCommand.C2S_GATHERING_HALL_CHANNEL_CHAT_REQ:
      return sc2sGatheringHallChannelChatReq;
    case PacketCommand.S2C_GATHERING_HALL_CHANNEL_CHAT_RES:
      return ss2cGatheringHallChannelChatRes;
    case PacketCommand.S2C_GATHERING_HALL_CHANNEL_CHAT_NOT:
      return ss2cGatheringHallChannelChatNot;
    case PacketCommand.C2S_GATHERING_HALL_TARGET_EQUIPPED_ITEM_REQ:
      return sc2sGatheringHallTargetEquippedItemReq;
    case PacketCommand.S2C_GATHERING_HALL_TARGET_EQUIPPED_ITEM_RES:
      return ss2cGatheringHallTargetEquippedItemRes;
    case PacketCommand.MAX_GATHERING_HALL_PACKET:
      return null;
    case PacketCommand.MIN_META_PACKET:
      return null;
    case PacketCommand.C2S_META_LOCATION_REQ:
      return sc2sMetaLocationReq;
    case PacketCommand.S2C_META_LOCATION_RES:
      return ss2cMetaLocationRes;
    case PacketCommand.C2S_BLOCK_CHARACTER_REQ:
      return sc2sBlockCharacterReq;
    case PacketCommand.S2C_BLOCK_CHARACTER_RES:
      return ss2cBlockCharacterRes;
    case PacketCommand.C2S_UNBLOCK_CHARACTER_REQ:
      return sc2sUnblockCharacterReq;
    case PacketCommand.S2C_UNBLOCK_CHARACTER_RES:
      return ss2cUnblockCharacterRes;
    case PacketCommand.C2S_BLOCK_CHARACTER_LIST_REQ:
      return sc2sBlockCharacterListReq;
    case PacketCommand.S2C_BLOCK_CHARACTER_LIST_RES:
      return ss2cBlockCharacterListRes;
    case PacketCommand.C2S_HACK_LOG_REQ:
      return sc2sHackLogReq;
    case PacketCommand.S2C_HACK_LOG_RES:
      return ss2cHackLogRes;
    case PacketCommand.S2C_SERVICE_POLICY_NOT:
      return ss2cServicePolicyNot;
    case PacketCommand.C2S_RE_LOGIN_REQ:
      return sc2sReLoginReq;
    case PacketCommand.S2C_RE_LOGIN_RES:
      return ss2cReLoginRes;
    case PacketCommand.S2C_CLOSED_GAME_NOT:
      return ss2cClosedGameNot;
    case PacketCommand.C2S_USER_CHARACTER_INFO_REQ:
      return sc2sUserCharacterInfoReq;
    case PacketCommand.S2C_USER_CHARACTER_INFO_RES:
      return ss2cUserCharacterInfoRes;
    case PacketCommand.S2C_OPERATE_ANNOUNCE_NOT:
      return ss2cOperateAnnounceNot;
    case PacketCommand.MAX_META_PACKET:
      return null;
    case PacketCommand.UNRECOGNIZED:
    // case PacketCommand.C2S_BLOCK_CHARACTER_LIST_REQ:
    //   return sc2sBlockCharacterListReq;
    // case PacketCommand.S2C_OPERATE_ANNOUNCE_NOT:
    //   return ss2cOperateAnnounceNot;
    // case PacketCommand.MAX_META_PACKET:
    //   return null;
    // case PacketCommand.UNRECOGNIZED:
    default:
      return null;
  }
}

const extractPacketType = (packet: string) => {
  packet = packet.split(" ").join("").split("\n").join("");

  // group into 2 characters
  const cells = packet.match(/.{1,2}/g)!;

  // select 5th and 6th block
  const packetType = [cells[5], cells[4]].join("");

  return packetType;
};

const getPacketType = (packet: string) => {
  if (isNaN(parseInt(packet, 16))) {
    return packet;
  }

  return packetCommandToJSON(parseInt(packet, 16));
};

const decodePacket = (packet: string, decoder: any) => {
  const decoded = decoder.decode(
    bufferReader(
      Buffer.from(packet.split(" ").join("").split("\n").join(""), "hex")
    )
  );

  return decoded;
};

const getPackletLength = (packet: string) => {
  const cells_reversed = packet
    .split(" ")
    .join("")
    .split("\n")
    .join("")
    .match(/.{1,2}/g)!
    .reverse()
    .join("");

  // last 4 characters
  const last4Chars = cells_reversed.substring(
    cells_reversed.length - 4,
    cells_reversed.length
  );

  // logger.debug(`Last 4 chars: ${last4Chars}`);

  const length = parseInt(last4Chars, 16);

  return length;
};

const reportPackletLength = (packet: string) => {
  const length = getPackletLength(packet);
  logger.debug(`${length} bytes / ${length * 2} characters`);
};

const reportPacket = (
  packet: string,
  dumpContext: DumpContext,
  length: number
) => {
  //
  // logger.debug("[REPORTING PACKET]");
  // logger.debug(packet);

  reportPackletLength(packet);

  logger.debug(`Actual length: ${length}`);

  const type = getPacketType(extractPacketType(packet));

  if (!type) {
    // logger.debug("Unknown Packet Type");
    return;
  }
  //   logger.debug(`Packet Type: ${extractPacketType(packet)}`);
  //   logger.debug(`Packet Type: ${type}`);
  //   logger.debug(`Packet Type: ${packetCommandFromJSON(type)}`);

  const objType = packTypeToObjType(packetCommandFromJSON(type));
  if (!objType) {
    // logger.debug("Unknown Object Type");
    return;
  }

  const decoded = decodePacket(packet, objType);

  // const file_path =
  //     __dirname +
  //     `/${dumpContext.dumpPath}/${dumpContext.dumpIndex++}_${type}.json`;

  const file_path = `./${
    dumpContext.dumpPath
  }/${dumpContext.dumpIndex++}_${type}.json`;

  fs.ensureFileSync(file_path);
  fs.writeFileSync(file_path, JSON.stringify(decoded, null, 2));

  // logger.debug(`Written in ${file_path}`);
  // logger.debug(JSON.stringify(decoded, null, 2));
};

type DumpContext = {
  socket: SocketContext;
  dumpIndex: number;
  dumpPath: string;
};

const dumpContexts: {
  [key: string]: DumpContext;
} = {};

export const reportPackets = (packets: string, clientId: string) => {
  //
  let dumpContext = dumpContexts[clientId];

  if (!dumpContext) {
    dumpContext = dumpContexts[clientId] = {
      socket: new SocketContext({} as any),
      dumpIndex: 0,
      dumpPath: `packet_dumps/output/${clientId}/`,
    };
  }

  const socket = dumpContext.socket;

  socket.appendData(
    Buffer.from(packets.split(" ").join("").split("\n").join(""), "hex")
  );

  while (socket.hasCompleteData()) {
    const { data, rest, length } = socket.getCompleteData();
    console.log("step");

    // logger.debug("[HEX-DATA]");
    // logger.debug(buffer2HexSpacedString(data));
    // logger.debug("[HEX-REMAINING]");
    // logger.debug(buffer2HexSpacedString(rest));

    socket.setData(rest);

    reportPacket(data.toString("hex"), dumpContext, length);

    // logger.debug(
    //     "============================================================="
    // );
  }

  // if (socket.remainingData?.length) {
  //     logger.debug("Remaining Data");
  //     logger.debug(socket.remainingData.length);
  //     logger.debug(buffer2HexSpacedString(socket.remainingData));
  // }
};

const reportHexDumpFile = (fileName: string) => {
  //
  const inputFile = fs.readFileSync(
    `${__dirname}/../../../packet_dumps/input/${fileName}`,
    "hex"
  );

  reportPackets(inputFile, fileName.split(".")[0]);
};

const reportUnicodeDumpFile = (fileName: string) => {
  //
  const inputFile = fs.readFileSync(
    `${__dirname}/../../../packet_dumps/_input/${fileName}`,
    "utf-8"
  );

  reportPackets(inputFile, fileName.split(".")[0]);
};

const convertHexDumpFileToUnicodeDumpFile = (fileName: string) => {
  const inputFile = fs.readFileSync(
    `${__dirname}/../../../packet_dumps/_input/${fileName}`,
    "hex"
  );

  const outputFile = `${__dirname}/../../../packet_dumps/rewrote/${fileName}.txt`;

  fs.writeFileSync(outputFile.split("\n").join("\n\n"), inputFile);
};

// dumpContext.dumpIndex = 0;
// dumpContext.dumpPath = `resolved_dumps/${fileName}`;

// console.log(inputFile);
// convertHexDumpFileToUnicodeDumpFile("1711_new_packets");

// beautifyHexUnicodeFile("1711_new_packets");

reportHexDumpFile("1736_trading_req");
