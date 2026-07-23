'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ monogram }: { monogram: string }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [skip, setSkip] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem('intro-played')) {
      setSkip(true)
      return
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      sessionStorage.setItem('intro-played', '1')
      setSkip(true)
      return
    }

    let raf: number
    const start = performance.now()
    const DURATION = 1400

    const tick = (now: number) => {
      const pct = Math.min(1, (now - start) / DURATION)
      setProgress(Math.floor(pct * 100))
      if (pct < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        sessionStorage.setItem('intro-played', '1')
        setTimeout(() => setDone(true), 350)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  if (skip) return null

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#05070d]"
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="monogram-ring w-20 h-20 mb-8"
          >
            <span className="text-2xl font-extrabold gradient-text font-[family-name:var(--font-space-grotesk)]">
              {monogram}
            </span>
          </motion.div>

          <div className="w-48 h-px bg-[rgba(255,255,255,0.08)] overflow-hidden rounded-full">
            <motion.div
              className="h-full"
              style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #3e7bfa, #22d3ee)' }}
            />
          </div>
          <span className="mt-3 text-xs tracking-[0.3em] text-[#5b6478] font-mono">
            {String(progress).padStart(3, '0')}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
