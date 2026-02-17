'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowDown } from 'react-icons/hi'
import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si'
import Image from 'next/image'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-xl md:text-2xl text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              👋 Hello, I&apos;m
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="gradient-text">
                Raj Ajmera
              </span>
            </motion.h1>

            <div className="text-2xl md:text-4xl font-bold mb-6 h-16 text-neon-cyan">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'AI & Automation Enthusiast',
                  2000,
                  'Software Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Experienced in building <span className="text-neon-purple font-semibold">scalable, production-ready applications</span> using Next.js, React, Node.js, and MongoDB. 
              Skilled in <span className="text-neon-cyan font-semibold">AI integrations, n8n automation, secure authentication, and DevOps deployment</span>. 
              Currently engineering solutions at <span className="text-neon-purple font-semibold">HCL Technologies</span> 🚀
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full font-semibold text-white shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              className="px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/raj-ajmera-007fa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiLinkedin className="text-2xl text-neon-cyan" />
              </motion.a>
              <motion.a
                href="https://github.com/RajAjmera7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiGithub className="text-2xl text-white" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/_raj_ajmera"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiInstagram className="text-2xl text-neon-purple" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-80 h-80 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-full opacity-20 blur-2xl"></div>
              <Image
                src="/raj-photo.jpg"
                alt="Raj Ajmera"
                width={400}
                height={400}
                className="rounded-full object-cover border-4 border-neon-purple/30 relative z-10"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <HiArrowDown className="text-4xl text-neon-purple" />
        </motion.div>
      </div>
    </section>
  )
}
