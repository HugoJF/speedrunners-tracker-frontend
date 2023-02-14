import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";

function createMatch(data: MatchProperties) {
    return axios.post('/matches', data, {
        baseURL: 'http://localhost:9000',
    })
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
