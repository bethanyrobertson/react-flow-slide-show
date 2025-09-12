import { Search, UserRound, HeartHandshake, CreditCard } from 'lucide-react';

import SectionHeader from '../section-header';

const values = [
  {
    title: 'Direct beneficiaries',
    description:
      'Most users: they sign up and receive one or more benefits and can directly access their money via the app or physical debit card.',
    icon: UserRound,
  },
  {
    title: 'Representative Payees',
    description:
      'Many beneficiaries require a handler to manage their funds for them. These handlers must also be able to access the app and manage their ward\'s funds.',
    icon: HeartHandshake,
  },
  {
    title: 'Multiple card scenarios',
    description:
      'Some beneficiaries have more complex benefit structures, managing more than one type of benefit, potentially with multiple debit cards.',
    icon: CreditCard,
  },
];

const PersonasDex = () => {
  return (
    <section className="container py-16 md:py-28 lg:py-32">
      <SectionHeader
        category="STRATEGY"
        title="Audiences"
        icon={Search}
        description="Three distinct user types create a complex user ecosystem that requires flexible functionality and architecture. "
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