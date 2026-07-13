import { Suspense } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import DotNav from '@/components/dot-nav'
import { ShaderBackground } from '@/components/ui/shader-background'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Services from '@/components/sections/services'
import Projects from '@/components/sections/projects'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'
import Education from '@/components/sections/education'
import Certifications from '@/components/sections/certifications'
import Contact from '@/components/sections/contact'
import { locales, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0510]">
      <div className="w-16 h-16 border-4 border-[#ff5f6d]/30 border-t-[#ff5f6d] rounded-full animate-spin" />
    </div>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <main className="relative min-h-screen">
      <Suspense fallback={<LoadingFallback />}>
        <ShaderBackground />
      </Suspense>
      <Header dict={dict.nav} locale={locale} />
      <DotNav dict={dict.dotNav} />
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <Services dict={dict.services} />
      <Projects dict={dict.projects} />
      <Skills dict={dict.skills} />
      <Experience dict={dict.experience} />
      <Education dict={dict.education} />
      <Certifications dict={dict.certifications} />
      <Contact dict={dict.contact} />
      <Footer dict={dict.footer} navDict={dict.nav} />
    </main>
  )
}
