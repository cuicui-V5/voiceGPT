import { ChatGPTAPI } from "chatgpt";
import dotenv from "dotenv";
dotenv.config();

export const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY || "",
    apiBaseUrl: process.env.OPENAI_BASE_URL,
});
