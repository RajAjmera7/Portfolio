'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    company: 'HCL Technologies',
    role: 'Software Engineer',
    duration: 'Sep 2025 – Present',
    location: 'Noida, India',
    description: 'Developing scalable API-centric infrastructures, improving system performance, and collaborating on data-processing solutions for enterprise integrations.',
    tags: ['API Development', 'Enterprise', 'Performance', 'Integration'],
    current: true,
  },
  {
    company: 'AiGeeks',
    role: 'Web Developer',
    duration: 'Jan 2025 – Sep 2025',
    location: 'Dubai (Remote)',
    description: 'Built full-stack applications with React.js, Node.js, MongoDB. Implemented AI integrations, n8n automation workflows, and handled deployment with debugging & optimization.',
    tags: ['React', 'Node.js', 'AI', 'n8n', 'MongoDB', 'DevOps'],
    current: false,
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Where I&apos;ve worked</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">Experience</h2>
          <div className="divider" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[#6366f1] via-[#06b6d4] to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div className={`absolute left-4 top-7 w-4 h-4 rounded-full border-2 border-white shadow-lg -translate-x-1/2 z-10 ${exp.current ? 'bg-gradient-to-br from-[#6366f1] to-[#06b6d4]' : 'bg-gray-300'}`} />
                {exp.current && (
                  <div className="absolute left-4 top-7 w-4 h-4 rounded-full bg-[#6366f1] opacity-40 animate-ping -translate-x-1/2 z-10" />
                )}

                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 20px 48px rgba(99,102,241,0.13)' }}
                  className="relative overflow-hidden rounded-2xl p-6 border border-[#6366f1]/12 bg-gradient-to-br from-white to-[#6366f1]/3 transition-all duration-300"
                >
                  {/* Accent corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#6366f1]/8 to-transparent rounded-bl-3xl" />

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-black text-gray-900">{exp.company}</h3>
                      <p className="text-[#6366f1] font-semibold text-sm mt-0.5">{exp.role}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${exp.current ? 'bg-green-50 text-green-600 border border-green-200' : 'bg-gray-100 text-gray-500'}`}>
                        {exp.current ? '🟢 Current' : 'Completed'}
                      </span>
                      <p className="text-xs text-gray-400 mt-1">{exp.duration}</p>
                      <p className="text-xs text-gray-400">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#6366f1]/8 text-[#6366f1] border border-[#6366f1]/15">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
