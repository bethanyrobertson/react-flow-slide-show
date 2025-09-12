// Removed Next.js imports - using standard HTML img tags

import {
  Brush,
  UsersRound,
  CircleDot,
  Calendar
} from 'lucide-react';

const features = [
  {
    title: 'EMPLOYER',
    description: 'Coinbase',
    icon: CircleDot,
  },
  {
    title: 'CONTRIBUTIONS',
    description: 'Design Systems & Product Experience',
    icon: UsersRound,
  },
  {
    title: 'TEAM',
    description: 'Design Systems,Engineering, Product',
    icon: Brush,
  },
  {
    title: 'TIMELINE',
    description: 'June 2021 - August 2022',
    icon: Calendar,
  },
];

export default function HeroCloud() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl md:whitespace-nowrap lg:text-7xl">
           Coinbase Cloud
          </h1>

          <p className="text-muted-foreground mt-5 font-sans text-l md:text-xl lg:text-2xl">
           Transitioning Bison Trails to Coinbase Cloud: A Brand and Design System Priotizing Developer Needs
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:ps-10">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-mono font-semibold">{feature.title}</h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:mx-auto max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-4xl lg:max-w-none mx-auto">
          <img
            src='https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/4906b1c8-4e9b-4432-15af-f7a4ae50c600/public'
            alt="hero"
            className="w-full h-full rounded-3xl object-cover object-center shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
