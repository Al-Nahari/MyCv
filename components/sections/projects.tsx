'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, type MouseEvent } from 'react'
import { ExternalLink, Github, ArrowUpRight, Circle } from 'lucide-react'
import { projectMeta } from '@/lib/data'
import type { Dictionary } from '@/lib/i18n/en'

type ProjectItem = Dictionary['projects']['items'][number]

function ProjectMockup({ color, title }: { color: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -8, y: px * 10 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      style={{ perspective: 1000 }}
      className="device-frame w-full"
    >
      <div className="device-chrome">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
        <div className="ml-3 flex-1 text-center text-[10px] text-[#5b6478] truncate">{title}</div>
      </div>
      <div className={`relative h-48 md:h-64 bg-gradient-to-br ${color} opacity-90 overflow-hidden`}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Circle className="text-white/25" size={72} strokeWidth={1} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
    </motion.div>
  )
}

function ProjectCard({
  project,
  meta,
  index,
  dict,
}: {
  project: ProjectItem
  meta: typeof projectMeta[number]
  index: number
  dict: Dictionary['projects']
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="glass-card rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 hover:border-[rgba(255,255,255,0.15)] transition-colors duration-500"
    >
      <ProjectMockup color={meta.color} title={project.title} />

      <div className="flex flex-col">
        <div className={`inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${meta.color} text-white text-xs font-semibold mb-4`}>
          {meta.featured && <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
          {meta.featured ? dict.featuredBadge : dict.projectBadge}
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold mb-3 font-[family-name:var(--font-space-grotesk)]">
          {project.title}
        </h3>

        <p className="text-[#93a0b8] leading-relaxed mb-4 text-sm md:text-base">
          {project.description}
        </p>

        {project.problem && (
          <div className="mb-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5e94ff] mb-1">{dict.problemLabel}</h4>
            <p className="text-[#93a0b8] text-sm leading-relaxed">{project.problem}</p>
          </div>
        )}

        {project.solution && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#22d3ee] mb-1">{dict.solutionLabel}</h4>
            <p className="text-[#93a0b8] text-sm leading-relaxed">{project.solution}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {meta.tags.map((tag) => (
            <span key={tag} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a
            href={meta.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#eef2fb] hover:text-[#5e94ff] transition-colors"
          >
            <ExternalLink size={16} />
            {dict.liveDemo}
          </a>
          <a
            href={meta.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#eef2fb] hover:text-[#5e94ff] transition-colors"
          >
            <Github size={16} />
            {dict.sourceCode}
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects({ dict }: { dict: Dictionary['projects'] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

        <div className="flex flex-col gap-6">
          {dict.items.map((project, i) => (
            <ProjectCard key={projectMeta[i].id} project={project} meta={projectMeta[i]} index={i} dict={dict} />
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
            data-cursor-hover
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
