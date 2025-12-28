"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white w-full overflow-x-hidden">
      <div className="container mx-auto px-4 text-center max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Make The View Your Home?</h2>
          <p className="text-lg md:text-xl mb-8 text-orange-100 max-w-2xl mx-auto">Contact us today.</p>
          <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl font-semibold">
            <Phone className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
            <span>Call (828) 414-1040</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
