'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SiReact, SiNodedotjs, SiJavascript, SiMongodb, SiTailwindcss, SiPython, SiMysql, SiGit, SiNginx, SiTypescript, SiRedux, SiPostman, SiGithub, SiFigma } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { HiServer, HiShieldCheck, HiCode, HiLightningBolt, HiCube, HiTerminal } from 'react-icons/hi'

const categories = [
  {
    label: 'Frontend',
    accent: '#6366f1',
    skills: [
      { name: 'Next.js',       icon: TbBrandNextjs, color: '#818cf8' },
      { name: 'React.js',      icon: SiReact,       color: '#61DAFB' },
      { name: 'TypeScript',    icon: SiTypescript,  color: '#3178C6' },
      { name: 'JavaScript',    icon: SiJavascript,  color: '#F7DF1E' },
      { name: 'Redux',         icon: SiRedux,       color: '#764ABC' },
      { name: 'Tailwind CSS',  icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Framer Motion', icon: HiLightningBolt, color: '#6366f1' },
    ],
  },
  {
    label: 'Backend',
    accent: '#06b6d4',
    skills: [
      { name: 'Node.js',    icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: HiCode,      color: '#a5b4fc' },
      { name: 'Python',     icon: SiPython,    color: '#3776AB' },
      { name: '.NET Core',  icon: HiServer,    color: '#512BD4' },
    ],
  },
  {
    label: 'Databases',
    accent: '#10b981',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL',   icon: SiMysql,   color: '#4479A1' },
    ],
  },
  {
    label: 'Tools & DevOps',
    accent: '#f59e0b',
    skills: [
      { name: 'Git',      icon: SiGit,        color: '#F05032' },
      { name: 'GitHub',   icon: SiGithub,     color: '#e2e8f0' },
      { name: 'VS Code',  icon: HiTerminal,   color: '#007ACC' },
      { name: 'Postman',  icon: SiPostman,    color: '#FF6C37' },
      { name: 'Figma',    icon: SiFigma,      color: '#F24E1E' },
      { name: 'n8n',      icon: HiCube,       color: '#EA4B71' },
      { name: 'Nginx',    icon: SiNginx,      color: '#009639' },
      { name: 'JWT Auth', icon: HiShieldCheck,color: '#06b6d4' },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 bg-[#050508] relative overflow-hidden">
      {/* Grid bg */}
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
          <span className="section-tag-dark">What I work with</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">Skills & Tech</h2>
          <div className="divider" />
        </motion.div>

        <div className="space-y-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.12, duration: 0.55 }}
              className="glass-dark rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-8 rounded-full" style={{ background: cat.accent }} />
                <h3 className="font-bold text-gray-300 text-xs uppercase tracking-widest">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ci * 0.1 + si * 0.04, duration: 0.35 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/8 bg-white/5 cursor-default transition-all hover:border-[#6366f1]/40 hover:bg-[#6366f1]/8"
                  >
                    <skill.icon style={{ color: skill.color, fontSize: 18 }} />
                    <span className="text-sm font-semibold text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
