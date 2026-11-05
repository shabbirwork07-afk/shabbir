import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PageView } from '../types';
import { WHATSAPP_DISPLAY, BRAND_LOGO_SRC, BRAND_TAGLINE, getGeneralWhatsAppLink } from '../data/jewelleryData';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenEnquiryModal: () => void;
  onReplayAnimation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquiryModal,
  onReplayAnimation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: '25 Rings Collection', page: 'rings' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A192F]/95 backdrop-blur-md shadow-md border-b border-[#D4AF37]/40 py-2.5'
            : 'bg-[#0A192F] border-b border-[#D4AF37]/30 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          
          {/* Zone 1: Official Logo & Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            aria-label="Surti Jewels Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-[#D4AF37]/60 shadow-xs shrink-0 transition-transform duration-300 group-hover:scale-105 bg-[#061220]">
              <img
                src={BRAND_LOGO_SRC}
                alt="Surti Jewels Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F9E8B2] via-[#FFDF73] to-[#D4AF37] leading-tight">
                SURTI JEWELS
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#E5C07B] font-light hidden sm:block">
                {BRAND_TAGLINE}
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-white/90">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer hover:text-[#FFDF73] ${
                    isActive ? 'text-[#FFDF73] font-semibold' : 'text-white/80'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] rounded-full" />
                  )}
                </button>
              );
            })}

            {/* Replay intro animation button */}
            <button
              onClick={onReplayAnimation}
              className="text-[11px] font-sans tracking-wider uppercase text-[#E5C07B]/70 hover:text-[#FFDF73] flex items-center gap-1 cursor-pointer transition-colors"
              title="Replay Brand Intro Animation"
            >
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Intro</span>
            </button>
          </nav>

          {/* Zone 3: Actions (WhatsApp & Enquiry CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* WhatsApp direct contact */}
            <a
              href={getGeneralWhatsAppLink('Hello Surti Jewels, I would like to inquire about your 25 Signature Rings.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-white bg-white/10 border border-[#D4AF37]/50 rounded-md hover:bg-white/15 transition-all duration-200 whitespace-nowrap"
              title={`WhatsApp ${WHATSAPP_DISPLAY}`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" fill="currentColor" />
              <span className="hidden xl:inline">{WHATSAPP_DISPLAY}</span>
              <span className="xl:hidden">WhatsApp</span>
            </a>

            {/* Clear Enquiry CTA */}
            <button
              onClick={onOpenEnquiryModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-[#0B1E38] bg-gradient-to-r from-[#F9E8B2] via-[#FFDF73] to-[#D4AF37] hover:brightness-110 rounded-md shadow-xs transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0B1E38]" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#0A192F] text-white shadow-2xl border-l border-[#D4AF37]/40 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/30">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg overflow-hidden border border-[#D4AF37]/60 bg-[#061220]">
                    <img
                      src={BRAND_LOGO_SRC}
                      alt="Surti Jewels Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-serif text-lg font-bold tracking-wider text-[#FFDF73] block">
                      SURTI JEWELS
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#E5C07B] block">
                      {BRAND_TAGLINE}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-white/80 hover:text-white rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.page;
                  return (
                    <button
                      key={link.page}
                      onClick={() => handleNavClick(link.page)}
                      className={`text-left px-3.5 py-2.5 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-gradient-to-r from-[#F9E8B2] via-[#FFDF73] to-[#D4AF37] text-[#0B1E38] font-bold'
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReplayAnimation();
                  }}
                  className="text-left px-3.5 py-2.5 rounded-md text-sm font-medium text-[#E5C07B] hover:bg-white/5 flex items-center gap-2 mt-2 border-t border-[#D4AF37]/20 pt-4"
                >
                  <Sparkles className="w-4 h-4 text-[#FFDF73]" />
                  <span>Replay Brand Animation</span>
                </button>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#D4AF37]/30 flex flex-col gap-3">
              <a
                href={getGeneralWhatsAppLink('Hello Surti Jewels, I would like to inquire about your 25 Signature Rings.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#25D366] rounded-md shadow-md hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-4 h-4" fill="currentColor" />
                Chat on WhatsApp (+91 9443894638)
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiryModal();
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#0B1E38] bg-gradient-to-r from-[#F9E8B2] to-[#D4AF37] rounded-md transition-colors"
              >
                Direct Tag Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
