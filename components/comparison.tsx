"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const racks = [
  {
    name: "Polder Heavy-Duty",
    height: '42"',
    load: "50 lbs",
    material: "Steel",
    warranty: "5 years",
    image: "/heavy-duty-steel-drying-rack.jpg",
  },
  {
    name: "Cresnel Pro",
    height: '48"',
    load: "65 lbs",
    material: "Stainless Steel",
    warranty: "Lifetime",
    image: "/stainless-steel-professional-rack.jpg",
  },
  {
    name: "Amazon Basics",
    height: '36"',
    load: "35 lbs",
    material: "Coated Steel",
    warranty: "1 year",
    image: "/compact-foldable-rack.jpg",
  },
]

export default function Comparison() {
  const [selectedRacks, setSelectedRacks] = useState([0, 1])

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4 text-balance">
            Interactive Comparison Board
          </h2>
          <p className="text-xl text-foreground/70 text-pretty">
            Compare specs side-by-side to find your perfect match
          </p>
        </div>

        {/* Rack selector */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {racks.map((rack, index) => (
            <button
              key={index}
              onClick={() => {
                if (selectedRacks.includes(index)) {
                  setSelectedRacks(selectedRacks.filter((i) => i !== index))
                } else if (selectedRacks.length < 2) {
                  setSelectedRacks([...selectedRacks, index])
                } else {
                  setSelectedRacks([selectedRacks[1], index])
                }
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedRacks.includes(index)
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-graphite border-2 border-border hover:border-primary"
              }`}
            >
              {rack.name}
            </button>
          ))}
        </div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {selectedRacks.map((rackIndex) => {
            const rack = racks[rackIndex]
            return (
              <Card key={rackIndex} className="overflow-hidden border-2 border-primary">
                <CardContent className="p-0">
                  <img src={rack.image || "/placeholder.svg"} alt={rack.name} className="w-full h-64 object-cover" />
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-graphite">{rack.name}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-foreground/60">Height</p>
                        <p className="text-lg font-semibold text-primary">{rack.height}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">Load Capacity</p>
                        <p className="text-lg font-semibold text-primary">{rack.load}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">Material</p>
                        <p className="text-lg font-semibold text-primary">{rack.material}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">Warranty</p>
                        <p className="text-lg font-semibold text-primary">{rack.warranty}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
