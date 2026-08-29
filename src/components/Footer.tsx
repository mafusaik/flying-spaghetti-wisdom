import React from 'react';
import { FSMLogo, PirateIcon, FishSkeletonIcon } from './Logo';
import { Mail, Shield, FileText, HelpCircle, Heart } from 'lucide-react';

interface FooterProps {
  onOpenSupport: () => void;
  onOpenDoc?: (doc: 'privacy' | 'terms' | 'support') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSupport, onOpenDoc }) => {
  return (
    <footer className="relative border-t border-slate-800/80 bg-[#04060e] text-slate-400 py-16 z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <FSMLogo className="w-7 h-7" />
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight">
                  Flying Spaghetti Wisdom
                </span>
                <p className="text-xs text-orange-400">By GlazerDev</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Discover Pastafarianism. Explore the Gospel. Receive your daily wisdom. May His Noodly Appendage guide you. Ramen!
            </p>
            <div className="flex items-center gap-3 text-slate-500">
              <PirateIcon className="w-6 h-6 hover:text-orange-400 transition-colors" />
              <FishSkeletonIcon className="w-6 h-6 hover:text-orange-400 transition-colors" />
              <span className="text-xs font-mono text-slate-400">Pastafarian Canon 2026</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home &amp; Overview
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#wisdom" className="hover:text-white transition-colors">
                  Daily Wisdom Oracle
                </a>
              </li>
              <li>
                <a href="#gospel" className="hover:text-white transition-colors">
                  The Gospel Reader
                </a>
              </li>
              <li>
                <a href="#screenshots" className="hover:text-white transition-colors">
                  App Screenshots
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Legal &amp; Developer Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenDoc ? onOpenDoc('privacy') : null}
                  className="flex items-center gap-2 hover:text-orange-400 transition-colors text-left cursor-pointer"
                >
                  <Shield className="w-4 h-4 text-orange-400" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenDoc ? onOpenDoc('terms') : null}
                  className="flex items-center gap-2 hover:text-orange-400 transition-colors text-left cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-orange-400" />
                  <span>Terms of Service</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenDoc ? onOpenDoc('support') : onOpenSupport()}
                  className="flex items-center gap-2 hover:text-orange-400 transition-colors text-left cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4 text-orange-400" />
                  <span>Support Page</span>
                </button>
              </li>
              <li>
                <a
                  href="mailto:glazer.dev@gmail.com"
                  className="flex items-center gap-2 hover:text-orange-400 transition-colors text-slate-300 font-medium"
                >
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span>glazer.dev@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p className="font-medium text-slate-200">
            &copy; 2026 GlazerDev. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenDoc ? onOpenDoc('privacy') : null}
              className="text-slate-300 hover:text-orange-400 transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenDoc ? onOpenDoc('terms') : null}
              className="text-slate-300 hover:text-orange-400 transition-colors cursor-pointer"
            >
              Terms
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenDoc ? onOpenDoc('support') : onOpenSupport()}
              className="text-slate-300 hover:text-orange-400 transition-colors cursor-pointer"
            >
              Support
            </button>
            <span>•</span>
            <span className="text-orange-400 font-semibold">Ramen!</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
