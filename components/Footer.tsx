'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          <motion.p
            className="text-xs text-tertiary tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © 2026 Lumath
          </motion.p>
          
          <motion.div
            className="flex gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a href="#" className="text-xs text-tertiary hover:text-secondary transition-colors duration-300">
              About
            </a>
            <a href="#" className="text-xs text-tertiary hover:text-secondary transition-colors duration-300">
              UDF
            </a>
            <a href="#" className="text-xs text-tertiary hover:text-secondary transition-colors duration-300">
              Research
            </a>
            <a href="mailto:nova@lumath.com" className="text-xs text-tertiary hover:text-secondary transition-colors duration-300">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}