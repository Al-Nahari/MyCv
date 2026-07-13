'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Information Technology',
    institution: 'University Name',
    location: 'Riyadh, Saudi Arabia',
    period: '2015 – 2019',
    description: 'Focused on software engineering, database systems, and web technologies. Graduated with honors.',
    achievements: [
      'Graduated with honors',
      'Capstone project on scalable web architectures',
      'Active member of the Computer Science club',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic background</h2>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card gradient-border rounded-2xl p-8"
            >
              <div className="flex items-start gap-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color}`}>
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
                    {edu.degree}
                  </h3>
                  <p className="text-[#3b82f6] font-medium mb-1">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-[#71717a] text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-[#a1a1aa] leading-relaxed mb-4">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="text-xs text-[#a1a1aa] bg-[rgba(255,255,255,0.03)] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.06)]"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
