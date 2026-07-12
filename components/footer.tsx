import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.06)] bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-4">
              Mohammed Al-Nahari
            </h3>
            <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-xs">
              IT Engineer and Full-Stack/Mobile Developer crafting exceptional digital experiences.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#71717a] mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#a1a1aa] hover:text-[#fafafa] transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#71717a] mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@mohammed-alnahari.com" className="nav-link flex items-center gap-2">
                <Mail size={16} />
                <span>Email</span>
              </a>
              <a href="https://linkedin.com/in/mohammed-alnahari" target="_blank" rel="noopener noreferrer" className="nav-link flex items-center gap-2">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/mohammed-alnahari" target="_blank" rel="noopener noreferrer" className="nav-link flex items-center gap-2">
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[rgba(255,255,255,0.06)]">
          <p className="text-[#71717a] text-sm">
            &copy; {currentYear} Mohammed Al-Nahari. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full border border-[rgba(255,255,255,0.1)] hover:border-[#3b82f6] hover:bg-[rgba(59,130,246,0.1)] transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
