'use client'

import { motion } from 'framer-motion'

export default function Vision() {
  return (
    <section className="py-24 sm:py-32 px-6 border-t border-border">
      <div className="max-w-prose mx-auto">
        <motion.p
          className="text-lg text-secondary mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          We believe AI should feel like alignment, not noise.
        </motion.p>
        
        <motion.p
          className="text-lg text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Nova is the first step toward a new kind of intelligence: one that understands how things fit together, not just what words tend to come next.
        </motion.p>
        
        <motion.p
          className="text-lg text-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Calm. Clear. Structured. Built for the complexity of real decisions.
        </motion.p>
      </div>
    </section>
  )
}