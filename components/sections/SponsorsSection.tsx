'use client'

import { AnimatedSection } from '@/components/AnimatedSection'

const sponsors = [
  { name: 'TELEC', tier: 'titanium' },
  { name: 'B.BRAUN', tier: 'gold' },
  { name: 'TEXITEC', tier: 'gold' },
]

export function SponsorsSection() {
  const titaniumSponsors = sponsors.filter(s => s.tier === 'titanium')
  const goldSponsors = sponsors.filter(s => s.tier === 'gold')

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#4da6ff' }}>
            Past Partners
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            Backed by Industry Leaders
          </h2>
        </AnimatedSection>

        <div className="space-y-4 sm:space-y-8">
          <AnimatedSection delay={0.2} className="flex justify-center">
            {titaniumSponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-full max-w-xs sm:max-w-md flex items-center justify-center p-8 sm:p-10 rounded-2xl sm:rounded-3xl transition-all duration-300 group hover:scale-[1.02] cursor-pointer"
                style={{
                  background: 'linear-gradient(145deg, rgba(226,232,240,0.05), rgba(226,232,240,0.01))',
                  border: '1px solid rgba(226,232,240,0.3)',
                  boxShadow: '0 0 40px rgba(226,232,240,0.1)',
                }}
              >
                <div className="text-center">
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 tracking-tight"
                    style={{ fontFamily: 'var(--font-display)', color: '#e2e8f0' }}
                  >
                    {sponsor.name}
                  </div>
                  <div className="text-xs uppercase tracking-[0.3em] opacity-60 font-bold" style={{ color: '#94a3b8' }}>
                    {sponsor.tier} Sponsor
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
            {goldSponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex items-center justify-center p-6 sm:p-8 rounded-2xl transition-all duration-300 group hover:scale-105 cursor-pointer"
                style={{ background: 'var(--surface)', border: '1px solid rgba(245,158,11,0.2)' }}
              >
                <div className="text-center">
                  <div
                    className="text-xl sm:text-2xl font-black mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: '#f59e0b' }}
                  >
                    {sponsor.name}
                  </div>
                  <div className="text-xs uppercase tracking-widest opacity-70" style={{ color: 'var(--text-muted)' }}>
                    {sponsor.tier} Sponsor
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.6} className="text-center mt-10 sm:mt-16">
          <p className="text-sm opacity-60" style={{ color: 'var(--text-muted)' }}>
            Interested in sponsoring TechNova 2026?{' '}
            <a href="mailto:ieee@neduet.edu.pk" className="font-semibold hover:underline" style={{ color: '#4da6ff' }}>
              Get in touch
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}