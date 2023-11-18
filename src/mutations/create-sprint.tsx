import {useMutation, useQueryClient} from "@tanstack/react-query";
import {http} from "../http/http.ts";

function createSprint(data: SprintProperties) {
    return http.post('/sprints', data)
}

export const useCreateSprint = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createSprint,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['sprint']
            })
        }
    })
}
