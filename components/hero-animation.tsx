"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm"
    >
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-yellow-500 rounded-lg"
        animate={{
          x: [0, 100, 200, 100, 0],
          y: [0, 50, 100, 150, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-yellow-300 rounded-full"
        animate={{
          x: [0, -50, -100, -50, 0],
          y: [0, -50, -100, -50, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-600 rounded-xl"
        animate={{
          rotate: [0, 45, 0, -45, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      <motion.div
        className="absolute bottom-10 left-20 w-24 h-24 bg-yellow-400 rounded-lg"
        animate={{
          x: [0, 50, 100, 50, 0],
          rotate: [0, -90, -180, -270, -360],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      <motion.div
        className="absolute top-20 right-10 w-28 h-28 bg-yellow-400 rounded-full opacity-70"
        animate={{
          scale: [1, 1.5, 1, 0.5, 1],
          opacity: [0.7, 0.3, 0.7, 0.3, 0.7],
        }}
        transition={{
          duration: 7,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-xl font-bold text-white mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Powerful Supply Chain Analytics
          </motion.h3>
          <motion.p
            className="text-gray-100 max-w-xs mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Monitor, analyze, and optimize your retail operations
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
