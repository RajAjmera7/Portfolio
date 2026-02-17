'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center gradient-text">
            About Me
          </h2>
          
          {/* Main About Text */}
          <motion.div
            className="glass p-8 md:p-12 rounded-3xl max-w-5xl mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              I&apos;m a <span className="text-neon-purple font-semibold">Full Stack Developer</span> experienced in building 
              scalable, production-ready applications using Next.js, React, Node.js, and MongoDB. Currently working as a{' '}
              <span className="text-neon-cyan font-semibold">Software Engineer at HCL Technologies</span>, I specialize in 
              AI integrations, n8n automation, secure authentication, and DevOps deployment.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              With strong expertise in debugging, performance optimization, and modern UI/UX design, I create{' '}
              <span className="text-neon-purple font-semibold">real-world applications</span> that solve meaningful problems. 
              My journey includes developing full-stack platforms with JWT authentication, payment integrations, and CI/CD pipelines.
            </p>
          </motion.div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Education */}
            <motion.div
              className="glass p-6 rounded-2xl text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-lg font-bold text-neon-cyan mb-2">Education</h3>
              <p className="text-white font-semibold">B.E. Computer Engineering</p>
              <p className="text-sm text-gray-400 mt-1">Marwadi University</p>
              <p className="text-sm text-gray-500">2021–2025</p>
            </motion.div>

            {/* Experience */}
            <motion.div
              className="glass p-6 rounded-2xl text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-lg font-bold text-neon-cyan mb-2">Experience</h3>
              <p className="text-white font-semibold">Full-Stack Development</p>
              <p className="text-sm text-gray-400 mt-1">Scalable web applications</p>
              <p className="text-sm text-neon-purple font-semibold mt-2">1+ year</p>
            </motion.div>

            {/* Interests */}
            <motion.div
              className="glass p-6 rounded-2xl text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-lg font-bold text-neon-cyan mb-2">Interests</h3>
              <p className="text-white font-semibold">Technology & Innovation</p>
              <p className="text-sm text-gray-400 mt-1">Exploring cutting-edge solutions</p>
            </motion.div>

            {/* Global Mindset */}
            <motion.div
              className="glass p-6 rounded-2xl text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-lg font-bold text-neon-cyan mb-2">Global Mindset</h3>
              <p className="text-white font-semibold">Remote Ready</p>
              <p className="text-sm text-gray-400 mt-1">Collaborating across time zones</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
