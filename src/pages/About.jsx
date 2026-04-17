import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { STATS, PROCESS } from '../data/company.js'

const values = [
  {
    title: 'Clarity',
    desc: 'We explain things plainly — no tech jargon, no surprises, no padded invoices.',
  },
  {
    title: 'Craft',
    desc: 'Design and engineering that holds up under real users, real devices, real load.',
  },
  {
    title: 'Commitment',
    desc: 'We show up after launch too — you get a partner, not just a vendor.',
  },
  {
    title: 'Speed',
    desc: 'Small, focused team. Fast decisions. Fast shipping. Fast websites.',
  },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A small team with one focus: your growth"
        description="Kwadwo Wilson Digital Solutions is a Ghana-based digital agency helping startups, schools, and established businesses launch and scale online."
      />

      <section className="container-px mx-auto max-w-7xl pb-14">
        <dl className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:grid-cols-2 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl bg-slate-50 p-6 text-center">
              <dd className="font-display text-3xl font-semibold text-navy">{s.value}</dd>
              <dt className="mt-1 text-xs uppercase tracking-widest text-slate-500">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              Our story
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Digital work done the right way.
            </h2>
          </div>
          <div className="space-y-5 text-slate-600 md:col-span-3">
            <p>
              We started Kwadwo Wilson Digital Solutions because too many
              businesses were paying for websites that looked good once and then
              broke — slow, unmaintained, invisible on Google.
            </p>
            <p>
              Today we build websites, apps, stores, management systems, and
              automations for teams that want a digital partner who actually
              cares about outcomes. Our work is clean, fast, and built to last.
            </p>
            <p>
              Whether you're a founder shipping your first product or a school
              moving from paper to digital, we'll meet you where you are — and
              take you where you want to go.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="section container-px mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <article key={v.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                      <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
                    </svg>
                  </span>
                  <h3 className="font-display text-lg font-semibold text-navy">{v.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          How we work
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {PROCESS.map((p) => (
            <li key={p.step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <span className="font-display text-sm font-semibold text-brand-600">{p.step}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <CTASection />
    </>
  )
}
