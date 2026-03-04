import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/animations'
import { ShieldCheck, Lock } from 'lucide-react'

export function CredibilityBar() {
  return (
    <section className="py-5 bg-sage/20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20px' }}
        variants={fadeInUp}
        className="section-container"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-center">
          <p className="text-sm sm:text-base text-ink-light">
            Built on SonderMind's clinical AI platform -- trusted by thousands of therapists
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-xs font-semibold text-forest shadow-sm">
              <ShieldCheck size={13} />
              HIPAA
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-xs font-semibold text-forest shadow-sm">
              <Lock size={13} />
              SOC 2
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
