import Hero from '@/components/Hero'
import SudokuHook from '@/components/SudokuHook'
import Problem from '@/components/Problem'
import Differentiator from '@/components/Differentiator'
import HowItWorks from '@/components/HowItWorks'
import WhatHelpsWith from '@/components/WhatHelpsWith'
import ForBuilders from '@/components/ForBuilders'
import DeepContext from '@/components/DeepContext'
import Privacy from '@/components/Privacy'
import Vision from '@/components/Vision'
import EarlyAccess from '@/components/EarlyAccess'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SudokuHook />
      <Problem />
      <Differentiator />
      <HowItWorks />
      <WhatHelpsWith />
      <ForBuilders />
      <DeepContext />
      <Privacy />
      <Vision />
      <EarlyAccess />
    </main>
  )
}