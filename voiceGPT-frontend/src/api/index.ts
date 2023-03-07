import { request } from "./request";
export function reqChat(msg: string) {
    return request.post("/chat", {
        msg,
    });
}
