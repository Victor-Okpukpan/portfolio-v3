"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const skills = [
  {
    category: 'Blockchain',
    items: [
      { name: 'Solidity', description: 'Develop smart contracts for DeFi protocols, NFT platforms, and custom blockchain solutions' },
      { name: 'Foundry', description: 'Build, test, and deploy smart contracts with advanced testing and gas optimization techniques' },
      { name: 'EVM Chains', description: 'Create cross-chain compatible dApps and implement bridging solutions' },
      { name: 'Slither', description: 'Perform static analysis to identify vulnerabilities and optimize contract security' },
      { name: 'Aderyn', description: 'Conduct in-depth smart contract audits and generate comprehensive security reports' },
      { name: 'Smart Contract Security', description: 'Implement best practices for secure smart contract development and auditing' },
      { name: 'Gas Optimization', description: 'Refine smart contract code to minimize gas costs and improve efficiency' },
    ]
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', description: 'Build interactive and responsive user interfaces for web3 applications' },
      { name: 'Next.js', description: 'Develop server-side rendered and statically generated web applications with optimal performance' },
      { name: 'TypeScript', description: 'Enhance code quality and maintainability with static typing' },
      { name: 'Tailwind CSS', description: 'Create custom, responsive designs with utility-first CSS framework' },
      { name: 'Wagmi / Web3.js / Ethers.js', description: 'Integrate blockchain functionality into frontend applications' },
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      {skills.map((category, categoryIndex) => (
        <motion.div 
          key={category.category} 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-primary">{category.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.items.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium text-primary">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  )
}

