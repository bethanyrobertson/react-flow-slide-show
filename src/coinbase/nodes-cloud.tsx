"use client";

import SectionHeader from '../section-header';

import { Lightbulb } from 'lucide-react';

const itemsData = [
  {
    id: 1,
    title: "Individual Nodes",
    imageSrc: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/2ac390b1-398b-48b8-6e8b-a41b162e3200/public",
    description:
      "Circular forms with subtle inner details suggesting computational activity",
  },
  {
    id: 2,
    title: "Network Connections",
    imageSrc: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/ded23701-bb46-4873-0240-e0812f2d6600/public",
    description:
      "Real-time performance analytics and insights",
  },
  {
    id: 3,
    title: "Node States",
    imageSrc: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/7f390c5c-f3ea-475d-cc9c-a2b3630d7600/public",
    description:
      "Color coding for active, inactive, syncing, and error states",
  },
  {
    id: 4,
    title: "Network Health",
    imageSrc: "https://www.brober.xyz/images/casestudies/cloud/cb-ui-4.png",
    description:
      "Visual hierarchy showing primary/secondary nodes and connection strength",
  },
];

const NodesCloud = () => {
  return (
    <section className="py-16 md:py-28 lg:py-32">
      <SectionHeader
        category="SOLUTION"
        title="Nodes and Network Topology"
        icon={Lightbulb}
        description="Representing complex distributed systems in simple, recognizable forms"
                  className="border-none"
      />

      <div className="container">
        <div className="mx-auto mt-16 flex flex-col md:flex-row gap-6">
          {itemsData.map((item) => (
            <a className="flex-1" href="#" key={item.id}>
              <div className="mb-6 h-48 w-full rounded-2xl border shadow-none overflow-hidden">
                <img
                  src={item.imageSrc}
                  alt="placeholder"
                  className="h-full w-full shadow-none object-cover"
                />
              </div>
              <h6 className="mb-3 font-mono font-bold">{item.title}</h6>
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

export { NodesCloud };
