"use client";

import { motion } from "framer-motion";
import { Package } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-black py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Package className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-500" />
            <span className="text-lg sm:text-xl font-normal text-white">GATICIAN</span>
          </div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Streamlining retail supply chains with ONDC
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-normal text-white mb-4">Connect</h3>
            <div className="flex justify-center space-x-4">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 sm:w-6 h-5 sm:h-6"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  ),
                  href: "#",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 sm:w-6 h-5 sm:h-6"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  ),
                  href: "#",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 sm:w-6 h-5 sm:h-6"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ),
                  href: "#",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 sm:w-6 h-5 sm:h-6"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  ),
                  href: "#",
                },
              ].map(({ icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  className="text-gray-400 hover:text-yellow-500"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-normal text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Careers", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-yellow-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-normal text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Docs", "Help", "API"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-yellow-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-normal text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-yellow-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          className="mt-8 sm:mt-12 md:mt-16 text-center text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p>© {new Date().getFullYear()} GATICIAN. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}