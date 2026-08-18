import { motion } from 'framer-motion'
import { spring } from './Motion.jsx'

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_50%_-20%,rgba(37,99,235,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-slate bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,white,transparent_85%)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-30%] h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[conic-gradient(from_0deg,rgba(37,99,235,0.12),rgba(56,189,248,0.12),rgba(14,165,233,0.12),rgba(37,99,235,0.12))] blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
      />
      <div className="container-px mx-auto max-w-4xl pb-10 pt-14 text-center sm:pb-14 sm:pt-20 md:pt-28">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-700 sm:text-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
          className="mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-navy [text-wrap:balance] sm:mt-5 sm:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-base md:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
