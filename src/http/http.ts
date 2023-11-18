import axios from "axios";

export const http = axios.create({
    // TODO fix env
    baseURL: import.meta.env.VITE_PUBLIC_API_ENDPOINT,
})
