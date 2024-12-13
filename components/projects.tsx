"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

const projects = [
  {
    name: 'DeFi Yield Optimizer',
    description: 'Automated yield farming protocol for maximizing returns across multiple DeFi platforms.',
    technologies: ['Solidity', 'Foundry', 'Ethereum', 'Aave', 'Compound'],
    github: 'https://github.com/soliditydev/defi-yield-optimizer',
    contractAddress: '0x1234...5678',
    role: 'Lead Developer',
    contributions: 'Designed and implemented smart contract architecture, integrated with multiple DeFi protocols, and optimized gas usage.',
    challenges: 'Overcame complex integration challenges and implemented robust security measures to protect user funds.',
    type: 'Smart Contracts'
  },
  {
    name: 'NFT Marketplace',
    description: 'Decentralized marketplace for trading unique digital assets with royalty support.',
    technologies: ['Solidity', 'Foundry', 'Polygon', 'IPFS'],
    github: 'https://github.com/soliditydev/nft-marketplace',
    contractAddress: '0xabcd...efgh',
    role: 'Solo Developer',
    contributions: 'Developed smart contracts for minting, trading, and managing NFTs, implemented royalty system, and created an efficient on-chain orderbook.',
    challenges: 'Optimized storage usage and implemented a novel batching system for reduced gas costs during high-volume trading periods.',
    type: 'Smart Contracts'
  },
  {
    name: 'Responsive Portfolio Website',
    description: 'Personal portfolio website showcasing projects and skills.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/victortheoracle/portfolio',
    liveDemo: 'https://victortheoracle.com',
    role: 'Frontend Developer',
    contributions: 'Designed and developed a responsive, accessible, and performant portfolio website.',
    challenges: 'Implemented smooth animations and transitions while maintaining optimal performance across devices.',
    type: 'Frontend'
  },
  {
    name: 'Blockchain Explorer',
    description: 'Web application for exploring blockchain transactions and addresses.',
    technologies: ['React', 'TypeScript', 'Web3.js', 'Chart.js'],
    github: 'https://github.com/victortheoracle/blockchain-explorer',
    liveDemo: 'https://explorer.victortheoracle.com',
    role: 'Full Stack Developer',
    contributions: 'Developed frontend and integrated with multiple blockchain APIs for real-time data fetching.',
    challenges: 'Optimized data loading and caching for improved performance with large datasets.',
    type: 'Frontend'
  },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.type === filter)

  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.div 
        className="flex justify-center space-x-2 mb-6 overflow-x-auto pb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {['All', 'Frontend', 'Smart Contracts'].map((type) => (
          <Button
            key={type}
            variant={filter === type ? 'default' : 'outline'}
            onClick={() => setFilter(type)}
            className="whitespace-nowrap"
          >
            {type}
          </Button>
        ))}
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <p className="text-sm text-foreground/60 mb-2">Role: {project.role}</p>
                {project.contractAddress && (
                  <p className="text-sm text-foreground/60 mb-2">Contract: {project.contractAddress}</p>
                )}
                {project.liveDemo && (
                  <p className="text-sm text-foreground/60 mb-2">
                    Demo: <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{project.liveDemo}</a>
                  </p>
                )}
              </CardContent>
              <CardFooter className="flex justify-between mt-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  GitHub
                </a>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Learn More</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{project.name}</DialogTitle>
                      <DialogDescription>{project.description}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Contributions:</h4>
                      <p className="text-foreground/60">{project.contributions}</p>
                      <h4 className="font-semibold mt-4 mb-2">Technical Challenges:</h4>
                      <p className="text-foreground/60">{project.challenges}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

