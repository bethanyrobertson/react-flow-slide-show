import { Lightbulb } from 'lucide-react';
// Removed Next.js Image import - using standard HTML img tags
import SectionHeader from '../section-header';

import { cn } from '@/lib/utils';

const features = [
  {
    description: 'Security and encryption concepts',
    subDescription:
      "Illustrations blend universally recognized security symbols (locks, keys, shields) with subtle technical details to convey both trustworthiness and sophisticated cryptographic processes.",
    className: '',
    images: [
      {
        src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/3f8557d6-43e8-4b2e-9157-0af7ad7a5f00/public',
        alt: 'Security and encryption concepts',
        width: 700,
        height: 320,
        className: 'object-cover',
      },
    ],
  },
  {
    description: 'Developer tools and APIs',
    subDescription:
      "Technical workflow illustrations use familiar development metaphors enhanced with blockchain-specific visual cues to bridge the gap between traditional programming concepts and Web3 development paradigms.",
    className: '',
    images: [
      {
        src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/86815628-5da5-4f09-78c2-3da7eb59e800/public',
        alt: 'Developer tools and APIs',
        width: 700,
        height: 320,
        className: 'object-cover',
      },
    ],
  },
  {
    description: 'Smart contracts and transactions',
    subDescription:
      'Visual metaphors combine familiar document and process symbols with blockchain-specific elements to make invisible computational workflows tangible.',
    images: [
      {
        src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/cb8e44b7-0f55-4b57-295d-a9c2112fcd00/public',
        alt: 'Smart contracts and transactions',
        width: 700,
        height: 320,
        className: 'object-cover object-top-left',
      },
    ],
  },
  {
    description: 'Nodes and network topology',
    subDescription:
      'Illustrations use connected geometric forms with dynamic visual indicators to represent abstract distributed systems as intuitive network maps.',
    images: [
      {
        src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/428b641a-0a1e-4578-d425-5689ed36cb00/public',
        alt: 'Nodes and network topology',
        width: 700,
        height: 320,
        className: 'object-cover',
      },
    ],
  },
];

export function CloudIllustration() {
  return (
    <>
      <section className="container py-16 md:py-28 lg:py-32 ">
        <SectionHeader
          category="SOLUTION"
          title="Depicting Complex Concepts in Web3"
          icon={Lightbulb}
          description=" Icons and Illustrations needed to work at multiple scales—from dashboard overview to detailed network monitoring. Used consistent geometric principles (circles for nodes, lines for connections) to create intuitive mental models for developers managing distributed infrastructure."
          className=""
        />

        {/* The following div is likely causing the misalignment */}
        <div className="border-none py-10" />
        <div className="grid grid-cols-1 gap-18 rounded-lg md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                'div-padding space-y-8',
                feature.className,
              )}
            >

              {feature.images && (
                <div
                  className={cn(
                    'relative flex flex-col gap-4'
                  )}
                >
                  {feature.images.map((image, idx) => (
                    <div className="h-80 w-full overflow-hidden border shadow-none rounded-2xl">
                      <img
                        key={idx}
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        style={{ objectFit: 'cover' }}
                        className={cn(image.className, 'h-full w-full')}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-2 md:space-y-6">
                <div className="space-y-1">
                  <h3 className="text-foreground font-semibold font-mono md:text-xl">
                    {feature.description}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {feature.subDescription}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>
    </>
  );
}
