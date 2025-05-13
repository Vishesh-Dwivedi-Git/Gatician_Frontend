"use client"

import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold tracking-tight mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-yellow-400">/</span> Transform Your Retail
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Streamline your supply chain with GATICIAN
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 text-base font-normal rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-6 py-2 text-base font-normal rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Demo
          </motion.button>
        </div>
      </div>
    </section>
  )
}