'use client'

import {useQuery} from "@tanstack/react-query";
import {http} from "@/http/http";

function fetchSprint(sprintId: string) {
    return http.get<Sprint>(`/sprints/${sprintId}`)
}

export const useSprint = (sprintId: string) => {
    return useQuery(['sprint'], () => fetchSprint(sprintId))
}
