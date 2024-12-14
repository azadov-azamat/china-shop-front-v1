import axios from "axios";
// import i18n from "../utils/i18n.ts";

export const baseUrl = `${import.meta.env.VITE_BACKEND_HOST}/api`;

export const http = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: "application/json",
    }
})