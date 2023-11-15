import {useMatches} from "@/queries/useMatches";
import {useMemo} from "react";

export const useMatchesByMap = (map?: string) => {
    const query = useMatches(map);

    const matches = query.data?.data;

    const p1Score = useMemo(() => {
        if (!matches) {
            return 0;
        }

        const won = matches.filter(match => match.p1_score > match.p2_score);

        return won.length;
    }, [query])

    const p2Score = (matches?.length ?? 0) - p1Score;

    return {query, p1Score, p2Score}
}
