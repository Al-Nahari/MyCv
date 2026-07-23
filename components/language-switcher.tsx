'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n/config'

function pathWithoutLocale(pathname: string) {
  const segments = pathname.split('/')
  segments.splice(1, 1)
  const rest = segments.join('/')
  return rest === '' ? '/' : rest
}

export default function LanguageSwitcher({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const pathname = usePathname()
  const rest = pathWithoutLocale(pathname)

  return (
    <div className={`inline-flex items-center rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.03)] p-1 ${compact ? 'text-xs' : 'text-sm'}`}>
      {locales.map((l) => {
        const isActive = l === locale
        const href = `/${l}${rest}`
        return (
          <Link
            key={l}
            href={href}
            aria-current={isActive ? 'true' : undefined}
            className={`px-3 py-1.5 rounded-full font-semibold transition-all duration-300 ${
              isActive
                ? 'bg-gradient-to-r from-[#3e7bfa] via-[#8b5cf6] to-[#22d3ee] text-white'
                : 'text-[#93a0b8] hover:text-[#eef2fb]'
            }`}
          >
            {l === 'en' ? 'EN' : 'AR'}
          </Link>
        )
      })}
    </div>
  )
}
