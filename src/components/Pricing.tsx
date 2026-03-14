import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { fadeInUp } from '../lib/animations'

const features = [
  'AI-powered clinical notes',
  'Multiple therapy-fluent templates',
  'Treatment plans',
  'Session takeaways',
  'Session transcription',
  'Consent tracking',
  'Session summaries',
  'HIPAA compliant & SOC 2 certified',
]

interface PricingProps {
  onOpenModal: () => void
}

export function Pricing({ onOpenModal }: PricingProps) {
  return (
    <section id="pricing" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-forest/40 uppercase tracking-[0.25em] mb-5">Pricing</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.2rem] text-forest mb-4 leading-tight">
            Free for early partners
          </h2>
          <p className="text-lg text-ink-light max-w-lg mx-auto">
            Join the waitlist and get free access to Bard when we launch. No credit card required.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="max-w-lg mx-auto"
        >
          <div className="rounded-3xl bg-white shadow-xl border border-sage-dark/10 p-10 lg:p-12">
            <div className="text-center mb-8">
              <span className="font-serif text-6xl text-forest">Free</span>
              <p className="text-base text-ink-muted mt-2">For waitlist partners</p>
            </div>

            <button
              onClick={onOpenModal}
              className="group w-full flex items-center justify-center gap-2 py-4 px-8 rounded-2xl font-semibold text-base bg-warm-accent text-white hover:bg-[#FF9F5C] hover:shadow-lg hover:shadow-warm-accent/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 mb-8"
            >
              Join the Waitlist
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>

            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="mt-0.5 flex-shrink-0 text-forest/40"
                    strokeWidth={2.5}
                  />
                  <span className="text-[15px] text-ink-light">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-sm text-ink-muted mt-12 max-w-lg mx-auto"
        >
          All plans include HIPAA compliance, SOC 2 certification, and BAA.
        </motion.p>
      </div>
    </section>
  )
}
