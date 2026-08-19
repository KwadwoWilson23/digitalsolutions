import { lazy, Suspense, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'

const Services = lazy(() => import('./pages/Services.jsx'))
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const FloatingChat = lazy(() => import('./components/FloatingChat.jsx'))

function RouteFallback() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 overflow-hidden"
    >
      <div className="h-full w-1/3 animate-[route-progress_1.1s_ease-in-out_infinite] bg-gradient-to-r from-brand-500 via-accent-cyan to-brand-500" />
    </div>
  )
}

function DeferredMount({ delay = 1200, children }) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const idle = window.requestIdleCallback
    if (typeof idle === 'function') {
      const id = idle(() => setReady(true), { timeout: delay })
      return () => window.cancelIdleCallback?.(id)
    }
    const t = setTimeout(() => setReady(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  return ready ? children : null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <DeferredMount delay={1200}>
        <Suspense fallback={null}>
          <FloatingChat />
        </Suspense>
      </DeferredMount>
    </div>
  )
}
