import net from "net";
import {
    sc2sAccountLoginReq,
    sloginAccountInfo,
    ss2cAccountLoginRes,
    ss2cAccountLoginRes_RESULT,
} from "../protos/ts/Account";
import { bufferReader } from "../utils/bufferReader";
import { db } from "../services/db";
import {
    DefineCommon_ServerLocation,
    Operate_Policy,
} from "../protos/ts/_Defins";
import { logger } from "@/utils/loggers";
import { ss2cReLoginRes, ss2cServicePolicyNot } from "@/protos/ts/Common";
import { LOBBY_PORT, SERVER_IP } from "@/utils/info";
import { lobbyState } from "@/state/LobbyManager";

export const login = async (data: Buffer, socket: net.Socket) => {
    const lobbyUser = lobbyState.getBySocket(socket);
    let userInfo = sc2sAccountLoginReq.decode(bufferReader(data));
    let res = ss2cAccountLoginRes.create({});

    let db_user = await db.user.findFirst({
        where: {
            username: userInfo.loginId,
        },
    });

    if (userInfo.loginId.length <= 2 || userInfo.password.length <= 2) {
        res.Result = ss2cAccountLoginRes_RESULT.FAIL_SHORT_ID_OR_PASSWORD;
        res.AccountInfo = sloginAccountInfo.create({
            AccountID: "",
        });
        return res;
    }

    if (userInfo.loginId.length > 20) {
        res.Result = ss2cAccountLoginRes_RESULT.FAIL_OVERFLOW_ID_OR_PASSWORD;
        res.AccountInfo = sloginAccountInfo.create({
            AccountID: "",
        });
        return res;
    }

    if (!db_user) {
        db_user = await register(data, socket);
        res.Result = ss2cAccountLoginRes_RESULT.SUCCESS_FIRST;
    } else if (db_user.is_banned) {
        res.Result = db_user.is_banned;
        res.AccountInfo = sloginAccountInfo.create({
            AccountID: db_user.id.toString(),
        });

        return res;
    } else if (db_user.password != userInfo.password) {
        res.Result = ss2cAccountLoginRes_RESULT.FAIL_PASSWORD;

        return res;
    }

    lobbyState.kickOtherConnectionsForUserId(db_user.id);
    lobbyUser?.setUserId(db_user.id);

    const serverLocation: DefineCommon_ServerLocation =
        DefineCommon_ServerLocation.LOCAL;

    res.serverLocation = serverLocation;
    res.AccountInfo = sloginAccountInfo.create({
        AccountID: db_user.id.toString(),
    });

    // if it's first time show secret or something
    if (res.Result !== ss2cAccountLoginRes_RESULT.SUCCESS_FIRST) {
        res.Result = ss2cAccountLoginRes_RESULT.SUCCESS;
    }

    res.accountId = db_user.id.toString();
    res.sessionId = lobbyUser!.sessionId;

    // logger.debug(JSON.stringify(res, null, 2));

    return res;
};

const register = async (data: Buffer, socket: net.Socket) => {
    let userInfo = sc2sAccountLoginReq.decode(bufferReader(data));

    let db_user = await db.user.create({
        data: {
            username: userInfo.loginId,
            password: userInfo.password,
            hwids: JSON.stringify(userInfo.hwIds),
            build_version: userInfo.buildVersion,
            is_banned: 0,
            secret: "",
        },
    });

    return db_user;
};

export const relogin = async (data: Buffer, socket: net.Socket) => {
    //
    const lobbyUser = lobbyState.getBySocket(socket);

    if (!lobbyUser || !lobbyUser.userId) {
        return ss2cReLoginRes.create({
            accountId: "",
        });
    }

    const res = ss2cReLoginRes.create({
        accountId: lobbyUser.userId.toString(),
        isReconnect: 0,
        sessionId: lobbyUser.sessionId,
        address: `http://${SERVER_IP}:${LOBBY_PORT}/`, // from packet
    });

    return res;
};

export const sendServerPolicy = async (data: Buffer, socket: net.Socket) => {
    return ss2cServicePolicyNot.create({
        policyList: [
            {
                policyType: Operate_Policy.POLICY_CHAT_RESEND_MS,
                policyValue: 500,
            },
            {
                policyType:
                    Operate_Policy.POLICY_TRADE_CHANNEL_CHAT_RESEND_TIME_MS,
                policyValue: 10000,
            },
            {
                policyType: Operate_Policy.POLICY_CHAT_LENGTH_MAX,
                policyValue: 200,
            },
            {
                policyType: Operate_Policy.POLICY_GATHERING_HALL_CHAT_RESEND_MS,
                policyValue: 10,
            },
            {
                policyType: Operate_Policy.POLICY_TRADE_CHANNEL_CHAT_MAX_LINE,
                policyValue: 1000,
            },
            {
                policyType: Operate_Policy.POLICY_MATCH_CANCEL_TIME_MS,
                policyValue: 10000,
            },
            {
                policyType: Operate_Policy.POLICY_GATHERING_HALL_JOIN_MIN_LEVEL,
                policyValue: 5,
            },
            {
                policyType: Operate_Policy.POLICY_HIGH_ROLLER_ENTRANCE_FEE,
                policyValue: 100,
            },
            {
                policyType: Operate_Policy.POLICY_GATHERING_HALL_CHAT_MAX_LINE,
                policyValue: 1000,
            },
            {
                policyType: Operate_Policy.POLICY_CHAT_MAX_LINE,
                policyValue: 500,
            },
            {
                policyType:
                    Operate_Policy.POLICY_HIGH_ROLLER_ENTRANCE_MIN_LEVEL,
                policyValue: 15,
            },
            {
                policyType: Operate_Policy.POLICY_BLOCK_CHARACTER_MAX_LIMIT,
                policyValue: 50,
            },
        ],
    });
};
