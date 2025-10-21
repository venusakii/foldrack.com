"use client"

import { useEffect, useRef, useState } from "react"
import { Recycle, Puzzle, Home, Zap } from "lucide-react"

const advantages = [
  {
    icon: Recycle,
    title: "Eco Air Drying",
    description: "Save energy and reduce your carbon footprint with natural air drying.",
  },
  {
    icon: Puzzle,
    title: "Compact & Foldable",
    description: "Ingenious designs that fold flat when not in use—perfect for small spaces.",
  },
  {
    icon: Home,
    title: "Modern Home Aesthetic",
    description: "Sleek lines and premium materials that complement contemporary interiors.",
  },
  {
    icon: Zap,
    title: "Steel Strength",
    description: "Built to last with rust-resistant materials and heavy-duty construction.",
  },
]

export default function Advantages() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4 text-balance">The FoldRack Advantage</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <div
                key={index}
                className="relative group"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-background to-muted border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl">
                  {/* Reflection effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-graphite text-balance">{advantage.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-pretty">{advantage.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
