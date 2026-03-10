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
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C12 2 9 6 9 9C9 10.5 10 11.5 12 12C14 11.5 15 10.5 15 9C15 6 12 2 12 2Z" fill="#F0EDFF" />
                      <path d="M5.5 7C5.5 7 4 11.5 5 14C5.6 15.3 7 15.8 9 15.2C8.8 13.1 7.5 11 5.5 7Z" fill="#F0EDFF" />
                      <path d="M18.5 7C18.5 7 20 11.5 19 14C18.4 15.3 17 15.8 15 15.2C15.2 13.1 16.5 11 18.5 7Z" fill="#F0EDFF" />
                      <path d="M3 14.5C3 14.5 6.5 16 9 15.5C10.5 15.2 11 14 11 12.5C9 13 6.5 13.5 3 14.5Z" fill="#F0EDFF" />
                      <path d="M21 14.5C21 14.5 17.5 16 15 15.5C13.5 15.2 13 14 13 12.5C15 13 17.5 13.5 21 14.5Z" fill="#F0EDFF" />
                      <path d="M8 19C8 19 8.5 15 10 13.5C11 12.5 12 12.5 12 12.5C12 12.5 13 12.5 14 13.5C15.5 15 16 19 16 19C14 20.5 10 20.5 8 19Z" fill="#F0EDFF" />
                    </svg>
                  </div>
                  <h3 id="waitlist-title" className="font-serif text-2xl sm:text-3xl text-forest mb-2">Meet Bard</h3>
                  <p className="text-base text-ink-light">
                    Join the waitlist and be first to try your new documentation companion.
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
