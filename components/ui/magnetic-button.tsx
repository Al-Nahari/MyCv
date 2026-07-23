'use client'

import { useRef, useState, type ReactNode, type MouseEvent as ReactMouseEvent } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({
  href,
  onClick,
  variant = 'primary',
  className = '',
  children,
  target,
  rel,
}: {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline'
  className?: string
  children: ReactNode
  target?: string
  rel?: string
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e: ReactMouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: x * 0.3, y: y * 0.4 })
  }

  const handleLeave = () => setPos({ x: 0, y: 0 })

  const base = variant === 'primary' ? 'magnetic-btn' : 'outline-btn'
  const Comp = motion.a as any

  const content = (
    <motion.span
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <Comp
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={onClick}
        data-cursor-hover
        className={`${base} ${className}`}
      >
        {content}
      </Comp>
    )
  }

  return (
    <motion.button
      ref={ref as any}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      data-cursor-hover
      className={`${base} ${className}`}
    >
      {content}
    </motion.button>
  )
}
