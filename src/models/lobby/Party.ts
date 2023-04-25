import { scharacterPartyInfo } from "@/protos/ts/_Character";
import { LobbyState } from "@/state/LobbyManager";
import cuid from "cuid";
import { LobbyUser } from "./LobbyUser";
import { announcePartyMembersInfo } from "@/services/PartyNotifier";

//
export class Party {
    id: string;
    lobby: LobbyState;

    characterIds: number[] = [];
    partyLeaderId: number | null = null;

    isFormed = false;

    constructor(lobby: LobbyState) {
        this.id = cuid();
        this.lobby = lobby;
    }

    addCharacter(characterId: number) {
        this.characterIds.push(characterId);
        const user = this.lobby.getByCharacterId(characterId);
        user?.setPartyId(this.id);
    }

    removeCharacter(characterId: number) {
        this.characterIds = this.characterIds.filter(
            (id) => id !== characterId
        );
    }

    setPartyLeader(characterId: number) {
        this.partyLeaderId = characterId;
    }

    setIsFormed(value: boolean) {
        this.isFormed = value;
    }

    resolvePartyLeader() {
        if (this.characterIds.length === 0) {
            this.partyLeaderId = null;
            return;
        }

        if (this.partyLeaderId === null) {
            this.partyLeaderId = this.characterIds[0];
            return;
        }

        if (this.characterIds.includes(this.partyLeaderId)) {
            return;
        }

        this.partyLeaderId = this.characterIds[0];
    }

    getCharacterPartyInfoArr = () => {
        return this.characterIds
            .map((characterId, index) => {
                //
                const user = this.lobby.getByCharacterId(characterId);

                if (!user) {
                    return null;
                }

                const infoData: scharacterPartyInfo = {
                    accountId: user.userId!.toString(),
                    characterClass: user.characterDb!.class,
                    characterId: user.characterId!.toString(),
                    gender: user.characterDb!.gender,
                    isInGame: 0,
                    isPartyLeader:
                        this.partyLeaderId === user.characterId ? 1 : 0,
                    isReady: 0,
                    level: user.characterDb!.level,
                    nickName: user.characterNicknameObject,
                    partyIdx: index + 1,
                    equipItemList: user.characterItems.map((item) =>
                        item.toJSON()
                    ),
                };

                return infoData;
            })
            .filter((infoData) => infoData !== null) as scharacterPartyInfo[];
    };

    announceMembersInfo = () => {
        const users = this.characterIds
            .map((characterId) => this.lobby.getByCharacterId(characterId))
            .filter((user) => user !== undefined) as LobbyUser[];

        users.forEach((user) => {
            announcePartyMembersInfo(
                this.getCharacterPartyInfoArr(),
                user.socket
            );
        });
    };

    // -----------------------
    //
    // -----------------------
}
