import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  category: string;
  title: string;
  icon: LucideIcon;
  description: string;
  className?: string;
}

const SectionHeader = ({ category, title, icon: Icon, description, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="inline-flex items-center rounded-full bg-gray-200 justify-center gap-2 px-3 py-1 mb-4">
        <Icon className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          {category}
        </span>
      </div>
      <h2 className="text-3xl font-bold text-foreground mb-4 sm:text-4xl md:text-5xl" style={{ fontFamily: 'GeistMonoVF, monospace' }}>
        {title}
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
