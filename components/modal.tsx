'use client'

import {FC, ReactNode} from "react";
import {Portal} from "@/components/portal";
import {X} from "react-feather";

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
    function close() {
        onClose?.();
    }

    if (!open) {
        return null;
    }

    return <Portal>
        <div
            className="z-10 fixed inset-0 bg-black opacity-25"
            onClick={close}
        ></div>
        <div className="pl-[16rem] fixed inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="w-[32rem] border rounded shadow-md pointer-events-auto">
                <header className="flex justify-between p-4 bg-gray-50 rounded-t">
                    {typeof header === 'string' && <h2 className="text-lg font-medium">
                        {header}
                    </h2>}
                    {typeof header !== 'string' && <div>
                        {header}
                    </div>}
                    <div
                        className="p-1 text-gray-700 hover:bg-gray-100 cursor-pointer rounded cursor"
                        onClick={close}
                    >
                        <X/>
                    </div>
                </header>
                {children}
            </div>
        </div>
    </Portal>
}
