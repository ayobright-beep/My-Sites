import { useEffect, useState } from 'react';
import { calculateScrollProgress } from '../utils/compassLogic';

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;
      const doc = document.documentElement;
      const scrollTop = window.scrollY ?? doc.scrollTop;
      const next = calculateScrollProgress(
        scrollTop,
        doc.scrollHeight,
        window.innerHeight || doc.clientHeight
      );
      setProgress(next);
    };

    const handleScrollOrResize = () => {
      if (rafId === 0) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const percentage = Math.round(progress * 100);

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percentage}
      data-testid="scroll-progress-bar"
      className="pointer-events-none fixed top-0 inset-x-0 z-50 h-[2px] bg-white/[0.06]"
    >
      <div
        data-testid="scroll-progress-fill"
        className="h-full w-full origin-left bg-[#E5A024] will-change-transform transition-transform duration-75 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
