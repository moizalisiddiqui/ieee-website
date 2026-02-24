'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/team', label: 'Team' },
  { href: '/gallery', label: 'Gallery' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isTechNova = pathname.startsWith('/technova')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  if (isTechNova) return null

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div
          className="mx-4 mt-4 rounded-2xl transition-all duration-500"
          style={{
            background: scrolled
              ? 'rgba(10, 15, 26, 0.85)'
              : 'rgba(10, 15, 26, 0.4)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: scrolled
              ? '1px solid rgba(0,107,189,0.3)'
              : '1px solid rgba(255,255,255,0.06)',
            boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
            
            {/* 1. Left: Logo Area */}
            <div className="flex-1 flex justify-start">
              <Link href="/" className="flex items-center gap-3 group" aria-label="IEEE Student Branch Home">
                {/* LOGO REPLACED HERE */}
                <div className="relative w-10 h-10 flex items-center justify-center">
                   {/* Optional Glow Effect behind Logo */}
                  <div 
                    className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                  />
                  <img 
                    src="/IEEE.svg" // Ensure you have this file in your /public folder
                    alt="IEEE Logo"
                    className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <span
                  className="font-bold text-lg hidden lg:block"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
                >
                  IEEE IoBM <span style={{ color: '#4da6ff' }}>Student Branch</span>
                </span>
              </Link>
            </div>

            {/* 2. Middle: Desktop Links */}
            <div className="hidden md:flex items-center justify-center gap-1 flex-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group"
                  style={{
                    color: pathname === link.href ? '#4da6ff' : 'var(--text-muted, #7a8ba8)',
                  }}
                >
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(0,107,189,0.15)' }}
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* 3. Right: CTA */}
            <div className="flex-1 flex justify-end items-center gap-3">
              <Link
                href="/technova"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  boxShadow: '0 0 20px rgba(168,85,247,0.3)',
                  color: '#fff',
                }}
              >
                <Zap size={14} />
                TechNova 2026
              </Link>

              <button
                className="md:hidden p-2 rounded-lg transition-colors"
                style={{ color: 'var(--text-muted)' }}
                onClick={() => setMobileOpen((o) => !o)}
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
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute top-24 left-4 right-4 rounded-2xl p-6 flex flex-col gap-3"
              style={{
                background: 'rgba(10,15,26,0.95)',
                border: '1px solid rgba(0,107,189,0.3)',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-base font-medium transition-all"
                  style={{
                    color: pathname === link.href ? '#4da6ff' : 'var(--text)',
                    background: pathname === link.href ? 'rgba(0,107,189,0.1)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/technova"
                className="px-4 py-3 rounded-xl text-base font-semibold text-center mt-2"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  color: '#fff',
                }}
              >
                ⚡ TechNova 2026
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}