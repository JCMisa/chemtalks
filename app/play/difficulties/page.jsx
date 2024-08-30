'use client'

import React from 'react'
import { ArrowLeftCircle, Gamepad2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

const DifficultiesPage = () => {
    const router = useRouter();

    return (
        <div className=''>
            <div className='my-10 p-10'>
                <div className='flex flex-row items-center justify-between'>
                    <ArrowLeftCircle className='w-10 h-10 cursor-pointer' onClick={() => router.back()} />
                    <h1 className='text-2xl font-bold'>Select Difficulties</h1>
                </div>
                <div className='mt-3 flex flex-col xl:flex-row gap-10 w-full'>
                    {/* easy */}
                    <div className='flex flex-col'>
                        <div className='flex flex-col items-center justify-center relative'>
                            <img className="object-cover object-center rounded-3xl dark:bg-gray-900 bg-gray-800" width={1000} height={1000} alt="hero" src="https://wallpapercrafter.com/desktop/119518-The-Wolf-Among-Us-video-games-dark-purple.png" />
                            <Gamepad2 className='absolute w-20 h-20 text-light-100 cursor-pointer hover:animate-pulse' />
                            <p className='absolute top-2 left-3 text-3xl font-bold text-primary-100'>EASY</p>
                        </div>
                        <div className='flex flex-col p-5'>
                            <p className='text-2xl font-bold'>Easy Level Information</p>
                            <div className='p-3'>
                                <p className='text-lg font-bold text-light-100'>Quiz Parameters</p>
                                <div className='flex flex-row items-center gap-20 '>
                                    <div className='flex flex-col gap-4'>
                                        <p className='text-gray-500'>⚫Number of Questions</p>
                                        <p className='text-gray-500'>⚫Answer Format</p>
                                        <p className='text-gray-500'>⚫Question Generation</p>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='font-bold'>⚫5 (five)</p>
                                        <p className='font-bold'>⚫Multiple Choice (3 options)</p>
                                        <p className='font-bold'>⚫AI-generated, random</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <p className='text-lg font-bold text-light-100'>Scoring</p>
                                <div className='flex flex-row items-center gap-20 '>
                                    <div className='flex flex-col gap-4'>
                                        <p className='text-gray-500'>⚫Points Addition</p>
                                        <p className='text-gray-500'>⚫Points Deduction</p>
                                        <p className='text-gray-500'>⚫Top Players</p>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='font-bold'>⚫1 (one)</p>
                                        <p className='font-bold'>⚫0 (none)</p>
                                        <p className='font-bold'>⚫Track the highest-scoring users</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* medium */}
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-center relative'>
                            <img className="object-cover object-center rounded-3xl dark:bg-gray-900 bg-gray-800" width={1000} height={1000} alt="hero" src="https://wallpaperaccess.com/full/2801140.jpg" />
                            <Gamepad2 className='absolute w-20 h-20 text-light-100 cursor-pointer hover:animate-pulse' />
                            <p className='absolute top-2 left-3 text-3xl font-bold text-yellow-500'>MEDIUM</p>
                        </div>
                        <div className='flex flex-col p-5'>
                            <p className='text-2xl font-bold'>Medium Level Information</p>
                            <div className='p-3'>
                                <p className='text-lg font-bold text-light-100'>Quiz Parameters</p>
                                <div className='flex flex-row items-center gap-20 '>
                                    <div className='flex flex-col gap-4'>
                                        <p className='text-gray-500'>⚫Number of Questions</p>
                                        <p className='text-gray-500'>⚫Answer Format</p>
                                        <p className='text-gray-500'>⚫Question Generation</p>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='font-bold'>⚫5 (five)</p>
                                        <p className='font-bold'>⚫Multiple Choice (3 options)</p>
                                        <p className='font-bold'>⚫AI-generated, random</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <p className='text-lg font-bold text-light-100'>Scoring</p>
                                <div className='flex flex-row items-center gap-20 '>
                                    <div className='flex flex-col gap-4'>
                                        <p className='text-gray-500'>⚫Points Addition</p>
                                        <p className='text-gray-500'>⚫Points Deduction</p>
                                        <p className='text-gray-500'>⚫Top Players</p>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='font-bold'>⚫3 (three)</p>
                                        <p className='font-bold'>⚫1 (one)</p>
                                        <p className='font-bold'>⚫Track the highest-scoring users</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* hard */}
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-center relative'>
                            <img className="object-cover object-center rounded-3xl dark:bg-gray-900 bg-gray-800" width={1000} height={1000} alt="hero" src="https://images4.alphacoders.com/115/1156648.jpg" />
                            <Gamepad2 className='absolute w-20 h-20 text-light-100 cursor-pointer hover:animate-pulse' />
                            <p className='absolute top-2 left-3 text-3xl font-bold text-red-500'>HARD</p>
                        </div>
                        <div className='flex flex-col p-5'>
                            <p className='text-2xl font-bold'>Hard Level Information</p>
                            <div className='p-3'>
                                <p className='text-lg font-bold text-light-100'>Quiz Parameters</p>
                                <div className='flex flex-row items-center gap-20 '>
                                    <div className='flex flex-col gap-4'>
                                        <p className='text-gray-500'>⚫Number of Questions</p>
                                        <p className='text-gray-500'>⚫Answer Format</p>
                                        <p className='text-gray-500'>⚫Question Generation</p>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='font-bold'>⚫5 (five)</p>
                                        <p className='font-bold'>⚫Multiple Choice (3 options)</p>
                                        <p className='font-bold'>⚫AI-generated, random</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <p className='text-lg font-bold text-light-100'>Scoring</p>
                                <div className='flex flex-row items-center gap-20 '>
                                    <div className='flex flex-col gap-4'>
                                        <p className='text-gray-500'>⚫Points Addition</p>
                                        <p className='text-gray-500'>⚫Points Deduction</p>
                                        <p className='text-gray-500'>⚫Top Players</p>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='font-bold'>⚫5 (five)</p>
                                        <p className='font-bold'>⚫3 (three)</p>
                                        <p className='font-bold'>⚫Track the highest-scoring users</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DifficultiesPage