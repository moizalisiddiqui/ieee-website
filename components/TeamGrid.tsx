'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { GlassCard } from '@/components/GlassCard'
import { Linkedin, Github, Globe } from 'lucide-react'

const teamData = {
  executive: {
  title: "Executive Board",
  members: [
    { name: 'Hamna Saleem', role: 'Chairperson', department: 'Data Science', image: '/images/team/hs.jpg' }, // JPG (already correct)
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
    { name: 'Muhammad Haad Ali', role: 'Graphic Designer Lead', department: 'Computer Engineering', image: '/images/team/mha.jpg' }, // JPG (already correct)
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
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* --- HEADER --- */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ background: 'rgba(0,107,189,0.12)', border: '1px solid rgba(0,107,189,0.3)', color: '#4da6ff' }}
        >
          The Minds Behind
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black mb-4"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', color: 'var(--text)' }}
        >
          Core <span style={{ background: 'linear-gradient(135deg, #4da6ff, #006bbd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Team</span>
        </motion.h1>
      </div>

      {/* --- STUDENT CORE SECTIONS (TOP) --- */}
      <div className="space-y-24">
        {/* Executive Board */}
        <div>
          <SectionHeading>{teamData.executive.title}</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.executive.members.map((member, i) => (
              <TeamMemberCard key={member.name} member={member} delay={i * 0.05} />
            ))}
          </div>
        </div>

        {/* Management */}
        <div>
          <SectionHeading>{teamData.management.title}</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {teamData.management.members.map((member, i) => (
              <TeamMemberCard key={member.name} member={member} delay={i * 0.05} />
            ))}
          </div>
        </div>

        {/* Creative Team */}
        <div>
          <SectionHeading>{teamData.creative.title}</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.creative.members.map((member, i) => (
              <TeamMemberCard key={member.name} member={member} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </div>

      {/* --- FACULTY SECTION (BOTTOM) --- */}
      <div className="mt-32 pt-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4" style={{ color: 'var(--text)' }}>Faculty Mentors</h2>
          <p style={{ color: 'var(--text-muted)' }}>Guiding our path toward excellence.</p>
        </div>

        <section className="space-y-16">
          <div>
            <SectionHeading>Branch Counselor</SectionHeading>
            <div className="flex justify-center">
              {teamData.faculty.branchCounselor.map((member, i) => (
                <div key={member.name} className="w-full max-w-sm">
                  <TeamMemberCard member={member} delay={0.1} isFaculty />
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading>Faculty Advisors</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
    <h3 className="text-xl font-bold mb-8 text-center flex items-center justify-center gap-4 uppercase tracking-widest opacity-80" style={{ color: 'var(--text)' }}>
      <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-500/50" />
      {children}
      <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-500/50" />
    </h3>
  )
}

function TeamMemberCard({ member, delay, isFaculty = false }: { member: any, delay: number, isFaculty?: boolean }) {
  return (
    <AnimatedSection delay={delay}>
      <GlassCard className={`p-6 group ${isFaculty ? 'border-blue-500/20 shadow-[0_0_20px_rgba(0,107,189,0.1)]' : ''}`} glow={false}>
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-5">
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: isFaculty 
                  ? 'radial-gradient(circle, rgba(77,166,255,0.4) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(0,107,189,0.35) 0%, transparent 70%)',
                filter: 'blur(10px)',
                transform: 'scale(1.15)',
              }}
            />
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-cover rounded-full shadow-lg ring-2 ring-transparent group-hover:ring-[rgba(0,107,189,0.45)] grayscale group-hover:grayscale-0 transition-all duration-400 ease-out group-hover:scale-105 relative z-10"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.nextElementSibling as HTMLElement
                if (fallback) fallback.style.display = 'flex'
              }}
            />
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full items-center justify-center text-xl font-black text-white group-hover:scale-105 transition-transform duration-300"
              style={{ display: 'none', background: 'linear-gradient(135deg, #006bbd, #4da6ff)' }}
            >
              {member.name.split(' ').map((w: string) => w[0]).slice(0, 2).join('')}
            </div>
          </div>

          <h3 className="font-bold text-base mb-0.5 leading-snug" style={{ color: 'var(--text)' }}>{member.name}</h3>
          <p className="text-sm font-semibold mb-1" style={{ color: '#4da6ff' }}>{member.role}</p>
          <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>{member.department}</p>

          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {[Linkedin, Globe].map((Icon, j) => (
              <a key={j} href="#" className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </GlassCard>
    </AnimatedSection>
  )
}