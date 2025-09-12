import { cn } from "@/lib/utils";

export type ExperimentalCodeProps = {
  className?: string;
  background?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  heroCaption?: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
  secondaryCaption?: string;
};

const DEFAULTS: Required<Omit<ExperimentalCodeProps, "className" | "background">> & { background: string } = {
  background: "#dac4e1",
  eyebrow: "Entry points to PROGRamming",
  title: "Experimental Code",
  description:
    "I arrived at thinking about systems and code through more of an art lens. I have been playing with code for several years, but only once I really dove in did it change how I approach design.",
  heroImageSrc:
    "https://api.builder.io/api/v1/image/assets/TEMP/1bd820a09ae560b7f7018f296ee0588351d0038f?width=2026",
  heroImageAlt: "Code-to-music program Strudel interface",
  heroCaption: "Code-to-music program Strudel",
  secondaryImageSrc:
    "https://api.builder.io/api/v1/image/assets/TEMP/69a1cfe2131f3da1fb341071b74bb44e4babb3e2?width=830",
  secondaryImageAlt: "Processing sculpture of Mochi",
  secondaryCaption: "Processing sculpture of Mochi",
};

export default function ExperimentalCode(props: ExperimentalCodeProps) {
  const data = { ...DEFAULTS, ...props } as typeof DEFAULTS & { className?: string };

  return (
    <section
      className={cn("min-h-screen w-full h-full relative overflow-hidden flex items-center", data.className)}
      style={{ background: data.background }}
      aria-label="Experimental Code section"
    >
      <div className="container mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg lg:text-xl font-semibold text-[#222222] uppercase tracking-wide" style={{ fontFamily: 'GeistMonoVF, monospace' }}>
                {data.eyebrow}
              </h3>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-[#222222] leading-tight" style={{ fontFamily: 'GeistMonoVF, monospace' }}>
                {data.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-normal text-[#222222] leading-relaxed mt-6 max-w-none lg:max-w-[650px]" style={{ fontFamily: 'GeistVF, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                {data.description}
              </p>
            </div>
          </div>

          <div className="relative flex flex-col gap-6 sm:gap-8 lg:gap-12">
            <div className="relative w-full">
              <img
                src={data.heroImageSrc}
                alt={data.heroImageAlt}
                className="w-full h-auto object-cover aspect-[173/90]"
              />
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-[#222222] mt-3 lg:mt-4" style={{ fontFamily: 'GeistVF, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                {data.heroCaption}
              </p>
            </div>

            <div className="relative w-full sm:w-4/5 lg:w-3/5 lg:ml-8 xl:ml-16 self-start">
              <img
                src={data.secondaryImageSrc}
                alt={data.secondaryImageAlt}
                className="w-full h-auto object-cover aspect-[129/106]"
              />
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-[#222222] mt-3 lg:mt-4" style={{ fontFamily: 'GeistVF, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                {data.secondaryCaption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { ExperimentalCode };