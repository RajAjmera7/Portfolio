'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowDown } from 'react-icons/hi'
import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si'
import Image from 'next/image'

const stats = [
  { value: '2+',  label: 'Years Exp.' },
  { value: '10+', label: 'Projects' },
  { value: '5+',  label: 'Tech Stacks' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050508] pt-16">

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.045]" style={{
        backgroundImage: 'linear-gradient(#6366f1 1px,transparent 1px),linear-gradient(90deg,#6366f1 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-[#6366f1] rounded-full blur-[140px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#06b6d4] rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-tag-dark mb-6"
            >
              👋 Available for work
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.05] tracking-tight mb-5"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="text-white">Hi, I&apos;m</span>
              <br />
              <span className="gradient-text">Raj Ajmera</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl font-semibold mb-6 h-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              style={{ color: '#06b6d4' }}
            >
              <TypeAnimation
                sequence={['Full Stack Developer', 2000, 'AI & Automation Enthusiast', 2000, 'Software Engineer @ HCL', 2000]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              Building <span className="text-[#6366f1] font-semibold">scalable, production-ready apps</span> with Next.js, Node.js & MongoDB.
              Passionate about <span className="text-[#06b6d4] font-semibold">AI integrations & DevOps</span>.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3 rounded-full font-semibold text-gray-300 text-sm border border-[#6366f1]/30 hover:border-[#6366f1] hover:text-white transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Socials */}
            <motion.div
              className="flex items-center gap-3 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              {[
                { href: 'https://www.linkedin.com/in/raj-ajmera-007fa', Icon: SiLinkedin, color: '#0A66C2' },
                { href: 'https://github.com/RajAjmera7',                 Icon: SiGithub,   color: '#ffffff' },
                { href: 'https://www.instagram.com/_raj_ajmera',         Icon: SiInstagram,color: '#E1306C' },
              ].map(({ href, Icon, color }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#6366f1]/25 flex items-center justify-center hover:border-[#6366f1] hover:bg-[#6366f1]/10 transition-all"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon style={{ color, fontSize: 17 }} />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
            >
              {stats.map((s, i) => (
                <div key={i} className="border-l-2 border-[#6366f1]/40 pl-4">
                  <p className="text-2xl font-black gradient-text">{s.value}</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right — Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#6366f1] to-[#06b6d4] opacity-20 blur-2xl animate-pulse-slow" />

              {/* Spinning ring */}
              <motion.div
                className="absolute -inset-3 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #6366f1, #06b6d4, transparent, #6366f1)',
                  padding: 2,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-[#050508]" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
              >
                <Image
                  src="/raj-photo.jpg"
                  alt="Raj Ajmera"
                  width={400}
                  height={400}
                  className="w-full h-full rounded-full object-cover border-2 border-[#6366f1]/30"
                  priority
                />
              </motion.div>

              {/* Badge — open to work */}
              <motion.div
                className="absolute -bottom-3 -right-3 bg-[#0f1228] border border-[#6366f1]/30 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-gray-300">Open to work</span>
              </motion.div>


            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] text-gray-600 font-semibold tracking-[0.2em] uppercase">Scroll</span>
          <HiArrowDown className="text-[#6366f1] text-lg" />
        </motion.div>
      </div>
    </section>
  )
}
