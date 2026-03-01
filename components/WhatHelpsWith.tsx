'use client'

import { motion } from 'framer-motion'

export default function WhatHelpsWith() {
  return (
    <section className="py-24 sm:py-32 px-6 border-t border-border">
      <div className="max-w-section mx-auto">
        <motion.h2
          className="text-2xl font-semibold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          What Nova Helps With
        </motion.h2>
        
        <motion.table
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <tbody>
            {[
              ['Strategic clarity', 'Untangle complex decisions'],
              ['Research synthesis', 'Turn dense information into understanding'],
              ['Risk mapping', 'Spot what others miss by tracing relationships'],
              ['Long-term thinking', 'Track decisions and their consequences over time'],
              ['Creative collaboration', 'Work through ideas with a partner that stays aligned'],
            ].map(([left, right], index) => (
              <tr key={index} className="border-b border-border/50">
                <td className="py-4 pr-4 text-foreground font-medium">{left}</td>
                <td className="py-4 text-secondary">{right}</td>
              </tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </section>
  )
}