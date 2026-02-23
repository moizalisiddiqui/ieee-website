'use client'

import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  onClick?: () => void
}

export function GlassCard({ children, className = '', hover = true, glow = false, onClick }: GlassCardProps) {
  return (
    <motion.div
      className={`rounded-2xl ${className}`}
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid var(--glass-border)',
        boxShadow: glow ? '0 0 30px var(--accent-glow)' : '0 4px 24px rgba(0,0,0,0.2)',
      }}
      whileHover={hover ? { y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.3), 0 0 30px var(--accent-glow)' } : undefined}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </motion.div>
  )
}
