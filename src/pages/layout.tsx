'use client'

import './globals.css'
import React, {Suspense} from "react";
import {RootContainer} from "@/components/root-container";
import {Navbar} from "@/components/navbar";
import {Providers} from "@/app/providers";

interface Props {
    children: React.ReactNode
}

export default function RootLayout({children}: Props) {
    return (
        <html lang="en">
        <head/>
        <body className="min-h-screen">
        <Providers>
            <Suspense fallback={<>Loading...</>}>

                <Navbar/>
                <RootContainer>
                    <Suspense fallback={<>Loading...</>}>
                        {children}
                    </Suspense>
                </RootContainer>
            </Suspense>
        </Providers>
        <div id="portal"></div>
        </body>
        </html>
    )
}
