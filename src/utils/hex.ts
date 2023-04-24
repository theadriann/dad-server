//
export const buffer2HexSpacedString = (buffer: Buffer) => {
    return Array.from(new Uint8Array(buffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join(" ");
};

export const numberToHex = (s: number) => {
    let a = s.toString(16);

    if (a.length % 2 > 0) {
        a = "0" + a;
    }

    return a;
};
