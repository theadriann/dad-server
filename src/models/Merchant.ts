import { smerchantInfo } from "@/protos/ts/Merchant";

//
export class Merchant {
    id: number = 0;
    merchantId: string = "";
    remainingTime: number = 1000 * 60 * 2 + 1000 * 25;

    constructor() {}

    fromDB(obj: any) {
        return this;
    }

    static fromDB(obj: any) {
        const item = new Merchant();
        item.fromDB(obj);
        return item;
    }

    toDB() {
        const obj: any = {};

        if (this.id) {
            obj.id = this.id;
        }

        return obj;
    }

    // -----------------------
    // Merchant Info Serialization
    // -----------------------

    static fromMerchantInfo(obj: smerchantInfo) {
        const item = new Merchant();
        item.fromMerchantInfo(obj);
        return item;
    }

    fromMerchantInfo(obj: smerchantInfo) {
        this.merchantId = obj.merchantId;
        this.remainingTime = obj.remainTime;
        return this;
    }

    toMerchantInfo(): smerchantInfo {
        return smerchantInfo.create({
            faction: 0,
            isUnidentified: 0,
            merchantId: this.merchantId,
            remainTime: this.remainingTime,
        });
    }
}
