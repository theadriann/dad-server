import { LobbyState } from "@/state/LobbyManager";
import cuid from "cuid";
import { LobbyUser } from "./LobbyUser";
import { scharacterTradeInfo } from "@/protos/ts/_Character";
import { stradeChatS2c } from "@/protos/ts/Trade";
import {
  announceMemberJoinTradeChannel,
  announceMemberLeftTradeChannel,
  announceTradeBegin,
  announceTradingChannelNewChatV2,
} from "@/services/TradingChannelNotifier";

//
export class TradingChannel {
  //
  id: string;
  name: string;
  category: string;

  lobby: LobbyState;

  userIds: Set<number> = new Set();

  messageIndex = 0;

  constructor(lobby: LobbyState) {
    this.id = cuid();
    this.name = "";
    this.category = "";
    this.lobby = lobby;
  }

  setInfo(id: string, name: string, category: string) {
    this.id = id || this.id || cuid();
    this.name = name;
    this.category = category;
  }

  addUser(user: LobbyUser) {
    if (!user.userId) return null;

    //
    this.userIds.add(user.userId);
    user?.setTradingChannelId(this.id);

    this.announceMemberJoin(user);
  }

  removeUserId(userId: number) {
    this.userIds.delete(userId);

    const user = this.lobby.getByUserId(userId);

    if (user) {
      user.setTradingChannelId(null);
      this.announceMemberLeave(user);
    }
  }

  getNewMessageIndex = () => {
    this.messageIndex += 1;
    return this.messageIndex;
  };

  getCharactersInfo = (): scharacterTradeInfo[] => {
    return this.mapUser((user) => {
      if (!user) return null;

      return scharacterTradeInfo.create({
        accountId: user.userId?.toString(),
        nickName: user.characterNicknameObject,
        characterClass: user.characterDb?.class,
        characterId: user.characterId?.toString(),
        gender: user.characterDb?.gender,
        level: user.characterDb?.level,
        characterLocation: 1,
      });
    }).filter((x) => x !== null) as scharacterTradeInfo[];
  };

  // -----------------------
  //
  // -----------------------

  announceMemberJoin = (enteredUser: LobbyUser) => {
    this.forEachUser((user) => {
      announceMemberJoinTradeChannel(enteredUser, user.socket);
    });
  };

  announceMemberLeave = (leftUser: LobbyUser) => {
    this.forEachUser((user) => {
      announceMemberLeftTradeChannel(leftUser, user.socket);
    });
  };

  announceNewChat = (chatEntry: stradeChatS2c, chatter: LobbyUser) => {
    this.forEachUser((user) => {
      if (user === chatter) return null;
      announceTradingChannelNewChatV2(chatEntry, user.socket);
    });
  };

  announceTradeBegin = (inviter: LobbyUser, receiver: LobbyUser) => {
    [inviter, receiver].forEach((user) => {
      announceTradeBegin(receiver, inviter, user);
    });
  };

  // -----------------------
  // aggrs
  // -----------------------

  getUsers = () => {
    return this.mapUser((user) => user).filter(
      (user: LobbyUser | null) => user
    ) as LobbyUser[];
  };

  forEachUser = (callback: (user: LobbyUser) => void) => {
    Array.from(this.userIds.values()).forEach((userId) => {
      const user = this.lobby.getByUserId(userId);
      if (!user) return null;

      callback(user);
    });
  };

  mapUser = <T>(callback: (user: LobbyUser) => T) => {
    return Array.from(this.userIds.values()).map((userId) => {
      const user = this.lobby.getByUserId(userId);
      if (!user) return null;

      return callback(user);
    });
  };

  // -----------------------
  //
  // -----------------------

  get size() {
    return this.userIds.size;
  }
}
