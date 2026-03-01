'use client'

import { motion } from 'framer-motion'

export default function DeepContext() {
  return (
    <section className="py-24 sm:py-32 px-6 border-t border-border">
      <div className="max-w-prose mx-auto">
        <motion.h2
          className="text-2xl font-semibold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Deep Context, Real Continuity
        </motion.h2>
        
        <motion.p
          className="text-lg text-secondary mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Most AI starts from zero every time.
        </motion.p>
        
        <motion.p
          className="text-lg text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Nova maintains a <span className="font-semibold">relational memory</span> — tracking your goals, decisions, and evolving context. As your thinking deepens, Nova stays aligned.
        </motion.p>
        
        <motion.p
          className="text-lg text-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          You're not starting from zero every time.
        </motion.p>
      </div>
    </section>
  )
}