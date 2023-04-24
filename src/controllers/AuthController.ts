import net from "net";
import {
    sc2sAccountLoginReq,
    sloginAccountInfo,
    ss2cAccountLoginRes,
    ss2cAccountLoginRes_RESULT,
} from "../protos/ts/Account";
import { bufferReader } from "../utils/bufferReader";
import { db } from "../services/db";
import { socketContextManager } from "../utils/SocketContextManager";
import { DefineCommon_ServerLocation } from "../protos/ts/_Defins";
import { logger } from "@/utils/loggers";

export const login = async (data: Buffer, socket: net.Socket) => {
    const socketContext = socketContextManager.getBySocket(socket);
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

    socketContext?.setLoggedIn(true);
    socketContext?.setUserId(db_user.id);

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
    res.sessionId = socketContext!.sessionId;

    logger.info(JSON.stringify(res, null, 2));

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
