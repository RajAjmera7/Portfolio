'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiMail, HiUser, HiChat, HiPhone } from 'react-icons/hi'
import { SiLinkedin, SiGmail } from 'react-icons/si'

const contactItems = [
  { icon: SiGmail,    label: 'Email',    value: 'rajajmera007@gmail.com',                    href: 'mailto:rajajmera007@gmail.com',              accent: '#6366f1' },
  { icon: SiLinkedin, label: 'LinkedIn', value: 'Raj Ajmera',                                href: 'https://www.linkedin.com/in/raj-ajmera-007fa', accent: '#06b6d4' },
  { icon: HiPhone,    label: 'Phone',    value: '+91-8401661887',                             href: 'tel:+918401661887',                           accent: '#10b981' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-28 bg-[#050508] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#6366f1 1px,transparent 1px),linear-gradient(90deg,#6366f1 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/40 to-transparent" />
      {/* Glow orbs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6366f1] rounded-full blur-[140px] opacity-8 pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#06b6d4] rounded-full blur-[120px] opacity-8 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag-dark">Say hello</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">Get In Touch</h2>
          <div className="divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-black text-white mb-2">Let&apos;s work together</h3>
              <p className="text-gray-400 leading-relaxed">
                Based in India 🇮🇳. Open to new projects, creative ideas, or opportunities to collaborate on something great.
              </p>
            </div>

            <div className="space-y-3">
              {contactItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-dark rounded-2xl hover:border-[#6366f1]/30 transition-all group"
                  whileHover={{ x: 6 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}30` }}
                  >
                    <item.icon style={{ color: item.accent, fontSize: 17 }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">{item.label}</p>
                    <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <div className="glass-dark rounded-2xl p-5 border border-[#6366f1]/20 bg-gradient-to-br from-[#6366f1]/8 to-[#06b6d4]/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-bold text-white">Available for freelance</span>
              </div>
              <p className="text-xs text-gray-500">Currently open to new opportunities and interesting projects.</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-dark rounded-3xl p-8 space-y-5 border border-[#6366f1]/15"
          >
            {[
              { name: 'name',  label: 'Your Name',     type: 'text',  icon: HiUser, placeholder: 'John Doe' },
              { name: 'email', label: 'Email Address',  type: 'email', icon: HiMail, placeholder: 'john@example.com' },
            ].map(field => (
              <div key={field.name}>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{field.label}</label>
                <div className="relative">
                  <field.icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600 text-sm" />
                  <input
                    type={field.type}
                    name={field.name}
                    value={(form as any)[field.name]}
                    onChange={e => setForm({ ...form, [field.name]: e.target.value })}
                    placeholder={field.placeholder}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#6366f1]/60 focus:bg-[#6366f1]/5 transition-all"
                  />
                </div>
              </div>
            ))}

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
              <div className="relative">
                <HiChat className="absolute left-3.5 top-3.5 text-gray-600 text-sm" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#6366f1]/60 focus:bg-[#6366f1]/5 transition-all resize-none"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              className={`w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all ${
                sent
                  ? 'bg-green-500 shadow-lg shadow-green-500/30'
                  : 'bg-gradient-to-r from-[#6366f1] to-[#06b6d4] shadow-lg shadow-[#6366f1]/30'
              }`}
              whileHover={!sent ? { scale: 1.02, y: -1 } : {}}
              whileTap={{ scale: 0.98 }}
            >
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </motion.button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-white/6 text-center"
        >
          <p className="text-sm text-gray-600">
            © 2024 <span className="gradient-text font-semibold">Raj Ajmera</span> · Built with Next.js, TypeScript & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  )
}
