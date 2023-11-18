import {useSuspenseQuery} from "@tanstack/react-query";
import {http} from "../http/http.ts";

function fetchCurrentSprint() {
    return http.get<Sprint>('/sprints/current')
}

export const useCurrentSprint = () => {
    const query = useSuspenseQuery({
        queryKey: ['sprint', 'current'],
        queryFn: fetchCurrentSprint,
    })

    return query.data.data;
}
