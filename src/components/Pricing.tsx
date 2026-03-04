import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations'

const tiers = [
  {
    name: 'Basic',
    tagline: 'For clinicians curious about how AI Scribe can save them time',
    monthlyPrice: '$0',
    annualPrice: '$0',
    features: [
      '20 sessions per month',
      'AI-powered clinical notes',
      'Consent tracking',
      'SimplePractice integration',
      'Session summaries',
      'Email support',
    ],
    cta: 'Join Waitlist',
    featured: false,
  },
  {
    name: 'Pro',
    tagline: 'For busy clinicians who want even more time back',
    monthlyPrice: '$99',
    annualPrice: '$74.25',
    annualTotal: '$891/year',
    features: [
      'Unlimited sessions',
      '10+ EHR integrations',
      'Multi-provider support',
      'Priority support',
      'Custom branding',
      'API access',
      'Advanced analytics',
    ],
    cta: 'Join Waitlist',
    featured: true,
  },
]

interface PricingProps {
  onOpenModal: () => void
}

export function Pricing({ onOpenModal }: PricingProps) {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Dark gradient background -- bridges into Security section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1844] via-[#151530] to-forest-dark" />
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_20%,_rgba(87,84,255,0.12)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,_rgba(87,84,255,0.08)_0%,_transparent_60%)]" />

      <div className="relative z-10 section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-white/25 uppercase tracking-[0.25em] mb-5">Pricing</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.2rem] text-white mb-10 leading-tight">
            Simple, transparent pricing
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4">
            <span className={`text-sm font-medium transition-colors ${!annual ? 'text-white' : 'text-white/40'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-7 rounded-full transition-colors duration-300 ${annual ? 'bg-forest' : 'bg-white/20'}`}
              aria-label="Toggle annual pricing"
            >
              <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${annual ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-medium transition-colors ${annual ? 'text-white' : 'text-white/40'}`}>Annual</span>
            {annual && (
              <span className="text-xs font-semibold bg-gradient-to-r from-forest to-forest-light text-white px-3 py-1 rounded-full">
                Save $297/year
              </span>
            )}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={staggerItem}
              className={`relative rounded-3xl p-10 lg:p-12 flex flex-col ${
                tier.featured
                  ? 'bg-gradient-to-br from-forest via-forest to-[#4845D9] text-white shadow-[0_30px_80px_-20px_rgba(87,84,255,0.35)]'
                  : 'bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs font-bold bg-warm-accent text-white px-4 py-1.5 rounded-full shadow-lg shadow-warm-accent/30">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className={`text-xl font-semibold mb-2 ${tier.featured ? 'text-white' : 'text-white'}`}>
                {tier.name}
              </h3>
              <p className={`text-base mb-8 min-h-[3rem] ${tier.featured ? 'text-sage/50' : 'text-white/45'}`}>
                {tier.tagline}
              </p>

              <div className="mb-8 h-[4.5rem] flex items-end">
                <div>
                  <span className={`font-serif text-6xl ${tier.featured ? 'text-white' : 'text-white'}`}>
                    {annual ? tier.annualPrice : tier.monthlyPrice}
                  </span>
                  <span className={`text-sm ml-1 ${tier.featured ? 'text-sage/40' : 'text-white/35'}`}>
                    /month
                  </span>
                  {annual && tier.annualTotal && (
                    <div className={`text-xs mt-1 ${tier.featured ? 'text-sage/40' : 'text-white/35'}`}>
                      Billed annually ({tier.annualTotal})
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={onOpenModal}
                className={`group w-full flex items-center justify-center gap-2 py-4 px-8 rounded-2xl font-semibold text-base transition-all duration-300 mb-8 ${
                  tier.featured
                    ? 'bg-white text-forest hover:bg-sage hover:shadow-lg'
                    : 'bg-forest text-white hover:bg-forest-light hover:shadow-lg hover:shadow-forest/20'
                }`}
              >
                {tier.cta}
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              <ul className="space-y-3 mt-auto">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className={`mt-0.5 flex-shrink-0 ${tier.featured ? 'text-sage/50' : 'text-white/35'}`}
                      strokeWidth={2.5}
                    />
                    <span className={`text-[15px] ${tier.featured ? 'text-sage/70' : 'text-white/60'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-sm text-white/35 mt-12 max-w-lg mx-auto"
        >
          All plans include HIPAA compliance, SOC 2 certification, and BAA.
        </motion.p>
      </div>
    </section>
  )
}
