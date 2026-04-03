'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home',         href: '#home' },
  { name: 'About',        href: '#about' },
  { name: 'Skills',       href: '#skills' },
  { name: 'Experience',   href: '#experience' },
  { name: 'Projects',     href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [active, setActive]       = useState('home')
  const [mobileOpen, setMobile]   = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const ids = navLinks.map(l => l.href.slice(1))
      const cur = ids.find(id => {
        const el = document.getElementById(id)
        if (!el) return false
        const r = el.getBoundingClientRect()
        return r.top <= 120 && r.bottom >= 120
      })
      if (cur) setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    setMobile(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050508]/90 backdrop-blur-xl border-b border-[#6366f1]/15 shadow-lg shadow-[#6366f1]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => go('#home')}
            className="text-xl font-black gradient-text tracking-tight"
          >
            Raj Ajmera
          </motion.button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const isActive = active === link.href.slice(1)
              return (
                <motion.button
                  key={link.name}
                  onClick={() => go(link.href)}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4]"
                      style={{ zIndex: -1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  {link.name}
                </motion.button>
              )
            })}
          </div>

          {/* Mobile toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobile(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-[#6366f1]/30 text-gray-300"
          >
            {mobileOpen ? <HiX size={18} /> : <HiMenu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-[#050508]/95 backdrop-blur-xl border-b border-[#6366f1]/15"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map(link => (
                <motion.button
                  key={link.name}
                  onClick={() => go(link.href)}
                  whileHover={{ x: 6 }}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    active === link.href.slice(1)
                      ? 'bg-[#6366f1]/15 text-[#6366f1]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
