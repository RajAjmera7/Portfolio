'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Achievements from '@/components/sections/Achievements'
import Contact from '@/components/sections/Contact'
import BackgroundEffects from '@/components/ui/BackgroundEffects'
import IntroAnimation from '@/components/ui/IntroAnimation'
import Navbar from '@/components/Navbar'

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      <IntroAnimation onComplete={() => setIntroComplete(true)} />
      <motion.main
        className="relative"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={introComplete ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <BackgroundEffects />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </motion.main>
    </>
  )
}
