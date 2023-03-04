'use client'

import clsx from "clsx";
import {Button} from "@/components/button";
import SpeedrunnersLogo from '@/public/speedrunners.png';
import Image from "next/image";
import {useCurrentSprint} from "@/queries/useCurrentSprint";
import {Scoreboard} from "@/components/scoreboard";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {useState} from "react";
import {useSprints} from "@/queries/useSprints";
import {MatchForm} from "@/components/modals/match-form";
import {Plus} from "react-feather";

export const Navbar = () => {
    const sprints = useSprints();
    const pathname = usePathname();
    const currentSprint = useCurrentSprint();
    const [modalOpen, setModalOpen] = useState(false);

    // TODO improve
    if (sprints.isLoading) {
        return <>Loading...</>
    }

    // TODO improve
    if (currentSprint === undefined) {
        return <>Loading...</>;
    }

    if (!sprints.data?.data) {
        return <>Loading...</>
    }

    return <>
        <MatchForm
            open={modalOpen}
            sprints={sprints.data?.data}
            initialSelectedSprintId={currentSprint.id}
            onClose={() => setModalOpen(false)}
        />
        <nav className="flex flex-col gap-8 fixed inset-y-0 left-0 w-[16rem] bg-gray-900 text-white shadow-lg">
            <Link href="/" className="block p-8 pb-0">
                <Image src={SpeedrunnersLogo} alt="Speedrunners logo"/>
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
                    onClick={() => setModalOpen(true)}
                >
                    New match
                </Button>
            </div>

            <div className="flex flex-col">
                <Link
                    href="/sprints"
                    className={clsx('px-6 py-6 text-lg font-medium hover:bg-gray-700 uppercase', {
                        'bg-gray-800': pathname === '/sprints',
                    })}
                >Sprints
                </Link>

                <Link
                    href="/matches"
                    className={clsx('px-6 py-6 text-lg font-medium hover:bg-gray-700 uppercase', {
                        'bg-gray-800': pathname === '/matches',
                    })}
                >Matches</Link>

                <Link
                    href="/matches/by-map"
                    className={clsx('px-6 py-6 text-lg font-medium hover:bg-gray-700 uppercase', {
                        'bg-gray-800': pathname === '/matches/by-map', // TODO fix
                    })}
                >By map</Link>
            </div>
        </nav>
    </>
}
