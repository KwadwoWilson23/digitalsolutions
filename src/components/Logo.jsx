import { Link } from 'react-router-dom'

export default function Logo({ variant = 'dark' }) {
  const textClass = variant === 'light' ? 'text-white' : 'text-navy'
  const subClass = variant === 'light' ? 'text-brand-200' : 'text-brand-600'
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Kwadwo Wilson Digital Solutions — Home">
      <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy shadow-card">
        <LogoMark />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[15px] font-700 font-semibold tracking-tight ${textClass}`}>
          Kwadwo Wilson
        </span>
        <span className={`text-[11px] font-medium tracking-[0.18em] uppercase ${subClass}`}>
          Digital Solutions
        </span>
      </span>
    </Link>
  )
}

function LogoMark() {
  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6" aria-hidden="true">
      <defs>
        <linearGradient id="lmg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <g fill="url(#lmg)">
        <rect x="2"  y="12" width="9" height="9" rx="2" transform="rotate(45 6.5 16.5)" />
        <rect x="13" y="4"  width="9" height="9" rx="2" transform="rotate(45 17.5 8.5)" />
        <rect x="13" y="20" width="9" height="9" rx="2" transform="rotate(45 17.5 24.5)" />
        <rect x="24" y="12" width="9" height="9" rx="2" transform="rotate(45 28.5 16.5)" />
      </g>
    </svg>
  )
}
