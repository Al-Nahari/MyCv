'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { projectMeta } from '@/lib/data'
import type { Dictionary } from '@/lib/i18n/en'

type ProjectItem = Dictionary['projects']['items'][number]

function ProjectCard({
  project,
  meta,
  index,
  isActive,
  onClick,
  dict,
}: {
  project: ProjectItem
  meta: typeof projectMeta[number]
  index: number
  isActive: boolean
  onClick: () => void
  dict: Dictionary['projects']
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className={`glass-card rounded-3xl p-8 cursor-pointer transition-all duration-500 group ${
        isActive ? 'border-[rgba(255,95,109,0.4)] shadow-2xl shadow-[#ff5f6d]/10 scale-[1.02]' : 'hover:border-[rgba(255,255,255,0.15)]'
      }`}
    >
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${meta.color} text-white text-xs font-semibold mb-6`}>
        {meta.featured && <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
        {meta.featured ? dict.featuredBadge : dict.projectBadge}
      </div>

      <h3 className="text-2xl md:text-3xl font-extrabold mb-4 font-[family-name:var(--font-space-grotesk)] group-hover:text-[#ff5f6d] transition-colors">
        {project.title}
      </h3>

      <p className="text-[#a1a1aa] leading-relaxed mb-4">
        {project.description}
      </p>

      {project.problem && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[#fafafa] mb-2">{dict.problemLabel}</h4>
          <p className="text-[#a1a1aa] text-sm leading-relaxed">{project.problem}</p>
        </div>
      )}

      {project.solution && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[#fafafa] mb-2">{dict.solutionLabel}</h4>
          <p className="text-[#a1a1aa] text-sm leading-relaxed">{project.solution}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-8">
        {meta.tags.map((tag) => (
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
          href={meta.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#fafafa] hover:text-[#ff5f6d] transition-colors"
        >
          <ExternalLink size={16} />
          {dict.liveDemo}
        </a>
        <a
          href={meta.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#fafafa] hover:text-[#ff5f6d] transition-colors"
        >
          <Github size={16} />
          {dict.sourceCode}
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects({ dict }: { dict: Dictionary['projects'] }) {
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
          <span className="section-label">{dict.label}</span>
          <h2 className="section-title">{dict.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {dict.items.map((project, i) => (
            <ProjectCard
              key={projectMeta[i].id}
              project={project}
              meta={projectMeta[i]}
              index={i}
              isActive={activeProject === i}
              onClick={() => setActiveProject(i)}
              dict={dict}
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
            {dict.viewAll}
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
