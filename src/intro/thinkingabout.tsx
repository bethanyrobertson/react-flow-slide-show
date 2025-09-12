const DesignSystemIntro = () => {
  return (
    <div className="bg-[#dac4e1] w-full h-full flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-4xl">
            <div className="flex flex-col gap-2 mb-6">
              <h2 
                className="font-semibold text-[#222222] text-xl tracking-wide whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0"
                style={{ fontFamily: 'GeistMonoVF, monospace' }}
              >
                THINKING ABOUT..
              </h2>

              <h1 
                className="font-bold text-[#222222] text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-tight translate-y-[-1rem] animate-fade-in opacity-0"
                style={{ 
                  fontFamily: 'GeistMonoVF, monospace',
                  animationDelay: '200ms'
                }}
              >
                Design System APIs
              </h1>
            </div>

            <div 
              className="font-normal text-[#222222] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] leading-relaxed translate-y-[-1rem] animate-fade-in opacity-0"
              style={{ 
                fontFamily: 'GeistVF, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                animationDelay: '400ms'
              }}
            >
              Storing tokens as a JSON
              <br />
              <br />
              Internal processes and tools for consistency
              <br />
              <br />
              This was my final project in a Full Stack Javascript program at The
              University of Washington (2024- 2025)
            </div>
          </div>

          {/* Right Images */}
          <div className="flex-1 max-w-4xl w-full">
            <div className="relative flex flex-col gap-8">
              <div className="relative w-full">
                <img
                  className="w-full h-auto object-cover rounded-lg animate-fade-in opacity-0"
                  style={{ animationDelay: '600ms' }}
                  alt="Screen recording"
                  src="https://c.animaapp.com/mfg69nw8ju1hYe/img/screen-recording-2025-08-25-at-11-10-43-am-1.png"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <img
                  className="w-full h-auto object-cover rounded-lg animate-fade-in opacity-0"
                  style={{ animationDelay: '800ms' }}
                  alt="Screen recording"
                  src="https://c.animaapp.com/mfg69nw8ju1hYe/img/screen-recording-2025-08-25-at-10-37-54-am-1.png"
                />
                <img
                  className="w-full h-auto object-cover rounded-lg animate-fade-in opacity-0"
                  style={{ animationDelay: '1000ms' }}
                  alt="Ds json"
                  src="https://c.animaapp.com/mfg69nw8ju1hYe/img/ds-json-1.png"
                />
              </div>
            </div>
          </div>
        </div>
        
        <style>{`
          @import url("https://fonts.googleapis.com/css?family=Geist+Mono:600");
          
          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: none;
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default DesignSystemIntro;
