import { Search, Frame, ClockAlert, CreditCard } from 'lucide-react';

import SectionHeader from '../section-header';

const values = [
  {
    title: 'Drop-Offs during application stage',
    description:
      'Brex has received feedback that the current workflow is cumbersome and time-consuming, resulting in higher drop-off rates during the application stage.',
    icon: CreditCard,
  },
  {
    title: 'Delays',
    description:
      'This friction delays new customers getting started using Brex.',
    icon: ClockAlert,
  },
  {
    title: 'The ask',
    description:
      'Design a more streamlined, user-friendly workflow that enables customer to complete their applications smoothly and get started using Brex faster.',
    icon: Frame,
  },
];

const PersonasDex = () => {
  return (
    <section className="container py-16 md:py-28 lg:py-32">
      <SectionHeader
        category="STRATEGY"
        title="What we heard"
        icon={Search}
        description="Users "
                  className="border-none"
      />

      <div className="container mt-20 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div className="flex gap-2.5" key={index}>
              <Icon className="mt-0.5 size-[18px] shrink-0" />
              <div>
                <h3 className="!leading-none font-mono font-bold">
                  {value.title}
                </h3>
                <p className="text-muted-foreground mt-2.5 text-sm">
                  {value.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PersonasDex;
