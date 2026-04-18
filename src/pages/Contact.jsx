import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import { Stagger, StaggerItem, FadeUp, spring } from '../components/Motion.jsx'
import { CONTACT, SERVICES } from '../data/company.js'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: '',
  })

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    const lines = [
      `*New project inquiry — ${form.service || 'General'}*`,
      '',
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      form.phone && `*Phone:* ${form.phone}`,
      form.service && `*Service:* ${form.service}`,
      form.budget && `*Budget:* ${form.budget}`,
      '',
      '*Message:*',
      form.message,
    ].filter(Boolean)
    const text = encodeURIComponent(lines.join('\n'))
    const waNumber = CONTACT.phoneRaw.replace('+', '')
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank', 'noopener,noreferrer')
    setTimeout(() => setStatus('sent'), 400)
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Tell us what you're building and we'll reply within 24 hours with next steps, timelines, and a transparent quote."
      />

      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="grid gap-8 md:grid-cols-5">
          <Stagger className="space-y-6 md:col-span-2">
            <InfoCard icon={<IconMail />} label="Email us" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
            <InfoCard icon={<IconPhone />} label="Call / WhatsApp" value={CONTACT.phoneLocal} href={`tel:${CONTACT.phoneRaw}`} />
            <InfoCard icon={<IconPin />} label="Based in" value={CONTACT.location} />
            <InfoCard icon={<IconClock />} label="Hours" value={CONTACT.hours} />

            <StaggerItem
              variant="scale"
              className="rounded-2xl border border-slate-200 bg-navy p-6 text-white shadow-card"
            >
              <h3 className="font-display text-lg font-semibold">Prefer a quick chat?</h3>
              <p className="mt-2 text-sm text-slate-300">Message us on WhatsApp — we usually reply within a few minutes during work hours.</p>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-slate-100"
              >
                <IconChat /> Chat on WhatsApp
              </motion.a>
            </StaggerItem>
          </Stagger>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={spring}
            onSubmit={onSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card md:col-span-3 md:p-8"
          >
            <Stagger className="grid gap-5 sm:grid-cols-2" stagger={0.06}>
              <Field label="Full name" name="name" value={form.name} onChange={onChange} required placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="jane@company.com" />
              <Field label="Phone (optional)" name="phone" value={form.phone} onChange={onChange} placeholder="+233 ..." />
              <SelectField label="Service" name="service" value={form.service} onChange={onChange}>
                <option value="">Select a service</option>
                {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
              </SelectField>
              <SelectField label="Budget (optional)" name="budget" value={form.budget} onChange={onChange}>
                <option value="">Select a budget</option>
                <option>Under GHS 5,000</option>
                <option>GHS 5,000 – 15,000</option>
                <option>GHS 15,000 – 40,000</option>
                <option>GHS 40,000+</option>
              </SelectField>
            </Stagger>

            <FadeUp className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={onChange}
                placeholder="Tell us what you want to build, your goals, and any deadlines…"
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
              />
            </FadeUp>

            <FadeUp className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <p className="text-xs text-slate-500">
                We reply within 24 hours. Your details are never shared.
              </p>
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 0 40px 6px rgba(56,189,248,0.35)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-cyan px-7 py-3.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message ready' : 'Send message'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </motion.button>
            </FadeUp>
          </motion.form>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', value, onChange, required, placeholder }) {
  return (
    <StaggerItem>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-700">
        {label}{required && <span className="ml-0.5 text-brand-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-shadow duration-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
      />
    </StaggerItem>
  )
}
function SelectField({ label, name, value, onChange, children }) {
  return (
    <StaggerItem>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition-shadow duration-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
      >
        {children}
      </select>
    </StaggerItem>
  )
}
function InfoCard({ icon, label, value, href }) {
  const Wrap = href ? motion.a : motion.div
  return (
    <StaggerItem variant="scale">
      <Wrap
        whileHover={{ y: -3 }}
        transition={spring}
        {...(href ? { href } : {})}
        className={`flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-colors duration-200 ${href ? 'hover:border-brand-300 hover:bg-brand-50/30 cursor-pointer' : ''}`}
      >
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">{icon}</span>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">{label}</div>
          <div className="mt-1 font-medium text-navy">{value}</div>
        </div>
      </Wrap>
    </StaggerItem>
  )
}

function IconMail() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
}
function IconPhone() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><path d="M22 16.92V21a1 1 0 0 1-1.11 1A19.86 19.86 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.29a16 16 0 0 0 6.5 6.5l1.54-1.62a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1Z" /></svg>
}
function IconPin() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><path d="M12 22s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12Z" /><circle cx="12" cy="10" r="2.5" /></svg>
}
function IconClock() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
}
function IconChat() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><path d="M21 12a8 8 0 1 1-3.1-6.3L21 5l-1 4.2A8 8 0 0 1 21 12Z" /></svg>
}
