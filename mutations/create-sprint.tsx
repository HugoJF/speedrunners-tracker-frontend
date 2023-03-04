import {useMutation, useQueryClient} from "@tanstack/react-query";
import {http} from "@/http/http";

function createSprint(data: SprintProperties) {
    return http.post('/sprints', data)
}

export const useCreateSprint = () => {
    const queryClient = useQueryClient()

    return useMutation(createSprint, {
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['sprint']
        }),
    })
}
