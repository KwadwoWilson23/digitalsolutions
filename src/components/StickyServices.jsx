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
      <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            What we solve
          </span>
          <WordReveal
            as="h2"
            text="Three pillars. One studio. Software and AI built for real impact."
            highlightWords={['Three', 'pillars.', 'real', 'impact.']}
            highlightClass="text-brand-600"
            className="mt-5 text-4xl font-semibold text-navy sm:text-5xl md:text-6xl"
          />
        </div>
      </div>

      <div className="container-px mx-auto max-w-7xl pb-24 md:pb-32">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="md:min-h-[500vh]">
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

        <div className="mt-12 grid gap-6 md:hidden">
          {chapters.map((c) => (
            <div key={c.idx} className="aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-slate-950">
              <Panel kind={c.visual} active />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Chapter({ chapter, index, total }) {
  return (
    <div className="flex min-h-[90vh] flex-col justify-center md:min-h-[100vh]">
      <div className="flex items-center gap-3">
        <span className="font-display text-sm font-semibold tracking-widest text-brand-600">
          {chapter.idx} / {String(total).padStart(2, '0')}
        </span>
        <span className="h-px w-12 bg-brand-200" />
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">{chapter.tag}</span>
      </div>
      <WordReveal
        as="h3"
        text={chapter.title}
        className="mt-6 text-3xl font-semibold text-navy sm:text-4xl md:text-5xl"
        amount={0.4}
      />
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.2 }}
        className="mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg"
      >
        {chapter.body}
      </motion.p>
      {chapter.proofs && (
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.35 }}
          className="mt-5 flex flex-wrap gap-2"
        >
          {chapter.proofs.map((label) => (
            <li
              key={label}
              className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
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
  mobile: '/projects/mobile.png',
  shop: '/projects/shop.png',
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
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-[1] h-[86%] w-[86%] rounded-2xl border border-white/10 object-contain shadow-2xl"
      />
    </div>
  )
}

function BrowserMock() {
  return (
    <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-3 rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">kasir.tech</span>
      </div>
      <div className="mt-4 space-y-3">
        <div className="h-28 rounded-xl bg-gradient-to-br from-brand-500 to-accent-cyan" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-14 rounded-lg bg-white/5" />
          <div className="h-14 rounded-lg bg-white/5" />
          <div className="h-14 rounded-lg bg-white/5" />
        </div>
        <div className="h-2 w-1/2 rounded bg-white/10" />
        <div className="h-2 w-3/4 rounded bg-white/10" />
      </div>
    </div>
  )
}

function PhoneMock() {
  return (
    <div className="relative h-[380px] w-[200px] rounded-[2.2rem] border-[8px] border-slate-800 bg-slate-900 shadow-2xl">
      <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
      <div className="h-full w-full overflow-hidden rounded-[1.6rem] p-3">
        <div className="h-20 rounded-xl bg-gradient-to-br from-brand-500 to-accent-cyan" />
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="h-16 rounded-lg bg-white/5" />
          <div className="h-16 rounded-lg bg-white/5" />
          <div className="h-16 rounded-lg bg-white/5" />
          <div className="h-16 rounded-lg bg-white/5" />
        </div>
        <div className="mt-3 h-2 w-2/3 rounded bg-white/10" />
      </div>
    </div>
  )
}

function ShopCard() {
  return (
    <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-xl">
      <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-brand-600 to-accent-sky" />
      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-white">Premium Tote</div>
          <div className="text-xs text-slate-400">Bloom Boutique</div>
        </div>
        <div className="text-right">
          <div className="text-base font-semibold text-white">GHS 240</div>
          <div className="text-[10px] uppercase tracking-widest text-accent-cyan">In stock</div>
        </div>
      </div>
      <button className="mt-4 w-full rounded-full bg-gradient-to-r from-brand-500 to-accent-cyan py-2.5 text-sm font-semibold text-white">
        Add to cart
      </button>
    </div>
  )
}

function DashboardMock() {
  return (
    <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-white">Sunrise Academy</div>
        <div className="text-[10px] text-slate-400">Term 2 · 2026</div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-white/5 p-3"><div className="text-[9px] text-slate-400">Students</div><div className="text-base font-semibold text-white">842</div></div>
        <div className="rounded-lg bg-white/5 p-3"><div className="text-[9px] text-slate-400">Staff</div><div className="text-base font-semibold text-white">56</div></div>
        <div className="rounded-lg bg-white/5 p-3"><div className="text-[9px] text-slate-400">Fees</div><div className="text-base font-semibold text-white">92%</div></div>
      </div>
      <div className="mt-4 rounded-xl bg-white/5 p-4">
        <div className="text-[10px] uppercase tracking-widest text-slate-400">Attendance this week</div>
        <div className="mt-3 flex items-end gap-1.5">
          {[30, 40, 55, 48, 62, 70, 58].map((h, i) => (
            <div key={i} className="w-4 rounded-t bg-gradient-to-t from-brand-500 to-accent-cyan" style={{ height: `${h}px` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function BotMock() {
  return (
    <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-cyan/15 text-accent-cyan">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M12 4v4M9 14h.01M15 14h.01" /></svg>
        </span>
        <div>
          <div className="text-sm font-semibold text-white">Auto-Assist</div>
          <div className="text-[10px] text-slate-400">Online · replying in ~2s</div>
        </div>
      </div>
      <div className="mt-5 space-y-3">
        <div className="max-w-[70%] rounded-2xl rounded-bl-md bg-white/5 px-3 py-2 text-xs text-slate-200">Hi, do you deliver to Kumasi?</div>
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-gradient-to-br from-brand-500 to-accent-cyan px-3 py-2 text-xs text-white">
          Yes — orders over GHS 200 ship free. Want to see today's deals?
        </div>
        <div className="max-w-[60%] rounded-2xl rounded-bl-md bg-white/5 px-3 py-2 text-xs text-slate-200">Yes please</div>
        <div className="ml-auto flex max-w-[40%] items-center gap-1 rounded-2xl rounded-br-md bg-white/10 px-3 py-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400 [animation-delay:150ms]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400 [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  )
}
