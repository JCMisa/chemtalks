'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const BranchCard = ({ name, desc, routeName, image }) => {
    const router = useRouter();

    return (
        <div className={`bg-dark min-w-[80%] max-w-[80%] min-h-32 max-h-32 rounded-lg p-5 cursor-pointer z-[3] relative`} onClick={() => router.push(`/difficulties/${routeName}`)}>
            <h2 className='text-lg font-bold mb-2 z-20'>{name}</h2>
            <p className='text-sm text-gray-400 z-20'>{desc}</p>
            <img src={image} alt="image" className='absolute bottom-0 right-0 w-32 h-32 z-10 opacity-40' />
        </div>
    )
}

export default BranchCard