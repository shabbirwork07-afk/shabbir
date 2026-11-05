import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  category = 'Fine Jewellery',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-[#F8F4E9] border border-[#EDE1BE] relative overflow-hidden ${className}`}
        style={{ minHeight: '260px' }}
      >
        {/* Subtle royal background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-64 h-64 text-[#281448]" fill="currentColor">
            <polygon points="50,15 80,45 50,85 20,45" />
          </svg>
        </div>

        {/* Diamond gem ornament */}
        <div className="w-14 h-14 rounded-full bg-white/80 border border-[#C5A059]/40 flex items-center justify-center shadow-xs mb-3 z-10">
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#C5A059]" fill="none" stroke="currentColor" strokeWidth="1.2">
            <polygon points="12 2 2 9 12 22 22 9 12 2" />
            <line x1="2" y1="9" x2="22" y2="9" />
            <line x1="12" y1="2" x2="8" y2="9" />
            <line x1="12" y1="2" x2="16" y2="9" />
            <line x1="8" y1="9" x2="12" y2="22" />
            <line x1="16" y1="9" x2="12" y2="22" />
          </svg>
        </div>

        <span className="text-[11px] uppercase tracking-widest text-[#C5A059] font-medium z-10 mb-1">
          {category}
        </span>
        <h4 className="font-serif text-lg text-[#242124] max-w-xs z-10 font-normal leading-snug">
          {alt}
        </h4>
        <span className="text-[10px] text-[#6A656B] mt-2 tracking-wider uppercase z-10">
          Surti Jewels Showroom
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden w-full h-full bg-[#F8F4E9] ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4E9] via-[#EDE1BE]/40 to-[#F8F4E9] animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
