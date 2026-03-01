'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-xl border-b border-border' 
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="mx-auto px-6 lg:px-12 py-6 flex justify-between items-center max-w-content">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-semibold text-lg tracking-tight text-foreground"
        >
          <span className="gradient-text">Nova</span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-8">
          <Link 
            href="#how-it-works" 
            className="mono-label hover:text-accent-electric transition-colors duration-300"
          >
            How It Works
          </Link>
          <Link 
            href="#for-builders" 
            className="mono-label hover:text-accent-electric transition-colors duration-300"
          >
            For Builders
          </Link>
          <Link 
            href="#access" 
            className="text-sm text-foreground font-medium px-4 py-2 border border-border rounded hover:border-accent-electric hover:text-accent-electric transition-all duration-300"
          >
            Early Access
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}