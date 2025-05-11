"use client"
import Link from "next/link"
import { ArrowRight, Package, BarChart3, Users, Globe, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import FeatureCard from "@/components/feature-card"
import StatsCounter from "@/components/stats-counter"
import { TrackedOrdersDemo } from "@/components/tracked-orders-demo"
import WorldMapAnimation from "@/components/world-map-animation"
import { motion } from "framer-motion"
import { CTASection } from "@/components/cta"
import { ContactSection } from "@/components/contact"
import { FooterSection } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold text-white">GATICIAN</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors"
            >
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors hidden sm:inline-flex"
            >
              Log in
            </Link>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
         <section className="relative overflow-hidden bg-black text-white">
      <div className="container relative z-10 mx-auto px-6 py-24 sm:px-6 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32">
        <motion.div
          className="max-w-2xl lg:max-w-lg lg:flex-shrink-0 lg:pt-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="block text-yellow-400">Streamline</span> Your Retail Supply Chain
          </h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Monitor your ONDC orders, track deliveries, and manage your retail business with GATICIAN's powerful supply chain management platform.
          </motion.p>
          <div className="mt-10 flex items-center gap-x-6">
            <motion.button
              className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-3 rounded-full flex items-center transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Tracking
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#demo"
                className="text-sm font-semibold leading-6 text-gray-200 hover:text-yellow-400 transition-colors"
              >
                Watch demo <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="mt-16 sm:mt-24 lg:mt-0 lg:flex-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <HeroAnimation />
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-grid-white/2 bg-[size:100px_100px] opacity-20" />
    </section>

        {/* Stats Section */}
<section className="bg-black py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-4 divide-x divide-gray-800">
      <div className="text-center px-4">
        <div className="text-5xl font-light text-yellow-400 mb-1">5,000<span className="text-white">+</span></div>
        <div className="text-gray-300 text-sm tracking-widest font-medium">RETAILERS</div>
      </div>
      <div className="text-center px-4">
        <div className="text-5xl font-light text-yellow-400 mb-1">1<span className="text-white">M+</span></div>
        <div className="text-gray-300 text-sm tracking-widest font-medium">ORDERS TRACKED</div>
      </div>
      <div className="text-center px-4">
        <div className="text-5xl font-light text-yellow-400 mb-1">98<span className="text-white">%</span></div>
        <div className="text-gray-300 text-sm tracking-widest font-medium">DELIVERY SUCCESS</div>
      </div>
      <div className="text-center px-4">
        <div className="text-5xl font-light text-yellow-400 mb-1">24<span className="text-white">/7</span></div>
        <div className="text-gray-300 text-sm tracking-widest font-medium">SUPPORT</div>
      </div>
    </div>
  </div>
</section>

      
{/* Features Section */}
<section id="features" className="py-24 bg-black">
  <div className="container mx-auto px-4">
    <div className="text-center mb-20">
      <h2 className="text-4xl font-light tracking-tight mb-4 text-white">
        <span className="text-yellow-400">/</span> Retailer Tools
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        Precision instrumentation for ONDC commerce
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-12">
      {/* Feature 1 */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <BarChart3 className="h-8 w-8 text-yellow-500" />
        </div>
        <h3 className="text-xl font-normal text-white mb-2">Live Order Radar</h3>
        <p className="text-gray-400 px-4">
          Real-time tracking across all ONDC channels with predictive analytics
        </p>
      </div>
      
      {/* Feature 2 */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Package className="h-8 w-8 text-yellow-500" />
        </div>
        <h3 className="text-xl font-normal text-white mb-2">Smart Inventory</h3>
        <p className="text-gray-400 px-4">
          AI-driven stock management with automated replenishment
        </p>
      </div>
      
      {/* Feature 3 */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Users className="h-8 w-8 text-yellow-500" />
        </div>
        <h3 className="text-xl font-normal text-white mb-2">Buyer Intelligence</h3>
        <p className="text-gray-400 px-4">
          Customer behavior modeling and retention forecasting
        </p>
      </div>
    </div>

    <div className="h-px bg-gray-800 my-16 w-3/4 mx-auto"></div>

    <div className="grid md:grid-cols-3 gap-12">
      {/* Feature 4 */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Globe className="h-8 w-8 text-yellow-500" />
        </div>
        <h3 className="text-xl font-normal text-white mb-2">ONDC Network</h3>
        <p className="text-gray-400 px-4">
          Native integration with digital commerce protocols
        </p>
      </div>
      
      {/* Feature 5 */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-yellow-500" />
        </div>
        <h3 className="text-xl font-normal text-white mb-2">Quality Assurance</h3>
        <p className="text-gray-400 px-4">
          Automated compliance checks and defect prevention
        </p>
      </div>
      
      {/* Feature 6 */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <ArrowRight className="h-8 w-8 text-yellow-500" />
        </div>
        <h3 className="text-xl font-normal text-white mb-2">Instant Replenish</h3>
        <p className="text-gray-400 px-4">
          One-touch vendor ordering with smart recommendations
        </p>
      </div>
    </div>
  </div>
</section>

        {/* Demo Section */}
        <TrackedOrdersDemo
  title="Experience the Dashboard"
  subtitle="See real-time ONDC order management in action"
/>

        {/* How It Works */}
    <section id="how-it-works" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How GATICIAN Works</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Our platform makes it easy to manage your retail supply chain from end to end.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <WorldMapAnimation />
          </div>
          <div className="space-y-8 order-1 md:order-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-black font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Connect Your ONDC Account</h3>
                <p className="text-gray-200">
                  Link your ONDC seller account to GATICIAN with our simple integration process.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-black font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Monitor Orders in Real-time</h3>
                <p className="text-gray-200">
                  Get instant updates on all your orders, from placement to delivery.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-black font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Analyze Performance</h3>
                <p className="text-gray-200">
                  Use our analytics tools to identify trends and optimize your supply chain.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-black font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Scale Your Business</h3>
                <p className="text-gray-200">
                  Leverage insights to grow your retail business and expand your reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-grid-white/2 bg-[size:100px_100px] opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">What Our Customers Say</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Hear from retailers who have transformed their businesses with GATICIAN.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            className="relative"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                RS
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-white">Rahul Sharma</h3>
                <p className="text-sm text-gray-200">Fashion Retailer</p>
              </div>
            </div>
            <p className="text-white text-base leading-relaxed">
              "GATICIAN has completely transformed how we manage our orders. The real-time tracking and analytics have helped us reduce delivery times by 30%."
            </p>
            <div className="mt-4 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-yellow-400/50 rounded-full"></div>
          </motion.div>

          <motion.div
            className="relative"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                AP
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-white">Ananya Patel</h3>
                <p className="text-sm text-gray-200">Electronics Store Owner</p>
              </div>
            </div>
            <p className="text-white text-base leading-relaxed">
              "The customer insights feature has been a game-changer for our business. We've been able to tailor our inventory based on actual demand patterns."
            </p>
            <div className="mt-4 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-yellow-400/50 rounded-full"></div>
          </motion.div>

          <motion.div
            className="relative"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                VK
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-white">Vikram Kumar</h3>
                <p className="text-sm text-gray-200">Grocery Chain Manager</p>
              </div>
            </div>
            <p className="text-white text-base leading-relaxed">
              "Since implementing GATICIAN, we've reduced inventory costs by 25% while improving customer satisfaction. The ONDC integration is seamless."
            </p>
            <div className="mt-4 flex text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-yellow-400/50 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>

        {/* CTA Section */}
        <CTASection />
      

        {/* Contact Section */}
      <ContactSection />
     
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
