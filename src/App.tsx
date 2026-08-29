import React, { useState } from 'react';
import { SpaceBackground } from './components/SpaceBackground';
import { Navbar } from './components/Navbar';
import { SideNav } from './components/SideNav';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { WisdomOracle } from './components/WisdomOracle';
import { GospelReader } from './components/GospelReader';
import { AppScreenshots } from './components/AppScreenshots';
import { Footer } from './components/Footer';
import { SupportModal } from './components/SupportModal';
import { StoreModal } from './components/StoreModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const [isSupportOpen, setIsSupportOpen] = useState<boolean>(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<'privacy' | 'terms' | 'support' | null>(null);
  const [storeModalPlatform, setStoreModalPlatform] = useState<string | null>(null);

  const handleOpenStoreModal = (platform: string) => {
    setStoreModalPlatform(platform);
  };

  const handleCloseStoreModal = () => {
    setStoreModalPlatform(null);
  };

  return (
    <div className="relative min-h-screen bg-[#04060e] text-slate-100 selection:bg-orange-500 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Animated Space & Flying Meatballs Background Canvas */}
      <SpaceBackground />

      {/* Floating Header Navigation */}
      <Navbar
        onToggleSideNav={() => setIsSideNavOpen(true)}
        onOpenSupport={() => setIsSupportOpen(true)}
        onOpenDoc={(doc) => setActiveLegalDoc(doc)}
      />

      {/* Side Navigation Bar Drawer */}
      <SideNav
        isOpen={isSideNavOpen}
        onClose={() => setIsSideNavOpen(false)}
        onOpenSupport={() => setIsSupportOpen(true)}
        onOpenDoc={(doc) => setActiveLegalDoc(doc)}
      />

      {/* Main One-Page Content */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenSupport={() => setIsSupportOpen(true)}
          onStoreClick={handleOpenStoreModal}
        />

        {/* 2. Key Features Section */}
        <FeaturesSection />

        {/* 3. Interactive Daily Wisdom Oracle */}
        <WisdomOracle />

        {/* 4. The Gospel Reader Explorer */}
        <GospelReader />

        {/* 5. App Screenshots Showcase */}
        <AppScreenshots />
      </main>

      {/* Footer */}
      <Footer
        onOpenSupport={() => setIsSupportOpen(true)}
        onOpenDoc={(doc) => setActiveLegalDoc(doc)}
      />

      {/* Legal and Support Viewer Modal */}
      <LegalModal
        doc={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
      />

      {/* Support & Contact Dialog Modal */}
      <SupportModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />

      {/* Store Download Modal */}
      <StoreModal
        isOpen={!!storeModalPlatform}
        platform={storeModalPlatform}
        onClose={handleCloseStoreModal}
      />
    </div>
  );
}
