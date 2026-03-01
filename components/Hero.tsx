'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Main content - centered */}
      <div className="relative z-10 text-center px-6">
        {/* Nova title - massive, light weight */}
        <motion.h1
          className="font-display weight-300"
          style={{ 
            fontSize: 'clamp(5rem, 18vw, 14rem)',
            letterSpacing: '-0.05em',
            lineHeight: '0.85',
            fontWeight: 300,
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Nova
        </motion.h1>

        {/* Tagline - smaller, secondary */}
        <motion.p
          className="mt-8 max-w-xl mx-auto"
          style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
            fontWeight: 300,
            color: 'var(--secondary)',
            lineHeight: 1.5,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Relational Intelligence.
          <br />
          <span className="text-white/60">Not predictive guessing.</span>
        </motion.p>
      </div>

      {/* Scroll indicator - bottom */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.a
          href="#sudoku"
          className="block text-secondary/50 hover:text-secondary transition-colors duration-300"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        </motion.a>
      </motion.div>

      {/* Subtle corner accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-white/10" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-white/10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-white/10" />
    </section>
  )
}