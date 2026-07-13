'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Calendar } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialUrl: '#',
    color: 'from-orange-400 to-yellow-500',
  },
  {
    id: 2,
    title: 'Meta Frontend Developer Professional Certificate',
    issuer: 'Meta (Coursera)',
    date: '2023',
    credentialUrl: '#',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Django for Everybody Specialization',
    issuer: 'University of Michigan (Coursera)',
    date: '2022',
    credentialUrl: '#',
    color: 'from-green-600 to-emerald-500',
  },
  {
    id: 4,
    title: 'Flutter & Dart – The Complete Guide',
    issuer: 'Udemy',
    date: '2022',
    credentialUrl: '#',
    color: 'from-sky-500 to-blue-500',
  },
]

export default function Certifications() {
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
          <span className="section-label">Certifications</span>
          <h2 className="section-title mb-6">Professional credentials</h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl">
            Continuous learning is essential in tech. Here are some of my recent certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card gradient-border rounded-2xl p-8 group cursor-pointer block"
            >
              <div className="flex items-start gap-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color}`}>
                  <Award size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-space-grotesk)] group-hover:text-[#3b82f6] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-[#3b82f6] font-medium text-sm mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-[#71717a] text-sm">
                    <Calendar size={14} />
                    {cert.date}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-[#a1a1aa] mb-6">
            Interested in working together? Let&apos;s discuss your project.
          </p>
          <a href="#contact" className="magnetic-btn inline-flex items-center gap-2">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
