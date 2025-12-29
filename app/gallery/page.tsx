"use client"

import { useEffect } from "react"
import { Card } from "@/components/ui/card"
import { SharedButton } from "@/components/shared-button"
import { Camera, Clock } from "lucide-react"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Coming Soon Card */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 md:p-12 text-center bg-white shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Camera className="h-16 w-16 text-orange-600" />
                  <Clock className="h-6 w-6 text-orange-400 absolute -bottom-1 -right-1 bg-white rounded-full p-1" />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">Photo Gallery Coming Soon</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We're currently capturing beautiful photos of our apartments, amenities, and common areas. Our
                professional photography session will showcase the stunning details and quality finishes that make The
                View special.
              </p>

              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <SharedButton href="/floorplans" size="lg" className="w-full md:w-auto">
                  View Floor Plans
                </SharedButton>

                <SharedButton href="/contact" size="lg" variant="secondary" className="w-full md:w-auto">
                  Schedule a Visit
                </SharedButton>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
