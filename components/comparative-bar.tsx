import {FC} from "react";

type Props = {
    title: string;
    left: string,
    right: string;
    leftScore: number;
    rightScore: number;

}
export const ComparativeBar: FC<Props> = ({title, left, leftScore, right, rightScore}) => {
    const total = leftScore + rightScore;
    const leftPercent = Math.round(leftScore / total * 100);
    const rightPercent = Math.round(rightScore / total * 100);

    return <div>
        <div className="flex justify-between">
            <span className="mt-4">{leftPercent}%</span>
            <h2 className="text-xl font-medium">{title}</h2>
            <span className="mt-4">{rightPercent}%</span>
        </div>

        <div className="flex h-4 items-stretch bg-gray-100 rounded">
            <span
                className="bg-blue-500 rounded-l"
                style={{width: `${leftPercent}%`}}
                title="denerd score: {@leftScore}"
            ></span>
            <span
                className="bg-red-500 rounded-r"
                style={{width: `${rightPercent}%`}}
                title="chase score: {@rightScore}"
            ></span>
        </div>

        <div className="flex justify-between items-end">
            <span className="font-medium text-blue-600">{left}</span>
            <span className="font-medium text-red-600">{right}</span>
        </div>
    </div>
}
