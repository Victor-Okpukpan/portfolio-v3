"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    name: "PassAR",
    description:
      "Decentralized event management platform built on Arweave that enables trustless event creation, ticket sales, and attendance verification.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Arweave",
      "AO",
      "Tailwind CSS",
      "ArConnect",
    ],
    github: "https://github.com/Victor-Okpukpan/PassAR",
    liveDemo: "https://passar_arlink.arweave.net",
    role: "Frontend Developer",
    contributions:
      "Built the frontend for the full-stack application including smart contract integration with AO, event creation flow, and ticket management system.",
    challenges:
      "Implemented complex state management for decentralized ticket verification while maintaining a seamless user experience.",
    type: "Frontend",
    isPrivate: false,
  },
  {
    name: "Zend",
    description:
      "A platform enabling users to send and claim Base USDC through email links, featuring Coinbase Smart Wallet, Coinbase Onramp integration for seamless crypto purchases, and Peanut SDK for email-based crypto transfer.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Wagmi",
      "Base",
      "Coinbase Onramp",
      "Peanut SDK",
    ],
    github: "https://github.com/Victor-Okpukpan/zendx",
    liveDemo: "https://zend.vercel.app",
    role: "Frontend Developer",
    contributions:
      "Developed the frontend interface with email-based crypto transfer system using Peanut SDK and integrated Coinbase Onramp for fiat-to-crypto conversion.",
    challenges:
      "Implemented secure email link generation and handling, while ensuring a smooth onboarding experience for users new to crypto.",
    type: "Frontend",
    isPrivate: false,
  },
  {
    name: "Viraaly",
    description:
      "A website showcasing a design and writing agency in web3, specializing in creating captivating narratives, visual identities, and brand experiences tailored for decentralized projects.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Victor-Okpukpan/viraaly",
    liveDemo: "https://viraaly.xyz",
    role: "Frontend Developer",
    contributions:
      "Developed the frontend interface, highlighting agency services, and designed a seamless user experience to communicate Viraaly's value in the web3 space.",
    challenges:
      "Crafted a visually appealing yet functional design that balances storytelling with intuitive navigation, ensuring a smooth experience for users.",
    type: "Frontend",
    isPrivate: true,
  },
  {
    name: "Viraaly Waitlist",
    description:
      "A waitlist platform for Viraaly’s meme services, enabling users to secure priority access to bespoke meme creations designed to amplify brand visibility in the web3 space.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/Victor-Okpukpan/viraaly-waitlist",
    liveDemo: "https://waitlist.viraaly.xyz",
    role: "Frontend Developer",
    contributions:
      "Developed the frontend interface, enabling users to join the waitlist seamlessly, and integrated Supabase for real-time database management.",
    challenges:
      "Designed an engaging user experience that conveys Viraaly's unique value proposition and simplifies the sign-up process.",
    type: "Frontend",
    isPrivate: true,
  },
  {
    name: "RocketPup Landing Page",
    description:
      "Interactive landing page for RocketPup - the first memecoin destined for Mars! Features space-themed UI, and token statistics.",
    technologies: ["Next.js", "Typescript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Victor-Okpukpan/RocketPup",
    liveDemo: "https://rocket-pup-zeta.vercel.app",
    role: "Frontend Developer",
    contributions:
      "Built an engaging, space-themed landing page with interactive animations and token information display",
    challenges:
      "Created simple animations while maintaining fast load times and implementing responsive design for optimal mobile experience.",
    type: "Frontend",
    isPrivate: false,
  },
  {
    name: "Travllr",
    description:
      "Travel-to-earn platform enabling users to earn rewards by visiting locations and completing challenges created by other users.",
    technologies: ["Solidity", "Foundry", "Sei Network"],
    github: "https://github.com/Victor-Okpukpan/travllr-contract",
    contractAddress: "0x724344ba0dd7cfa90c87d83fa5c4f0c6a0bb313f",
    role: "Smart Contract Developer",
    contributions:
      "Developed smart contracts for location creation, check-in completion verification, and reward distribution system using Solidity.",
    challenges:
      "Implemented efficient storage patterns for location data and designed a fair reward distribution mechanism while maintaining decentralization.",
    type: "Smart Contracts",
    isPrivate: false,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.type === filter);

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
        {["All", "Frontend", "Smart Contracts"].map((type) => (
          <Button
            key={type}
            variant={filter === type ? "default" : "outline"}
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
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-foreground/60 mb-2">
                  Role: {project.role}
                </p>
                {project.contractAddress && (
                  <p className="text-sm text-foreground/60 mb-2">
                    Contract: {project.contractAddress}
                  </p>
                )}
                {project.liveDemo && (
                  <p className="text-sm text-foreground/60 mb-2">
                    Demo:{" "}
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {project.liveDemo}
                    </a>
                  </p>
                )}
              </CardContent>
              <CardFooter className="flex justify-between mt-auto">
                {project.isPrivate === true ? (
                  <>
                    <p className="text-primary">Private Repo</p>
                  </>
                ) : (
                  <>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GitHub
                    </a>
                  </>
                )}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Learn More</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{project.name}</DialogTitle>
                      <DialogDescription>
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Contributions:</h4>
                      <p className="text-foreground/60">
                        {project.contributions}
                      </p>
                      <h4 className="font-semibold mt-4 mb-2">
                        Technical Challenges:
                      </h4>
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
  );
}
