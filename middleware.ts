import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale } from '@/lib/i18n/config'

function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferred = acceptLanguage.split(',')[0]?.split('-')[0]?.toLowerCase()
    if (preferred && (locales as readonly string[]).includes(preferred)) {
      return preferred
    }
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (pathnameHasLocale) return NextResponse.next()

  const locale = getPreferredLocale(request)
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  newUrl.search = request.nextUrl.search
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths, static files, and API routes
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|og-image.png|.*\\..*).*)',
  ],
}
