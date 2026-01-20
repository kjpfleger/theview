"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"

const faqs = [
  {
    question: "How close is it to Appalachian State University?",
    answer:
      "A few seconds' walk to two AppalCART bus stops and a short 3–5 minute drive to Appalachian State University's campus.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes. On-site parking is included for all residents. Parking permits are provided at move-in.",
  },
  {
    question: "What utilities are included in the rent?",
    answer:
      "Trash removal is included. Residents are responsible for water, electricity, and internet. The building is brand new and energy efficient, so utility costs are typically low. Residents set up accounts directly with each utility provider.",
  },
  {
    question: "What appliances are included?",
    answer:
      "All units include stainless steel appliances: refrigerator, stove, oven, dishwasher, microwave, and an in-unit washer and dryer.",
  },
  {
    question: "Are the apartments furnished?",
    answer:
      "No. Apartments are unfurnished, allowing residents to personalize their space. All major appliances are included.",
  },
  {
    question: "Are pets allowed?",
    answer: "No.",
  },
  {
    question: "What is the lease term?",
    answer:
      "Standard leases are 12 months. Leases typically begin in late July or early August. Contact us for flexibility on move-in dates.",
  },
  {
    question: "Is there a security deposit?",
    answer:
      "Yes. A security deposit is required at lease execution. Amounts vary by unit type and lease terms.",
  },
  {
    question: "What shopping and dining options are nearby?",
    answer:
      "Walkable to Walmart, Publix, Food Lion, and a variety of restaurants and coffee shops.",
  },
  {
    question: "Do you offer tours?",
    answer:
      "Yes. Each unit has a dedicated page with photos, floor plans, and a video tour.",
  },
  {
    question: "What is the application process?",
    answer:
      "Submit an online application. Our team will follow up with next steps. Proof of income equal to three times the monthly rent is required, or a lease guarantor if income requirements are not met. Contact us with any questions.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto">
              Find answers to common questions about The View Apartments
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      

      {/* Footer */}
      <Footer />
    </div>
  )
}
