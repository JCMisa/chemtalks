'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const BranchCard = ({ name, desc, image }) => {
    const router = useRouter();

    return (
        <div className={`bg-dark-200 min-w-[80%] max-w-[80%] min-h-32 max-h-32 rounded-lg p-5 cursor-pointer`} onClick={() => router.push('/play/difficulties')}>
            <h2 className='text-lg font-bold mb-2'>{name}</h2>
            <p className='text-sm text-gray-400'>{desc}</p>
        </div>
    )
}

export default BranchCard