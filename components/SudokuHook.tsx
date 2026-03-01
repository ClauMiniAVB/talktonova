'use client'

import { motion } from 'framer-motion'

export default function SudokuHook() {
  return (
    <section id="sudoku" className="py-24 px-6">
      <div className="max-w-content mx-auto">
        {/* Section divider */}
        <div className="section-divider mb-24" />
        
        <motion.p
          className="text-display-lg text-foreground font-bold uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Every organization is a half-filled Sudoku board.
        </motion.p>
        
        <motion.p
          className="mt-8 text-2xl text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-accent-electric">Some numbers are wrong.</span>
        </motion.p>
        
        <motion.p
          className="mt-8 text-body-lg text-muted max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A misplaced digit doesn't break things immediately — it breaks things later, 
          when you're deep in the puzzle and suddenly nothing fits.
        </motion.p>
        
        <motion.p
          className="mt-8 text-display-md font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="gradient-text">Nova finds the ones that break everything.</span>
        </motion.p>
      </div>
    </section>
  )
}