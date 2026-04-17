import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
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
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                filter === c
                  ? 'bg-brand-600 text-white shadow-glow'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article key={p.title} className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-colors duration-200 hover:border-brand-300">
              <div className={`relative flex aspect-[4/3] items-end bg-gradient-to-br ${p.color}`}>
                <div className="absolute inset-0 opacity-20 mix-blend-overlay [background-image:radial-gradient(circle_at_30%_20%,white,transparent_40%),radial-gradient(circle_at_80%_70%,white,transparent_35%)]" />
                <div className="relative p-6 text-white">
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">{p.category}</span>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{p.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-slate-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
