import React from 'react';
import { BookOpen, Sparkles, Bell, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';
import { APP_FEATURES } from '../data/wisdomData';
import { FSMLogo, PirateIcon, FishSkeletonIcon } from './Logo';

export const FeaturesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'book':
        return BookOpen;
      case 'sparkles':
        return Sparkles;
      case 'bell':
        return Bell;
      case 'sliders':
        return Sliders;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="features" className="relative py-24 border-t border-slate-800/80 bg-[#060914]/80 backdrop-blur-md z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            Pastafarian App Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for Curious Minds &amp; Noodly Believers
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Whether you are curious about Pastafarianism, interested in alternative religions and philosophy, or simply looking for something unusual to brighten your day, this app brings the wisdom of the FSM right to your fingertips.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {APP_FEATURES.map((feature, idx) => {
            const Icon = getIcon(feature.iconName);
            return (
              <div
                key={feature.id}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-[#0e162d]/90 to-[#090e1f]/90 border border-slate-800/80 hover:border-orange-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col justify-between"
              >
                {/* Top decorative row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-medium">
                    {feature.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-medium text-orange-300/90">
                    {feature.tagline}
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom perk point */}
                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <span>
                    {idx === 0 && 'Full 178+ page reader with search and zoom capabilities'}
                    {idx === 1 && 'Refreshes every 24 hours with new thoughts and reflections'}
                    {idx === 2 && 'Custom native notification scheduling at your chosen hour'}
                    {idx === 3 && 'Tailored app theme, language selection, and preferences'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community / Philosophy Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-orange-950/40 via-[#101730]/90 to-amber-950/40 border border-orange-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Discover Pastafarianism. Explore the Gospel.
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              &ldquo;May His Noodly Appendage guide you. Ramen!&rdquo; Experience genuine Pastafarian joy, pirate wisdom, and cosmic noodle enlightenment wherever you go.
            </p>
          </div>
          <a
            href="#wisdom"
            className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 flex-shrink-0"
          >
            Try Wisdom Oracle
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
