
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ 
  className,
  children 
}) => {
  return (
    <div className={cn(
      "relative overflow-hidden",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-chimera-orange to-chimera-yellow opacity-20 animate-pulse-slow rounded-full blur-3xl"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedGradient;
