'use client'

import {FC, ReactNode} from "react";
import {Portal} from "@/components/portal";

type Props = ModalProps & {
    actionLabel?: string;
    // TODO if string wrap with p
    header: ReactNode;
    children: ReactNode;
}

export const Modal: FC<Props> = ({
                                     open = false,
                                     onClose,
                                     header,
                                     children,
                                 }) => {
    if (!open) {
        return null;
    }

    return <Portal>
        <div
            className="z-10 fixed inset-0 bg-black opacity-25"
            onClick={() => onClose && onClose()}
        ></div>
        <div className="pl-[16rem] fixed inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="w-[32rem] border rounded shadow-md pointer-events-auto">
                <header className="flex justify-between p-4 bg-gray-50 rounded-t">
                    <div>
                        {header}
                    </div>
                    <div
                        className="p-1 text-gray-700 hover:bg-gray-100 cursor-pointer rounded cursor"
                        // onClick={handleOnClose}
                    >
                        {/*TODO icon*/}
                        {/*<Icon name="x"/>*/}
                    </div>
                </header>
                {children}
            </div>
        </div>
    </Portal>
}
