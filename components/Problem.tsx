'use client'

import { motion } from 'framer-motion'

export default function Problem() {
  return (
    <section className="py-24 sm:py-32 px-6 border-t border-border">
      <div className="max-w-prose mx-auto">
        <motion.p
          className="text-lg sm:text-xl text-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Most AI predicts the next word. It doesn't track whether the whole board holds together.
        </motion.p>
      </div>
    </section>
  )
}