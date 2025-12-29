"use client"

import Link from "next/link"
import type { ReactNode } from "react"

interface SharedButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "secondary" | "outline"
  asChild?: boolean
  target?: string
  rel?: string
}

export function SharedButton({
  href,
  onClick,
  children,
  className = "",
  size = "md",
  variant = "primary",
  target,
  rel,
}: SharedButtonProps) {
  // Base styles for all buttons
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 font-sans"

  // Size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-base",
  }

  // Variant styles with proper hover states
  const variantStyles = {
    primary: "bg-orange-600 text-white border-2 border-orange-600 hover:bg-white hover:text-orange-600",
    secondary: "bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-600 hover:text-white",
    outline: "bg-transparent text-orange-600 border-2 border-orange-600 hover:bg-white hover:text-orange-600",
  }

  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  // If it's a link, use Link component
  if (href) {
    return (
      <Link href={href} className={buttonClasses} target={target} rel={rel}>
        {children}
      </Link>
    )
  }

  // Otherwise, render as button
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  )
}
