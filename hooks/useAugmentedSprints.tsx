import {useMemo} from "react";
import {useSprints} from "@/queries/useSprints";
import {chain} from "lodash";

export const useAugmentedSprints = () => {
    const query = useSprints();

    const sprints = query.data?.data;

    const p1Rounds = useMemo(() => chain(sprints).map('p1_score').sum().value(), [sprints])
    const p2Rounds = useMemo(() => chain(sprints).map('p2_score').sum().value(), [sprints])

    const p1Score = useMemo(() => {
        if (!sprints) {
            return 0;
        }

        const won = sprints.filter(sprint => sprint.p1_score > sprint.p2_score);

        return won.length;
    }, [query])

    const p2Score = (sprints?.length ?? 0) - p1Score;

    return {query, p1Score, p2Score, p1Rounds, p2Rounds }
}
