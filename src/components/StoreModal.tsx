import React, { useState } from 'react';
import { X, Download, CheckCircle2, Star, Sparkles, Smartphone, Mail, ShieldCheck } from 'lucide-react';
import { FSMLogo, AppStoreButton, GooglePlayButton } from './Logo';

interface StoreModalProps {
  isOpen: boolean;
  platform: string | null;
  onClose: () => void;
}

export const StoreModal: React.FC<StoreModalProps> = ({ isOpen, platform, onClose }) => {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  if (!isOpen) return null;

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    setSignedUp(true);
    setTimeout(() => {
      setSignedUp(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-[#0d1428] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6 text-slate-200 animate-fade-in text-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Title */}
        <div className="space-y-3 pt-2">
          <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 mx-auto flex items-center justify-center text-orange-400 shadow-lg shadow-orange-500/10">
            <FSMLogo className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Download for {platform || 'Mobile'}
          </h3>
          <p className="text-sm text-slate-300">
            Flying Spaghetti Wisdom by GlazerDev is prepared for distribution on the official {platform || 'App'} store.
          </p>
        </div>

        {/* Features list */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left text-xs text-slate-300 space-y-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Free &amp; Private (No Ads, No Tracking)</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>Complete 178-page Gospel + Daily Wisdom Oracle</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-amber-400" />
            <span>Offline-Ready with Scheduled Native Notifications</span>
          </div>
        </div>

        {/* Action Form */}
        {signedUp ? (
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs">
            <CheckCircle2 className="w-6 h-6 mx-auto mb-1 text-emerald-400" />
            Thank you! You will be notified of updates and releases. May His Noodly Appendage guide you!
          </div>
        ) : (
          <form onSubmit={handleNotify} className="space-y-3">
            <div className="text-xs text-slate-400">
              Enter your email to receive direct early-access download APKs or TestFlight beta links:
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                required
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                placeholder="your.email@domain.com"
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-colors"
              >
                Notify Me
              </button>
            </div>
          </form>
        )}

        <div className="text-[11px] text-slate-500">
          Developer contact: <a href="mailto:glazer.dev@gmail.com" className="text-orange-400 hover:underline">glazer.dev@gmail.com</a>
        </div>

      </div>
    </div>
  );
};
