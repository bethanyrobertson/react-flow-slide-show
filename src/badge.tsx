import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  const baseClasses = 'inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
  
  const variantClasses = {
    default: 'border-transparent text-foreground bg-gray-200 icon-inherit badge-default',
    secondary: 'border-transparent bg-secondary text-secondary-foreground',
    destructive: 'border-transparent bg-destructive text-destructive-foreground',
    outline: 'text-foreground',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  return (
    <div className={combinedClasses} {...props} />
  );
}

export { Badge };
