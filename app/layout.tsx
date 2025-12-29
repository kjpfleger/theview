import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./clientLayout"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "The View Apartments - Premium Student Housing in Boone, NC",
  description:
    "Modern apartments close to Appalachian State University. Featuring spacious floor plans, premium amenities, and convenient location in Boone, NC.",
  keywords: "apartments, student housing, Boone NC, Appalachian State University, rental, housing",
  authors: [{ name: "The View Apartments" }],
  creator: "The View Apartments",
  publisher: "The View Apartments",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://theviewapartments.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The View Apartments - Premium Student Housing in Boone, NC",
    description:
      "Modern apartments close to Appalachian State University. Featuring spacious floor plans, premium amenities, and convenient location in Boone, NC.",
    url: "https://theviewapartments.vercel.app",
    siteName: "The View Apartments",
    images: [
      {
        url: "https://theviewapartments.vercel.app/images/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "The View Apartments - Premium Student Housing",
      },
      {
        url: "https://theviewapartments.vercel.app/images/hero-background.jpg",
        width: 1200,
        height: 600,
        alt: "The View Apartments",
      },
      {
        url: "https://theviewapartments.vercel.app/images/hero-background.jpg",
        width: 800,
        height: 600,
        alt: "The View Apartments",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The View Apartments - Premium Student Housing in Boone, NC",
    description:
      "Modern apartments close to Appalachian State University. Featuring spacious floor plans, premium amenities, and convenient location in Boone, NC.",
    images: ["https://theviewapartments.vercel.app/images/hero-background.jpg"],
  },
  other: {
    "apple-mobile-web-app-title": "The View Apartments",
    "application-name": "The View Apartments",
    "msapplication-TileColor": "#ff6600",
    "theme-color": "#ff6600",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className={`${inter.className} font-sans`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
