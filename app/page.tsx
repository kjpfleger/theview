"use client"
import "../styles/globals.css"
import { SharedButton } from "@/components/shared-button"
import { MapPin, Car, Waves, Bath, Maximize, Star, Utensils, Thermometer, Sun, Trash2, Home, Bus } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
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
            <p className="text-lg md:text-xl mb-10 max-w-4xl mx-auto leading-relaxed text-center text-background">
              {
                "Newly built apartments near App State with modern amenities, mountain views, and unbeatable convenience."
              }
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
      <section className="py-16 md:py-24 w-full overflow-x-hidden">
        <div className="w-full max-w-none px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Main content */}
            <div className="lg:col-span-12 text-center lg:text-left">
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
                  Located minutes from Appalachian State University, these brand-new apartments include spacious 1-, 2-,
                  and 3-bedroom layouts with modern finishes. Each apartment features gourmet kitchens, stainless steel
                  appliances, in-unit washers and dryers, oversized windows, and 10–20 ft ceilings. Walkable to Publix,
                  Walmart, and two AppalCART bus stops, The View offers convenient, high-quality living with easy access
                  to campus and Boone.
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
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full h-full"
            >
              <Image
                src="/images/luxury-20amenities.jpg"
                alt="Modern kitchen with stainless steel appliances"
                width={600}
                height={800}
                className="w-full h-full object-cover rounded-sm shadow-lg"
                priority
              />
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full flex flex-col justify-center"
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
                  <span className="text-black font-medium">Oversized Windows </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trash2 className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="text-black font-medium">Dishwashers &amp; Microwaves </span>
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
                <div className="flex items-center space-x-3">
                  <Car className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="text-black font-medium">On-Site Parking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bus className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="text-black font-medium">Seconds walk to AppalCART</span>
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

      {/* Floor Plans Preview - Three Column Grid */}
      <section className="py-12 md:py-20 bg-white w-full">
        <div className="container mx-auto px-4">
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
              Choose from thoughtfully designed studio, 2 &amp; 3 bedroom apartments
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {/* Studio */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/floorplans-20-20studio.jpg" alt="Studio apartment" fill className="object-cover" />
                <div className="absolute top-4 left-4 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
              </div>
              <div className="py-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-wider">STUDIO</h3>
                <p className="text-gray-600 mb-6">Roomy open layout to live and work</p>
                <a
                  href="/floorplans"
                  className="inline-flex items-center justify-center gap-2 text-orange-600 font-bold text-lg uppercase tracking-wide hover:underline transition-all"
                >
                  VIEW UNITS →
                </a>
              </div>
            </div>

            {/* 2 Bedroom */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/floorplans-20-202-20bedroom.jpg"
                  alt="2 bedroom apartment"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
              </div>
              <div className="py-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-wider">2 BEDROOM</h3>
                <p className="text-gray-600 mb-6">Comfortable living for two</p>
                <a
                  href="/floorplans"
                  className="inline-flex items-center justify-center gap-2 text-orange-600 font-bold text-lg uppercase tracking-wide hover:underline transition-all"
                >
                  VIEW UNITS →
                </a>
              </div>
            </div>

            {/* 3 Bedroom */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/floorplans-20-203-20bedroom.jpg"
                  alt="3 bedroom apartment"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
              </div>
              <div className="py-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-wider">3 BEDROOM</h3>
                <p className="text-gray-600 mb-6">Room to spread out with friends</p>
                <a
                  href="/floorplans"
                  className="inline-flex items-center justify-center gap-2 text-orange-600 font-bold text-lg uppercase tracking-wide hover:underline transition-all"
                >
                  VIEW UNITS →
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <SharedButton href="/floorplans" size="lg">
              View All Floor Plans
            </SharedButton>
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
                    <Bus className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Seconds walk to AppalCART</h3>
                    <p className="text-black">Steps from two AppalCART bus stops</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-sm flex-shrink-0">
                    <Car className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">On-Site Parking</h3>
                    <p className="text-black">Available for residents</p>
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.9876543210!2d-81.6789012!3d36.2123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850f5f5f5f5f5f5%3A0x1234567890abcdef!2s381%20Meadowview%20Dr%2C%20Boone%2C%20NC%2028607!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&q=381+Meadowview+Dr,+Boone+NC+28607"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-sm shadow-lg"
                title="The View Apartments Location"
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
