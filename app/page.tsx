import Contact from '@/components/contact'
import Experience from '@/components/experience'
import Hackathons from '@/components/hackathons'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <div className="space-y-24 py-24">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Hackathons />
      <Contact />
    </div>
  )
}

