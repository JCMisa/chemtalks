import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import EmblaCarousel from './Embla/EmblaCarousel'

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const News = () => {
    return (
        <div className='mt-10'>
            <h2 className='embla-header'>News</h2>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    )
}

export default News