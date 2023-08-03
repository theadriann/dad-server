//
import { GatheringHall } from "@/models/lobby/GatheringHall";
import { LobbyUser } from "@/models/lobby/LobbyUser";
import { Party } from "@/models/lobby/Party";
import { TradingChannel } from "@/models/lobby/TradingChannel";
import { DefineChat_RoomType } from "@/protos/ts/_Defins";
import { logger } from "@/utils/loggers";
import net from "net";

export class LobbyState {
  //
  users = new Map<string, LobbyUser>();
  parties = new Map<string, Party>();
  halls = new Map<string, GatheringHall>();
  tradingChannels = new Map<string, TradingChannel>();

  constructor() {
    this.createGatheringHall();
    this.createTradingChannels();
  }

  create = (socket: net.Socket) => {
    const user = new LobbyUser(socket, this);
    this.add(user);
    return user;
  };

  add(user: LobbyUser) {
    this.users.set(user.sessionId, user);
  }

  remove(user: LobbyUser) {
    this.users.delete(user.sessionId);
  }

  // -----------------------
  //
  // -----------------------

  kickOtherConnectionsForUserId = (userId: number) => {
    let user = null;

    while ((user = this.getByUserId(userId))) {
      logger.info(`Kicking user ${userId} - ${user.sessionId} from lobby`);
      user.onDisconnect();
      this.remove(user);
    }
  };

  // -----------------------
  // Gathering Hall
  // -----------------------

  createGatheringHall = () => {
    const hall = new GatheringHall(this);
    hall.id = "default";

    this.halls.set(hall.id, hall);
  };

  createTradingChannels = () => {
    const config = [
      {
        category: DefineChat_RoomType.ROOM_TYPE_WEAPON,
        chats: [
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Barbarian`,
            name: "Barbarian",
          },
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Bard`,
            name: "Bard",
          },
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Cleric`,
            name: "Cleric",
          },
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Fighter`,
            name: "Fighter",
          },
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Ranger`,
            name: "Ranger",
          },
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Rogue`,
            name: "Rogue",
          },
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Wizard`,
            name: "Wizard",
          },
        ],
      },
      {
        category: DefineChat_RoomType.ROOM_TYPE_ARMOR,
        chats: [
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Barbarian`,
            name: "Barbarian",
          },
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Bard`,
            name: "Bard",
          },
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Cleric`,
            name: "Cleric",
          },
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Fighter`,
            name: "Fighter",
          },
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Ranger`,
            name: "Ranger",
          },
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Rogue`,
            name: "Rogue",
          },
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Wizard`,
            name: "Wizard",
          },
        ],
      },
      {
        category: DefineChat_RoomType.ROOM_TYPE_UTILITY,
        chats: [
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Misc`,
            name: "Misc",
          },
          {
            id: `ChatRoomData:Id_ChatRoom_Trade_Utility`,
            name: "Utility",
          },
        ],
      },
    ];

    config.forEach((category) => {
      category.chats.forEach((chat) => {
        const channel = new TradingChannel(this);

        channel.setInfo(chat.id, chat.name, category.category as any);

        this.tradingChannels.set(channel.id, channel);
      });
    });
  };

  // -----------------------
  // Party
  // -----------------------

  createParty = (user: LobbyUser) => {
    const party = new Party(this);

    party.addUser(user.userId!);
    party.setPartyLeader(user.userId!);

    this.parties.set(party.id, party);
  };

  ensureUserParty = (user: LobbyUser) => {
    if (user.getParty()) {
      return;
    }

    this.createParty(user);
  };

  removeUserFromParties = (userId: number) => {
    const user = this.getByUserId(userId);
    const party = user?.getParty();

    if (party) {
      party.removeUser(userId);
    }
  };

  // -----------------------
  // Selectors
  // -----------------------

  getBySessionId(id: string) {
    return this.users.get(id);
  }

  getByAddress(address: string) {
    return Array.from(this.users.values()).find(
      (user) => user.address === address
    );
  }

  getByUserId(userId: number) {
    return Array.from(this.users.values()).find(
      (user) => user.userId === userId
    );
  }

  getByCharacterId(characterId: number) {
    return Array.from(this.users.values()).find(
      (user) => user.characterId === characterId
    );
  }

  getBySocket(socket: net.Socket) {
    return Array.from(this.users.values()).find(
      (user) => user.socket === socket
    );
  }

  getAllActive() {
    return Array.from(this.users.values()).filter(
      (user) => !user.socket.destroyed
    );
  }

  getTradingChannelByUserId(userId: number) {
    return Array.from(this.tradingChannels.values()).find((channel) =>
      channel.userIds.has(userId)
    );
  }
}

export const lobbyState = new LobbyState();
