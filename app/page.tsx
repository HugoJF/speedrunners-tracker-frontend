'use client'

import {Inter} from '@next/font/google'
import {Button} from "@/components/button";
import {useState} from "react";

const inter = Inter({subsets: ['latin']})

const text = 'Hello world';

export default function Home() {
    const [loading, setLoading] = useState(false)

    function handleOnClick() {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    return <p className="grid grid-cols-3 gap-4 text-green-500">
        <Button loading={loading} onClick={handleOnClick}>{text}</Button>
        <Button loading={true}>{text}</Button>
        <Button>{text}</Button>

        <div className="flex gap-4">
            <Button loading={loading} onClick={handleOnClick}>{text}</Button>
            <Button loading={true}>{text}</Button>
            <Button>{text}</Button>
        </div>
    </p>
}
