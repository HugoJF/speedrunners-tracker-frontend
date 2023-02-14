'use client'

import {ComparativeBar} from "@/components/comparative-bar";
import {MatchTables} from "@/components/match-tables";
import {useMatchesByMap} from "@/hooks/useMatchesByMap";
import {maps} from "@/utils/map";

type Props = {
    params: { map: string };
}

export default function ByMap({params: {map}}: Props) {
    const {query, p1Score, p2Score} = useMatchesByMap(map)

    if (query.isLoading) {
        return null;
    }

    return <>
        <ComparativeBar
            title={`Matches on ${maps[map]}`}
            left="de_nerd"
            leftScore={p1Score}
            right="chase"
            rightScore={p2Score}
        />

        <MatchTables matches={query?.data?.data!}/>
    </>
}
