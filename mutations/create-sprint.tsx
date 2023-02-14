import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";

function createSprint(data: SprintProperties) {
    return axios.post('/sprints', data, {
        baseURL: 'http://localhost:9000',
    })
}

export const useCreateSprint = () => {
    const queryClient = useQueryClient()

    return useMutation(createSprint, {
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ['sprint']
        }),
    })
}
