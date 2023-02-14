import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";

function setCurrentSprint(id: string) {
    return axios.post('/sprints/current', {id}, {
        baseURL: 'http://localhost:9000',
    })
}

export const useSetCurrentSprint = () => {
    const queryClient = useQueryClient()

    return useMutation(setCurrentSprint, {
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['sprint', 'current']})
        },
    })
}
