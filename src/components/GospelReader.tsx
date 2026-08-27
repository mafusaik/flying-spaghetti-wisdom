import React, { useState } from 'react';
import { GOSPEL_CHAPTERS } from '../data/wisdomData';
import { BookOpen, ChevronLeft, ChevronRight, Search, ZoomIn, ZoomOut, Bookmark, Sparkles } from 'lucide-react';
import { FSMLogo, PirateIcon, FishSkeletonIcon } from './Logo';

export const GospelReader: React.FC = () => {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'larger'>('normal');

  const currentChapter = GOSPEL_CHAPTERS[activeChapterIndex];

  return (
    <section id="gospel" className="relative py-24 border-t border-slate-800/80 bg-[#060915]/90 backdrop-blur-md z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" /> Built-In Sacred Library
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Gospel of the Flying Spaghetti Monster
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Read the complete Gospel by Bobby Henderson in high resolution, with full search, customizable zoom, page jumping, and bookmarking.
          </p>
        </div>

        {/* Reader Interface Container */}
        <div className="rounded-3xl bg-[#0d1428] border border-slate-800/80 shadow-2xl overflow-hidden grid lg:grid-cols-12">
          
          {/* Chapter Selector Sidebar */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-800 bg-[#090e1f] p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Table of Contents</h3>
                  <p className="text-[11px] text-slate-400">Select a gospel passage</p>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                {GOSPEL_CHAPTERS.map((ch, idx) => (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChapterIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all flex items-start gap-3 border ${
                      activeChapterIndex === idx
                        ? 'bg-orange-500/15 border-orange-500/40 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-mono text-orange-400 font-bold mt-0.5">
                      Pg.{ch.pageNumber}
                    </span>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold leading-snug">
                        {ch.title}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {ch.subtitle}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Author Attribution Note */}
            <div className="pt-6 mt-6 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
              <PirateIcon className="w-5 h-5 text-orange-400 flex-shrink-0" />
              <span>Authored by Prophet Bobby Henderson (2006)</span>
            </div>
          </div>

          {/* Reader Display Area */}
          <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between bg-[#faf8f2] text-slate-900 min-h-[420px]">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-amber-900/10 pb-4 text-xs text-amber-950/70 font-mono">
              <div className="flex items-center gap-2 font-serif font-bold text-sm text-amber-950">
                <span>Page {currentChapter.pageNumber} of 178</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-amber-900/70 font-sans">Font:</span>
                <button
                  onClick={() => setFontSize('normal')}
                  className={`px-2 py-1 rounded text-xs ${fontSize === 'normal' ? 'bg-amber-200 text-amber-950 font-bold' : 'bg-amber-100/60'}`}
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`px-2 py-1 rounded text-sm ${fontSize === 'large' ? 'bg-amber-200 text-amber-950 font-bold' : 'bg-amber-100/60'}`}
                >
                  A+
                </button>
              </div>
            </div>

            {/* Chapter Header & Body */}
            <div className="my-auto py-6 space-y-4">
              <div className="text-center space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-orange-700 font-serif font-bold">
                  {currentChapter.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-950 tracking-tight">
                  {currentChapter.title}
                </h3>
                <div className="w-16 h-0.5 bg-orange-500 mx-auto mt-2" />
              </div>

              <div
                className={`font-serif text-amber-950/90 leading-relaxed max-w-xl mx-auto whitespace-pre-line ${
                  fontSize === 'normal'
                    ? 'text-sm sm:text-base'
                    : 'text-base sm:text-lg'
                }`}
              >
                {currentChapter.fullText}
              </div>
            </div>

            {/* Navigation Buttons Bottom */}
            <div className="flex items-center justify-between pt-4 border-t border-amber-900/10 text-xs">
              <button
                disabled={activeChapterIndex === 0}
                onClick={() => setActiveChapterIndex((prev) => Math.max(0, prev - 1))}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-200/60 hover:bg-amber-200 disabled:opacity-30 disabled:pointer-events-none text-amber-950 font-medium transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Previous Chapter
              </button>
              <span className="text-amber-900/60 italic font-serif">
                &ldquo;Ramen!&rdquo;
              </span>
              <button
                disabled={activeChapterIndex === GOSPEL_CHAPTERS.length - 1}
                onClick={() =>
                  setActiveChapterIndex((prev) =>
                    Math.min(GOSPEL_CHAPTERS.length - 1, prev + 1)
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-200/60 hover:bg-amber-200 disabled:opacity-30 disabled:pointer-events-none text-amber-950 font-medium transition-colors"
              >
                Next Chapter <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
