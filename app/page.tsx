"use client"
import Link from "next/link"
import { ArrowRight, Package, BarChart3, Users, Globe, CheckCircle, Activity, ArrowUp, User } from "lucide-react"
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
  <div className="container flex h-16 items-center justify-between px-4 mx-auto">
    <div className="flex items-center gap-2">
      <Package className="h-6 w-6 text-yellow-500" />
      <span className="text-2xl font-light tracking-tight text-white">GATICIAN</span>
    </div>
    <nav className="hidden md:flex gap-8">
      <Link
        href="#features"
        className="text-base font-normal text-gray-400 hover:text-yellow-500 transition-colors"
      >
        Features
      </Link>
      <Link
        href="#how-it-works"
        className="text-base font-normal text-gray-400 hover:text-yellow-500 transition-colors"
      >
        How It Works
      </Link>
      <Link
        href="#testimonials"
        className="text-base font-normal text-gray-400 hover:text-yellow-500 transition-colors"
      >
        Testimonials
      </Link>
      <Link
        href="#contact"
        className="text-base font-normal text-gray-400 hover:text-yellow-500 transition-colors"
      >
        Contact
      </Link>
    </nav>
    <div className="flex items-center gap-4">
      <Link
        href="/login"
        className="text-base font-normal text-gray-400 hover:text-yellow-500 transition-colors hidden sm:inline-flex"
      >
        Log in
      </Link>
      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-base font-normal px-4 py-2 rounded-none">
        Get Started
      </Button>
    </div>
  </div>
</header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black">
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row items-center justify-around ">
          <motion.div
            className="flex-1 max-w-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-7xl font-bold tracking-tight mb-4 text-white">
              <span className="text-yellow-400">/</span> Streamline Retail
            </h1>
            <motion.p
              className="text-xl text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Monitor ONDC orders and manage your supply chain
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 text-base font-normal rounded-full flex items-center justify-center transition-colors duration-300"
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
                  className="text-base font-normal text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Watch Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 "
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </div>
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
      <h2 className="text-4xl font-semibold tracking-tight mb-4 text-white">
        <span className=" text-yellow-400">/</span> Retailer Tools
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
   <section id="how-it-works" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold tracking-tight mb-4 text-white">
            <span className="text-yellow-400">/</span> How GATICIAN Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Streamlined tools to manage your retail supply chain
          </p>
        </div>
        

        <div className="grid md:grid-cols-2 gap-12 relative">
          {/* Vertical Separator */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-600/50"></div>

          {/* Step 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Globe className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-normal text-white mb-2">Connect ONDC</h3>
            <p className="text-gray-400 px-4">
              Seamlessly link your ONDC seller account
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Activity className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-normal text-white mb-2">Monitor Orders</h3>
            <p className="text-gray-400 px-4">
              Track orders in real-time from placement to delivery
            </p>
          </div>

          {/* Horizontal Separator */}
          <div className="md:col-span-2 h-px bg-gray-600/50 w-3/4 mx-auto"></div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <BarChart3 className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-normal text-white mb-2">Analyze Trends</h3>
            <p className="text-gray-400 px-4">
              Use analytics to optimize your supply chain
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ArrowUp className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-normal text-white mb-2">Scale Business</h3>
            <p className="text-gray-400 px-4">
              Grow with insights and expanded reach
            </p>
          </div>
        </div>
      </div>
    </section>

        {/* Testimonials */}
    <section id="testimonials" className="py-24 bg-black">
  <div className="container mx-auto px-4">
    <div className="text-center mb-20">
      <h2 className="text-4xl font-semibold tracking-tight mb-4 text-white">
        <span className="text-yellow-400">/</span> Customer Stories
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        Retailers thriving with GATICIAN
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-12">
      {/* Testimonial 1 */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <User className="h-8 w-8 text-yellow-500" />
        </div>
        <h3 className="text-xl font-normal text-white mb-2">Rahul Sharma</h3>
        <p className="text-gray-400 mb-4">Fashion Retailer</p>
        <p className="text-gray-400 px-4">
          "Real-time tracking cut delivery times by 30%."
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <User className="h-8 w-8 text-yellow-500" />
        </div>
        <h3 className="text-xl font-normal text-white mb-2">Ananya Patel</h3>
        <p className="text-gray-400 mb-4">Electronics Store Owner</p>
        <p className="text-gray-400 px-4">
          "Customer insights tailored our inventory to demand."
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <User className="h-8 w-8 text-yellow-500" />
        </div>
        <h3 className="text-xl font-normal text-white mb-2">Vikram Kumar</h3>
        <p className="text-gray-400 mb-4">Grocery Chain Manager</p>
        <p className="text-gray-400 px-4">
          "Reduced inventory costs by 25% with seamless ONDC integration."
        </p>
      </div>
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
