import axios from "axios";

export const index = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
})
