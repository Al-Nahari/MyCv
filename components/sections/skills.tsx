'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, Database, Globe, Smartphone, Server, Cloud, Layers, Code2 } from 'lucide-react'

const categories = [
  {
    name: 'Languages',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Dart'],
  },
  {
    name: 'Frontend',
    icon: Globe,
    color: 'from-cyan-500 to-blue-500',
    skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Redux', 'Framer Motion'],
  },
  {
    name: 'Backend',
    icon: Server,
    color: 'from-purple-500 to-indigo-500',
    skills: ['Node.js', 'Express', 'NestJS', 'GraphQL', 'REST APIs'],
  },
  {
    name: 'Mobile',
    icon: Smartphone,
    color: 'from-emerald-500 to-cyan-500',
    skills: ['React Native', 'Expo', 'Flutter', 'iOS', 'Android'],
  },
  {
    name: 'Databases',
    icon: Database,
    color: 'from-orange-500 to-red-500',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma'],
  },
  {
    name: 'DevOps',
    icon: Cloud,
    color: 'from-blue-500 to-indigo-500',
    skills: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'Vercel'],
  },
  {
    name: 'Architecture',
    icon: Layers,
    color: 'from-pink-500 to-rose-500',
    skills: ['Microservices', 'Monorepo', 'Clean Architecture', 'Design Systems', 'API Design'],
  },
]

const allSkills = [
  'TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'React Native', 'PostgreSQL',
  'MongoDB', 'Docker', 'AWS', 'Tailwind CSS', 'GraphQL', 'Python', 'Redis', 'Prisma',
  'Vue.js', 'Express', 'NestJS', 'GraphQL', 'REST APIs', 'Flutter', 'iOS', 'Android',
  'Expo', 'CI/CD', 'GitHub Actions', 'Vercel', 'Clean Architecture', 'Microservices'
]

function SkillCloud() {
  return (
    <div className="relative h-[400px] flex items-center justify-center">
      {allSkills.map((skill, i) => {
        const angle = (i / allSkills.length) * 2 * Math.PI
        const radius = 120 + (i % 3) * 40
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={skill}
            className="absolute"
            style={{ left: '50%', top: '50%', marginLeft: `${x}px`, marginTop: `${y}px` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ scale: 1.2, zIndex: 10 }}
          >
            <div className="glass-card px-4 py-2 rounded-full text-sm font-medium text-[#a1a1aa] hover:text-[#fafafa] hover:border-[#3b82f6] transition-all duration-300 cursor-default whitespace-nowrap">
              {skill}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

function SkillBentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category, i) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.3 } }}
          className="glass-card gradient-border rounded-2xl p-6 group cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
              <category.icon size={20} className="text-white" />
            </div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
              {category.name}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-xs font-medium border border-[rgba(255,255,255,0.08)] text-[#a1a1aa] bg-[rgba(255,255,255,0.02)] group-hover:border-[rgba(59,130,246,0.3)] group-hover:text-[#fafafa] transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title mb-6">Technologies I work with</h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl">
            A comprehensive toolkit spanning full-stack web, mobile, and cloud technologies.
          </p>
        </motion.div>

        <SkillBentoGrid />
      </div>
    </section>
  )
}
