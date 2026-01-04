"use client"

import { UnitDetailTemplate } from "@/components/unit-detail-template"

export default function Unit103Page() {
  const keyFeatures = [
    "Open-concept kitchen, dining, and living area",
    "Stainless steel appliances",
    "Quartz countertops",
    "In-unit washer and dryer",
    "Individually controlled HVAC in each room",
    "Spacious closets and storage",
    "Hardwood-style flooring",
    "On-site parking included",
    "Double-sink vanities (3-bedroom units only)",
  ]

  return (
    <UnitDetailTemplate
      unitName="UNIT 103"
      unitType="Corner Studio, One Bath With Patio"
      bedrooms="Studio"
      bathrooms={1}
      squareFeet={340}
      price="$1,450"
      available="AUGUST 2026"
      description="Rare corner studio with a private patio, oversized windows, and 10-foot ceilings. Open kitchen-living layout with stainless steel appliances, in-unit washer and dryer, and three spacious closets. Thermostat-controlled heating and air conditioning. On-site parking included. Steps from two AppalCART bus stops and walkable to Publix, Walmart, and nearby shopping."
      keyFeatures={keyFeatures}
      images={[
        {
          src: "/images/rbs-the-view-apts-103-0007.jpg",
          alt: "Unit 103 main living area with barn door and closets",
          type: "image",
        },
        {
          src: "/images/rbs-the-view-apts-103-0005.jpg",
          alt: "Open kitchen-living layout with oversized windows",
          type: "image",
        },
        {
          src: "/images/rbs-the-view-apts-103-0009.jpg",
          alt: "Kitchen with washer/dryer and stainless steel appliances",
          type: "image",
        },
        {
          src: "/images/rbs-the-view-apts-103-0002.jpg",
          alt: "Kitchen with window view and modern cabinetry",
          type: "image",
        },
        {
          src: "/images/rbs-the-view-apts-103-0003.jpg",
          alt: "Barn door to washer/dryer and bathroom entrance",
          type: "image",
        },
        {
          src: "/images/rbs-the-view-apts-103-0004.jpg",
          alt: "Bathroom with marble-look tile",
          type: "image",
        },
        {
          src: "/images/the-view-location-callouts.jpg",
          alt: "Location - Near Publix, Walmart, and AppalCART",
          type: "image",
        },
        {
          src: "/images/app-state-location.jpg",
          alt: "Location - 1.3 miles from App State",
          type: "image",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/103%20-%20HD%201080p-vkzNefhSjajl9iAfRiMHRFGh90cSn6.mp4",
          alt: "Video Tour - Unit 103",
          type: "video",
          thumbnail: "/images/rbs-the-view-apts-103-0005.jpg",
        },
        {
          src: "/images/unit-103-floorplan.png",
          alt: "Unit 103 Floor Plan",
          type: "image",
        },
      ]}
    />
  )
}
