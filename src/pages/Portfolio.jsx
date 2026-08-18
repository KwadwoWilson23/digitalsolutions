import { useMemo, useState } from 'react'
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { spring } from '../components/Motion.jsx'
import { PROJECTS } from '../data/company.js'

export default function Portfolio() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))],
    [],
  )
  const [filter, setFilter] = useState('All')
  const items = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Work we're proud of"
        description="A selection of websites, apps, and systems we've built for clients in retail, education, logistics, and more."
      />

      <section className="container-px mx-auto max-w-7xl pb-6">
        <LayoutGroup>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={{ show: { transition: { staggerChildren: 0.05 } } }}
            className="flex flex-wrap items-center gap-2"
          >
            {categories.map((c) => {
              const active = filter === c
              return (
                <motion.button
                  key={c}
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: spring } }}
                  onClick={() => setFilter(c)}
                  whileTap={{ scale: 0.96 }}
                  className={`relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active ? 'text-white' : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 -z-0 rounded-full bg-brand-600 shadow-glow"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{c}</span>
                </motion.button>
              )
            })}
          </motion.div>
        </LayoutGroup>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-20">
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.link || '#'}
                target={p.link ? '_blank' : undefined}
                rel={p.link ? 'noreferrer' : undefined}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ ...spring, delay: i * 0.04 }}
                whileHover={{ y: -6 }}
                className="group block cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-colors duration-200 hover:border-brand-300 hover:shadow-glow"
              >
                <div className={`relative flex aspect-[4/3] items-end overflow-hidden bg-gradient-to-br ${p.color}`}>
                  {p.image && (
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="600"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {!p.image && (
                    <>
                      <div className="absolute inset-0 opacity-20 mix-blend-overlay [background-image:radial-gradient(circle_at_30%_20%,white,transparent_40%),radial-gradient(circle_at_80%_70%,white,transparent_35%)]" />
                      <motion.div
                        aria-hidden
                        className="pointer-events-none absolute -inset-4 opacity-60 blur-2xl"
                        animate={{ opacity: [0.4, 0.7, 0.4] }}
                        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                        style={{ background: 'radial-gradient(300px circle at 30% 30%, rgba(255,255,255,0.2), transparent 60%)' }}
                      />
                    </>
                  )}
                  <div className="relative p-6 text-white">
                    <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">{p.category}</span>
                    <h3 className="mt-3 font-display text-2xl font-semibold">{p.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-slate-600">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{t}</span>
                      ))}
                    </div>
                    {p.link && (
                      <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-brand-600 transition-transform duration-200 group-hover:translate-x-0.5">
                        Visit
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
                      </span>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CTASection />
    </>
  )
}
