import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen md:min-h-[300px] flex items-center">
      <div className="container mx-auto pt-24 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/pfp.jpg"
              alt="Victor Okpukpan"
              width={300}
              height={300}
              className="rounded-full mx-auto border-4 border-primary/20"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Victor Okpukpan
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-foreground/80">
              Solidity Smart Contract Developer & Frontend Engineer
            </h2>
            <p className="text-lg mb-8 text-foreground/60">
              Known as Victor_The Oracle in the web3 space, I specialize in EVM-compatible blockchain development and frontend engineering. With expertise in creating secure smart contracts and building intuitive user interfaces, I bring blockchain ideas to life with a focus on best practices and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <Button asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" download>
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

