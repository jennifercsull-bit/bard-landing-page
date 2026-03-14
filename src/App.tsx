import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ScrollShowcase } from './components/ScrollShowcase'
import { Testimonial } from './components/Testimonial'
import { HowItWorks } from './components/HowItWorks'
import { FeaturesGrid } from './components/FeaturesGrid'
import { TreatmentPlans } from './components/TreatmentPlans'
import { SessionTakeaways } from './components/SessionTakeaways'
import { Pricing } from './components/Pricing'
import { Security } from './components/Security'
import { MissionMoment } from './components/MissionMoment'
import { BottomCTA } from './components/BottomCTA'
import { Footer } from './components/Footer'
import { WaitlistModal } from './components/WaitlistModal'

function SectionDivider() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-sage-dark/20 to-transparent" />
  )
}

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <ScrollShowcase />
        <Testimonial />
        <HowItWorks />
        <SectionDivider />
        <FeaturesGrid />
        <TreatmentPlans />
        <SessionTakeaways />
        <SectionDivider />
        <Pricing onOpenModal={openModal} />
        <Security />
        <MissionMoment />
        <BottomCTA onOpenModal={openModal} />
      </main>
      <Footer />
      <WaitlistModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  )
}

export default App
