'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/en'
import { socialMeta } from '@/lib/data'

export default function Footer({ dict, navDict }: { dict: Dictionary['footer']; navDict: Dictionary['nav'] }) {
  const currentYear = new Date().getFullYear()

  const navItems = [
    { href: '#about', label: navDict.about },
    { href: '#services', label: navDict.services },
    { href: '#projects', label: navDict.projects },
    { href: '#skills', label: navDict.skills },
    { href: '#experience', label: navDict.experience },
    { href: '#education', label: navDict.education },
    { href: '#contact', label: navDict.contact },
  ]

  const connectItems = [
    { icon: Mail, label: 'Email', href: socialMeta[0].href },
    { icon: Linkedin, label: 'LinkedIn', href: socialMeta[1].href },
    { icon: Github, label: 'GitHub', href: socialMeta[2].href },
  ]

  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.06)] bg-[#0a0510]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-extrabold font-[family-name:var(--font-space-grotesk)] gradient-text mb-4">
              Mohammed Al-Nahari
            </h3>
            <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-xs">
              {dict.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#71717a] mb-4">
              {dict.navTitle}
            </h4>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[#a1a1aa] hover:text-[#fafafa] transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#71717a] mb-4">
              {dict.connectTitle}
            </h4>
            <div className="flex flex-col gap-3">
              {connectItems.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="nav-link flex items-center gap-2">
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[rgba(255,255,255,0.06)]">
          <p className="text-[#71717a] text-sm">
            &copy; {currentYear} Mohammed Al-Nahari. {dict.rights}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full border border-[rgba(255,255,255,0.1)] hover:border-[#ff5f6d] hover:bg-[rgba(255,95,109,0.1)] transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
