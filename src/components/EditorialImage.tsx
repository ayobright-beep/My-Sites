import { useState } from 'react';
import { Compass } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'The Compass Studio',
  priority = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#191C22] via-[#131519] to-[#0B0C0E] p-6 text-center text-[#A3A8B2] ${className}`}
      >
        <Compass className="h-8 w-8 text-[#E5A024]" aria-hidden="true" />
        <p className="font-display text-sm font-medium text-[#F4F3EF]">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="eager"
      decoding={priority ? 'sync' : 'async'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
