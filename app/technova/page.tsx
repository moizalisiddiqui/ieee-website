'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Starfield } from '@/components/technova/Starfield'
import { Countdown } from '@/components/Countdown'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Counter } from '@/components/Counter'
import { OrbitSystem } from '@/components/technova/OrbitSystem'
import { Rocket, Trophy, Zap, ArrowRight } from 'lucide-react'

const floatingParticles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 5,
}))

export default function TechNovaPage() {
  return (
    <div className="relative w-full overflow-x-hidden" style={{ background: 'linear-gradient(180deg, #03010a 0%, #0a0518 30%, #100820 60%, #03010a 100%)' }}>
      
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-12 overflow-hidden">
        <Starfield count={150} />

        {/* Floating particles - hidden on very small screens for performance */}
        <div className="absolute inset-0 hidden sm:block pointer-events-none">
          {floatingParticles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute w-1 h-1 rounded-full"
              style={{ left: `${p.x}%`, top: `${p.y}%`, background: 'rgba(168,85,247,0.4)' }}
              animate={{ y: [0, -40, 0], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            />
          ))}
        </div>

        {/* Responsive Half Moon */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div
            className="w-[120vw] sm:w-[800px] h-[200px] sm:h-[400px] rounded-t-full"
            style={{
              background: 'radial-gradient(ellipse at center top, rgba(168,85,247,0.15) 0%, transparent 80%)',
              border: '1px solid rgba(168,85,247,0.2)',
              borderBottom: 'none',
            }}
          />
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-6 sm:mb-8 border border-purple-500/30 bg-purple-500/10 text-purple-300"
          >
            <Zap size={12} className="animate-pulse" />
            IEEE IoBM Student Branch Presents
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-black leading-[0.9] tracking-tighter mb-4"
            style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 15vw, 10rem)', // Fluid typography
            }}
          >
            <span className="block bg-gradient-to-br from-purple-200 via-purple-400 to-purple-700 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              TechNova
            </span>
            <span className="block bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
              2026
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-4 font-light text-purple-300/90 px-4"
          >
            Inter-University Mega Hackathon
          </motion.p>

          <motion.p
            className="text-xs sm:text-sm md:text-base mb-8 text-purple-500/60 font-medium uppercase tracking-wider px-4"
          >
            July 2026 · Institute of Buisness & Management · 12 Modules · 5 Clusters
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6">
            <a
              href="https://forms.google.com"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-violet-600 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 transition-all active:scale-95"
            >
              <Rocket size={18} />
              Register Now
            </a>
            <a
              href="#modules"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border border-purple-500/20 bg-purple-500/5 text-purple-100 hover:bg-purple-500/10 transition-all group"
            >
              Explore Modules
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-12 scale-75 sm:scale-90 md:scale-100">
            <Countdown />
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-20 md:py-32 relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 text-white leading-tight">
              One Event. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">Infinite Possibilities.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-purple-400/70 leading-relaxed max-w-2xl mx-auto">
              TechNova 2026 is a galaxy of innovation. Spanning 12 modules across 5 clusters, 
              bringing together the brightest minds from across Pakistan.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PRIZE POOL ─── */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-600/5 blur-[120px] rounded-full scale-150" />
        <AnimatedSection className="text-center relative z-10 px-4">
          <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-purple-500/70 mb-2">Total Prize Pool</p>
          <div className="text-5xl sm:text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-amber-500 to-orange-700 drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]">
            <Counter end={500000} prefix="₨ " suffix="+" />
          </div>
          <p className="text-xs sm:text-sm text-purple-500/50 mt-4">Across all modules and clusters</p>
        </AnimatedSection>
      </section>

      {/* ─── MODULES GALAXY ─── */}
      <section id="modules" className="py-20 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-purple-500/70 mb-4">Universe of TechNova</p>
          <h2 className="text-3xl sm:text-5xl font-black text-white">Choose Your <span className="text-purple-500">Cluster</span></h2>
        </div>
        
        {/* The Orbit system needs its own internal responsiveness handles */}
        <div className="relative w-full aspect-square max-w-[90vw] md:max-w-4xl mx-auto">
          <OrbitSystem />
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: 1000, suffix: '+', label: 'Participants' },
              { value: 12, suffix: '', label: 'Modules' },
              { value: 20, suffix: '+', label: 'Universities' },
              { value: 48, suffix: 'h', label: 'Hackathon' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="p-6 md:p-8 rounded-2xl text-center bg-purple-500/5 border border-purple-500/10 hover:border-purple-500/30 transition-colors">
                  <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-600 mb-1">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs md:text-sm uppercase tracking-widest text-purple-500/60 font-bold">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-3xl mx-auto text-center p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20 relative overflow-hidden">
           <Trophy size={48} className="mx-auto mb-6 text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
           <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Compete?</h2>
           <p className="text-purple-300/70 mb-10 text-lg">Secure your spot at TechNova 2026 before seats run out.</p>
           <a
              href="https://forms.google.com"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-white text-lg bg-gradient-to-r from-purple-600 to-violet-600 shadow-[0_20px_40px_rgba(168,85,247,0.3)] hover:scale-105 transition-all"
            >
              <Rocket size={22} />
              Register for TechNova 2026
            </a>
        </div>
      </section>
    </div>
  )
}