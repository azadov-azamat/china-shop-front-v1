import axios from "axios";
import i18n from "../utils/i18n.ts";

export const baseUrl = `${import.meta.env.VITE_BACKEND_HOST}/${i18n.language || 'ru'}/api/v1`;

export const http = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: "application/json",
        ContentType: "application/json"
    }
})

i18n.on('languageChanged', (lng: string) => {
    http.defaults.baseURL = `${import.meta.env.VITE_BACKEND_HOST}/${lng}/api/v1`;
});
