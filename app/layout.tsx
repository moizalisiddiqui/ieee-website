import type { Metadata } from 'next'
import '../styles/globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/PageTransition'
import { Preloader } from '@/components/Preloader'
import { CosmicBackground } from '@/components/CosmicBackground' // Import the new component

export const metadata: Metadata = {
  title: 'IEEE Student Branch | NED University',
  description: 'IEEE Student Branch — connecting the next generation of engineers and technologists through events, competitions, and community.',
  keywords: 'IEEE, student branch, engineering, hackathon, TechNova, NED University',
  openGraph: {
    title: 'IEEE Student Branch',
    description: 'Where engineers meet the future.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="ieee">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#050a1f" />
      </head>
      {/* Remove 'noise' from body if it has a white/solid background, 
          move it to a wrapper if needed */}
      <body className="antialiased selection:bg-blue-500/30">
        <Preloader />
        
        {/* The persistent background layer */}
        <CosmicBackground />

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <PageTransition>
            <main id="main-content" tabIndex={-1} className="flex-grow">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  )
}