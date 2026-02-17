'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiShieldCheck, HiCode, HiLightningBolt } from 'react-icons/hi'

const achievements = [
  {
    title: 'Introduction to JavaScript Certification',
    icon: HiCode,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'HTML Certification',
    icon: HiAcademicCap,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Introduction to Cyber Security Certification',
    icon: HiShieldCheck,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Smart India Hackathon — Participant',
    icon: HiLightningBolt,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Google AI Campus Fest — Participant',
    icon: HiLightningBolt,
    color: 'from-yellow-500 to-orange-500',
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center gradient-text">
            Achievements & Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, -2, 2, -2, 0],
                  transition: { duration: 0.5 }
                }}
                className="glass p-6 rounded-2xl relative overflow-hidden group cursor-pointer"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <achievement.icon className="text-3xl text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors">
                    {achievement.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
