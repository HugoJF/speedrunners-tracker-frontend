'use client'

import {useQuery} from "@tanstack/react-query";
import axios from "axios";

function fetchSprints() {
    return axios.get('/sprints', {
        baseURL: 'http://localhost:9000',
    })
}

export const useSprints = () => {
    return useQuery(['sprint'], () => fetchSprints())
}
