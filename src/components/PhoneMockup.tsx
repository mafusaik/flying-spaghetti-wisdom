import React, { useState } from 'react';
import { FSMLogo, PirateIcon, FishSkeletonIcon } from './Logo';
import { WISDOM_QUOTES } from '../data/wisdomData';
import { Sparkles, BookOpen, Settings, Bell, ChevronLeft, ChevronRight, Search, ZoomIn, ZoomOut, Check, Volume2 } from 'lucide-react';
import meatballImg1 from '../assets/images/space_meatball_texture_1787859048221.jpg';
import meatballImg2 from '../assets/images/space_meatball_sphere_1787859073311.jpg';

export const PhoneMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'advice' | 'book' | 'settings'>('advice');
  const [quoteIndex, setQuoteIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Settings mock state
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);
  const [adviceTime, setAdviceTime] = useState<string>('20:42');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');

  // Book mock state
  const [bookPage, setBookPage] = useState<number>(2);

  const handleNextAdvice = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setQuoteIndex((prev) => (prev + 1) % WISDOM_QUOTES.length);
      setIsAnimating(false);
    }, 200);
  };

  const currentQuote = WISDOM_QUOTES[quoteIndex];

  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px]">
      {/* Device Frame Ambient Halo Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-orange-600/30 via-amber-500/20 to-blue-600/30 rounded-[48px] blur-xl opacity-75 animate-pulse-glow" />

      {/* Phone Body */}
      <div className="relative bg-[#090d1c] border-[7px] border-slate-700/80 rounded-[44px] shadow-2xl overflow-hidden aspect-[9/19] flex flex-col select-none ring-1 ring-white/10">
        
        {/* Status Bar */}
        <div className="h-7 px-6 pt-1.5 flex items-center justify-between text-[11px] font-medium text-slate-300 z-20 bg-black/40 backdrop-blur-sm">
          <span>8:07</span>
          <div className="w-20 h-3.5 bg-black rounded-full mx-auto" />
          <div className="flex items-center gap-1.5">
            <span className="text-[10px]">5G</span>
            <div className="w-4 h-2.5 border border-slate-300 rounded-sm p-0.5">
              <div className="w-full h-full bg-slate-300 rounded-2xs" />
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="relative flex-1 flex flex-col overflow-hidden bg-[#050711]">
          {/* Subtle cosmic space background in mockup */}
          <div className="absolute inset-0 bg-radial from-[#131d3d]/50 via-[#060917] to-[#03040a] pointer-events-none" />
          
          {/* Floating textured meatballs in phone mockup background matching reference */}
          <div className="absolute top-10 left-3 w-14 h-14 rounded-full overflow-hidden shadow-2xl shadow-orange-950/80 ring-1 ring-orange-500/30 opacity-90 animate-float-slow pointer-events-none">
            <img src={meatballImg1} alt="" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/70 rounded-full" />
          </div>
          <div className="absolute top-28 right-4 w-10 h-10 rounded-full overflow-hidden shadow-lg shadow-orange-950/70 ring-1 ring-orange-500/20 opacity-85 animate-float-reverse pointer-events-none">
            <img src={meatballImg2} alt="" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/60 rounded-full" />
          </div>
          <div className="absolute bottom-28 right-2 w-20 h-20 rounded-full overflow-hidden shadow-2xl shadow-orange-950 ring-1 ring-orange-500/40 opacity-95 animate-float-slow pointer-events-none">
            <img src={meatballImg1} alt="" className="w-full h-full object-cover rounded-full scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/75 rounded-full" />
          </div>
          <div className="absolute bottom-36 left-4 w-9 h-9 rounded-full overflow-hidden shadow-md shadow-orange-950/60 ring-1 ring-orange-500/20 opacity-80 animate-float-reverse pointer-events-none">
            <img src={meatballImg2} alt="" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/60 rounded-full" />
          </div>

          {/* TAB 1: ADVICE VIEW (Matching user Screenshot_advice.png) */}
          {activeTab === 'advice' && (
            <div className="relative z-10 flex-1 flex flex-col justify-between p-5 pt-3 text-center">
              {/* Header Title */}
              <div className="px-2">
                <h3 className="text-orange-500 font-semibold text-xs uppercase tracking-wider leading-relaxed">
                  Fill yourself with the wisdom of the Flying Spaghetti Monster
                </h3>
              </div>

              {/* Main Wisdom Quote Center */}
              <div className="my-auto px-2 py-4">
                <div
                  className={`transition-all duration-300 ${
                    isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
                >
                  <p className="text-xl sm:text-2xl font-light text-white leading-snug tracking-tight">
                    &ldquo;{currentQuote.text}&rdquo;
                  </p>
                  {currentQuote.source && (
                    <p className="text-[11px] text-orange-300/80 mt-3 italic">
                      — {currentQuote.source}
                    </p>
                  )}
                </div>
              </div>

              {/* Pill Button "Get advice for the day" */}
              <div className="pb-2">
                <button
                  type="button"
                  onClick={handleNextAdvice}
                  id="phone-get-advice-btn"
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-medium text-sm tracking-wide shadow-lg shadow-orange-600/50 active:scale-95 transition-all flex items-center justify-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  Get advice for the day
                </button>
                <p className="text-[10px] text-slate-400 mt-2">
                  Tap button to discover next wisdom
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: BOOK VIEW (Matching user Screenshot_book.png) */}
          {activeTab === 'book' && (
            <div className="relative z-10 flex-1 flex flex-col bg-white text-slate-900 p-3 overflow-hidden text-left">
              {/* Book Controls Toolbar */}
              <div className="flex items-center justify-between gap-1 pb-2 border-b border-slate-200 text-[10px] text-slate-600">
                <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md">
                  <span className="font-semibold">Pg</span> Page {bookPage} / 178
                </div>
                <div className="flex items-center gap-1">
                  <button className="bg-slate-100 px-1.5 py-1 rounded hover:bg-slate-200">
                    <Search className="w-3 h-3" />
                  </button>
                  <button className="bg-slate-100 px-1.5 py-1 rounded hover:bg-slate-200">
                    <ZoomOut className="w-3 h-3" />
                  </button>
                  <span className="bg-slate-100 px-1.5 py-1 rounded text-[9px]">100%</span>
                </div>
              </div>

              {/* Book Page Content */}
              <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col items-center justify-center text-center">
                <div className="border border-slate-300 p-4 rounded bg-[#faf9f5] shadow-sm w-full">
                  <h4 className="font-serif text-base font-bold tracking-tight text-slate-900">
                    The Gospel of the
                  </h4>
                  <h3 className="font-serif text-lg font-black tracking-widest text-slate-950 uppercase my-1">
                    FLYING SPAGHETTI MONSTER
                  </h3>
                  <p className="font-serif text-[11px] text-slate-700 tracking-wider uppercase mt-4">
                    BOBBY HENDERSON
                  </p>
                  <div className="w-12 h-0.5 bg-orange-600 mx-auto my-3" />
                  <p className="text-[10px] text-slate-600 italic font-serif leading-relaxed">
                    &ldquo;Let us remember that there are multiple theories of Intelligent Design. I and many others believe the universe was created by a Flying Spaghetti Monster.&rdquo;
                  </p>
                </div>

                {/* Page Mini Thumbnails Tray */}
                <div className="flex items-center justify-center gap-2 mt-4 w-full">
                  {[1, 2, 3, 4, 5].map((pg) => (
                    <button
                      key={pg}
                      onClick={() => setBookPage(pg)}
                      className={`w-7 h-10 border rounded text-[9px] flex items-center justify-center transition-all ${
                        bookPage === pg
                          ? 'border-orange-500 ring-2 ring-orange-400 bg-orange-50 font-bold text-orange-600'
                          : 'border-slate-300 bg-white text-slate-500'
                      }`}
                    >
                      {pg}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SETTINGS VIEW (Matching user Screenshot_settings.png) */}
          {activeTab === 'settings' && (
            <div className="relative z-10 flex-1 flex flex-col p-5 pt-3 text-left">
              <h3 className="text-lg font-bold text-white text-center mb-5">Settings</h3>

              <div className="space-y-5">
                {/* Enable Notifications */}
                <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                  <span className="text-xs font-medium text-slate-200">
                    Enable notifications
                  </span>
                  <button
                    type="button"
                    onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                    className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                      notificationsEnabled ? 'bg-orange-500' : 'bg-slate-700'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        notificationsEnabled ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Time for advice */}
                <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                  <span className="text-xs font-medium text-slate-200">
                    Time for advice
                  </span>
                  <input
                    type="time"
                    value={adviceTime}
                    onChange={(e) => setAdviceTime(e.target.value)}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-orange-500/50 text-orange-400 text-xs font-semibold focus:outline-none"
                  />
                </div>

                {/* Language selector */}
                <div className="space-y-1.5 pt-1">
                  <label className="text-[11px] font-medium text-orange-400 block">
                    Language
                  </label>
                  <div className="relative">
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-orange-500/50 text-white text-xs font-medium appearance-none focus:outline-none focus:ring-1 focus:ring-orange-500"
                    >
                      <option value="English">🇺🇸 English</option>
                      <option value="Spanish">🇪🇸 Spanish</option>
                      <option value="German">🇩🇪 German</option>
                      <option value="Italian">🇮🇹 Italian</option>
                      <option value="Pirate Talk">🏴‍☠️ Pirate Talk (Ahoy!)</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[11px] text-orange-300">
                  Daily guidance scheduled for <strong>{adviceTime}</strong>. May His Noodly Appendage guide your day!
                </div>
              </div>
            </div>
          )}

          {/* Bottom App Navigation Bar (Matching Screenshot: FSM / Book / Gear icons) */}
          <div className="relative z-20 h-14 bg-[#0a0f24]/95 border-t border-slate-800/80 px-4 flex items-center justify-around">
            {/* Advice Tab */}
            <button
              type="button"
              onClick={() => setActiveTab('advice')}
              className={`flex-1 py-1.5 flex flex-col items-center justify-center rounded-xl transition-all ${
                activeTab === 'advice'
                  ? 'bg-orange-500/20 text-orange-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FSMLogo className="w-5 h-5" />
              <span className="text-[9px] mt-0.5">Wisdom</span>
            </button>

            {/* Book Tab */}
            <button
              type="button"
              onClick={() => setActiveTab('book')}
              className={`flex-1 py-1.5 flex flex-col items-center justify-center rounded-xl transition-all ${
                activeTab === 'book'
                  ? 'bg-orange-500/20 text-orange-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-[9px] mt-0.5">Gospel</span>
            </button>

            {/* Settings Tab */}
            <button
              type="button"
              onClick={() => setActiveTab('settings')}
              className={`flex-1 py-1.5 flex flex-col items-center justify-center rounded-xl transition-all ${
                activeTab === 'settings'
                  ? 'bg-orange-500/20 text-orange-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span className="text-[9px] mt-0.5">Settings</span>
            </button>
          </div>
        </div>

        {/* Home Indicator Bar */}
        <div className="h-4 bg-[#0a0f24] flex items-center justify-center">
          <div className="w-24 h-1 bg-slate-600 rounded-full" />
        </div>
      </div>
    </div>
  );
};
