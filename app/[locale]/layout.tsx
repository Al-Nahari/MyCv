import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '../globals.css'
import { locales, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: [
      'Mohammed Al-Nahari', 'Full-Stack Developer', 'Mobile Developer', 'IT Engineer',
      'Next.js', 'Angular', 'Django', 'FastAPI', 'Flutter', 'TypeScript', 'PostgreSQL',
      'Docker', 'Saudi Arabia', 'Riyadh', 'Software Engineer', 'Web Developer', 'Mobile App Developer',
    ],
    authors: [{ name: 'Mohammed Al-Nahari' }],
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://mohammed-alnahari.com/${locale}`,
      siteName: 'Mohammed Al-Nahari Portfolio',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: dict.meta.title }],
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
      canonical: `https://mohammed-alnahari.com/${locale}`,
      languages: {
        en: 'https://mohammed-alnahari.com/en',
        ar: 'https://mohammed-alnahari.com/ar',
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
