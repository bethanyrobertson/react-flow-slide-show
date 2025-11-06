"use client";

import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import React, { useMemo } from "react";
import { useCallback } from "react";

import { cn } from "@/lib/utils";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const TldrCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);


  const testimonials = [
    {
      id: 1,
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/aa28e930-74e9-4347-00d5-45b3ffab6100/public",
      name: "Swag",
    },
    {
      id: 2,
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/229f9232-f1f7-4b20-b399-6eaa18b27300/public",
      name: "Badges",
    },
    {
      id: 3,
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/4e5a31b1-1a61-40ca-ac20-e9d230c46b00/public",
      name: "Swag",
    },
    {
      id: 4,
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/1e2fd376-dcf8-48bf-eef9-59473c5ef600/public",
      name: "Enamel Pin",
    },
    {
      id: 5,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person5.jpeg",
      name: "Michael Brown",
    },
    {
      id: 6,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
      name: "Emily Davis",
    },
    {
      id: 7,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
      name: "Joson White",
    },
  ];

  const getRotation = useCallback(
    (index: number) => {
      if (index === current)
        return "md:-rotate-45 md:translate-x-40 md:scale-75 md:relative";
      if (index === current + 1) return "md:rotate-0 md:z-10 md:relative";
      if (index === current + 2)
        return "md:rotate-45 md:-translate-x-40 md:scale-75 md:relative";
    },
    [current],
  );

  const scrollbarBars = useMemo(
    () =>
      [...Array(40)].map((_, item) => (
        <motion.div
          key={item}
          initial={{
            opacity: item % 5 === 0 ? 0.2 : 0.2,
            filter: "blur(1px)",
          }}
          animate={{
            opacity: item % 5 === 0 ? 1 : 0.2,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.2,
            delay: item % 5 === 0 ? (item / 5) * 0.05 : 0,
            ease: "easeOut",
          }}
          className={cn(
            "w-[1px] bg-black",
            item % 5 === 0 ? "h-[15px]" : "h-[10px]",
          )}
        />
      )),
    [],
  );

  return (
    <section className="bg-background py-32">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-foreground max-w-3xl text-5xl font-medium tracking-tighter md:px-9 md:text-6xl">
          <span className="font-playfair italic">Brand</span> and Design System
          <span className="font-playfair italic"></span>
        </h1>
        <p className="text-muted-foreground/80 mt-5 max-w-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum animi,
          ipsam provident optio delectus neque aliquid cumque. Beatae, odio!
        </p>

        <Carousel
          className="max-w-5xl"
          plugins={[
            Autoplay({
              delay: 1000,
              stopOnInteraction: true,
            }),
          ]}
          setApi={setApi}
        >
          <CarouselContent>
            {Array.from({
              length: testimonials.length + 2,
            }).map((_, index) => (
              <CarouselItem key={index} className="my-10 md:basis-1/3">
                <div
                  className={`h-105 w-full transition-transform duration-500 ease-in-out ${getRotation(index)}`}
                >
                  <img
                    src={
                      index == testimonials.length
                        ? testimonials[0].image
                        : index == testimonials.length + 1
                          ? testimonials[1].image
                          : index == testimonials.length + 2
                            ? testimonials[2].image
                            : testimonials[index].image
                    }
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-0 right-0 flex w-full translate-y-full flex-col items-center justify-center gap-2">
            <div className="flex gap-2">{scrollbarBars}</div>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.p
                key={current}
                className="w-full text-lg font-medium"
                initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, scale: 0.9, filter: "blur(5px)" }}
                transition={{ duration: 0.5 }}
              >
                {testimonials[current]?.name}
              </motion.p>
            </AnimatePresence>
            <div className="flex gap-2">{scrollbarBars}</div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { TldrCarousel };
