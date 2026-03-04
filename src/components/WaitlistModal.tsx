import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, CheckCircle2 } from 'lucide-react'
import { easeCubic } from '../lib/animations'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' })
  const firstInputRef = useRef<HTMLInputElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  // Reset submitted state on close
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setSubmitted(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Focus trap + save trigger element
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement
      setTimeout(() => firstInputRef.current?.focus(), 100)

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    } else {
      triggerRef.current?.focus()
    }
  }, [isOpen, onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Wire to Google Sheets backend at go-live
    console.log('Waitlist submission:', formData)
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="waitlist-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-forest-dark/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: easeCubic }}
            className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl shadow-forest/20 p-10 sm:p-12"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full text-ink-muted hover:text-forest hover:bg-sage/40 transition-all duration-200"
              aria-label="Close"
            >
              <X size={18} strokeWidth={2} />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} className="text-forest" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-forest mb-3">You're on the list</h3>
                <p className="text-base text-ink-light leading-relaxed">
                  We'll reach out with early access details soon.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="w-12 h-12 bg-forest rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F0EDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3v18" />
                      <path d="M8 7c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-4" />
                      <path d="M8 13h5a2 2 0 0 1 0 4H8" />
                    </svg>
                  </div>
                  <h3 id="waitlist-title" className="font-serif text-2xl sm:text-3xl text-forest mb-2">Get Early Access</h3>
                  <p className="text-base text-ink-light">
                    Join the waitlist for priority onboarding.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      ref={firstInputRef}
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-5 py-3.5 bg-sage/30 text-[15px] text-ink rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-forest/20 placeholder:text-ink-muted transition-all duration-200"
                      placeholder="First name"
                    />
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-5 py-3.5 bg-sage/30 text-[15px] text-ink rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-forest/20 placeholder:text-ink-muted transition-all duration-200"
                      placeholder="Last name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 bg-sage/30 text-[15px] text-ink rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-forest/20 placeholder:text-ink-muted transition-all duration-200"
                      placeholder="Work email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 px-6 py-4 bg-forest text-white text-base font-semibold rounded-2xl hover:bg-forest-light transition-all duration-300 mt-2"
                  >
                    Join Waitlist
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </form>

                <p className="text-center text-xs text-ink-muted mt-5">
                  No spam. Unsubscribe anytime.
                </p>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
