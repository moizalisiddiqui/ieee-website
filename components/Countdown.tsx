'use client'

import { useEffect, useState } from 'react'

// TechNova 2026 target date
const TARGET = new Date('2026-04-15T09:00:00').getTime()

interface TimeUnit {
  value: string
  label: string
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function Countdown() {
  const [units, setUnits] = useState<TimeUnit[]>([
    { value: '00', label: 'Days' },
    { value: '00', label: 'Hours' },
    { value: '00', label: 'Minutes' },
    { value: '00', label: 'Seconds' },
  ])

  useEffect(() => {
    const update = () => {
      const diff = TARGET - Date.now()
      if (diff <= 0) {
        setUnits([
          { value: '00', label: 'Days' },
          { value: '00', label: 'Hours' },
          { value: '00', label: 'Minutes' },
          { value: '00', label: 'Seconds' },
        ])
        return
      }
      const days = Math.floor(diff / 86400000)
      const hours = Math.floor((diff % 86400000) / 3600000)
      const minutes = Math.floor((diff % 3600000) / 60000)
      const seconds = Math.floor((diff % 60000) / 1000)
      setUnits([
        { value: pad(days), label: 'Days' },
        { value: pad(hours), label: 'Hours' },
        { value: pad(minutes), label: 'Minutes' },
        { value: pad(seconds), label: 'Seconds' },
      ])
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex gap-2 sm:gap-4 flex-wrap justify-center" role="timer" aria-label="Countdown to TechNova 2026">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-2 sm:gap-4">
          <div className="text-center">
            <div
              className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-black"
              style={{
                background: 'rgba(168,85,247,0.1)',
                border: '1px solid rgba(168,85,247,0.3)',
                fontFamily: 'var(--font-mono)',
                color: '#c084fc',
                boxShadow: '0 0 20px rgba(168,85,247,0.2)',
              }}
            >
              {u.value}
            </div>
            <p className="text-xs mt-2 uppercase tracking-widest" style={{ color: 'rgba(168,85,247,0.7)' }}>
              {u.label}
            </p>
          </div>
          {i < 3 && (
            <span className="text-xl sm:text-2xl font-black mb-6" style={{ color: 'rgba(168,85,247,0.5)' }}>:</span>
          )}
        </div>
      ))}
    </div>
  )
}