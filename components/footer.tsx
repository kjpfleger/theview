"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-orange-500 text-white mt-16">
      <div className="container mx-auto px-6 py-12 flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Ready to Make&nbsp;
          <span className="whitespace-nowrap">The View</span>&nbsp;Your Home?
        </h2>

        <a
          href="tel:8282628188"
          className="flex items-center gap-2 text-2xl md:text-3xl font-semibold hover:underline focus-visible:underline"
        >
          <Phone className="size-6" />
          828-262-8188
        </a>

        <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold">
          <a href="/contact">Schedule a Tour</a>
        </Button>
      </div>
    </footer>
  )
}
