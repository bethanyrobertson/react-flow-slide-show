import { DashedLine } from "../ui/dashed-line";

const stats = [
  {
    value: '+8.98% ',
    label: 'Increase in time spent on site QoQ',
  },
  {
    value: '+3.02%',
    label: 'Increased traffic to 3rd party e-comm retailers (Amazon, Walmart, Target, etc.)  that can be attributed to blog traffic.',
  },
];

export function TldrMucinex() {  
    return (
    <section className="">
      <div className="container flex max-w-6xl bg-[#d7e0e1] p-10  rounded-xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="font-mono text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
            tl;dr
          </h1>

          <p className="text-foreground mt-5 font-mono text-xl font-bold md:text-2xl lg:text-3xl">
          Critical usability updates to even the smallest part of a website or app can lead to significant improvements in ROI.
          </p>

          <div className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-sm text-balance md:block lg:mt-12">
            <ul>
                <li>Mucinex blog pages were amongst the highest Google-indexed pages on the site.</li>
                <li>Users who entered the site through blog articles spent more time on the site and were more likely to navigate to product pages and click on the "Find a Retailer" CTA.</li>
            </ul>
          </div>
        </div>
        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:ps-10 lg:pt-0`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="text-foreground mt-5 font-mono text-xl font-bold md:text-2xl lg:text-3xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

