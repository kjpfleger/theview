"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Footer from "@/components/Footer"

type TabType = "ALL" | "AMENITIES" | "APARTMENTS" | "VIDEO TOURS"

// Apartment images from all units (excluding location, floor plans, and videos)
const apartmentImages = [
  // Unit 101
  { src: "/images/1-20-rbs-the-20view-20apts-101-0006.jpg", alt: "Unit 101 - Living area", unit: "101" },
  { src: "/images/2-20-20rbs-the-20view-20apts-101-0004.jpg", alt: "Unit 101 - Kitchen", unit: "101" },
  { src: "/images/3-20-20rbs-the-20view-20apts-101-0002.jpg", alt: "Unit 101 - Bedroom", unit: "101" },
  { src: "/images/4-20-20rbs-the-20view-20apts-101-0001.jpg", alt: "Unit 101 - Living space", unit: "101" },
  { src: "/images/5-20-20rbs-the-20view-20apts-101-0007.jpg", alt: "Unit 101 - Bathroom", unit: "101" },
  { src: "/images/6-20-20rbs-the-20view-20apts-101-0005.jpg", alt: "Unit 101 - Details", unit: "101" },
  { src: "/images/7-20-20rbs-the-20view-20apts-101-0008.jpg", alt: "Unit 101 - Interior", unit: "101" },
  { src: "/images/8-20-20rbs-the-20view-20apts-101-0009.jpg", alt: "Unit 101 - Features", unit: "101" },
  // Unit 102
  { src: "/images/rbs-the-20view-20apts-102-0003.jpg", alt: "Unit 102 - Living area and kitchen", unit: "102" },
  { src: "/images/rbs-the-20view-20apts-102-0005.jpg", alt: "Unit 102 - Kitchen with appliances", unit: "102" },
  { src: "/images/rbs-the-20view-20apts-102-0004.jpg", alt: "Unit 102 - Kitchen and dining", unit: "102" },
  { src: "/images/rbs-the-20view-20apts-102-0012.jpg", alt: "Unit 102 - Bedroom with closet", unit: "102" },
  { src: "/images/rbs-the-20view-20apts-102-0010.jpg", alt: "Unit 102 - Bedroom", unit: "102" },
  { src: "/images/rbs-the-20view-20apts-102-0009.jpg", alt: "Unit 102 - Spacious bedroom", unit: "102" },
  { src: "/images/rbs-the-20view-20apts-102-0013.jpg", alt: "Unit 102 - Master bedroom", unit: "102" },
  { src: "/images/rbs-the-20view-20apts-102-0007.jpg", alt: "Unit 102 - Primary bathroom", unit: "102" },
  { src: "/images/rbs-the-20view-20apts-102-0014.jpg", alt: "Unit 102 - Bathroom with tub", unit: "102" },
  { src: "/images/rbs-the-20view-20apts-102-0006.jpg", alt: "Unit 102 - Bathroom storage", unit: "102" },
  { src: "/images/rbs-the-20view-20apts-102-0015.jpg", alt: "Unit 102 - Secondary bathroom", unit: "102" },
  { src: "/images/rbs-the-20view-20apts-102-0016.jpg", alt: "Unit 102 - Washer and dryer", unit: "102" },
  // Unit 103
  { src: "/images/rbs-the-view-apts-103-0007.jpg", alt: "Unit 103 - Living area", unit: "103" },
  { src: "/images/rbs-the-view-apts-103-0005.jpg", alt: "Unit 103 - Kitchen-living layout", unit: "103" },
  { src: "/images/rbs-the-view-apts-103-0009.jpg", alt: "Unit 103 - Kitchen with washer/dryer", unit: "103" },
  { src: "/images/rbs-the-view-apts-103-0002.jpg", alt: "Unit 103 - Kitchen", unit: "103" },
  { src: "/images/rbs-the-view-apts-103-0003.jpg", alt: "Unit 103 - Barn door", unit: "103" },
  { src: "/images/rbs-the-view-apts-103-0004.jpg", alt: "Unit 103 - Bathroom", unit: "103" },
  // Unit 104
  { src: "/images/unit-104/kitchen-living.jpg", alt: "Unit 104 - Kitchen and living", unit: "104" },
  { src: "/images/unit-104/kitchen-detail.jpg", alt: "Unit 104 - Kitchen detail", unit: "104" },
  { src: "/images/unit-104/bedroom-1.jpg", alt: "Unit 104 - Bedroom", unit: "104" },
  { src: "/images/unit-104/bedroom-2.jpg", alt: "Unit 104 - Bedroom with closet", unit: "104" },
  { src: "/images/unit-104/bedroom-3.jpg", alt: "Unit 104 - Third bedroom", unit: "104" },
  { src: "/images/unit-104/bedroom-4.jpg", alt: "Unit 104 - Bedroom with HVAC", unit: "104" },
  { src: "/images/unit-104/bathroom-double-sink.jpg", alt: "Unit 104 - Double-sink bathroom", unit: "104" },
  { src: "/images/unit-104/bathroom-single.jpg", alt: "Unit 104 - Bathroom", unit: "104" },
  { src: "/images/unit-104/washer-dryer.jpg", alt: "Unit 104 - Washer and dryer", unit: "104" },
  // Unit 201
  { src: "/images/unit-201/kitchen-living-1.jpg", alt: "Unit 201 - Kitchen with vaulted ceilings", unit: "201" },
  { src: "/images/unit-201/kitchen-living-2.jpg", alt: "Unit 201 - Kitchen and chandelier", unit: "201" },
  { src: "/images/unit-201/kitchen-3.jpg", alt: "Unit 201 - Kitchen with island", unit: "201" },
  { src: "/images/unit-201/kitchen-4.jpg", alt: "Unit 201 - Kitchen appliances", unit: "201" },
  { src: "/images/unit-201/kitchen-5.jpg", alt: "Unit 201 - Cathedral ceilings", unit: "201" },
  { src: "/images/unit-201/bedroom-1.jpg", alt: "Unit 201 - Bedroom with vaulted ceiling", unit: "201" },
  { src: "/images/unit-201/bedroom-2.jpg", alt: "Unit 201 - Bedroom", unit: "201" },
  { src: "/images/unit-201/bedroom-3.jpg", alt: "Unit 201 - Spacious bedroom", unit: "201" },
  { src: "/images/unit-201/bathroom-1.jpg", alt: "Unit 201 - Bathroom with double vanity", unit: "201" },
  { src: "/images/unit-201/bathroom-2.jpg", alt: "Unit 201 - Modern bathroom", unit: "201" },
]

// Video tours from all units
const videoTours = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/101%20-%20HD%201080p-EPIz6soAuHDW1p7CeBatSFLgJDGvR1.mp4", unit: "Unit 101", thumbnail: "/images/1-20-rbs-the-20view-20apts-101-0006.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/102-Kkk7eAZEsoLNzFJZTLFFolMvYVbvZk.mp4", unit: "Unit 102", thumbnail: "/images/rbs-the-20view-20apts-102-0003.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/103%20-%20HD%201080p-vkzNefhSjajl9iAfRiMHRFGh90cSn6.mp4", unit: "Unit 103", thumbnail: "/images/rbs-the-view-apts-103-0005.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/104-E8havKL5qKrN9uaUpDF94mO55NNqgG.mp4", unit: "Unit 104", thumbnail: "/images/unit-104/kitchen-living.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/201-G2RzKP5cb7vlujwjpGEy1REyKRkMol.mp4", unit: "Unit 201", thumbnail: "/images/unit-201/kitchen-living-1.jpg" },
]

// Amenity images
const amenityImages = [
  { src: "/images/amenities/back-entrance-2.jpg", alt: "Building back entrance with deck stairs" },
  { src: "/images/amenities/exterior-aerial-fall.jpg", alt: "Aerial view of building with fall foliage" },
  { src: "/images/amenities/aerial-neighborhood.jpg", alt: "Aerial view of neighborhood and nearby shopping" },
  { src: "/images/amenities/back-entrance.jpg", alt: "Building back entrance and walkway" },
  { src: "/images/amenities/aerial-overhead.jpg", alt: "Overhead aerial view of building and parking" },
  { src: "/images/amenities/location-appstate.jpg", alt: "Location showing proximity to App State and AppalCART" },
  { src: "/images/amenities/location-shopping.jpg", alt: "Location showing proximity to Publix and Walmart" },
  { src: "/images/amenities/building-side-view.jpg", alt: "Aerial side view of building with parking" },
]

const tabs: TabType[] = ["ALL", "AMENITIES", "APARTMENTS", "VIDEO TOURS"]

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<TabType>("ALL")
  const tabsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full">
        <Image
          src="/images/gallery-hero.jpg"
          alt="Modern kitchen with white cabinets and stainless steel appliances"
          fill
          className="object-cover grayscale-[30%]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl md:text-8xl font-bold tracking-wider">
            GALLERY
          </h1>
        </div>
      </section>

      {/* Tour Your Home Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            TOUR YOUR <span className="text-[#C75D2C]">HOME</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10">
            The View offers a quiet oasis with mountain views in the heart of Boone—walkable to shops and dining, and minutes from Appalachian State University. Browse spacious apartments, modern amenities, and comfortable living spaces.
          </p>

          {/* Tabs */}
          <div 
            ref={tabsRef}
            className="flex gap-2 md:gap-8 overflow-x-auto pb-2 md:pb-0 md:justify-center scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-4 py-2 text-sm md:text-base font-semibold tracking-wide transition-colors ${
                  activeTab === tab
                    ? "text-black border-b-2 border-[#C75D2C]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Apartments Gallery */}
          {(activeTab === "ALL" || activeTab === "APARTMENTS") && apartmentImages.length > 0 && (
            <div className="mb-12">
              {activeTab === "ALL" && (
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Apartments</h3>
              )}
              <MasonryGallery images={apartmentImages} />
            </div>
          )}

          {/* Video Tours */}
          {(activeTab === "ALL" || activeTab === "VIDEO TOURS") && videoTours.length > 0 && (
            <div className="mb-12">
              {activeTab === "ALL" && (
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Video Tours</h3>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videoTours.map((video, index) => (
                  <div key={index} className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden group">
                    <video
                      src={video.src}
                      poster={video.thumbnail}
                      controls
                      className="w-full h-full object-cover"
                      preload="metadata"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pointer-events-none">
                      <p className="text-white font-semibold">{video.unit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Amenities Gallery */}
          {(activeTab === "ALL" || activeTab === "AMENITIES") && amenityImages.length > 0 && (
            <div className="mb-12">
              {activeTab === "ALL" && (
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Amenities</h3>
              )}
              <MasonryGallery images={amenityImages} />
            </div>
          )}

          {/* Empty state for Amenities tab */}
          {activeTab === "AMENITIES" && amenityImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Amenity photos coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

function MasonryGallery({ images }: { images: { src: string; alt: string }[] }) {
  if (images.length === 0) return null

  // Create a masonry-like layout with featured image
  const featuredImage = images[0]
  const rightColumnImages = images.slice(1, 3)
  const bottomImages = images.slice(3)

  return (
    <div className="space-y-4">
      {/* Top row: Large featured image + 2 stacked images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Featured large image */}
        <div className="md:col-span-2 relative aspect-[4/3] md:aspect-[16/10] rounded-lg overflow-hidden">
          <Image
            src={featuredImage.src || "/placeholder.svg"}
            alt={featuredImage.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Right column - 2 stacked images */}
        <div className="flex flex-col gap-4">
          {rightColumnImages.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row: Grid of remaining images */}
      {bottomImages.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bottomImages.map((image, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
