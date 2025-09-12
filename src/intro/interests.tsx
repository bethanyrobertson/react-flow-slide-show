export default function Interests() {
    return (
      <div className="min-h-screen w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-[#222222] leading-tight mb-10" style={{ fontFamily: 'GeistMonoVF, monospace' }}>
                Interests as a human
              </h1>
              <ul className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] text-[#222222] leading-relaxed space-y-6 list-disc pl-6" style={{ fontFamily: 'GeistVF, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                <li>My Tibetan Spaniel "Mochi"</li>
                <li>Travel: Sri Lanka, Nepal, India</li>
                <li>Baking</li>
              </ul>
            </div>
  
            {/* Right Image */}
            <div className="flex-1 max-w-2xl w-full">
              <div className="w-full aspect-[5/3] lg:aspect-[839/503]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b4f3af64b68a2df7ec54938ee473afa5499a479a?width=1678"
                  alt="Mochi the Tibetan Spaniel"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }