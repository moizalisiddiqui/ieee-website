'use client'

import { AnimatedSection } from '@/components/AnimatedSection'
import { Counter } from '@/components/Counter'

const stats = [
  { value: 50, suffix: '+', label: 'Active Members', description: 'Passionate engineers' },
  { value: 30, suffix: '+', label: 'Events Hosted', description: 'Workshops, hackathons & more' },
  { value: 3, suffix: '+', label: 'Years Active', description: 'Building the future' },
  // { value: 1500, suffix: '+', label: 'Leaders built', description: 'Through innovation' },
]

export function StatsSection() {
  return (
    <section className="py-24 relative">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,107,189,0.06) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} direction="up">
              <div
                className="p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                }}
              >
                <div
                  className="text-4xl md:text-5xl font-black mb-2 transition-all duration-300 group-hover:scale-110"
                  style={{
                    fontFamily: 'var(--font-display)',
                    background: 'linear-gradient(135deg, #4da6ff, #006bbd)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>
                  {stat.label}
                </h3>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {stat.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
