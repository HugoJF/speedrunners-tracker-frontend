import {useMutation, useQueryClient} from "@tanstack/react-query";
import {index} from "@/http";

function createMatch(data: MatchProperties) {
    return index.post('/matches', data)
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
