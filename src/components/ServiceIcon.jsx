export default function ServiceIcon({ name, className = 'h-6 w-6' }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  }
  switch (name) {
    case 'code':
      return (
        <svg {...common}><path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><path d="m14 4-4 16" /></svg>
      )
    case 'device':
      return (
        <svg {...common}><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>
      )
    case 'cart':
      return (
        <svg {...common}><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h2l2.5 12.5a2 2 0 0 0 2 1.5h8.5a2 2 0 0 0 2-1.6L21 8H6" /></svg>
      )
    case 'sparkle':
      return (
        <svg {...common}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></svg>
      )
    case 'dashboard':
      return (
        <svg {...common}><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></svg>
      )
    case 'search':
      return (
        <svg {...common}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
      )
    case 'bot':
      return (
        <svg {...common}><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M12 4v4M9 14h.01M15 14h.01" /><path d="M8 20v2M16 20v2" /></svg>
      )
    case 'rocket':
      return (
        <svg {...common}><path d="M5 19c1.5-4 4-6 7-7 1-3 3-5.5 7-7-1.5 4-4 6-7 7-1 3-3 5.5-7 7Z" /><path d="M5 19l-2 2" /><circle cx="15" cy="9" r="1.2" /></svg>
      )
    default:
      return <svg {...common}><circle cx="12" cy="12" r="8" /></svg>
  }
}
