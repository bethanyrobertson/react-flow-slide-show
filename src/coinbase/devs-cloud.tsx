"use client";
import SectionHeader from "../section-header";
import { Sparkle } from 'lucide-react';

const itemsData = [
    {
    id: 1,
    title: "Simplified Complexity",
    imageSrc: "https://www.brober.xyz/images/casestudies/cloud/cb-dev-3.png",
    description:
      "Making blockchain development accessible",
  },
  {
    id: 2,
    title: "Enterprise Reliability",
    imageSrc: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/02b94fcf-1dc3-401a-6780-532b81282200/public",
    description:
      "Institutional-grade infrastructure and security",
  },

  {
    id: 3,
    title: "Trusted Foundation",
    imageSrc: "https://www.brober.xyz/images/casestudies/cloud/cb-dev-4.png",
    description:
      "Leveraging Coinbase's regulatory compliance and security reputation",
  },
];

const DevsCloud = () => {
  return (
    <section className="py-32">
      <SectionHeader
        category="OUTCOME"
        title="Built for Developers, by Developers"
        icon={Sparkle}
        description="Positioning Coinbase Cloud as the technical foundation that powers the future of finance."
                  className="border-none"
      />
      <div className="container">
        <div className="mx-auto mt-16 flex flex-col gap-6 md:flex-row">
          {itemsData.map((item) => (
            <a className="flex-1" href="#" key={item.id}>
              <div className="mb-6 aspect-square w-full rounded-2xl border-2 border-gray-200 overflow-hidden">
                <img
                  src={item.imageSrc}
                  alt="placeholder"
                  className="h-full w-full object-cover"
                />
              </div>
              <h6 className="mb-3 text-lg font-mono font-semibold">{item.title}</h6>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { DevsCloud };
