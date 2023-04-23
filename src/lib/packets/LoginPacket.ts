import { Parser } from "binary-parser";
import { BasePacket } from "./BasePacket";

//
class LoginPacketImpl extends BasePacket {
    //
    id = "login";
    type = "11";

    parse = (packet: Buffer) => {
        const structure = [
            "uint16",
            "uint16",
            "uint16",
            "uint16",
            "uint16",
            "uint16",
            "uint16",
            "uint16",
            "uint16",
            "uint16",
        ];

        const x = new Parser()
            .uint8("totalLength")
            .array("data", {
                type: "uint8",
                length: 8,
            })
            .uint8("usernameLength")
            .array("username", {
                type: "uint8",
                length: "usernameLength",
            })
            .uint8("separator1")
            .uint8("passwordLength")
            .array("password", {
                type: "uint8",
                length: "passwordLength",
            })
            .uint8("separator2")
            .uint8("macLength")
            .array("mac", {
                type: "uint8",
                length: "macLength",
            })
            .uint8("separator3")
            .uint8("gameIdLength")
            .array("gameId", {
                type: "uint8",
                length: "gameIdLength",
            })
            .uint8("separator4")
            .uint8("versionLength")
            .array("version", {
                type: "uint8",
                length: "versionLength",
            });

        const result = x.parse(packet);

        return result;
    };
}

export const LoginPacket = new LoginPacketImpl();
