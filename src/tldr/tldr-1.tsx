
const Tldr1 = () => {
  return (
    <section className="relative grid w-screen overflow-hidden py-32">
      <div className="container relative z-10 h-full grid-cols-1 items-center justify-center gap-6 lg:grid lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <div className="bg-muted-foreground/5 text-muted-foreground mb-12 flex items-center justify-center gap-3 rounded-full p-1 pr-4 text-sm font-medium tracking-tight">
          <h1 className="text-5xl font-semibold tracking-tighter lg:text-6xl">
            tl;dr
          </h1>
          <p className="text-muted-foreground mt-10 max-w-lg">
            The Ladies; of Design & Research
          </p>
        </div>
        <div className="rounded-4xl relative mt-10 flex h-[80vh] w-full items-center justify-center overflow-hidden border lg:mt-0 lg:h-[70vh]">
          <img
            src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/006e3e35-cc25-427d-9d10-53fe97fe1f00/public"
            alt=""
            className="size-full object-cover"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export { Tldr1 };

