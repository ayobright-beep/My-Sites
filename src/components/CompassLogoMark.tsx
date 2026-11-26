import { useState } from 'react';
import { Compass } from 'lucide-react';
import { COMPASS_LOGO } from '../data/compassData';

interface CompassLogoMarkProps {
  size?: 'sm' | 'md';
}

export function CompassLogoMark({ size = 'sm' }: CompassLogoMarkProps) {
  const [hasError, setHasError] = useState(false);
  const dimensionClass = size === 'md' ? 'h-8 w-8' : 'h-7 w-7';

  if (hasError) {
    return (
      <span
        aria-hidden="true"
        className={`inline-flex ${dimensionClass} shrink-0 items-center justify-center text-[#E5A024]`}
      >
        <Compass className="h-5 w-5" />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`inline-flex ${dimensionClass} shrink-0 items-center justify-center overflow-hidden rounded-[3px]`}
    >
      <img
        src={COMPASS_LOGO.src}
        alt=""
        referrerPolicy="no-referrer"
        loading="eager"
        onError={() => setHasError(true)}
        className="h-full w-full object-cover origin-[50%_18%] scale-[1.52] mix-blend-lighten"
      />
    </span>
  );
}
