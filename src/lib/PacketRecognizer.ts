import { Packets } from "./packets/AllPackets";
import { BasePacket } from "./packets/BasePacket";
import { KeepAlivePacket } from "./packets/KeepAlivePacket";
import { LoginPacket } from "./packets/LoginPacket";

//
export class PacketRecognizer {
    private static instance: PacketRecognizer;

    private constructor() {
        //
    }

    public static getInstance(): PacketRecognizer {
        if (!PacketRecognizer.instance) {
            PacketRecognizer.instance = new PacketRecognizer();
        }

        return PacketRecognizer.instance;
    }

    public recognize(packet: Buffer): [string, BasePacket | null] {
        // packet is a string and it should be recognized by its hex structure
        // for example, the first packet sent by the client is 08 00 00 00 01 00 02 00
        // this packet is a connection request

        const hex = packet.toString("hex");
        const dataArr: any[] = [];

        for (let Packet of Object.values(Packets)) {
            if (Packet.isValid(packet)) {
                console.log(`Packet *${Packet.id}* recognized`);
                return [Packet.id, Packet];
            }
        }

        return ["unknown", null];
    }
}
