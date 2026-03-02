'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Starfield } from '@/components/technova/Starfield'
import { ArrowLeft, ArrowRight, Clock, Trophy, Rocket, CheckCircle2 } from 'lucide-react'

export interface Module {
  title: string
  overview: string
  workflow: string[]
  focus: string[]
  prize?: string
  icon: string
}

interface ClusterPageProps {
  title: string
  subtitle: string
  icon: string
  color: string
  bgGradient: string
  description: string
  modules: Module[]
  theme: string
}

function ModuleCard({ mod, color }: { mod: Module; color: string }) {
  return (
    <div
      className="p-5 sm:p-8 rounded-2xl h-full flex flex-col transition-all duration-300 hover:translate-y-[-4px]"
      style={{ background: `${color}06`, border: `1px solid ${color}20` }}
    >
      <div className="flex-grow">
        {/* Header */}
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div
            className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
            style={{ background: `${color}15`, border: `1px solid ${color}30` }}
          >
            {mod.icon}
          </div>
          <div>
            <h3
              className="text-base sm:text-xl font-bold mb-1 sm:mb-2"
              style={{ fontFamily: 'var(--font-display)', color: 'rgba(240,232,255,0.95)' }}
            >
              {mod.title}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'rgba(240,232,255,0.5)' }}>
              {mod.overview}
            </p>
          </div>
        </div>

        {/* Workflow */}
        <div className="mb-4 sm:mb-6">
          <h4 className="text-xs uppercase tracking-widest font-semibold mb-2 sm:mb-3" style={{ color }}>Workflow</h4>
          <div className="space-y-1.5 sm:space-y-2">
            {mod.workflow.map((step, i) => (
              <div key={i} className="flex items-start gap-2 sm:gap-3">
                <div
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold flex-shrink-0 mt-0.5"
                  style={{ background: `${color}20`, color }}
                >
                  {i + 1}
                </div>
                <p className="text-xs sm:text-sm" style={{ color: 'rgba(240,232,255,0.6)' }}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Focus areas */}
        <div className="mb-5 sm:mb-8">
          <h4 className="text-xs uppercase tracking-widest font-semibold mb-2 sm:mb-3" style={{ color }}>Focus Areas</h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {mod.focus.map((f) => (
              <span
                key={f}
                className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium"
                style={{ background: `${color}12`, color, border: `1px solid ${color}25` }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto">
        {mod.prize && (
          <div
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold mb-4 sm:mb-5"
            style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.2)' }}
          >
            <Trophy size={13} />
            {mod.prize}
          </div>
        )}

        <div className="pt-4 sm:pt-5" style={{ borderTop: `1px solid ${color}15` }}>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold transition-all hover:gap-3"
            style={{ color }}
          >
            <Rocket size={13} />
            Register for this Module
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </div>
  )
}

export function ClusterPageLayout({ title, subtitle, icon, color, description, modules, theme }: ClusterPageProps) {
  return (
    <div
      data-theme={theme}
      style={{
        background: `linear-gradient(180deg, #03010a 0%, ${color}08 30%, #03010a 100%)`,
        minHeight: '100vh',
      }}
    >
      {/* Hero */}
      <section
        className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{ paddingTop: 80 }}
      >
        <Starfield count={100} />

        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 rounded-full pointer-events-none opacity-15"
          style={{ background: `radial-gradient(circle, ${color}, transparent 70%)` }}
        />

        <div className="relative text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/technova"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium mb-6 sm:mb-8 hover:opacity-80 transition-opacity"
              style={{ color: `${color}80` }}
            >
              <ArrowLeft size={12} />
              Back to TechNova
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl flex items-center justify-center text-3xl sm:text-5xl mx-auto mb-4 sm:mb-6"
            style={{
              background: `${color}15`,
              border: `2px solid ${color}40`,
              boxShadow: `0 0 40px ${color}30`,
            }}
          >
            {icon}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-black leading-none mb-3 sm:mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.02em',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              background: `linear-gradient(135deg, #fff, ${color})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg mb-3 sm:mb-4 px-2"
            style={{ color: `${color}90` }}
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8 px-2"
            style={{ color: 'rgba(240,232,255,0.5)' }}
          >
            {description}
          </motion.p>

          <motion.a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-white transition-all hover:scale-105 text-sm sm:text-base"
            style={{
              background: `linear-gradient(135deg, ${color}cc, ${color})`,
              boxShadow: `0 0 30px ${color}40`,
              minHeight: '48px',
            }}
          >
            <Rocket size={18} />
            Register Now
          </motion.a>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-16">
            <p className="text-xs uppercase tracking-widest font-semibold mb-2 sm:mb-3" style={{ color: `${color}80` }}>
              Modules in this Cluster
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-black"
              style={{ fontFamily: 'var(--font-display)', color: 'rgba(240,232,255,0.95)' }}
            >
              What You&apos;ll Compete In
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
            {modules.map((mod, i) => (
              <AnimatedSection key={mod.title} delay={i * 0.15} className="h-full">
                <ModuleCard mod={mod} color={color} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl font-black"
              style={{ fontFamily: 'var(--font-display)', color: 'rgba(240,232,255,0.95)' }}
            >
              Event Timeline
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-3 sm:space-y-4">
              {[
                { label: 'Registration Deadline', date: 'March 30, 2026', icon: Clock },
                { label: 'Opening Ceremony', date: 'April 15, 2026', icon: Rocket },
                { label: 'Hackathon Phase', date: 'April 15–17, 2026', icon: CheckCircle2 },
                { label: 'Finals & Awards', date: 'April 18, 2026', icon: Trophy },
              ].map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl"
                  style={{ background: `${color}06`, border: `1px solid ${color}15` }}
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, color }}
                  >
                    <t.icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-xs sm:text-sm" style={{ color: 'rgba(240,232,255,0.9)' }}>
                      {t.label}
                    </div>
                  </div>
                  <div
                    className="text-xs sm:text-sm font-mono font-medium flex-shrink-0"
                    style={{ color: `${color}90` }}
                  >
                    {t.date}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-20 px-4">
        <AnimatedSection>
          <div
            className="max-w-xl mx-auto text-center px-6 sm:px-8 py-10 sm:py-14 rounded-2xl sm:rounded-3xl"
            style={{
              background: `radial-gradient(ellipse at top, ${color}15 0%, rgba(3,1,10,0.8) 100%)`,
              border: `1px solid ${color}25`,
            }}
          >
            <h2
              className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'rgba(240,232,255,0.95)' }}
            >
              Ready to Join {title}?
            </h2>
            <p className="mb-6 sm:mb-8 text-xs sm:text-sm" style={{ color: 'rgba(240,232,255,0.5)' }}>
              Spots are limited. Register now to secure your place.
            </p>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-white transition-all hover:scale-105 text-sm sm:text-base"
              style={{
                background: `linear-gradient(135deg, ${color}cc, ${color})`,
                boxShadow: `0 0 30px ${color}40`,
                minHeight: '48px',
              }}
            >
              <Rocket size={18} /> Register Now
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}