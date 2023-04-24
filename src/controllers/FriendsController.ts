import net from "net";
import { bufferReader } from "../utils/bufferReader";
import { socketContextManager } from "../utils/SocketContextManager";
import {
    sc2sFriendListAllReq,
    ss2cFriendListAllRes,
} from "../protos/ts/Friend";

export const listAllFriends = async (data: Buffer, socket: net.Socket) => {
    const socketContext = socketContextManager.getBySocket(socket);
    const req = sc2sFriendListAllReq.decode(bufferReader(data));

    let res = ss2cFriendListAllRes.create({});

    res.loopFlag = 0;
    res.friendInfoList = [];
    res.dungeonLocateCount = 0;
    res.lobbyLocateCount = 0;
    res.totalUserCount = 0;

    if (!socketContext || !socketContext.userId) {
        return res;
    }

    return res;
};
