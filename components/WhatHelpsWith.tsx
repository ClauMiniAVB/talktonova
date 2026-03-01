'use client'

import { motion } from 'framer-motion'

export default function WhatHelpsWith() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <div className="section-divider mb-24" />
        
        <motion.h2
          className="text-display-md font-bold uppercase text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          What Nova Helps With
        </motion.h2>
        
        <motion.div
          className="grid gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {[
            { title: 'Strategic Clarity', desc: 'Untangle complex decisions', color: 'var(--accent-teal)' },
            { title: 'Research Synthesis', desc: 'Turn dense information into understanding', color: 'var(--accent-blue)' },
            { title: 'Risk Mapping', desc: 'Spot what others miss by tracing relationships', color: 'var(--accent-purple)' },
            { title: 'Long-term Thinking', desc: 'Track decisions and their consequences over time', color: 'var(--accent-orange)' },
            { title: 'Creative Collaboration', desc: 'Work through ideas with a partner that stays aligned', color: 'var(--accent-teal)' },
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-4 border-b border-border"
            >
              <div className="flex items-center gap-3 sm:w-1/3">
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-foreground font-medium">{item.title}</span>
              </div>
              <span className="text-muted text-sm sm:w-2/3">{item.desc}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}