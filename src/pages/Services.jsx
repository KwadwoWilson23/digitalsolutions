import PageHeader from '../components/PageHeader.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import CTASection from '../components/CTASection.jsx'
import { Stagger, StaggerItem } from '../components/Motion.jsx'
import { SERVICES } from '../data/company.js'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to go digital"
        description="We combine clean design with solid engineering to deliver products that load fast, rank well, and drive real results."
      />

      <section className="container-px mx-auto max-w-7xl pb-20">
        <Stagger className="grid gap-6 md:grid-cols-2" stagger={0.07}>
          {SERVICES.map((s) => (
            <StaggerItem
              key={s.slug}
              variant="scale"
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-colors duration-200 hover:border-brand-300"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">
                  <ServiceIcon name={s.icon} />
                </span>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                  {s.tagline}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-700">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-brand-600" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTASection />
    </>
  )
}
