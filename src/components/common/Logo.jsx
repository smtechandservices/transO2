"use client";

export const Logo = ({ className = "", showText = true }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <span className="relative inline-flex h-9 w-9 items-center justify-center">
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="t2mark" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#059669" />
            <stop offset="0.55" stopColor="#06B6D4" />
            <stop offset="1" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18" stroke="url(#t2mark)" strokeWidth="2.4" opacity="0.9" />
        <path d="M9 24c4-6 8-6 11 0s7 6 11 0" stroke="url(#t2mark)" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M11 16c3.5-4.5 6.5-4.5 9 0" stroke="url(#t2mark)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>
    </span>
    {showText && (
      <span className="font-display text-xl font-extrabold tracking-tight text-slate-900">
        Trans<span className="text-gradient">O₂</span>
      </span>
    )}
  </div>
);
