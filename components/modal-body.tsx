import {FC, ReactNode} from "react";

type Props = {
    children: ReactNode;
};
export const ModalBody: FC<Props> = ({children}) => <section
    className="flex flex-col gap-4 p-4 bg-white"
>
    {children}
</section>

