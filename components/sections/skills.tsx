'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skillIcons, skillGradients, skillCategoryTags } from '@/lib/data'
import type { Dictionary } from '@/lib/i18n/en'

function SkillBentoGrid({ dict }: { dict: Dictionary['skills'] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {dict.categoryNames.map((name, i) => {
        const Icon = skillIcons[i]
        return (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="glass-card gradient-border rounded-2xl p-6 group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${skillGradients[i]}`}>
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
                {name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillCategoryTags[i].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-[rgba(255,255,255,0.08)] text-[#a1a1aa] bg-[rgba(255,255,255,0.02)] group-hover:border-[rgba(255,95,109,0.35)] group-hover:text-[#fafafa] transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function Skills({ dict }: { dict: Dictionary['skills'] }) {
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
          <span className="section-label">{dict.label}</span>
          <h2 className="section-title mb-6">{dict.title}</h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl">
            {dict.subtitle}
          </p>
        </motion.div>

        <SkillBentoGrid dict={dict} />
      </div>
    </section>
  )
}
