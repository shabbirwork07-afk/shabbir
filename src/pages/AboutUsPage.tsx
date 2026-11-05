import React from 'react';
import { ArrowLeft, Sparkles, Gem, ShieldCheck, Scale, ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND_LOGO_SRC, BRAND_TAGLINE, WHATSAPP_DISPLAY, getGeneralWhatsAppLink } from '../data/jewelleryData';

interface AboutUsPageProps {
  onBackToHome: () => void;
  onExploreRings: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onBackToHome, onExploreRings }) => {
  return (
    <div className="bg-[#FDFBF7] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-xs text-[#6A656B]">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1 hover:text-[#0B1E38] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="text-[#0B1E38] font-medium">About Surti Jewels</span>
        </div>

        {/* Hero Banner / Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#D4AF37]/60 bg-[#0A192F] mx-auto mb-3 shadow-md">
            <img src={BRAND_LOGO_SRC} alt="Surti Jewels Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C7335] font-semibold block mb-1">
            {BRAND_TAGLINE}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1E38] font-normal leading-tight">
            The Story Behind Surti Jewels
          </h1>
          <div className="w-14 h-[1.5px] bg-[#D4AF37] mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#242124]/80 leading-relaxed font-normal">
            Specialists in handcrafted gold and diamond rings, built upon verified weights, honest pricing, and master goldsmithing.
          </p>
        </div>

        {/* Split Editorial: Our Approach & The 25 Rings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 bg-[#061220] rounded-2xl p-8 border-2 border-[#D4AF37]/40 text-white shadow-xl space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFDF73] block">
              Atelier Philosophy
            </span>
            <h2 className="font-serif text-3xl text-white font-normal leading-snug">
              Authentic Craftsmanship Without Compromise
            </h2>
            <p className="text-xs sm:text-sm text-[#E2E8F0]/85 leading-relaxed">
              At Surti Jewels, we believe fine jewelry should never be obscured by ambiguous specifications or generic mockups. Every piece in our 25 Signature Ladies Rings catalogue is presented with its certified gross weight in grams and official tag number.
            </p>
            <p className="text-xs sm:text-sm text-[#E2E8F0]/85 leading-relaxed">
              From traditional 22KT auspicious Neli and Kasai rings to contemporary 18KT rose gold solitaires and multi-row diamond pavé settings, our collection is sculpted for comfort, structural balance, and everyday radiance.
            </p>
            <div className="pt-2">
              <button
                onClick={onExploreRings}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#0B1E38] bg-gradient-to-r from-[#F9E8B2] to-[#D4AF37] hover:brightness-110 rounded-md transition-all shadow-md cursor-pointer"
              >
                <span>View The 25 Rings Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-xl p-6 border border-[#EDE1BE] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0B1E38] text-[#FFDF73] flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#0B1E38] font-bold">
                  Exact Weights & Transparent Prices
                </h3>
                <p className="text-xs text-[#242124]/75 mt-1 leading-relaxed">
                  Every ring displays its verified weight in grams (from 1.28 g delicate florals to 6.93 g cocktail jaali rings). No estimations.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#EDE1BE] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0B1E38] text-[#FFDF73] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#0B1E38] font-bold">
                  100% BIS Hallmarked Purity
                </h3>
                <p className="text-xs text-[#242124]/75 mt-1 leading-relaxed">
                  Crafted strictly in certified 22KT yellow gold and 18KT yellow, rose, and diamond settings.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#EDE1BE] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0B1E38] text-[#FFDF73] flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#0B1E38] font-bold">
                  Direct WhatsApp Ordering
                </h3>
                <p className="text-xs text-[#242124]/75 mt-1 leading-relaxed">
                  Quote the exact Tag Label on WhatsApp ({WHATSAPP_DISPLAY}) for instantaneous assistance with ring sizing and ordering.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
