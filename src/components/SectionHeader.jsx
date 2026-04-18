import { motion } from 'framer-motion'
import { spring } from './Motion.jsx'

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center'
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className={`mx-auto flex max-w-3xl flex-col ${alignClass}`}
    >
      {eyebrow && (
        <motion.span
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: spring } }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: spring } }}
        className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: spring } }}
          className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
