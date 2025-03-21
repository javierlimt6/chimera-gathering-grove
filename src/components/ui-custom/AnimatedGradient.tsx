
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'fire';
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ 
  className,
  children,
  variant = 'default'
}) => {
  return (
    <div className={cn(
      "relative overflow-hidden",
      className
    )}>
      <div className={cn(
        "absolute inset-0 opacity-20 animate-pulse-slow rounded-full blur-3xl",
        variant === 'fire' 
          ? "bg-gradient-to-br from-red-500 via-chimera-orange to-amber-400" 
          : "bg-gradient-to-br from-chimera-orange to-chimera-yellow"
      )}></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedGradient;
