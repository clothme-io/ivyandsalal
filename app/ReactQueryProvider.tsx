"use client"

import { ReactNode, useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const runtime = "edge";

export const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
    const [client] = useState(new QueryClient());
    return (
        <QueryClientProvider client={client}>
            {children}
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    )
}