'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Rocket, Users } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '20+', label: 'Happy Clients' },
    { value: '3', label: 'Production Apps' },
  ]

  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Expertise',
      description: 'Building robust backend systems with Django & FastAPI, and modern frontends with Next.js and Angular. Proficient in TypeScript and Python ecosystems.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Rocket,
      title: 'Cross-Platform Mobile',
      description: 'Developing high-performance mobile experiences with Flutter and Angular, delivering apps that feel native on any device.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Production Ready',
      description: 'Delivered production-ready solutions including mazalat-riyadh.com — a live business platform built with Next.js serving real users.',
      gradient: 'from-emerald-500 to-cyan-500',
    },
  ]

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
          <span className="section-label">About Me</span>
          <h2 className="section-title mb-6">Engineer who ships<br />real products</h2>
          <p className="text-[#a1a1aa] text-lg max-w-3xl leading-relaxed">
            I&apos;m Mohammed Al-Nahari, an Information Technology Engineer based in Riyadh, Saudi Arabia. I specialize in building full-stack web applications, REST APIs, and cross-platform mobile apps. From Django and FastAPI backends to Next.js and Angular frontends, and Flutter mobile apps — I deliver end-to-end solutions that are scalable, maintainable, and production-ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card gradient-border rounded-2xl p-8 group cursor-pointer"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.gradient} mb-6`}>
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)]">
                {item.title}
              </h3>
              <p className="text-[#a1a1aa] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-8 font-[family-name:var(--font-space-grotesk)]">By the numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 font-[family-name:var(--font-space-grotesk)]">
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
