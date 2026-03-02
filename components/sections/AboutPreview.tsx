'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import { ArrowRight, Award, Globe, Cpu } from 'lucide-react'

const pillars = [
  { icon: Cpu, title: 'Technology', desc: 'Hands-on workshops and cutting-edge tech talks' },
  { icon: Globe, title: 'Community', desc: 'A global network of engineers and innovators' },
  { icon: Award, title: 'Excellence', desc: 'Award-winning events and international recognition' },
]

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: text */}
          <AnimatedSection direction="left">
            <p className="text-xs uppercase tracking-widest font-semibold mb-3 sm:mb-4" style={{ color: 'var(--primary-light, #4da6ff)' }}>
              Who We Are
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', color: 'var(--text)' }}
            >
              Engineering the{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4da6ff, #006bbd)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Next Generation
              </span>
            </h2>
            <p className="leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>
              We are the IEEE Student Branch at IoBM — a community of engineers, developers,
              and innovators united by a passion for technology. From technical workshops to mega
              hackathons, we create spaces where brilliant minds connect, collaborate, and build
              what comes next.
            </p>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 font-semibold group text-sm sm:text-base"
              style={{ color: '#4da6ff' }}
            >
              Meet the Team
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          {/* Right: pillars */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-3 sm:space-y-4">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,107,189,0.15)', color: '#4da6ff' }}
                  >
                    <p.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base" style={{ color: 'var(--text)' }}>{p.title}</h3>
                    <p className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}