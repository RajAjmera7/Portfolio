'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import Image from 'next/image'

const projects = [
  {
    title: 'Avid Explorer',
    description: 'Full-stack travel booking platform with search to checkout flow, JWT authentication, role-based admin panel, Razorpay integration, and SSR blogs for SEO. Deployed with Nginx + PM2 and CI/CD.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'JWT', 'Razorpay', 'Nginx', 'PM2'],
    github: '#',
    demo: 'https://avidexplorers.in/',
    images: [
      '/Avid Image/Screenshot 2026-02-17 171318.png',
      '/Avid Image/Screenshot 2026-02-17 171333.png',
      '/Avid Image/Screenshot 2026-02-17 171403.png',
      '/Avid Image/Screenshot 2026-02-17 171416.png',
    ],
  },
  {
    title: 'BDVH Institute',
    description: 'Custom CMS website with inline on-page editing, bilingual i18n (English-Hindi), role-based authentication, and type-safe full-stack architecture using App Router and REST APIs.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'i18n'],
    github: '#',
    demo: '#',
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
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center gradient-text">
            Featured Projects
          </h2>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isInView }: any) {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % project.images.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [project.images.length])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="glass p-8 rounded-3xl"
    >
      <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
        {/* Image Section */}
        <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
          {project.images.length > 0 ? (
            <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-black">
              <Image
                src={project.images[currentImage]}
                alt={project.title}
                fill
                className="object-contain"
                priority={index === 0}
              />
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/50 px-3 py-2 rounded-full">
                  {project.images.map((_: any, i: number) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentImage ? 'bg-neon-cyan w-6' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="h-96 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center">
              <span className="text-6xl">💻</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {project.title}
          </h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-white/5 rounded-full text-neon-cyan border border-neon-cyan/30"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiExternalLink className="text-xl" />
              <span>Live Demo</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
