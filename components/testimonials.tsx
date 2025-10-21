"use client"

import { useEffect, useRef } from "react"

const testimonials = [
  { quote: "This rack turns drying into design.", author: "Sarah M." },
  { quote: "Looks like furniture, folds like paper.", author: "James K." },
  { quote: "Finally, a drying rack I don't hide away.", author: "Emma L." },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const quotes = entry.target.querySelectorAll(".testimonial")
            quotes.forEach((quote, index) => {
              setTimeout(() => {
                quote.classList.add("fold-animation")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Floating cloth textures */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4 text-balance">Everyday Magic</h2>
        </div>

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial opacity-0 text-center space-y-4">
              <p className="text-3xl md:text-4xl font-light text-graphite italic text-balance">"{testimonial.quote}"</p>
              <p className="text-lg text-foreground/60">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
