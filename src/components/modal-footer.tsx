import {FC, ReactNode} from "react";

type Props = {
    children: ReactNode;
};
export const ModalFooter: FC<Props> = ({children}) => <footer
    className="flex justify-end p-4 bg-gray-50 border-t rounded-b"
>
    {children}
</footer>
