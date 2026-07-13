'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'Senior Full-Stack Developer',
    company: 'Tech Solutions Inc.',
    location: 'Riyadh, Saudi Arabia',
    period: '2023 – Present',
    description: 'Leading development of enterprise web applications using Next.js, Angular, Django, and Flutter. Architecting scalable microservices and mentoring development teams.',
    achievements: [
      'Led migration from legacy monolith to Next.js microservices architecture',
      'Reduced page load times by 60% through optimization and code splitting',
      'Mentored team of 5 junior developers on best practices',
      'Built production-ready business website mazalat-riyadh.com with Next.js',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'Digital Agency Co.',
    location: 'Riyadh, Saudi Arabia',
    period: '2021 – 2023',
    description: 'Built and deployed multiple client-facing web and mobile applications using Django, FastAPI, Angular, and Flutter. Specialized in REST APIs and cross-platform development.',
    achievements: [
      'Delivered 15+ client projects across e-commerce, SaaS, and real estate domains',
      'Built REST APIs with Django REST Framework and FastAPI',
      'Developed cross-platform mobile apps with Flutter',
      'Implemented CI/CD pipelines reducing deployment time by 70%',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    role: 'Mobile Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: '2020 – 2021',
    description: 'Developed cross-platform mobile applications using Flutter and React Native. Collaborated with design and product teams.',
    achievements: [
      'Shipped 3 mobile apps with 10k+ downloads',
      'Achieved 4.5+ star rating on App Store and Play Store',
      'Implemented offline-first architecture for seamless UX',
    ],
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 4,
    role: 'IT Engineer',
    company: 'Government Entity',
    location: 'Saudi Arabia',
    period: '2019 – 2020',
    description: 'Started professional career in IT engineering, managing infrastructure and developing internal tools with Python and Django.',
    achievements: [
      'Automated manual processes saving 20+ hours per week',
      'Managed server infrastructure for 200+ employees',
      'Developed internal dashboard for IT asset management with Django',
    ],
    color: 'from-orange-500 to-red-500',
  },
]

export default function Experience() {
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
          <span className="section-label">Experience</span>
          <h2 className="section-title">Career journey</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#3b82f6] via-[#8b5cf6] to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
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
                      <p className="text-[#3b82f6] font-medium mb-1">{exp.company}</p>
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
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg`}
                  />
                </div>

                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  {i % 2 !== 0 ? (
                    <div className="glass-card rounded-2xl p-8 gradient-border">
                      <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">{exp.role}</h3>
                      <p className="text-[#3b82f6] font-medium mb-1">{exp.company}</p>
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

                <div className="md:hidden ml-16 glass-card rounded-2xl p-6 gradient-border">
                  <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">{exp.role}</h3>
                  <p className="text-[#3b82f6] font-medium mb-1">{exp.company}</p>
                  <p className="text-[#71717a] text-sm mb-2">{exp.location}</p>
                  <p className="text-[#71717a] text-sm mb-4">{exp.description}</p>
                  <div className="flex flex-col gap-2">
                    {exp.achievements.map((a) => (
                      <div key={a} className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-[#3b82f6] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#a1a1aa]">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
