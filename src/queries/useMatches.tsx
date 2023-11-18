import {useSuspenseQuery} from "@tanstack/react-query";
import {http} from "../http/http.ts";

function fetchMatches(map?: string) {
    return http.get<Match[]>('/matches', {
        params: map ? {map} : {}
    })
}

export const useMatches = (map?: string) => {
    return useSuspenseQuery({
        queryKey: ['match', map],
        queryFn: () => fetchMatches(map)
    })
}
