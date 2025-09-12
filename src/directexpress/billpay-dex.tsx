
import { Lightbulb, SlidersHorizontal, SearchCheck, ReceiptText, ArrowRightLeft } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionHeader from '../section-header';

const FEATURES = [
{
    title: 'Streamlined Bill Management',
    description: 'All billers in one place',
    content: {
      title: 'Streamlined Bill Management',
      description:
        'View all billers in one place with access to manage each one.',
      image: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/e63eff60-5faa-4fbc-38e5-479677698300/public',
    },
    icon: ArrowRightLeft,
  },
  {
    title: 'Payee Search & Add',
    description: 'Access to over 20,000 payees',
    content: {
      title: 'Search',
      description: `Access to over 20,000 payees across different categories.`,
      image: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/57335953-791e-4270-5f3d-f8d2e9d20e00/public',
    },
    icon: SearchCheck,
  },
  {
    title: 'Payment Management',
    description: 'Payment tracking and cancellation capabilities',
    content: {
      title: 'Cancel a Payment',
      description:
        'Full tracking and cancellation capabilities.',
      image: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/4096553c-501f-4f1c-d5e0-17efb147c600/public',
    },
    icon: ReceiptText,
  },
  {
    title: 'Filtering',
    description: 'Integrated payment history with filtering and sorting options',
    content: {
      title: 'Filtering',
      description:
        'Payment history is easily parsed with advanced filtering and sorting options. ',
      image: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/b6810587-baea-415e-c426-0f4097993900/public',
    },
    icon: SlidersHorizontal,
  },
];

const BillPayDex = () => {
  return (
    <section id="billpay" className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <SectionHeader
            category="SOLUTION"
            title="Bill Pay Made Easy"
            icon={Lightbulb}
            description=""
            className="border-none"
        />
        <Tabs
          defaultValue={FEATURES[0].title}
          orientation="vertical"
          className="mt-8 flex gap-4 max-lg:flex-col-reverse border rounded-xl p-4 md:mt-8 md:p-6 lg:mt-10 lg:p-8"
        >
          <TabsList className="flex h-auto justify-start overflow-x-auto rounded-xl p-1.5 lg:basis-1/4 lg:flex-col tabs-list-override" style={{ 
            backgroundColor: '#d7e0e1'
          }}>
            {FEATURES.map((feature) => (
                <TabsTrigger
                    key={feature.title}
                    value={feature.title}
                    className="w-full min-w-[200px] flex-1 justify-start rounded-lg px-4 py-3 text-start whitespace-normal transition-colors duration-300 
                    data-[state=active]:bg-white data-[state=active]:shadow-md
                    lg:px-6 lg:py-4"
                    style={{
                      color: 'slate-400', // Blue for inactive
                      '--tw-text-opacity': '1'
                    } as React.CSSProperties}
                    data-inactive-color="rgb(59 130 246)"
                    data-active-color="rgb(0 0 0)"
                >
                    <div>
                        <feature.icon className="size-7 md:size-8 lg:size-9 text-inherit" />
                        <h3 className="mt-3 font-mono font-bold text-inherit">{feature.title}</h3>
                        <p className="mt-1 text-sm font-sans text-inherit opacity-80">
                        {feature.description}
                        </p>
                    </div>
                </TabsTrigger>
            ))}
          </TabsList>

          {FEATURES.map((feature) => (
            <TabsContent
                className="m-0 flex-1 rounded-xl overflow-hidden"
                key={feature.title}
                value={feature.title}
            >
                <div className="h-[420px] lg:h-[500px] relative border rounded-xl overflow-hidden">
                <img
                    src={feature.content.image}
                    alt={feature.title}
                    className="object-cover w-full h-full"
                />
                </div>              
                <div className="p-5 text-balance lg:p-7">
                <h4 className="inline font-mono font-bold">
                    {feature.content.title}{' '}
                </h4>
                <span className="text-muted-foreground font-sans mt-2 text-pretty">
                    {feature.content.description}
                </span>
                </div>
            </TabsContent>
            ))}
        </Tabs>
      </div>
    </section>
  );
};

export default BillPayDex;
