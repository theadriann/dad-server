import net from "net";
import { sendPacket } from "@/utils/packets";
import { PacketCommand } from "@/protos/ts/_PacketCommand";
import { ss2cPartyMemberInfoNot } from "@/protos/ts/Party";
import { scharacterPartyInfo } from "@/protos/ts/_Character";

export const announcePartyMembersInfo = async (
    partyInfo: scharacterPartyInfo[],
    socket: net.Socket
) => {
    return sendPacket(
        socket,
        ss2cPartyMemberInfoNot
            .encode(
                ss2cPartyMemberInfoNot.create({
                    playPartyUserInfoData: partyInfo,
                })
            )
            .finish(),
        PacketCommand.S2C_PARTY_MEMBER_INFO_NOT
    );
};
