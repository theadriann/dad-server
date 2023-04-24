import { Reader } from "protobufjs";

export const bufferReader = (data: Buffer) => {
    return Reader.create(new Uint8Array(data.slice(8)));
};
