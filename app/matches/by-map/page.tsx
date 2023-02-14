'use client'

import Link from "next/link";
import {maps} from "@/utils/map";

export default function ByMapIndex() {
    return <ul className="grid grid-cols-5 gap-4">
        {Object.entries(maps).map(([key, name]) => <li key={key} className="flex">
            <Link
                href={`/matches/by-map/${key}`}
                className="px-4 py-4 w-full hover:bg-gray-50 text-center border rounded"
            >
                {name}
            </Link>
        </li>)}
    </ul>
}
