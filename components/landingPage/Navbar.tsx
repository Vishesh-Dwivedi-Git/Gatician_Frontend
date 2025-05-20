import { Package, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Package className="h-6 w-6 text-yellow-500" />
          <span className="text-2xl font-light tracking-tight text-white">GATICIAN</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* Right Section (Login + Button) */}
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
          {/* Hamburger Menu Button (Visible on Mobile) */}
          <button
            className="md:hidden text-gray-400 hover:text-yellow-500 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when toggled) */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="container flex flex-col gap-4 px-4 py-4 mx-auto max-w-7xl">
            <Link
              href="#features"
              className="text-base font-normal text-gray-400 hover:text-yellow-500 transition-colors"
              onClick={toggleMobileMenu}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-base font-normal text-gray-400 hover:text-yellow-500 transition-colors"
              onClick={toggleMobileMenu}
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-base font-normal text-gray-400 hover:text-yellow-500 transition-colors"
              onClick={toggleMobileMenu}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-base font-normal text-gray-400 hover:text-yellow-500 transition-colors"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}