import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    title: 'Frontend Developer',
    period: '2022 - Present',
    description: 'Developing responsive and interactive web applications using modern frontend technologies. Specializing in React, Next.js, and integrating web3 functionality into traditional web apps.',
  },
  {
    title: 'Freelance Smart Contract Developer',
    period: '2024 - Present',
    description: 'Developing secure and efficient smart contracts for various blockchain projects. Specializing in DeFi protocols, NFT platforms, and custom blockchain solutions.',
  },
  {
    title: 'Cyfrin Updraft Ambassador',
    period: '2024 - Present',
    description: 'Contributing to blockchain education and community growth. Sharing knowledge, mentoring aspiring developers, and promoting best practices in smart contract development.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>{exp.period}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Key Strengths</h3>
        <ul className="list-disc list-inside space-y-2 text-foreground/80">
          <li>Solo development approach with strong problem-solving skills</li>
          <li>In-depth understanding of EVM-compatible blockchain ecosystems</li>
          <li>Expertise in smart contract optimization and gas efficiency</li>
          <li>Strong focus on blockchain security best practices</li>
        </ul>
      </div>
    </section>
  )
}

