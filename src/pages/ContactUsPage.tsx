import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Clock, CheckCircle2, ShieldCheck, Scale } from 'lucide-react';
import { WHATSAPP_DISPLAY, BRAND_LOGO_SRC, BRAND_TAGLINE, getGeneralWhatsAppLink } from '../data/jewelleryData';

interface ContactUsPageProps {
  onBackToHome: () => void;
  onExploreRings: () => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onBackToHome, onExploreRings }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [tagLabel, setTagLabel] = useState('');
  const [inquiryType, setInquiryType] = useState('Ring Sizing & Availability');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = [
      `*RING ENQUIRY — SURTI JEWELS*`,
      `• *Client Name:* ${name.trim() || 'Valued Patron'}`,
      `• *Phone / WhatsApp:* ${phone.trim() || 'Not specified'}`,
      tagLabel.trim() ? `• *Ring Tag Label:* ${tagLabel.trim()}` : null,
      `• *Purpose:* ${inquiryType}`,
      `• *Message:* "${message.trim() || 'I would like to inquire about this ring.'}"`,
      `\nPlease assist me with availability, current daily gold rate, and ring size.`
    ].filter(Boolean).join('\n');

    const waUrl = getGeneralWhatsAppLink(formattedMessage);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

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
          <span className="text-[#0B1E38] font-medium">Contact & Workshop</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#D4AF37]/60 bg-[#0A192F] mx-auto mb-3 shadow-md">
            <img src={BRAND_LOGO_SRC} alt="Surti Jewels Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C7335] font-semibold block mb-1">
            {BRAND_TAGLINE}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1E38] font-normal leading-tight">
            Contact Surti Jewels
          </h1>
          <div className="w-14 h-[1.5px] bg-[#D4AF37] mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#242124]/80 leading-relaxed font-normal">
            Direct workshop contact for our 25 Signature Ladies Rings catalogue. Quote any Tag Label on WhatsApp for instantaneous size guidance, current gold rate confirmation, and delivery details.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Direct WhatsApp Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#0A192F] to-[#061220] text-white rounded-xl border-2 border-[#D4AF37]/50 p-6 sm:p-8 shadow-xl space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#D4AF37]/30">
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-[#D4AF37]/60 bg-[#061220] shrink-0">
                  <img src={BRAND_LOGO_SRC} alt="Surti Jewels Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-wider text-[#FFDF73]">
                    SURTI JEWELS
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-[#E5C07B] font-light block">
                    Direct Artisan Channel
                  </span>
                </div>
              </div>

              {/* Contact info */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/40">
                    <MessageCircle className="w-5 h-5" fill="currentColor" />
                  </div>
                  <div>
                    <span className="text-[#A0AEC0] text-[10px] uppercase tracking-wider block font-mono">
                      Primary Contact (WhatsApp)
                    </span>
                    <a
                      href={getGeneralWhatsAppLink('Hello Surti Jewels, I would like to inquire about your 25 Signature Rings.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#FFDF73] hover:text-white transition-colors text-lg"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                    <p className="text-xs text-[#CBD5E1] mt-0.5">
                      Fastest response for ring orders, size checks & quotes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <div className="w-10 h-10 rounded-md bg-white/5 text-[#FFDF73] flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[#A0AEC0] text-[10px] uppercase tracking-wider block font-mono">
                      Workshop Hours
                    </span>
                    <span className="font-semibold text-white">
                      Monday – Saturday: 10:00 AM – 7:30 PM IST
                    </span>
                    <p className="text-xs text-[#CBD5E1] mt-0.5">
                      WhatsApp inquiries sent outside hours are responded to promptly first thing the next morning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="pt-2">
                <a
                  href={getGeneralWhatsAppLink('Hello Surti Jewels, I would like to order/inquire about a ring.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-md bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" fill="currentColor" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Quick Sizing Box */}
            <div className="bg-[#F8F4E9] rounded-xl border border-[#EDE1BE] p-6 space-y-2 text-xs text-[#242124]">
              <span className="font-bold text-[#0B1E38] block text-sm">Need Help With Ring Sizing?</span>
              <p className="text-[#242124]/75 leading-relaxed">
                If you aren't sure about your exact Indian ring size, mention your approximate size or send a photo of an existing ring on WhatsApp, and our master goldsmiths will guide you with accurate millimeter measurements.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#EDE1BE] p-6 sm:p-10 shadow-xs">
            <div className="mb-6">
              <h3 className="font-serif text-2xl text-[#0B1E38] font-bold">
                Send Ring Enquiry
              </h3>
              <p className="text-xs text-[#242124]/70 mt-1">
                Enter your details and ring tag label below. Submitting will format your query and open WhatsApp directly with our workshop team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-[#0B1E38] mb-1">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Radhika Patel"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FDFBF7] border border-[#EDE1BE] rounded-md text-[#242124] focus:outline-none focus:border-[#0B1E38]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#0B1E38] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="e.g. +91 94438 94638"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FDFBF7] border border-[#EDE1BE] rounded-md text-[#242124] focus:outline-none focus:border-[#0B1E38]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-tag" className="block text-xs font-semibold text-[#0B1E38] mb-1">
                    Ring Tag Label (Optional)
                  </label>
                  <input
                    id="contact-tag"
                    type="text"
                    placeholder="e.g. JP00030634 or JP00080763"
                    value={tagLabel}
                    onChange={(e) => setTagLabel(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FDFBF7] border border-[#EDE1BE] rounded-md text-[#242124] font-mono focus:outline-none focus:border-[#0B1E38]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-purpose" className="block text-xs font-semibold text-[#0B1E38] mb-1">
                    Enquiry Subject
                  </label>
                  <select
                    id="contact-purpose"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FDFBF7] border border-[#EDE1BE] rounded-md text-[#242124] focus:outline-none focus:border-[#0B1E38]"
                  >
                    <option value="Ring Sizing & Availability">Ring Sizing & Availability</option>
                    <option value="Direct Purchase Consultation">Direct Purchase Consultation</option>
                    <option value="Custom Resizing Request">Custom Resizing Request</option>
                    <option value="Daily Gold Rate & Price Check">Daily Gold Rate & Price Check</option>
                    <option value="Other Jewellery Bespoke Inquiry">Other Jewellery Bespoke Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-msg" className="block text-xs font-semibold text-[#0B1E38] mb-1">
                  Your Message
                </label>
                <textarea
                  id="contact-msg"
                  rows={4}
                  placeholder="Ask any questions regarding ring sizing, hallmark certification, or delivery..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FDFBF7] border border-[#EDE1BE] rounded-md text-[#242124] focus:outline-none focus:border-[#0B1E38]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-[#0B1E38] bg-gradient-to-r from-[#F9E8B2] via-[#FFDF73] to-[#D4AF37] hover:brightness-110 rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#0B1E38]" fill="currentColor" />
                <span>Submit Enquiry via WhatsApp</span>
              </button>

              {submitted && (
                <div className="p-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-md text-xs text-[#242124] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>WhatsApp opened with your ring enquiry formatted and ready to send!</span>
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};
