import {useMatches} from "../queries/useMatches.tsx";
import {MatchTables} from "../components/match-tables.tsx";

export function Matches() {
    const matches = useMatches();

    return <>
        <h1>Latest matches</h1>

        <MatchTables matches={matches.data.data}/>
    </>
}
