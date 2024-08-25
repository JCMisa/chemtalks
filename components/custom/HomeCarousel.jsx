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

export function Example() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
      // ...
        </Carousel>
    )
}



const HomeCarousel = () => {
    return (
        <div>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </CarouselItem>
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>

        </div>
    )
}

export default HomeCarousel