import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeInUp } from '../lib/animations'

interface BottomCTAProps {
  onOpenModal: () => void
}

export function BottomCTA({ onOpenModal }: BottomCTAProps) {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage/40 via-cream to-warm/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_30%_50%,_rgba(87,84,255,0.06)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_70%_50%,_rgba(255,140,66,0.04)_0%,_transparent_60%)]" />

      <div className="relative z-10 section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-forest leading-tight mb-6">
            Stop taking notes<br className="hidden sm:block" /> home tonight.
          </h2>
          <p className="text-lg text-ink-light mb-12 max-w-xl mx-auto leading-relaxed">
            Join the waitlist for early access and free onboarding when we launch.
          </p>
          <button
            onClick={onOpenModal}
            className="group inline-flex items-center gap-3 px-12 py-6 bg-forest text-white text-lg font-semibold rounded-2xl hover:bg-forest-light transition-all duration-300 shadow-[0_20px_60px_-15px_rgba(87,84,255,0.35)] hover:shadow-[0_25px_70px_-15px_rgba(87,84,255,0.45)] hover:-translate-y-0.5"
          >
            Join the Waitlist
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
