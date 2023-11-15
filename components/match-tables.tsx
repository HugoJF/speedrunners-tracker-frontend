import {FC} from "react";
import Link from "next/link";
import clsx from "clsx";

type Props = {
    showIndex?: boolean,
    matches: Match[],
}

export const MatchTables: FC<Props> = ({matches, showIndex = false}) => {
    return <table>
        <thead>
        <tr>
            {showIndex && <td>Index</td>}
            <td>Map</td>
            <td>P1 score</td>
            <td>P2 score</td>
            <td>Sprint</td>
            <td>Date</td>
            <td>Actions</td>
        </tr>
        </thead>
        <tbody>

        {matches.map((match, index) => (<tr
                key={index}
                className={clsx({
                    'bg-blue-100': match.p1_score > match.p2_score,
                    'bg-red-100': match.p1_score < match.p2_score,
                })}
            >
                {showIndex && <td>{index + 1}</td>}
                <td>
                    <Link
                        className="hover:underline"
                        href={`/matches/by-map/${match.map}`}
                    >
                        {match.map}
                    </Link>
                </td>
                <td>{match.p1_score}</td>
                <td>{match.p2_score}</td>
                <td>
                    <Link
                        className="hover:underline"
                        href={`/sprint/${match.sprint_id}`}
                    >
                        {match.sprint_id}
                    </Link>
                </td>
                <td title={match.created_at}>
                    {/*TODO human readable date*/}
                    {match.created_at}
                </td>
                <td>
                    {/*TODO actions*/}
                    {/*<ButtonGroup>*/}
                    {/*    <Button size="sm" onClick={() => handleEdit(match)}>*/}
                    {/*        Edit*/}
                    {/*    </Button>*/}
                    {/*    <Button size="sm" color="red" onClick={() => handleDelete(match)}>*/}
                    {/*        Delete*/}
                    {/*    </Button>*/}
                    {/*</ButtonGroup>*/}
                </td>
            </tr>
        ))}

        {matches.length === 0 && <tr>
          <td
            className="text-center"
            colSpan={showIndex ? 7 : 6}
          >
            No matches!
          </td>
        </tr>}

        </tbody>
    </table>
}
