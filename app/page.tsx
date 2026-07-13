import { Suspense } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
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

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090B]">
      <div className="w-16 h-16 border-4 border-[#3b82f6]/30 border-t-[#3b82f6] rounded-full animate-spin" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Suspense fallback={<LoadingFallback />}>
        <ShaderBackground />
      </Suspense>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
