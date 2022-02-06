import dotenv from "dotenv";
dotenv.config();

export const token = process.env.token!;
export const clientId = process.env.clientId!;
export const guildId = process.env.guildId!;