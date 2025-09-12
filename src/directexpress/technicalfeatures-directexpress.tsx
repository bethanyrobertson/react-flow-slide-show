"use client";

import { ChevronDown, Lightbulb } from "lucide-react";
import { useState } from "react";
import CategoryBadge from "../category-badge";

const features = [
    {
    id: "feature-1",
    title: "Reassuring",
    description:
      "We developed a warm, but neutral, color palette to reduce anxiety around financial management.",
    href: "#",
    image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/16f65919-90d9-4d44-8124-a298ec91d200/public",
  },
  {
    id: "feature-2",
    title: "Accessible",
    description:
      "Type design leveraged high contrast ratios and scalable design elements; we chose Noto Sans as the primary typeface for its multi -language support.",
    href: "#",
    image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/59e1a2d8-0328-4230-8cd1-5fdda080ef00/public",
  },

  {
    id: "feature-3",
    title: "Clear Communication for All",
    description:
      "Traditionally difficult-to-grasp concepts are made easy through a straightforward illustration system.",
    href: "#",
    image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/b069a8e7-d3d1-4e59-212d-0f14ad71d500/public",
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
                label="SOLUTION"
                icon={Lightbulb}
              />
            </div>
            <h2 className="font-mono text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Accessibility Through Visual Identity Principles
            </h2>
            <p className="mb-16 text-muted-foreground">
            We created a trustworthy identity that balanced government authority with human warmth. The visual system needed to work across digital platforms, printed materials, and physical card design.
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