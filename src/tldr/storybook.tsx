"use client";

import { Card, CardContent } from "@/components/ui/card";

const Storybook = () => {
  const illustrations = [
    {
      id: 1,
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/aa28e930-74e9-4347-00d5-45b3ffab6100/public",
      name: "Swag",
    },
    {
      id: 2,
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/229f9232-f1f7-4b20-b399-6eaa18b27300/public",
      name: "Badges",
    },
    {
      id: 3,
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/4e5a31b1-1a61-40ca-ac20-e9d230c46b00/public",
      name: "Swag",
    },
    {
      id: 4,
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/1e2fd376-dcf8-48bf-eef9-59473c5ef600/public",
      name: "Enamel Pin",
    },
    {
      id: 5,
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/9e3e3bb1-4e1a-4a2d-9d1a-5e3e3bb14e00/public",
      name: "Tote Bag",
    },
    {
      id: 6,
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/bw3-image-id/public",
      name: "Stickers",
    },
    {
      id: 7,
      image: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/bw11-image-id/public",
      name: "Poster",
    },
  ];

  return (
    <section className="bg-background h-full w-full py-16 overflow-auto">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Illustration Library
          </h1>
          <p className="text-muted-foreground text-lg">
            Brand illustrations and design assets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {illustrations.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">ID: {item.id}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Storybook };

