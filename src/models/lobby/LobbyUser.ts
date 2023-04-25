//
import { logger } from "@/utils/loggers";
import cuid from "cuid";
import net from "net";
import { SocketContext } from "./SocketContext";
import { getDbCharacterById } from "@/services/CharacterService";
import { saccountNickname } from "@/protos/ts/_Character";
import { Character } from "@prisma/client";
import { LobbyState } from "@/state/LobbyManager";
import { Item } from "../Item";

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
    characterItems: Item[] = [];

    partyId: string | null = null;

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
    // Party
    // -----------------------

    setPartyId = (value: string | null) => {
        this.partyId = value;
    };

    getParty() {
        console.log(`party@user: ${this.partyId}`);
        if (this.partyId) {
            return this.lobby.parties.get(this.partyId) || null;
        }

        return null;
    }
}
