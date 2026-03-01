'use client'

import { motion } from 'framer-motion'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <div className="section-divider mb-24" />
        
        <motion.h2
          className="text-display-md font-bold uppercase text-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          What This Looks Like
        </motion.h2>
        
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="card">
            <div className="mono-label mb-4">Predictive Model</div>
            <p className="text-body mb-4">"Give me a market entry strategy"</p>
            <p className="text-muted text-sm">
              → Generic checklist. Reasonable, but not yours.
            </p>
          </div>
          <div className="card gradient-border">
            <div className="mono-label mb-4" style={{ color: 'var(--accent-electric)' }}>Nova</div>
            <p className="text-body mb-4">"Give me a market entry strategy"</p>
            <p className="text-muted text-sm">
              → What's your position? What constraints are you under? What does success actually look like for you?
            </p>
          </div>
        </motion.div>

        <motion.p
          className="text-xl text-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          She maps your situation. Finds the tensions. Builds a strategy that fits your coherence constraints.
        </motion.p>

        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Stage 1: <span className="gradient-text">Diagnosis</span> — Where are the tensions?
            </h3>
            <p className="text-muted mb-4">Nova scans the relational structure and identifies:</p>
            <ul className="space-y-3 text-body">
              <li className="flex gap-3">
                <span className="text-accent-teal">•</span>
                <span>Incoherence (two things that can't both be true)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-blue">•</span>
                <span>Hidden contradictions (decisions that undermine each other)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-purple">•</span>
                <span>Missing connections (relationships that should exist but don't)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-orange">•</span>
                <span>Cascading misalignments (small errors that compound)</span>
              </li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Stage 2: <span className="gradient-text">Creation</span> — What becomes possible when the board is coherent?
            </h3>
            <p className="text-muted">
              Once tensions are visible, Nova helps design solutions that fit the constraints — innovate by design, not accident.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}