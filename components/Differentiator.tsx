'use client'

import { motion } from 'framer-motion'

export default function Differentiator() {
  return (
    <section className="py-32 sm:py-40 px-6">
      <div className="max-w-section mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <motion.p
            className="text-xl sm:text-2xl text-foreground lg:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            Same prompt.
            <br />
            <span className="text-secondary">Fundamentally different process.</span>
          </motion.p>
          
          <motion.div
            className="lg:w-2/3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg sm:text-xl text-secondary leading-relaxed">
              Nova is built on the{' '}
              <span className="text-foreground">Unified Dynamics Framework</span> — 
              a relational architecture that maps how things connect, tracks coherence 
              across conversations, and aligns to what you're actually trying to do.
            </p>
            <div className="pt-4 flex gap-8 text-tertiary text-sm font-mono uppercase tracking-wider">
              <span>Coherence</span>
              <span>Entropy</span>
              <span>Actualization</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}