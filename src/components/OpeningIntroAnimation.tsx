import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { BRAND_LOGO_SRC, BRAND_TAGLINE } from '../data/jewelleryData';

interface OpeningIntroAnimationProps {
  onComplete: () => void;
}

export const OpeningIntroAnimation: React.FC<OpeningIntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'enter' | 'shimmer' | 'exit'>('enter');

  useEffect(() => {
    // Phase 1: Logo & Text entrance
    const timer1 = setTimeout(() => {
      setPhase('shimmer');
    }, 900);

    // Phase 2: Shimmer and hold
    const timer2 = setTimeout(() => {
      setPhase('exit');
    }, 2200);

    // Phase 3: Complete transition out
    const timer3 = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#06101E] via-[#0B1E38] to-[#040A14] text-white transition-all duration-700 select-none ${
        phase === 'exit' ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background radial luxury lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Decorative Gold Rings Ornament */}
      <div className="absolute w-[450px] h-[450px] sm:w-[600px] h-[600px] rounded-full border border-[#D4AF37]/15 animate-[spin_40s_linear_infinite] pointer-events-none" />
      <div className="absolute w-[360px] h-[360px] sm:w-[480px] h-[480px] rounded-full border border-dashed border-[#D4AF37]/10 animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />

      {/* Center Brand Identity Lockup */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md">
        {/* Logo Container with Golden Glow and Scale-in */}
        <div className="relative mb-6">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/60 p-1 bg-[#0A192F] relative group">
            <img
              src={BRAND_LOGO_SRC}
              alt="Surti Jewels Logo"
              className="w-full h-full object-cover rounded-xl"
            />
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
          </div>

          {/* Twinkle Star Accent */}
          <div className="absolute -top-3 -right-3 text-[#FFD700] animate-bounce">
            <Sparkles className="w-6 h-6 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
          </div>
        </div>

        {/* Brand Name with expanding tracking */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#FFDF73] to-[#C5A059] uppercase drop-shadow-md mb-2">
          SURTI JEWELS
        </h1>

        {/* Tagline */}
        <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.35em] text-[#E5C07B]/90 font-light mb-4">
          {BRAND_TAGLINE}
        </p>

        {/* Subtle Divider */}
        <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-4" />

        <span className="text-[11px] font-sans tracking-widest text-[#E5C07B]/60 uppercase">
          25 Signature Ladies Rings
        </span>
      </div>

      {/* Skip button for quick access */}
      <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 z-20 px-4 py-2 text-xs font-sans tracking-widest uppercase text-[#F3E5AB]/75 hover:text-white bg-white/5 hover:bg-white/10 border border-[#D4AF37]/30 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
      >
        <span>Enter Showroom</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
