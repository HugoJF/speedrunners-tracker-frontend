import {FC, ReactNode} from "react";

type Props = {
    children: ReactNode,
}

export const ButtonGroup: FC<Props> = ({children}) => (
    <div className="flex gap-2">
        {children}
    </div>
)
