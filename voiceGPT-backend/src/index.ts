import express from "express";
import cors from "cors";
import router from "./router.js";
// 创建服务器实例
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(router);
//开启服务器
app.listen(2222, () => {
    console.log("server started at http://127.0.0.1:2222");
});
