import {FC} from "react";
import clsx from "clsx";
import {useCurrentSprint} from "../queries/useCurrentSprint.tsx";
import {useSetCurrentSprint} from "../mutations/set-current-sprint.tsx";
import {Link} from "react-router-dom";
import {ButtonGroup} from "./button-group.tsx";
import {Button} from "./button.tsx";

type Props = {
    showIndex?: boolean;
    sprints: Sprint[];
}
export const SprintTable: FC<Props> = ({sprints, showIndex}) => {
    const currentSprint = useCurrentSprint();
    const setCurrentSprint = useSetCurrentSprint();

    function handleSetCurrentSprint(sprint: Sprint) {
        setCurrentSprint.mutate(sprint.id);
    }

    return <table>
        <thead>
        <tr>
            {showIndex && <td>ID</td>}
            <td>Name</td>
            <td>P1 name</td>
            <td>P1 score</td>
            <td>P2 name</td>
            <td>P2 score</td>
            <td>Date</td>
            <td>Actions</td>
        </tr>
        </thead>
        <tbody>

        {sprints.map((sprint) => (<tr
                key={sprint.id}
                className={clsx({
                    'bg-blue-100': sprint.p1_score > sprint.p2_score,
                    'bg-red-100': sprint.p1_score < sprint.p2_score,
                })}
            >
                {showIndex && <td className="text-mono tracking-tight" title={sprint.id}>
                  <Link
                    to={`/sprints/${sprint.id}`}
                    className="hover:underline"
                  >
                      {/*TODO tail*/}
                      {sprint.id}
                  </Link>
                </td>}
                <td>{sprint.name}</td>
                <td>{sprint.p1_name}</td>
                <td>{sprint.p1_score}</td>
                <td>{sprint.p2_name}</td>
                <td>{sprint.p2_score}</td>
                <td title={sprint.created_at}>
                    {sprint.updated_at}{/*TODO to human*/}
                </td>
                <td>
                    <ButtonGroup>
                        <Button
                            size="sm"
                            // TODO implement
                            // onClick={() => handleEdit(sprint)}
                        >
                            Edit
                        </Button>
                        {sprint.id !== currentSprint?.id && <Button
                          size="sm"
                          onClick={() => handleSetCurrentSprint(sprint)}
                          loading={sprint.id === currentSprint?.id && setCurrentSprint.isPending}
                        >
                          Set current
                        </Button>}
                    </ButtonGroup>
                </td>
            </tr>
        ))}

        {sprints.length === 0 && <tr>
          <td colSpan={8} className="text-center">
            No sprints!
          </td>
        </tr>}
        </tbody>
    </table>
}
