import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function VantaBackground({
  theme = 'dark',
  color = 0x20ff6e,
  color2 = 0x20ffa3,
  backgroundColor,
}) {
  const containerRef = useRef(null);
  const effectRef = useRef(null);

  const resolvedBackgroundColor =
    backgroundColor ?? (theme === 'light' ? 0xffffff : 0x0c0b0b);

  useEffect(() => {
    let cancelled = false;
    const el = containerRef.current;
    if (!el) return;

    window.THREE = window.THREE || THREE;

    const initVanta = async () => {
      try {
        await import('vanta/dist/vanta.dots.min');
        if (cancelled || !containerRef.current) return;

        const DOTS = window.VANTA?.DOTS;
        if (typeof DOTS !== 'function') return;

        effectRef.current = DOTS({
          el: containerRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color,
          color2,
          backgroundColor: resolvedBackgroundColor,
        });
      } catch (err) {
        console.error('Failed to initialize Vanta Dots:', err);
      }
    };

    initVanta();

    return () => {
      cancelled = true;
      if (effectRef.current) {
        try {
          effectRef.current.destroy();
        } catch {
          // Ignore cleanup errors if initialization did not complete
        }
        effectRef.current = null;
      }
    };
  }, [color, color2, resolvedBackgroundColor]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen"
    />
  );
}