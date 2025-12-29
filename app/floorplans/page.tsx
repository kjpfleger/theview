"use client"

import { useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SharedButton } from "@/components/shared-button"
import { Bed, Bath, Maximize, ArrowRight, Check, Star, DollarSign } from "lucide-react"
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Footer from "@/components/Footer"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function FloorPlansPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const units = [
    {
      id: "101",
      name: "Unit 101",
      type: "Studio",
      bedrooms: "Studio",
      bathrooms: 1,
      sqft: 375,
      price: 1450,
      image: "/images/floorplans/unit-101.jpeg",
      features: ["In-unit laundry", "Stainless appliances", "Hardwood floors", "High ceilings"],
      description:
        "Perfect for individuals seeking modern living with all the essentials in a thoughtfully designed studio apartment.",
      badge: "Studio",
      badgeColor: "bg-orange-600",
    },
    {
      id: "102",
      name: "Unit 102",
      type: "2 Bedroom",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 600,
      price: 2200,
      image: "/images/floorplans/unit-102.jpeg",
      features: ["Private bathrooms", "Open living area", "Full kitchen", "Ample storage"],
      description:
        "Ideal for roommates with separate bedrooms and bathrooms, offering privacy and comfort with shared common areas.",
      badge: "2 Bedroom",
      badgeColor: "bg-orange-600",
    },
    {
      id: "103",
      name: "Unit 103",
      type: "Studio + Patio",
      bedrooms: "Studio",
      bathrooms: 1,
      sqft: "340 + Patio",
      price: 1450,
      image: "/images/floorplans/unit-103.jpeg",
      features: ["Private patio", "Premium location", "High ceilings", "Modern finishes"],
      description:
        "Studio apartment with private patio for outdoor living. Perfect for those who enjoy indoor-outdoor lifestyle.",
      badge: "Studio + Patio",
      badgeColor: "bg-orange-600",
    },
    {
      id: "104",
      name: "Unit 104",
      type: "3 Bedroom",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 700,
      price: 2955,
      image: "/images/floorplans/unit-104.jpeg",
      features: ["Spacious bedrooms", "Large living area", "Full-size kitchen", "Multiple closets"],
      description:
        "Perfect for groups of friends or families. This spacious 3-bedroom unit offers plenty of room for everyone.",
      badge: "3 Bedroom",
      badgeColor: "bg-orange-600",
    },
    {
      id: "201",
      name: "Unit 201",
      type: "Penthouse",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1200,
      price: 3300,
      image: "/images/floorplans/unit-201.jpeg",
      features: ["Premium finishes", "Luxury appliances", "Exclusive access", "Spacious layout"],
      description:
        "Experience luxury living at its finest in our exclusive penthouse unit with premium finishes and stunning views.",
      badge: "Penthouse",
      badgeColor: "bg-gradient-to-r from-orange-500 to-orange-600",
      isPenthouse: true,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] md:h-[500px] mb-12">
          <Image src="/images/hero-20image.jpg" alt="Modern bedroom" fill className="object-cover" priority />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center px-4">FLOORPLANS</h1>
          </div>
        </div>

        {/* Hero Content Below Image */}
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              FIND YOUR <span className="text-orange-600">HOME</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Choose from brand new studio, 2- and 3-bedroom apartments. Every layout includes spacious closets, gourmet
              kitchens, tall 10 ft ceilings, tons of windows and modern bathrooms.
            </p>
          </div>
        </div>

        {/* Floor Plans Section */}
        <div className="container mx-auto px-4 py-8">
          {/* Scrollable Floor Plans */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {units.map((unit) => (
                  <CarouselItem key={unit.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <Card
                      className={`overflow-hidden hover:shadow-lg transition-shadow h-full border border-gray-200 bg-white rounded-lg shadow-sm ${unit.isPenthouse ? "border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100" : ""}`}
                    >
                      {/* Image Section */}
                      <div className="relative">
                        <div className="aspect-square p-4">
                          <img
                            src={unit.image || "/placeholder.svg"}
                            alt={`${unit.name} Floor Plan`}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                        <Badge
                          className={`absolute top-6 left-6 text-white text-xs ${unit.badgeColor} ${unit.isPenthouse ? "flex items-center" : ""}`}
                        >
                          {unit.isPenthouse && <Star className="mr-1 h-3 w-3" />}
                          {unit.badge}
                        </Badge>
                      </div>

                      {/* Content Section */}
                      <div className="p-4 flex flex-col h-full">
                        {/* Header with Price */}
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-black">{unit.name}</h3>
                            <Badge className={`text-xs ${unit.badgeColor} text-white`}>{unit.type}</Badge>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 text-orange-600 mr-1" />
                              <span
                                className={`text-lg font-bold ${unit.isPenthouse ? "bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent" : "text-orange-600"}`}
                              >
                                {unit.price.toLocaleString()}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600">per month</p>
                          </div>
                        </div>

                        {/* Unit Specs */}
                        <div className="grid grid-cols-3 gap-2 text-center text-gray-600 mb-3">
                          <div className="flex flex-col items-center space-y-1">
                            <Bed className="h-3 w-3" />
                            <span className="text-xs font-medium">
                              {unit.bedrooms} {typeof unit.bedrooms === "number" ? "Bed" : ""}
                            </span>
                          </div>
                          <div className="flex flex-col items-center space-y-1">
                            <Bath className="h-3 w-3" />
                            <span className="text-xs font-medium">{unit.bathrooms} Bath</span>
                          </div>
                          <div className="flex flex-col items-center space-y-1">
                            <Maximize className="h-3 w-3" />
                            <span className="text-xs font-medium">{unit.sqft} sq ft</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">{unit.description}</p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-1 mb-4">
                          {unit.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-center space-x-1">
                              <Check className="h-2 w-2 text-orange-600 flex-shrink-0" />
                              <span className="text-xs text-gray-700 truncate">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button - Navigate to Unit Subpage */}
                        <SharedButton href={`/floorplans/unit-${unit.id}`} className="w-full sm:w-auto">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </SharedButton>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-orange-600 hover:bg-orange-700 text-white border-orange-600" />
              <CarouselNext className="right-4 bg-orange-600 hover:bg-orange-700 text-white border-orange-600" />
            </Carousel>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-600 mb-4">
              All units include in-unit laundry, stainless steel appliances, and on-site parking
            </p>
            <SharedButton href="/contact">Schedule a Tour</SharedButton>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
