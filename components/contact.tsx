import { Twitter, GitlabIcon as GitHub, Linkedin, Mail, Shield, Code, FileCode } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const professionalLinks = [
  {
    name: "Code4rena",
    url: "https://code4rena.com/@victortheoracle",
    logo: "https://code4rena.com/images/c4-logo-icon.svg"
  },
  {
    name: "Sherlock",
    url: "https://audits.sherlock.xyz/watson/Victor_TheOracle",
    logo: "/platforms/sherlock.png"
  },
  {
    name: "Immunefi",
    url: "https://immunefi.com/profile/Victor_TheOracle",
    logo: "/platforms/immunefi.png"
  },
  {
    name: "CodeHawks",
    url: "https://profiles.cyfrin.io/u/victortheoracle",
    logo: "/platforms/codehawks.png"
  },
  {
    name: "Cantina",
    url: "https://cantina.xyz/u/victortheoracle",
    logo: "/platforms/cantina.png"
  }
]

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
      <p className="text-center mb-8 text-lg text-foreground/80">
        Looking to secure your smart contracts or build secure blockchain applications? I'm available for security audits, smart contract development, and consulting services.
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-12">
        <Button asChild variant="default" className="flex items-center">
          <a href="mailto:vokpukpan@gmail.com" className="flex items-center">
            <Shield className="mr-2 h-4 w-4" />
            Request Security Audit
          </a>
        </Button>
        <Button asChild variant="outline" className="flex items-center">
          <a href="mailto:vokpukpan@gmail.com" className="flex items-center">
            <Code className="mr-2 h-4 w-4" />
            Discuss Smart Contract Development
          </a>
        </Button>
        <Button asChild variant="outline" className="flex items-center">
          <a href="mailto:vokpukpan@gmail.com" className="flex items-center">
            <FileCode className="mr-2 h-4 w-4" />
            Collaborate on Blockchain Projects
          </a>
        </Button>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Professional Profiles</h3>
        <div className="flex justify-center items-center space-x-6">
          {professionalLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src={link.logo}
                alt={link.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <Button asChild variant="outline">
          <a href="https://twitter.com/victorokpukpan_" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Twitter className="mr-2 h-4 w-4" />
            Twitter
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="mailto:vokpukpan@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            Gmail
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="https://linkedin.com/in/victor-okpukpan" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
        </Button>
      </div>
    </section>
  )
}

