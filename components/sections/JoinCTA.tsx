'use client'

import { AnimatedSection } from '@/components/AnimatedSection'
import { Users, ArrowRight } from 'lucide-react'

export function JoinCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,107,189,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <AnimatedSection>
          <div
            className="p-12 md:p-20 rounded-3xl"
            style={{
              background: 'var(--surface)',
              border: '1px solid rgba(0,107,189,0.2)',
              boxShadow: '0 0 60px rgba(0,107,189,0.08)',
            }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: 'rgba(0,107,189,0.12)',
                border: '1px solid rgba(0,107,189,0.3)',
                color: '#4da6ff',
              }}
            >
              <Users size={12} />
              Open Enrollment
            </div>

            <h2
              className="text-4xl md:text-6xl font-black leading-tight mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em',
                color: 'var(--text)',
              }}
            >
              Ready to Shape the{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4da6ff, #006bbd)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Future?
              </span>
            </h2>

            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Join hundreds of engineers who are already building tomorrow. Applications are open
              for the 2025-26 academic year.
            </p>

            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-semibold text-white text-lg transition-all duration-300 hover:scale-105 active:scale-95 group"
              style={{
                background: 'linear-gradient(135deg, #006bbd, #003d6e)',
                boxShadow: '0 0 40px rgba(0,107,189,0.5)',
              }}
            >
              <Users size={20} />
              Apply Now — It&apos;s Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
