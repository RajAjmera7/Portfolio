'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase } from 'react-icons/hi'

const experiences = [
  {
    company: 'HCL Technologies',
    role: 'Software Engineer',
    duration: 'Sep 2025 – Present',
    location: 'Noida, India',
    description: 'Developing scalable API-centric infrastructures, improving system performance, and collaborating on data-processing solutions for enterprise integrations',
    color: 'from-neon-purple to-neon-cyan',
  },
  {
    company: 'AiGeeks',
    role: 'Web Developer',
    duration: 'Jan 2025 – Sep 2025',
    location: 'Dubai',
    description: 'Built full-stack applications with React.js, Node.js, MongoDB. Implemented AI integrations, n8n automation workflows, and handled deployment with debugging & optimization',
    color: 'from-neon-cyan to-neon-purple',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center gradient-text">
            Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl border-l-4 border-neon-cyan"
              >
                <div className="flex items-start justify-between mb-4">
                  <HiBriefcase className="text-4xl text-neon-purple" />
                  <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">{exp.duration}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                <p className="text-neon-cyan font-semibold mb-1">{exp.role}</p>
                <p className="text-gray-500 text-sm mb-4">{exp.location}</p>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
