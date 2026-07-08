import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "glass-panel relative overflow-hidden",
        hoverEffect && "glass-panel-hover",
        className
      )}
    >
      {/* Subtle shimmer orb — toned down in dark mode to avoid washed-out look */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/20 dark:bg-slate-600/10 blur-3xl rounded-full pointer-events-none z-0" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
