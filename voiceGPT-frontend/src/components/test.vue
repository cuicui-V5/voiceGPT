<template>
    <h1>voiceGPT demo</h1>
    请输入你的问题
    <input
        type="text"
        v-model="msg"
    />
    <button @click="sendMessage">发送</button>
    <div class="output">{{ res }}</div>
</template>

<script lang="ts">
    export default {
        name: "测试",
    };
</script>
<script setup lang="ts">
    import { ref } from "vue";
    import { reqChat } from "@/api";
    const msg = ref("");
    const res = ref("你好 世界");
    const sse = new EventSource("http://127.0.0.1:2222/sse");

    sse.addEventListener("message", (event) => {
        res.value = event.data;
        console.log(event.data);
    });
    sse.addEventListener("error", (e) => {
        console.log("出错了!!" + e);
    });
    async function sendMessage() {
        const res = await reqChat(msg.value);
        console.log(res);
    }
</script>

<style scoped lang="less"></style>
