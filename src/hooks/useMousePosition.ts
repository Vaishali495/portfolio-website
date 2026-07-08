/**
 * useMousePosition.ts
 *
 * NOTE: This hook is currently not consumed by any component in the portfolio.
 * It is retained here for future use (e.g., interactive cursor effects or
 * parallax-on-cursor features). Do not delete without checking active usage first.
 *
 * Tracks normalized mouse position (-1 to 1) relative to screen center
 * using Framer Motion's useMotionValue for zero-overhead reactive updates.
 */
import { useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export function useMousePosition() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize values relative to center of screen: -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return { mouseX, mouseY };
}
