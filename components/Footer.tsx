'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Twitter, Mail, MapPin } from 'lucide-react'

const stars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  delay: Math.random() * 3,
}))

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
      role="contentinfo"
    >
      {/* Animated stars */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        {stars.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 3 + s.delay, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
          />
        ))}
      </div>

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-base font-black"
                style={{ background: 'linear-gradient(135deg, #006bbd, #003d6e)', boxShadow: '0 0 20px rgba(0,107,189,0.4)' }}
              >
                ⚡
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
                  IEEE Student Branch
                </h3>
                <p className="text-[10px] sm:text-xs" style={{ color: 'var(--text-muted)' }}>
                  Institute of Business &amp; Management
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-sm" style={{ color: 'var(--text-muted)' }}>
              Empowering the next generation of engineers and technologists through innovation,
              collaboration, and world-class events.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                    minHeight: '32px',
                    minWidth: '32px',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,107,189,0.2)'
                    ;(e.currentTarget as HTMLElement).style.color = '#4da6ff'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold text-xs uppercase tracking-widest mb-3 sm:mb-4"
              style={{ color: 'var(--primary-light, #4da6ff)' }}
            >
              Navigation
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/events', label: 'Events' },
                { href: '/team', label: 'Our Team' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/technova', label: 'TechNova 2026' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-xs uppercase tracking-widest mb-3 sm:mb-4"
              style={{ color: 'var(--primary-light, #4da6ff)' }}
            >
              Contact
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={13} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--primary-light)' }} />
                <a
                  href="mailto:ieee@neduet.edu.pk"
                  className="text-xs sm:text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--text-muted)' }}
                >
                  ieee@neduet.edu.pk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--primary-light)' }} />
                <span className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>
                  Institute of Business &amp; Management, Karachi, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-8 sm:mt-12 pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-[10px] sm:text-xs text-center sm:text-left" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} IEEE Student Branch — Institute of Business &amp; Management. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs" style={{ color: 'var(--text-muted)' }}>
            Built by Moiz Ali Siddiqui
          </p>
        </div>
      </div>
    </footer>
  )
}