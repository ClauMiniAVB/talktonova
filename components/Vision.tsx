'use client'

import { motion } from 'framer-motion'

export default function Vision() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <div className="section-divider mb-24" />
        
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-body-lg text-muted mb-8">
            We believe AI should feel like alignment, not noise.
          </p>
          
          <p className="text-display-md text-foreground font-semibold mb-8">
            Nova is the first step toward a new kind of intelligence: one that understands how things fit together, not just what words tend to come next.
          </p>
          
          <p className="text-muted">
            Calm. Clear. Structured. Built for the complexity of real decisions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}