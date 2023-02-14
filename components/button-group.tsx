import React, {FC} from "react";

type Props = {
    children: React.ReactNode,
}

export const ButtonGroup: FC<Props> = ({children}) => (
    <div className="flex gap-2">
        {children}
    </div>
)
