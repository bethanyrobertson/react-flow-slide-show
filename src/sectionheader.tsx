import * as React from 'react';
import CategoryBadge from './category-badge';
import { LucideIcon } from 'lucide-react';

// Simple utility function to replace cn
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  category: string;
  icon: LucideIcon;
  description: string | React.ReactNode;
}

const SectionHeader = ({
  className,
  title,
  icon,
  category,
  description,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        'container flex flex-col gap-6 py-4 lg:py-8',
        className,
      )}
    >
      <div className="w-fit">
        <CategoryBadge label={category} icon={icon} />
      </div>
      <h2 className="font-mono text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {typeof description === 'string' ? (
        <p className="text-muted-foreground font-sans max-w-[600px]">
          {description}
        </p>
      ) : (
        <div className="text-muted-foreground font-sans max-w-[600px]">
          {description}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
