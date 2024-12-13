"use client"
import { Progress } from '@/components/ui/progress'

const skills = [
  { name: 'Solidity', level: 75, category: 'Blockchain' },
  { name: 'Foundry', level: 70, category: 'Blockchain' },
  { name: 'Smart Contract Security', level: 70, category: 'Blockchain' },
  { name: 'Gas Optimization', level: 85, category: 'Blockchain' },
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'TypeScript', level: 80, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'Frontend' },
  { name: 'Wagmi / Ethers.js', level: 80, category: 'Frontend' },
]

export default function Skills() {
  const categories = Array.from(new Set(skills.map(skill => skill.category)))

  return (
    <section id="skills" className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills
              .filter(skill => skill.category === category)
              .map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium">{skill.name}</span>
                    <span className="text-sm text-foreground/60">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2"
                  />
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  )
}

