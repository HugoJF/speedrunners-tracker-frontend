'use client'

import {useQuery} from "@tanstack/react-query";
import axios from "axios";

function fetchMatches(map?: string) {
    return axios.get<Match[]>('/matches', {
        baseURL: 'http://localhost:9000',
        params: map ? {map} : {}
    })
}

export const useMatches = (map?: string) => {
    return useQuery(['match', map], () => fetchMatches(map))
}
