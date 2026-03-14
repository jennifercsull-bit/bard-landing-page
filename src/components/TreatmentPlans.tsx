import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations'

const benefits = [
  'AI-generated from your session notes',
  'Insurance-compliant formatting',
  'Auto-updates as therapy evolves',
  'Saves 30-60 min per treatment plan',
]

export function TreatmentPlans() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sage/40 via-cream to-cream" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
        className="relative z-10 section-container"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              variants={fadeInUp}
              className="text-sm font-semibold text-forest/40 uppercase tracking-[0.25em] mb-5"
            >
              Treatment Plans
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl sm:text-5xl lg:text-[3.2rem] text-forest leading-tight mb-6"
            >
              Treatment plans that write themselves
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-ink-light leading-relaxed mb-8"
            >
              Bard extracts therapeutic goals, interventions, and progress markers from your sessions and formats them into insurance-ready treatment plans. Update them as therapy evolves, without starting from scratch each time.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <motion.li
                  key={benefit}
                  variants={staggerItem}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 flex-shrink-0 text-forest"
                    strokeWidth={2}
                  />
                  <span className="text-base text-ink-light">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeInUp}
              className="rounded-2xl bg-gradient-to-br from-white to-sage/20 border border-sage-dark/10 p-6 shadow-md"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-forest mt-2" />
                <p className="text-base font-semibold text-forest">
                  Providers are already streamlining care plans
                </p>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed ml-5">
                "Providers using automated treatment plans are already streamlining care plans—reducing administrative burden while maintaining clinical quality."
              </p>
              <p className="text-xs text-ink-muted/60 mt-3 ml-5 uppercase tracking-wider">
              </p>
            </motion.div>
          </div>

          {/* Right: Placeholder for mockup */}
          <motion.div
            variants={fadeInUp}
            className="hidden lg:block rounded-3xl bg-gradient-to-br from-white to-sage/10 border border-sage-dark/10 shadow-xl p-8 lg:p-12"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-sage-dark/10">
                <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-forest">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-forest">Treatment Plan</div>
                  <div className="text-xs text-ink-muted">Generated from Session 4</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-forest/60 uppercase tracking-wider mb-2">
                    Primary Goal
                  </div>
                  <div className="h-3 bg-forest/10 rounded-full w-4/5" />
                  <div className="h-3 bg-forest/10 rounded-full w-3/5 mt-2" />
                </div>

                <div>
                  <div className="text-xs font-semibold text-forest/60 uppercase tracking-wider mb-2">
                    Interventions
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-forest/40" />
                      <div className="h-2.5 bg-forest/10 rounded-full flex-1" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-forest/40" />
                      <div className="h-2.5 bg-forest/10 rounded-full flex-1" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-forest/40" />
                      <div className="h-2.5 bg-forest/10 rounded-full w-4/5" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-forest/60 uppercase tracking-wider mb-2">
                    Progress Markers
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded border-2 border-forest/20 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-forest">
                          <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="h-2.5 bg-forest/10 rounded-full flex-1" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded border-2 border-sage-dark/20" />
                      <div className="h-2.5 bg-sage/30 rounded-full flex-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sage-dark/10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest/5 rounded-full border border-forest/10">
                  <div className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                  <span className="text-xs font-medium text-forest">Insurance-compliant</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
