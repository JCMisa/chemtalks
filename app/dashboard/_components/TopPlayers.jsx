'use client'

import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


const TopPlayers = () => {
    return (
        <div className='mt-5'>
            <h2 className='font-bold text-xl'>Top Players</h2>
            <div className='mt-3 w-full'>
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
            </div>
        </div>
    )
}

export default TopPlayers