
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  delay?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  delay = '',
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-soft border border-muted/50 hover:shadow-md hover:border-muted transition-all duration-300 animate-slide-up",
        delay,
        className
      )}
    >
      <div className="bg-chimera-light p-3 rounded-lg w-fit mb-4">
        <Icon className="h-6 w-6 text-chimera-orange" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
