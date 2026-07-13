'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import { experienceMeta } from '@/lib/data'
import type { Dictionary } from '@/lib/i18n/en'

export default function Experience({ dict }: { dict: Dictionary['experience'] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="section-label">{dict.label}</span>
          <h2 className="section-title">{dict.title}</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff5f6d] via-[#a855f7] to-transparent" />

          <div className="space-y-16">
            {dict.items.map((exp, i) => {
              const color = experienceMeta[i].color
              return (
                <motion.div
                  key={experienceMeta[i].id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {i % 2 === 0 ? (
                      <div className="glass-card rounded-2xl p-8 gradient-border">
                        <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">{exp.role}</h3>
                        <p className="text-[#ff5f6d] font-medium mb-1">{exp.company}</p>
                        <p className="text-[#71717a] text-sm mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 justify-end">
                          {exp.achievements.slice(0, 2).map((a) => (
                            <span key={a} className="text-xs text-[#a1a1aa] bg-[rgba(255,255,255,0.03)] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.06)]">
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${color} shadow-lg`}
                    />
                  </div>

                  <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    {i % 2 !== 0 ? (
                      <div className="glass-card rounded-2xl p-8 gradient-border">
                        <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">{exp.role}</h3>
                        <p className="text-[#ff5f6d] font-medium mb-1">{exp.company}</p>
                        <p className="text-[#71717a] text-sm mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.slice(0, 2).map((a) => (
                            <span key={a} className="text-xs text-[#a1a1aa] bg-[rgba(255,255,255,0.03)] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.06)]">
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  <div className="md:hidden ms-16 glass-card rounded-2xl p-6 gradient-border">
                    <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">{exp.role}</h3>
                    <p className="text-[#ff5f6d] font-medium mb-1">{exp.company}</p>
                    <p className="text-[#71717a] text-sm mb-2">{exp.location}</p>
                    <p className="text-[#71717a] text-sm mb-4">{exp.description}</p>
                    <div className="flex flex-col gap-2">
                      {exp.achievements.map((a) => (
                        <div key={a} className="flex items-start gap-2">
                          <ChevronRight size={16} className="text-[#ff5f6d] mt-0.5 flex-shrink-0 rtl:rotate-180" />
                          <span className="text-sm text-[#a1a1aa]">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
