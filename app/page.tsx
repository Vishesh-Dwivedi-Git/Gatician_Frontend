"use client"
import { TrackedOrdersDemo } from "@/components/landingPage/tracked-orders-demo"
import { CTASection } from "@/components/landingPage/cta"
import { ContactSection } from "@/components/landingPage/contact"
import { FooterSection } from "@/components/landingPage/footer"
import HeroSection from "@/components/landingPage/HeroSection"
import Statictics from "@/components/landingPage/Stats"
import Features from "@/components/landingPage/Features"
import HowItWorks from "@/components/landingPage/HowitWorks"
import Testimonials from "@/components/landingPage/Testimonials"
import Navbar from "@/components/landingPage/Navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
     { /* Navbar */}
      <Navbar/>

      <main className="flex-1">
        {/* Hero Section */}
     <HeroSection/>
        {/* Stats Section */}
     <Statictics/>

      
    {/* Features Section */}
        <Features/>

        {/* Demo Section */}
     <TrackedOrdersDemo title="Experience the Dashboard" />

        {/* How It Works */}
      <HowItWorks/>

        {/* Testimonials */}
     <Testimonials/>

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
