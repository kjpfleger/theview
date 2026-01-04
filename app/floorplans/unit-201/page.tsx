"use client"

import { UnitDetailTemplate } from "@/components/unit-detail-template"

export default function Unit201Page() {
  const images = [
    {
      src: "/images/unit-201/kitchen-living-1.jpg",
      type: "image" as const,
      alt: "Kitchen and living area with vaulted ceilings",
    },
    {
      src: "/images/unit-201/kitchen-living-2.jpg",
      type: "image" as const,
      alt: "Kitchen with high ceilings and chandelier",
    },
    {
      src: "/images/unit-201/kitchen-3.jpg",
      type: "image" as const,
      alt: "Kitchen with stainless appliances and island",
    },
    {
      src: "/images/unit-201/kitchen-4.jpg",
      type: "image" as const,
      alt: "Kitchen with washer/dryer and appliances",
    },
    {
      src: "/images/unit-201/kitchen-5.jpg",
      type: "image" as const,
      alt: "Kitchen with cathedral ceilings",
    },
    {
      src: "/images/unit-201/bedroom-1.jpg",
      type: "image" as const,
      alt: "Bedroom with vaulted ceilings and HVAC",
    },
    {
      src: "/images/unit-201/bedroom-2.jpg",
      type: "image" as const,
      alt: "Bedroom with individual climate control",
    },
    {
      src: "/images/unit-201/bedroom-3.jpg",
      type: "image" as const,
      alt: "Spacious bedroom with hardwood floors",
    },
    {
      src: "/images/unit-201/bathroom-1.jpg",
      type: "image" as const,
      alt: "Bathroom with double-sink vanity and tiled shower",
    },
    {
      src: "/images/unit-201/bathroom-2.jpg",
      type: "image" as const,
      alt: "Modern bathroom with double vanity",
    },
    {
      src: "/images/unit-201/location-appstate.jpg",
      type: "image" as const,
      alt: "Location near Appalachian State University and AppalCART",
    },
    {
      src: "/images/unit-201/location-shopping.jpg",
      type: "image" as const,
      alt: "Location near Walmart and Publix shopping",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/201-G2RzKP5cb7vlujwjpGEy1REyKRkMol.mp4",
      type: "video" as const,
      alt: "Unit 201 Video Tour",
      features: [
        "Open-concept kitchen, dining, and living area",
        "Stainless steel appliances",
        "Quartz countertops",
        "In-unit washer and dryer",
        "Individually controlled HVAC in each room",
        "Spacious closets and storage",
        "Hardwood-style flooring",
        "On-site parking included",
        "Double-sink vanities (3-bedroom units only)",
      ],
    },
    {
      src: "/images/unit-201/floor-plan.png",
      type: "image" as const,
      alt: "Unit 201 Floor Plan",
    },
  ]

  return (
    <UnitDetailTemplate
      unitName="UNIT 201"
      unitType="3 Bedrooms, 2 Baths, Penthouse"
      bedrooms={3}
      bathrooms={2}
      squareFeet={1200}
      price="$1,100 / bed"
      priceSecondary="$3,300 / unit"
      available="Contact Us"
      description="Top-floor 3-bedroom, 2-bathroom penthouse apartment with 10–20 ft ceilings, oversized windows, and an open kitchen-living layout. Gourmet kitchen with stainless steel appliances, spacious bedroom closets, double-sink vanities, tiled showers, and in-unit washer/dryer. Individually controlled heating and air conditioning in every room. On-site parking. Seconds from two AppalCART bus stops and walkable to Walmart and Publix."
      images={images}
    />
  )
}
