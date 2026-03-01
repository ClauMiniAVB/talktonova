'use client'

import { motion } from 'framer-motion'

export default function EarlyAccess() {
  return (
    <section id="access" className="py-24 px-6">
      <div className="max-w-content mx-auto text-center">
        <div className="section-divider mb-24" />
        
        <motion.h2
          className="text-display-lg font-bold uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Early Access</span>
        </motion.h2>
        
        <motion.p
          className="text-body-lg text-muted mb-12 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Nova is currently in private beta.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="mailto:nova@lumath.com?subject=Early%20Access%20Request&body=Tell%20us%20about%20yourself%20and%20what%20you're%20working%20on."
            className="btn-primary inline-block"
          >
            Join the Waitlist
          </a>
        </motion.div>
        
        <motion.p
          className="mt-8 text-sm text-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Or share the idea that keeps you up at night.
        </motion.p>
      </div>
    </section>
  )
}