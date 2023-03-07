import axios from "axios";
export const request = axios.create({
    baseURL: "http://127.0.0.1:2222",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
});
