import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { Stagger, StaggerItem, FadeUp, spring } from '../components/Motion.jsx'
import { STATS, PROCESS } from '../data/company.js'

const values = [
  { title: 'Clarity', desc: 'We explain things plainly — no tech jargon, no surprises, no padded invoices.' },
  { title: 'Craft', desc: 'Design and engineering that holds up under real users, real devices, real load.' },
  { title: 'Commitment', desc: 'We show up after launch too — you get a partner, not just a vendor.' },
  { title: 'Speed', desc: 'Small, focused team. Fast decisions. Fast shipping. Fast websites.' },
]

function AnimatedStat({ value, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const match = value.match(/^(\d+)(.*)$/)
  const hasNumber = !!match
  const endNum = hasNumber ? parseInt(match[1], 10) : 0
  const suffix = hasNumber ? match[2] : ''

  const mv = useMotionValue(0)
  const smooth = useSpring(mv, { stiffness: 80, damping: 20 })
  const rounded = useTransform(smooth, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (inView && hasNumber) mv.set(endNum)
  }, [inView, endNum, hasNumber, mv])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={spring}
      className="rounded-2xl bg-slate-50 p-6 text-center"
    >
      <motion.dd className="font-display text-3xl font-semibold text-navy">
        {hasNumber ? rounded : value}
      </motion.dd>
      <dt className="mt-1 text-xs uppercase tracking-widest text-slate-500">{label}</dt>
    </motion.div>
  )
}

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A small studio. Three big pillars. Real Ghanaian impact."
        description="KASIR is an Accra-based software and AI studio building products for citizens, government agencies, and businesses across West Africa. Innovate. Build. Impact."
      />

      <section className="container-px mx-auto max-w-7xl pb-14">
        <FadeUp className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:grid-cols-2 md:grid-cols-4" as="dl">
          {STATS.map((s) => (
            <AnimatedStat key={s.label} value={s.value} label={s.label} />
          ))}
        </FadeUp>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="grid gap-10 md:grid-cols-5">
          <FadeUp className="md:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              Our story
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Digital work done the right way.
            </h2>
          </FadeUp>
          <Stagger className="space-y-5 text-slate-600 md:col-span-3" stagger={0.1}>
            <StaggerItem as="p">
              KASIR started because too much software in Ghana was built for
              somewhere else. Landlords still scam tenants. Families still lose
              land. Ministries still lean on paper. SMBs still miss customers
              because nobody is at the phone.
            </StaggerItem>
            <StaggerItem as="p">
              So we build in three directions at once. Societal-impact products
              like Escavio and KromMap — tools that fight rent and land fraud
              head-on. Government solutions that help agencies digitize and
              adopt AI responsibly. And AI automation for businesses that want
              to serve more customers without hiring for it.
            </StaggerItem>
            <StaggerItem as="p">
              Whether you are a citizen looking for a safer way to rent, an
              agency modernizing a public service, or a business trying to
              compete on speed — we meet you where you are, and build what
              actually ships.
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="section container-px mx-auto max-w-7xl">
          <Stagger className="grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <StaggerItem
                key={v.title}
                variant="scale"
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-colors duration-200 hover:border-brand-300"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                      <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
                    </svg>
                  </span>
                  <h3 className="font-display text-lg font-semibold text-navy">{v.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{v.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <FadeUp as="h2" className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          How we work
        </FadeUp>
        <Stagger className="mt-10 grid gap-6 md:grid-cols-4" as="ol">
          {PROCESS.map((p) => (
            <StaggerItem
              key={p.step}
              variant="scale"
              whileHover={{ y: -4 }}
              as="li"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-colors duration-200 hover:border-brand-300"
            >
              <span className="font-display text-sm font-semibold text-brand-600">{p.step}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTASection />
    </>
  )
}
