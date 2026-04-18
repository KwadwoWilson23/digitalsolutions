import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}

const word = {
  hidden: { opacity: 0, y: '80%', filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: '0%',
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 110, damping: 18, mass: 0.5 },
  },
}

export default function WordReveal({
  text,
  as = 'h2',
  className = '',
  highlightWords = [],
  highlightClass = 'bg-gradient-to-r from-brand-400 via-accent-sky to-accent-cyan bg-clip-text text-transparent',
  once = true,
  amount = 0.5,
}) {
  const Tag = motion[as]
  const words = text.split(' ')
  const highlightSet = new Set(highlightWords.map((w) => w.toLowerCase().replace(/[.,!?]/g, '')))

  return (
    <Tag
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      aria-label={text}
      className={`font-display leading-[1.05] tracking-tight ${className}`}
    >
      {words.map((w, i) => {
        const cleaned = w.toLowerCase().replace(/[.,!?]/g, '')
        const isHighlight = highlightSet.has(cleaned)
        return (
          <span key={i} className="relative inline-block overflow-hidden pb-[0.08em] align-baseline">
            <motion.span
              variants={word}
              aria-hidden
              className={`inline-block ${isHighlight ? highlightClass : ''}`}
            >
              {w}
            </motion.span>
            {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        )
      })}
    </Tag>
  )
}
