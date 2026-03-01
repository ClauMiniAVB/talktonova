'use client'

import { motion } from 'framer-motion'

export default function Problem() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <div className="section-divider mb-24" />
        
        <motion.p
          className="text-body-lg text-muted max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Most AI predicts the next word. It doesn't track whether the whole board holds together.
        </motion.p>
      </div>
    </section>
  )
}