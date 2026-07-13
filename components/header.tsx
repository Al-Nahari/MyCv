'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './language-switcher'
import type { Dictionary } from '@/lib/i18n/en'
import type { Locale } from '@/lib/i18n/config'

export default function Header({ dict, locale }: { dict: Dictionary['nav']; locale: Locale }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerBg = useTransform(scrollY, [0, 100], ['rgba(10,5,16,0)', 'rgba(10,5,16,0.85)'])
  const headerBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(20px)'])

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
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: headerBg, backdropFilter: headerBlur }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="text-xl font-extrabold font-[family-name:var(--font-space-grotesk)] tracking-tight">
          <span className="gradient-text">MAN</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher locale={locale} compact />
          <a href="#contact" className="magnetic-btn text-sm py-2 px-6">
            {dict.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher locale={locale} compact />
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 text-[#fafafa]"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden glass-card border-t border-[rgba(255,255,255,0.08)] mx-4 mb-4 rounded-2xl p-6"
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
            <a href="#contact" className="magnetic-btn text-sm mt-2 text-center" onClick={() => setIsMobileOpen(false)}>
              {dict.cta}
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
