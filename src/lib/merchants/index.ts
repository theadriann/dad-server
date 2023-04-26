//

import { Merchant } from "@/models/Merchant";
import { MERCHANTS } from "@/models/game/enums/Merchant";
import { smerchantInfo } from "@/protos/ts/Merchant";

export const allMerchants = [
    new Merchant().fromMerchantInfo(
        smerchantInfo.create({ merchantId: MERCHANTS.ALCHEMIST })
    ),
];
