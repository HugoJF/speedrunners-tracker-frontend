'use client'

import {useSuspenseQuery} from "@tanstack/react-query";
import {http} from "../http/http.ts";

function fetchSprints() {
    return http.get<Sprint[]>('/sprints')
}

export const useSprints = () => {
    return useSuspenseQuery({
        queryKey: ['sprint'],
        queryFn: fetchSprints
    })
}
