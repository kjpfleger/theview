"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Waves, Utensils, Sun, Trash2, Zap, Thermometer, Maximize, Car, Home, Bath, Check } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Footer from "@/components/footer";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function AmenitiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const amenities = [
    {
      icon: Waves,
      title: "In-Unit Washer / Dryer",
      description: "Full-size washer and dryer in every apartment for ultimate convenience.",
    },
    {
      icon: Utensils,
      title: "Gourmet Kitchens",
      description: "Modern kitchens with stainless steel appliances and premium finishes.",
    },
    {
      icon: Sun,
      title: "Large Windows & Natural Light",
      description: "Abundant natural light through large windows throughout the apartment.",
    },
    {
      icon: Trash2,
      title: "Dishwasher & Garbage Disposal",
      description: "Modern kitchen conveniences including dishwasher and garbage disposal.",
    },
    {
      icon: Zap,
      title: "Microwave",
      description: "Built-in microwave included in every kitchen for your convenience.",
    },
    {
      icon: Thermometer,
      title: "Air Conditioning & Heat",
      description: "Climate control system to keep you comfortable year-round.",
    },
    {
      icon: Maximize,
      title: "10-20 ft Ceilings",
      description: "High ceilings create an open and spacious living environment.",
    },
    {
      icon: Car,
      title: "On-Site Parking Included",
      description: "Designated parking space included with every unit at no additional cost.",
    },
    {
      icon: Home,
      title: "Hardwood Floors",
      description: "Beautiful hardwood flooring throughout the living spaces.",
    },
    {
      icon: Bath,
      title: "Tiled Shower Tubs",
      description: "Modern bathrooms with beautifully tiled shower and tub combinations.",
    },
  ]

  const apartmentFeatures = [
    "Brand-new construction with premium finishes",
    "Thermostat controlled air conditioning and heat in every room",
    "In-unit washer and dryer in every apartment",
    "Soaring 10 to 20-foot ceilings",
    "Oversized windows and abundant natural light",
    "Gourmet kitchens with stainless steel appliances",
    "Spa style bathrooms with tiled shower tubs",
    "Microwaves",
    "Dishwashers",
    "Garbage disposals",
    "Refrigerator and freezer",
    "Granite countertops",
    "Hardwood style floors",
  ]

  const communityFeatures = [
    "On-site parking included",
    "Safe, residential neighborhood",
    "Adjacent to 2 major AppalCART bus stops",
    "Covered carport & long term bike storage",
    "3 minute drive or 5-10 minute bike ride to Appalachian State University",
    "Walkable to Walmart, Food Lion & Publix",
    "Steps from coffee shops, restaurants, and local stores",
    "Outdoor grill and picnic area",
    "Scenic river view",
    "Quick access to downtown Boone",
  ]

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <Image
                src="/images/rowefeb25.jpeg"
                alt="Modern bedroom with hardwood floors and contemporary design"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-orange-600">THE VIEW</span>
                <br />
                ENJOY UNPARALLELED COMFORT
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Step into a space designed for students and professionals alike. Our studio, two-, and three-bedroom
                apartments offer oversized windows, spa-style bathrooms, and gourmet kitchens with stainless steel
                appliances.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apartment Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <Badge className="mb-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2">
                Our Apartment Features
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-orange-600">APARTMENT</span>
                <br />
                FEATURES
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Modern, stylish, and functional—perfect for students and professionals.
              </p>
              <div className="space-y-4">
                {apartmentFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/gallery-kitchen.jpeg"
                alt="Modern gourmet kitchen with stainless steel appliances"
                width={600}
                height={500}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <Image
                src="/images/aerial-view.jpeg"
                alt="Aerial view of The View apartments location in Boone"
                width={600}
                height={500}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2">Community Features</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-orange-600">COMMUNITY</span>
                <br />
                FEATURES
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Walkable to shopping, dining, and public transportation, The View offers a prime location minutes from
                App State and everything Boone has to offer!
              </p>
              <div className="space-y-4">
                {communityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All View Amenities Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Badge className="mb-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2">All View</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              ALL VIEW <span className="text-orange-600">AMENITIES</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail has been carefully considered to provide you with the ultimate living experience.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {amenities.map((amenity, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow border border-gray-200">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <amenity.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-black">{amenity.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
