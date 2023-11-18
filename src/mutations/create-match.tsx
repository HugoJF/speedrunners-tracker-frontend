import {useMutation, useQueryClient} from "@tanstack/react-query";
import {http} from "../http/http.ts";

function createMatch(data: MatchProperties) {
    return http.post('/matches', data)
}

export const useCreateMatch = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createMatch,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['match']})
            queryClient.invalidateQueries({queryKey: ['sprint']})
        }
    })
}
