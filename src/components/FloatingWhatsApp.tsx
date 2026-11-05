import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_DISPLAY, getGeneralWhatsAppLink } from '../data/jewelleryData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultUrl = getGeneralWhatsAppLink(
    'Hello Surti Jewels, I am exploring your 25 Signature Ladies Rings catalogue and have a question.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Mini Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-[#EDE1BE] shadow-md text-xs text-[#242124] animate-in fade-in slide-in-from-right-2">
          <span>Chat directly on WhatsApp ({WHATSAPP_DISPLAY})</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#6A656B] hover:text-[#242124]"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={defaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#281448]"
        aria-label="Chat on WhatsApp with Surti Jewels"
        title={`Chat on WhatsApp (${WHATSAPP_DISPLAY})`}
      >
        <MessageCircle className="w-7 h-7" fill="currentColor" />
        <span className="sr-only">Chat on WhatsApp with Surti Jewels</span>
      </a>
    </div>
  );
};
