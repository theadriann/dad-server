import { Parser } from "binary-parser";
import { LoginPacket } from "./LoginPacket";
import { KeepAlivePacket } from "./KeepAlivePacket";
import { CreateCharacterPacket } from "./CreateCharacterPacket";
import { GetCharacterListPacket } from "./GetCharacterListPacket";

//
export const PacketIds = {
    login: LoginPacket.id,
    "keep-alive": KeepAlivePacket.id,
    "create-character": CreateCharacterPacket.id,
    "get-character-list": GetCharacterListPacket.id,
};

//
export const Packets = {
    [LoginPacket.id]: LoginPacket,
    [KeepAlivePacket.id]: KeepAlivePacket,
    [CreateCharacterPacket.id]: CreateCharacterPacket,
    [GetCharacterListPacket.id]: GetCharacterListPacket,
};
