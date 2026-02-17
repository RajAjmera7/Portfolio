'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SiReact, SiNodedotjs, SiJavascript, SiMongodb, SiTailwindcss, SiPython, SiMysql, SiGit, SiNginx, SiTypescript, SiRedux, SiPostman, SiGithub, SiFigma } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { HiServer, HiShieldCheck, HiCode, HiLightningBolt, HiCube, HiTerminal } from 'react-icons/hi'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Next.js', icon: TbBrandNextjs, color: '#ffffff' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Framer Motion', icon: HiLightningBolt, color: '#0055FF' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: HiCode, color: '#ffffff' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: '.NET Core', icon: HiServer, color: '#512BD4' },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'VS Code', icon: HiTerminal, color: '#007ACC' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'n8n', icon: HiCube, color: '#EA4B71' },
    ]
  },
  {
    title: 'Deployment & DevOps',
    skills: [
      { name: 'Nginx', icon: SiNginx, color: '#009639' },
      { name: 'JWT Auth', icon: HiShieldCheck, color: '#22d3ee' },
    ]
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center gradient-text">
            Skills & Technologies
          </h2>

          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-neon-cyan mb-4">{category.title}</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: categoryIndex * 0.2 + index * 0.05, duration: 0.4 }}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: `0 0 20px ${skill.color}40`
                      }}
                      className="glass p-4 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer group"
                    >
                      <skill.icon 
                        className="text-3xl md:text-4xl transition-all group-hover:scale-110" 
                        style={{ color: skill.color }}
                      />
                      <h3 className="text-sm font-semibold text-white text-center">{skill.name}</h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
