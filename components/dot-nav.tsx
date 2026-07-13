'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SECTION_IDS } from '@/lib/data'
import type { Dictionary } from '@/lib/i18n/en'

export default function DotNav({ dict }: { dict: Dictionary['dotNav'] }) {
  const [active, setActive] = useState<string>('hero')
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-1/2 end-4 md:end-6 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-4"
    >
      {SECTION_IDS.map((id) => {
        const isActive = active === id
        return (
          <div
            key={id}
            className="relative flex items-center"
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence>
              {hovered === id && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute end-6 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold glass-card text-[#fafafa] pointer-events-none"
                >
                  {dict[id]}
                </motion.span>
              )}
            </AnimatePresence>
            <button
              type="button"
              onClick={() => scrollTo(id)}
              aria-label={dict[id]}
              aria-current={isActive ? 'true' : undefined}
              className="group relative flex items-center justify-center w-4 h-4"
            >
              <span
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-3 h-3 bg-gradient-to-r from-[#ff5f6d] via-[#a855f7] to-[#ff8a00] shadow-[0_0_12px_rgba(255,95,109,0.7)]'
                    : 'w-2 h-2 bg-[rgba(255,255,255,0.25)] group-hover:bg-[rgba(255,255,255,0.5)]'
                }`}
              />
            </button>
          </div>
        )
      })}
    </nav>
  )
}
