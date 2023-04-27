//
import { logger } from "@/utils/loggers";
import cuid from "cuid";
import net from "net";
import { LobbyUser } from "./LobbyUser";

export class SocketContext {
    //
    user: LobbyUser;
    active: boolean = false;

    //
    processLock: boolean = false;
    remainingData: Buffer | null = null;
    dataCleaningTimeout: NodeJS.Timeout | null = null;

    constructor(user: LobbyUser) {
        this.user = user;
    }

    // -----------------------
    // State Methods
    // -----------------------

    setActive(active: boolean) {
        this.active = active;
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

        // the other two bytes should be padding
        // return this.remainingData.readUint32LE(0);
        return this.remainingData.readUint16LE(0);
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
            logger.debug(`[${this.user.sessionId}] Remaining Data Timeout`);
            if (!this.hasCompleteData()) {
                logger.debug(`Removing Remaining Data`);
                this.setData(null);
            }
        }, 1000 * 10);
    }
}
