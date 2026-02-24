'use client'

import React, { useEffect, useRef } from 'react'

export const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let stars: any[] = []
    
    // Config
    const starCount = 160 
    
    const initStars = () => {
      stars = []
      const width = window.innerWidth
      const height = window.innerHeight
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.4,
          depth: Math.random(), // 0 to 1 for parallax
          brightness: Math.random(),
          pulseSpeed: 0.005 + Math.random() * 0.01,
          drift: Math.random() * 0.02
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const scrollY = window.scrollY
      
      stars.forEach(star => {
        // Parallax Logic: Lower depth = further away = slower movement
        const parallaxOffset = scrollY * (star.depth * 0.12)
        let yPos = (star.y - parallaxOffset) % canvas.height
        if (yPos < 0) yPos += canvas.height

        // Twinkle Logic for Layer 3 (depth > 0.8)
        if (star.depth > 0.8) {
          star.brightness += star.pulseSpeed
          if (star.brightness > 1 || star.brightness < 0.3) star.pulseSpeed *= -1
        }

        ctx.beginPath()
        ctx.arc(star.x, yPos, star.size, 0, Math.PI * 2)
        // Using a soft off-white for stars
        ctx.fillStyle = `rgba(232, 237, 245, ${star.depth > 0.8 ? star.brightness : star.brightness * 0.4})`
        ctx.fill()

        // Very slow vertical drift
        star.y += star.drift
      })
      animationFrameId = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Base Deep Blue - Uses CSS Variable for dynamic shifting */}
      <div 
        className="absolute inset-0 transition-colors duration-1000"
        style={{ background: 'var(--background)' }}
      />
      
      {/* Subtle Nebula/Radial Glow - Automatically follows theme --primary */}
      <div 
        className="absolute inset-0 opacity-40 transition-all duration-1000"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, var(--primary-dark) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, var(--primary-dark) 0%, transparent 50%)
          `,
          filter: 'blur(100px)'
        }}
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 block"
      />
    </div>
  )
}