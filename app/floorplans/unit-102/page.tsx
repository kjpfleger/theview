"use client"

import { UnitDetailTemplate } from "@/components/unit-detail-template"

export default function Unit102Page() {
  return (
    <UnitDetailTemplate
      unitName="UNIT 102"
      unitType="Corner 2 Bedrooms, 2 Baths"
      bedrooms={2}
      bathrooms={2}
      squareFeet={624}
      price="$1,100 / bed"
      priceSecondary="$3,300 / unit"
      description="Corner 2-bedroom, 2-bathroom apartment with an open kitchen, dining, and living area. Spacious closets, in-unit washer dryer, gourmet kitchen with stainless steel appliances (refrigerator with water and ice, microwave, range, and dishwasher).

Each bedroom has a private bathroom, with the primary bedroom featuring an en-suite. Individually controlled heating and air conditioning in each room. Both bathrooms have ample vanity storage and floor to ceiling shelves for linens and toiletries. On-site parking included. Located just a few seconds' walk from two AppalCART bus stops."
      images={[
        {
          src: "/images/rbs-the-20view-20apts-102-0003.jpg",
          alt: "Unit 102 living area and kitchen",
          type: "image",
        },
        {
          src: "/images/rbs-the-20view-20apts-102-0005.jpg",
          alt: "Kitchen with stainless steel appliances",
          type: "image",
        },
        {
          src: "/images/rbs-the-20view-20apts-102-0004.jpg",
          alt: "Open kitchen and dining area",
          type: "image",
        },
        {
          src: "/images/rbs-the-20view-20apts-102-0012.jpg",
          alt: "Bedroom with mirrored closet",
          type: "image",
        },
        {
          src: "/images/rbs-the-20view-20apts-102-0010.jpg",
          alt: "Bedroom with windows",
          type: "image",
        },
        {
          src: "/images/rbs-the-20view-20apts-102-0009.jpg",
          alt: "Spacious bedroom",
          type: "image",
        },
        {
          src: "/images/rbs-the-20view-20apts-102-0013.jpg",
          alt: "Master bedroom",
          type: "image",
        },
        {
          src: "/images/rbs-the-20view-20apts-102-0007.jpg",
          alt: "Primary bathroom with double vanity",
          type: "image",
        },
        {
          src: "/images/rbs-the-20view-20apts-102-0014.jpg",
          alt: "Bathroom with tub and shower",
          type: "image",
        },
        {
          src: "/images/rbs-the-20view-20apts-102-0006.jpg",
          alt: "Bathroom with storage shelves",
          type: "image",
        },
        {
          src: "/images/rbs-the-20view-20apts-102-0015.jpg",
          alt: "Secondary bathroom with tub",
          type: "image",
        },
        {
          src: "/images/rbs-the-20view-20apts-102-0016.jpg",
          alt: "In-unit washer and dryer",
          type: "image",
        },
        {
          src: "/images/app-state-location.jpg",
          alt: "Location near App State University and AppalCART",
          type: "image",
        },
        {
          src: "/images/the-view-location-callouts.jpg",
          alt: "Location near Publix, Walmart, and The View",
          type: "image",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/102-Kkk7eAZEsoLNzFJZTLFFolMvYVbvZk.mp4",
          alt: "Video Tour - Unit 102",
          type: "video",
          thumbnail: "/video-tour-thumbnail.jpg",
        },
        {
          src: "/images/unit-102-floorplan.png",
          alt: "Unit 102 Floor Plan",
          type: "image",
        },
      ]}
    />
  )
}
