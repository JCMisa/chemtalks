import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const News = () => {
    return (
        <div className='mt-10 flex items-center justify-center'>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="basis-1/3">
                        <img className="object-cover object-center rounded-3xl" alt="hero" src="https://dummyimage.com/720x600" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img className="object-cover object-center rounded-3xl" alt="hero" src="https://dummyimage.com/720x600" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img className="object-cover object-center rounded-3xl" alt="hero" src="https://dummyimage.com/720x600" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <img className="object-cover object-center rounded-3xl" alt="hero" src="https://dummyimage.com/720x600" />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>

        </div>
    )
}

export default News