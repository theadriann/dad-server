import { packetCommandFromJSON } from "@/protos/ts/_PacketCommand";
import { numberToHex } from "@/utils/hex";

export const makePacketHeader = (
  packet: Buffer | Uint8Array,
  packetType: string | number
) => {
  const type = packetCommandFromJSON(packetType);
  const typeHex = numberToHex(type);

  //
  const totalLength = packet.length + 8;
  const totalLengthHex = numberToHex(totalLength);

  let header: Buffer[] = [];

  // create buffer and write 32LE to it
  const lengthBuf = Buffer.alloc(4);
  lengthBuf.writeUint32LE(totalLength, 0);
  header.push(lengthBuf);

  // if (totalLengthHex.length <= 2) {
  //     header.push(Buffer.from([totalLength, 0x00]));
  // } else {
  //     header.push(
  //         Buffer.from(
  //             totalLengthHex.match(/.{2}/g)!.reverse().join(""),
  //             "hex"
  //         )
  //     );
  // }

//   header.push(Buffer.from([0x00, 0x00]));

  const typeBuf = Buffer.alloc(2);
  typeBuf.writeUInt16LE(type, 0);
  header.push(typeBuf);

  // if (typeHex.length <= 2) {
  //     header.push(Buffer.from([type, 0x00]));
  // } else {
  //     header.push(
  //         Buffer.from(typeHex.match(/.{2}/g)!.reverse().join(""), "hex")
  //     );
  // }

  header.push(Buffer.from([0x02, 0x00]));
  // header.push(Buffer.from([0xff, 0xff]));

  // let lengthComponents = Buffer.from([totalLength]);
  // let headerRest = [];

  // logger.info(`Message Size: ${totalLength}`);
  // logger.info(`Length Bytes: ${totalLengthHex.length}`);

  // if (totalLengthHex.length <= 2) {
  //     headerRest.push(0x00);
  // } else {
  //     lengthComponents = Buffer.from(
  //         numberToHex(totalLength).match(/.{2}/g)!.reverse().join(""),
  //         "hex"
  //     );
  // }

  // headerRest = [...headerRest, 0x00, 0x00, type, 0x00, 0x00, 0x00];

  return header.reduce((a, b) => Buffer.concat([a, b]), Buffer.alloc(0));
};
