'use client'

import { motion } from 'framer-motion'

export default function Privacy() {
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
          Privacy and Control
        </motion.h2>
        
        <motion.p
          className="text-xl text-foreground mb-4 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Your conversations are yours.
        </motion.p>
        
        <motion.p
          className="text-muted max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Used to improve the discussion in the moment. Not to train external models. Not to profile. Not to sell.
        </motion.p>
      </div>
    </section>
  )
}