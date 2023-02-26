'use client'

import {useQuery} from "@tanstack/react-query";
import axios from "axios";

function fetchCurrentSprint() {
    return axios.get<Sprint>('/sprints/current', {
        baseURL: 'http://localhost:9000',
    })
}

export const useCurrentSprint = () => {
    const query = useQuery(['sprint', 'current'], () => fetchCurrentSprint())

    if (query.isLoading) {
        return undefined;
    }

    return query.data!.data;
}
