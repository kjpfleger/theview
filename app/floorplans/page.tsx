"use client"

import { useEffect } from "react"
import { Card } from "@/components/ui/card"
import { SharedButton } from "@/components/shared-button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
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
      type: "Corner Studio, One Bath",
      bedrooms: "Studio",
      bathrooms: 1,
      sqft: 375,
      price: 1450,
      image: "/images/unit-20101.jpg",
      features: ["In-unit laundry", "Stainless appliances", "Hardwood floors", "High ceilings"],
      description:
        "Perfect for individuals seeking modern living with all the essentials in a thoughtfully designed studio apartment.",
      badge: "Studio",
      badgeColor: "bg-orange-600",
    },
    {
      id: "102",
      name: "Unit 102",
      type: "Corner 2 Bedrooms, 2 Baths",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 600,
      price: "1,100/bed",
      image: "/images/unit-102.jpeg",
      features: ["Private bathrooms", "Open living area", "Full kitchen", "Ample storage"],
      description:
        "Ideal for roommates with separate bedrooms and bathrooms, offering privacy and comfort with shared common areas.",
      badge: "2 Bedroom",
      badgeColor: "bg-orange-600",
    },
    {
      id: "103",
      name: "Unit 103",
      type: "Corner Studio, One Bath",
      bedrooms: "Studio",
      bathrooms: 1,
      sqft: "340 + Patio",
      price: 1450,
      available: "Aug 2026",
      image: "/images/unit-103.jpeg",
      features: ["Private patio", "Premium location", "High ceilings", "Modern finishes"],
      description:
        "Studio apartment with private patio for outdoor living. Perfect for those who enjoy indoor-outdoor lifestyle.",
      badge: "Studio + Patio",
      badgeColor: "bg-orange-600",
    },
    {
      id: "104",
      name: "Unit 104",
      type: "Corner 3 Bedrooms, 2 Baths",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 700,
      price: "1,050/bed",
      available: "Aug 2026",
      image: "/images/unit-104.jpeg",
      features: ["Spacious bedrooms", "Large living area", "Full-size kitchen", "Multiple closets"],
      description:
        "Perfect for groups of friends or families. This spacious 3-bedroom unit offers plenty of room for everyone.",
      badge: "3 Bedroom",
      badgeColor: "bg-orange-600",
    },
    {
      id: "201",
      name: "Unit 201",
      type: "3 Bedrooms, 2 Baths, Penthouse",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1200,
      price: "1,100/bed",
      image: "/images/unit-201.jpg",
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
          {/* Grid Layout - 1 column mobile, 2 columns tablet, 3 columns desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {units.map((unit) => (
                <Card
                  key={unit.id}
                  className="overflow-hidden hover:shadow-xl transition-shadow border border-gray-200 bg-white rounded-none"
                >
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={unit.image || "/placeholder.svg"}
                      alt={`${unit.name} Interior`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Unit Number */}
                    <h3 className="text-xl font-semibold text-black mb-2">{unit.name}</h3>

                    {/* Unit Type */}
                    <p className="text-gray-600 text-base mb-6">{unit.type}</p>

                    {/* Price and Availability Row */}
                    <div className="flex items-start justify-between mb-4 pb-4 border-b border-gray-200">
                      <div>
                        <p className="text-sm text-gray-500 mb-1 font-medium">Price</p>
                        <p className="text-xl font-bold text-black">
                          ${typeof unit.price === "number" ? unit.price.toLocaleString() : unit.price}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 mb-1 font-medium">Available</p>
                        <p className="text-base font-medium text-black">{unit.available || "Contact Us"}</p>
                      </div>
                    </div>

                    {/* View Unit Link */}
                    <div className="flex justify-end">
                      <a
                        href={`/floorplans/unit-${unit.id}`}
                        className="inline-flex items-center text-sm font-bold text-orange-600 hover:underline transition-colors group uppercase tracking-wide"
                      >
                        VIEW UNIT
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}

              <div className="hidden lg:flex items-center justify-center">
                <SharedButton
                  href="https://docs.google.com/forms/d/e/1FAIpQLSekcj-ZKxZZ8ExLAw3by93i0y81oIp2p3lRoThEAJtWIdBvEw/viewform"
                  className="w-full h-auto py-3"
                >
                  APPLY NOW
                </SharedButton>
              </div>
            </div>

            <div className="lg:hidden text-center mt-8">
              <SharedButton
                href="https://docs.google.com/forms/d/e/1FAIpQLSekcj-ZKxZZ8ExLAw3by93i0y81oIp2p3lRoThEAJtWIdBvEw/viewform"
                className="w-full md:w-auto py-3 px-8"
              >
                APPLY NOW
              </SharedButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
