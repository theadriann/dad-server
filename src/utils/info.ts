// dotenv
import dotenv from "dotenv";
dotenv.config();

//
export const SERVER_IP = process.env.SERVER_IP || "127.0.0.1";
export const DISCOVERY_PORT = process.env.DISCOVERY_PORT || 30000;
export const LOBBY_PORT = process.env.LOBBY_PORT || 30001;
export const GAME_PORT_MIN = process.env.GAME_PORT_MIN || 32000;
export const GAME_PORT_MAX = process.env.GAME_PORT_MAX || 32100;
export const LOG_LEVEL = process.env.LOG_LEVEL || "debug";
export const LOG_PACKETS = Boolean(
    parseInt(process.env.LOG_PACKETS || "") || 0
);
