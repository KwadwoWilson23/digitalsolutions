import PageHeader from '../components/PageHeader.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import CTASection from '../components/CTASection.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { Stagger, StaggerItem } from '../components/Motion.jsx'
import { PILLARS, SERVICES } from '../data/company.js'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="What we solve"
        title="Three pillars. One studio. Real impact."
        description="KASIR builds software and AI for citizens, government, and businesses across West Africa — from societal-impact products to public-sector modernization to AI automation for companies."
      />

      <section className="container-px mx-auto max-w-7xl pb-14">
        <Stagger className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {PILLARS.map((p) => (
            <StaggerItem
              key={p.slug}
              variant="scale"
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-colors duration-200 hover:border-brand-300 hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">
                  <ServiceIcon name={p.icon} />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-600">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm font-medium text-brand-700">{p.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.description}</p>

              <div className="mt-6 space-y-3">
                {p.proofPoints.map((pp) => (
                  <div key={pp.name} className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-display text-sm font-semibold text-navy">{pp.name}</span>
                      <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-brand-600 ring-1 ring-inset ring-brand-100">
                        {pp.label}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{pp.desc}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-700">
                {p.features.map((f) => (
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

      <section className="bg-slate-50">
        <div className="section container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Capabilities"
            title="The full toolkit behind every pillar"
            description="Under each pillar sits real engineering — websites, apps, e-commerce, dashboards, AI integrations, and automation."
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.06}>
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
        </div>
      </section>

      <CTASection />
    </>
  )
}
