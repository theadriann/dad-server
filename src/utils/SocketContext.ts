import cuid from "cuid";
import net from "net";
import { logger } from "./loggers";

//
export class SocketContext {
    //
    id: string;
    socket: net.Socket;
    sessionId: string;
    dataNumber: number;
    keepAliveNumber: number;
    loggedIn: boolean = false;
    address: string = "";

    userId: number | null = null;
    characterId: number | null = null;

    processLock: boolean = false;
    remainingData: Buffer | null = null;
    dataCleaningTimeout: NodeJS.Timeout | null = null;

    constructor(socket: net.Socket) {
        this.id = cuid();
        this.socket = socket;
        this.sessionId = cuid();
        this.dataNumber = 0;
        this.keepAliveNumber = 0;
        this.address = socket.remoteAddress || "";
    }

    setSocket(socket: net.Socket) {
        this.socket = socket;
        this.address = socket.remoteAddress || "";
    }

    setLoggedIn(value: boolean) {
        this.loggedIn = value;
    }

    setUserId(value: number) {
        this.userId = value;
    }

    // -----------------------
    // Character
    // -----------------------

    setCharacterId(value: number) {
        logger.debug(`Setting character id to ${value}`);
        this.characterId = value;
    }

    // -----------------------
    // Data Processing
    // -----------------------

    setData(value: Buffer | null) {
        this.remainingData = value;
    }

    appendData(value: Buffer) {
        if (this.remainingData) {
            this.remainingData = Buffer.concat([this.remainingData, value]);
        } else {
            this.remainingData = value;
        }
    }

    getReportedDataLength() {
        if (!this.remainingData) {
            return 0;
        }

        if (this.remainingData.length < 4) {
            return 0;
        }

        return this.remainingData.readInt32LE(0);
    }

    getCompleteData() {
        if (!this.remainingData) {
            throw new Error("no remaining data");
        }

        const length = this.getReportedDataLength();

        if (length < 4) {
            throw new Error("no complete data");
        }

        const data = this.remainingData.subarray(0, length);
        const rest = this.remainingData.subarray(length);

        return { data, rest };
    }

    hasCompleteData() {
        if (!this.remainingData) {
            return false;
        }

        const length = this.getReportedDataLength();

        if (length < 4) {
            return false;
        }

        return this.remainingData.length >= length;
    }

    setProcessLock(value: boolean) {
        this.processLock = value;
    }

    deleteDataCleaningTimeout = () => {
        if (this.dataCleaningTimeout) {
            clearTimeout(this.dataCleaningTimeout);
            this.dataCleaningTimeout = null;
        }
    };

    queueDataCleaningTimeout() {
        this.dataCleaningTimeout = setTimeout(async () => {
            logger.debug(`[${this.id}] Remaining Data Timeout`);
            if (!this.hasCompleteData()) {
                logger.debug(`Removing Remaining Data`);
                this.setData(null);
            }
        }, 1000 * 10);
    }
}
