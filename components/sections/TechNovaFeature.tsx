'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Zap, Trophy, Users, Rocket } from 'lucide-react'

const stars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  delay: Math.random() * 3,
}))

export function TechNovaFeature() {
  return (
    <section className="py-24 relative overflow-hidden">
      <AnimatedSection>
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #03010a 0%, #0a0518 50%, #100820 100%)',
              border: '1px solid rgba(168,85,247,0.2)',
            }}
          >
            {/* Star field inside card */}
            {stars.map((s) => (
              <motion.div
                key={s.id}
                className="absolute rounded-full bg-white pointer-events-none"
                style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
                animate={{ opacity: [0.2, 0.9, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
              />
            ))}

            {/* Glow orbs */}
            <div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)' }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-15"
              style={{ background: 'radial-gradient(circle, #6b21a8, transparent 70%)' }}
            />

            <div className="relative p-10 md:p-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left */}
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                    style={{
                      background: 'rgba(168,85,247,0.15)',
                      border: '1px solid rgba(168,85,247,0.3)',
                      color: '#c084fc',
                    }}
                  >
                    <Zap size={12} />
                    Flagship Event 2026
                  </div>

                  {/* FIXED HEADING SECTION */}
                  <h2
                    className="text-5xl md:text-6xl font-black leading-tight mb-4 pr-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '-0.01em',
                      background: 'linear-gradient(135deg, #c084fc, #a855f7, #7c3aed)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      display: 'inline-block', // Crucial for gradient rendering
                    }}
                  >
                    TechNova
                    <br />
                    2026
                  </h2>

                  <p className="text-lg mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Inter-University Mega Hackathon
                  </p>
                  <p className="text-sm mb-8" style={{ color: 'rgba(168,85,247,0.8)' }}>
                    12 modules • 5 clusters • April 2026
                  </p>

                  <Link
                    href="/technova"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                      boxShadow: '0 0 30px rgba(168,85,247,0.4)',
                    }}
                  >
                    <Rocket size={18} />
                    Enter TechNova
                  </Link>
                </div>

                {/* Right: stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Trophy, value: 'PKR 500K+', label: 'Prize Pool' },
                    { icon: Users, value: '1000+', label: 'Participants' },
                    { icon: Zap, value: '12', label: 'Modules' },
                    { icon: Rocket, value: '24h', label: 'Hackathon' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-5 rounded-2xl"
                      style={{
                        background: 'rgba(168,85,247,0.08)',
                        border: '1px solid rgba(168,85,247,0.15)',
                      }}
                    >
                      <item.icon size={20} className="mb-3" style={{ color: '#c084fc' }} />
                      <div
                        className="text-2xl font-black mb-1"
                        style={{ fontFamily: 'var(--font-display)', color: '#fff' }}
                      >
                        {item.value}
                      </div>
                      <div className="text-xs" style={{ color: 'rgba(168,85,247,0.7)' }}>
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}