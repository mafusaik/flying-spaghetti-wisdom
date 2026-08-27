import React from 'react';
import { FSMLogo, AppStoreButton, GooglePlayButton, PirateIcon } from './Logo';
import { PhoneMockup } from './PhoneMockup';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Star, Compass } from 'lucide-react';

interface HeroSectionProps {
  onOpenSupport: () => void;
  onStoreClick: (platform: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenSupport,
  onStoreClick,
}) => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & Downloads */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left z-10">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Pastafarian App by GlazerDev</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Fill Yourself with the{' '}
                <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                  Wisdom of the FSM
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Explore the Gospel of the Flying Spaghetti Monster and discover your daily dose of Pastafarian wisdom, humor, and unconventional philosophy.
              </p>
            </div>

            {/* Key Quote callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0d1428]/90 to-[#141b33]/80 border border-slate-800/80 backdrop-blur-md shadow-xl max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start gap-3 text-left">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 flex-shrink-0 mt-0.5">
                  <FSMLogo className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-medium text-white italic">
                    &ldquo;Don't fear the unknown. It may be pasta.&rdquo;
                  </p>
                  <p className="text-xs text-orange-400 font-semibold mt-1">
                    May His Noodly Appendage guide you. Ramen!
                  </p>
                </div>
              </div>
            </div>

            {/* Store Download Buttons */}
            <div id="downloads" className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <AppStoreButton onClick={() => onStoreClick('App Store')} />
                <GooglePlayButton href="https://play.google.com/store/apps/details?id=com.glazer.flying.spaghetti.monster.gospel.bible" />
              </div>
              <p className="text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 inline" />
                Free download • Offline reading • No tracking or ads
              </p>
            </div>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80 max-w-2xl mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-[#090e1f]/60 border border-slate-800/60 text-center lg:text-left">
                <div className="text-base font-bold text-white">The Gospel</div>
                <div className="text-[11px] text-slate-400">178+ sacred pages</div>
              </div>
              <div className="p-3 rounded-xl bg-[#090e1f]/60 border border-slate-800/60 text-center lg:text-left">
                <div className="text-base font-bold text-orange-400">Daily Advice</div>
                <div className="text-[11px] text-slate-400">Pastafarian reflections</div>
              </div>
              <div className="p-3 rounded-xl bg-[#090e1f]/60 border border-slate-800/60 text-center lg:text-left">
                <div className="text-base font-bold text-amber-400">Reminders</div>
                <div className="text-[11px] text-slate-400">Scheduled notifications</div>
              </div>
              <div className="p-3 rounded-xl bg-[#090e1f]/60 border border-slate-800/60 text-center lg:text-left">
                <div className="text-base font-bold text-white">GlazerDev</div>
                <div className="text-[11px] text-slate-400">&copy; 2026 Developer</div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <div className="w-full max-w-sm">
              <div className="text-center mb-3">
                <span className="text-[11px] text-orange-400/80 uppercase font-semibold tracking-wider flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3 h-3" /> Live Interactive Preview
                </span>
              </div>
              <PhoneMockup />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
