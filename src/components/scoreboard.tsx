import {FC} from "react";

type Props = {
    sprint?: Sprint
}

export const Scoreboard: FC<Props> = ({sprint}) => {
    return <div
        className="flex flex-col gap-4 mx-6 py-2 px-4 bg-gray-800 rounded-lg select-none"
        title="Score for today"
    >
        {sprint && <div>
            <h2 className="text-gray-400 text-[12px] text-center tracking-tight uppercase">
                {sprint.name}
            </h2>

            <div className="flex justify-between items-end">
                <div className="flex flex-col items-center">
                    <span className="mb-1 text-gray-300 text-sm font-medium uppercase">{sprint.p1_name}</span>
                    <span className="text-5xl">{sprint.p1_score}</span>
                </div>

                <span className="text-gray-300 text-5xl font-thin">:</span>

                <div className="flex flex-col items-center">
                    <span className="mb-1 text-gray-300 text-sm font-medium uppercase">{sprint.p2_name}</span>
                    <span className="text-5xl">{sprint.p2_score}</span>
                </div>
            </div>
        </div>}

        {!sprint && <h2 className="text-gray-300 text-center text-sm font-medium uppercase">No sprint selected</h2>}
    </div>
}
