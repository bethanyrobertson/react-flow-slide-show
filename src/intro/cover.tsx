"use client"

import { useRef } from "react"
import BoxCarousel, { type BoxCarouselRef, type CarouselItem } from "../ui/carousel/box-carousel"
import useScreenSize from "../hooks/use-screen-size"

import Typewriter from "../ui/text/typewriter"

// Sample carousel items with mix of images and videos
const carouselItems: CarouselItem[] = [
  {
    id: "1",
    type: "image",
    src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/7196b5cd-f46d-43fd-5097-cff16c5d9600/public",
    alt: "flowers",
  },
  {
    id: "2",
    type: "image",
    src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/4150c8fd-424d-4f66-6a44-635817de4700/public",
    alt: "baby",
  },
  {
    id: "3",
    type: "image",
    src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/edc36321-d758-424f-dca7-bc5d653d6a00/public",
    alt: "holidaycard",
  },
  {
    id: "4",
    type: "image",
    src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/8470aa54-de9c-4d36-bba4-77f6225f7600/public",
    alt: "mochi",
  },
  {
    id: "5",
    type: "image",
    src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/30e4f856-d86a-493d-8685-a6ad18037000/public",
    alt: "rohan",
  },
  {
    id: "6",
    type: "image",
    src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/4b2ee819-e04a-432a-61ca-de9cb4967400/public",
    alt: "mural",
  },
]

export default function BoxCarouselDemo() {
  const carouselRef = useRef<BoxCarouselRef>(null)

  const screenSize = useScreenSize()

  // Responsive dimensions based on screen size
  const getCarouselDimensions = () => {
    if (screenSize.lessThan("md")) {
      return { width: 200, height: 150 }
    }
    return { width: 350, height: 250 }
  }

  const { width, height } = getCarouselDimensions()

  const handleIndexChange = (index: number) => {
    console.log("Index changed:", index)
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-muted-foreground bg-[#dac4e1]">
      <div className="w-full flex flex-col items-center space-y-16 p-6">
        {/* BoxCarousel */}
        <div className="flex justify-center">
          <BoxCarousel
            ref={carouselRef}
            items={carouselItems}
            width={width}
            height={height}
            direction="top"
            autoPlay
            autoPlayInterval={1500}
            onIndexChange={handleIndexChange}
            enableDrag
            perspective={1000}
          />
        </div>
        
        {/* Typewriter with proper spacing */}
        <div className="mt-10 w-full md:text-3xl lg:text-4xl sm:text-2xl text-xl flex flex-row items-center justify-center text-foreground font-mono font-bold overflow-hidden px-8">
          <p className="whitespace-pre-wrap text-center">
            <span>{"I'm Bethany and I "}</span>
            <Typewriter
              text={[
                "am a designer",
                "am a systems-thinker",
                "love to code ",
                "am a lifelong learner",
              ]}
              as="span"
              speed={70}
              className="text-foreground text-pretty"
              waitTime={1500}
              deleteSpeed={40}
              cursorChar={"_"}
            />
          </p>
        </div>
      </div>
    </div>
  )
}
