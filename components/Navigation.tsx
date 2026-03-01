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
          ? 'bg-background/90 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="mx-auto px-6 lg:px-12 py-6 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-display text-lg font-medium tracking-tight text-foreground"
        >
          Nova
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-10">
          <Link 
            href="#how-it-works" 
            className="text-sm text-secondary hover:text-foreground transition-colors duration-300"
          >
            How it works
          </Link>
          <Link 
            href="#for-builders" 
            className="text-sm text-secondary hover:text-foreground transition-colors duration-300"
          >
            For Builders
          </Link>
          <Link 
            href="#early-access" 
            className="text-sm text-foreground hover:text-secondary transition-colors duration-300"
          >
            Early Access →
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}