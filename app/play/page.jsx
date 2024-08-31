'use client'

import { ArrowLeftCircle, X } from 'lucide-react';
import { useRouter } from 'next/navigation'
import React from 'react'
import BranchCard from './_components/BranchCard';

const PlayPage = () => {
    const router = useRouter();

    const branches = [
        {
            name: 'Analytical Chemistry',
            desc: "Determining matter's composition and structure.",
            routeName: 'AnalyticalChemistry',
            image: '/chem-icon5.png',
        },
        {
            name: 'Organic Chemistry',
            desc: "Studying carbon-containing compounds.",
            routeName: 'OrganicChemistry',
            image: '/chem-icon6.png'
        },
        {
            name: 'Inorganic Chemistry',
            desc: "Studying inorganic compounds' properties and reactions.",
            routeName: 'InorganicChemistry',
            image: '/chem-icon7.png'
        },
        {
            name: 'Biochemistry',
            desc: "Studying life's chemical processes.",
            routeName: 'Biochemistry',
            image: '/chem-icon8.png'
        },
        {
            name: 'Physical Chemistry',
            desc: "Applying physics to chemistry.",
            routeName: 'PhysicalChemistry',
            image: '/chem-icon5.png'
        },
    ]

    return (
        <div className='py-20 px-3'>
            <div className='flex flex-col'>
                {/* header */}
                <div className='flex flex-row items-center justify-between'>
                    <ArrowLeftCircle className='w-10 h-10 cursor-pointer' onClick={() => router.back()} />
                    <h1 className='text-2xl font-bold'>Select Chemistry Branch</h1>
                </div>
                {/* card */}
                <div className='mt-10'>
                    <div className='bg-dark-100 min-w-[80%] h-auto rounded-lg relative'>
                        {/* exit button */}
                        <div className='p-2 bg-dark rounded-full cursor-pointer w-10 h-10 shadow-lg absolute top-2 right-2'>
                            <X className='text-red-500' />
                        </div>
                        {/* card header */}
                        <div className='flex items-center justify-center'>
                            <div className='bg-dark flex items-center justify-center p-3 max-w-60 rounded-b-xl'>
                                <h2 className='text-xl font-bold text-light'>Chemistry Branches</h2>
                            </div>
                        </div>
                        {/* icon */}
                        <img src={'/chem-icon3.png'} className='w-80 h-80 absolute bottom-0 left-0 z-[1] animate-bounce' alt='icon' />
                        {/* selections */}
                        <div className='flex flex-col gap-5 items-center justify-center mt-5 p-5 z-[2]'>
                            {
                                branches.map((branch, index) => (
                                    <BranchCard name={branch.name} desc={branch.desc} routeName={branch.routeName} image={branch.image} key={index} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayPage