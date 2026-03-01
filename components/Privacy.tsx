'use client'

import { motion } from 'framer-motion'

export default function Privacy() {
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
          Privacy and Control
        </motion.h2>
        
        <motion.p
          className="text-lg text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Your conversations are yours.
        </motion.p>
        
        <motion.p
          className="text-lg text-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Used to improve the discussion in the moment. Not to train external models. Not to profile. Not to sell.
        </motion.p>
      </div>
    </section>
  )
}