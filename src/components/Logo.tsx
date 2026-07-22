import React, { useState } from 'react';
import logoImg from '../assets/images/4life_sports_logo_1784679316538.jpg';

interface LogoProps {
  variant?: 'light' | 'dark'; // 'light' for light backgrounds (Header), 'dark' for dark backgrounds (Footer)
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  useImage?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  className = '',
  useImage = false
}) => {
  const [imgError, setImgError] = useState(false);

  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16'
  };

  const primaryTextColor = variant === 'dark' ? 'fill-white' : 'fill-[#111111]';
  const accentColor = 'fill-[#F5A623]';

  if (useImage && !imgError) {
    return (
      <img
        src={logoImg}
        alt="4Life Sports"
        onError={() => setImgError(true)}
        className={`${heightClasses[size]} w-auto object-contain ${className}`}
      />
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 100"
        className={`${heightClasses[size]} w-auto`}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="4Life Sports Logo"
      >
        {/* Left Barbell Weight Plate */}
        <g className="left-barbell">
          {/* Outer plate */}
          <rect x="8" y="24" width="8" height="42" rx="3" className={primaryTextColor} />
          <rect x="18" y="20" width="10" height="50" rx="3.5" className={primaryTextColor} />
          {/* Collar/Sleeve accent */}
          <rect x="29" y="38" width="6" height="14" rx="2" className={accentColor} />
          <rect x="35" y="42" width="12" height="6" className={primaryTextColor} />
        </g>

        {/* Brand Text: 4Life */}
        <g transform="translate(42, 0)">
          {/* '4' */}
          <path
            d="M 38 58 L 38 48 L 18 48 L 18 36 L 36 18 L 48 18 L 48 48 L 54 48 L 54 58 L 48 58 L 48 66 L 38 66 Z M 38 34 L 28 48 L 38 48 Z"
            className={primaryTextColor}
          />

          {/* 'L' - Highlighted Yellow */}
          <path
            d="M 58 18 L 70 18 L 70 56 L 92 56 L 92 66 L 58 66 Z"
            className={accentColor}
          />

          {/* 'i' */}
          {/* Dot on 'i' - Yellow */}
          <circle cx="102" cy="24" r="5.5" className={accentColor} />
          {/* Body of 'i' */}
          <rect x="97" y="34" width="10" height="32" rx="2" className={primaryTextColor} />

          {/* 'f' */}
          <path
            d="M 118 26 C 118 20 123 18 130 18 L 136 18 L 136 27 L 131 27 C 128 27 127 28 127 31 L 127 34 L 136 34 L 134 43 L 127 43 L 127 66 L 118 66 L 118 43 L 112 43 L 112 34 L 118 34 Z"
            className={primaryTextColor}
          />

          {/* 'e' */}
          <path
            d="M 142 50 C 142 39 149 33 160 33 C 171 33 177 40 177 50 L 177 53 L 151 53 C 152 58 155 60 161 60 C 165 60 169 59 173 57 L 176 64 C 171 67 165 68 159 68 C 147 68 142 60 142 50 Z M 168 46 C 168 41 165 39 160 39 C 155 39 152 41 151 46 Z"
            className={primaryTextColor}
          />
        </g>

        {/* Right Barbell Weight Plate */}
        <g className="right-barbell">
          <rect x="235" y="42" width="12" height="6" className={primaryTextColor} />
          <rect x="247" y="38" width="6" height="14" rx="2" className={accentColor} />
          <rect x="255" y="20" width="10" height="50" rx="3.5" className={primaryTextColor} />
          <rect x="267" y="24" width="8" height="42" rx="3" className={primaryTextColor} />
        </g>

        {/* Subtitle: SPORTS */}
        <text
          x="160"
          y="88"
          textAnchor="middle"
          className={`${primaryTextColor} font-sans font-black tracking-[0.38em]`}
          style={{ fontSize: '17px', fontWeight: 900, letterSpacing: '0.38em' }}
        >
          SPORTS
        </text>
      </svg>
    </div>
  );
};
