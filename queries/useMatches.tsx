'use client'

import {useQuery} from "@tanstack/react-query";
import {http} from "@/http/http";

function fetchMatches(map?: string) {
    return http.get<Match[]>('/matches', {
        params: map ? {map} : {}
    })
}

export const useMatches = (map?: string) => {
    return useQuery(['match', map], () => fetchMatches(map))
}
