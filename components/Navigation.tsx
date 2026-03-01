'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-section mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Nova
        </Link>
        <div className="flex items-center gap-8">
          <Link 
            href="#how-it-works" 
            className="text-secondary hover:text-foreground transition-colors text-sm"
          >
            How it works
          </Link>
          <Link 
            href="#for-builders" 
            className="text-secondary hover:text-foreground transition-colors text-sm"
          >
            For Builders
          </Link>
          <Link 
            href="#early-access" 
            className="text-sm bg-foreground text-background px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Early Access
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}