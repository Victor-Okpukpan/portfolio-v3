import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const hackathons = [
  {
    name: 'Decentralized Intelligence S2',
    date: 'March 2024',
    project: 'QuillChain',
    description: 'Developed an innovative AI writer that combines the power of OpenAI for content generation with blockchain technology for subscription management.',
    award: '3rd Place WeaveDB Track',
    technologies: ['Solidity', 'Arbitrum', 'WeaveDB', 'NextJS'],
    impact: 'Demonstrated the potential of combining AI and blockchain technologies to create more transparent and accessible AI-Powered applications.',
  },
  {
    name: 'WeaveDB Uniathon',
    date: 'August 2024',
    project: 'Decentralized School Voting Platform',
    description: 'A decentralized voting platform for school Student Union Government (SUG) elections using smart contracts deployed on Arbitrum and leveraging WeaveDB for user profiles',
    award: 'Best Privacy Solution',
    technologies: ['Solidity', 'Arbitrum', 'WeaveDb', 'NextJS'],
    impact: 'Ensured transparent, secure, and private voting processes for school elections, promoting democratic values and trust among students.',
  },
]

export default function Hackathons() {
  return (
    <section id="hackathons" className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Hackathon Wins</h2>
      <div className="space-y-6">
        {hackathons.map((hackathon, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{hackathon.name}</CardTitle>
              <CardDescription>{hackathon.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-2">{hackathon.project}</h4>
              <p className="mb-4">{hackathon.description}</p>
              <div className="flex items-center mb-4">
                <span className="font-semibold mr-2">Award:</span>
                <Badge variant="secondary">{hackathon.award}</Badge>
              </div>
              <div className="mb-4">
                <span className="font-semibold">Technologies used:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {hackathon.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
              <p className="text-sm text-foreground/80">{hackathon.impact}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}