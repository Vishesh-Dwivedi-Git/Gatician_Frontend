import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HeroAnimation from "../hero-animation";

export default function HeroSection() {
  return (
    <section className="bg-black">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <motion.div
            className="flex-1 max-w-lg text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white">
              <span className="text-yellow-400">/</span> Streamline Retail
            </h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Monitor ONDC orders and manage your supply chain
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base font-normal rounded-full flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#demo"
                  className="text-sm sm:text-base font-normal text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Watch Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
          {/* Animation/Image */}
          <motion.div
            className="flex-1 w-full mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <HeroAnimation />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}