"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm"
    >
      {/* Shape 1: Top Left Square */}
      <motion.div
        className="absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-yellow-500 rounded-lg"
        animate={{
          x: [0, 50, 100, 50, 0],
          y: [0, 25, 50, 75, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      {/* Shape 2: Bottom Right Circle */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-yellow-300 rounded-full"
        animate={{
          x: [0, -25, -50, -25, 0],
          y: [0, -25, -50, -25, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      {/* Shape 3: Center Square */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-yellow-600 rounded-xl"
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

      {/* Shape 4: Bottom Left Square */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 bg-yellow-400 rounded-lg"
        animate={{
          x: [0, 25, 50, 25, 0],
          rotate: [0, -90, -180, -270, -360],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      {/* Shape 5: Top Right Circle */}
      <motion.div
        className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 w-12 sm:w-20 md:w-28 h-12 sm:h-20 md:h-28 bg-yellow-400 rounded-full opacity-70"
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

      {/* Center Text and Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="flex items-center justify-center mb-3 sm:mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-yellow-200 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-black"
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
            className="text-base sm:text-lg md:text-xl font-bold text-white mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Powerful Supply Chain Analytics
          </motion.h3>
          <motion.p
            className="text-sm sm:text-base text-gray-100 max-w-[200px] sm:max-w-[250px] md:max-w-xs mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Monitor, analyze, and optimize your retail operations
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}