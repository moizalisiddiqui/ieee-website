'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Menu, X, ArrowLeft } from 'lucide-react'

const links = [
  { href: '/technova', label: 'Overview' },
  { href: '/technova/ai-dominion', label: 'AI Dominion' },
  { href: "/technova/builders-arena", label: "Builder's Arena" },
  { href: '/technova/data-warfare', label: 'Data Warfare' },
  { href: '/technova/immersive-zone', label: 'Immersive Zone' },
  { href: '/technova/fyp-expo', label: 'FYP Expo' },
]

export function TechNovaNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setMobileOpen(false), [pathname])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div
          className="mx-4 mt-4 rounded-2xl transition-all duration-500"
          style={{
            background: scrolled ? 'rgba(3,1,10,0.9)' : 'rgba(3,1,10,0.5)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: scrolled ? '1px solid rgba(168,85,247,0.3)' : '1px solid rgba(168,85,247,0.1)',
            boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.6)' : 'none',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-1 text-xs font-medium transition-colors hover:text-white"
                style={{ color: 'rgba(168,85,247,0.7)' }}
              >
                <ArrowLeft size={12} /> IEEE SB
              </Link>
              <div className="w-px h-4" style={{ background: 'rgba(168,85,247,0.3)' }} />
              <Link href="/technova" className="flex items-center gap-2 group">
                <Zap size={16} style={{ color: '#a855f7' }} />
                <span
                  className="font-black text-lg"
                  style={{
                    fontFamily: 'var(--font-display)',
                    background: 'linear-gradient(135deg, #c084fc, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  TechNova 2026
                </span>
              </Link>
            </div>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300"
                  style={{
                    color: pathname === link.href ? '#c084fc' : 'rgba(240,232,255,0.5)',
                  }}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {pathname === link.href && (
                    <motion.span
                      layoutId="technova-nav"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(168,85,247,0.15)' }}
                      transition={{ type: 'spring', bounce: 0.25 }}
                    />
                  )}
                  <span className="relative z-10 hover:text-white transition-colors">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA + mobile */}
            <div className="flex items-center gap-3">
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  boxShadow: '0 0 20px rgba(168,85,247,0.3)',
                }}
              >
                Register
              </a>
              <button
                className="lg:hidden p-2 rounded-lg"
                style={{ color: 'rgba(168,85,247,0.7)' }}
                onClick={() => setMobileOpen((o) => !o)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute top-24 left-4 right-4 rounded-2xl p-6 flex flex-col gap-2"
              style={{
                background: 'rgba(3,1,10,0.95)',
                border: '1px solid rgba(168,85,247,0.2)',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-sm font-medium"
                  style={{
                    color: pathname === link.href ? '#c084fc' : 'rgba(240,232,255,0.7)',
                    background: pathname === link.href ? 'rgba(168,85,247,0.1)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-center text-white"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
              >
                Register Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
