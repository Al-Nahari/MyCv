'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PortraitFrame({
  src,
  monogram,
}: {
  src?: string
  monogram: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
      className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto"
    >
      {/* ambient glow */}
      <div
        className="absolute -inset-10 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(62,123,250,0.35) 0%, rgba(139,92,246,0.2) 45%, transparent 70%)',
        }}
      />

      {/* slow rotating dashed ring */}
      <motion.div
        className="absolute -inset-6 rounded-full border border-dashed border-[rgba(94,148,255,0.35)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      {/* counter-rotating gradient ring with orbiting node */}
      <motion.div
        className="absolute -inset-2 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #3e7bfa, #8b5cf6, #22d3ee, #3e7bfa)',
          padding: 2,
          WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))',
          mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))',
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#22d3ee] shadow-[0_0_16px_4px_rgba(34,211,238,0.7)]" />
      </motion.div>

      {/* floating particles around the frame */}
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#5e94ff]"
          style={{
            top: `${15 + i * 20}%`,
            left: i % 2 === 0 ? '-4%' : '102%',
          }}
          animate={{ y: [0, -14, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
        />
      ))}

      {/* glass frame + photo / monogram fallback */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-3 rounded-full overflow-hidden border border-[rgba(255,255,255,0.12)] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
      >
        {src ? (
          <Image src={src} alt="Portrait" fill sizes="384px" className="object-cover" priority />
        ) : (
          <div className="monogram-ring w-full h-full">
            <span className="text-6xl sm:text-7xl font-extrabold gradient-text font-[family-name:var(--font-space-grotesk)]">
              {monogram}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/40 via-transparent to-white/10 pointer-events-none" />
      </motion.div>
    </motion.div>
  )
}
