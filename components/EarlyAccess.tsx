'use client'

import { motion } from 'framer-motion'

export default function EarlyAccess() {
  return (
    <section id="early-access" className="py-24 sm:py-32 px-6 border-t border-border">
      <div className="max-w-section mx-auto text-center">
        <motion.h2
          className="text-2xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Early Access
        </motion.h2>
        
        <motion.p
          className="text-lg text-secondary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Nova is currently in private beta.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="mailto:nova@lumath.com?subject=Early%20Access%20Request&body=Tell%20us%20about%20yourself%20and%20what%20you're%20working%20on."
            className="inline-block bg-foreground text-background px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Join the waitlist
          </a>
        </motion.div>
        
        <motion.p
          className="mt-8 text-sm text-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Or share the idea that keeps you up at night.
        </motion.p>
      </div>
    </section>
  )
}