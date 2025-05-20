"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="bg-black py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
            <span className="text-yellow-400">/</span> Contact Us
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Reach out for support or inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
              {/* Email */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Mail className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-normal text-white mb-2">Email</h3>
                <p className="text-sm sm:text-base text-gray-400">support@gatician.com</p>
              </div>
              {/* Phone */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Phone className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-normal text-white mb-2">Phone</h3>
                <p className="text-sm sm:text-base text-gray-400">+91 1234 567 890</p>
              </div>
              {/* Address */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <MapPin className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-normal text-white mb-2">Address</h3>
                <p className="text-sm sm:text-base text-gray-400">123 Tech Park, Bangalore</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl font-normal text-white mb-4 sm:mb-6 text-center">
              Send a Message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-3 sm:px-4 py-2 bg-black border border-gray-800 rounded-md focus:ring-yellow-400 focus:border-yellow-400 text-white placeholder:text-gray-400 text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-3 sm:px-4 py-2 bg-black border border-gray-800 rounded-md focus:ring-yellow-400 focus:border-yellow-400 text-white placeholder:text-gray-400 text-sm sm:text-base"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-3 sm:px-4 py-2 bg-black border border-gray-800 rounded-md focus:ring-yellow-400 focus:border-yellow-400 text-white placeholder:text-gray-400 text-sm sm:text-base"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full px-3 sm:px-4 py-2 bg-black border border-gray-800 rounded-md focus:ring-yellow-400 focus:border-yellow-400 text-white placeholder:text-gray-400 text-sm sm:text-base"
              ></textarea>
              <motion.button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-normal py-2 rounded-full transition-colors duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}