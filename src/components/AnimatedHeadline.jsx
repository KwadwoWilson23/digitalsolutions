import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.1 },
  },
}

const letter = {
  hidden: { y: '110%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 14, mass: 0.6 },
  },
}

export default function AnimatedHeadline({ segments, className = '' }) {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={segments.map((s) => s.text).join(' ')}
      className={`font-display font-semibold leading-[1.05] tracking-tight ${className}`}
    >
      {segments.map((seg, sIdx) => (
        <span key={sIdx} className="inline-block align-baseline">
          {Array.from(seg.text).map((ch, i) => (
            <span key={i} className="relative inline-block overflow-hidden align-baseline">
              <motion.span
                variants={letter}
                className={`inline-block ${seg.gradient ? 'bg-gradient-to-r from-brand-400 via-accent-sky to-accent-cyan bg-clip-text text-transparent' : ''}`}
                aria-hidden
              >
                {ch === ' ' ? '\u00A0' : ch}
              </motion.span>
            </span>
          ))}
          {sIdx < segments.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.h1>
  )
}
