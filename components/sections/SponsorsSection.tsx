'use client'

import { AnimatedSection } from '@/components/AnimatedSection'

const sponsors = [
  { name: 'Microsoft', tier: 'platinum' },
  // { name: 'Google', tier: 'platinum' },
  { name: 'AWS', tier: 'gold' },
  { name: 'Meta', tier: 'gold' },
  // { name: 'Intel', tier: 'silver' },
  // { name: 'Oracle', tier: 'silver' },
  // { name: 'Samsung', tier: 'bronze' },
  // { name: 'Huawei', tier: 'bronze' },
]

export function SponsorsSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: 'var(--primary-light, #4da6ff)' }}
          >
            Our Partners
          </p>
          <h2
            className="text-3xl md:text-4xl font-black"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            Backed by Industry Leaders
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex items-center justify-center p-6 rounded-2xl transition-all duration-300 group hover:scale-105 cursor-pointer"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="text-center">
                  <div
                    className="text-xl font-black mb-1 transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color:
                        sponsor.tier === 'platinum'
                          ? '#e2e8f0'
                          : sponsor.tier === 'gold'
                          ? '#f59e0b'
                          : sponsor.tier === 'silver'
                          ? '#94a3b8'
                          : '#cd7c3b',
                    }}
                  >
                    {sponsor.name}
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {sponsor.tier}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Interested in sponsoring?{' '}
            <a
              href="mailto:ieee@neduet.edu.pk"
              className="font-semibold hover:underline"
              style={{ color: '#4da6ff' }}
            >
              Get in touch
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
