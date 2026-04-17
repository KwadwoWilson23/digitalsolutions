import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-px mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center py-24 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
        404
      </span>
      <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-lg text-slate-600">
        The page you're looking for may have moved or no longer exists.
      </p>
      <Link to="/" className="btn-primary mt-8">Back to home</Link>
    </section>
  )
}
