"use client"

import { useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"
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
          <Badge className="mb-4 bg-orange-600 hover:bg-orange-700 text-white">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GET IN TOUCH</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to make The View your home? Contact us today to schedule a tour, ask questions, or get more
            information about our apartments.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Phone</h3>
                      <p className="text-gray-600 mb-2">Call us directly to speak with our leasing team</p>
                      <a
                        href="tel:8284141040"
                        className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                      >
                        (828) 414-1040
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Email</h3>
                      <p className="text-gray-600 mb-2">Send us an email and we'll get back to you soon</p>
                      <a
                        href="mailto:theviewboone@gmail.com"
                        className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                      >
                        theviewboone@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Address</h3>
                      <p className="text-gray-600 mb-2">Visit us in the heart of Boone</p>
                      <p className="text-gray-800 font-medium">
                        381 Meadowview Drive
                        <br />
                        Boone, NC 28607
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Info */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">
                Ready to <span className="text-orange-600">Schedule a Tour?</span>
              </h2>
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
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
