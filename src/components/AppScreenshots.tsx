import React, { useState } from 'react';
import { Smartphone, Sparkles, BookOpen, Settings, CheckCircle2, ChevronRight } from 'lucide-react';
import { FSMLogo, PirateIcon, FishSkeletonIcon } from './Logo';

export const AppScreenshots: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<number>(0);

  const screens = [
    {
      id: 'advice',
      title: 'Daily Wisdom & Advice',
      subtitle: 'Cosmic guidance & advice generator',
      description: 'Receive thoughtful, humorous reflections from the Flying Spaghetti Monster with real-time meatball animations in space.',
      highlights: [
        'One-tap fresh advice retrieval',
        'Cosmic flying meatball backdrop',
        'Intuitive navigation bar',
      ],
      previewColor: 'from-orange-600/30 to-amber-600/10',
    },
    {
      id: 'book',
      title: 'The Sacred Gospel Reader',
      subtitle: 'Bobby Henderson’s complete text',
      description: 'Built-in digital reader featuring all 178 pages of the original Gospel of the Flying Spaghetti Monster with fast search and zooming.',
      highlights: [
        '178 page complete canon',
        'Thumbnail navigation slider',
        'Zoom & quick search controls',
      ],
      previewColor: 'from-blue-600/30 to-indigo-600/10',
    },
    {
      id: 'settings',
      title: 'Settings & Scheduling',
      subtitle: 'Personalized reminders & language',
      description: 'Easily configure daily advice delivery times and choose between English, Spanish, German, Italian, or Pirate dialect.',
      highlights: [
        'Custom notification delivery hour',
        'Multi-language & Pirate support',
        'Lightweight on battery & privacy-focused',
      ],
      previewColor: 'from-purple-600/30 to-pink-600/10',
    },
  ];

  return (
    <section id="screenshots" className="relative py-24 border-t border-slate-800/80 bg-[#050710]/95 backdrop-blur-md z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5" /> App Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for Modern Devices
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Experience a smooth, elegant interface built with reverence, humor, and careful attention to typography and cosmic animations.
          </p>
        </div>

        {/* 3 Screen Switcher Tabs */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {screens.map((screen, idx) => (
            <button
              key={screen.id}
              onClick={() => setSelectedScreen(idx)}
              className={`p-5 rounded-2xl text-left transition-all border ${
                selectedScreen === idx
                  ? 'bg-gradient-to-b from-[#111933] to-[#0a1024] border-orange-500/50 shadow-xl shadow-orange-500/10 ring-1 ring-orange-500/30'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  Screen 0{idx + 1}
                </span>
                {idx === 0 && <Sparkles className="w-4 h-4 text-orange-400" />}
                {idx === 1 && <BookOpen className="w-4 h-4 text-blue-400" />}
                {idx === 2 && <Settings className="w-4 h-4 text-purple-400" />}
              </div>
              <h3 className="font-bold text-white text-base sm:text-lg">
                {screen.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                {screen.subtitle}
              </p>
            </button>
          ))}
        </div>

        {/* Selected Screen Detailed Showcase Display */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0d1428] to-[#080d1e] border border-slate-800 p-8 sm:p-12 shadow-2xl grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                Active View
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {screens[selectedScreen].title}
              </h3>
              <p className="text-orange-300 font-medium text-sm mt-1">
                {screens[selectedScreen].subtitle}
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {screens[selectedScreen].description}
            </p>

            <div className="space-y-3 pt-2">
              {screens[selectedScreen].highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#downloads"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm transition-all shadow-lg shadow-orange-500/20"
              >
                Download App <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Phone Frame Rendering */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[300px] bg-[#050814] border-[6px] border-slate-700/80 rounded-[40px] shadow-2xl overflow-hidden aspect-[9/18] p-3 flex flex-col justify-between select-none">
              
              {/* Screen Mock 1: Advice */}
              {selectedScreen === 0 && (
                <div className="flex-1 flex flex-col justify-between py-4 text-center">
                  <p className="text-orange-500 text-[10px] uppercase font-semibold">
                    Fill yourself with the wisdom of the Flying Spaghetti Monster
                  </p>
                  
                  {/* Center quote */}
                  <div className="my-auto px-3">
                    <p className="text-lg font-light text-white leading-tight">
                      &ldquo;Don't fear the unknown. It may be pasta.&rdquo;
                    </p>
                  </div>

                  {/* Pill button */}
                  <div>
                    <div className="py-2.5 px-4 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-medium text-xs shadow-md">
                      Get advice for the day
                    </div>
                  </div>
                </div>
              )}

              {/* Screen Mock 2: Gospel Reader */}
              {selectedScreen === 1 && (
                <div className="flex-1 flex flex-col bg-white text-slate-900 rounded-xl p-3 overflow-hidden text-left">
                  <div className="flex items-center justify-between text-[9px] text-slate-500 pb-1 border-b">
                    <span>Pg Page 2 / 178</span>
                    <span>100%</span>
                  </div>
                  <div className="my-auto text-center p-2 border border-slate-200 rounded bg-[#faf9f5]">
                    <div className="font-serif font-bold text-xs">The Gospel of the</div>
                    <div className="font-serif font-black text-sm uppercase text-slate-950">
                      FLYING SPAGHETTI MONSTER
                    </div>
                    <div className="font-serif text-[9px] text-slate-600 mt-2">BOBBY HENDERSON</div>
                  </div>
                  <div className="flex gap-1 justify-center mt-2">
                    <div className="w-5 h-7 border border-orange-500 bg-orange-50 text-[8px] flex items-center justify-center font-bold text-orange-600">2</div>
                    <div className="w-5 h-7 border border-slate-300 text-[8px] flex items-center justify-center text-slate-500">3</div>
                    <div className="w-5 h-7 border border-slate-300 text-[8px] flex items-center justify-center text-slate-500">4</div>
                  </div>
                </div>
              )}

              {/* Screen Mock 3: Settings */}
              {selectedScreen === 2 && (
                <div className="flex-1 flex flex-col p-3 text-left space-y-4">
                  <h4 className="text-center font-bold text-white text-sm">Settings</h4>
                  <div className="flex justify-between items-center text-xs text-slate-300 border-b border-slate-800 pb-2">
                    <span>Enable notifications</span>
                    <div className="w-8 h-4 bg-orange-500 rounded-full flex items-center justify-end px-0.5">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-300 border-b border-slate-800 pb-2">
                    <span>Time for advice</span>
                    <span className="text-orange-400 font-mono font-bold">20:42</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-orange-400 block">Language</span>
                    <div className="p-1.5 rounded bg-slate-900 border border-orange-500/40 text-xs text-white">
                      🇺🇸 English
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Nav Mockup */}
              <div className="h-9 bg-[#080d20] border-t border-slate-800 flex items-center justify-around text-slate-400 text-[10px] pt-1">
                <FSMLogo className={`w-4 h-4 ${selectedScreen === 0 ? 'text-orange-400' : 'text-slate-500'}`} />
                <BookOpen className={`w-3.5 h-3.5 ${selectedScreen === 1 ? 'text-orange-400' : 'text-slate-500'}`} />
                <Settings className={`w-3.5 h-3.5 ${selectedScreen === 2 ? 'text-orange-400' : 'text-slate-500'}`} />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
