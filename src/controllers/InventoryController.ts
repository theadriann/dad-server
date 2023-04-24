import net from "net";
import { bufferReader } from "../utils/bufferReader";
import { socketContextManager } from "../utils/SocketContextManager";
import { PacketResult } from "../protos/ts/_PacketCommand";
import {
    sc2sInventorySingleUpdateReq,
    ss2cInventorySingleUpdateRes,
} from "@/protos/ts/Inventory";
import { DefineMessage_UpdateFlag } from "@/protos/ts/_Defins";

export const singleInventoryUpdate = async (
    data: Buffer,
    socket: net.Socket
) => {
    const socketContext = socketContextManager.getBySocket(socket);
    const req = sc2sInventorySingleUpdateReq.decode(bufferReader(data));

    let res = ss2cInventorySingleUpdateRes.create({});

    if (!socketContext || !socketContext.userId) {
        res.result = PacketResult.FAIL_GENERAL;
        return res;
    }

    const oldItem = req.oldItem;
    const newItem = req.newItem;
    const updateFlag: DefineMessage_UpdateFlag = req.singleUpdateFlag;

    res.result = PacketResult.SUCCESS;
    res.newItem = newItem;
    res.oldItem = oldItem;

    return res;
};
