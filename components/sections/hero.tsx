'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Terminal } from 'lucide-react'
import { techPills } from '@/lib/data'
import MagneticButton from '@/components/ui/magnetic-button'
import PortraitFrame from '@/components/ui/portrait-frame'
import type { Dictionary } from '@/lib/i18n/en'

export default function Hero({ dict }: { dict: Dictionary['hero'] }) {
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

  const monogram = `${dict.firstName?.[0] ?? 'M'}${dict.lastName?.[0] ?? 'A'}`

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center lg:text-start">
          <motion.div variants={itemVariants} className="mb-6 flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-sm text-[#93a0b8]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
              </span>
              {dict.badge}
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 font-[family-name:var(--font-space-grotesk)] leading-[0.95]">
            <span className="block">{dict.firstName}</span>
            <span className="block gradient-text">{dict.lastName}</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-[#93a0b8] max-w-2xl mx-auto lg:mx-0 mb-8 text-balance">
            {dict.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
            <MagneticButton href="#projects">
              {dict.ctaPrimary}
              <ChevronRight size={18} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              <Terminal size={16} />
              {dict.ctaSecondary}
            </MagneticButton>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 max-w-3xl mx-auto lg:mx-0">
            {techPills.map((pill, i) => (
              <motion.span
                key={pill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -2 }}
                data-cursor-hover
                className={`px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${pill.color} shadow-lg cursor-default`}
              >
                {pill.label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="order-first lg:order-last">
          <PortraitFrame monogram={monogram} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-[rgba(255,255,255,0.2)] flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2.5 bg-[#eef2fb] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
