import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import WordReveal from './WordReveal.jsx'

export default function StatementSection({
  eyebrow,
  text,
  highlightWords = [],
  sub,
  variant = 'navy',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 1.02])

  const bg = variant === 'navy'
    ? 'bg-slate-950 text-white'
    : variant === 'brand'
      ? 'bg-brand-700 text-white'
      : 'bg-white text-navy'

  return (
    <section
      ref={ref}
      className={`relative flex min-h-[90vh] items-center overflow-hidden ${bg}`}
    >
      <GridBackdrop variant={variant} />
      <motion.div
        style={{ y, scale }}
        className="container-px relative mx-auto flex w-full max-w-6xl flex-col items-center text-center"
      >
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            className={`mb-8 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
              variant === 'white'
                ? 'border-brand-200 bg-brand-50 text-brand-700'
                : 'border-white/15 bg-white/5 text-brand-200 backdrop-blur'
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${variant === 'white' ? 'bg-brand-600' : 'bg-accent-cyan'}`} />
            {eyebrow}
          </motion.span>
        )}

        <WordReveal
          as="h2"
          text={text}
          highlightWords={highlightWords}
          className={`text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl ${
            variant === 'white' ? 'text-navy' : 'text-white'
          }`}
        />

        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.4 }}
            className={`mt-8 max-w-2xl text-base leading-relaxed sm:text-lg ${
              variant === 'white' ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            {sub}
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}

function GridBackdrop({ variant }) {
  const line = variant === 'white' ? 'rgba(15,23,42,0.06)' : 'rgba(255,255,255,0.06)'
  const glowA = variant === 'brand' ? 'rgba(56,189,248,0.28)' : 'rgba(56,189,248,0.18)'
  const glowB = variant === 'brand' ? 'rgba(14,165,233,0.28)' : 'rgba(37,99,235,0.22)'
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-80 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        style={{
          backgroundImage: `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(700px 340px at 20% 30%, ${glowA}, transparent 65%), radial-gradient(600px 300px at 85% 75%, ${glowB}, transparent 60%)`,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: variant === 'brand'
            ? 'conic-gradient(from 0deg, rgba(56,189,248,0.25), rgba(255,255,255,0.15), rgba(14,165,233,0.25), rgba(56,189,248,0.25))'
            : 'conic-gradient(from 0deg, rgba(56,189,248,0.12), rgba(37,99,235,0.18), rgba(14,165,233,0.12), rgba(56,189,248,0.12))',
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
      />
    </>
  )
}
