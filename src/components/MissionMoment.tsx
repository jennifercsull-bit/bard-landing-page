import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/animations'

export function MissionMoment() {
  return (
    <section id="mission" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Subtle sage gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-sage/20 to-cream" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(87,84,255,0.03)_0%,_transparent_60%)]" />

      <div className="relative z-10 section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Decorative element */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-forest/30 to-transparent mx-auto mb-8" />

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.8rem] text-forest leading-snug mb-8">
            Documentation is the tax therapists pay for doing their job. We're eliminating it.
          </h2>
          <p className="text-lg sm:text-xl text-ink-light leading-relaxed max-w-2xl mx-auto">
            SonderMind has spent a decade building technology for mental health providers. AI Scribe is the result of watching thousands of clinicians lose their evenings to paperwork -- and deciding that the technology finally exists to fix it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
