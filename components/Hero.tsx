'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Gradient glows */}
      <div className="hero-glow hero-glow-teal" />
      <div className="hero-glow hero-glow-purple" />
      
      {/* Logo top-left */}
      <div className="absolute top-8 left-8 z-20">
        <span className="text-sm font-medium tracking-wider text-muted">LUMATH</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="font-bold tracking-tight"
          style={{ 
            fontSize: 'clamp(3rem, 8vw, 4.5rem)',
            textTransform: 'uppercase',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="gradient-text">Nova</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-body-lg text-body max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Relational Intelligence
        </motion.p>
        
        <motion.p
          className="mt-2 text-muted max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Not predictive guessing.
        </motion.p>

        <motion.div
          className="mt-10 flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#access" className="btn-primary">
            Try Nova
          </a>
          <a href="#framework" className="btn-secondary">
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.a
          href="#sudoku"
          className="block text-muted/50 hover:text-muted transition-colors duration-300"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        </motion.a>
      </motion.div>
    </section>
  )
}