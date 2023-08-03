//
import { logger } from "@/utils/loggers";
import cuid from "cuid";
import net from "net";
import { SocketContext } from "./SocketContext";
import { getDbCharacterById } from "@/services/CharacterService";
import {
  FriendLocation,
  saccountNickname,
  scharacterGatheringHallInfo,
  scharacterTradeInfo,
} from "@/protos/ts/_Character";
import { Character } from "@prisma/client";
import { LobbyState } from "@/state/LobbyManager";
import { Item } from "../Item";
import {
  DefineCommon_MetaLocation,
  DefineGame_DifficultyType,
  DefineItem_InventoryId,
  DefineMatch_MatchRegion,
} from "@/protos/ts/_Defins";
import { announcePartyMembersInfo } from "@/services/PartyNotifier";
import { stradingUserInfo } from "@/protos/ts/Trade";

//
export class LobbyUser {
  //
  socket: net.Socket;
  sessionId: string;
  address: string;

  //
  lobby: LobbyState;

  //
  userId: number | null = null;
  characterId: number | null = null;

  //
  socketContext: SocketContext;

  characterData: {
    nickname: string;
  } | null = null;

  characterDb: Character | null = null;
  characterLocation: DefineCommon_MetaLocation = DefineCommon_MetaLocation.PLAY;
  characterFriendLocation: FriendLocation =
    FriendLocation.Friend_Location_LOBBY;
  characterItems: Item[] = [];

  partyId: string | null = null;
  tradingChannelId: string | null = null;
  gatheringHallId: string | null = null;

  regionId: DefineMatch_MatchRegion = DefineMatch_MatchRegion.EU_CENTRAL;
  gameDifficultyId: DefineGame_DifficultyType =
    DefineGame_DifficultyType.NORMAL;

  isReady: number = 0;

  constructor(socket: net.Socket, lobby: LobbyState) {
    this.socket = socket;
    this.sessionId = cuid();
    this.address = socket.remoteAddress || "";

    this.lobby = lobby;

    this.socketContext = new SocketContext(this);
  }

  // -----------------------
  //
  // -----------------------

  onDisconnect = () => {
    this.socket.destroy();
    this.socketContext.setActive(false);
    this.characterLocation = DefineCommon_MetaLocation.OFFLINE;
    this.characterFriendLocation = FriendLocation.Friend_Location_OFFLINE;
  };

  setSocket(socket: net.Socket) {
    this.socket = socket;
    this.address = socket.remoteAddress || "";
  }

  setUserId(value: number) {
    this.userId = value;
  }

  setCharacterId(value: number) {
    this.characterId = value;

    this.loadCharacterData();
  }

  async getCharacterDb(mustRefresh = false) {
    if (!this.characterDb || mustRefresh) {
      await this.loadCharacterData();
    }

    return this.characterDb;
  }

  loadCharacterData = async () => {
    if (!this.characterId) {
      this.characterData = null;
      this.characterDb = null;
      return;
    }

    const dbCharacter = await getDbCharacterById(this.characterId);

    if (!dbCharacter) {
      this.characterData = null;
      this.characterDb = null;
      return;
    }

    this.characterItems = dbCharacter.inventory.map((item) =>
      new Item().fromDB(item)
    );

    this.characterDb = dbCharacter;
    this.characterData = {
      nickname: dbCharacter.nickname,
    };
  };

  // -----------------------
  //
  // -----------------------

  get isLoggedIn() {
    return this.userId !== null;
  }

  get hasCharacterLoaded() {
    return this.isLoggedIn && this.characterId !== null;
  }

  get characterNickname() {
    return this.characterData?.nickname;
  }

  get characterNicknameObject() {
    const streamingNickname = `Fighter#${Math.floor(
      Math.random() * (1700000 - 1000000) + 1000000
    )}`;

    return saccountNickname.create({
      originalNickName: this.characterNickname,
      streamingModeNickName: streamingNickname,
      karmaRating: 0,
    });
  }

  // -----------------------
  // Character
  // -----------------------

  setLocation = (value: DefineCommon_MetaLocation) => {
    this.characterLocation = value;
  };

  setFriendLocation = (value: FriendLocation) => {
    this.characterFriendLocation = value;
  };

  setRegionId = (value: DefineMatch_MatchRegion) => {
    this.regionId = value;
  };

  setGameDifficultyId = (value: DefineGame_DifficultyType) => {
    this.gameDifficultyId = value;
  };

  setIsReady = (value: number) => {
    this.isReady = value;
  };

  toEquipmentInfo = () => {
    return this.characterItems
      .filter((item) => item.inventoryId === DefineItem_InventoryId.EQUIPMENT)
      .map((item) => item.toSItem());
  };

  // -----------------------
  // Gathering Hall
  // -----------------------

  setGatheringHallId = (value: string | null) => {
    this.gatheringHallId = value;
  };

  getGatheringHall() {
    if (this.gatheringHallId) {
      return this.lobby.halls.get(this.gatheringHallId) || null;
    }

    return null;
  }

  toGatheringHallInfo = () => {
    return scharacterGatheringHallInfo.create({
      accountId: this.userId?.toString(),
      characterClass: this.characterDb?.class,
      characterId: this.characterId?.toString(),
      gender: this.characterDb?.gender,
      level: this.characterDb?.level,
      nickName: this.characterNicknameObject,
    });
  };

  toTradingChannelInfo = () => {
    return scharacterTradeInfo.create({
      accountId: this.userId?.toString(),
      characterClass: this.characterDb?.class,
      characterId: this.characterId?.toString(),
      characterLocation: this.characterLocation,
      gender: this.characterDb?.gender,
      level: this.characterDb?.level,
      nickName: this.characterNicknameObject,
    });
  };

  toTradingUserInfo = () => {
    return stradingUserInfo.create({
      nickName: this.characterNicknameObject,
      accountId: this.userId?.toString(),
    });
  };

  // -----------------------
  // Trading Channel
  // -----------------------

  setTradingChannelId = (value: string | null) => {
    this.tradingChannelId = value;
  };

  getTradingChannel() {
    if (this.tradingChannelId) {
      return this.lobby.tradingChannels.get(this.tradingChannelId) || null;
    }

    return null;
  }

  // -----------------------
  // Party
  // -----------------------

  setPartyId = (value: string | null) => {
    this.partyId = value;
  };

  getParty() {
    if (this.partyId) {
      return this.lobby.parties.get(this.partyId) || null;
    }

    return null;
  }

  announcePartyStatus() {
    const party = this.getParty();

    if (party) return party.announceMembersInfo();
    announcePartyMembersInfo([], this.socket);
  }

  getCurrentPartySize() {
    const party = this.getParty();

    if (party) return party.size;
    return 0;
  }
}
