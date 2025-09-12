import React from 'react';

import { Badge } from './badge';
import { LucideIcon } from 'lucide-react';

interface CategoryBadgeProps {
  label: string;
  icon: LucideIcon;
}

export default function CategoryBadge({ label, icon }: CategoryBadgeProps) {
  return (
    <Badge
      variant="default"
      className="[&>svg]:text-inherit rounded-full bg-gray-200 flex items-center tracking-widest gap-1 py-2 ps-4 pe-4 text-l font-bold font-mono [&>svg]:size-4"
    >
      {React.createElement(icon, { className: "me-1" })}
      {label}
    </Badge>
  );
}
