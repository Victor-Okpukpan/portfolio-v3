import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AnimatedBackground from "@/components/animated-background";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Victor Okpukpan | Solidity Developer & Frontend Engineer",
  description:
    "Victor Okpukpan, a Solidity Smart Contract Developer, security researcher and Frontend Engineer specializing in EVM-compatible blockchain development.",
  keywords: [
    "Victor Okpukpan",
    "Victortheoracle",
    "Victor the oracle",
    "Solidity Developer",
    "Smart Contract developer",
    "Blockchain Developer",
    "Frontend Engineer",
    "Frontend developer",
    "Web3 developer",
    "EVM developer",
    "DApp Developer",
    "React developer",
    "Next.js Developer",
    "Security researcher",
    "Ethereum developer",
    "Portfolio",
  ],
  author: "Victor Okpukpan",
  metadataBase: new URL("https://victortheoracle.xyz"),
  openGraph: {
    title: "Victor Okpukpan | Solidity Developer & Frontend Engineer",
    description:
      "Victor Okpukpan, a Solidity Smart Contract Developer, security researcher and Frontend Engineer specializing in EVM-compatible blockchain development.",
    type: "website",
    locale: "en_US",
    url: "https://victortheoracle.xyz",
    siteName: "Victor Okpukpan Portfolio",
    images: [
      {
        url: "/pfp.jpg",
        width: 300,
        height: 300,
        alt: "Victor Okpukpan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Okpukpan | Solidity Developer & Frontend Engineer",
    description:
      "Victor Okpukpan, a Solidity Smart Contract Developer, security researcher and Frontend Engineer specializing in EVM-compatible blockchain development.",
    images: ["/pfp.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
  );
}
