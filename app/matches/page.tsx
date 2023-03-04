'use client'

import {useMatches} from "@/queries/useMatches";
import {MatchTables} from "@/components/match-tables";

export default function Matches() {
    const matches = useMatches();

    if (matches.isLoading) {
        return 'Loading...';
    }

    return <>
        <h1>Latest matches</h1>

        <MatchTables matches={matches.data!.data}/>
    </>
}
