"use client"

import { useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Camera, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
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
                <Button className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-3" asChild>
                  <Link href="/floorplans">
                    View Floor Plans
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full md:w-auto border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 bg-transparent"
                  asChild
                >
                  <Link href="/contact">Schedule a Visit</Link>
                </Button>
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
