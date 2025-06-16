"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    title: 'Blockchain Security Researcher',
    period: '2024 - Present',
    description: 'Conducting comprehensive security assessments of smart contracts and blockchain protocols. Specializing in identifying vulnerabilities, providing remediation strategies, and contributing to the security of DeFi protocols.',
  },
  {
    title: 'Smart Contract Developer',
    period: '2022 - Present',
    description: 'Developing secure and gas-efficient smart contracts for various blockchain platforms. Implementing best practices in smart contract development and conducting internal security reviews.',
  },
  {
    title: 'Frontend Developer',
    period: '2022 - Present',
    description: 'Building responsive and secure web3 applications with a focus on user experience and security. Integrating blockchain functionality into traditional web applications.',
  },
  {
    title: 'Cyfrin Updraft Ambassador',
    period: '2024 - Present',
    description: 'Contributing to blockchain security education and community growth. Sharing knowledge about smart contract security, mentoring aspiring developers, and promoting security best practices.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index}>
            <Card>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>{exp.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Key Strengths</h3>
        <ul className="list-disc list-inside space-y-2 text-foreground/80">
          <li>Expertise in identifying and mitigating smart contract vulnerabilities</li>
          <li>Strong background in both development and security research</li>
          <li>Proven track record in securing DeFi protocols and protecting user funds</li>
          <li>Deep understanding of EVM-compatible blockchain ecosystems</li>
          <li>Proficient in using Foundry for smart contract development and testing</li>
        </ul>
      </div>
    </section>
  )
}

