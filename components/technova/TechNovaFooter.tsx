'use client'

import Link from 'next/link'
import { Zap, Mail } from 'lucide-react'

export function TechNovaFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: '#03010a',
        borderTop: '1px solid rgba(168,85,247,0.15)',
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #a855f7, transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap size={20} style={{ color: '#a855f7' }} />
              <span
                className="text-2xl font-black"
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
            </div>
            <p style={{ color: 'rgba(168,85,247,0.6)', fontSize: 14 }}>
              Inter-University Mega Hackathon by IEEE Student Branch
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/technova" style={{ color: 'rgba(240,232,255,0.5)' }} className="hover:text-white transition-colors">
              Overview
            </Link>
            <Link href="/technova/ai-dominion" style={{ color: 'rgba(240,232,255,0.5)' }} className="hover:text-white transition-colors">
              Clusters
            </Link>
            <a href="mailto:technova@neduet.edu.pk" className="flex items-center gap-1 hover:text-white transition-colors" style={{ color: 'rgba(240,232,255,0.5)' }}>
              <Mail size={13} /> Contact
            </a>
            <Link href="/" style={{ color: '#c084fc' }} className="hover:text-white transition-colors">
              ← IEEE SB
            </Link>
          </div>
        </div>

        <div
          className="mt-8 pt-6 text-xs text-center"
          style={{ borderTop: '1px solid rgba(168,85,247,0.1)', color: 'rgba(168,85,247,0.4)' }}
        >
          © {new Date().getFullYear()} TechNova 2026 — IEEE Student Branch, NED University
        </div>
      </div>
    </footer>
  )
}
