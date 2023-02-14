'use client'

import './globals.css'
import React from "react";
import {RootContainer} from "@/components/root-container";
import {Navbar} from "@/components/navbar";
import {Providers} from "@/app/providers";
import {Modal} from "@/components/modal";
import {useSprints} from "@/queries/useSprints";

interface Props {
    children: React.ReactNode
}

export default function RootLayout({children}: Props) {
    return (
        <html lang="en">
        <head/>
        <body className="min-h-screen">
        <Providers>
            <Navbar/>
            <RootContainer>
                {children}
            </RootContainer>
        </Providers>
        <div id="portal"></div>
        </body>
        </html>
    )
}
