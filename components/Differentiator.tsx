'use client'

import { motion } from 'framer-motion'

export default function Differentiator() {
  return (
    <section id="framework" className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <div className="section-divider mb-24" />
        
        <motion.h2
          className="text-display-md font-bold uppercase text-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Same Prompt.<br />
          <span className="text-muted">Different Process.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-body-lg text-body mb-6">
              Nova is built on the{' '}
              <span className="text-foreground font-semibold">Unified Dynamics Framework</span> — 
              a relational architecture that maps how things connect, tracks coherence 
              across conversations, and aligns to what you're actually trying to do.
            </p>
            <p className="text-muted">
              Most AI predicts the next word. Nova predicts the next coherent move.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* UDF Principles */}
            <div className="card">
              <div className="mono-label mb-2">Core Principles</div>
              <div className="flex gap-8 text-foreground text-sm font-mono uppercase tracking-wider">
                <span>Coherence</span>
                <span>Entropy</span>
                <span>Actualization</span>
              </div>
            </div>
            
            {/* Visual bar representation */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted">Coherence</span>
                  <span className="text-sm text-accent-teal">Do parts agree?</span>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-accent-teal to-accent-blue" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted">Entropy</span>
                  <span className="text-sm text-accent-purple">Unresolved potential</span>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-accent-blue to-accent-purple" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted">Actualization</span>
                  <span className="text-sm text-accent-orange">Action threshold</span>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-[40%] rounded-full bg-gradient-to-r from-accent-purple to-accent-orange" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}