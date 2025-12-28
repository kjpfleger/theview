"use client"

import type React from "react"
import { Inter } from "next/font/google"
import './globals.css"import "../styles/globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo with more left padding */}
        <div className="flex-shrink-0 pl-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/the-view-logo.png"
              alt="The View"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
          <Link href="/floorplans" className="text-sm font-medium hover:text-primary transition-colors">
            Floor Plans
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Desktop Contact - Flush Right with Padding */}
        <div className="hidden md:flex items-center flex-shrink-0 pr-6">
          <span className="flex items-center space-x-2 text-sm font-medium">
            <Phone className="h-4 w-4" />
            <span>(828) 414-1040</span>
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto pr-4">
          <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <Link
              href="/floorplans"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Floor Plans
            </Link>
            <Link
              href="/gallery"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <span className="flex items-center space-x-2 text-sm font-medium pt-4 border-t">
              <Phone className="h-4 w-4" />
              <span>(828) 414-1040</span>
            </span>
          </nav>
        </div>
      )}
    </header>
  )
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
