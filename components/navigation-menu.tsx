"use client"

import { useState } from "react"
import { X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ]

  return (
    <>
      {/* Menu Button */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="ghost"
        size="icon"
        className="fixed top-6 right-6 z-40 bg-background/80 backdrop-blur-sm hover:bg-accent border border-border"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          {/* Close Button */}
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 hover:bg-accent"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Menu Content */}
          <nav className="flex flex-col items-center justify-center h-full gap-8" onClick={(e) => e.stopPropagation()}>
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl md:text-6xl font-heading text-foreground hover:text-primary transition-all duration-300 hover:scale-110 animate-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: "backwards",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
