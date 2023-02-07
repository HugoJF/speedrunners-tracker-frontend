import {Inter} from '@next/font/google'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return <p className="text-green-500">
        Hello Next.js
    </p>
}
