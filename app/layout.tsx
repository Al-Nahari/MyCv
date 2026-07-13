import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'Mohammed Al-Nahari | Full-Stack & Mobile Developer | IT Engineer',
  description: 'Mohammed Al-Nahari is an IT Engineer and Full-Stack Developer specializing in Next.js, Angular, Django, FastAPI, Flutter, and modern web technologies. Building scalable, high-performance applications.',
  keywords: ['Mohammed Al-Nahari', 'Full-Stack Developer', 'Mobile Developer', 'IT Engineer', 'Next.js', 'Angular', 'Django', 'FastAPI', 'Flutter', 'TypeScript', 'PostgreSQL', 'Docker', 'Saudi Arabia', 'Riyadh', 'Software Engineer', 'Web Developer', 'Mobile App Developer'],
  authors: [{ name: 'Mohammed Al-Nahari' }],
  openGraph: {
    title: 'Mohammed Al-Nahari | Full-Stack & Mobile Developer',
    description: 'IT Engineer specializing in Next.js, Angular, Django, FastAPI, Flutter, and modern web technologies. Building scalable, high-performance applications.',
    url: 'https://mohammed-alnahari.com',
    siteName: 'Mohammed Al-Nahari Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mohammed Al-Nahari - Full-Stack & Mobile Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Al-Nahari | Full-Stack & Mobile Developer',
    description: 'IT Engineer specializing in Next.js, Angular, Django, FastAPI, Flutter, and modern web technologies.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mohammed-alnahari.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
