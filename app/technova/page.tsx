'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Starfield } from '@/components/technova/Starfield'
import { Countdown } from '@/components/Countdown'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Counter } from '@/components/Counter'
import { OrbitSystem } from '@/components/technova/OrbitSystem'
import { Rocket, Trophy, Zap, ArrowRight } from 'lucide-react'

const floatingParticles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 5,
}))

export default function TechNovaPage() {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #03010a 0%, #0a0518 30%, #100820 60%, #03010a 100%)',
        minHeight: '100vh',
      }}
    >
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-visible" style={{ paddingTop: 100 }}>
        <Starfield count={200} />

        {/* Floating particles */}
        {floatingParticles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 rounded-full pointer-events-none"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              background: 'rgba(168,85,247,0.6)',
            }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}

        {/* Half moon */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        >
          <div
            className="w-[600px] h-[300px] rounded-t-full"
            style={{
              background:
                'radial-gradient(ellipse at center top, rgba(168,85,247,0.15) 0%, rgba(124,58,237,0.05) 60%, transparent 100%)',
              border: '1px solid rgba(168,85,247,0.2)',
              borderBottom: 'none',
              boxShadow: '0 -20px 80px rgba(168,85,247,0.1)',
            }}
          />
        </motion.div>

        {/* Glowing orbs */}
        <div
          className="absolute top-1/4 -left-40 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 -right-40 w-96 h-96 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)' }}
        />

        {/* Hero content */}
        <div className="relative text-center w-full max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
            style={{
              background: 'rgba(168,85,247,0.12)',
              border: '1px solid rgba(168,85,247,0.3)',
              color: '#c084fc',
            }}
          >
            <Zap size={12} />
            IEEE Student Branch Presents
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-black leading-none mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.03em',
              // clamp: min 3rem → scales with viewport → max 9rem
              // This prevents the "a" being cut off on narrow screens
              fontSize: 'clamp(3rem, 15vw, 9rem)',
              overflow: 'visible',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #e9d5ff 0%, #c084fc 30%, #a855f7 60%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 40px rgba(168,85,247,0.5))',
              }}
            >
              TechNova
            </span>
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.5))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              2026
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl mb-4 font-light"
            style={{ color: 'rgba(192,132,252,0.9)' }}
          >
            Inter-University Mega Hackathon
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base mb-10"
            style={{ color: 'rgba(168,85,247,0.6)' }}
          >
            April 2026 · NED University · 12 Modules · 5 Clusters
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mb-10"
          >
            <Countdown />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                boxShadow: '0 0 30px rgba(168,85,247,0.5)',
              }}
            >
              <Rocket size={18} />
              Register Now
            </a>
            <a
              href="#modules"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 group"
              style={{
                background: 'rgba(168,85,247,0.08)',
                border: '1px solid rgba(168,85,247,0.2)',
                color: 'rgba(240,232,255,0.8)',
              }}
            >
              Explore Modules
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2
              className="text-5xl md:text-6xl font-black leading-tight mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em',
                color: 'rgba(240,232,255,0.95)',
              }}
            >
              One Event.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #c084fc, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Infinite Possibilities.
              </span>
            </h2>
            <p
              className="text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: 'rgba(168,85,247,0.7)' }}
            >
              TechNova 2026 is not just a hackathon — it's a galaxy of innovation. Spanning 12 modules
              across 5 clusters, TechNova brings together the brightest minds from universities across
              Pakistan to compete, collaborate, and create what comes next.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PRIZE POOL ─── */}
      <section className="py-20 relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-96 h-96 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)' }}
          />
        </div>

        <AnimatedSection className="text-center relative">
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-4"
            style={{ color: 'rgba(168,85,247,0.7)' }}
          >
            Total Prize Pool
          </p>
          <div
            className="text-7xl md:text-9xl font-black mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(245,158,11,0.5))',
            }}
          >
            <Counter end={500000} prefix="₨ " suffix="+" />
          </div>
          <p style={{ color: 'rgba(168,85,247,0.5)', fontSize: 14 }}>
            Across all modules and clusters
          </p>
        </AnimatedSection>
      </section>

      {/* ─── MODULES GALAXY ─── */}
      <section id="modules" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-3"
              style={{ color: 'rgba(168,85,247,0.7)' }}
            >
              The Universe of TechNova
            </p>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'rgba(240,232,255,0.95)',
              }}
            >
              Choose Your{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #c084fc, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Cluster
              </span>
            </h2>
          </AnimatedSection>

          <OrbitSystem />
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 1000, suffix: '+', label: 'Participants' },
              { value: 12, suffix: '', label: 'Modules' },
              { value: 20, suffix: '+', label: 'Universities' },
              { value: 48, suffix: 'h', label: 'Hackathon' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div
                  className="p-6 rounded-2xl text-center"
                  style={{
                    background: 'rgba(168,85,247,0.06)',
                    border: '1px solid rgba(168,85,247,0.15)',
                  }}
                >
                  <div
                    className="text-4xl font-black mb-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      background: 'linear-gradient(135deg, #c084fc, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ color: 'rgba(168,85,247,0.7)', fontSize: 13 }}>{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REGISTER CTA ─── */}
      <section className="py-24">
        <AnimatedSection>
          <div
            className="max-w-2xl mx-auto text-center px-6 py-16 rounded-3xl"
            style={{
              background: 'radial-gradient(ellipse at top, rgba(168,85,247,0.15) 0%, rgba(3,1,10,0.8) 100%)',
              border: '1px solid rgba(168,85,247,0.2)',
            }}
          >
            <Trophy size={48} className="mx-auto mb-6" style={{ color: '#f59e0b' }} />
            <h2
              className="text-4xl font-black mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'rgba(240,232,255,0.95)' }}
            >
              Ready to Compete?
            </h2>
            <p className="mb-8" style={{ color: 'rgba(168,85,247,0.7)' }}>
              Registration is open. Secure your spot at TechNova 2026 before seats run out.
            </p>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-white text-lg transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                boxShadow: '0 0 40px rgba(168,85,247,0.5)',
              }}
            >
              <Rocket size={20} />
              Register for TechNova 2026
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}