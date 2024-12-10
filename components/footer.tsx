import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Victor Okpukpan. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://github.com/Victor-Okpukpan" className="text-foreground/60 hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/victor-okpukpan" className="text-foreground/60 hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href="https://x.com/victorokpukpan_" className="text-foreground/60 hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="https://medium.com/@vokpukpan" className="text-foreground/60 hover:text-foreground transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}