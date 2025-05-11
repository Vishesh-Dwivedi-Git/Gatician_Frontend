"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function WorldMapAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Draw world map (simplified)
    const drawMap = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw simplified world map
      ctx.fillStyle = "rgba(255, 204, 0, 0.2)"

      // Draw continents as simple shapes
      // Asia
      ctx.beginPath()
      ctx.ellipse(canvas.width * 0.7, canvas.height * 0.4, canvas.width * 0.15, canvas.height * 0.15, 0, 0, Math.PI * 2)
      ctx.fill()

      // Europe
      ctx.beginPath()
      ctx.ellipse(canvas.width * 0.5, canvas.height * 0.3, canvas.width * 0.08, canvas.height * 0.08, 0, 0, Math.PI * 2)
      ctx.fill()

      // Africa
      ctx.beginPath()
      ctx.ellipse(canvas.width * 0.5, canvas.height * 0.55, canvas.width * 0.1, canvas.height * 0.15, 0, 0, Math.PI * 2)
      ctx.fill()

      // North America
      ctx.beginPath()
      ctx.ellipse(
        canvas.width * 0.25,
        canvas.height * 0.35,
        canvas.width * 0.12,
        canvas.height * 0.12,
        0,
        0,
        Math.PI * 2,
      )
      ctx.fill()

      // South America
      ctx.beginPath()
      ctx.ellipse(
        canvas.width * 0.3,
        canvas.height * 0.65,
        canvas.width * 0.08,
        canvas.height * 0.12,
        0,
        0,
        Math.PI * 2,
      )
      ctx.fill()

      // Australia
      ctx.beginPath()
      ctx.ellipse(canvas.width * 0.8, canvas.height * 0.7, canvas.width * 0.06, canvas.height * 0.06, 0, 0, Math.PI * 2)
      ctx.fill()

      // Draw connection lines
      drawConnections()
    }

    // Connection points
    const points = [
      { x: 0.25, y: 0.35 }, // North America
      { x: 0.3, y: 0.65 }, // South America
      { x: 0.5, y: 0.3 }, // Europe
      { x: 0.5, y: 0.55 }, // Africa
      { x: 0.7, y: 0.4 }, // Asia
      { x: 0.8, y: 0.7 }, // Australia
    ]

    // Active connections
    const connections: { from: number; to: number; progress: number; speed: number }[] = []

    // Initialize some random connections
    for (let i = 0; i < 8; i++) {
      const from = Math.floor(Math.random() * points.length)
      let to = Math.floor(Math.random() * points.length)
      while (to === from) {
        to = Math.floor(Math.random() * points.length)
      }

      connections.push({
        from,
        to,
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.003,
      })
    }

    // Draw connections
    const drawConnections = () => {
      if (!ctx) return

      // Update and draw connections
      for (let i = 0; i < connections.length; i++) {
        const conn = connections[i]

        // Update progress
        conn.progress += conn.speed
        if (conn.progress > 1) {
          // Reset connection to a new random path
          conn.from = conn.to
          let newTo = Math.floor(Math.random() * points.length)
          while (newTo === conn.from) {
            newTo = Math.floor(Math.random() * points.length)
          }
          conn.to = newTo
          conn.progress = 0
          conn.speed = 0.002 + Math.random() * 0.003
        }

        const fromPoint = points[conn.from]
        const toPoint = points[conn.to]

        // Calculate current position
        const x = fromPoint.x + (toPoint.x - fromPoint.x) * conn.progress
        const y = fromPoint.y + (toPoint.y - fromPoint.y) * conn.progress

        // Draw moving dot
        ctx.beginPath()
        ctx.arc(x * canvas.width, y * canvas.height, 3, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 204, 0, 0.8)"
        ctx.fill()

        // Draw path
        ctx.beginPath()
        ctx.moveTo(fromPoint.x * canvas.width, fromPoint.y * canvas.height)
        ctx.lineTo(x * canvas.width, y * canvas.height)
        ctx.strokeStyle = "rgba(255, 204, 0, 0.3)"
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    // Animation loop
    let animationId: number

    const animate = () => {
      drawMap()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Global Retail Network
      </motion.div>
    </div>
  )
}
