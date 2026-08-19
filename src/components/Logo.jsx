import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Logo({ variant = 'dark' }) {
  const [imgError, setImgError] = useState(false)
  const textClass = variant === 'light' ? 'text-white' : 'text-navy'
  const subClass = variant === 'light' ? 'text-brand-200' : 'text-brand-600'

  if (!imgError) {
    return (
      <Link
        to="/"
        className="group flex items-center"
        aria-label="KASIR — Innovate. Build. Impact. — Home"
      >
        <img
          src="/logo.png"
          alt="KASIR — Innovate. Build. Impact."
          width="240"
          height="200"
          fetchpriority="high"
          decoding="async"
          onError={() => setImgError(true)}
          className="h-11 w-auto shrink-0 rounded-xl sm:h-12"
        />
      </Link>
    )
  }

  return (
    <Link
      to="/"
      className="group flex items-center gap-3"
      aria-label="KASIR — Innovate. Build. Impact. — Home"
    >
      <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy shadow-card">
        <LogoMark />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[17px] font-700 font-semibold tracking-[0.02em] ${textClass}`}>
          KASIR
        </span>
        <span className={`mt-0.5 text-[9px] font-semibold tracking-[0.22em] uppercase ${subClass}`}>
          Innovate · Build · Impact
        </span>
      </span>
    </Link>
  )
}

function LogoMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden="true">
      <defs>
        <linearGradient id="lmg" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke="url(#lmg)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 8 40 L 24 8 L 32 24" />
        <path d="M 30 40 L 24 30" />
        <path d="M 16 30 C 22 22 30 14 40 8" />
        <path d="M 34 8 L 40 8 L 40 14" />
      </g>
    </svg>
  )
}
