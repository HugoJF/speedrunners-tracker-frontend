import {useMutation, useQueryClient} from "@tanstack/react-query";
import {index} from "@/http";

function createSprint(data: SprintProperties) {
    return index.post('/sprints', data)
}

export const useCreateSprint = () => {
    const queryClient = useQueryClient()

    return useMutation(createSprint, {
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['sprint']
        }),
    })
}
