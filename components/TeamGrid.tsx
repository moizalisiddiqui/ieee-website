'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { GlassCard } from '@/components/GlassCard'
import { Linkedin, Github, Globe } from 'lucide-react'

const team = [
  {
    name: 'Hamna Saleem',
    role: 'Chairperson',
    department: 'Data Science',
    image: '/images/team/hs.jpg',
  },
  {
    name: 'Anas Mobin',
    role: 'Vice Chairperson',
    department: 'Computer Science',
    image: '/images/team/am.jpg',
  },
  {
    name: 'Moiz Ali Siddiqui',
    role: 'Secretary General',
    department: 'Software Engineering',
    image: '/images/team/mas.jpg',
  },
  {
    name: 'Aashir Ali',
    role: 'Treasurer',
    department: 'Accounting & Finance',
    image: '/images/team/fatima-malik.jpg',
  },
  {
    name: 'Omar Siddiqui',
    role: 'Technical Lead',
    department: 'Computer Engineering',
    image: '/images/team/omar-siddiqui.jpg',
  },
  {
    name: 'Zainab Iqbal',
    role: 'Events Director',
    department: 'Software Engineering',
    image: '/images/team/zainab-iqbal.jpg',
  },
  {
    name: 'Bilal Ahmed',
    role: 'Marketing Head',
    department: 'Computer Science',
    image: '/images/team/bilal-ahmed.jpg',
  },
  {
    name: 'Hina Qureshi',
    role: 'Design Lead',
    department: 'Computer Engineering',
    image: '/images/team/hina-qureshi.jpg',
  },
  {
    name: 'Usman Tariq',
    role: 'Web Development',
    department: 'Software Engineering',
    image: '/images/team/usman-tariq.jpg',
  },
  {
    name: 'Ayesha Noor',
    role: 'Content Lead',
    department: 'Computer Science',
    image: '/images/team/ayesha-noor.jpg',
  },
  {
    name: 'Farhan Baig',
    role: 'Outreach Head',
    department: 'Electrical Engineering',
    image: '/images/team/farhan-baig.jpg',
  },
  {
    name: 'Maryam Zahid',
    role: 'R&D Lead',
    department: 'Computer Engineering',
    image: '/images/team/maryam-zahid.jpg',
  },
]

export function TeamGrid() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
          style={{
            background: 'rgba(0,107,189,0.12)',
            border: '1px solid rgba(0,107,189,0.3)',
            color: '#4da6ff',
          }}
        >
          The Minds Behind
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            letterSpacing: '-0.02em',
            color: 'var(--text)',
          }}
        >
          Core{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #4da6ff, #006bbd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Team
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ color: 'var(--text-muted)' }}
          className="max-w-xl mx-auto"
        >
          Dedicated individuals working tirelessly to foster engineering excellence and innovation.
        </motion.p>
      </div>

      {/* Grid — 4 cols desktop, 2 tablet, 1 mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <AnimatedSection key={member.name} delay={i * 0.06}>
            <GlassCard className="p-6 group" glow={false}>
              <div className="flex flex-col items-center text-center">

                {/* Profile image */}
                <div className="relative mb-5">
                  {/* Glow ring — fades in on hover */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle, rgba(0,107,189,0.35) 0%, transparent 70%)',
                      filter: 'blur(10px)',
                      transform: 'scale(1.15)',
                    }}
                  />

                  <img
                    src={member.image}
                    alt={member.name}
                    // w-24 mobile → w-28 sm → w-32 lg
                    className="
                      w-24 h-24
                      sm:w-28 sm:h-28
                      lg:w-32 lg:h-32
                      object-cover rounded-full
                      shadow-lg
                      ring-2 ring-transparent
                      group-hover:ring-[rgba(0,107,189,0.45)]
                      grayscale group-hover:grayscale-0
                      transition-all duration-400 ease-out
                      group-hover:scale-105
                      relative z-10
                    "
                    style={{ transition: 'transform 0.35s ease, filter 0.35s ease, box-shadow 0.35s ease' }}
                    // Graceful fallback: if image fails, show initials-style bg
                    onError={(e) => {
                      const el = e.currentTarget
                      el.style.display = 'none'
                      const fallback = el.nextElementSibling as HTMLElement | null
                      if (fallback) fallback.style.display = 'flex'
                    }}
                  />

                  {/* Fallback initials div — hidden by default, shown if image 404s */}
                  <div
                    className="
                      w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32
                      rounded-full items-center justify-center
                      text-xl font-black text-white
                      group-hover:scale-105
                      transition-transform duration-300
                    "
                    style={{
                      display: 'none',
                      background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                      boxShadow: '0 4px 20px rgba(0,107,189,0.3)',
                    }}
                    aria-hidden="true"
                  >
                    {/* Derive initials from name */}
                    {member.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                  </div>
                </div>

                {/* Name */}
                <h3
                  className="font-bold text-base mb-0.5 leading-snug"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
                >
                  {member.name}
                </h3>

                {/* Role */}
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: '#4da6ff' }}
                >
                  {member.role}
                </p>

                {/* Department */}
                <p
                  className="text-xs mb-4"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {member.department}
                </p>

                {/* Social links — fade in on card hover */}
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[Linkedin, Github, Globe].map((Icon, j) => (
                    <a
                      key={j}
                      href="#"
                      className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-muted)',
                      }}
                      aria-label={['LinkedIn', 'GitHub', 'Website'][j]}
                    >
                      <Icon size={13} />
                    </a>
                  ))}
                </div>

              </div>
            </GlassCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}