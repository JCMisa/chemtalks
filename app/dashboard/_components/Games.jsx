'use client'

import { Atom } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Games = () => {
    const router = useRouter();
    return (
        <div className='mt-10'>
            <div className='flex flex-row items-center justify-between'>
                <h1 className='text-2xl font-bold'>Let's Play</h1>
                <p className='text-sm text-light-100'>See all</p>
            </div>
            <div className='mt-3 flex flex-col xl:flex-row gap-5 w-full'>
                <div className='flex items-center justify-center relative'>
                    <img className="object-cover object-center rounded-3xl dark:bg-gray-900 bg-gray-800 opacity-50" alt="hero" src="https://dummyimage.com/720x600" />
                    <Atom className='absolute w-20 h-20 cursor-pointer hover:animate-spin' onClick={() => router.push('/play')} />
                </div>
            </div>
        </div>
    )
}

export default Games