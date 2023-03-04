import {useMutation, useQueryClient} from "@tanstack/react-query";
import {http} from "@/http/http";

function createMatch(data: MatchProperties) {
    return http.post('/matches', data)
}

export const useCreateMatch = () => {
    const queryClient = useQueryClient()

    return useMutation(createMatch, {
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['match']})
            queryClient.invalidateQueries({queryKey: ['sprint']})
        },
    })
}
