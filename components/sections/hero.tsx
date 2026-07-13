'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Code2, Sparkles, Zap } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  }

  const techPills = [
    { label: 'Next.js', color: 'from-blue-500 to-cyan-500' },
    { label: 'Angular', color: 'from-red-500 to-rose-500' },
    { label: 'Django', color: 'from-green-600 to-emerald-500' },
    { label: 'FastAPI', color: 'from-teal-500 to-cyan-500' },
    { label: 'Flutter', color: 'from-sky-500 to-blue-500' },
    { label: 'TypeScript', color: 'from-blue-600 to-indigo-500' },
    { label: 'Python', color: 'from-yellow-500 to-orange-500' },
    { label: 'PostgreSQL', color: 'from-indigo-500 to-purple-500' },
    { label: 'Docker', color: 'from-blue-400 to-indigo-500' },
    { label: 'AWS', color: 'from-orange-400 to-yellow-500' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-sm text-[#a1a1aa]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 font-[family-name:var(--font-space-grotesk)] leading-[0.95]">
            <span className="block">Mohammed</span>
            <span className="block gradient-text">Al-Nahari</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-[#a1a1aa] max-w-3xl mb-8 text-balance">
            IT Engineer & Full-Stack/Mobile Developer specializing in Next.js, Angular, Django, FastAPI, and Flutter. I build scalable, high-performance applications that solve real business problems.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <a href="#projects" className="magnetic-btn flex items-center gap-2">
              View My Work
              <ChevronRight size={18} />
            </a>
            <a href="#contact" className="outline-btn flex items-center gap-2">
              Hire Me
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 max-w-3xl">
            {techPills.map((pill, i) => (
              <motion.span
                key={pill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${pill.color} shadow-lg cursor-default`}
              >
                {pill.label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-[rgba(255,255,255,0.2)] flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2.5 bg-[#fafafa] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
