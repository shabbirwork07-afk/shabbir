import React, { useState } from 'react';
import { X, MessageCircle, Scale, ShieldCheck, Check, ZoomIn, Award } from 'lucide-react';
import { RingProduct } from '../types';
import { WHATSAPP_DISPLAY, formatInr, getRingWhatsAppLink, BRAND_LOGO_SRC } from '../data/jewelleryData';

interface ProductDetailModalProps {
  ring: RingProduct | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ ring, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!ring) return null;

  const whatsappUrl = getRingWhatsAppLink(ring);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div
        className="bg-[#FDFBF7] rounded-xl border-2 border-[#D4AF37]/50 shadow-2xl max-w-3xl w-full overflow-hidden relative my-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ring-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#242124] hover:text-[#0B1E38] bg-white/90 hover:bg-white rounded-full border border-[#EDE1BE] transition-colors cursor-pointer shadow-xs"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
          {/* Left: Product Image on Black Velvet Backdrop */}
          <div className="md:col-span-6 bg-black relative min-h-[320px] md:min-h-full flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#EDE1BE]">
            <div
              className={`relative w-full h-full max-h-[360px] flex items-center justify-center cursor-zoom-in ${
                isZoomed ? 'scale-125 transition-transform duration-300' : ''
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={ring.image}
                alt={ring.name}
                className="max-h-[320px] max-w-full object-contain"
              />
            </div>

            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-xs border border-[#D4AF37]/40 text-[11px] font-mono text-[#FFDF73] flex items-center gap-1.5 cursor-pointer"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>{isZoomed ? 'Reset Zoom' : 'Click to Zoom'}</span>
            </button>

            {/* Tag Badge */}
            <div className="absolute top-4 left-4 bg-black/80 border border-[#D4AF37]/50 text-[#FFDF73] font-mono text-xs px-2.5 py-1 rounded">
              {ring.tagLabel}
            </div>
          </div>

          {/* Right: Specifications & WhatsApp Order CTA */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs uppercase tracking-widest text-[#8C7335] font-semibold">
                    {ring.purity} · {ring.goldType}
                  </span>
                  <span className="text-[#8C7335]">·</span>
                  <span className="text-xs text-[#6A656B]">{ring.ringType}</span>
                </div>

                <h3
                  id="ring-modal-title"
                  className="font-serif text-2xl text-[#0B1E38] font-bold leading-snug"
                >
                  {ring.name}
                </h3>
              </div>

              {/* Price & Weight Card */}
              <div className="p-4 rounded-lg bg-[#F8F4E9] border border-[#EDE1BE] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#6A656B] uppercase tracking-wider font-medium">Listed Price:</span>
                  <span className="font-serif text-2xl font-bold text-[#0B1E38]">
                    {formatInr(ring.priceInr)}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#EDE1BE]/70">
                  <span className="text-xs text-[#6A656B] uppercase tracking-wider font-medium flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-[#8C7335]" /> Net Gross Weight:
                  </span>
                  <span className="text-sm font-semibold text-[#242124]">
                    {ring.weightGrams} grams
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#EDE1BE]/70 text-xs">
                  <span className="text-[#6A656B] uppercase tracking-wider font-medium">Tag Label ID:</span>
                  <span className="font-mono text-xs font-semibold text-[#8C7335]">
                    {ring.tagLabel}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#0B1E38] font-bold mb-1">
                  Design Narrative
                </h4>
                <p className="text-xs text-[#242124]/80 leading-relaxed font-normal">
                  {ring.description}
                </p>
              </div>

              {/* Purity & Sizing Note */}
              <div className="space-y-1.5 text-xs text-[#242124]/80 pt-1">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#8C7335] shrink-0" />
                  <span>100% BIS Hallmarked authentic gold jewelry</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#8C7335] shrink-0" />
                  <span>Custom finger sizing tailored upon order confirmation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#8C7335] shrink-0" />
                  <span>Inquire for current daily gold rate adjustments</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Ordering */}
            <div className="pt-6 mt-6 border-t border-[#EDE1BE] flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1E38] hover:bg-[#071322] rounded-md shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" fill="currentColor" />
                <span>Enquire / Order on WhatsApp</span>
              </a>

              <p className="text-[11px] text-center text-[#6A656B]">
                Direct workshop assistance on WhatsApp: {WHATSAPP_DISPLAY}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
