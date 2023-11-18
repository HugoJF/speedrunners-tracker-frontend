import clsx from "clsx";
import {useCurrentSprint} from "../queries/useCurrentSprint.tsx";
import {Link, useLocation} from "react-router-dom";
import {useModal} from "../hooks/useModal.tsx";
import {CreateMatchForm} from "./modals/create-match-form.tsx";
import {Scoreboard} from "./scoreboard.tsx";
import {Button} from "./button.tsx";
import {Plus} from "react-feather";
import SpeedrunnersLogo from '../assets/speedrunners.png';

export const Navbar = () => {
    const pathname = useLocation().pathname;
    const currentSprint = useCurrentSprint();
    const modal = useModal<typeof CreateMatchForm>();

    return <>
        <CreateMatchForm
            {...modal.props}
            initialSelectedSprintId={currentSprint.id}
        />
        <nav className="flex flex-col gap-8 fixed inset-y-0 left-0 w-[16rem] bg-gray-900 text-white shadow-lg">
            <Link to="/" className="block p-8 pb-0">
                <img src={SpeedrunnersLogo} alt="Speedrunners logo"/>
            </Link>

            <Scoreboard
                sprint={currentSprint}
            />

            <div className="mx-6">
                <Button
                    className="w-full"
                    color="primary"
                    size="sm"
                    icon={Plus}
                    onClick={() => modal.open()}
                >
                    New match
                </Button>
            </div>

            <div className="flex flex-col">
                <Link
                    to="/sprints"
                    className={clsx('px-6 py-6 text-lg font-medium hover:bg-gray-700 uppercase', {
                        'bg-gray-800': pathname === '/sprints',
                    })}
                >
                    Sprints
                </Link>

                <Link
                    to="/matches"
                    className={clsx('px-6 py-6 text-lg font-medium hover:bg-gray-700 uppercase', {
                        'bg-gray-800': pathname === '/matches',
                    })}
                >
                    Matches
                </Link>

                <Link
                    to="/matches/by-map"
                    className={clsx('px-6 py-6 text-lg font-medium hover:bg-gray-700 uppercase', {
                        'bg-gray-800': pathname === '/matches/by-map', // TODO fix
                    })}
                >
                    By map
                </Link>
            </div>
        </nav>
    </>
}
