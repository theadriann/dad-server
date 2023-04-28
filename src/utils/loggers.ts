import pino from "pino";
import { LOG_LEVEL } from "./info";

export const logger = pino({
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true,
        },
    },
    level: LOG_LEVEL,
});
