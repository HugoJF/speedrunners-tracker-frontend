'use client'

import {Button} from "@/components/button";
import {useState} from "react";
import {Plus} from "react-feather";

const text = 'Hello world';

export default function Home() {
    const [loading, setLoading] = useState(false)

    function handleOnClick() {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    return <div className="grid grid-cols-3 gap-4 text-green-500">
        <Button icon={Plus} loading={loading} onClick={handleOnClick}>{text}</Button>
        <Button loading>{text}</Button>
        <Button>{text}</Button>

        <div className="flex gap-4">
            <Button loading={loading} onClick={handleOnClick}>{text}</Button>
            <Button loading>{text}</Button>
            <Button>{text}</Button>
        </div>
    </div>
}
