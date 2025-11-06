import { Check, Sparkle } from "lucide-react";
import SectionHeader from "./section-header";


const TrustDex = () => {
  return (
    <section className="h-full w-full p-8 overflow-hidden">
      <div className="h-full flex flex-col">
        <SectionHeader
          category="RECAP"
          title="Accomplishments & Learnings"
          icon={Sparkle}
          description="There is a great deal of opportunity to be found for enhancing our customer experience within onboarding"
          className="border-none mb-6"
        />
        <div className="flex-1 grid gap-3 grid-cols-3 overflow-hidden">
          <div className="rounded-lg bg-[#f5f5f5] border h-full flex flex-col">
            <div className="relative p-1">
              <img
                src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/2f01a0f1-f1d8-40be-2a93-3bedc2d32e00/public"
                alt="placeholder"
                className="h-130 w-full rounded-t-lg object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="mb-2 px-3 pt-3">
                <h3 className="font-mono text-foreground font-bold text-sm">Streamlined Onboarding Flow</h3>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground text-xs flex-1">
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  Shorter time to home dashboard
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  Having document upload as a first task to autofill fields where possible
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  More progressive disclosure throughout
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-[#f5f5f5] border h-full flex flex-col">
            <div className="relative p-1">
              <img
                src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/2b06bb98-0755-4e37-d8e8-1737d4803b00/public"
                alt="placeholder"
                className="h-130 w-full rounded-t-lg object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="mb-2 px-3 pt-3">
                <h3 className="font-mono text-foreground font-bold text-sm">Clearer CTAs</h3>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground text-xs flex-1">
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  More explicit CTAs throughout
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  Clear action being taken
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  Exploration of a nod to Brex's brand
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg bg-[#f5f5f5] border h-full flex flex-col">
            <div className="relative p-1">
              <img
                src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/8a44b7f2-ff32-44bc-7a10-5f7194e49e00/public"
                alt="placeholder"
                className="h-130 w-full rounded-t-lg object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="mb-2 px-3 pt-3">
                <h3 className="font-mono font-bold text-sm">Improved password strength indicator</h3>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground text-xs flex-1">
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  A component to help users understand requirements
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                 Confirmation
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  An extra step to help users remember their password
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustDex;
