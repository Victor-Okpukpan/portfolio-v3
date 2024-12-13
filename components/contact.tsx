import { Twitter, GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
      <p className="text-center mb-8 text-lg text-foreground/80">
        Feel free to reach out to me on any of these platforms. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>
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

