'use client'

import {FC, ReactNode, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

type Props = {
    children: ReactNode,
}

export const Providers: FC<Props> = ({children}) => {
    const [queryClient] = useState(() => new QueryClient())

    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}
