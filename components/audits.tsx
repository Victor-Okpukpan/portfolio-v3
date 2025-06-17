"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const audits = [
  {
    project: "RAAC",
    platform: "CodeHawks",
    type: "Smart Contract Security Audit",
    highFindings: 4,
    mediumFindings: 5,
    lowFindings: 3,
    ranking: "136th",
    description: "Real estate tokenization protocol for on-chain finance integration",
    technologies: ["Solidity", "Hardhat"],
    reportLink: "https://codehawks.cyfrin.io/c/2025-02-raac/results?lt=contest&page=1&sc=reward&sj=reward&t=report",
    platformLogo: "/platforms/codehawks.png",
    profileLink: "https://profiles.cyfrin.io/u/victortheoracle"
  },
  {
    project: "Symmio, Staking and Vesting",
    platform: "Sherlock",
    type: "Smart Contract Security Audit",
    highFindings: 1,
    mediumFindings: 0,
    lowFindings: 0,
    ranking: "11th",
    description: "Permissionless OTC derivatives protocol and clearing layer",
    technologies: ["Solidity", "Foundry"],
    reportLink: "https://audits.sherlock.xyz/contests/838/report",
    platformLogo: "/platforms/sherlock.png",
    profileLink: "https://audits.sherlock.xyz/watson/Victor_TheOracle"
  },
  {
    project: "Yieldoor",
    platform: "Sherlock",
    type: "Smart Contract Security Audit",
    highFindings: 1,
    mediumFindings: 1,
    lowFindings: 0,
    ranking: "15th",
    description: "Platform for leveraged yield farming strategies",
    technologies: ["Solidity", "Foundry"],
    reportLink: "https://audits.sherlock.xyz/contests/791/report",
    platformLogo: "/platforms/sherlock.png",
    profileLink: "https://audits.sherlock.xyz/watson/Victor_TheOracle"
  },
  {
    project: "Liquid Ron",
    platform: "Code4rena",
    type: "Smart Contract Security Audit",
    highFindings: 1,
    mediumFindings: 1,
    lowFindings: 0,
    ranking: "74th",
    description: "Ronin liquid staking protocol with automated reward compounding",
    technologies: ["Solidity", "Foundry"],
    reportLink: "https://code4rena.com/reports/2025-01-liquid-ron",
    platformLogo: "https://code4rena.com/images/c4-logo-icon.svg",
    profileLink: "https://code4rena.com/@victortheoracle"
  },
  {
    project: "Yeet",
    platform: "Immunefi",
    type: "Smart Contract Security Audit",
    highFindings: 0,
    mediumFindings: 0,
    lowFindings: 0,
    insights: 2,
    ranking: "40th",
    description: "Gamified DeFi protocol with interactive pool mechanics on Berachain",
    technologies: ["Solidity", "Foundry"],
    reportLink: "https://reports.immunefi.com/yeet",
    platformLogo: "/platforms/immunefi.png",
    profileLink: "https://immunefi.com/profile/Victor_TheOracle"
  }
]

const ITEMS_PER_PAGE = 4

export default function Audits() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(audits.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentAudits = audits.slice(startIndex, endIndex)

  return (
    <section id="audits" className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Security Audits
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentAudits.map((audit, index) => (
          <motion.div
            key={audit.project}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{audit.project}</CardTitle>
                    <CardDescription>{audit.type}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a
                      href={audit.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity flex space-x-2"
                    >
                      <Image
                        src={audit.platformLogo}
                        alt={audit.platform}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    <Badge variant="outline">{audit.platform}</Badge>
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="destructive">High: {audit.highFindings}</Badge>
                  <Badge variant="warning">Medium: {audit.mediumFindings}</Badge>
                  <Badge variant="secondary">Low: {audit.lowFindings}</Badge>
                  {audit.insights && (
                    <Badge variant="outline">Insights: {audit.insights}</Badge>
                  )}
                </div>
                <p className="mb-4">{audit.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {audit.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">Rank: {audit.ranking}</Badge>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={audit.reportLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      View Report <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-foreground/80">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </section>
  )
} 