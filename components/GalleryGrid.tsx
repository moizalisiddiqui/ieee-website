'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { X, ZoomIn } from 'lucide-react'

const galleryItems = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  title: ['TechNova 2024', 'AI Summit', 'Code Sprint', 'Workshop', 'Networking Event', 'Award Ceremony'][i % 6],
  category: ['Hackathon', 'Conference', 'Competition', 'Workshop', 'Networking', 'Ceremony'][i % 6],
  color: ['#006bbd', '#a855f7', '#10b981', '#f59e0b', '#f43f5e', '#06b6d4'][i % 6],
  height: [260, 200, 300, 220, 280, 240][i % 6],
}))

export function GalleryGrid() {
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-4"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', color: 'var(--text)' }}
        >
          Our{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #4da6ff, #006bbd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Gallery
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-sm sm:text-base px-4"
          style={{ color: 'var(--text-muted)' }}
        >
          Moments captured from our events, workshops, and community gatherings.
        </motion.p>
      </div>

      {/* Masonry Grid — responsive columns */}
      <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-4">
        {galleryItems.map((item, i) => (
          <AnimatedSection key={item.id} delay={i * 0.03} className="break-inside-avoid mb-3 sm:mb-4">
            <motion.div
              className="relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group"
              style={{ height: Math.max(item.height * 0.7, 120) }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(item)}
              role="button"
              aria-label={`View ${item.title}`}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(item)}
            >
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)` }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center text-4xl sm:text-6xl font-black opacity-10"
                style={{ color: item.color, fontFamily: 'var(--font-display)' }}
              >
                {item.title[0]}
              </div>

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                style={{ background: 'rgba(0,0,0,0.5)' }}
              >
                <ZoomIn size={22} style={{ color: '#fff' }} />
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
              >
                <div className="text-[9px] sm:text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: item.color }}>
                  {item.category}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">{item.title}</div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.9)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl sm:max-w-3xl rounded-2xl sm:rounded-3xl overflow-hidden mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full h-56 sm:h-96 flex items-center justify-center text-6xl sm:text-8xl font-black opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${selected.color}30, ${selected.color}60)`,
                  color: selected.color,
                  fontFamily: 'var(--font-display)',
                }}
              >
                {selected.title[0]}
              </div>

              <div
                className="p-4 sm:p-6"
                style={{ background: 'var(--surface)', borderTop: `1px solid ${selected.color}33` }}
              >
                <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: selected.color }}>
                  {selected.category}
                </div>
                <h3 className="text-lg sm:text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
                  {selected.title}
                </h3>
              </div>

              <button
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(0,0,0,0.6)', color: '#fff' }}
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}