import React, {FC} from "react";

type Props = {
    children: React.ReactNode;
}

export const RootContainer: FC<Props> = ({children}) => (
    <>
        <div className="p-8 ml-[16rem]">
            {children}
        </div>
    </>
)
