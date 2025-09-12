import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";

interface NavigationControlsProps {
  onNavigate: (direction: 'left' | 'right' | 'up' | 'down') => void;
  availableDirections: {
    left?: string;
    right?: string;
    up?: string;
    down?: string;
  };
  className?: string;
}

export default function NavigationControls({ 
  onNavigate, 
  availableDirections, 
  className = "" 
}: NavigationControlsProps) {
  const directions = [
    { key: 'left', icon: ChevronLeft, label: 'Previous', available: !!availableDirections.left },
    { key: 'up', icon: ChevronUp, label: 'Up', available: !!availableDirections.up },
    { key: 'down', icon: ChevronDown, label: 'Down', available: !!availableDirections.down },
    { key: 'right', icon: ChevronRight, label: 'Next', available: !!availableDirections.right },
  ];

  return (
    <div className={`flex gap-1 ${className}`}>
      {directions.map(({ key, icon: Icon, label, available }) => (
        <button
          key={key}
          onClick={() => onNavigate(key as any)}
          disabled={!available}
          className="flex items-center justify-center w-8 h-8 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={`Navigate ${label.toLowerCase()}`}
        >
          <Icon className="w-4 h-4 text-gray-700" />
        </button>
      ))}
    </div>
  );
}
