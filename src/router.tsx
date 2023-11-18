import {createBrowserRouter} from "react-router-dom";
import {Matches} from "./pages/matches.tsx";
import {MatchesByMapIndex} from "./pages/matches-by-map-index.tsx";
import {Sprints} from "./pages/sprints.tsx";
import {Layout} from "./layouts/layout.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Matches/>,
            },
            {
                path: "matches",
                element: <Matches/>,
            },
            {
                path: 'matches/by-map',
                element: <MatchesByMapIndex/>
            },
            {
                path: 'matches/by-map/:map',
                element: <Matches/>
            },
            {
                path: 'sprints',
                element: <Sprints/>
            },
        ],
    },
]);
