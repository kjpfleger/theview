"use client"

import { SharedButton } from "@/components/shared-button"
import { Bed, Bath, Maximize, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import { useState, useRef, useEffect, useCallback } from "react"

interface UnitDetailProps {
  unitName: string
  unitType: string
  bedrooms: number | string
  bathrooms: number
  squareFeet: number
  price: string
  priceSecondary?: string
  available?: string
  description: string
  images: Array<{ src: string; type: "image" | "video"; alt?: string; thumbnail?: string; features?: string[] }>
  keyFeatures?: string[]
}

export function UnitDetailTemplate({
  unitName,
  unitType,
  bedrooms,
  bathrooms,
  squareFeet,
  price,
  priceSecondary,
  available = "Contact Us",
  description,
  images,
  keyFeatures = [],
}: UnitDetailProps) {
  const [current, setCurrent] = useState(0)
  const mobileCarouselRef = useRef<HTMLDivElement>(null)
  const desktopCarouselRef = useRef<HTMLDivElement>(null)
  const thumbnailContainerRef = useRef<HTMLDivElement>(null)
  const mobileSlideRefs = useRef<(HTMLDivElement | null)[]>([])
  const desktopSlideRefs = useRef<(HTMLDivElement | null)[]>([])
  const isScrollingRef = useRef(false)
  const [isVideoTourActive, setIsVideoTourActive] = useState(false)

  const isVideoActive = images[current]?.type === "video"
  const currentFeatures = images[current]?.features || keyFeatures

  const handleMobileScroll = useCallback(() => {
    if (isScrollingRef.current) return

    const carousel = mobileCarouselRef.current
    if (!carousel) return

    const scrollLeft = carousel.scrollLeft
    const slideWidth = carousel.children[0]?.clientWidth || 0
    const gap = 12 // gap-3 = 12px

    const index = Math.round(scrollLeft / (slideWidth + gap))
    const clampedIndex = Math.max(0, Math.min(index, images.length - 1))

    if (clampedIndex !== current) {
      setCurrent(clampedIndex)
    }
  }, [current, images.length])

  const handleDesktopScroll = useCallback(() => {
    if (isScrollingRef.current) return

    const carousel = desktopCarouselRef.current
    if (!carousel) return

    const scrollLeft = carousel.scrollLeft
    const slideWidth = carousel.children[0]?.clientWidth || 0
    const gap = 12 // gap-3 = 12px

    const index = Math.round(scrollLeft / (slideWidth + gap))
    const clampedIndex = Math.max(0, Math.min(index, images.length - 1))

    if (clampedIndex !== current) {
      setCurrent(clampedIndex)
    }
  }, [current, images.length])

  const scrollToMobileSlide = (index: number) => {
    const carousel = mobileCarouselRef.current
    const element = mobileSlideRefs.current[index]
    if (carousel && element) {
      isScrollingRef.current = true
      setCurrent(index)

      const slideWidth = element.offsetWidth
      const gap = 12 // gap-3 = 12px
      const scrollPosition = index * (slideWidth + gap)
      
      carousel.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })

      setTimeout(() => {
        isScrollingRef.current = false
      }, 1000)
    }
  }

  const scrollToDesktopSlide = (index: number) => {
    const carousel = desktopCarouselRef.current
    const element = desktopSlideRefs.current[index]
    if (carousel && element) {
      isScrollingRef.current = true
      setCurrent(index)

      const slideWidth = element.offsetWidth
      const gap = 12 // gap-3 = 12px
      const scrollPosition = index * (slideWidth + gap)
      
      carousel.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })

      setTimeout(() => {
        isScrollingRef.current = false
      }, 1000)
    }
  }

  useEffect(() => {
    const mobileCarousel = mobileCarouselRef.current
    const desktopCarousel = desktopCarouselRef.current

    if (mobileCarousel) {
      mobileCarousel.addEventListener("scroll", handleMobileScroll, { passive: true })
    }

    if (desktopCarousel) {
      desktopCarousel.addEventListener("scroll", handleDesktopScroll, { passive: true })
    }

    return () => {
      if (mobileCarousel) {
        mobileCarousel.removeEventListener("scroll", handleMobileScroll)
      }
      if (desktopCarousel) {
        desktopCarousel.removeEventListener("scroll", handleDesktopScroll)
      }
    }
  }, [handleMobileScroll, handleDesktopScroll])

  useEffect(() => {
    if (thumbnailContainerRef.current) {
      thumbnailContainerRef.current.scrollLeft = current * (thumbnailContainerRef.current.offsetWidth / images.length)
    }
  }, [current])

  const handlePrevious = () => {
    if (current > 0) {
      scrollToMobileSlide(current - 1)
      scrollToDesktopSlide(current - 1)
    }
  }

  const handleNext = () => {
    if (current < images.length - 1) {
      scrollToMobileSlide(current + 1)
      scrollToDesktopSlide(current + 1)
    }
  }

  // Find video and floor plan indices
  const videoIndex = images.findIndex((img) => img.type === "video")
  const floorPlanIndex = images.findIndex(
    (img) => img.alt?.toLowerCase().includes("floor plan") || img.src?.toLowerCase().includes("floor-plan") || img.src?.toLowerCase().includes("floorplan")
  )

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="w-full">
        {/* Mobile Layout - Full Width Stacked */}
        <div className="lg:hidden pt-6">
          {/* Carousel Section - Full Width on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full mb-8"
          >
            <div className="relative w-full px-4">
              <div
                ref={mobileCarouselRef}
                className="overflow-x-scroll scrollbar-hide snap-x snap-mandatory flex gap-3 w-full"
                style={{
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {images.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      mobileSlideRefs.current[index] = el
                    }}
                    className="snap-center flex-shrink-0 w-full"
                  >
<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                                      {item.type === "video" ? (
                                        <video
                                          src={item.src}
                                          controls
                                          className="absolute inset-0 w-full h-full object-cover"
                                          controlsList="nodownload"
                                        >
                                          Your browser does not support the video tag.
                                        </video>
                                      ) : (
                                        <img
                                          src={item.src || "/placeholder.svg"}
                                          alt={item.alt || `${unitName} - Image ${index + 1}`}
                                          className="absolute inset-0 w-full h-full object-cover"
                                        />
                                      )}
                                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Thumbnail strip with fixed Video Tour & Floor Plan on right */}
            <div className="px-4 mt-4">
              <div className="flex gap-2">
                {/* Scrollable thumbnails */}
                <div
                  ref={thumbnailContainerRef}
                  className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 flex-1"
                >
                  {images.map((item, index) => {
                    // Skip video and floor plan as they have fixed buttons on right
                    if (index === videoIndex || index === floorPlanIndex) return null
                    return (
                      <button
                        key={index}
                        onClick={() => scrollToMobileSlide(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                          current === index
                            ? "border-orange-600 ring-2 ring-orange-600 ring-opacity-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <img
                          src={item.thumbnail || item.src || "/placeholder.svg"}
                          alt={item.alt || `Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    )
                  })}
                </div>

                {/* Fixed Video Tour & Floor Plan buttons on right */}
                <div className="flex-shrink-0 flex gap-2">
                  {videoIndex >= 0 && (
                    <button
                      onClick={() => scrollToMobileSlide(videoIndex)}
                      className={`flex flex-col items-center justify-center w-20 h-20 rounded-md border-2 transition-all bg-white ${
                        current === videoIndex
                          ? "border-orange-600 ring-2 ring-orange-600 ring-opacity-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      <span className="text-[10px] font-medium leading-tight text-center">VIDEO<br/>TOUR</span>
                    </button>
                  )}
                  {floorPlanIndex >= 0 && (
                    <button
                      onClick={() => scrollToMobileSlide(floorPlanIndex)}
                      className={`flex flex-col items-center justify-center w-20 h-20 rounded-md border-2 transition-all bg-white ${
                        current === floorPlanIndex
                          ? "border-orange-600 ring-2 ring-orange-600 ring-opacity-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="3" y1="9" x2="21" y2="9" />
                        <line x1="9" y1="21" x2="9" y2="9" />
                      </svg>
                      <span className="text-[10px] font-medium leading-tight text-center">FLOOR<br/>PLAN</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full px-4"
          >
            <div className="space-y-6">
              {isVideoActive && currentFeatures.length > 0 ? (
                // Video Tour View
                <>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-4">Video Tour</h2>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {currentFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-orange-600 mt-1.5">•</span>
                          <span className="text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                // Regular Unit Details View
                <>
                  {/* Unit Header */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{unitName}</p>
                    <h1 className="text-3xl font-bold mb-4 text-balance">{unitType}</h1>
                  </div>

                  {/* Unit Stats */}
                  <div className="flex items-center gap-6 py-4 border-y border-gray-200 mb-6">
                    <div className="flex items-center gap-2">
                      <Bed className="h-5 w-5 text-orange-600" />
                      <div className="flex flex-col">
                        <span className="text-xl font-bold">{bedrooms}</span>
                        <span className="text-xs text-gray-600 uppercase">
                          {bedrooms === "Studio" || bedrooms === 1 ? "Bedroom" : "Bedrooms"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-5 w-5 text-orange-600" />
                      <div className="flex flex-col">
                        <span className="text-xl font-bold">{bathrooms}</span>
                        <span className="text-xs text-gray-600 uppercase">
                          {bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize className="h-5 w-5 text-orange-600" />
                      <div className="flex flex-col">
                        <span className="text-xl font-bold">{squareFeet}</span>
                        <span className="text-xs text-gray-600 uppercase">Square Feet</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and Availability */}
                  <div className="flex items-start justify-between gap-6 py-4 border-b border-gray-200">
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase mb-1">Price</p>
                      <p className="text-3xl font-bold">{price}</p>
                      {priceSecondary && <p className="text-3xl font-bold">{priceSecondary}</p>}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase mb-1">Available</p>
                      <p className="text-xl font-bold uppercase">{available}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="py-4">
                    <p className="text-lg text-gray-700 leading-relaxed text-balance">{description}</p>
                  </div>

                  {/* Video Tour Section */}
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <h2 className="text-2xl font-bold mb-4">VIDEO TOUR</h2>
                    <div className="aspect-video w-full">
                      <video
                        controls
                        className="w-full h-full rounded-lg"
                        src={images.find((img) => img.type === "video")?.src}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </>
              )}

              <div className="w-full mt-6 mb-12">
                <SharedButton
                  href="https://docs.google.com/forms/d/e/1FAIpQLSekcj-ZKxZZ8ExLAw3by93i0y81oIp2p3lRoThEAJtWIdBvEw/viewform"
                  target="_blank"
                  size="lg"
                  className="w-full"
                >
                  APPLY NOW
                </SharedButton>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout - Two Column Grid */}
        <div className="hidden lg:block">
          <div className="container mx-auto px-4 py-16 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
              {/* Left Column: Image Carousel */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full mb-8 lg:mb-0"
              >
                <div className="relative">
                  <div
                    ref={desktopCarouselRef}
                    className="overflow-x-scroll scrollbar-hide snap-x snap-mandatory flex gap-3 px-4"
                    style={{
                      WebkitOverflowScrolling: "touch",
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    {images.map((item, index) => (
                      <div
                        key={index}
                        ref={(el) => {
                          desktopSlideRefs.current[index] = el
                        }}
                        className="snap-center flex-shrink-0 w-full"
                      >
                        <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                          {item.type === "video" ? (
                            <video
                              src={item.src}
                              controls
                              className="absolute inset-0 w-full h-full object-contain"
                              controlsList="nodownload"
                            >
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <img
                              src={item.src || "/placeholder.svg"}
                              alt={item.alt || `${unitName} - Image ${index + 1}`}
                              className="absolute inset-0 w-full h-full object-contain"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handlePrevious}
                    disabled={current === 0}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={current === images.length - 1}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </button>
                </div>

                {/* Thumbnail strip below carousel */}
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {images.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToDesktopSlide(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                        current === index
                          ? "border-orange-600 ring-2 ring-orange-600 ring-opacity-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {item.type === "video" ? (
                        <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
                          <video src={item.src} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={item.thumbnail || item.src || "/placeholder.svg"}
                          alt={item.alt || `Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: Unit Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col space-y-6"
              >
                {isVideoActive && currentFeatures.length > 0 ? (
                  // Video Tour View
                  <>
                    <div>
                      <h2 className="text-4xl font-bold mb-8">Video Tour</h2>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                      <ul className="space-y-4">
                        {currentFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-orange-600 text-xl mt-1">•</span>
                            <span className="text-lg text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  // Regular Unit Details View
                  <>
                    {/* Unit Header */}
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{unitName}</p>
                      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{unitType}</h1>
                    </div>

                    {/* Unit Stats */}
                    <div className="flex items-center gap-8 py-4 border-y border-gray-200">
                      <div className="flex items-center gap-2">
                        <Bed className="h-5 w-5 text-orange-600" />
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold">{bedrooms}</span>
                          <span className="text-xs text-gray-600 uppercase">
                            {bedrooms === "Studio" || bedrooms === 1 ? "Bedroom" : "Bedrooms"}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="h-5 w-5 text-orange-600" />
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold">{bathrooms}</span>
                          <span className="text-xs text-gray-600 uppercase">
                            {bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Maximize className="h-5 w-5 text-orange-600" />
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold">{squareFeet}</span>
                          <span className="text-xs text-gray-600 uppercase">Square Feet</span>
                        </div>
                      </div>
                    </div>

                    {/* Price and Availability */}
                    <div className="flex items-start justify-between gap-6 py-4 border-b border-gray-200">
                      <div>
                        <p className="text-sm font-medium text-gray-500 uppercase mb-1">Price</p>
                        <p className="text-3xl font-bold">{price}</p>
                        {priceSecondary && <p className="text-3xl font-bold">{priceSecondary}</p>}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 uppercase mb-1">Available</p>
                        <p className="text-xl font-bold uppercase">{available}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="py-4">
                      <p className="text-lg text-gray-700 leading-relaxed text-balance">{description}</p>
                    </div>

                    {/* Video Tour Section */}
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <h2 className="text-2xl font-bold mb-4">VIDEO TOUR</h2>
                      <div className="aspect-video w-full">
                        <video
                          controls
                          className="w-full h-full rounded-lg"
                          src={images.find((img) => img.type === "video")?.src}
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </>
                )}

                {/* Apply Button */}
                <div className="pt-6">
                  <SharedButton
                    href="https://docs.google.com/forms/d/e/1FAIpQLSekcj-ZKxZZ8ExLAw3by93i0y81oIp2p3lRoThEAJtWIdBvEw/viewform"
                    target="_blank"
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    APPLY NOW
                  </SharedButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mt-0">
        <Footer />
      </div>
    </div>
  )
}
