'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiShieldCheck, HiCode, HiLightningBolt, HiBadgeCheck } from 'react-icons/hi'

const achievements = [
  { title: 'Introduction to JavaScript', type: 'Certification', icon: HiCode,        accent: '#6366f1' },
  { title: 'HTML Certification',          type: 'Certification', icon: HiAcademicCap, accent: '#f59e0b' },
  { title: 'Intro to Cyber Security',     type: 'Certification', icon: HiShieldCheck, accent: '#8b5cf6' },
  { title: 'Smart India Hackathon',       type: 'Participant',   icon: HiLightningBolt,accent: '#10b981' },
  { title: 'Google AI Campus Fest',       type: 'Participant',   icon: HiBadgeCheck,  accent: '#06b6d4' },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Recognition</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">Achievements</h2>
          <div className="divider" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: `0 20px 48px ${a.accent}20` }}
              className="relative overflow-hidden rounded-2xl p-6 border bg-white transition-all duration-300"
              style={{ borderColor: `${a.accent}22` }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${a.accent}, #06b6d4)` }} />
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-3xl opacity-10" style={{ background: a.accent }} />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${a.accent}15`, border: `1px solid ${a.accent}30` }}
              >
                <a.icon style={{ color: a.accent, fontSize: 22 }} />
              </div>

              <span
                className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md"
                style={{ color: a.accent, background: `${a.accent}12` }}
              >
                {a.type}
              </span>
              <h3 className="font-bold text-gray-800 mt-2 text-sm leading-snug">{a.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
