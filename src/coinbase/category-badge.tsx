import { LucideIcon } from "lucide-react";

interface CategoryBadgeProps {
  label: string;
  icon: LucideIcon;
}

export default function CategoryBadge({ label, icon: Icon }: CategoryBadgeProps) {
  return (
    <div 
      className="inline-flex items-center gap-1.5 px-3 py-1 text-gray-700 rounded-full text-sm font-medium"
      style={{ backgroundColor: '#d7e0e1' }}
    >
      <Icon className="w-3 h-3" />
      {label}
    </div>
  );
}
