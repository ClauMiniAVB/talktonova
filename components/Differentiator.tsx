'use client'

import { motion } from 'framer-motion'

export default function Differentiator() {
  return (
    <section className="py-24 sm:py-32 px-6 border-t border-border">
      <div className="max-w-section mx-auto">
        <motion.p
          className="text-lg sm:text-xl text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Nova is built on the <span className="text-foreground font-semibold">Unified Dynamics Framework (UDF)</span> — a relational architecture that maps how things connect, tracks coherence across conversations, and aligns to what you're actually trying to do.
        </motion.p>
        <motion.p
          className="text-lg sm:text-xl text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Same prompt. Fundamentally different process.
        </motion.p>
      </div>
    </section>
  )
}