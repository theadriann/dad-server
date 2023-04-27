//
export enum MERCHANTS_IDS {
    SURGEON = "DesignDataMerchant:Id_Merchant_Surgeon",
    SANTA = "DesignDataMerchant:Id_Merchant_Santa",
    WOODSMAN = `DesignDataMerchant:Id_Merchant_Woodsman`,
    TAILOR = `DesignDataMerchant:Id_Merchant_Tailor`,
    TREASURER = `DesignDataMerchant:Id_Merchant_Treasurer`,
    LEATHERSMITH = `DesignDataMerchant:Id_Merchant_Leathersmith`,
    ARMOURER = `DesignDataMerchant:Id_Merchant_Armourer`,
    THE_COLLECTOR = `DesignDataMerchant:Id_Merchant_TheCollector`,
    ALCHEMIST = `DesignDataMerchant:Id_Merchant_Alchemist`,
    TAVERN_MASTER = `DesignDataMerchant:Id_Merchant_TavernMaster`,
    WEAPONSMITH = `DesignDataMerchant:Id_Merchant_Weaponsmith`,
    GOBLIN_MERCHANT = `DesignDataMerchant:Id_Merchant_GoblinMerchant`,
    VALENTINE = `DesignDataMerchant:Id_Merchant_Valentine`,
}

export type MERCHANTS_IDS_TYPE = keyof typeof MERCHANTS_IDS;

export const merchantIdFromClient = (merchantId: string): string => {
    switch (merchantId) {
        case `DesignDataMerchant:Id_Merchant_Surgeon`:
            return "SURGEON";
        case `DesignDataMerchant:Id_Merchant_Santa`:
            return "SANTA";
        case `DesignDataMerchant:Id_Merchant_Woodsman`:
            return "WOODSMAN";
        case `DesignDataMerchant:Id_Merchant_Tailor`:
            return "TAILOR";
        case `DesignDataMerchant:Id_Merchant_Treasurer`:
            return "TREASURER";
        case `DesignDataMerchant:Id_Merchant_Leathersmith`:
            return "LEATHERSMITH";
        case `DesignDataMerchant:Id_Merchant_Armourer`:
            return "ARMOURER";
        case `DesignDataMerchant:Id_Merchant_TheCollector`:
            return "THE_COLLECTOR";
        case `DesignDataMerchant:Id_Merchant_Alchemist`:
            return "ALCHEMIST";
        case `DesignDataMerchant:Id_Merchant_TavernMaster`:
            return "TAVERN_MASTER";
        case `DesignDataMerchant:Id_Merchant_Weaponsmith`:
            return "WEAPONSMITH";
        case `DesignDataMerchant:Id_Merchant_GoblinMerchant`:
            return "GOBLIN_MERCHANT";
        case `DesignDataMerchant:Id_Merchant_Valentine`:
            return "VALENTINE";
        default:
            return "";
    }
};

export const merchantIdToClient = (
    merchantId: keyof typeof MERCHANTS_IDS
): string => {
    return MERCHANTS_IDS[merchantId as keyof typeof MERCHANTS_IDS] || "";
};
