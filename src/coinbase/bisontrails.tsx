'use client'

import { Search } from "lucide-react";
import CategoryBadge from "../category-badge";

const BisonTrails = () => {
  return (
    <section className="h-full w-full flex items-center justify-center p-8">
      <div className="flex flex-col gap-4 md:flex-row max-w-7xl mx-auto items-center">
        <div className="flex flex-col gap-3 md:w-1/2 pl-0 text-left">
          <div className="flex flex-col gap-3">
            <div className="w-fit">
              <CategoryBadge label="STRATEGY" icon={Search} />
            </div>
            <h2 className="font-mono text-xl tracking-tight text-foreground md:text-2xl lg:text-3xl">
              Bison Trails Gets Aquired - And Needs A New Brand
            </h2>
            <p className="text-muted-foreground font-sans text-sm max-w-[500px]">
              Coinbase's January 2021 acquisition of Bison Trails created an immediate brand challenge: how to integrate a respected enterprise blockchain infrastructure company serving 200+ developers into the consumer-focused Coinbase ecosystem. Bison Trails was effectively rebranded to Coinbase Cloud, requiring a new identity that could leverage Coinbase's regulatory credibility while speaking directly to sophisticated developer audiences who needed enterprise-grade infrastructure, not simplified crypto trading tools.
            </p>
          </div>

          
          <div className="mt-2 text-left">
            <h3 className="font-bold font-mono text-foreground mb-2 text-sm">Key Challenges</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <div className="font-bold font-mono text-foreground text-sm">Brand Differentiation:</div>
                <div className="mt-1 text-xs text-muted-foreground">Distinguishing Cloud from consumer Coinbase without losing brand equity</div>
              </li>
              <li className="text-muted-foreground">
                <div className="font-bold font-mono text-foreground text-sm">Developer Trust:</div>
                <div className="mt-1 text-xs text-muted-foreground">Building credibility with sophisticated technical audiences</div>
              </li>
              <li className="text-muted-foreground">
                <div className="font-bold font-mono text-foreground text-sm">Technical Complexity:</div>
                <div className="mt-1 text-xs text-muted-foreground">Communicating complex blockchain infrastructure concepts simply</div>
              </li>
              <li className="text-muted-foreground">
                <div className="font-bold font-mono text-foreground text-sm">Market Positioning:</div>
                <div className="mt-1 text-xs text-muted-foreground">Competing with established cloud providers in the Web3 space</div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="w-full shrink-0 md:w-1/2">
          <img
            src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/92ec90cc-89f7-44e0-5234-d2676ff14300/public"
            alt="placeholder"
            className="h-180 w-full rounded-lg border object-cover"
          />
          <p className="mt-1 text-xs text-muted-foreground text-center">
            A look at some of my work at Bison Trails
          </p>
        </div>
      </div>
    </section>
  );
};

export { BisonTrails };
