import React from 'react';

export interface LogoProps {
  className?: string;
  size?: number;
}

// Iconic Flying Spaghetti Monster Logo (as in user's logo.png)
export const FSMLogo: React.FC<LogoProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="currentColor"
    aria-label="Flying Spaghetti Monster Logo"
  >
    {/* Oval central body */}
    <ellipse
      cx="50"
      cy="55"
      rx="38"
      ry="17"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Left Stalk Eye */}
    <path
      d="M 40 40 C 37 32 37 25 40 20 C 44 20 45 32 42 40"
      fill="currentColor"
    />
    <circle cx="40" cy="20" r="10" fill="white" stroke="currentColor" strokeWidth="5" />
    <circle cx="40" cy="20" r="4.5" fill="currentColor" />
    
    {/* Right Stalk Eye */}
    <path
      d="M 60 40 C 57 32 57 25 60 20 C 64 20 65 32 62 40"
      fill="currentColor"
    />
    <circle cx="60" cy="20" r="10" fill="white" stroke="currentColor" strokeWidth="5" />
    <circle cx="60" cy="20" r="4.5" fill="currentColor" />

    {/* Noodly Tentacles (Left Side) */}
    <path
      d="M 12 52 Q 4 48 2 58 T 14 68"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M 18 64 Q 10 76 22 84"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M 32 68 Q 28 82 40 88"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />

    {/* Noodly Tentacles (Right Side) */}
    <path
      d="M 68 68 Q 72 82 60 88"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M 82 64 Q 90 76 78 84"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M 88 52 Q 96 48 98 58 T 86 68"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

// Pastafarian Pirate Captain Icon (as in user's pirat.png)
export const PirateIcon: React.FC<LogoProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="currentColor"
  >
    {/* Pirate Tricorn Hat */}
    <path
      d="M 50 10 C 65 10 85 24 92 40 C 75 36 60 38 50 42 C 40 38 25 36 8 40 C 15 24 35 10 50 10 Z"
      fill="currentColor"
      stroke="#fff"
      strokeWidth="1.5"
    />
    {/* Skull on Hat */}
    <circle cx="50" cy="24" r="6" fill="#fff" />
    <circle cx="48" cy="23" r="1.2" fill="#000" />
    <circle cx="52" cy="23" r="1.2" fill="#000" />
    {/* Crossbones on Hat */}
    <line x1="42" y1="28" x2="58" y2="34" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <line x1="58" y1="28" x2="42" y2="34" stroke="#fff" strokeWidth="2" strokeLinecap="round" />

    {/* Face & Eyepatch */}
    <path
      d="M 34 44 Q 50 42 66 44 Q 68 56 64 62 Q 50 64 36 62 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    />
    {/* Right Eye */}
    <circle cx="44" cy="50" r="2.5" fill="currentColor" />
    {/* Eyepatch Strap & Patch */}
    <line x1="32" y1="45" x2="68" y2="54" stroke="currentColor" strokeWidth="2.5" />
    <ellipse cx="56" cy="50" rx="6" ry="5" fill="currentColor" />

    {/* Mustache */}
    <path
      d="M 28 62 Q 40 56 50 62 Q 60 56 72 62 Q 60 67 50 65 Q 40 67 28 62 Z"
      fill="currentColor"
    />

    {/* Noodly Spaghetti Beard */}
    <path d="M 32 66 Q 30 78 32 88" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M 38 67 Q 35 80 40 92" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M 44 68 Q 45 82 46 94" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M 50 68 Q 50 82 50 96" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    <path d="M 56 68 Q 55 82 54 94" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M 62 67 Q 65 80 60 92" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M 68 66 Q 70 78 68 88" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

// Pastafarian Fish Skeleton Symbol (as in user's fish.png)
export const FishSkeletonIcon: React.FC<LogoProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 100 120"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="currentColor"
  >
    {/* Fish Tail / Fin Top */}
    <path
      d="M 50 4 L 40 22 C 45 20 55 20 60 22 Z"
      fill="currentColor"
    />
    {/* Ribs Spine */}
    <path d="M 50 20 L 50 95" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    
    {/* Spine Ribs Arcs */}
    <path d="M 28 32 Q 50 24 72 32" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" fill="none" />
    <path d="M 20 44 Q 50 34 80 44" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M 14 58 Q 50 46 86 58" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round" fill="none" />
    <path d="M 12 72 Q 50 60 88 72" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round" fill="none" />
    <path d="M 16 86 Q 50 74 84 86" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
    
    {/* Fish Head / Base */}
    <path
      d="M 18 90 C 24 112 76 112 82 90 C 60 94 40 94 18 90 Z"
      fill="currentColor"
    />
    <circle cx="48" cy="103" r="3.5" fill="#060913" />
  </svg>
);

// App Store Official Style Badge
export const AppStoreButton: React.FC<{ onClick?: () => void; className?: string }> = ({
  onClick,
  className = '',
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white transition-all duration-200 hover:scale-[1.03] hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 active:scale-[0.98] ${className}`}
  >
    <svg className="w-7 h-7 text-white fill-current flex-shrink-0" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.92.04-2.02.62-2.67 1.37-.58.66-1.1 1.73-.96 2.76 1.03.08 2.08-.53 2.71-1.28z" />
    </svg>
    <div className="text-left leading-none">
      <div className="text-[10px] text-slate-400 font-normal uppercase tracking-wider">Download on the</div>
      <div className="text-base font-bold text-white tracking-tight mt-0.5">App Store</div>
    </div>
  </button>
);

// Google Play Official Style Badge
export const GooglePlayButton: React.FC<{ onClick?: () => void; href?: string; className?: string }> = ({
  onClick,
  href = 'https://play.google.com/store/apps/details?id=com.glazer.flying.spaghetti.monster.gospel.bible',
  className = '',
}) => {
  const content = (
    <>
      <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M3.61 2.05L13.82 12.26 3.61 22.47c-.36-.36-.61-.88-.61-1.47V3.52c0-.59.25-1.11.61-1.47z"
        />
        <path
          fill="#FBBC05"
          d="M17.38 8.7L13.82 12.26 3.61 2.05c.42-.23.94-.3 1.48-.09l12.29 6.74z"
        />
        <path
          fill="#EA4335"
          d="M3.61 22.47l10.21-10.21 3.56 3.56-12.29 6.74c-.54.21-1.06.14-1.48-.09z"
        />
        <path
          fill="#34A853"
          d="M20.94 10.65l-3.56-1.95-3.56 3.56 3.56 3.56 3.56-1.95c.98-.54.98-1.68 0-3.22z"
        />
      </svg>
      <div className="text-left leading-none">
        <div className="text-[10px] text-slate-400 font-normal uppercase tracking-wider">Get it on</div>
        <div className="text-base font-bold text-white tracking-tight mt-0.5">Google Play</div>
      </div>
    </>
  );

  const buttonClasses = `inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white transition-all duration-200 hover:scale-[1.03] hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 active:scale-[0.98] ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={buttonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClasses}
    >
      {content}
    </button>
  );
};
