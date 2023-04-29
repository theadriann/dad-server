import { scharacterPartyInfo } from "@/protos/ts/_Character";
import { LobbyState } from "@/state/LobbyManager";
import cuid from "cuid";
import { LobbyUser } from "./LobbyUser";
import {
    announcePartyChatData,
    announcePartyDifficultyChange,
    announcePartyMemberKicked,
    announcePartyMemberLocationChange,
    announcePartyMembersInfo,
    announcePartyReadyChange,
    announcePartyRegionChange,
} from "@/services/PartyNotifier";
import { schatdataPiece } from "@/protos/ts/_Chat";
import { DefineGame_DifficultyType } from "@/protos/ts/_Defins";

export const PARTY_MAX_SIZE = 3;

//
export class Party {
    id: string;
    lobby: LobbyState;

    userIds: number[] = [];
    partyLeaderId: number | null = null;

    isFormed = false;

    constructor(lobby: LobbyState) {
        this.id = cuid();
        this.lobby = lobby;
    }

    canJoin(userId: number) {
        if (this.isMax) {
            return false;
        }

        if (this.userIds.includes(userId)) {
            return false;
        }

        // TODO: add more checks

        return true;
    }

    addUser(userId: number) {
        //
        this.lobby.removeUserFromParties(userId);

        //
        this.userIds.push(userId);
        const user = this.lobby.getByUserId(userId);
        user?.setPartyId(this.id);

        this.resolvePartyStatus();
    }

    removeUser(userId: number) {
        this.userIds = this.userIds.filter((id) => id !== userId);

        const user = this.lobby.getByUserId(userId);

        if (user) {
            user.setPartyId(null);
            this.announceLeftPartyInfo(user);
        }

        this.resolvePartyStatus();
        this.announceMembersInfo();
    }

    kickUser(userId: number) {
        this.removeUser(userId);
        this.announceMemberKicked(userId);
    }

    setPartyLeader(userId: number) {
        this.partyLeaderId = userId;
    }

    setIsFormed(value: boolean) {
        this.isFormed = value;
    }

    isPartyLeader(user: LobbyUser) {
        return user.userId === this.partyLeaderId;
    }

    resolvePartyStatus() {
        //
        this.isFormed = this.size > 1;

        this.resolvePartyLeader();
    }

    resolvePartyLeader() {
        if (this.userIds.length === 0) {
            this.partyLeaderId = null;
            return;
        }

        if (this.partyLeaderId === null) {
            this.partyLeaderId = this.userIds[0];
            return;
        }

        if (this.userIds.includes(this.partyLeaderId)) {
            return;
        }

        this.partyLeaderId = this.userIds[0];
    }

    getCharacterPartyInfoArr = () => {
        return this.userIds
            .map((userId, index) => {
                //
                const user = this.lobby.getByUserId(userId);

                if (!user) {
                    return null;
                }

                const infoData: scharacterPartyInfo = {
                    accountId: user.userId!.toString(),
                    characterClass: user.characterDb!.class,
                    characterId: user.characterId!.toString(),
                    gender: user.characterDb!.gender,
                    isInGame: 0,
                    isPartyLeader: this.partyLeaderId === user.userId ? 1 : 0,
                    isReady: user.isReady,
                    level: user.characterDb!.level,
                    nickName: user.characterNicknameObject,
                    partyIdx: index + 1,
                    equipItemList: user.characterItems.map((item) =>
                        item.toSItem()
                    ),
                };

                return infoData;
            })
            .filter((infoData) => infoData !== null) as scharacterPartyInfo[];
    };

    setRegionId = (regionId: number) => {
        this.forEachUser((user) => {
            user.setRegionId(regionId);
            announcePartyRegionChange(regionId, user.socket);
        });
    };

    setGameDifficultyId = (difficulty: DefineGame_DifficultyType) => {
        this.forEachUser((user) => {
            user.setGameDifficultyId(difficulty);
            announcePartyDifficultyChange(difficulty, user.socket);
        });
    };

    announceLeftPartyInfo = (user: LobbyUser) => {
        announcePartyMembersInfo([], user.socket);
    };

    announceMembersInfo = () => {
        const users = this.getUsers();

        // destroy party if no users left in it
        if (users.length === 1) {
            return this.removeUser(users[0].userId!);
        }

        //
        users.forEach((user) => {
            announcePartyMembersInfo(
                this.getCharacterPartyInfoArr(),
                user.socket
            );
        });
    };

    announceChatFromUser = (
        fromUser: LobbyUser,
        messageDataPiece: schatdataPiece[]
    ) => {
        this.forEachUser((user) => {
            announcePartyChatData(fromUser, messageDataPiece, user.socket);
        });
    };

    announceMemberKicked = (userId: number) => {
        const user = this.lobby.getByUserId(userId);
        if (!user) return null;

        announcePartyMemberKicked(user.socket);
    };

    announceMemberLocationChange = (userId: number) => {
        const changedUser = this.lobby.getByUserId(userId);
        if (!changedUser) return null;

        this.forEachUser((user) => {
            announcePartyMemberLocationChange(changedUser, user.socket);
        });
    };

    announceReadyChange = (userId: number) => {
        const changedUser = this.lobby.getByUserId(userId);
        if (!changedUser) return null;

        this.forEachUser((user) => {
            announcePartyReadyChange(changedUser, user.socket);
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
        this.userIds.forEach((userId) => {
            const user = this.lobby.getByUserId(userId);
            if (!user) return null;

            callback(user);
        });
    };

    mapUser = <T>(callback: (user: LobbyUser) => T) => {
        return this.userIds.map((userId) => {
            const user = this.lobby.getByUserId(userId);
            if (!user) return null;

            return callback(user);
        });
    };

    // -----------------------
    //
    // -----------------------

    get size() {
        return this.userIds.length;
    }

    get isMax() {
        return this.size >= PARTY_MAX_SIZE;
    }

    get isReady() {
        return this.mapUser((user) => user.isReady).every((isReady) => isReady);
    }
}
