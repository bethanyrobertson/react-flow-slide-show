

import { cn } from "@/lib/utils";

import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";


const DesignSystems = () => {
  const items = [
    {
      title: "Coinbase",
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/8a6e117f-5389-429a-0678-4222aa7a3f00/public",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Mucinex",
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/1070c50f-5b5f-4c07-8332-b884da9ef600/public",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Direct Express",
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/4d223fc0-8f6d-456e-9d46-a3191b6f7300/public",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Aptos Labs",
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/4ca86370-4c1c-4113-d875-84e1a050d500/public",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Google: Results About You",
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/9d105a2d-c508-43d9-dca2-4cba8b306500/public",
      className: "absolute top-20  lg:right-[35%] rotate-[2deg]",
    },
    {
      title: "Vector API",
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/e19c63ea-1fa3-47ec-a5ce-f4e6029fe000/public",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
  ];

  return (
    <section 
      className="relative grid w-screen overflow-visible border-none py-32 lg:min-h-screen"
    >
      <div className="container relative z-10 h-full grid-cols-1 items-center justify-center gap-10 lg:grid lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <h1 className="font-mono max-w-lg text-7xl">
            Design Systems
          </h1>
          <p className="text-muted-foreground mt-10 text-lg max-w-md">
            0 to 1 : Coinbase Cloud, Aptos Labs, Vector API, Direct Express, Mucinex
            Contributor: Google, Coinbase
          </p>

        </div>
        <DraggableCardContainer className="relative flex h-[80vh] w-full items-center justify-center lg:h-full">
          {items.map((item) => (
            <DraggableCardBody
              key={item.title}
              className={cn(
                item.className,
                "-translate-x-20 bg-white scale-75 rounded-2xl p-3 lg:translate-x-0 lg:scale-100",
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-82 pointer-events-none relative z-10 w-80 rounded-2xl object-cover"
              />
              <h3 className="mt-4 text-center text-xl tracking-tighter">
                {item.title}
              </h3>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>
    </section>
  );
};

export { DesignSystems };
