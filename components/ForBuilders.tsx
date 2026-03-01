'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ForBuilders() {
  return (
    <section id="for-builders" className="py-24 sm:py-32 px-6 border-t border-border bg-gradient-to-b from-background to-background/95">
      <div className="max-w-section mx-auto">
        <motion.h2
          className="text-2xl font-semibold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          For Builders
        </motion.h2>
        
        <motion.p
          className="text-lg text-secondary mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          UDF provides <span className="text-foreground">relational infrastructure for computation</span>:
        </motion.p>
        
        <motion.div
          className="space-y-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">Security</h3>
            <p className="text-secondary">Relational auditing that finds structural vulnerabilities, not just known patterns</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">Compute</h3>
            <p className="text-secondary">Optimization based on thermodynamic coherence, not just local tuning</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">Agents</h3>
            <p className="text-secondary">Multi-agent coordination through shared relational state</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link 
            href="/developers" 
            className="text-accent hover:text-accent/80 transition-colors text-sm"
          >
            Learn more →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}