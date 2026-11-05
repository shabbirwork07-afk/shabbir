import React, { useState } from 'react';
import { PageView, RingProduct } from './types';
import { Navbar } from './components/Navbar';
import { OpeningIntroAnimation } from './components/OpeningIntroAnimation';
import { LandscapeHeroBanner } from './components/LandscapeHeroBanner';
import { RingsCatalogueShowcase } from './components/RingsCatalogueShowcase';
import { MidLandscapeBanner } from './components/MidLandscapeBanner';
import { UnavailableJewelleryNotice } from './components/UnavailableJewelleryNotice';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuickEnquiryModal } from './components/QuickEnquiryModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

// Pages
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [showIntroAnimation, setShowIntroAnimation] = useState(true);
  const [selectedRing, setSelectedRing] = useState<RingProduct | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const navigateTo = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayAnimation = () => {
    setShowIntroAnimation(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#242124] antialiased">
      {/* 1. Opening Brand Intro Animation */}
      {showIntroAnimation && (
        <OpeningIntroAnimation onComplete={() => setShowIntroAnimation(false)} />
      )}

      {/* 2. Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenEnquiryModal={() => setIsEnquiryModalOpen(true)}
        onReplayAnimation={handleReplayAnimation}
      />

      {/* 3. Main Views */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Landscape Hero Banner (Real jewellery, No fake slideshows) */}
            <LandscapeHeroBanner
              onExploreRings={() => {
                const el = document.getElementById('rings-catalogue');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigateTo('rings');
                }
              }}
            />

            {/* The 25 Signature Ladies Rings Catalogue Showcase */}
            <RingsCatalogueShowcase onSelectRing={(ring) => setSelectedRing(ring)} />

            {/* Mid-Page Landscape Promotional Banner */}
            <MidLandscapeBanner />

            {/* Unavailable Jewellery Notice (Other types clearly marked not available) */}
            <UnavailableJewelleryNotice />
          </>
        )}

        {currentPage === 'rings' && (
          <div className="py-6">
            <RingsCatalogueShowcase onSelectRing={(ring) => setSelectedRing(ring)} />
            <UnavailableJewelleryNotice />
          </div>
        )}

        {currentPage === 'about' && (
          <AboutUsPage
            onBackToHome={() => navigateTo('home')}
            onExploreRings={() => navigateTo('rings')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactUsPage
            onBackToHome={() => navigateTo('home')}
            onExploreRings={() => navigateTo('rings')}
          />
        )}
      </main>

      {/* 4. Footer */}
      <Footer
        onNavigate={navigateTo}
        onReplayAnimation={handleReplayAnimation}
      />

      {/* 5. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 6. Ring Details Modal */}
      <ProductDetailModal
        ring={selectedRing}
        onClose={() => setSelectedRing(null)}
      />

      {/* 7. Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
}
