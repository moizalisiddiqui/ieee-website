import type { Metadata } from 'next'
import { TechNovaNav } from '@/components/technova/TechNovaNav'
import { TechNovaFooter } from '@/components/technova/TechNovaFooter'

export const metadata: Metadata = {
  title: 'TechNova 2026 | IEEE Student Branch',
  description: 'TechNova 2026 — Inter-University Mega Hackathon. 12 modules, 5 clusters, PKR 500K+ in prizes.',
}

export default function TechNovaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div data-theme="technova">
      <TechNovaNav />
      <main id="technova-main" tabIndex={-1}>
        {children}
      </main>
      <TechNovaFooter />
    </div>
  )
}
