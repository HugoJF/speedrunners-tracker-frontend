import {useSuspenseQuery} from "@tanstack/react-query";
import {http} from "../http/http.ts";

function fetchSprint(sprintId: string) {
    return http.get<Sprint>(`/sprints/${sprintId}`)
}

export const useSprint = (sprintId: string) => {
    return useSuspenseQuery({
        queryKey: ['sprint', sprintId],
        queryFn: () => fetchSprint(sprintId),
    })
}
