import React, { useState, useEffect } from 'react';
import { FSMLogo, PirateIcon } from './Logo';
import { Menu, Sparkles, BookOpen, Download, Mail, HelpCircle, Shield, FileText } from 'lucide-react';

interface NavbarProps {
  onToggleSideNav: () => void;
  onOpenSupport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSideNav, onOpenSupport }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060914]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a
          href="#home"
          className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02]"
        >
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all shadow-md shadow-orange-500/10">
            <FSMLogo className="w-7 h-7" />
          </div>
          <div>
            <div className="font-extrabold text-white text-base sm:text-lg tracking-tight flex items-center gap-1.5">
              <span>Flying Spaghetti</span>
              <span className="text-orange-400">Wisdom</span>
            </div>
            <div className="text-[10px] text-slate-400 font-medium">GlazerDev &bull; 2026</div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-orange-400 transition-colors">
            Features
          </a>
          <a href="#wisdom" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            Wisdom Oracle
          </a>
          <a href="#gospel" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-orange-400" />
            The Gospel
          </a>
          <a href="#screenshots" className="hover:text-orange-400 transition-colors">
            Screenshots
          </a>
          <a
            href="/support.html"
            className="hover:text-orange-400 transition-colors flex items-center gap-1.5 text-orange-300 font-semibold"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Support
          </a>
        </nav>

        {/* Action Controls & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#downloads"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-orange-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Get App</span>
          </a>

          {/* Side Nav Hamburger Trigger */}
          <button
            type="button"
            id="toggle-side-nav-btn"
            onClick={onToggleSideNav}
            aria-label="Open side navigation menu"
            className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white transition-all hover:border-orange-500/50 flex items-center gap-2 group"
          >
            <Menu className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
            <span className="hidden md:inline text-xs font-semibold text-slate-200">Menu</span>
          </button>
        </div>

      </div>
    </header>
  );
};
