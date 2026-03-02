'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const events = [
  {
    year: '2026',
    title: 'TechNova 2026',
    description: 'Our flagship inter-university mega hackathon with 12 modules spanning AI, development, data science, gaming, and innovation.',
    category: 'Mega Hackathon',
    color: '#a855f7',
    upcoming: true,
  },
  {
    year: '2025',
    title: 'AI Innovation Summit',
    description: 'A two-day summit featuring keynote speakers from leading AI companies, workshops on machine learning, and networking sessions.',
    category: 'Conference',
    color: '#006bbd',
  },
  {
    year: '2025',
    title: 'Code Sprint 2025',
    description: 'A 12-hour intensive competitive programming contest with over 300 participants from 15 universities.',
    category: 'Competition',
    color: '#10b981',
  },
  {
    year: '2024',
    title: 'TechNova 2024',
    description: 'The inaugural TechNova event that brought together 500+ participants for a 24-hour hackathon across 8 technical modules.',
    category: 'Mega Hackathon',
    color: '#a855f7',
  },
  {
    year: '2024',
    title: 'Career Connect',
    description: 'An industry networking event connecting IEEE students with hiring managers from 20+ tech companies.',
    category: 'Networking',
    color: '#f59e0b',
  },
  {
    year: '2023',
    title: 'Embedded Systems Workshop',
    description: 'A hands-on workshop series on IoT and embedded systems development with Arduino and Raspberry Pi.',
    category: 'Workshop',
    color: '#006bbd',
  },
]

function TimelineEventDesktop({ event, index }: { event: typeof events[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} mb-10 md:mb-12`}>
      {/* Center dot */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-8 z-10"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div
          className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full"
          style={{ background: event.color, boxShadow: `0 0 16px ${event.color}` }}
        />
      </motion.div>

      {/* Card */}
      <motion.div
        className={`w-[46%] ${isLeft ? 'pr-6 md:pr-8' : 'pl-6 md:pl-8'}`}
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          className="p-4 md:p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
          style={{
            background: 'var(--surface)',
            border: `1px solid ${event.color}33`,
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          }}
        >
          <div className="flex items-center justify-between mb-2 md:mb-3 flex-wrap gap-2">
            <div
              className="px-2.5 py-1 rounded-full text-xs font-semibold"
              style={{ background: `${event.color}15`, color: event.color }}
            >
              {event.category}
            </div>
            {event.upcoming && (
              <span
                className="px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{ background: 'rgba(168,85,247,0.2)', color: '#c084fc' }}
              >
                Upcoming
              </span>
            )}
          </div>

          <div
            className="text-2xl md:text-3xl font-black mb-1"
            style={{ fontFamily: 'var(--font-mono)', color: `${event.color}80` }}
          >
            {event.year}
          </div>

          <h3
            className="text-base md:text-xl font-bold mb-2 md:mb-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            {event.title}
          </h3>

          <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: 'var(--text-muted)' }}>
            {event.description}
          </p>

          <button className="inline-flex items-center gap-1 text-xs md:text-sm font-medium group" style={{ color: event.color }}>
            Learn more
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}

function TimelineEventMobile({ event, index }: { event: typeof events[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className="flex gap-4 mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {/* Left: year + dot */}
      <div className="flex flex-col items-center gap-2 pt-1">
        <div
          className="w-3 h-3 rounded-full flex-shrink-0"
          style={{ background: event.color, boxShadow: `0 0 10px ${event.color}` }}
        />
        <div className="w-px flex-1" style={{ background: `${event.color}30` }} />
      </div>

      {/* Right: card */}
      <div
        className="flex-1 p-4 rounded-xl mb-2"
        style={{
          background: 'var(--surface)',
          border: `1px solid ${event.color}25`,
        }}
      >
        <div className="flex items-center justify-between mb-2 flex-wrap gap-1.5">
          <div
            className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
            style={{ background: `${event.color}15`, color: event.color }}
          >
            {event.category}
          </div>
          {event.upcoming && (
            <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#c084fc' }}>
              Upcoming
            </span>
          )}
        </div>
        <div
          className="text-xl font-black mb-0.5"
          style={{ fontFamily: 'var(--font-mono)', color: `${event.color}70` }}
        >
          {event.year}
        </div>
        <h3 className="text-sm font-bold mb-1.5" style={{ color: 'var(--text)' }}>{event.title}</h3>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{event.description}</p>
      </div>
    </motion.div>
  )
}

export function EventsTimeline() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-5 sm:mb-6"
          style={{
            background: 'rgba(0,107,189,0.12)',
            border: '1px solid rgba(0,107,189,0.3)',
            color: '#4da6ff',
          }}
        >
          <Calendar size={12} />
          Our Journey
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-4"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', color: 'var(--text)' }}
        >
          Events &{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #4da6ff, #006bbd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Timeline
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-lg max-w-xl mx-auto px-4"
          style={{ color: 'var(--text-muted)' }}
        >
          A journey of innovation, collaboration, and excellence across the years.
        </motion.p>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden md:block relative">
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,107,189,0.4), transparent)' }}
        />
        {events.map((event, i) => (
          <TimelineEventDesktop key={event.title} event={event} index={i} />
        ))}
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden">
        {events.map((event, i) => (
          <TimelineEventMobile key={event.title} event={event} index={i} />
        ))}
      </div>
    </div>
  )
}