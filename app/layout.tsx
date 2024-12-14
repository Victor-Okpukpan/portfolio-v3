import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import AnimatedBackground from '@/components/animated-background'
import LoadingScreen from '@/components/LoadingScreen'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Victor Okpukpan - Solidity Smart Contract Developer | Frontend Engineer',
  description: 'Portfolio of Victor Okpukpan, a Solidity Smart Contract Developer and Frontend Engineer specializing in EVM-compatible blockchain development',
  keywords: 'Solidity, Smart Contracts, Blockchain Developer, Frontend Engineer, Web3, EVM, DApp Development, React, Next.js, Ethereum, Portfolio',
  author: 'Victor Okpukpan',
  openGraph: {
    title: 'Victor Okpukpan - Solidity Smart Contract Developer | Frontend Engineer',
    description: 'Portfolio of Victor Okpukpan, a Solidity Smart Contract Developer and Frontend Engineer specializing in EVM-compatible blockchain development',
    type: 'website',
    locale: 'en_US',
    url: 'https://victortheoracle.xyz',
    siteName: 'Victor Okpukpan Portfolio',
    images: [
      {
        url: '/pfp.jpg',
        width: 300,
        height: 300,
        alt: 'Victor Okpukpan',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victor Okpukpan - Solidity Smart Contract Developer | Frontend Engineer',
    description: 'Portfolio of Victor Okpukpan, a Solidity Smart Contract Developer and Frontend Engineer specializing in EVM-compatible blockchain development',
    images: ['/pfp.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LoadingScreen />
        <AnimatedBackground />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-background/80 text-foreground relative min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

