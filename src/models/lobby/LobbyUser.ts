//
import { logger } from "@/utils/loggers";
import cuid from "cuid";
import net from "net";
import { SocketContext } from "./SocketContext";
import { getDbCharacterById } from "@/services/CharacterService";
import { saccountNickname } from "@/protos/ts/_Character";

//
export class LobbyUser {
    //
    socket: net.Socket;
    sessionId: string;
    address: string;

    //
    userId: number | null = null;
    characterId: number | null = null;

    //
    socketContext: SocketContext;

    characterData: {
        nickname: string;
    } | null = null;

    constructor(socket: net.Socket) {
        this.socket = socket;
        this.sessionId = cuid();
        this.address = socket.remoteAddress || "";

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
            return;
        }

        const dbCharacter = await getDbCharacterById(this.characterId);

        if (!dbCharacter) {
            this.characterData = null;
            return;
        }

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
}
