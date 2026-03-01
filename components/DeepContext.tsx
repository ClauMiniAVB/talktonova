'use client'

import { motion } from 'framer-motion'

export default function DeepContext() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <div className="section-divider mb-24" />
        
        <motion.h2
          className="text-display-md font-bold uppercase text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Deep Context,<br />
          <span className="text-muted">Real Continuity</span>
        </motion.h2>
        
        <motion.p
          className="text-body-lg text-muted mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Most AI starts from zero every time.
        </motion.p>
        
        <motion.p
          className="text-xl text-foreground mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Nova maintains a <span className="gradient-text font-semibold">relational memory</span> — tracking your goals, decisions, and evolving context. As your thinking deepens, Nova stays aligned.
        </motion.p>
        
        <motion.p
          className="text-muted max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          You're not starting from zero every time.
        </motion.p>
      </div>
    </section>
  )
}