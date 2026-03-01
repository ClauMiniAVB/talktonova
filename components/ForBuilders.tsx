'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ForBuilders() {
  return (
    <section id="for-builders" className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <div className="section-divider mb-24" />
        
        <motion.h2
          className="text-display-md font-bold uppercase text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          For Builders
        </motion.h2>
        
        <motion.p
          className="text-body-lg text-muted mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          UDF provides <span className="text-foreground font-medium">relational infrastructure for computation</span>:
        </motion.p>
        
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card">
            <div className="mono-label mb-3" style={{ color: 'var(--accent-teal)' }}>Security</div>
            <p className="text-muted text-sm">
              Relational auditing that finds structural vulnerabilities, not just known patterns
            </p>
          </div>
          <div className="card">
            <div className="mono-label mb-3" style={{ color: 'var(--accent-blue)' }}>Compute</div>
            <p className="text-muted text-sm">
              Optimization based on thermodynamic coherence, not just local tuning
            </p>
          </div>
          <div className="card">
            <div className="mono-label mb-3" style={{ color: 'var(--accent-purple)' }}>Agents</div>
            <p className="text-muted text-sm">
              Multi-agent coordination through shared relational state
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link 
            href="/developers" 
            className="text-accent-electric hover:text-accent-blue transition-colors text-sm font-medium"
          >
            Learn more →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}