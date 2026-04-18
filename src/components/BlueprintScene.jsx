import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import WordReveal from './WordReveal.jsx'

export default function BlueprintScene() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.4])
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-6%'])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[95vh] items-center overflow-hidden bg-slate-950 text-white"
    >
      <motion.div
        aria-hidden
        style={{ opacity }}
        className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
      >
        <svg viewBox="0 0 1200 700" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="bp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="rgba(56,189,248,0.22)" strokeWidth="0.6" />
            </pattern>
            <linearGradient id="bp-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="1" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="1200" height="700" fill="url(#bp-grid)" />

          {[
            'M 80 180 L 420 180 L 420 420 L 760 420 L 760 280 L 1120 280',
            'M 80 520 L 300 520 L 300 360 L 900 360 L 900 560 L 1120 560',
            'M 200 80 L 200 260 L 620 260 L 620 500 L 1000 500 L 1000 640',
          ].map((d, i) => (
            <motion.path
              key={i}
              d={d}
              fill="none"
              stroke="url(#bp-line)"
              strokeWidth="1.4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2.4 + i * 0.3, ease: 'easeInOut', delay: 0.2 + i * 0.15 }}
            />
          ))}

          {[
            [420, 180], [420, 420], [760, 420], [760, 280],
            [300, 520], [300, 360], [900, 360], [900, 560],
            [620, 260], [620, 500], [1000, 500],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={`n${i}`}
              cx={cx}
              cy={cy}
              r="3.5"
              fill="#38BDF8"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 1 + i * 0.08 }}
            />
          ))}
        </svg>
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(500px 300px at 15% 30%, rgba(56,189,248,0.15), transparent 60%), radial-gradient(600px 300px at 85% 70%, rgba(37,99,235,0.2), transparent 60%)',
        }}
      />

      <motion.div
        style={{ y }}
        className="container-px relative mx-auto grid w-full max-w-6xl gap-12 py-24 md:grid-cols-2 md:items-center"
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-200 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            Engineered to scale
          </motion.span>
          <WordReveal
            as="h2"
            text="Built like infrastructure. Shipped like a product."
            highlightWords={['infrastructure.', 'product.']}
            className="mt-6 text-4xl font-semibold sm:text-5xl md:text-6xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.5 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            From architecture diagrams to deploy pipelines, we engineer systems
            that stay fast, stay secure, and keep growing with your business.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.3 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { k: 'Uptime', v: '99.98%' },
            { k: 'Avg. Load', v: '< 1.2s' },
            { k: 'Lighthouse', v: '97 / 100' },
            { k: 'Deploy', v: '< 60s' },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
            >
              <div className="text-[10px] uppercase tracking-widest text-slate-400">{s.k}</div>
              <div className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
                {s.v}
              </div>
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '82%' }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-cyan"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
