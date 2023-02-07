import clsx from "clsx";
import {Button} from "@/components/button";
import SpeedrunnersLogo from '@/public/speedrunners.png';
import Image from "next/image";

export const Navbar = () => {
    // TODO unmock
    const currentRoute: string = '';

    return (
        <nav className="flex flex-col gap-8 fixed inset-y-0 left-0 w-[16rem] bg-gray-900 text-white shadow-lg">
            {/* TODO update to Link */}
            <a className="block p-8 pb-0">
                <Image src={SpeedrunnersLogo} alt="Speedrunners logo"/>
            </a>

            {/* TODO implement scoreboard */}
            {/*<Scoreboard*/}
            {/*    sprint{this.currentSprint.current}*/}
            {/*/>*/}

            <div className="mx-6">
                <Button
                    className="w-full"
                    color="primary"
                    size="sm"
                    // TODO feathericons
                    // icon="plus"
                    // TODO handleClick
                    // onClick={this.handleModalOpen}
                >
                    New match
                </Button>
            </div>

            <div className="flex flex-col">
                {/* TODO update to Link */}
                <a
                    className={clsx('px-6 py-6 text-lg font-medium hover:bg-gray-700 uppercase', {
                        'bg-gray-800': currentRoute === 'sprints.index',
                    })}
                >Sprints
                </a>

                <a
                    className={clsx('px-6 py-6 text-lg font-medium hover:bg-gray-700 uppercase', {
                        'bg-gray-800': currentRoute === 'matches.index',
                    })}
                >Matches</a>

                <a
                    className={clsx('px-6 py-6 text-lg font-medium hover:bg-gray-700 uppercase', {
                        'bg-gray-800': currentRoute === 'matches.map.index',
                    })}
                >By map</a>
            </div>
        </nav>
    )

}
