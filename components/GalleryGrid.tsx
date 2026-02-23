'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { X, ZoomIn } from 'lucide-react'

// Placeholder gallery items (replace src with real images)
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
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black mb-4"
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
          style={{ color: 'var(--text-muted)' }}
        >
          Moments captured from our events, workshops, and community gatherings.
        </motion.p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {galleryItems.map((item, i) => (
          <AnimatedSection key={item.id} delay={i * 0.04} className="break-inside-avoid mb-4">
            <motion.div
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{ height: item.height }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(item)}
              role="button"
              aria-label={`View ${item.title}`}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(item)}
            >
              {/* Placeholder image */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
                }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center text-6xl font-black opacity-10"
                style={{ color: item.color, fontFamily: 'var(--font-display)' }}
              >
                {item.title[0]}
              </div>

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                style={{ background: 'rgba(0,0,0,0.5)' }}
              >
                <ZoomIn size={28} style={{ color: '#fff' }} />
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                  style={{ color: item.color }}
                >
                  {item.category}
                </div>
                <div className="text-sm font-bold text-white">{item.title}</div>
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
              className="relative max-w-3xl w-full rounded-3xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full h-96 flex items-center justify-center text-8xl font-black opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${selected.color}30, ${selected.color}60)`,
                  color: selected.color,
                  fontFamily: 'var(--font-display)',
                }}
              >
                {selected.title[0]}
              </div>

              <div
                className="p-6"
                style={{ background: 'var(--surface)', borderTop: `1px solid ${selected.color}33` }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: selected.color }}
                >
                  {selected.category}
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
                >
                  {selected.title}
                </h3>
              </div>

              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(0,0,0,0.6)', color: '#fff' }}
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
