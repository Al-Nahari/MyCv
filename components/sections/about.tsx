'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { aboutIcons, aboutGradients } from '@/lib/data'
import type { Dictionary } from '@/lib/i18n/en'

export default function About({ dict }: { dict: Dictionary['about'] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="section-label">{dict.label}</span>
          <h2 className="section-title mb-6">{dict.titleLine1}<br />{dict.titleLine2}</h2>
          <p className="text-[#a1a1aa] text-lg max-w-3xl leading-relaxed">
            {dict.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {dict.highlights.map((item, i) => {
            const Icon = aboutIcons[i]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card gradient-border rounded-2xl p-8 group cursor-pointer"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${aboutGradients[i]} mb-6`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)]">
                  {item.title}
                </h3>
                <p className="text-[#a1a1aa] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-8 font-[family-name:var(--font-space-grotesk)]">{dict.statsTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {dict.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2 font-[family-name:var(--font-space-grotesk)]">
                  {stat.value}
                </div>
                <div className="text-[#71717a] text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
