'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { HiExternalLink, HiArrowRight } from 'react-icons/hi'
import Image from 'next/image'

const projects = [
  {
    title: 'Avid Explorer',
    tagline: 'Full-stack travel booking platform',
    description: 'End-to-end travel booking with search-to-checkout flow, JWT authentication, role-based admin panel, Razorpay payment integration, and SSR blogs for SEO. Deployed with Nginx + PM2 and CI/CD pipeline.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'JWT', 'Razorpay', 'Nginx'],
    demo: 'https://avidexplorers.in/',
    accent: '#6366f1',
    images: [
      '/Avid Image/Screenshot 2026-02-17 171318.png',
      '/Avid Image/Screenshot 2026-02-17 171333.png',
      '/Avid Image/Screenshot 2026-02-17 171403.png',
      '/Avid Image/Screenshot 2026-02-17 171416.png',
    ],
  },
  {
    title: 'BDVH Institute',
    tagline: 'Custom CMS with bilingual support',
    description: 'CMS website with inline on-page editing, bilingual i18n (English-Hindi), role-based authentication, and type-safe full-stack architecture using App Router and REST APIs.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'i18n'],
    demo: '#',
    accent: '#06b6d4',
    images: [
      '/BDVH image/Screenshot 2026-02-17 171904.png',
      '/BDVH image/Screenshot 2026-02-17 171921.png',
      '/BDVH image/Screenshot 2026-02-17 171945.png',
      '/BDVH image/Screenshot 2026-02-17 172013.png',
    ],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-28 bg-[#050508] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#6366f1 1px,transparent 1px),linear-gradient(90deg,#6366f1 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag-dark">What I&apos;ve built</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">Featured Projects</h2>
          <div className="divider" />
        </motion.div>

        <div className="space-y-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isInView }: any) {
  const [cur, setCur] = useState(0)

  useEffect(() => {
    if (project.images.length < 2) return
    const t = setInterval(() => setCur(p => (p + 1) % project.images.length), 3000)
    return () => clearInterval(t)
  }, [project.images.length])

  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      whileHover={{ y: -4 }}
      className="glass-dark rounded-3xl overflow-hidden transition-all duration-300"
      style={{ boxShadow: `0 0 0 1px ${project.accent}22` }}
    >
      <div className={`grid md:grid-cols-2 ${!isEven ? 'md:[&>*:first-child]:order-2' : ''}`}>

        {/* Image */}
        <div className="relative h-64 md:h-auto min-h-[300px] bg-[#0f1228] overflow-hidden">
          <Image
            src={project.images[cur]}
            alt={project.title}
            fill
            className="object-cover opacity-90 transition-opacity duration-500"
            priority={index === 0}
          />
          {/* Color overlay */}
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.accent}18, transparent)` }} />

          {/* Dots */}
          {project.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 px-3 py-1.5 rounded-full">
              {project.images.map((_: any, i: number) => (
                <button
                  key={i}
                  onClick={() => setCur(i)}
                  className={`rounded-full transition-all ${i === cur ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40'}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div
            className="inline-block w-fit text-xs font-bold px-3 py-1 rounded-full text-white mb-4"
            style={{ background: `linear-gradient(135deg, ${project.accent}, #06b6d4)` }}
          >
            {project.tagline}
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">{project.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t: string) => (
              <span key={t} className="px-3 py-1 text-xs font-semibold rounded-lg bg-white/6 text-gray-300 border border-white/10">
                {t}
              </span>
            ))}
          </div>

          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-bold w-fit"
            style={{ background: `linear-gradient(135deg, ${project.accent}, #06b6d4)`, boxShadow: `0 8px 24px ${project.accent}40` }}
            whileHover={{ scale: 1.05, x: 3 }}
            whileTap={{ scale: 0.97 }}
          >
            <HiExternalLink />
            Live Demo
            <HiArrowRight className="text-xs" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
