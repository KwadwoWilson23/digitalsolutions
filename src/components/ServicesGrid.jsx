import { Link } from 'react-router-dom'
import ServiceIcon from './ServiceIcon.jsx'
import { SERVICES } from '../data/company.js'

export default function ServicesGrid({ limit }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s) => (
        <Link
          key={s.slug}
          to="/services"
          className="group relative flex cursor-pointer flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-colors duration-200 hover:border-brand-300 hover:bg-brand-50/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">
            <ServiceIcon name={s.icon} />
          </span>
          <h3 className="font-display text-lg font-semibold text-navy">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.tagline}</p>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
            Learn more
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  )
}
