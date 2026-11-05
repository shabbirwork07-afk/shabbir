import React, { useState } from 'react';
import { Info, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { UNAVAILABLE_JEWEL_TYPES, WHATSAPP_DISPLAY, getGeneralWhatsAppLink } from '../data/jewelleryData';
import { UnavailableJewelType } from '../types';

export const UnavailableJewelleryNotice: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<UnavailableJewelType | null>(null);

  const handleInquireCategory = (catName: string) => {
    const text = `Hello Surti Jewels, I see that ${catName} are not available in your online catalogue. Could you let me know if you can craft them custom or if they are available in your showroom?`;
    window.open(getGeneralWhatsAppLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-14 bg-[#F8F4E9]/60 border-y border-[#EDE1BE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Notice */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EDE1BE] text-xs font-semibold text-[#8C7335] uppercase tracking-wider mb-2">
            <Info className="w-3.5 h-3.5" />
            <span>Catalogue Availability Notice</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1E38] font-normal leading-tight">
            Other Jewellery Categories
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto my-3" />
          <p className="text-xs sm:text-sm text-[#242124]/75 leading-relaxed font-normal">
            Our digital catalogue is exclusively dedicated to our <strong>25 Signature Ladies Rings</strong>. All other jewellery categories are currently not available online and are crafted exclusively via bespoke custom commission.
          </p>
        </div>

        {/* Unavailable categories grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {UNAVAILABLE_JEWEL_TYPES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className="bg-white rounded-lg p-4 border border-[#EDE1BE] shadow-2xs hover:border-[#D4AF37] transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <span className="inline-block text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 mb-2 font-medium">
                  Not Online
                </span>
                <h3 className="font-serif text-sm sm:text-base text-[#0B1E38] font-semibold group-hover:text-[#8C7335] transition-colors leading-snug">
                  {cat.name}
                </h3>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#EDE1BE]/70 flex items-center justify-between text-[10px] text-[#6A656B]">
                <span>Bespoke Only</span>
                <span className="text-[#8C7335] font-semibold group-hover:underline">Inquire</span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Category Details Modal/Popup */}
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-[#FDFBF7] rounded-xl border border-[#EDE1BE] p-6 max-w-md w-full shadow-2xl relative">
              <span className="text-[10px] font-mono uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded font-semibold block w-fit mb-2">
                Currently Not Available Online
              </span>

              <h3 className="font-serif text-2xl text-[#0B1E38] font-normal mb-2">
                {selectedCategory.name}
              </h3>

              <p className="text-xs text-[#242124]/80 leading-relaxed mb-6">
                {selectedCategory.note}
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex-1 py-2.5 px-4 text-xs font-semibold text-[#0B1E38] bg-white border border-[#EDE1BE] rounded-md hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>

                <button
                  onClick={() => handleInquireCategory(selectedCategory.name)}
                  className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-[#0B1E38] hover:bg-[#071322] rounded-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" fill="currentColor" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
