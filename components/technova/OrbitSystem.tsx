'use client'

// ─────────────────────────────────────────────────────────────────────────────
// ORBIT DESIGN — 100% CSS animation, zero Framer on the orbiting nodes
// ─────────────────────────────────────────────────────────────────────────────
//
// WHY pure CSS:
//   Framer Motion's `whileHover` resets `transform` on the element it's on.
//   If that element also has a CSS counter-rotation running, Framer overwrites
//   it on hover, causing jitter and duplicate orbit lines.
//
// HOW it works:
//   1. One parent div at canvas centre rotates clockwise via CSS keyframe.
//   2. Each child is offset by (cos(angle)*R, sin(angle)*R) from that centre.
//   3. Each child counter-rotates via CSS keyframe at identical duration.
//      → spacing is permanently locked, icons stay upright, zero drift.
//   4. Hover = CSS :hover scale(1.1) only — never touches rotate or translate.
//
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'   // only used for centre node pulse + mobile cards

const R        = 280   // orbit radius px
const CX       = 400   // canvas centre x
const CY       = 400   // canvas centre y
const SIZE     = 800   // canvas px
const DURATION = 36    // seconds per revolution

const CLUSTERS = [
  { href: '/technova/ai-dominion',    label: 'AI Dominion',      icon: '🤖', color: '#00d4ff', desc: 'Agentic AI • GenAI • ML',   deg: -90        },
  { href: '/technova/builders-arena', label: "Builder's Arena",  icon: '🏗️', color: '#f59e0b', desc: 'Full Stack • UI/UX',         deg: -90 + 72   },
  { href: '/technova/data-warfare',   label: 'Data Warfare',     icon: '📊', color: '#10b981', desc: 'Analytics • Speed Prog.',    deg: -90 + 144  },
  { href: '/technova/immersive-zone', label: 'Immersive Zone',   icon: '🎮', color: '#f43f5e', desc: 'Game Dev • eSports',         deg: -90 + 216  },
  { href: '/technova/fyp-expo',       label: 'FYP Expo',         icon: '🏆', color: '#8b5cf6', desc: 'Final Year Projects',        deg: -90 + 288  },
]

// Pre-compute x/y offsets from centre — verified: all exactly R px from origin
const NODES = CLUSTERS.map(c => {
  const rad = (c.deg * Math.PI) / 180
  return { ...c, ox: Math.cos(rad) * R, oy: Math.sin(rad) * R }
})

// ── CSS injected once ──────────────────────────────────────────────────────
const CSS = `
  @keyframes orbit-cw  { to { transform: rotate( 360deg); } }
  @keyframes orbit-ccw { to { transform: rotate(-360deg); } }

  .orbit-ring {
    animation: orbit-cw ${DURATION}s linear infinite;
    transform-origin: 0px 0px;   /* pivots at its own top-left = canvas centre */
  }
  .orbit-node-wrap {
    position: absolute;
    width: 0; height: 0;
    transform-origin: 0px 0px;
    animation: orbit-ccw ${DURATION}s linear infinite;
  }
  .orbit-node {
    position: absolute;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    /* Hover: scale ONLY — never touches rotate/translate so orbit stays clean */
    transition: filter 0.25s ease;
  }
  .orbit-node:hover .orbit-circle {
    transform: scale(1.12);
    box-shadow: var(--node-hover-shadow);
  }
  .orbit-circle {
    width: 78px; height: 78px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease;
    position: relative;
    will-change: transform;
  }
  .orbit-label {
    margin-top: 10px;
    text-align: center;
    pointer-events: none;
    width: 110px;
  }
  .orbit-label-name {
    font-size: 11px;
    font-weight: 700;
    font-family: var(--font-display);
    white-space: nowrap;
    letter-spacing: 0.02em;
  }
  .orbit-label-desc {
    font-size: 9px;
    color: rgba(240,232,255,0.36);
    margin-top: 2px;
    line-height: 1.4;
  }
`

export function OrbitSystem() {
  // Inject CSS once on mount
  useEffect(() => {
    if (document.getElementById('orbit-css')) return
    const s = document.createElement('style')
    s.id = 'orbit-css'
    s.textContent = CSS
    document.head.appendChild(s)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

      {/* ══ DESKTOP ════════════════════════════════════════════════════════ */}
      <div
        className="hidden lg:block"
        style={{ width: SIZE, height: SIZE, position: 'relative', overflow: 'visible' }}
      >
        {/* SVG rings — static, geometrically perfect */}
        <svg
          width={SIZE} height={SIZE}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'visible' }}
        >
          {/* Outer halo */}
          <circle cx={CX} cy={CY} r={R + 60} fill="none" stroke="rgba(168,85,247,0.05)" strokeWidth="1" />
          {/* Main track */}
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(168,85,247,0.20)" strokeWidth="1" strokeDasharray="6 5" />
          {/* Inner ring */}
          <circle cx={CX} cy={CY} r={R - 45} fill="none" stroke="rgba(168,85,247,0.06)" strokeWidth="1" />
        </svg>

        {/* Spinning arc accent — separate SVG, won't affect nodes */}
        <motion.svg
          width={SIZE} height={SIZE}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          transformOrigin={`${CX}px ${CY}px`}
        >
          <circle
            cx={CX} cy={CY} r={R + 8}
            fill="none"
            stroke="rgba(168,85,247,0.32)" strokeWidth="2"
            strokeDasharray={`${(R + 8) * Math.PI * 0.5} ${(R + 8) * Math.PI * 1.5}`}
          />
        </motion.svg>

        {/* Centre TechNova node */}
        <motion.div
          style={{
            position: 'absolute', left: CX, top: CY,
            transform: 'translate(-50%,-50%)',
            zIndex: 10, width: 120, height: 120, borderRadius: '50%',
            background: 'radial-gradient(circle at 40% 35%, rgba(168,85,247,0.44), rgba(124,58,237,0.10) 70%)',
            border: '2px solid rgba(168,85,247,0.52)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          animate={{ boxShadow: ['0 0 20px rgba(168,85,247,0.15)','0 0 55px rgba(168,85,247,0.50)','0 0 20px rgba(168,85,247,0.15)'] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div style={{ textAlign: 'center' }}>
            <motion.div
              style={{ fontSize: 28, marginBottom: 3 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            >⚡</motion.div>
            <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#c084fc', fontFamily: 'var(--font-display)' }}>
              TechNova
            </div>
          </div>
        </motion.div>

        {/* ── ORBIT RING — rotates as one unit ──────────────────────────── */}
        {/*   left/top at canvas centre; transform-origin 0 0 = pivots here  */}
        <div
          className="orbit-ring"
          style={{ position: 'absolute', left: CX, top: CY, width: 0, height: 0, zIndex: 5 }}
        >
          {NODES.map(node => (
            <div
              key={node.href}
              className="orbit-node-wrap"
              style={{ left: node.ox, top: node.oy }}
            >
              {/*
                Link wraps the visual — pointer-events fully enabled here.
                No Framer on this element so counter-rotation is never interrupted.
              */}
              <Link
                href={node.href}
                className="orbit-node"
                style={{ '--node-hover-shadow': `0 0 32px ${node.color}70` } as React.CSSProperties}
              >
                <div
                  className="orbit-circle"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, ${node.color}28, ${node.color}07)`,
                    border: `2px solid ${node.color}65`,
                    boxShadow: `0 0 20px ${node.color}30`,
                  }}
                >
                  <span style={{ fontSize: 26 }}>{node.icon}</span>
                </div>
                <div className="orbit-label">
                  <div
                    className="orbit-label-name"
                    style={{ color: node.color, textShadow: `0 0 10px ${node.color}80` }}
                  >
                    {node.label}
                  </div>
                  <div className="orbit-label-desc">{node.desc}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ══ MOBILE CARDS ════════════════════════════════════════════════════ */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-2">
        {CLUSTERS.map((c, i) => (
          <motion.div
            key={c.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
          >
            <Link href={c.href}>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="p-5 rounded-2xl flex items-center gap-4"
                style={{ background: `${c.color}09`, border: `1px solid ${c.color}30`, boxShadow: `0 4px 20px ${c.color}10` }}
              >
                <div style={{
                  width: 54, height: 54, borderRadius: 14, flexShrink: 0, fontSize: 24,
                  background: `${c.color}18`, border: `1px solid ${c.color}35`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 0 14px ${c.color}25`,
                }}>{c.icon}</div>
                <div>
                  <h3 className="font-bold mb-0.5 text-sm" style={{ fontFamily: 'var(--font-display)', color: c.color }}>{c.label}</h3>
                  <p style={{ color: 'rgba(240,232,255,0.44)', fontSize: 11, lineHeight: 1.5 }}>{c.desc}</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}