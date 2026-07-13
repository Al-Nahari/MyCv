'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function ShaderBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -150])
  const y3 = useTransform(scrollY, [0, 1000], [0, 100])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        className="absolute -top-[30%] -left-[10%] w-[60vw] h-[60vw] rounded-full"
        style={{
          y: y1,
          background: 'radial-gradient(circle, rgba(255,95,109,0.22) 0%, rgba(168,85,247,0.1) 40%, transparent 70%)',
          filter: 'blur(80px)',
          x: mousePos.x * 60 - 30,
        }}
      />
      <motion.div
        className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] rounded-full"
        style={{
          y: y2,
          background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(255,138,0,0.08) 40%, transparent 70%)',
          filter: 'blur(80px)',
          x: -mousePos.x * 40 + 20,
        }}
      />
      <motion.div
        className="absolute -bottom-[20%] left-[30%] w-[40vw] h-[40vw] rounded-full"
        style={{
          y: y3,
          background: 'radial-gradient(circle, rgba(255,138,0,0.15) 0%, rgba(255,95,109,0.06) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0510] opacity-80" />
    </div>
  )
}
