import {useMutation, useQueryClient} from "@tanstack/react-query";
import {http} from "@/http/http";

function updateMatch(data: HasId & MatchEditableProperties) {
    return http.put(`/matches/${data.id}`, data)
}

export const useUpdateMatch = () => {
    const queryClient = useQueryClient()

    return useMutation(updateMatch, {
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['match']})
            queryClient.invalidateQueries({queryKey: ['sprint']})
        },
    })
}
