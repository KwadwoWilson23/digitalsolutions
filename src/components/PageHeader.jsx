export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_50%_-20%,rgba(37,99,235,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-slate bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,white,transparent_85%)]" />
      <div className="container-px mx-auto max-w-4xl pb-14 pt-20 text-center md:pt-28">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
