'use client'

import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const ParticleField = dynamic(() => import('./particle-field'), { ssr: false })

export function SceneBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const [show3D, setShow3D] = useState(false)

  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -150])
  const y3 = useTransform(scrollY, [0, 1000], [0, 100])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setShow3D(mq.matches && !reduced)

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
      {show3D && <ParticleField />}

      <motion.div
        className="absolute -top-[30%] -left-[10%] w-[60vw] h-[60vw] rounded-full"
        style={{
          y: y1,
          background: 'radial-gradient(circle, rgba(62,123,250,0.22) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)',
          filter: 'blur(80px)',
          x: mousePos.x * 60 - 30,
        }}
      />
      <motion.div
        className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] rounded-full"
        style={{
          y: y2,
          background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(34,211,238,0.08) 40%, transparent 70%)',
          filter: 'blur(80px)',
          x: -mousePos.x * 40 + 20,
        }}
      />
      <motion.div
        className="absolute -bottom-[20%] left-[30%] w-[40vw] h-[40vw] rounded-full"
        style={{
          y: y3,
          background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(62,123,250,0.06) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute inset-0 noise-layer opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05070d] opacity-80" />
    </div>
  )
}
