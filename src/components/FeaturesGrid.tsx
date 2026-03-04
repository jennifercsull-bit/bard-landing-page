import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations'
import {
  FileText,
  Wrench,
  Calendar,
  Users,
  WifiOff,
  AudioLines,
} from 'lucide-react'

const templatePills = ['SOAP', 'Progress', 'Intake', 'Discharge', 'DAP', 'Treatment Plan', 'Psychotherapy']

const features = [
  {
    icon: FileText,
    title: '7 Built-in Templates',
    description: 'Therapy-fluent formats designed for mental health documentation. Ready on day one.',
    size: 'large' as const,
    pills: templatePills,
  },
  {
    icon: Wrench,
    title: 'Custom Templates',
    description: 'Create your own note formats. Match your documentation style exactly.',
    size: 'default' as const,
  },
  {
    icon: Calendar,
    title: 'Calendar Sync',
    description: 'Google Calendar integration. Sessions auto-populate with client context.',
    size: 'default' as const,
  },
  {
    icon: Users,
    title: 'Client Profiles',
    description: 'Session history, treatment context, and notes in one place.',
    size: 'default' as const,
  },
  {
    icon: WifiOff,
    title: 'Offline Mode',
    description: 'On-device transcription. No internet required for recording.',
    size: 'default' as const,
  },
  {
    icon: AudioLines,
    title: 'Speaker ID',
    description: 'Automatically distinguishes between therapist and client voices.',
    size: 'default' as const,
  },
]

const gridPlacement: Record<string, string> = {
  large: 'sm:col-span-2 sm:row-span-2',
  wide: 'sm:col-span-2',
  default: '',
}

export function FeaturesGrid() {
  return (
    <section id="features" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Visible cream-warm gradient to separate from HowItWorks above and Pricing below */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-warm via-warm to-cream" />

      <div className="relative z-10 section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.2rem] text-forest leading-tight mb-4">
            Everything you need to<br className="hidden sm:block" /> document faster
          </h2>
          <p className="text-lg text-ink-light max-w-lg mx-auto">
            A complete clinical documentation toolkit, built for mental health.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto auto-rows-[minmax(140px,auto)]"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            const isLarge = feature.size === 'large'
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className={`group rounded-3xl ${isLarge ? 'p-10' : 'p-7'} bg-white border border-sage-dark/10 shadow-md hover:shadow-[0_16px_48px_-12px_rgba(87,84,255,0.15)] hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col ${gridPlacement[feature.size]}`}
              >
                <div className={`${isLarge ? 'w-14 h-14 rounded-2xl' : 'w-12 h-12 rounded-xl'} bg-gradient-to-br from-sage/60 to-sage/30 flex items-center justify-center mb-5 group-hover:from-sage group-hover:to-sage/60 transition-all duration-300`}>
                  <Icon size={isLarge ? 26 : 22} className="text-forest" strokeWidth={1.7} />
                </div>
                <h3 className={`font-semibold ${isLarge ? 'text-xl mb-3' : 'text-base mb-2'} text-forest`}>{feature.title}</h3>
                <p className={`${isLarge ? 'text-base' : 'text-sm'} text-ink-light leading-relaxed`}>{feature.description}</p>
                {'pills' in feature && feature.pills && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {feature.pills.map((pill) => (
                      <span key={pill} className="px-3 py-1 bg-forest/[0.06] text-forest text-xs font-medium rounded-full border border-forest/10">
                        {pill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
