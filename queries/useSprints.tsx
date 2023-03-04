'use client'

import {useQuery} from "@tanstack/react-query";
import {http} from "@/http/http";

function fetchSprints() {
    return http.get<Sprint[]>('/sprints')
}

export const useSprints = () => {
    return useQuery(['sprint'], () => fetchSprints())
}
