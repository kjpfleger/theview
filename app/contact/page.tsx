"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import Footer from "@/components/Footer"

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-orange-600 font-semibold text-lg mb-2">Contact Us</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GET IN TOUCH</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to make The View your home? Contact us by phone or email. We look forward to meeting you.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 p-3 rounded-lg shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold mb-2">Phone</h3>
                      <p className="text-gray-600 mb-2">Call us directly to speak with our leasing team</p>
                      {/* Mobile: clickable phone link */}
                      <a
                        href="tel:8284141040"
                        className="md:hidden text-orange-600 font-semibold hover:underline transition-colors"
                      >
                        828-414-1040
                      </a>
                      {/* Desktop: non-clickable text */}
                      <span className="hidden md:inline text-orange-600 font-semibold">
                        828-414-1040
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 p-3 rounded-lg shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold mb-2">Email</h3>
                      <p className="text-gray-600 mb-2">Send us an email and we'll get back to you soon</p>
                      <a
                        href="mailto:theviewboone@gmail.com"
                        className="text-orange-600 font-semibold hover:underline transition-colors break-all"
                      >
                        theviewboone@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 p-3 rounded-lg shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold mb-2">Address</h3>
                      <p className="text-gray-600 mb-2">Visit us in the heart of Boone</p>
                      <p className="text-gray-800 font-medium mb-4">
                        381 Meadowview Drive
                        <br />
                        Boone, NC 28607
                      </p>
                      <a
                        href="https://www.google.com/maps/dir//The+View+Apartments+381+Meadowview+Dr+Boone,+NC+28607/@36.1988493,-81.6629004,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x8850fb4c22bb3d33:0x424f3bc4aade6c19"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-orange-600 font-bold hover:underline transition-colors uppercase tracking-wide"
                      >
                        GET DIRECTIONS
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Apply Now Button */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfExample/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full border-2 border-orange-600 bg-orange-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-transparent hover:text-orange-600 transition-colors"
              >
                APPLY NOW
              </a>
            </div>

            {/* Quick Info */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-600 mb-6">
                Experience The View for yourself! Our leasing team is ready to show you around our beautiful apartments
                and answer any questions you may have.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Studio, 1, 2 & 3 bedroom apartments available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">3-5 minute drive to Appalachian State University</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Steps from AppalCART bus stops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Walkable to shopping and dining</span>
                </div>
              </div>
            </div>

            {/* Take a Video Tour */}
            <div className="bg-white p-8">
              <h2 className="text-2xl font-bold mb-4">
                Take a <span className="text-orange-600">Video Tour</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Explore videos, photos and floor plans of each unit to choose the layout that's best for you
              </p>
              <Link
                href="/gallery"
                className="inline-flex items-center text-orange-600 font-bold hover:underline transition-colors uppercase tracking-wide"
              >
                VIEW GALLERY
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
