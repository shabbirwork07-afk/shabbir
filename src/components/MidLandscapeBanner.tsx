import React from 'react';
import { MessageCircle, ShieldCheck, Scale, Award } from 'lucide-react';
import { WHATSAPP_DISPLAY, getGeneralWhatsAppLink } from '../data/jewelleryData';

export const MidLandscapeBanner: React.FC = () => {
  const customOrderWhatsAppUrl = getGeneralWhatsAppLink(
    'Hello Surti Jewels, I would like to inquire about ring sizing and placing an order from the 25 Signature Rings catalogue.'
  );

  return (
    <section className="py-10 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#071526] via-[#0E2442] to-[#071526] text-white border-2 border-[#D4AF37]/50 shadow-xl p-8 sm:p-12">
          {/* Subtle gold ornamental accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.2)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#FFDF73] text-xs uppercase tracking-widest font-mono">
                <span>Authentic Catalog Standards</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal leading-tight">
                Authentic Weights. Transparent Pricing. Certified Craftsmanship.
              </h2>

              <p className="text-xs sm:text-sm text-[#E2E8F0]/80 leading-relaxed max-w-2xl font-normal">
                Every ring in our 25-piece collection is listed with its exact net weight in grams and official tag label. We believe in complete transparency with no hidden markups or generic mockups.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-[#F3E5AB]">
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-[#FFDF73] shrink-0" />
                  <span>100% BIS Hallmarked</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Scale className="w-4 h-4 text-[#FFDF73] shrink-0" />
                  <span>Certified Net Weights</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#FFDF73] shrink-0" />
                  <span>Direct WhatsApp Ordering</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center gap-3">
              <a
                href={customOrderWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0B1E38] bg-gradient-to-r from-[#F9E8B2] via-[#FFDF73] to-[#D4AF37] hover:brightness-110 rounded-md shadow-md transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-[#0B1E38]" fill="currentColor" />
                <span>Order via WhatsApp</span>
              </a>

              <p className="text-[11px] text-center text-[#E5C07B]/70">
                Mention the Tag Label for immediate assistance ({WHATSAPP_DISPLAY})
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
