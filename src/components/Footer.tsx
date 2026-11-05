import React from 'react';
import { MessageCircle, ArrowUp, Sparkles, Scale, ShieldCheck } from 'lucide-react';
import { PageView } from '../types';
import { WHATSAPP_DISPLAY, BRAND_LOGO_SRC, BRAND_TAGLINE, getGeneralWhatsAppLink } from '../data/jewelleryData';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onReplayAnimation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onReplayAnimation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061220] text-[#E2E8F0] pt-14 pb-10 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#D4AF37]/20">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-[#D4AF37]/60 bg-[#0A192F] shrink-0">
                <img
                  src={BRAND_LOGO_SRC}
                  alt="Surti Jewels Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F9E8B2] via-[#FFDF73] to-[#D4AF37] block">
                  SURTI JEWELS
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E5C07B] font-light block">
                  {BRAND_TAGLINE}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A0AEC0] leading-relaxed max-w-sm font-normal">
              Specialists in fine handcrafted 22KT and 18KT gold ladies rings. Featuring our verified digital catalogue of 25 signature casting, neli, kasai, and diamond rings with exact weights and transparent pricing.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={getGeneralWhatsAppLink('Hello Surti Jewels, I would like to inquire about your 25 Signature Rings.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" fill="currentColor" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>

              <button
                onClick={onReplayAnimation}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-xs text-[#FFDF73] border border-[#D4AF37]/30 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Replay Intro</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base text-[#F9E8B2] font-semibold tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E1]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    scrollToTop();
                  }}
                  className="hover:text-[#FFDF73] transition-colors cursor-pointer"
                >
                  Home Showroom
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('rings');
                    scrollToTop();
                  }}
                  className="hover:text-[#FFDF73] transition-colors cursor-pointer font-medium text-[#FFDF73]"
                >
                  25 Signature Rings Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    scrollToTop();
                  }}
                  className="hover:text-[#FFDF73] transition-colors cursor-pointer"
                >
                  About Surti Jewels
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    scrollToTop();
                  }}
                  className="hover:text-[#FFDF73] transition-colors cursor-pointer"
                >
                  Contact & Workshop Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Ring Categories & Notice */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-base text-[#F9E8B2] font-semibold tracking-wider uppercase">
              Catalogue Ring Styles
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#CBD5E1]">
              <span>• 22KT Casting Rings</span>
              <span>• 18KT Rose Gold Rings</span>
              <span>• 22KT Neli Chevron Rings</span>
              <span>• 22KT Kasai Dome Rings</span>
              <span>• 18KT Diamond Rings</span>
              <span>• 22KT Wedding Bands</span>
            </div>

            <div className="pt-3 border-t border-[#D4AF37]/20 text-[11px] text-[#A0AEC0]">
              <span className="font-semibold text-[#F9E8B2] block mb-1">Other Jewellery Availability:</span>
              <p className="leading-relaxed">
                Necklaces, bangles, lockets, and earrings are currently not featured in our online catalogue and are made on custom order only.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} Surti Jewels. All rights reserved · {BRAND_TAGLINE}.</p>

          <div className="flex items-center gap-6">
            <span>Official Catalogue · 25 Models</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#F9E8B2] hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
