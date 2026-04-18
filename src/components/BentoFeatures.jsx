import { motion } from 'framer-motion'
import ServiceIcon from './ServiceIcon.jsx'

const spring = { type: 'spring', stiffness: 100, damping: 16, mass: 0.6 }

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: spring },
}

const cards = [
  { key: 'web', span: 'md:col-span-2 md:row-span-2', icon: 'code', title: 'Website Development', blurb: 'Fast, SEO-ready business websites built with modern frameworks.', big: true },
  { key: 'mobile', span: 'md:col-span-2', icon: 'device', title: 'Mobile App Development', blurb: 'Native-quality iOS & Android apps, from MVP to launch.' },
  { key: 'shop', span: 'md:col-span-2', icon: 'cart', title: 'E-commerce Websites', blurb: 'MoMo, card, and global checkout — inventory and orders included.' },
  { key: 'school', span: 'md:col-span-2', icon: 'dashboard', title: 'School & Management Systems', blurb: 'Students, fees, results, HR — all in one dashboard.' },
  { key: 'seo', span: 'md:col-span-1', icon: 'search', title: 'SEO Optimization', blurb: 'Rank higher. Grow organically.' },
  { key: 'bot', span: 'md:col-span-1', icon: 'bot', title: 'Automation Bots', blurb: 'WhatsApp, Telegram, AI workflows.' },
  { key: 'launch', span: 'md:col-span-2', icon: 'rocket', title: 'Landing Pages', blurb: 'High-converting pages shipped in days, not months.' },
]

export default function BentoFeatures() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32">
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
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-brand-400 via-accent-sky to-accent-cyan bg-clip-text text-transparent">
              ship and scale
            </span>
            .
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            One team, one clear process, and the full stack of services a
            growing business actually needs.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-16 grid auto-rows-[200px] grid-cols-1 gap-5 md:grid-cols-4"
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
