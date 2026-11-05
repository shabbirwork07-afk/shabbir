import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Scale } from 'lucide-react';
import { BRAND_LOGO_SRC, BRAND_TAGLINE, WHATSAPP_DISPLAY, getGeneralWhatsAppLink } from '../data/jewelleryData';

interface LandscapeHeroBannerProps {
  onExploreRings: () => void;
}

export const LandscapeHeroBanner: React.FC<LandscapeHeroBannerProps> = ({ onExploreRings }) => {
  const whatsappUrl = getGeneralWhatsAppLink(
    'Hello Surti Jewels, I am exploring your 25 Signature Ladies Rings collection and would like assistance.'
  );

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#061220] via-[#0B1E38] to-[#081628] text-white border-b border-[#D4AF37]/30">
      {/* Subtle luxury ambient pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(212,175,55,0.15)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Brand Identity & Campaign Message */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            {/* Top Brand Subtitle */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/40 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#F3E5AB] font-medium">
                {BRAND_TAGLINE}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1] tracking-tight">
              25 Signature <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E8B2] via-[#FFDF73] to-[#D4AF37]">
                Ladies Gold Rings
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base text-[#E2E8F0]/85 font-normal max-w-xl leading-relaxed">
              Explore our verified digital catalogue of 25 handcrafted ladies casting, diamond, neli, and kasai rings. Featuring exact gross weights, transparent pricing, and 100% BIS hallmarked 22KT & 18KT gold.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onExploreRings}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0B1E38] bg-gradient-to-r from-[#F9E8B2] via-[#FFDF73] to-[#D4AF37] hover:brightness-110 rounded-md shadow-lg transition-all duration-300 cursor-pointer"
              >
                <span>Browse All 25 Rings</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-white/10 hover:bg-white/15 border border-[#D4AF37]/50 rounded-md transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" fill="currentColor" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#D4AF37]/20 text-xs text-[#E5C07B]/90">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>22KT & 18KT Hallmarked</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Exact Weights Displayed</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Authentic Catalog Photography</span>
              </div>
            </div>
          </div>

          {/* Right: Landscape Featured Showcase with Real Catalog Rings */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-br from-[#0E2442] to-[#071322] border-2 border-[#D4AF37]/50 rounded-xl p-5 shadow-2xl relative overflow-hidden">
              {/* Header inside banner */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D4AF37]/30">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4AF37]/60 bg-[#0A192F]">
                    <img src={BRAND_LOGO_SRC} alt="Surti Jewels" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="font-serif text-sm font-semibold tracking-wider text-[#F9E8B2] block">
                      SURTI JEWELS
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] block">
                      Official Ring Catalog
                    </span>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#FFDF73] border border-[#D4AF37]/40">
                  25 Models
                </span>
              </div>

              {/* Real Ring Showcase Strip: 3 authentic cropped rings preview */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="bg-[#050D18] rounded-lg p-2 border border-[#D4AF37]/30 flex flex-col items-center text-center">
                  <div className="w-full aspect-square overflow-hidden rounded bg-black mb-2">
                    <img src="/assets/rings/JP00030634.png" alt="22 KT Gold Casting Ring" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                  <span className="text-[9px] font-mono text-[#D4AF37]">JP00030634</span>
                  <span className="text-[10px] text-white font-semibold mt-0.5">₹96,982</span>
                  <span className="text-[8px] text-[#A0AEC0]">5.72 g · 22KT</span>
                </div>

                <div className="bg-[#050D18] rounded-lg p-2 border border-[#D4AF37]/30 flex flex-col items-center text-center">
                  <div className="w-full aspect-square overflow-hidden rounded bg-black mb-2">
                    <img src="/assets/rings/JP00080763.png" alt="18 KT Diamond Ring" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                  <span className="text-[9px] font-mono text-[#D4AF37]">JP00080763</span>
                  <span className="text-[10px] text-white font-semibold mt-0.5">₹92,090</span>
                  <span className="text-[8px] text-[#A0AEC0]">3.70 g · Diamond</span>
                </div>

                <div className="bg-[#050D18] rounded-lg p-2 border border-[#D4AF37]/30 flex flex-col items-center text-center">
                  <div className="w-full aspect-square overflow-hidden rounded bg-black mb-2">
                    <img src="/assets/rings/JP00167435.png" alt="22 KT Neli Ring" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                  <span className="text-[9px] font-mono text-[#D4AF37]">JP00167435</span>
                  <span className="text-[10px] text-white font-semibold mt-0.5">₹81,728</span>
                  <span className="text-[8px] text-[#A0AEC0]">4.74 g · Neli</span>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-[11px] text-[#E5C07B]">
                <span>No AI renders · 100% Real Jewellery</span>
                <button
                  onClick={onExploreRings}
                  className="font-semibold underline hover:text-white cursor-pointer"
                >
                  View All 25 Rings →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
