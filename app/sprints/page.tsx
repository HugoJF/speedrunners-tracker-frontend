'use client'

import {SprintTable} from "@/components/sprint-table";
import {ComparativeBar} from "@/components/comparative-bar";
import {useAugmentedSprints} from "@/hooks/useAugmentedSprints";

export default function Springs() {
    const {query, p1Score, p2Score, p1Rounds, p2Rounds} = useAugmentedSprints();

    if (query.isLoading) {
        return 'Loading...';
    }

    return <>
        <h1>Latest sprints</h1>

        <ComparativeBar
            title="Sprints"
            left="de_nerd"
            leftScore={p1Score}
            right="chase"
            rightScore={p2Score}
        />
        <ComparativeBar
            title="Rounds"
            left="de_nerd"
            leftScore={p1Rounds}
            right="chase"
            rightScore={p2Rounds}
        />

        <SprintTable sprints={query.data?.data}/>
    </>
}
