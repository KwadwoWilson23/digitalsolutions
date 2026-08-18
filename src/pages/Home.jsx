import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero.jsx'
import StatementSection from '../components/StatementSection.jsx'
import StickyServices from '../components/StickyServices.jsx'
import BlueprintScene from '../components/BlueprintScene.jsx'
import BentoFeatures from '../components/BentoFeatures.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import WordReveal from '../components/WordReveal.jsx'
import { Stagger, StaggerItem, spring } from '../components/Motion.jsx'
import { PROJECTS, TESTIMONIALS, PROCESS } from '../data/company.js'

export default function Home() {
  return (
    <>
      <Hero />

      <StatementSection
        eyebrow="The studio"
        text="We build software and AI that quietly does the heavy lifting."
        highlightWords={['software', 'AI']}
        sub="For citizens navigating rent and land fraud. For agencies moving from paper to platform. For businesses ready to compete with AI on their side."
        variant="navy"
      />

      <StickyServices />

      <BlueprintScene />

      <StatementSection
        eyebrow="End-to-end partner"
        text="Innovate. Build. Impact."
        highlightWords={['Impact.']}
        sub="One small team handles every layer — research, design, engineering, launch, and the AI stack underneath — with no agency chains and no hand-offs."
        variant="brand"
      />

      <BentoFeatures />

      <section className="bg-slate-50">
        <div className="section container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="How we work"
            title="A simple, proven process"
            description="We keep it transparent and focused — no jargon, no surprises."
          />
          <Stagger as="ol" className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 sm:grid-cols-2 md:grid-cols-4">
            {PROCESS.map((p) => (
              <StaggerItem
                key={p.step}
                as="li"
                variant="scale"
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-colors duration-200 hover:border-brand-300 hover:shadow-glow"
              >
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-100 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="relative font-display text-sm font-semibold text-brand-600">{p.step}</span>
                <h3 className="relative mt-2 font-display text-lg font-semibold text-navy">{p.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              Recent work
            </span>
            <WordReveal
              as="h2"
              text="Projects we're proud of."
              highlightWords={['proud']}
              highlightClass="text-brand-600"
              className="mt-4 text-3xl font-semibold text-navy sm:text-4xl md:text-5xl"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={spring}
          >
            <Link to="/portfolio" className="btn-secondary">View all</Link>
          </motion.div>
        </div>
        <Stagger className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 3).map((p) => (
            <StaggerItem
              key={p.title}
              as="a"
              href={p.link || '#'}
              target={p.link ? '_blank' : undefined}
              rel={p.link ? 'noreferrer' : undefined}
              variant="scale"
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
                      className="pointer-events-none absolute -inset-4 blur-3xl"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                      style={{ background: 'radial-gradient(260px circle at 30% 30%, rgba(255,255,255,0.25), transparent 60%)' }}
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
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{t}</span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-slate-50">
        <div className="section container-px mx-auto max-w-7xl">
          <SectionHeader eyebrow="Testimonials" title="What clients say" />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <StaggerItem
                key={t.name}
                variant="scale"
                whileHover={{ y: -4 }}
                as="figure"
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-colors duration-200 hover:border-brand-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-brand-300" aria-hidden="true"><path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7Zm11 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7Z" /></svg>
                <blockquote className="mt-4 text-slate-700">"{t.quote}"</blockquote>
                <figcaption className="mt-6">
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </figcaption>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  )
}
