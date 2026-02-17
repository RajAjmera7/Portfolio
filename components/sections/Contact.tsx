'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiMail, HiUser, HiChat } from 'react-icons/hi'
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center gradient-text">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
                <p className="text-gray-400 text-lg mb-8">
                  Based in India 🇮🇳. Open to discussing new projects, creative ideas, or opportunities to collaborate.
                </p>
              </div>

              <div className="space-y-4">
                <motion.a
                  href="mailto:rajajmera007@gmail.com"
                  className="flex items-center gap-4 glass p-4 rounded-xl hover:bg-white/10 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan flex items-center justify-center">
                    <SiGmail className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white group-hover:text-neon-cyan transition-colors">rajajmera007@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass p-4 rounded-xl hover:bg-white/10 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan flex items-center justify-center">
                    <SiLinkedin className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-white group-hover:text-neon-cyan transition-colors">Raj Ajmera</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+919173473491"
                  className="flex items-center gap-4 glass p-4 rounded-xl hover:bg-white/10 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan flex items-center justify-center">
                    <SiGithub className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white group-hover:text-neon-cyan transition-colors">+91-9173473491</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              onSubmit={handleSubmit}
              className="glass p-8 rounded-3xl space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <div className="relative">
                  <HiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-neon-purple focus:outline-none text-white"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <div className="relative">
                  <HiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-neon-purple focus:outline-none text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <div className="relative">
                  <HiChat className="absolute left-4 top-4 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-neon-purple focus:outline-none text-white resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-xl font-semibold text-white"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-20 text-center text-gray-400"
          >
            <p>© 2024 Raj Ajmera. Built with Next.js, TypeScript & Framer Motion</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
