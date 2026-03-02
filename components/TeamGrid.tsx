'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { GlassCard } from '@/components/GlassCard'
import { Linkedin, Globe } from 'lucide-react'

const teamData = {
  executive: {
    title: "Executive Board",
    members: [
      { name: 'Hamna Saleem', role: 'Chairperson', department: 'Data Science', image: '/images/team/hs.jpg' },
      { name: 'Muhammad Anas', role: 'Vice Chairperson', department: 'Computer Science', image: '/images/team/ma.jpeg' },
      { name: 'Moiz Ali Siddiqui', role: 'General Secretary', department: 'Software Engineering', image: '/images/team/mas.jpg' },
      { name: 'Aashir Ali', role: 'Treasurer', department: 'Accounting & Finance', image: '/images/team/aa.jpeg' },
    ]
  },
  management: {
    title: "Management & Operations",
    members: [
      { name: 'Hafsa Amir', role: 'Event Management Lead', department: 'Software Engineering', image: '/images/team/ha.jpeg' },
      { name: 'Laiba Lagari', role: 'Event Management Co-Lead', department: 'Software Engineering', image: '/images/team/ll.jpeg' },
    ]
  },
  creative: {
    title: "Media & Creative Team",
    members: [
      { name: 'Abeeha Asif', role: 'Photographer', department: 'Computer Science', image: '/images/team/aa2.jpeg' },
      { name: 'Ramsha Imran', role: 'Videographer', department: 'Computer Science', image: '/images/team/ri.jpeg' },
      { name: 'Muhammad Haad Ali', role: 'Graphic Designer Lead', department: 'Computer Engineering', image: '/images/team/mha.jpg' },
      { name: 'Javaria Sameen', role: 'Graphic Designer Co-Lead', department: 'Computer Engineering', image: '/images/team/js.png' },
      { name: 'Zoya Nayab', role: 'Content Writer', department: 'Computer Science', image: '/images/team/zn.jpeg' },
      { name: 'Adeen Gul Sheikh', role: 'Social Media Manager', department: 'Computer Science', image: '/images/team/ags.jpeg' },
    ]
  },
  faculty: {
    branchCounselor: [
      { name: 'Dr. Khalid Mahboob', role: 'Branch Counselor', department: 'Assistant Professor', image: '/images/team/faculty1.jpg' },
    ],
    advisors: [
      { name: 'Shabeeb Raza', role: 'Faculty Advisor', department: 'Computer Science', image: '/images/team/faculty2.jpg' },
      { name: 'Mustafa Ahmed', role: 'Faculty Advisor', department: 'Software Engineering', image: '/images/team/faculty3.jpg' },
      { name: 'Shayan Faiz', role: 'Faculty Advisor', department: 'Data Science', image: '/images/team/faculty4.jpg' },
    ]
  }
}

export function TeamGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-5 sm:mb-6"
          style={{ background: 'rgba(0,107,189,0.12)', border: '1px solid rgba(0,107,189,0.3)', color: '#4da6ff' }}
        >
          The Minds Behind
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-4"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', color: 'var(--text)' }}
        >
          Core{' '}
          <span style={{
            background: 'linear-gradient(135deg, #4da6ff, #006bbd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Team
          </span>
        </motion.h1>
      </div>

      {/* Student Core Sections */}
      <div className="space-y-16 sm:space-y-24">
        {/* Executive Board */}
        <div>
          <SectionHeading>{teamData.executive.title}</SectionHeading>
          {/* Mobile: 1 col full-width | Desktop: 4 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {teamData.executive.members.map((member, i) => (
              <TeamMemberCard key={member.name} member={member} delay={i * 0.05} />
            ))}
          </div>
        </div>

        {/* Management */}
        <div>
          <SectionHeading>{teamData.management.title}</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-2xl mx-auto">
            {teamData.management.members.map((member, i) => (
              <TeamMemberCard key={member.name} member={member} delay={i * 0.05} />
            ))}
          </div>
        </div>

        {/* Creative Team */}
        <div>
          <SectionHeading>{teamData.creative.title}</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {teamData.creative.members.map((member, i) => (
              <TeamMemberCard key={member.name} member={member} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </div>

      {/* Faculty Section */}
      <div className="mt-20 sm:mt-32 pt-12 sm:pt-20 border-t border-white/5">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black mb-3 sm:mb-4" style={{ color: 'var(--text)' }}>Faculty Mentors</h2>
          <p className="text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>Guiding our path toward excellence.</p>
        </div>

        <section className="space-y-10 sm:space-y-16">
          <div>
            <SectionHeading>Branch Counselor</SectionHeading>
            <div className="flex justify-center">
              {teamData.faculty.branchCounselor.map((member) => (
                <div key={member.name} className="w-full sm:max-w-sm">
                  <TeamMemberCard member={member} delay={0.1} isFaculty />
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading>Faculty Advisors</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 max-w-5xl mx-auto">
              {teamData.faculty.advisors.map((member, i) => (
                <TeamMemberCard key={member.name} member={member} delay={i * 0.1} isFaculty />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm sm:text-base md:text-xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-3 sm:gap-4 uppercase tracking-widest opacity-80" style={{ color: 'var(--text)' }}>
      <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-blue-500/50" />
      {children}
      <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-blue-500/50" />
    </h3>
  )
}

function TeamMemberCard({ member, delay, isFaculty = false }: { member: any, delay: number, isFaculty?: boolean }) {
  return (
    <AnimatedSection delay={delay}>
      <GlassCard className={`group ${isFaculty ? 'border-blue-500/20' : ''}`} glow={false}>
        {/* 
          Mobile layout: big horizontal card — large photo on the left, info on the right.
          Takes the full screen width and feels substantial.
          Desktop: vertical centered card (classic grid look).
        */}
        <div className="flex sm:flex-col items-center sm:items-center gap-0 sm:gap-0">

          {/* Photo — full height strip on mobile, centered circle on desktop */}
          <div className="relative flex-shrink-0 sm:mt-8 sm:mb-5">
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(0,107,189,0.4) 0%, transparent 70%)',
                filter: 'blur(14px)',
                transform: 'scale(1.3)',
              }}
            />

            {/* Image container: on mobile it's a tall rectangle (left column), on sm+ it's a circle */}
            <div className="
              w-36 h-36
              sm:w-28 sm:h-28
              lg:w-32 lg:h-32
              relative overflow-hidden
              rounded-2xl sm:rounded-full
              ml-5 my-5 sm:m-0
              shadow-xl
              ring-2 ring-transparent group-hover:ring-[rgba(0,107,189,0.5)]
              transition-all duration-500
              group-hover:scale-105
            ">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              {/* Initials fallback */}
              <div
                className="absolute inset-0 items-center justify-center text-2xl sm:text-xl font-black text-white"
                style={{ display: 'none', background: 'linear-gradient(135deg, #006bbd, #4da6ff)' }}
              >
                {member.name.split(' ').map((w: string) => w[0]).slice(0, 2).join('')}
              </div>
            </div>
          </div>

          {/* Text — right of photo on mobile, below photo on desktop */}
          <div className="flex-1 sm:flex-none sm:w-full px-5 sm:px-6 py-5 sm:pb-6 sm:pt-0 sm:text-center">
            <h3
              className="font-bold text-xl sm:text-base lg:text-lg mb-1 leading-tight"
              style={{ color: 'var(--text)' }}
            >
              {member.name}
            </h3>
            <p
              className="text-base sm:text-sm font-semibold mb-1"
              style={{ color: '#4da6ff' }}
            >
              {member.role}
            </p>
            <p
              className="text-sm sm:text-xs mb-4 sm:mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              {member.department}
            </p>

            {/* Social links */}
            <div className="flex gap-2 sm:justify-center">
              {[Linkedin, Globe].map((Icon, j) => (
                <a
                  key={j}
                  href="#"
                  className="w-9 h-9 sm:w-7 sm:h-7 rounded-xl sm:rounded-lg flex items-center justify-center transition-all hover:scale-110 opacity-60 group-hover:opacity-100"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                    minWidth: '36px',
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </AnimatedSection>
  )
}