import { schatdataPiece } from "@/protos/ts/_Chat";
import {
    announceChatData,
    announcePartyChatData,
} from "@/services/PartyNotifier";
import net from "net";

const messagesToSend = [
    "Welcome to Dark and Darker PS",
    "",
    "This is a Public Test Server, so expect bugs and crashes. You cannot enter in dungeons, only the lobby is available.",
    "Please report any bugs to @theadriann on Discord",
    "Have fun!",
];

//
export const sendMotd = async (data: Buffer, socket: net.Socket) => {
    //
    const chats = messagesToSend.map((msg) =>
        schatdataPiece.create({
            chatStr: msg,
            chatDataPieceItem: {
                uid: 0,
                iid: "",
                pp: [],
                sp: [],
            },
        })
    );

    chats.forEach((chat) => {
        announceChatData(
            [chat],
            {
                accountId: "10000000000000",
                characterId: "10000000000000",
                nickname: "[SERVER]",
                partyId: "10000000000000",
            },
            socket
        );
    });
};
