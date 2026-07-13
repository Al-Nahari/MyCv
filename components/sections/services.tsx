'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Globe,
  Server,
  Smartphone,
  Code2,
  Database,
  Cloud,
  Layout,
  Boxes,
  LineChart
} from 'lucide-react'

const services = [
  {
    title: 'Full-Stack Development',
    description: 'End-to-end web application development with modern frameworks like Next.js, Angular, and Django. From database design to responsive UI, I deliver complete solutions.',
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend Development',
    description: 'Scalable REST APIs and microservices with Django, Django REST Framework, and FastAPI. Clean architecture, high performance, and security-first approach.',
    icon: Server,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications with Flutter and Angular. Native performance, beautiful UI, and seamless user experiences on iOS and Android.',
    icon: Smartphone,
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    title: 'Frontend Development',
    description: 'Modern, responsive frontends with Next.js, Angular, React, and TypeScript. Pixel-perfect UI, smooth animations, and optimal performance.',
    icon: Layout,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'API Development & Integration',
    description: 'RESTful and GraphQL APIs with Django REST Framework and FastAPI. Third-party integrations, authentication systems, and comprehensive documentation.',
    icon: Code2,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Database Design',
    description: 'Efficient database schema design with PostgreSQL, MySQL, and MongoDB. Query optimization, indexing strategies, and data migration.',
    icon: Database,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'System Architecture',
    description: 'Scalable microservices architecture, monolith-to-microservices migration, and system design for high-traffic applications.',
    icon: Boxes,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'DevOps & Deployment',
    description: 'CI/CD pipelines with GitHub Actions, containerization with Docker, and cloud deployment on Vercel, AWS, and other platforms.',
    icon: Cloud,
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Performance Optimization',
    description: 'Website speed optimization, code splitting, lazy loading, and performance auditing to ensure fast, smooth user experiences.',
    icon: LineChart,
    gradient: 'from-teal-500 to-emerald-500',
  },
]

export default function Services() {
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
          <span className="section-label">Services</span>
          <h2 className="section-title mb-6">What I can do for you</h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl">
            I offer end-to-end development services to help you build, scale, and maintain modern digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="glass-card gradient-border rounded-2xl p-8 group cursor-pointer"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)]">
                {service.title}
              </h3>
              <p className="text-[#a1a1aa] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
