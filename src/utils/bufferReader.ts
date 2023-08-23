import { Reader } from "protobufjs";

export const bufferReader = (data: Buffer) => {
  return Reader.create(
    new Uint8Array(
      Buffer.from(data.buffer, data.byteOffset + 8, data.byteLength - 8)
    )
  );
};
