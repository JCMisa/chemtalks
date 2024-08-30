'use client'

import { ArrowLeftCircle, X } from 'lucide-react';
import { useRouter } from 'next/navigation'
import React from 'react'
import BranchCard from './_components/BranchCard';

const PlayPage = () => {
    const { router } = useRouter();

    const branches = [
        {
            name: 'Analytical Chemistry',
            desc: "Determining matter's composition and structure.",
            image: 'https://t4.ftcdn.net/jpg/01/90/46/75/360_F_190467561_oaF4OoGKGXz3p3rIltnkrnwsbnLLjsDN.jpg'
        },
        {
            name: 'Organic Chemistry',
            desc: "Studying carbon-containing compounds.",
            image: 'https://t4.ftcdn.net/jpg/01/90/46/75/360_F_190467561_oaF4OoGKGXz3p3rIltnkrnwsbnLLjsDN.jpg'
        },
        {
            name: 'Inorganic Chemistry',
            desc: "Studying inorganic compounds' properties and reactions.",
            image: 'https://t4.ftcdn.net/jpg/01/90/46/75/360_F_190467561_oaF4OoGKGXz3p3rIltnkrnwsbnLLjsDN.jpg'
        },
        {
            name: 'Biochemistry',
            desc: "Studying life's chemical processes.",
            image: 'https://t4.ftcdn.net/jpg/01/90/46/75/360_F_190467561_oaF4OoGKGXz3p3rIltnkrnwsbnLLjsDN.jpg'
        },
        {
            name: 'Physical chemistry',
            desc: "Applying physics to chemistry.",
            image: 'https://t4.ftcdn.net/jpg/01/90/46/75/360_F_190467561_oaF4OoGKGXz3p3rIltnkrnwsbnLLjsDN.jpg'
        },
    ]

    return (
        <div className='py-10 px-3'>
            <div className='flex flex-col'>
                {/* header */}
                <div className='flex flex-row items-center justify-between'>
                    <ArrowLeftCircle className='w-10 h-10 cursor-pointer' onClick={() => router.back()} />
                    <h1 className='text-2xl font-bold'>Select Chemistry Branch</h1>
                </div>
                {/* card */}
                <div className='mt-20'>
                    <div className='linear-bg min-w-[80%] min-h-[40rem] rounded-lg relative'>
                        {/* exit button */}
                        <div className='p-2 linear-bg rounded-full cursor-pointer w-10 h-10 shadow-lg absolute top-2 right-2'>
                            <X className='text-red-500' />
                        </div>
                        {/* card header */}
                        <div className='flex items-center justify-center'>
                            <div className='bg-primary-200 flex items-center justify-center p-3 max-w-60 rounded-b-xl'>
                                <h2 className='text-xl font-bold text-light'>Chemistry Branches</h2>
                            </div>
                        </div>
                        {/* icon */}
                        <img src={'https://cdn3d.iconscout.com/3d/premium/thumb/chemical-reaction-3d-icon-download-in-png-blend-fbx-gltf-file-formats--chemistry-flask-experiment-science-pack-technology-icons-8541758.png'} className='w-30 h-30 absolute bottom-0 right-0 opacity-40' alt='icon' />
                        {/* selections */}
                        <div className='flex flex-col gap-5 items-center justify-center mt-5 p-5'>
                            {
                                branches.map((branch, index) => (
                                    <BranchCard name={branch.name} desc={branch.desc} image={branch.image} key={index} />
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