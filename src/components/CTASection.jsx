import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton.jsx'
import { CONTACT } from '../data/company.js'

const spring = { type: 'spring', stiffness: 100, damping: 18 }

export default function CTASection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-14 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={spring}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 px-6 py-10 shadow-[0_30px_80px_-30px_rgba(37,99,235,0.55)] sm:px-8 sm:py-14 md:px-14 md:py-20"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_100%_0%,rgba(56,189,248,0.35),transparent_60%),radial-gradient(600px_260px_at_0%_100%,rgba(37,99,235,0.35),transparent_60%)]" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,rgba(56,189,248,0.18),rgba(37,99,235,0.18),rgba(14,165,233,0.18),rgba(56,189,248,0.18))] blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        />

        <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-3xl md:text-4xl">
              Have a project in mind?{' '}
              <span className="bg-gradient-to-r from-brand-400 via-accent-sky to-accent-cyan bg-clip-text text-transparent">
                Let's build it.
              </span>
            </h2>
            <p className="mt-3 max-w-lg text-sm text-slate-300 sm:mt-4 sm:text-base">
              Tell us about your goals and we'll get back within 24 hours with a
              clear plan and a fair quote.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <MagneticButton to="/contact" variant="primary">
              Start a project
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </MagneticButton>
            <a href={`tel:${CONTACT.phoneRaw}`} className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white">
              Or call {CONTACT.phoneLocal}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
