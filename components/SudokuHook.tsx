'use client'

import { motion } from 'framer-motion'

export default function SudokuHook() {
  return (
    <section id="sudoku" className="py-32 sm:py-40 px-6">
      <div className="max-w-section mx-auto">
        <motion.p
          className="text-xl sm:text-2xl text-secondary leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Every organization is a half-filled Sudoku board.
          <br />
          <span className="text-foreground">Some numbers are wrong.</span>
        </motion.p>
        
        <motion.p
          className="mt-12 text-lg sm:text-xl text-tertiary max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          A misplaced digit doesn't break things immediately — it breaks things later, 
          when you're deep in the puzzle and suddenly nothing fits.
        </motion.p>
        
        <motion.p
          className="mt-12 text-xl sm:text-2xl text-foreground font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Nova finds the ones that break everything.
        </motion.p>
      </div>
    </section>
  )
}