import { motion } from 'framer-motion'
import ServiceIcon from './ServiceIcon.jsx'

const spring = { type: 'spring', stiffness: 100, damping: 16, mass: 0.6 }

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: spring },
}

const cards = [
  { key: 'societal', span: 'md:col-span-2 md:row-span-2', icon: 'shield', title: 'Societal Impact Solutions', blurb: 'Products that fix real West African problems — rent scams, land fraud, record-keeping. Escavio and KromMap are just the start.', big: true },
  { key: 'gov', span: 'md:col-span-2', icon: 'gov', title: 'Government & Public Sector', blurb: 'Digitize records, deploy citizen portals, and adopt AI with safeguards built in.' },
  { key: 'ai', span: 'md:col-span-2', icon: 'bot', title: 'AI Automation for Businesses', blurb: 'AI front desks, WhatsApp chatbots, and workflow automation that pays for itself in weeks.' },
  { key: 'web', span: 'md:col-span-2', icon: 'code', title: 'Custom Software & Web', blurb: 'Fast, SEO-ready sites, dashboards, and internal tools — engineered to last.' },
  { key: 'mobile', span: 'md:col-span-1', icon: 'device', title: 'Mobile Apps', blurb: 'iOS & Android from MVP to launch.' },
  { key: 'shop', span: 'md:col-span-1', icon: 'cart', title: 'E-commerce', blurb: 'MoMo, card, and global checkout.' },
  { key: 'launch', span: 'md:col-span-2', icon: 'rocket', title: 'Landing Pages & Campaigns', blurb: 'Conversion-focused pages shipped in days, not months.' },
]

export default function BentoFeatures() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(37,99,235,0.18),transparent_60%),radial-gradient(600px_400px_at_100%_100%,rgba(56,189,248,0.14),transparent_60%)]" />
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={spring}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-200 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            Capabilities
          </span>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white [text-wrap:balance] sm:mt-5 sm:text-3xl md:text-5xl">
            Three pillars.{' '}
            <span className="bg-gradient-to-r from-brand-400 via-accent-sky to-accent-cyan bg-clip-text text-transparent">
              Full-stack engineering
            </span>{' '}
            behind each one.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:mt-5 sm:text-base md:text-lg">
            Whether we are protecting a tenant, digitizing a ministry, or
            automating a business — it is the same small team, the same clean
            process, the same obsession with shipping things that work.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-10 grid auto-rows-[180px] grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:mt-16 md:auto-rows-[200px] md:grid-cols-4"
        >
          {cards.map((c) => (
            <BentoCard key={c.key} card={c} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function BentoCard({ card }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={spring}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_0_60px_-10px_rgba(56,189,248,0.35)] ${card.span}`}
      style={{ borderColor: 'rgba(255,255,255,0.1)' }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(400px circle at var(--x,50%) var(--y,0%), rgba(56,189,248,0.15), transparent 40%)',
        }}
      />
      <div className="relative flex h-full flex-col justify-between">
        <div>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-accent-cyan ring-1 ring-inset ring-white/10 transition-colors duration-300 group-hover:bg-accent-cyan/15">
            <ServiceIcon name={card.icon} />
          </span>
          <h3 className={`mt-5 font-display font-semibold text-white ${card.big ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
            {card.title}
          </h3>
          <p className={`mt-2 text-slate-300 ${card.big ? 'max-w-md text-base' : 'text-sm'}`}>
            {card.blurb}
          </p>
        </div>

        {card.big && (
          <div className="mt-6 grid grid-cols-3 gap-3">
            {['React', 'Next.js', 'Tailwind', 'Node', 'Postgres', 'React Native'].map((t) => (
              <span key={t} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-xs font-medium text-slate-200 backdrop-blur-sm">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}
