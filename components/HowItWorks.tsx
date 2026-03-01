'use client'

import { motion } from 'framer-motion'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-6 border-t border-border">
      <div className="max-w-section mx-auto">
        <motion.h2
          className="text-2xl font-semibold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          What This Looks Like
        </motion.h2>
        
        <motion.div
          className="grid sm:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="p-6 border border-border rounded-lg">
            <p className="text-secondary text-sm mb-2">Ask a predictive model:</p>
            <p className="text-foreground mb-4">"Give me a market entry strategy"</p>
            <p className="text-secondary">→ Generic checklist. Reasonable, but not yours.</p>
          </div>
          <div className="p-6 border border-accent/30 rounded-lg bg-accent/5">
            <p className="text-secondary text-sm mb-2">Ask Nova:</p>
            <p className="text-foreground mb-4">"Give me a market entry strategy"</p>
            <p className="text-secondary">→ What's your position? What constraints are you under? What does success actually look like for you?</p>
          </div>
        </motion.div>

        <motion.p
          className="text-lg text-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          She maps your situation. Finds the tensions. Builds a strategy that fits your coherence constraints.
        </motion.p>

        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-4">Stage 1: Diagnosis — Where are the tensions?</h3>
            <p className="text-secondary mb-4">Nova scans the relational structure and identifies:</p>
            <ul className="space-y-2 text-secondary ml-4">
              <li>• Incoherence (two things that can't both be true)</li>
              <li>• Hidden contradictions (decisions that undermine each other)</li>
              <li>• Missing connections (relationships that should exist but don't)</li>
              <li>• Cascading misalignments (small errors that compound)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Stage 2: Creation — What becomes possible when the board is coherent?</h3>
            <p className="text-secondary">Once tensions are visible, Nova helps design solutions that fit the constraints — innovate by design, not accident.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}