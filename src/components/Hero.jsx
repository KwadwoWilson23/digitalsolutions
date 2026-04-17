import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Background />
      <div className="container-px mx-auto grid max-w-7xl gap-12 pb-24 pt-16 md:grid-cols-12 md:pb-32 md:pt-24">
        <div className="md:col-span-7 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Digital solutions agency
          </span>
          <h1 className="mt-5 font-display text-4xl font-700 font-semibold leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl">
            We build <span className="gradient-text">digital products</span> that help your business grow.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Websites, mobile apps, e-commerce stores, school systems, SEO, and
            automation bots — engineered for speed, designed to convert,
            delivered on time.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-primary">
              Start a project <IconArrow />
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              See our work
            </Link>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6">
            <Stat value="50+" label="Projects shipped" />
            <Stat value="30+" label="Happy clients" />
            <Stat value="99%" label="On-time delivery" />
          </dl>
        </div>

        <div className="relative md:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="font-display text-2xl font-semibold text-navy md:text-3xl">{value}</dd>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  )
}

function Background() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(37,99,235,0.12),transparent_60%),radial-gradient(800px_500px_at_-10%_20%,rgba(6,182,212,0.10),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-slate bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,white,transparent_80%)]" />
    </>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-brand-600/20 via-accent-cyan/20 to-accent-sky/20 blur-2xl" />
      <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-3 rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
            kwadwowilson.dev
          </span>
        </div>
        <div className="mt-5 grid grid-cols-5 gap-3">
          <div className="col-span-2 rounded-xl bg-brand-600 p-4 text-white">
            <div className="text-[10px] uppercase tracking-widest text-brand-100">Revenue</div>
            <div className="mt-2 font-display text-xl font-semibold">+38%</div>
            <MiniSpark className="mt-2 text-brand-100" />
          </div>
          <div className="col-span-3 rounded-xl bg-slate-50 p-4">
            <div className="text-[10px] uppercase tracking-widest text-slate-500">Visitors</div>
            <div className="mt-2 font-display text-xl font-semibold text-navy">24,812</div>
            <MiniBars className="mt-2 text-brand-600" />
          </div>

          <div className="col-span-3 rounded-xl bg-slate-50 p-4">
            <div className="text-[10px] uppercase tracking-widest text-slate-500">Conversion</div>
            <div className="mt-2 font-display text-xl font-semibold text-navy">6.4%</div>
            <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
              <div className="h-2 rounded-full bg-gradient-to-r from-brand-600 to-accent-cyan" style={{ width: '74%' }} />
            </div>
          </div>
          <div className="col-span-2 rounded-xl bg-navy p-4 text-white">
            <div className="text-[10px] uppercase tracking-widest text-brand-200">Uptime</div>
            <div className="mt-2 font-display text-xl font-semibold">99.98%</div>
            <div className="mt-2 flex items-end gap-1">
              {[6,7,5,8,9,7,10].map((h,i) => (
                <span key={i} className="w-1.5 rounded-sm bg-accent-cyan/80" style={{ height: `${h * 3}px` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 hidden animate-float rounded-2xl border border-slate-200 bg-white p-3 shadow-card md:block">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M20 6 9 17l-5-5"/></svg>
          </span>
          <div>
            <div className="text-sm font-semibold text-navy">Deploy successful</div>
            <div className="text-xs text-slate-500">Live in 42s</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MiniSpark({ className }) {
  return (
    <svg viewBox="0 0 120 40" className={`h-8 w-full ${className}`} aria-hidden="true">
      <path d="M0 30 L20 22 L40 26 L60 14 L80 18 L100 8 L120 12" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}
function MiniBars({ className }) {
  return (
    <svg viewBox="0 0 120 40" className={`h-8 w-full ${className}`} aria-hidden="true">
      {[6, 14, 10, 18, 12, 22, 16, 26, 20, 30, 24, 34].map((h, i) => (
        <rect key={i} x={i * 10} y={40 - h} width="6" height={h} rx="1.5" fill="currentColor" />
      ))}
    </svg>
  )
}
function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
