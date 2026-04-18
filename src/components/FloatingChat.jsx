import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONTACT } from '../data/company.js'

export default function FloatingChat() {
  const [open, setOpen] = useState(false)

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            className="pointer-events-auto w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-glow"
          >
            <div className="flex items-center gap-3 bg-gradient-to-r from-[#128C7E] to-[#25D366] px-4 py-3 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                <WhatsAppGlyph className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold">Kwadwo Wilson Digital</div>
                <div className="text-[11px] opacity-90">Typically replies in minutes</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="ml-auto flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/15"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
              </button>
            </div>
            <div className="space-y-3 px-4 py-4">
              <div className="rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2 text-sm text-slate-800">
                Hi there! 👋 How can we help with your project today?
              </div>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-card transition-colors hover:bg-[#1FB457]"
              >
                <WhatsAppGlyph className="h-4 w-4" /> Start chat on WhatsApp
              </motion.a>
              <p className="text-center text-[11px] text-slate-500">
                We usually reply within a few minutes.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        className="pointer-events-auto relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow ring-4 ring-white focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.4, 1.6], opacity: [0.5, 0.15, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeOut' }}
        />
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.svg
              key="x"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              className="relative h-6 w-6"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </motion.svg>
          ) : (
            <motion.span
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <WhatsAppGlyph className="h-7 w-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

function WhatsAppGlyph({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.11 17.27c-.27-.14-1.62-.8-1.87-.89-.25-.09-.44-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.12-.25-.18-.52-.32ZM16.02 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.49 3.71 1.42 5.33L5.33 26.67l5.51-1.44a10.63 10.63 0 0 0 5.17 1.32h.01c5.89 0 10.67-4.78 10.67-10.67 0-2.85-1.11-5.53-3.12-7.54a10.6 10.6 0 0 0-7.55-3.01Zm0 19.55h-.01a8.87 8.87 0 0 1-4.52-1.24l-.32-.19-3.27.86.87-3.19-.21-.33a8.87 8.87 0 0 1-1.36-4.74c0-4.9 3.99-8.89 8.89-8.89a8.85 8.85 0 0 1 8.89 8.89c0 4.9-3.99 8.89-8.89 8.89Z" />
    </svg>
  )
}
