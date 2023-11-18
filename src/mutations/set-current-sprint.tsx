import {useMutation, useQueryClient} from "@tanstack/react-query";
import {http} from "../http/http.ts";

function setCurrentSprint(id: string) {
    return http.post('/sprints/current', {id})
}

export const useSetCurrentSprint = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: setCurrentSprint,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['sprint', 'current']})
        },
    })
}
