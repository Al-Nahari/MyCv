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
  title: 'Mohammed Al-Nahari | Full-Stack & Mobile Developer',
  description: 'Portfolio of Mohammed Al-Nahari — IT Engineer specializing in Next.js, React Native, and full-stack web development.',
  keywords: ['Mohammed Al-Nahari', 'Full-Stack Developer', 'Mobile Developer', 'Next.js', 'React Native', 'IT Engineer'],
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
