'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

// ─── Route → friendly name + theme colour ─────────────────────────────────
const ROUTES: Record<string, { label: string; color: string }> = {
  '/':                        { label: 'IEEE Student Branch',  color: '#006bbd' },
  '/events':                  { label: 'Events & Timeline',    color: '#006bbd' },
  '/team':                    { label: 'Our Team',             color: '#006bbd' },
  '/gallery':                 { label: 'Gallery',              color: '#006bbd' },
  '/technova':                { label: 'TechNova 2026',        color: '#a855f7' },
  '/technova/ai-dominion':    { label: 'AI Dominion',          color: '#00d4ff' },
  '/technova/builders-arena': { label: "Builder's Arena",      color: '#f59e0b' },
  '/technova/data-warfare':   { label: 'Data Warfare',         color: '#10b981' },
  '/technova/immersive-zone': { label: 'Immersive Zone',       color: '#f43f5e' },
  '/technova/fyp-expo':       { label: 'FYP Innovation Expo',  color: '#8b5cf6' },
}

function resolve(path: string) {
  if (ROUTES[path]) return ROUTES[path]
  if (path.startsWith('/technova')) return { label: 'TechNova 2026', color: '#a855f7' }
  return { label: 'IEEE Student Branch', color: '#006bbd' }
}

// ─── Shared mutable state outside React — avoids closure-stale issues ─────
// A click on any <a> that matches our routes fires BEFORE pathname changes.
// We store the destination here so when the preloader renders it already
// knows the correct page name.
let pendingPath = ''

function setPending(path: string) { pendingPath = path }
function flushPending()           { const p = pendingPath; pendingPath = ''; return p }

export function Preloader() {
  const pathname = usePathname()

  // The label+color to show — starts as current page
  const [cfg, setCfg] = useState(() => resolve(pathname))
  const [visible, setVisible]   = useState(true)
  const [renderKey, setRenderKey] = useState(0)

  // ── Intercept ALL <a> clicks to capture the destination path ────────────
  const handleAnchorClick = useCallback((e: MouseEvent) => {
    const anchor = (e.target as Element).closest('a')
    if (!anchor) return
    const href = anchor.getAttribute('href') ?? ''
    // Only internal routes (start with /)
    if (href.startsWith('/')) {
      setPending(href)
      // Immediately update cfg so it's ready before pathname changes
      setCfg(resolve(href))
      setRenderKey(k => k + 1)
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleAnchorClick, true) // capture phase
    return () => document.removeEventListener('click', handleAnchorClick, true)
  }, [handleAnchorClick])

  // ── Also react to pathname changes (catches back/forward navigation) ────
  useEffect(() => {
    const pending = flushPending()
    // If we already set cfg from the click handler, pending will be empty here
    // and pathname is now the real destination — use it as confirmation
    if (!pending) {
      setCfg(resolve(pathname))
      setRenderKey(k => k + 1)
      setVisible(true)
    }
    const t = setTimeout(() => setVisible(false), 1000)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={renderKey}
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          {/* Ambient colour tint */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at center, ${cfg.color}1c 0%, transparent 65%)` }}
          />

          <div className="relative flex flex-col items-center gap-8">
            {/* Spinner */}
            <div className="relative w-24 h-24">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{ borderTopColor: cfg.color, borderRightColor: `${cfg.color}50` }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-3 rounded-full border-2 border-transparent"
                style={{ borderBottomColor: cfg.color, borderLeftColor: `${cfg.color}50` }}
                animate={{ rotate: -360 }}
                transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-8 rounded-full"
                style={{ background: cfg.color }}
                animate={{ boxShadow: [`0 0 6px ${cfg.color}`, `0 0 24px ${cfg.color}`, `0 0 6px ${cfg.color}`] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Text */}
            <div className="text-center">
              {/* Small static label */}
              <p
                className="text-xs uppercase tracking-[0.35em] font-medium"
                style={{ color: `${cfg.color}90` }}
              >
                Loading...
              </p>
              {/* Large dynamic page name — NO word "Loading" here */}
              <h2
                className="text-2xl font-bold mt-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: cfg.color,
                  textShadow: `0 0 28px ${cfg.color}55`,
                  letterSpacing: '-0.01em',
                }}
              >
                {cfg.label}
              </h2>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}