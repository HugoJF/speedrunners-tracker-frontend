import './globals.css'
import React from "react";
import {RootContainer} from "@/components/root-container";
import {Navbar} from "@/components/navbar";

interface Props {
    children: React.ReactNode
}

export default function RootLayout({children}: Props) {
    return (
        <html lang="en">
        {/*
            <head /> will contain the components returned by the nearest parent
            head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head/>
        <body className="min-h-screen">
        <Navbar/>
        <RootContainer>
            {children}
        </RootContainer>
        <div id="portal"></div>
        </body>
        </html>
    )
}
