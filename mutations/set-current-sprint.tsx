import {useMutation, useQueryClient} from "@tanstack/react-query";
import {index} from "@/http";

function setCurrentSprint(id: string) {
    return index.post('/sprints/current', {id})
}

export const useSetCurrentSprint = () => {
    const queryClient = useQueryClient()

    return useMutation(setCurrentSprint, {
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['sprint', 'current']})
        },
    })
}
