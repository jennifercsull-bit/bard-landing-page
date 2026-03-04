import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Clock, FileWarning, CheckCircle2, Sparkles, FileText, Mic } from 'lucide-react'
import { staggerContainer, staggerItem } from '../lib/animations'

export function ScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const check = () => setIsLargeScreen(window.innerWidth >= 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Framer Motion scroll-driven transforms (GPU-accelerated, zero re-renders)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Problem slides left and fades out
  const problemX = useTransform(scrollYProgress, [0.15, 0.55], ['0%', '-110%'])
  const problemOpacity = useTransform(scrollYProgress, [0.15, 0.45], [1, 0])

  // Solution slides in from right and fades in
  const solutionX = useTransform(scrollYProgress, [0.45, 0.85], ['110%', '0%'])
  const solutionOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1])

  // Background color transitions cream → sage
  const bgColor = useTransform(scrollYProgress, [0.25, 0.65], ['#FAFAFA', '#F0EDFF'])

  // Mobile: stacked panels with fade
  if (!isLargeScreen) {
    return (
      <section className="py-16 sm:py-20">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="space-y-12 max-w-3xl mx-auto"
          >
            {/* Problem */}
            <motion.div variants={staggerItem}>
              <p className="text-sm font-semibold text-forest/40 uppercase tracking-[0.2em] mb-5 text-center">
                The problem
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-forest text-center leading-tight mb-4">
                Documentation shouldn't take longer than the session
              </h2>
              <p className="text-base text-ink-light text-center max-w-xl mx-auto mb-8">
                Therapists spend 1-2 hours every evening catching up on clinical notes. It's the #1 driver of burnout.
              </p>
              <ProblemMockUI />
            </motion.div>

            {/* Solution */}
            <motion.div variants={staggerItem}>
              <p className="text-sm font-semibold text-forest/40 uppercase tracking-[0.2em] mb-5 text-center">
                The solution
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-forest text-center leading-tight mb-4">
                Your note is ready before you stand up
              </h2>
              <p className="text-base text-ink-light text-center max-w-xl mx-auto mb-8">
                AI Scribe listens, understands therapeutic context, and generates clinical documentation you can trust.
              </p>
              <SolutionMockUI />
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  // Desktop: horizontal slide with scroll-driven animation
  return (
    <div ref={containerRef} className="relative" style={{ height: '200vh' }}>
      <motion.div
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        <div className="section-container">
          <div className="relative max-w-5xl mx-auto h-[70vh] flex items-center">
            {/* Problem -- slides left */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              style={{
                x: problemX,
                opacity: problemOpacity,
              }}
            >
              <p className="text-sm font-semibold text-forest/40 uppercase tracking-[0.2em] mb-5">The problem</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-forest text-center leading-tight mb-6">
                Documentation shouldn't take
                <br />
                longer than the session
              </h2>
              <p className="text-lg text-ink-light text-center max-w-xl mb-12">
                Therapists spend 1-2 hours every evening catching up on clinical notes. It's the #1 driver of burnout.
              </p>
              <ProblemMockUI />
            </motion.div>

            {/* Solution -- slides in from right */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              style={{
                x: solutionX,
                opacity: solutionOpacity,
              }}
            >
              <p className="text-sm font-semibold text-forest/40 uppercase tracking-[0.2em] mb-5">The solution</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-forest text-center leading-tight mb-6">
                Your note is ready
                <br />
                before you stand up
              </h2>
              <p className="text-lg text-ink-light text-center max-w-xl mb-12">
                AI Scribe listens, understands therapeutic context, and generates clinical documentation you can trust.
              </p>
              <SolutionMockUI />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function ProblemMockUI() {
  return (
    <div className="w-full max-w-3xl grid grid-cols-3 gap-4">
      <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-sage-dark/10">
        <div className="flex items-center gap-2 mb-4">
          <FileWarning size={18} className="text-ink-muted" />
          <span className="text-sm font-medium text-ink-muted">Progress Note - Incomplete</span>
        </div>
        <div className="space-y-3 text-[11px] text-ink-muted/70 leading-relaxed">
          <div>
            <span className="text-[10px] font-semibold text-ink-muted/50 uppercase tracking-wider">Subjective</span>
            <p className="mt-0.5">Client discussed anxiety related to work. Mentioned difficulty sleeping. Reports using breathing exercises with some...</p>
          </div>
          <div>
            <span className="text-[10px] font-semibold text-ink-muted/50 uppercase tracking-wider">Objective</span>
            <p className="mt-0.5 opacity-60">Affect appeared... eye contact was... need to check notes from...</p>
          </div>
          <div className="opacity-30">
            <span className="text-[10px] font-semibold text-ink-muted/50 uppercase tracking-wider">Assessment</span>
            <div className="h-2.5 bg-sage-dark/15 rounded-full w-2/5 mt-1" />
          </div>
          <div className="flex items-center gap-1 mt-3">
            <div className="w-1.5 h-5 bg-forest/30 animate-pulse rounded-sm" />
            <span className="text-xs text-ink-muted">Still typing...</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-sage-dark/10 flex-1 flex flex-col items-center justify-center">
          <Clock size={28} className="text-ink-muted mb-2" />
          <span className="font-serif text-2xl text-forest">9:47 PM</span>
          <span className="text-xs text-ink-muted mt-1">Still working</span>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-sage-dark/10 flex-1 flex flex-col items-center justify-center">
          <span className="font-serif text-3xl text-forest">6</span>
          <span className="text-xs text-ink-muted mt-1">Notes behind</span>
        </div>
      </div>
    </div>
  )
}

function SolutionMockUI() {
  return (
    <div className="w-full max-w-3xl grid grid-cols-3 gap-4">
      <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-sage-dark/10">
        <div className="flex items-center gap-2 mb-4">
          <FileText size={18} className="text-forest" />
          <span className="text-sm font-medium text-forest">SOAP Note - Complete</span>
          <CheckCircle2 size={16} className="text-forest ml-auto" />
        </div>
        <div className="space-y-3">
          {[
            { section: 'Subjective', text: 'Client reports improved sleep quality and reduced anxiety since last session. Expressed concern about upcoming work presentation...' },
            { section: 'Objective', text: 'Affect: euthymic with full range. Eye contact: good. Speech: normal rate and rhythm. Engaged actively in CBT exercises...' },
            { section: 'Assessment', text: 'Generalized Anxiety Disorder, improving. Client demonstrates increased use of coping strategies. PHQ-9: 8 (mild)...' },
            { section: 'Plan', text: 'Continue weekly CBT sessions. Practice progressive muscle relaxation. Review thought record at next session...' },
          ].map((item) => (
            <div key={item.section} className="flex items-start gap-2.5">
              <CheckCircle2 size={14} className="text-forest/50 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-xs font-semibold text-forest uppercase tracking-wider">{item.section}</span>
                <p className="text-[11px] text-ink-light leading-relaxed mt-0.5 line-clamp-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-sage-dark/10 flex-1 flex flex-col items-center justify-center">
          <Sparkles size={28} className="text-forest mb-2" />
          <span className="font-serif text-2xl text-forest">3 min</span>
          <span className="text-xs text-ink-muted mt-1">Note generated</span>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-sage-dark/10 flex-1 flex flex-col items-center justify-center">
          <Mic size={28} className="text-forest mb-2" />
          <span className="font-serif text-2xl text-forest">99%</span>
          <span className="text-xs text-ink-muted mt-1">Client consent rate</span>
        </div>
      </div>
    </div>
  )
}
