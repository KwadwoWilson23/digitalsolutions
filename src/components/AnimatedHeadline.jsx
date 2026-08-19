import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
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

const wordVariant = {
  hidden: { y: '110%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 16, mass: 0.6 },
  },
}

export default function AnimatedHeadline({ segments, className = '' }) {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={segments.map((s) => s.text).join(' ')}
      className={`font-display font-semibold leading-[1.08] tracking-tight ${className}`}
    >
      {segments.map((seg, sIdx) => {
        const words = seg.text.split(' ')
        return (
          <span key={sIdx}>
            {words.map((word, wIdx) => (
              <span
                key={wIdx}
                className="relative inline-block overflow-hidden whitespace-nowrap pb-[0.12em] align-baseline"
              >
                {seg.gradient ? (
                  <motion.span
                    variants={wordVariant}
                    aria-hidden
                    className="inline-block bg-gradient-to-r from-brand-400 via-accent-sky to-accent-cyan bg-clip-text text-transparent"
                  >
                    {word}
                  </motion.span>
                ) : (
                  Array.from(word).map((ch, cIdx) => (
                    <span
                      key={cIdx}
                      className="relative inline-block overflow-hidden align-baseline"
                    >
                      <motion.span variants={letter} className="inline-block" aria-hidden>
                        {ch}
                      </motion.span>
                    </span>
                  ))
                )}
                {wIdx < words.length - 1 && ' '}
              </span>
            ))}
            {sIdx < segments.length - 1 && ' '}
          </span>
        )
      })}
    </motion.h1>
  )
}
