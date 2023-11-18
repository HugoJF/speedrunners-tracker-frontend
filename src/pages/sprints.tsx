import {useAugmentedSprints} from "../hooks/useAugmentedSprints.tsx";
import {ComparativeBar} from "../components/comparative-bar.tsx";
import {SprintTable} from "../components/sprint-table.tsx";

export function Sprints() {
    const {query, p1Score, p2Score, p1Rounds, p2Rounds} = useAugmentedSprints();

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

        <SprintTable sprints={query.data.data}/>
    </>
}
