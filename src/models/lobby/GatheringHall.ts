import { LobbyState } from "@/state/LobbyManager";
import cuid from "cuid";
import { LobbyUser } from "./LobbyUser";
import { announcePartyMembersInfo } from "@/services/PartyNotifier";
import { schatdataPiece } from "@/protos/ts/_Chat";
import { scharacterGatheringHallInfo } from "@/protos/ts/_Character";
import {
    announceHallNewChat,
    announceMemberJoinHall,
    announceMemberLeftHall,
} from "@/services/HallNotifier";
import { sgatheringHallChatS2c } from "@/protos/ts/GatheringHall";

//
export class GatheringHall {
    id: string;
    lobby: LobbyState;

    userIds: Set<number> = new Set();

    messageIndex = 0;

    constructor(lobby: LobbyState) {
        this.id = cuid();
        this.lobby = lobby;
    }

    addUser(user: LobbyUser) {
        if (!user.userId) return null;

        //
        this.userIds.add(user.userId);
        user?.setGatheringHallId(this.id);

        this.announceMemberJoin(user);
    }

    removeUserId(userId: number) {
        this.userIds.delete(userId);

        const user = this.lobby.getByUserId(userId);

        if (user) {
            user.setGatheringHallId(null);
            this.announceMemberLeave(user);
        }
    }

    getNewMessageIndex = () => {
        this.messageIndex += 1;
        return this.messageIndex;
    };

    kickUser(userId: number) {
        // this.removeUser(userId);
        // this.announceMemberKicked(userId);
    }

    resolvePartyStatus() {
        //
        // this.isFormed = this.size > 1;
        // this.resolvePartyLeader();
    }

    resolvePartyLeader() {
        // if (this.userIds.length === 0) {
        //     this.partyLeaderId = null;
        //     return;
        // }
        // if (this.partyLeaderId === null) {
        //     this.partyLeaderId = this.userIds[0];
        //     return;
        // }
        // if (this.userIds.includes(this.partyLeaderId)) {
        //     return;
        // }
        // this.partyLeaderId = this.userIds[0];
    }

    getCharacterGatheringHallInfoArr = () => {
        return this.mapUser((user) => {
            if (!user) return null;

            return scharacterGatheringHallInfo.create({
                accountId: user.userId?.toString(),
                characterClass: user.characterDb?.class,
                characterId: user.characterId?.toString(),
                gender: user.characterDb?.gender,
                level: user.characterDb?.level,
                nickName: user.characterNicknameObject,
            });
        }).filter((x) => x !== null) as scharacterGatheringHallInfo[];
    };

    // -----------------------
    //
    // -----------------------

    announceMemberJoin = (enteredUser: LobbyUser) => {
        this.forEachUser((user) => {
            announceMemberJoinHall(enteredUser, user.socket);
        });
    };

    announceMemberLeave = (leftUser: LobbyUser) => {
        this.forEachUser((user) => {
            announceMemberLeftHall(leftUser, user.socket);
        });
    };

    announceNewChat = (
        chatEntry: sgatheringHallChatS2c,
        chatter: LobbyUser
    ) => {
        this.forEachUser((user) => {
            if (user === chatter) return null;
            announceHallNewChat(chatEntry, user.socket);
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
