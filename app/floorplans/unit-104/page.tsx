"use client"

import { UnitDetailTemplate } from "@/components/unit-detail-template"

export default function Unit104Page() {
  const images = [
    {
      src: "/images/unit-104/kitchen-living.jpg",
      type: "image" as const,
      alt: "Kitchen and living area",
    },
    {
      src: "/images/unit-104/kitchen-detail.jpg",
      type: "image" as const,
      alt: "Kitchen with stainless appliances",
    },
    {
      src: "/images/unit-104/bedroom-1.jpg",
      type: "image" as const,
      alt: "Bedroom with large windows",
    },
    {
      src: "/images/unit-104/bedroom-2.jpg",
      type: "image" as const,
      alt: "Bedroom with closet",
    },
    {
      src: "/images/unit-104/bedroom-3.jpg",
      type: "image" as const,
      alt: "Third bedroom",
    },
    {
      src: "/images/unit-104/bedroom-4.jpg",
      type: "image" as const,
      alt: "Bedroom with HVAC",
    },
    {
      src: "/images/unit-104/bathroom-double-sink.jpg",
      type: "image" as const,
      alt: "Bathroom with double-sink vanity",
    },
    {
      src: "/images/unit-104/bathroom-single.jpg",
      type: "image" as const,
      alt: "Bathroom with marble tile",
    },
    {
      src: "/images/unit-104/washer-dryer.jpg",
      type: "image" as const,
      alt: "In-unit washer and dryer",
    },
    {
      src: "/images/unit-104/location-shopping.jpg",
      type: "image" as const,
      alt: "Location near Publix and Walmart",
    },
    {
      src: "/images/unit-104/location-appstate.jpg",
      type: "image" as const,
      alt: "Location near Appalachian State and AppalCART",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/104-E8havKL5qKrN9uaUpDF94mO55NNqgG.mp4",
      type: "video" as const,
      alt: "Unit 104 Video Tour",
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
      src: "/images/unit-104/floorplan.png",
      type: "image" as const,
      alt: "Unit 104 Floor Plan",
    },
  ]

  return (
    <UnitDetailTemplate
      unitName="UNIT 104"
      unitType="Corner 3 Bedrooms, 2 Baths"
      bedrooms={3}
      bathrooms={2}
      squareFeet={700}
      price="$1,050 / bed"
      priceSecondary="$3,300 / unit"
      available="AUGUST 2026"
      description="Corner three-bedroom, two-bath apartment with oversized windows and 10-foot ceilings throughout. Open kitchen and living layout with in-unit washer and dryer and stainless-steel appliances (refrigerator, oven range, microwave, dishwasher). Each bedroom features a spacious closet with built-in mirrors, and one bathroom includes a double-sink vanity so everyone has their own sink. Thermostat-controlled heating and air conditioning in each room. On-site parking included. A few seconds' walk to two AppalCART bus stops for easy access to campus and downtown Boone."
      images={images}
    />
  )
}
