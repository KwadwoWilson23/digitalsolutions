import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import WordReveal from './WordReveal.jsx'

const chapters = [
  {
    idx: '01',
    title: 'Software that solves problems everyday people face.',
    body: 'Escavio fights rent scams with verified listings and escrow. KromMap protects families from land fraud. We build the products West Africa has been waiting for — where it hurts the most.',
    tag: 'Societal Impact Solutions',
    proofs: ['Escavio · Rent fraud & escrow', 'KromMap · Land fraud detection'],
    visual: 'web',
  },
  {
    idx: '02',
    title: 'Systems that help government agencies work like it is 2026.',
    body: 'We digitize records, build citizen portals, and roll out AI where it earns its keep — so ministries, agencies, and district assemblies deliver faster, cleaner, and more accountable services.',
    tag: 'Government & Public Sector',
    proofs: ['Records digitization', 'AI adoption playbooks', 'Secure citizen portals'],
    visual: 'dashboard',
  },
  {
    idx: '03',
    title: 'AI automation that gives businesses their edge back.',
    body: 'From WhatsApp chatbots to a full AI front desk to end-to-end workflow automation — we integrate the tools that let SMBs and mid-sized companies serve more customers, faster, without hiring for it.',
    tag: 'AI Automation for Businesses',
    proofs: ['AI front desk · 24/7', 'Workflow automation', 'Custom AI integrations'],
    visual: 'bot',
  },
]

export default function StickyServices() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-px mx-auto max-w-7xl py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-700 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            What we solve
          </span>
          <WordReveal
            as="h2"
            text="Three pillars. One studio. Software and AI built for real impact."
            highlightWords={['Three', 'pillars.', 'real', 'impact.']}
            highlightClass="text-brand-600"
            className="mt-4 text-[28px] font-semibold leading-[1.15] text-navy sm:mt-5 sm:text-5xl md:text-6xl"
          />
        </div>
      </div>

      <div className="container-px mx-auto max-w-7xl pb-16 sm:pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 md:gap-16">
          <div className="divide-y divide-slate-200 md:min-h-[300vh] md:divide-y-0">
            {chapters.map((c, i) => (
              <Chapter key={c.idx} chapter={c} index={i} total={chapters.length} />
            ))}
          </div>

          <div className="hidden md:block">
            <div className="sticky top-24 aspect-[4/5] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-glow">
              <StickyVisual chapters={chapters} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Chapter({ chapter, total }) {
  return (
    <div className="flex flex-col justify-center py-10 md:min-h-[100vh] md:py-0">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <span className="font-display text-xs font-semibold tracking-widest text-brand-600 sm:text-sm">
          {chapter.idx} / {String(total).padStart(2, '0')}
        </span>
        <span className="hidden h-px w-12 bg-brand-200 sm:block" />
        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 sm:text-xs">{chapter.tag}</span>
      </div>
      <h3 className="mt-3 font-display text-[26px] font-semibold leading-[1.15] tracking-tight text-navy sm:mt-6 sm:text-4xl md:text-5xl">
        {chapter.title}
      </h3>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.1 }}
        className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-600 sm:mt-6 sm:text-lg"
      >
        {chapter.body}
      </motion.p>
      {chapter.proofs && (
        <motion.ul
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.2 }}
          className="mt-4 flex flex-wrap gap-2 sm:mt-5"
        >
          {chapter.proofs.map((label) => (
            <li
              key={label}
              className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-semibold text-brand-700 sm:text-xs"
            >
              {label}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  )
}

function StickyVisual({ chapters }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={ref} className="relative h-full w-full">
      {chapters.map((c, i) => {
        const start = i / chapters.length
        const end = (i + 1) / chapters.length
        const midIn = start + 0.05
        const midOut = end - 0.05
        return (
          <PanelWrap key={c.idx} progress={scrollYProgress} start={start} mid1={midIn} mid2={midOut} end={end}>
            <Panel kind={c.visual} />
          </PanelWrap>
        )
      })}
    </div>
  )
}

function PanelWrap({ progress, start, mid1, mid2, end, children }) {
  const opacity = useTransform(progress, [start, mid1, mid2, end], [0, 1, 1, 0])
  const scale = useTransform(progress, [start, mid1, mid2, end], [1.04, 1, 1, 0.98])
  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0">
      {children}
    </motion.div>
  )
}

const IMAGES = {
  web: '/projects/web.png',
  dashboard: '/projects/dashboard.png',
  bot: '/projects/bot.png',
}

function Panel({ kind, active }) {
  const src = IMAGES[kind]
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(56,189,248,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(600px 300px at 30% 20%, rgba(56,189,248,0.28), transparent 60%), radial-gradient(500px 260px at 80% 80%, rgba(37,99,235,0.25), transparent 60%)',
        }}
      />
      <motion.img
        key={kind}
        src={src}
        alt={`${kind} preview`}
        loading="lazy"
        decoding="async"
        width="1200"
        height="750"
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-[1] h-[86%] w-[86%] rounded-2xl border border-white/10 object-contain shadow-2xl"
      />
    </div>
  )
}

