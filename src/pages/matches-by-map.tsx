import {useMatchesByMap} from "../hooks/useMatchesByMap.tsx";
import {ComparativeBar} from "../components/comparative-bar.tsx";
import {maps} from "../utils/map.ts";
import {MatchTables} from "../components/match-tables.tsx";
import {redirect, useParams} from "react-router-dom";

export default function MatchesByMap() {
    const {map} = useParams();
    const {query, p1Score, p2Score} = useMatchesByMap(map)

    if (!map || !(map in maps)) {
        return redirect("/matches/by-map")
    }

    return <>
        <ComparativeBar
            title={`Matches on ${maps[map]}`}
            left="de_nerd"
            leftScore={p1Score}
            right="chase"
            rightScore={p2Score}
        />

        <MatchTables matches={query.data.data}/>
    </>
}
