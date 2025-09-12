
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { cn } from '@/lib/utils';
import SectionHeader from '../section-header';
import { Eye } from "lucide-react";


type ItemType = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    className: string;
  };
};

const ITEMS: ItemType[] = [
  {
    title: 'High satisfaction can hide critical usability issues.',
    description:
      'User interviews revealing "Cash App envy" directly informed our bill pay strategy, while quantitative data on customer service calls shaped our notification system.',
    image: {
      src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/e1082de5-90d8-4a80-fab2-0ee1d7bb8100/public',
      alt: 'High Satisfaction Can Hide Critical Usability Issues',
      className: 'object-cover object-center h-30',
    },
  },

  {
    title: 'Complexity vs. Simplicity: Supporting edge cases without compromising core experience.',
    description:
      'Progressive Disclosure became increasingly important when it comes to supporting multiple user types and card scenarios while maintaining simplicity.',
    image: {
      src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/7595892e-acab-497c-cf5f-83d72a23e500/public',
      alt: 'Complexity vs. Simplicity: Supporting Edge Cases Without Compromising Core Experience',
      className: 'object-center object-cover h-30',
    },
  },  
  {
    title: 'Unbanked users need different mental models than traditional fintech.',
    description: 'Designing for users with lower tech-literacy required rethinking traditional fintech patterns, focusing on immediate utility over advanced financial features.',
    image: {
      src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/55c6fb38-37b1-4784-78ed-aefd881f1e00/public',
      alt: 'Unbanked Users Need Different Mental Models Than Traditional Fintech',
      className: 'object-center object-cover',
    },
  },
  {
    title: 'Trust is earned through transparency, not simply hidden behind good intentions.',
    description:
      'Clear communication became a critical design requirement, not just a nice-to-have.',
    image: {
      src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/6ba3e53f-1050-42e6-7f7b-6db07c262700/public',
      alt: 'Trust Is Earned Through Transparency, Not Hidden Behind Good Intentions',
      className: 'object-cover object-center',
    },
  },
  {
    title: 'Trust can be earned progressively through micro-interactions.',
    description:
      'We learned to design "trust signals" into micro-interactions: immediate visual feedback for transactions, clear confirmation states, and redundant ways to verify account information.',
    image: {
      src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/736ab5a7-93a7-4a41-59ed-980070070b00/public',
      alt: 'Progressive Trust-Building Through Micro-Interactions',
      className: 'object-center object-cover',
    },
  },
];

const LearningsDex = () => {
  return (
    <section id="learnings" className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <SectionHeader
            category="INSIGHTS"
            title="Satisfaction Scores Are Not the End-all Be-all"
            icon={Eye}
            description=""
            className="border-none"
        />

        <div className="mt-4 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-6 md:grid-rows-5 lg:mt-6">
          {ITEMS.map((item, i) => {
            const gridClasses = {
              0: 'md:col-span-3 md:row-span-3',
              1: 'md:col-span-3 md:row-span-3 md:col-start-4',
              2: 'md:col-span-2 md:row-span-2 md:row-start-4',
              3: 'md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4',
              4: 'md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-4',
            }[i];
            return <Item key={i} {...item} className={gridClasses} />;
          })}
        </div>
      </div>
    </section>
  );
};

const Item = ({
  title,
  description,
  image,
  className,
}: ItemType & { className?: string }) => {
  return (
    <Card
      className={cn(
        'relative flex flex-col overflow-hidden border bg-white shadow-none max-md:min-h-[400px]',
        className,
      )}
    >
      <CardHeader className="mb-2">
        <h3 className="font-bold font-mono text-foreground">
          {title}{' '}
        </h3>
        <p className="text-muted-foreground text-sm font-sans">
          {description}
        </p>
      </CardHeader>

      <CardContent className="relative min-h-40 flex-1 overflow-hidden p-0 lg:min-h-40">
        <img
          src={image.src}
          alt={image.alt}
          className={`object-cover w-full h-full ${image.className || ''}`}
        />
      </CardContent>
    </Card>
  );
};

export default LearningsDex;
