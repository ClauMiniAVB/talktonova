'use client'

import { motion } from 'framer-motion'

export default function SudokuHook() {
  return (
    <section id="sudoku" className="py-24 sm:py-32 px-6">
      <div className="max-w-section mx-auto">
        <motion.p
          className="text-lg sm:text-xl text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Every organization is a half-filled Sudoku board.
        </motion.p>
        <motion.p
          className="text-lg sm:text-xl text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Some of the numbers are wrong.
        </motion.p>
        <motion.p
          className="text-lg sm:text-xl text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A misplaced number doesn't break things immediately — it breaks things later, when you're deep in the puzzle and suddenly nothing fits.
        </motion.p>
        <motion.p
          className="text-lg sm:text-xl text-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Nova finds the ones that break everything.
        </motion.p>
      </div>
    </section>
  )
}