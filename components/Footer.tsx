'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-section mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <motion.p
            className="text-sm text-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © 2026 Lumath. All rights reserved.
          </motion.p>
          
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#" className="text-sm text-secondary hover:text-foreground transition-colors">
              About
            </a>
            <a href="#" className="text-sm text-secondary hover:text-foreground transition-colors">
              UDF
            </a>
            <a href="#" className="text-sm text-secondary hover:text-foreground transition-colors">
              Research
            </a>
            <a href="mailto:nova@lumath.com" className="text-sm text-secondary hover:text-foreground transition-colors">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}