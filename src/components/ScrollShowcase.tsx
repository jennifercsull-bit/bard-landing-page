import { motion } from 'framer-motion'
import { Clock, FileWarning, CheckCircle2, Sparkles, FileText, Mic } from 'lucide-react'
import { staggerContainer, staggerItem } from '../lib/animations'

export function ScrollShowcase() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {/* Problem card -- light */}
          <motion.div
            variants={staggerItem}
            className="rounded-3xl bg-white border border-sage-dark/10 shadow-sm p-8 sm:p-10 lg:p-12 flex flex-col"
          >
            <p className="text-xs font-bold text-forest uppercase tracking-[0.25em] mb-5">
              The problem
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest leading-tight mb-4">
              Documentation takes as long as the session
            </h2>
            <p className="text-base text-ink-light leading-relaxed mb-8">
              Therapists spend hours each week catching up on clinical notes. It's a major driver of burnout.
            </p>
            <div className="mt-auto">
              <ProblemMockUI />
            </div>
          </motion.div>

          {/* Solution card -- gradient (matches BottomCTA) */}
          <motion.div
            variants={staggerItem}
            className="relative rounded-3xl bg-gradient-to-br from-[#3B2FA0] via-forest to-[#2A2660] p-8 sm:p-10 lg:p-12 flex flex-col overflow-hidden"
          >
            {/* Decorative orbs */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_20%,_rgba(240,237,255,0.08)_0%,_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_30%_at_80%_80%,_rgba(87,84,255,0.12)_0%,_transparent_60%)]" />

            <div className="relative z-10 flex flex-col h-full">
              <p className="text-xs font-bold text-white/70 uppercase tracking-[0.25em] mb-5">
                The solution
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-4">
                Your note is ready before you stand up
              </h2>
              <p className="text-base text-white/60 leading-relaxed mb-8">
                Bard transcribes your sessions, understands therapeutic context, and generates clinical documentation you can trust.
              </p>
              <div className="mt-auto">
                <SolutionMockUI />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ProblemMockUI() {
  return (
    <div className="space-y-3">
      <div className="bg-sage/40 rounded-2xl p-5 border border-sage-dark/10">
        <div className="flex items-center gap-2 mb-3">
          <FileWarning size={16} className="text-ink-muted" />
          <span className="text-sm font-medium text-ink-muted">Progress Note - Incomplete</span>
        </div>
        <div className="space-y-2.5 text-[11px] text-ink-muted/70 leading-relaxed">
          <div>
            <span className="text-[10px] font-semibold text-ink-muted/50 uppercase tracking-wider">Subjective</span>
            <p className="mt-0.5">Client discussed anxiety related to work. Mentioned difficulty sleeping. Reports using breathing exercises with some...</p>
          </div>
          <div>
            <span className="text-[10px] font-semibold text-ink-muted/50 uppercase tracking-wider">Objective</span>
            <p className="mt-0.5 opacity-60">Affect appeared... eye contact was... need to check notes from...</p>
          </div>
          <div>
            <span className="text-[10px] font-semibold text-ink-muted/50 uppercase tracking-wider">Assessment</span>
            <p className="mt-0.5 opacity-40">Generalized Anxiety Disorder... need to review scoring from...</p>
          </div>
          <div>
            <span className="text-[10px] font-semibold text-ink-muted/50 uppercase tracking-wider opacity-30">Plan</span>
            <div className="h-2 bg-sage-dark/15 rounded-full w-2/5 mt-1" />
          </div>
          <div className="flex items-center gap-1 mt-2">
            <div className="w-1.5 h-4 bg-forest/30 animate-pulse rounded-sm" />
            <span className="text-xs text-ink-muted">Still typing...</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-sage/40 rounded-2xl p-4 border border-sage-dark/10 text-center">
          <Clock size={20} className="text-ink-muted mx-auto mb-1" />
          <span className="font-serif text-xl text-forest">9:47 PM</span>
          <span className="block text-xs text-ink-muted mt-0.5">Still working</span>
        </div>
        <div className="bg-sage/40 rounded-2xl p-4 border border-sage-dark/10 text-center">
          <span className="font-serif text-2xl text-forest">6</span>
          <span className="block text-xs text-ink-muted mt-0.5">Notes behind</span>
        </div>
      </div>
    </div>
  )
}

function SolutionMockUI() {
  return (
    <div className="space-y-3">
      <div className="bg-white/[0.06] rounded-2xl p-5 border border-white/[0.06]">
        <div className="flex items-center gap-2 mb-3">
          <FileText size={16} className="text-white/70" />
          <span className="text-sm font-medium text-white/70">SOAP Note - Complete</span>
          <CheckCircle2 size={14} className="text-white/50 ml-auto" />
        </div>
        <div className="space-y-2.5">
          {[
            { section: 'Subjective', text: 'Client reports improved sleep quality and reduced anxiety since last session...' },
            { section: 'Objective', text: 'Affect: euthymic with full range. Eye contact: good. Speech: normal rate...' },
            { section: 'Assessment', text: 'Generalized Anxiety Disorder, improving. PHQ-9: 8 (mild)...' },
            { section: 'Plan', text: 'Continue weekly CBT sessions. Practice progressive muscle relaxation...' },
          ].map((item) => (
            <div key={item.section} className="flex items-start gap-2">
              <CheckCircle2 size={12} className="text-white/30 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">{item.section}</span>
                <p className="text-[11px] text-white/40 leading-relaxed mt-0.5">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/[0.06] rounded-2xl p-4 border border-white/[0.06] text-center">
          <Sparkles size={20} className="text-white/50 mx-auto mb-1" />
          <span className="font-serif text-xl text-white">3 min</span>
          <span className="block text-xs text-white/40 mt-0.5">Note generated</span>
        </div>
        <div className="bg-white/[0.06] rounded-2xl p-4 border border-white/[0.06] text-center">
          <Mic size={20} className="text-white/50 mx-auto mb-1" />
          <span className="font-serif text-xl text-white">99%</span>
          <span className="block text-xs text-white/40 mt-0.5">Client consent rate</span>
        </div>
      </div>
    </div>
  )
}
