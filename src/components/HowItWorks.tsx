import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem, easeCubic } from '../lib/animations'

const steps = [
  {
    step: '1',
    title: 'Record',
    description: 'Capture session audio with a single tap. Works for telehealth and in-person.',
    callout: 'On-device transcription available for offline recording.',
    mockUI: 'record' as const,
  },
  {
    step: '2',
    title: 'Generate',
    description: 'Bard writes therapy-fluent clinical notes in 3-5 minutes. Choose from multiple templates or create your own.',
    callout: 'Trained specifically on mental health documentation.',
    mockUI: 'generate' as const,
  },
  {
    step: '3',
    title: 'Review & Submit',
    description: 'Edit your notes, add clinical impressions, and push directly to your EHR.',
    callout: 'EHR integrations coming soon.',
    mockUI: 'review' as const,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Warm bg -- strong enough to be visually distinct */}
      <div className="absolute inset-0 bg-sage/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_10%,_rgba(87,84,255,0.04)_0%,_transparent_60%)]" />

      <div className="relative z-10 section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-forest leading-tight mb-4">
            Three steps. Five minutes. Done.
          </h2>
          <p className="text-lg text-ink-light max-w-lg mx-auto">
            From session audio to signed clinical note, automatically.
          </p>
          {/* Visual step indicators */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {['Record', 'Generate', 'Review'].map((label, i) => (
              <div key={label} className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-forest/10 text-forest text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <span className="text-sm font-medium text-ink-muted hidden sm:inline">{label}</span>
                {i < 2 && <div className="w-8 h-px bg-sage-dark/30 hidden sm:block" />}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-12 lg:space-y-16"
        >
          {steps.map((step, i) => {
            const isReversed = i % 2 === 1
            return (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className={`grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center`}
              >
                {/* Text */}
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-12 bg-gradient-to-br from-forest to-forest-light text-white text-base font-bold rounded-2xl flex items-center justify-center shadow-lg shadow-forest/20">
                      {step.step}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-forest">{step.title}</h3>
                  </div>
                  <p className="text-lg text-ink-light leading-relaxed mb-4">{step.description}</p>
                  <p className="text-sm text-forest/50 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-forest/40" />
                    {step.callout}
                  </p>
                </div>

                {/* Mock UI -- bigger */}
                <div className={isReversed ? 'lg:order-1' : ''}>
                  <MockWindow title={step.title}>
                    {step.mockUI === 'record' && <RecordMock />}
                    {step.mockUI === 'generate' && <GenerateMock />}
                    {step.mockUI === 'review' && <ReviewMock />}
                  </MockWindow>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function MockWindow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: easeCubic }}
      className="rounded-2xl border border-sage-dark/20 shadow-[0_24px_64px_-12px_rgba(87,84,255,0.18)] bg-white overflow-hidden"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-sage/40 to-sage/20 border-b border-sage-dark/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF605C]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD44]" />
          <div className="w-3 h-3 rounded-full bg-[#00CA4E]" />
        </div>
        <span className="text-xs text-ink-muted ml-3 font-medium">Bard | {title}</span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </motion.div>
  )
}

function RecordMock() {
  return (
    <div className="flex flex-col items-center py-6">
      {/* Waveform bars -- animated */}
      <div className="flex items-end gap-[3px] h-20 mb-8">
        {Array.from({ length: 40 }).map((_, i) => {
          const baseHeight = 20 + Math.sin(i * 0.4) * 30 + Math.cos(i * 0.25) * 20
          const delay = (i * 0.08) % 2
          return (
            <div
              key={i}
              className="w-1.5 rounded-full"
              style={{
                height: `${Math.max(8, baseHeight)}%`,
                backgroundColor: `rgba(87, 84, 255, ${0.25 + (baseHeight / 100) * 0.5})`,
                animation: `waveform 1.5s ease-in-out ${delay}s infinite alternate`,
              }}
            />
          )
        })}
      </div>
      <div className="flex items-center gap-4 mb-2">
        <div className="relative">
          <div className="w-4 h-4 bg-red-500 rounded-full" />
          <div className="absolute inset-0 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-40" />
        </div>
        <span className="font-mono text-2xl text-forest tracking-wider font-medium">00:47:32</span>
      </div>
      <p className="text-sm text-ink-muted mt-2">Session recording in progress</p>
      <div className="flex items-center gap-6 mt-6 text-xs text-ink-muted">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400" /> 2 speakers detected
        </span>
        <span>Telehealth</span>
      </div>
    </div>
  )
}

function GenerateMock() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-forest rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-forest">Generating SOAP Note</span>
        </div>
        <span className="text-xs text-ink-muted bg-sage/40 px-3 py-1 rounded-full">SOAP Template</span>
      </div>
      {[
        { label: 'Subjective', text: 'Client reports improved sleep quality and reduced anxiety since starting mindfulness exercises. Noted a stressful work presentation this week. Practiced breathing techniques with moderate success.', done: true },
        { label: 'Objective', text: 'Affect: euthymic with full range. Eye contact: appropriate and sustained. Speech: normal rate and rhythm. Actively engaged in CBT restructuring exercises during session.', done: true },
        { label: 'Assessment', text: 'Generalized Anxiety Disorder, improving. Client demonstrates increased use of coping strategies outside sessions. PHQ-9: 8 (mild, down from 12).', done: true },
        { label: 'Plan', text: 'Continue weekly CBT sessions. Practice progressive muscle relaxation daily. Review thought record at next session.', done: false },
      ].map((section) => (
        <div key={section.label} className={`p-4 rounded-xl ${section.done ? 'bg-sage/20' : 'bg-sage/10 border border-dashed border-sage-dark/20'}`}>
          <div className="flex items-center gap-2 mb-1.5">
            {section.done ? (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3.5 3.5L13 5" stroke="#5754FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <div className="w-3.5 h-3.5 border-2 border-forest/30 rounded-full animate-spin border-t-transparent" />
            )}
            <span className="text-xs font-bold text-forest uppercase tracking-wider">{section.label}</span>
          </div>
          <p className="text-sm text-ink-light leading-relaxed">{section.text}</p>
        </div>
      ))}
    </div>
  )
}

function ReviewMock() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-base font-semibold text-forest">SOAP Note</span>
          <span className="text-xs text-ink-muted ml-2">Session #47 | March 3, 2026</span>
        </div>
        <span className="text-xs px-3 py-1.5 bg-green-50 text-green-700 rounded-full font-semibold ring-1 ring-green-200">Ready for Review</span>
      </div>

      <div className="space-y-2.5">
        {[
          { section: 'Subjective', words: 84 },
          { section: 'Objective', words: 62 },
          { section: 'Assessment', words: 51 },
          { section: 'Plan', words: 38 },
        ].map((s) => (
          <div key={s.section} className="flex items-center gap-3 p-3 rounded-lg bg-sage/15 hover:bg-sage/25 transition-colors">
            <div className="w-5 h-5 rounded-md bg-forest/10 flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3.5 3.5L13 5" stroke="#5754FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-sm font-medium text-ink flex-1">{s.section}</span>
            <span className="text-xs text-ink-muted">{s.words} words</span>
          </div>
        ))}
      </div>

      <div className="flex gap-3 pt-2">
        <button className="flex-1 py-3 bg-sage/30 text-forest text-sm font-semibold rounded-xl hover:bg-sage/50 transition-colors">
          Edit Note
        </button>
        <button className="flex-1 py-3 bg-forest text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2">
          Push to EHR
          <ArrowIcon />
        </button>
      </div>
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
