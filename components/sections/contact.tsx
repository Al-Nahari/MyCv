'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Send, ArrowUpRight } from 'lucide-react'
import { socialMeta } from '@/lib/data'
import type { Dictionary } from '@/lib/i18n/en'

export default function Contact({ dict }: { dict: Dictionary['contact'] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label">{dict.label}</span>
          <h2 className="section-title mb-6">
            {dict.titleLine1}<br />
            <span className="gradient-text">{dict.titleLine2}</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto text-balance">
            {dict.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {dict.availability}
          </div>

          <a
            href={socialMeta[0].href}
            className="magnetic-btn text-lg flex items-center gap-3"
          >
            <Send size={20} />
            hello@mohammed-alnahari.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {dict.socials.map((social, i) => {
            const meta = socialMeta[i]
            const Icon = meta.icon
            return (
              <motion.a
                key={social.label}
                href={meta.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card gradient-border rounded-2xl p-8 text-center group"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${meta.color} mb-6`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
                  {social.label}
                </h3>
                <p className="text-[#a1a1aa] text-sm mb-4 break-all">{social.value}</p>
                <div className="inline-flex items-center gap-1 text-sm text-[#ff5f6d] font-medium group-hover:gap-2 transition-all">
                  {dict.connect}
                  <ArrowUpRight size={14} />
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
