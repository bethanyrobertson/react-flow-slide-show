"use client";

import { useState } from "react";
import { Route, ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/3f8557d6-43e8-4b2e-9157-0af7ad7a5f00/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/86815628-5da5-4f09-78c2-3da7eb59e800/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/428b641a-0a1e-4578-d425-5689ed36cb00/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/1c0cddd4-1021-4ad1-6945-425560476900/public", alt: "" },
  { src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/c2493b5c-3e1c-4882-bce7-c5db3462e300/public", alt: "" },
];

const SandboxCloud = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % IMAGES.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#222222] mb-4" style={{ fontFamily: 'GeistMonoVF, monospace' }}>
            <Route className="w-4 h-4" />
            PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6" style={{ fontFamily: 'GeistMonoVF, monospace' }}>
            The Sandbox
          </h2>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto">
            I explored a couple directions before the one chosen. This direction represents approaching the circles of the Coinbase brand in a micro/macro way. Ultimately this direction felt too complex and not scalable.
          </p>
        </div>
        
        <div className="relative mx-auto w-full max-w-5xl">
          <div className="relative">
            <div className="aspect-[2.5/1] w-full overflow-hidden rounded-xl">
              <img
                className="block w-full h-full object-cover object-center"
                src={IMAGES[current].src}
                alt={IMAGES[current].alt}
              />
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index ? 'bg-[#222222]' : 'bg-[#222222]/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandboxCloud;
