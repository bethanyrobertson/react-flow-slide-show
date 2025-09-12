"use client";

import React from "react";
import { Lightbulb, ChevronDown } from "lucide-react";
import { useState } from "react";

import SectionHeader from "../section-header";

type Feature = {
  id: string;
  title: string;
  description: React.ReactNode;
  href: string;
  image: string;
};

const features: Feature[] = [
  {
    id: "feature-1",
    title: "Color System",
    description:
        <div>
          <strong>Primary Palette:</strong>
          <br />
          <span>
            <strong>Cloud Blue (#0052FF):</strong> Trust, reliability, technical precision
          </span>
          <br />
          <span>
            <strong>Teal (#00D2FF):</strong> Innovation, growth, accessibility
          </span>
          <br />
          <span>
            <strong>Supporting Colors:</strong> Grays for enterprise professionalism
          </span>
          <br />
          <br />
          <span>
            The color system was designed to convey both technical sophistication and approachability, differentiating from Coinbase's consumer brand while maintaining family resemblance.
          </span>
        </div>,
    href: "#",
    image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/8399fa80-0fa0-4009-1b15-33e7f6975900/public",
  },
  {
    id: "feature-2",
    title: "Typography",
    description:
      <div>
        Making blockchain development accessible
      </div>,
    href: "#",
    image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/16e8b0ee-2fdd-4f42-b21d-ea2e6cfd0500/public",
  },
  {
    id: "feature-3",
    title: "Trusted Through Simplicity",
    description:
      <p>
      Leveraging Coinbase's regulatory compliance and security reputation by maintaining a simple, scalable design system
      </p>,
    href: "#",
    image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/a964b6b8-40c5-432d-fea6-871b94bbe700/public",
  },
];

const TechnicalFeaturesCloud = () => {
  const [selection, setSelection] = useState(0);

  return (
    <section className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row-reverse">
          <div className="aspect-5/6 overflow-clip rounded-3xl bg-accent">
            <div className="h-full w-full relative">
              <div className="h-full w-full rounded-3xl border-2 overflow-hidden">
                <img
                  src={features[selection].image}
                  alt={features[selection].title}
                  className="h-full w-full object-cover object-center transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
          <div className="flex shrink-0 flex-col md:w-1/2 md:pr-8 lg:pr-24 lg:text-left 2xl:pr-32">
            <SectionHeader
              category="SOLUTION"
              title="Design System Foundations"
              icon={Lightbulb}
              description="Built for developers, by developers - positioning Coinbase Cloud as the technical foundation that powers the future of finance."
              className=""
            />
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li
                  key={feature.id}
                  className="group relative w-full cursor-pointer px-6 py-3 transition rounded-lg data-open:bg-white"
                  data-open={selection === i ? "true" : undefined as string | undefined}
                  onClick={() => setSelection(i)}
                >
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="text-sm font-mono font-bold text-foreground">
                      {typeof feature.title === "string" ? feature.title : "Untitled"}
                    </div>
                    <div className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground group-data-open:bg-primary group-data-open:text-primary-foreground">
                      <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-[open=true]:rotate-180" />
                    </div>
                  </div>
                  <div className="hidden text-sm font-medium group-data-[open=true]:block">
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

export default TechnicalFeaturesCloud;