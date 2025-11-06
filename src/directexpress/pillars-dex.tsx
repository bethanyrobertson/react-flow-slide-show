import { Search } from "lucide-react";

import SectionHeader from "../section-header";

const PillarsDex = () => {
  return (
    <section className="py-16 md:py-28 lg:py-32 relative">
       <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 -z-10"></div>
        <SectionHeader
          category="FUTURE"
          title="Enhancements"
          icon={Search}
            description=""
            className=""
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3 xl:gap-20">
          <div className="flex flex-col lg:block">
            <div className="h-full max-h-[500px] rounded-lg border bg-muted p-3">
              <img
                src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/3ce162fe-2606-48e5-04a3-27ab8d5fd900/public"
                alt="placeholder"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-1 flex items-center font-mono gap-2 font-bold">
              Theming
              </h3>
              <p className="text-muted-foreground">
                  <br />
                  AI-generated themes based on primary brand colors. 
                  
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:block">
            <div className="h-full max-h-[500px] rounded-lg border bg-muted p-3">
              <img
                src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/7d0d573e-8068-45b7-6226-e6b435729c00/public"
                alt="placeholder"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-1 flex items-center font-mono gap-2 font-bold">
              Progressive disclosure enhancements
              </h3>
              <p className="text-muted-foreground">
                  <br />
                  Look at how we can make small changes to steppers for more clarity
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:block">
            <div className="h-full max-h-[500px] rounded-lg border bg-muted p-3">
              <img
                src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/2b06bb98-0755-4e37-d8e8-1737d4803b00/public"
                alt="placeholder"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-1 flex font-mono items-center gap-2 font-bold">
             CTA clarity
              </h3>
              <p className="text-muted-foreground">
                  <br />
                  Looking at how we can ensure users understand what action is being taken through clear, descript buttons
              </p>
            </div>
          </div>
        </div>

    </section>
  );
};

export default PillarsDex;
