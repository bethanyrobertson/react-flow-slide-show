"use client";

import { useEffect, useState } from "react";

import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

const IMAGES = [
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/8cb1e5a8-e903-4d6f-7dd6-58324c055b00/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/3908f979-0973-459f-8ba0-42a10a1dfd00/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/b6d80c6c-f91d-48de-55c9-662f8806db00/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/b09aff8d-08bc-4669-843c-93a4e726c900/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/91f7e08b-d265-4c87-8acf-da4753899c00/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/f3d46885-f105-4f65-7180-74b2f79f4d00/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/9e6703ba-6a4b-4e05-fe73-88745d19a100/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/9dd74b2f-5cb6-4f2e-1b73-74f4836cc000/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/c73130c1-896c-4ecf-3ce7-fe005ad17d00/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/b3323f4d-81b9-4766-f920-622776c12c00/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/45ef9196-3aec-48cf-928d-28f7164ad200/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/61bbc934-8101-4314-24e7-81381d7c7900/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/62fb0ef2-143d-486a-aae6-d38c8fec9900/public", alt: "" },
];

const Web3Carousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="overflow-hidden py-32">
      <div className="md:px-45 container">
        <CarouselComponent
          className="mx-auto w-full max-w-[50rem] [&>div:nth-child(1)]:md:overflow-visible"
          setApi={setApi}
          opts={{
            startIndex: 1,
          }}
        >
          <CarouselContent>
            {IMAGES.map((img, index) => (
              <CarouselItem key={`carousel-img-${index}`}>
                <div
                  className={`aspect-[1.333333333] max-w-[50rem] overflow-hidden rounded-[0.75rem] transition-all duration-300 ${
                    current === index + 1
                      ? "scale-100 opacity-100"
                      : "scale-70 opacity-40"
                  }`}
                >
                  <img
                    className="block size-full object-contain bg-transparent object-center"
                    src={img.src}
                    alt={img.alt}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-4 hidden md:block">
            <CarouselPrevious
              className="size-10 max-[767px]:static max-[767px]:translate-y-0 md:left-[-6.25rem] md:size-14 lg:left-[-9.9375rem] lg:size-14 [&>svg]:!size-6"
              variant="default"
            />
            <CarouselNext
              className="size-10 max-[767px]:static max-[767px]:translate-y-0 md:right-[-6.25rem] md:size-14 lg:right-[-9.9375rem] lg:size-14 [&>svg]:!size-6"
              variant="default"
            />
          </div>
        </CarouselComponent>
        <div className="mx-auto mt-10 flex w-full max-w-[33.9375rem] items-center justify-center">
          {Array.from({ length: count }).map((_, index) => (
            <button
              aria-label={`Go to slide ${index + 1}`}
              key={`carousel-dot-btn-${index}`}
              className="p-2"
              onClick={() => {
                api?.scrollTo(index);
              }}
            >
              <div
                className={`size-3 rounded-full ${current === index + 1 ? "bg-black" : "bg-black/10"}`}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Web3Carousel };