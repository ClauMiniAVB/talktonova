'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          <motion.p
            className="mono-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © 2026 LUMATH
          </motion.p>
          
          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a href="#" className="mono-label hover:text-accent-electric transition-colors duration-300">
              About
            </a>
            <a href="#" className="mono-label hover:text-accent-electric transition-colors duration-300">
              UDF
            </a>
            <a href="#" className="mono-label hover:text-accent-electric transition-colors duration-300">
              Research
            </a>
            <a href="mailto:nova@lumath.com" className="mono-label hover:text-accent-electric transition-colors duration-300">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}