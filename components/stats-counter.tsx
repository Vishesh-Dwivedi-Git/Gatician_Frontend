"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface StatsCounterProps {
  end: number
  suffix?: string
  label: string
}

export default function StatsCounter({ end, suffix = "", label }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<null | Element>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000 // ms
      const step = end / (duration / 16) // 60fps

      const timer = setInterval(() => {
        start += step
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [end, isInView])

  // Format large numbers with commas
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return (
    <div ref={ref} >
      <div className="text-3xl md:text-4xl font-bold mb-2">
        {formattedCount}
        {suffix}
      </div>
      <div className="text-lg text-yellow font-medium">{label}</div>
    </div>
  )
}
