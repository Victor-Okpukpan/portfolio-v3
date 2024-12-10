import Experience from '@/components/experience'
import Hero from '@/components/hero'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <div className="space-y-24 py-24">
      <Hero />
      <Skills />
      <Experience />
    </div>
  )
}

