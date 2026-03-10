import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollDirection } from '../hooks/useScrollDirection'
import { Menu, X, ArrowRight } from 'lucide-react'

interface NavbarProps {
  onOpenModal: () => void
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const { scrollDirection, scrollY } = useScrollDirection()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHidden = scrollDirection === 'down' && scrollY > 100
  const hasBackground = scrollY > 20

  const navLinks = [
    { label: 'Product', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Security', href: '#security' },
    { label: 'Mission', href: '#mission' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${hasBackground ? 'bg-cream/80 backdrop-blur-xl' : 'bg-transparent'}`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-forest rounded-[10px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C12 2 9 6 9 9C9 10.5 10 11.5 12 12C14 11.5 15 10.5 15 9C15 6 12 2 12 2Z" fill="#F0EDFF" />
                <path d="M5.5 7C5.5 7 4 11.5 5 14C5.6 15.3 7 15.8 9 15.2C8.8 13.1 7.5 11 5.5 7Z" fill="#F0EDFF" />
                <path d="M18.5 7C18.5 7 20 11.5 19 14C18.4 15.3 17 15.8 15 15.2C15.2 13.1 16.5 11 18.5 7Z" fill="#F0EDFF" />
                <path d="M3 14.5C3 14.5 6.5 16 9 15.5C10.5 15.2 11 14 11 12.5C9 13 6.5 13.5 3 14.5Z" fill="#F0EDFF" />
                <path d="M21 14.5C21 14.5 17.5 16 15 15.5C13.5 15.2 13 14 13 12.5C15 13 17.5 13.5 21 14.5Z" fill="#F0EDFF" />
                <path d="M8 19C8 19 8.5 15 10 13.5C11 12.5 12 12.5 12 12.5C12 12.5 13 12.5 14 13.5C15.5 15 16 19 16 19C14 20.5 10 20.5 8 19Z" fill="#F0EDFF" />
              </svg>
            </div>
            <span className="font-serif text-[1.15rem] text-forest tracking-tight">Bard</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-[13px] font-medium text-ink-light/70 hover:text-forest transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenModal}
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-forest text-white text-[13px] font-semibold rounded-full hover:bg-forest-light hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]"
            >
              Join Waitlist
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-ink-light"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-cream/95 backdrop-blur-xl border-t border-sage-dark/10"
          >
            <div className="section-container py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  className="block text-[15px] font-medium text-ink-light hover:text-forest py-2.5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <button
                  className="block w-full text-center px-5 py-3 bg-forest text-white text-[15px] font-semibold rounded-full hover:bg-forest-light transition-colors"
                  onClick={() => {
                    setMobileOpen(false)
                    onOpenModal()
                  }}
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
