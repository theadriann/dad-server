//
import { SocketContext } from "@/models/lobby/SocketContext";
import fs from "fs";

export const beautifyHexUnicodeFile = (fileName: string) => {
  //
  const packets = fs.readFileSync(
    `${__dirname}/../../../packet_dumps/_input/${fileName}`,
    "hex"
  );

  let newPackets = "";

  const socket = new SocketContext({} as any);

  socket.appendData(
    Buffer.from(packets.split(" ").join("").split("\n").join(""), "hex")
  );

  while (socket.hasCompleteData()) {
    const { data, rest, length } = socket.getCompleteData();

    // logger.debug("[HEX-DATA]");
    // logger.debug(buffer2HexSpacedString(data));
    // logger.debug("[HEX-REMAINING]");
    // logger.debug(buffer2HexSpacedString(rest));

    socket.setData(rest);

    newPackets += data.toString("hex") + "\n\n";
    // reportPacket(data.toString("hex"), dumpContext, length);

    // logger.debug(
    //     "============================================================="
    // );
  }

  fs.writeFileSync(
    `${__dirname}/../../../packet_dumps/rewrote/bt_${fileName}`,
    newPackets
  );
};
