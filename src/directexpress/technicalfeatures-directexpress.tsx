"use client";

import { ChevronDown, Lightbulb } from "lucide-react";
import { useState } from "react";
import CategoryBadge from "../category-badge";

const features = [
    {
    id: "feature-1",
    title: "Looking at the full current flow",
    description:
      "The experience is time consuming and causing drop-offs",
    href: "#",
    image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/ff6e1def-3127-475a-b5f6-7f9e5891a100/public",
  },
  {
    id: "feature-2",
    title: "Applying a Jobs to be Done framework",
    description:
      "Evaluating how user goals meet hiring Brex for the job",
    href: "#",
    image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/7a319689-6608-431c-3458-7a4513f81300/public",
  },

  {
    id: "feature-3",
    title: "Exploration in the sandbox",
    description:
      "Rethinking the flow as well as other future enhancements",
    href: "#",
    image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/f5782a47-526d-47e2-659f-412d7fee2000/public",
  },
];

const TechnicalFeaturesDirectExpress = () => {
  const [selection, setSelection] = useState(0);
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row-reverse">
          <div className="aspect-5/6 overflow-clip rounded-3xl bg-white">
            <img
              src={features[selection].image}
              alt={features[selection].title}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex shrink-0 flex-col gap-6 md:w-1/2 md:pr-8 lg:pr-24 lg:text-left 2xl:pr-32">
            <div className="w-fit">
              <CategoryBadge
                label="PROCESS"
                icon={Lightbulb}
              />
            </div>
            <h2 className="font-mono text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
            How I got here
            </h2>
            <p className="mb-16 text-muted-foreground">
            I combined data and a framing through a Jobs to be Done lens to look at the full current experience.
            </p>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li
                  key={feature.id}
                  className={`group relative w-full cursor-pointer px-6 py-3 transition-all duration-200 ${
                    selection === i ? 'bg-accent rounded-xl' : ''
                  }`}
                  onClick={() => setSelection(i)}
                >
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="font-bold font-mono text-foreground">
                      {feature.title}
                    </div>
                    <div className={`flex size-8 items-center justify-center rounded-full transition-all duration-200 ${
                      selection === i 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground'
                    }`}>
                      <ChevronDown className={`size-4 shrink-0 transition-transform duration-200 ${
                        selection === i ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </div>
                  <div className={`text-sm transition-all duration-200 ${
                    selection === i ? 'block opacity-100 max-h-32' : 'hidden opacity-0 max-h-0'
                  }`}>
                    <p className="my-4 text-muted-foreground lg:my-6">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalFeaturesDirectExpress;