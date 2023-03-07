import express from "express";
import { api } from "./api.js";
import emitter from "./event.js";
const router = express.Router();

router.get("/sse", async (req, res) => {
    res.header({
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
    });
    res.write("data: " + Date.now() + "\n\n");
    emitter.on("chat", async (msg) => {
        const chatRes = await api.sendMessage(msg, {
            // print the partial response as the AI is "typing"
            onProgress: (partialResponse) => {
                // console.log(partialResponse.text);
                res.write("data: " + partialResponse.text + "\n\n");
            },
        });
        console.log(chatRes.text);
    });
    // res.end();
});

router.post("/chat", (req, res) => {
    emitter.emit("chat", req.body.msg);
    console.log(req.body.msg);
    res.send("ok");
});

export default router;
