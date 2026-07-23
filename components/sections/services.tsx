'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { serviceIcons, serviceGradients } from '@/lib/data'
import type { Dictionary } from '@/lib/i18n/en'

export default function Services({ dict }: { dict: Dictionary['services'] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-32 overflow-hidden">
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
          <p className="text-[#93a0b8] text-lg max-w-2xl">
            {dict.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.items.map((service, i) => {
            const Icon = serviceIcons[i]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="glass-card gradient-border rounded-2xl p-8 group cursor-pointer"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${serviceGradients[i]} mb-6`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)]">
                  {service.title}
                </h3>
                <p className="text-[#93a0b8] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
