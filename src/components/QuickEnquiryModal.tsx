import React, { useState } from 'react';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_DISPLAY, BRAND_LOGO_SRC, BRAND_TAGLINE, getGeneralWhatsAppLink } from '../data/jewelleryData';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [tagNumber, setTagNumber] = useState('');
  const [interest, setInterest] = useState('Ring Sizing & Availability');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `*RING ENQUIRY — SURTI JEWELS*`,
      `• *Name:* ${name.trim() || 'Valued Patron'}`,
      tagNumber.trim() ? `• *Tag Label ID:* ${tagNumber.trim()}` : null,
      `• *Interest:* ${interest}`,
      notes.trim() ? `• *Message:* "${notes.trim()}"` : null,
      `\nHello Surti Jewels, please provide ring details and ordering steps.`
    ].filter(Boolean).join('\n');

    const waLink = getGeneralWhatsAppLink(message);
    window.open(waLink, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-[#FDFBF7] rounded-xl border-2 border-[#D4AF37]/50 shadow-2xl max-w-md w-full p-6 sm:p-7 relative animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6A656B] hover:text-[#0B1E38] rounded-full hover:bg-[#EDE1BE]/40"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#D4AF37]/60 bg-[#0A192F] shrink-0">
            <img
              src={BRAND_LOGO_SRC}
              alt="Surti Jewels Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-serif text-lg font-bold tracking-wider text-[#0B1E38] block">
              SURTI JEWELS
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#8C7335] block">
              {BRAND_TAGLINE}
            </span>
          </div>
        </div>

        <h3 className="font-serif text-2xl text-[#0B1E38] font-bold mb-1">
          Ring Consultation & Order
        </h3>
        <p className="text-xs text-[#242124]/70 mb-5">
          Direct WhatsApp connection with our goldsmiths ({WHATSAPP_DISPLAY})
        </p>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label htmlFor="quick-modal-name" className="block text-xs font-semibold text-[#0B1E38] mb-1">
              Your Name
            </label>
            <input
              id="quick-modal-name"
              type="text"
              placeholder="e.g. Radhika Shah"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#EDE1BE] rounded-md text-[#242124] focus:outline-none focus:border-[#0B1E38]"
            />
          </div>

          <div>
            <label htmlFor="quick-modal-tag" className="block text-xs font-semibold text-[#0B1E38] mb-1">
              Ring Tag Label ID (e.g. JP00030634)
            </label>
            <input
              id="quick-modal-tag"
              type="text"
              placeholder="Optional tag label from catalogue"
              value={tagNumber}
              onChange={(e) => setTagNumber(e.target.value)}
              className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#EDE1BE] rounded-md text-[#242124] font-mono focus:outline-none focus:border-[#0B1E38]"
            />
          </div>

          <div>
            <label htmlFor="quick-modal-interest" className="block text-xs font-semibold text-[#0B1E38] mb-1">
              Topic
            </label>
            <select
              id="quick-modal-interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#EDE1BE] rounded-md text-[#242124] focus:outline-none focus:border-[#0B1E38]"
            >
              <option value="Ring Sizing & Availability">Ring Sizing & Availability</option>
              <option value="Direct Purchase of Catalog Ring">Direct Purchase of Catalog Ring</option>
              <option value="Custom Ring Resizing">Custom Ring Resizing</option>
              <option value="Other Jewellery Inquiry (Offline Orders)">Other Jewellery Inquiry (Offline Orders)</option>
            </select>
          </div>

          <div>
            <label htmlFor="quick-modal-notes" className="block text-xs font-semibold text-[#0B1E38] mb-1">
              Notes or Questions (Optional)
            </label>
            <textarea
              id="quick-modal-notes"
              rows={2}
              placeholder="Any size preference or questions..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#EDE1BE] rounded-md text-[#242124] focus:outline-none focus:border-[#0B1E38]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-md bg-[#0B1E38] hover:bg-[#071322] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" fill="currentColor" />
              <span>Connect On WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
