import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations'

const benefits = [
  'Client-friendly session recaps',
  'Key insights and homework delivered automatically',
  'Reinforces progress between appointments',
  '100% client satisfaction (in-product surveys)',
]

export function SessionTakeaways() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-cream" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
        className="relative z-10 section-container"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Right: Mockup (appears first on mobile) */}
          <motion.div
            variants={fadeInUp}
            className="lg:order-2 rounded-3xl bg-gradient-to-br from-white to-sage/10 border border-sage-dark/10 shadow-xl p-8 lg:p-12"
          >
            <div className="max-w-sm mx-auto">
              {/* Phone mockup */}
              <div className="relative rounded-[2.5rem] bg-gradient-to-br from-forest to-[#123e4f] p-6 shadow-2xl">
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-6 bg-black/40 rounded-full" />

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm" />
                    <div>
                      <div className="h-3 bg-white/80 rounded w-24 mb-1.5" />
                      <div className="h-2 bg-white/50 rounded w-32" />
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-forest">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-xs font-semibold text-forest">Session Takeaways</span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-semibold text-forest/70 mb-1.5">Key Insights</div>
                        <div className="space-y-1.5">
                          <div className="h-2 bg-sage/40 rounded-full w-full" />
                          <div className="h-2 bg-sage/40 rounded-full w-5/6" />
                          <div className="h-2 bg-sage/40 rounded-full w-4/5" />
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-semibold text-forest/70 mb-1.5">Your Homework</div>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded border-2 border-forest/20 mt-0.5 flex-shrink-0" />
                            <div className="space-y-1 flex-1">
                              <div className="h-2 bg-sage/40 rounded-full w-full" />
                              <div className="h-2 bg-sage/40 rounded-full w-2/3" />
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded border-2 border-forest/20 mt-0.5 flex-shrink-0" />
                            <div className="h-2 bg-sage/40 rounded-full w-4/5 mt-1" />
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-sage-dark/10">
                        <div className="text-xs font-semibold text-forest/70 mb-1.5">Next Session</div>
                        <div className="h-2 bg-sage/40 rounded-full w-1/2" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span className="text-xs font-medium text-white">Sent automatically</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left: Text */}
          <div className="lg:order-1">
            <motion.p
              variants={fadeInUp}
              className="text-sm font-semibold text-forest/40 uppercase tracking-[0.25em] mb-5"
            >
              Session Takeaways
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl sm:text-5xl lg:text-[3.2rem] text-forest leading-tight mb-6"
            >
              Session recaps your clients actually read
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-ink-light leading-relaxed mb-8"
            >
              Bard generates a client-friendly recap of key insights, homework, and next steps—sent automatically after each session. Clients stay engaged between appointments, and you reinforce therapeutic progress without extra work.
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

            <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-4">
              <motion.div
                variants={staggerItem}
                className="rounded-2xl bg-gradient-to-br from-white to-sage/20 border border-sage-dark/10 p-5 shadow-md"
              >
                <div className="font-serif text-3xl text-forest mb-2">100%</div>
                <div className="text-sm text-ink-muted leading-snug">
                  client satisfaction with session takeaways
                </div>
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="rounded-2xl bg-gradient-to-br from-white to-sage/20 border border-sage-dark/10 p-5 shadow-md"
              >
                <div className="font-serif text-3xl text-forest mb-2">More</div>
                <div className="text-sm text-ink-muted leading-snug">
                  actionable therapy — clients feel more engaged between sessions
                </div>
              </motion.div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-xs text-ink-muted/60 mt-6 uppercase tracking-wider"
            >
              Based on SonderMind in-product surveys, March 2026
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
