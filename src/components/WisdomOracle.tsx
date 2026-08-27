import React, { useState } from 'react';
import { WISDOM_QUOTES } from '../data/wisdomData';
import { FSMLogo, PirateIcon, FishSkeletonIcon } from './Logo';
import { Sparkles, RefreshCw, Copy, Check, Share2, Quote, BookMarked } from 'lucide-react';

export const WisdomOracle: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  const filteredQuotes =
    selectedCategory === 'all'
      ? WISDOM_QUOTES
      : WISDOM_QUOTES.filter((q) => q.category === selectedCategory);

  const currentQuote =
    filteredQuotes[currentIndex % (filteredQuotes.length || 1)] || WISDOM_QUOTES[0];

  const handleNextQuote = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredQuotes.length);
      setIsSpinning(false);
    }, 250);
  };

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`"${currentQuote.text}" — Flying Spaghetti Wisdom`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="wisdom" className="relative py-24 border-t border-slate-800/80 bg-[#050711]/90 backdrop-blur-md z-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Daily Advice
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Consult the Noodly Oracle
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Click below to receive authentic guidance, wisdom, and reflections straight from His Noodliness.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Wisdom' },
            { id: 'wisdom', label: 'Daily Thoughts' },
            { id: 'gospel', label: "I'd Really Rather You Didn't" },
            { id: 'proverb', label: 'Piratical & Proverbial' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 ring-1 ring-orange-400'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Interactive Oracle Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0e162b] to-[#080d1e] border border-orange-500/30 p-8 sm:p-12 shadow-2xl overflow-hidden">
          {/* Background Watermark FSM Logo */}
          <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none text-orange-400">
            <FSMLogo className="w-80 h-80" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            
            {/* Top Badge */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400">
              <Quote className="w-4 h-4" />
              <span>{currentQuote.source || 'Flying Spaghetti Monster'}</span>
            </div>

            {/* Quote Body */}
            <div className="min-h-[120px] sm:min-h-[140px] flex items-center justify-center max-w-2xl">
              <p
                className={`text-xl sm:text-3xl font-light text-white leading-relaxed tracking-tight transition-all duration-300 ${
                  isSpinning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                &ldquo;{currentQuote.text}&rdquo;
              </p>
            </div>

            {/* Author Attribution */}
            {currentQuote.author && (
              <div className="text-sm text-slate-400 italic">
                — {currentQuote.author}
              </div>
            )}

            {/* Controls Row */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 w-full">
              {/* Main "Get advice for the day" Action button */}
              <button
                type="button"
                id="oracle-get-advice-btn"
                onClick={handleNextQuote}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-base tracking-wide shadow-xl shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
              >
                <RefreshCw className={`w-5 h-5 group-hover:rotate-180 transition-transform duration-500 ${isSpinning ? 'animate-spin' : ''}`} />
                Get advice for the day
              </button>

              {/* Copy Quote Button */}
              <button
                type="button"
                onClick={handleCopy}
                className="px-5 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-sm font-medium transition-all flex items-center gap-2 hover:border-orange-500/50"
                title="Copy quote to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Wisdom</span>
                  </>
                )}
              </button>
            </div>

            {/* Hint */}
            <p className="text-xs text-slate-400 pt-2">
              Receive automatic notifications like this every day directly in the mobile app!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
