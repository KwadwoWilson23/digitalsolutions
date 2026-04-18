import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function MagneticButton({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick,
}) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    const x = e.clientX - (r.left + r.width / 2)
    const y = e.clientY - (r.top + r.height / 2)
    setPos({ x: x * 0.25, y: y * 0.25 })
  }
  const reset = () => setPos({ x: 0, y: 0 })

  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-200 cursor-pointer select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400'

  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-brand-500 to-accent-cyan text-white shadow-[0_0_0_0_rgba(56,189,248,0)] hover:shadow-[0_0_40px_6px_rgba(56,189,248,0.45)]'
      : 'border border-white/15 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:shadow-[0_0_30px_4px_rgba(37,99,235,0.35)]'

  const Inner = (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 180, damping: 12, mass: 0.4 }}
      className={`${base} ${styles} ${className}`}
    >
      {variant === 'primary' && (
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full opacity-60 blur-xl [background:radial-gradient(120px_60px_at_50%_50%,rgba(56,189,248,0.55),transparent_60%)]" />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.span>
  )

  if (to) return <Link to={to} onClick={onClick} className="inline-block">{Inner}</Link>
  if (href) return <a href={href} onClick={onClick} className="inline-block">{Inner}</a>
  return (
    <button type="button" onClick={onClick} className="inline-block bg-transparent p-0">
      {Inner}
    </button>
  )
}
