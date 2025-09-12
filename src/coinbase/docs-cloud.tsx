import { Lightbulb, CloudAlert, Files, ChartCandlestick, Sparkles } from "lucide-react";
import SectionHeader from "../section-header";

const features = [
  {
    title: "CLI-based quickstart tutorials",
    description:
      "with real jq examples for JSON processing—not just toy examples",
    icon: Sparkles,
  },
  {
    title: "Actual error scenarios",
    description:
      "with debugging guidance—because things break and people need help",
    icon: CloudAlert,
  },
  {
    title: "Copy-paste ready code examples",
    description:
      "formatted for immediate implementation",
    icon: Files,
  },
  {
    title: "Everything organized around key crypto primitives ",
    description:
      "like trading and payments that developers actually use",
    icon: ChartCandlestick,
  },
];

const DocsCloud = () => {
  return (
    <section className="overflow-hidden py-32">
      <div className="relative container">
        <div className="relative w-full aspect-video max-h-[510px] rounded-xl border border-border overflow-hidden">
          <img
            src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/a31f783c-bc7b-4c26-2bac-5053bb90fc00/public"
            alt="clouddocs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              category="SOLUTION"
              title="Developer Docs as Product Strategy"
              icon={Lightbulb}
              description="This is where we really differentiated ourselves from other infrastructure providers:"
              className="border-none"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, idx) => (
                <div key={idx} className="p-4 rounded-lg border">
                  <feature.icon className="size-6 text-primary" />
                  <h3 className="mt-3 font-mono text-foreground font-bold text-base">{feature.title}</h3>
                  <p className="mt-2 font-sans text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { DocsCloud };
