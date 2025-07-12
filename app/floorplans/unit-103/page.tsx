"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Maximize, Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Unit103Page() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    "In-unit washer / dryer",
    "Gourmet kitchens with stainless steel appliances",
    "Large windows and natural light",
    "Dishwasher & garbage disposal",
    "Microwave",
    "Air Conditioning & Heat",
    "10-20 ft ceilings",
    "On-site parking included",
    "Hardwood floors",
    "Tiled shower tubs",
  ]

  return (
    <div className="min-h-screen py-20 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2">Studio + Patio</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Unit 103</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Studio apartment with private patio for outdoor living. Perfect for those who enjoy indoor-outdoor lifestyle
            with additional outdoor space.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Floor Plan Image */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Card className="overflow-hidden">
              <div className="aspect-square relative p-12">
                <img
                  src="/images/floorplans/unit-103.jpeg"
                  alt="Unit 103 Floor Plan"
                  className="w-full h-full object-cover rounded-lg"
                />
                <Badge className="absolute top-16 left-16 bg-orange-600">Studio + Patio</Badge>
                <Badge className="absolute top-16 right-16 bg-orange-600">Available</Badge>
              </div>
            </Card>
          </motion.div>

          {/* Unit Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Unit Specifications</h2>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <Bed className="h-8 w-8 text-orange-600" />
                    <span className="text-2xl font-bold">Studio</span>
                    <span className="text-gray-600">Bedroom</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Bath className="h-8 w-8 text-orange-600" />
                    <span className="text-2xl font-bold">1</span>
                    <span className="text-gray-600">Bathroom</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Maximize className="h-8 w-8 text-orange-600" />
                    <span className="text-2xl font-bold">340</span>
                    <span className="text-gray-600">Sq Ft + Patio</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Availability</h3>
                <Badge className="bg-orange-600 text-white px-4 py-2 text-lg">Available</Badge>
                <p className="text-gray-600 mt-4">This unit is currently available for lease.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Unit Features */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate" className="mb-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-8 text-center">Unit Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Interior Photos */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate" className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Interior Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img
                  src="/images/interior-1.png"
                  alt="Interior view of Unit 103"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    console.log("Image failed to load:", e.target.src)
                    e.target.style.display = "none"
                  }}
                />
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img
                  src="/images/interior-2.png"
                  alt="Interior view of Unit 103"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    console.log("Image failed to load:", e.target.src)
                    e.target.style.display = "none"
                  }}
                />
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
            asChild
          >
            <Link href="/floorplans">← Back to Floor Plans</Link>
          </Button>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
