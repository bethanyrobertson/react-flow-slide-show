import { Check, Sparkle } from "lucide-react";
import SectionHeader from "./section-header";


const TrustDex = () => {
  return (
    <section className="h-full w-full p-8 overflow-hidden">
      <div className="h-full flex flex-col">
        <SectionHeader
          category="OUTCOME"
          title="Building Trust Through Transparency for Underserved Users"
          icon={Sparkle}
          description="The Direct Express app design fosters user trust by providing transparent information and accessible features."
          className="border-none mb-6"
        />
        <div className="flex-1 grid gap-3 grid-cols-3 overflow-hidden">
          <div className="rounded-lg bg-[#f5f5f5] border h-full flex flex-col">
            <div className="relative p-1">
              <img
                src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/d2697afc-b5bc-4346-2b28-4279aebd1300/public"
                alt="placeholder"
                className="h-130 w-full rounded-t-lg object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="mb-2 px-3 pt-3">
                <h3 className="font-mono text-foreground font-bold text-sm">Inclusive Design</h3>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground text-xs flex-1">
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  ADA compliance across all touchpoints
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  Spanish language support to serve diverse communities
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  Large, accessible touch targets designed for ease of use
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-[#f5f5f5] border h-full flex flex-col">
            <div className="relative p-1">
              <img
                src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/6db6fabb-9d75-4c1f-ae85-89f3d4f30100/public"
                alt="placeholder"
                className="h-130 w-full rounded-t-lg object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="mb-2 px-3 pt-3">
                <h3 className="font-mono text-foreground font-bold text-sm">Progressive Disclosure</h3>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground text-xs flex-1">
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  Complex workflows like Rep Payee management divided into intuitive, manageable steps
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  Intelligent defaults minimize decision fatigue and reduce user errors
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  Strategic information layering prevents overwhelming first-time users
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg bg-[#f5f5f5] border h-full flex flex-col">
            <div className="relative p-1">
              <img
                src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/76326e6a-e873-4f71-760b-571181d15c00/public"
                alt="placeholder"
                className="h-130 w-full rounded-t-lg object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="mb-2 px-3 pt-3">
                <h3 className="font-mono font-bold text-sm">Financial Transparency</h3>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground text-xs flex-1">
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  Multi-step payment confirmations with clear summary screens
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  Complete transaction history with detailed audit trails for user confidence
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-3 py-2">
                  <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                  Clear communication of processing times (electronic payments vs. 5-10 business days for checks) to set proper expectations
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
