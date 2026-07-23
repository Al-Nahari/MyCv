'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import { skillIcons, skillGradients, skillCategoryTags, skillCloudTags } from '@/lib/data'
import type { Dictionary } from '@/lib/i18n/en'

export default function Skills({ dict }: { dict: Dictionary['skills'] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [active, setActive] = useState<number | null>(null)

  const visibleTags = useMemo(
    () => (active === null ? skillCloudTags : skillCategoryTags[active]),
    [active]
  )

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="section-label">{dict.label}</span>
          <h2 className="section-title mb-6">{dict.title}</h2>
          <p className="text-[#93a0b8] text-lg max-w-2xl">{dict.subtitle}</p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setActive(null)}
            data-cursor-hover
            className={`tag-chip px-4 py-2 ${active === null ? 'is-active' : ''}`}
          >
            {dict.categoryNames.length ? 'All' : 'All'}
          </button>
          {dict.categoryNames.map((name, i) => {
            const Icon = skillIcons[i]
            return (
              <button
                key={name}
                onClick={() => setActive(active === i ? null : i)}
                data-cursor-hover
                className={`tag-chip inline-flex items-center gap-2 px-4 py-2 ${active === i ? 'is-active' : ''}`}
              >
                <Icon size={14} />
                {name}
              </button>
            )
          })}
        </div>

        <motion.div
          layout
          className="glass-card rounded-3xl p-8 md:p-12 min-h-[260px] flex flex-wrap content-start gap-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleTags.map((skill, i) => (
              <motion.span
                key={skill}
                layout
                initial={{ opacity: 0, scale: 0.7, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                data-cursor-hover
                className={`px-4 py-2 rounded-full text-sm font-semibold border border-[rgba(255,255,255,0.08)] text-[#eef2fb] bg-gradient-to-r ${
                  skillGradients[i % skillGradients.length]
                } bg-opacity-10 cursor-default`}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <span
                  className={`bg-gradient-to-r ${skillGradients[i % skillGradients.length]} bg-clip-text text-transparent`}
                >
                  {skill}
                </span>
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
