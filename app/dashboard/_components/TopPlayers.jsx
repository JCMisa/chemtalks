'use client'

import React, { useState, useEffect } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { toast } from 'sonner'
import { db } from '@/utils/db'
import { Player } from '@/utils/schema'
import { desc } from 'drizzle-orm'


const TopPlayers = () => {
    const [loading, setLoading] = useState();
    const [topPlayerList, setTopPlayerList] = useState([]);

    const getTopPlayers = async () => {
        setLoading(true);
        try {
            const result = await db.select()
                .from(Player)
                .orderBy(desc(Player?.points))
                .limit(10);

            if (result.length > 0) {
                setTopPlayerList(result);
            } else {
                toast(
                    <p className='font-bold text-sm text-gray-500'>No players found</p>
                )
            }
        } catch (error) {
            toast(
                <p className='font-bold text-sm text-red-500'>Internal error occured while fetching top players</p>
            )
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getTopPlayers();
    }, [])

    return (
        <div className='mt-5'>
            <h2 className='font-bold text-xl'>Top Players</h2>
            <div className='mt-3 w-full'>
                {
                    (loading && topPlayerList.length == 0) ? (
                        <Carousel
                            plugins={[
                                Autoplay({
                                    delay: 2000,
                                }),
                            ]}>
                            <CarouselContent className="ml-6 md:ml-8 w-full">
                                <CarouselItem className="pl-2 md:pl-4 basis-1/5 sm:basis-1/5">
                                    <img className="object-cover object-center rounded-full w-10 h-10" alt="hero" src="https://dummyimage.com/720x600" />
                                </CarouselItem>
                                <CarouselItem className="pl-2 md:pl-4 basis-1/5 sm:basis-1/5">
                                    <img className="object-cover object-center rounded-full w-10 h-10" alt="hero" src="https://dummyimage.com/720x600" />
                                </CarouselItem>
                                <CarouselItem className="pl-2 md:pl-4 basis-1/5 sm:basis-1/5">
                                    <img className="object-cover object-center rounded-full w-10 h-10" alt="hero" src="https://dummyimage.com/720x600" />
                                </CarouselItem>
                                <CarouselItem className="pl-2 md:pl-4 basis-1/5 sm:basis-1/5">
                                    <img className="object-cover object-center rounded-full w-10 h-10" alt="hero" src="https://dummyimage.com/720x600" />
                                </CarouselItem>
                                <CarouselItem className="pl-2 md:pl-4 basis-1/5 sm:basis-1/5">
                                    <img className="object-cover object-center rounded-full w-10 h-10" alt="hero" src="https://dummyimage.com/720x600" />
                                </CarouselItem>
                                <CarouselItem className="pl-2 md:pl-4 basis-1/5 sm:basis-1/5">
                                    <img className="object-cover object-center rounded-full w-10 h-10" alt="hero" src="https://dummyimage.com/720x600" />
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    ) : (
                        <Carousel
                            plugins={[
                                Autoplay({
                                    delay: 2000,
                                }),
                            ]}>
                            <CarouselContent className="ml-6 md:ml-8 w-full">
                                {
                                    topPlayerList?.map((player, index) => (
                                        <CarouselItem className="pl-2 md:pl-4 basis-1/5 sm:basis-1/5" key={player?.id || index}>
                                            <div className='flex flex-col items-center gap-1'>
                                                <img className="object-cover object-center rounded-full w-10 h-10" alt="hero" src={player?.image} />
                                                <p className='text-xs'>{player?.username ? player?.username.slice(0, 7) : "Unknown"}...</p>
                                                {
                                                    index === 0 && (
                                                        <p className='text-sm text-yellow-500'>1st</p>
                                                    )
                                                }
                                                {
                                                    index === 1 && (
                                                        <p className='text-sm text-gray-400'>2nd</p>
                                                    )
                                                }
                                                {
                                                    index === 2 && (
                                                        <p className='text-sm text-amber-600'>3rd</p>
                                                    )
                                                }
                                            </div>
                                        </CarouselItem>
                                    ))
                                }
                            </CarouselContent>
                        </Carousel>
                    )
                }
            </div>
        </div>
    )
}

export default TopPlayers