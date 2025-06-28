// components/NetworkBackground.tsx
'use client'

import { useEffect, useRef, useCallback } from 'react'

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return null

    const ctx = canvas.getContext('2d')
    if (!ctx) return null

    return { canvas, ctx }
  }, [])

  useEffect(() => {
    const canvasData = initializeCanvas()
    if (!canvasData) return

    const { canvas, ctx } = canvasData

    // Helper to resize
    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateSize()

    type ParticleType = {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      update(): void
      draw(): void
    }

    const particles: ParticleType[] = []
    const COUNT = 80
    const MAX_DIST = 150

    // Particle class with proper canvas/ctx closure
    class Particle implements ParticleType {
      x = Math.random() * canvas.width
      y = Math.random() * canvas.height
      size = Math.random() * 1.5 + 1
      speedX = (Math.random() - 0.5) * 0.8
      speedY = (Math.random() - 0.5) * 0.8
      color = `rgba(${Math.floor(Math.random() * 80 + 100)},${Math.floor(Math.random() * 100 + 120)},${Math.floor(Math.random() * 200 + 50)},0.7)`

      update() {
        this.x += this.speedX
        this.y += this.speedY
        
        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.speedX *= -1
        if (this.y <= 0 || this.y >= canvas.height) this.speedY *= -1
        
        // Keep particles within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    const init = () => {
      particles.length = 0
      for (let i = 0; i < COUNT; i++) {
        particles.push(new Particle())
      }
    }

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const dist = Math.hypot(dx, dy)
          
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.5
            ctx.strokeStyle = `rgba(139,92,246,${opacity})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[b].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    let rafId: number
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      
      connect()
    }

    const handleResize = () => {
      updateSize()
      init()
    }

    // Event listeners
    window.addEventListener('resize', handleResize, { passive: true })
    
    // Initialize and start
    init()
    animate()

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [initializeCanvas])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  )
}