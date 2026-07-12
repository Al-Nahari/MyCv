'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Mazalat Riyadh',
    description: 'A production-ready real estate platform for listing and managing properties in Riyadh. Built with Next.js, featuring advanced search, property management dashboard, and responsive design.',
    longDescription: 'Full-stack real estate platform with admin dashboard, property listings, image galleries, and contact management. Handles thousands of property listings with real-time search and filtering.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    techStack: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://mazalat-riyadh.com',
    githubUrl: '#',
    color: 'from-blue-500 to-cyan-500',
    featured: true,
  },
  {
    id: 2,
    title: 'TaskFlow Mobile',
    description: 'Cross-platform task management mobile app with real-time sync, push notifications, and offline support.',
    longDescription: 'A productivity mobile application built with React Native and Expo, featuring real-time data synchronization, push notifications, and offline-first architecture.',
    tags: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
    techStack: ['React Native', 'Expo', 'Firebase', 'TypeScript', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-purple-500 to-pink-500',
    featured: false,
  },
  {
    id: 3,
    title: 'API Gateway Service',
    description: 'High-performance REST API gateway with rate limiting, authentication, and microservices orchestration.',
    longDescription: 'Enterprise-grade API gateway built with Node.js and Express, handling authentication, rate limiting, request routing, and comprehensive logging.',
    tags: ['Node.js', 'Express', 'Redis', 'Docker', 'AWS'],
    techStack: ['Node.js', 'Express', 'Redis', 'Docker', 'AWS Lambda', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-emerald-500 to-cyan-500',
    featured: false,
  },
  {
    id: 4,
    title: 'Design System Kit',
    description: 'Comprehensive component library and design system built for scalability and consistency across products.',
    longDescription: 'A production-ready design system with 50+ accessible components, built with React, TypeScript, and Tailwind CSS, featuring dark mode and full customization.',
    tags: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS'],
    techStack: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Jest'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-orange-500 to-red-500',
    featured: false,
  },
]

function ProjectCard({ project, index, isActive, onClick, key }: { project: typeof projects[0]; index: number; isActive: boolean; onClick: () => void; key?: React.Key }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className={`glass-card rounded-3xl p-8 cursor-pointer transition-all duration-500 group ${
        isActive ? 'border-[rgba(59,130,246,0.4)] shadow-2xl shadow-blue-500/10 scale-[1.02]' : 'hover:border-[rgba(255,255,255,0.15)]'
      }`}
    >
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-xs font-semibold mb-6`}>
        {project.featured && <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
        {project.featured ? 'Featured Project' : 'Project'}
      </div>

      <h3 className="text-2xl md:text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] group-hover:text-[#3b82f6] transition-colors">
        {project.title}
      </h3>

      <p className="text-[#a1a1aa] leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-medium border border-[rgba(255,255,255,0.1)] text-[#a1a1aa] bg-[rgba(255,255,255,0.02)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#fafafa] hover:text-[#3b82f6] transition-colors"
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#fafafa] hover:text-[#3b82f6] transition-colors"
        >
          <Github size={16} />
          Source Code
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeProject, setActiveProject] = useState(0)

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">Selected work</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isActive={activeProject === i}
              onClick={() => setActiveProject(i)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/mohammed-alnahari"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-btn inline-flex items-center gap-2"
          >
            <Github size={18} />
            View all on GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
