'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-5xl sm:text-6xl font-semibold tracking-tight text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Nova
      </motion.h1>
      <motion.p
        className="text-xl sm:text-2xl text-secondary text-center max-w-prose"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Relational Intelligence. Not predictive guessing.
      </motion.p>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a
          href="#sudoku"
          className="text-sm text-secondary hover:text-foreground transition-colors"
        >
          ↓
        </a>
      </motion.div>
    </section>
  )
}