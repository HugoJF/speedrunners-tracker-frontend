'use client'

import {useSprints} from "@/queries/useSprints";
import {SprintTable} from "@/components/sprint-table";

export default function Springs() {
    const sprints = useSprints();

    if (sprints.isLoading) {
        return 'Loading...';
    }

    return <>
        <h1>Latest sprints</h1>

        <SprintTable sprints={sprints.data?.data}/>
    </>
}
