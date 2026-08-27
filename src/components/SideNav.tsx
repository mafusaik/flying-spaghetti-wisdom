import React from 'react';
import {
  X,
  Compass,
  Sparkles,
  BookOpen,
  Smartphone,
  HelpCircle,
  Shield,
  FileText,
  Mail,
  Download,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { FSMLogo, PirateIcon, FishSkeletonIcon } from './Logo';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSupport: () => void;
}

export const SideNav: React.FC<SideNavProps> = ({
  isOpen,
  onClose,
  onOpenSupport,
}) => {
  const navItems = [
    { label: 'Home & Overview', href: '#home', icon: Compass },
    { label: 'Key Features', href: '#features', icon: Sparkles },
    { label: 'Daily Wisdom Oracle', href: '#wisdom', icon: Sparkles },
    { label: 'The Gospel Book', href: '#gospel', icon: BookOpen },
    { label: 'App Screenshots', href: '#screenshots', icon: Smartphone },
  ];

  const legalItems = [
    { label: 'Support & Inquiries', href: '/support.html', icon: HelpCircle, isSpecial: true },
    { label: 'Privacy Policy', href: '/privacy.html', icon: Shield, isExternal: true },
    { label: 'Terms of Service', href: '/terms.html', icon: FileText, isExternal: true },
  ];

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          id="sidenav-backdrop"
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity animate-fade-in"
        />
      )}

      {/* Side Drawer */}
      <aside
        id="side-navigation-drawer"
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#090d1c]/95 border-l border-slate-800/90 shadow-2xl backdrop-blur-xl z-50 flex flex-col transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <FSMLogo className="w-7 h-7" />
            </div>
            <div>
              <h2 className="font-bold text-white text-base tracking-tight leading-tight">
                Flying Spaghetti
              </h2>
              <p className="text-xs text-orange-400 font-medium">Wisdom of the FSM</p>
            </div>
          </div>
          <button
            id="close-sidenav-button"
            onClick={onClose}
            aria-label="Close navigation"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3">
              Explore App
            </span>
            <nav className="mt-2 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-orange-500/10 hover:border-orange-500/20 border border-transparent transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-orange-400 transition-colors" />
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Support and Legal Section */}
          <div className="pt-4 border-t border-slate-800/80">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3">
              Support & Legal
            </span>
            <div className="mt-2 space-y-1">
              {legalItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      if (item.label === 'Support & Inquiries') {
                        onClose();
                      }
                    }}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-300 hover:text-white transition-all group ${
                      item.isSpecial
                        ? 'bg-orange-500/10 border border-orange-500/30 text-orange-300 font-semibold'
                        : 'hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${item.isSpecial ? 'text-orange-400' : 'text-slate-400'} group-hover:scale-110 transition-transform`} />
                      <span className="text-sm">{item.label}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Direct Email Card */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-400">
              <Mail className="w-3.5 h-3.5" /> Direct Developer Email
            </div>
            <p className="text-xs text-slate-300">
              For support, feedback, or blessings:
            </p>
            <a
              href="mailto:glazer.dev@gmail.com"
              className="text-xs font-medium text-white hover:text-orange-400 underline block break-all"
            >
              glazer.dev@gmail.com
            </a>
          </div>

          {/* Pastafarian icons showcase */}
          <div className="p-3 rounded-xl bg-[#0e1628]/60 border border-slate-800/60 flex items-center justify-around text-slate-500">
            <div className="text-center" title="Pastafarian Pirate">
              <PirateIcon className="w-8 h-8 mx-auto text-slate-400 hover:text-orange-400 transition-colors" />
              <span className="text-[10px] block mt-1">Pirate</span>
            </div>
            <div className="text-center" title="Flying Spaghetti Monster">
              <FSMLogo className="w-8 h-8 mx-auto text-orange-400 hover:scale-110 transition-transform" />
              <span className="text-[10px] block mt-1 text-orange-400">FSM</span>
            </div>
            <div className="text-center" title="Pastafarian Fish Skeleton">
              <FishSkeletonIcon className="w-8 h-8 mx-auto text-slate-400 hover:text-orange-400 transition-colors" />
              <span className="text-[10px] block mt-1">Fish</span>
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-6 border-t border-slate-800 bg-[#070a14]">
          <a
            href="#downloads"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold text-sm shadow-lg shadow-orange-500/25 transition-all"
          >
            <Download className="w-4 h-4" /> Download App
          </a>
          <p className="text-[11px] text-center text-slate-400 mt-3">
            &copy; 2026 GlazerDev. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
};
