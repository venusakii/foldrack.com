"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const products = [
  {
    name: "SONGMICS Stainless Steel Gullwing",
    slug: "songmics-stainless-gullwing",
    image: "https://m.media-amazon.com/images/I/81hta+aTWZL._AC_SX679_.jpg",
    price: "$59.99",
    features: ["Stainless steel construction", "Height-adjustable wings", "Foldable design"],
  },
  {
    name: "AUGMIRR Stainless Outdoor Rack",
    slug: "augmirr-stainless-outdoor",
    image: "https://m.media-amazon.com/images/I/71G41uvhCZL._AC_SX679_.jpg",
    price: "$49.99",
    features: ["320 lb capacity", "Windproof hooks", "Length adjustable"],
  },
  {
    name: "Honey-Can-Do Bamboo Rack",
    slug: "honey-can-do-collapsible-bamboo",
    image: "https://m.media-amazon.com/images/I/61YcfFo1r0L._AC_SX679_.jpg",
    price: "$40.77",
    features: ["Eco-friendly bamboo", "25 feet drying space", "Collapsible design"],
  },
]

export default function Collection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".product-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("fold-animation")
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4 text-balance">Collection Highlights</h2>
          <p className="text-xl text-foreground/70 text-pretty">Curated racks that blend form and function</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="product-card group overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 opacity-0"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-graphite text-balance">{product.name}</h3>

                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-sm text-foreground/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full gradient-hover text-white group/btn">
                    <Link href={`/product/${product.slug}`}>
                      View on Amazon
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
