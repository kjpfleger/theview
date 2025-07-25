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
    question: "What utilities are included in the rent?",
    answer:
      "Trash removal is included in your rent. Residents are responsible for water, electricity and internet. Residents are responsible for setting up the appropriate accounts directly with each utility company.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, we provide on-site parking for all residents. Each unit comes with designated parking spaces.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "We have a pet-friendly policy. Please contact us to discuss specific pet policies, fees, and restrictions.",
  },
  {
    question: "What is the lease term?",
    answer:
      "We offer flexible lease terms including 12-month leases. Academic year leases may also be available for students.",
  },
  {
    question: "Is there a security deposit?",
    answer: "Yes, a security deposit is required upon lease signing. The amount varies by unit type and lease terms.",
  },
  {
    question: "What appliances are included?",
    answer:
      "All units come fully equipped with stainless steel appliances including refrigerator, stove, oven, dishwasher, garbage disposal, and in-unit washer and dryer.",
  },
  {
    question: "How close is it to App State?",
    answer:
      "The View is conveniently located just 3-5 minutes drive from Appalachian State University campus. We're also steps away from two AppalCART bus stops for easy campus access.",
  },
  {
    question: "What shopping and dining options are nearby?",
    answer:
      "You'll be within walking distance of Walmart, Publix, and numerous restaurants and coffee shops. Everything you need is right at your doorstep.",
  },
  {
    question: "Are the apartments furnished?",
    answer:
      "Our apartments come unfurnished, giving you the freedom to personalize your space. However, all major appliances are included.",
  },
  {
    question: "What is the application process?",
    answer:
      "Contact us to schedule a tour and discuss available units. We'll guide you through our straightforward application process and answer any questions you may have.",
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
