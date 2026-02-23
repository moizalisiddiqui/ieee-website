'use client'

import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { TechNovaFeature } from '@/components/sections/TechNovaFeature'
import { SponsorsSection } from '@/components/sections/SponsorsSection'
import { JoinCTA } from '@/components/sections/JoinCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <TechNovaFeature />
      <SponsorsSection />
      <JoinCTA />
    </>
  )
}
