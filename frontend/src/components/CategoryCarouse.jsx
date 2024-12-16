/* eslint-disable react/jsx-key */
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';

const category = [
    "Hand made",
    "Readmade",
    "glass made",
    "craft work",
    "customs"
]

const CategoryCarousel = () => {
    
    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-0">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            // Reduce the gap between items by modifying 'gap' class or using margin
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 "> {/* Reduced horizontal margin */}
                                <Button variant="outline" className="rounded-full">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel;
