'use client'

import {useQuery} from "@tanstack/react-query";
import {http} from "@/http/http";

function fetchCurrentSprint() {
    return http.get<Sprint>('/sprints/current')
}

export const useCurrentSprint = () => {
    const query = useQuery(['sprint', 'current'], () => fetchCurrentSprint())

    if (query.isLoading) {
        return undefined;
    }

    return query.data!.data;
}
