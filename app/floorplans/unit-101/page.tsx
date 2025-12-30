"use client"

import { useEffect } from "react"
import { UnitDetailTemplate } from "@/components/unit-detail-template"

export default function Unit101Page() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const images = [
    { src: "/images/1-20-rbs-the-20view-20apts-101-0006.jpg", type: "image" as const },
    { src: "/images/2-20-20rbs-the-20view-20apts-101-0004.jpg", type: "image" as const },
    { src: "/images/3-20-20rbs-the-20view-20apts-101-0002.jpg", type: "image" as const },
    { src: "/images/4-20-20rbs-the-20view-20apts-101-0001.jpg", type: "image" as const },
    { src: "/images/5-20-20rbs-the-20view-20apts-101-0007.jpg", type: "image" as const },
    { src: "/images/6-20-20rbs-the-20view-20apts-101-0005.jpg", type: "image" as const },
    { src: "/images/7-20-20rbs-the-20view-20apts-101-0008.jpg", type: "image" as const },
    { src: "/images/8-20-20rbs-the-20view-20apts-101-0009.jpg", type: "image" as const },
    { src: "/images/9-20-20copy-20of-20app-20state-20location.jpeg", type: "image" as const },
    { src: "/images/10-20-20the-20view-20callouts-201.jpg", type: "image" as const },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/101%20-%20HD%201080p-EPIz6soAuHDW1p7CeBatSFLgJDGvR1.mp4", type: "video" as const },
    { src: "/images/unit-101-floor-plan.png", type: "image" as const },
  ]

  const keyFeatures = [
    "Open-concept kitchen, dining, and living area",
    "Stainless steel appliances",
    "Quartz countertops",
    "In-unit washer and dryer",
    "Individually controlled HVAC in each room",
    "Spacious closets and storage",
    "Hardwood-style flooring",
    "On-site parking included",
  ]

  return (
    <UnitDetailTemplate
      unitNumber="UNIT 101"
      title="Corner Studio, 1 Bath"
      description="Amazing corner studio, one-bath apartment with oversized windows, 10-foot ceilings and tons of natural light. Two spacious closets, in-unit washer and dryer, and an open kitchen–living layout. The gourmet kitchen includes stainless steel appliances—refrigerator with water and ice, microwave, oven range, and dishwasher. Thermostat-controlled heating and air conditioning throughout. On-site parking included. Located just a few seconds' walk from two AppalCART bus stops."
      bedrooms="Studio"
      bathrooms={1}
      squareFeet={375}
      price="$1,450"
      available="Contact Us"
      images={images}
      keyFeatures={keyFeatures}
    />
  )
}
