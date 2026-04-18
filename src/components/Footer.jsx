import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { Stagger, StaggerItem } from './Motion.jsx'
import { CONTACT } from '../data/company.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-10 bg-navy text-slate-300">
      <div className="container-px mx-auto max-w-7xl py-16">
        <Stagger className="grid gap-10 md:grid-cols-4" amount={0.1}>
          <StaggerItem className="md:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              We design and engineer digital products — websites, mobile apps,
              e-commerce stores, school systems, and automation bots — that help
              businesses grow online.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10">
                <IconMail /> {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10">
                <IconPhone /> {CONTACT.phone}
              </a>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link className="transition-colors duration-200 hover:text-white" to="/about">About us</Link></li>
              <li><Link className="transition-colors duration-200 hover:text-white" to="/services">Services</Link></li>
              <li><Link className="transition-colors duration-200 hover:text-white" to="/portfolio">Portfolio</Link></li>
              <li><Link className="transition-colors duration-200 hover:text-white" to="/contact">Contact</Link></li>
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>E-commerce Websites</li>
              <li>School Management Systems</li>
              <li>SEO Optimization</li>
              <li>Automation Bots</li>
            </ul>
          </StaggerItem>
        </Stagger>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center">
          <p>© {year} Kwadwo Wilson Digital Solutions. All rights reserved.</p>
          <p>Built in Ghana · Serving clients worldwide</p>
        </div>
      </div>
    </footer>
  )
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}
function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.29a16 16 0 0 0 6.5 6.5l1.54-1.62a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1Z" />
    </svg>
  )
}
