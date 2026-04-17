import { Link } from 'react-router-dom'
import { CONTACT } from '../data/company.js'

export default function CTASection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-16">
      <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-14 shadow-glow md:px-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_240px_at_100%_0%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(500px_220px_at_0%_100%,rgba(6,182,212,0.25),transparent_60%)]" />
        <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Have a project in mind? <span className="gradient-text">Let's build it.</span>
            </h2>
            <p className="mt-4 max-w-lg text-slate-300">
              Tell us about your goals and we'll get back within 24 hours with a
              clear plan and a fair quote.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link to="/contact" className="btn-primary">
              Start a project
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
            <a href={`tel:${CONTACT.phoneRaw}`} className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white">
              Or call {CONTACT.phoneLocal}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
