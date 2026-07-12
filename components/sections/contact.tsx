'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const socials = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:hello@mohammed-alnahari.com',
      value: 'hello@mohammed-alnahari.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/mohammed-alnahari',
      value: 'linkedin.com/in/mohammed-alnahari',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/mohammed-alnahari',
      value: 'github.com/mohammed-alnahari',
      color: 'from-gray-600 to-gray-800',
    },
  ]

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title mb-6">
            Let&apos;s work<br />
            <span className="gradient-text">together</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto text-balance">
            I&apos;m always interested in hearing about new opportunities, exciting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for freelance & full-time
          </div>

          <a
            href="mailto:hello@mohammed-alnahari.com"
            className="magnetic-btn text-lg flex items-center gap-3"
          >
            <Send size={20} />
            hello@mohammed-alnahari.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card gradient-border rounded-2xl p-8 text-center group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${social.color} mb-6`}>
                <social.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
                {social.label}
              </h3>
              <p className="text-[#a1a1aa] text-sm mb-4 break-all">{social.value}</p>
              <div className="inline-flex items-center gap-1 text-sm text-[#3b82f6] font-medium group-hover:gap-2 transition-all">
                Connect
                <ArrowUpRight size={14} />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
