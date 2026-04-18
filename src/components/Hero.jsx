import { motion } from 'framer-motion'
import AnimatedHeadline from './AnimatedHeadline.jsx'
import MagneticButton from './MagneticButton.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 18, delay: 0.4 + i * 0.08 },
  }),
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <Background />
      <div className="container-px mx-auto grid max-w-7xl gap-12 pb-28 pt-20 md:grid-cols-12 md:pb-36 md:pt-28">
        <div className="md:col-span-7">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={-2}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-200 backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            </span>
            Digital solutions agency
          </motion.span>

          <div className="mt-6">
            <AnimatedHeadline
              className="text-4xl text-white sm:text-5xl md:text-6xl"
              segments={[
                { text: 'We engineer' },
                { text: 'digital products', gradient: true },
                { text: 'that grow businesses.' },
              ]}
            />
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
          >
            Websites, mobile apps, e-commerce, school systems, SEO, and
            automation — built with obsessive attention to speed, design, and
            conversion.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton to="/contact" variant="primary">
              Start a project <IconArrow />
            </MagneticButton>
            <MagneticButton to="/portfolio" variant="ghost">
              See our work
            </MagneticButton>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-14 grid max-w-xl grid-cols-3 gap-6"
          >
            <Stat value="50+" label="Projects shipped" />
            <Stat value="30+" label="Happy clients" />
            <Stat value="99%" label="On-time delivery" />
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.3 }}
          className="relative md:col-span-5"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="font-display text-2xl font-semibold text-white md:text-3xl">{value}</dd>
      <p className="mt-1 text-xs text-slate-400">{label}</p>
    </div>
  )
}

function Background() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(800px_500px_at_-10%_20%,rgba(37,99,235,0.22),transparent_60%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] [mask-image:linear-gradient(to_bottom,white,transparent_80%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,rgba(56,189,248,0.25),rgba(37,99,235,0.25),rgba(14,165,233,0.25),rgba(56,189,248,0.25))] blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      />
    </>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-brand-600/30 via-accent-cyan/30 to-accent-sky/30 blur-2xl" />
      <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_-20px_rgba(2,6,23,0.8)] backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <span className="ml-3 rounded-md bg-white/5 px-2 py-0.5 text-xs text-slate-400">
            kwadwowilson.dev
          </span>
        </div>
        <div className="mt-5 grid grid-cols-5 gap-3">
          <div className="col-span-2 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 p-4 text-white">
            <div className="text-[10px] uppercase tracking-widest text-brand-100">Revenue</div>
            <div className="mt-2 font-display text-xl font-semibold">+38%</div>
            <MiniSpark className="mt-2 text-brand-100" />
          </div>
          <div className="col-span-3 rounded-xl bg-white/[0.04] p-4 ring-1 ring-inset ring-white/10">
            <div className="text-[10px] uppercase tracking-widest text-slate-400">Visitors</div>
            <div className="mt-2 font-display text-xl font-semibold text-white">24,812</div>
            <MiniBars className="mt-2 text-accent-cyan" />
          </div>

          <div className="col-span-3 rounded-xl bg-white/[0.04] p-4 ring-1 ring-inset ring-white/10">
            <div className="text-[10px] uppercase tracking-widest text-slate-400">Conversion</div>
            <div className="mt-2 font-display text-xl font-semibold text-white">6.4%</div>
            <div className="mt-2 h-2 w-full rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-cyan" style={{ width: '74%' }} />
            </div>
          </div>
          <div className="col-span-2 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-white ring-1 ring-inset ring-white/10">
            <div className="text-[10px] uppercase tracking-widest text-brand-200">Uptime</div>
            <div className="mt-2 font-display text-xl font-semibold">99.98%</div>
            <div className="mt-2 flex items-end gap-1">
              {[6, 7, 5, 8, 9, 7, 10].map((h, i) => (
                <span key={i} className="w-1.5 rounded-sm bg-accent-cyan/80" style={{ height: `${h * 3}px` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 14, delay: 0.9 }}
        className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-[0_20px_60px_-20px_rgba(2,6,23,0.9)] backdrop-blur-xl md:block"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-cyan/15 text-accent-cyan">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M20 6 9 17l-5-5"/></svg>
          </span>
          <div>
            <div className="text-sm font-semibold text-white">Deploy successful</div>
            <div className="text-xs text-slate-400">Live in 42s</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function MiniSpark({ className }) {
  return (
    <svg viewBox="0 0 120 40" className={`h-8 w-full ${className}`} aria-hidden="true">
      <path d="M0 30 L20 22 L40 26 L60 14 L80 18 L100 8 L120 12" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}
function MiniBars({ className }) {
  return (
    <svg viewBox="0 0 120 40" className={`h-8 w-full ${className}`} aria-hidden="true">
      {[6, 14, 10, 18, 12, 22, 16, 26, 20, 30, 24, 34].map((h, i) => (
        <rect key={i} x={i * 10} y={40 - h} width="6" height={h} rx="1.5" fill="currentColor" />
      ))}
    </svg>
  )
}
function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
