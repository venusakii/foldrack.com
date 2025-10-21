"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fold-animation")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Background fold effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4F1EB] via-[#E8E5DF] to-[#F4F1EB]" />

      {/* Animated wireframe */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <line x1="500" y1="0" x2="500" y2="1000" stroke="#3B9C9C" strokeWidth="2" className="animate-pulse" />
          <line
            x1="0"
            y1="500"
            x2="1000"
            y2="500"
            stroke="#3B9C9C"
            strokeWidth="2"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-graphite tracking-tight">
            Fold<span className="text-primary">Rack</span>
          </h1>
        </div>

        {/* Main headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-graphite leading-tight text-balance">
          Fold Less. Live More.
        </h2>

        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto text-pretty">
          Smart drying racks that make every inch of space count.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button size="lg" className="gradient-hover text-white px-8 py-6 text-lg group" asChild>
            <Link href="/product">
              Explore the Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
