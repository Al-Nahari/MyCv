'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './language-switcher'
import MagneticButton from './ui/magnetic-button'
import type { Dictionary } from '@/lib/i18n/en'
import type { Locale } from '@/lib/i18n/config'

export default function Header({ dict, locale }: { dict: Dictionary['nav']; locale: Locale }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setScrolled(latest > 24)
    if (latest > previous && latest > 160) {
      setHidden(true)
      setIsMobileOpen(false)
    } else {
      setHidden(false)
    }
  })

  const navLinks = [
    { href: '#about', label: dict.about },
    { href: '#services', label: dict.services },
    { href: '#projects', label: dict.projects },
    { href: '#skills', label: dict.skills },
    { href: '#experience', label: dict.experience },
    { href: '#education', label: dict.education },
    { href: '#contact', label: dict.contact },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
    >
      <nav
        className={`w-full max-w-6xl rounded-2xl transition-all duration-500 ${
          scrolled ? 'glass-nav shadow-[0_8px_40px_rgba(0,0,0,0.35)]' : 'bg-transparent'
        }`}
      >
        <div className="px-5 md:px-8 h-16 flex items-center justify-between">
          <a
            href="#hero"
            data-cursor-hover
            className="monogram-ring w-9 h-9 text-sm font-extrabold font-[family-name:var(--font-space-grotesk)] gradient-text"
          >
            MA
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link" data-cursor-hover>
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher locale={locale} compact />
            <MagneticButton href="#contact" className="!py-2 !px-5 text-sm">
              {dict.cta}
            </MagneticButton>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher locale={locale} compact />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-[#eef2fb]"
              aria-label="Toggle menu"
              data-cursor-hover
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden border-t border-[rgba(255,255,255,0.08)] px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-base"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <MagneticButton href="#contact" className="mt-2 justify-center" onClick={() => setIsMobileOpen(false)}>
                {dict.cta}
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
