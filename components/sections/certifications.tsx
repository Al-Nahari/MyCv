'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar } from 'lucide-react'
import { certificationMeta, certificationIcon as Award } from '@/lib/data'
import type { Dictionary } from '@/lib/i18n/en'

export default function Certifications({ dict }: { dict: Dictionary['certifications'] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.items.map((cert, i) => {
            const meta = certificationMeta[i]
            return (
              <motion.a
                key={meta.id}
                href={meta.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-card gradient-border rounded-2xl p-8 group cursor-pointer block"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${meta.color}`}>
                    <Award size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-space-grotesk)] group-hover:text-[#ff5f6d] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-[#ff5f6d] font-medium text-sm mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-2 text-[#71717a] text-sm">
                      <Calendar size={14} />
                      {cert.date}
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-[#a1a1aa] mb-6">
            {dict.ctaText}
          </p>
          <a href="#contact" className="magnetic-btn inline-flex items-center gap-2">
            {dict.ctaButton}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
