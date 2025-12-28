"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 h-24">
        <div className="w-full max-w-none px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 pl-8">
              <Image
                src="/images/the-view-logo.png"
                alt="The View Apartments"
                width={240}
                height={80}
                className="h-20 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 pr-8">
              <Link href="/floorplans" className="text-black hover:text-orange-600 font-medium transition-colors">
                Floor Plans
              </Link>
              <Link href="/amenities" className="text-black hover:text-orange-600 font-medium transition-colors">
                Amenities
              </Link>
              <Link href="/gallery" className="text-black hover:text-orange-600 font-medium transition-colors">
                Gallery
              </Link>
              <Link href="/faq" className="text-black hover:text-orange-600 font-medium transition-colors">
                FAQs
              </Link>
              <Link href="/contact" className="text-black hover:text-orange-600 font-medium transition-colors">
                Contact
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSekcj-ZKxZZ8ExLAw3by93i0y81oIp2p3lRoThEAJtWIdBvEw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-white text-white hover:text-orange-600 border-2 border-orange-600 font-semibold px-6 py-2.5 rounded-md transition-all duration-200"
              >
                APPLY
              </a>
            </nav>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="lg:hidden pr-8" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              <Link
                href="/floorplans"
                className="block text-black hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Floor Plans
              </Link>
              <Link
                href="/amenities"
                className="block text-black hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </Link>
              <Link
                href="/gallery"
                className="block text-black hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/faq"
                className="block text-black hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                className="block text-black hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSekcj-ZKxZZ8ExLAw3by93i0y81oIp2p3lRoThEAJtWIdBvEw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-orange-600 hover:bg-white text-white hover:text-orange-600 border-2 border-orange-600 font-semibold px-6 py-2.5 rounded-md transition-all duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                APPLY
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  )
}
