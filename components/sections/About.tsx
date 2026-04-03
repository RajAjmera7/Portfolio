'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const cards = [
  { emoji: '🎓', title: 'Education',    main: 'B.E. Computer Engineering', sub: 'Marwadi University · 2021–2025' },
  { emoji: '💼', title: 'Current Role', main: 'Software Engineer',          sub: 'HCL Technologies · Noida' },
  { emoji: '🚀', title: 'Experience',   main: '1+ Year',                    sub: 'Full-Stack Development' },
  { emoji: '🌍', title: 'Availability', main: 'Remote Ready',               sub: 'Open to global opportunities' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      {/* Subtle top border glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Who I am</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">About Me</h2>
          <div className="divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              I&apos;m a <span className="text-[#6366f1] font-semibold">Full Stack Developer</span> who loves building
              scalable, production-ready applications. Currently working as a{' '}
              <span className="text-[#06b6d4] font-semibold">Software Engineer at HCL Technologies</span>, I specialize in
              AI integrations, n8n automation, secure authentication, and DevOps deployment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With strong expertise in debugging, performance optimization, and modern UI/UX, I create{' '}
              <span className="text-[#6366f1] font-semibold">real-world applications</span> that solve meaningful problems —
              from JWT-secured platforms to CI/CD pipelines and payment integrations.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Next.js','React','Node.js','MongoDB','AI/ML','DevOps','n8n','TypeScript'].map(t => (
                <span key={t} className="px-3 py-1 text-xs font-bold rounded-full bg-[#6366f1]/8 text-[#6366f1] border border-[#6366f1]/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: '0 20px 48px rgba(99,102,241,0.15)' }}
                className="relative overflow-hidden rounded-2xl p-5 border border-[#6366f1]/12 bg-gradient-to-br from-white to-[#6366f1]/4 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#6366f1]/10 to-[#06b6d4]/10 rounded-bl-3xl" />
                <div className="text-3xl mb-3">{c.emoji}</div>
                <p className="text-[10px] font-bold text-[#6366f1] uppercase tracking-widest mb-1">{c.title}</p>
                <p className="font-bold text-gray-800 text-sm leading-snug">{c.main}</p>
                <p className="text-xs text-gray-400 mt-1">{c.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
