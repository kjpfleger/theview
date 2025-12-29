"use client"
import "../styles/globals.css"
import { Card, CardContent } from "@/components/ui/card"
import { SharedButton } from "@/components/shared-button"
import {
  MapPin,
  Car,
  Waves,
  Bed,
  Bath,
  Maximize,
  Star,
  Utensils,
  Thermometer,
  Building,
  Users,
  Sun,
  Trash2,
  Home,
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Footer from "@/components/Footer"

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

export default function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white w-full overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white">THE VIEW</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-4 text-white">Luxury Living in Boone, NC</p>
            <p className="text-base md:text-lg lg:text-xl mb-8 text-white max-w-2xl mx-auto">
              Newly built apartments near App State with modern amenities, mountain views, and unbeatable convenience.
            </p>
            <div className="flex justify-center">
              <SharedButton href="/floorplans" size="lg">
                View Floor Plans
              </SharedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white w-full overflow-x-hidden">
        <div className="w-full max-w-none px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left side icons */}
            <div className="lg:col-span-2 flex lg:flex-col flex-row justify-center lg:justify-start space-x-4 lg:space-x-0 lg:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="w-12 h-12 bg-orange-600 flex items-center justify-center"
              >
                <Building className="h-6 w-6 text-white" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-12 h-12 bg-orange-600 flex items-center justify-center"
              >
                <Bed className="h-6 w-6 text-white" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-12 h-12 bg-orange-600 flex items-center justify-center"
              >
                <Car className="h-6 w-6 text-white" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-12 h-12 bg-orange-600 flex items-center justify-center"
              >
                <Users className="h-6 w-6 text-white" />
              </motion.div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-10 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-orange-600 font-semibold text-sm md:text-base tracking-wider uppercase mb-6">
                  THE VIEW APARTMENTS
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-black leading-tight">
                  YOUR HOME IN THE
                  <br />
                  HEART OF BOONE
                </h2>
                <p className="text-lg md:text-xl text-black mb-10 max-w-4xl mx-auto lg:mx-0 leading-relaxed">
                  Located minutes from Appalachian State University, these brand-new apartments include spacious 1, 2
                  and 3 bedroom layouts with modern finishes. Each unit features gourmet kitchens, stainless steel
                  appliances, in-unit washer dryers, oversized windows, and 10–20 ft ceilings. Walkable to Walmart,
                  Publix and two AppalCART bus stops, these apartments offer comfort and convenience for both students
                  and professionals.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <SharedButton href="/floorplans" size="lg">
                    EXPLORE FLOORPLANS
                  </SharedButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Amenities Section */}
      <section className="py-16 md:py-24 bg-gray-50 w-full overflow-x-hidden">
        <div className="w-full max-w-none px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Image
                src="/images/kitchen-interior.png"
                alt="Modern kitchen with stainless steel appliances"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-sm shadow-lg"
                priority
              />
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                LUXURY
                <br />
                <span className="text-orange-600">AMENITIES</span>
              </h2>
              <p className="text-lg md:text-xl text-black mb-10 leading-relaxed">
                Enjoy modern, brand-new apartments built for students and professionals alike—featuring spacious, open
                layouts, premium finishes, and an unbeatable location.
              </p>

              {/* Amenities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Waves className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="text-black font-medium">In-Unit Washer / Dryer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Utensils className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="text-black font-medium">Gourmet Kitchens w/ Stainless Steel Appliances</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sun className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="text-black font-medium">Oversized Windows & Natural Light</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trash2 className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="text-black font-medium">Dishwasher & Garbage Disposal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bath className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="text-black font-medium">Tiled Shower Tubs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Thermometer className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="text-black font-medium">Air Conditioning & Heating</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Home className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="text-black font-medium">Hardwood Floors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Maximize className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="text-black font-medium">10–20 ft Ceilings</span>
                </div>
                <div className="flex items-center space-x-3 md:col-span-2">
                  <Car className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="text-black font-medium">On-Site Parking</span>
                </div>
              </div>
              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start mt-8">
                <SharedButton href="/amenities" size="lg">
                  EXPLORE AMENITIES
                </SharedButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floor Plans Preview - Scrolling Carousel */}
      <section className="py-12 md:py-20 bg-white w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-full">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider">
              SPACIOUS
              <br />
              <span className="text-orange-600">FLOORPLANS</span>
            </h2>
            <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
              Choose from thoughtfully designed studio, 1, 2 & 3 bedroom apartments
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {/* Unit 101 */}
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full border border-gray-200 bg-white rounded-lg shadow-sm">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src="/images/floorplans/unit-101.jpeg"
                        alt="Unit 101 Floor Plan"
                        className="w-full h-full object-cover p-6"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-4 text-center text-black">Studio</h3>
                      <div className="grid grid-cols-3 gap-4 text-center text-black mb-6">
                        <div className="flex flex-col items-center space-y-1">
                          <Bed className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">Studio</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <Bath className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">1 Bath</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <Maximize className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">375 sq ft</span>
                        </div>
                      </div>
                      <SharedButton href="/floorplans/unit-101" className="w-full mt-auto">
                        View Details
                      </SharedButton>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Unit 102 */}
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full border border-gray-200 bg-white rounded-lg shadow-sm">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src="/images/floorplans/unit-102.jpeg"
                        alt="Unit 102 Floor Plan"
                        className="w-full h-full object-cover p-6"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-4 text-center text-black">2 Bedroom</h3>
                      <div className="grid grid-cols-3 gap-4 text-center text-black mb-6">
                        <div className="flex flex-col items-center space-y-1">
                          <Bed className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">2 Bed</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <Bath className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">2 Bath</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <Maximize className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">600 sq ft</span>
                        </div>
                      </div>
                      <SharedButton href="/floorplans/unit-102" className="w-full mt-auto">
                        View Details
                      </SharedButton>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Unit 103 */}
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full border border-gray-200 bg-white rounded-lg shadow-sm">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src="/images/floorplans/unit-103.jpeg"
                        alt="Unit 103 Floor Plan"
                        className="w-full h-full object-cover p-6"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-4 text-center text-black">Studio + Patio</h3>
                      <div className="grid grid-cols-3 gap-4 text-center text-black mb-6">
                        <div className="flex flex-col items-center space-y-1">
                          <Bed className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">Studio</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <Bath className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">1 Bath</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <Maximize className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">340 sq ft + Patio</span>
                        </div>
                      </div>
                      <SharedButton href="/floorplans/unit-103" className="w-full mt-auto">
                        View Details
                      </SharedButton>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Unit 104 */}
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow border-2 border-orange-200 h-full bg-white rounded-lg shadow-sm">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src="/images/floorplans/unit-104.jpeg"
                        alt="Unit 104 Floor Plan"
                        className="w-full h-full object-cover p-6"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-4 text-center text-black">3 Bedroom</h3>
                      <div className="grid grid-cols-3 gap-4 text-center text-black mb-6">
                        <div className="flex flex-col items-center space-y-1">
                          <Bed className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">3 Bed</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <Bath className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">2 Bath</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <Maximize className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">700 sq ft</span>
                        </div>
                      </div>
                      <SharedButton href="/floorplans/unit-104" className="w-full mt-auto">
                        View Details
                      </SharedButton>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Unit 201 */}
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow border-2 border-orange-200 h-full bg-white rounded-lg shadow-sm">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src="/images/floorplans/unit-201.jpeg"
                        alt="Unit 201 Floor Plan"
                        className="w-full h-full object-cover p-6"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-4 text-center text-black">Penthouse</h3>
                      <div className="grid grid-cols-3 gap-4 text-center text-black mb-6">
                        <div className="flex flex-col items-center space-y-1">
                          <Bed className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">3 Bed</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <Bath className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">2 Bath</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <Maximize className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-600">1200 sq ft</span>
                        </div>
                      </div>
                      <SharedButton href="/floorplans/unit-201" className="w-full mt-auto">
                        View Details
                      </SharedButton>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-orange-600 hover:bg-orange-700 text-white border-orange-600" />
              <CarouselNext className="right-4 bg-orange-600 hover:bg-orange-700 text-white border-orange-600" />
            </Carousel>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center lg:justify-start">
              <SharedButton href="/floorplans" size="lg">
                View All Floor Plans
              </SharedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 md:py-20 bg-gray-50 w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider">
                PERFECT
                <br />
                <span className="text-orange-600">LOCATION</span>
              </h2>
              <p className="text-lg md:text-xl text-black mb-8">
                Located in the heart of Boone, The View offers unparalleled access to everything you need.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-sm flex-shrink-0">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Close to Campus</h3>
                    <p className="text-black">3-5 minute drive to Appalachian State University</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-sm flex-shrink-0">
                    <Car className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">AppalCART Bus Stops</h3>
                    <p className="text-black">Steps from two AppaLCART bus stops</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-sm flex-shrink-0">
                    <Star className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Shopping & Dining</h3>
                    <p className="text-black">Walkable to Walmart, Publix, restaurants & coffee shops</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <img
                src="/images/location-map.png"
                alt="Map showing The View Apartments location in Boone, NC with nearby landmarks"
                className="rounded-sm shadow-lg w-full max-w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
